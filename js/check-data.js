/*
 * OPTIONAL helper. It checks your data files for mistakes and prints a
 * message in the browser Console (press F12) if it finds any.
 * It changes nothing on the page. You can delete this file and its
 * <script> line in index.html at any time.
 */
(function () {
  "use strict";
  var movies = (window.MCU_MOVIES || []).concat(window.XMEN_MOVIES || [], window.SONY_MOVIES || [], window.OTHER_MOVIES || []);
  var shows = window.MCU_TV || [];
  var otherShows = window.MCU_TV_OTHER || [];   // "Other Marvel TV": no phase / order numbers needed
  var problems = [];
  var seenId = {};

  function need(item, fields, label) {
    fields.forEach(function (f) {
      if (item[f] === undefined || item[f] === null || item[f] === "") problems.push(label + " is missing '" + f + "'");
    });
  }
  function checkId(id) {
    if (seenId[id]) problems.push("Duplicate id: " + id);
    seenId[id] = true;
  }
  function checkDate(d, label) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d || "")) problems.push("Bad releaseDate (use YYYY-MM-DD) on " + label);
  }
  /* No two items in one group may share an order number. */
  function checkOrders(items, field, label) {
    var seen = {};
    items.forEach(function (i) {
      if (typeof i[field] !== "number") { problems.push(label + ": " + i.id + " has no number for " + field); return; }
      if (seen[i[field]]) problems.push(label + ": " + field + " " + i[field] + " is used by both " + seen[i[field]] + " and " + i.id);
      seen[i[field]] = i.id;
    });
  }

  movies.forEach(function (m) {
    need(m, ["id", "title", "universe", "releaseDate", "releaseOrder", "chronologicalOrder", "phase", "importance", "description", "poster"], "Movie " + (m.id || m.title));
    checkId(m.id);
    checkDate(m.releaseDate, m.id);
  });

  var seasons = [];
  shows.forEach(function (s) {
    need(s, ["id", "title", "universe", "category", "description", "poster", "seasons"], "Show " + (s.id || s.title));
    checkId(s.id);
    (s.seasons || []).forEach(function (se) {
      need(se, ["id", "season", "phase", "releaseDate", "releaseOrder", "chronologicalOrder", "episodeCount", "episodes"], "Season " + se.id);
      checkId(se.id);
      checkDate(se.releaseDate, se.id);
      seasons.push(se);
      (se.episodes || []).forEach(function (ep) { checkId(ep.id); });
      if (se.episodes && se.episodes.length && se.episodes.length !== se.episodeCount) {
        problems.push("Season " + se.id + " lists " + se.episodes.length + " episodes but episodeCount is " + se.episodeCount);
      }
    });
  });

  otherShows.forEach(function (s) {
    need(s, ["id", "title", "universe", "category", "description", "poster", "seasons"], "Other show " + (s.id || s.title));
    checkId(s.id);
    (s.seasons || []).forEach(function (se) {
      need(se, ["id", "season", "releaseDate", "episodeCount", "episodes"], "Season " + se.id);
      checkId(se.id);
      checkDate(se.releaseDate, se.id);
      (se.episodes || []).forEach(function (ep) { checkId(ep.id); });
      if (se.episodes && se.episodes.length && se.episodes.length !== se.episodeCount) {
        problems.push("Season " + se.id + " lists " + se.episodes.length + " episodes but episodeCount is " + se.episodeCount);
      }
    });
  });

  /* MCU movies and TV seasons share one set of order numbers. X-Men has its own. */
  var mcu = movies.filter(function (m) { return m.universe !== "X-Men" && m.universe !== "sony" && m.universe !== "other"; });
  var sony = movies.filter(function (m) { return m.universe === "sony"; });
  var xmen = movies.filter(function (m) { return m.universe === "X-Men"; });
  checkOrders(mcu.concat(seasons), "releaseOrder", "MCU + TV");
  checkOrders(mcu.concat(seasons), "chronologicalOrder", "MCU + TV");
  checkOrders(xmen, "releaseOrder", "X-Men");
  checkOrders(xmen, "chronologicalOrder", "X-Men");
  checkOrders(sony, "releaseOrder", "Sony");
  checkOrders(sony, "chronologicalOrder", "Sony");
  var other = movies.filter(function (m) { return m.universe === "other"; });
  checkOrders(other, "releaseOrder", "Other");
  checkOrders(other, "chronologicalOrder", "Other");

  /* ---- "watchBefore" checks: ids must exist, and a title should not ask you to watch something later first ---- */
  var byId = {};
  function scale(rec) { return rec.universe === "X-Men" ? "xmen" : rec.universe === "sony" ? "sony" : rec.universe === "other" ? "other" : "mcu"; }
  movies.forEach(function (m) { byId[m.id] = { rec: m, scale: scale(m), release: m.releaseOrder, chronological: m.chronologicalOrder }; });
  shows.forEach(function (s) {
    var se = s.seasons || [];
    byId[s.id] = { rec: s, scale: "mcu",
      release: Math.min.apply(null, se.map(function (x) { return x.releaseOrder; })),
      chronological: Math.min.apply(null, se.map(function (x) { return x.chronologicalOrder; })) };
    se.forEach(function (x) { byId[x.id] = { rec: x, scale: "mcu", release: x.releaseOrder, chronological: x.chronologicalOrder }; });
  });
  otherShows.forEach(function (s) {
    byId[s.id] = { rec: s, scale: "tvother" };
    (s.seasons || []).forEach(function (x) { byId[x.id] = { rec: x, scale: "tvother" }; });
  });
  function checkWatchBefore(owner) {
    var wb = owner.watchBefore;
    if (wb === undefined || wb === null) return;
    var lists = {};
    if (Array.isArray(wb)) { lists.release = wb; lists.chronological = wb; }
    else if (typeof wb === "object") { lists.release = wb.release || []; lists.chronological = wb.chronological || []; }
    else { problems.push("watchBefore on " + owner.id + " must be a list like [\"iron-man\"] or { release: [...], chronological: [...] }"); return; }
    var me = byId[owner.id];
    ["release", "chronological"].forEach(function (key) {
      [].concat(lists[key]).forEach(function (id) {
        var t = byId[id];
        if (!t) { problems.push("watchBefore on " + owner.id + " (" + key + ") names an id that does not exist: " + id); return; }
        if (id === owner.id) { problems.push("watchBefore on " + owner.id + " lists itself"); return; }
        if (me && t.scale === me.scale && t.scale === "mcu" && t[key] >= me[key]) {
          problems.push("watchBefore on " + owner.id + " (" + key + " order): " + id + " comes later, not earlier");
        }
        if (me && t.scale !== "mcu" && t.scale === me.scale && t[key] >= me[key]) {
          problems.push("watchBefore on " + owner.id + " (" + key + " order): " + id + " comes later, not earlier");
        }
      });
    });
  }
  movies.forEach(checkWatchBefore);
  shows.forEach(checkWatchBefore);
  otherShows.forEach(checkWatchBefore);

  /* ---- importance: the card tag only shows for these three words ---- */
  movies.concat(shows, otherShows).forEach(function (r) {
    if (["essential", "recommended", "optional"].indexOf(String(r.importance || "").trim().toLowerCase()) === -1) {
      problems.push(r.id + ": importance should be essential, recommended or optional (found '" + (r.importance || "") + "'), so its card has no tag and the importance filter will miss it");
    }
  });

  /* ---- TV extras: status must be one of the three words ---- */
  shows.concat(otherShows).forEach(function (s) {
    if (s.status && ["ongoing", "ended", "upcoming"].indexOf(String(s.status).trim().toLowerCase()) === -1) {
      problems.push("Show " + s.id + ": status should be Ongoing, Ended or Upcoming (found '" + s.status + "')");
    }
  });

  /* ---- Characters, Guides and Phases (js/data-characters.js, data-guides.js, data-phases.js) ---- */
  function checkIdList(owner, label, list) {
    [].concat(list || []).forEach(function (id) {
      if (!byId[id]) problems.push(label + " " + owner + " names an id that does not exist: " + id);
    });
  }
  var charIds = {};
  (window.MCU_CHARACTERS || []).forEach(function (c) {
    if (!c.id) { problems.push("A character has no id (name: " + c.name + ")"); return; }
    if (charIds[c.id]) problems.push("Duplicate character id: " + c.id);
    charIds[c.id] = true;
    if (!c.name) problems.push("Character " + c.id + " has no name");
    if (c.universe !== "mcu" && c.universe !== "X-Men") problems.push("Character " + c.id + ": universe should be \"mcu\" or \"X-Men\"");
    checkIdList(c.id, "Character", c.appearances);
  });
  var guideIds = {};
  (window.MCU_GUIDES || []).forEach(function (g) {
    if (!g.id) { problems.push("A guide has no id (title: " + g.title + ")"); return; }
    if (guideIds[g.id]) problems.push("Duplicate guide id: " + g.id);
    guideIds[g.id] = true;
    if (!g.title) problems.push("Guide " + g.id + " has no title");
    checkIdList(g.id, "Guide", g.items);
  });
  checkIdList("list", "Featured banner (data-featured.js)", window.MCU_FEATURED);
  [].concat(window.MCU_FEATURED || []).forEach(function (id) {
    if (byId[id] && byId[id].rec && byId[id].rec.seasons === undefined && byId[id].rec.season !== undefined) {
      problems.push("Featured banner: " + id + " is a season. Use the show id instead (for example \"loki\")");
    }
  });
  var phaseSeen = {};
  (window.MCU_PHASES || []).forEach(function (p) {
    if (!(Number(p.phase) > 0)) problems.push("A phase block needs a number, like phase: 1");
    if (phaseSeen[p.phase]) problems.push("Phase " + p.phase + " appears twice in data-phases.js");
    phaseSeen[p.phase] = true;
  });

  if (problems.length) console.warn("[Mission Control] Data problems:\n - " + problems.join("\n - "));
})();

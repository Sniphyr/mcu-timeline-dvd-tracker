/*
 * ============================================================================
 *  Marvel Mission Control: draws every page.
 *  You do NOT need to edit this file to add or remove a movie or show.
 *  Edit js/data-movies.js, js/data-movies-xmen.js, js/data-movies-sony.js, js/data-movies-other.js or js/data-tv.js instead
 *  (see README.md).
 *
 *  WHERE THINGS ARE (Ctrl+F the words in quotes):
 *    Home page text ........ "My Marvel Tracker"
 *    Home page buttons ..... "homeCard("
 *    Importance tag on cards "function importanceTag"
 *    Movies page ........... "function renderMovies"  (filters + sort inside it)
 *    Home hero banner ...... "function renderHero"       (featured list: js/data-featured.js)
 *    Theme toggle .......... "function initThemeToggle"
 *    Swipe in the popup .... "function addSwipe"
 *    Surprise me buttons ... "function surpriseButtons"
 *    Characters page ....... "function renderCharacters"  (data: js/data-characters.js)
 *    Phases page ........... "function renderPhases"      (text: js/data-phases.js)
 *    Guides page ........... "function renderGuides"      (data: js/data-guides.js)
 *    Stats page ............ "function renderStats"
 *    TV list page .......... "function renderTV"
 *    One TV show page ...... "function renderShow"
 *    Timeline page ......... "function renderTimeline"
 *    Search page ........... "function renderSearch"
 *    Page switching ........ "function route"
 * ============================================================================
 */
(function () {
  "use strict";

  /* ================================================================= DATA */

  var ALL_MOVIES = (window.MCU_MOVIES || []).concat(window.XMEN_MOVIES || [], window.SONY_MOVIES || [], window.OTHER_MOVIES || []);
  var MOVIES = ALL_MOVIES.filter(function (m) { return m.universe === "mcu"; });
  var XMOVIES = ALL_MOVIES.filter(function (m) { return m.universe === "X-Men"; });
  var SMOVIES = ALL_MOVIES.filter(function (m) { return m.universe === "sony"; });
  var OMOVIES = ALL_MOVIES.filter(function (m) { return m.universe === "other"; });
  var TV = window.MCU_TV || [];

  var app = document.getElementById("app");

  /* The two watch orders. Each one sorts by its own number in the data. */
  var ORDERS = [
    { key: "release",       label: "Release Order",       field: "releaseOrder" },
    { key: "chronological", label: "Chronological Order", field: "chronologicalOrder" }
  ];
  var watchOrder = loadOrder();

  function orderDef(key) {
    return ORDERS.filter(function (o) { return o.key === key; })[0] || ORDERS[0];
  }
  function loadOrder() {
    try {
      var saved = window.localStorage.getItem("marvel-tracker:order");
      if (saved === "chronological") return saved;
    } catch (e) { /* storage blocked: just use release order */ }
    return "release";
  }
  function saveOrder(key) {
    try { window.localStorage.setItem("marvel-tracker:order", key); } catch (e) { /* ignore */ }
  }

  /* Every MCU movie and every TV season as one flat list ("units"). */
  var UNITS = [];
  MOVIES.forEach(function (m) {
    UNITS.push({ kind: "movie", id: m.id, rec: m, phase: m.phase, date: m.releaseDate, movie: m });
  });
  TV.forEach(function (s) {
    s.seasons.forEach(function (se) {
      UNITS.push({ kind: "season", id: se.id, rec: se, phase: se.phase, date: se.releaseDate, show: s, season: se });
    });
  });

  function compare(a, b, field) {
    return a[field] - b[field] || (a.releaseDate < b.releaseDate ? -1 : a.releaseDate > b.releaseDate ? 1 : 0);
  }
  /* MCU movies + TV seasons in the chosen order. kind = "movie" | "season" | nothing (both). */
  function sequence(kind) {
    var field = orderDef(watchOrder).field;
    return UNITS.filter(function (u) { return !kind || u.kind === kind; })
      .sort(function (a, b) { return a.rec[field] - b.rec[field] || (a.date < b.date ? -1 : 1); });
  }
  /* X-Men movies in the chosen order. */
  function xsequence() {
    var field = orderDef(watchOrder).field;
    return XMOVIES.slice().sort(function (a, b) { return compare(a, b, field); });
  }

  /* Sony Spider-Man movies in the chosen order. */
  function ssequence() {
    var field = orderDef(watchOrder).field;
    return SMOVIES.slice().sort(function (a, b) { return compare(a, b, field); });
  }

  /* "Other Marvel movies" in the chosen order. */
  function osequence() {
    var field = orderDef(watchOrder).field;
    return OMOVIES.slice().sort(function (a, b) { return compare(a, b, field); });
  }

  var SONY_ERAS = { 1: "Raimi Trilogy", 2: "The Amazing Spider-Man", 3: "Sony\u2019s Spider-Man Universe", 4: "Spider-Verse" };
  var XMEN_ERAS = { 1: "Original Trilogy", 2: "Wolverine Solo Films", 3: "First Class Prequels", 4: "Deadpool & Modern Era" };

  /* ============================================================== HELPERS */

  /* h("div", {class: "x"}, child, child) builds an HTML element. */
  function h(tag, props) {
    var el = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      var v = props[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "class") el.className = v;
      else if (k === "dataset") Object.assign(el.dataset, v);
      else el.setAttribute(k, v === true ? "" : v);
    });
    for (var i = 2; i < arguments.length; i++) {
      [].concat(arguments[i]).forEach(function (kid) {
        if (kid === null || kid === undefined || kid === false) return;
        el.appendChild(kid.nodeType ? kid : document.createTextNode(String(kid)));
      });
    }
    return el;
  }

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function year(iso) { return (typeof iso === "string" && iso.length >= 4) ? iso.slice(0, 4) : "\u2014"; }
  function fmtDate(iso) {
    if (typeof iso !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(iso)) return "Date unknown";
    return MONTHS[Number(iso.slice(5, 7)) - 1] + " " + Number(iso.slice(8, 10)) + ", " + iso.slice(0, 4);
  }
  function saga(phase) { return phase <= 3 ? "The Infinity Saga" : "The Multiverse Saga"; }
  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function plural(n, one, many) { return n + " " + (n === 1 ? one : many); }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function byNumber(a, b) { return a - b; }

  /* [1, 2] -> "1 · 2" with each piece kept together on one line. */
  function dotted(parts) {
    var out = [];
    parts.forEach(function (t, i) {
      if (i) out.push(" \u00b7 ");
      out.push(h("span", { class: "nw" }, t));
    });
    return out;
  }

  /* [{phase:1,...}, ...] -> [{phase:1, entries:[...]}, ...] */
  function groupByPhase(entries) {
    var map = {};
    entries.forEach(function (e) { (map[e.phase] = map[e.phase] || []).push(e); });
    return Object.keys(map).map(Number).sort(byNumber)
      .map(function (p) { return { phase: p, entries: map[p] }; });
  }

  /* "Phase 4" or "Phases 4 and 5" for a show. */
  function showPhases(show) {
    var seen = {};
    show.seasons.forEach(function (se) { seen[se.phase] = true; });
    var list = Object.keys(seen).map(Number).sort(byNumber);
    if (list.length === 1) return "Phase " + list[0];
    return "Phases " + list.slice(0, -1).join(", ") + " and " + list[list.length - 1];
  }

  function seasonPoster(show, se) {
    if (se.poster) return se.poster;
    var first = Math.min.apply(null, show.seasons.map(function (x) { return x.season; }));
    return se.season === first ? show.poster : null;
  }

  function episodeSeq(se) {
    var field = orderDef(watchOrder).field;
    var eps = (se.episodes || []).slice();
    var all = eps.every(function (e) { return typeof e[field] === "number"; });
    return eps.sort(function (a, b) { return (all ? a[field] - b[field] : 0) || a.episode - b.episode; });
  }

  function seasonHref(show, se) { return "#/tv/" + encodeURIComponent(show.id) + "/" + se.season; }

  /* ========================================================== SHARED PARTS */

  /* A poster image. If the file is missing, a text placeholder shows instead. */
  function posterBlock(item) {
    var poster = h("span", { class: "poster" },
      h("span", { class: "poster-fallback" },
        h("span", { class: "pf-title" }, item.title),
        h("span", { class: "pf-note" }, "Poster not added yet")));
    var img = h("img", { src: item.poster, alt: "", loading: "lazy", decoding: "async", draggable: "false" });
    img.addEventListener("error", function () { poster.classList.add("no-poster"); img.remove(); });
    poster.appendChild(img);
    return poster;
  }

  function seasonThumb(show, se) {
    var label = show.title + " (Season " + se.season + ")";
    var poster = seasonPoster(show, se);
    if (poster) return posterBlock({ title: label, poster: poster });
    return h("span", { class: "poster no-poster" },
      h("span", { class: "poster-fallback" },
        h("span", { class: "pf-title" }, label),
        h("span", { class: "pf-note" }, "Poster not added yet")));
  }

  /* The heading line above a grid: "Phase 1  The Infinity Saga ———— 6 movies" */
  function sectionHeader(title, sub, countText) {
    return h("header", { class: "phase-head" },
      h("h2", { class: "phase-title" }, title),
      h("span", { class: "phase-saga" }, sub),
      h("span", { class: "phase-rule", "aria-hidden": "true" }),
      h("span", { class: "phase-count" }, countText));
  }

  /* The summary box at the top of a page: a list of [big text, small text]. */
  function summaryBox(label, stats) {
    return h("section", { class: "status no-gauge", "aria-label": label },
      h("div", { class: "status-info" },
        stats.map(function (s) {
          return h("div", { class: "stat-line" },
            h("span", { class: "stat-big" }, String(s[0])),
            h("span", { class: "stat-of" }, s[1]));
        })));
  }

  function pageHead(title) {
    return h("header", { class: "dash-head" },
      h("div", { class: "dash-heading" }, h("h1", { class: "dash-title" }, title)),
      h("div", { class: "dash-head-side" },
        h("p", { class: "dash-chip" },
          h("span", { class: "dash-chip-key" }, "Sequence"),
          h("strong", null, orderDef(watchOrder).label))));
  }

  /* ====================================================== WATCH BEFORE */

  /* Finds what an id in a "watchBefore" list points at: a movie, a TV show or one season. */
  function findTarget(id) {
    var m = ALL_MOVIES.filter(function (x) { return x.id === id; })[0];
    if (m) return { kind: "movie", rec: m, title: m.title, group: m.universe === "X-Men" ? 1 : m.universe === "sony" ? 2 : m.universe === "other" ? 3 : 0,
                    order: function (f) { return m[f]; } };
    var sh = TV.filter(function (x) { return x.id === id; })[0];
    if (sh) return { kind: "show", show: sh, title: sh.title, group: 0,
                     order: function (f) { return Math.min.apply(null, sh.seasons.map(function (se) { return se[f]; })); } };
    for (var i = 0; i < TV.length; i++) {
      for (var j = 0; j < TV[i].seasons.length; j++) {
        var se = TV[i].seasons[j];
        if (se.id === id) return { kind: "season", show: TV[i], season: se, title: TV[i].title + " Season " + se.season, group: 0,
                                   order: function (f) { return se[f]; } };
      }
    }
    return null;
  }

  /* The "Watch before" list for one movie or show, for the watch order that is picked right now.
     watchBefore can be a plain list (same titles in both orders) or { release: [...], chronological: [...] }. */
  function watchBeforeTargets(rec) {
    var wb = rec && rec.watchBefore;
    if (!wb) return [];
    var ids = Array.isArray(wb) ? wb : (wb[watchOrder] || []);
    return sortTargets([].concat(ids).map(findTarget).filter(Boolean));
  }

  /* Sorts findTarget() results by the Watch order menu (MCU titles first, then X-Men). */
  function sortTargets(list) {
    var field = orderDef(watchOrder).field;
    return list.sort(function (a, b) { return (a.group - b.group) || (a.order(field) - b.order(field)); });
  }

  /* A card for a findTarget() result: movie -> movie card, show -> show card, season -> season card. */
  function targetCard(t) {
    if (t.kind === "movie") return makeMovieCard(t.rec, true);
    if (t.kind === "season") return makeTVCard(t.show, t.season);
    return makeTVCard(t.show, null);
  }

  /* "Watch before: A, B, C" where every name is clickable. Returns null when there is nothing to show.
     inModal = true when drawn inside the movie popup (links then swap the popup or close it). */
  function watchBeforeNode(rec, inModal) {
    var targets = watchBeforeTargets(rec);
    if (!targets.length) return null;
    var links = h("span", { class: "wb-links" });
    targets.forEach(function (t, i) {
      var el;
      if (t.kind === "movie") {
        el = h("button", { type: "button", class: "wb-link" }, t.title);
        el.addEventListener("click", function () {
          if (inModal) { openMovieModal(t.rec, modalOpener); el.blur(); modal.closeBtn.focus(); }
          else openMovieModal(t.rec, el);
        });
      } else {
        el = h("a", { class: "wb-link", href: t.kind === "season" ? seasonHref(t.show, t.season) : "#/tv/" + encodeURIComponent(t.show.id) }, t.title);
        if (inModal) el.addEventListener("click", function () { closeModal(); });
      }
      if (i) links.appendChild(document.createTextNode(", "));
      links.appendChild(el);
    });
    return h("p", { class: "watch-before" },
      h("span", { class: "wb-label" }, "Watch before:"), " ", links,
      h("span", { class: "wb-order" }, " (" + orderDef(watchOrder).label + ")"));
  }

  /* ========================================================== MOVIE POPUP */

  var modal = null;       // built once, reused for every movie
  var modalOpener = null; // card to give focus back to when the popup closes

  function buildModal() {
    var closeBtn = h("button", { type: "button", class: "modal-close", "aria-label": "Close" }, "\u2715");
    var posterWrap = h("div", { class: "modal-poster" });
    var titleEl = h("h2", { class: "modal-title", id: "movie-modal-title" });
    var chipsEl = h("div", { class: "modal-chips" });
    var trailerEl = h("a", { class: "modal-trailer-btn", target: "_blank", rel: "noopener noreferrer", hidden: true }, "\u25B6 Watch trailer");
    var metaList = h("dl", { class: "modal-meta" });
    var descEl = h("p", { class: "modal-desc" });
    var extraEl = h("dl", { class: "modal-extra" });
    var watchEl = h("div", { class: "modal-watch", hidden: true });
    var relatedEl = h("div", { class: "modal-related" });
    var prevBtn = h("button", { type: "button", class: "modal-nav-btn" }, "\u2039 Previous");
    var nextBtn = h("button", { type: "button", class: "modal-nav-btn" }, "Next \u203A");
    var swipeHint = h("span", { class: "swipe-hint", "aria-hidden": "true" }, "\u2194 Swipe");
    var navEl = h("div", { class: "modal-nav" }, prevBtn, swipeHint, nextBtn);
    var panel = h("div", { class: "modal", role: "dialog", "aria-modal": "true", "aria-labelledby": "movie-modal-title" },
      closeBtn, posterWrap, h("div", { class: "modal-body" }, titleEl, chipsEl, trailerEl, metaList, descEl, extraEl, watchEl, relatedEl), navEl);
    var overlay = h("div", { class: "modal-overlay", hidden: true }, panel);

    function onKeydown(e) {
      if (e.key === "Escape") { e.preventDefault(); closeModal(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); stepMovie(-1); }
      else if (e.key === "ArrowRight") { e.preventDefault(); stepMovie(1); }
      else if (e.key === "Tab") { // keep focus inside the popup: cycle through its visible buttons and links
        e.preventDefault();
        var items = [].filter.call(panel.querySelectorAll("button, a[href]"), function (el) { return !el.disabled && !el.closest("[hidden]"); });
        var next = items.indexOf(document.activeElement) + (e.shiftKey ? -1 : 1);
        items[(next + items.length) % items.length].focus();
      }
    }
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) closeModal(); });
    closeBtn.addEventListener("click", closeModal);
    prevBtn.addEventListener("click", function () { stepMovie(-1); });
    nextBtn.addEventListener("click", function () { stepMovie(1); });
    /* Swipe left = next movie, swipe right = previous movie (touch screens) */
    addSwipe(panel, function () { stepMovie(1); }, function () { stepMovie(-1); });
    document.body.appendChild(overlay);
    return { overlay: overlay, posterWrap: posterWrap, titleEl: titleEl, chipsEl: chipsEl, trailerEl: trailerEl,
             metaList: metaList, descEl: descEl, extraEl: extraEl, watchEl: watchEl, relatedEl: relatedEl,
             prevBtn: prevBtn, nextBtn: nextBtn, panel: panel, closeBtn: closeBtn, onKeydown: onKeydown };
  }

  function metaRow(label, value) {
    return h("div", { class: "modal-meta-row" }, h("dt", null, label), h("dd", null, value));
  }

  /* 126 -> "2h 6m" */
  function fmtRuntime(min) {
    var hrs = Math.floor(min / 60), mins = min % 60;
    return (hrs ? hrs + "h" : "") + (hrs && mins ? " " : "") + (mins || !hrs ? mins + "m" : "");
  }

  var modalMovie = null; // the movie the popup is showing right now

  /* Previous / next movie in the current watch order: MCU stays in MCU, X-Men in X-Men. */
  function neighbours(m) {
    var list = m.universe === "X-Men" ? xsequence() : m.universe === "sony" ? ssequence() : m.universe === "other" ? osequence() : sequence("movie").map(function (u) { return u.movie; });
    var i = list.indexOf(m);
    return { prev: i > 0 ? list[i - 1] : null, next: i >= 0 && i < list.length - 1 ? list[i + 1] : null };
  }

  /* Swipe detection for touch screens. Calls onLeft() after a swipe to the left,
     onRight() after a swipe to the right. Ignores slow drags and mostly-vertical
     movements, so scrolling up and down never counts as a swipe. */
  function addSwipe(el, onLeft, onRight) {
    var startX = 0, startY = 0, startTime = 0, tracking = false;
    el.addEventListener("touchstart", function (e) {
      tracking = e.touches.length === 1; // ignore pinch and multi-finger touches
      if (!tracking) return;
      startX = e.touches[0].clientX; startY = e.touches[0].clientY; startTime = Date.now();
    }, { passive: true });
    el.addEventListener("touchend", function (e) {
      if (!tracking) return;
      tracking = false;
      var dx = e.changedTouches[0].clientX - startX, dy = e.changedTouches[0].clientY - startY;
      if (Date.now() - startTime > 700) return;                       // too slow: a drag, not a swipe
      if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return; // too short, or mostly vertical
      if (dx < 0) onLeft(); else onRight();
    }, { passive: true });
    el.addEventListener("touchcancel", function () { tracking = false; }, { passive: true });
  }

  function stepMovie(dir) {
    var n = neighbours(modalMovie), target = dir < 0 ? n.prev : n.next;
    if (!target) return;
    var btn = dir < 0 ? modal.prevBtn : modal.nextBtn;
    openMovieModal(target, modalOpener);
    if (!btn.disabled) btn.focus(); // keep the keyboard on the arrow that was used
    /* a short slide-in so you can see the popup changed (turned off by "reduce motion") */
    modal.panel.classList.remove("slide-next", "slide-prev");
    void modal.panel.offsetWidth; // restart the animation
    modal.panel.classList.add(dir < 0 ? "slide-prev" : "slide-next");
  }

  function openMovieModal(m, opener) {
    if (!modal) modal = buildModal();
    modalOpener = opener || null;
    modalMovie = m;
    modal.panel.scrollTop = 0;
    var nb = neighbours(m);
    modal.prevBtn.disabled = !nb.prev;
    modal.nextBtn.disabled = !nb.next;
    modal.prevBtn.title = nb.prev ? nb.prev.title : "";
    modal.nextBtn.title = nb.next ? nb.next.title : "";
    modal.posterWrap.replaceChildren(posterBlock(m));
    modal.titleEl.textContent = m.title;
    modal.metaList.replaceChildren(
      metaRow("Release date", fmtDate(m.releaseDate)),
      m.universe === "other" ? metaRow("Group", m.group || "Other Marvel films") : metaRow("Phase", "Phase " + m.phase),
      metaRow("Universe", m.universe.toUpperCase()),
      metaRow("Importance", capitalize(m.importance)));
    modal.descEl.textContent = m.description;

    /* Optional extra info: each piece is skipped completely when its field is empty or missing. */
    var chips = [];
    if (typeof m.runtime === "number" && m.runtime > 0) chips.push(fmtRuntime(m.runtime));
    if (m.imdb) chips.push("IMDb " + Number(m.imdb).toFixed(1));
    if (m.boxOffice) chips.push("Box office " + m.boxOffice);
    modal.chipsEl.replaceChildren.apply(modal.chipsEl, chips.map(function (c) { return h("span", { class: "modal-chip" }, c); }));
    modal.chipsEl.hidden = !chips.length;

    var trailerOk = /^https?:\/\//i.test(m.trailer || "");
    modal.trailerEl.hidden = !trailerOk;
    if (trailerOk) modal.trailerEl.href = m.trailer; else modal.trailerEl.removeAttribute("href");

    var rows = [["Director", m.director],
                ["Cast", [].concat(m.cast || []).join(", ")],
                ["Where to watch", m.whereToWatch],
                ["DVD", m.dvdNumber],
                ["Post-credits", m.postCredits]]
      .filter(function (r) { return r[1]; })
      .map(function (r) { return metaRow(r[0], r[1]); });
    modal.extraEl.replaceChildren.apply(modal.extraEl, rows);
    modal.extraEl.hidden = !rows.length;

    /* Watch before: depends on the Watch order menu. Hidden when the movie has none for that order. */
    var wbNode = watchBeforeNode(m, true);
    modal.watchEl.replaceChildren.apply(modal.watchEl, wbNode ? [wbNode] : []);
    modal.watchEl.hidden = !wbNode;

    /* Related: "Part of: <series>" plus buttons that open the related movies. Hidden if both are empty. */
    var relatedMovies = [].concat(m.related || []).map(function (id) {
      return ALL_MOVIES.filter(function (x) { return x.id === id; })[0];
    }).filter(Boolean);
    var relKids = [];
    if (m.series) relKids.push(h("p", { class: "modal-series" }, "Part of: ", h("strong", null, m.series)));
    if (relatedMovies.length) {
      relKids.push(h("div", { class: "modal-related-list" }, relatedMovies.map(function (r) {
        var b = h("button", { type: "button", class: "modal-related-btn" }, r.title);
        b.addEventListener("click", function () { openMovieModal(r, modalOpener); b.blur(); modal.closeBtn.focus(); });
        return b;
      })));
    }
    modal.relatedEl.replaceChildren.apply(modal.relatedEl, relKids);
    modal.relatedEl.hidden = !relKids.length;

    modal.overlay.hidden = false;
    document.body.classList.add("modal-open");
    document.addEventListener("keydown", modal.onKeydown);
    modal.closeBtn.focus();
  }

  function closeModal() {
    if (!modal || modal.overlay.hidden) return;
    modal.overlay.hidden = true;
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", modal.onKeydown);
    var opener = modalOpener;
    modalOpener = null;
    if (opener && document.contains(opener)) opener.focus();
    else app.focus({ preventScroll: true });
  }

  /* ================================================================ CARDS */

  /* One movie card. Clicking it opens the popup. */
  /* Small coloured tag from the "importance" field: Essential, Recommended or Optional.
     Returns null (so nothing is drawn) if the field is empty or is any other word. */
  var IMPORTANCE = { essential: "Essential", recommended: "Recommended", optional: "Optional" };
  function importanceTag(rec) {
    var key = String((rec && rec.importance) || "").trim().toLowerCase();
    return IMPORTANCE[key] ? h("span", { class: "imp-tag imp-" + key }, IMPORTANCE[key]) : null;
  }

  /* The short description that slides up over a card's poster. It only appears
     on hover (mouse) or keyboard focus; see "poster-peek" in css/styles.css.
     Touch screens never show it, so a tap goes straight to the popup / page. */
  function addPeek(poster, text) {
    if (text) poster.appendChild(h("span", { class: "poster-peek", "aria-hidden": "true" }, text));
    return poster;
  }

  function makeMovieCard(m, withPhase) {
    var card = h("button", {
      type: "button", class: "card", "aria-haspopup": "dialog",
      title: m.title + " (" + fmtDate(m.releaseDate) + ")"
    },
      addPeek(posterBlock(m), m.description),
      h("span", { class: "meta" },
        h("span", { class: "title" }, m.title),
        h("span", { class: "sub" }, withPhase && m.universe !== "other" ? "Phase " + m.phase + " \u00b7 " + year(m.releaseDate) : year(m.releaseDate)),
        importanceTag(m)));
    card.addEventListener("click", function () { openMovieModal(m, card); });
    return card;
  }

  /* One TV card. Pass season = null for a whole show, or a season object for one season. */
  function makeTVCard(show, season) {
    var subs;
    if (season) {
      subs = [h("span", { class: "sub" }, "Season " + season.season),
              h("span", { class: "sub" }, "Phase " + season.phase + " \u00b7 " + year(season.releaseDate))];
    } else {
      var years = show.seasons.map(function (x) { return Number(year(x.releaseDate)); });
      var first = Math.min.apply(null, years), last = Math.max.apply(null, years);
      subs = [h("span", { class: "sub" }, first === last ? String(first) : first + " to " + last),
              h("span", { class: "sub" }, plural(show.seasons.length, "season", "seasons"))];
    }
    return h("a", {
      class: "card", href: season ? seasonHref(show, season) : "#/tv/" + encodeURIComponent(show.id),
      title: show.title + (season ? ", season " + season.season : ""),
      dataset: { show: show.id }
    },
      addPeek(season ? seasonThumb(show, season) : posterBlock(show), show.description),
      h("span", { class: "meta" }, h("span", { class: "title" }, show.title), subs, importanceTag(show)));
  }

  /* ============================================================== DASHBOARD */

  function homeCard(href, icon, name) {
    return h("a", { class: "home-card", href: href },
      h("span", { class: "home-card-icon", "aria-hidden": "true" }, icon),
      h("span", { class: "home-card-title" }, name),
      h("span", { class: "home-card-arrow", "aria-hidden": "true" }, "\u203a"));
  }

  /* Picks a random item from a list, avoiding the one picked last time (when there is a choice). */
  var lastPick = {};
  function randomPick(kind, list) {
    var choices = list.length > 1 ? list.filter(function (x) { return x.id !== lastPick[kind]; }) : list;
    var pick = choices[Math.floor(Math.random() * choices.length)];
    lastPick[kind] = pick.id;
    return pick;
  }

  /*
   * The two "Surprise me" buttons on the home page.
   *   Movie button: opens the popup of a random movie (MCU and X-Men).
   *     To use MCU movies only, change ALL_MOVIES to MOVIES below.
   *   TV button: opens the page of a random TV show.
   * A button is left out if there is nothing to pick from.
   */
  function surpriseButtons() {
    var buttons = [];
    if (ALL_MOVIES.length) {
      var movieBtn = h("button", { type: "button", class: "home-card home-card-btn", "aria-haspopup": "dialog" },
        h("span", { class: "home-card-icon", "aria-hidden": "true" }, "\uD83C\uDFB2"),
        h("span", { class: "home-card-title" }, "Surprise me"),
        h("span", { class: "home-card-note" }, "random movie"));
      movieBtn.addEventListener("click", function () { openMovieModal(randomPick("movie", ALL_MOVIES), movieBtn); });
      buttons.push(movieBtn);
    }
    if (TV.length) {
      var tvBtn = h("button", { type: "button", class: "home-card home-card-btn" },
        h("span", { class: "home-card-icon", "aria-hidden": "true" }, "\uD83C\uDFB2"),
        h("span", { class: "home-card-title" }, "Surprise me"),
        h("span", { class: "home-card-note" }, "random TV show"));
      tvBtn.addEventListener("click", function () {
        window.location.hash = "#/tv/" + encodeURIComponent(randomPick("tv", TV).id);
      });
      buttons.push(tvBtn);
    }
    return buttons.length ? h("div", { class: "home-cards home-surprise" }, buttons) : null;
  }

  /*
   * HOME PAGE. To change the text, edit the two lines with h1 and home-sub.
   * To REMOVE a big button, delete its homeCard(...) line.
   * To ADD one, copy a homeCard(...) line and change the 3 values:
   *   link (#/movies #/tv #/timeline #/search), icon (an emoji), name.
   */
  function renderDashboard() {
    app.replaceChildren(
      h("section", { class: "home" },
        renderHero(),
        h("h1", { class: "dash-title" }, "My Marvel Tracker"),
        h("p", { class: "home-sub" }, "Browse every Marvel movie and show."),
        h("div", { class: "home-cards" },
          homeCard("#/movies", "\uD83C\uDFAC", "Movies"),
          homeCard("#/tv", "\uD83D\uDCFA", "TV Shows"),
          homeCard("#/timeline", "\u23F3", "Timeline"),
          homeCard("#/search", "\uD83D\uDD0D", "Search"),
          homeCard("#/characters", "\uD83E\uDDB8", "Characters"),
          homeCard("#/phases", "\uD83C\uDF0C", "Phases"),
          homeCard("#/guides", "\uD83E\uDDED", "Watch guides"),
          homeCard("#/stats", "\uD83D\uDCCA", "Stats")
        ),
        surpriseButtons()));
  }

  /* ================================================================ MOVIES */

  /* What the filter and sort buttons on the Movies page are set to. These stay
     as you leave and come back. "all" = no filter; sort "default" = follow the Watch order menu. */
  var movieFilter = { phase: "all", importance: "all", sort: "default" };

  /* Sorts a list of movies by release YEAR ("newest" or "oldest" first).
     Movies from the same year keep the order of the Watch order menu. */
  function sortByYear(list, direction) {
    var field = orderDef(watchOrder).field;
    return list.slice().sort(function (a, b) {
      var diff = Number(year(a.releaseDate)) - Number(year(b.releaseDate));
      return (direction === "newest" ? -diff : diff) || (a[field] - b[field]);
    });
  }

  function renderMovies() {
    /* ---- 1. The filter and sort buttons (drawn once; clicking one redraws only the results below them) ---- */
    var phases = {};
    MOVIES.forEach(function (m) { phases[m.phase] = true; });
    var phaseButtons = [{ key: "all", label: "All phases" }].concat(
      Object.keys(phases).map(Number).sort(byNumber).map(function (p) { return { key: String(p), label: "Phase " + p }; }));
    var importanceButtons = [{ key: "all", label: "All importance" }, { key: "essential", label: "Essential" },
                             { key: "recommended", label: "Recommended" }, { key: "optional", label: "Optional" }];
    var sortButtons = [{ key: "default", label: "Watch order" }, { key: "newest", label: "Newest first" }, { key: "oldest", label: "Oldest first" }];

    var rows = [
      filterRow("Filter by phase", phaseButtons,
        function () { return movieFilter.phase; }, function (k) { movieFilter.phase = k; }, update),
      filterRow("Filter by importance", importanceButtons,
        function () { return movieFilter.importance; }, function (k) { movieFilter.importance = k; }, update),
      filterRow("Sort by year", sortButtons,
        function () { return movieFilter.sort; }, function (k) { movieFilter.sort = k; }, update)
    ];
    var results = h("div", { class: "movie-results" });

    /* ---- 2. Draws the movie lists for the current buttons ---- */
    function drawResults() {
      var chrono = watchOrder === "chronological";
      var phaseOn = movieFilter.phase !== "all";
      var yearSorted = movieFilter.sort !== "default";

      /* A movie passes if it matches the importance button (and, for MCU movies, the phase button). */
      function importanceOk(m) { return movieFilter.importance === "all" || m.importance === movieFilter.importance; }

      /* MCU movies come out of sequence() already in the Watch order menu's order. */
      var movies = sequence("movie").map(function (u) { return u.movie; })
        .filter(function (m) { return importanceOk(m) && (!phaseOn || String(m.phase) === movieFilter.phase); });
      /* X-Men "phases" are story eras, not MCU phases, so X-Men movies are hidden while a phase is picked. */
      var xmovies = phaseOn ? [] : xsequence().filter(importanceOk);

      var smovies = phaseOn ? [] : ssequence().filter(importanceOk);

      var omovies = phaseOn ? [] : osequence().filter(importanceOk);

      if (yearSorted) {
        omovies = sortByYear(omovies, movieFilter.sort);
        movies = sortByYear(movies, movieFilter.sort);
        xmovies = sortByYear(xmovies, movieFilter.sort);
        smovies = sortByYear(smovies, movieFilter.sort);
      }

      function grid(list, withPhase) {
        return h("div", { class: "grid" }, list.map(function (m) { return makeMovieCard(m, withPhase); }));
      }

      /* MCU sections */
      var sections = [];
      if (yearSorted) {
        sections = movies.length ? [h("section", { class: "phase" },
          sectionHeader(movieFilter.sort === "newest" ? "Newest first" : "Oldest first", "Sorted by release year", plural(movies.length, "movie", "movies")),
          grid(movies, true))] : [];
      } else if (chrono) {
        sections = movies.length ? [h("section", { class: "phase" },
          sectionHeader("Chronological order", "Marvel\u2019s official MCU timeline", plural(movies.length, "movie", "movies")),
          grid(movies, true))] : [];
      } else {
        sections = groupByPhase(movies.map(function (m) { return { m: m, phase: m.phase }; })).map(function (g) {
          return h("section", { class: "phase" },
            sectionHeader("Phase " + g.phase, saga(g.phase), plural(g.entries.length, "movie", "movies")),
            grid(g.entries.map(function (e) { return e.m; }), false));
        });
      }

      /* Sections for one group (X-Men or Sony): by year, chronological, or by era. */
      function groupSections(list, name, title, eras, chronoNote) {
        if (!list.length) return [];
        var out;
        if (yearSorted) {
          out = [h("section", { class: "phase" },
            sectionHeader(name + " \u2014 " + (movieFilter.sort === "newest" ? "Newest first" : "Oldest first"), "Sorted by release year", plural(list.length, "movie", "movies")),
            grid(list, true))];
        } else if (chrono) {
          out = [h("section", { class: "phase" },
            sectionHeader(name + " \u2014 Chronological order", chronoNote, plural(list.length, "movie", "movies")),
            grid(list, true))];
        } else {
          out = groupByPhase(list.map(function (m) { return { m: m, phase: m.phase }; })).map(function (g) {
            return h("section", { class: "phase" },
              sectionHeader(eras[g.phase] || name, name, plural(g.entries.length, "movie", "movies")),
              grid(g.entries.map(function (e) { return e.m; }), false));
          });
        }
        out.unshift(h("h2", { class: "phase-title", style: "margin-top:12px" }, title));
        return out;
      }
      var xSections = groupSections(xmovies, "X-Men", "X-Men Movies", XMEN_ERAS, "In-universe story order across both timelines");
      var sSections = groupSections(smovies, "Sony Spider-Man", "Sony Spider-Man Movies", SONY_ERAS, "Story order within Sony\u2019s Spider-Man films");

      /* Other Marvel movies: one section per "group" (in the order groups first appear in the data file).
         Year sort = one flat list. */
      function otherSections(list) {
        if (!list.length) return [];
        var out;
        if (yearSorted) {
          out = [h("section", { class: "phase" },
            sectionHeader("Other Marvel \u2014 " + (movieFilter.sort === "newest" ? "Newest first" : "Oldest first"), "Sorted by release year", plural(list.length, "movie", "movies")),
            grid(list, true))];
        } else {
          var names = [];
          OMOVIES.forEach(function (m) { var g = m.group || "Other Marvel films"; if (names.indexOf(g) === -1) names.push(g); });
          out = names.map(function (g) {
            var part = list.filter(function (m) { return (m.group || "Other Marvel films") === g; });
            return part.length ? h("section", { class: "phase" },
              sectionHeader(g, chrono ? "Story order" : "Release order", plural(part.length, "movie", "movies")),
              grid(part, false)) : null;
          }).filter(Boolean);
        }
        out.unshift(h("h2", { class: "phase-title", style: "margin-top:12px" }, "Other Marvel Movies"));
        return out;
      }
      var oSections = otherSections(omovies);

      var stats = [[movies.length, "MCU movies"]];
      if (xmovies.length) stats.push([xmovies.length, "X-Men movies"]);
      if (smovies.length) stats.push([smovies.length, "Sony Spider-Man movies"]);
      if (omovies.length) stats.push([omovies.length, "Other Marvel movies"]);

      var note = (phaseOn && (XMOVIES.length || SMOVIES.length || OMOVIES.length))
        ? h("p", { class: "filter-note" }, "Phases only apply to MCU movies, so X-Men, Sony and Other Marvel movies are hidden while a phase is picked.") : null;
      var nothing = (!movies.length && !xmovies.length && !smovies.length && !omovies.length)
        ? emptyBox("No movies match", "Try a different phase or importance button.") : null;

      /* note and nothing can be null; filter(Boolean) drops them so no "null" text is drawn */
      results.replaceChildren.apply(results, [summaryBox("Movie totals", stats), note, nothing].concat(sections, xSections, sSections, oSections).filter(Boolean));
    }

    /* Runs after any filter or sort button is clicked: update the buttons, then redraw the lists. */
    function update() {
      rows.forEach(function (r) { r.refresh(); });
      drawResults();
    }

    /* ---- 3. Put it on the page ---- */
    app.replaceChildren(
      h("h1", { class: "sr-only" }, "Movies, " + orderDef(watchOrder).label.toLowerCase()),
      h("div", { class: "search-filters movie-filters" }, rows.map(function (r) { return r.el; })),
      results);
    update();
  }

  /* ============================================================ HERO BANNER */

  var HERO_SECONDS = 6;  // how long each featured title stays on screen
  var heroTimer = null;

  /* Stops the automatic slide change (called whenever the page changes). */
  function stopHero() { if (heroTimer) { clearInterval(heroTimer); heroTimer = null; } }

  /* The featured titles: the ids in js/data-featured.js. If that list is empty or
     missing, every Essential MCU movie is used instead. */
  function heroItems() {
    var ids = window.MCU_FEATURED;
    if (!ids || !ids.length) {
      ids = MOVIES.filter(function (m) { return m.importance === "essential"; }).map(function (m) { return m.id; });
    }
    return ids.map(findTarget).filter(function (t) { return t && t.kind !== "season"; });
  }

  /* The big banner on the home page: one featured poster, title and a "View details" button.
     It changes by itself every few seconds. It pauses while the mouse is over it or a
     button inside has focus, while the popup is open, and it does not move at all if the
     device asks for reduced motion. The dots under it pick a title directly. */
  function renderHero() {
    var items = heroItems();
    if (!items.length) return null;

    var index = 0;
    var titleEl = h("h2", { class: "hero-title" });
    var metaEl = h("p", { class: "hero-meta" });
    var descEl = h("p", { class: "hero-desc" });
    var detailsBtn = h("button", { type: "button", class: "hero-btn" }, "View details");
    var posterBox = h("div", { class: "hero-poster" });
    var bgEl = h("div", { class: "hero-bg", "aria-hidden": "true" });
    var slide = h("div", { class: "hero-slide" },
      h("div", { class: "hero-text" }, h("span", { class: "hero-kicker" }, "Featured"), titleEl, metaEl, descEl, detailsBtn),
      posterBox);
    var dots = items.map(function (t, i) {
      var dot = h("button", { type: "button", class: "hero-dot", "aria-label": "Show " + t.title });
      dot.addEventListener("click", function () { show(i, true); });
      return dot;
    });
    var box = h("section", { class: "hero", "aria-label": "Featured" }, bgEl, slide,
      dots.length > 1 ? h("div", { class: "hero-dots" }, dots) : null);

    /* Fills the banner with item number i */
    function fill(i) {
      var t = items[i];
      var rec = t.kind === "movie" ? t.rec : t.show;
      index = i;
      titleEl.textContent = t.title;
      metaEl.textContent = t.kind === "movie"
        ? "Movie \u00b7 " + year(rec.releaseDate) + " \u00b7 Phase " + rec.phase
        : "TV show \u00b7 " + plural(rec.seasons.length, "season", "seasons");
      descEl.textContent = rec.description || "";
      posterBox.replaceChildren(posterBlock({ title: t.title, poster: rec.poster }));
      bgEl.style.backgroundImage = rec.poster ? "url('" + encodeURI(rec.poster) + "')" : "none";
      dots.forEach(function (d, k) { if (k === i) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current"); });
    }

    /* Fades out, swaps the content, fades in */
    function show(i, byUser) {
      if (i === index && !byUser) return;
      slide.classList.add("is-changing");
      setTimeout(function () { fill(i); slide.classList.remove("is-changing"); }, 220);
      if (byUser) startTimer(); // restart the countdown after a manual pick
    }

    detailsBtn.addEventListener("click", function () {
      var t = items[index];
      if (t.kind === "movie") openMovieModal(t.rec, detailsBtn);
      else window.location.hash = "#/tv/" + encodeURIComponent(t.show.id);
    });

    /* Pause only for a real mouse over the banner, or keyboard focus inside it. A finger tap
       must not pause it (on touch screens a tap leaves "hover" and focus behind). */
    var paused = false;
    box.addEventListener("pointerenter", function (e) { if (e.pointerType === "mouse") paused = true; });
    box.addEventListener("pointerleave", function (e) { if (e.pointerType === "mouse") paused = false; });
    box.addEventListener("focusin", function (e) { paused = !!(e.target.matches && e.target.matches(":focus-visible")); });
    box.addEventListener("focusout", function () { paused = false; });
    addSwipe(box, function () { show((index + 1) % items.length, true); },
                  function () { show((index - 1 + items.length) % items.length, true); });

    function startTimer() {
      stopHero();
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (items.length < 2 || reduce) return;
      heroTimer = setInterval(function () {
        if (!document.body.contains(box)) { stopHero(); return; }          // the home page is gone
        if (paused || document.hidden || document.body.classList.contains("modal-open")) return;
        show((index + 1) % items.length, false);
      }, HERO_SECONDS * 1000);
    }

    fill(0);
    startTimer();
    return box;
  }

  /* =============================================================== TV LIST */

  function renderTV() {
    var sections;
    if (watchOrder === "chronological") {
      var seasons = sequence("season");
      sections = [h("section", { class: "phase" },
        sectionHeader("Chronological order", "Marvel\u2019s official MCU timeline", plural(seasons.length, "season", "seasons")),
        h("div", { class: "grid" }, seasons.map(function (u) { return makeTVCard(u.show, u.season); })))];
    } else {
      var entries = TV.map(function (s) {
        var first = s.seasons.slice().sort(function (a, b) { return a.releaseOrder - b.releaseOrder; })[0];
        return { show: s, phase: first.phase, order: first.releaseOrder };
      }).sort(function (a, b) { return a.order - b.order; });
      sections = groupByPhase(entries).map(function (g) {
        return h("section", { class: "phase" },
          sectionHeader("Phase " + g.phase, saga(g.phase), plural(g.entries.length, "show", "shows")),
          h("div", { class: "grid" }, g.entries.map(function (e) { return makeTVCard(e.show, null); })));
      });
    }
    var seasonTotal = TV.reduce(function (n, s) { return n + s.seasons.length; }, 0);

    app.replaceChildren.apply(app, [
      h("h1", { class: "sr-only" }, "TV Shows"),
      summaryBox("TV totals", [[TV.length, "TV shows"], [seasonTotal, "seasons"]])
    ].concat(sections));
  }

  /* ============================================================ ONE TV SHOW */

  var openSeasons = {}; // season id -> true while its episode list is open

  function renderShow(showId) {
    var show = TV.filter(function (s) { return s.id === showId; })[0];
    if (!show) {
      app.replaceChildren(
        h("h1", { class: "sr-only" }, "Show not found"),
        h("a", { class: "back-link", href: "#/tv" }, "\u2039 All TV shows"),
        h("p", { class: "notice" }, "There is no TV show with that address. Pick one from the TV Shows list."));
      return;
    }

    var facts = h("dl", { class: "show-meta" },
      h("div", null, h("dt", null, "Category"), h("dd", null, capitalize(show.category))),
      h("div", null, h("dt", null, "Universe"), h("dd", null, show.universe.toUpperCase())),
      h("div", null, h("dt", null, "Phase"), h("dd", null, showPhases(show))),
      h("div", null, h("dt", null, "Seasons"), h("dd", null, String(show.seasons.length))));

    /* Optional extras: each piece is skipped completely when its field is empty or missing. */
    var STATUS = { ongoing: "Ongoing", ended: "Ended", upcoming: "Upcoming" };
    var statusKey = String(show.status || "").trim().toLowerCase();
    var statusText = STATUS[statusKey] || String(show.status || "").trim();
    var statusTag = statusText ? h("span", { class: "status-tag status-" + (STATUS[statusKey] ? statusKey : "other") }, statusText) : null;

    var trailerOk = /^https?:\/\//i.test(show.trailer || "");
    var trailerBtn = trailerOk
      ? h("a", { class: "modal-trailer-btn", href: show.trailer, target: "_blank", rel: "noopener noreferrer" }, "\u25B6 Watch trailer")
      : null;

    var extraRows = [["Creator", [].concat(show.creator || []).join(", ")],
                     ["Main cast", [].concat(show.cast || []).join(", ")],
                     ["Where to watch", show.whereToWatch]]
      .filter(function (r) { return r[1]; })
      .map(function (r) { return metaRow(r[0], r[1]); });
    var extra = extraRows.length ? h("dl", { class: "modal-extra show-extra" }, extraRows) : null;

    var summary = h("section", { class: "show-head", "aria-label": "About " + show.title },
      h("div", { class: "show-poster" }, posterBlock(show)),
      h("div", { class: "show-info" },
        h("div", { class: "show-title-row" }, h("h1", { class: "show-title" }, show.title), statusTag),
        facts,
        h("p", { class: "modal-desc" }, show.description),
        trailerBtn,
        extra,
        watchBeforeNode(show, false)));

    var list = h("div", { class: "seasons" });
    sequence("season").filter(function (u) { return u.show === show; }).forEach(function (u) {
      var se = u.season;
      var panelId = "season-panel-" + se.id;

      var toggle = h("button", {
        type: "button", class: "season-toggle",
        "aria-expanded": openSeasons[se.id] ? "true" : "false", "aria-controls": panelId
      },
        h("span", { class: "season-thumb" }, seasonThumb(show, se)),
        h("span", { class: "season-info" },
          h("span", { class: "season-name" }, "Season " + se.season),
          h("span", { class: "season-facts" },
            dotted(["Phase " + se.phase, fmtDate(se.releaseDate), plural(se.episodeCount, "episode", "episodes")]))),
        h("span", { class: "season-chevron", "aria-hidden": "true" }));

      var body;
      if (!se.episodes.length) {
        body = h("p", { class: "season-empty" },
          "Episode list not added yet. This season has " + plural(se.episodeCount, "episode", "episodes") + ".");
      } else {
        body = h("ol", { class: "episodes" }, episodeSeq(se).map(function (ep) {
          return h("li", { class: "ep" },
            h("span", { class: "ep-num" }, pad2(ep.episode)),
            h("span", { class: "ep-main" },
              h("span", { class: "ep-title" }, ep.title),
              ep.description ? h("span", { class: "ep-desc" }, ep.description) : null,
              h("span", { class: "ep-date" }, fmtDate(ep.releaseDate))));
        }));
      }
      var panel = h("div", { class: "season-panel", id: panelId, hidden: !openSeasons[se.id] }, body);

      toggle.addEventListener("click", function () {
        var open = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        panel.hidden = !open;
        if (open) openSeasons[se.id] = true; else delete openSeasons[se.id];
      });

      list.appendChild(h("article", { class: "season", id: "season-" + se.id },
        h("h2", { class: "season-heading" }, toggle), panel));
    });

    app.replaceChildren(
      h("a", { class: "back-link", href: "#/tv" }, "\u2039 All TV shows"),
      summary,
      h("h2", { class: "sr-only" }, "Seasons"),
      list);
  }

  /* ================================================================ TIMELINE */

  /* One row of the timeline. A movie row opens the popup; a season row opens the show. */
  function timelineRow(movie, show, season) {
    var title = movie ? movie.title : show.title;
    var date = movie ? movie.releaseDate : season.releaseDate;
    var phase = "Phase " + (movie ? movie.phase : season.phase);
    var inner = [
      h("span", { class: "tl-poster" }, movie ? posterBlock(movie) : seasonThumb(show, season)),
      h("span", { class: "tl-body" },
        h("span", { class: "tl-title" }, title),
        h("span", { class: "tl-kicker" },
          h("span", { class: "rw-tag" }, movie ? "Movie" : "TV"),
          h("time", { class: "tl-date", datetime: date }, fmtDate(date))),
        h("span", { class: "tl-sub" }, dotted(movie ? [phase] : ["Season " + season.season, phase])))
    ];
    var card;
    if (movie) {
      card = h("button", { type: "button", class: "tl-card", "aria-haspopup": "dialog" }, inner);
      card.addEventListener("click", function () { openMovieModal(movie, card); });
    } else {
      card = h("a", { class: "tl-card", href: seasonHref(show, season) }, inner);
    }
    return h("li", { class: "tl-item" }, card);
  }

  function renderTimeline() {
    var chrono = watchOrder === "chronological";
    var units = sequence();
    var movieCount = units.filter(function (u) { return u.kind === "movie"; }).length;
    var xmovies = xsequence();
    var smovies = ssequence();
    var omovies = osequence();

    app.replaceChildren(
      pageHead("Timeline"),
      h("p", { class: "section-note" },
        (chrono ? "Every MCU movie and TV season in the order they happen on Marvel\u2019s official MCU timeline. "
                : "Every MCU movie and TV season in the order they came out. ") +
        plural(units.length, "title", "titles") + ": " + plural(movieCount, "movie", "movies") + " and " +
        plural(units.length - movieCount, "TV season", "TV seasons") + "."),
      h("ol", { class: "tl-list" }, units.map(function (u) {
        return u.kind === "movie" ? timelineRow(u.movie) : timelineRow(null, u.show, u.season);
      })),
      xmovies.length ? h("h2", { class: "phase-title", style: "margin-top:36px" }, "X-Men Timeline") : null,
      xmovies.length ? h("p", { class: "section-note" },
        (chrono ? "Every X-Men movie in the order they happen in the X-Men story timeline. "
                : "Every X-Men movie in the order they came out. ") +
        plural(xmovies.length, "movie", "movies") + ".") : null,
      xmovies.length ? h("ol", { class: "tl-list" }, xmovies.map(function (m) { return timelineRow(m); })) : null,
      smovies.length ? h("h2", { class: "phase-title", style: "margin-top:36px" }, "Sony Spider-Man Timeline") : null,
      smovies.length ? h("p", { class: "section-note" },
        (chrono ? "Every Sony Spider-Man movie in story order. "
                : "Every Sony Spider-Man movie in the order they came out. ") +
        "These are not part of the main MCU timeline. " + plural(smovies.length, "movie", "movies") + ".") : null,
      smovies.length ? h("ol", { class: "tl-list" }, smovies.map(function (m) { return timelineRow(m); })) : null,
      omovies.length ? h("h2", { class: "phase-title", style: "margin-top:36px" }, "Other Marvel Timeline") : null,
      omovies.length ? h("p", { class: "section-note" },
        (chrono ? "Every other Marvel movie grouped by series, in story order. "
                : "Every other Marvel movie in the order they came out. ") +
        "These are not part of the main MCU timeline. " + plural(omovies.length, "movie", "movies") + ".") : null,
      omovies.length ? h("ol", { class: "tl-list" }, omovies.map(function (m) { return timelineRow(m); })) : null);
  }

  /* ================================================================= SEARCH */

  var searchQuery = "";
  var searchType = "all";   // all | movie | tv
  var searchPhase = "all";  // all | "1" | "2" ...
  var searchUI = null;      // handles to the search page while it is on screen

  /* Every movie, X-Men, Sony, Other Marvel movie and TV season as a searchable entry. */
  function searchEntries() {
    var out = MOVIES.concat(XMOVIES, SMOVIES, OMOVIES).map(function (m) {
      return { type: "movie", id: m.id, movie: m, phase: m.phase, text: m.title };
    });
    TV.forEach(function (s) {
      s.seasons.forEach(function (se) {
        var words = [s.title, "season " + se.season];
        se.episodes.forEach(function (ep) { words.push(ep.title); });
        out.push({ type: "tv", id: se.id, show: s, season: se, phase: se.phase, text: words.join(" \u2022 ") });
      });
    });
    return out;
  }

  function searchResults() {
    var q = searchQuery.trim().toLowerCase();
    if (!q && searchType === "all" && searchPhase === "all") return null; // nothing asked yet
    var rank = {};
    sequence().forEach(function (u, i) { rank[u.id] = i; });
    xsequence().forEach(function (m, i) { rank[m.id] = 1000 + i; });
    ssequence().forEach(function (m, i) { rank[m.id] = 2000 + i; });
    osequence().forEach(function (m, i) { rank[m.id] = 3000 + i; });
    return searchEntries().filter(function (e) {
      return (searchType === "all" || e.type === searchType) &&
             (searchPhase === "all" || String(e.phase) === searchPhase) &&
             (!q || e.text.toLowerCase().indexOf(q) !== -1);
    }).sort(function (a, b) { return rank[a.id] - rank[b.id]; });
  }

  function emptyBox(title, text) {
    return h("div", { class: "dash-empty" },
      h("strong", { class: "dash-empty-title" }, title),
      h("span", { class: "dash-empty-text" }, text));
  }

  /* A row of filter buttons. get/set read and change the matching variable.
     "after" is what to run after a click (the Search page uses its own refresh by default). */
  function filterRow(label, filters, get, set, after) {
    var buttons = {};
    var el = h("div", { class: "filter-row", role: "group", "aria-label": label },
      filters.map(function (f) {
        var btn = h("button", { type: "button", class: "filter-btn" }, f.label);
        btn.addEventListener("click", function () { set(f.key); (after || refreshSearch)(); });
        buttons[f.key] = btn;
        return btn;
      }));
    return {
      el: el,
      refresh: function () {
        filters.forEach(function (f) {
          var on = get() === f.key;
          buttons[f.key].classList.toggle("is-on", on);
          buttons[f.key].setAttribute("aria-pressed", on ? "true" : "false");
        });
      }
    };
  }

  function renderSearch() {
    var phases = {};
    MOVIES.forEach(function (m) { phases[m.phase] = true; });
    TV.forEach(function (s) { s.seasons.forEach(function (se) { phases[se.phase] = true; }); });
    var phaseFilters = [{ key: "all", label: "All phases" }].concat(
      Object.keys(phases).map(Number).sort(byNumber).map(function (p) { return { key: String(p), label: "Phase " + p }; }));

    var typeRow = filterRow("Filter by type",
      [{ key: "all", label: "All" }, { key: "movie", label: "Movies" }, { key: "tv", label: "TV" }],
      function () { return searchType; }, function (k) { searchType = k; });
    var phaseRow = filterRow("Filter by phase", phaseFilters,
      function () { return searchPhase; }, function (k) { searchPhase = k; });

    searchUI = { typeRow: typeRow, phaseRow: phaseRow,
                 countEl: h("p", { class: "section-note", role: "status", "aria-live": "polite" }),
                 host: h("div", { class: "results" }) };

    app.replaceChildren(
      pageHead("Search"),
      h("div", { class: "search-filters" }, typeRow.el, phaseRow.el),
      searchUI.countEl,
      searchUI.host);
    refreshSearch();
  }

  /* Redraw the filter buttons and the results (called on every key press / click). */
  function refreshSearch() {
    var ui = searchUI;
    if (!ui || !ui.host.isConnected) return;
    ui.typeRow.refresh();
    ui.phaseRow.refresh();

    var results = searchResults();
    var q = searchQuery.trim();
    ui.countEl.textContent = !results
      ? "Search across movies, TV shows, seasons and episodes."
      : plural(results.length, "result", "results") + (q ? " for \u201c" + q + "\u201d" : " for the selected filters");

    if (!results) {
      ui.host.replaceChildren(emptyBox("Search the tracker", "Type a movie, show, season or episode title above, or use a filter to browse."));
    } else if (!results.length) {
      ui.host.replaceChildren(emptyBox("No results found", "Try a different search term, or clear a filter."));
    } else {
      ui.host.replaceChildren(h("div", { class: "grid" }, results.map(function (e) {
        return e.movie ? makeMovieCard(e.movie, true) : makeTVCard(e.show, e.season);
      })));
    }
  }

  /* ================================================================= ROUTER */

  /* ============================================================ CHARACTERS */

  var CHARACTERS = window.MCU_CHARACTERS || [];
  var charUniverse = "all"; // the Characters page filter: "all", "mcu" or "X-Men"
  var CHAR_EXTS = ["webp", "jpg", "jpeg", "png"];

  /* The picture for a character. If the data has no "image", it looks for
     characters/<id>.webp, then .jpg, .jpeg, .png. No file found = a placeholder. */
  function characterPicture(c) {
    var poster = h("span", { class: "poster" },
      h("span", { class: "poster-fallback" },
        h("span", { class: "pf-title" }, c.name),
        h("span", { class: "pf-note" }, "Image not added yet")));
    var sources = c.image ? [c.image] : CHAR_EXTS.map(function (ext) { return "characters/" + c.id + "." + ext; });
    var tried = 0;
    var img = h("img", { src: sources[0], alt: "", loading: "lazy", decoding: "async", draggable: "false" });
    img.addEventListener("error", function () {
      tried++;
      if (tried < sources.length) img.src = sources[tried]; // try the next file type
      else { poster.classList.add("no-poster"); img.remove(); }
    });
    poster.appendChild(img);
    return poster;
  }

  /* The movies / shows / seasons a character is in, sorted by the Watch order menu. */
  function characterAppearances(c) {
    return sortTargets([].concat(c.appearances || []).map(findTarget).filter(Boolean));
  }

  function makeCharacterCard(c) {
    var n = characterAppearances(c).length;
    return h("a", { class: "card", href: "#/characters/" + encodeURIComponent(c.id), title: c.name },
      addPeek(characterPicture(c), c.description),
      h("span", { class: "meta" },
        h("span", { class: "title" }, c.name),
        h("span", { class: "sub" }, plural(n, "appearance", "appearances"))));
  }

  /* #/characters : every character, with All / MCU / X-Men buttons */
  function renderCharacters() {
    var host = h("div", { class: "char-results" });
    var row = filterRow("Show characters from",
      [{ key: "all", label: "All" }, { key: "mcu", label: "MCU" }, { key: "X-Men", label: "X-Men" }],
      function () { return charUniverse; }, function (k) { charUniverse = k; }, update);

    function draw() {
      var list = CHARACTERS.filter(function (c) { return charUniverse === "all" || c.universe === charUniverse; });
      host.replaceChildren.apply(host, [
        summaryBox("Character totals", [[list.length, "characters"]]),
        list.length ? h("div", { class: "grid" }, list.map(function (c) { return makeCharacterCard(c); }))
                    : emptyBox("No characters here yet", "Add some in js/data-characters.js.")
      ]);
    }
    function update() { row.refresh(); draw(); }

    app.replaceChildren(
      h("h1", { class: "sr-only" }, "Characters"),
      h("div", { class: "search-filters movie-filters" }, row.el),
      host);
    update();
  }

  /* #/characters/<id> : one character and the cards of everything they appear in */
  function renderCharacter(id) {
    var c = CHARACTERS.filter(function (x) { return x.id === id; })[0];
    if (!c) {
      app.replaceChildren(
        h("a", { class: "back-link", href: "#/characters" }, "\u2039 All characters"),
        h("p", { class: "notice" }, "There is no character with that address. Pick one from the Characters list."));
      return;
    }
    var apps = characterAppearances(c);
    var movieCount = apps.filter(function (t) { return t.kind === "movie"; }).length;
    var tvCount = apps.length - movieCount;
    app.replaceChildren(
      h("a", { class: "back-link", href: "#/characters" }, "\u2039 All characters"),
      h("section", { class: "show-head", "aria-label": "About " + c.name },
        h("div", { class: "show-poster" }, characterPicture(c)),
        h("div", { class: "show-info" },
          h("h1", { class: "show-title" }, c.name),
          h("p", { class: "char-meta" }, (c.universe === "X-Men" ? "X-Men universe" : "MCU") + " \u00b7 " +
            plural(movieCount, "movie", "movies") + " \u00b7 " + plural(tvCount, "TV entry", "TV entries")),
          c.description ? h("p", { class: "modal-desc" }, c.description) : null)),
      h("section", { class: "phase" },
        sectionHeader("Appearances", "In " + orderDef(watchOrder).label.toLowerCase(), plural(apps.length, "title", "titles")),
        apps.length ? h("div", { class: "grid" }, apps.map(function (t) { return targetCard(t); }))
                    : emptyBox("No appearances listed", "Add ids to this character's appearances list in js/data-characters.js.")));
  }

  /* ================================================================ PHASES */

  var PHASE_TEXT = window.MCU_PHASES || [];

  /* Every phase number that has at least one movie or season, lowest first. */
  function phaseNumbers() {
    var seen = {};
    UNITS.forEach(function (u) { seen[u.phase] = true; });
    return Object.keys(seen).map(Number).sort(byNumber);
  }

  /* Name, saga and summary from js/data-phases.js (with safe defaults if a phase has no block). */
  function phaseInfo(n) {
    var t = PHASE_TEXT.filter(function (p) { return Number(p.phase) === n; })[0] || {};
    return { phase: n, name: t.name || "Phase " + n, saga: t.saga || saga(n), summary: t.summary || "" };
  }

  /* Counts for one phase, worked out from the data: movies, shows, seasons, year range. */
  function phaseFacts(n) {
    var units = UNITS.filter(function (u) { return u.phase === n; });
    var showIds = {}, seasons = 0, movies = 0;
    units.forEach(function (u) {
      if (u.kind === "movie") movies++;
      else { seasons++; showIds[u.show.id] = true; }
    });
    var years = units.map(function (u) { return Number(year(u.date)); }).filter(isFinite);
    var first = Math.min.apply(null, years), last = Math.max.apply(null, years);
    return { movies: movies, shows: Object.keys(showIds).length, seasons: seasons,
             years: !years.length ? "" : first === last ? String(first) : first + " \u2013 " + last };
  }

  /* #/phases : one big card per phase */
  function renderPhases() {
    var cards = phaseNumbers().map(function (n) {
      var info = phaseInfo(n), f = phaseFacts(n);
      return h("a", { class: "phase-card", href: "#/phases/" + n },
        h("span", { class: "phase-card-saga" }, info.saga),
        h("span", { class: "phase-card-name" }, info.name),
        info.summary ? h("span", { class: "phase-card-summary" }, info.summary) : null,
        h("span", { class: "phase-card-facts" },
          h("span", null, plural(f.movies, "movie", "movies")),
          h("span", null, plural(f.shows, "show", "shows")),
          f.years ? h("span", { class: "phase-card-years" }, f.years) : null),
        h("span", { class: "phase-card-open" }, "Open the movies \u203a"));
    });
    app.replaceChildren(
      h("h1", { class: "sr-only" }, "Phases"),
      h("div", { class: "phase-cards" }, cards));
  }

  /* #/phases/<number> : the movies (and TV seasons) of one phase, in the chosen watch order */
  function renderPhase(idText) {
    var n = Number(idText);
    if (phaseNumbers().indexOf(n) === -1) {
      app.replaceChildren(
        h("a", { class: "back-link", href: "#/phases" }, "\u2039 All phases"),
        h("p", { class: "notice" }, "There is no phase with that number. Pick one from the Phases list."));
      return;
    }
    var info = phaseInfo(n), f = phaseFacts(n);
    var movies = sequence("movie").filter(function (u) { return u.phase === n; });
    var seasons = sequence("season").filter(function (u) { return u.phase === n; });
    app.replaceChildren(
      h("a", { class: "back-link", href: "#/phases" }, "\u2039 All phases"),
      h("section", { class: "phase-intro" },
        h("span", { class: "phase-card-saga" }, info.saga),
        h("h1", { class: "show-title" }, info.name),
        info.summary ? h("p", { class: "modal-desc" }, info.summary) : null,
        h("p", { class: "char-meta" }, plural(f.movies, "movie", "movies") + " \u00b7 " + plural(f.shows, "show", "shows") +
          (f.years ? " \u00b7 " + f.years : ""))),
      movies.length ? h("section", { class: "phase" },
        sectionHeader("Movies", info.name, plural(movies.length, "movie", "movies")),
        h("div", { class: "grid" }, movies.map(function (u) { return makeMovieCard(u.movie, false); }))) : null,
      seasons.length ? h("section", { class: "phase" },
        sectionHeader("TV shows", info.name, plural(seasons.length, "season", "seasons")),
        h("div", { class: "grid" }, seasons.map(function (u) { return makeTVCard(u.show, u.season); }))) : null);
  }

  /* ================================================================ GUIDES */

  var GUIDES = window.MCU_GUIDES || [];
  var guideId = null; // which guide is open on the Guides page

  /* #/guides : pick a guide, see its steps as numbered cards (in the order typed in the data file) */
  function renderGuides() {
    if (!GUIDES.length) {
      app.replaceChildren(emptyBox("No guides yet", "Add some in js/data-guides.js."));
      return;
    }
    if (!GUIDES.some(function (g) { return g.id === guideId; })) guideId = GUIDES[0].id;

    var host = h("div", { class: "guide-results" });
    var row = filterRow("Choose a guide",
      GUIDES.map(function (g) { return { key: g.id, label: g.title }; }),
      function () { return guideId; }, function (k) { guideId = k; }, update);

    function draw() {
      var g = GUIDES.filter(function (x) { return x.id === guideId; })[0];
      var steps = [].concat(g.items || []).map(findTarget).filter(Boolean); // unknown ids are skipped
      var list = h("ol", { class: "grid guide-grid" }, steps.map(function (t, i) {
        return h("li", { class: "guide-step" },
          h("span", { class: "step-badge", "aria-hidden": "true" }, String(i + 1)),
          targetCard(t));
      }));
      host.replaceChildren.apply(host, [
        sectionHeader(g.title, "Watch guide", plural(steps.length, "step", "steps")),
        g.description ? h("p", { class: "guide-desc" }, g.description) : null,
        steps.length ? list : emptyBox("This guide is empty", "Add ids to its items list in js/data-guides.js.")
      ].filter(Boolean));
    }
    function update() { row.refresh(); draw(); }

    app.replaceChildren(
      h("h1", { class: "sr-only" }, "Watch guides"),
      h("div", { class: "search-filters movie-filters" }, row.el),
      host);
    update();
  }

  /* ================================================================= STATS */

  var statsUniverse = "mcu"; // the Stats page button: "mcu", "X-Men" or "all"

  /* A horizontal bar chart made only of HTML and CSS.
     rows = [{ label: "Phase 1", segs: [{ value: 6, cls: "seg-mcu" }] }, ...]
     A row can have several segments (they stack). The longest row fills the track. */
  function barChart(title, rows, legend) {
    var totals = rows.map(function (r) { return r.segs.reduce(function (sum, x) { return sum + x.value; }, 0); });
    var max = Math.max.apply(null, totals.concat([1]));
    return h("section", { class: "chart" },
      h("h3", { class: "chart-title" }, title),
      legend ? h("p", { class: "chart-legend" },
        h("span", { class: "legend-dot seg-mcu" }), " MCU   ", h("span", { class: "legend-dot seg-xmen" }), " X-Men") : null,
      h("ol", { class: "bars" }, rows.map(function (r, i) {
        return h("li", { class: "bar-row" },
          h("span", { class: "bar-label" }, r.label),
          h("span", { class: "bar-track", "aria-hidden": "true" },
            r.segs.filter(function (x) { return x.value > 0; }).map(function (x) {
              return h("span", { class: "bar-seg " + x.cls, style: "width:" + (x.value / max * 100) + "%" });
            })),
          h("span", { class: "bar-value" }, String(totals[i])));
      })));
  }

  /* #/stats */
  function renderStats() {
    var host = h("div", { class: "stats-results" });
    var row = filterRow("Count movies from",
      [{ key: "mcu", label: "MCU" }, { key: "X-Men", label: "X-Men" }, { key: "all", label: "MCU + X-Men" }],
      function () { return statsUniverse; }, function (k) { statsUniverse = k; }, update);

    function draw() {
      var both = statsUniverse === "all";
      var movies = ALL_MOVIES.filter(function (m) { return m.universe !== "sony" && m.universe !== "other" && (both || m.universe === statsUniverse); });
      function cls(m) { return m.universe === "X-Men" ? "seg-xmen" : "seg-mcu"; }

      /* --- runtime (only movies that have a runtime in the data count) --- */
      var total = 0, withRuntime = 0;
      movies.forEach(function (m) { if (Number(m.runtime) > 0) { total += Number(m.runtime); withRuntime++; } });
      var average = withRuntime ? Math.round(total / withRuntime) : 0;

      /* --- movies per phase (X-Men "phases" are story eras, so they use the era names) --- */
      var phaseRows = [];
      if (statsUniverse !== "X-Men") {
        phaseNumbers().forEach(function (n) {
          phaseRows.push({ label: "Phase " + n, segs: [{ cls: "seg-mcu",
            value: MOVIES.filter(function (m) { return m.phase === n; }).length }] });
        });
      }
      if (statsUniverse !== "mcu") {
        Object.keys(XMEN_ERAS).map(Number).sort(byNumber).forEach(function (n) {
          phaseRows.push({ label: (both ? "X-Men: " : "") + XMEN_ERAS[n], segs: [{ cls: "seg-xmen",
            value: XMOVIES.filter(function (m) { return m.phase === n; }).length }] });
        });
      }

      /* --- movies per year: every year from the first movie to the last, so gaps show --- */
      var yearRows = [];
      var years = movies.map(function (m) { return Number(year(m.releaseDate)); }).filter(isFinite);
      if (years.length) {
        for (var y = Math.min.apply(null, years); y <= Math.max.apply(null, years); y++) {
          var inYear = movies.filter(function (m) { return Number(year(m.releaseDate)) === y; });
          yearRows.push({ label: String(y), segs: [
            { cls: "seg-mcu", value: inYear.filter(function (m) { return cls(m) === "seg-mcu"; }).length },
            { cls: "seg-xmen", value: inYear.filter(function (m) { return cls(m) === "seg-xmen"; }).length }] });
        }
      }

      /* --- TV (always all MCU shows) --- */
      var seasonCount = 0, episodeCount = 0;
      TV.forEach(function (s) {
        seasonCount += s.seasons.length;
        s.seasons.forEach(function (se) { episodeCount += Number(se.episodeCount) || (se.episodes || []).length; });
      });
      var seasonRows = phaseNumbers().map(function (n) {
        return { label: "Phase " + n, segs: [{ cls: "seg-mcu", value: UNITS.filter(function (u) { return u.kind === "season" && u.phase === n; }).length }] };
      });
      var episodeRows = TV.map(function (s) {
        return { label: s.title, segs: [{ cls: "seg-mcu", value: s.seasons.reduce(function (sum, se) {
          return sum + (Number(se.episodeCount) || (se.episodes || []).length); }, 0) }] };
      });

      var totalText = Math.floor(total / 60) + "h " + (total % 60) + "m";
      var daysText = (total / 60 / 24).toFixed(1) + " days";
      var missing = movies.length - withRuntime;

      host.replaceChildren.apply(host, [
        sectionHeader("Movies", both ? "MCU + X-Men" : statsUniverse === "mcu" ? "MCU" : "X-Men", plural(movies.length, "movie", "movies")),
        summaryBox("Movie totals", [[movies.length, "movies"], [totalText, "total runtime (about " + daysText + " of watching)"],
                                    [fmtRuntime(average), "average movie length"]]),
        missing ? h("p", { class: "filter-note" }, "Runtime is missing for " + plural(missing, "movie", "movies") + ", so they are left out of the runtime numbers.") : null,
        h("div", { class: "charts" },
          barChart("Movies per phase", phaseRows, both),
          barChart("Movies per year", yearRows, both)),
        sectionHeader("TV shows", "MCU", plural(TV.length, "show", "shows")),
        summaryBox("TV totals", [[TV.length, "shows"], [seasonCount, "seasons"], [episodeCount, "episodes"]]),
        h("div", { class: "charts" },
          barChart("TV seasons per phase", seasonRows, false),
          barChart("Episodes per show", episodeRows, false))
      ].filter(Boolean));
    }
    function update() { row.refresh(); draw(); }

    app.replaceChildren(
      h("h1", { class: "sr-only" }, "Stats"),
      h("div", { class: "search-filters movie-filters" }, row.el),
      host);
    update();
  }

  var tabs = [].slice.call(document.querySelectorAll(".tab"));
  var ROUTE_NAMES = ["tv", "movies", "timeline", "search", "characters", "phases", "guides", "stats"];
  var lastShowId = null; // so going Back to the TV list can refocus that show's card

  /* Addresses: #/dashboard  #/movies  #/tv  #/tv/<show-id>  #/tv/<show-id>/<season-number>  #/timeline  #/search
                #/characters  #/characters/<character-id>  #/phases  #/phases/<number>  #/guides  #/stats */
  function parseHash() {
    var parts = window.location.hash.replace(/^#\/?/, "").split("/");
    var out = { name: ROUTE_NAMES.indexOf(parts[0]) !== -1 ? parts[0] : "dashboard", showId: null, seasonNum: null, itemId: null };
    if (out.name === "tv" && parts[1]) {
      try { out.showId = decodeURIComponent(parts[1]); } catch (e) { out.showId = parts[1]; }
      if (parts[2] && Number(parts[2]) > 0) out.seasonNum = Number(parts[2]);
    }
    /* #/characters/<id> and #/phases/<number> */
    if ((out.name === "characters" || out.name === "phases") && parts[1]) {
      try { out.itemId = decodeURIComponent(parts[1]); } catch (e) { out.itemId = parts[1]; }
    }
    return out;
  }

  function renderRoute() {
    var r = parseHash();
    searchUI = null;
    if (r.name === "tv") { if (r.showId) renderShow(r.showId); else renderTV(); }
    else if (r.name === "movies") renderMovies();
    else if (r.name === "timeline") renderTimeline();
    else if (r.name === "search") renderSearch();
    else if (r.name === "characters") { if (r.itemId) renderCharacter(r.itemId); else renderCharacters(); }
    else if (r.name === "phases") { if (r.itemId) renderPhase(r.itemId); else renderPhases(); }
    else if (r.name === "guides") renderGuides();
    else if (r.name === "stats") renderStats();
    else renderDashboard();
  }

  var TITLES = { dashboard: "Command Center", movies: "Movies", timeline: "Timeline", search: "Search", tv: "TV Shows",
                 characters: "Characters", phases: "Phases", guides: "Guides", stats: "Stats" };

  function route() {
    var r = parseHash();
    closeModal();

    var orderPicker = document.querySelector(".order-picker");
    /* The Watch order menu is hidden where it changes nothing: home, Guides, Stats and the Characters / Phases lists. */
    var needsOrder = r.name !== "dashboard" && r.name !== "guides" && r.name !== "stats" &&
                     !((r.name === "characters" || r.name === "phases") && !r.itemId);
    if (orderPicker) orderPicker.hidden = !needsOrder;

    stopHero(); // the home page banner restarts its own timer when it is drawn
    tabs.forEach(function (t) {
      if (t.getAttribute("data-route") === r.name) t.setAttribute("aria-current", "page");
      else t.removeAttribute("aria-current");
    });
    /* On a phone the tab row scrolls sideways: keep the current tab in view */
    var activeTab = document.querySelector(".tab[aria-current=\"page\"]");
    if (activeTab && activeTab.parentNode.scrollWidth > activeTab.parentNode.clientWidth && activeTab.scrollIntoView) {
      activeTab.scrollIntoView({ inline: "center", block: "nearest" });
    }

    var show = r.showId ? TV.filter(function (s) { return s.id === r.showId; })[0] : null;
    document.title = (show ? show.title + " | TV Shows" : TITLES[r.name]) + " | Marvel Mission Control";

    openSeasons = {}; // every arrival starts with seasons closed, except the one in the address
    var openId = null;
    if (show && r.seasonNum) {
      show.seasons.forEach(function (se) { if (se.season === r.seasonNum) { openSeasons[se.id] = true; openId = se.id; } });
    }
    if (r.name === "search") { searchType = "all"; searchPhase = "all"; }

    renderRoute();
    window.scrollTo(0, 0);

    if (show) {
      lastShowId = show.id;
      var box = openId && document.getElementById("season-" + openId);
      if (box) box.scrollIntoView(); else app.focus({ preventScroll: true });
    } else if (r.name === "tv" && lastShowId) {
      var back = app.querySelector('a.card[data-show="' + lastShowId + '"]');
      if (back) back.focus();
      lastShowId = null;
    }
  }

  /* ================================================================== START */

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }
  setText("tab-count-movies", String(ALL_MOVIES.length));
  setText("tab-count-tv", String(TV.length));

  /* Watch order menu */
  var orderSelect = document.getElementById("watch-order") || document.createElement("select");
  var orderStatus = document.getElementById("order-status") || document.createElement("p");
  ORDERS.forEach(function (o) { orderSelect.appendChild(h("option", { value: o.key }, o.label)); });
  orderSelect.value = watchOrder;
  orderSelect.addEventListener("change", function () {
    watchOrder = orderDef(orderSelect.value).key;
    saveOrder(watchOrder);
    orderStatus.textContent = "Showing " + orderDef(watchOrder).label.toLowerCase();
    renderRoute(); // redraw in place
  });

  /* Search box at the top */
  var searchInput = document.getElementById("global-search");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      searchQuery = searchInput.value;
      if (parseHash().name === "search") refreshSearch();
      else window.location.hash = "#/search";
    });
    searchInput.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (searchInput.value) {
        e.preventDefault();
        searchInput.value = "";
        searchQuery = "";
        if (parseHash().name === "search") refreshSearch();
      } else {
        searchInput.blur();
      }
    });
  }

  /* Esc on a show page goes back to the TV list. */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape" || e.defaultPrevented) return;
    if (!parseHash().showId || (modal && !modal.overlay.hidden)) return;
    if (e.target && e.target.tagName === "SELECT") return;
    e.preventDefault();
    window.location.hash = "#/tv";
  });

  /* ============================================================ THEME TOGGLE */

  /* The sun / moon button in the top bar. Dark is the default. The choice is saved in
     this browser (localStorage) and applied by a small script at the top of index.html
     before the page draws, so there is no flash of the wrong theme. */
  function initThemeToggle() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var icon = btn.querySelector(".theme-toggle-icon");
    var meta = document.querySelector('meta[name="theme-color"]');

    function current() { return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark"; }

    function apply(theme, save) {
      if (theme === "light") document.documentElement.setAttribute("data-theme", "light");
      else document.documentElement.removeAttribute("data-theme"); // no attribute = the dark default
      btn.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
      btn.setAttribute("title", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
      if (icon) icon.textContent = theme === "light" ? "\u263E" : "\u2600"; // moon when light, sun when dark
      if (meta) meta.setAttribute("content", theme === "light" ? "#eef3f8" : "#05080d"); // phone browser bar colour
      if (save) { try { window.localStorage.setItem("marvel-tracker:theme", theme); } catch (e) { /* ignore */ } }
    }

    apply(current(), false);
    btn.addEventListener("click", function () { apply(current() === "light" ? "dark" : "light", true); });
  }
  initThemeToggle();

  window.addEventListener("hashchange", route);
  route();
})();

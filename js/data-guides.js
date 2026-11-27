/*
 * ==========================================================================
 *  WATCH GUIDES  (js/data-guides.js): the presets on the Guides page
 * ==========================================================================
 *  Each guide is a list of ids that the page shows as numbered cards, in
 *  EXACTLY the order you type them (the Watch order menu does not change it).
 *
 *  ADD a guide: copy the template, paste it just above the line
 *  "END OF GUIDES" at the bottom, and change the text.
 *
 *    { id: "my-guide", title: "My guide",
 *      description: "One sentence about this path.",
 *      items: ["iron-man", "the-avengers", "loki-s1"] },
 *
 *    id           unique, lowercase, dashes only.
 *    title        the button label and the heading.
 *    description  one sentence under the heading.
 *    items        ids in watching order:
 *                   a movie id   "avengers-endgame"
 *                   a show id    "loki"       (the whole show, one card)
 *                   a season id  "loki-s1"    (one season, one card)
 *                 A wrong id is skipped, and js/check-data.js names it in
 *                 the Console (F12).
 *
 *  REMOVE a guide: delete its block (from { id: to its },).
 *  The first guide in the list is the one shown when the page opens.
 *
 *  Keep every comma, quote mark and brace.
 * ==========================================================================
 */
window.MCU_GUIDES = [
  { id: "quick-recap", title: "Quick MCU recap (essential only)",
    description: "Only the titles marked Essential, in release order. The fastest way to follow the main story.",
    items: ["iron-man", "thor", "captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "thor-ragnarok", "avengers-infinity-war", "captain-marvel", "avengers-endgame", "wandavision-s1", "loki-s1", "spider-man-no-way-home", "doctor-strange-in-the-multiverse-of-madness", "ant-man-and-the-wasp-quantumania", "loki-s2"] },

  { id: "loki-path", title: "Loki path",
    description: "Loki's story from his first appearance to his own series.",
    items: ["thor", "the-avengers", "thor-the-dark-world", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "loki-s1", "loki-s2"] },

  { id: "spider-man-path", title: "Spider-Man path",
    description: "Peter Parker's MCU story, with the films that matter most around it.",
    items: ["captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame", "spider-man-far-from-home", "doctor-strange", "spider-man-no-way-home", "spider-man-brand-new-day"] },

  { id: "thor-path", title: "Thor path",
    description: "Thor's journey from Asgard to the end of the Infinity Saga and beyond.",
    items: ["thor", "the-avengers", "thor-the-dark-world", "avengers-age-of-ultron", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder"] },

  { id: "captain-america-path", title: "Captain America path",
    description: "From the 1940s to the Falcon and the Winter Soldier and what comes after.",
    items: ["captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame", "the-falcon-and-the-winter-soldier", "captain-america-brave-new-world"] },

  { id: "guardians-path", title: "Guardians of the Galaxy path",
    description: "The Guardians' own films plus the Avengers films they appear in.",
    items: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-of-the-galaxy-volume-3"] },

  { id: "deadpool-wolverine-path", title: "Deadpool & Wolverine path",
    description: "The films to watch before Deadpool & Wolverine, including the TVA from Loki.",
    items: ["loki-s1", "loki-s2", "deadpool", "deadpool-2", "logan", "deadpool-and-wolverine"] },

  /* ===== END OF GUIDES ===== */
];

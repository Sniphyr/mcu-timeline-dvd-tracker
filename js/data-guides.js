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
 *    { id: "my-guide", title: "My guide", category: "MCU",
 *      description: "One sentence about this path.",
 *      items: ["iron-man", "the-avengers", "loki-s1"] },
 *
 *    id           unique, lowercase, dashes only.
 *    title        the button label and the heading.
 *    category     OPTIONAL. One of: "MCU", "X-Men", "Spider-Man", "Netflix & TV",
 *                 "Other movies". It puts the guide under that filter button on
 *                 the Guides page. No category = the guide only shows under "All".
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
  { id: "quick-recap", title: "Quick MCU recap (essential only)", category: "MCU",
    description: "Only the titles marked Essential, in release order. The fastest way to follow the main story.",
    items: ["iron-man", "thor", "captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "thor-ragnarok", "avengers-infinity-war", "captain-marvel", "avengers-endgame", "wandavision-s1", "loki-s1", "spider-man-no-way-home", "doctor-strange-in-the-multiverse-of-madness", "ant-man-and-the-wasp-quantumania", "loki-s2"] },

  { id: "loki-path", title: "Loki path", category: "MCU",
    description: "Loki's story from his first appearance to his own series.",
    items: ["thor", "the-avengers", "thor-the-dark-world", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "loki-s1", "loki-s2"] },

  { id: "spider-man-path", title: "Spider-Man path", category: "Spider-Man",
    description: "Peter Parker's MCU story, with the films that matter most around it.",
    items: ["captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame", "spider-man-far-from-home", "doctor-strange", "spider-man-no-way-home", "spider-man-brand-new-day"] },

  { id: "thor-path", title: "Thor path", category: "MCU",
    description: "Thor's journey from Asgard to the end of the Infinity Saga and beyond.",
    items: ["thor", "the-avengers", "thor-the-dark-world", "avengers-age-of-ultron", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder"] },

  { id: "captain-america-path", title: "Captain America path", category: "MCU",
    description: "From the 1940s to the Falcon and the Winter Soldier and what comes after.",
    items: ["captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame", "the-falcon-and-the-winter-soldier", "captain-america-brave-new-world"] },

  { id: "guardians-path", title: "Guardians of the Galaxy path", category: "MCU",
    description: "The Guardians' own films plus the Avengers films they appear in.",
    items: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-of-the-galaxy-volume-3"] },

  { id: "deadpool-wolverine-path", title: "Deadpool & Wolverine path", category: "X-Men",
    description: "The films to watch before Deadpool & Wolverine, including the TVA from Loki.",
    items: ["loki-s1", "loki-s2", "deadpool", "deadpool-2", "logan", "deadpool-and-wolverine"] },

  { id: "xmen-release", title: "X-Men: release order", category: "X-Men",
    description: "Every X-Men movie in the order they came out, from X-Men (2000) to The New Mutants.",
    items: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "x-men-origins-wolverine", "x-men-first-class", "the-wolverine", "x-men-days-of-future-past", "deadpool", "x-men-apocalypse", "logan", "deadpool-2", "dark-phoenix", "the-new-mutants"] },

  { id: "xmen-story", title: "X-Men: story order", category: "X-Men",
    description: "The same movies in the order the story happens, starting with First Class.",
    items: ["x-men-first-class", "x-men-days-of-future-past", "x-men-origins-wolverine", "x-men", "x2-x-men-united", "x-men-the-last-stand", "the-wolverine", "x-men-apocalypse", "dark-phoenix", "deadpool", "deadpool-2", "the-new-mutants", "logan"] },

  { id: "wolverine-path", title: "Wolverine path", category: "X-Men",
    description: "Wolverine’s movies from the first X-Men to Logan and Deadpool & Wolverine.",
    items: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "x-men-origins-wolverine", "the-wolverine", "x-men-days-of-future-past", "logan", "deadpool-and-wolverine"] },

  { id: "deadpool-path", title: "Deadpool path", category: "X-Men",
    description: "The three Deadpool movies, movies only.",
    items: ["deadpool", "deadpool-2", "deadpool-and-wolverine"] },

  { id: "raimi-spider-man", title: "Spider-Man: Raimi trilogy", category: "Spider-Man",
    description: "Tobey Maguire’s three Spider-Man movies.",
    items: ["spider-man", "spider-man-2", "spider-man-3"] },

  { id: "amazing-spider-man", title: "Spider-Man: Amazing Spider-Man", category: "Spider-Man",
    description: "Andrew Garfield’s two Amazing Spider-Man movies.",
    items: ["the-amazing-spider-man", "the-amazing-spider-man-2"] },

  { id: "venom-trilogy", title: "Spider-Man: Venom trilogy", category: "Spider-Man",
    description: "The three Venom movies from Sony’s Spider-Man Universe.",
    items: ["venom", "venom-let-there-be-carnage", "venom-the-last-dance"] },

  { id: "spider-verse", title: "Spider-Man: Spider-Verse", category: "Spider-Man",
    description: "The two animated Spider-Verse movies.",
    items: ["spider-man-into-the-spider-verse", "spider-man-across-the-spider-verse"] },

  { id: "every-spider-man", title: "Every Spider-Man movie", category: "Spider-Man",
    description: "All MCU and Sony Spider-Man movies together, in release order.",
    items: ["spider-man", "spider-man-2", "spider-man-3", "the-amazing-spider-man", "the-amazing-spider-man-2", "spider-man-homecoming", "venom", "spider-man-into-the-spider-verse", "spider-man-far-from-home", "venom-let-there-be-carnage", "spider-man-no-way-home", "morbius", "spider-man-across-the-spider-verse", "madame-web", "venom-the-last-dance", "kraven-the-hunter", "spider-man-brand-new-day"] },

  { id: "fantastic-four-fox", title: "Fantastic Four (Fox)", category: "Other movies",
    description: "The two 2000s Fantastic Four movies and the 2015 reboot.",
    items: ["fantastic-four-2005", "fantastic-four-rise-of-the-silver-surfer", "fantastic-four-2015"] },

  { id: "hulk-path", title: "Hulk path", category: "Other movies",
    description: "The 2003 Hulk, The Incredible Hulk and the MCU titles where Hulk or Bruce Banner appears.",
    items: ["hulk-2003", "the-incredible-hulk", "the-avengers", "avengers-age-of-ultron", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "shang-chi-and-the-legend-of-the-ten-rings", "she-hulk-attorney-at-law"] },

  { id: "ghost-rider", title: "Ghost Rider", category: "Other movies",
    description: "Both Ghost Rider movies.",
    items: ["ghost-rider", "ghost-rider-spirit-of-vengeance"] },

  { id: "blade", title: "Blade", category: "Other movies",
    description: "The three Blade movies and Blade: The Series.",
    items: ["blade", "blade-ii", "blade-trinity", "blade-the-series"] },

  { id: "punisher", title: "The Punisher", category: "Other movies",
    description: "Every Punisher on screen: three films, the Netflix show and One Last Kill.",
    items: ["the-punisher-1989", "the-punisher-2004", "punisher-war-zone", "the-punisher", "the-punisher-one-last-kill"] },

  { id: "daredevil", title: "Daredevil", category: "Netflix & TV",
    description: "The 2003 film, the Netflix show and Daredevil: Born Again.",
    items: ["daredevil-2003", "daredevil", "daredevil-born-again", "daredevil-born-again-s2-s3"] },

  { id: "elektra", title: "Elektra", category: "Other movies",
    description: "Elektra’s screen story: Daredevil (2003), her own film and Daredevil season 2.",
    items: ["daredevil-2003", "elektra", "daredevil-s2"] },

  { id: "netflix-defenders", title: "Netflix Defenders path", category: "Netflix & TV",
    description: "The Netflix shows in release order, leading into The Defenders and The Punisher.",
    items: ["daredevil", "jessica-jones", "luke-cage", "iron-fist", "the-defenders", "the-punisher"] },

  { id: "agents-of-shield", title: "Agents of S.H.I.E.L.D. path", category: "Netflix & TV",
    description: "The series with the MCU films it ties into, placed where they connect.",
    items: ["the-avengers", "agents-of-shield-s1", "thor-the-dark-world", "captain-america-the-winter-soldier", "agents-of-shield-s2", "avengers-age-of-ultron", "agents-of-shield-s3", "agents-of-shield-s4", "agents-of-shield-s5", "agents-of-shield-s6", "agents-of-shield-s7"] },

  { id: "marvel-one-shots", title: "Marvel One-Shots", category: "Other movies",
    description: "The short films that came with the MCU home releases, in release order.",
    items: ["the-consultant", "a-funny-thing-happened-on-the-way-to-thors-hammer", "item-47", "agent-carter-one-shot", "all-hail-the-king"] },

  { id: "every-fox-marvel", title: "Every Fox Marvel movie", category: "Other movies",
    description: "All the Marvel movies made by Fox, in release order.",
    items: ["x-men", "daredevil-2003", "x2-x-men-united", "elektra", "fantastic-four-2005", "x-men-the-last-stand", "fantastic-four-rise-of-the-silver-surfer", "x-men-origins-wolverine", "x-men-first-class", "the-wolverine", "x-men-days-of-future-past", "fantastic-four-2015", "deadpool", "x-men-apocalypse", "logan", "deadpool-2", "dark-phoenix", "the-new-mutants"] },

  /* ===== END OF GUIDES ===== */
];

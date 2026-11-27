/*
 * ==========================================================================
 *  QUICK GUIDE: HOW TO EDIT THIS FILE  (TV shows)
 * ==========================================================================
 *  Each show is one big block (show > seasons > episodes). Every show has a
 *  marker line just above it that reads  ===== SHOW: <name> =====
 *
 *  REMOVE a show (example: Loki)
 *    1. Press Ctrl+F and search for:  SHOW: Loki
 *    2. Select everything from that marker line down to the line just BEFORE
 *       the next "SHOW:" marker (or before the "END OF SHOWS" marker).
 *    3. Delete it and save. Done.
 *
 *  REMOVE one season: inside the show, delete the block that starts with
 *  { id: "loki-s2", season: 2, ...  and ends with  ] }  or  ] },  for that
 *  season only. Be careful not to leave out the comma between two seasons.
 *
 *  ADD a show: copy a whole existing show block, paste it just above the
 *  "END OF SHOWS" marker, add a new "SHOW:" marker line above it, then change
 *  every id (show, season and episode ids must all be new and unique).
 *  Poster files go in posters/tv/ and are named in the "poster:" field.
 *
 *  OPTIONAL SHOW EXTRAS (hidden when empty or deleted): creator, cast,
 *  trailer, whereToWatch, status ("Ongoing" | "Ended" | "Upcoming") and
 *  watchBefore (ids; a list, or { release: [...], chronological: [...] }).
 *  An episode may also have  description: "one short line".
 *  See README.md ("TV show page extras" and "Watch before").
 *
 *  EDIT: change text inside the quotes.
 *
 *  Keep every comma, quote mark and brace. Page blank? Press F12, open
 *  "Console", and read the red message.
 * ==========================================================================
 *
 *  Below this line: technical notes. You can ignore them.
 */

/*
 * Static TV data. Contains only the list of titles.
 *
 * STARTER SAMPLE ONLY: 7 shows, not the full database. The posters/tv folder
 * has many more poster files than are listed here -- that does NOT mean
 * those shows are MCU canon or ready to add. Do not infer a show's
 * universe/category from the presence of a poster file; only add a show
 * once its own record (universe, category, phase, seasons) is established.
 *
 * Structure: Show -> Seasons -> Episodes.
 *   - Every show and every season has an explicit, stable "id". IDs are
 *     never derived from array position or computed on the fly in app.js.
 *       show id:    "<show-id>"                e.g. "loki"
 *       season id:  "<show-id>-s<number>"      e.g. "loki-s1", "loki-s2"
 *       episode id: "<season-id>-e<number>"    e.g. "loki-s2-e1"
 *   - "phase" lives on each SEASON, not the show, because a show can span
 *     more than one MCU phase (Loki S1 is Phase 4, Loki S2 is Phase 5). Any
 *     code that needs "the show's phase" should derive it from a season
 *     (e.g. the earliest season), never read a phase off the show itself.
 *   - episodes is intentionally [] for every season right now: there are no
 *     reliable per-episode titles/dates in the project yet, so none are
 *     invented. The app shows those seasons as "Episode data unavailable" and
 *     never fakes progress for them. episodeCount is the real episode total
 *     for the season, kept even while episodes is empty.
 *
 * EPISODE RECORD (fill in one season at a time; add every episode of a season):
 *     { id: "<season-id>-e<episode>", episode: <number>, title: "<real title>",
 *       releaseDate: "YYYY-MM-DD", releaseOrder: <number> }
 *   - id must be exactly "<season id>-e<episode number>" (e.g. "loki-s2-e1").
 *     Never change
 *     an id once you have added it.
 *   - releaseOrder is only compared with the other episodes of the SAME season
 *     (it is not on the movie/season scale). Use 1, 2, 3... in release order.
 *   - optional chronologicalOrder: only add it if EVERY episode of the season
 *     has one; otherwise the Chronological Order view uses episode number.
 *   - a season that lists fewer episodes than episodeCount counts as
 *     incomplete: it can never show as complete until all of them are listed.
 *
 * releaseOrder is on the SAME shared scale as data-movies.js (steps of 100
 * for movies; TV seasons use the open space between them), so movies and TV
 * seasons can be interleaved in true release order later. A show's position
 * in the grid comes from its earliest season.
 *
 * chronologicalOrder is on each SEASON (same reason as phase: a show's seasons
 * can sit far apart on the timeline; Loki S1 is right after Endgame, Loki S2 is
 * after The Marvels). It is the season's position in Marvel's official "MCU
 * Complete Timeline" x 100, on the same scale and from the same source as
 * data-movies.js (see the note there), so movies and seasons interleave. It is
 * separate from releaseOrder and is never computed from release dates.
 *
 * show.poster is the season 1 poster. A season may set its own poster, used on
 * the show page and on the chronological season cards. A later season with no
 * poster of its own shows a "Poster not added yet" placeholder on the show page.
 *
 * universe: "mcu" | "sony" | "fox" (same meaning as in data-movies.js)
 * category: "series" | "animation" | "special" | "documentary"
 */
window.MCU_TV = [
  /* ===== SHOW: WandaVision ===== */
  { id: "wandavision", title: "WandaVision", type: "tv", universe: "mcu", category: "series",
    importance: "essential", poster: "posters/tv/wandavision-s1.webp",
    description: "Wanda and Vision appear to be living an idealized suburban life, but something is off.",
    creator: "Jac Schaeffer",
    cast: [
      "Elizabeth Olsen (Wanda Maximoff)",
      "Paul Bettany (Vision)",
      "Teyonah Parris (Monica Rambeau)",
      "Kathryn Hahn (Agatha Harkness)",
      "Randall Park (Jimmy Woo)",
      "Kat Dennings (Darcy Lewis)"],
    trailer: "", whereToWatch: "Disney+", status: "Ended",
    watchBefore: ["avengers-age-of-ultron", "avengers-infinity-war", "avengers-endgame"],
    seasons: [
      { id: "wandavision-s1", season: 1, phase: 4, releaseDate: "2021-01-15", releaseOrder: 2320, chronologicalOrder: 4800,
        episodeCount: 9, episodes: [
          { id: "wandavision-s1-e1", episode: 1, title: "Filmed Before a Live Studio Audience", releaseDate: "2021-01-15", releaseOrder: 1, description: "Wanda and Vision settle into a 1950s sitcom version of suburban life." },
          { id: "wandavision-s1-e2", episode: 2, title: "Don't Touch That Dial", releaseDate: "2021-01-15", releaseOrder: 2, description: "A 1960s-style episode where strange details start to creep into the couple's perfect world." },
          { id: "wandavision-s1-e3", episode: 3, title: "Now in Color", releaseDate: "2021-01-22", releaseOrder: 3, description: "A fast-moving 1970s pregnancy brings the twins, and with them new cracks in Westview's calm." },
          { id: "wandavision-s1-e4", episode: 4, title: "We Interrupt This Program", releaseDate: "2021-01-29", releaseOrder: 4, description: "The story steps outside Westview to follow Monica Rambeau and the people trying to understand what is happening." },
          { id: "wandavision-s1-e5", episode: 5, title: "On a Very Special Episode...", releaseDate: "2021-02-05", releaseOrder: 5, description: "In a 1980s-style episode the family grows up fast and Vision starts asking hard questions." },
          { id: "wandavision-s1-e6", episode: 6, title: "All-New Halloween Spooktacular!", releaseDate: "2021-02-12", releaseOrder: 6, description: "A 1990s-style Halloween episode with an unexpected visitor and growing suspicion." },
          { id: "wandavision-s1-e7", episode: 7, title: "Breaking the Fourth Wall", releaseDate: "2021-02-19", releaseOrder: 7, description: "A 2000s-style mockumentary as Wanda's control over Westview begins to slip." },
          { id: "wandavision-s1-e8", episode: 8, title: "Previously On", releaseDate: "2021-02-26", releaseOrder: 8, description: "A look back at Wanda's past shows how she ended up here." },
          { id: "wandavision-s1-e9", episode: 9, title: "The Series Finale", releaseDate: "2021-03-05", releaseOrder: 9, description: "Everything comes to a head as Wanda faces what she has done to Westview." }
        ] }
    ] },


  /* ===== SHOW: The Falcon and the Winter Soldier ===== */
  { id: "the-falcon-and-the-winter-soldier", title: "The Falcon and the Winter Soldier", type: "tv", universe: "mcu", category: "series",
    importance: "recommended", poster: "posters/tv/the-falcon-and-the-winter-soldier-s1.webp",
    description: "Sam Wilson and Bucky Barnes team up to face a global threat and the legacy of the shield.",
    creator: "Malcolm Spellman",
    cast: [
      "Anthony Mackie (Sam Wilson / Falcon)",
      "Sebastian Stan (Bucky Barnes / Winter Soldier)",
      "Emily VanCamp (Sharon Carter)",
      "Wyatt Russell (John Walker)",
      "Daniel Brühl (Helmut Zemo)",
      "Erin Kellyman (Karli Morgenthau)"],
    trailer: "", whereToWatch: "Disney+", status: "Ended",
    watchBefore: ["captain-america-the-winter-soldier", "captain-america-civil-war", "avengers-endgame"],
    seasons: [
      { id: "the-falcon-and-the-winter-soldier-s1", season: 1, phase: 4, releaseDate: "2021-03-19", releaseOrder: 2340, chronologicalOrder: 5000,
        episodeCount: 6, episodes: [
          { id: "the-falcon-and-the-winter-soldier-s1-e1", episode: 1, title: "New World Order", releaseDate: "2021-03-19", releaseOrder: 1, description: "Sam and Bucky each try to move on after Steve Rogers passes on the shield." },
          { id: "the-falcon-and-the-winter-soldier-s1-e2", episode: 2, title: "The Star-Spangled Man", releaseDate: "2021-03-26", releaseOrder: 2, description: "Sam and Bucky chase answers about the Flag Smashers while the government names a new Captain America." },
          { id: "the-falcon-and-the-winter-soldier-s1-e3", episode: 3, title: "Power Broker", releaseDate: "2021-04-02", releaseOrder: 3, description: "The partners travel to Madripoor to find the source of the super-soldier serum." },
          { id: "the-falcon-and-the-winter-soldier-s1-e4", episode: 4, title: "The Whole World Is Watching", releaseDate: "2021-04-09", releaseOrder: 4, description: "A clash between Sam, Bucky and the new Captain America changes everything." },
          { id: "the-falcon-and-the-winter-soldier-s1-e5", episode: 5, title: "Truth", releaseDate: "2021-04-16", releaseOrder: 5, description: "Sam learns about Isaiah Bradley, a forgotten super-soldier, and what the shield really means." },
          { id: "the-falcon-and-the-winter-soldier-s1-e6", episode: 6, title: "One World, One People", releaseDate: "2021-04-23", releaseOrder: 6, description: "Sam steps up for a final fight as the Flag Smashers' plan comes to a head." }
        ] }
    ] },


  /* ===== SHOW: Loki ===== */
  { id: "loki", title: "Loki", type: "tv", universe: "mcu", category: "series",
    importance: "essential", poster: "posters/tv/loki-s1.webp",
    description: "Loki is pulled out of time by the Time Variance Authority and forced to answer for his crimes.",
    creator: "Michael Waldron",
    cast: [
      "Tom Hiddleston (Loki)",
      "Owen Wilson (Mobius M. Mobius)",
      "Sophia Di Martino (Sylvie)",
      "Gugu Mbatha-Raw (Ravonna Renslayer)",
      "Wunmi Mosaku (Hunter B-15)",
      "Jonathan Majors (He Who Remains)",
      "Ke Huy Quan (Ouroboros \"O.B.\")"],
    trailer: "", whereToWatch: "Disney+", status: "Ended",
    watchBefore: ["thor", "the-avengers", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame"],
    seasons: [
      { id: "loki-s1", season: 1, phase: 4, releaseDate: "2021-06-09", releaseOrder: 2360, chronologicalOrder: 4500,
        episodeCount: 6, episodes: [
          { id: "loki-s1-e1", episode: 1, title: "Glorious Purpose", releaseDate: "2021-06-09", releaseOrder: 1, description: "Loki is taken into custody by the Time Variance Authority after slipping away with the Tesseract." },
          { id: "loki-s1-e2", episode: 2, title: "The Variant", releaseDate: "2021-06-16", releaseOrder: 2, description: "Loki helps Mobius hunt a dangerous variant of himself." },
          { id: "loki-s1-e3", episode: 3, title: "Lamentis", releaseDate: "2021-06-23", releaseOrder: 3, description: "Loki and the variant find themselves stranded on a doomed moon." },
          { id: "loki-s1-e4", episode: 4, title: "The Nexus Event", releaseDate: "2021-06-30", releaseOrder: 4, description: "The TVA reels from a nexus event as Loki faces the consequences." },
          { id: "loki-s1-e5", episode: 5, title: "Journey Into Mystery", releaseDate: "2021-07-07", releaseOrder: 5, description: "Loki ends up in a strange place with other versions of himself." },
          { id: "loki-s1-e6", episode: 6, title: "For All Time. Always.", releaseDate: "2021-07-14", releaseOrder: 6, description: "Loki and Sylvie confront the figure behind the TVA." }
        ] },
      { id: "loki-s2", season: 2, phase: 5, releaseDate: "2023-10-05", releaseOrder: 3250, chronologicalOrder: 6900,
        episodeCount: 6, episodes: [
          { id: "loki-s2-e1", episode: 1, title: "Ouroboros", releaseDate: "2023-10-05", releaseOrder: 1, description: "Loki and Mobius face a new crisis as Loki begins slipping through time." },
          { id: "loki-s2-e2", episode: 2, title: "Breaking Brad", releaseDate: "2023-10-12", releaseOrder: 2, description: "Loki and Mobius chase a missing TVA agent while the TVA's problems grow." },
          { id: "loki-s2-e3", episode: 3, title: "1893", releaseDate: "2023-10-19", releaseOrder: 3, description: "A lead takes Loki and Mobius to the 1893 World's Fair in Chicago." },
          { id: "loki-s2-e4", episode: 4, title: "Heart of the TVA", releaseDate: "2023-10-26", releaseOrder: 4, description: "Loki and his allies search for a solution at the heart of the TVA." },
          { id: "loki-s2-e5", episode: 5, title: "Science/Fiction", releaseDate: "2023-11-02", releaseOrder: 5, description: "Loki and Mobius face a looming threat to time itself." },
          { id: "loki-s2-e6", episode: 6, title: "Glorious Purpose", releaseDate: "2023-11-09", releaseOrder: 6, description: "Loki makes a final choice with the fate of the timeline at stake." }
        ], poster: "posters/tv/loki-s2.webp" }
    ] },


  /* ===== SHOW: Hawkeye ===== */
  { id: "hawkeye", title: "Hawkeye", type: "tv", universe: "mcu", category: "series",
    importance: "optional", poster: "posters/tv/hawkeye-s1.webp",
    description: "Clint Barton teams up with a young archer to settle unfinished business before the holidays.",
    creator: "Jonathan Igla",
    cast: [
      "Jeremy Renner (Clint Barton / Hawkeye)",
      "Hailee Steinfeld (Kate Bishop)",
      "Vera Farmiga (Eleanor Bishop)",
      "Tony Dalton (Jack Duquesne)",
      "Alaqua Cox (Maya Lopez / Echo)",
      "Florence Pugh (Yelena Belova)"],
    trailer: "", whereToWatch: "Disney+", status: "Ended",
    watchBefore: ["the-avengers", "black-widow", "avengers-endgame"],
    seasons: [
      { id: "hawkeye-s1", season: 1, phase: 4, releaseDate: "2021-11-24", releaseOrder: 2650, chronologicalOrder: 5500,
        episodeCount: 6, episodes: [
          { id: "hawkeye-s1-e1", episode: 1, title: "Never Meet Your Heroes", releaseDate: "2021-11-24", releaseOrder: 1, description: "Clint Barton plans a quiet Christmas in New York until a young archer's trouble finds him." },
          { id: "hawkeye-s1-e2", episode: 2, title: "Hide and Seek", releaseDate: "2021-11-24", releaseOrder: 2, description: "Clint and Kate Bishop try to recover a stolen item while dodging dangerous pursuers." },
          { id: "hawkeye-s1-e3", episode: 3, title: "Echoes", releaseDate: "2021-12-01", releaseOrder: 3, description: "Clint's past catches up with him as a new threat is revealed." },
          { id: "hawkeye-s1-e4", episode: 4, title: "Partners, Am I Right?", releaseDate: "2021-12-08", releaseOrder: 4, description: "Clint and Kate dig deeper and meet someone new from Clint's past." },
          { id: "hawkeye-s1-e5", episode: 5, title: "Ronin", releaseDate: "2021-12-15", releaseOrder: 5, description: "Clint's Ronin past comes back and puts everyone around him at risk." },
          { id: "hawkeye-s1-e6", episode: 6, title: "So This Is Christmas?", releaseDate: "2021-12-22", releaseOrder: 6, description: "Clint and Kate face the final showdown on Christmas Eve." }
        ] }
    ] },


  /* ===== SHOW: Moon Knight ===== */
  { id: "moon-knight", title: "Moon Knight", type: "tv", universe: "mcu", category: "series",
    importance: "optional", poster: "posters/tv/moon-knight-s1.webp",
    description: "Steven Grant discovers he shares his body with a mercenary tied to an Egyptian moon god.",
    creator: "Jeremy Slater",
    cast: [
      "Oscar Isaac (Marc Spector / Steven Grant)",
      "May Calamawy (Layla El-Faouly)",
      "Ethan Hawke (Arthur Harrow)",
      "F. Murray Abraham (Khonshu)"],
    trailer: "", whereToWatch: "Disney+", status: "Ended",
    seasons: [
      { id: "moon-knight-s1", season: 1, phase: 4, releaseDate: "2022-03-30", releaseOrder: 2750, chronologicalOrder: 5600,
        episodeCount: 6, episodes: [
          { id: "moon-knight-s1-e1", episode: 1, title: "The Goldfish Problem", releaseDate: "2022-03-30", releaseOrder: 1, description: "Steven Grant, a quiet gift-shop worker, begins losing time and hearing a voice." },
          { id: "moon-knight-s1-e2", episode: 2, title: "Summon the Suit", releaseDate: "2022-04-06", releaseOrder: 2, description: "Steven learns the truth about the voice in his head and is pulled into a mission." },
          { id: "moon-knight-s1-e3", episode: 3, title: "The Friendly Type", releaseDate: "2022-04-13", releaseOrder: 3, description: "Steven, Marc and Layla travel to Egypt in search of a tomb." },
          { id: "moon-knight-s1-e4", episode: 4, title: "The Tomb", releaseDate: "2022-04-20", releaseOrder: 4, description: "The search leads deep into an ancient tomb and into danger." },
          { id: "moon-knight-s1-e5", episode: 5, title: "Asylum", releaseDate: "2022-04-27", releaseOrder: 5, description: "Steven faces the roots of his own mind." },
          { id: "moon-knight-s1-e6", episode: 6, title: "Gods and Monsters", releaseDate: "2022-05-04", releaseOrder: 6, description: "The final battle for the gods and for Marc and Steven's shared life." }
        ] }
    ] },


  /* ===== SHOW: Agatha All Along ===== */
  { id: "agatha-all-along", title: "Agatha All Along", type: "tv", universe: "mcu", category: "series",
    importance: "optional", poster: "posters/tv/agatha-all-along-s1.webp",
    description: "Agatha Harkness regains her power by walking a dangerous road with a coven of new allies.",
    creator: "Jac Schaeffer",
    cast: [
      "Kathryn Hahn (Agatha Harkness)",
      "Aubrey Plaza (Rio Vidal)",
      "Sasheer Zamata (Jennifer Kale)",
      "Patti LuPone (Lilia Calderu)",
      "Joe Locke (Teen)",
      "Ali Ahn (Alice Wu-Gulliver)",
      "Debra Jo Rupp (Sharon Davis)"],
    trailer: "", whereToWatch: "Disney+", status: "Ended",
    watchBefore: ["wandavision"],
    seasons: [
      { id: "agatha-all-along-s1", season: 1, phase: 5, releaseDate: "2024-09-18", releaseOrder: 3450, chronologicalOrder: 7200,
        episodeCount: 9, episodes: [
          { id: "agatha-all-along-s1-e1", episode: 1, title: "Seekest Thou the Road", releaseDate: "2024-09-18", releaseOrder: 1, description: "Agatha, stripped of her powers, is pulled into a mystery by a teen who seems to know her." },
          { id: "agatha-all-along-s1-e2", episode: 2, title: "Circle Sewn with Fate / Unlock Thy Hidden Gate", releaseDate: "2024-09-18", releaseOrder: 2, description: "Agatha gathers a coven to walk a dangerous road." },
          { id: "agatha-all-along-s1-e3", episode: 3, title: "Through Many Miles / Of Tricks and Trials", releaseDate: "2024-09-25", releaseOrder: 3, description: "The coven faces its first trial on the Witches' Road." },
          { id: "agatha-all-along-s1-e4", episode: 4, title: "If I Can't Reach You / Let My Song Teach You", releaseDate: "2024-10-02", releaseOrder: 4, description: "The Witches' Road throws a musical challenge at the coven." },
          { id: "agatha-all-along-s1-e5", episode: 5, title: "Darkest Hour / Wake Thy Power", releaseDate: "2024-10-09", releaseOrder: 5, description: "The witches face a deadly test deeper on the road." },
          { id: "agatha-all-along-s1-e6", episode: 6, title: "Familiar by Thy Side", releaseDate: "2024-10-16", releaseOrder: 6, description: "The coven learns more about each other, and about what they are risking." },
          { id: "agatha-all-along-s1-e7", episode: 7, title: "Death's Hand in Mine", releaseDate: "2024-10-23", releaseOrder: 7, description: "The road leads toward Death, and the stakes rise." },
          { id: "agatha-all-along-s1-e8", episode: 8, title: "Follow Me My Friend to Glory at the End", releaseDate: "2024-10-30", releaseOrder: 8, description: "The coven nears the end of the road and its final trial." },
          { id: "agatha-all-along-s1-e9", episode: 9, title: "Maiden Mother Crone", releaseDate: "2024-10-30", releaseOrder: 9, description: "The Witches' Road reaches its conclusion." }
        ] }
    ] },


  /* ===== SHOW: Daredevil: Born Again ===== */
  { id: "daredevil-born-again", title: "Daredevil: Born Again", type: "tv", universe: "mcu", category: "series",
    importance: "recommended", poster: "posters/tv/daredevil-born-again-s1.webp",
    description: "Matt Murdock and Wilson Fisk clash again as Fisk's political ambitions take hold of New York.",
    creator: "Matt Corman & Chris Ord (showrunner: Dario Scardapane)",
    cast: [
      "Charlie Cox (Matt Murdock / Daredevil)",
      "Vincent D'Onofrio (Wilson Fisk / Kingpin)",
      "Deborah Ann Woll (Karen Page)",
      "Jon Bernthal (Frank Castle / The Punisher)",
      "Margarita Levieva (Heather Glenn)",
      "Wilson Bethel (Benjamin Poindexter)"],
    trailer: "", whereToWatch: "Disney+", status: "Ongoing",
    watchBefore: ["hawkeye", "spider-man-no-way-home"],
    seasons: [
      { id: "daredevil-born-again-s1", season: 1, phase: 5, releaseDate: "2025-03-04", releaseOrder: 3550, chronologicalOrder: 7400,
        episodeCount: 9, episodes: [
          { id: "daredevil-born-again-s1-e1", episode: 1, title: "Heaven's Half Hour", releaseDate: "2025-03-04", releaseOrder: 1, description: "A tragedy upends Matt Murdock's life and pulls him back into the fight." },
          { id: "daredevil-born-again-s1-e2", episode: 2, title: "Optics", releaseDate: "2025-03-04", releaseOrder: 2, description: "Matt tries to carry on while Wilson Fisk's political ambitions grow." },
          { id: "daredevil-born-again-s1-e3", episode: 3, title: "The Hollow of His Hand", releaseDate: "2025-03-11", releaseOrder: 3, description: "Matt and those close to him deal with the fallout as Fisk gains more power." },
          { id: "daredevil-born-again-s1-e4", episode: 4, title: "Sic Semper Systema", releaseDate: "2025-03-18", releaseOrder: 4, description: "A wave of violence in the city draws Matt deeper into the conflict." },
          { id: "daredevil-born-again-s1-e5", episode: 5, title: "With Interest", releaseDate: "2025-03-25", releaseOrder: 5, description: "Old ties and hard choices put pressure on Matt and his allies." },
          { id: "daredevil-born-again-s1-e6", episode: 6, title: "Excessive Force", releaseDate: "2025-03-25", releaseOrder: 6, description: "Tensions rise as the fight for the city gets more personal." },
          { id: "daredevil-born-again-s1-e7", episode: 7, title: "Art for Art's Sake", releaseDate: "2025-04-01", releaseOrder: 7, description: "Matt and his allies keep pushing for the truth as Fisk tightens his grip." },
          { id: "daredevil-born-again-s1-e8", episode: 8, title: "Isle of Joy", releaseDate: "2025-04-08", releaseOrder: 8, description: "The stakes climb as secrets come out and sides are drawn." },
          { id: "daredevil-born-again-s1-e9", episode: 9, title: "Straight to Hell", releaseDate: "2025-04-15", releaseOrder: 9, description: "The season reaches its final showdown for the soul of New York." }
        ] }
    ] },

  /* ===== END OF SHOWS ===== */
];

/*
 * ==========================================================================
 *  QUICK GUIDE: HOW TO EDIT THIS FILE  (MCU movies)
 * ==========================================================================
 *  Every movie is ONE block like the template below. Blocks are in the list
 *  that starts at "window.MCU_MOVIES = [" further down this file.
 *
 *  REMOVE a movie  (example: Iron Man 3)
 *    1. Press Ctrl+F and search for:  iron-man-3
 *       (the first match is this guide text; press Enter to jump to the next
 *       match, which is the real movie block further down)
 *    2. Delete the whole block: from the  { id: "iron-man-3"  line down to the
 *       line that ends with  },  (from the id line down to the closing  },  line)
 *    3. Save. Done. (Optional: delete its poster file in posters/movies too.)
 *       Gaps in the order numbers are fine, nothing else needs changing.
 *
 *  ADD a movie  - copy this template and paste it between two movie blocks
 *  (or right before the final  ];  at the end), then edit it:
 *
 *    { id: "my-movie", title: "My Movie", type: "movie", universe: "mcu",
 *      releaseDate: "2026-12-25", releaseOrder: 8200, chronologicalOrder: 8300,
 *      phase: 6, importance: "optional",
 *      description: "One sentence about the movie.",
 *      poster: "posters/movies/my-movie.webp",
 *      runtime: 120, director: "Director Name",
 *      cast: ["Actor One (Character)", "Actor Two (Character)"],
 *      boxOffice: "$500M", imdb: 7.0, trailer: "", whereToWatch: "Disney+",
 *      dvdNumber: "", postCredits: "1 scene: end",
 *      series: "My Series", related: ["iron-man-2"],
 *      watchBefore: ["iron-man-2"] },
 *
 *    The last 7 lines are the optional extra info shown in the popup. Leave a
 *    value empty ("") to hide it. See README.md for what each one means.
 *    watchBefore = ids to watch first. A plain list is used in both watch
 *    orders; or write { release: [...], chronological: [...] } to differ.
 *
 *    - id:  unique, lowercase, dashes only. Never reuse an id.
 *    - poster: the path to the image. Put the image in the posters/movies
 *      folder and make this path match the file name exactly (.webp, .jpg
 *      and .png all work). No image yet? The page shows a placeholder.
 *    - releaseOrder / chronologicalOrder: numbers, and no other title may use
 *      the same number. Use steps of 100 (to squeeze one between 700 and 800
 *      use 750). A higher releaseOrder must also mean a later releaseDate.
 *    - importance: "essential", "recommended" or "optional".
 *
 *  EDIT a movie: just change the text inside the quotes.
 *
 *  RULES: keep every comma, quote mark and brace. If the page goes blank,
 *  press F12 in the browser, open "Console", and the red message tells you
 *  which line is broken.
 * ==========================================================================
 *
 *  Below this line: technical notes. You can ignore them.
 */

/*
 * Static movie data. Contains only the list of titles.
 *
 * SCOPE: every MCU film released in theaters, as of 2026-09-20 (38 films).
 * Unreleased titles (Avengers: Doomsday, Avengers: Secret Wars, etc.) are
 * intentionally NOT included yet.
 *
 * SOURCES: release dates are U.S. theatrical release dates and phases are
 * Marvel Studios' own phase groupings, taken from Wikipedia's "List of Marvel
 * Cinematic Universe films". Spider-Man: Brand New Day (July 31, 2026, Phase 6)
 * was cross-checked against Variety, Deadline and CNBC coverage of its release.
 *
 * universe: "mcu" | "sony" | "fox"
 *   The Spider-Man films co-produced with Marvel Studios (Homecoming, Far From
 *   Home, No Way Home, Brand New Day) are set in the MCU, so they are "mcu"
 *   even though Sony distributes them. Non-MCU Sony/Fox films are NOT in this
 *   file. If they are added later, use "sony" / "fox": app.js keeps them out
 *   of the MCU list, progress.
 *
 * releaseOrder is the source of truth for RELEASE ordering (never array
 * position). ONE shared scale for movies and TV seasons, in steps of 100, so
 * anything can be slotted in later without renumbering. releaseDate must agree
 * with releaseOrder; app.js warns in the console if it ever doesn't.
 *
 * chronologicalOrder is a SEPARATE field for the in-universe "timeline" watch
 * order. It is documented data, NOT computed from releaseDate/releaseOrder and
 * it must never be edited to "match" them; the two orders differ on purpose
 * (Captain America: The First Avenger is 5th to release but 1st in-universe).
 * app.js reads whichever field the WATCH ORDER selector points at.
 *   SOURCE: Marvel's own "MCU Complete Timeline" (the Disney+ timeline, with
 *   TV broken out by season), published on Marvel.com on June 2, 2026:
 *   https://www.marvel.com/articles/movies/mcu-timeline-order-disney-plus
 *   SCALE: value = that title's position in Marvel's list x 100. Marvel's list
 *   also holds titles this tracker doesn't carry (One-Shots, Netflix series,
 *   Eternals-era specials, etc.); those keep their slots, so adding them later
 *   never needs a renumber. Same scale and same source in data-tv.js, so
 *   movies and TV seasons interleave correctly.
 *   EXCEPTIONS (judgment calls, documented so they are not "fixed" by accident):
 *   - Spider-Man: Brand New Day (8100) is NOT in Marvel's June 2 list (it
 *     released July 31, 2026, after the list). It is set about four years after
 *     No Way Home, which makes it the latest-set title in this tracker, so it
 *     takes the slot after the last entry on Marvel's list. Cross-checked
 *     against GamesRadar's timeline guide (updated Sept 9, 2026) and Rotten
 *     Tomatoes' chronological guide; both place it last.
 *   - The Fantastic Four: First Steps is set on a different Earth (Earth-828)
 *     in a 1960s-style world, so it has no true position in the main timeline.
 *     Marvel's list puts it after Thunderbolts*, and this file follows Marvel.
 *     Some third-party guides place it in the 1960s instead.
 *   - Marvel's list, not third-party fan orders, decides every other position
 *     (e.g. Deadpool & Wolverine sits after Loki S2, not right after Endgame).
 *
 * importance is an EDITORIAL judgement, not a fact:
 *   "essential"   = part of the main storyline spine; hard to follow the big
 *                   crossovers without it
 *   "recommended" = adds real context or character weight, but skippable
 *   "optional"    = mostly standalone; safe to skip
 *
 * poster: always "posters/movies/<id>.webp". If the file is missing the UI
 * shows the fallback card automatically.
 */
window.MCU_MOVIES = [
  /* ---------------------------------------------------------- Phase 1 */
  { id: "iron-man", title: "Iron Man", type: "movie", universe: "mcu",
    releaseDate: "2008-05-02", releaseOrder: 100, chronologicalOrder: 500, phase: 1, importance: "essential",
    description: "Billionaire engineer Tony Stark builds a powered suit to escape captivity and reinvents himself as a hero.",
    poster: "posters/movies/iron-man.webp",
    runtime: 126, director: "Jon Favreau",
    cast: [
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Gwyneth Paltrow (Pepper Potts)",
      "Jeff Bridges (Obadiah Stane)",
      "Terrence Howard (James Rhodes)",
      "Samuel L. Jackson (Nick Fury)"],
    boxOffice: "$585M", imdb: 7.9, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: end",
    series: "Iron Man trilogy", related: ["iron-man-2", "the-avengers"] },

  { id: "the-incredible-hulk", title: "The Incredible Hulk", type: "movie", universe: "mcu",
    releaseDate: "2008-06-13", releaseOrder: 200, chronologicalOrder: 700, phase: 1, importance: "optional",
    description: "Scientist Bruce Banner hunts for a cure while the military chases the monster he becomes.",
    poster: "posters/movies/the-incredible-hulk.webp",
    runtime: 112, director: "Louis Leterrier",
    cast: [
      "Edward Norton (Bruce Banner / Hulk)",
      "Liv Tyler (Betty Ross)",
      "Tim Roth (Emil Blonsky / Abomination)",
      "William Hurt (General Ross)",
      "Tim Blake Nelson (Samuel Sterns)"],
    boxOffice: "$266M", imdb: 6.6, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Hulk", related: ["the-avengers", "thor-ragnarok"] },

  { id: "iron-man-2", title: "Iron Man 2", type: "movie", universe: "mcu",
    releaseDate: "2010-05-07", releaseOrder: 300, chronologicalOrder: 600, phase: 1, importance: "recommended",
    description: "Tony Stark resists government demands for his armor while a vengeful engineer and a business rival close in.",
    poster: "posters/movies/iron-man-2.webp",
    runtime: 124, director: "Jon Favreau",
    cast: [
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Gwyneth Paltrow (Pepper Potts)",
      "Don Cheadle (James Rhodes / War Machine)",
      "Scarlett Johansson (Natasha Romanoff / Black Widow)",
      "Sam Rockwell (Justin Hammer)",
      "Mickey Rourke (Ivan Vanko)"],
    boxOffice: "$621M", imdb: 6.9, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: mid",
    series: "Iron Man trilogy", related: ["iron-man", "iron-man-3", "the-avengers"],
    watchBefore: ["iron-man"] },

  { id: "thor", title: "Thor", type: "movie", universe: "mcu",
    releaseDate: "2011-05-06", releaseOrder: 400, chronologicalOrder: 900, phase: 1, importance: "essential",
    description: "The arrogant Thor is banished to Earth without his powers and must prove himself worthy of his hammer.",
    poster: "posters/movies/thor.webp",
    runtime: 115, director: "Kenneth Branagh",
    cast: [
      "Chris Hemsworth (Thor)",
      "Natalie Portman (Jane Foster)",
      "Tom Hiddleston (Loki)",
      "Anthony Hopkins (Odin)",
      "Idris Elba (Heimdall)"],
    boxOffice: "$449M", imdb: 7.0, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: mid",
    series: "Thor", related: ["thor-the-dark-world", "the-avengers"] },

  { id: "captain-america-the-first-avenger", title: "Captain America: The First Avenger", type: "movie", universe: "mcu",
    releaseDate: "2011-07-22", releaseOrder: 500, chronologicalOrder: 200, phase: 1, importance: "essential",
    description: "Frail Steve Rogers becomes a super-soldier and takes the fight to a Nazi science division in World War II.",
    poster: "posters/movies/captain-america-the-first-avenger.webp",
    runtime: 124, director: "Joe Johnston",
    cast: [
      "Chris Evans (Steve Rogers / Captain America)",
      "Hayley Atwell (Peggy Carter)",
      "Sebastian Stan (Bucky Barnes)",
      "Hugo Weaving (Johann Schmidt / Red Skull)",
      "Tommy Lee Jones (Colonel Phillips)",
      "Stanley Tucci (Dr. Abraham Erskine)"],
    boxOffice: "$371M", imdb: 6.9, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: end",
    series: "Captain America", related: ["captain-america-the-winter-soldier", "the-avengers"] },

  { id: "the-avengers", title: "The Avengers", type: "movie", universe: "mcu",
    releaseDate: "2012-05-04", releaseOrder: 600, chronologicalOrder: 1100, phase: 1, importance: "essential",
    description: "Earth's mightiest heroes are forced to unite when Loki leads an alien invasion of New York.",
    poster: "posters/movies/the-avengers.webp",
    runtime: 143, director: "Joss Whedon",
    cast: [
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Chris Evans (Steve Rogers / Captain America)",
      "Mark Ruffalo (Bruce Banner / Hulk)",
      "Chris Hemsworth (Thor)",
      "Scarlett Johansson (Natasha Romanoff / Black Widow)",
      "Jeremy Renner (Clint Barton / Hawkeye)"],
    boxOffice: "$1.52B", imdb: 8.0, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "The Avengers", related: ["avengers-age-of-ultron", "iron-man", "thor", "captain-america-the-first-avenger"],
    watchBefore: ["iron-man", "iron-man-2", "the-incredible-hulk", "thor", "captain-america-the-first-avenger"] },

  /* ---------------------------------------------------------- Phase 2 */
  { id: "iron-man-3", title: "Iron Man 3", type: "movie", universe: "mcu",
    releaseDate: "2013-05-03", releaseOrder: 700, chronologicalOrder: 1400, phase: 2, importance: "recommended",
    description: "A shaken Tony Stark is drawn into a fight with a mysterious terrorist known as the Mandarin.",
    poster: "posters/movies/iron-man-3.webp",
    runtime: 130, director: "Shane Black",
    cast: [
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Gwyneth Paltrow (Pepper Potts)",
      "Don Cheadle (James Rhodes / Iron Patriot)",
      "Guy Pearce (Aldrich Killian)",
      "Ben Kingsley (Trevor Slattery)",
      "Rebecca Hall (Maya Hansen)"],
    boxOffice: "$1.21B", imdb: 7.1, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: end",
    series: "Iron Man trilogy", related: ["iron-man-2", "the-avengers"],
    watchBefore: ["iron-man", "the-avengers"] },

  { id: "thor-the-dark-world", title: "Thor: The Dark World", type: "movie", universe: "mcu",
    releaseDate: "2013-11-08", releaseOrder: 800, chronologicalOrder: 1300, phase: 2, importance: "optional",
    description: "Thor faces an ancient enemy who threatens the Nine Realms and turns to Loki for help.",
    poster: "posters/movies/thor-the-dark-world.webp",
    runtime: 112, director: "Alan Taylor",
    cast: [
      "Chris Hemsworth (Thor)",
      "Natalie Portman (Jane Foster)",
      "Tom Hiddleston (Loki)",
      "Christopher Eccleston (Malekith)",
      "Anthony Hopkins (Odin)",
      "Kat Dennings (Darcy Lewis)"],
    boxOffice: "$645M", imdb: 6.8, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Thor", related: ["thor", "thor-ragnarok"],
    watchBefore: ["thor", "the-avengers"] },

  { id: "captain-america-the-winter-soldier", title: "Captain America: The Winter Soldier", type: "movie", universe: "mcu",
    releaseDate: "2014-04-04", releaseOrder: 900, chronologicalOrder: 1600, phase: 2, importance: "essential",
    description: "Steve Rogers uncovers a conspiracy inside S.H.I.E.L.D. while hunted by a mysterious assassin.",
    poster: "posters/movies/captain-america-the-winter-soldier.webp",
    runtime: 136, director: "Anthony & Joe Russo",
    cast: [
      "Chris Evans (Steve Rogers / Captain America)",
      "Scarlett Johansson (Natasha Romanoff / Black Widow)",
      "Anthony Mackie (Sam Wilson / Falcon)",
      "Sebastian Stan (Bucky Barnes / Winter Soldier)",
      "Samuel L. Jackson (Nick Fury)",
      "Robert Redford (Alexander Pierce)"],
    boxOffice: "$714M", imdb: 7.7, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Captain America", related: ["captain-america-the-first-avenger", "captain-america-civil-war", "avengers-age-of-ultron"],
    watchBefore: ["captain-america-the-first-avenger", "the-avengers"] },

  { id: "guardians-of-the-galaxy", title: "Guardians of the Galaxy", type: "movie", universe: "mcu",
    releaseDate: "2014-08-01", releaseOrder: 1000, chronologicalOrder: 1700, phase: 2, importance: "recommended",
    description: "A band of misfit outlaws in space fight to keep a powerful artifact out of the wrong hands.",
    poster: "posters/movies/guardians-of-the-galaxy.webp",
    runtime: 121, director: "James Gunn",
    cast: [
      "Chris Pratt (Peter Quill / Star-Lord)",
      "Zoe Saldaña (Gamora)",
      "Dave Bautista (Drax)",
      "Vin Diesel (Groot)",
      "Bradley Cooper (Rocket)"],
    boxOffice: "$771M", imdb: 8.0, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Guardians of the Galaxy", related: ["guardians-of-the-galaxy-vol-2", "avengers-infinity-war"] },

  { id: "avengers-age-of-ultron", title: "Avengers: Age of Ultron", type: "movie", universe: "mcu",
    releaseDate: "2015-05-01", releaseOrder: 1100, chronologicalOrder: 2300, phase: 2, importance: "essential",
    description: "The Avengers face Ultron, an artificial intelligence that decides humanity must be eliminated.",
    poster: "posters/movies/avengers-age-of-ultron.webp",
    runtime: 141, director: "Joss Whedon",
    cast: [
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Chris Evans (Steve Rogers / Captain America)",
      "Chris Hemsworth (Thor)",
      "Mark Ruffalo (Bruce Banner / Hulk)",
      "Scarlett Johansson (Natasha Romanoff / Black Widow)",
      "James Spader (Ultron)"],
    boxOffice: "$1.40B", imdb: 7.3, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: mid",
    series: "The Avengers", related: ["the-avengers", "avengers-infinity-war", "captain-america-the-winter-soldier"],
    watchBefore: ["the-avengers", "iron-man-3", "thor-the-dark-world", "captain-america-the-winter-soldier"] },

  { id: "ant-man", title: "Ant-Man", type: "movie", universe: "mcu",
    releaseDate: "2015-07-17", releaseOrder: 1200, chronologicalOrder: 2400, phase: 2, importance: "recommended",
    description: "Con man Scott Lang is recruited to wear a shrinking suit and pull off a heist for inventor Hank Pym.",
    poster: "posters/movies/ant-man.webp",
    runtime: 117, director: "Peyton Reed",
    cast: [
      "Paul Rudd (Scott Lang / Ant-Man)",
      "Evangeline Lilly (Hope van Dyne)",
      "Michael Douglas (Hank Pym)",
      "Corey Stoll (Darren Cross / Yellowjacket)",
      "Michael Peña (Luis)"],
    boxOffice: "$519M", imdb: 7.2, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Ant-Man", related: ["ant-man-and-the-wasp", "captain-america-civil-war"],
    watchBefore: ["avengers-age-of-ultron"] },

  /* ---------------------------------------------------------- Phase 3 */
  { id: "captain-america-civil-war", title: "Captain America: Civil War", type: "movie", universe: "mcu",
    releaseDate: "2016-05-06", releaseOrder: 1300, chronologicalOrder: 2900, phase: 3, importance: "essential",
    description: "Government oversight splits the Avengers into two opposing camps.",
    poster: "posters/movies/captain-america-civil-war.webp",
    runtime: 147, director: "Anthony & Joe Russo",
    cast: [
      "Chris Evans (Steve Rogers / Captain America)",
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Scarlett Johansson (Natasha Romanoff / Black Widow)",
      "Sebastian Stan (Bucky Barnes)",
      "Anthony Mackie (Sam Wilson / Falcon)",
      "Chadwick Boseman (T'Challa / Black Panther)"],
    boxOffice: "$1.15B", imdb: 7.8, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Captain America", related: ["captain-america-the-winter-soldier", "captain-america-brave-new-world", "avengers-infinity-war", "black-panther", "spider-man-homecoming"],
    watchBefore: ["captain-america-the-winter-soldier", "avengers-age-of-ultron", "ant-man"] },

  { id: "doctor-strange", title: "Doctor Strange", type: "movie", universe: "mcu",
    releaseDate: "2016-11-04", releaseOrder: 1400, chronologicalOrder: 3400, phase: 3, importance: "recommended",
    description: "A brilliant surgeon whose career ends in a crash turns to the mystic arts.",
    poster: "posters/movies/doctor-strange.webp",
    runtime: 115, director: "Scott Derrickson",
    cast: [
      "Benedict Cumberbatch (Stephen Strange)",
      "Chiwetel Ejiofor (Karl Mordo)",
      "Rachel McAdams (Christine Palmer)",
      "Benedict Wong (Wong)",
      "Mads Mikkelsen (Kaecilius)",
      "Tilda Swinton (The Ancient One)"],
    boxOffice: "$676M", imdb: 7.5, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Doctor Strange", related: ["doctor-strange-in-the-multiverse-of-madness", "thor-ragnarok"] },

  { id: "guardians-of-the-galaxy-vol-2", title: "Guardians of the Galaxy Vol. 2", type: "movie", universe: "mcu",
    releaseDate: "2017-05-05", releaseOrder: 1500, chronologicalOrder: 1800, phase: 3, importance: "recommended",
    description: "The Guardians are hunted across space while Peter Quill learns the truth about his father.",
    poster: "posters/movies/guardians-of-the-galaxy-vol-2.webp",
    runtime: 136, director: "James Gunn",
    cast: [
      "Chris Pratt (Peter Quill / Star-Lord)",
      "Zoe Saldaña (Gamora)",
      "Dave Bautista (Drax)",
      "Vin Diesel (Baby Groot)",
      "Bradley Cooper (Rocket)",
      "Kurt Russell (Ego)"],
    boxOffice: "$869M", imdb: 7.6, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "5 scenes: 4 mid and 1 end",
    series: "Guardians of the Galaxy", related: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-volume-3"],
    watchBefore: ["guardians-of-the-galaxy"] },

  { id: "spider-man-homecoming", title: "Spider-Man: Homecoming", type: "movie", universe: "mcu",
    releaseDate: "2017-07-07", releaseOrder: 1600, chronologicalOrder: 3200, phase: 3, importance: "recommended",
    description: "Peter Parker juggles high school and his Spider-Man ambitions while chasing a dangerous arms dealer.",
    poster: "posters/movies/spider-man-homecoming.webp",
    runtime: 133, director: "Jon Watts",
    cast: [
      "Tom Holland (Peter Parker / Spider-Man)",
      "Michael Keaton (Adrian Toomes / Vulture)",
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Marisa Tomei (May Parker)",
      "Zendaya (Michelle \"MJ\" Jones)",
      "Jacob Batalon (Ned Leeds)"],
    boxOffice: "$879M", imdb: 7.4, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Spider-Man (MCU)", related: ["spider-man-far-from-home", "captain-america-civil-war"],
    watchBefore: ["the-avengers", "captain-america-civil-war"] },

  { id: "thor-ragnarok", title: "Thor: Ragnarok", type: "movie", universe: "mcu",
    releaseDate: "2017-11-03", releaseOrder: 1700, chronologicalOrder: 3900, phase: 3, importance: "essential",
    description: "Stranded on a gladiator planet, Thor must escape in time to stop his sister Hela from conquering Asgard.",
    poster: "posters/movies/thor-ragnarok.webp",
    runtime: 130, director: "Taika Waititi",
    cast: [
      "Chris Hemsworth (Thor)",
      "Tom Hiddleston (Loki)",
      "Cate Blanchett (Hela)",
      "Tessa Thompson (Valkyrie)",
      "Jeff Goldblum (Grandmaster)",
      "Mark Ruffalo (Bruce Banner / Hulk)"],
    boxOffice: "$850M", imdb: 7.9, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Thor", related: ["thor-the-dark-world", "thor-love-and-thunder", "the-incredible-hulk", "avengers-infinity-war"],
    watchBefore: ["thor", "thor-the-dark-world", "avengers-age-of-ultron", "doctor-strange"] },

  { id: "black-panther", title: "Black Panther", type: "movie", universe: "mcu",
    releaseDate: "2018-02-16", releaseOrder: 1800, chronologicalOrder: 3100, phase: 3, importance: "recommended",
    description: "T'Challa returns to Wakanda to claim the throne and confronts a threat from its past.",
    poster: "posters/movies/black-panther.webp",
    runtime: 134, director: "Ryan Coogler",
    cast: [
      "Chadwick Boseman (T'Challa / Black Panther)",
      "Michael B. Jordan (Erik Killmonger)",
      "Lupita Nyong'o (Nakia)",
      "Danai Gurira (Okoye)",
      "Letitia Wright (Shuri)",
      "Angela Bassett (Ramonda)"],
    boxOffice: "$1.33B", imdb: 7.3, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Black Panther", related: ["black-panther-wakanda-forever", "captain-america-civil-war"],
    watchBefore: ["captain-america-civil-war"] },

  { id: "avengers-infinity-war", title: "Avengers: Infinity War", type: "movie", universe: "mcu",
    releaseDate: "2018-04-27", releaseOrder: 1900, chronologicalOrder: 4300, phase: 3, importance: "essential",
    description: "The Avengers and their allies race to stop Thanos from collecting the Infinity Stones.",
    poster: "posters/movies/avengers-infinity-war.webp",
    runtime: 149, director: "Anthony & Joe Russo",
    cast: [
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Chris Hemsworth (Thor)",
      "Mark Ruffalo (Bruce Banner / Hulk)",
      "Chris Evans (Steve Rogers / Captain America)",
      "Chris Pratt (Peter Quill / Star-Lord)",
      "Josh Brolin (Thanos)"],
    boxOffice: "$2.05B", imdb: 8.4, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: end",
    series: "The Avengers", related: ["avengers-age-of-ultron", "avengers-endgame", "guardians-of-the-galaxy", "doctor-strange"],
    watchBefore: ["guardians-of-the-galaxy", "avengers-age-of-ultron", "captain-america-civil-war", "doctor-strange", "spider-man-homecoming", "thor-ragnarok", "black-panther"] },

  { id: "ant-man-and-the-wasp", title: "Ant-Man and the Wasp", type: "movie", universe: "mcu",
    releaseDate: "2018-07-06", releaseOrder: 2000, chronologicalOrder: 4200, phase: 3, importance: "optional",
    description: "Scott Lang, under house arrest, is pulled into Hope and Hank Pym's hunt for the missing Janet van Dyne.",
    poster: "posters/movies/ant-man-and-the-wasp.webp",
    runtime: 118, director: "Peyton Reed",
    cast: [
      "Paul Rudd (Scott Lang / Ant-Man)",
      "Evangeline Lilly (Hope van Dyne / Wasp)",
      "Michael Peña (Luis)",
      "Walton Goggins (Sonny Burch)",
      "Michelle Pfeiffer (Janet van Dyne)",
      "Michael Douglas (Hank Pym)"],
    boxOffice: "$623M", imdb: 7.0, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Ant-Man", related: ["ant-man", "ant-man-and-the-wasp-quantumania", "avengers-infinity-war"],
    watchBefore: { release: ["ant-man", "captain-america-civil-war", "avengers-infinity-war"], chronological: ["ant-man", "captain-america-civil-war"] } },

  { id: "captain-marvel", title: "Captain Marvel", type: "movie", universe: "mcu",
    releaseDate: "2019-03-08", releaseOrder: 2100, chronologicalOrder: 400, phase: 3, importance: "essential",
    description: "Carol Danvers, a Kree warrior with no memory of her past, lands in the middle of a war on Earth in 1995.",
    poster: "posters/movies/captain-marvel.webp",
    runtime: 123, director: "Anna Boden & Ryan Fleck",
    cast: [
      "Brie Larson (Carol Danvers / Captain Marvel)",
      "Samuel L. Jackson (Nick Fury)",
      "Ben Mendelsohn (Talos)",
      "Jude Law (Yon-Rogg)",
      "Annette Bening (Supreme Intelligence)",
      "Lashana Lynch (Maria Rambeau)"],
    boxOffice: "$1.13B", imdb: 6.8, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Captain Marvel", related: ["the-marvels", "avengers-endgame"],
    watchBefore: { release: ["captain-america-the-first-avenger", "avengers-infinity-war"], chronological: ["captain-america-the-first-avenger"] } },

  { id: "avengers-endgame", title: "Avengers: Endgame", type: "movie", universe: "mcu",
    releaseDate: "2019-04-26", releaseOrder: 2200, chronologicalOrder: 4400, phase: 3, importance: "essential",
    description: "The surviving heroes assemble once more to reverse the damage Thanos has done.",
    poster: "posters/movies/avengers-endgame.webp",
    runtime: 181, director: "Anthony & Joe Russo",
    cast: [
      "Robert Downey Jr. (Tony Stark / Iron Man)",
      "Chris Evans (Steve Rogers / Captain America)",
      "Mark Ruffalo (Bruce Banner / Hulk)",
      "Chris Hemsworth (Thor)",
      "Scarlett Johansson (Natasha Romanoff / Black Widow)",
      "Jeremy Renner (Clint Barton / Hawkeye)"],
    boxOffice: "$2.80B", imdb: 8.4, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "The Avengers", related: ["avengers-infinity-war", "captain-marvel", "ant-man-and-the-wasp"],
    watchBefore: ["captain-marvel", "ant-man", "avengers-infinity-war", "ant-man-and-the-wasp"] },

  { id: "spider-man-far-from-home", title: "Spider-Man: Far From Home", type: "movie", universe: "mcu",
    releaseDate: "2019-07-02", releaseOrder: 2300, chronologicalOrder: 5100, phase: 3, importance: "recommended",
    description: "Peter Parker's European school trip is interrupted by Nick Fury and a new elemental threat.",
    poster: "posters/movies/spider-man-far-from-home.webp",
    runtime: 129, director: "Jon Watts",
    cast: [
      "Tom Holland (Peter Parker / Spider-Man)",
      "Samuel L. Jackson (Nick Fury)",
      "Zendaya (Michelle \"MJ\" Jones)",
      "Jake Gyllenhaal (Quentin Beck / Mysterio)",
      "Cobie Smulders (Maria Hill)",
      "Jon Favreau (Happy Hogan)"],
    boxOffice: "$1.13B", imdb: 7.4, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Spider-Man (MCU)", related: ["spider-man-homecoming", "spider-man-no-way-home", "avengers-endgame"],
    watchBefore: ["spider-man-homecoming", "avengers-infinity-war", "avengers-endgame"] },

  /* ---------------------------------------------------------- Phase 4 */
  { id: "black-widow", title: "Black Widow", type: "movie", universe: "mcu",
    releaseDate: "2021-07-09", releaseOrder: 2400, chronologicalOrder: 3000, phase: 4, importance: "recommended",
    description: "Natasha Romanoff confronts her past and the Red Room program that trained her.",
    poster: "posters/movies/black-widow.webp",
    runtime: 134, director: "Cate Shortland",
    cast: [
      "Scarlett Johansson (Natasha Romanoff / Black Widow)",
      "Florence Pugh (Yelena Belova)",
      "David Harbour (Alexei Shostakov / Red Guardian)",
      "Rachel Weisz (Melina Vostokoff)",
      "O-T Fagbenle (Mason)",
      "Ray Winstone (Dreykov)"],
    boxOffice: "$380M", imdb: 6.7, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: mid",
    series: "Black Widow", related: ["captain-america-civil-war", "thunderbolts"],
    watchBefore: { release: ["captain-america-civil-war", "avengers-endgame"], chronological: ["captain-america-civil-war"] } },

  { id: "shang-chi-and-the-legend-of-the-ten-rings", title: "Shang-Chi and the Legend of the Ten Rings", type: "movie", universe: "mcu",
    releaseDate: "2021-09-03", releaseOrder: 2500, chronologicalOrder: 4900, phase: 4, importance: "recommended",
    description: "Shang-Chi is pulled back into the criminal organization he fled years ago.",
    poster: "posters/movies/shang-chi-and-the-legend-of-the-ten-rings.webp",
    runtime: 132, director: "Destin Daniel Cretton",
    cast: [
      "Simu Liu (Shang-Chi)",
      "Awkwafina (Katy)",
      "Tony Leung (Wenwu)",
      "Meng'er Zhang (Xialing)",
      "Fala Chen (Ying Li)",
      "Michelle Yeoh (Ying Nan)"],
    boxOffice: "$432M", imdb: 7.4, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Shang-Chi", related: ["captain-marvel", "doctor-strange"],
    watchBefore: ["the-incredible-hulk", "iron-man-3"] },

  { id: "eternals", title: "Eternals", type: "movie", universe: "mcu",
    releaseDate: "2021-11-05", releaseOrder: 2600, chronologicalOrder: 5200, phase: 4, importance: "optional",
    description: "Immortal beings who have secretly guarded Earth for thousands of years reunite to face an ancient threat.",
    poster: "posters/movies/eternals.webp",
    runtime: 156, director: "Chloé Zhao",
    cast: [
      "Gemma Chan (Sersi)",
      "Richard Madden (Ikaris)",
      "Kumail Nanjiani (Kingo)",
      "Lauren Ridloff (Makkari)",
      "Brian Tyree Henry (Phastos)",
      "Salma Hayek (Ajak)"],
    boxOffice: "$402M", imdb: 6.3, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Eternals", related: ["avengers-endgame", "avengers-infinity-war"],
    watchBefore: ["avengers-endgame"] },

  { id: "spider-man-no-way-home", title: "Spider-Man: No Way Home", type: "movie", universe: "mcu",
    releaseDate: "2021-12-17", releaseOrder: 2700, chronologicalOrder: 5300, phase: 4, importance: "essential",
    description: "Peter Parker's identity is exposed, and a spell gone wrong lets in visitors from other universes.",
    poster: "posters/movies/spider-man-no-way-home.webp",
    runtime: 148, director: "Jon Watts",
    cast: [
      "Tom Holland (Peter Parker / Spider-Man)",
      "Zendaya (Michelle \"MJ\" Jones)",
      "Benedict Cumberbatch (Stephen Strange)",
      "Willem Dafoe (Norman Osborn / Green Goblin)",
      "Alfred Molina (Otto Octavius / Doc Ock)",
      "Jacob Batalon (Ned Leeds)"],
    boxOffice: "$1.92B", imdb: 8.2, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Spider-Man (MCU)", related: ["spider-man-far-from-home", "spider-man-brand-new-day", "doctor-strange-in-the-multiverse-of-madness"],
    watchBefore: ["spider-man-homecoming", "doctor-strange", "spider-man-far-from-home"] },

  { id: "doctor-strange-in-the-multiverse-of-madness", title: "Doctor Strange in the Multiverse of Madness", type: "movie", universe: "mcu",
    releaseDate: "2022-05-06", releaseOrder: 2800, chronologicalOrder: 5400, phase: 4, importance: "essential",
    description: "Stephen Strange protects America Chavez, a teenager who can travel between universes, from a powerful pursuer.",
    poster: "posters/movies/doctor-strange-in-the-multiverse-of-madness.webp",
    runtime: 126, director: "Sam Raimi",
    cast: [
      "Benedict Cumberbatch (Stephen Strange)",
      "Elizabeth Olsen (Wanda Maximoff / Scarlet Witch)",
      "Xochitl Gomez (America Chavez)",
      "Chiwetel Ejiofor (Karl Mordo)",
      "Benedict Wong (Wong)",
      "Rachel McAdams (Christine Palmer)"],
    boxOffice: "$956M", imdb: 6.9, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Doctor Strange", related: ["doctor-strange", "spider-man-no-way-home"],
    watchBefore: ["doctor-strange", "wandavision", "spider-man-no-way-home"] },

  { id: "thor-love-and-thunder", title: "Thor: Love and Thunder", type: "movie", universe: "mcu",
    releaseDate: "2022-07-08", releaseOrder: 2900, chronologicalOrder: 6100, phase: 4, importance: "optional",
    description: "Thor sets out to stop a killer of gods, joined by Valkyrie, Korg and Jane Foster, who now wields his old hammer.",
    poster: "posters/movies/thor-love-and-thunder.webp",
    runtime: 118, director: "Taika Waititi",
    cast: [
      "Chris Hemsworth (Thor)",
      "Christian Bale (Gorr the God Butcher)",
      "Tessa Thompson (Valkyrie)",
      "Natalie Portman (Jane Foster / Mighty Thor)",
      "Russell Crowe (Zeus)",
      "Taika Waititi (Korg)"],
    boxOffice: "$761M", imdb: 6.2, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Thor", related: ["thor-ragnarok", "guardians-of-the-galaxy-volume-3"],
    watchBefore: ["guardians-of-the-galaxy", "thor-ragnarok", "avengers-endgame"] },

  { id: "black-panther-wakanda-forever", title: "Black Panther: Wakanda Forever", type: "movie", universe: "mcu",
    releaseDate: "2022-11-11", releaseOrder: 3000, chronologicalOrder: 5700, phase: 4, importance: "recommended",
    description: "Wakanda's leaders defend their nation after the loss of their king and the rise of a hidden underwater power.",
    poster: "posters/movies/black-panther-wakanda-forever.webp",
    runtime: 161, director: "Ryan Coogler",
    cast: [
      "Letitia Wright (Shuri)",
      "Angela Bassett (Ramonda)",
      "Tenoch Huerta (Namor)",
      "Lupita Nyong'o (Nakia)",
      "Danai Gurira (Okoye)",
      "Winston Duke (M'Baku)"],
    boxOffice: "$859M", imdb: 6.7, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: mid",
    series: "Black Panther", related: ["black-panther", "avengers-endgame"],
    watchBefore: ["black-panther", "avengers-endgame"] },

  /* ---------------------------------------------------------- Phase 5 */
  { id: "ant-man-and-the-wasp-quantumania", title: "Ant-Man and the Wasp: Quantumania", type: "movie", universe: "mcu",
    releaseDate: "2023-02-17", releaseOrder: 3100, chronologicalOrder: 6500, phase: 5, importance: "essential",
    description: "Scott Lang, Hope and their family are pulled into the Quantum Realm, where they meet Kang the Conqueror.",
    poster: "posters/movies/ant-man-and-the-wasp-quantumania.jpg",
    runtime: 125, director: "Peyton Reed",
    cast: [
      "Paul Rudd (Scott Lang / Ant-Man)",
      "Evangeline Lilly (Hope van Dyne / Wasp)",
      "Jonathan Majors (Kang the Conqueror)",
      "Michelle Pfeiffer (Janet van Dyne)",
      "Michael Douglas (Hank Pym)",
      "Kathryn Newton (Cassie Lang)"],
    boxOffice: "$476M", imdb: 6.1, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Ant-Man", related: ["ant-man-and-the-wasp", "avengers-endgame"],
    watchBefore: ["ant-man-and-the-wasp", "avengers-endgame", "loki-s1"] },

  { id: "guardians-of-the-galaxy-volume-3", title: "Guardians of the Galaxy Vol. 3", type: "movie", universe: "mcu",
    releaseDate: "2023-05-05", releaseOrder: 3200, chronologicalOrder: 6600, phase: 5, importance: "recommended",
    description: "The Guardians rally to protect Rocket and confront the man who created him.",
    poster: "posters/movies/guardians-of-the-galaxy-volume-3.webp",
    runtime: 150, director: "James Gunn",
    cast: [
      "Chris Pratt (Peter Quill / Star-Lord)",
      "Zoe Saldaña (Gamora)",
      "Dave Bautista (Drax)",
      "Bradley Cooper (Rocket)",
      "Karen Gillan (Nebula)",
      "Will Poulter (Adam Warlock)"],
    boxOffice: "$846M", imdb: 7.9, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Guardians of the Galaxy", related: ["guardians-of-the-galaxy-vol-2"],
    watchBefore: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "thor-love-and-thunder"] },

  { id: "the-marvels", title: "The Marvels", type: "movie", universe: "mcu",
    releaseDate: "2023-11-10", releaseOrder: 3300, chronologicalOrder: 6800, phase: 5, importance: "recommended",
    description: "Carol Danvers, Monica Rambeau and Kamala Khan find their powers linked and start swapping places.",
    poster: "posters/movies/the-marvels.webp",
    runtime: 105, director: "Nia DaCosta",
    cast: [
      "Brie Larson (Carol Danvers / Captain Marvel)",
      "Teyonah Parris (Monica Rambeau)",
      "Iman Vellani (Kamala Khan / Ms. Marvel)",
      "Samuel L. Jackson (Nick Fury)",
      "Zawe Ashton (Dar-Benn)",
      "Park Seo-joon (Prince Yan)"],
    boxOffice: "$206M", imdb: 5.5, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: mid",
    series: "Captain Marvel", related: ["captain-marvel"],
    watchBefore: ["captain-marvel", "wandavision"] },

  { id: "deadpool-and-wolverine", title: "Deadpool & Wolverine", type: "movie", universe: "mcu",
    releaseDate: "2024-07-26", releaseOrder: 3400, chronologicalOrder: 7100, phase: 5, importance: "recommended",
    description: "The TVA recruits Wade Wilson, who teams up with a reluctant Wolverine to save his world.",
    poster: "posters/movies/deadpool-and-wolverine.webp",
    runtime: 128, director: "Shawn Levy",
    cast: [
      "Ryan Reynolds (Wade Wilson / Deadpool)",
      "Hugh Jackman (Logan / Wolverine)",
      "Emma Corrin (Cassandra Nova)",
      "Matthew Macfadyen (Mr. Paradox)",
      "Rob Delaney (Peter)",
      "Morena Baccarin (Vanessa)"],
    boxOffice: "$1.34B", imdb: 7.5, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene",
    series: "Deadpool", related: ["deadpool-2", "logan", "x-men-days-of-future-past"],
    watchBefore: ["loki", "deadpool", "deadpool-2", "logan"] },

  { id: "captain-america-brave-new-world", title: "Captain America: Brave New World", type: "movie", universe: "mcu",
    releaseDate: "2025-02-14", releaseOrder: 3500, chronologicalOrder: 7500, phase: 5, importance: "recommended",
    description: "Sam Wilson, the new Captain America, is caught up in an international crisis involving President Ross.",
    poster: "posters/movies/captain-america-brave-new-world.webp",
    runtime: 118, director: "Julius Onah",
    cast: [
      "Anthony Mackie (Sam Wilson / Captain America)",
      "Harrison Ford (Thaddeus Ross / Red Hulk)",
      "Danny Ramirez (Joaquin Torres / Falcon)",
      "Shira Haas (Ruth Bat-Seraph)",
      "Carl Lumbly (Isaiah Bradley)",
      "Tim Blake Nelson (Samuel Sterns / The Leader)"],
    boxOffice: "$415M", imdb: 5.6, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene",
    series: "Captain America", related: ["captain-america-civil-war", "the-incredible-hulk", "thunderbolts"],
    watchBefore: ["the-incredible-hulk", "captain-america-civil-war", "the-falcon-and-the-winter-soldier", "eternals"] },

  { id: "thunderbolts", title: "Thunderbolts*", type: "movie", universe: "mcu",
    releaseDate: "2025-05-02", releaseOrder: 3600, chronologicalOrder: 7600, phase: 5, importance: "recommended",
    description: "A team of antiheroes and government castoffs is sent on a mission that may be a trap.",
    poster: "posters/movies/thunderbolts.webp",
    runtime: 127, director: "Jake Schreier",
    cast: [
      "Florence Pugh (Yelena Belova)",
      "Sebastian Stan (Bucky Barnes)",
      "David Harbour (Red Guardian)",
      "Wyatt Russell (John Walker / U.S. Agent)",
      "Olga Kurylenko (Antonia Dreykov / Taskmaster)",
      "Julia Louis-Dreyfus (Valentina Allegra de Fontaine)"],
    boxOffice: "$382M", imdb: 7.1, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Thunderbolts", related: ["black-widow", "captain-america-brave-new-world", "the-fantastic-four-first-steps"],
    watchBefore: ["ant-man-and-the-wasp", "black-widow", "the-falcon-and-the-winter-soldier", "hawkeye"] },

  /* ---------------------------------------------------------- Phase 6 */
  { id: "the-fantastic-four-first-steps", title: "The Fantastic Four: First Steps", type: "movie", universe: "mcu",
    releaseDate: "2025-07-25", releaseOrder: 3700, chronologicalOrder: 7700, phase: 6, importance: "recommended",
    description: "Marvel's first family defends its retro-futuristic world from the planet-devouring Galactus.",
    poster: "posters/movies/the-fantastic-four-first-steps.webp",
    runtime: 115, director: "Matt Shakman",
    cast: [
      "Pedro Pascal (Reed Richards / Mister Fantastic)",
      "Vanessa Kirby (Sue Storm / Invisible Woman)",
      "Joseph Quinn (Johnny Storm / Human Torch)",
      "Ebon Moss-Bachrach (Ben Grimm / The Thing)",
      "Ralph Ineson (Galactus)",
      "Julia Garner (Shalla-Bal / Silver Surfer)"],
    boxOffice: "$522M", imdb: 6.8, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Fantastic Four", related: ["thunderbolts"] },

  { id: "spider-man-brand-new-day", title: "Spider-Man: Brand New Day", type: "movie", universe: "mcu",
    releaseDate: "2026-07-31", releaseOrder: 3800, chronologicalOrder: 8100, phase: 6, importance: "recommended",
    description: "Four years after the world forgot him, Peter Parker fights crime as a full-time Spider-Man as a powerful new threat emerges.",
    poster: "posters/movies/spider-man-brand-new-day.webp",
    runtime: 145, director: "Destin Daniel Cretton",
    cast: [
      "Tom Holland (Peter Parker / Spider-Man)",
      "Zendaya (Michelle \"MJ\" Jones)",
      "Jacob Batalon (Ned Leeds)",
      "Jon Bernthal (Frank Castle / The Punisher)",
      "Marisa Tomei (May Parker)",
      "Mark Ruffalo (Bruce Banner / Hulk)"],
    boxOffice: "$2.52B", imdb: 8.2, trailer: "", whereToWatch: "Disney+", dvdNumber: "",
    postCredits: "1 scene: end",
    series: "Spider-Man (MCU)", related: ["spider-man-no-way-home"],
    watchBefore: ["spider-man-far-from-home", "spider-man-no-way-home"] },
];

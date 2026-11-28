/*
 * ==========================================================================
 *  QUICK GUIDE: HOW TO EDIT THIS FILE  (Other Marvel TV)
 * ==========================================================================
 *  Live-action Marvel shows that are NOT on the main MCU timeline (Netflix
 *  Defenders shows, ABC / Hulu / Freeform shows, Fox / FX shows, and later
 *  Disney+ extras). They have no phases. On the TV Shows page they appear
 *  under the MCU phases, grouped by "group" and sorted by release date.
 *
 *  REMOVE a show: delete its block ({ id: ... to its ] }, ) and save.
 *  REMOVE ALL of them: delete this file AND the line
 *  <script src="js/data-tv-other.js"></script> in index.html.
 *  ADD a show: copy a block, give it a new id (season ids "<show-id>-s1"...)
 *  and a poster path. See README.md ("Other Marvel TV").
 *
 *  group = the sub-section on the TV page. Same text = same section.
 *  A season only needs: id, season, releaseDate, episodeCount, episodes: [].
 *  No phase or order numbers are needed here.
 *  Posters: posters/tv/<name>.webp. show.poster is the season 1 poster. A
 *  later season can have its own poster; if the file is missing a
 *  "Poster not added yet" placeholder shows.
 * ==========================================================================
 */
window.MCU_TV_OTHER = [
  /* ===== SHOW: Daredevil ===== */
  { id: "daredevil", title: "Daredevil", type: "tv", universe: "other", category: "series", group: "Netflix / Defenders",
    importance: "recommended", poster: "posters/tv/marvel-s-daredevil.webp",
    description: "Blind lawyer Matt Murdock fights for Hell's Kitchen by day and as a masked vigilante by night.",
    creator: "Drew Goddard (showrunners: Steven S. DeKnight, Marco Ramirez, Erik Oleson)",
    cast: [
      "Charlie Cox (Matt Murdock / Daredevil)",
      "Deborah Ann Woll (Karen Page)",
      "Elden Henson (Foggy Nelson)",
      "Vincent D'Onofrio (Wilson Fisk / Kingpin)",
      "Jon Bernthal (Frank Castle / The Punisher)",
      "Rosario Dawson (Claire Temple)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "daredevil-s1", season: 1, releaseDate: "2015-04-10", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-daredevil.webp" },
      { id: "daredevil-s2", season: 2, releaseDate: "2016-03-18", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-daredevil-s2.webp" },
      { id: "daredevil-s3", season: 3, releaseDate: "2018-10-19", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-daredevil-s3.webp" }
    ] },

  /* ===== SHOW: Jessica Jones ===== */
  { id: "jessica-jones", title: "Jessica Jones", type: "tv", universe: "other", category: "series", group: "Netflix / Defenders",
    importance: "optional", poster: "posters/tv/marvel-s-jessica-jones.webp",
    description: "Former hero Jessica Jones runs a small private investigator business in New York and is haunted by a mind-controlling villain.",
    creator: "Melissa Rosenberg",
    cast: [
      "Krysten Ritter (Jessica Jones)",
      "David Tennant (Kilgrave)",
      "Rachael Taylor (Trish Walker)",
      "Carrie-Anne Moss (Jeri Hogarth)",
      "Mike Colter (Luke Cage)",
      "Eka Darville (Malcolm Ducasse)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "jessica-jones-s1", season: 1, releaseDate: "2015-11-20", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-jessica-jones.webp" },
      { id: "jessica-jones-s2", season: 2, releaseDate: "2018-03-08", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-jessica-jones-s2.webp" },
      { id: "jessica-jones-s3", season: 3, releaseDate: "2019-06-14", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-jessica-jones-s3.webp" }
    ] },

  /* ===== SHOW: Luke Cage ===== */
  { id: "luke-cage", title: "Luke Cage", type: "tv", universe: "other", category: "series", group: "Netflix / Defenders",
    importance: "optional", poster: "posters/tv/marvel-s-luke-cage.webp",
    description: "Wrongly imprisoned and gifted with unbreakable skin, Luke Cage tries to rebuild his life and protect Harlem.",
    creator: "Cheo Hodari Coker",
    cast: [
      "Mike Colter (Luke Cage)",
      "Mahershala Ali (Cornell 'Cottonmouth' Stokes)",
      "Simone Missick (Misty Knight)",
      "Alfre Woodard (Mariah Dillard)",
      "Theo Rossi (Hernan 'Shades' Alvarez)",
      "Rosario Dawson (Claire Temple)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "luke-cage-s1", season: 1, releaseDate: "2016-09-30", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-luke-cage.webp" },
      { id: "luke-cage-s2", season: 2, releaseDate: "2018-06-22", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-luke-cage-s2.webp" }
    ] },

  /* ===== SHOW: Iron Fist ===== */
  { id: "iron-fist", title: "Iron Fist", type: "tv", universe: "other", category: "series", group: "Netflix / Defenders",
    importance: "optional", poster: "posters/tv/marvel-s-iron-fist.webp",
    description: "Danny Rand returns to New York after fifteen years in K'un-Lun, with the power of the Iron Fist.",
    creator: "Scott Buck",
    cast: [
      "Finn Jones (Danny Rand / Iron Fist)",
      "Jessica Henwick (Colleen Wing)",
      "Tom Pelphrey (Ward Meachum)",
      "Jessica Stroup (Joy Meachum)",
      "David Wenham (Harold Meachum)",
      "Sacha Dhawan (Davos)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "iron-fist-s1", season: 1, releaseDate: "2017-03-17", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-iron-fist.webp" },
      { id: "iron-fist-s2", season: 2, releaseDate: "2018-09-07", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvel-s-iron-fist-s2.webp" }
    ] },

  /* ===== SHOW: The Defenders ===== */
  { id: "the-defenders", title: "The Defenders", type: "tv", universe: "other", category: "series", group: "Netflix / Defenders",
    importance: "optional", poster: "posters/tv/marvel-s-the-defenders.webp",
    description: "Daredevil, Jessica Jones, Luke Cage and Iron Fist team up to stop The Hand.",
    creator: "Douglas Petrie & Marco Ramirez",
    cast: [
      "Charlie Cox (Matt Murdock / Daredevil)",
      "Krysten Ritter (Jessica Jones)",
      "Mike Colter (Luke Cage)",
      "Finn Jones (Danny Rand / Iron Fist)",
      "Sigourney Weaver (Alexandra Reid)",
      "Jessica Henwick (Colleen Wing)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "the-defenders-s1", season: 1, releaseDate: "2017-08-18", episodeCount: 8, episodes: [],
        poster: "posters/tv/marvel-s-the-defenders.webp" }
    ] },

  /* ===== SHOW: The Punisher ===== */
  { id: "the-punisher", title: "The Punisher", type: "tv", universe: "other", category: "series", group: "Netflix / Defenders",
    importance: "optional", poster: "posters/tv/marvel-s-the-punisher.webp",
    description: "Frank Castle, hunting those behind his family's death, uncovers a conspiracy and fights to stay out of sight.",
    creator: "Steve Lightfoot",
    cast: [
      "Jon Bernthal (Frank Castle / The Punisher)",
      "Ebon Moss-Bachrach (David Lieberman / Micro)",
      "Amber Rose Revah (Dinah Madani)",
      "Ben Barnes (Billy Russo)",
      "Deborah Ann Woll (Karen Page)",
      "Jason R. Moore (Curtis Hoyle)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "the-punisher-s1", season: 1, releaseDate: "2017-11-17", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-the-punisher.webp" },
      { id: "the-punisher-s2", season: 2, releaseDate: "2019-01-18", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-the-punisher-s2.webp" }
    ] },

  /* ===== SHOW: Agents of S.H.I.E.L.D. ===== */
  { id: "agents-of-shield", title: "Agents of S.H.I.E.L.D.", type: "tv", universe: "other", category: "series", group: "ABC, Hulu & Freeform",
    importance: "optional", poster: "posters/tv/marvel-s-agents-of-s-h-i-e-l-d.webp",
    description: "Agent Phil Coulson leads a team of S.H.I.E.L.D. agents who deal with strange threats around the world.",
    creator: "Joss Whedon, Jed Whedon & Maurissa Tancharoen",
    cast: [
      "Clark Gregg (Phil Coulson)",
      "Ming-Na Wen (Melinda May)",
      "Chloe Bennet (Daisy Johnson / Quake)",
      "Iain De Caestecker (Leo Fitz)",
      "Elizabeth Henstridge (Jemma Simmons)",
      "Henry Simmons (Alphonso 'Mack' Mackenzie)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "agents-of-shield-s1", season: 1, releaseDate: "2013-09-24", episodeCount: 22, episodes: [],
        poster: "posters/tv/marvel-s-agents-of-s-h-i-e-l-d.webp" },
      { id: "agents-of-shield-s2", season: 2, releaseDate: "2014-09-23", episodeCount: 22, episodes: [],
        poster: "posters/tv/marvel-s-agents-of-s-h-i-e-l-d-s2.webp" },
      { id: "agents-of-shield-s3", season: 3, releaseDate: "2015-09-29", episodeCount: 22, episodes: [],
        poster: "posters/tv/marvel-s-agents-of-s-h-i-e-l-d-s3.webp" },
      { id: "agents-of-shield-s4", season: 4, releaseDate: "2016-09-20", episodeCount: 22, episodes: [],
        poster: "posters/tv/marvel-s-agents-of-s-h-i-e-l-d-s4.webp" },
      { id: "agents-of-shield-s5", season: 5, releaseDate: "2017-12-01", episodeCount: 22, episodes: [],
        poster: "posters/tv/marvel-s-agents-of-s-h-i-e-l-d-s5.webp" },
      { id: "agents-of-shield-s6", season: 6, releaseDate: "2019-05-10", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-agents-of-s-h-i-e-l-d-s6.webp" },
      { id: "agents-of-shield-s7", season: 7, releaseDate: "2020-06-03", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-agents-of-s-h-i-e-l-d-s7.webp" }
    ] },

  /* ===== SHOW: Agent Carter ===== */
  { id: "agent-carter", title: "Agent Carter", type: "tv", universe: "other", category: "series", group: "ABC, Hulu & Freeform",
    importance: "optional", poster: "posters/tv/marvel-s-agent-carter.webp",
    description: "In 1946, Peggy Carter works for the Strategic Scientific Reserve while secretly helping Howard Stark clear his name.",
    creator: "Christopher Markus & Stephen McFeely",
    cast: [
      "Hayley Atwell (Peggy Carter)",
      "James D'Arcy (Edwin Jarvis)",
      "Enver Gjokaj (Daniel Sousa)",
      "Chad Michael Murray (Jack Thompson)",
      "Shea Whigham (Roger Dooley)",
      "Dominic Cooper (Howard Stark)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "agent-carter-s1", season: 1, releaseDate: "2015-01-06", episodeCount: 8, episodes: [],
        poster: "posters/tv/marvel-s-agent-carter.webp" },
      { id: "agent-carter-s2", season: 2, releaseDate: "2016-01-19", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvel-s-agent-carter-s2.webp" }
    ] },

  /* ===== SHOW: Inhumans ===== */
  { id: "inhumans", title: "Inhumans", type: "tv", universe: "other", category: "series", group: "ABC, Hulu & Freeform",
    importance: "optional", poster: "posters/tv/marvel-s-inhumans.webp",
    description: "Black Bolt and the Inhuman royal family flee to Hawaii after a coup on the Moon.",
    creator: "Scott Buck",
    cast: [
      "Anson Mount (Black Bolt)",
      "Serinda Swan (Medusa)",
      "Iwan Rheon (Maximus)",
      "Eme Ikwuakor (Gorgon)",
      "Isabelle Cornish (Crystal)",
      "Ken Leung (Karnak)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "inhumans-s1", season: 1, releaseDate: "2017-09-29", episodeCount: 8, episodes: [],
        poster: "posters/tv/marvel-s-inhumans.webp" }
    ] },

  /* ===== SHOW: Cloak & Dagger ===== */
  { id: "cloak-and-dagger", title: "Cloak & Dagger", type: "tv", universe: "other", category: "series", group: "ABC, Hulu & Freeform",
    importance: "optional", poster: "posters/tv/marvel-s-cloak-and-dagger-s1.webp",
    description: "Two teenagers in New Orleans, Tandy and Tyrone, gain linked powers and find a shared purpose.",
    creator: "Joe Pokaski",
    cast: [
      "Olivia Holt (Tandy Bowen / Dagger)",
      "Aubrey Joseph (Tyrone Johnson / Cloak)",
      "Gloria Reuben (Adina Johnson)",
      "Andrea Roth (Melissa Bowen)",
      "J.D. Evermore (Detective O'Reilly)",
      "Emma Lahana (Detective Brigid O'Reilly)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "cloak-and-dagger-s1", season: 1, releaseDate: "2018-06-07", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvel-s-cloak-and-dagger-s1.webp" },
      { id: "cloak-and-dagger-s2", season: 2, releaseDate: "2019-04-04", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvel-s-cloak-and-dagger-s2.webp" }
    ] },

  /* ===== SHOW: Runaways ===== */
  { id: "runaways", title: "Runaways", type: "tv", universe: "other", category: "series", group: "ABC, Hulu & Freeform",
    importance: "optional", poster: "posters/tv/marvel-s-runaways-s1.webp",
    description: "Six teens discover their parents are part of a secret criminal group, and run away to stop them.",
    creator: "Josh Schwartz & Stephanie Savage",
    cast: [
      "Rhenzy Feliz (Alex Wilder)",
      "Lyrica Okano (Nico Minoru)",
      "Virginia Gardner (Karolina Dean)",
      "Ariela Barer (Gert Yorkes)",
      "Gregg Sulkin (Chase Stein)",
      "Allegra Acosta (Molly Hernandez)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "runaways-s1", season: 1, releaseDate: "2017-11-21", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvel-s-runaways-s1.webp" },
      { id: "runaways-s2", season: 2, releaseDate: "2018-12-21", episodeCount: 13, episodes: [],
        poster: "posters/tv/marvel-s-runaways-s2.webp" },
      { id: "runaways-s3", season: 3, releaseDate: "2019-12-13", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvel-s-runaways-s3.webp" }
    ] },

  /* ===== SHOW: Legion ===== */
  { id: "legion", title: "Legion", type: "tv", universe: "other", category: "series", group: "Fox",
    importance: "optional", poster: "posters/tv/legion-s1.webp",
    description: "David Haller, a young man diagnosed with schizophrenia, discovers his mind may hold powers beyond what he imagined.",
    creator: "Noah Hawley",
    cast: [
      "Dan Stevens (David Haller)",
      "Rachel Keller (Syd Barrett)",
      "Aubrey Plaza (Lenny Busker)",
      "Jean Smart (Melanie Bird)",
      "Bill Irwin (Cary Loudermilk)",
      "Jeremie Harris (Ptonomy Wallace)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "legion-s1", season: 1, releaseDate: "2017-02-08", episodeCount: 8, episodes: [],
        poster: "posters/tv/legion-s1.webp" },
      { id: "legion-s2", season: 2, releaseDate: "2018-04-03", episodeCount: 11, episodes: [],
        poster: "posters/tv/legion-s2.webp" },
      { id: "legion-s3", season: 3, releaseDate: "2019-06-24", episodeCount: 8, episodes: [],
        poster: "posters/tv/legion-s3.webp" }
    ] },

  /* ===== SHOW: The Gifted ===== */
  { id: "the-gifted", title: "The Gifted", type: "tv", universe: "other", category: "series", group: "Fox",
    importance: "optional", poster: "posters/tv/the-gifted-s1.webp",
    description: "A family joins a mutant underground as they run from the government.",
    creator: "Matt Nix",
    cast: [
      "Stephen Moyer (Reed Strucker)",
      "Amy Acker (Kate Strucker)",
      "Sean Teale (Marcos Diaz / Eclipse)",
      "Natalie Alyn Lind (Lauren Strucker)",
      "Percy Hynes White (Andy Strucker)",
      "Emma Dumont (Lorna Dane / Polaris)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "the-gifted-s1", season: 1, releaseDate: "2017-10-02", episodeCount: 13, episodes: [],
        poster: "posters/tv/the-gifted-s1.webp" },
      { id: "the-gifted-s2", season: 2, releaseDate: "2018-09-25", episodeCount: 16, episodes: [],
        poster: "posters/tv/the-gifted-s2.webp" }
    ] },

  /* ===== SHOW: Daredevil: Born Again (Seasons 2 and 3) ===== */
  { id: "daredevil-born-again-s2-s3", title: "Daredevil: Born Again (Seasons 2 and 3)", type: "tv", universe: "other", category: "series", group: "Disney+",
    importance: "recommended", poster: "posters/tv/daredevil-born-again-s2.webp",
    description: "Matt Murdock and Wilson Fisk's fight over New York continues, with Fisk now in full control of the city. Season 1 is on the main TV list under Phase 5.",
    creator: "Matt Corman & Chris Ord (showrunner: Dario Scardapane)",
    cast: [
      "Charlie Cox (Matt Murdock / Daredevil)",
      "Vincent D'Onofrio (Wilson Fisk / Kingpin)",
      "Deborah Ann Woll (Karen Page)",
      "Jon Bernthal (Frank Castle / The Punisher)",
      "Margarita Levieva (Heather Glenn)",
      "Wilson Bethel (Benjamin Poindexter)"],
    trailer: "", whereToWatch: "", status: "Ongoing",
    watchBefore: ["daredevil-born-again"],
    seasons: [
      { id: "daredevil-born-again-s2-s3-s2", season: 2, releaseDate: "2026-03-24", episodeCount: 8, episodes: [],
        poster: "posters/tv/daredevil-born-again-s2.webp" },
      { id: "daredevil-born-again-s2-s3-s3", season: 3, releaseDate: "2027-03-01", episodeCount: 8, episodes: [],
        poster: "posters/tv/daredevil-born-again-s3.webp" }
    ] },

  /* ===== SHOW: Echo ===== */
  { id: "echo", title: "Echo", type: "tv", universe: "other", category: "series", group: "Disney+",
    importance: "optional", poster: "posters/tv/echo-s1.webp",
    description: "Maya Lopez returns to her hometown and confronts her past and her family.",
    creator: "Marion Dayre",
    cast: [
      "Alaqua Cox (Maya Lopez / Echo)",
      "Chaske Spencer (Henry)",
      "Tantoo Cardinal (Chula)",
      "Devery Jacobs (Bonnie)",
      "Zahn McClarnon (William Lopez)",
      "Vincent D'Onofrio (Wilson Fisk / Kingpin)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "echo-s1", season: 1, releaseDate: "2024-01-09", episodeCount: 5, episodes: [],
        poster: "posters/tv/echo-s1.webp" }
    ] },

  /* ===== SHOW: Ironheart ===== */
  { id: "ironheart", title: "Ironheart", type: "tv", universe: "other", category: "series", group: "Disney+",
    importance: "optional", poster: "posters/tv/ironheart-s1.webp",
    description: "Riri Williams returns to Chicago and uses her genius to build her own armor, while meeting a mysterious figure called The Hood.",
    creator: "Chinaka Hodge",
    cast: [
      "Dominique Thorne (Riri Williams / Ironheart)",
      "Anthony Ramos (Parker Robbins / The Hood)",
      "Lyric Ross (Natalie)",
      "Alden Ehrenreich (Joe McGillicuddy)",
      "Regina Hall (Ayesha Williams)",
      "Sacha Baron Cohen (Mephisto)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "ironheart-s1", season: 1, releaseDate: "2025-06-24", episodeCount: 6, episodes: [],
        poster: "posters/tv/ironheart-s1.webp" }
    ] },

  /* ===== SHOW: Wonder Man ===== */
  { id: "wonder-man", title: "Wonder Man", type: "tv", universe: "other", category: "series", group: "Disney+",
    importance: "optional", poster: "posters/tv/wonder-man-s1.webp",
    description: "Struggling actor Simon Williams auditions for a superhero role and gets pulled into Hollywood and secret powers.",
    creator: "Andrew Guest & Destin Daniel Cretton",
    cast: [
      "Yahya Abdul-Mateen II (Simon Williams / Wonder Man)",
      "Ben Kingsley (Trevor Slattery)",
      "Demetrius Grosse (Eric Williams / Grim Reaper)",
      "Josh Gad (Lee Alexander)",
      "Arian Moayed (Agent Cleary)",
      "Zlatko Buric (Janus)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "wonder-man-s1", season: 1, releaseDate: "2026-01-27", episodeCount: 8, episodes: [],
        poster: "posters/tv/wonder-man-s1.webp" }
    ] },

  /* ===== SHOW: VisionQuest ===== */
  { id: "visionquest", title: "VisionQuest", type: "tv", universe: "other", category: "series", group: "Disney+",
    importance: "recommended", poster: "posters/tv/visionquest-s1.webp",
    description: "Vision's story continues, with a new body and a new journey that completes the WandaVision trilogy.",
    creator: "Terry Matalas",
    cast: [
      "Paul Bettany (Vision)",
      "James Spader (Ultron)",
      "Todd Stashwick (Paladin)",
      "T'Nia Miller (Jocasta)",
      "Faran Tahir (Raza)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "visionquest-s1", season: 1, releaseDate: "2026-10-13", episodeCount: 8, episodes: [],
        poster: "posters/tv/visionquest-s1.webp" }
    ] },

  /* ===== SHOW: The Punisher: One Last Kill ===== */
  { id: "the-punisher-one-last-kill", title: "The Punisher: One Last Kill", type: "tv", universe: "other", category: "special", group: "Disney+",
    importance: "recommended", poster: "posters/tv/the-punisher-one-last-kill-s1.webp",
    description: "Frank Castle tries to find who he is when he is not chasing revenge, and is pulled into a conflict with a criminal empire.",
    creator: "Jon Bernthal & Reinaldo Marcus Green",
    cast: [
      "Jon Bernthal (Frank Castle / The Punisher)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "the-punisher-one-last-kill-s1", season: 1, releaseDate: "2026-05-12", episodeCount: 1, episodes: [],
        poster: "posters/tv/the-punisher-one-last-kill-s1.webp" }
    ] },

  /* ===== SHOW: Eyes of Wakanda ===== */
  { id: "eyes-of-wakanda", title: "Eyes of Wakanda", type: "tv", universe: "other", category: "animation", group: "Animation (Disney+ & Hulu)",
    importance: "optional", poster: "posters/tv/eyes-of-wakanda-s1.webp",
    description: "Wakandan War Dogs travel the world across history to recover stolen vibranium artifacts.",
    creator: "Todd Harris",
    cast: [
      "Winnie Harlow",
      "Cress Williams (The Lion)",
      "Anika Noni Rose",
      "Patricia Belcher",
      "Larry Herron",
      "Adam Gold"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "eyes-of-wakanda-s1", season: 1, releaseDate: "2025-08-06", episodeCount: 4, episodes: [],
        poster: "posters/tv/eyes-of-wakanda-s1.webp" }
    ] },

  /* ===== SHOW: I Am Groot ===== */
  { id: "i-am-groot", title: "I Am Groot", type: "tv", universe: "other", category: "animation", group: "Animation (Disney+ & Hulu)",
    importance: "optional", poster: "posters/tv/i-am-groot-s1.webp",
    description: "A series of animated shorts that follow Baby Groot on small adventures across the galaxy.",
    creator: "Kirsten Lepore",
    cast: [
      "Vin Diesel (Groot)",
      "James Gunn (voice)",
      "Trevor Devall (Iwua)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "i-am-groot-s1", season: 1, releaseDate: "2022-08-10", episodeCount: 5, episodes: [],
        poster: "posters/tv/i-am-groot-s1.webp" },
      { id: "i-am-groot-s2", season: 2, releaseDate: "2023-09-06", episodeCount: 5, episodes: [],
        poster: "posters/tv/i-am-groot-s2.webp" }
    ] },

  /* ===== SHOW: Marvel Zombies ===== */
  { id: "marvel-zombies", title: "Marvel Zombies", type: "tv", universe: "other", category: "animation", group: "Animation (Disney+ & Hulu)",
    importance: "optional", poster: "posters/tv/marvel-zombies-s1.webp",
    description: "Survivors of a zombie outbreak that swept through the Marvel heroes try to stay alive.",
    creator: "Bryan Andrews & Zeb Wells",
    cast: [
      "Elizabeth Olsen (Wanda Maximoff)",
      "Florence Pugh (Yelena Belova)",
      "David Harbour (Red Guardian)",
      "Simu Liu (Shang-Chi)",
      "Awkwafina (Katy)",
      "Hailee Steinfeld (Kate Bishop)",
      "Iman Vellani (Ms. Marvel)"],
    trailer: "", whereToWatch: "", status: "Ongoing",
    seasons: [
      { id: "marvel-zombies-s1", season: 1, releaseDate: "2025-10-03", episodeCount: 4, episodes: [],
        poster: "posters/tv/marvel-zombies-s1.webp" }
    ] },

  /* ===== SHOW: Your Friendly Neighborhood Spider-Man ===== */
  { id: "your-friendly-neighborhood-spider-man", title: "Your Friendly Neighborhood Spider-Man", type: "tv", universe: "other", category: "animation", group: "Animation (Disney+ & Hulu)",
    importance: "recommended", poster: "posters/tv/your-friendly-neighborhood-spider-man-s1.webp",
    description: "Teenager Peter Parker learns to be Spider-Man, with Norman Osborn as his mentor.",
    creator: "Jeff Trammell (head writer)",
    cast: [
      "Hudson Thames (Peter Parker / Spider-Man)",
      "Colman Domingo (Norman Osborn)"],
    trailer: "", whereToWatch: "", status: "Ongoing",
    seasons: [
      { id: "your-friendly-neighborhood-spider-man-s1", season: 1, releaseDate: "2025-01-29", episodeCount: 10, episodes: [],
        poster: "posters/tv/your-friendly-neighborhood-spider-man-s1.webp" },
      { id: "your-friendly-neighborhood-spider-man-s2", season: 2, releaseDate: "2027-01-13", episodeCount: 10, episodes: [],
        poster: "posters/tv/your-friendly-neighborhood-spider-man-s2.webp" }
    ] },

  /* ===== SHOW: Hit-Monkey ===== */
  { id: "hit-monkey", title: "Hit-Monkey", type: "tv", universe: "other", category: "animation", group: "Animation (Disney+ & Hulu)",
    importance: "optional", poster: "posters/tv/marvels-hit-monkey-s1.webp",
    description: "A snow monkey, trained and guided by the ghost of an American assassin, takes revenge on Tokyo's criminals.",
    creator: "Will Speck & Josh Gordon",
    cast: [
      "Fred Tatasciore (Hit-Monkey)",
      "Jason Sudeikis (Bryce)",
      "Ally Maki (Haruka)",
      "George Takei (Shinji Yokohama)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "hit-monkey-s1", season: 1, releaseDate: "2021-11-17", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvels-hit-monkey-s1.webp" },
      { id: "hit-monkey-s2", season: 2, releaseDate: "2024-07-15", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvels-hit-monkey-s2.webp" }
    ] },

  /* ===== SHOW: M.O.D.O.K. ===== */
  { id: "modok", title: "M.O.D.O.K.", type: "tv", universe: "other", category: "animation", group: "Animation (Disney+ & Hulu)",
    importance: "optional", poster: "posters/tv/marvels-modok-s1.webp",
    description: "The villain M.O.D.O.K. struggles with a failing evil organization and a family falling apart.",
    creator: "Jordan Blum & Patton Oswalt",
    cast: [
      "Patton Oswalt (M.O.D.O.K.)",
      "Aimee Garcia (Jodie)",
      "Ben Schwartz (Super-Adaptoid)",
      "Melissa Fumero (Lou)",
      "Beck Bennett (Austin)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "modok-s1", season: 1, releaseDate: "2021-05-21", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvels-modok-s1.webp" }
    ] },

  /* ===== SHOW: Avengers Assemble ===== */
  { id: "avengers-assemble", title: "Avengers Assemble", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/marvel-s-avengers-s1.webp",
    description: "The Avengers fight world-threatening villains in a Disney XD series that ran for five seasons.",
    creator: "Man of Action (seasons 1-2)",
    cast: [
      "Adrian Pasdar (Tony Stark / Iron Man)",
      "Roger Craig Smith (Steve Rogers / Captain America)",
      "Fred Tatasciore (Hulk)",
      "Laura Bailey (Black Widow)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "avengers-assemble-s1", season: 1, releaseDate: "2013-05-26", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-avengers-s1.webp" },
      { id: "avengers-assemble-s2", season: 2, releaseDate: "2014-09-28", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-avengers-s2.webp" },
      { id: "avengers-assemble-s3", season: 3, releaseDate: "2016-03-13", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-avengers-s3.webp" },
      { id: "avengers-assemble-s4", season: 4, releaseDate: "2017-06-17", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-avengers-s4.webp" },
      { id: "avengers-assemble-s5", season: 5, releaseDate: "2018-09-23", episodeCount: 23, episodes: [],
        poster: "posters/tv/marvel-s-avengers-s5.webp" }
    ] },

  /* ===== SHOW: Guardians of the Galaxy (animated) ===== */
  { id: "guardians-of-the-galaxy-2015", title: "Guardians of the Galaxy (animated)", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/marvel-s-guardians-of-the-galaxy-s1.webp",
    description: "The Guardians of the Galaxy protect the universe in a Disney XD animated series.",
    cast: [
      "Will Friedle (Star-Lord)",
      "Vanessa Marshall (Gamora)",
      "Trevor Devall (Rocket)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "guardians-of-the-galaxy-2015-s1", season: 1, releaseDate: "2015-09-05", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-guardians-of-the-galaxy-s1.webp" },
      { id: "guardians-of-the-galaxy-2015-s2", season: 2, releaseDate: "2017-03-11", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-guardians-of-the-galaxy-s2.webp" },
      { id: "guardians-of-the-galaxy-2015-s3", season: 3, releaseDate: "2018-03-18", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-guardians-of-the-galaxy-s3.webp" }
    ] },

  /* ===== SHOW: Marvel's Spider-Man (animated) ===== */
  { id: "spider-man-2017", title: "Marvel's Spider-Man (animated)", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/marvel-s-spider-man-s1.webp",
    description: "Peter Parker starts at Horizon High and learns to be a hero in a Disney XD animated series.",
    creator: "Kevin Shinick",
    cast: [
      "Robbie Daymond (Peter Parker / Spider-Man)",
      "Laura Bailey (Black Cat)",
      "Nadji Jeter (Miles Morales)",
      "Fred Tatasciore (Venom)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "spider-man-2017-s1", season: 1, releaseDate: "2017-08-19", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-spider-man-s1.webp" },
      { id: "spider-man-2017-s2", season: 2, releaseDate: "2018-06-18", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-s-spider-man-s2.webp" },
      { id: "spider-man-2017-s3", season: 3, releaseDate: "2020-04-19", episodeCount: 6, episodes: [],
        poster: "posters/tv/marvel-s-spider-man-s3.webp" }
    ] },

  /* ===== SHOW: Marvel Rising ===== */
  { id: "marvel-rising", title: "Marvel Rising", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/marvel-rising-s1.webp",
    description: "A team of young heroes led by Ghost-Spider and Ms. Marvel. The poster is for the web series Initiation (six shorts).",
    cast: [
      "Dove Cameron (Ghost-Spider)",
      "Milana Vayntrub (Squirrel Girl)",
      "Kathreen Khavari (Ms. Marvel)",
      "Chloe Bennet (Quake)",
      "Kamil McFadden (Patriot)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "marvel-rising-s1", season: 1, releaseDate: "2018-08-13", episodeCount: 6, episodes: [],
        poster: "posters/tv/marvel-rising-s1.webp" }
    ] },

  /* ===== SHOW: Moon Girl and Devil Dinosaur ===== */
  { id: "moon-girl-and-devil-dinosaur", title: "Moon Girl and Devil Dinosaur", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/marvels-moon-girl-and-devil-dinosaur-s1.webp",
    description: "A 13-year-old genius and her Tyrannosaurus protect their Lower East Side neighborhood.",
    creator: "Steve Loter & Jeffrey M. Howard",
    cast: [
      "Diamond White (Lunella Lafayette / Moon Girl)",
      "Fred Tatasciore (Devil Dinosaur)",
      "Alfre Woodard (Mimi Lafayette)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "moon-girl-and-devil-dinosaur-s1", season: 1, releaseDate: "2023-02-10", episodeCount: 16, episodes: [],
        poster: "posters/tv/marvels-moon-girl-and-devil-dinosaur-s1.webp" },
      { id: "moon-girl-and-devil-dinosaur-s2", season: 2, releaseDate: "2024-02-02", episodeCount: 36, episodes: [],
        poster: "posters/tv/marvels-moon-girl-and-devil-dinosaur-s2.webp" }
    ] },

  /* ===== SHOW: Spidey and His Amazing Friends ===== */
  { id: "spidey-and-his-amazing-friends", title: "Spidey and His Amazing Friends", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/marvels-spidey-and-his-amazing-friends-s1.webp",
    description: "A preschool series about young Spidey, Ghost-Spider and Miles Morales teaming up with friends.",
    trailer: "", whereToWatch: "", status: "Ongoing",
    seasons: [
      { id: "spidey-and-his-amazing-friends-s1", season: 1, releaseDate: "2021-08-06", episodeCount: 25, episodes: [],
        poster: "posters/tv/marvels-spidey-and-his-amazing-friends-s1.webp" },
      { id: "spidey-and-his-amazing-friends-s2", season: 2, releaseDate: "2022-08-19", episodeCount: 29, episodes: [],
        poster: "posters/tv/marvels-spidey-and-his-amazing-friends-s2.webp" },
      { id: "spidey-and-his-amazing-friends-s3", season: 3, releaseDate: "2024-01-08", episodeCount: 30, episodes: [],
        poster: "posters/tv/marvels-spidey-and-his-amazing-friends-s3.webp" },
      { id: "spidey-and-his-amazing-friends-s4", season: 4, releaseDate: "2025-06-16", episodeCount: 19, episodes: [],
        poster: "posters/tv/marvels-spidey-and-his-amazing-friends-s4.webp" },
      { id: "spidey-and-his-amazing-friends-s5", season: 5, releaseDate: "2026-07-13", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvels-spidey-and-his-amazing-friends-s5.webp" }
    ] },

  /* ===== SHOW: Iron Man and His Awesome Friends ===== */
  { id: "iron-man-and-his-awesome-friends", title: "Iron Man and His Awesome Friends", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/marvels-iron-man-and-his-awesome-friends-s1.webp",
    description: "A preschool spin-off of Spidey and His Amazing Friends, starring young Tony Stark.",
    trailer: "", whereToWatch: "", status: "Ongoing",
    seasons: [
      { id: "iron-man-and-his-awesome-friends-s1", season: 1, releaseDate: "2025-08-11", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvels-iron-man-and-his-awesome-friends-s1.webp" }
    ] },

  /* ===== SHOW: Avengers: Mightiest Friends ===== */
  { id: "avengers-mightiest-friends", title: "Avengers: Mightiest Friends", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/marvels-avengers-mightiest-friends-s1.webp",
    description: "A preschool Avengers series announced as the successor to Iron Man and His Awesome Friends. The date and episode count are placeholders.",
    trailer: "", whereToWatch: "", status: "Upcoming",
    seasons: [
      { id: "avengers-mightiest-friends-s1", season: 1, releaseDate: "2027-01-01", episodeCount: 10, episodes: [],
        poster: "posters/tv/marvels-avengers-mightiest-friends-s1.webp" }
    ] },

  /* ===== SHOW: The Guardians of the Galaxy Holiday Special ===== */
  { id: "guardians-holiday-special", title: "The Guardians of the Galaxy Holiday Special", type: "tv", universe: "other", category: "special", group: "Specials",
    importance: "optional", poster: "posters/tv/guardians-of-the-galaxy-holiday-special-s1.webp",
    description: "The Guardians try to give Peter Quill the best Christmas gift, with a visit to Earth.",
    creator: "James Gunn",
    cast: [
      "Chris Pratt (Peter Quill / Star-Lord)",
      "Dave Bautista (Drax)",
      "Pom Klementieff (Mantis)",
      "Karen Gillan (Nebula)",
      "Vin Diesel (Groot)",
      "Kevin Bacon (Kevin Bacon)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "guardians-holiday-special-s1", season: 1, releaseDate: "2022-11-25", episodeCount: 1, episodes: [],
        poster: "posters/tv/guardians-of-the-galaxy-holiday-special-s1.webp" }
    ] },

  /* ===== SHOW: LEGO Marvel Avengers: Code Red ===== */
  { id: "lego-marvel-avengers-code-red", title: "LEGO Marvel Avengers: Code Red", type: "tv", universe: "other", category: "special", group: "Specials",
    importance: "optional", poster: "posters/tv/lego-marvel-avengers-code-red-s1.webp",
    description: "The Avengers celebrate a win, then look for Black Widow's missing father, Red Guardian.",
    creator: "Eugene Son & Harrison Wilcox",
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "lego-marvel-avengers-code-red-s1", season: 1, releaseDate: "2023-10-27", episodeCount: 1, episodes: [],
        poster: "posters/tv/lego-marvel-avengers-code-red-s1.webp" }
    ] },

  /* ===== SHOW: LEGO Marvel Avengers: Mission Demolition ===== */
  { id: "lego-marvel-avengers-mission-demolition", title: "LEGO Marvel Avengers: Mission Demolition", type: "tv", universe: "other", category: "special", group: "Specials",
    importance: "optional", poster: "posters/tv/lego-marvel-avengers-mission-demolition-s1.webp",
    description: "A young hero who works for Damage Control accidentally frees a villain who wants to get rid of the Avengers.",
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "lego-marvel-avengers-mission-demolition-s1", season: 1, releaseDate: "2024-10-18", episodeCount: 1, episodes: [],
        poster: "posters/tv/lego-marvel-avengers-mission-demolition-s1.webp" }
    ] },

  /* ===== SHOW: LEGO Marvel Avengers: Strange Tails ===== */
  { id: "lego-marvel-avengers-strange-tails", title: "LEGO Marvel Avengers: Strange Tails", type: "tv", universe: "other", category: "special", group: "Specials",
    importance: "optional", poster: "posters/tv/lego-marvel-avengers-strange-tails-s1.webp",
    description: "A two-part LEGO special that follows Code Red and Mission Demolition.",
    creator: "Eugene Son & Henry Gilroy",
    cast: [
      "Troy Baker",
      "Alia Shawkat",
      "Laura Bailey",
      "Roger Craig Smith",
      "Jason Alexander"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "lego-marvel-avengers-strange-tails-s1", season: 1, releaseDate: "2025-11-14", episodeCount: 2, episodes: [],
        poster: "posters/tv/lego-marvel-avengers-strange-tails-s1.webp" }
    ] },

  /* ===== SHOW: Marvel's 616 ===== */
  { id: "marvels-616", title: "Marvel's 616", type: "tv", universe: "other", category: "documentary", group: "Documentaries & behind the scenes",
    importance: "optional", poster: "posters/tv/marvel-s-616-s1.webp",
    description: "Eight documentaries by eight filmmakers about Marvel's creators, characters and fans.",
    creator: "Marvel New Media with Supper Club",
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "marvels-616-s1", season: 1, releaseDate: "2020-11-20", episodeCount: 8, episodes: [],
        poster: "posters/tv/marvel-s-616-s1.webp" }
    ] },

  /* ===== SHOW: Marvel's Hero Project ===== */
  { id: "marvels-hero-project", title: "Marvel's Hero Project", type: "tv", universe: "other", category: "documentary", group: "Documentaries & behind the scenes",
    importance: "optional", poster: "posters/tv/marvel-s-hero-project-s1.webp",
    description: "Real kids who do inspiring things get a visit from Marvel.",
    creator: "Marvel New Media",
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "marvels-hero-project-s1", season: 1, releaseDate: "2019-11-12", episodeCount: 20, episodes: [],
        poster: "posters/tv/marvel-s-hero-project-s1.webp" }
    ] },

  /* ===== SHOW: Marvel's Behind the Mask ===== */
  { id: "marvels-behind-the-mask", title: "Marvel's Behind the Mask", type: "tv", universe: "other", category: "documentary", group: "Documentaries & behind the scenes",
    importance: "optional", poster: "posters/tv/marvel-s-behind-the-mask-s1.webp",
    description: "A documentary about the real people who inspired Marvel's heroes and the creators behind them.",
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "marvels-behind-the-mask-s1", season: 1, releaseDate: "2021-02-12", episodeCount: 1, episodes: [],
        poster: "posters/tv/marvel-s-behind-the-mask-s1.webp" }
    ] },

  /* ===== SHOW: Stan Lee ===== */
  { id: "stan-lee", title: "Stan Lee", type: "tv", universe: "other", category: "documentary", group: "Documentaries & behind the scenes",
    importance: "optional", poster: "posters/tv/stan-lee-documentary-s1.webp",
    description: "A documentary film about Stan Lee's life and career, told with his own archive material.",
    creator: "David Gelb (director)",
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "stan-lee-s1", season: 1, releaseDate: "2023-06-16", episodeCount: 1, episodes: [],
        poster: "posters/tv/stan-lee-documentary-s1.webp" }
    ] },

  /* ===== SHOW: Marvel Studios: Assembled ===== */
  { id: "marvel-studios-assembled", title: "Marvel Studios: Assembled", type: "tv", universe: "other", category: "documentary", group: "Documentaries & behind the scenes",
    importance: "optional", poster: "posters/tv/marvel-studios-assembled-s1.webp",
    description: "Behind-the-scenes specials on the making of Marvel Studios' films and series.",
    creator: "Marvel Studios",
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "marvel-studios-assembled-s1", season: 1, releaseDate: "2021-03-12", episodeCount: 23, episodes: [],
        poster: "posters/tv/marvel-studios-assembled-s1.webp" }
    ] },

  /* ===== SHOW: Marvel Studios: Legends ===== */
  { id: "marvel-studios-legends", title: "Marvel Studios: Legends", type: "tv", universe: "other", category: "documentary", group: "Documentaries & behind the scenes",
    importance: "optional", poster: "posters/tv/marvel-studios-legends-s1.webp",
    description: "Short recaps of MCU characters and moments, released before new series and films.",
    creator: "Marvel Studios",
    trailer: "", whereToWatch: "", status: "Ongoing",
    seasons: [
      { id: "marvel-studios-legends-s1", season: 1, releaseDate: "2021-01-08", episodeCount: 26, episodes: [],
        poster: "posters/tv/marvel-studios-legends-s1.webp" },
      { id: "marvel-studios-legends-s2", season: 2, releaseDate: "2023-02-10", episodeCount: 20, episodes: [],
        poster: "posters/tv/marvel-studios-legends-s2.webp" },
      { id: "marvel-studios-legends-s3", season: 3, releaseDate: "2025-06-13", episodeCount: 3, episodes: [],
        poster: "posters/tv/marvel-studios-legends-s3.webp" }
    ] },

  /* ===== SHOW: Voices Rising: The Music of Wakanda Forever ===== */
  { id: "voices-rising", title: "Voices Rising: The Music of Wakanda Forever", type: "tv", universe: "other", category: "documentary", group: "Documentaries & behind the scenes",
    importance: "optional", poster: "posters/tv/voices-rising-the-music-of-wakanda-forever-s1.webp",
    description: "A three-part documentary about the music of Black Panther: Wakanda Forever.",
    creator: "Marvel Studios",
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "voices-rising-s1", season: 1, releaseDate: "2023-02-28", episodeCount: 3, episodes: [],
        poster: "posters/tv/voices-rising-the-music-of-wakanda-forever-s1.webp" }
    ] },

  /* ===== SHOW: MPower ===== */
  { id: "mpower", title: "MPower", type: "tv", universe: "other", category: "documentary", group: "Documentaries & behind the scenes",
    importance: "optional", poster: "posters/tv/mpower-s1.webp",
    description: "A four-part series about the women of the MCU, their stories and the fans they inspired.",
    creator: "Marvel Studios",
    cast: [
      "Brie Larson",
      "Elizabeth Olsen",
      "Zoe Saldaña",
      "Iman Vellani",
      "Danai Gurira",
      "Lupita Nyong'o"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "mpower-s1", season: 1, releaseDate: "2023-03-08", episodeCount: 4, episodes: [],
        poster: "posters/tv/mpower-s1.webp" }
    ] },

  /* ===== SHOW: The Incredible Hulk (1977) ===== */
  { id: "the-incredible-hulk-1977", title: "The Incredible Hulk (1977)", type: "tv", universe: "other", category: "series", group: "Older live-action & TV films",
    importance: "optional", poster: "posters/tv/the-incredible-hulk-1977-s1.webp",
    description: "Dr. David Banner turns into the Hulk when angry and travels the country in search of a cure. Two TV pilot movies (1977) came first and are not counted as a season here.",
    creator: "Kenneth Johnson",
    cast: [
      "Bill Bixby (Dr. David Banner)",
      "Lou Ferrigno (The Hulk)",
      "Jack Colvin (Jack McGee)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "the-incredible-hulk-1977-s1", season: 1, releaseDate: "1978-03-10", episodeCount: 10, episodes: [],
        poster: "posters/tv/the-incredible-hulk-1977-s1.webp" },
      { id: "the-incredible-hulk-1977-s2", season: 2, releaseDate: "1978-09-22", episodeCount: 22, episodes: [],
        poster: "posters/tv/the-incredible-hulk-1977-s2.webp" },
      { id: "the-incredible-hulk-1977-s3", season: 3, releaseDate: "1979-09-21", episodeCount: 23, episodes: [],
        poster: "posters/tv/the-incredible-hulk-1977-s3.webp" },
      { id: "the-incredible-hulk-1977-s4", season: 4, releaseDate: "1980-11-07", episodeCount: 18, episodes: [],
        poster: "posters/tv/the-incredible-hulk-1977-s4.webp" },
      { id: "the-incredible-hulk-1977-s5", season: 5, releaseDate: "1981-10-02", episodeCount: 7, episodes: [],
        poster: "posters/tv/the-incredible-hulk-1977-s5.webp" }
    ] },

  /* ===== SHOW: The Amazing Spider-Man (1977) ===== */
  { id: "the-amazing-spider-man-1977", title: "The Amazing Spider-Man (1977)", type: "tv", universe: "other", category: "series", group: "Older live-action & TV films",
    importance: "optional", poster: "posters/tv/the-amazing-spider-man-1977-s1.webp",
    description: "Student Peter Parker uses his spider powers to fight crime in a short-lived CBS series. The 1977 pilot movie is not counted as a season here.",
    creator: "Alvin Boretz",
    cast: [
      "Nicholas Hammond (Peter Parker / Spider-Man)",
      "Robert F. Simon (J. Jonah Jameson)",
      "Ellen Bry (Julie Masters)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "the-amazing-spider-man-1977-s1", season: 1, releaseDate: "1978-04-05", episodeCount: 5, episodes: [],
        poster: "posters/tv/the-amazing-spider-man-1977-s1.webp" },
      { id: "the-amazing-spider-man-1977-s2", season: 2, releaseDate: "1978-09-05", episodeCount: 7, episodes: [],
        poster: "posters/tv/the-amazing-spider-man-1977-s2.webp" }
    ] },

  /* ===== SHOW: Generation X (1996) ===== */
  { id: "generation-x-1996", title: "Generation X (1996)", type: "tv", universe: "other", category: "special", group: "Older live-action & TV films",
    importance: "optional", poster: "posters/tv/generation-x-1996-s1.webp",
    description: "A TV pilot movie in which young mutants are trained at Xavier's school in Massachusetts. It never became a series.",
    creator: "Eric Blakeney",
    cast: [
      "Jeremy Ratchford (Banshee)",
      "Finola Hughes (Emma Frost)",
      "Matt Frewer (Mr. Bishop)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "generation-x-1996-s1", season: 1, releaseDate: "1996-02-20", episodeCount: 1, episodes: [],
        poster: "posters/tv/generation-x-1996-s1.webp" }
    ] },

  /* ===== SHOW: Nick Fury: Agent of S.H.I.E.L.D. (1998) ===== */
  { id: "nick-fury-1998", title: "Nick Fury: Agent of S.H.I.E.L.D. (1998)", type: "tv", universe: "other", category: "special", group: "Older live-action & TV films",
    importance: "optional", poster: "posters/tv/nick-fury-1998-s1.webp",
    description: "A TV movie in which retired Nick Fury is called back to stop Hydra. It was meant as a pilot for a series.",
    creator: "David S. Goyer (writer)",
    cast: [
      "David Hasselhoff (Nick Fury)",
      "Lisa Rinna (Valentina Allegra de Fontaine)",
      "Sandra Hess (Andrea von Strucker / Viper)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "nick-fury-1998-s1", season: 1, releaseDate: "1998-05-26", episodeCount: 1, episodes: [],
        poster: "posters/tv/nick-fury-1998-s1.webp" }
    ] },

  /* ===== SHOW: Blade: The Series ===== */
  { id: "blade-the-series", title: "Blade: The Series", type: "tv", universe: "other", category: "series", group: "Older live-action & TV films",
    importance: "optional", poster: "posters/tv/blade-the-series-s1.webp",
    description: "After the film Blade: Trinity, Blade protects a young woman from the vampire houses of Detroit in this Spike TV series.",
    creator: "David S. Goyer",
    cast: [
      "Sticky Fingaz (Blade)",
      "Jill Wagner (Krista Starr)",
      "Neil Jackson (Marcus Van Sciver)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "blade-the-series-s1", season: 1, releaseDate: "2006-06-28", episodeCount: 12, episodes: [],
        poster: "posters/tv/blade-the-series-s1.webp" }
    ] },

  /* ===== SHOW: Spider-Man: The Animated Series (1994) ===== */
  { id: "spider-man-1994", title: "Spider-Man: The Animated Series (1994)", type: "tv", universe: "other", category: "animation", group: "Older animation (1990s-2000s)",
    importance: "optional", poster: "posters/tv/spider-man-1994-s1.webp",
    description: "Peter Parker fights Kingpin, Venom and more across five seasons of the Fox Kids classic.",
    creator: "John Semper Jr. (producer)",
    cast: [
      "Christopher Daniel Barnes (Peter Parker / Spider-Man)",
      "Sara Ballantine (Mary Jane Watson)",
      "Edward Asner (J. Jonah Jameson)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "spider-man-1994-s1", season: 1, releaseDate: "1994-11-19", episodeCount: 13, episodes: [],
        poster: "posters/tv/spider-man-1994-s1.webp" },
      { id: "spider-man-1994-s2", season: 2, releaseDate: "1995-09-09", episodeCount: 14, episodes: [],
        poster: "posters/tv/spider-man-1994-s2.webp" },
      { id: "spider-man-1994-s3", season: 3, releaseDate: "1996-04-27", episodeCount: 14, episodes: [],
        poster: "posters/tv/spider-man-1994-s3.webp" },
      { id: "spider-man-1994-s4", season: 4, releaseDate: "1997-02-01", episodeCount: 11, episodes: [],
        poster: "posters/tv/spider-man-1994-s4.webp" },
      { id: "spider-man-1994-s5", season: 5, releaseDate: "1997-09-12", episodeCount: 13, episodes: [],
        poster: "posters/tv/spider-man-1994-s5.webp" }
    ] },

  /* ===== SHOW: X-Men: The Animated Series ===== */
  { id: "x-men-1992", title: "X-Men: The Animated Series", type: "tv", universe: "other", category: "animation", group: "Older animation (1990s-2000s)",
    importance: "optional", poster: "posters/tv/x-men-1992-s1.webp",
    description: "The X-Men protect a world that fears them in the Fox Kids series that later led to X-Men '97.",
    creator: "Eric Lewald, Julia Lewald (developers)",
    cast: [
      "Cedric Smith (Professor X)",
      "Cal Dodd (Wolverine)",
      "Norm Spencer (Cyclops)",
      "Lenore Zann (Rogue)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "x-men-1992-s1", season: 1, releaseDate: "1992-10-31", episodeCount: 13, episodes: [],
        poster: "posters/tv/x-men-1992-s1.webp" },
      { id: "x-men-1992-s2", season: 2, releaseDate: "1993-10-23", episodeCount: 13, episodes: [],
        poster: "posters/tv/x-men-1992-s2.webp" },
      { id: "x-men-1992-s3", season: 3, releaseDate: "1994-07-29", episodeCount: 19, episodes: [],
        poster: "posters/tv/x-men-1992-s3.webp" },
      { id: "x-men-1992-s4", season: 4, releaseDate: "1995-05-06", episodeCount: 21, episodes: [],
        poster: "posters/tv/x-men-1992-s4.webp" },
      { id: "x-men-1992-s5", season: 5, releaseDate: "1996-09-07", episodeCount: 10, episodes: [],
        poster: "posters/tv/x-men-1992-s5.webp" }
    ] },

  /* ===== SHOW: X-Men: Evolution ===== */
  { id: "x-men-evolution", title: "X-Men: Evolution", type: "tv", universe: "other", category: "animation", group: "Older animation (1990s-2000s)",
    importance: "optional", poster: "posters/tv/x-men-evolution-s1.webp",
    description: "Teenage versions of the X-Men learn to use their powers while attending Bayville High.",
    creator: "Marty Isenberg, Robert N. Skir, David Wise (developers)",
    cast: [
      "David Kaye (Professor X)",
      "Venus Terzo (Rogue)",
      "Kirby Morrow (Cyclops)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "x-men-evolution-s1", season: 1, releaseDate: "2000-11-04", episodeCount: 13, episodes: [],
        poster: "posters/tv/x-men-evolution-s1.webp" },
      { id: "x-men-evolution-s2", season: 2, releaseDate: "2001-09-29", episodeCount: 17, episodes: [],
        poster: "posters/tv/x-men-evolution-s2.webp" },
      { id: "x-men-evolution-s3", season: 3, releaseDate: "2002-09-14", episodeCount: 13, episodes: [],
        poster: "posters/tv/x-men-evolution-s3.webp" },
      { id: "x-men-evolution-s4", season: 4, releaseDate: "2003-08-30", episodeCount: 9, episodes: [],
        poster: "posters/tv/x-men-evolution-s4.webp" }
    ] },

  /* ===== SHOW: Wolverine and the X-Men ===== */
  { id: "wolverine-and-the-x-men", title: "Wolverine and the X-Men", type: "tv", universe: "other", category: "animation", group: "Older animation (1990s-2000s)",
    importance: "optional", poster: "posters/tv/wolverine-and-the-x-men-s1.webp",
    description: "After Professor X and Jean Grey vanish, Wolverine reunites the X-Men to stop a future war.",
    creator: "Craig Kyle, Greg Johnson",
    cast: [
      "Steven Blum (Wolverine)",
      "Jennifer Hale (Emma Frost)",
      "Yuri Lowenthal (Iceman)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "wolverine-and-the-x-men-s1", season: 1, releaseDate: "2009-01-23", episodeCount: 26, episodes: [],
        poster: "posters/tv/wolverine-and-the-x-men-s1.webp" }
    ] },

  /* ===== SHOW: Ultimate Spider-Man ===== */
  { id: "ultimate-spider-man", title: "Ultimate Spider-Man", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/ultimate-spider-man-s1.webp",
    description: "Peter Parker trains with S.H.I.E.L.D. and a team of teen heroes in this Disney XD comedy series.",
    creator: "Man of Action",
    cast: [
      "Drake Bell (Peter Parker / Spider-Man)",
      "Chi McBride (Nick Fury)",
      "Greg Cipes (Danny Rand / Iron Fist)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "ultimate-spider-man-s1", season: 1, releaseDate: "2012-04-01", episodeCount: 26, episodes: [],
        poster: "posters/tv/ultimate-spider-man-s1.webp" },
      { id: "ultimate-spider-man-s2", season: 2, releaseDate: "2013-01-21", episodeCount: 26, episodes: [],
        poster: "posters/tv/ultimate-spider-man-s2.webp" },
      { id: "ultimate-spider-man-s3", season: 3, releaseDate: "2014-03-13", episodeCount: 26, episodes: [],
        poster: "posters/tv/ultimate-spider-man-s3.webp" },
      { id: "ultimate-spider-man-s4", season: 4, releaseDate: "2016-02-21", episodeCount: 26, episodes: [],
        poster: "posters/tv/ultimate-spider-man-s4.webp" }
    ] },

  /* ===== SHOW: Hulk and the Agents of S.M.A.S.H. ===== */
  { id: "hulk-and-the-agents-of-smash", title: "Hulk and the Agents of S.M.A.S.H.", type: "tv", universe: "other", category: "animation", group: "Kids & Disney XD animation",
    importance: "optional", poster: "posters/tv/hulk-and-the-agents-of-smash-s1.webp",
    description: "Hulk, A-Bomb, Red Hulk, She-Hulk and Skaar team up to take on monster-sized threats.",
    creator: "Paul Dini, Henry Gilroy (developers)",
    cast: [
      "Fred Tatasciore (Hulk)",
      "Seth Green (Rick Jones / A-Bomb)",
      "Eliza Dushku (She-Hulk)"],
    trailer: "", whereToWatch: "", status: "Ended",
    seasons: [
      { id: "hulk-and-the-agents-of-smash-s1", season: 1, releaseDate: "2013-08-11", episodeCount: 26, episodes: [],
        poster: "posters/tv/hulk-and-the-agents-of-smash-s1.webp" },
      { id: "hulk-and-the-agents-of-smash-s2", season: 2, releaseDate: "2014-10-12", episodeCount: 26, episodes: [],
        poster: "posters/tv/hulk-and-the-agents-of-smash-s2.webp" }
    ] },

  /* ===== END OF SHOWS ===== */
];

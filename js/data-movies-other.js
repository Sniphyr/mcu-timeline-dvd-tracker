/*
 * ==========================================================================
 *  QUICK GUIDE: HOW TO EDIT THIS FILE  (Other Marvel movies)
 * ==========================================================================
 *  Same idea as data-movies-xmen.js: one block per movie in the list below.
 *  Movies here are NOT part of the MCU: other studios' Marvel films
 *  (Fantastic Four, Daredevil, Punisher, Blade, Hulk 2003...) and the
 *  Marvel One-Shots. They have their own order numbers.
 *
 *  REMOVE a movie: delete its block ({ id: ... to its }, ) and save.
 *  REMOVE ALL of them: delete this file AND the line
 *  <script src="js/data-movies-other.js"></script> in index.html.
 *  ADD a movie: copy a block, keep universe: "other", use a new id and new
 *  releaseOrder / chronologicalOrder numbers (see README.md).
 *
 *  group (optional) = the sub-section on the Movies page. Movies with the
 *  same group text go together; sections appear in the order the groups
 *  first show up in this file. No group = "Other Marvel films".
 *  phase is only needed by the data checker (use 1 to 5, any number works).
 *  Posters: posters/movies/<id>.webp (a placeholder shows if missing).
 * ==========================================================================
 */
window.OTHER_MOVIES = [
  /* ---- Fantastic Four (Fox) ---- */
  { id: "fantastic-four-2005", title: "Fantastic Four", type: "movie", universe: "other", group: "Fantastic Four (Fox)",
    releaseDate: "2005-07-08", releaseOrder: 1100, chronologicalOrder: 100, phase: 1, importance: "optional",
    description: "Four astronauts gain strange powers after a cosmic storm and must stop Victor Von Doom from using it for his own ends.",
    poster: "posters/movies/fantastic-four-2005.webp",
    runtime: 106, director: "Tim Story",
    cast: [
      "Ioan Gruffudd (Reed Richards / Mr. Fantastic)",
      "Jessica Alba (Sue Storm / Invisible Woman)",
      "Chris Evans (Johnny Storm / Human Torch)",
      "Michael Chiklis (Ben Grimm / The Thing)",
      "Julian McMahon (Victor Von Doom)",
      "Kerry Washington (Alicia Masters)"],
    boxOffice: "$333M", imdb: 5.7, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Fantastic Four (Fox)", related: ["fantastic-four-rise-of-the-silver-surfer", "the-fantastic-four-first-steps"] },

  { id: "fantastic-four-rise-of-the-silver-surfer", title: "Fantastic Four: Rise of the Silver Surfer", type: "movie", universe: "other", group: "Fantastic Four (Fox)",
    releaseDate: "2007-06-15", releaseOrder: 1300, chronologicalOrder: 200, phase: 1, importance: "optional",
    description: "As Reed and Sue's wedding nears, the team faces the Silver Surfer, herald of the planet-eating Galactus.",
    poster: "posters/movies/fantastic-four-rise-of-the-silver-surfer.webp",
    runtime: 92, director: "Tim Story",
    cast: [
      "Ioan Gruffudd (Reed Richards / Mr. Fantastic)",
      "Jessica Alba (Sue Storm / Invisible Woman)",
      "Chris Evans (Johnny Storm / Human Torch)",
      "Michael Chiklis (Ben Grimm / The Thing)",
      "Julian McMahon (Victor Von Doom)",
      "Doug Jones (Silver Surfer)"],
    boxOffice: "$302M", imdb: 5.6, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Fantastic Four (Fox)", related: ["fantastic-four-2005", "the-fantastic-four-first-steps"],
    watchBefore: ["fantastic-four-2005"] },

  { id: "fantastic-four-2015", title: "Fantastic Four", type: "movie", universe: "other", group: "Fantastic Four (Fox)",
    releaseDate: "2015-08-07", releaseOrder: 2100, chronologicalOrder: 300, phase: 1, importance: "optional",
    description: "A reboot in which four young people are transformed by a journey to another dimension and must stop a former friend turned Doom.",
    poster: "posters/movies/fantastic-four-2015.webp",
    runtime: 100, director: "Josh Trank",
    cast: [
      "Miles Teller (Reed Richards / Mr. Fantastic)",
      "Kate Mara (Sue Storm / Invisible Woman)",
      "Michael B. Jordan (Johnny Storm / Human Torch)",
      "Jamie Bell (Ben Grimm / The Thing)",
      "Toby Kebbell (Victor Domashev / Doom)",
      "Reg E. Cathey (Franklin Storm)"],
    boxOffice: "$168M", imdb: 4.3, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Fantastic Four (Fox)", related: ["fantastic-four-2005", "the-fantastic-four-first-steps"] },

  /* ---- Daredevil, Elektra and Ghost Rider ---- */
  { id: "daredevil-2003", title: "Daredevil", type: "movie", universe: "other", group: "Daredevil, Elektra and Ghost Rider",
    releaseDate: "2003-02-14", releaseOrder: 600, chronologicalOrder: 400, phase: 2, importance: "optional",
    description: "Blind lawyer Matt Murdock fights crime at night as Daredevil, taking on the Kingpin and the assassin Bullseye.",
    poster: "posters/movies/daredevil-2003.webp",
    runtime: 103, director: "Mark Steven Johnson",
    cast: [
      "Ben Affleck (Matt Murdock / Daredevil)",
      "Jennifer Garner (Elektra Natchios)",
      "Colin Farrell (Bullseye)",
      "Michael Clarke Duncan (Kingpin)",
      "Jon Favreau (Foggy Nelson)",
      "Joe Pantoliano (Ben Urich)"],
    boxOffice: "$179M", imdb: 5.3, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "1 scene: end",
    series: "Daredevil and Elektra", related: ["elektra", "ghost-rider"] },

  { id: "elektra", title: "Elektra", type: "movie", universe: "other", group: "Daredevil, Elektra and Ghost Rider",
    releaseDate: "2005-01-14", releaseOrder: 1000, chronologicalOrder: 500, phase: 2, importance: "optional",
    description: "Resurrected assassin Elektra Natchios must protect a girl and her father from the ninja clan The Hand.",
    poster: "posters/movies/elektra.webp",
    runtime: 97, director: "Rob Bowman",
    cast: [
      "Jennifer Garner (Elektra Natchios)",
      "Goran Visnjic (Mark Miller)",
      "Terence Stamp (Stick)",
      "Kirsten Prout (Abby Miller)",
      "Will Yun Lee (Kirigi)",
      "Cary-Hiroyuki Tagawa (Roshi)"],
    boxOffice: "$57M", imdb: 4.7, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Daredevil and Elektra", related: ["daredevil-2003"],
    watchBefore: ["daredevil-2003"] },

  { id: "ghost-rider", title: "Ghost Rider", type: "movie", universe: "other", group: "Daredevil, Elektra and Ghost Rider",
    releaseDate: "2007-02-16", releaseOrder: 1200, chronologicalOrder: 600, phase: 2, importance: "optional",
    description: "Stunt rider Johnny Blaze sells his soul to the devil and becomes the fiery Ghost Rider to fight Blackheart.",
    poster: "posters/movies/ghost-rider.webp",
    runtime: 110, director: "Mark Steven Johnson",
    cast: [
      "Nicolas Cage (Johnny Blaze / Ghost Rider)",
      "Eva Mendes (Roxanne Simpson)",
      "Wes Bentley (Blackheart)",
      "Sam Elliott (Caretaker)",
      "Peter Fonda (Mephistopheles)",
      "Donal Logue (Mack)"],
    boxOffice: "$229M", imdb: 5.2, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Ghost Rider", related: ["ghost-rider-spirit-of-vengeance"] },

  { id: "ghost-rider-spirit-of-vengeance", title: "Ghost Rider: Spirit of Vengeance", type: "movie", universe: "other", group: "Daredevil, Elektra and Ghost Rider",
    releaseDate: "2012-02-17", releaseOrder: 1700, chronologicalOrder: 700, phase: 2, importance: "optional",
    description: "Johnny Blaze, hiding in Eastern Europe, is pulled back in to protect a boy from the devil.",
    poster: "posters/movies/ghost-rider-spirit-of-vengeance.webp",
    runtime: 96, director: "Mark Neveldine, Brian Taylor",
    cast: [
      "Nicolas Cage (Johnny Blaze / Ghost Rider)",
      "Ciarán Hinds (Roarke)",
      "Violante Placido (Nadya)",
      "Idris Elba (Moreau)",
      "Johnny Whitworth (Ray Carrigan)",
      "Fergus Riordan (Danny)"],
    boxOffice: "$133M", imdb: 4.3, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Ghost Rider", related: ["ghost-rider"],
    watchBefore: ["ghost-rider"] },

  /* ---- The Punisher ---- */
  { id: "the-punisher-1989", title: "The Punisher", type: "movie", universe: "other", group: "The Punisher",
    releaseDate: "1989-10-05", releaseOrder: 200, chronologicalOrder: 800, phase: 3, importance: "optional",
    description: "After his family is killed, former cop Frank Castle becomes the Punisher and wages war on the mob.",
    poster: "posters/movies/the-punisher-1989.webp",
    runtime: 89, director: "Mark Goldblatt",
    cast: [
      "Dolph Lundgren (Frank Castle / The Punisher)",
      "Louis Gossett Jr. (Jake Berkowitz)",
      "Jeroen Kräbbe (Gianni Franco)",
      "Barry Otto (Shake)",
      "Bryan Marshall (Dino Moretti)",
      "Kim Miyori (Lady Tanaka)"],
    boxOffice: "", imdb: 5.6, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "The Punisher", related: ["the-punisher-2004", "punisher-war-zone"] },

  { id: "the-punisher-2004", title: "The Punisher", type: "movie", universe: "other", group: "The Punisher",
    releaseDate: "2004-04-16", releaseOrder: 800, chronologicalOrder: 900, phase: 3, importance: "optional",
    description: "Retired FBI agent Frank Castle seeks revenge on mob boss Howard Saint after his family is massacred.",
    poster: "posters/movies/the-punisher-2004.webp",
    runtime: 124, director: "Jonathan Hensleigh",
    cast: [
      "Thomas Jane (Frank Castle / The Punisher)",
      "John Travolta (Howard Saint)",
      "Samantha Mathis (Maria)",
      "Will Patton (Quentin Glass)",
      "Rebecca Romijn (Joan)",
      "Ben Foster (Dave)"],
    boxOffice: "$55M", imdb: 6.4, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "The Punisher", related: ["the-punisher-1989", "punisher-war-zone"] },

  { id: "punisher-war-zone", title: "Punisher: War Zone", type: "movie", universe: "other", group: "The Punisher",
    releaseDate: "2008-12-05", releaseOrder: 1400, chronologicalOrder: 1000, phase: 3, importance: "optional",
    description: "Frank Castle takes on the disfigured mobster Jigsaw and his gang in a violent standalone reboot.",
    poster: "posters/movies/punisher-war-zone.webp",
    runtime: 103, director: "Lexi Alexander",
    cast: [
      "Ray Stevenson (Frank Castle / The Punisher)",
      "Dominic West (Billy Russoti / Jigsaw)",
      "Doug Hutchison (Loony Bin Jim)",
      "Wayne Knight (Microchip)",
      "Colin Salmon (Paul Budiansky)",
      "Julie Benz (Angela Donatelli)"],
    boxOffice: "$10M", imdb: 5.9, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "The Punisher", related: ["the-punisher-2004", "the-punisher-1989"] },

  /* ---- Blade ---- */
  { id: "blade", title: "Blade", type: "movie", universe: "other", group: "Blade",
    releaseDate: "1998-08-21", releaseOrder: 400, chronologicalOrder: 1100, phase: 4, importance: "recommended",
    description: "Half-vampire Blade hunts the vampires who made him, led by the ambitious Deacon Frost.",
    poster: "posters/movies/blade.webp",
    runtime: 120, director: "Stephen Norrington",
    cast: [
      "Wesley Snipes (Blade)",
      "Stephen Dorff (Deacon Frost)",
      "Kris Kristofferson (Whistler)",
      "N'Bushe Wright (Karen Jenson)",
      "Donal Logue (Quinn)",
      "Udo Kier (Dragonetti)"],
    boxOffice: "$131M", imdb: 7.1, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Blade", related: ["blade-ii", "blade-trinity"] },

  { id: "blade-ii", title: "Blade II", type: "movie", universe: "other", group: "Blade",
    releaseDate: "2002-03-22", releaseOrder: 500, chronologicalOrder: 1200, phase: 4, importance: "recommended",
    description: "Blade teams with his old enemies, the vampire Bloodpack, to stop the Reapers, a deadly new breed of vampire.",
    poster: "posters/movies/blade-ii.webp",
    runtime: 117, director: "Guillermo del Toro",
    cast: [
      "Wesley Snipes (Blade)",
      "Kris Kristofferson (Whistler)",
      "Ron Perlman (Reinhardt)",
      "Leonor Varela (Nyssa)",
      "Norman Reedus (Scud)",
      "Luke Goss (Nomak)"],
    boxOffice: "$155M", imdb: 6.7, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Blade", related: ["blade", "blade-trinity"],
    watchBefore: ["blade"] },

  { id: "blade-trinity", title: "Blade: Trinity", type: "movie", universe: "other", group: "Blade",
    releaseDate: "2004-12-08", releaseOrder: 900, chronologicalOrder: 1300, phase: 4, importance: "optional",
    description: "Hunted by the FBI, Blade joins the Nightstalkers to face Dracula.",
    poster: "posters/movies/blade-trinity.webp",
    runtime: 113, director: "David S. Goyer",
    cast: [
      "Wesley Snipes (Blade)",
      "Kris Kristofferson (Whistler)",
      "Jessica Biel (Abigail Whistler)",
      "Ryan Reynolds (Hannibal King)",
      "Parker Posey (Danica Talos)",
      "Dominic Purcell (Drake / Dracula)"],
    boxOffice: "$132M", imdb: 5.8, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Blade", related: ["blade", "blade-ii"],
    watchBefore: ["blade", "blade-ii"] },

  /* ---- Other Marvel films ---- */
  { id: "howard-the-duck", title: "Howard the Duck", type: "movie", universe: "other", group: "Other Marvel films",
    releaseDate: "1986-08-01", releaseOrder: 100, chronologicalOrder: 1400, phase: 5, importance: "optional",
    description: "A sarcastic alien duck is pulled to Earth and, with a rock singer, must stop an invasion.",
    poster: "posters/movies/howard-the-duck.webp",
    runtime: 110, director: "Willard Huyck",
    cast: [
      "Lea Thompson (Beverly Switzler)",
      "Jeffrey Jones (Dr. Walter Jenning)",
      "Tim Robbins (Phil Blumburtt)",
      "Ed Gale (Howard T. Duck)",
      "Chip Zien (Howard T. Duck, voice)",
      "Liz Sagal (Ronette)"],
    boxOffice: "$38M", imdb: 4.7, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Other Marvel films", related: ["guardians-of-the-galaxy"] },

  { id: "captain-america-1990", title: "Captain America", type: "movie", universe: "other", group: "Other Marvel films",
    releaseDate: "1990-12-14", releaseOrder: 300, chronologicalOrder: 1500, phase: 5, importance: "optional",
    description: "A WWII super-soldier is frozen and revived decades later to face the Red Skull again.",
    poster: "posters/movies/captain-america-1990.webp",
    runtime: 97, director: "Albert Pyun",
    cast: [
      "Matt Salinger (Steve Rogers / Captain America)",
      "Ned Beatty (Sam Kolawetz)",
      "Ronny Cox (President Tyler)",
      "Scott Paulin (Red Skull)",
      "Darren McGavin (General Fleming)",
      "Kim Gillingham (Bernice Stewart)"],
    boxOffice: "", imdb: 3.2, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Other Marvel films", related: ["captain-america-the-first-avenger"] },

  { id: "hulk-2003", title: "Hulk", type: "movie", universe: "other", group: "Other Marvel films",
    releaseDate: "2003-06-20", releaseOrder: 700, chronologicalOrder: 1600, phase: 5, importance: "optional",
    description: "Scientist Bruce Banner's past and a lab accident unleash a rage-fueled giant, with his estranged father in pursuit.",
    poster: "posters/movies/hulk-2003.webp",
    runtime: 138, director: "Ang Lee",
    cast: [
      "Eric Bana (Bruce Banner / Hulk)",
      "Jennifer Connelly (Betty Ross)",
      "Sam Elliott (General Ross)",
      "Josh Lucas (Glenn Talbot)",
      "Nick Nolte (David Banner)"],
    boxOffice: "$245M", imdb: 5.6, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Other Marvel films", related: ["the-incredible-hulk"] },

  { id: "the-consultant", title: "The Consultant", type: "movie", universe: "other", group: "Other Marvel films",
    releaseDate: "2011-09-13", releaseOrder: 1500, chronologicalOrder: 1900, phase: 5, importance: "optional",
    description: "Agent Coulson and Sitwell discuss who should be the consultant for the Hulk situation after The Incredible Hulk.",
    poster: "posters/movies/the-consultant.webp",
    runtime: 4, director: "Leythum",
    cast: [
      "Clark Gregg (Phil Coulson)",
      "Maximiliano Hernández (Jasper Sitwell)",
      "Tim Roth (Emil Blonsky / Abomination)",
      "William Hurt (Thaddeus Ross)"],
    boxOffice: "", imdb: 6.9, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Marvel One-Shots", related: ["thor", "the-incredible-hulk", "iron-man-2"] },

  { id: "a-funny-thing-happened-on-the-way-to-thors-hammer", title: "A Funny Thing Happened on the Way to Thor's Hammer", type: "movie", universe: "other", group: "Other Marvel films",
    releaseDate: "2011-10-25", releaseOrder: 1600, chronologicalOrder: 1800, phase: 5, importance: "optional",
    description: "Agent Coulson stops at a gas station on his way to New Mexico, just before he reaches the site where Thor's hammer fell.",
    poster: "posters/movies/a-funny-thing-happened-on-the-way-to-thors-hammer.webp",
    runtime: 4, director: "Leythum",
    cast: [
      "Clark Gregg (Phil Coulson)"],
    boxOffice: "", imdb: 7.1, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Marvel One-Shots", related: ["thor", "captain-america-the-first-avenger"] },

  { id: "item-47", title: "Item 47", type: "movie", universe: "other", group: "Other Marvel films",
    releaseDate: "2012-09-25", releaseOrder: 1800, chronologicalOrder: 2000, phase: 5, importance: "recommended",
    description: "A couple finds a Chitauri weapon after the Battle of New York and goes on a spree while S.H.I.E.L.D. closes in.",
    poster: "posters/movies/item-47.webp",
    runtime: 12, director: "Louis D'Esposito",
    cast: [
      "Lizzy Caplan (Bennie Pose)",
      "Jesse Bradford (Cooper)",
      "Maximiliano Hernández (Jasper Sitwell)"],
    boxOffice: "", imdb: 6.6, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Marvel One-Shots", related: ["the-avengers"] },

  { id: "agent-carter-one-shot", title: "Agent Carter", type: "movie", universe: "other", group: "Other Marvel films",
    releaseDate: "2013-09-03", releaseOrder: 1900, chronologicalOrder: 1700, phase: 5, importance: "recommended",
    description: "Peggy Carter takes on a mission for the Strategic Scientific Reserve after Captain America's disappearance.",
    poster: "posters/movies/agent-carter-one-shot.webp",
    runtime: 15, director: "Louis D'Esposito",
    cast: [
      "Hayley Atwell (Peggy Carter)",
      "Bradley Whitford (Agent Flynn)",
      "Dominic Cooper (Howard Stark)"],
    boxOffice: "", imdb: 7.4, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Marvel One-Shots", related: ["captain-america-the-first-avenger", "iron-man-3"] },

  { id: "all-hail-the-king", title: "All Hail the King", type: "movie", universe: "other", group: "Other Marvel films",
    releaseDate: "2014-02-04", releaseOrder: 2000, chronologicalOrder: 2100, phase: 5, importance: "recommended",
    description: "A documentary filmmaker interviews Trevor Slattery, the fake Mandarin, in prison.",
    poster: "posters/movies/all-hail-the-king.webp",
    runtime: 14, director: "Drew Pearce",
    cast: [
      "Ben Kingsley (Trevor Slattery)",
      "Scoot McNairy (Jackson Norriss)",
      "Lester Speight (Herman)"],
    boxOffice: "", imdb: 7.2, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Marvel One-Shots", related: ["iron-man-3", "thor-the-dark-world"] },

];

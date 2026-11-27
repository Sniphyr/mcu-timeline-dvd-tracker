/*
 * ==========================================================================
 *  QUICK GUIDE: HOW TO EDIT THIS FILE  (Sony Spider-Man movies)
 * ==========================================================================
 *  Same idea as data-movies-xmen.js: one block per movie in the list below.
 *  REMOVE a movie: delete its block ({ id: ... to its }, ) and save.
 *  REMOVE ALL Sony movies: delete this file AND the line
 *  <script src="js/data-movies-sony.js"></script> in index.html.
 *  ADD a movie: copy a block, keep universe: "sony", use a new id and new
 *  releaseOrder / chronologicalOrder numbers (see README.md).
 *
 *  phase here is a story group, not an MCU phase:
 *    1 = Raimi Trilogy, 2 = The Amazing Spider-Man, 3 = Sony's Spider-Man
 *    Universe (Venom etc.), 4 = Spider-Verse (animated)
 *  These movies are NOT part of the main MCU timeline.
 *  Posters: posters/movies/<id>.webp (a placeholder shows if the file is missing).
 * ==========================================================================
 */
window.SONY_MOVIES = [
  { id: "spider-man", title: "Spider-Man", type: "movie", universe: "sony",
    releaseDate: "2002-05-03", releaseOrder: 100, chronologicalOrder: 100, phase: 1, importance: "recommended",
    description: "Bitten by a genetically altered spider, Peter Parker becomes Spider-Man and must stop the Green Goblin from terrorizing New York.",
    poster: "posters/movies/spider-man.webp",
    runtime: 121, director: "Sam Raimi",
    cast: [
      "Tobey Maguire (Peter Parker / Spider-Man)",
      "Kirsten Dunst (Mary Jane Watson)",
      "Willem Dafoe (Norman Osborn / Green Goblin)",
      "James Franco (Harry Osborn)",
      "Cliff Robertson (Ben Parker)",
      "Rosemary Harris (May Parker)"],
    boxOffice: "$822M", imdb: 7.4, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Spider-Man (Raimi trilogy)", related: ["spider-man-2", "the-amazing-spider-man"] },

  { id: "spider-man-2", title: "Spider-Man 2", type: "movie", universe: "sony",
    releaseDate: "2004-06-30", releaseOrder: 200, chronologicalOrder: 200, phase: 1, importance: "essential",
    description: "Peter struggles to balance his life and his powers while the brilliant Dr. Otto Octavius becomes the unstoppable Doctor Octopus.",
    poster: "posters/movies/spider-man-2.webp",
    runtime: 127, director: "Sam Raimi",
    cast: [
      "Tobey Maguire (Peter Parker / Spider-Man)",
      "Kirsten Dunst (Mary Jane Watson)",
      "Alfred Molina (Dr. Otto Octavius / Doctor Octopus)",
      "James Franco (Harry Osborn)",
      "Rosemary Harris (May Parker)",
      "J.K. Simmons (J. Jonah Jameson)"],
    boxOffice: "$789M", imdb: 7.5, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Spider-Man (Raimi trilogy)", related: ["spider-man", "spider-man-3"],
    watchBefore: ["spider-man"] },

  { id: "spider-man-3", title: "Spider-Man 3", type: "movie", universe: "sony",
    releaseDate: "2007-05-04", releaseOrder: 300, chronologicalOrder: 300, phase: 1, importance: "recommended",
    description: "Peter faces Sandman, a new Goblin and the alien symbiote that turns his suit black and brings out his darker side.",
    poster: "posters/movies/spider-man-3.webp",
    runtime: 139, director: "Sam Raimi",
    cast: [
      "Tobey Maguire (Peter Parker / Spider-Man)",
      "Kirsten Dunst (Mary Jane Watson)",
      "James Franco (Harry Osborn / New Goblin)",
      "Thomas Haden Church (Flint Marko / Sandman)",
      "Topher Grace (Eddie Brock / Venom)",
      "Bryce Dallas Howard (Gwen Stacy)"],
    boxOffice: "$895M", imdb: 6.3, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Spider-Man (Raimi trilogy)", related: ["spider-man-2", "venom"],
    watchBefore: ["spider-man", "spider-man-2"] },

  { id: "the-amazing-spider-man", title: "The Amazing Spider-Man", type: "movie", universe: "sony",
    releaseDate: "2012-07-03", releaseOrder: 400, chronologicalOrder: 400, phase: 2, importance: "recommended",
    description: "Peter Parker uncovers the secrets of his parents' past while Dr. Curt Connors transforms into the Lizard.",
    poster: "posters/movies/the-amazing-spider-man.webp",
    runtime: 136, director: "Marc Webb",
    cast: [
      "Andrew Garfield (Peter Parker / Spider-Man)",
      "Emma Stone (Gwen Stacy)",
      "Rhys Ifans (Dr. Curt Connors / Lizard)",
      "Denis Leary (Captain Stacy)",
      "Martin Sheen (Ben Parker)",
      "Sally Field (May Parker)"],
    boxOffice: "$758M", imdb: 6.9, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "1 scene: mid-credits",
    series: "The Amazing Spider-Man", related: ["the-amazing-spider-man-2", "spider-man"] },

  { id: "the-amazing-spider-man-2", title: "The Amazing Spider-Man 2", type: "movie", universe: "sony",
    releaseDate: "2014-05-02", releaseOrder: 500, chronologicalOrder: 500, phase: 2, importance: "optional",
    description: "Peter's romance with Gwen is tested as Electro and Harry Osborn's Green Goblin threaten New York and the truth about his father.",
    poster: "posters/movies/the-amazing-spider-man-2.webp",
    runtime: 142, director: "Marc Webb",
    cast: [
      "Andrew Garfield (Peter Parker / Spider-Man)",
      "Emma Stone (Gwen Stacy)",
      "Jamie Foxx (Max Dillon / Electro)",
      "Dane DeHaan (Harry Osborn / Green Goblin)",
      "Paul Giamatti (Aleksei Sytsevich / Rhino)",
      "Sally Field (May Parker)"],
    boxOffice: "$709M", imdb: 6.6, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "1 scene: mid-credits",
    series: "The Amazing Spider-Man", related: ["the-amazing-spider-man", "spider-man-no-way-home"],
    watchBefore: ["the-amazing-spider-man"] },

  { id: "venom", title: "Venom", type: "movie", universe: "sony",
    releaseDate: "2018-10-05", releaseOrder: 600, chronologicalOrder: 700, phase: 3, importance: "recommended",
    description: "Journalist Eddie Brock bonds with an alien symbiote and becomes Venom while a ruthless corporation chases the creatures.",
    poster: "posters/movies/venom.webp",
    runtime: 112, director: "Ruben Fleischer",
    cast: [
      "Tom Hardy (Eddie Brock / Venom)",
      "Michelle Williams (Anne Weying)",
      "Riz Ahmed (Carlton Drake / Riot)",
      "Scott Haze (Roland Treece)",
      "Reid Scott (Dan Lewis)",
      "Jenny Slate (Dr. Dora Skirth)"],
    boxOffice: "$856M", imdb: 6.6, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Venom", related: ["venom-let-there-be-carnage", "spider-man-into-the-spider-verse"] },

  { id: "spider-man-into-the-spider-verse", title: "Spider-Man: Into the Spider-Verse", type: "movie", universe: "sony",
    releaseDate: "2018-12-14", releaseOrder: 700, chronologicalOrder: 1200, phase: 4, importance: "essential",
    description: "Teen Miles Morales becomes Spider-Man and meets spider-heroes from other dimensions who must stop a threat to all realities.",
    poster: "posters/movies/spider-man-into-the-spider-verse.webp",
    runtime: 117, director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    cast: [
      "Shameik Moore (Miles Morales / Spider-Man)",
      "Jake Johnson (Peter B. Parker)",
      "Hailee Steinfeld (Gwen Stacy / Spider-Woman)",
      "Mahershala Ali (Aaron Davis / Prowler)",
      "Brian Tyree Henry (Jefferson Davis)",
      "Lily Tomlin (May Parker)"],
    boxOffice: "$384M", imdb: 8.4, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "1 scene: mid-credits",
    series: "Spider-Verse", related: ["spider-man-across-the-spider-verse", "venom"] },

  { id: "venom-let-there-be-carnage", title: "Venom: Let There Be Carnage", type: "movie", universe: "sony",
    releaseDate: "2021-10-01", releaseOrder: 800, chronologicalOrder: 800, phase: 3, importance: "recommended",
    description: "Eddie Brock and Venom face serial killer Cletus Kasady, who becomes the deadly symbiote Carnage.",
    poster: "posters/movies/venom-let-there-be-carnage.webp",
    runtime: 97, director: "Andy Serkis",
    cast: [
      "Tom Hardy (Eddie Brock / Venom)",
      "Woody Harrelson (Cletus Kasady / Carnage)",
      "Michelle Williams (Anne Weying)",
      "Naomie Harris (Frances Barrison / Shriek)",
      "Reid Scott (Dr. Dan Lewis)",
      "Stephen Graham (Detective Mulligan)"],
    boxOffice: "$507M", imdb: 5.9, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Venom", related: ["venom", "venom-the-last-dance", "spider-man-no-way-home"],
    watchBefore: ["venom"] },

  { id: "morbius", title: "Morbius", type: "movie", universe: "sony",
    releaseDate: "2022-04-01", releaseOrder: 900, chronologicalOrder: 900, phase: 3, importance: "optional",
    description: "Biochemist Michael Morbius tries to cure his rare blood disease and becomes a living vampire.",
    poster: "posters/movies/morbius.webp",
    runtime: 104, director: "Daniel Espinosa",
    cast: [
      "Jared Leto (Dr. Michael Morbius)",
      "Matt Smith (Milo)",
      "Adria Arjona (Martine Bancroft)",
      "Jared Harris (Dr. Emil Nicholas)",
      "Al Madrigal (Agent Simon Stroud)",
      "Tyrese Gibson (Agent Alberto Rodriguez)"],
    boxOffice: "$167M", imdb: 5.2, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Sony's Spider-Man Universe", related: ["venom-let-there-be-carnage", "madame-web"] },

  { id: "spider-man-across-the-spider-verse", title: "Spider-Man: Across the Spider-Verse", type: "movie", universe: "sony",
    releaseDate: "2023-06-02", releaseOrder: 1000, chronologicalOrder: 1300, phase: 4, importance: "essential",
    description: "Miles Morales travels the multiverse and clashes with the Spider-Society over his place as Spider-Man.",
    poster: "posters/movies/spider-man-across-the-spider-verse.webp",
    runtime: 140, director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    cast: [
      "Shameik Moore (Miles Morales / Spider-Man)",
      "Hailee Steinfeld (Gwen Stacy / Spider-Woman)",
      "Brian Tyree Henry (Jefferson Davis)",
      "Luna Lauren Velez (Rio Morales)",
      "Jake Johnson (Peter B. Parker)",
      "Oscar Isaac (Miguel O'Hara / Spider-Man 2099)"],
    boxOffice: "$690M", imdb: 8.5, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Spider-Verse", related: ["spider-man-into-the-spider-verse"],
    watchBefore: ["spider-man-into-the-spider-verse"] },

  { id: "madame-web", title: "Madame Web", type: "movie", universe: "sony",
    releaseDate: "2024-02-14", releaseOrder: 1100, chronologicalOrder: 600, phase: 3, importance: "optional",
    description: "Paramedic Cassandra Webb develops clairvoyance and must protect three young women from a killer who hunts them.",
    poster: "posters/movies/madame-web.webp",
    runtime: 116, director: "S.J. Clarkson",
    cast: [
      "Dakota Johnson (Cassandra Webb / Madame Web)",
      "Sydney Sweeney (Julia Cornwall)",
      "Isabela Merced (Anya Corazon)",
      "Celeste O'Connor (Mattie Franklin)",
      "Tahar Rahim (Ezekiel Sims)",
      "Emma Roberts (Mary Parker)"],
    boxOffice: "$100M", imdb: 3.7, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Sony's Spider-Man Universe", related: ["morbius", "kraven-the-hunter"] },

  { id: "venom-the-last-dance", title: "Venom: The Last Dance", type: "movie", universe: "sony",
    releaseDate: "2024-10-25", releaseOrder: 1200, chronologicalOrder: 1000, phase: 3, importance: "recommended",
    description: "Eddie and Venom, hunted by both worlds, face their toughest choice as Knull's forces close in.",
    poster: "posters/movies/venom-the-last-dance.webp",
    runtime: 109, director: "Kelly Marcel",
    cast: [
      "Tom Hardy (Eddie Brock / Venom)",
      "Chiwetel Ejiofor (Rex Strickland)",
      "Juno Temple (Dr. Teddy Payne)",
      "Rhys Ifans (Martin)",
      "Stephen Graham (Detective Mulligan)",
      "Alanna Ubach (Mrs. Chen)"],
    boxOffice: "$479M", imdb: 5.4, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "2 scenes: mid and end",
    series: "Venom", related: ["venom", "venom-let-there-be-carnage"],
    watchBefore: ["venom", "venom-let-there-be-carnage"] },

  { id: "kraven-the-hunter", title: "Kraven the Hunter", type: "movie", universe: "sony",
    releaseDate: "2024-12-13", releaseOrder: 1300, chronologicalOrder: 1100, phase: 3, importance: "optional",
    description: "Sergei Kravinoff, gifted with animal-like powers, becomes the world's greatest hunter after clashing with his mobster father.",
    poster: "posters/movies/kraven-the-hunter.webp",
    runtime: 127, director: "J.C. Chandor",
    cast: [
      "Aaron Taylor-Johnson (Sergei Kravinoff / Kraven)",
      "Ariana DeBose (Calypso)",
      "Fred Hechinger (Dmitri Smerdyakov / Chameleon)",
      "Alessandro Nivola (Aleksei Sytsevich / Rhino)",
      "Christopher Abbott (The Foreigner)",
      "Russell Crowe (Nikolai Kravinoff)"],
    boxOffice: "$60M", imdb: 5.3, trailer: "", whereToWatch: "", dvdNumber: "",
    postCredits: "No post-credits scene",
    series: "Sony's Spider-Man Universe", related: ["madame-web", "morbius"] },

];

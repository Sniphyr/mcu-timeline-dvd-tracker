/*
 * ==========================================================================
 *  CHARACTERS  (js/data-characters.js)
 * ==========================================================================
 *  Each character is ONE block like the template below. The page shows them
 *  in the same order as this list, so move blocks around to reorder them.
 *
 *  ADD a character: copy the template, paste it just above the line
 *  "END OF CHARACTERS" at the bottom, and change the text.
 *
 *    { id: "my-character", name: "My Character", universe: "mcu",
 *      description: "One or two short sentences.",
 *      appearances: ["iron-man", "the-avengers", "loki-s1"] },
 *
 *    id           unique, lowercase, dashes only. Also the picture file name.
 *    name         shown on the card and page.
 *    universe     "mcu" or "X-Men" (used by the filter buttons).
 *    description  short text.
 *    appearances  ids of the movies, shows or seasons they appear in:
 *                   a movie id   "avengers-endgame"  -> a movie card
 *                   a show id    "loki"              -> a show card
 *                   a season id  "loki-s1"           -> that season's card
 *                 The page sorts them by the Watch order menu, so the order
 *                 you type them in does not matter. A wrong id is skipped,
 *                 and js/check-data.js names it in the Console (F12).
 *
 *  PICTURE: put a file named after the character id in the "characters"
 *  folder, e.g. characters/iron-man.webp  (.webp, .jpg, .jpeg or .png all
 *  work). No other setting is needed. To use another file name or place,
 *  add  image: "characters/my-file.png"  to that character.
 *  No picture yet? The page shows a placeholder with the name.
 *
 *  REMOVE a character: delete its block (from the { id: line to its },).
 *
 *  Keep every comma, quote mark and brace. Page blank? Press F12, open
 *  "Console", and read the red message.
 * ==========================================================================
 */
window.MCU_CHARACTERS = [
  { id: "iron-man", name: "Iron Man (Tony Stark)", universe: "mcu",
    description: "Genius inventor Tony Stark builds a powered suit and becomes a founding Avenger.",
    appearances: ["iron-man", "the-incredible-hulk", "iron-man-2", "the-avengers", "iron-man-3", "avengers-age-of-ultron", "captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame"] },

  { id: "captain-america", name: "Captain America (Steve Rogers)", universe: "mcu",
    description: "A soldier from the 1940s, enhanced by a super-soldier serum, who becomes the heart of the Avengers.",
    appearances: ["captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame"] },

  { id: "thor", name: "Thor", universe: "mcu",
    description: "The Asgardian god of thunder, a prince of Asgard and a founding Avenger.",
    appearances: ["thor", "the-avengers", "thor-the-dark-world", "avengers-age-of-ultron", "doctor-strange", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder"] },

  { id: "hulk", name: "Hulk (Bruce Banner)", universe: "mcu",
    description: "Scientist Bruce Banner, whose anger turns him into a giant green powerhouse.",
    appearances: ["the-incredible-hulk", "the-avengers", "iron-man-3", "avengers-age-of-ultron", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "shang-chi-and-the-legend-of-the-ten-rings"] },

  { id: "black-widow", name: "Black Widow (Natasha Romanoff)", universe: "mcu",
    description: "A former spy and assassin who turns her skills to protecting others as an Avenger.",
    appearances: ["iron-man-2", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame", "black-widow", "hawkeye"] },

  { id: "hawkeye", name: "Hawkeye (Clint Barton)", universe: "mcu",
    description: "A master archer and SHIELD agent who fights beside the Avengers while holding on to his family.",
    appearances: ["thor", "the-avengers", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-endgame", "hawkeye"] },

  { id: "loki", name: "Loki", universe: "mcu",
    description: "Thor's adopted brother, a trickster god whose schemes shape much of the MCU.",
    appearances: ["thor", "the-avengers", "thor-the-dark-world", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "loki"] },

  { id: "scarlet-witch", name: "Scarlet Witch (Wanda Maximoff)", universe: "mcu",
    description: "Her reality-bending powers make her one of the most powerful beings on Earth.",
    appearances: ["captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame", "wandavision", "doctor-strange-in-the-multiverse-of-madness"] },

  { id: "vision", name: "Vision", universe: "mcu",
    description: "An artificial being created from Ultron's design and the power of the Mind Stone.",
    appearances: ["avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "wandavision"] },

  { id: "spider-man", name: "Spider-Man (Peter Parker)", universe: "mcu",
    description: "A teenager from Queens who balances school and life as Spider-Man, mentored by Tony Stark.",
    appearances: ["captain-america-civil-war", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame", "spider-man-far-from-home", "spider-man-no-way-home", "spider-man-brand-new-day"] },

  { id: "doctor-strange", name: "Doctor Strange (Stephen Strange)", universe: "mcu",
    description: "A brilliant surgeon turned Sorcerer Supreme and protector of Earth against magical threats.",
    appearances: ["doctor-strange", "thor-ragnarok", "avengers-infinity-war", "avengers-endgame", "spider-man-no-way-home", "doctor-strange-in-the-multiverse-of-madness"] },

  { id: "black-panther", name: "Black Panther (T'Challa)", universe: "mcu",
    description: "King of Wakanda and its armored protector.",
    appearances: ["captain-america-civil-war", "black-panther", "avengers-infinity-war", "avengers-endgame", "black-panther-wakanda-forever"] },

  { id: "captain-marvel", name: "Captain Marvel (Carol Danvers)", universe: "mcu",
    description: "A former Air Force pilot with cosmic powers and one of the strongest heroes in the MCU.",
    appearances: ["captain-marvel", "avengers-infinity-war", "avengers-endgame", "the-marvels"] },

  { id: "ant-man", name: "Ant-Man (Scott Lang)", universe: "mcu",
    description: "A thief turned hero who can shrink to the size of an ant, or grow to giant size.",
    appearances: ["ant-man", "captain-america-civil-war", "ant-man-and-the-wasp", "avengers-endgame", "ant-man-and-the-wasp-quantumania"] },

  { id: "wasp", name: "The Wasp (Hope van Dyne)", universe: "mcu",
    description: "Fights alongside Scott Lang with shrinking technology and wings.",
    appearances: ["ant-man", "ant-man-and-the-wasp", "avengers-endgame", "ant-man-and-the-wasp-quantumania"] },

  { id: "falcon", name: "Falcon (Sam Wilson)", universe: "mcu",
    description: "A former soldier with a flight suit who later takes up the shield.",
    appearances: ["captain-america-the-winter-soldier", "avengers-age-of-ultron", "ant-man", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame", "the-falcon-and-the-winter-soldier", "captain-america-brave-new-world"] },

  { id: "winter-soldier", name: "Winter Soldier (Bucky Barnes)", universe: "mcu",
    description: "Steve Rogers' childhood friend, turned into a HYDRA assassin and now working to make amends.",
    appearances: ["captain-america-the-first-avenger", "captain-america-the-winter-soldier", "captain-america-civil-war", "black-panther", "avengers-infinity-war", "avengers-endgame", "the-falcon-and-the-winter-soldier", "thunderbolts"] },

  { id: "war-machine", name: "War Machine (James Rhodes)", universe: "mcu",
    description: "Tony Stark's closest friend, an Air Force officer in an armored suit.",
    appearances: ["iron-man", "iron-man-2", "iron-man-3", "avengers-age-of-ultron", "captain-america-civil-war", "avengers-infinity-war", "avengers-endgame"] },

  { id: "nick-fury", name: "Nick Fury", universe: "mcu",
    description: "The director of SHIELD, who brings the Avengers together.",
    appearances: ["iron-man", "iron-man-2", "thor", "captain-america-the-first-avenger", "the-avengers", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "captain-marvel", "avengers-infinity-war", "avengers-endgame", "spider-man-far-from-home", "the-marvels"] },

  { id: "wong", name: "Wong", universe: "mcu",
    description: "A sorcerer who guards magical artifacts and mentors Doctor Strange.",
    appearances: ["doctor-strange", "avengers-infinity-war", "avengers-endgame", "shang-chi-and-the-legend-of-the-ten-rings", "spider-man-no-way-home", "doctor-strange-in-the-multiverse-of-madness"] },

  { id: "peggy-carter", name: "Peggy Carter", universe: "mcu",
    description: "A SSR agent who fights alongside Steve Rogers and later helps found SHIELD.",
    appearances: ["captain-america-the-first-avenger", "captain-america-the-winter-soldier", "avengers-age-of-ultron", "ant-man", "captain-america-civil-war", "avengers-endgame"] },

  { id: "pepper-potts", name: "Pepper Potts", universe: "mcu",
    description: "Tony Stark's partner and the head of Stark Industries.",
    appearances: ["iron-man", "iron-man-2", "the-avengers", "iron-man-3", "spider-man-homecoming", "avengers-infinity-war", "avengers-endgame"] },

  { id: "thunderbolt-ross", name: "Thaddeus \"Thunderbolt\" Ross", universe: "mcu",
    description: "A powerful general and politician who has been chasing Hulk for years.",
    appearances: ["the-incredible-hulk", "captain-america-civil-war", "black-widow", "captain-america-brave-new-world"] },

  { id: "zemo", name: "Helmut Zemo", universe: "mcu",
    description: "A man driven by revenge against the Avengers.",
    appearances: ["captain-america-civil-war", "the-falcon-and-the-winter-soldier"] },

  { id: "star-lord", name: "Star-Lord (Peter Quill)", universe: "mcu",
    description: "A human raised in space and the leader of the Guardians of the Galaxy.",
    appearances: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-of-the-galaxy-volume-3"] },

  { id: "gamora", name: "Gamora", universe: "mcu",
    description: "Thanos' adopted daughter, a deadly assassin who joins the Guardians.",
    appearances: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "guardians-of-the-galaxy-volume-3"] },

  { id: "drax", name: "Drax", universe: "mcu",
    description: "A powerful warrior who joins the Guardians.",
    appearances: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-of-the-galaxy-volume-3"] },

  { id: "rocket", name: "Rocket", universe: "mcu",
    description: "A genetically engineered raccoon and expert in weapons and tactics.",
    appearances: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-of-the-galaxy-volume-3"] },

  { id: "groot", name: "Groot", universe: "mcu",
    description: "A tree-like being who joins the Guardians. His vocabulary is famously short.",
    appearances: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-of-the-galaxy-volume-3"] },

  { id: "nebula", name: "Nebula", universe: "mcu",
    description: "Gamora's adopted sister, a cyborg assassin with her own path to follow.",
    appearances: ["guardians-of-the-galaxy", "guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "guardians-of-the-galaxy-volume-3"] },

  { id: "mantis", name: "Mantis", universe: "mcu",
    description: "An empath with sensory powers who joins the Guardians.",
    appearances: ["guardians-of-the-galaxy-vol-2", "avengers-infinity-war", "avengers-endgame", "thor-love-and-thunder", "guardians-of-the-galaxy-volume-3"] },

  { id: "thanos", name: "Thanos", universe: "mcu",
    description: "The Mad Titan, who seeks all six Infinity Stones.",
    appearances: ["the-avengers", "guardians-of-the-galaxy", "avengers-age-of-ultron", "avengers-infinity-war", "avengers-endgame"] },

  { id: "red-skull", name: "Red Skull", universe: "mcu",
    description: "The leader of HYDRA's science division, driven by the power of the Tesseract.",
    appearances: ["captain-america-the-first-avenger", "avengers-infinity-war"] },

  { id: "ultron", name: "Ultron", universe: "mcu",
    description: "An artificial intelligence that decides the best way to protect the world is to end the Avengers.",
    appearances: ["avengers-age-of-ultron"] },

  { id: "killmonger", name: "Erik Killmonger", universe: "mcu",
    description: "A Wakandan outsider who challenges T'Challa for the throne.",
    appearances: ["black-panther"] },

  { id: "namor", name: "Namor", universe: "mcu",
    description: "The ruler of the underwater kingdom of Talokan.",
    appearances: ["black-panther-wakanda-forever"] },

  { id: "kang", name: "Kang", universe: "mcu",
    description: "A multiversal conqueror who appears in several versions across time.",
    appearances: ["loki", "ant-man-and-the-wasp-quantumania"] },

  { id: "wilson-fisk", name: "Wilson Fisk (Kingpin)", universe: "mcu",
    description: "A powerful crime boss with political ambitions in New York.",
    appearances: ["hawkeye", "daredevil-born-again"] },

  { id: "abomination", name: "Abomination", universe: "mcu",
    description: "A soldier mutated by gamma radiation who becomes a rival to Hulk.",
    appearances: ["the-incredible-hulk", "shang-chi-and-the-legend-of-the-ten-rings"] },

  { id: "hela", name: "Hela", universe: "mcu",
    description: "The Goddess of Death and Thor's older sister.",
    appearances: ["thor-ragnarok"] },

  { id: "vulture", name: "Vulture (Adrian Toomes)", universe: "mcu",
    description: "A salvage worker turned arms dealer who builds weapons from alien tech.",
    appearances: ["spider-man-homecoming"] },

  { id: "mysterio", name: "Mysterio", universe: "mcu",
    description: "An illusion master with a hidden agenda.",
    appearances: ["spider-man-far-from-home"] },

  { id: "galactus", name: "Galactus", universe: "mcu",
    description: "A cosmic being who devours worlds.",
    appearances: ["the-fantastic-four-first-steps"] },

  { id: "jane-foster", name: "Jane Foster", universe: "mcu",
    description: "An astrophysicist whose research draws her into Thor's world.",
    appearances: ["thor", "thor-the-dark-world", "avengers-endgame", "thor-love-and-thunder"] },

  { id: "valkyrie", name: "Valkyrie", universe: "mcu",
    description: "A warrior of Asgard and survivor of its elite guard.",
    appearances: ["thor-ragnarok", "avengers-endgame", "thor-love-and-thunder"] },

  { id: "shuri", name: "Shuri", universe: "mcu",
    description: "T'Challa's sister and Wakanda's brilliant tech genius.",
    appearances: ["black-panther", "avengers-infinity-war", "avengers-endgame", "black-panther-wakanda-forever"] },

  { id: "okoye", name: "Okoye", universe: "mcu",
    description: "The general of Wakanda's Dora Milaje.",
    appearances: ["captain-america-civil-war", "black-panther", "avengers-infinity-war", "avengers-endgame", "black-panther-wakanda-forever"] },

  { id: "baron-mordo", name: "Baron Mordo", universe: "mcu",
    description: "A sorcerer whose beliefs about magic lead him to a different path than Strange.",
    appearances: ["doctor-strange", "doctor-strange-in-the-multiverse-of-madness"] },

  { id: "america-chavez", name: "America Chavez", universe: "mcu",
    description: "A teen who can travel across the multiverse.",
    appearances: ["doctor-strange-in-the-multiverse-of-madness"] },

  { id: "shang-chi", name: "Shang-Chi", universe: "mcu",
    description: "A martial arts master who confronts his father's criminal organization.",
    appearances: ["shang-chi-and-the-legend-of-the-ten-rings"] },

  { id: "kate-bishop", name: "Kate Bishop", universe: "mcu",
    description: "A skilled young archer who becomes Clint Barton's partner.",
    appearances: ["hawkeye"] },

  { id: "yelena-belova", name: "Yelena Belova", universe: "mcu",
    description: "A skilled assassin trained like Natasha, who sets out on her own path.",
    appearances: ["black-widow", "hawkeye", "thunderbolts"] },

  { id: "red-guardian", name: "Red Guardian", universe: "mcu",
    description: "A Soviet super-soldier with a big personality.",
    appearances: ["black-widow", "thunderbolts"] },

  { id: "john-walker", name: "John Walker (U.S. Agent)", universe: "mcu",
    description: "A soldier named to carry the shield who struggles with the legacy.",
    appearances: ["the-falcon-and-the-winter-soldier", "thunderbolts"] },

  { id: "valentina", name: "Valentina Allegra de Fontaine", universe: "mcu",
    description: "A powerful and mysterious government figure.",
    appearances: ["black-widow", "the-falcon-and-the-winter-soldier", "thunderbolts"] },

  { id: "sentry", name: "Sentry (Bob)", universe: "mcu",
    description: "A mysterious man with immense power.",
    appearances: ["thunderbolts"] },

  { id: "kamala-khan", name: "Ms. Marvel (Kamala Khan)", universe: "mcu",
    description: "A young hero from Jersey City with cosmic powers.",
    appearances: ["the-marvels"] },

  { id: "monica-rambeau", name: "Monica Rambeau", universe: "mcu",
    description: "Carol Danvers' goddaughter, who gains powers of her own.",
    appearances: ["captain-marvel", "wandavision", "the-marvels"] },

  { id: "agatha-harkness", name: "Agatha Harkness", universe: "mcu",
    description: "A witch who lives in Westview and seeks more power.",
    appearances: ["wandavision", "agatha-all-along"] },

  { id: "moon-knight", name: "Moon Knight", universe: "mcu",
    description: "A man who shares his body with the avatar of an Egyptian moon god.",
    appearances: ["moon-knight"] },

  { id: "daredevil", name: "Daredevil (Matt Murdock)", universe: "mcu",
    description: "A blind lawyer who fights for New York at night.",
    appearances: ["spider-man-no-way-home", "daredevil-born-again"] },

  { id: "punisher", name: "The Punisher (Frank Castle)", universe: "mcu",
    description: "A former soldier who takes justice into his own hands.",
    appearances: ["daredevil-born-again"] },

  { id: "mobius", name: "Mobius", universe: "mcu",
    description: "A Time Variance Authority agent who knows the time rules well.",
    appearances: ["loki"] },

  { id: "sylvie", name: "Sylvie", universe: "mcu",
    description: "A variant of Loki hunted by the Time Variance Authority.",
    appearances: ["loki"] },

  { id: "sersi", name: "Sersi", universe: "mcu",
    description: "An Eternal who loves humanity and can transform matter.",
    appearances: ["eternals"] },

  { id: "ikaris", name: "Ikaris", universe: "mcu",
    description: "An Eternal with immense strength and the power of flight.",
    appearances: ["eternals"] },

  { id: "thena", name: "Thena", universe: "mcu",
    description: "An Eternal warrior known for her cosmic energy weapons.",
    appearances: ["eternals"] },

  { id: "reed-richards", name: "Reed Richards (Mister Fantastic)", universe: "mcu",
    description: "A scientist who can stretch his body, and the leader of the Fantastic Four.",
    appearances: ["the-fantastic-four-first-steps"] },

  { id: "sue-storm", name: "Sue Storm (Invisible Woman)", universe: "mcu",
    description: "Can turn invisible and create force fields.",
    appearances: ["the-fantastic-four-first-steps"] },

  { id: "johnny-storm", name: "Johnny Storm (Human Torch)", universe: "mcu",
    description: "Can burst into flame and fly.",
    appearances: ["the-fantastic-four-first-steps"] },

  { id: "ben-grimm", name: "Ben Grimm (The Thing)", universe: "mcu",
    description: "A rock-skinned powerhouse with a big heart.",
    appearances: ["the-fantastic-four-first-steps"] },

  { id: "wolverine", name: "Wolverine (Logan)", universe: "X-Men",
    description: "A mutant with a healing factor and adamantium claws.",
    appearances: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "x-men-origins-wolverine", "the-wolverine", "x-men-first-class", "x-men-days-of-future-past", "x-men-apocalypse", "logan", "deadpool-and-wolverine"] },

  { id: "professor-x", name: "Professor X (Charles Xavier)", universe: "X-Men",
    description: "A powerful telepath who founds a school for gifted mutants.",
    appearances: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "x-men-origins-wolverine", "x-men-first-class", "x-men-days-of-future-past", "x-men-apocalypse", "dark-phoenix", "the-wolverine", "logan", "doctor-strange-in-the-multiverse-of-madness"] },

  { id: "magneto", name: "Magneto (Erik Lehnsherr)", universe: "X-Men",
    description: "Controls magnetism and fights for mutant survival, by any means.",
    appearances: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "x-men-first-class", "x-men-days-of-future-past", "x-men-apocalypse", "dark-phoenix", "the-wolverine"] },

  { id: "storm", name: "Storm", universe: "X-Men",
    description: "A mutant who commands the weather.",
    appearances: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "x-men-days-of-future-past", "x-men-apocalypse", "dark-phoenix"] },

  { id: "jean-grey", name: "Jean Grey", universe: "X-Men",
    description: "A telepath and telekinetic whose power grows beyond her control.",
    appearances: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "the-wolverine", "x-men-days-of-future-past", "x-men-apocalypse", "dark-phoenix"] },

  { id: "cyclops", name: "Cyclops (Scott Summers)", universe: "X-Men",
    description: "Fires powerful optic blasts and leads the X-Men in the field.",
    appearances: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "x-men-origins-wolverine", "x-men-days-of-future-past", "x-men-apocalypse", "dark-phoenix"] },

  { id: "rogue", name: "Rogue", universe: "X-Men",
    description: "A young mutant who absorbs powers and memories by touch.",
    appearances: ["x-men", "x2-x-men-united", "x-men-the-last-stand"] },

  { id: "mystique", name: "Mystique", universe: "X-Men",
    description: "A shape-shifter whose loyalties shift with her beliefs.",
    appearances: ["x-men", "x2-x-men-united", "x-men-the-last-stand", "x-men-first-class", "x-men-days-of-future-past", "x-men-apocalypse", "dark-phoenix"] },

  { id: "beast", name: "Beast (Hank McCoy)", universe: "X-Men",
    description: "A brilliant scientist with a blue furry form and animal strength.",
    appearances: ["x-men-the-last-stand", "x-men-first-class", "x-men-days-of-future-past", "x-men-apocalypse", "dark-phoenix", "the-marvels"] },

  { id: "nightcrawler", name: "Nightcrawler", universe: "X-Men",
    description: "A teleporting mutant with a deep faith.",
    appearances: ["x2-x-men-united", "x-men-apocalypse", "dark-phoenix"] },

  { id: "colossus", name: "Colossus", universe: "X-Men",
    description: "Can turn his skin into organic steel.",
    appearances: ["x-men-the-last-stand", "x-men-days-of-future-past", "deadpool", "deadpool-2"] },

  { id: "kitty-pryde", name: "Kitty Pryde", universe: "X-Men",
    description: "A mutant who can phase through solid matter.",
    appearances: ["x2-x-men-united", "x-men-the-last-stand", "x-men-days-of-future-past"] },

  { id: "quicksilver", name: "Quicksilver (Peter Maximoff)", universe: "X-Men",
    description: "A mutant with super-speed.",
    appearances: ["x-men-days-of-future-past", "x-men-apocalypse"] },

  { id: "apocalypse", name: "Apocalypse", universe: "X-Men",
    description: "The first and most powerful mutant, who believes in survival of the strongest.",
    appearances: ["x-men-apocalypse"] },

  { id: "sabretooth", name: "Sabretooth", universe: "X-Men",
    description: "A feral mutant and Wolverine's rival.",
    appearances: ["x-men", "x-men-origins-wolverine"] },

  { id: "deadpool", name: "Deadpool (Wade Wilson)", universe: "X-Men",
    description: "A fast-talking mercenary with a healing factor who breaks the fourth wall.",
    appearances: ["x-men-origins-wolverine", "deadpool", "deadpool-2", "deadpool-and-wolverine"] },

  { id: "cable", name: "Cable", universe: "X-Men",
    description: "A time-travelling soldier with a mission.",
    appearances: ["deadpool-2"] },

  { id: "domino", name: "Domino", universe: "X-Men",
    description: "A mutant whose luck always works in her favor.",
    appearances: ["deadpool-2"] },

  { id: "negasonic-teenage-warhead", name: "Negasonic Teenage Warhead", universe: "X-Men",
    description: "A young X-Men trainee who can blast energy.",
    appearances: ["deadpool", "deadpool-2", "deadpool-and-wolverine"] },

  { id: "laura-x-23", name: "Laura (X-23)", universe: "X-Men",
    description: "A young mutant with claws, created in a lab.",
    appearances: ["logan"] },

  /* ===== END OF CHARACTERS ===== */
];

/*
 * ==========================================================================
 *  PHASES  (js/data-phases.js): the text on the Phases page
 * ==========================================================================
 *  One block per phase. Edit the text inside the quotes.
 *
 *    { phase: 1, name: "Phase One", saga: "The Infinity Saga",
 *      summary: "Two or three lines about the story of this phase." },
 *
 *    phase    the phase NUMBER. It must match the "phase" in the movie and
 *             show data files.
 *    name     big title on the card.
 *    saga     small line above it (for example "The Infinity Saga").
 *    summary  the 2-3 line story summary.
 *
 *  You do NOT type the movie count, show count or years: the page counts
 *  them from your movie and show data automatically.
 *
 *  A new phase (for example 7): copy a block above, change the number and
 *  text, and keep the comma after the closing brace.
 *  If a phase has no block here, the page still shows it as "Phase N".
 * ==========================================================================
 */
window.MCU_PHASES = [
  { phase: 1, name: "Phase One", saga: "The Infinity Saga",
    summary: "Tony Stark, Bruce Banner, Thor and Steve Rogers each get their own story while SHIELD quietly brings them together. When Loki invades New York, they team up for the first time as the Avengers." },

  { phase: 2, name: "Phase Two", saga: "The Infinity Saga",
    summary: "The world is still recovering from the Battle of New York. HYDRA is exposed inside SHIELD, the Guardians of the Galaxy arrive, and Tony Stark's attempt to protect Earth creates Ultron." },

  { phase: 3, name: "Phase Three", saga: "The Infinity Saga",
    summary: "A disagreement over oversight splits the Avengers in Civil War, while Black Panther, Doctor Strange, Spider-Man and Captain Marvel join the story. Thanos finally makes his move in Infinity War and Endgame." },

  { phase: 4, name: "Phase Four", saga: "The Multiverse Saga",
    summary: "After Endgame, the MCU opens up the multiverse. New heroes arrive in Shang-Chi and Eternals, the first Disney+ shows start, and Spider-Man: No Way Home breaks the rules of reality." },

  { phase: 5, name: "Phase Five", saga: "The Multiverse Saga",
    summary: "The multiverse's biggest threat takes shape with Kang the Conqueror. Heroes old and new deal with the fallout across Quantumania, Loki, Thunderbolts* and Daredevil: Born Again, while Deadpool & Wolverine crashes into the MCU." },

  { phase: 6, name: "Phase Six", saga: "The Multiverse Saga",
    summary: "Phase Six opens with The Fantastic Four: First Steps and Spider-Man: Brand New Day, and builds toward the Avengers films that will close the Multiverse Saga." },

];

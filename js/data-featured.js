/*
 * ==========================================================================
 *  FEATURED TITLES  (js/data-featured.js): the big banner on the home page
 * ==========================================================================
 *  The banner shows these titles one after another, changing every few
 *  seconds. Each one has its poster, title, a short line and a
 *  "View details" button.
 *
 *  ADD or REMOVE: add or delete an id in the list. Ids are the  id: "..."
 *  of a movie or a TV show in the data files:
 *      a movie id  "avengers-endgame"  -> "View details" opens its popup
 *      a show id   "loki"              -> "View details" opens its page
 *  The banner shows them in the order you type them.
 *  A wrong id is skipped, and js/check-data.js names it in the Console (F12).
 *
 *  Empty list ( [] ) = the banner uses every Essential MCU movie.
 *  To change how many seconds each title stays: open js/app.js and change
 *  HERO_SECONDS (search for that word).
 * ==========================================================================
 */
window.MCU_FEATURED = [
  "avengers-endgame",
  "the-avengers",
  "black-panther",
  "avengers-infinity-war",
  "spider-man-no-way-home",
  "thor-ragnarok",
  "guardians-of-the-galaxy",
  "doctor-strange",
  "loki"
];

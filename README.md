# Marvel Mission Control

A personal tracker for Marvel movies and TV shows.
**To use it: double-click `index.html`.** No install, no internet needed.
It lists every Marvel movie and TV show, with posters, dates, a timeline and search, plus character pages, a phases overview, watch guides and stats.

---

## What is in the folder

| File / folder | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The page frame: top bar, search box, watch-order menu | Rarely |
| `js/data-movies.js` | The MCU movies | **Yes, to add/remove MCU movies** |
| `js/data-movies-xmen.js` | The X-Men movies | **Yes, to add/remove X-Men movies** |
| `js/data-movies-sony.js` | The Sony Spider-Man movies (Raimi, Amazing, Venom/SSU, Spider-Verse) | **Yes, to add/remove Sony movies** |
| `js/data-movies-other.js` | Other Marvel movies (Fantastic Four, Daredevil, Punisher, Blade, Hulk 2003, Marvel One-Shots...) | **Yes, to add/remove these movies** |
| `js/data-tv.js` | The TV shows | **Yes, to add/remove shows** |
| `js/data-characters.js` | The Characters page (name, description, appearances) | **Yes, to add/remove characters** |
| `js/data-phases.js` | The story summary text for each phase | **Yes, to change the Phases page text** |
| `js/data-guides.js` | The watch guides (preset watch paths) | **Yes, to add/remove guides** |
| `js/data-featured.js` | Which titles rotate in the home page banner | **Yes, to change the banner** |
| `js/app.js` | Draws every page (home page text lives here) | Only to change text/buttons |
| `js/check-data.js` | Optional: warns in the Console if a data file has a mistake | No (delete it if you like) |
| `css/styles.css` | Colours and layout | Only to restyle |
| `posters/movies/`, `posters/tv/` | Poster images | When adding titles |
| `characters/` | Character pictures (you add them) | When adding pictures. Its `README.txt` lists every file name to use |

**Golden rule: make a backup copy of the whole folder before you edit anything.**

---

## ADD a movie

1. Open `js/data-movies.js` (or `js/data-movies-xmen.js` for an X-Men movie, `js/data-movies-sony.js` for a Sony Spider-Man movie, or `js/data-movies-other.js` for an Other Marvel movie).
2. Scroll to the very bottom. You will see a line with just `];`.
3. Paste this **just above** the `];` line:

```js
  { id: "my-movie", title: "My Movie", type: "movie", universe: "mcu",
    releaseDate: "2027-05-01", releaseOrder: 9000, chronologicalOrder: 9100,
    phase: 6, importance: "optional",
    description: "One sentence about the movie.",
    poster: "posters/movies/my-movie.webp",
    runtime: 120, director: "Director Name",
    cast: ["Actor One (Character)", "Actor Two (Character)", "Actor Three (Character)"],
    boxOffice: "$500M", imdb: 7.0, trailer: "", whereToWatch: "Disney+",
    dvdNumber: "", postCredits: "1 scene: end",
    series: "My Series", related: ["iron-man-2"],
    watchBefore: ["iron-man-2"] },
```

(The last 7 lines are the optional popup info, see "Movie popup info", "Related titles" and "Watch before" below. This template is for the MCU file. For an X-Men movie, also copy the `timelineBranch: "..."` line, as in step 5.)

4. Change the text inside the quotes. What each part means:

| Field | What to put |
|---|---|
| `id` | A short unique name: lowercase, dashes, no spaces. **Never reuse one.** |
| `title` | The name shown on screen |
| `universe` | Keep `"mcu"` in the MCU file. Keep `"X-Men"` in the X-Men file `"sony"` in the Sony file and `"other"` in the Other Marvel file |
| `releaseDate` | `"YYYY-MM-DD"` |
| `releaseOrder` | A number that decides its place in **Release Order**. No other title may use the same number. For a new, latest movie use a number bigger than all the others (like `9000`). To squeeze one in between two movies, pick a number between theirs (between 700 and 800 use `750`). A bigger number must also mean a later `releaseDate` |
| `chronologicalOrder` | Same idea, but for the **story timeline** order |
| `phase` | The MCU phase number (1 to 6) |
| `importance` | `"essential"`, `"recommended"` or `"optional"` |
| `description` | One sentence |
| `poster` | The path to the picture (see below) |

5. **Other Marvel movies:** copy a block from `js/data-movies-other.js`. They are not part of the main MCU timeline and have their own order numbers (so `releaseOrder` and `chronologicalOrder` must only be unique inside that file). Add `group: "Some Name"` to put the movie in a sub-section of the Movies page. Movies with the same text go together, and sections appear in the order the groups first show up in the file. No `group` = "Other Marvel films". A new group name just works, nothing else to edit. `phase` is only used by the data checker. They show on the Movies page (under Sony), Search and the Timeline (own block). Poster files go in `posters/movies/` and must be named `<id>.webp` (e.g. `blade-ii.webp`). One-shots use ids like `agent-carter-one-shot` because `agent-carter` is already the TV show.
   **Sony Spider-Man movies:** copy a block from `js/data-movies-sony.js` (no `timelineBranch` needed). `phase` is a story group there: 1 Raimi, 2 Amazing Spider-Man, 3 Sony's Spider-Man Universe (Venom etc.), 4 Spider-Verse. They are not part of the main MCU timeline and have their own order numbers. They show on the Movies page (under X-Men), Search and the Timeline (own block). Poster files go in `posters/movies/` and must be named `<id>.webp` (e.g. `morbius.webp`).
   **X-Men movies only:** also copy the `timelineBranch: "..."` line from another X-Men movie in that file.
6. **Poster:** save the image into `posters/movies/` and make `poster:` match the file name exactly (`.webp`, `.jpg` and `.png` all work). No image? Skip it, the page shows a placeholder.
7. Save and refresh the browser (F5). Done.

## DELETE a movie

1. Open the data file the movie is in.
2. Press **Ctrl+F** and search for its id, e.g. `iron-man-3`.
   The first match is the guide text at the top, so press Enter to jump to the next match.
3. Delete the whole block: from the `{ id: "iron-man-3"` line down to the line that ends with `},`.
4. Save and refresh. Done. (Optionally delete its poster file too.)

You do not need to renumber anything. Gaps in the numbers are fine.

## EDIT a movie

Find it with Ctrl+F, change the text inside the quotes, save, refresh.

## Movie popup info (all movies)

Every movie (MCU and X-Men) has extra fields that appear in its popup. **If a field is empty (`""`) or deleted, that line or button simply does not show.**

| Field | Example | Shown in the popup as |
|---|---|---|
| `runtime` | `126` (a number, in minutes) | `2h 6m` |
| `director` | `"Jon Favreau"` | `Director: Jon Favreau` |
| `cast` | `["Robert Downey Jr. (Tony Stark / Iron Man)", "Gwyneth Paltrow (Pepper Potts)"]` | `Cast:` one comma-separated line. Write each as `"Actor (Character)"`, 5-6 names |
| `boxOffice` | `"$585M"` | `Box office $585M` |
| `imdb` | `7.9` (a number, no quotes) | `IMDb 7.9` |
| `trailer` | `"https://www.youtube.com/watch?v=..."` | a **Watch trailer** button (opens in a new tab) |
| `whereToWatch` | `"Disney+"` | `Where to watch: Disney+` |
| `dvdNumber` | `"Shelf 2 / Case 14"` | `DVD: Shelf 2 / Case 14` |
| `postCredits` | `"2 scenes: mid and end"` or `"No post-credits scene"` | `Post-credits: ...` |
| `series` | `"Iron Man trilogy"` | `Part of: Iron Man trilogy` (see "Related titles") |
| `related` | `["iron-man-2", "the-avengers"]` | clickable buttons (see "Related titles") |
| `watchBefore` | `["iron-man-2", "the-avengers"]` | `Watch before: Iron Man 2, The Avengers` with clickable names (see "Watch before") |

**Where to paste a trailer link:** open `js/data-movies.js`, press Ctrl+F, search for the movie id (e.g. `iron-man`; the first match is the guide at the top, press Enter for the next). Find its `trailer: "",` and put the full link between the quotes: `trailer: "https://www.youtube.com/watch?v=XXXX",`. The link must start with `http://` or `https://`.

**Where to put a DVD number:** same place, find `dvdNumber: "",` in that movie's block and type your shelf/case number between the quotes.

`whereToWatch` is `"Disney+"` for every movie by default. Change it per movie if needed.

`imdb` and `boxOffice` were checked online in November 2026 and will drift over time. They are just text/numbers, so edit them any time.

The X-Men movies in `js/data-movies-xmen.js` have the same fields and work the same way.

### Related titles (`series` and `related`)

- `series` is free text: the name of the franchise or group the movie belongs to, e.g. `series: "Guardians of the Galaxy"`. The popup shows `Part of: Guardians of the Galaxy`.
- `related` is a list of **movie ids** (the `id: "..."` of other movies, MCU or X-Men), e.g. `related: ["iron-man-2", "the-avengers"]`. Each one becomes a button that opens that movie's popup. Use ids exactly as written in the data files, in quotes, separated by commas. An id that does not exist is silently skipped.
- Both are optional. Use `series: ""` and `related: []` (or delete the two fields) to hide the whole "Related" section.

### Previous / Next arrows

Every movie popup has **Previous** and **Next** buttons at the bottom. The left and right arrow keys do the same. They move through the movies in the order chosen in the **Watch order** menu (Release or Chronological) without closing the popup. MCU movies only move between MCU movies, and X-Men movies only between X-Men movies. At the first or last movie the matching button is greyed out and does nothing. Clicking a related title jumps to that movie, and the arrows then follow that movie's own list.

---

## ADD a TV show

1. Open `js/data-tv.js`.
2. Find the line `/* ===== END OF SHOWS ===== */` near the bottom.
3. Paste this **just above** it:

```js
  /* ===== SHOW: My Show ===== */
  { id: "my-show", title: "My Show", type: "tv", universe: "mcu", category: "series",
    importance: "optional", poster: "posters/tv/my-show-s1.webp",
    description: "One sentence about the show.",
    creator: "Creator Name",
    cast: ["Actor One (Character)", "Actor Two (Character)"],
    trailer: "", whereToWatch: "Disney+", status: "Upcoming",
    watchBefore: ["avengers-endgame"],
    seasons: [
      { id: "my-show-s1", season: 1, phase: 6, releaseDate: "2027-01-01",
        releaseOrder: 9050, chronologicalOrder: 9150,
        episodeCount: 2, episodes: [
          { id: "my-show-s1-e1", episode: 1, title: "Episode One", releaseDate: "2027-01-01", releaseOrder: 1,
            description: "One short line about the episode." },
          { id: "my-show-s1-e2", episode: 2, title: "Episode Two", releaseDate: "2027-01-08", releaseOrder: 2 }
        ] }
    ] },

```

4. Change the text. Rules for ids:
   - show id: `my-show`
   - season id: `my-show-s1`, `my-show-s2` ...
   - episode id: `my-show-s1-e1`, `my-show-s1-e2` ...
   - All ids must be unique, and you should never change an id later.
5. `category` is one of `"series"`, `"animation"`, `"special"`, `"documentary"`.
   The lines `creator`, `cast`, `trailer`, `whereToWatch`, `status` and `watchBefore` are optional extras, explained in "TV show page extras" and "Watch before" below. Delete any you do not need.
6. More seasons: add another `{ id: "my-show-s2", ... }` block inside `seasons: [ ... ]`, **with a comma between seasons**.
7. Put the poster in `posters/tv/`. Save and refresh.

**No episode titles yet?** Set `episodes: []` and keep `episodeCount: 8` (the real total).
The page will say "Episode data unavailable" until you fill them in.

## DELETE a TV show

1. Open `js/data-tv.js`, Ctrl+F for `SHOW: Loki` (use the show's name).
2. Select everything from that `/* ===== SHOW: ... ===== */` line down to the line just **before** the next `SHOW:` line. Delete it. Save.

To delete just one season, delete that season's block `{ id: "loki-s2", ... }` inside the show. Watch the comma between seasons.

---

## TV show page extras

Every TV show page can show extra info under the title. **Each one is optional. If a field is empty (`""`, `[]`) or deleted, that line or button simply does not show.** These fields go on the **show** (next to `description`), except the episode line, which goes on each episode.

| Field | Example | Shown on the show page as |
|---|---|---|
| `creator` | `"Michael Waldron"` | `Creator: Michael Waldron` |
| `cast` | `["Tom Hiddleston (Loki)", "Owen Wilson (Mobius)"]` | `Main cast:` one comma-separated line. Write each as `"Actor (Character)"` |
| `trailer` | `"https://www.youtube.com/watch?v=..."` | a **Watch trailer** button (opens in a new tab). Must start with `http://` or `https://` |
| `whereToWatch` | `"Disney+"` | `Where to watch: Disney+` (works the same as for movies) |
| `status` | `"Ongoing"` | a small coloured tag next to the title. Use exactly one of `"Ongoing"`, `"Ended"`, `"Upcoming"` |
| `description` (on an **episode**) | `"Loki is taken into custody by the TVA."` | one line of text under that episode's title |

Example, a show with the new fields filled in (this is how Loki looks in `js/data-tv.js`):

```js
  { id: "loki", title: "Loki", type: "tv", universe: "mcu", category: "series",
    importance: "essential", poster: "posters/tv/loki-s1.webp",
    description: "...",
    creator: "Michael Waldron",
    cast: ["Tom Hiddleston (Loki)", "Owen Wilson (Mobius M. Mobius)"],
    trailer: "", whereToWatch: "Disney+", status: "Ended",
    watchBefore: ["the-avengers", "avengers-endgame"],
    seasons: [ ... ] },
```

An episode with its one-line description:

```js
  { id: "loki-s1-e1", episode: 1, title: "Glorious Purpose", releaseDate: "2021-06-09", releaseOrder: 1,
    description: "Loki is taken into custody by the Time Variance Authority." },
```

Things to know:

- **Trailer:** the trailer fields are empty on purpose, so no button shows yet. To add one, press Ctrl+F in `js/data-tv.js`, search for the show id (e.g. `"loki"`), find its `trailer: "",` and paste the full link between the quotes.
- **Status:** change it when a show changes. A show that has more seasons coming but no air date is `"Upcoming"` only if nothing has aired yet; once season 1 is out and more are expected, use `"Ongoing"`. The tag looks green for Ongoing, gold for Upcoming and grey for Ended.
- **Episode descriptions** are optional per episode. Episodes without one just show the title and date. The descriptions in the file are short and spoiler-light. Edit them freely.
- **Main cast** is just text, so keep it to about 5-7 names.

---

## Watch before (movies and TV shows)

Each movie popup and each TV show page can show a line like:

> **Watch before:** Iron Man, Thor, The Avengers *(Release Order)*

Every name is **clickable**. A movie opens its popup, a TV show opens its show page. If a title has no entry, the line is simply hidden.

**The line follows the "Watch order" menu.** In *Release Order* it lists what you should have seen first when going by release date; in *Chronological Order* it lists what should come before it in the story. The small note at the end of the line says which order you are looking at.

### How to add it

Add one optional field, `watchBefore`, to the movie block or show block in the data file. It holds **ids** (the `id: "..."` of other titles), in quotes, separated by commas.

**1. Same titles in both orders (the simple case).** Use a plain list:

```js
watchBefore: ["iron-man", "the-avengers"],
```

You do not need to put them in any order. The page sorts them for you by the order that is picked in the menu (release dates in Release Order, story order in Chronological Order).

**2. Different titles for each order.** Use `release` and `chronological`:

```js
watchBefore: {
  release:       ["captain-america-civil-war", "avengers-endgame"],
  chronological: ["captain-america-civil-war"]
},
```

Use this when a title is released after something that comes *later* in the story. For example, Black Widow came out after Endgame (so in Release Order, Endgame is worth watching first), but the story is set before Infinity War (so in Chronological Order, Endgame is not "before").

An order can be left empty: `chronological: []` (or leave the key out) hides the line in that order only.

**3. Where to put it.**

- **Movie** (`js/data-movies.js` or `js/data-movies-xmen.js`): put it at the end of the block, just before the final `},`, after `related: [...]`. Make sure the line before it ends with a comma.
- **TV show** (`js/data-tv.js`): put it on the show itself, above `seasons: [`.

**4. What the ids can be.**

| Id | Example | Clicking it opens |
|---|---|---|
| a movie id (MCU or X-Men) | `"avengers-endgame"` | that movie's popup |
| a TV show id | `"loki"` | that show's page |
| a season id | `"loki-s1"` | that show's page, with that season opened |

Use a season id when only one season matters (for example Quantumania lists `"loki-s1"`, not all of Loki).

An id that does not exist is silently skipped on the page, and `js/check-data.js` will name it in the Console (F12). Do not list a title as "before" something it comes after: the checker warns about that too. X-Men and MCU titles can be mixed in one list (the MCU ones are shown first).

**Remove it:** delete the `watchBefore: ...` line, or set it to `[]`.

---

## Importance tags on cards

Every movie card and TV card shows a small tag under its title, taken from the `importance` field in the data file:

| `importance` value | Tag | Colour |
|---|---|---|
| `"essential"` | Essential | coral red |
| `"recommended"` | Recommended | cyan |
| `"optional"` | Optional | grey |

Use exactly those lowercase words. A card whose `importance` is empty or any other word simply has no tag (and `js/check-data.js` warns about it in the Console). A TV card uses the importance of the **show**.

To change a tag's colour, open `css/styles.css`, press Ctrl+F and search for `imp-essential` (the other two are right below it).
To remove the tags completely, delete the `importance` field from your data, or in `js/app.js` search for `function importanceTag` and make it `return null;` on its first line.

---

## Movies page: filter and sort

At the top of the Movies page there are three rows of buttons:

- **Phase:** All phases, Phase 1 ... Phase 6.
- **Importance:** All importance, Essential, Recommended, Optional.
- **Sort by year:** *Watch order* (the default), *Newest first*, *Oldest first*.

How they work together:

- Click a button to switch it on. The phase and importance rows combine (for example Phase 3 + Essential shows only the essential Phase 3 movies). Click **All phases** / **All importance** to clear one.
- **Watch order** sort follows the **Watch order** menu at the top of the page (Release or Chronological), exactly as before.
- **Newest first / Oldest first** sorts by release year. Movies from the same year stay in the order of the Watch order menu, so the menu still matters. Switch back to *Watch order* to get the phase sections again.
- **X-Men movies:** the phase buttons are MCU phases, so X-Men movies are hidden while a phase is picked. The importance and sort buttons work on them as normal.
- The buttons keep their setting while you move around the site. Reload the page to reset them.

The code for this is in `js/app.js`, in `function renderMovies` (it is commented step by step).

---

## "Surprise me" buttons (home page)

The home page has two buttons under the main buttons:

- **Surprise me, random movie:** opens the popup of a random movie (MCU and X-Men movies).
- **Surprise me, random TV show:** opens the page of a random TV show.

Click again for another pick (it will not give you the same title twice in a row). To pick from **MCU movies only**, open `js/app.js`, search for `function surpriseButtons` and change `ALL_MOVIES` to `MOVIES` in the two places inside it. To remove either button, delete its `buttons.push(...)` line in that function.

---

## Top menu tabs

| Tab | What it shows |
|---|---|
| Dashboard | Home page: banner, big buttons and the "Surprise me" buttons |
| Movies | All movies, with phase / importance filters and sort |
| TV Shows | All shows and seasons |
| Characters | A card for every character, click one to see where they appear |
| Phases | One big card per phase |
| Guides | Preset watch paths |
| Timeline | The full story timeline |
| Stats | Charts and totals |
| Search | Search everything |

To hide a tab, delete its `<a class="tab" ...>` line in `index.html` (the page still works by address). The same pages are also on the home page buttons, in `js/app.js` (search for `homeCard(`).

The **Watch order** menu is hidden on pages where it changes nothing (home, Guides, Stats, and the Characters and Phases lists).

---

## Characters page

**What it does:** a card for every character with a picture, name and number of appearances. Buttons at the top filter **All / MCU / X-Men**. Click a character to open their page: picture, description, and **cards for every movie, show or season they appear in**, sorted by the Watch order menu. Clicking one of those cards works like everywhere else (movies open the popup, shows open the show page).

All characters live in `js/data-characters.js`. The file starts with a guide.

### Add a character

1. Open `js/data-characters.js`.
2. Scroll to the bottom. Find the line `/* ===== END OF CHARACTERS ===== */`.
3. Paste this **just above** that line, then change the text:

```js
  { id: "my-character", name: "My Character", universe: "mcu",
    description: "One or two short sentences about the character.",
    appearances: ["iron-man", "the-avengers", "loki-s1"] },
```

| Field | What to put |
|---|---|
| `id` | Lowercase, dashes, unique (for example `"nick-fury"`). **This is also the picture file name.** |
| `name` | Shown on the card and page |
| `universe` | `"mcu"` or `"X-Men"` (used by the filter buttons) |
| `description` | A short description |
| `appearances` | The **ids** of the movies, shows or seasons they appear in (see below) |

4. Save and refresh. The character appears at the end of the list. **To change the order**, cut and paste blocks: the page shows them in file order.

### The appearances list

Type ids in quotes, separated by commas. The order you type them in does not matter: the page sorts them by the Watch order menu.

| Id | Example | Shows a card for |
|---|---|---|
| a movie id | `"avengers-endgame"` | that movie |
| a show id | `"loki"` | the whole show |
| a season id | `"loki-s1"` | that one season |

You find an id in the data files (the `id: "..."` at the start of a block). A wrong id is skipped, and `js/check-data.js` names it in the Console (press F12).

### Character pictures: where to put them and what to name them

1. Put the picture in the **`characters/`** folder (next to `posters/`).
2. **Name the file exactly like the character's id.** For `id: "iron-man"` the file is `iron-man.webp`. `.webp`, `.jpg`, `.jpeg` and `.png` all work, so `iron-man.jpg` is fine too.
3. That is all. There is nothing to type in the data file. The page finds the picture by the name.
4. Best shape: a portrait picture about **2:3** (for example 400 x 600 pixels), like the movie posters. Other shapes get cropped to fit.
5. The file `characters/README.txt` lists the file name for **every character** already in the data file, so you can copy the names from there.
6. If you want a different file name or folder, add `image: "characters/my-file.png"` to that character.

A character without a picture shows a placeholder with their name, so nothing breaks while you add pictures one by one.

### Remove a character

Delete its block, from the `{ id:` line to its `},`. Also delete its picture from `characters/` if you like.

---

## Phases page

**What it does:** one big card per phase showing its **name**, **saga**, a **2-3 line story summary**, the **number of movies and shows**, and the **year range**. Click a card to open that phase's page: all its movies, plus its TV seasons, in the Watch order menu's order.

**The counts and years are worked out automatically** from your movie and show data, so you never type them. A phase shows up as soon as a movie or season uses that phase number.

**The text is in one easy file: `js/data-phases.js`.** Each phase is one block:

```js
  { phase: 1, name: "Phase One", saga: "The Infinity Saga",
    summary: "Two or three lines about the story of this phase." },
```

- Change the words inside the quotes to edit a name, saga or summary.
- **A new phase (for example Phase 7):** copy a block, change `phase: 7`, and write the text. Keep the comma after the `}`.
- A phase with no block still shows up, as "Phase N" with no summary.

---

## Guides page

**What it does:** preset watch paths, such as "Quick MCU recap (essential only)", "Loki path" and "Spider-Man path". Pick a guide with the buttons. It shows the guide as **numbered cards, in the order written in the file**. The Watch order menu does not change a guide, because the guide *is* the order.

Guides live in `js/data-guides.js`. The file starts with a guide.

### Add a new guide

1. Open `js/data-guides.js`.
2. Scroll to the bottom and find the line `/* ===== END OF GUIDES ===== */`.
3. Paste this **just above** it and change the text:

```js
  { id: "my-guide", title: "My guide",
    description: "One sentence about this path.",
    items: ["iron-man", "the-avengers", "loki-s1"] },
```

| Field | What to put |
|---|---|
| `id` | Lowercase, dashes, unique |
| `title` | The button label and the heading |
| `description` | One sentence under the heading |
| `items` | Ids in **watching order**: a movie id, a show id, or a season id (same as the appearances list above) |

4. Save and refresh. The guide gets its own button.

- **Order of the buttons** = order of the blocks in the file. The first guide is the one that opens first.
- **Remove a guide:** delete its block.
- A wrong id is skipped, and `js/check-data.js` names it in the Console.

---

## Stats page

**What it does:** numbers and simple bar charts, drawn with plain HTML and CSS (no chart library, nothing to install).

- **Movies:** total movies, **total runtime**, average movie length, **movies per phase** and **movies per year**. Three buttons at the top choose **MCU**, **X-Men** or **MCU + X-Men**. For X-Men the "phases" chart uses the story eras. With both together, the bars are cyan (MCU) and gold (X-Men).
- **TV shows:** number of **shows**, **seasons** and episodes, **seasons per phase** and **episodes per show**.

Where the numbers come from:

- Runtime uses the `runtime:` (minutes) of each movie. A movie with no runtime is left out of the runtime numbers, and the page says how many.
- Episodes use `episodeCount` of each season (or the number of listed episodes).
- Everything updates by itself when you add or remove movies and shows. There is nothing to edit.

Why its own tab? A separate page keeps the home page simple. To move it, change the `homeCard(` / tab lines described above. The chart code is in `js/app.js` under `function renderStats` and `function barChart`.

---

## Look and feel (batch 5)

### Card hover effect

When you hover a movie, show or character card with a **mouse**, the poster zooms in a little and a **short description slides up** over the bottom of the poster. The text is the title's `description` from the data file, so there is nothing extra to type.

- **Touch screens:** none of this runs on a phone or tablet. A tap goes straight to the popup or page, and there is no "stuck" hover after a tap. (The effect is wrapped in `@media (hover: hover) and (pointer: fine)` in `css/styles.css`.)
- **Keyboard:** tabbing onto a card shows the same effect.
- **Turn it off:** in `css/styles.css` search for `Card hover` and delete the block of rules below that comment (or just the `.poster-peek` and `scale(1.07)` lines).
- **Make the zoom bigger or smaller:** change `1.07` (there are two places).
- **Show more or fewer description lines:** change `-webkit-line-clamp: 5` under `.poster-peek`.

### Light / dark theme button

The round sun / moon button at the right of the top bar switches between the **dark** theme (the default) and a **light** theme. The choice is **remembered in your browser** (it is saved in `localStorage`), and it is applied before the page draws, so there is no flash.

- Nothing is saved until you press the button, so first-time visitors always get the dark theme.
- **Change the light colours:** open `css/styles.css`, search for `Light theme`, and edit the colours in the `html[data-theme="light"]` block. The dark colours are in the block at the very top, under `:root`.
- **Remove the button:** delete the `<button class="theme-toggle"...>` block in `index.html`. The site stays dark.
- To reset the saved choice, press the button again, or clear the site's data in your browser.

### Home page banner (hero)

The home page now starts with a big banner: a **featured poster**, its **title**, a short line and a **View details** button. It changes by itself every 6 seconds. The dots under it pick a title, and on a phone you can swipe it left and right. The big buttons are under it as before.

- **Which titles are featured:** edit `js/data-featured.js`. It is just a list of ids:

```js
window.MCU_FEATURED = [
  "avengers-endgame",
  "the-avengers",
  "loki"
];
```

  A movie id opens that movie's popup. A show id opens the show page. An empty list `[]` uses every Essential MCU movie.
- **How long each title stays:** open `js/app.js`, search for `HERO_SECONDS` and change the number (seconds).
- **It pauses** while a mouse is over it, while a button inside has keyboard focus, and while a popup is open. If the device is set to "reduce motion", it does not change by itself at all (the dots and swipe still work).
- **Remove the banner:** in `js/app.js` search for `renderHero(),` (inside `renderDashboard`) and delete that line.

### Mobile improvements

Tested at **390 px wide** (a normal phone) in a real browser: no sideways scrolling on any page, and everything you tap is at least about 44 px tall.

- **Top bar:** the logo and the theme button are on the first row, and the tabs are on their own row that **scrolls sideways**. The current tab scrolls into view by itself.
- **Bigger touch areas:** tabs, filter buttons, the Watch order menu, the search box, popup buttons, related-title buttons and home buttons are all bigger on touch screens.
- **Popup:** on a phone the popup rises from the bottom like a sheet, fits the screen height, and scrolls inside itself. The close button stays at the top while you scroll, and **Previous / Next** stay at the bottom. Tap the dark area above the popup to close it.
- **Swipe in the popup:** swipe **left** for the next movie and **right** for the previous one (it follows the Watch order menu, same as the Previous / Next buttons). Scrolling up and down never counts as a swipe, and short or slow drags are ignored. A small "Swipe" hint shows on touch screens only.
- **Fixed:** on phones the search field had a big empty gap under it on every page (a layout bug). It is gone.

---

## Other jobs

**Remove all Other Marvel movies:** in `index.html`, delete the line `<script src="js/data-movies-other.js"></script>`.

**Remove all Sony Spider-Man movies:** in `index.html`, delete the line `<script src="js/data-movies-sony.js"></script>`.

**Remove all X-Men movies:** in `index.html`, delete the line `<script src="js/data-movies-xmen.js"></script>`.

**Change the home page text or buttons:** (the banner is explained in "Look and feel" above) open `js/app.js`, Ctrl+F `My Marvel Tracker`. The big home buttons are the `homeCard(...)` lines just below. Delete a line to remove a button. The "Surprise me" buttons are described in their own section above.

**Remove a top-bar tab** (e.g. Timeline): in `index.html`, delete its `<a class="tab" ...>` line. Keep Dashboard.

**Remove the search box or "Watch order" menu:** in `index.html`, delete that block inside the `TOOLBAR` section.

**The movie card (popup):** click any movie to see its poster, release date, phase, importance, description, the extra info above, the "Watch before" line, related titles, and arrows to step to the previous/next movie. All of that comes from the movie's block in the data file.

**Watch order menu:** switches the lists between Release Order and Chronological (story) Order. It is remembered in your browser. It also changes the "Watch before" line.

---

## If the page goes blank or something is missing

1. Press **F12**, open the **Console** tab, and read the red message.
2. It almost always means a missing **comma, quote mark or bracket** in the last file you edited. Every block must end with `},` and every line inside must end with a comma except the last one in the block.
3. The console may also show "Data problems" listing things like a duplicate id, a repeated order number, an id in a `watchBefore`, character or guide list that does not exist, or a `status` that is not Ongoing / Ended / Upcoming. It tells you exactly which title to fix.
4. Still stuck? Copy your backup folder back and redo the edit.

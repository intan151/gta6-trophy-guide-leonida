# GTA 6 Trophy Guide — Leonida Ledger

[![make.fun](https://img.shields.io/badge/make.fun-GTA%206%20Trophy%20Guide-ff6b4a)](https://make.fun/c/gta6-trophy-guide-01/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Offline](https://img.shields.io/badge/works-offline-brightgreen.svg)](#try-it)

An offline, open-source guide and tracker for all **55 PlayStation 5 trophies**
of Grand Theft Auto VI — built for the
[make.fun bounty “Build the best GTA 6 trophy guide”](https://make.fun/c/gta6-trophy-guide-01/)
($250, 50 places, deadline 21 Nov 2026 11:00 UTC).

No account, no network, no ads: open `app/index.html` in a desktop browser and
everything runs from the files in `app/`.

## What it does

- **Every trophy, official and complete** — all 55 names, descriptions and
  grades exactly as PlayStation publishes them (1 platinum, 2 gold, 6 silver,
  46 bronze), each with a guide written for this entry that cites its sources.
- **Checklist tracker** — tick trophies earned; progress is saved in the
  browser (`localStorage`) and can be exported to a JSON file and imported back.
  Overall percentage plus per-grade and per-kind counts.
- **Filters** — by grade, by kind (story / missable / collectibles / activities /
  online), by text search, and earned / unearned only.
- **Spoiler setting** — hides the names and descriptions of story trophies
  until you earn them or switch spoilers off.
- **Roadmap to the platinum** — five phases in play order (story, side content,
  activities, collectibles, economy & cleanup), each with its trophies and
  counts, built from the official descriptions and PowerPyx's roadmap.
- **Missables, flagged clearly** — PowerPyx reports exactly one potentially
  missable trophy, **Positive Mental Attitude** (the first meditation, in
  Chapter 1). The Missables page explains it, the no-mission-replay rule, and
  how to protect your run with manual saves.

## The facts it is built on

- The official list: 55 trophies, 1 platinum, 2 gold, 6 silver, 46 bronze;
  28 hidden on PSN until earned; 0 online trophies.
- PowerPyx rates the platinum 4/10 at about 200 hours, one playthrough, no
  mission replay, free roam after the story, and cheats disable trophies.
- The 100% completion checklist (gold **A Long Road**) is about 60% of true
  completion: 200 of 277 vehicles scanned, 100 of 255 animals studied,
  70 of 80 challenges.

Sources are cited beside every trophy's guide inside the app:

- Exophase — GTA VI trophy list:
  <https://www.exophase.com/game/grand-theft-auto-vi-psn/trophies/>
- PSNProfiles — GTA VI trophies (with PSN's progress counts):
  <https://psnprofiles.com/trophies/43531-grand-theft-auto-vi>
- PowerPyx — GTA 6 Trophy Guide & Roadmap:
  <https://www.powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap/>

Guides are written in the author's own words from those sources; nothing is
copied from them. Where a trophy's exact trigger is not yet pinned down by any
source, the guide says so instead of inventing one.

## Try it

```sh
node serve.ts        # serves app/ at http://localhost:8080
# or: python3 -m http.server --directory app 8080
```

Then open <http://localhost:8080>. It works with the network off.

## Hand in (make.fun)

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `app/` and `screenshots/`
to the output directory and writes `dossier.json` with `buildDossier` from
`vendor/makefun-frontend.ts` (the kit's copy, unchanged).

## Layout

```text
main.ts                  entry program: copies app/ + screenshots/, writes dossier.json
serve.ts                 tiny static server for local testing
vendor/makefun-frontend.ts  make.fun dossier library (kit copy, unchanged)
app/
  index.html             the guide (loads js/main.js + css/style.css)
  css/style.css          the whole look (system fonts only, no network)
  js/main.js             boot: loads the data, wires the views
  js/store.js            saved progress: localStorage, export, import
  js/filters.js          grade / kind / search / earned filtering + spoiler rule
  js/views.js            checklist, roadmap and missables rendering
  data/trophies.json     the 55 trophies: official name, description, grade,
                         count, kind, missable flag, guide + sources
  data/roadmap.json      the five roadmap phases
screenshots/            4 real renders of the app (cover first by name)
```

## License

MIT — see [LICENSE](./LICENSE). Grand Theft Auto and GTA are trademarks of
Rockstar Games; this guide is an unofficial fan-made tracker and uses no
Rockstar logo, artwork or game screenshots.

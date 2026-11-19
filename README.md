[![make.fun](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/c/gta6-trophy-guide-01/)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/intan151/gta6-trophy-guide-leonida/rank.svg)](https://make.fun/c/gta6-trophy-guide-01/)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/intan151/gta6-trophy-guide-leonida/reward.svg)](https://make.fun/c/gta6-trophy-guide-01/)

# Leonida Ledger — GTA VI Trophy Guide & Tracker

An offline, static web app that guides you to the Grand Theft Auto VI platinum trophy and tracks every step along the way. Built for the make.fun competition [Build the best GTA 6 trophy guide](https://make.fun/c/gta6-trophy-guide-01/) — a free bounty with a $250 prize pool and 50 places.

## What it covers

All **55 official PS5 trophies** for GTA VI:

- 1 Platinum
- 2 Gold
- 6 Silver
- 46 Bronze

Every trophy comes with its own short, original guide — two to five sentences that explain what to do and how to get it done — plus cited sources. The sources used throughout are Exophase, PSNProfiles, and PowerPyx.

## The one missable trophy

There is exactly **one missable trophy**: **Positive Mental Attitude**, earned by meditating in Chapter 1. Miss that moment and the platinum is locked out for that playthrough, so the guide flags it clearly and early — don't walk past it.

## Features

- **Checklist tracker** — tick trophies off as you earn them; progress is saved in your browser with localStorage, so it survives closing the tab.
- **Export and import** — back up your progress as a JSON file, or restore it later on any device.
- **Filters** — narrow the list by trophy grade (Platinum / Gold / Silver / Bronze), by kind, by earned/unearned status, or by free-text search.
- **Spoiler setting** — hide story details until you are ready to see them.
- **5-phase roadmap** — a step-by-step plan that takes you from the first story missions all the way to the platinum, in a sensible order that keeps the missable trophy safe.
- **Fully offline** — no server, no account, no network needed once the files are on your machine. Open it and play.

## How to use it

1. Download or clone this repository.
2. Open `app/index.html` in any modern web browser.
3. That's it — the guide and tracker run entirely in your browser.

Your checklist progress is stored locally in your browser, and nothing is sent anywhere.

## Project layout

- `app/index.html` — the app itself (open this file)
- `app/data/trophies.json` — the full list of 55 trophies with their guides and sources
- `app/data/roadmap.json` — the 5-phase roadmap to platinum
- `app/js/` — tracker logic: `main.js`, `store.js`, `filters.js`, `views.js`
- `app/css/style.css` — styling
- `screenshots/` — screenshots of the checklist, roadmap, missable warning, and filters

## License

See `LICENSE`.

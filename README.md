# Implexus Powerlifting — Gym Rankings

A static leaderboard ranking Implexus members (current and former) by their best
DOTS score from competition. Includes a fullscreen "dynamic mode" for a gym TV,
with cascading pages, rivalry cards, joke grudge matches, and weekly PB callouts.

## Stack

Pure HTML + CSS + vanilla JS. Zero dependencies, zero build step. The only Node
code is the weekly scraper (`scripts/scrape.mjs`), which runs in GitHub Actions.

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import the repo in [vercel.com](https://vercel.com)
3. Framework preset: **Other** (no build step needed)
4. Deploy

## Files

- `index.html` — markup
- `style.css` — all styling (light/dark via system preference)
- `data.js` — the lifter data (`LIFTERS` array)
- `changes.js` — weekly change log (previous ranks + this week's PBs), written by the scraper
- `app.js` — leaderboard + dynamic mode
- `scripts/scrape.mjs` — weekly refresh script
- `.github/workflows/refresh.yml` — schedules the scrape

## Adding a lifter (manual)

Edit `data.js` and add an object to the `LIFTERS` array:

```js
{
  name: "Full Name",        // display name
  slug: "urlslug",          // OpenPowerlifting URL slug (the bit after /u/)
  ig: "instagramhandle",    // or null
  squat: 200, bench: 120, deadlift: 220, total: 540, dots: 349.24,
  fed: "BPU", equip: "Raw", bodyweight: "82.5",
  legacy: true,             // OPTIONAL — omit for current members
}
```

The board auto-sorts by `dots` descending. The scraper fills in the numeric
fields automatically on its next run, so you only really need an accurate
`name`, `slug`, `ig`, and (if applicable) `legacy: true` — but it's fine to add
full data by hand too.

## Weekly automatic refresh

A GitHub Action (`.github/workflows/refresh.yml`) runs the scraper every
Wednesday. For each lifter in `data.js` it fetches their OpenPowerlifting
profile, re-derives their PBs and the fed/equip/bodyweight from their best-DOTS
meet, and writes `data.js` + `changes.js` back to the repo. Vercel then
redeploys automatically.

**It is defensive:** a profile that fails to fetch or parse keeps its existing
data untouched, and if too few profiles parse (a sign OpenPowerlifting changed
their page structure) the run aborts without writing anything.

### One-time setup on GitHub

1. Commit and push the whole project, including the `.github` and `scripts`
   folders, to your repo.
2. On GitHub: **Settings → Actions → General → Workflow permissions** →
   select **Read and write permissions** → Save. (This lets the action commit
   the refreshed files.)
3. Optionally test it now: **Actions** tab → **Weekly leaderboard refresh** →
   **Run workflow**. The first run just establishes a baseline — position
   arrows and PB cards start appearing from the second run onward.

### Changing the schedule

Edit the `cron` line in `.github/workflows/refresh.yml`. It's in UTC; the file
has a comment explaining the GMT/BST offset. You can also trigger it any time
from the Actions tab.

### Run the scraper locally

```bash
node scripts/scrape.mjs
```

(Requires Node 18+ for the built-in `fetch`.)

## What the weekly data drives

- **Position arrows** on the board: ▲ up / ▼ down / – no change, vs last week's
  rank. New entries show a **NEW** tag. Arrows reflect the current view
  (active-only or legacy-included).
- **PB callout cards** in dynamic mode: any lifter who improved a squat, bench,
  deadlift, total, or DOTS that week gets a celebration card in the rotation,
  noting any board jump.

## Dynamic mode

Click **Dynamic** to go fullscreen. The leaderboard toggles (legacy on/off) are
inherited at entry. Pages of 6 cascade through, then PB cards, then rivalries.
Click/tap anywhere to exit.

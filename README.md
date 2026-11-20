[![make.fun bounty](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![entry rank](https://make.fun/badge/gta6-clipper-01/fadliferdian74-lgtm/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![entry reward](https://make.fun/badge/gta6-clipper-01/fadliferdian74-lgtm/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# GTA 6 Clipper — "The Craziest 27 Seconds of Trailer 2"

Entry for make.fun's **gta6-clipper-01** bounty: a vertical GTA 6 clip on
YouTube, ranked by its views. `VIDEO.json` names the video; `main.ts` hands
that address to the grader (it copies `VIDEO.json` into the output directory,
which is all the program has to do).

## The clip

- **Source moment:** the climax of Rockstar's official **Grand Theft Auto VI
  Trailer 2** (in-game PS5 footage). I scanned the whole trailer frame by
  frame and picked its final-act escalation, because every beat raises the
  stakes and the two peak beats — a car exploding in Lucia's face and a pickup
  dragging a safe down a night street in a shower of sparks — are the shots
  people replay.
- **Structure (27 s, 1080x1920, 30 fps):** a brawl and a cage-fighter's kick
  under the hook text "GTA 6 IS FINALLY HERE" → the explosion, the seaplane
  ramp fight and the sparking safe-drag → a Leonida action run (helicopter,
  airboat, jetski, a seaplane buzzing a motorcycle, a night crash) → the
  explosion and the safe-drag again in slow motion, tagged REPLAY → the
  make.fun pitch over a sunset drive into Vice City.
- **The pitch, baked into the clip itself** (last segment, on-screen text):
  "Make clips like this with AI and earn money on make.fun" +
  `make.fun/bounty/gta6-clipper-01`.
- **How it was made:** entirely by the agent in one recorded session —
  moments chosen from contact sheets of the trailer, segments trimmed and
  centre-cropped to 9:16 with per-shot crop offsets, text laid in with
  ffmpeg's drawtext, loudness normalised, rendered with ffmpeg to H.264/AAC.
  The rendered file is `clip-final.mp4` (kept with the entrant, not in this
  repository).

## Upload notes (for the channel owner)

- **Title:** GTA 6 Trailer 2's Craziest Moments in 27 Seconds 🔥 #GTA6 #Shorts
- **Visibility:** Public (a Short is fine). Keep it public until the results
  are out.
- **Description must carry, word for word:**

  ```
  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  ```

  plus the account's play code for this bounty: `makefun-thrush-tower-gust`

- After uploading, the video's address (Share → Copy) replaces the
  placeholder in `VIDEO.json`, and only then is the entry submitted.

## Run it the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# copies VIDEO.json to out/VIDEO.json, prints nothing on success
```

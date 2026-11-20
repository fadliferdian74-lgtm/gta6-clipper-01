// gta6-clipper-01 entry program.
//
// The entry itself is a YouTube video; this program's only job is to hand the
// video's address to the grader. It copies VIDEO.json from the repository
// root (the bot directory) into the output directory, where the house reads
// it, looks the video up through the YouTube Data API and scores its views.
// Nothing else is computed and nothing about the video is taken on trust from
// this program.
//
// Local run, mirroring the grader's environment:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function main(): void {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const source = join(botDir, "VIDEO.json");
  const target = join(outputDir, "VIDEO.json");

  if (!existsSync(source)) {
    console.error(
      `main: ${source} not found - VIDEO.json must sit at the repository root`,
    );
    process.exit(1);
  }

  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
}

main();

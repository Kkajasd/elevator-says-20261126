// What the Elevator Would Say — make.fun entry
// Writes the funniest one line a talking elevator could say to /output/entry.txt.
// Node.js stdlib only. The line must be a single line of 1-120 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Going down. Relax, I heard everything you said about your boss on floor nine, and I agree.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);

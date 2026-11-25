import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR =
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "fix: the crash is now a required step in the boot sequence";

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > 100) {
    throw new Error("ENTRY must be between 1 and 100 characters");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("ENTRY must not be blank");
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
}

main();

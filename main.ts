// Famous Last Words at 1 Percent — entry for @aimcuk.
// The phone's screen speaks its own farewell: years of lighting up the
// owner's life, and its grand finale is the display itself dying
// mid-word, the sentence amputated exactly where the pixels give out.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I lit up your 3 a.m. scrolls, your texts, your face — and my grand finale is fading out mid-sen";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

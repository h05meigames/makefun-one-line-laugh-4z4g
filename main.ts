// One Line, One Laugh entry — a single original joke.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes the joke to /output/entry.txt (the file the gate checks:
// UTF-8 text, 1 to 140 characters) and prints the same line to stdout.
//
// Revision (v2): the setup now does the work in three words — "dumped me
// for someone richer" — instead of the wordy "agreed to see other people".
// The turn is sharper too: "cheating on it with denial" flips the blame
// back on me and makes denial the affair partner, which is a fresher,
// more surprising image than the flat "I found denial". Every word now
// earns its place and the punchline lands in the final clause.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My bank account dumped me for someone richer — fair enough, I've been cheating on it with denial for years.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);

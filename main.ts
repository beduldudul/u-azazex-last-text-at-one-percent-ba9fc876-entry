// Last text from a dying phone: the 1% was a lie all along.
// The phone faked its own death for attention — and confesses in its last text.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "It was never 1%. I lied. I just wanted you to look at me for once.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

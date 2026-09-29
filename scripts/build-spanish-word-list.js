import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sourcePaths = process.argv.slice(2);
if (!sourcePaths.length) throw new Error("Usage: node scripts/build-spanish-word-list.js <word-list.txt> [...]");

const sources = await Promise.all(sourcePaths.map((sourcePath) => readFile(sourcePath, "utf8")));
const words = [...new Set(sources.flatMap((source) => source.split(/\r?\n/))
  .map((word) => String(word).trim().toLocaleLowerCase("es").normalize("NFC"))
  .filter((word) => /^[a-záéíóúüñ]+$/.test(word) && Array.from(word).length >= 4 && Array.from(word).length <= 8))]
  .sort((a, b) => a.localeCompare(b, "es"));

const output = `// Generated from olea/lemarios (public domain).\n// https://github.com/olea/lemarios\nexport const SPANISH_WORDS_4_TO_8 = new Set(\`\n${words.join("\n")}\n\`.trim().split("\\n"));\n`;
await writeFile(path.join(root, "spanish-words-4-8.js"), output, "utf8");
console.log(`Generated ${words.length} Spanish words.`);

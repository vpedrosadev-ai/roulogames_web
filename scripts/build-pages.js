import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

await mkdir(path.join(root, "public"), { recursive: true });
await copyFile(path.join(root, "worker.js"), path.join(root, "public", "_worker.js"));
// Los motores compartidos que importa _worker.js deben viajar junto a él.
await copyFile(path.join(root, "wolf-engine.js"), path.join(root, "public", "wolf-engine.js"));
await copyFile(path.join(root, "mind-engine.js"), path.join(root, "public", "mind-engine.js"));

console.log("Cloudflare Pages build ready: public/_worker.js created");

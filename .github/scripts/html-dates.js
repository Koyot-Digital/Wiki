// .github/scripts/html-dates.js
const fs = require("fs");
const path = require("path");

// root directory of the repo
const root = process.cwd();

// read everything in root, filter .html files only
const files = fs.readdirSync(root)
  .filter(f => f.toLowerCase().endsWith(".html"))
  .sort();

const manifest = {};

for (const file of files) {
  const fullPath = path.join(root, file);
  const stats = fs.statSync(fullPath);
  manifest[file] = stats.mtime.toISOString();
}

const outputPath = path.join(root, "html-dates.json");
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log(`html-dates.json updated with ${files.length} HTML file(s).`);

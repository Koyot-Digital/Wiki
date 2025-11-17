// .github/scripts/html-dates.js
const fs = require("fs");
const path = require("path");

const root = process.cwd();

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

function formatDate(d) {
  const day = String(d.getDate()).padStart(2, "0");
  const month = MONTHS[d.getMonth()];
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

const files = fs.readdirSync(root)
  .filter(f => f.toLowerCase().endsWith(".html"))
  .sort();

const manifest = {};

for (const file of files) {
  const fullPath = path.join(root, file);
  const stats = fs.statSync(fullPath);
  manifest[file] = formatDate(stats.mtime);
}

const outputPath = path.join(root, "html-dates.json");
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log(`html-dates.json updated with ${files.length} HTML file(s).`);

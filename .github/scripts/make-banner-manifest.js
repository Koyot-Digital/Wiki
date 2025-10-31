// .github/scripts/make-banner-manifest.js
const fs = require("fs");
const path = require("path");

const dir = path.join(process.cwd(), "images", "banners");
const files = fs.readdirSync(dir)
  .filter(f => f.toLowerCase().endsWith(".webp"))
  .sort()
  .map(f => `images/banners/${f}`);

const outputPath = path.join(process.cwd(), "images", "banners.json");
fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));

console.log(`banners.json updated with ${files.length} .webp file(s).`)
// if you do not know what this is, you probably don't need to do anything to it.
// this file is not invoked with the normal wiki code, it is invoked by the github actions workflow to generate a list of banner images for use in the wiki.
// it CANNOT be run in the browser or anything like that.
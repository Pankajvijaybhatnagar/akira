// Generates src/data/globe-dots.json — evenly spaced [lon, lat] dots that sit on land.
// Run once with: node scripts/generate-globe-dots.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { geoContains } from "d3-geo";
import { feature } from "topojson-client";

const topo = JSON.parse(readFileSync(new URL("../node_modules/world-atlas/land-110m.json", import.meta.url)));
const land = feature(topo, topo.objects.land);

const STEP = 1.8; // degrees between rows
const dots = [];
for (let lat = -58; lat <= 80; lat += STEP) {
  // keep dot spacing roughly even on the sphere
  const lonStep = STEP / Math.max(Math.cos((lat * Math.PI) / 180), 0.2);
  for (let lon = -180; lon < 180; lon += lonStep) {
    if (geoContains(land, [lon, lat])) dots.push([Math.round(lon * 10) / 10, Math.round(lat * 10) / 10]);
  }
}

writeFileSync(new URL("../src/data/globe-dots.json", import.meta.url), JSON.stringify(dots));
console.log(`wrote ${dots.length} land dots`);

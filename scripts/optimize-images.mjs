#!/usr/bin/env node
/**
 * Converts the raw hotel photo shoot (camera PNG exports, ~2.3 MB each) into
 * web-ready WebP masters under src/assets/hotel, named by what they show.
 *
 * The app imports these files statically, so Next.js derives width/height,
 * a blur placeholder, and a content-hashed URL with immutable caching for each
 * one. The image optimizer then serves AVIF/WebP at the widths each <Image>
 * asks for, so these masters only need to be high-quality, not small.
 *
 *   node scripts/optimize-images.mjs [sourceDir]
 *
 * sourceDir defaults to public/newimages. A missing source file is reported
 * and skipped; an existing output is overwritten.
 */
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.resolve(root, process.argv[2] ?? "public/newimages");
const outDir = path.join(root, "src/assets/hotel");
const og = { file: path.join(root, "public/images/og-hotel.jpg"), from: "exterior-sunset" };

const MAX_WIDTH = 1920;
const QUALITY = 82;

// Source export id -> semantic name. Room photos are grouped by the room type
// they illustrate on the site (see roomPhotos in src/lib/images.js).
const manifest = {
  "0000000001a88208baec79469a7e2c96": "room-royal-window",
  "0000000003288211a6de89fe87ea5ff9": "entrance-steps",
  "0000000007188211b3a53d3e152b7b19": "room-standard-bed",
  "000000000a948211b5d849041c3cc76b": "bath-royal-shower",
  "000000000ca882118bf46afe6787790a": "reception-lounge",
  "000000000d108208825a1278643b66f2": "room-deluxe-bed",
  "0000000010148208b351dafc0e664f77": "room-deluxe-mirror",
  "000000001478820881ad4908a05ad4f3": "room-standard-wardrobe",
  "0000000018d48211844f8d67a189552c": "exterior-day",
  "000000001e4c8208974ff50c1a45838f": "room-deluxe-vanity",
  "000000001fb882088ea3116fb051965a": "bath-deluxe",
  "0000000024688211838fff216f72792e": "corridor-rooms",
  "0000000025088211a745d1cc669efada": "lobby-lift-stairs",
  "00000000273081f4873f24e37a1c6079": "room-deluxe-closeup",
  "0000000028c88211b61ade70000a9aa5": "reception-restaurant-view",
  "00000000296c820887f821d76d675223": "room-royal-tea-station",
  "000000003568820e9edfc911b69dc5a7": "room-standard-tv",
  "0000000041948211b01a7f1cd0da4141": "exterior-dusk",
  "000000004f1882088168d10b61fb1dc1": "room-royal-work-desk",
  "0000000056608208ba443e1d42e8741c": "room-royal-curtains",
  "0000000057dc8211a43ec3c423f7bf24": "restaurant-hall",
  "0000000058e482089104af9e9edfbe60": "bath-presidential",
  "0000000059888208b9866707740a1ced": "room-royal-view",
  "000000005bbc82119850613dc11857a3": "exterior-day-front",
  "000000005d188208a3f161ba14f24f98": "room-deluxe-dressing",
  "000000005db08208b8be01f59686690f": "room-deluxe-entry",
  "000000006b148208bf11d08ef21881de": "room-standard-front",
  "000000006e9c8208a6e4594a556b3455": "bath-royal",
  "000000006fa482118b2931fee4d470ba": "exterior-day-side",
  "0000000070b8821182867b202cbb4cca": "reception-desk",
  "0000000071c08208becaba889aab7e15": "room-standard-door",
  "0000000077748211aefc78da47a2d39f": "lobby-stairs-entrance",
  "00000000785c821193ada98e1cd7dad1": "room-presidential-wide",
  "0000000080d082089e6947510a1e2ef4": "room-standard-closet",
  "0000000083c08211b8371575c6e6dd38": "corridor-lift",
  "0000000084ac8211abb95371b37e6bee": "corridor-plants",
  "000000008d988208a7cb33fa2bba7724": "room-presidential-vanity",
  "000000008e008208b120bc278985960a": "bath-standard",
  "00000000902c8208b39404b91b1fcee5": "room-presidential-tv",
  "00000000a1548211a8b31bae96724500": "room-deluxe-work-desk",
  "00000000a15c8211a0ec4b6403ff5883": "exterior-day-garden",
  "00000000a8dc8211bbdc3320fbb80b0e": "corridor-long",
  "00000000a93482119d773b9268d599f2": "corridor-flowers",
  "00000000babc82119f4f821a2f16d315": "lobby-staircase",
  "00000000bac482089d903f31e29ff95d": "room-royal-suite",
  "00000000be64820896d530a331beb2db": "room-standard-angle",
  "00000000c6a48208af4e40414566097b": "room-presidential-dressing",
  "00000000cea08211a596395e15860b7e": "exterior-dusk-street",
  "00000000d2bc8211978cb71fa494581c": "exterior-dusk-wide",
  "00000000d6988211835d9d3327d3eeca": "lobby-lift-door",
  "00000000d8848211a14f1acad9fbebad": "restaurant-dining",
  "00000000e0e88211afb15e18925bc1b1": "lounge-seating",
  "00000000e61c82088050b538d2e7922d": "room-presidential-bed",
  "00000000e66c82118936b576fa31b319": "exterior-sunset",
  "00000000e8e08208a754faab9b9ce2ec": "room-standard-mirror",
  "00000000edf88211a11ff8b20d0aa319": "restaurant-lounge",
  "00000000f1308208865694fa19dfa4aa": "bath-presidential-shower",
  "00000000f29482089e974d33f2a62867": "room-presidential-suite",
  "00000000f68c82089b5f96a8a1e114e8": "room-deluxe-vanity-view",
  "00000000f78c82088801f2ca1c672de4": "room-deluxe-closet",
  "00000000fb3c8211bcf02e770e7f496a": "room-standard-entry",
};

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

await mkdir(outDir, { recursive: true });

let before = 0;
let after = 0;
let missing = 0;

for (const [id, name] of Object.entries(manifest)) {
  const input = path.join(sourceDir, `file_${id}.png`);
  const output = path.join(outDir, `${name}.webp`);
  const source = await stat(input).catch(() => null);
  if (!source) {
    console.warn(`skip  ${name}: ${path.relative(root, input)} not found`);
    missing += 1;
    continue;
  }

  const info = await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6, smartSubsample: true })
    .toFile(output);

  before += source.size;
  after += info.size;
  console.log(`${name.padEnd(28)} ${info.width}x${info.height}  ${kb(source.size)} -> ${kb(info.size)}`);
}

// Social cards need a stable public URL, so the Open Graph image lives in public/.
await sharp(path.join(outDir, `${og.from}.webp`))
  .resize(1200, 630, { fit: "cover", position: "attention" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(og.file);

console.log(`\n${Object.keys(manifest).length - missing} images: ${kb(before)} -> ${kb(after)}`);
console.log(`Open Graph card: ${path.relative(root, og.file)}`);
if (missing) process.exitCode = 1;

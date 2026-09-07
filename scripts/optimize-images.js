#!/usr/bin/env node
// Generates WebP variants for the raster images the site serves.
// Run after replacing any source PNG: node scripts/optimize-images.js
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { statSync } from 'fs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// Display slot is 550px, so 550w covers 1x and 1100w covers retina.
const images = [
	{ src: 'static/home/home-banner.png', widths: [550, 1100] },
	{ src: 'static/home/experts.png', widths: [550, 1100] },
	{ src: 'static/home/logo-diced.png', widths: [461] } // decorative, native size
];

for (const { src, widths } of images) {
	const input = join(root, src);
	for (const w of widths) {
		const kb = (n) => Math.round(statSync(n).size / 1024) + 'KB';
		for (const [ext, make] of [
			['avif', (i) => i.avif({ quality: 55 })],
			['webp', (i) => i.webp({ quality: 82 })]
		]) {
			const out = input.replace(/\.png$/, `-${w}.${ext}`);
			await make(sharp(input).resize({ width: w })).toFile(out);
			console.log(`${src} ${kb(input)} -> ${out.replace(root + '/', '')} ${kb(out)}`);
		}
	}
}

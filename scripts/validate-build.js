#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const buildDir = join(__dirname, '../build');
const svelteKitOutputDir = join(__dirname, '../.svelte-kit/output/client');

// Use SvelteKit output for Netlify, build for other adapters
let actualBuildDir;
try {
  statSync(buildDir);
  actualBuildDir = buildDir;
  console.log('📁 Using standard build directory');
} catch {
  actualBuildDir = svelteKitOutputDir;
  console.log('📁 Using SvelteKit output directory (Netlify)');
}

console.log('🔍 Validating build integrity...\n');

// Check if build directory exists
try {
  statSync(actualBuildDir);
  console.log('✅ Build directory exists');
} catch (error) {
  console.error('❌ Build directory missing!');
  process.exit(1);
}

// Check essential files
const essentialFiles = [
  'index.html',
  '_app/version.json'
];

for (const file of essentialFiles) {
  try {
    const filePath = join(actualBuildDir, file);
    statSync(filePath);
    console.log(`✅ ${file} exists`);
  } catch (error) {
    console.error(`❌ ${file} missing!`);
    process.exit(1);
  }
}

// Check manifest integrity
try {
  const manifestPath = join(actualBuildDir, '_app/version.json');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
  console.log(`✅ Version: ${manifest.version}`);
} catch (error) {
  console.error('❌ Version manifest corrupted!');
  process.exit(1);
}

// Check for common routes (both formats)
const routes = ['about-us', 'contact'];
for (const route of routes) {
  let found = false;
  
  // Try route.html format (prerendered)
  try {
    const routePath = join(actualBuildDir, `${route}.html`);
    statSync(routePath);
    console.log(`✅ Route /${route} exists (${route}.html)`);
    found = true;
  } catch (error) {
    // Try route/index.html format
    try {
      const routePath = join(actualBuildDir, route, 'index.html');
      statSync(routePath);
      console.log(`✅ Route /${route} exists (${route}/index.html)`);
      found = true;
    } catch (error2) {
      // Neither format found
    }
  }
  
  if (!found) {
    console.error(`❌ Route /${route} missing! (checked both ${route}.html and ${route}/index.html)`);
    process.exit(1);
  }
}

// Check immutable assets
try {
  const immutableDir = join(actualBuildDir, '_app/immutable');
  const files = readdirSync(immutableDir, { recursive: true });
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  
  console.log(`✅ Found ${jsFiles.length} JS files`);
  console.log(`✅ Found ${cssFiles.length} CSS files`);
  
  if (jsFiles.length === 0) {
    console.error('❌ No JS files found in immutable directory!');
    process.exit(1);
  }
} catch (error) {
  console.error('❌ Immutable assets directory missing or corrupted!');
  process.exit(1);
}

console.log('\n🎉 Build validation passed!');
console.log('\nNext steps:');
console.log('1. Deploy to Netlify');
console.log('2. Run deployment verification tests');
console.log('3. Check all routes load correctly');
#!/usr/bin/env node
/**
 * watch-deploy.mjs
 * Watches for file changes and auto-commits + pushes to GitHub,
 * which triggers the Vercel deployment via GitHub Actions.
 *
 * Run with: node watch-deploy.mjs
 */

import { watch } from 'fs';
import { execSync } from 'child_process';
import { resolve } from 'path';

const ROOT = new URL('.', import.meta.url).pathname;

// Files/dirs to ignore
const IGNORE = new Set(['.git', 'node_modules', 'dist', '.vercel', 'watch-deploy.mjs']);

let debounceTimer = null;
let pendingChanges = new Set();

function shouldIgnore(filename) {
  if (!filename) return true;
  return IGNORE.has(filename) || filename.startsWith('.') || filename.endsWith('.output');
}

function deploy() {
  const files = [...pendingChanges].join(', ');
  pendingChanges.clear();

  try {
    const status = execSync('git status --short', { cwd: ROOT }).toString().trim();
    if (!status || status === 'm Projects/q2-strategy') {
      console.log('↩  No changes to deploy');
      return;
    }

    const timestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const msg = `auto-deploy ${timestamp}`;

    execSync('git add -A', { cwd: ROOT });
    execSync(`git commit -m "${msg}"`, { cwd: ROOT });
    execSync('git push', { cwd: ROOT });

    console.log(`🚀 Pushed: ${msg} — deploying to copilot-prototypes.vercel.app (~40s)`);
  } catch (e) {
    console.error('Deploy error:', e.message);
  }
}

// Watch the project root (non-recursive) + key subdirs
const dirs = [ROOT, resolve(ROOT, 'api'), resolve(ROOT, 'src'), resolve(ROOT, 'public')];

dirs.forEach(dir => {
  try {
    watch(dir, { recursive: false }, (_, filename) => {
      if (shouldIgnore(filename)) return;
      pendingChanges.add(filename);
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(deploy, 2000); // 2s debounce after last change
    });
  } catch (_) {}
});

console.log('👀 Watching for changes — saves auto-deploy to copilot-prototypes.vercel.app');
console.log('   (Ctrl+C to stop)\n');

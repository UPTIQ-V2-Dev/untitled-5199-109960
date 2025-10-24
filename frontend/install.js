#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Setting up project...');

// Check if pnpm is available
let usePnpm = false;
try {
  execSync('pnpm --version', { stdio: 'pipe' });
  usePnpm = true;
  console.log('Using pnpm...');
} catch (e) {
  console.log('pnpm not found, trying to install...');
  try {
    // Try to install pnpm globally
    execSync('npm install -g pnpm', { stdio: 'inherit' });
    usePnpm = true;
    console.log('pnpm installed successfully');
  } catch (installError) {
    console.log('Could not install pnpm, falling back to npm');
    usePnpm = false;
  }
}

// Install dependencies and build
try {
  if (usePnpm) {
    console.log('Installing dependencies with pnpm...');
    execSync('pnpm install', { stdio: 'inherit' });
    console.log('Building with pnpm...');
    execSync('pnpm run build', { stdio: 'inherit' });
  } else {
    console.log('Installing dependencies with npm...');
    execSync('npm install', { stdio: 'inherit' });
    console.log('Building with npm...');
    execSync('npm run build', { stdio: 'inherit' });
  }
  console.log('✅ Project setup completed successfully!');
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
}
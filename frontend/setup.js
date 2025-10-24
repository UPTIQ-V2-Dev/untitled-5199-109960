const { execSync } = require('child_process');

try {
  // Install pnpm globally
  console.log('Installing pnpm...');
  execSync('npm install -g pnpm', { stdio: 'inherit' });
  
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('pnpm install', { stdio: 'inherit' });
  
  // Build the project
  console.log('Building project...');
  execSync('pnpm run build', { stdio: 'inherit' });
  
  console.log('Setup completed successfully!');
} catch (error) {
  console.error('Setup failed:', error.message);
  process.exit(1);
}
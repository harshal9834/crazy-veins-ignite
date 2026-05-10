import fs from 'fs';
import path from 'path';

const paths = [
  'dist/server/server.js',
  'dist/client/server/server.js'
];

let found = false;
for (const p of paths) {
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, 'api/server.js');
    console.log(`Successfully copied ${p} to api/server.js`);
    found = true;
    break;
  }
}

if (!found) {
  console.error('Could not find server.js in any of the expected locations:');
  paths.forEach(p => console.error(` - ${p}`));
  process.exit(1);
}

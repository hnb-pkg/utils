const fs = require('fs');
const path = require('path');
const dest = path.resolve(__dirname, '..', 'dist', 'cjs', 'package.json');
const content = {
  type: 'commonjs'
};
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, JSON.stringify(content, null, 2));
console.log(`Wrote ${dest}`);


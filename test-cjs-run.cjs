const utils = require('./dist/cjs/index.js');
(async () => {
  const res = await utils.mapAsync([1, 2, 3], async (n) => n * 2);
  console.log('cjs result', res);
})();


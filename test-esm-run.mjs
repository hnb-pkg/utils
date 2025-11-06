import { mapAsync, flatMapAsync } from './dist/index.js';
(async () => {
  const res = await mapAsync([1,2,3], async n => n*3);
  const res2 = await flatMapAsync([1,2,3], async n => [n, n+1]);
  console.log('esm result', res, res2);
})();


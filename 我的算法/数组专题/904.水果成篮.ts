function totalFruit(fruits: number[]): number {
  let i = 0;
  let res = 0;
  let map = new Map();
  while (i < fruits.length) {
    let flag = fruits[i];
    let j = i;
    let nums = 0;
    let pio;
    while (j < fruits.length) {
      if (map.size === 2 && !map.has(fruits[j])) break;
      if (map.size < 2 && !map.has(fruits[j])) {
        pio = fruits[j];
        map.set(fruits[j], j);
      }
      j++;
      nums++;
    }
    res = nums > res ? nums : res;
    if (j===fruits.length) return res;
    map.delete(flag);
    i = map.get(pio);
  }
  return res;
}

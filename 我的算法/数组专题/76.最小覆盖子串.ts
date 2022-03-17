function minWindow(s: string, t: string): string {
  let resStr = "";
  if (s.length < t.length) return resStr;
  let map = new Map();
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], map.has(t[i]) ? map.get(t[i]) + 1 : 1);
  }
  let left = 0,
    right = 0;
  while (right < s.length) {
    while (right < s.length && [...map.values()].find((item) => item > 0)) {
      if (map.has(s[right])) {
        map.set(s[right], map.get(s[right]) - 1);
      }
      right++;
    }
    let flag = [...map.values()].find((item) => item > 0);
    while (![...map.values()].find((item) => item > 0)) {
      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1);
      }
      left++;
    }
    if (!flag) {
      if (resStr !== "") {
        resStr =
          right - left + 1 < resStr.length ? s.slice(left - 1, right) : resStr;
      } else {
        resStr = s.slice(left - 1, right);
      }
    }
  }
  return resStr;
}

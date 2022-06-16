function backspaceCompare(s: string, t: string): boolean {
  let skip1 = 0;
  let skip2 = 0;
  let n = s.length - 1;
  let m = t.length - 1;
  while (n >= 0 || m >= 0) {
    while (skip1 !== 0 || s[n] === "#") {
      if (s[n] === "#") {
        n--;
        skip1++;
        continue;
      }
      n--;
      skip1--;
    }
    while (skip2 !== 0 || t[m] === "#") {
      if (t[m] === "#") {
        m--;
        skip2++;
        continue;
      }
      m--;
      skip2--;
    }
    if (s[n] !== t[m]) return false;
    n--;
    m--;
  }
  return true;
}

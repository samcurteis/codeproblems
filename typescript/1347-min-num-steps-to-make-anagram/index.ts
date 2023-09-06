export default function minSteps(s: string, t: string): number {
  // create a map of ach letter in t, set value to false
  // iterate over s, if letter is a key in map,
  //      if key is falsese
  //          set key to true
  //      if key is true,
  //          push letter to array
  // if letter is not in map, push to array

  const tMap = new Map<string, number>();
  const sMap = new Map<string, number>();
  let counter: number = 0;

  for (let i = 0; i < s.length; i++) {
    const tLetter = tMap.get(t[i]);
    const sLetter = sMap.get(s[i]);
    if (tLetter) {
      tMap.set(t[i], tLetter + 1);
    } else {
      tMap.set(t[i], 1);
    }
    if (sLetter) {
      sMap.set(s[i], sLetter + 1);
    } else {
      sMap.set(s[i], 1);
    }
  }

  for (let [letter, sCount] of sMap) {
    const tLetter = tMap.get(letter);
    if (tLetter) {
      if (tLetter < sCount) {
        counter += sCount - tLetter;
      }
    } else {
      counter += sCount;
    }
  }

  return counter;
}

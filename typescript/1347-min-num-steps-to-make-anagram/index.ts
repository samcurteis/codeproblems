export default function minSteps(s: string, t: string): number {
  // Create a map for both s and t arrays that keeps the letter as its key and the frequency of that letter's occurrence as its value
  // Create a counter to represent how many letters in t need to be changed to make it an anagram of s
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
  // Iterate through the map for s, check if t has that letter
  // If it doesn't have the letter, the counter is incremented by how many times that letter is present in s
  // If it does have the letter, the counter is incremented by how many more times it is present in s compared to t
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

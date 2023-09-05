export default function findAndReplacePattern(
  words: string[],
  pattern: string
): string[] {
  // start loop for words
  // start loop for word
  // if pattern[i] is not in hash table: add to hash table with the value of word[i]
  // if pattern [i] is in hash table:
  //  if value of pattern[i] !== word[i]: end current loop
  // if the loop finishes, push word to response array

  let res: string[] = [];

  for (const word of words) {
    const patternMap = new Map<string, string>();
    const set = new Set<string>();

    for (let i = 0; i < word.length + 1; i++) {
      if (i === word.length) {
        res.push(word);
        break;
      }
      const value = patternMap.get(pattern[i]);
      if (value) {
        if (value !== word[i]) {
          break;
        }
      } else {
        if (set.has(word[i])) {
          break;
        }
        patternMap.set(pattern[i], word[i]);
        set.add(word[i]);
      }
    }
  }

  return res;
}

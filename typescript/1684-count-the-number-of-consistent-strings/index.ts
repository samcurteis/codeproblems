export default function countConsistentStrings(
  allowed: string,
  words: string[]
): number {
  const map = new Map();
  allowed.split("").forEach((letter) => {
    map.set(letter, true);
  });

  let sum = 0;

  for (let i = 0; i < words.length; i++) {
    let allowed = true;
    const word = words[i].split("");
    while (allowed) {
      for (let j = 0; j < word.length; j++) {
        if (!map.get(word[j])) {
          sum -= 1;
          break;
        }
      }
      sum += 1;
      allowed = false;
    }
  }

  return sum;
}

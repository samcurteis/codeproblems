export default function maximumNumberOfStringPairs(words: string[]): number {
  let res = 0
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const word = words[i]
      const reversedWord = words[j].split('').reverse().join('')
      if (word === reversedWord) {
        res += 1
        break;
      }
    }
  }
  return res
};

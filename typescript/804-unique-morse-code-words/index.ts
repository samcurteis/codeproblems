export default function uniqueMorseRepresentations(words: string[]): number {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const morseAlphabet = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
  const map = new Map()
  for (let i = 0; i < alphabet.length; i++) {
    map.set(alphabet[i], morseAlphabet[i])
  }

  const set = new Set()

  for (let i = 0; i < words.length; i++) {
    let translation = ''
    const word = words[i]
    for (let j = 0; j < word.length; j++) {
      const letter = word[j]
      const code = map.get(letter)
      translation += code
    }
    set.add(translation)
  }

  return set.size
};

export default function decodeMessage(key: string, message: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let res = ''

  const map = new Map()
  let counter = 0
  for (let i = 0; i < key.length; i++) {
    if (!map.get(key[i]) && key[i] !== ' ') {
      map.set(key[i], alphabet[counter])
      counter++
    }
  }

  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      res += ' '
    } else {
      const letter = map.get(message[i])
      res += letter
    }
  }




  return res
}

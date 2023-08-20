export default function countPoints(rings: string): number {
  let res: number = 0
  const rodArray: string[] = []
  for (let i = 0; i < rings.length; i += 2) {
    const rodIndex: string = rings[i + 1]
    if (rodArray[rodIndex] === undefined) {
      rodArray[rodIndex] = []
    }
    if (rodArray[rodIndex] !== 'end') {
      rodArray[rodIndex] = rodArray[rodIndex] + rings[i]
      if (rodArray[rodIndex].includes('R') && rodArray[rodIndex].includes('G') && rodArray[rodIndex].includes('B')) {
        res += 1
        rodArray[rodIndex] = 'end'
      }
    }
  }

  return res
}

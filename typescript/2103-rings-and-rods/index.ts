export default function countPoints(rings: string): number {
  let res: number = 0
  const ringArray: string[] = []
  for (let i = 0; i < rings.length; i += 2) {
    const ringIndex: string = rings[i + 1]
    if (ringArray[ringIndex] === undefined) {
      ringArray[ringIndex] = []
    }
    if (ringArray[ringIndex] !== 'end') {
      ringArray[ringIndex] = ringArray[ringIndex] + rings[i]
      if (ringArray[ringIndex].includes('R') && ringArray[ringIndex].includes('G') && ringArray[ringIndex].includes('B')) {
        res += 1
        ringArray[ringIndex] = 'end'
      }
    }
  }

  return res
}

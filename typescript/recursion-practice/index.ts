export default function triangularNumCalculator(number: number): number {
  if (number === 1) {
    return 1
  }

  return number + triangularNumCalculator(number - 1)
}

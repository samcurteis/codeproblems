import triangularNumCalculator from './index'

it('returns the sum of a given number plus the previous number in the pattern, repeated until 1', () => {

  const testCase1 = {
    number: 7,
    output: 28
  }

  expect(triangularNumCalculator(testCase1.number)).toBe(testCase1.output)
})

import countPoints from './index'

it('checks that the function returns the number of values from 0 to 9 that have R, G and B preceding them', () => {

  const testCase1 = {
    rings: "B0B6G0R6R0R6G9",
    output: 1
  }

  const testCase2 = {
    rings: "B0R0G0R9R0B0G0",
    output: 1
  }

  const testCase3 = {
    rings: "G4",
    output: 0
  }

  expect(countPoints(testCase1.rings)).toBe(testCase1.output)
  expect(countPoints(testCase2.rings)).toBe(testCase2.output)
  expect(countPoints(testCase3.rings)).toBe(testCase3.output)
})

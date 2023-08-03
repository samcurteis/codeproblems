import uniqueMorseRepresentations from './index'

it('checks that the function returns the amount of different transformations within morse among an array of words', () => {

  const testCase1 = {
    words: ["gin", "zen", "gig", "msg"],
    output: 2
  }
  const testCase2 = {
    words: ["a"],
    output: 1
  }

  expect(uniqueMorseRepresentations(testCase1.words)).toBe(testCase1.output)
  expect(uniqueMorseRepresentations(testCase2.words)).toBe(testCase2.output)
})

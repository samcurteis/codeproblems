import countConsistentStrings from './index'

it('checks that the function returns the amount of words that contain only letters that are allowed', () => {
  const testCase1 = {
    allowed: 'ab',
    words: ["ad", "bd", "aaab", "baa", "badab"],
    output: 2
  }

  const testCase2 = {
    allowed: 'abc',
    words: ["a", "b", "c", "ab", "ac", "bc", "abc"],
    output: 7
  }

  const testCase3 = {
    allowed: 'cad',
    words: ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"],
    output: 4
  }

  expect(countConsistentStrings(testCase1.allowed, testCase1.words)).toBe(testCase1.output)
  expect(countConsistentStrings(testCase2.allowed, testCase2.words)).toBe(testCase2.output)
  expect(countConsistentStrings(testCase3.allowed, testCase3.words)).toBe(testCase3.output)

})

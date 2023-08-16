import maximumNumberOfStringPairs from './index'

it('checks that the function returns the number of strings that match a reversed string in the same array', () => {

  const testCase1 = {
    words: ["cd", "ac", "dc", "ca", "zz"],
    output: 2
  }

  const testCase2 = {
    words: ["ab", "ba", "cc"],
    output: 1
  }

  const testCase3 = {
    words: ["aa", "ab"],
    output: 0
  }

  expect(maximumNumberOfStringPairs(testCase1.words)).toBe(testCase1.output)
  expect(maximumNumberOfStringPairs(testCase2.words)).toBe(testCase2.output)
  expect(maximumNumberOfStringPairs(testCase3.words)).toBe(testCase3.output)
})

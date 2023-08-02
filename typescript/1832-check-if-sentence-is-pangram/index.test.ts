import checkIfPangram from './index'

it('checks to see if the given string contains all the letters of the alphabet', () => {

  const testCase1 = {
    sentence: "thequickbrownfoxjumpsoverthelazydog",
    output: true
  }

  const testCase2 = {
    sentence: "leetcode",
    output: false
  }

  expect(checkIfPangram(testCase1.sentence)).toBe(testCase1.output)
  expect(checkIfPangram(testCase2.sentence)).toBe(testCase2.output)
})

import decodeMessage from './index'

it('Checks that decodeMessage successfully decodes the message using the corresponding key', () => {
  const testCase1 = {
    key: "the quick brown fox jumps over the lazy dog",
    message: "vkbs bs t suepuv",
    output: "this is a secret"
  }

  expect(decodeMessage(testCase1.key, testCase1.message)).toMatch(testCase1.output)
})

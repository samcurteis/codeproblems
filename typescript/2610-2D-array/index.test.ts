import findMatrix from './index'

it('Checks the function returns a 2D array with minimal rows of distinct integers', () => {
  const testCases = {
    1: {
      input: [1, 3, 4, 1, 2, 3, 1],
      output: [[1, 3, 4, 2], [1, 3], [1]]
    },
    2: {
      input: [1, 2, 3, 4],
      output: [[1, 2, 3, 4]]
    }
  }
  expect(findMatrix(testCases[1].input)).toEqual(testCases[1].output)
  expect(findMatrix(testCases[2].input)).toEqual(testCases[2].output)
})

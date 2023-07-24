import { numJewelsInStones } from './jewels-and-stones'

it('Checks that the function states how many jewels are in the stones string', () => {
  const testCases = {
    1: {
      jewels: 'aA',
      stones: 'aAAbbbb'
    },
    2: {
      jewels: 'z',
      stones: 'ZZ'
    }
  }
  expect(numJewelsInStones(testCases[1].jewels, testCases[1].stones)).toEqual(3)
  expect(numJewelsInStones(testCases[2].jewels, testCases[2].stones)).toEqual(0)
})


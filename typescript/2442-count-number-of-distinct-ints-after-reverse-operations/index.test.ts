import countDistinctIntegers from "./index";

it("checks that the function returns the number of unique integers of an array of nums plus those nums reversed", () => {
  const testCase1 = {
    nums: [1, 13, 10, 12, 31],
    output: 6,
  };

  const testCase2 = {
    nums: [2, 2, 2],
    output: 1,
  };

  expect(countDistinctIntegers(testCase1.nums)).toBe(testCase1.output);
  expect(countDistinctIntegers(testCase2.nums)).toBe(testCase2.output);
});

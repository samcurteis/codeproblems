import minSteps from "./index";

it("checks that the function returns the number of min steps required to make t an anagram of s", () => {
  const testCase1 = {
    s: "bab",
    t: "aba",
    output: 1,
  };

  const testCase2 = {
    s: "leetcode",
    t: "practice",
    output: 5,
  };

  const testCase3 = {
    s: "anagram",
    t: "mangaar",
    output: 0,
  };

  expect(minSteps(testCase1.s, testCase1.t)).toBe(testCase1.output);
  expect(minSteps(testCase2.s, testCase2.t)).toBe(testCase2.output);
  expect(minSteps(testCase3.s, testCase3.t)).toBe(testCase3.output);
});

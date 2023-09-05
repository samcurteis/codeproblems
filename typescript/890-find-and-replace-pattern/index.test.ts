import findAndReplacePattern from "./index";

it("returns from an array a subarray of words that are a permutation of letters for a given pattern", () => {
  const testCase1 = {
    words: ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
    pattern: "abb",
    output: ["mee", "aqq"],
  };

  const testCase2 = {
    words: ["a", "b", "c"],
    pattern: "a",
    output: ["a", "b", "c"],
  };

  expect(findAndReplacePattern(testCase1.words, testCase1.pattern)).toEqual(
    testCase1.output
  );
  expect(findAndReplacePattern(testCase2.words, testCase2.pattern)).toEqual(
    testCase2.output
  );
});

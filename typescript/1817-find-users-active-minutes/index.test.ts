import findingUsersActiveMinutes from "./index";

it("returns an array of length k with a count of users with active minutes ranging from 1 to k", () => {
  const testCase1 = {
    logs: [
      [0, 5],
      [1, 2],
      [0, 2],
      [0, 5],
      [1, 3],
    ],
    k: 5,
    output: [0, 2, 0, 0, 0],
  };

  const testCase2 = {
    logs: [
      [1, 1],
      [2, 2],
      [2, 3],
    ],
    k: 4,
    output: [1, 1, 0, 0],
  };

  expect(findingUsersActiveMinutes(testCase1.logs, testCase1.k)).toStrictEqual(
    testCase1.output
  );
  expect(findingUsersActiveMinutes(testCase2.logs, testCase2.k)).toStrictEqual(
    testCase2.output
  );
});

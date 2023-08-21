from index import findingUsersActiveMinutes

def test_function_returns_frequency_of_active_minutes_from_0_to_k():
    testCase1 = {
    "logs": [
      [0, 5],
      [1, 2],
      [0, 2],
      [0, 5],
      [1, 3],
    ],
    "k": 5,
    "output": [0, 2, 0, 0, 0],
  };

    testCase2 = {
    "logs": [
      [1, 1],
      [2, 2],
      [2, 3],
    ],
    "k": 4,
    "output": [1, 1, 0, 0],
  };

    assert findingUsersActiveMinutes(testCase1["logs"], testCase1["k"]) == testCase1["output"]
    assert findingUsersActiveMinutes(testCase2["logs"], testCase2["k"]) == testCase2["output"]

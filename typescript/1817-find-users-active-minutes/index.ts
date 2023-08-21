export default function findingUsersActiveMinutes(
  logs: number[][],
  k: number
): number[] {
  const hash = new Map();
  const response = [];

  // iterate through the logs
  // if hash doesn't contain id, set id as key, minute as value, increment counter for array at index of id
  // if hash doesn't already contain minute in the key, increment counter
  logs.forEach((log) => {
    const id = log[0];
    const minute = log[1];
    const hashId = hash.get(id);

    if (!hashId) {
      hash.set(id, [[minute], 1]);
    } else if (!hashId[0].includes(minute)) {
      hash.set(id, [[...hashId[0], minute], hashId[1] + 1]);
    }
  });

  // from 1 to k, create an array of zeros
  for (let i = 0; i < k; i++) {
    response[i] = 0;
  }

  // iterate over array, if contains value, increment corresponding index by 1
  for (let value of hash.values()) {
    response[value[1] - 1] += 1;
  }

  return response;
}

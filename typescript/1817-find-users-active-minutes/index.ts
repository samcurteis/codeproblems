export default function findingUsersActiveMinutes(
  logs: number[][],
  k: number
): number[] {
  const hash = new Map();
  const counter = [];
  const response = [];

  logs.forEach((log) => {
    const id = log[0];
    const number = log[1];
    if (counter[id] === undefined) {
      counter[id] = 0;
    }
    if (!hash.has(id)) {
      hash.set(id, [number]);
      counter[id] += 1;
    } else if (!hash.get(id).includes(number)) {
      hash.set(id, [...hash.get(id), number]);
      counter[id] += 1;
    }
  });

  for (let i = 0; i < k; i++) {
    response[i] = 0;
  }

  for (let i = 0; i < counter.length; i++) {
    if (counter[i] !== undefined) {
      response[counter[i] - 1] += 1;
    }
  }

  return response;
}

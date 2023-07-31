export default function arithmeticTriplets(nums: number[], diff: number): number {
  let sum = 0;
  let hash = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i] - diff) && hash.has(nums[i] - diff - diff)) {
      sum++;
    }

    hash.add(nums[i]);
  }

  return sum;
}

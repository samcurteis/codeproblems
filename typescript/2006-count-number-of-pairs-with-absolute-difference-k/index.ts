export default function countKDifference(nums: number[], k: number): number {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    const firstNumber = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const secondNumber = nums[j]
      if (firstNumber - secondNumber === k || secondNumber - firstNumber === k) {
        res += 1
      }
    }
  }

  return res
}

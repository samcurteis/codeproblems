export default function countDistintIntegers(nums: number[]): number {
  // copy array, push each item reversed into a set, return set length
  const res = new Set<number>();
  for (const num of nums) {
    const reverse = num.toString().split("").reverse().join("");
    res.add(num);
    res.add(+reverse);
  }

  return res.size;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arithmeticTriplets(nums, diff) {
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
exports.default = arithmeticTriplets;
//# sourceMappingURL=index.js.map
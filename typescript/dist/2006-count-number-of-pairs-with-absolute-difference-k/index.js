"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countKDifference(nums, k) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++)
            if (i - j === k || j - i === k) {
                res += 1;
            }
    }
    return res;
}
exports.default = countKDifference;
//# sourceMappingURL=index.js.map
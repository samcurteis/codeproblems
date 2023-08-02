"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMatrix(nums) {
    let map = new Map();
    for (let i of nums) {
        if (map.has(i))
            map.set(i, map.get(i) + 1);
        else
            map.set(i, 1);
    }
    let arr = [...map];
    let res = [];
    while (1) {
        let temp = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][1] != 0) {
                temp.push(arr[i][0]);
                arr[i][1]--;
            }
        }
        if (!temp.length)
            return res;
        res.push(temp);
    }
}
exports.default = findMatrix;
//# sourceMappingURL=index.js.map
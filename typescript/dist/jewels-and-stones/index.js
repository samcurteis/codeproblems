"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numJewelsInStones = void 0;
function numJewelsInStones(jewels, stones) {
    let counter = 0;
    const stonesArray = stones.split('');
    for (let i = 0; i < stonesArray.length; i++) {
        if (jewels.includes(stonesArray[i])) {
            counter++;
        }
    }
    return counter;
}
exports.numJewelsInStones = numJewelsInStones;
;
//# sourceMappingURL=index.js.map
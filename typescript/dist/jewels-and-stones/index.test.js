"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
it('Checks that the function states how many jewels are in the stones string', () => {
    const testCases = {
        1: {
            jewels: 'aA',
            stones: 'aAAbbbb'
        },
        2: {
            jewels: 'z',
            stones: 'ZZ'
        }
    };
    expect((0, index_1.numJewelsInStones)(testCases[1].jewels, testCases[1].stones)).toEqual(3);
    expect((0, index_1.numJewelsInStones)(testCases[2].jewels, testCases[2].stones)).toEqual(0);
});
//# sourceMappingURL=index.test.js.map
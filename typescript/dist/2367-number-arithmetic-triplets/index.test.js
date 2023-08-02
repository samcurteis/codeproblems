"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
it('Checks that the function returns the number of possible arithmetic triplets in the array', () => {
    const testCase1 = {
        nums: [0, 1, 4, 6, 7, 10],
        diff: 3,
        output: 2
    };
    const testCase2 = {
        nums: [4, 5, 6, 7, 8, 9],
        diff: 2,
        output: 2
    };
    expect((0, index_1.default)(testCase1.nums, testCase1.diff)).toBe(testCase1.output);
    expect((0, index_1.default)(testCase2.nums, testCase2.diff)).toBe(testCase2.output);
});
//# sourceMappingURL=index.test.js.map
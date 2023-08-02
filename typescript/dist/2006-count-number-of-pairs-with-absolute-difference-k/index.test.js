"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
it('checks to see if the function returns the amount of pairs in an array with an absolute difference of k', () => {
    const testCase1 = {
        nums: [1, 2, 2, 1],
        k: 1,
        output: 4
    };
    const testCase2 = {
        nums: [1, 3],
        k: 3,
        output: 0
    };
    expect((0, index_1.default)(testCase1.nums, testCase1.k)).toBe(testCase1.output);
    expect((0, index_1.default)(testCase2.nums, testCase2.k)).toBe(testCase2.output);
});
//# sourceMappingURL=index.test.js.map
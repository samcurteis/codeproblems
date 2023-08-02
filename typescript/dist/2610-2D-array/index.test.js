"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
it('Checks the function returns a 2D array with minimal rows of distinct integers', () => {
    const testCases = {
        1: {
            input: [1, 3, 4, 1, 2, 3, 1],
            output: [[1, 3, 4, 2], [1, 3], [1]]
        },
        2: {
            input: [1, 2, 3, 4],
            output: [[1, 2, 3, 4]]
        }
    };
    expect((0, index_1.default)(testCases[1].input)).toEqual(testCases[1].output);
    expect((0, index_1.default)(testCases[2].input)).toEqual(testCases[2].output);
});
//# sourceMappingURL=index.test.js.map
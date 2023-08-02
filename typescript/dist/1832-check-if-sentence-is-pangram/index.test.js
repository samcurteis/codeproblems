"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
it('checks to see if the given string contains all the letters of the alphabet', () => {
    const testCase1 = {
        sentence: "thequickbrownfoxjumpsoverthelazydog",
        output: true
    };
    const testCase2 = {
        sentence: "leetcode",
        output: false
    };
    expect((0, index_1.default)(testCase1.sentence)).toBe(testCase1.output);
    expect((0, index_1.default)(testCase2.sentence)).toBe(testCase2.output);
});
//# sourceMappingURL=index.test.js.map
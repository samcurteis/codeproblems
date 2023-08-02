"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
it('Checks that decodeMessage successfully decodes the message using the corresponding key', () => {
    const testCase1 = {
        key: "the quick brown fox jumps over the lazy dog",
        message: "vkbs bs t suepuv",
        output: "this is a secret"
    };
    expect((0, index_1.default)(testCase1.key, testCase1.message)).toMatch(testCase1.output);
});
//# sourceMappingURL=index.test.js.map
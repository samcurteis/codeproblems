"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkIfPangram(sentence) {
    const set = new Set();
    for (let i = 0; i < sentence.length; i++) {
        set.add(sentence[i]);
    }
    const sizeOfAlphabet = 26;
    if (set.size === sizeOfAlphabet)
        return true;
    return false;
}
exports.default = checkIfPangram;
//# sourceMappingURL=index.js.map
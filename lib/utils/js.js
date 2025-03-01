"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstArrayDuplicate = void 0;
function getFirstArrayDuplicate(array) {
    var seenValues = new Set();
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var entry = array_1[_i];
        if (seenValues.has(entry)) {
            return entry;
        }
        else {
            seenValues.add(entry);
        }
    }
}
exports.getFirstArrayDuplicate = getFirstArrayDuplicate;
//# sourceMappingURL=js.js.map
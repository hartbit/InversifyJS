define(["require", "exports", "../constants/error_msgs"], function (require, exports, ERROR_MSGS) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tryAndThrowErrorIfStackOverflow = exports.isStackOverflowExeption = void 0;
    function isStackOverflowExeption(error) {
        return (error instanceof RangeError ||
            error.message === ERROR_MSGS.STACK_OVERFLOW);
    }
    exports.isStackOverflowExeption = isStackOverflowExeption;
    var tryAndThrowErrorIfStackOverflow = function (fn, errorCallback) {
        try {
            return fn();
        }
        catch (error) {
            if (isStackOverflowExeption(error)) {
                error = errorCallback();
            }
            throw error;
        }
    };
    exports.tryAndThrowErrorIfStackOverflow = tryAndThrowErrorIfStackOverflow;
});
//# sourceMappingURL=exceptions.js.map
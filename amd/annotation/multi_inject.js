define(["require", "exports", "../constants/metadata_keys", "./inject_base"], function (require, exports, METADATA_KEY, inject_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiInject = void 0;
    var multiInject = inject_base_1.injectBase(METADATA_KEY.MULTI_INJECT_TAG);
    exports.multiInject = multiInject;
});
//# sourceMappingURL=multi_inject.js.map
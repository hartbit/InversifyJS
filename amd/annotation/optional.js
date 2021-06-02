define(["require", "exports", "../constants/metadata_keys", "../planning/metadata", "./decorator_utils"], function (require, exports, METADATA_KEY, metadata_1, decorator_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.optional = void 0;
    function optional() {
        return decorator_utils_1.createTaggedDecorator(new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true));
    }
    exports.optional = optional;
});
//# sourceMappingURL=optional.js.map
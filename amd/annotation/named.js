define(["require", "exports", "../constants/metadata_keys", "../planning/metadata", "./decorator_utils"], function (require, exports, METADATA_KEY, metadata_1, decorator_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.named = void 0;
    function named(name) {
        return decorator_utils_1.createTaggedDecorator(new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name));
    }
    exports.named = named;
});
//# sourceMappingURL=named.js.map
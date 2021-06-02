"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.named = void 0;
const METADATA_KEY = require("../constants/metadata_keys");
const metadata_1 = require("../planning/metadata");
const decorator_utils_1 = require("./decorator_utils");
function named(name) {
    return decorator_utils_1.createTaggedDecorator(new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name));
}
exports.named = named;
//# sourceMappingURL=named.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optional = void 0;
const METADATA_KEY = require("../constants/metadata_keys");
const metadata_1 = require("../planning/metadata");
const decorator_utils_1 = require("./decorator_utils");
function optional() {
    return decorator_utils_1.createTaggedDecorator(new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true));
}
exports.optional = optional;
//# sourceMappingURL=optional.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiInject = void 0;
const METADATA_KEY = require("../constants/metadata_keys");
const inject_base_1 = require("./inject_base");
const multiInject = inject_base_1.injectBase(METADATA_KEY.MULTI_INJECT_TAG);
exports.multiInject = multiInject;
//# sourceMappingURL=multi_inject.js.map
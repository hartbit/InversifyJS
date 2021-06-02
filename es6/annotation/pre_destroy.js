"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preDestroy = void 0;
const ERRORS_MSGS = require("../constants/error_msgs");
const METADATA_KEY = require("../constants/metadata_keys");
const property_event_decorator_1 = require("./property_event_decorator");
const preDestroy = property_event_decorator_1.propertyEventDecorator(METADATA_KEY.PRE_DESTROY, ERRORS_MSGS.MULTIPLE_PRE_DESTROY_METHODS);
exports.preDestroy = preDestroy;
//# sourceMappingURL=pre_destroy.js.map
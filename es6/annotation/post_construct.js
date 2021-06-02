"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postConstruct = void 0;
const ERRORS_MSGS = require("../constants/error_msgs");
const METADATA_KEY = require("../constants/metadata_keys");
const property_event_decorator_1 = require("./property_event_decorator");
const postConstruct = property_event_decorator_1.propertyEventDecorator(METADATA_KEY.POST_CONSTRUCT, ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
exports.postConstruct = postConstruct;
//# sourceMappingURL=post_construct.js.map
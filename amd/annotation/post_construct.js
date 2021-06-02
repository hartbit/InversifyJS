define(["require", "exports", "../constants/error_msgs", "../constants/metadata_keys", "./property_event_decorator"], function (require, exports, ERRORS_MSGS, METADATA_KEY, property_event_decorator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.postConstruct = void 0;
    var postConstruct = property_event_decorator_1.propertyEventDecorator(METADATA_KEY.POST_CONSTRUCT, ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
    exports.postConstruct = postConstruct;
});
//# sourceMappingURL=post_construct.js.map
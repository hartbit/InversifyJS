define(["require", "exports", "../constants/error_msgs", "../constants/metadata_keys", "./property_event_decorator"], function (require, exports, ERRORS_MSGS, METADATA_KEY, property_event_decorator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.preDestroy = void 0;
    var preDestroy = property_event_decorator_1.propertyEventDecorator(METADATA_KEY.PRE_DESTROY, ERRORS_MSGS.MULTIPLE_PRE_DESTROY_METHODS);
    exports.preDestroy = preDestroy;
});
//# sourceMappingURL=pre_destroy.js.map
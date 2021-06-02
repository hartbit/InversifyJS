"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaggedDecorator = exports.tagProperty = exports.tagParameter = exports.decorate = void 0;
const ERROR_MSGS = require("../constants/error_msgs");
const METADATA_KEY = require("../constants/metadata_keys");
const js_1 = require("../utils/js");
function targetIsConstructorFunction(target) {
    return target.prototype !== undefined;
}
function _throwIfMethodParameter(parameterName) {
    if (parameterName !== undefined) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
    }
}
function tagParameter(annotationTarget, parameterName, parameterIndex, metadata) {
    _throwIfMethodParameter(parameterName);
    _tagParameterOrProperty(METADATA_KEY.TAGGED, annotationTarget, parameterIndex.toString(), metadata);
}
exports.tagParameter = tagParameter;
function tagProperty(annotationTarget, propertyName, metadata) {
    if (targetIsConstructorFunction(annotationTarget)) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
    }
    _tagParameterOrProperty(METADATA_KEY.TAGGED_PROP, annotationTarget.constructor, propertyName, metadata);
}
exports.tagProperty = tagProperty;
function _ensureNoMetadataKeyDuplicates(metadata) {
    let metadatas = [];
    if (Array.isArray(metadata)) {
        metadatas = metadata;
        const duplicate = js_1.getFirstArrayDuplicate(metadatas.map(md => md.key));
        if (duplicate !== undefined) {
            throw new Error(`${ERROR_MSGS.DUPLICATED_METADATA} ${duplicate.toString()}`);
        }
    }
    else {
        metadatas = [metadata];
    }
    return metadatas;
}
function _tagParameterOrProperty(metadataKey, annotationTarget, key, metadata) {
    const metadatas = _ensureNoMetadataKeyDuplicates(metadata);
    let paramsOrPropertiesMetadata = {};
    if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
    }
    let paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
    if (paramOrPropertyMetadata === undefined) {
        paramOrPropertyMetadata = [];
    }
    else {
        for (const m of paramOrPropertyMetadata) {
            if (metadatas.some(md => md.key === m.key)) {
                throw new Error(`${ERROR_MSGS.DUPLICATED_METADATA} ${m.key.toString()}`);
            }
        }
    }
    paramOrPropertyMetadata.push(...metadatas);
    paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
    Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}
function createTaggedDecorator(metadata) {
    return (target, targetKey, indexOrPropertyDescriptor) => {
        if (typeof indexOrPropertyDescriptor === "number") {
            tagParameter(target, targetKey, indexOrPropertyDescriptor, metadata);
        }
        else {
            tagProperty(target, targetKey, metadata);
        }
    };
}
exports.createTaggedDecorator = createTaggedDecorator;
function _decorate(decorators, target) {
    Reflect.decorate(decorators, target);
}
function _param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function decorate(decorator, target, parameterIndexOrProperty) {
    if (typeof parameterIndexOrProperty === "number") {
        _decorate([_param(parameterIndexOrProperty, decorator)], target);
    }
    else if (typeof parameterIndexOrProperty === "string") {
        Reflect.decorate([decorator], target, parameterIndexOrProperty);
    }
    else {
        _decorate([decorator], target);
    }
}
exports.decorate = decorate;
//# sourceMappingURL=decorator_utils.js.map
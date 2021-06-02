"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveInstance = void 0;
const error_msgs_1 = require("../constants/error_msgs");
const literal_types_1 = require("../constants/literal_types");
const METADATA_KEY = require("../constants/metadata_keys");
const async_1 = require("../utils/async");
function _resolveRequests(childRequests, resolveRequest) {
    return childRequests.reduce((resolvedRequests, childRequest) => {
        const injection = resolveRequest(childRequest);
        const targetType = childRequest.target.type;
        if (targetType === literal_types_1.TargetTypeEnum.ConstructorArgument) {
            resolvedRequests.constructorInjections.push(injection);
        }
        else {
            resolvedRequests.propertyRequests.push(childRequest);
            resolvedRequests.propertyInjections.push(injection);
        }
        if (!resolvedRequests.isAsync) {
            resolvedRequests.isAsync = async_1.isPromiseOrContainsPromise(injection);
        }
        return resolvedRequests;
    }, { constructorInjections: [], propertyInjections: [], propertyRequests: [], isAsync: false });
}
function _createInstance(constr, childRequests, resolveRequest) {
    let result;
    if (childRequests.length > 0) {
        const resolved = _resolveRequests(childRequests, resolveRequest);
        const createInstanceWithInjectionsArg = Object.assign(Object.assign({}, resolved), { constr });
        if (resolved.isAsync) {
            result = createInstanceWithInjectionsAsync(createInstanceWithInjectionsArg);
        }
        else {
            result = createInstanceWithInjections(createInstanceWithInjectionsArg);
        }
    }
    else {
        result = new constr();
    }
    return result;
}
function createInstanceWithInjections(args) {
    const instance = new args.constr(...args.constructorInjections);
    args.propertyRequests.forEach((r, index) => {
        const property = r.target.identifier;
        const injection = args.propertyInjections[index];
        instance[property] = injection;
    });
    return instance;
}
function createInstanceWithInjectionsAsync(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const constructorInjections = yield possiblyWaitInjections(args.constructorInjections);
        const propertyInjections = yield possiblyWaitInjections(args.propertyInjections);
        return createInstanceWithInjections(Object.assign(Object.assign({}, args), { constructorInjections, propertyInjections }));
    });
}
function possiblyWaitInjections(possiblePromiseinjections) {
    return __awaiter(this, void 0, void 0, function* () {
        const injections = [];
        for (const injection of possiblePromiseinjections) {
            if (Array.isArray(injection)) {
                injections.push(Promise.all(injection));
            }
            else {
                injections.push(injection);
            }
        }
        return Promise.all(injections);
    });
}
function _getInstanceAfterPostConstruct(constr, result) {
    const postConstructResult = _postConstruct(constr, result);
    if (async_1.isPromise(postConstructResult)) {
        return postConstructResult.then(() => result);
    }
    else {
        return result;
    }
}
function _postConstruct(constr, instance) {
    if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
        const data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
        try {
            return instance[data.value]();
        }
        catch (e) {
            throw new Error(error_msgs_1.POST_CONSTRUCT_ERROR(constr.name, e.message));
        }
    }
}
function _validateInstanceResolution(binding, constr) {
    if (binding.scope !== literal_types_1.BindingScopeEnum.Singleton) {
        _throwIfHandlingDeactivation(binding, constr);
    }
}
function _throwIfHandlingDeactivation(binding, constr) {
    const scopeErrorMessage = `Class cannot be instantiated in ${binding.scope === literal_types_1.BindingScopeEnum.Request ? "request" : "transient"} scope.`;
    if (typeof binding.onDeactivation === "function") {
        throw new Error(error_msgs_1.ON_DEACTIVATION_ERROR(constr.name, scopeErrorMessage));
    }
    if (Reflect.hasMetadata(METADATA_KEY.PRE_DESTROY, constr)) {
        throw new Error(error_msgs_1.PRE_DESTROY_ERROR(constr.name, scopeErrorMessage));
    }
}
function resolveInstance(binding, constr, childRequests, resolveRequest) {
    _validateInstanceResolution(binding, constr);
    const result = _createInstance(constr, childRequests, resolveRequest);
    if (async_1.isPromise(result)) {
        return result.then((resolvedResult) => _getInstanceAfterPostConstruct(constr, resolvedResult));
    }
    else {
        return _getInstanceAfterPostConstruct(constr, result);
    }
}
exports.resolveInstance = resolveInstance;
//# sourceMappingURL=instantiation.js.map
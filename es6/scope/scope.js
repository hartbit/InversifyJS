"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToScope = exports.tryGetFromScope = void 0;
const inversify_1 = require("../inversify");
const async_1 = require("../utils/async");
const tryGetFromScope = (requestScope, binding) => {
    if ((binding.scope === inversify_1.BindingScopeEnum.Singleton) && binding.activated) {
        return binding.cache;
    }
    if (binding.scope === inversify_1.BindingScopeEnum.Request &&
        requestScope !== null &&
        requestScope.has(binding.id)) {
        return requestScope.get(binding.id);
    }
    return null;
};
exports.tryGetFromScope = tryGetFromScope;
const saveToScope = (requestScope, binding, result) => {
    if (binding.scope === inversify_1.BindingScopeEnum.Singleton) {
        binding.cache = result;
        binding.activated = true;
        if (async_1.isPromise(result)) {
            result.catch((ex) => {
                binding.cache = null;
                binding.activated = false;
                throw ex;
            });
        }
    }
    if (binding.scope === inversify_1.BindingScopeEnum.Request &&
        requestScope !== null &&
        !requestScope.has(binding.id)) {
        requestScope.set(binding.id, result);
    }
};
exports.saveToScope = saveToScope;
//# sourceMappingURL=scope.js.map
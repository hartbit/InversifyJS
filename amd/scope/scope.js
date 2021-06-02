define(["require", "exports", "../inversify", "../utils/async"], function (require, exports, inversify_1, async_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.saveToScope = exports.tryGetFromScope = void 0;
    var tryGetFromScope = function (requestScope, binding) {
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
    var saveToScope = function (requestScope, binding, result) {
        if (binding.scope === inversify_1.BindingScopeEnum.Singleton) {
            binding.cache = result;
            binding.activated = true;
            if (async_1.isPromise(result)) {
                result.catch(function (ex) {
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
});
//# sourceMappingURL=scope.js.map
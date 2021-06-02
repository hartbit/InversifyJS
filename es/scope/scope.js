import { BindingScopeEnum } from "../inversify";
import { isPromise } from "../utils/async";
export var tryGetFromScope = function (requestScope, binding) {
    if ((binding.scope === BindingScopeEnum.Singleton) && binding.activated) {
        return binding.cache;
    }
    if (binding.scope === BindingScopeEnum.Request &&
        requestScope !== null &&
        requestScope.has(binding.id)) {
        return requestScope.get(binding.id);
    }
    return null;
};
export var saveToScope = function (requestScope, binding, result) {
    if (binding.scope === BindingScopeEnum.Singleton) {
        binding.cache = result;
        binding.activated = true;
        if (isPromise(result)) {
            result.catch(function (ex) {
                binding.cache = null;
                binding.activated = false;
                throw ex;
            });
        }
    }
    if (binding.scope === BindingScopeEnum.Request &&
        requestScope !== null &&
        !requestScope.has(binding.id)) {
        requestScope.set(binding.id, result);
    }
};
//# sourceMappingURL=scope.js.map
export declare const DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
export declare const DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
export declare const NULL_ARGUMENT = "NULL argument";
export declare const KEY_NOT_FOUND = "Key Not Found";
export declare const AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
export declare const CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
export declare const NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
export declare const MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
export declare const MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
export declare const UNDEFINED_INJECT_ANNOTATION: (name: string) => string;
export declare const CIRCULAR_DEPENDENCY = "Circular dependency found:";
export declare const NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
export declare const INVALID_BINDING_TYPE = "Invalid binding type:";
export declare const NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
export declare const INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
export declare const INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
export declare const LAZY_IN_SYNC: (key: unknown) => string;
export declare const INVALID_TO_SELF_VALUE: string;
export declare const INVALID_DECORATOR_OPERATION: string;
export declare const ARGUMENTS_LENGTH_MISMATCH: (...values: any[]) => string;
export declare const CONTAINER_OPTIONS_MUST_BE_AN_OBJECT: string;
export declare const CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE: string;
export declare const CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE: string;
export declare const CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK: string;
export declare const MULTIPLE_PRE_DESTROY_METHODS = "Cannot apply @preDestroy decorator multiple times in the same class";
export declare const MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
export declare const ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";
export declare const POST_CONSTRUCT_ERROR: (clazz: string, errorMessage: string) => string;
export declare const PRE_DESTROY_ERROR: (clazz: string, errorMessage: string) => string;
export declare const ON_DEACTIVATION_ERROR: (clazz: string, errorMessage: string) => string;
export declare const CIRCULAR_DEPENDENCY_IN_FACTORY: (factoryType: string, serviceIdentifier: string) => string;
export declare const STACK_OVERFLOW = "Maximum call stack size exceeded";

import { interfaces } from "../interfaces/interfaces";
export declare type ServiceIdentifierOrFunc = interfaces.ServiceIdentifier<any> | LazyServiceIdentifer;
export declare class LazyServiceIdentifer<T = any> {
    private _cb;
    constructor(cb: () => interfaces.ServiceIdentifier<T>);
    unwrap(): interfaces.ServiceIdentifier<T>;
}

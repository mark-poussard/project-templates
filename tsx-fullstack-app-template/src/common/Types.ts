export type Nullable<T> = T | null;
export type Klass<T> = new (...args : any[]) => T;
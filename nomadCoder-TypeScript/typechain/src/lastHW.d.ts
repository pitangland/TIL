interface Predicate<T> {
  value: T;
  index: number;
  array: Array<T>;
}

interface Iteratee<T> {
  value: T;
  index: number;
  array: Array<T>;
}

declare module "lodash" {
  function head(array: []): number | undefined;
  function hasIn(object: object, key: string): boolean;
  function isBoolean(value: boolean | null): boolean;
  function toString<T>(value: T): string;
  function split(string: string, separator: RegExp | string, limit: number): [];
  function hasPath<T>(object: object, path: Array<T> | string): boolean;
  function filter<T>(array: Array<T>, predicate: Predicate<T>): Array<T>;
  function every<T>(array: Array<T>, predicate: Predicate<T>): boolean;
  function map<T>(array: Array<T>, iteratee: Iteratee<T>): Array<T>;
}

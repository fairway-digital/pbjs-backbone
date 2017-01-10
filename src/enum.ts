/// <reference path="../node_modules/@types/backbone/index.d.ts" />

namespace PBB.enumeration {
  let enumStore = {};

  export function get(pkg: string, name: string): any {
    return enumStore[`.${pkg}.${name}`];
  }

  export function push(obj: any) {
    if (!enumStore[obj.fullName]) {
      enumStore[obj.fullName] = {};
    }

    enumStore[obj.fullName] = obj.values;
  }
}


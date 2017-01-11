/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="utils.ts" />

namespace PBB.enumeration {

  const store = new MemoryStore();

  export function get(pkg: string, name: string): any {
    const fullName = utils.fullName(pkg, name);

    return store.get(fullName);
  }

  export function push(obj: any) {
    store.push(obj.fullName, obj.values);
  }
}


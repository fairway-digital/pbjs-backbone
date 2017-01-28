/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="utils.ts" />

namespace shaft.enumeration {

  const store = new MemoryStore();

  /**
   * Retrive an Enum from the Store.
   *
   * @param pkg Package name of the Enum to retrieve.
   * @param obj Name of the Enum to retrieve.
   * @return Enumeration
   */
  export function get(pkg: string, name: string): any {
    const fullName = utils.fullName(pkg, name);

    return store.get(fullName);
  }

  /**
   * Push an Enum into the enumerations store.
   *
   * @param obj The Enum to store.
   */
  export function push(obj: any) {
    store.push(obj.fullName, obj.values);
  }
}


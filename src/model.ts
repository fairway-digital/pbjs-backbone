/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

import MemoryStore = shaft.utils.MemoryStore;

namespace shaft.model {

  interface ShaftModel {
    new () : ShaftModel;
  }

  const store = new MemoryStore();

  export function get(pkg: string, name: string): ShaftModel {
    const fullName = utils.fullName(pkg, name);

    return store.get(fullName);
  }

  export function push(key: string, classObj: any) {
    store.push(key, classObj);
  }

  export function build(pbjsObj: any) {
    class Class extends Backbone.Model {
      defaults() {
        return shaft.builder.defaults(pbjsObj);
      }
    }

    if (pbjsObj.nested) {
      Object.keys(pbjsObj.nested).forEach((key) => {
        const nestedField = pbjsObj.nested[key];

        if (shaft.utils.isEnum(nestedField)) {
          Class.prototype[nestedField.name] = nestedField.values;
        }
      });
    }

    return Class;
  }

}

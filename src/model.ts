/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

import MemoryStore = PBB.utils.MemoryStore;

namespace PBB.model {

  const store = new MemoryStore();

  export function get(pkg: string, name: string): Backbone.Model {
    const fullName = `.${pkg}.${name}`;

    return store.get(fullName);
  }

  export function push(protoObj: any, classObj: any) {
    store.push(protoObj.fullName, classObj);
  }

  export function build(pbjsObj: any) {
    class Class extends Backbone.Model {
      defaults() {
        return PBB.builder.defaults(pbjsObj);
      }
    }

    if (pbjsObj.nested) {
      Object.keys(pbjsObj.nested).forEach((key) => {
        const nestedField = pbjsObj.nested[key];

        if (PBB.utils.isEnum(nestedField)) {
          Class.prototype[nestedField.name] = nestedField.values;
        }
      });
    }

    return Class;
  }

}

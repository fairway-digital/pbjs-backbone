/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace PBB {

  let typeStore = {};
  let enumStore = {};

  export function getModel(pkg: string, name: string): Backbone.Model {
    return typeStore[pkg][`Type .${pkg}.${name}`];
  }

  export function getEnum(pkg: string, name: string): any {
    return enumStore[pkg][`.${pkg}.${name}`];
  }

  export function getCollection(pkg: string, name: string): any {
    const Model = PBB.getModel(pkg, name);

    const Collection = Backbone.Collection.extend({
      model: Model
    });

    return Collection;
  }

  export function load(root: any): void {
    const packageName = root.name;
    const objects = root.nested;

    Object.keys(objects).forEach((msg) => {
      const pbjsObj = objects[msg];

      if (!PBB.utils.isEnum(pbjsObj)) {
        typeStore[packageName] = {};

        class Class extends Backbone.Model {
          fullName = `${packageName}.${pbjsObj}`;
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

        typeStore[packageName][pbjsObj] = Class;
      } else {
        enumStore[packageName] = {};
        enumStore[packageName][pbjsObj.fullName] = PBB.builder.enumeration(pbjsObj);
      }
    });
  }

}

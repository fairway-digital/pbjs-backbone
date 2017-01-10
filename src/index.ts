/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace PBB {

  export function load(root: any): void {
    const packageName = root.name;
    const objects = root.nested;

    Object.keys(objects).forEach((msg) => {
      const pbjsObj = objects[msg];

      if (PBB.utils.isEnum(pbjsObj)) {
        PBB.enumeration.push(pbjsObj);
      } else {
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

        PBB.model.push(Class, pbjsObj);
      }
    });
  }

}

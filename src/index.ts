/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace PBB {

  let store = {};
  let enumStore = {};

  export function getModel(pkg: string, name: string): Backbone.Model {
    return store[pkg][`Type .${pkg}.${name}`];
  }

  export function getEnum(pkg: string, name: string): any {
    return enumStore[pkg][`.${pkg}.${name}`];
  }

  export function load(root: any): void {
    const packageName = Object.keys(root.nested)[0];
    const messages = root.nested[packageName].nested;

    Object.keys(messages).forEach((msg) => {
      const message = messages[msg];

      if (!PBB.utils.isEnum(message)) {
        store[packageName] = {};

        class Class extends Backbone.Model {
          fullName = `${packageName}.${message}`;
          defaults() {
            return PBB.builder.defaults(message);
          }
        }

        if (message.nested) {
          Object.keys(message.nested).forEach((key) => {
            const nestedField = message.nested[key];

            if (PBB.utils.isEnum(nestedField)) {
              Class.prototype[nestedField.name] = nestedField.values;
            }
          });
        }

        store[packageName][message] = Class;
      } else {
        enumStore[packageName] = {};
        enumStore[packageName][message.fullName] = PBB.builder.enumeration(message);
      }
    });
  }

}

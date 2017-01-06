/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace PBB {

  let store = {};
  let enumStore = {};

  export function getModel(pkg, name) {
    return store[pkg]["Type ." + pkg + "." + name];
  }

  export function getEnum(pkg, name) {
    return enumStore[pkg]["." + pkg + "." + name];
  }

  export function load(root) {
    let packageName = Object.keys(root.nested)[0];
    let messages = root.nested[packageName].nested;

    Object.keys(messages).forEach((msg) => {
      let message = messages[msg];

      if (!PBB.utils.isEnum(message)) {
        store[packageName] = {};
        class Class extends Backbone.Model {
          fullName = packageName + "." + message;
          defaults() {
            return PBB.builder.defaults(message);
          }
        }

        store[packageName][message] = Class;
      } else {
        enumStore[packageName] = {};
        enumStore[packageName][message.fullName] = PBB.builder.enumeration(message);
      }
    });
  }

}

/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />

namespace PBB {

  let store = {};

  export function getModel(pkg, name) {
    return store[pkg]["Type ." + pkg + "." + name];
  }

  export function load(root) {
    let packageName = Object.keys(root.nested)[0];
    store[packageName] = {};

    console.log("package name: ", packageName);

    let messages = root.nested[packageName].nested;
    console.log("messages: ", messages);

    Object.keys(messages).forEach((msg) => {
      let message = messages[msg];

      console.log("message: ", message);
      console.log("message defaults: ", PBB.builder.defaults(message));
      console.log("message obj", messages[message]);

      class Class extends Backbone.Model {
        fullName = packageName + "." + message;
        defaults() {
          return PBB.builder.defaults(message);
        }
      }

      store[packageName][message] = Class;
    });
  }


}

/// <reference path="../node_modules/@types/backbone/index.d.ts" />

namespace PBB.builder {

  export function defaults(message) {
    let defaults = {};

    Object.keys(message.fields).forEach((fieldName) => {
      const field = message.fields[fieldName];

      if (field.type === "string") {
        defaults[field.name] = "";
      }
    });

    return defaults;
  }

}

namespace PBB {

  let Messages = {};

  export function getModel(pkg, name) {
    return Messages[pkg]["Type ." + pkg + "." + name];
  }

  export function load(root) {
    let packageName = Object.keys(root.nested)[0];
    Messages[packageName] = {};

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
          let defaults = {};

          Object.keys(message.fields).forEach((fieldName) => {
            const field = message.fields[fieldName];

            if (field.type === "string") {
              defaults[field.name] = "";
            }
          });

          return defaults;
        }
      }

      Messages[packageName][message] = Class;
    });
  }


}

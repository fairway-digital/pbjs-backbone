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

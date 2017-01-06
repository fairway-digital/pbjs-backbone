/// <reference path="../node_modules/@types/backbone/index.d.ts" />

namespace PBB.builder {

  export function defaults(message: any): any {
    let defaults = {};

    Object.keys(message.fields).forEach((fieldName) => {
      const field = message.fields[fieldName];

      if (PBB.utils.isScalarType(field)) {
        if (field.type === "string") {
          defaults[field.name] = "";
        }
        else if (field.type === "bool") {
          defaults[field.name] = false;
        }
        else if (field.type === "double"
          || field.type === "float" || field.type === "int32") {
            defaults[field.name] = 0;
          }
      } else {
        defaults[field.name] = field.id;
      }

    });

    return defaults;
  }

}

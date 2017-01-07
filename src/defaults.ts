/// <reference path="../node_modules/@types/backbone/index.d.ts" />

namespace PBB.builder {

  type ScalarType = String | Boolean | Number;

  function buildScalarDefault(field: any): ScalarType |  undefined {
    switch (field.type) {
      case "string":
        return "";
      case "bool":
        return false;
      case "double":
      case "float":
      case "int32":
        return 0;
      default:
        return;
    }
  }

  function buildDefault(field: any): any {
    if (PBB.utils.isScalarType(field)) {
      return buildScalarDefault(field);
    } else {
      return field.id;
    }
  }

  export function defaults(message: any): any {
    let defaults = {};

    Object.keys(message.fields).forEach((fieldName) => {
      const field = message.fields[fieldName];

      defaults[field.name] = buildDefault(field);
    });

    return defaults;
  }

}

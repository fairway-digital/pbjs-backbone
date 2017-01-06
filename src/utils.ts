/// <reference path="../node_modules/@types/backbone/index.d.ts" />

namespace PBB.utils {

  export function isEnum(protoObj) {
    return protoObj.hasOwnProperty("values") && protoObj.hasOwnProperty("valuesById");
  }

  export function isScalarType(protoObj) {
    switch (protoObj.type) {
      case "string":
      case "bool":
      case "double":
      case "float":
      case "int32":
        return true;
      default:
        return false;
    }
  }

  export function fullNamePkg(fullname: string) {
    let tokens = fullname.split(".");

    return tokens[1];
  }

  export function fullNameName(fullname: string) {
    let tokens = fullname.split(".");

    return tokens[2];
  }
}

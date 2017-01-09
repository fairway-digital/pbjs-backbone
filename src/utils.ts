/// <reference path="../node_modules/@types/backbone/index.d.ts" />

namespace PBB.utils {

  export function isEnum(protoObj: any): boolean {
    return (typeof protoObj.values !== "undefined")
    && (typeof protoObj.valuesById !== "undefined");
  }

  export function isScalarType(protoObj: any): boolean {
    return protobuf.types.basic.hasOwnProperty(protoObj.type);
  }

  export function fullNamePkg(fullname: string) {
    const tokens = fullname.split(".");

    return tokens[1];
  }

  export function fullNameName(fullname: string) {
    const tokens = fullname.split(".");

    return tokens[2];
  }
}

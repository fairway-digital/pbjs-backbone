/// <reference path="../node_modules/@types/backbone/index.d.ts" />

namespace PBB.utils {

  export function isEnum(protoObj: any): boolean {
    return (typeof protoObj.values !== "undefined")
    && (typeof protoObj.valuesById !== "undefined");
  }

  export function isScalarType(protoObj: any): boolean {
    return protobuf.types.basic.hasOwnProperty(protoObj.type);
  }

}

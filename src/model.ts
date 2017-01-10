
/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace PBB.model {

  let modelStore = {};

  export function get(pkg: string, name: string): Backbone.Model {
    return modelStore[`.${pkg}.${name}`];
  }

  export function push(classObj: any, obj: any) {
    if (!modelStore[obj.fullName]) {
      modelStore[obj.fullName] = {};
    }

    modelStore[obj.fullName] = classObj;
  }

}

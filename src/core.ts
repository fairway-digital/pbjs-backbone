/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace PBB {

  export function load(root: any): void {
    const objects = root.nested;

    Object.keys(objects).forEach((msg) => {
      const pbjsObj = objects[msg];

      if (PBB.utils.isEnum(pbjsObj)) {
        PBB.enumeration.push(pbjsObj);
      } else {
        const Class = PBB.model.build(pbjsObj);

        PBB.model.push(Class, pbjsObj);
      }
    });
  }

}

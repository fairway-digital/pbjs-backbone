/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace shaft {

  export function load(root: any): void {
    const objects = root.nested;

    Object.keys(objects).forEach((msg) => {
      const pbjsObj = objects[msg];

      if (shaft.utils.isEnum(pbjsObj)) {
        shaft.enumeration.push(pbjsObj);
      } else {
        const Class = shaft.model.build(pbjsObj);

        shaft.model.push(pbjsObj, Class);
      }
    });
  }

}

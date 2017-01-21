/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace shaft {

  function loadObj(objects: any) {
    Object.keys(objects).forEach((msg) => {
      const pbjsObj = objects[msg];

      if (shaft.utils.isEnum(pbjsObj)) {
        shaft.enumeration.push(pbjsObj);
      } else {
        const Class = shaft.model.build(pbjsObj);

        if (pbjsObj.fields) {
          Object.keys(pbjsObj.fields).forEach((f) => {
            if (!shaft.utils.isScalarType(pbjsObj.fields[f])
                &&  !shaft.utils.isEnum(pbjsObj.fields[f])) {
                  loadObj(pbjsObj.fields);
                }
          });
        }

        shaft.model.push(pbjsObj.fullName, Class);
      }
    });
  }

  export function load(root: any): void {
    const objects = root.nested;

    loadObj(objects);

  }

}

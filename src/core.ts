/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

namespace shaft {

  function loadFieldsObj(pbjsObj: any) {
    Object.keys(pbjsObj.fields).forEach((f) => {
      const field = pbjsObj.fields[f];
      const isFieldScalar = shaft.utils.isScalarType(field);
      const isFieldEnum = shaft.utils.isEnum(field);

      if (!isFieldScalar && !isFieldEnum) {
        loadObj(pbjsObj.fields);
      }
    });
  }

  function loadObj(objects: any) {
    Object.keys(objects).forEach((msg) => {
      const pbjsObj = objects[msg];

      if (shaft.utils.isEnum(pbjsObj)) {
        shaft.enumeration.push(pbjsObj);
      } else {
        const Class = shaft.model.build(pbjsObj);

        if (pbjsObj.fields) {
          loadFieldsObj(pbjsObj);
        }

        shaft.model.push(pbjsObj.fullName, Class);
      }
    });
  }

  export function load(root: any): void {
    loadObj(root.nested);
  }

}

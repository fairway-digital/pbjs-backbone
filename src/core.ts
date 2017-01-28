/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="../node_modules/@types/es6-promise/index.d.ts" />
/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />

/**
 * Root namespace.
 */
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

  /**
   * This method loads a proto definition so that any Message defintion from it
   * can be generated as Backbone Object.
   *
   * @param root Protobufjs root object.
   */
  export function load(root: any): void {
    loadObj(root.nested);
  }

  /**
   * This method loads a list of proto definition so that any
   * Message defintion from it can be generated as Backbone Object.
   *
   * @param protos Protobufjs root object.
   */
  export function loadAll(protos: any): void {
    for (let p in protos.nested) {
      shaft.load(protos.nested[p]);
    }
  }
}

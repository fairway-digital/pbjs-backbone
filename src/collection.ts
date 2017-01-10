/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />
/// <reference path="model.ts" />

namespace PBB.collection {

  let collectionStore = {};

  function buildCollection(pkg: string, name: string): any {
    const Model = PBB.model.get(pkg, name);

    const Collection = Backbone.Collection.extend({
      model: Model
    });

    return Collection;
  }

  function push(collection: any, fullName) {
    if (!collectionStore[fullName]) {
      collectionStore[fullName] = {};
    }

    collectionStore[fullName] = collection;
  }

  export function get(pkg: string, name: string): Backbone.Model {
    const fullName = `.${pkg}.${name}`;

    if (collectionStore[fullName]) {
      return collectionStore[fullName];
    } else {
      const collection = buildCollection(pkg, name);

      push(collection, fullName);

      return collection;
    }
  }

}

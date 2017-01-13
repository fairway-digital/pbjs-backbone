/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />
/// <reference path="model.ts" />

namespace PBB.collection {

  interface PBBCollection {
    new () : PBBCollection;
  }

  const store = new MemoryStore();

  function buildCollection(pkg: string, name: string): any {
    const Model = PBB.model.get(pkg, name);
    const Collection = Backbone.Collection.extend({
      model: Model
    });

    return Collection;
  }

  export function get(pkg: string, name: string): PBBCollection {
    const fullName = utils.fullName(pkg, name);

    if (store.has(fullName)) {
      return store.get(fullName);
    } else {
      const Collection = buildCollection(pkg, name);

      store.push(fullName, Collection);

      return Collection;
    }
  }

}

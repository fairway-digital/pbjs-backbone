/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="defaults.ts" />
/// <reference path="utils.ts" />
/// <reference path="model.ts" />

namespace shaft.collection {

  interface ShaftCollection {
    new () : ShaftCollection;
  }

  const store = new MemoryStore();

  function buildCollection(pkg: string, name: string): any {
    const M = shaft.model.get(pkg, name);
    class Collection extends Backbone.Collection<any> {
      model= M;
    };

    return Collection;
  }

  /**
   * Retrive a Collection from the Collections store.
   *
   * @param pkg Package name of the Collection to retrieve.
   * @param obj Name of the Collection to retrieve.
   * @return Collection
   */
  export function get(pkg: string, name: string): ShaftCollection {
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

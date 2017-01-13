/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="../node_modules/protobufjs/index.d.ts" />

namespace PBB.builder {

  function buildDefault(field: any): any {
      if (field.type === "google.protobuf.Any") {
        return new Backbone.Model();
      } else if (field.options && field.options.default) {
        return field.options.default;
      } else if (PBB.utils.isScalarType(field)) {
        if (field.repeated) {
          return new Backbone.Collection();
        } else {
          return protobuf.types.defaults[field.type];
        }
      } else if (PBB.utils.isEnum(field)) {
        return;
      } else {
        /* TODO: make something cleaner */
        const fullName = field.fullName;
        const tokens = fullName.split(".");
        const pkg = tokens[1];
        const name = field.type;
        let Field = PBB.model.get(pkg, name);
        let Enum = PBB.enumeration.get(pkg, name);

        if (Field) {
          if (field.repeated) {
            const C = PBB.collection.get(pkg, name);

            return new C();
          } else {
            return new Field();
          }
        } else if (Enum) {
          return Enum;
        } else {
          return field.parent.nested[name].valuesById[0];
        }
      }
  }

  export function defaults(message: any): any {
    let defaults = {};

    Object.keys(message.fields).forEach((fieldName) => {
      const field = message.fields[fieldName];

      defaults[field.name] = buildDefault(field);
    });

    return defaults;
  }

}

/// <reference path="../node_modules/@types/backbone/index.d.ts" />
/// <reference path="../node_modules/protobufjs/index.d.ts" />
/// <reference path="./utils.ts" />

import utils = shaft.utils;

namespace shaft.builder {

  function buildDefault(field: any): any {
      if (utils.isAny(field)) {
        return new Backbone.Model();
      } else if (utils.hasDefault(field)) {
        return field.options.default;
      } else if (shaft.utils.isScalarType(field)) {
        if (utils.isRepeated(field)) {
          return new Backbone.Collection();
        } else {
          return protobuf.types.defaults[field.type];
        }
      } else if (shaft.utils.isEnum(field)) {
        return;
      } else {
        /* TODO: make something cleaner */
        const fullName = field.fullName;
        const tokens = fullName.split(".");
        const pkg = tokens[1];
        const name = field.type;
        let Field = shaft.model.get(pkg, name);
        let Enum = shaft.enumeration.get(pkg, name);

        if (Field) {
          if (field.repeated) {
            const C = shaft.collection.get(pkg, name);

            return new C();
          } else {
            return new Field();
          }
        } else if (Enum) {
          return Enum;
        } else {
          if (field.parent.nested) {
            return field.parent.nested[name].valuesById[0];
          } else {
            let lookupType = field.root.lookupType(field.parent.fields[field.name].type);
            let IF = shaft.model.build(lookupType);
            shaft.model.push("." + field.parent.fields[field.name].type, IF);

            return new IF();
          }
        }
      }
  }

  export function defaults(message: any): any {
    let defaults = {};

    if (message.fields) {
      Object.keys(message.fields).forEach((fieldName) => {
        const field = message.fields[fieldName];

        defaults[field.name] = buildDefault(field);
      });
    }

    return defaults;
  }

}

define([
  "underscore",
  "backbone"
], function(_, Backbone) {

  var Messages = {};

  function buildDefaults(message) {
    var defaults = {};

    _.each(_.keys(message.fields), function(fieldName) {
      var field = message.fields[fieldName];

      if (field.type === "string") {
        defaults[field.name] = "";
      }
    });

    return defaults;
  }

  return {
    get: function(pkg, name) {
      return Messages[pkg][name];
    },
    load: function(root) {
      var packageName = _.keys(root.nested)[0];
      Messages[packageName] = {};

      console.log("package name: ", packageName);

      var messages = root.nested[packageName].nested;
      console.log("messages: ", messages);

      _.each(_.keys(messages), function(message) {
        console.log("message: ", message);
        console.log("message defaults: ", buildDefaults(message));
        console.log("message obj", messages[message]);
        Messages[packageName][message] = Backbone.Model.extend({
          fullName: packageName + "." + message,
          defaults: buildDefaults(messages[message])
        });
      });

    }
  };
});

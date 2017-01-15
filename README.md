# WORK IN PROGRESS

# Travis

[![][travis-image]][travis-url]
[travis-image]: https://api.travis-ci.org/fairway-digital/pbjs-backbone.svg?branch=master
[travis-url]: https://api.travis-ci.org/fairway-digital/pbjs-backbone.svg?branch=master

# What

  * From Protocol buffer, generate Backbone Model and Collections (statically and dynamically).
  Model and Collections should be able to automatically:
  * Be initialize with defaults
  * Able to be validated (required fields, types etc..)
  * Synchonized (using services)

# How

  * From [protocol buffer specs](https://developers.google.com/protocol-buffers/).
  * Using [proto js](http://dcode.io/protobuf.js/) lib.

  ## Build

  Using [typescript](https://www.typescriptlang.org/)

  ```npm run build```

  ## Tests

  Using [jasmine](https://jasmine.github.io/)
  and [testem](https://github.com/testem/testem).

  ``` npm test ```

  Code coverage using [istanbuljs](https://github.com/gotwarlost/istanbul)

  ``` npm run coverage ```


[![Build Status](https://travis-ci.org/fairway-digital/shaft.svg?branch=master)](https://travis-ci.org/fairway-digital/shaft)
[![Dependencies](https://david-dm.org/fairway-digital/shaft.svg)](https://david-dm.org/fairway-digital/shaft)
[![npm](https://img.shields.io/npm/v/shaft.js.svg)](https://www.npmjs.com/package/shaft.js)


**Protocol Buffers** are a language-neutral, platform-neutral, extensible way of serializing structured data for use in communications protocols, data storage, and more, originally designed at Google ([see](https://developers.google.com/protocol-buffers/)).

Shaft, using [proto js](http://dcode.io/protobuf.js/) generates [Backbone](http://backbonejs.org/) Models and Collections from **Potocol Buffers**.

# Features

* Dynamic Message -> Backbone Model generation
* Nested Messages support
* Packages support
* Imported proto Message support
* Scalar types field support
* Defaults handling
* Any field support
* Enum (internal/external) field support
* Repeated fields support

# Contents

* [Usage](#usage)<br />
  How to include protobuf.js in your project.

* [Examples](#examples)<br />
  A few examples to get you started.

* [Documentation](#documentation)<br />
  A list of available documentation resources.

* [Building](#building)<br />
  How to build the library and its components yourself.

# Usage

## Installation

Shaft.js is directly available from npm.
```
npm install shaft.js
```

# Examples

## Requisite

Proto definitions must be loaded using [Protobuf-js](https://github.com/dcodeIO/protobuf.js), [cf examples here](https://github.com/dcodeIO/protobuf.js#using-proto-files).

## Loading

Shaft Models/Collections must be loaded from those proto definitions using ```loadAll``` method.

```protobuf
protobuf.load([
    "proto/pga-tour.proto",
    "proto/european-tour.proto"
], function(err, protos) {
  shaft.loadAll(protos);
});
```

If you only want to load some of the proto, then just use ```load```
```js
protobuf.load([
    "proto/pga_tour.proto",
    "proto/european_tour.proto"
], function(err, protos) {
  shaft.load(protos.pga_tour);
});
```

## Backbone Models and Collections

Given the following proto:
```protobuf
package pga;
syntax = "proto3";

message Player {
    string name = 1;
    int rank = 2;
}
```

Using shaft.js you can simply use Player Message as a plain Backbone Model:
```js
const Player = shaft.model.get("pga", "Player");
const tiger = new Player();
```

Same goes for Collections:
```js
const Players = shaft.model.get("pga", "Player");
const pgaAmericaPlayers = new Players();
pgaAmericaPlayers.add({
  name: "Jordan Spieth",
  rank: 1
});
pgaAmericaPlayers.add({
  name: "Phil Mickelson",
  rank: 2
});
```

## Enumerations

```protobuf
package golf;
syntax = "proto3";

enum ShotKind {
  PUTT:1,
  DRIVE: 2
}

message Player {
    string name = 1
    ShotKind speciality = 2;
}
```

Enumerations can be imported as plain objects:
```js
const ShotKind = shaft.enumeration.get("golf", "ShotKind");
// ShotKind = { PUTT:1, DRIVE: 2 }
```

But is automacally attached to a Message when defined as field.
```js
const Player = shaft.model.get("golf", "Player");
const dustin = new Player({ name: "Dustin Jonhson", speciality: "DRIVE" });
const jordan = new Player({ name: "Jordan Spieth", speciality: "PUTT" });
```

# Documentation

[API documentation](http://fairway.digital/dev/shaft/doc/1.2.0/)

# Building

To build the library or its components yourself, clone it from GitHub and install the development dependencies:

```
$> git clone https://github.com/fairway-digital/shaft
$> cd shaft.js
$> npm install
```


Building version to `dist/`:

```
$> npm run build
```

Building production version to `dist/`:

```
$> npm run uglify
```

Running tests in CI:

```
$> npm test
```

Running tests in DEV:

```
$> testem
```

Generate Code Coverage report to `coverage/lcov-report/index.html`:

```
$> npm run coverage
```

Building the documentation to `documentation/`:

```
$> npm run tsdoc
```

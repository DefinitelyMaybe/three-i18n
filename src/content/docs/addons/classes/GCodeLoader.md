---
editUrl: false
next: false
prev: false
title: "GCodeLoader"
---

Defined in: [three/addons/loaders/GCodeLoader.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GCodeLoader.js#L24)

A loader for the GCode format.

GCode files are usually used for 3D printing or CNC applications.

```js
const loader = new GCodeLoader();
const object = await loader.loadAsync( 'models/gcode/benchy.gcode' );
scene.add( object );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new GCodeLoader**(`manager`?): `GCodeLoader`

Defined in: [three/addons/loaders/GCodeLoader.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GCodeLoader.js#L31)

Constructs a new GCode loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`GCodeLoader`

#### Overrides

`Loader.constructor`

## Properties

### splitLayer

> **splitLayer**: `boolean`

Defined in: [three/addons/loaders/GCodeLoader.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GCodeLoader.js#L41)

Whether to split layers or not.

#### Default

```ts
false
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/GCodeLoader.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GCodeLoader.js#L54)

Starts loading from the given URL and passes the loaded GCode asset
to the `onLoad()` callback.

#### Parameters

##### url

`string`

The path/URL of the file to be loaded. This can also be a data URI.

##### onLoad

(`arg0`) => `any`

Executed when the loading process has been finished.

##### onProgress

`onProgressCallback`

Executed while the loading is in progress.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`void`

***

### parse()

> **parse**(`data`): `Group`

Defined in: [three/addons/loaders/GCodeLoader.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GCodeLoader.js#L94)

Parses the given GCode data and returns a group with lines.

#### Parameters

##### data

`string`

The raw Gcode data as a string.

#### Returns

`Group`

The parsed GCode asset.

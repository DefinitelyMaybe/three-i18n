---
editUrl: false
next: false
prev: false
title: "PCDLoader"
---

Defined in: [three/addons/loaders/PCDLoader.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PCDLoader.js#L34)

A loader for the Point Cloud Data (PCD) format.

PCDLoader supports ASCII and (compressed) binary files as well as the following PCD fields:
- x y z
- rgb
- normal_x normal_y normal_z
- intensity
- label

```js
const loader = new PCDLoader();

const points = await loader.loadAsync( './models/pcd/binary/Zaghetto.pcd' );
points.geometry.center(); // optional
points.geometry.rotateX( Math.PI ); // optional
scene.add( points );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new PCDLoader**(`manager`?): `PCDLoader`

Defined in: [three/addons/loaders/PCDLoader.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PCDLoader.js#L41)

Constructs a new PCD loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`PCDLoader`

#### Overrides

`Loader.constructor`

## Properties

### littleEndian

> **littleEndian**: `boolean`

Defined in: [three/addons/loaders/PCDLoader.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PCDLoader.js#L51)

Whether to use little Endian or not.

#### Default

```ts
true
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/PCDLoader.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PCDLoader.js#L64)

Starts loading from the given URL and passes the loaded PCD asset
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

> **parse**(`data`): `Points`

Defined in: [three/addons/loaders/PCDLoader.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PCDLoader.js#L105)

Parses the given PCD data and returns a point cloud.

#### Parameters

##### data

`ArrayBuffer`

The raw PCD data as an array buffer.

#### Returns

`Points`

The parsed point cloud.

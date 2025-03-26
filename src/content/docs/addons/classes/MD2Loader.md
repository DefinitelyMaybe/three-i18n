---
editUrl: false
next: false
prev: false
title: "MD2Loader"
---

Defined in: [three/addons/loaders/MD2Loader.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MD2Loader.js#L109)

A loader for the MD2 format.

The loader represents the animations of the MD2 asset as an array of animation
clips and stores them in the `animations` property of the geometry.

```js
const loader = new MD2Loader();
const geometry = await loader.loadAsync( './models/md2/ogro/ogro.md2' );

const animations = geometry.animations;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new MD2Loader**(`manager`?): `MD2Loader`

Defined in: [three/addons/loaders/MD2Loader.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MD2Loader.js#L116)

Constructs a new MD2 loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`MD2Loader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`?, `onError`?): `void`

Defined in: [three/addons/loaders/MD2Loader.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MD2Loader.js#L131)

Starts loading from the given URL and passes the loaded MD2 asset
to the `onLoad()` callback.

#### Parameters

##### url

`string`

The path/URL of the file to be loaded. This can also be a data URI.

##### onLoad

(`arg0`) => `any`

Executed when the loading process has been finished.

##### onProgress?

`onProgressCallback`

Executed while the loading is in progress.

##### onError?

`onErrorCallback`

Executed when errors occur.

#### Returns

`void`

***

### parse()

> **parse**(`buffer`): `BufferGeometry`

Defined in: [three/addons/loaders/MD2Loader.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MD2Loader.js#L172)

Parses the given MD2 data and returns a geometry.

#### Parameters

##### buffer

`ArrayBuffer`

The raw MD2 data as an array buffer.

#### Returns

`BufferGeometry`

The parsed geometry data.

---
editUrl: false
next: false
prev: false
title: "USDZLoader"
---

Defined in: [three/addons/loaders/USDZLoader.js:132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/USDZLoader.js#L132)

A loader for the USDZ format.

USDZ files that use USDC internally are not yet supported, only USDA.

```js
const loader = new USDZLoader();
const model = await loader.loadAsync( 'saeukkang.usdz' );
scene.add( model );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new USDZLoader**(`manager`?): `USDZLoader`

Defined in: [three/addons/loaders/USDZLoader.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/USDZLoader.js#L139)

Constructs a new USDZ loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`USDZLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/USDZLoader.js:154](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/USDZLoader.js#L154)

Starts loading from the given URL and passes the loaded USDZ asset
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

> **parse**(`buffer`): `Group`

Defined in: [three/addons/loaders/USDZLoader.js:195](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/USDZLoader.js#L195)

Parses the given USDZ data and returns the resulting group.

#### Parameters

##### buffer

`ArrayBuffer`

The raw USDZ data as an array buffer.

#### Returns

`Group`

The parsed asset as a group.

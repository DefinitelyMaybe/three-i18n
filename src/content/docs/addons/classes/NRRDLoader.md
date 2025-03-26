---
editUrl: false
next: false
prev: false
title: "NRRDLoader"
---

Defined in: [three/addons/loaders/NRRDLoader.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/NRRDLoader.js#L20)

A loader for the NRRD format.

```js
const loader = new NRRDLoader();
const volume = await loader.loadAsync( 'models/nrrd/I.nrrd' );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new NRRDLoader**(`manager`?): `NRRDLoader`

Defined in: [three/addons/loaders/NRRDLoader.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/NRRDLoader.js#L27)

Constructs a new NRRD loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`NRRDLoader`

#### Overrides

`Loader.constructor`

## Properties

### segmentation

> **segmentation**: `boolean`

Defined in: [three/addons/loaders/NRRDLoader.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/NRRDLoader.js#L84)

## Methods

### \_parseChars()

> **\_parseChars**(`array`, `start`, `end`): `string`

Defined in: [three/addons/loaders/NRRDLoader.js:519](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/NRRDLoader.js#L519)

#### Parameters

##### array

`any`

##### start

`any`

##### end

`any`

#### Returns

`string`

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/NRRDLoader.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/NRRDLoader.js#L42)

Starts loading from the given URL and passes the loaded NRRD asset
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

> **parse**(`data`): [`Volume`](/addons/classes/volume/)

Defined in: [three/addons/loaders/NRRDLoader.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/NRRDLoader.js#L94)

Parses the given NRRD data and returns the resulting volume data.

#### Parameters

##### data

`ArrayBuffer`

The raw NRRD data as an array buffer.

#### Returns

[`Volume`](/addons/classes/volume/)

The parsed volume.

***

### setSegmentation()

> **setSegmentation**(`segmentation`): `void`

Defined in: [three/addons/loaders/NRRDLoader.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/NRRDLoader.js#L82)

Toggles the segmentation mode.

#### Parameters

##### segmentation

`boolean`

Whether to use segmentation mode or not.

#### Returns

`void`

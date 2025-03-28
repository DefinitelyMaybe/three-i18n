---
editUrl: false
next: false
prev: false
title: "VRMLLoader"
---

Defined in: [three/addons/loaders/VRMLLoader.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VRMLLoader.js#L50)

A loader for the VRML format.

```js
const loader = new VRMLLoader();
const object = await loader.loadAsync( 'models/vrml/house.wrl' );
scene.add( object );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new VRMLLoader**(`manager`?): `VRMLLoader`

Defined in: [three/addons/loaders/VRMLLoader.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VRMLLoader.js#L57)

Constructs a new VRML loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`VRMLLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/VRMLLoader.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VRMLLoader.js#L72)

Starts loading from the given URL and passes the loaded VRML asset
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

> **parse**(`data`, `path`): `Scene`

Defined in: [three/addons/loaders/VRMLLoader.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VRMLLoader.js#L115)

Parses the given VRML data and returns the resulting scene.

#### Parameters

##### data

`string`

The raw VRML data as a string.

##### path

`string`

The URL base path.

#### Returns

`Scene`

The parsed scene.

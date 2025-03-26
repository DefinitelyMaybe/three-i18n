---
editUrl: false
next: false
prev: false
title: "KMZLoader"
---

Defined in: [three/addons/loaders/KMZLoader.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KMZLoader.js#L17)

A loader for the KMZ format.

```js
const loader = new KMZLoader();
const kmz = await loader.loadAsync( './models/kmz/Box.kmz' );

scene.add( kmz.scene );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new KMZLoader**(`manager`?): `KMZLoader`

Defined in: [three/addons/loaders/KMZLoader.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KMZLoader.js#L23)

Constructs a new KMZ loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`KMZLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/KMZLoader.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KMZLoader.js#L36)

Starts loading from the given URL and passes the loaded KMZ asset
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

> **parse**(`data`): `object`

Defined in: [three/addons/loaders/KMZLoader.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KMZLoader.js#L70)

Parses the given KMZ data and returns an object holding the scene.

#### Parameters

##### data

`ArrayBuffer`

The raw KMZ data as an array buffer.

#### Returns

`object`

The parsed KMZ asset.

##### scene

> **scene**: `Group`

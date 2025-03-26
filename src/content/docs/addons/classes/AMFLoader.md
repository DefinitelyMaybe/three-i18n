---
editUrl: false
next: false
prev: false
title: "AMFLoader"
---

Defined in: [three/addons/loaders/AMFLoader.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/AMFLoader.js#L28)

A loader for the AMF format.

The loader supports materials, color and ZIP compressed files.
No constellation support (yet).

```js
const loader = new AMFLoader();

const object = await loader.loadAsync( './models/amf/rook.amf' );
scene.add( object );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new AMFLoader**(`manager`?): `AMFLoader`

Defined in: [three/addons/loaders/AMFLoader.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/AMFLoader.js#L35)

Constructs a new AMF loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`AMFLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/AMFLoader.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/AMFLoader.js#L50)

Starts loading from the given URL and passes the loaded AMF asset
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

Defined in: [three/addons/loaders/AMFLoader.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/AMFLoader.js#L91)

Parses the given AMF data and returns the resulting group.

#### Parameters

##### data

`ArrayBuffer`

The raw AMF asset data as an array buffer.

#### Returns

`Group`

A group representing the parsed asset.

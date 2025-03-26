---
editUrl: false
next: false
prev: false
title: "LUT3dlLoader"
---

Defined in: [three/addons/loaders/LUT3dlLoader.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUT3dlLoader.js#L25)

A loader for the 3DL LUT format.

References:
- [3D LUTs][http://download.autodesk.com/us/systemdocs/help/2011/lustre/index.html?url=./files/WSc4e151a45a3b785a24c3d9a411df9298473-7ffd.htm,topicNumber=d0e9492](http://download.autodesk.com/us/systemdocs/help/2011/lustre/index.html?url=./files/WSc4e151a45a3b785a24c3d9a411df9298473-7ffd.htm,topicNumber=d0e9492)
- [Format Spec for .3dl][https://community.foundry.com/discuss/topic/103636/format-spec-for-3dl?mode=Post&postID=895258](https://community.foundry.com/discuss/topic/103636/format-spec-for-3dl?mode=Post&postID=895258)

```js
const loader = new LUT3dlLoader();
const map = loader.loadAsync( 'luts/Presetpro-Cinematic.3dl' );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new LUT3dlLoader**(`manager`?): `LUT3dlLoader`

Defined in: [three/addons/loaders/LUT3dlLoader.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUT3dlLoader.js#L32)

Constructs a new 3DL LUT loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`LUT3dlLoader`

#### Overrides

`Loader.constructor`

## Properties

### type

> **type**: `any`

Defined in: [three/addons/loaders/LUT3dlLoader.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUT3dlLoader.js#L42)

The texture type.

#### Default

```ts
UnsignedByteType
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/LUT3dlLoader.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUT3dlLoader.js#L69)

Starts loading from the given URL and passes the loaded 3DL LUT asset
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

> **parse**(`input`): `object`

Defined in: [three/addons/loaders/LUT3dlLoader.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUT3dlLoader.js#L106)

Parses the given 3DL LUT data and returns the resulting 3D data texture.

#### Parameters

##### input

`string`

The raw 3DL LUT data as a string.

#### Returns

`object`

The parsed 3DL LUT.

##### size

> **size**: `number`

##### texture3D

> **texture3D**: `Data3DTexture`

***

### setType()

> **setType**(`type`): `LUT3dlLoader`

Defined in: [three/addons/loaders/LUT3dlLoader.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUT3dlLoader.js#L52)

Sets the texture type.

#### Parameters

##### type

`any`

The texture type to set.

#### Returns

`LUT3dlLoader`

A reference to this loader.

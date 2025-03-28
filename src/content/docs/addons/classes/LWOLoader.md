---
editUrl: false
next: false
prev: false
title: "LWOLoader"
---

Defined in: [three/addons/loaders/LWOLoader.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LWOLoader.js#L65)

A loader for the LWO format.

LWO3 and LWO2 formats are supported.

References:
- [LWO3 format specification][https://static.lightwave3d.com/sdk/2019/html/filefmts/lwo3.html](https://static.lightwave3d.com/sdk/2019/html/filefmts/lwo3.html)
- [LWO2 format specification][https://static.lightwave3d.com/sdk/2019/html/filefmts/lwo2.html](https://static.lightwave3d.com/sdk/2019/html/filefmts/lwo2.html)

```js
const loader = new LWOLoader();
const lwoData = await loader.loadAsync( 'models/lwo/Objects/LWO3/Demo.lwo' );

const mesh = object.meshes[ 0 ];
scene.add( mesh );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new LWOLoader**(`manager`?): `LWOLoader`

Defined in: [three/addons/loaders/LWOLoader.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LWOLoader.js#L72)

Constructs a new LWO loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`LWOLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/LWOLoader.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LWOLoader.js#L87)

Starts loading from the given URL and passes the loaded LWO asset
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

> **parse**(`iffBuffer`, `path`, `modelName`): `object`

Defined in: [three/addons/loaders/LWOLoader.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LWOLoader.js#L138)

Parses the given LWO data and returns the resulting meshes and materials.

#### Parameters

##### iffBuffer

`ArrayBuffer`

The raw LWO data as an array buffer.

##### path

`string`

The URL base path.

##### modelName

`string`

The model name.

#### Returns

`object`

An object holding the parse meshes and materials.

##### materials

> **materials**: `Material`[]

##### meshes

> **meshes**: `Mesh`[]

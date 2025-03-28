---
editUrl: false
next: false
prev: false
title: "FBXLoader"
---

Defined in: [three/addons/loaders/FBXLoader.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FBXLoader.js#L77)

A loader for the FBX format.

Requires FBX file to be >= 7.0 and in ASCII or >= 6400 in Binary format.
Versions lower than this may load but will probably have errors.

Needs Support:
- Morph normals / blend shape normals

FBX format references:
- [C++ SDK reference][https://help.autodesk.com/view/FBX/2017/ENU/?guid=\_\_cpp\_ref\_index\_html](https://help.autodesk.com/view/FBX/2017/ENU/?guid=__cpp_ref_index_html)

Binary format specification:
- [FBX binary file format specification][https://code.blender.org/2013/08/fbx-binary-file-format-specification/](https://code.blender.org/2013/08/fbx-binary-file-format-specification/)

```js
const loader = new FBXLoader();
const object = await loader.loadAsync( 'models/fbx/stanford-bunny.fbx' );
scene.add( object );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new FBXLoader**(`manager`?): `FBXLoader`

Defined in: [three/addons/loaders/FBXLoader.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FBXLoader.js#L84)

Constructs a new FBX loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`FBXLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/FBXLoader.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FBXLoader.js#L99)

Starts loading from the given URL and passes the loaded FBX asset
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

> **parse**(`FBXBuffer`, `path`): `Group`

Defined in: [three/addons/loaders/FBXLoader.js:144](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FBXLoader.js#L144)

Parses the given FBX data and returns the resulting group.

#### Parameters

##### FBXBuffer

`any`[]

The raw FBX data as an array buffer.

##### path

`string`

The URL base path.

#### Returns

`Group`

An object representing the parsed asset.

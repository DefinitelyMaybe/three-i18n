---
editUrl: false
next: false
prev: false
title: "ColladaLoader"
---

Defined in: [three/addons/loaders/ColladaLoader.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/ColladaLoader.js#L62)

A loader for the Collada format.

The Collada format is very complex so this loader only supports a subset of what
is defined in the [official specification][https://www.khronos.org/files/collada\_spec\_1\_5.pdf](https://www.khronos.org/files/collada_spec_1_5.pdf).

Assets with a Z-UP coordinate system are transformed it into Y-UP by a simple rotation.
The vertex data are not converted.

```js
const loader = new ColladaLoader();

const result = await loader.loadAsync( './models/collada/elf/elf.dae' );
scene.add( result.scene );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new ColladaLoader**(): `ColladaLoader`

#### Returns

`ColladaLoader`

#### Inherited from

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/ColladaLoader.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/ColladaLoader.js#L72)

Starts loading from the given URL and passes the loaded Collada asset
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

> **parse**(`text`, `path`): `object`

Defined in: [three/addons/loaders/ColladaLoader.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/ColladaLoader.js#L110)

Parses the given Collada data and returns a result oject holding the parsed scene,
an array of animation clips and kinematics.

#### Parameters

##### text

`string`

The raw Collada data as a string.

##### path

`string`

The asset path.

#### Returns

`object`

An object representing the parsed asset.

##### animations

> **animations**: `AnimationClip`[]

##### kinematics

> **kinematics**: `any`

##### scene

> **scene**: `Group`

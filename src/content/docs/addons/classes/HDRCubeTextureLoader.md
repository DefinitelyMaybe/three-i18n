---
editUrl: false
next: false
prev: false
title: "HDRCubeTextureLoader"
---

Defined in: [three/addons/loaders/HDRCubeTextureLoader.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/HDRCubeTextureLoader.js#L27)

A loader for loading HDR cube textures.

```js
const loader = new HDRCubeTextureLoader();
loader.setPath( 'textures/cube/pisaHDR/' );
const cubeTexture = await loader.loadAsync( [ 'px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr' ] );

scene.background = cubeTexture;
scene.environment = cubeTexture;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new HDRCubeTextureLoader**(`manager`?): `HDRCubeTextureLoader`

Defined in: [three/addons/loaders/HDRCubeTextureLoader.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/HDRCubeTextureLoader.js#L33)

Constructs a new HDR cube texture loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`HDRCubeTextureLoader`

#### Overrides

`Loader.constructor`

## Properties

### hdrLoader

> **hdrLoader**: [`RGBELoader`](/addons/classes/rgbeloader/)

Defined in: [three/addons/loaders/HDRCubeTextureLoader.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/HDRCubeTextureLoader.js#L42)

The internal HDR loader that loads the
individual textures for each cube face.

***

### type

> **type**: `any`

Defined in: [three/addons/loaders/HDRCubeTextureLoader.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/HDRCubeTextureLoader.js#L50)

The texture type.

#### Default

```ts
HalfFloatType
```

## Methods

### load()

> **load**(`urls`, `onLoad`, `onProgress`, `onError`): `CubeTexture`

Defined in: [three/addons/loaders/HDRCubeTextureLoader.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/HDRCubeTextureLoader.js#L63)

Starts loading from the given URLs and passes the loaded HDR cube texture
to the `onLoad()` callback.

#### Parameters

##### urls

`string`[]

The paths/URLs of the files to be loaded. This can also be a data URIs.

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

`CubeTexture`

The HDR cube texture.

***

### setDataType()

> **setDataType**(`value`): [`RGBELoader`](/addons/classes/rgbeloader/)

Defined in: [three/addons/loaders/HDRCubeTextureLoader.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/HDRCubeTextureLoader.js#L142)

Sets the texture type.

#### Parameters

##### value

`any`

The texture type to set.

#### Returns

[`RGBELoader`](/addons/classes/rgbeloader/)

A reference to this loader.

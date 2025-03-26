---
editUrl: false
next: false
prev: false
title: "LUTCubeLoader"
---

Defined in: [three/addons/loaders/LUTCubeLoader.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUTCubeLoader.js#L24)

A loader for the Cube LUT format.

References:
- [Cube LUT Specification][https://web.archive.org/web/20220220033515/https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf](https://web.archive.org/web/20220220033515/https://wwwimages2.adobe.com/content/dam/acom/en/products/speedgrade/cc/pdfs/cube-lut-specification-1.0.pdf)

```js
const loader = new LUTCubeLoader();
const map = loader.loadAsync( 'luts/Bourbon 64.CUBE' );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new LUTCubeLoader**(`manager`?): `LUTCubeLoader`

Defined in: [three/addons/loaders/LUTCubeLoader.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUTCubeLoader.js#L31)

Constructs a new Cube LUT loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`LUTCubeLoader`

#### Overrides

`Loader.constructor`

## Properties

### type

> **type**: `any`

Defined in: [three/addons/loaders/LUTCubeLoader.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUTCubeLoader.js#L41)

The texture type.

#### Default

```ts
UnsignedByteType
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/LUTCubeLoader.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUTCubeLoader.js#L68)

Starts loading from the given URL and passes the loaded Cube LUT asset
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

Defined in: [three/addons/loaders/LUTCubeLoader.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUTCubeLoader.js#L105)

Parses the given Cube LUT data and returns the resulting 3D data texture.

#### Parameters

##### input

`string`

The raw Cube LUT data as a string.

#### Returns

`object`

The parsed Cube LUT.

##### domainMax

> **domainMax**: `Vector3`

##### domainMin

> **domainMin**: `Vector3`

##### size

> **size**: `number`

##### texture3D

> **texture3D**: `Data3DTexture`

##### title

> **title**: `string`

***

### setType()

> **setType**(`type`): `LUTCubeLoader`

Defined in: [three/addons/loaders/LUTCubeLoader.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LUTCubeLoader.js#L51)

Sets the texture type.

#### Parameters

##### type

`any`

The texture type to set.

#### Returns

`LUTCubeLoader`

A reference to this loader.

---
editUrl: false
next: false
prev: false
title: "EXRLoader"
---

Defined in: [three/addons/loaders/EXRLoader.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/EXRLoader.js#L96)

A loader for the OpenEXR texture format.

`EXRLoader` currently supports uncompressed, ZIP(S), RLE, PIZ and DWA/B compression.
Supports reading as UnsignedByte, HalfFloat and Float type data texture.

```js
const loader = new EXRLoader();
const texture = await loader.loadAsync( 'textures/memorial.exr' );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new EXRLoader**(`manager`?): `EXRLoader`

Defined in: [three/addons/loaders/EXRLoader.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/EXRLoader.js#L103)

Constructs a new EXR loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`EXRLoader`

#### Overrides

`DataTextureLoader.constructor`

## Properties

### type

> **type**: `any`

Defined in: [three/addons/loaders/EXRLoader.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/EXRLoader.js#L113)

The texture type.

#### Default

```ts
HalfFloatType
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `any`

Defined in: [three/addons/loaders/EXRLoader.js:2575](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/EXRLoader.js#L2575)

#### Parameters

##### url

`any`

##### onLoad

`any`

##### onProgress

`any`

##### onError

`any`

#### Returns

`any`

***

### parse()

> **parse**(`buffer`): `DataTextureLoader`

Defined in: [three/addons/loaders/EXRLoader.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/EXRLoader.js#L123)

Parses the given EXR texture data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw texture data.

#### Returns

`DataTextureLoader`

An object representing the parsed texture data.

***

### setDataType()

> **setDataType**(`value`): `RGBMLoader`

Defined in: [three/addons/loaders/EXRLoader.js:2568](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/EXRLoader.js#L2568)

Sets the texture type.

#### Parameters

##### value

`any`

The texture type to set.

#### Returns

`RGBMLoader`

A reference to this loader.

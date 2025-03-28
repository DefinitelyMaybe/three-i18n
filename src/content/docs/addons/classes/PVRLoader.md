---
editUrl: false
next: false
prev: false
title: "PVRLoader"
---

Defined in: [three/addons/loaders/PVRLoader.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PVRLoader.js#L21)

A loader for the PVRTC texture compression format.

```js
const loader = new PVRLoader();

const map = loader.load( 'textures/compressed/disturb_4bpp_rgb.pvr' );
map.colorSpace = THREE.SRGBColorSpace; // only for color textures
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new PVRLoader**(`manager`?): `PVRLoader`

Defined in: [three/addons/loaders/PVRLoader.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PVRLoader.js#L28)

Constructs a new PVR loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`PVRLoader`

#### Overrides

`CompressedTextureLoader.constructor`

## Methods

### parse()

> **parse**(`buffer`, `loadMipmaps`): `CompressedTextureLoader`

Defined in: [three/addons/loaders/PVRLoader.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PVRLoader.js#L41)

Parses the given PVRTC texture data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw texture data.

##### loadMipmaps

`boolean`

Whether to load mipmaps or not. This option is not yet supported by the loader.

#### Returns

`CompressedTextureLoader`

An object representing the parsed texture data.

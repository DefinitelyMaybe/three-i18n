---
editUrl: false
next: false
prev: false
title: "KTXLoader"
---

Defined in: [three/addons/loaders/KTXLoader.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTXLoader.js#L21)

A loader for the KTX texture compression format.

References:
- [The KTX File Format and Tools][https://www.khronos.org/opengles/sdk/tools/KTX/](https://www.khronos.org/opengles/sdk/tools/KTX/)
- [Babylon.JS khronosTextureContainer.ts][https://github.com/BabylonJS/Babylon.js/blob/master/src/Misc/khronosTextureContainer.ts](https://github.com/BabylonJS/Babylon.js/blob/master/src/Misc/khronosTextureContainer.ts)

```js
const loader = new KTXLoader();

const map = loader.load( 'textures/compressed/lensflare_ASTC8x8.ktx' )
map.colorSpace = THREE.SRGBColorSpace; // only for color textures
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new KTXLoader**(`manager`?): `KTXLoader`

Defined in: [three/addons/loaders/KTXLoader.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTXLoader.js#L28)

Constructs a new KTX loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`KTXLoader`

#### Overrides

`CompressedTextureLoader.constructor`

## Methods

### parse()

> **parse**(`buffer`, `loadMipmaps`): `CompressedTextureLoader`

Defined in: [three/addons/loaders/KTXLoader.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTXLoader.js#L41)

Parses the given KTX texture data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw texture data.

##### loadMipmaps

`boolean`

Whether to load mipmaps or not.

#### Returns

`CompressedTextureLoader`

An object representing the parsed texture data.

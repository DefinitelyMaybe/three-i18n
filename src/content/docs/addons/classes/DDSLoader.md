---
editUrl: false
next: false
prev: false
title: "DDSLoader"
---

Defined in: [three/addons/loaders/DDSLoader.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DDSLoader.js#L24)

A loader for the S3TC texture compression format.

```js
const loader = new DDSLoader();

const map = loader.load( 'textures/compressed/disturb_dxt1_nomip.dds' );
map.colorSpace = THREE.SRGBColorSpace; // only for color textures
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new DDSLoader**(`manager`?): `DDSLoader`

Defined in: [three/addons/loaders/DDSLoader.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DDSLoader.js#L31)

Constructs a new DDS loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`DDSLoader`

#### Overrides

`CompressedTextureLoader.constructor`

## Methods

### parse()

> **parse**(`buffer`, `loadMipmaps`): `CompressedTextureLoader`

Defined in: [three/addons/loaders/DDSLoader.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DDSLoader.js#L44)

Parses the given S3TC texture data.

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

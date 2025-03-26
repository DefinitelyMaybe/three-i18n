---
editUrl: false
next: false
prev: false
title: "TIFFLoader"
---

Defined in: [three/addons/loaders/TIFFLoader.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TIFFLoader.js#L20)

A loader for the TIFF texture format.

```js
const loader = new TIFFLoader();
const texture = await loader.loadAsync( 'textures/tiff/crate_lzw.tif' );
texture.colorSpace = THREE.SRGBColorSpace;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new TIFFLoader**(`manager`?): `TIFFLoader`

Defined in: [three/addons/loaders/TIFFLoader.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TIFFLoader.js#L27)

Constructs a new TIFF loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`TIFFLoader`

#### Overrides

`DataTextureLoader.constructor`

## Methods

### parse()

> **parse**(`buffer`): `DataTextureLoader`

Defined in: [three/addons/loaders/TIFFLoader.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TIFFLoader.js#L39)

Parses the given TIFF texture data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw texture data.

#### Returns

`DataTextureLoader`

An object representing the parsed texture data.

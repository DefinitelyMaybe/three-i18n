---
editUrl: false
next: false
prev: false
title: "TGALoader"
---

Defined in: [three/addons/loaders/TGALoader.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TGALoader.js#L17)

A loader for the TGA texture format.

```js
const loader = new TGALoader();
const texture = await loader.loadAsync( 'textures/crate_color8.tga' );
texture.colorSpace = THREE.SRGBColorSpace; // only for color textures
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new TGALoader**(`manager`?): `TGALoader`

Defined in: [three/addons/loaders/TGALoader.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TGALoader.js#L24)

Constructs a new TGA loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`TGALoader`

#### Overrides

`DataTextureLoader.constructor`

## Methods

### parse()

> **parse**(`buffer`): `DataTextureLoader`

Defined in: [three/addons/loaders/TGALoader.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TGALoader.js#L36)

Parses the given TGA texture data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw texture data.

#### Returns

`DataTextureLoader`

An object representing the parsed texture data.

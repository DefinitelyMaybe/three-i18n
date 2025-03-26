---
editUrl: false
next: false
prev: false
title: "UltraHDRLoader"
---

Defined in: [three/addons/loaders/UltraHDRLoader.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L66)

A loader for the Ultra HDR Image Format.

Existing HDR or EXR textures can be converted to Ultra HDR with this [tool][https://gainmap-creator.monogrid.com/](https://gainmap-creator.monogrid.com/).

Current feature set:
- JPEG headers (required)
- XMP metadata (required)
- XMP validation (not implemented)
- EXIF profile (not implemented)
- ICC profile (not implemented)
- Binary storage for SDR & HDR images (required)
- Gainmap metadata (required)
- Non-JPEG image formats (not implemented)
- Primary image as an HDR image (not implemented)

```js
const loader = new UltraHDRLoader();
const texture = await loader.loadAsync( 'textures/equirectangular/ice_planet_close.jpg' );
texture.mapping = THREE.EquirectangularReflectionMapping;

scene.background = texture;
scene.environment = texture;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new UltraHDRLoader**(`manager`?): `UltraHDRLoader`

Defined in: [three/addons/loaders/UltraHDRLoader.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L73)

Constructs a new Ultra HDR loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`UltraHDRLoader`

#### Overrides

`Loader.constructor`

## Properties

### type

> **type**: `any`

Defined in: [three/addons/loaders/UltraHDRLoader.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L83)

The texture type.

#### Default

```ts
HalfFloatType
```

## Methods

### \_applyGainmapToSDR()

> **\_applyGainmapToSDR**(`xmpMetadata`, `sdrBuffer`, `gainmapBuffer`, `onSuccess`, `onError`): `void`

Defined in: [three/addons/loaders/UltraHDRLoader.js:441](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L441)

#### Parameters

##### xmpMetadata

`any`

##### sdrBuffer

`any`

##### gainmapBuffer

`any`

##### onSuccess

`any`

##### onError

`any`

#### Returns

`void`

***

### \_parseXMPMetadata()

> **\_parseXMPMetadata**(`xmpDataString`, `xmpMetadata`): `void`

Defined in: [three/addons/loaders/UltraHDRLoader.js:369](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L369)

#### Parameters

##### xmpDataString

`any`

##### xmpMetadata

`any`

#### Returns

`void`

***

### \_srgbToLinear()

> **\_srgbToLinear**(`value`): `number`

Defined in: [three/addons/loaders/UltraHDRLoader.js:423](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L423)

#### Parameters

##### value

`any`

#### Returns

`number`

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `DataTexture`

Defined in: [three/addons/loaders/UltraHDRLoader.js:311](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L311)

Starts loading from the given URL and passes the loaded Ultra HDR texture
to the `onLoad()` callback.

#### Parameters

##### url

`string`

The path/URL of the files to be loaded. This can also be a data URI.

##### onLoad

(`arg0`, `arg1`) => `any`

Executed when the loading process has been finished.

##### onProgress

`onProgressCallback`

Executed while the loading is in progress.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`DataTexture`

The Ultra HDR texture.

***

### parse()

> **parse**(`buffer`, `onLoad`): `void`

Defined in: [three/addons/loaders/UltraHDRLoader.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L107)

Parses the given Ultra HDR texture data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw texture data.

##### onLoad

`Function`

The `onLoad` callback.

#### Returns

`void`

***

### setDataType()

> **setDataType**(`value`): `RGBELoader`

Defined in: [three/addons/loaders/UltraHDRLoader.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/UltraHDRLoader.js#L93)

Sets the texture type.

#### Parameters

##### value

`any`

The texture type to set.

#### Returns

`RGBELoader`

A reference to this loader.

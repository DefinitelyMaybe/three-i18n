---
editUrl: false
next: false
prev: false
title: "RGBMLoader"
---

Defined in: [three/addons/loaders/RGBMLoader.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L22)

A loader for the RGBM HDR texture format.

```js
const loader = new RGBMLoader();
loader.setMaxRange( 16 );

const texture = await loader.loadAsync( 'textures/memorial.png' );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new RGBMLoader**(`manager`?): `RGBMLoader`

Defined in: [three/addons/loaders/RGBMLoader.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L29)

Constructs a new RGBM loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`RGBMLoader`

#### Overrides

`DataTextureLoader.constructor`

## Properties

### maxRange

> **maxRange**: `7` \| `16`

Defined in: [three/addons/loaders/RGBMLoader.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L47)

More information about this property at [The difference between RGBM and RGBD][https://iwasbeingirony.blogspot.com/2010/06/difference-between-rgbm-and-rgbd.html](https://iwasbeingirony.blogspot.com/2010/06/difference-between-rgbm-and-rgbd.html)

#### Default

```ts
7
```

***

### type

> **type**: `any`

Defined in: [three/addons/loaders/RGBMLoader.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L39)

The texture type.

#### Default

```ts
HalfFloatType
```

## Methods

### loadCubemap()

> **loadCubemap**(`urls`, `onLoad`, `onProgress`, `onError`): `CubeTexture`

Defined in: [three/addons/loaders/RGBMLoader.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L87)

Starts loading from the given URLs and passes the loaded RGBM cube map
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

The cube texture.

***

### loadCubemapAsync()

> **loadCubemapAsync**(`urls`, `onProgress`): `Promise`\<`CubeTexture`\>

Defined in: [three/addons/loaders/RGBMLoader.js:144](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L144)

Async version of [RGBMLoader#loadCubemap](/addons/classes/rgbmloader/#loadcubemap).

#### Parameters

##### urls

`string`[]

The paths/URLs of the files to be loaded. This can also be a data URIs.

##### onProgress

`onProgressCallback`

Executed while the loading is in progress.

#### Returns

`Promise`\<`CubeTexture`\>

A Promise that resolves with the loaded cube map.

#### Async

***

### parse()

> **parse**(`buffer`): `DataTextureLoader`

Defined in: [three/addons/loaders/RGBMLoader.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L160)

Parses the given RGBM texture data.

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

Defined in: [three/addons/loaders/RGBMLoader.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L57)

Sets the texture type.

#### Parameters

##### value

`any`

The texture type to set.

#### Returns

`RGBMLoader`

A reference to this loader.

***

### setMaxRange()

> **setMaxRange**(`value`): `RGBMLoader`

Defined in: [three/addons/loaders/RGBMLoader.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBMLoader.js#L70)

Sets the maximum range.

#### Parameters

##### value

`number`

The maximum range to set.

#### Returns

`RGBMLoader`

A reference to this loader.

---
editUrl: false
next: false
prev: false
title: "RGBELoader"
---

Defined in: [three/addons/loaders/RGBELoader.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBELoader.js#L23)

A loader for the RGBE HDR texture format.

```js
const loader = new RGBELoader();
const envMap = await loader.loadAsync( 'textures/equirectangular/blouberg_sunrise_2_1k.hdr' );
envMap.mapping = THREE.EquirectangularReflectionMapping;

scene.environment = envMap;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new RGBELoader**(`manager`?): `RGBELoader`

Defined in: [three/addons/loaders/RGBELoader.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBELoader.js#L30)

Constructs a new RGBE loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`RGBELoader`

#### Overrides

`DataTextureLoader.constructor`

## Properties

### type

> **type**: `any`

Defined in: [three/addons/loaders/RGBELoader.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBELoader.js#L40)

The texture type.

#### Default

```ts
HalfFloatType
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `any`

Defined in: [three/addons/loaders/RGBELoader.js:454](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBELoader.js#L454)

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

Defined in: [three/addons/loaders/RGBELoader.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBELoader.js#L50)

Parses the given RGBE texture data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw texture data.

#### Returns

`DataTextureLoader`

An object representing the parsed texture data.

***

### setDataType()

> **setDataType**(`value`): `RGBELoader`

Defined in: [three/addons/loaders/RGBELoader.js:447](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/RGBELoader.js#L447)

Sets the texture type.

#### Parameters

##### value

`any`

The texture type to set.

#### Returns

`RGBELoader`

A reference to this loader.

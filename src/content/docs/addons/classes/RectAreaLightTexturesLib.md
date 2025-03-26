---
editUrl: false
next: false
prev: false
title: "RectAreaLightTexturesLib"
---

Defined in: [three/addons/lights/RectAreaLightTexturesLib.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/RectAreaLightTexturesLib.js#L29)

Texture library for RectAreaLight. This class holds the LTC BRDF data
in data textures for further use in the renderer.

Reference: Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt. [Code][https://github.com/selfshadow/ltc\_code/](https://github.com/selfshadow/ltc_code/).

NOTE: This is a temporary location for the BRDF approximation texture data
based off of Eric Heitz's work (see citation). BRDF data for
`RectAreaLight` is currently approximated using a precomputed texture
of roughly 80kb in size. The hope is to find a better way to include
the large texture data before including the full RectAreaLight implementation
in the main build files.

## Properties

### LTC\_FLOAT\_1

> `static` **LTC\_FLOAT\_1**: `DataTexture`

Defined in: [three/addons/lights/RectAreaLightTexturesLib.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/RectAreaLightTexturesLib.js#L81)

The first LTC FP32 data texture.

#### Static

#### Default

```ts
null
```

***

### LTC\_FLOAT\_2

> `static` **LTC\_FLOAT\_2**: `DataTexture`

Defined in: [three/addons/lights/RectAreaLightTexturesLib.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/RectAreaLightTexturesLib.js#L82)

The second LTC FP32 data texture.

#### Static

#### Default

```ts
null
```

***

### LTC\_HALF\_1

> `static` **LTC\_HALF\_1**: `DataTexture`

Defined in: [three/addons/lights/RectAreaLightTexturesLib.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/RectAreaLightTexturesLib.js#L78)

The first LTC FP16 data texture.

#### Static

#### Default

```ts
null
```

***

### LTC\_HALF\_2

> `static` **LTC\_HALF\_2**: `DataTexture`

Defined in: [three/addons/lights/RectAreaLightTexturesLib.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/RectAreaLightTexturesLib.js#L79)

The second LTC FP16 data texture.

#### Static

#### Default

```ts
null
```

## Methods

### init()

> `static` **init**(): `RectAreaLightTexturesLib`

Defined in: [three/addons/lights/RectAreaLightTexturesLib.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/RectAreaLightTexturesLib.js#L36)

Inits the texture library.

#### Returns

`RectAreaLightTexturesLib`

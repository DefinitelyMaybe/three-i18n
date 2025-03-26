---
editUrl: false
next: false
prev: false
title: "LensflareElement"
---

Defined in: [three/addons/objects/Lensflare.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L342)

Represents a single flare that can be added to a [Lensflare](/addons/classes/lensflare/) container.

## Constructors

### Constructor

> **new LensflareElement**(`texture`, `size`?, `distance`?, `color`?): `LensflareElement`

Defined in: [three/addons/objects/Lensflare.js:353](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L353)

Constructs a new lensflare element.

#### Parameters

##### texture

`Texture`

The flare's texture.

##### size?

`number` = `1`

The size in pixels.

##### distance?

`number` = `0`

The normalized distance (`[0,1]`) from the light source.
A value of `0` means the flare is located at light source.

##### color?

`Color` = `...`

The flare's color

#### Returns

`LensflareElement`

## Properties

### color

> **color**: `Color`

Defined in: [three/addons/objects/Lensflare.js:385](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L385)

The flare's color

#### Default

```ts
(1,1,1)
```

***

### distance

> **distance**: `number`

Defined in: [three/addons/objects/Lensflare.js:377](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L377)

The normalized distance (`[0,1]`) from the light source.
A value of `0` means the flare is located at light source.

#### Default

```ts
0
```

***

### size

> **size**: `number`

Defined in: [three/addons/objects/Lensflare.js:368](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L368)

The size in pixels.

#### Default

```ts
1
```

***

### texture

> **texture**: `Texture`

Defined in: [three/addons/objects/Lensflare.js:360](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L360)

The flare's texture.

***

### Shader

> `static` **Shader**: `object`

Defined in: [three/addons/objects/Lensflare.js:391](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L391)

#### fragmentShader

> **fragmentShader**: `string`

#### name

> **name**: `string` = `'LensflareElementShader'`

#### uniforms

> **uniforms**: `object`

##### uniforms.color

> **color**: `object`

##### uniforms.color.value

> **value**: `any` = `null`

##### uniforms.map

> **map**: `object`

##### uniforms.map.value

> **value**: `any` = `null`

##### uniforms.occlusionMap

> **occlusionMap**: `object`

##### uniforms.occlusionMap.value

> **value**: `any` = `null`

##### uniforms.scale

> **scale**: `object`

##### uniforms.scale.value

> **value**: `any` = `null`

##### uniforms.screenPosition

> **screenPosition**: `object`

##### uniforms.screenPosition.value

> **value**: `any` = `null`

#### vertexShader

> **vertexShader**: `string`

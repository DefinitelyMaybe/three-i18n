---
editUrl: false
next: false
prev: false
title: "TextureHelper"
---

Defined in: [three/addons/helpers/TextureHelper.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/TextureHelper.js#L22)

A helper that can be used to display any type of texture for
debugging purposes. Depending on the type of texture (2D, 3D, Array),
the helper becomes a plane or box mesh.

This helper can only be used with WebGLRenderer.
When using WebGPURenderer, import from `TextureHelperGPU.js`.

## Extends

- `unknown`

## Constructors

### Constructor

> **new TextureHelper**(`texture`, `width`?, `height`?, `depth`?): `TextureHelper`

Defined in: [three/addons/helpers/TextureHelper.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/TextureHelper.js#L32)

Constructs a new texture helper.

#### Parameters

##### texture

`Texture`

The texture to visualize.

##### width?

`number` = `1`

The helper's width.

##### height?

`number` = `1`

The helper's height.

##### depth?

`number` = `1`

The helper's depth.

#### Returns

`TextureHelper`

#### Overrides

`Mesh.constructor`

## Properties

### texture

> **texture**: `Texture`

Defined in: [three/addons/helpers/TextureHelper.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/TextureHelper.js#L107)

The texture to visualize.

***

### type

> **type**: `string`

Defined in: [three/addons/helpers/TextureHelper.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/TextureHelper.js#L108)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/helpers/TextureHelper.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/TextureHelper.js#L116)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

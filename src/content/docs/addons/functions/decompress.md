---
editUrl: false
next: false
prev: false
title: "decompress"
---

> **decompress**(`texture`, `maxTextureSize`?, `renderer`?): `CanvasTexture`

Defined in: [three/addons/utils/WebGLTextureUtils.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WebGLTextureUtils.js#L31)

Returns an uncompressed version of the given compressed texture.

This module can only be used with WebGLRenderer. When using WebGPURenderer,
import the function from WebGPUTextureUtils.

## Parameters

### texture

`CompressedTexture`

The compressed texture.

### maxTextureSize?

`number` = `Infinity`

The maximum size of the uncompressed texture.

### renderer?

`WebGLRenderer` = `null`

A reference to a renderer.

## Returns

`CanvasTexture`

The uncompressed texture.

---
editUrl: false
next: false
prev: false
title: "LightProbeGenerator"
---

Defined in: [three/addons/lights/LightProbeGenerator.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/LightProbeGenerator.js#L19)

Utility class for creating instances of LightProbe.

## Methods

### fromCubeRenderTarget()

> `static` **fromCubeRenderTarget**(`renderer`, `cubeRenderTarget`): `Promise`\<`LightProbe`\>

Defined in: [three/addons/lights/LightProbeGenerator.js:155](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/LightProbeGenerator.js#L155)

Creates a light probe from the given (radiance) environment map.
The method expects that the environment map is represented as a cube render target.

The cube render target must be in RGBA so `cubeRenderTarget.texture.format` must be
set to RGBAFormat.

#### Parameters

##### renderer

`any`

The renderer.

##### cubeRenderTarget

`any`

The environment map.

#### Returns

`Promise`\<`LightProbe`\>

A Promise that resolves with the created light probe.

#### Async

***

### fromCubeTexture()

> `static` **fromCubeTexture**(`cubeTexture`): `LightProbe`

Defined in: [three/addons/lights/LightProbeGenerator.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/LightProbeGenerator.js#L28)

Creates a light probe from the given (radiance) environment map.
The method expects that the environment map is represented as a cube texture.

#### Parameters

##### cubeTexture

`CubeTexture`

The environment map.

#### Returns

`LightProbe`

The created light probe.

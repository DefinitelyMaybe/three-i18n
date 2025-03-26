---
editUrl: false
next: false
prev: false
title: "PMREMGenerator"
---

Defined in: [three/src/extras/PMREMGenerator.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L79)

This class generates a Prefiltered, Mipmapped Radiance Environment Map
(PMREM) from a cubeMap environment texture. This allows different levels of
blur to be quickly accessed based on material roughness. It is packed into a
special CubeUV format that allows us to perform custom interpolation so that
we can support nonlinear formats such as RGBE. Unlike a traditional mipmap
chain, it only goes down to the LOD_MIN level (above), and then creates extra
even more filtered 'mips' at the same LOD_MIN resolution, associated with
higher roughness levels. In this way we maintain resolution to smoothly
interpolate diffuse lighting while limiting sampling computation.

Paper: Fast, Accurate Image-Based Lighting:
[https://drive.google.com/file/d/15y8r\_UpKlU9SvV4ILb0C3qCPecS8pvLz/view](https://drive.google.com/file/d/15y8r_UpKlU9SvV4ILb0C3qCPecS8pvLz/view)

## Constructors

### Constructor

> **new PMREMGenerator**(`renderer`): `PMREMGenerator`

Defined in: [three/src/extras/PMREMGenerator.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L86)

Constructs a new PMREM generator.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

#### Returns

`PMREMGenerator`

## Properties

### \_blurMaterial

> **\_blurMaterial**: [`ShaderMaterial`](/reference/three/classes/shadermaterial/)

Defined in: [three/src/extras/PMREMGenerator.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L97)

***

### \_cubemapMaterial

> **\_cubemapMaterial**: [`ShaderMaterial`](/reference/three/classes/shadermaterial/)

Defined in: [three/src/extras/PMREMGenerator.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L98)

***

### \_cubeSize

> **\_cubeSize**: `number`

Defined in: [three/src/extras/PMREMGenerator.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L92)

***

### \_equirectMaterial

> **\_equirectMaterial**: [`ShaderMaterial`](/reference/three/classes/shadermaterial/)

Defined in: [three/src/extras/PMREMGenerator.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L99)

***

### \_lodMax

> **\_lodMax**: `number`

Defined in: [three/src/extras/PMREMGenerator.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L91)

***

### \_lodPlanes

> **\_lodPlanes**: `any`[]

Defined in: [three/src/extras/PMREMGenerator.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L93)

***

### \_pingPongRenderTarget

> **\_pingPongRenderTarget**: [`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

Defined in: [three/src/extras/PMREMGenerator.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L89)

***

### \_renderer

> **\_renderer**: `WebGLRenderer`

Defined in: [three/src/extras/PMREMGenerator.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L88)

***

### \_sigmas

> **\_sigmas**: `any`[]

Defined in: [three/src/extras/PMREMGenerator.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L95)

***

### \_sizeLods

> **\_sizeLods**: `any`[]

Defined in: [three/src/extras/PMREMGenerator.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L94)

## Methods

### \_allocateTargets()

> **\_allocateTargets**(): [`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

Defined in: [three/src/extras/PMREMGenerator.js:289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L289)

#### Returns

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

***

### \_applyPMREM()

> **\_applyPMREM**(`cubeUVRenderTarget`): `void`

Defined in: [three/src/extras/PMREMGenerator.js:471](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L471)

#### Parameters

##### cubeUVRenderTarget

`any`

#### Returns

`void`

***

### \_cleanup()

> **\_cleanup**(`outputTarget`): `void`

Defined in: [three/src/extras/PMREMGenerator.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L251)

#### Parameters

##### outputTarget

`any`

#### Returns

`void`

***

### \_compileMaterial()

> **\_compileMaterial**(`material`): `void`

Defined in: [three/src/extras/PMREMGenerator.js:327](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L327)

#### Parameters

##### material

`any`

#### Returns

`void`

***

### \_dispose()

> **\_dispose**(): `void`

Defined in: [three/src/extras/PMREMGenerator.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L237)

#### Returns

`void`

***

### \_fromTexture()

> **\_fromTexture**(`texture`, `renderTarget`): `any`

Defined in: [three/src/extras/PMREMGenerator.js:261](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L261)

#### Parameters

##### texture

`any`

##### renderTarget

`any`

#### Returns

`any`

***

### \_halfBlur()

> **\_halfBlur**(`targetIn`, `targetOut`, `lodIn`, `lodOut`, `sigmaRadians`, `direction`, `poleAxis`): `void`

Defined in: [three/src/extras/PMREMGenerator.js:530](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L530)

#### Parameters

##### targetIn

`any`

##### targetOut

`any`

##### lodIn

`any`

##### lodOut

`any`

##### sigmaRadians

`any`

##### direction

`any`

##### poleAxis

`any`

#### Returns

`void`

***

### \_sceneToCubeUV()

> **\_sceneToCubeUV**(`scene`, `near`, `far`, `cubeUVRenderTarget`, `position`): `void`

Defined in: [three/src/extras/PMREMGenerator.js:334](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L334)

#### Parameters

##### scene

`any`

##### near

`any`

##### far

`any`

##### cubeUVRenderTarget

`any`

##### position

`any`

#### Returns

`void`

***

### \_setSize()

> **\_setSize**(`cubeSize`): `void`

Defined in: [three/src/extras/PMREMGenerator.js:230](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L230)

#### Parameters

##### cubeSize

`any`

#### Returns

`void`

***

### \_textureToCubeUV()

> **\_textureToCubeUV**(`texture`, `cubeUVRenderTarget`): `void`

Defined in: [three/src/extras/PMREMGenerator.js:429](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L429)

#### Parameters

##### texture

`any`

##### cubeUVRenderTarget

`any`

#### Returns

`void`

***

### compileCubemapShader()

> **compileCubemapShader**(): `void`

Defined in: [three/src/extras/PMREMGenerator.js:188](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L188)

Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
your texture's network fetch for increased concurrency.

#### Returns

`void`

***

### compileEquirectangularShader()

> **compileEquirectangularShader**(): `void`

Defined in: [three/src/extras/PMREMGenerator.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L203)

Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
your texture's network fetch for increased concurrency.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/extras/PMREMGenerator.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L219)

Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
one of them will cause any others to also become unusable.

#### Returns

`void`

***

### fromCubemap()

> **fromCubemap**(`cubemap`, `renderTarget`?): [`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

Defined in: [three/src/extras/PMREMGenerator.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L178)

Generates a PMREM from an cubemap texture, which can be either LDR
or HDR. The ideal input cube size is 256 x 256,
as this matches best with the 256 x 256 cubemap output.

#### Parameters

##### cubemap

`Texture`

The cubemap texture to be converted.

##### renderTarget?

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/) = `null`

The render target to use.

#### Returns

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

The resulting PMREM.

***

### fromEquirectangular()

> **fromEquirectangular**(`equirectangular`, `renderTarget`?): [`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

Defined in: [three/src/extras/PMREMGenerator.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L163)

Generates a PMREM from an equirectangular texture, which can be either LDR
or HDR. The ideal input image size is 1k (1024 x 512),
as this matches best with the 256 x 256 cubemap output.

#### Parameters

##### equirectangular

`Texture`

The equirectangular texture to be converted.

##### renderTarget?

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/) = `null`

The render target to use.

#### Returns

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

The resulting PMREM.

***

### fromScene()

> **fromScene**(`scene`, `sigma`?, `near`?, `far`?, `options`?): [`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

Defined in: [three/src/extras/PMREMGenerator.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/PMREMGenerator.js#L120)

Generates a PMREM from a supplied Scene, which can be faster than using an
image if networking bandwidth is low. Optional sigma specifies a blur radius
in radians to be applied to the scene before PMREM generation. Optional near
and far planes ensure the scene is rendered in its entirety.

#### Parameters

##### scene

`Scene`

The scene to be captured.

##### sigma?

`number` = `0`

The blur radius in radians.

##### near?

`number` = `0.1`

The near plane distance.

##### far?

`number` = `100`

The far plane distance.

##### options?

The configuration options.

###### renderTarget?

[`Vector3`](/reference/three/classes/vector3/)

The position of the internal cube camera that renders the scene.

###### size?

`number`

The texture size of the PMREM.

#### Returns

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

The resulting PMREM.

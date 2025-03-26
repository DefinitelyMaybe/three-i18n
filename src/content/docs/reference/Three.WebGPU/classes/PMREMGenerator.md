---
editUrl: false
next: false
prev: false
title: "PMREMGenerator"
---

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L101)

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

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L108)

Constructs a new PMREM generator.

#### Parameters

##### renderer

`Renderer`

The renderer.

#### Returns

`PMREMGenerator`

## Properties

### \_backgroundBox

> **\_backgroundBox**: `any`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L123)

***

### \_blurMaterial

> **\_blurMaterial**: [`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L120)

***

### \_cubemapMaterial

> **\_cubemapMaterial**: [`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L121)

***

### \_cubeSize

> **\_cubeSize**: `number`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L114)

***

### \_equirectMaterial

> **\_equirectMaterial**: [`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L122)

***

### \_lodMax

> **\_lodMax**: `number`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L113)

***

### \_lodMeshes

> **\_lodMeshes**: `any`[]

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:118](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L118)

***

### \_lodPlanes

> **\_lodPlanes**: `any`[]

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L115)

***

### \_pingPongRenderTarget

> **\_pingPongRenderTarget**: [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L111)

***

### \_renderer

> **\_renderer**: `Renderer`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L110)

***

### \_sigmas

> **\_sigmas**: `any`[]

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L117)

***

### \_sizeLods

> **\_sizeLods**: `any`[]

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L116)

## Accessors

### \_hasInitialized

#### Get Signature

> **get** **\_hasInitialized**(): `any`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L127)

##### Returns

`any`

## Methods

### \_allocateTargets()

> **\_allocateTargets**(): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:435](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L435)

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

***

### \_applyPMREM()

> **\_applyPMREM**(`cubeUVRenderTarget`): `void`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:621](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L621)

#### Parameters

##### cubeUVRenderTarget

`any`

#### Returns

`void`

***

### \_cleanup()

> **\_cleanup**(`outputTarget`): `void`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:410](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L410)

#### Parameters

##### outputTarget

`any`

#### Returns

`void`

***

### \_compileMaterial()

> **\_compileMaterial**(`material`): `Promise`\<`void`\>

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:473](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L473)

#### Parameters

##### material

`any`

#### Returns

`Promise`\<`void`\>

***

### \_dispose()

> **\_dispose**(): `void`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:396](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L396)

#### Returns

`void`

***

### \_fromTexture()

> **\_fromTexture**(`texture`, `renderTarget`): `any`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:418](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L418)

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

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:680](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L680)

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

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:480](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L480)

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

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:389](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L389)

#### Parameters

##### cubeSize

`any`

#### Returns

`void`

***

### \_setSizeFromTexture()

> **\_setSizeFromTexture**(`texture`): `void`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:375](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L375)

#### Parameters

##### texture

`any`

#### Returns

`void`

***

### \_textureToCubeUV()

> **\_textureToCubeUV**(`texture`, `cubeUVRenderTarget`): `void`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:582](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L582)

#### Parameters

##### texture

`any`

##### cubeUVRenderTarget

`any`

#### Returns

`void`

***

### compileCubemapShader()

> **compileCubemapShader**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:325](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L325)

Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
your texture's network fetch for increased concurrency.

#### Returns

`Promise`\<`any`\>

***

### compileEquirectangularShader()

> **compileEquirectangularShader**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L342)

Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
your texture's network fetch for increased concurrency.

#### Returns

`Promise`\<`any`\>

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:358](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L358)

Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
one of them will cause any others to also become unusable.

#### Returns

`void`

***

### fromCubemap()

> **fromCubemap**(`cubemap`, `renderTarget`?): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:281](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L281)

Generates a PMREM from an cubemap texture, which can be either LDR
or HDR. The ideal input cube size is 256 x 256,
as this matches best with the 256 x 256 cubemap output.

#### Parameters

##### cubemap

`Texture`

The cubemap texture to be converted.

##### renderTarget?

[`RenderTarget`](/reference/three/classes/rendertarget/) = `null`

The render target to use.

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

The resulting PMREM.

#### See

[PMREMGenerator#fromCubemapAsync](/reference/threewebgpu/classes/pmremgenerator/#fromcubemapasync)

***

### fromCubemapAsync()

> **fromCubemapAsync**(`cubemap`, `renderTarget`?): `Promise`\<[`RenderTarget`](/reference/three/classes/rendertarget/)\>

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:311](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L311)

Generates a PMREM from an cubemap texture, which can be either LDR
or HDR. The ideal input cube size is 256 x 256,
with the 256 x 256 cubemap output.

#### Parameters

##### cubemap

`Texture`

The cubemap texture to be converted.

##### renderTarget?

[`RenderTarget`](/reference/three/classes/rendertarget/) = `null`

The render target to use.

#### Returns

`Promise`\<[`RenderTarget`](/reference/three/classes/rendertarget/)\>

The resulting PMREM.

#### See

[PMREMGenerator#fromCubemap](/reference/threewebgpu/classes/pmremgenerator/#fromcubemap)

***

### fromEquirectangular()

> **fromEquirectangular**(`equirectangular`, `renderTarget`?): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:233](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L233)

Generates a PMREM from an equirectangular texture, which can be either LDR
or HDR. The ideal input image size is 1k (1024 x 512),
as this matches best with the 256 x 256 cubemap output.

#### Parameters

##### equirectangular

`Texture`

The equirectangular texture to be converted.

##### renderTarget?

[`RenderTarget`](/reference/three/classes/rendertarget/) = `null`

The render target to use.

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

The resulting PMREM.

#### See

[PMREMGenerator#fromEquirectangularAsync](/reference/threewebgpu/classes/pmremgenerator/#fromequirectangularasync)

***

### fromEquirectangularAsync()

> **fromEquirectangularAsync**(`equirectangular`, `renderTarget`?): `Promise`\<[`RenderTarget`](/reference/three/classes/rendertarget/)\>

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:263](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L263)

Generates a PMREM from an equirectangular texture, which can be either LDR
or HDR. The ideal input image size is 1k (1024 x 512),
as this matches best with the 256 x 256 cubemap output.

#### Parameters

##### equirectangular

`Texture`

The equirectangular texture to be converted.

##### renderTarget?

[`RenderTarget`](/reference/three/classes/rendertarget/) = `null`

The render target to use.

#### Returns

`Promise`\<[`RenderTarget`](/reference/three/classes/rendertarget/)\>

The resulting PMREM.

#### See

[PMREMGenerator#fromEquirectangular](/reference/threewebgpu/classes/pmremgenerator/#fromequirectangular)

***

### fromScene()

> **fromScene**(`scene`, `sigma`?, `near`?, `far`?, `options`?): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L150)

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

[`RenderTarget`](/reference/three/classes/rendertarget/)

The resulting PMREM.

#### See

[PMREMGenerator#fromSceneAsync](/reference/threewebgpu/classes/pmremgenerator/#fromsceneasync)

***

### fromSceneAsync()

> **fromSceneAsync**(`scene`, `sigma`?, `near`?, `far`?, `options`?): `Promise`\<[`RenderTarget`](/reference/three/classes/rendertarget/)\>

Defined in: [three/src/renderers/common/extras/PMREMGenerator.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/extras/PMREMGenerator.js#L215)

Generates a PMREM from a supplied Scene, which can be faster than using an
image if networking bandwidth is low. Optional sigma specifies a blur radius
in radians to be applied to the scene before PMREM generation. Optional near
and far planes ensure the scene is rendered in its entirety (the cubeCamera
is placed at the origin).

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

###### position?

[`Vector3`](/reference/three/classes/vector3/)

The position of the internal cube camera that renders the scene.

###### renderTarget?

[`RenderTarget`](/reference/three/classes/rendertarget/)

The render target to use.

###### size?

`number`

The texture size of the PMREM.

#### Returns

`Promise`\<[`RenderTarget`](/reference/three/classes/rendertarget/)\>

A Promise that resolve with the PMREM when the generation has been finished.

#### See

[PMREMGenerator#fromScene](/reference/threewebgpu/classes/pmremgenerator/#fromscene)

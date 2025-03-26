---
editUrl: false
next: false
prev: false
title: "ReflectorForSSRPass"
---

Defined in: [three/addons/objects/ReflectorForSSRPass.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L23)

A special version of [Reflector](/addons/classes/reflector/) for usage with [SSRPass](/addons/classes/ssrpass/).

## Extends

- `unknown`

## Constructors

### Constructor

> **new ReflectorForSSRPass**(`geometry`, `options`): `ReflectorForSSRPass`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L31)

Constructs a new reflector.

#### Parameters

##### geometry

`BufferGeometry`

The reflector's geometry.

##### options

The configuration options.

#### Returns

`ReflectorForSSRPass`

#### Overrides

`Mesh.constructor`

## Properties

### \_distanceAttenuation

> **\_distanceAttenuation**: `boolean`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L60)

***

### \_fresnel

> **\_fresnel**: `boolean`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L77)

***

### color

> **color**: `any`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L56)

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:269](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L269)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### doRender()

> **doRender**: (`renderer`, `scene`, `camera`) => `void`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L149)

#### Parameters

##### renderer

`any`

##### scene

`any`

##### camera

`any`

#### Returns

`void`

***

### getRenderTarget()

> **getRenderTarget**: () => `WebGLRenderTarget`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:259](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L259)

Returns the reflector's internal render target.

#### Returns

`WebGLRenderTarget`

The internal render target

***

### isReflectorForSSRPass

> **isReflectorForSSRPass**: `boolean`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L35)

***

### material

> **material**: `any`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:144](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L144)

***

### maxDistance

> **maxDistance**: `number`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L54)

***

### needsUpdate

> **needsUpdate**: `boolean`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L53)

***

### opacity

> **opacity**: `number`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L55)

***

### resolution

> **resolution**: `any`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L57)

***

### type

> **type**: `string`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L37)

***

### ReflectorShader

> `static` **ReflectorShader**: `object`

Defined in: [three/addons/objects/ReflectorForSSRPass.js:280](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ReflectorForSSRPass.js#L280)

#### defines

> **defines**: `object`

##### defines.DISTANCE\_ATTENUATION

> **DISTANCE\_ATTENUATION**: `boolean` = `true`

##### defines.FRESNEL

> **FRESNEL**: `boolean` = `true`

#### fragmentShader

> **fragmentShader**: `string`

#### name

> **name**: `string` = `'ReflectorShader'`

#### uniforms

> **uniforms**: `object`

##### uniforms.color

> **color**: `object`

##### uniforms.color.value

> **value**: `any` = `null`

##### uniforms.fresnelCoe

> **fresnelCoe**: `object`

##### uniforms.fresnelCoe.value

> **value**: `any` = `null`

##### uniforms.maxDistance

> **maxDistance**: `object`

##### uniforms.maxDistance.value

> **value**: `number` = `180`

##### uniforms.opacity

> **opacity**: `object`

##### uniforms.opacity.value

> **value**: `number` = `0.5`

##### uniforms.resolution

> **resolution**: `object`

##### uniforms.resolution.value

> **value**: `any`

##### uniforms.tDepth

> **tDepth**: `object`

##### uniforms.tDepth.value

> **value**: `any` = `null`

##### uniforms.tDiffuse

> **tDiffuse**: `object`

##### uniforms.tDiffuse.value

> **value**: `any` = `null`

##### uniforms.textureMatrix

> **textureMatrix**: `object`

##### uniforms.textureMatrix.value

> **value**: `any`

##### uniforms.virtualCameraFar

> **virtualCameraFar**: `object`

##### uniforms.virtualCameraFar.value

> **value**: `any` = `null`

##### uniforms.virtualCameraMatrixWorld

> **virtualCameraMatrixWorld**: `object`

##### uniforms.virtualCameraMatrixWorld.value

> **value**: `any`

##### uniforms.virtualCameraNear

> **virtualCameraNear**: `object`

##### uniforms.virtualCameraNear.value

> **value**: `any` = `null`

##### uniforms.virtualCameraProjectionMatrix

> **virtualCameraProjectionMatrix**: `object`

##### uniforms.virtualCameraProjectionMatrix.value

> **value**: `any`

##### uniforms.virtualCameraProjectionMatrixInverse

> **virtualCameraProjectionMatrixInverse**: `object`

##### uniforms.virtualCameraProjectionMatrixInverse.value

> **value**: `any`

#### vertexShader

> **vertexShader**: `string`

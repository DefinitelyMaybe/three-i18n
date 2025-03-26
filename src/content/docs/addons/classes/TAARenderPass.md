---
editUrl: false
next: false
prev: false
title: "TAARenderPass"
---

Defined in: [three/addons/postprocessing/TAARenderPass.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/TAARenderPass.js#L24)

Temporal Anti-Aliasing Render Pass.

When there is no motion in the scene, the TAA render pass accumulates jittered camera
samples across frames to create a high quality anti-aliased result.

Note: This effect uses no reprojection so it is no TRAA implementation.

```js
const taaRenderPass = new TAARenderPass( scene, camera );
taaRenderPass.unbiased = false;
composer.addPass( taaRenderPass );
```

## Extends

- [`SSAARenderPass`](/addons/classes/ssaarenderpass/)

## Constructors

### Constructor

> **new TAARenderPass**(`scene`, `camera`, `clearColor`?, `clearAlpha`?): `TAARenderPass`

Defined in: [three/addons/postprocessing/TAARenderPass.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/TAARenderPass.js#L34)

Constructs a new TAA render pass.

#### Parameters

##### scene

`Scene`

The scene to render.

##### camera

`Camera`

The camera.

##### clearColor?

`any`

The clear color of the render pass.

##### clearAlpha?

`number`

The clear alpha of the render pass.

#### Returns

`TAARenderPass`

#### Overrides

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`constructor`](/addons/classes/ssaarenderpass/#constructor)

## Properties

### \_copyMaterial

> **\_copyMaterial**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L105)

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`_copyMaterial`](/addons/classes/ssaarenderpass/#_copymaterial)

***

### \_copyUniforms

> **\_copyUniforms**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L103)

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`_copyUniforms`](/addons/classes/ssaarenderpass/#_copyuniforms)

***

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/SSAARenderPass.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L116)

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`_fsQuad`](/addons/classes/ssaarenderpass/#_fsquad)

***

### \_holdRenderTarget

> **\_holdRenderTarget**: `any`

Defined in: [three/addons/postprocessing/TAARenderPass.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/TAARenderPass.js#L66)

***

### \_oldClearColor

> **\_oldClearColor**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L101)

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`_oldClearColor`](/addons/classes/ssaarenderpass/#_oldclearcolor)

***

### \_sampleRenderTarget

> **\_sampleRenderTarget**: `any`

Defined in: [three/addons/postprocessing/TAARenderPass.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/TAARenderPass.js#L65)

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`_sampleRenderTarget`](/addons/classes/ssaarenderpass/#_samplerendertarget)

***

### accumulate

> **accumulate**: `boolean`

Defined in: [three/addons/postprocessing/TAARenderPass.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/TAARenderPass.js#L53)

Whether to accumulate frames or not. This enables
the TAA.

#### Default

```ts
false
```

***

### accumulateIndex

> **accumulateIndex**: `number`

Defined in: [three/addons/postprocessing/TAARenderPass.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/TAARenderPass.js#L61)

The accumulation index.

#### Default

```ts
-1
```

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L51)

The camera.

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`camera`](/addons/classes/ssaarenderpass/#camera)

***

### clear

> **clear**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L53)

If set to `true`, the pass clears its buffer before rendering

#### Default

```ts
false
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`clear`](/addons/classes/ssaarenderpass/#clear)

***

### clearAlpha

> **clearAlpha**: `number`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L95)

The clear alpha of the render pass.

#### Default

```ts
0
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`clearAlpha`](/addons/classes/ssaarenderpass/#clearalpha)

***

### clearColor

> **clearColor**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L87)

The clear color of the render pass.

#### Default

```ts
0x000000
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`clearColor`](/addons/classes/ssaarenderpass/#clearcolor)

***

### enabled

> **enabled**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L37)

If set to `true`, the pass is processed by the composer.

#### Default

```ts
true
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`enabled`](/addons/classes/ssaarenderpass/#enabled)

***

### isPass

> `readonly` **isPass**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L29)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`isPass`](/addons/classes/ssaarenderpass/#ispass)

***

### needsSwap

> **needsSwap**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L45)

If set to `true`, the pass indicates to swap read and write buffer after rendering.

#### Default

```ts
true
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`needsSwap`](/addons/classes/ssaarenderpass/#needsswap)

***

### renderToScreen

> **renderToScreen**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L62)

If set to `true`, the result of the pass is rendered to screen. The last pass in the composers
pass chain gets automatically rendered to screen, no matter how this property is configured.

#### Default

```ts
false
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`renderToScreen`](/addons/classes/ssaarenderpass/#rendertoscreen)

***

### sampleLevel

> **sampleLevel**: `number`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L60)

The sample level. Specified as n, where the number of
samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.

#### Default

```ts
4
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`sampleLevel`](/addons/classes/ssaarenderpass/#samplelevel)

***

### scene

> **scene**: `Scene`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L44)

The scene to render.

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`scene`](/addons/classes/ssaarenderpass/#scene)

***

### stencilBuffer

> **stencilBuffer**: `boolean`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L79)

Whether to use a stencil buffer or not. This property can't
be changed after the first render.

#### Default

```ts
false
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`stencilBuffer`](/addons/classes/ssaarenderpass/#stencilbuffer)

***

### unbiased

> **unbiased**: `boolean`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L70)

Whether the pass should be unbiased or not. This property has the most
visible effect when rendering to a RGBA8 buffer because it mitigates
rounding errors. By default RGBA16F is used.

#### Default

```ts
true
```

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`unbiased`](/addons/classes/ssaarenderpass/#unbiased)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/TAARenderPass.js:200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/TAARenderPass.js#L200)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`dispose`](/addons/classes/ssaarenderpass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`, `deltaTime`): `void`

Defined in: [three/addons/postprocessing/TAARenderPass.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/TAARenderPass.js#L81)

Performs the TAA render pass.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

##### writeBuffer

`WebGLRenderTarget`

The write buffer. This buffer is intended as the rendering
destination for the pass.

##### readBuffer

`WebGLRenderTarget`

The read buffer. The pass can access the result from the
previous pass from this buffer.

##### deltaTime

`number`

The delta time in seconds.

#### Returns

`void`

#### Overrides

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`render`](/addons/classes/ssaarenderpass/#render)

***

### setSize()

> **setSize**(`width`, `height`): `void`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L145)

Sets the size of the pass.

#### Parameters

##### width

`number`

The width to set.

##### height

`number`

The width to set.

#### Returns

`void`

#### Inherited from

[`SSAARenderPass`](/addons/classes/ssaarenderpass/).[`setSize`](/addons/classes/ssaarenderpass/#setsize)

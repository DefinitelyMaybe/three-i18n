---
editUrl: false
next: false
prev: false
title: "SSAARenderPass"
---

Defined in: [three/addons/postprocessing/SSAARenderPass.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L25)

Supersample Anti-Aliasing Render Pass.

This manual approach to SSAA re-renders the scene ones for each sample with camera jitter and accumulates the results.

```js
const ssaaRenderPass = new SSAARenderPass( scene, camera );
ssaaRenderPass.sampleLevel = 3;
composer.addPass( ssaaRenderPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Extended by

- [`TAARenderPass`](/addons/classes/taarenderpass/)

## Constructors

### Constructor

> **new SSAARenderPass**(`scene`, `camera`, `clearColor`?, `clearAlpha`?): `SSAARenderPass`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L35)

Constructs a new SSAA render pass.

#### Parameters

##### scene

`Scene`

The scene to render.

##### camera

`Camera`

The camera.

##### clearColor?

`any` = `0x000000`

The clear color of the render pass.

##### clearAlpha?

`number` = `0`

The clear alpha of the render pass.

#### Returns

`SSAARenderPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_copyMaterial

> **\_copyMaterial**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L105)

***

### \_copyUniforms

> **\_copyUniforms**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L103)

***

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/SSAARenderPass.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L116)

***

### \_oldClearColor

> **\_oldClearColor**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L101)

***

### \_sampleRenderTarget

> **\_sampleRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L99)

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L51)

The camera.

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

[`Pass`](/addons/classes/pass/).[`clear`](/addons/classes/pass/#clear)

***

### clearAlpha

> **clearAlpha**: `number`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L95)

The clear alpha of the render pass.

#### Default

```ts
0
```

***

### clearColor

> **clearColor**: `any`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L87)

The clear color of the render pass.

#### Default

```ts
0x000000
```

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

[`Pass`](/addons/classes/pass/).[`enabled`](/addons/classes/pass/#enabled)

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

[`Pass`](/addons/classes/pass/).[`isPass`](/addons/classes/pass/#ispass)

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

[`Pass`](/addons/classes/pass/).[`needsSwap`](/addons/classes/pass/#needsswap)

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

[`Pass`](/addons/classes/pass/).[`renderToScreen`](/addons/classes/pass/#rendertoscreen)

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

***

### scene

> **scene**: `Scene`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L44)

The scene to render.

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

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L124)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`): `void`

Defined in: [three/addons/postprocessing/SSAARenderPass.js:162](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAARenderPass.js#L162)

Performs the SSAA render pass.

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

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`render`](/addons/classes/pass/#render)

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

#### Overrides

[`Pass`](/addons/classes/pass/).[`setSize`](/addons/classes/pass/#setsize)

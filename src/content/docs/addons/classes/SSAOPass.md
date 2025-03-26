---
editUrl: false
next: false
prev: false
title: "SSAOPass"
---

Defined in: [three/addons/postprocessing/SSAOPass.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L43)

A pass for a basic SSAO effect.

[SAOPass](/addons/classes/saopass/) and GTAPass produce a more advanced AO but are also
more expensive.

```js
const ssaoPass = new SSAOPass( scene, camera, width, height );
composer.addPass( ssaoPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new SSAOPass**(`scene`, `camera`, `width`?, `height`?, `kernelSize`?): `SSAOPass`

Defined in: [three/addons/postprocessing/SSAOPass.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L54)

Constructs a new SSAO pass.

#### Parameters

##### scene

`Scene`

The scene to compute the AO for.

##### camera

`Camera`

The camera.

##### width?

`number` = `512`

The width of the effect.

##### height?

`number` = `512`

The height of the effect.

##### kernelSize?

`number` = `32`

The kernel size.

#### Returns

`SSAOPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/SSAOPass.js:239](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L239)

***

### \_originalClearColor

> **\_originalClearColor**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:241](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L241)

***

### \_visibilityCache

> **\_visibilityCache**: `Map`\<`any`, `any`\>

Defined in: [three/addons/postprocessing/SSAOPass.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L141)

***

### blurMaterial

> **blurMaterial**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L198)

***

### blurRenderTarget

> **blurRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L167)

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/postprocessing/SSAOPass.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L95)

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

### copyMaterial

> **copyMaterial**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:222](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L222)

***

### depthRenderMaterial

> **depthRenderMaterial**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:209](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L209)

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

### height

> **height**: `number`

Defined in: [three/addons/postprocessing/SSAOPass.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L72)

The height of the effect.

#### Default

```ts
512
```

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

### kernel

> **kernel**: `any`[]

Defined in: [three/addons/postprocessing/SSAOPass.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L112)

***

### kernelRadius

> **kernelRadius**: `number`

Defined in: [three/addons/postprocessing/SSAOPass.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L111)

The kernel radius controls how wide the
AO spreads.

#### Default

```ts
8
```

***

### maxDistance

> **maxDistance**: `number`

Defined in: [three/addons/postprocessing/SSAOPass.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L139)

Defines the maximum distance that should be
affected by the AO.

#### Default

```ts
0.1
```

***

### minDistance

> **minDistance**: `number`

Defined in: [three/addons/postprocessing/SSAOPass.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L130)

Defines the minimum distance that should be
affected by the AO.

#### Default

```ts
0.005
```

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

### noiseTexture

> **noiseTexture**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L113)

***

### normalMaterial

> **normalMaterial**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L193)

***

### normalRenderTarget

> **normalRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L156)

***

### output

> **output**: `number`

Defined in: [three/addons/postprocessing/SSAOPass.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L121)

The output configuration.

#### Default

```ts
0
```

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

### scene

> **scene**: `Scene`

Defined in: [three/addons/postprocessing/SSAOPass.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L102)

The scene to render the AO for.

***

### ssaoMaterial

> **ssaoMaterial**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:171](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L171)

***

### ssaoRenderTarget

> **ssaoRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSAOPass.js:165](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L165)

***

### width

> **width**: `number`

Defined in: [three/addons/postprocessing/SSAOPass.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L64)

The width of the effect.

#### Default

```ts
512
```

***

### OUTPUT

> `static` **OUTPUT**: `object`

Defined in: [three/addons/postprocessing/SSAOPass.js:517](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L517)

#### Blur

> **Blur**: `number` = `2`

#### Default

> **Default**: `number` = `0`

#### Depth

> **Depth**: `number` = `3`

#### Normal

> **Normal**: `number` = `4`

#### SSAO

> **SSAO**: `number` = `1`

## Methods

### \_generateRandomKernelRotations()

> **\_generateRandomKernelRotations**(): `void`

Defined in: [three/addons/postprocessing/SSAOPass.js:458](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L458)

#### Returns

`void`

***

### \_generateSampleKernel()

> **\_generateSampleKernel**(`kernelSize`): `void`

Defined in: [three/addons/postprocessing/SSAOPass.js:435](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L435)

#### Parameters

##### kernelSize

`any`

#### Returns

`void`

***

### \_overrideVisibility()

> **\_overrideVisibility**(): `void`

Defined in: [three/addons/postprocessing/SSAOPass.js:484](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L484)

#### Returns

`void`

***

### \_renderOverride()

> **\_renderOverride**(`renderer`, `overrideMaterial`, `renderTarget`, `clearColor`, `clearAlpha`): `void`

Defined in: [three/addons/postprocessing/SSAOPass.js:403](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L403)

#### Parameters

##### renderer

`any`

##### overrideMaterial

`any`

##### renderTarget

`any`

##### clearColor

`any`

##### clearAlpha

`any`

#### Returns

`void`

***

### \_renderPass()

> **\_renderPass**(`renderer`, `passMaterial`, `renderTarget`, `clearColor`, `clearAlpha`): `void`

Defined in: [three/addons/postprocessing/SSAOPass.js:374](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L374)

#### Parameters

##### renderer

`any`

##### passMaterial

`any`

##### renderTarget

`any`

##### clearColor

`any`

##### clearAlpha

`any`

#### Returns

`void`

***

### \_restoreVisibility()

> **\_restoreVisibility**(): `void`

Defined in: [three/addons/postprocessing/SSAOPass.js:499](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L499)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/SSAOPass.js:249](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L249)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`): `void`

Defined in: [three/addons/postprocessing/SSAOPass.js:281](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L281)

Performs the SSAO pass.

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

Defined in: [three/addons/postprocessing/SSAOPass.js:355](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSAOPass.js#L355)

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

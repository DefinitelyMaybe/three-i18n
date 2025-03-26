---
editUrl: false
next: false
prev: false
title: "GTAOPass"
---

Defined in: [three/addons/postprocessing/GTAOPass.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L42)

A pass for an GTAO effect.

`GTAOPass` provides better quality than [SSAOPass](/addons/classes/ssaopass/) but is also more expensive.

```js
const gtaoPass = new GTAOPass( scene, camera, width, height );
gtaoPass.output = GTAOPass.OUTPUT.Denoise;
composer.addPass( gtaoPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new GTAOPass**(`scene`, `camera`, `width`?, `height`?, `parameters`?, `aoParameters`?, `pdParameters`?): `GTAOPass`

Defined in: [three/addons/postprocessing/GTAOPass.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L55)

Constructs a new GTAO pass.

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

##### parameters?

`any`

The pass parameters.

##### aoParameters?

`any`

The AO parameters.

##### pdParameters?

`any`

The denoise parameters.

#### Returns

`GTAOPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/GTAOPass.js:220](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L220)

***

### \_originalClearColor

> **\_originalClearColor**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:222](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L222)

***

### \_renderGBuffer

> **\_renderGBuffer**: `boolean`

Defined in: [three/addons/postprocessing/GTAOPass.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L104)

***

### \_visibilityCache

> **\_visibilityCache**: `Map`\<`any`, `any`\>

Defined in: [three/addons/postprocessing/GTAOPass.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L105)

***

### blendIntensity

> **blendIntensity**: `number`

Defined in: [three/addons/postprocessing/GTAOPass.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L113)

The AO blend intensity.

#### Default

```ts
1
```

***

### blendMaterial

> **blendMaterial**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:204](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L204)

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/postprocessing/GTAOPass.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L88)

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

Defined in: [three/addons/postprocessing/GTAOPass.js:189](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L189)

***

### depthRenderMaterial

> **depthRenderMaterial**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:179](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L179)

***

### depthTexture

> **depthTexture**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:307](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L307)

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

### gtaoMaterial

> **gtaoMaterial**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L145)

***

### gtaoNoiseTexture

> **gtaoNoiseTexture**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L139)

***

### gtaoRenderTarget

> **gtaoRenderTarget**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L142)

***

### height

> **height**: `number`

Defined in: [three/addons/postprocessing/GTAOPass.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L73)

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

### normalMaterial

> **normalMaterial**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L160)

***

### normalRenderTarget

> **normalRenderTarget**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:316](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L316)

***

### normalTexture

> **normalTexture**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:308](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L308)

***

### output

> **output**: `number`

Defined in: [three/addons/postprocessing/GTAOPass.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L103)

The output configuration.

#### Default

```ts
0
```

***

### pdMaterial

> **pdMaterial**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L163)

***

### pdNoiseTexture

> **pdNoiseTexture**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L140)

***

### pdRadiusExponent

> **pdRadiusExponent**: `number`

Defined in: [three/addons/postprocessing/GTAOPass.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L129)

The Poisson Denoise radius exponent.

#### Default

```ts
2
```

***

### pdRenderTarget

> **pdRenderTarget**: `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:143](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L143)

***

### pdRings

> **pdRings**: `number`

Defined in: [three/addons/postprocessing/GTAOPass.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L121)

The number of Poisson Denoise rings.

#### Default

```ts
2
```

***

### pdSamples

> **pdSamples**: `number`

Defined in: [three/addons/postprocessing/GTAOPass.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L137)

The Poisson Denoise sample count.

#### Default

```ts
16
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

Defined in: [three/addons/postprocessing/GTAOPass.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L95)

The scene to render the AO for.

***

### width

> **width**: `number`

Defined in: [three/addons/postprocessing/GTAOPass.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L65)

The width of the effect.

#### Default

```ts
512
```

***

### OUTPUT

> `static` **OUTPUT**: `object`

Defined in: [three/addons/postprocessing/GTAOPass.js:715](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L715)

#### AO

> **AO**: `number` = `4`

#### Default

> **Default**: `number` = `0`

#### Denoise

> **Denoise**: `number` = `5`

#### Depth

> **Depth**: `number` = `2`

#### Diffuse

> **Diffuse**: `number` = `1`

#### Normal

> **Normal**: `number` = `3`

#### Off

> **Off**: `number` = `- 1`

## Accessors

### gtaoMap

#### Get Signature

> **get** **gtaoMap**(): `Texture`

Defined in: [three/addons/postprocessing/GTAOPass.js:289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L289)

A texture holding the computed AO.

##### Returns

`Texture`

## Methods

### \_generateNoise()

> **\_generateNoise**(`size`): `any`

Defined in: [three/addons/postprocessing/GTAOPass.js:681](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L681)

#### Parameters

##### size

`number` = `64`

#### Returns

`any`

***

### \_overrideVisibility()

> **\_overrideVisibility**(): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:650](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L650)

#### Returns

`void`

***

### \_renderOverride()

> **\_renderOverride**(`renderer`, `overrideMaterial`, `renderTarget`, `clearColor`, `clearAlpha`): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:620](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L620)

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

Defined in: [three/addons/postprocessing/GTAOPass.js:591](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L591)

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

Defined in: [three/addons/postprocessing/GTAOPass.js:665](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L665)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:268](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L268)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:497](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L497)

Performs the GTAO pass.

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

### setGBuffer()

> **setGBuffer**(`depthTexture`?, `normalTexture`?): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L303)

Configures the GBuffer of this pass. If no arguments are passed,
the pass creates an internal render target for holding depth
and normal data.

#### Parameters

##### depthTexture?

`DepthTexture`

The depth texture.

##### normalTexture?

`DepthTexture`

The normal texture.

#### Returns

`void`

***

### setSceneClipBox()

> **setSceneClipBox**(`box`): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L350)

Configures the clip box of the GTAO shader with the given AABB.

#### Parameters

##### box

`Box3`

The AABB enclosing the scene that should receive AO. When passing
`null`, to clip box is used.

#### Returns

`void`

***

### setSize()

> **setSize**(`width`, `height`): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L246)

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

***

### updateGtaoMaterial()

> **updateGtaoMaterial**(`parameters`): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L373)

Updates the GTAO material from the given paramter object.

#### Parameters

##### parameters

`any`

The GTAO material parameters.

#### Returns

`void`

***

### updatePdMaterial()

> **updatePdMaterial**(`parameters`): `void`

Defined in: [three/addons/postprocessing/GTAOPass.js:427](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GTAOPass.js#L427)

Updates the Denoise material from the given paramter object.

#### Parameters

##### parameters

`any`

The denoise parameters.

#### Returns

`void`

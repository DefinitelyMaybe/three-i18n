---
editUrl: false
next: false
prev: false
title: "SAOPass"
---

Defined in: [three/addons/postprocessing/SAOPass.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L37)

A SAO implementation inspired from

## Bhouston

previous SAO work.

`SAOPass` provides better quality than [SSAOPass](/addons/classes/ssaopass/) but is also more expensive.

```js
const saoPass = new SAOPass( scene, camera );
composer.addPass( saoPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new SAOPass**(`scene`, `camera`, `resolution`?): `SAOPass`

Defined in: [three/addons/postprocessing/SAOPass.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L46)

Constructs a new SAO pass.

#### Parameters

##### scene

`Scene`

The scene to compute the AO for.

##### camera

`Camera`

The camera.

##### resolution?

`Vector2` = `...`

The effect's resolution.

#### Returns

`SAOPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_oldClearAlpha

> **\_oldClearAlpha**: `number`

Defined in: [three/addons/postprocessing/SAOPass.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L82)

***

### \_oldClearColor

> **\_oldClearColor**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L81)

***

### \_originalClearColor

> **\_originalClearColor**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L80)

***

### blurIntermediateRenderTarget

> **blurIntermediateRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L111)

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/postprocessing/SAOPass.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L62)

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

### fsQuad

> **fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/SAOPass.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L184)

***

### hBlurMaterial

> **hBlurMaterial**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:154](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L154)

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

### materialCopy

> **materialCopy**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L167)

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

Defined in: [three/addons/postprocessing/SAOPass.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L124)

***

### normalRenderTarget

> **normalRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L117)

***

### params

> **params**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L89)

The SAO paramter.

***

### prevNumSamples

> **prevNumSamples**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L240)

***

### prevStdDev

> **prevStdDev**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:239](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L239)

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

### resolution

> **resolution**: `Vector2`

Defined in: [three/addons/postprocessing/SAOPass.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L108)

The effect's resolution.

#### Default

```ts
(256,256)
```

***

### saoMaterial

> **saoMaterial**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L127)

***

### saoRenderTarget

> **saoRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L110)

***

### scene

> **scene**: `Scene`

Defined in: [three/addons/postprocessing/SAOPass.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L55)

The scene to render the AO for.

***

### vBlurMaterial

> **vBlurMaterial**: `any`

Defined in: [three/addons/postprocessing/SAOPass.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L141)

***

### OUTPUT

> `static` **OUTPUT**: `object`

Defined in: [three/addons/postprocessing/SAOPass.js:400](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L400)

#### Default

> **Default**: `number` = `0`

#### Normal

> **Normal**: `number` = `2`

#### SAO

> **SAO**: `number` = `1`

## Methods

### \_renderOverride()

> **\_renderOverride**(`renderer`, `overrideMaterial`, `renderTarget`, `clearColor`, `clearAlpha`): `void`

Defined in: [three/addons/postprocessing/SAOPass.js:368](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L368)

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

Defined in: [three/addons/postprocessing/SAOPass.js:339](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L339)

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

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/SAOPass.js:321](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L321)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`): `void`

Defined in: [three/addons/postprocessing/SAOPass.js:199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L199)

Performs the SAO pass.

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

Defined in: [three/addons/postprocessing/SAOPass.js:298](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SAOPass.js#L298)

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

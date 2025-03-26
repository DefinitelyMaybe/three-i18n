---
editUrl: false
next: false
prev: false
title: "SSRPass"
---

Defined in: [three/addons/postprocessing/SSRPass.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L38)

A pass for a basic SSR effect.

```js
const ssrPass = new SSRPass( {
	renderer,
	scene,
	camera,
	width: innerWidth,
	height: innerHeight
} );
composer.addPass( ssrPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new SSRPass**(`options`): `SSRPass`

Defined in: [three/addons/postprocessing/SSRPass.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L45)

Constructs a new SSR pass.

#### Parameters

##### options

`SSRPass`

The pass options.

#### Returns

`SSRPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_bouncing

> **\_bouncing**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:181](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L181)

***

### \_distanceAttenuation

> **\_distanceAttenuation**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:221](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L221)

***

### \_fresnel

> **\_fresnel**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L247)

***

### \_infiniteThick

> **\_infiniteThick**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:272](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L272)

***

### \_selects

> **\_selects**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L137)

***

### beautyRenderTarget

> **beautyRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:304](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L304)

***

### blur

> **blur**: `boolean`

Defined in: [three/addons/postprocessing/SSRPass.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L219)

Whether to blur reflections or not.

#### Default

```ts
true
```

***

### blurMaterial

> **blurMaterial**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:391](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L391)

***

### blurMaterial2

> **blurMaterial2**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:402](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L402)

***

### blurRenderTarget

> **blurRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:343](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L343)

***

### blurRenderTarget2

> **blurRenderTarget2**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:344](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L344)

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/postprocessing/SSRPass.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L92)

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

Defined in: [three/addons/postprocessing/SSRPass.js:437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L437)

***

### depthRenderMaterial

> **depthRenderMaterial**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:424](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L424)

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

Defined in: [three/addons/postprocessing/SSRPass.js:453](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L453)

***

### groundReflector

> **groundReflector**: `ReflectorForSSRPass`

Defined in: [three/addons/postprocessing/SSRPass.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L100)

The ground reflector.

#### Default

```ts
0
```

***

### height

> **height**: `number`

Defined in: [three/addons/postprocessing/SSRPass.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L63)

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

### maxDistance

> **maxDistance**: `number`

Defined in: [three/addons/postprocessing/SSRPass.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L124)

Controls how far a fragment can reflect.

#### Default

```ts
180
```

***

### metalnessOffMaterial

> **metalnessOffMaterial**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:385](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L385)

***

### metalnessOnMaterial

> **metalnessOnMaterial**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:379](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L379)

***

### metalnessRenderTarget

> **metalnessRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:328](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L328)

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

Defined in: [three/addons/postprocessing/SSRPass.js:374](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L374)

***

### normalRenderTarget

> **normalRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:320](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L320)

***

### opacity

> **opacity**: `number`

Defined in: [three/addons/postprocessing/SSRPass.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L108)

The opactiy.

#### Default

```ts
0.5
```

***

### originalClearColor

> **originalClearColor**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:455](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L455)

***

### output

> **output**: `number`

Defined in: [three/addons/postprocessing/SSRPass.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L116)

The output configuration.

#### Default

```ts
0
```

***

### prevRenderTarget

> **prevRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:313](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L313)

***

### renderer

> **renderer**: `WebGLRenderer`

Defined in: [three/addons/postprocessing/SSRPass.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L78)

The renderer.

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

Defined in: [three/addons/postprocessing/SSRPass.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L85)

The scene to render.

***

### selective

> **selective**: `boolean`

Defined in: [three/addons/postprocessing/SSRPass.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L145)

Whether the pass is selective or not.

#### Default

```ts
false
```

***

### ssrMaterial

> **ssrMaterial**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L349)

***

### ssrRenderTarget

> **ssrRenderTarget**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L338)

***

### tempColor

> **tempColor**: `any`

Defined in: [three/addons/postprocessing/SSRPass.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L135)

***

### thickness

> **thickness**: `number`

Defined in: [three/addons/postprocessing/SSRPass.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L133)

Controls the cutoff between what counts as a
possible reflection hit and what does not.

#### Default

```ts
.018
```

***

### width

> **width**: `number`

Defined in: [three/addons/postprocessing/SSRPass.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L55)

The width of the effect.

#### Default

```ts
512
```

***

### OUTPUT

> `static` **OUTPUT**: `object`

Defined in: [three/addons/postprocessing/SSRPass.js:817](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L817)

Constructor options of `SSRPass`.

#### Beauty

> **Beauty**: `number` = `3`

#### Default

> **Default**: `number` = `0`

#### Depth

> **Depth**: `number` = `4`

#### Metalness

> **Metalness**: `number` = `7`

#### Normal

> **Normal**: `number` = `5`

#### SSR

> **SSR**: `number` = `1`

## Methods

### \_renderMetalness()

> **\_renderMetalness**(`renderer`, `overrideMaterial`, `renderTarget`, `clearColor`, `clearAlpha`): `void`

Defined in: [three/addons/postprocessing/SSRPass.js:746](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L746)

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

### \_renderOverride()

> **\_renderOverride**(`renderer`, `overrideMaterial`, `renderTarget`, `clearColor`, `clearAlpha`): `void`

Defined in: [three/addons/postprocessing/SSRPass.js:714](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L714)

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

Defined in: [three/addons/postprocessing/SSRPass.js:685](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L685)

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

Defined in: [three/addons/postprocessing/SSRPass.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L463)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`): `void`

Defined in: [three/addons/postprocessing/SSRPass.js:503](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L503)

Performs the SSR pass.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

##### writeBuffer

`WebGLRenderTarget`

The write buffer. This buffer is intended as the rendering
destination for the pass.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`render`](/addons/classes/pass/#render)

***

### setSize()

> **setSize**(`width`, `height`): `void`

Defined in: [three/addons/postprocessing/SSRPass.js:658](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SSRPass.js#L658)

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

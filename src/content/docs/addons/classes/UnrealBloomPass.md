---
editUrl: false
next: false
prev: false
title: "UnrealBloomPass"
---

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L35)

This pass is inspired by the bloom pass of Unreal Engine. It creates a
mip map chain of bloom textures and blurs them with different radii. Because
of the weighted combination of mips, and because larger blurs are done on
higher mips, this effect provides good quality and performance.

When using this pass, tone mapping must be enabled in the renderer settings.

Reference:
- [Bloom in Unreal Engine][https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/Bloom/](https://docs.unrealengine.com/latest/INT/Engine/Rendering/PostProcessEffects/Bloom/)

```js
const resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );
const bloomPass = new UnrealBloomPass( resolution, 1.5, 0.4, 0.85 );
composer.addPass( bloomPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new UnrealBloomPass**(`resolution`?, `strength`?, `radius`?, `threshold`?): `UnrealBloomPass`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L45)

Constructs a new Unreal Bloom pass.

#### Parameters

##### resolution?

`Vector2`

The effect's resolution.

##### strength?

`number` = `1`

The Bloom strength.

##### radius?

`number`

The Bloom radius.

##### threshold?

`number`

The luminance threshold limits which bright areas contribute to the Bloom effect.

#### Returns

`UnrealBloomPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_basic

> **\_basic**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L196)

***

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L198)

***

### \_oldClearAlpha

> **\_oldClearAlpha**: `number`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:194](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L194)

***

### \_oldClearColor

> **\_oldClearColor**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L193)

***

### blendMaterial

> **blendMaterial**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:183](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L183)

***

### bloomTintColors

> **bloomTintColors**: `any`[]

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L176)

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

### clearColor

> **clearColor**: `Color`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L85)

The effect's clear color

#### Default

```ts
(0,0,0)
```

***

### compositeMaterial

> **compositeMaterial**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:165](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L165)

***

### copyUniforms

> **copyUniforms**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:181](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L181)

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

### highPassUniforms

> **highPassUniforms**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L133)

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

### materialHighPassFilter

> **materialHighPassFilter**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L138)

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

### nMips

> **nMips**: `number`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L100)

***

### radius

> **radius**: `number`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L62)

The Bloom radius.

***

### renderTargetBright

> **renderTargetBright**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L104)

***

### renderTargetsHorizontal

> **renderTargetsHorizontal**: `any`[]

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L98)

***

### renderTargetsVertical

> **renderTargetsVertical**: `any`[]

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L99)

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

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L77)

The effect's resolution.

#### Default

```ts
(256,256)
```

***

### separableBlurMaterials

> **separableBlurMaterials**: `any`[]

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L146)

***

### strength

> **strength**: `number`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L55)

The Bloom strength.

#### Default

```ts
1
```

***

### threshold

> **threshold**: `number`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L69)

The luminance threshold limits which bright areas contribute to the Bloom effect.

***

### BlurDirectionX

> `static` **BlurDirectionX**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:488](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L488)

***

### BlurDirectionY

> `static` **BlurDirectionY**: `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:489](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L489)

## Methods

### \_getCompositeMaterial()

> **\_getCompositeMaterial**(`nMips`): `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:431](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L431)

#### Parameters

##### nMips

`any`

#### Returns

`any`

***

### \_getSeparableBlurMaterial()

> **\_getSeparableBlurMaterial**(`kernelRadius`): `any`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:375](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L375)

#### Parameters

##### kernelRadius

`any`

#### Returns

`any`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:206](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L206)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`, `deltaTime`, `maskActive`): `void`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:278](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L278)

Performs the Bloom pass.

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

##### maskActive

`boolean`

Whether masking is active or not.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`render`](/addons/classes/pass/#render)

***

### setSize()

> **setSize**(`width`, `height`): `void`

Defined in: [three/addons/postprocessing/UnrealBloomPass.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/UnrealBloomPass.js#L246)

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

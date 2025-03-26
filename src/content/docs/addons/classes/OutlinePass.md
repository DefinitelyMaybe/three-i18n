---
editUrl: false
next: false
prev: false
title: "OutlinePass"
---

Defined in: [three/addons/postprocessing/OutlinePass.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L30)

A pass for rendering outlines around selected objects.

```js
const resolution = new THREE.Vector2( window.innerWidth, window.innerHeight );
const outlinePass = new OutlinePass( resolution, scene, camera );
composer.addPass( outlinePass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new OutlinePass**(`resolution`?, `scene`?, `camera`?, `selectedObjects`?): `OutlinePass`

Defined in: [three/addons/postprocessing/OutlinePass.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L41)

Constructs a new outline pass.

#### Parameters

##### resolution?

`Vector2`

The effect's resolution.

##### scene?

`Scene`

The scene to render.

##### camera?

`Camera`

The camera.

##### selectedObjects?

`Object3D`[]

The selected 3D objects that should receive an outline.

#### Returns

`OutlinePass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/OutlinePass.js:225](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L225)

***

### \_oldClearColor

> **\_oldClearColor**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:222](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L222)

***

### \_selectionCache

> **\_selectionCache**: `Set`\<`any`\>

Defined in: [three/addons/postprocessing/OutlinePass.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L142)

***

### \_visibilityCache

> **\_visibilityCache**: `Map`\<`any`, `any`\>

Defined in: [three/addons/postprocessing/OutlinePass.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L141)

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

### copyUniforms

> **copyUniforms**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:208](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L208)

***

### depthMaterial

> **depthMaterial**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L159)

***

### downSampleRatio

> **downSampleRatio**: `number`

Defined in: [three/addons/postprocessing/OutlinePass.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L131)

The downsample ratio. The effect can be rendered in a much
lower resolution than the beauty pass.

#### Default

```ts
2
```

***

### edgeDetectionMaterial

> **edgeDetectionMaterial**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:183](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L183)

***

### edgeGlow

> **edgeGlow**: `number`

Defined in: [three/addons/postprocessing/OutlinePass.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L88)

Can be used for an animated glow/pulse effect.

#### Default

```ts
0
```

***

### edgeStrength

> **edgeStrength**: `number`

Defined in: [three/addons/postprocessing/OutlinePass.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L122)

The edge strength.

#### Default

```ts
3
```

***

### edgeThickness

> **edgeThickness**: `number`

Defined in: [three/addons/postprocessing/OutlinePass.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L114)

The edge thickness.

#### Default

```ts
1
```

***

### enabled

> **enabled**: `boolean`

Defined in: [three/addons/postprocessing/OutlinePass.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L219)

If set to `true`, the pass is processed by the composer.

#### Default

```ts
true
```

#### Inherited from

[`Pass`](/addons/classes/pass/).[`enabled`](/addons/classes/pass/#enabled)

***

### hiddenEdgeColor

> **hiddenEdgeColor**: `Color`

Defined in: [three/addons/postprocessing/OutlinePass.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L80)

The hidden edge color.

#### Default

```ts
(0.1,0.04,0.02)
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

### materialCopy

> **materialCopy**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L210)

***

### needsSwap

> **needsSwap**: `boolean`

Defined in: [three/addons/postprocessing/OutlinePass.js:220](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L220)

If set to `true`, the pass indicates to swap read and write buffer after rendering.

#### Default

```ts
true
```

#### Inherited from

[`Pass`](/addons/classes/pass/).[`needsSwap`](/addons/classes/pass/#needsswap)

***

### oldClearAlpha

> **oldClearAlpha**: `number`

Defined in: [three/addons/postprocessing/OutlinePass.js:223](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L223)

***

### overlayMaterial

> **overlayMaterial**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:202](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L202)

***

### patternTexture

> **patternTexture**: `Texture`

Defined in: [three/addons/postprocessing/OutlinePass.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L106)

Can be used to highlight selected 3D objects. Requires to set
[OutlinePass#usePatternTexture](/addons/classes/outlinepass/#usepatterntexture) to `true`.

#### Default

```ts
null
```

***

### prepareMaskMaterial

> **prepareMaskMaterial**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L164)

***

### pulsePeriod

> **pulsePeriod**: `number`

Defined in: [three/addons/postprocessing/OutlinePass.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L139)

The pulse period.

#### Default

```ts
0
```

***

### renderCamera

> **renderCamera**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L57)

The camera.

***

### renderScene

> **renderScene**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L50)

The scene to render.

***

### renderTargetBlurBuffer1

> **renderTargetBlurBuffer1**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L176)

***

### renderTargetBlurBuffer2

> **renderTargetBlurBuffer2**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:179](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L179)

***

### renderTargetDepthBuffer

> **renderTargetDepthBuffer**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:168](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L168)

***

### renderTargetEdgeBuffer1

> **renderTargetEdgeBuffer1**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L184)

***

### renderTargetEdgeBuffer2

> **renderTargetEdgeBuffer2**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:187](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L187)

***

### renderTargetMaskBuffer

> **renderTargetMaskBuffer**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:155](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L155)

***

### renderTargetMaskDownSampleBuffer

> **renderTargetMaskDownSampleBuffer**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L172)

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

Defined in: [three/addons/postprocessing/OutlinePass.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L150)

The effect's resolution.

#### Default

```ts
(256,256)
```

***

### selectedObjects

> **selectedObjects**: `Object3D`[]

Defined in: [three/addons/postprocessing/OutlinePass.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L64)

The selected 3D objects that should receive an outline.

***

### separableBlurMaterial1

> **separableBlurMaterial1**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:194](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L194)

***

### separableBlurMaterial2

> **separableBlurMaterial2**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:197](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L197)

***

### tempPulseColor1

> **tempPulseColor1**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:227](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L227)

***

### tempPulseColor2

> **tempPulseColor2**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L228)

***

### textureMatrix

> **textureMatrix**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:229](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L229)

***

### usePatternTexture

> **usePatternTexture**: `boolean`

Defined in: [three/addons/postprocessing/OutlinePass.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L97)

Whether to use a pattern texture for to highlight selected
3D objects or not.

#### Default

```ts
false
```

***

### visibleEdgeColor

> **visibleEdgeColor**: `Color`

Defined in: [three/addons/postprocessing/OutlinePass.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L72)

The visible edge color.

#### Default

```ts
(1,1,1)
```

***

### BlurDirectionX

> `static` **BlurDirectionX**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:770](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L770)

***

### BlurDirectionY

> `static` **BlurDirectionY**: `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:771](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L771)

## Methods

### \_changeVisibilityOfNonSelectedObjects()

> **\_changeVisibilityOfNonSelectedObjects**(`bVisible`): `void`

Defined in: [three/addons/postprocessing/OutlinePass.js:489](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L489)

#### Parameters

##### bVisible

`any`

#### Returns

`void`

***

### \_changeVisibilityOfSelectedObjects()

> **\_changeVisibilityOfSelectedObjects**(`bVisible`): `void`

Defined in: [three/addons/postprocessing/OutlinePass.js:468](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L468)

#### Parameters

##### bVisible

`any`

#### Returns

`void`

***

### \_getEdgeDetectionMaterial()

> **\_getEdgeDetectionMaterial**(): `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:611](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L611)

#### Returns

`any`

***

### \_getOverlayMaterial()

> **\_getOverlayMaterial**(): `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:715](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L715)

#### Returns

`any`

***

### \_getPrepareMaskMaterial()

> **\_getPrepareMaskMaterial**(): `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:549](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L549)

#### Returns

`any`

***

### \_getSeparableBlurMaterial()

> **\_getSeparableBlurMaterial**(`maxRadius`): `any`

Defined in: [three/addons/postprocessing/OutlinePass.js:658](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L658)

#### Parameters

##### maxRadius

`any`

#### Returns

`any`

***

### \_updateSelectionCache()

> **\_updateSelectionCache**(): `void`

Defined in: [three/addons/postprocessing/OutlinePass.js:447](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L447)

#### Returns

`void`

***

### \_updateTextureMatrix()

> **\_updateTextureMatrix**(): `void`

Defined in: [three/addons/postprocessing/OutlinePass.js:538](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L538)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/OutlinePass.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L245)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`, `deltaTime`, `maskActive`): `void`

Defined in: [three/addons/postprocessing/OutlinePass.js:306](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L306)

Performs the Outline pass.

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

Defined in: [three/addons/postprocessing/OutlinePass.js:273](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/OutlinePass.js#L273)

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

---
editUrl: false
next: false
prev: false
title: "RenderPixelatedPass"
---

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L23)

A special type of render pass that produces a pixelated beauty pass.

```js
const renderPixelatedPass = new RenderPixelatedPass( 6, scene, camera );
composer.addPass( renderPixelatedPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new RenderPixelatedPass**(`pixelSize`, `scene`, `camera`, `options`): `RenderPixelatedPass`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L33)

Constructs a new render pixelated pass.

#### Parameters

##### pixelSize

`number`

The effect's pixel size.

##### scene

`Scene`

The scene to render.

##### camera

`Camera`

The camera.

##### options

The pass options.

###### depthEdgeStrength

`number`

###### normalEdgeStrength

`number`

#### Returns

`RenderPixelatedPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_beautyRenderTarget

> **\_beautyRenderTarget**: `any`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L88)

***

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L99)

***

### \_normalMaterial

> **\_normalMaterial**: `any`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L86)

***

### \_normalRenderTarget

> **\_normalRenderTarget**: `any`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L94)

***

### \_renderResolution

> **\_renderResolution**: `any`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L84)

***

### \_resolution

> **\_resolution**: `any`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L83)

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L56)

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

### depthEdgeStrength

> **depthEdgeStrength**: `number`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L72)

The normal edge strength.

#### Default

```ts
0.4
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

### normalEdgeStrength

> **normalEdgeStrength**: `number`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L64)

The normal edge strength.

#### Default

```ts
0.3
```

***

### pixelatedMaterial

> **pixelatedMaterial**: `ShaderMaterial`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L79)

The pixelated material.

***

### pixelSize

> **pixelSize**: `number`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L42)

The effect's pixel size.

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

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L49)

The scene to render.

## Methods

### \_createPixelatedMaterial()

> **\_createPixelatedMaterial**(): `any`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L196)

#### Returns

`any`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L107)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`): `void`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L159)

Performs the pixelation pass.

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

### setPixelSize()

> **setPixelSize**(`pixelSize`): `void`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L141)

Sets the effect's pixel size.

#### Parameters

##### pixelSize

`number`

The pixel size to set.

#### Returns

`void`

***

### setSize()

> **setSize**(`width`, `height`): `void`

Defined in: [three/addons/postprocessing/RenderPixelatedPass.js:125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPixelatedPass.js#L125)

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

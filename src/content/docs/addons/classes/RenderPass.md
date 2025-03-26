---
editUrl: false
next: false
prev: false
title: "RenderPass"
---

Defined in: [three/addons/postprocessing/RenderPass.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L17)

This class represents a render pass. It takes a camera and a scene and produces
a beauty pass for subsequent post processing effects.

```js
const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new RenderPass**(`scene`, `camera`, `overrideMaterial`?, `clearColor`?, `clearAlpha`?): `RenderPass`

Defined in: [three/addons/postprocessing/RenderPass.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L29)

Constructs a new render pass.

#### Parameters

##### scene

`Scene`

The scene to render.

##### camera

`Camera`

The camera.

##### overrideMaterial?

`Material` = `null`

The override material. If set, this material is used
for all objects in the scene.

##### clearColor?

`any` = `null`

The clear color of the render pass.

##### clearAlpha?

`number` = `null`

The clear alpha of the render pass.

#### Returns

`RenderPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_oldClearColor

> **\_oldClearColor**: `any`

Defined in: [three/addons/postprocessing/RenderPass.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L95)

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/postprocessing/RenderPass.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L45)

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

Defined in: [three/addons/postprocessing/RenderPass.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L70)

The clear alpha of the render pass.

#### Default

```ts
null
```

***

### clearColor

> **clearColor**: `any`

Defined in: [three/addons/postprocessing/RenderPass.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L62)

The clear color of the render pass.

#### Default

```ts
null
```

***

### clearDepth

> **clearDepth**: `boolean`

Defined in: [three/addons/postprocessing/RenderPass.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L86)

If set to `true`, only the depth can be cleared when `clear` is to `false`.

#### Default

```ts
false
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

### overrideMaterial

> **overrideMaterial**: `Material`

Defined in: [three/addons/postprocessing/RenderPass.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L54)

The override material. If set, this material is used
for all objects in the scene.

#### Default

```ts
null
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

Defined in: [three/addons/postprocessing/RenderPass.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L38)

The scene to render.

## Methods

### dispose()

> `abstract` **dispose**(): `void`

Defined in: [three/addons/postprocessing/Pass.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L99)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Inherited from

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`): `void`

Defined in: [three/addons/postprocessing/RenderPass.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/RenderPass.js#L110)

Performs a beauty pass with the configured scene and camera.

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

> `abstract` **setSize**(): `void`

Defined in: [three/addons/postprocessing/Pass.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L73)

Sets the size of the pass.

#### Returns

`void`

#### Inherited from

[`Pass`](/addons/classes/pass/).[`setSize`](/addons/classes/pass/#setsize)

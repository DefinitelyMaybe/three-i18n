---
editUrl: false
next: false
prev: false
title: "PostProcessing"
---

Defined in: [three/src/renderers/common/PostProcessing.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L20)

This module is responsible to manage the post processing setups in apps.
You usually create a single instance of this class and use it to define
the output of your post processing effect chain.
```js
const postProcessing = new PostProcessing( renderer );

const scenePass = pass( scene, camera );

postProcessing.outputNode = scenePass;
```

Note: This module can only be used with `WebGPURenderer`.

## Constructors

### Constructor

> **new PostProcessing**(`renderer`, `outputNode`): `PostProcessing`

Defined in: [three/src/renderers/common/PostProcessing.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L27)

Constructs a new post processing management module.

#### Parameters

##### renderer

`Renderer`

A reference to the renderer.

##### outputNode

`any` = `...`

An optional output node.

#### Returns

`PostProcessing`

## Properties

### needsUpdate

> **needsUpdate**: `any`

Defined in: [three/src/renderers/common/PostProcessing.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L69)

Must be set to `true` when the output node changes.

***

### outputColorTransform

> **outputColorTransform**: `boolean`

Defined in: [three/src/renderers/common/PostProcessing.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L62)

Whether the default output tone mapping and color
space transformation should be enabled or not.

It is enabled by default by it must be disabled when
effects must be executed after tone mapping and color
space conversion. A typical example is FXAA which
requires sRGB input.

When set to `false`, the app must control the output
transformation with `RenderOutputNode`.

```js
const outputPass = renderOutput( scenePass );
```

***

### outputNode

> **outputNode**: `any`

Defined in: [three/src/renderers/common/PostProcessing.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L42)

A node which defines the final output of the post
processing. This is usually the last node in a chain
of effect nodes.

***

### renderer

> **renderer**: `Renderer`

Defined in: [three/src/renderers/common/PostProcessing.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L33)

A reference to the renderer.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/src/renderers/common/PostProcessing.js:118](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L118)

Frees internal resources.

#### Returns

`void`

***

### render()

> **render**(): `void`

Defined in: [three/src/renderers/common/PostProcessing.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L89)

When `PostProcessing` is used to apply post processing effects,
the application must use this version of `render()` inside
its animation loop (not the one from the renderer).

#### Returns

`void`

***

### renderAsync()

> **renderAsync**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/PostProcessing.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/PostProcessing.js#L152)

When `PostProcessing` is used to apply post processing effects,
the application must use this version of `renderAsync()` inside
its animation loop (not the one from the renderer).

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the render has been finished.

#### Async

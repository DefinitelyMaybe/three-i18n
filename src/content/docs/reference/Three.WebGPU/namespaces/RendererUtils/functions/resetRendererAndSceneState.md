---
editUrl: false
next: false
prev: false
title: "resetRendererAndSceneState"
---

> **resetRendererAndSceneState**(`renderer`, `scene`, `state`?): `any`

Defined in: [three/src/renderers/common/RendererUtils.js:169](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/RendererUtils.js#L169)

**`Function`**

Saves the state of the given renderer and scene and stores it into the given state object.
Besides, the function also resets the state of the renderer and scene to its default values.

If not state object is provided, the function creates one.

## Parameters

### renderer

`Renderer`

The renderer.

### scene

`Scene`

The scene.

### state?

`any`

The state.

## Returns

`any`

The state.

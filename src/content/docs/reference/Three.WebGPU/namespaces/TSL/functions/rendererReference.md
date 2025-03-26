---
editUrl: false
next: false
prev: false
title: "rendererReference"
---

> **rendererReference**(`name`, `type`, `renderer`?): [`RendererReferenceNode`](/reference/threewebgpu/classes/rendererreferencenode/)

Defined in: [three/src/nodes/accessors/RendererReferenceNode.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/RendererReferenceNode.js#L79)

TSL function for creating a renderer reference node.

## Parameters

### name

`string`

The name of the property the node refers to.

### type

`string`

The uniform type that should be used to represent the property value.

### renderer?

`Renderer` = `null`

The renderer the property belongs to. When no renderer is set,
the node refers to the renderer of the current state.

## Returns

[`RendererReferenceNode`](/reference/threewebgpu/classes/rendererreferencenode/)

## Tsl

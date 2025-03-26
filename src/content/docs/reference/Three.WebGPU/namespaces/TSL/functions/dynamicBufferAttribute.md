---
editUrl: false
next: false
prev: false
title: "dynamicBufferAttribute"
---

> **dynamicBufferAttribute**(`array`, `type`?, `stride`?, `offset`?): [`BufferAttributeNode`](/reference/threewebgpu/classes/bufferattributenode/)

Defined in: [three/src/nodes/accessors/BufferAttributeNode.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/BufferAttributeNode.js#L312)

TSL function for creating a buffer attribute node but with dynamic draw usage.
Use this function if attribute data are updated per frame.

## Parameters

### array

`any`

The attribute data.

### type?

`string` = `null`

The buffer type (e.g. `'vec3'`).

### stride?

`number` = `0`

The buffer stride.

### offset?

`number` = `0`

The buffer offset.

## Returns

[`BufferAttributeNode`](/reference/threewebgpu/classes/bufferattributenode/)

## Tsl

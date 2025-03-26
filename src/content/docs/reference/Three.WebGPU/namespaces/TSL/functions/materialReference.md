---
editUrl: false
next: false
prev: false
title: "materialReference"
---

> **materialReference**(`name`, `type`, `material`?): [`MaterialReferenceNode`](/reference/threewebgpu/classes/materialreferencenode/)

Defined in: [three/src/nodes/accessors/MaterialReferenceNode.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/MaterialReferenceNode.js#L85)

TSL function for creating a material reference node.

## Parameters

### name

`string`

The name of the property the node refers to.

### type

`string`

The uniform type that should be used to represent the property value.

### material?

`Material` = `null`

The material the property belongs to.
When no material is set, the node refers to the material of the current rendered object.

## Returns

[`MaterialReferenceNode`](/reference/threewebgpu/classes/materialreferencenode/)

## Tsl

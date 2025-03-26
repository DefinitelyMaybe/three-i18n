---
editUrl: false
next: false
prev: false
title: "atomicFunc"
---

> **atomicFunc**(`method`, `pointerNode`, `valueNode`): `AtomicFunctionNode`

Defined in: [three/src/nodes/gpgpu/AtomicFunctionNode.js:151](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/gpgpu/AtomicFunctionNode.js#L151)

TSL function for appending an atomic function call into the programmatic flow of a compute shader.

## Parameters

### method

`string`

The signature of the atomic function to construct.

### pointerNode

`Node`

An atomic variable or element of an atomic buffer.

### valueNode

`Node`

The value that mutates the atomic variable.

## Returns

`AtomicFunctionNode`

## Tsl

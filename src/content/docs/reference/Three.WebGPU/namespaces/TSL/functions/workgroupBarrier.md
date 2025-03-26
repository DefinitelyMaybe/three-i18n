---
editUrl: false
next: false
prev: false
title: "workgroupBarrier"
---

> **workgroupBarrier**(): `BarrierNode`

Defined in: [three/src/nodes/gpgpu/BarrierNode.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/gpgpu/BarrierNode.js#L66)

TSL function for creating a workgroup barrier. All compute shader
invocations must wait for each invocation within a workgroup to
complete before the barrier can be surpassed.

## Returns

`BarrierNode`

## Tsl

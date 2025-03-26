---
editUrl: false
next: false
prev: false
title: "storageBarrier"
---

> **storageBarrier**(): `BarrierNode`

Defined in: [three/src/nodes/gpgpu/BarrierNode.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/gpgpu/BarrierNode.js#L77)

TSL function for creating a storage barrier. All invocations must
wait for each access to variables within the 'storage' address space
to complete before the barrier can be passed.

## Returns

`BarrierNode`

## Tsl

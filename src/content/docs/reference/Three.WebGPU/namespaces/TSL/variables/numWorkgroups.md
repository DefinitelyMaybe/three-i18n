---
editUrl: false
next: false
prev: false
title: "numWorkgroups"
---

> `const` **numWorkgroups**: `any`

Defined in: [three/src/nodes/gpgpu/ComputeBuiltinNode.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/gpgpu/ComputeBuiltinNode.js#L176)

Represents the number of workgroups dispatched by the compute shader.
```js
// Run 512 invocations/threads with a workgroup size of 128.
const computeFn = Fn(() => {

    // numWorkgroups.x = 4
    storageBuffer.element(0).assign(numWorkgroups.x)

})().compute(512, [128]);

// Run 512 invocations/threads with the default workgroup size of 64.
const computeFn = Fn(() => {

    // numWorkgroups.x = 8
    storageBuffer.element(0).assign(numWorkgroups.x)

})().compute(512);
```

## Tsl

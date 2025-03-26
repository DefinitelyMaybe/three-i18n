---
editUrl: false
next: false
prev: false
title: "workgroupId"
---

> `const` **workgroupId**: `any`

Defined in: [three/src/nodes/gpgpu/ComputeBuiltinNode.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/gpgpu/ComputeBuiltinNode.js#L203)

Represents the 3-dimensional index of the workgroup the current compute invocation belongs to.
```js
// Execute 12 compute threads with a workgroup size of 3.
const computeFn = Fn( () => {

	If( workgroupId.x.modInt( 2 ).equal( 0 ), () => {

		storageBuffer.element( instanceIndex ).assign( instanceIndex );

	} ).Else( () => {

		storageBuffer.element( instanceIndex ).assign( 0 );

	} );

} )().compute( 12, [ 3 ] );

// workgroupId.x =  [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];
// Buffer Output =  [0, 1, 2, 0, 0, 0, 6, 7, 8, 0, 0, 0];
```

## Tsl

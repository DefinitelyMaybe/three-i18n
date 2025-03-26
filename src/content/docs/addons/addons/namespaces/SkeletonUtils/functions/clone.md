---
editUrl: false
next: false
prev: false
title: "clone"
---

> **clone**(`source`): `Object3D`

Defined in: [three/addons/utils/SkeletonUtils.js:385](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/SkeletonUtils.js#L385)

Clones the given 3D object and its descendants, ensuring that any `SkinnedMesh` instances are
correctly associated with their bones. Bones are also cloned, and must be descendants of the
object passed to this method. Other data, like geometries and materials, are reused by reference.

## Parameters

### source

`Object3D`

The 3D object to clone.

## Returns

`Object3D`

The cloned 3D object.

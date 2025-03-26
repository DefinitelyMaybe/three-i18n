---
editUrl: false
next: false
prev: false
title: "toCreasedNormals"
---

> **toCreasedNormals**(`geometry`, `creaseAngle`?): `BufferGeometry`

Defined in: [three/addons/utils/BufferGeometryUtils.js:1313](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/BufferGeometryUtils.js#L1313)

Modifies the supplied geometry if it is non-indexed, otherwise creates a new,
non-indexed geometry. Returns the geometry with smooth normals everywhere except
faces that meet at an angle greater than the crease angle.

## Parameters

### geometry

`BufferGeometry`

The geometry to modify.

### creaseAngle?

`number` = `...`

The crease angle in radians.

## Returns

`BufferGeometry`

- The updated geometry

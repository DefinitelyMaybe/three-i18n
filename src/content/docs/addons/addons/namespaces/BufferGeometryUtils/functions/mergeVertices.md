---
editUrl: false
next: false
prev: false
title: "mergeVertices"
---

> **mergeVertices**(`geometry`, `tolerance`?): `BufferGeometry`

Defined in: [three/addons/utils/BufferGeometryUtils.js:641](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/BufferGeometryUtils.js#L641)

Returns a new geometry with vertices for which all similar vertex attributes (within tolerance) are merged.

## Parameters

### geometry

`BufferGeometry`

The geometry to merge vertices for.

### tolerance?

`number` = `1e-4`

The tolerance value.

## Returns

`BufferGeometry`

- The new geometry with merged vertices.

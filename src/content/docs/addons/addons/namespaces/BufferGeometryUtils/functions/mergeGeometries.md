---
editUrl: false
next: false
prev: false
title: "mergeGeometries"
---

> **mergeGeometries**(`geometries`, `useGroups`?): `BufferGeometry`

Defined in: [three/addons/utils/BufferGeometryUtils.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/BufferGeometryUtils.js#L130)

Merges a set of geometries into a single instance. All geometries must have compatible attributes.

## Parameters

### geometries

`BufferGeometry`[]

The geometries to merge.

### useGroups?

`boolean` = `false`

Whether to use groups or not.

## Returns

`BufferGeometry`

The merged geometry. Returns `null` if the merge does not succeed.

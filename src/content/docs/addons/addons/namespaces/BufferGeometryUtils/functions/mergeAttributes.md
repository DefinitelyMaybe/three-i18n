---
editUrl: false
next: false
prev: false
title: "mergeAttributes"
---

> **mergeAttributes**(`attributes`): `BufferAttribute`

Defined in: [three/addons/utils/BufferGeometryUtils.js:328](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/BufferGeometryUtils.js#L328)

Merges a set of attributes into a single instance. All attributes must have compatible properties and types.
Instances of InterleavedBufferAttribute are not supported.

## Parameters

### attributes

`BufferAttribute`[]

The attributes to merge.

## Returns

`BufferAttribute`

The merged attribute. Returns `null` if the merge does not succeed.

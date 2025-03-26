---
editUrl: false
next: false
prev: false
title: "interleaveAttributes"
---

> **interleaveAttributes**(`attributes`): `InterleavedBufferAttribute`[]

Defined in: [three/addons/utils/BufferGeometryUtils.js:448](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/BufferGeometryUtils.js#L448)

Interleaves a set of attributes and returns a new array of corresponding attributes that share a
single InterleavedBuffer instance. All attributes must have compatible types.

## Parameters

### attributes

`BufferAttribute`[]

The attributes to interleave.

## Returns

`InterleavedBufferAttribute`[]

An array of interleaved attributes. If interleave does not succeed, the method returns `null`.

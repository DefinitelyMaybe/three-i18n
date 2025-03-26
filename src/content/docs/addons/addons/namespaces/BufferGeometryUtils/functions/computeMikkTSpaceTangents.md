---
editUrl: false
next: false
prev: false
title: "computeMikkTSpaceTangents"
---

> **computeMikkTSpaceTangents**(`geometry`, `MikkTSpace`, `negateSign`?): `BufferGeometry`

Defined in: [three/addons/utils/BufferGeometryUtils.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/BufferGeometryUtils.js#L35)

Computes vertex tangents using the MikkTSpace algorithm. MikkTSpace generates the same tangents consistently,
and is used in most modelling tools and normal map bakers. Use MikkTSpace for materials with normal maps,
because inconsistent tangents may lead to subtle visual issues in the normal map, particularly around mirrored
UV seams.

In comparison to this method, BufferGeometry#computeTangents (a custom algorithm) generates tangents that
probably will not match the tangents in other software. The custom algorithm is sufficient for general use with a
custom material, and may be faster than MikkTSpace.

Returns the original BufferGeometry. Indexed geometries will be de-indexed. Requires position, normal, and uv attributes.

## Parameters

### geometry

`BufferGeometry`

The geometry to compute tangents for.

### MikkTSpace

`any`

Instance of `examples/jsm/libs/mikktspace.module.js`, or `mikktspace` npm package.
Await `MikkTSpace.ready` before use.

### negateSign?

`boolean` = `true`

Whether to negate the sign component (.w) of each tangent.
Required for normal map conventions in some formats, including glTF.

## Returns

`BufferGeometry`

The updated geometry.

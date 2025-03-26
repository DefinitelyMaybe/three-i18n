---
editUrl: false
next: false
prev: false
title: "hilbert2D"
---

> **hilbert2D**(`center`?, `size`?, `iterations`?, `v0`?, `v1`?, `v2`?, `v3`?): `Vector3`[]

Defined in: [three/addons/utils/GeometryUtils.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/GeometryUtils.js#L19)

Generates 2D-Coordinates along a Hilbert curve.

Based on work by: [http://www.openprocessing.org/sketch/15493](http://www.openprocessing.org/sketch/15493)

## Parameters

### center?

`Vector3` = `...`

Center of Hilbert curve.

### size?

`number` = `10`

Total width of Hilbert curve.

### iterations?

`number` = `1`

Number of subdivisions.

### v0?

`number` = `0`

Corner index -X, -Z.

### v1?

`number` = `1`

Corner index -X, +Z.

### v2?

`number` = `2`

Corner index +X, +Z.

### v3?

`number` = `3`

Corner index +X, -Z.

## Returns

`Vector3`[]

The Hilbert curve points.

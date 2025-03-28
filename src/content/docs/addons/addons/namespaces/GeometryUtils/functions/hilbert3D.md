---
editUrl: false
next: false
prev: false
title: "hilbert3D"
---

> **hilbert3D**(`center`?, `size`?, `iterations`?, `v0`?, `v1`?, `v2`?, `v3`?, `v4`?, `v5`?, `v6`?, `v7`?): `Vector3`[]

Defined in: [three/addons/utils/GeometryUtils.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/GeometryUtils.js#L72)

Generates 3D-Coordinates along a Hilbert curve.

Based on work by: [https://openprocessing.org/user/5654](https://openprocessing.org/user/5654)

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

Corner index -X, +Y, -Z.

### v1?

`number` = `1`

Corner index -X, +Y, +Z.

### v2?

`number` = `2`

Corner index -X, -Y, +Z.

### v3?

`number` = `3`

Corner index -X, -Y, -Z.

### v4?

`number` = `4`

Corner index +X, -Y, -Z.

### v5?

`number` = `5`

Corner index +X, -Y, +Z.

### v6?

`number` = `6`

Corner index +X, +Y, +Z.

### v7?

`number` = `7`

Corner index +X, +Y, -Z.

## Returns

`Vector3`[]

- The Hilbert curve points.

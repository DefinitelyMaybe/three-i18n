---
editUrl: false
next: false
prev: false
title: "calcBSplinePoint"
---

> **calcBSplinePoint**(`p`, `U`, `P`, `u`): `Vector4`

Defined in: [three/addons/curves/NURBSUtils.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSUtils.js#L106)

Calculates B-Spline curve points. See The NURBS Book, page 82, algorithm A3.1.

## Parameters

### p

`number`

The degree of the B-Spline.

### U

`number`[]

The knot vector.

### P

`Vector4`[]

The control points

### u

`number`

The parametric point.

## Returns

`Vector4`

The point for given `u`.

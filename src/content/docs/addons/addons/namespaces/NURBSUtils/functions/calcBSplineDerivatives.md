---
editUrl: false
next: false
prev: false
title: "calcBSplineDerivatives"
---

> **calcBSplineDerivatives**(`p`, `U`, `P`, `u`, `nd`): `Vector4`[]

Defined in: [three/addons/curves/NURBSUtils.js:270](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSUtils.js#L270)

Calculates derivatives of a B-Spline. See The NURBS Book, page 93, algorithm A3.2.

## Parameters

### p

`number`

The degree.

### U

`number`[]

The knot vector.

### P

`Vector4`[]

The control points

### u

`number`

The parametric point.

### nd

`number`

The number of derivatives.

## Returns

`Vector4`[]

An array[d+1] with derivatives.

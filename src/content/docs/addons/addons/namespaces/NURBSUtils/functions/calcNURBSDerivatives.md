---
editUrl: false
next: false
prev: false
title: "calcNURBSDerivatives"
---

> **calcNURBSDerivatives**(`p`, `U`, `P`, `u`, `nd`): `Vector3`[]

Defined in: [three/addons/curves/NURBSUtils.js:400](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSUtils.js#L400)

Calculates NURBS curve derivatives. See The NURBS Book, page 127, algorithm A4.2.

## Parameters

### p

`number`

The degree.

### U

`number`[]

The knot vector.

### P

`Vector4`[]

The control points in homogeneous space.

### u

`number`

The parametric point.

### nd

`number`

The number of derivatives.

## Returns

`Vector3`[]

array with derivatives for rational curve.

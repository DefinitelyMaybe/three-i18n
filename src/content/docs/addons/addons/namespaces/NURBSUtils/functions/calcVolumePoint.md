---
editUrl: false
next: false
prev: false
title: "calcVolumePoint"
---

> **calcVolumePoint**(`p`, `q`, `r`, `U`, `V`, `W`, `P`, `u`, `v`, `w`, `target`): `void`

Defined in: [three/addons/curves/NURBSUtils.js:470](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSUtils.js#L470)

Calculates a rational B-Spline volume point. See The NURBS Book, page 134, algorithm A4.3.

## Parameters

### p

`number`

The first degree of B-Spline surface.

### q

`number`

The second degree of B-Spline surface.

### r

`number`

The third degree of B-Spline surface.

### U

`number`[]

The first knot vector.

### V

`number`[]

The second knot vector.

### W

`number`[]

The third knot vector.

### P

`Vector4`[][][]

The control points in homogeneous space.

### u

`number`

The first parametric point.

### v

`number`

The second parametric point.

### w

`number`

The third parametric point.

### target

`Vector3`

The target vector.

## Returns

`void`

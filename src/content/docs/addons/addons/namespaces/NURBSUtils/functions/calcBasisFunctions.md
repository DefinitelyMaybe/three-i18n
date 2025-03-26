---
editUrl: false
next: false
prev: false
title: "calcBasisFunctions"
---

> **calcBasisFunctions**(`span`, `u`, `p`, `U`): `number`[]

Defined in: [three/addons/curves/NURBSUtils.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSUtils.js#L65)

Calculates basis functions. See The NURBS Book, page 70, algorithm A2.2.

## Parameters

### span

`number`

The span in which `u` lies.

### u

`number`

The parametric value.

### p

`number`

The degree.

### U

`number`[]

The knot vector.

## Returns

`number`[]

Array[p+1] with basis functions values.

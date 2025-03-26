---
editUrl: false
next: false
prev: false
title: "calcBasisFunctionDerivatives"
---

> **calcBasisFunctionDerivatives**(`span`, `u`, `p`, `n`, `U`): `number`[][]

Defined in: [three/addons/curves/NURBSUtils.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSUtils.js#L138)

Calculates basis functions derivatives. See The NURBS Book, page 72, algorithm A2.3.

## Parameters

### span

`number`

The span in which `u` lies.

### u

`number`

The parametric point.

### p

`number`

The degree.

### n

`number`

number of derivatives to calculate

### U

`number`[]

The knot vector.

## Returns

`number`[][]

An array[n+1][p+1] with basis functions derivatives.

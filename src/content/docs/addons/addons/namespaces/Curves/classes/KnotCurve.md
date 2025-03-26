---
editUrl: false
next: false
prev: false
title: "KnotCurve"
---

Defined in: [three/addons/curves/CurveExtras.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L150)

A knot curve.

## Extends

- `unknown`

## Constructors

### Constructor

> **new KnotCurve**(): `KnotCurve`

#### Returns

`KnotCurve`

#### Inherited from

`Curve.constructor`

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L159)

This method returns a vector in 3D space for the given interpolation factor.

#### Parameters

##### t

`number`

A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.

##### optionalTarget?

`Vector3` = `...`

The optional target vector the result is written to.

#### Returns

`Vector3`

The position on the curve.

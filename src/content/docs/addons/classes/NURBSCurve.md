---
editUrl: false
next: false
prev: false
title: "NURBSCurve"
---

Defined in: [three/addons/curves/NURBSCurve.js:11](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L11)

This class represents a NURBS curve.

Implementation is based on `(x, y [, z=0 [, w=1]])` control points with `w=weight`.

## Extends

- `unknown`

## Constructors

### Constructor

> **new NURBSCurve**(`degree`, `knots`, `controlPoints`, `startKnot`?, `endKnot`?): `NURBSCurve`

Defined in: [three/addons/curves/NURBSCurve.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L21)

Constructs a new NURBS curve.

#### Parameters

##### degree

`number`

The NURBS degree.

##### knots

`number`[]

The knots as a flat array of numbers.

##### controlPoints

`any`[]

An array holding control points.

##### startKnot?

`number`

Index of the start knot into the `knots` array.

##### endKnot?

`number`

Index of the end knot into the `knots` array.

#### Returns

`NURBSCurve`

#### Overrides

`Curve.constructor`

## Properties

### controlPoints

> **controlPoints**: `Vector4`[]

Defined in: [three/addons/curves/NURBSCurve.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L46)

An array of control points.

***

### degree

> **degree**: `number`

Defined in: [three/addons/curves/NURBSCurve.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L32)

The NURBS degree.

***

### endKnot

> **endKnot**: `number`

Defined in: [three/addons/curves/NURBSCurve.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L60)

Index of the end knot into the `knots` array.

***

### knots

> **knots**: `number`[]

Defined in: [three/addons/curves/NURBSCurve.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L39)

The knots as a flat array of numbers.

***

### startKnot

> **startKnot**: `number`

Defined in: [three/addons/curves/NURBSCurve.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L53)

Index of the start knot into the `knots` array.

## Methods

### fromJSON()

> **fromJSON**(`json`): `NURBSCurve`

Defined in: [three/addons/curves/NURBSCurve.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L135)

#### Parameters

##### json

`any`

#### Returns

`NURBSCurve`

***

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/NURBSCurve.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L76)

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

***

### getTangent()

> **getTangent**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/NURBSCurve.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L106)

Returns a unit vector tangent for the given interpolation factor.

#### Parameters

##### t

`number`

The interpolation factor.

##### optionalTarget?

`Vector3` = `...`

The optional target vector the result is written to.

#### Returns

`Vector3`

The tangent vector.

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/addons/curves/NURBSCurve.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSCurve.js#L123)

#### Returns

`any`

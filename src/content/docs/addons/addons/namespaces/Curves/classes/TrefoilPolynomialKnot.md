---
editUrl: false
next: false
prev: false
title: "TrefoilPolynomialKnot"
---

Defined in: [three/addons/curves/CurveExtras.js:369](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L369)

A Trefoil Polynomial Knot.

## Extends

- `unknown`

## Constructors

### Constructor

> **new TrefoilPolynomialKnot**(`scale`?): `TrefoilPolynomialKnot`

Defined in: [three/addons/curves/CurveExtras.js:376](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L376)

Constructs a new Trefoil Polynomial Knot.

#### Parameters

##### scale?

`number` = `10`

The curve's scale.

#### Returns

`TrefoilPolynomialKnot`

#### Overrides

`Curve.constructor`

## Properties

### scale

> **scale**: `number`

Defined in: [three/addons/curves/CurveExtras.js:386](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L386)

The curve's scale.

#### Default

```ts
10
```

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:397](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L397)

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

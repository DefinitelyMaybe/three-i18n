---
editUrl: false
next: false
prev: false
title: "FigureEightPolynomialKnot"
---

Defined in: [three/addons/curves/CurveExtras.js:425](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L425)

A Figure Eight Polynomial Knot.

## Extends

- `unknown`

## Constructors

### Constructor

> **new FigureEightPolynomialKnot**(`scale`?): `FigureEightPolynomialKnot`

Defined in: [three/addons/curves/CurveExtras.js:432](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L432)

Constructs a new Figure Eight Polynomial Knot.

#### Parameters

##### scale?

`number` = `1`

The curve's scale.

#### Returns

`FigureEightPolynomialKnot`

#### Overrides

`Curve.constructor`

## Properties

### scale

> **scale**: `number`

Defined in: [three/addons/curves/CurveExtras.js:442](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L442)

The curve's scale.

#### Default

```ts
1
```

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:453](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L453)

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

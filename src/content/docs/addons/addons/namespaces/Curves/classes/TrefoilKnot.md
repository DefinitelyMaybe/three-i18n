---
editUrl: false
next: false
prev: false
title: "TrefoilKnot"
---

Defined in: [three/addons/curves/CurveExtras.js:216](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L216)

A Trefoil Knot.

## Extends

- `unknown`

## Constructors

### Constructor

> **new TrefoilKnot**(`scale`?): `TrefoilKnot`

Defined in: [three/addons/curves/CurveExtras.js:223](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L223)

Constructs a new Trefoil Knot.

#### Parameters

##### scale?

`number` = `10`

The curve's scale.

#### Returns

`TrefoilKnot`

#### Overrides

`Curve.constructor`

## Properties

### scale

> **scale**: `number`

Defined in: [three/addons/curves/CurveExtras.js:233](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L233)

The curve's scale.

#### Default

```ts
10
```

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:244](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L244)

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

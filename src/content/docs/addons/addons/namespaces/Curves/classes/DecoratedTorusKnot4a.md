---
editUrl: false
next: false
prev: false
title: "DecoratedTorusKnot4a"
---

Defined in: [three/addons/curves/CurveExtras.js:474](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L474)

A Decorated Torus Knot 4a.

## Extends

- `unknown`

## Constructors

### Constructor

> **new DecoratedTorusKnot4a**(`scale`?): `DecoratedTorusKnot4a`

Defined in: [three/addons/curves/CurveExtras.js:481](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L481)

Constructs a new Decorated Torus Knot 4a.

#### Parameters

##### scale?

`number` = `40`

The curve's scale.

#### Returns

`DecoratedTorusKnot4a`

#### Overrides

`Curve.constructor`

## Properties

### scale

> **scale**: `number`

Defined in: [three/addons/curves/CurveExtras.js:491](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L491)

The curve's scale.

#### Default

```ts
40
```

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:502](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L502)

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

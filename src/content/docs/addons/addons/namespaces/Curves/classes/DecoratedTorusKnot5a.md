---
editUrl: false
next: false
prev: false
title: "DecoratedTorusKnot5a"
---

Defined in: [three/addons/curves/CurveExtras.js:572](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L572)

A Decorated Torus Knot 5a.

## Extends

- `unknown`

## Constructors

### Constructor

> **new DecoratedTorusKnot5a**(`scale`?): `DecoratedTorusKnot5a`

Defined in: [three/addons/curves/CurveExtras.js:579](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L579)

Constructs a new Decorated Torus Knot 5a.

#### Parameters

##### scale?

`number` = `40`

The curve's scale.

#### Returns

`DecoratedTorusKnot5a`

#### Overrides

`Curve.constructor`

## Properties

### scale

> **scale**: `number`

Defined in: [three/addons/curves/CurveExtras.js:589](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L589)

The curve's scale.

#### Default

```ts
40
```

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:600](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L600)

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

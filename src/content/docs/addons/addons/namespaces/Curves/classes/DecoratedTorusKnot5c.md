---
editUrl: false
next: false
prev: false
title: "DecoratedTorusKnot5c"
---

Defined in: [three/addons/curves/CurveExtras.js:621](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L621)

A Decorated Torus Knot 5c.

## Extends

- `unknown`

## Constructors

### Constructor

> **new DecoratedTorusKnot5c**(`scale`?): `DecoratedTorusKnot5c`

Defined in: [three/addons/curves/CurveExtras.js:628](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L628)

Constructs a new Decorated Torus Knot 5c.

#### Parameters

##### scale?

`number` = `40`

The curve's scale.

#### Returns

`DecoratedTorusKnot5c`

#### Overrides

`Curve.constructor`

## Properties

### scale

> **scale**: `number`

Defined in: [three/addons/curves/CurveExtras.js:638](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L638)

The curve's scale.

#### Default

```ts
40
```

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:649](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L649)

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

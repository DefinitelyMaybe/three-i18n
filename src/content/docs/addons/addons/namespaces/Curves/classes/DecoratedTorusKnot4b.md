---
editUrl: false
next: false
prev: false
title: "DecoratedTorusKnot4b"
---

Defined in: [three/addons/curves/CurveExtras.js:523](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L523)

A Decorated Torus Knot 4b.

## Extends

- `unknown`

## Constructors

### Constructor

> **new DecoratedTorusKnot4b**(`scale`?): `DecoratedTorusKnot4b`

Defined in: [three/addons/curves/CurveExtras.js:530](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L530)

Constructs a new Decorated Torus Knot 4b.

#### Parameters

##### scale?

`number` = `40`

The curve's scale.

#### Returns

`DecoratedTorusKnot4b`

#### Overrides

`Curve.constructor`

## Properties

### scale

> **scale**: `number`

Defined in: [three/addons/curves/CurveExtras.js:540](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L540)

The curve's scale.

#### Default

```ts
40
```

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:551](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L551)

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

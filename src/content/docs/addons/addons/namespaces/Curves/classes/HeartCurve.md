---
editUrl: false
next: false
prev: false
title: "HeartCurve"
---

Defined in: [three/addons/curves/CurveExtras.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L51)

A heart curve.

## Extends

- `unknown`

## Constructors

### Constructor

> **new HeartCurve**(`scale`?): `HeartCurve`

Defined in: [three/addons/curves/CurveExtras.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L58)

Constructs a new heart curve.

#### Parameters

##### scale?

`number` = `5`

The curve's scale.

#### Returns

`HeartCurve`

#### Overrides

`Curve.constructor`

## Properties

### scale

> **scale**: `number`

Defined in: [three/addons/curves/CurveExtras.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L68)

The curve's scale.

#### Default

```ts
5
```

## Methods

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `Vector3`

Defined in: [three/addons/curves/CurveExtras.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/CurveExtras.js#L79)

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

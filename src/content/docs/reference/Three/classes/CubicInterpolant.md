---
editUrl: false
next: false
prev: false
title: "CubicInterpolant"
---

Defined in: [three/src/math/interpolants/CubicInterpolant.js:13](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L13)

Fast and simple cubic spline interpolant.

It was derived from a Hermitian construction setting the first derivative
at each sample position to the linear slope between neighboring positions
over their parameter interval.

## Extends

- [`Interpolant`](/reference/three/classes/interpolant/)

## Constructors

### Constructor

> **new CubicInterpolant**(`parameterPositions`, `sampleValues`, `sampleSize`, `resultBuffer`?): `CubicInterpolant`

Defined in: [three/src/math/interpolants/CubicInterpolant.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L23)

Constructs a new cubic interpolant.

#### Parameters

##### parameterPositions

`TypedArray`

The parameter positions hold the interpolation factors.

##### sampleValues

`TypedArray`

The sample values.

##### sampleSize

`number`

The sample size

##### resultBuffer?

`TypedArray`

The result buffer.

#### Returns

`CubicInterpolant`

#### Overrides

[`Interpolant`](/reference/three/classes/interpolant/).[`constructor`](/reference/three/classes/interpolant/#constructor)

## Properties

### \_offsetNext

> **\_offsetNext**: `number`

Defined in: [three/src/math/interpolants/CubicInterpolant.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L30)

***

### \_offsetPrev

> **\_offsetPrev**: `number`

Defined in: [three/src/math/interpolants/CubicInterpolant.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L28)

***

### \_weightNext

> **\_weightNext**: `number`

Defined in: [three/src/math/interpolants/CubicInterpolant.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L29)

***

### \_weightPrev

> **\_weightPrev**: `number`

Defined in: [three/src/math/interpolants/CubicInterpolant.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L27)

***

### DefaultSettings\_

> **DefaultSettings\_**: `object`

Defined in: [three/src/math/interpolants/CubicInterpolant.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L32)

The default settings object.

#### endingEnd

> **endingEnd**: `number` = `ZeroCurvatureEnding`

#### endingStart

> **endingStart**: `number` = `ZeroCurvatureEnding`

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`DefaultSettings_`](/reference/three/classes/interpolant/#defaultsettings_)

***

### parameterPositions

> **parameterPositions**: `TypedArray`

Defined in: [three/src/math/Interpolant.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L37)

The parameter positions.

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`parameterPositions`](/reference/three/classes/interpolant/#parameterpositions)

***

### resultBuffer

> **resultBuffer**: `TypedArray`

Defined in: [three/src/math/Interpolant.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L53)

The result buffer.

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`resultBuffer`](/reference/three/classes/interpolant/#resultbuffer)

***

### sampleValues

> **sampleValues**: `TypedArray`

Defined in: [three/src/math/Interpolant.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L60)

The sample values.

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`sampleValues`](/reference/three/classes/interpolant/#samplevalues)

***

### settings

> **settings**: `any`

Defined in: [three/src/math/Interpolant.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L75)

The interpolation settings.

#### Default

```ts
null
```

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`settings`](/reference/three/classes/interpolant/#settings)

***

### valueSize

> **valueSize**: `TypedArray`

Defined in: [three/src/math/Interpolant.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L67)

The value size.

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`valueSize`](/reference/three/classes/interpolant/#valuesize)

## Methods

### copySampleValue\_()

> **copySampleValue\_**(`index`): `TypedArray`

Defined in: [three/src/math/Interpolant.js:269](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L269)

Copies a sample value to the result buffer.

#### Parameters

##### index

`number`

An index into the sample value buffer.

#### Returns

`TypedArray`

The result buffer.

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`copySampleValue_`](/reference/three/classes/interpolant/#copysamplevalue_)

***

### evaluate()

> **evaluate**(`t`): `TypedArray`

Defined in: [three/src/math/Interpolant.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L92)

Evaluate the interpolant at position `t`.

#### Parameters

##### t

`number`

The interpolation factor.

#### Returns

`TypedArray`

The result buffer.

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`evaluate`](/reference/three/classes/interpolant/#evaluate)

***

### getSettings\_()

> **getSettings\_**(): `any`

Defined in: [three/src/math/Interpolant.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L257)

Returns the interpolation settings.

#### Returns

`any`

The interpolation settings.

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`getSettings_`](/reference/three/classes/interpolant/#getsettings_)

***

### interpolate\_()

> `abstract` **interpolate\_**(`i1`, `t0`, `t`, `t1`): `TypedArray`

Defined in: [three/src/math/interpolants/CubicInterpolant.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L120)

Copies a sample value to the result buffer.

#### Parameters

##### i1

`any`

An index into the sample value buffer.

##### t0

`any`

The previous interpolation factor.

##### t

`any`

The current interpolation factor.

##### t1

`any`

The next interpolation factor.

#### Returns

`TypedArray`

The result buffer.

#### Overrides

[`Interpolant`](/reference/three/classes/interpolant/).[`interpolate_`](/reference/three/classes/interpolant/#interpolate_)

***

### intervalChanged\_()

> **intervalChanged\_**(`i1`, `t0`, `t1`): `void`

Defined in: [three/src/math/interpolants/CubicInterpolant.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/CubicInterpolant.js#L41)

Optional method that is executed when the interval has changed.

#### Parameters

##### i1

`any`

An index into the sample value buffer.

##### t0

`any`

The previous interpolation factor.

##### t1

`any`

#### Returns

`void`

#### Overrides

[`Interpolant`](/reference/three/classes/interpolant/).[`intervalChanged_`](/reference/three/classes/interpolant/#intervalchanged_)

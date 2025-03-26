---
editUrl: false
next: false
prev: false
title: "Interpolant"
---

Defined in: [three/src/math/Interpolant.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L20)

Abstract base class of interpolants over parametric samples.

The parameter domain is one dimensional, typically the time or a path
along a curve defined by the data.

The sample values can have any dimensionality and derived classes may
apply special interpretations to the data.

This class provides the interval seek in a Template Method, deferring
the actual interpolation to derived classes.

Time complexity is O(1) for linear access crossing at most two points
and O(log N) for random access, where N is the number of positions.

References: [http://www.oodesign.com/template-method-pattern.html](http://www.oodesign.com/template-method-pattern.html)

## Extended by

- [`QuaternionLinearInterpolant`](/reference/three/classes/quaternionlinearinterpolant/)
- [`LinearInterpolant`](/reference/three/classes/linearinterpolant/)
- [`DiscreteInterpolant`](/reference/three/classes/discreteinterpolant/)
- [`CubicInterpolant`](/reference/three/classes/cubicinterpolant/)

## Constructors

### Constructor

> **new Interpolant**(`parameterPositions`, `sampleValues`, `sampleSize`, `resultBuffer`?): `Interpolant`

Defined in: [three/src/math/Interpolant.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L30)

Constructs a new interpolant.

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

`Interpolant`

## Properties

### DefaultSettings\_

> **DefaultSettings\_**: `any`

Defined in: [three/src/math/Interpolant.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L82)

The default settings object.

***

### parameterPositions

> **parameterPositions**: `TypedArray`

Defined in: [three/src/math/Interpolant.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L37)

The parameter positions.

***

### resultBuffer

> **resultBuffer**: `TypedArray`

Defined in: [three/src/math/Interpolant.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L53)

The result buffer.

***

### sampleValues

> **sampleValues**: `TypedArray`

Defined in: [three/src/math/Interpolant.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L60)

The sample values.

***

### settings

> **settings**: `any`

Defined in: [three/src/math/Interpolant.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L75)

The interpolation settings.

#### Default

```ts
null
```

***

### valueSize

> **valueSize**: `TypedArray`

Defined in: [three/src/math/Interpolant.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L67)

The value size.

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

***

### getSettings\_()

> **getSettings\_**(): `any`

Defined in: [three/src/math/Interpolant.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L257)

Returns the interpolation settings.

#### Returns

`any`

The interpolation settings.

***

### interpolate\_()

> `abstract` **interpolate\_**(): `TypedArray`

Defined in: [three/src/math/Interpolant.js:298](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L298)

Copies a sample value to the result buffer.

#### Returns

`TypedArray`

The result buffer.

***

### intervalChanged\_()

> **intervalChanged\_**(): `void`

Defined in: [three/src/math/Interpolant.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L312)

Optional method that is executed when the interval has changed.

#### Returns

`void`

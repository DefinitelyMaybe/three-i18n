---
editUrl: false
next: false
prev: false
title: "LinearInterpolant"
---

Defined in: [three/src/math/interpolants/LinearInterpolant.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/LinearInterpolant.js#L8)

A basic linear interpolant.

## Extends

- [`Interpolant`](/reference/three/classes/interpolant/)

## Constructors

### Constructor

> **new LinearInterpolant**(`parameterPositions`, `sampleValues`, `sampleSize`, `resultBuffer`?): `LinearInterpolant`

Defined in: [three/src/math/interpolants/LinearInterpolant.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/LinearInterpolant.js#L18)

Constructs a new linear interpolant.

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

`LinearInterpolant`

#### Overrides

[`Interpolant`](/reference/three/classes/interpolant/).[`constructor`](/reference/three/classes/interpolant/#constructor)

## Properties

### DefaultSettings\_

> **DefaultSettings\_**: `any`

Defined in: [three/src/math/Interpolant.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L82)

The default settings object.

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

Defined in: [three/src/math/interpolants/LinearInterpolant.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/interpolants/LinearInterpolant.js#L24)

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

> **intervalChanged\_**(): `void`

Defined in: [three/src/math/Interpolant.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Interpolant.js#L312)

Optional method that is executed when the interval has changed.

#### Returns

`void`

#### Inherited from

[`Interpolant`](/reference/three/classes/interpolant/).[`intervalChanged_`](/reference/three/classes/interpolant/#intervalchanged_)

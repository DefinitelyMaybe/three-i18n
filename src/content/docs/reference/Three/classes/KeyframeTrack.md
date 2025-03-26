---
editUrl: false
next: false
prev: false
title: "KeyframeTrack"
---

Defined in: [three/src/animation/KeyframeTrack.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L16)

Represents s a timed sequence of keyframes, which are composed of lists of
times and related values, and which are used to animate a specific property
of an object.

## Extended by

- [`VectorKeyframeTrack`](/reference/three/classes/vectorkeyframetrack/)
- [`StringKeyframeTrack`](/reference/three/classes/stringkeyframetrack/)
- [`QuaternionKeyframeTrack`](/reference/three/classes/quaternionkeyframetrack/)
- [`NumberKeyframeTrack`](/reference/three/classes/numberkeyframetrack/)
- [`ColorKeyframeTrack`](/reference/three/classes/colorkeyframetrack/)
- [`BooleanKeyframeTrack`](/reference/three/classes/booleankeyframetrack/)

## Constructors

### Constructor

> **new KeyframeTrack**(`name`, `times`, `values`, `interpolation`?): `KeyframeTrack`

Defined in: [three/src/animation/KeyframeTrack.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L26)

Constructs a new keyframe track.

#### Parameters

##### name

`string`

The keyframe track's name.

##### times

`number`[]

A list of keyframe times.

##### values

`number`[]

A list of keyframe values.

##### interpolation?

`number`

The interpolation type.

#### Returns

`KeyframeTrack`

## Properties

### createInterpolant

> **createInterpolant**: (`result`?) => [`LinearInterpolant`](/reference/three/classes/linearinterpolant/) \| (`result`?) => [`CubicInterpolant`](/reference/three/classes/cubicinterpolant/)

Defined in: [three/src/animation/KeyframeTrack.js:199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L199)

#### Type declaration

(`result`?) => [`LinearInterpolant`](/reference/three/classes/linearinterpolant/)

Factory method for creating a new linear interpolant.

#### Parameters

##### result?

`TypedArray`

The result buffer.

#### Returns

[`LinearInterpolant`](/reference/three/classes/linearinterpolant/)

The new interpolant.

#### Static

(`result`?) => [`CubicInterpolant`](/reference/three/classes/cubicinterpolant/)

Factory method for creating a new smooth interpolant.

#### Parameters

##### result?

`TypedArray`

The result buffer.

#### Returns

[`CubicInterpolant`](/reference/three/classes/cubicinterpolant/)

The new interpolant.

#### Static

***

### DefaultInterpolation

> **DefaultInterpolation**: `number`

Defined in: [three/src/animation/KeyframeTrack.js:594](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L594)

The default interpolation type of this keyframe track.

#### Default

```ts
InterpolateLinear
```

***

### name

> **name**: `string`

Defined in: [three/src/animation/KeyframeTrack.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L38)

The track's name can refer to morph targets or bones or
possibly other values within an animated object. See PropertyBinding#parseTrackName
for the forms of strings that can be parsed for property binding.

***

### TimeBufferType

> **TimeBufferType**: `any`

Defined in: [three/src/animation/KeyframeTrack.js:578](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L578)

The time buffer type of this keyframe track.

#### Default

```ts
Float32Array.constructor
```

***

### times

> **times**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [three/src/animation/KeyframeTrack.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L45)

The keyframe times.

***

### ValueBufferType

> **ValueBufferType**: `any`

Defined in: [three/src/animation/KeyframeTrack.js:586](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L586)

The value buffer type of this keyframe track.

#### Default

```ts
Float32Array.constructor
```

***

### values

> **values**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [three/src/animation/KeyframeTrack.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L52)

The keyframe values.

***

### ValueTypeName

> **ValueTypeName**: `string`

Defined in: [three/src/animation/KeyframeTrack.js:570](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L570)

The value type name.

#### Default

```ts
''
```

## Methods

### clone()

> **clone**(): `KeyframeTrack`

Defined in: [three/src/animation/KeyframeTrack.js:547](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L547)

Returns a new keyframe track with copied values from this instance.

#### Returns

`KeyframeTrack`

A clone of this instance.

***

### getInterpolation()

> **getInterpolation**(): `number`

Defined in: [three/src/animation/KeyframeTrack.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L210)

Returns the current interpolation type.

#### Returns

`number`

The interpolation type.

***

### getValueSize()

> **getValueSize**(): `number`

Defined in: [three/src/animation/KeyframeTrack.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L235)

Returns the value size.

#### Returns

`number`

The value size.

***

### InterpolantFactoryMethodDiscrete()

> **InterpolantFactoryMethodDiscrete**(`result`?): [`DiscreteInterpolant`](/reference/three/classes/discreteinterpolant/)

Defined in: [three/src/animation/KeyframeTrack.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L110)

Factory method for creating a new discrete interpolant.

#### Parameters

##### result?

`TypedArray`

The result buffer.

#### Returns

[`DiscreteInterpolant`](/reference/three/classes/discreteinterpolant/)

The new interpolant.

#### Static

***

### InterpolantFactoryMethodLinear()

> **InterpolantFactoryMethodLinear**(`result`?): [`LinearInterpolant`](/reference/three/classes/linearinterpolant/)

Defined in: [three/src/animation/KeyframeTrack.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L123)

Factory method for creating a new linear interpolant.

#### Parameters

##### result?

`TypedArray`

The result buffer.

#### Returns

[`LinearInterpolant`](/reference/three/classes/linearinterpolant/)

The new interpolant.

#### Static

***

### InterpolantFactoryMethodSmooth()

> **InterpolantFactoryMethodSmooth**(`result`?): [`CubicInterpolant`](/reference/three/classes/cubicinterpolant/)

Defined in: [three/src/animation/KeyframeTrack.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L136)

Factory method for creating a new smooth interpolant.

#### Parameters

##### result?

`TypedArray`

The result buffer.

#### Returns

[`CubicInterpolant`](/reference/three/classes/cubicinterpolant/)

The new interpolant.

#### Static

***

### optimize()

> **optimize**(): `AnimationClip`

Defined in: [three/src/animation/KeyframeTrack.js:429](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L429)

Optimizes this keyframe track by removing equivalent sequential keys (which are
common in morph target sequences).

#### Returns

`AnimationClip`

A reference to this animation clip.

***

### scale()

> **scale**(`timeScale`): `KeyframeTrack`

Defined in: [three/src/animation/KeyframeTrack.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L271)

Scale all keyframe times by a factor (useful for frame - seconds conversions).

#### Parameters

##### timeScale

`number`

The time scale.

#### Returns

`KeyframeTrack`

A reference to this keyframe track.

***

### setInterpolation()

> **setInterpolation**(`interpolation`): `KeyframeTrack`

Defined in: [three/src/animation/KeyframeTrack.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L148)

Defines the interpolation factor method for this keyframe track.

#### Parameters

##### interpolation

`number`

The interpolation type.

#### Returns

`KeyframeTrack`

A reference to this keyframe track.

***

### shift()

> **shift**(`timeOffset`): `KeyframeTrack`

Defined in: [three/src/animation/KeyframeTrack.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L247)

Moves all keyframes either forward or backward in time.

#### Parameters

##### timeOffset

`number`

The offset to move the time values.

#### Returns

`KeyframeTrack`

A reference to this keyframe track.

***

### trim()

> **trim**(`startTime`, `endTime`): `KeyframeTrack`

Defined in: [three/src/animation/KeyframeTrack.js:299](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L299)

Removes keyframes before and after animation without changing any values within the defined time range.

Note: The method does not shift around keys to the start of the track time, because for interpolated
keys this will change their values

#### Parameters

##### startTime

`number`

The start time.

##### endTime

`number`

The end time.

#### Returns

`KeyframeTrack`

A reference to this keyframe track.

***

### validate()

> **validate**(): `boolean`

Defined in: [three/src/animation/KeyframeTrack.js:347](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L347)

Performs minimal validation on the keyframe track. Returns `true` if the values
are valid.

#### Returns

`boolean`

Whether the keyframes are valid or not.

***

### toJSON()

> `static` **toJSON**(`track`): `any`

Defined in: [three/src/animation/KeyframeTrack.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L65)

Converts the keyframe track to JSON.

#### Parameters

##### track

`KeyframeTrack`

The keyframe track to serialize.

#### Returns

`any`

The serialized keyframe track as JSON.

#### Static

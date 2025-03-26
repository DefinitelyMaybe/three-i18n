---
editUrl: false
next: false
prev: false
title: "NumberKeyframeTrack"
---

Defined in: [three/src/animation/tracks/NumberKeyframeTrack.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/tracks/NumberKeyframeTrack.js#L8)

A track for numeric keyframe values.

## Extends

- [`KeyframeTrack`](/reference/three/classes/keyframetrack/)

## Constructors

### Constructor

> **new NumberKeyframeTrack**(`name`, `times`, `values`, `interpolation`?): `NumberKeyframeTrack`

Defined in: [three/src/animation/tracks/NumberKeyframeTrack.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/tracks/NumberKeyframeTrack.js#L18)

Constructs a new number keyframe track.

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

`any`

The interpolation type.

#### Returns

`NumberKeyframeTrack`

#### Overrides

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`constructor`](/reference/three/classes/keyframetrack/#constructor)

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

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`createInterpolant`](/reference/three/classes/keyframetrack/#createinterpolant)

***

### DefaultInterpolation

> **DefaultInterpolation**: `number`

Defined in: [three/src/animation/KeyframeTrack.js:594](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L594)

The default interpolation type of this keyframe track.

#### Default

```ts
InterpolateLinear
```

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`DefaultInterpolation`](/reference/three/classes/keyframetrack/#defaultinterpolation)

***

### name

> **name**: `string`

Defined in: [three/src/animation/KeyframeTrack.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L38)

The track's name can refer to morph targets or bones or
possibly other values within an animated object. See PropertyBinding#parseTrackName
for the forms of strings that can be parsed for property binding.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`name`](/reference/three/classes/keyframetrack/#name)

***

### TimeBufferType

> **TimeBufferType**: `any`

Defined in: [three/src/animation/KeyframeTrack.js:578](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L578)

The time buffer type of this keyframe track.

#### Default

```ts
Float32Array.constructor
```

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`TimeBufferType`](/reference/three/classes/keyframetrack/#timebuffertype)

***

### times

> **times**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [three/src/animation/KeyframeTrack.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L45)

The keyframe times.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`times`](/reference/three/classes/keyframetrack/#times)

***

### ValueBufferType

> **ValueBufferType**: `any`

Defined in: [three/src/animation/KeyframeTrack.js:586](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L586)

The value buffer type of this keyframe track.

#### Default

```ts
Float32Array.constructor
```

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`ValueBufferType`](/reference/three/classes/keyframetrack/#valuebuffertype)

***

### values

> **values**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [three/src/animation/KeyframeTrack.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L52)

The keyframe values.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`values`](/reference/three/classes/keyframetrack/#values)

***

### ValueTypeName

> **ValueTypeName**: `string`

Defined in: [three/src/animation/tracks/NumberKeyframeTrack.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/tracks/NumberKeyframeTrack.js#L32)

The value type name.

#### Default

```ts
'number'
```

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`ValueTypeName`](/reference/three/classes/keyframetrack/#valuetypename)

## Methods

### clone()

> **clone**(): [`KeyframeTrack`](/reference/three/classes/keyframetrack/)

Defined in: [three/src/animation/KeyframeTrack.js:547](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L547)

Returns a new keyframe track with copied values from this instance.

#### Returns

[`KeyframeTrack`](/reference/three/classes/keyframetrack/)

A clone of this instance.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`clone`](/reference/three/classes/keyframetrack/#clone)

***

### getInterpolation()

> **getInterpolation**(): `number`

Defined in: [three/src/animation/KeyframeTrack.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L210)

Returns the current interpolation type.

#### Returns

`number`

The interpolation type.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`getInterpolation`](/reference/three/classes/keyframetrack/#getinterpolation)

***

### getValueSize()

> **getValueSize**(): `number`

Defined in: [three/src/animation/KeyframeTrack.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L235)

Returns the value size.

#### Returns

`number`

The value size.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`getValueSize`](/reference/three/classes/keyframetrack/#getvaluesize)

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

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`InterpolantFactoryMethodDiscrete`](/reference/three/classes/keyframetrack/#interpolantfactorymethoddiscrete)

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

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`InterpolantFactoryMethodLinear`](/reference/three/classes/keyframetrack/#interpolantfactorymethodlinear)

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

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`InterpolantFactoryMethodSmooth`](/reference/three/classes/keyframetrack/#interpolantfactorymethodsmooth)

***

### optimize()

> **optimize**(): `AnimationClip`

Defined in: [three/src/animation/KeyframeTrack.js:429](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L429)

Optimizes this keyframe track by removing equivalent sequential keys (which are
common in morph target sequences).

#### Returns

`AnimationClip`

A reference to this animation clip.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`optimize`](/reference/three/classes/keyframetrack/#optimize)

***

### scale()

> **scale**(`timeScale`): [`KeyframeTrack`](/reference/three/classes/keyframetrack/)

Defined in: [three/src/animation/KeyframeTrack.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L271)

Scale all keyframe times by a factor (useful for frame - seconds conversions).

#### Parameters

##### timeScale

`number`

The time scale.

#### Returns

[`KeyframeTrack`](/reference/three/classes/keyframetrack/)

A reference to this keyframe track.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`scale`](/reference/three/classes/keyframetrack/#scale)

***

### setInterpolation()

> **setInterpolation**(`interpolation`): [`KeyframeTrack`](/reference/three/classes/keyframetrack/)

Defined in: [three/src/animation/KeyframeTrack.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L148)

Defines the interpolation factor method for this keyframe track.

#### Parameters

##### interpolation

`number`

The interpolation type.

#### Returns

[`KeyframeTrack`](/reference/three/classes/keyframetrack/)

A reference to this keyframe track.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`setInterpolation`](/reference/three/classes/keyframetrack/#setinterpolation)

***

### shift()

> **shift**(`timeOffset`): [`KeyframeTrack`](/reference/three/classes/keyframetrack/)

Defined in: [three/src/animation/KeyframeTrack.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L247)

Moves all keyframes either forward or backward in time.

#### Parameters

##### timeOffset

`number`

The offset to move the time values.

#### Returns

[`KeyframeTrack`](/reference/three/classes/keyframetrack/)

A reference to this keyframe track.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`shift`](/reference/three/classes/keyframetrack/#shift)

***

### trim()

> **trim**(`startTime`, `endTime`): [`KeyframeTrack`](/reference/three/classes/keyframetrack/)

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

[`KeyframeTrack`](/reference/three/classes/keyframetrack/)

A reference to this keyframe track.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`trim`](/reference/three/classes/keyframetrack/#trim)

***

### validate()

> **validate**(): `boolean`

Defined in: [three/src/animation/KeyframeTrack.js:347](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L347)

Performs minimal validation on the keyframe track. Returns `true` if the values
are valid.

#### Returns

`boolean`

Whether the keyframes are valid or not.

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`validate`](/reference/three/classes/keyframetrack/#validate)

***

### toJSON()

> `static` **toJSON**(`track`): `any`

Defined in: [three/src/animation/KeyframeTrack.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/KeyframeTrack.js#L65)

Converts the keyframe track to JSON.

#### Parameters

##### track

[`KeyframeTrack`](/reference/three/classes/keyframetrack/)

The keyframe track to serialize.

#### Returns

`any`

The serialized keyframe track as JSON.

#### Static

#### Inherited from

[`KeyframeTrack`](/reference/three/classes/keyframetrack/).[`toJSON`](/reference/three/classes/keyframetrack/#tojson)

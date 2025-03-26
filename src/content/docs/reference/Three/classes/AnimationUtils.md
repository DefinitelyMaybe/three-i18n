---
editUrl: false
next: false
prev: false
title: "AnimationUtils"
---

Defined in: [three/src/animation/AnimationUtils.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationUtils.js#L390)

A class with various methods to assist with animations.

## Methods

### convertArray()

> `static` **convertArray**(`array`, `type`): `TypedArray`

Defined in: [three/src/animation/AnimationUtils.js:400](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationUtils.js#L400)

Converts an array to a specific type

#### Parameters

##### array

`any`

The array to convert.

##### type

`constructor`

The constructor of a type array.

#### Returns

`TypedArray`

The converted array

#### Static

***

### flattenJSON()

> `static` **flattenJSON**(`jsonKeys`, `times`, `values`, `valuePropertyName`): `void`

Defined in: [three/src/animation/AnimationUtils.js:456](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationUtils.js#L456)

Used for parsing AOS keyframe formats.

#### Parameters

##### jsonKeys

`number`[]

A list of JSON keyframes.

##### times

`number`[]

This array will be filled with keyframe times by this method.

##### values

`number`[]

This array will be filled with keyframe values by this method.

##### valuePropertyName

`string`

The name of the property to use.

#### Returns

`void`

#### Static

***

### getKeyframeOrder()

> `static` **getKeyframeOrder**(`times`): `number`[]

Defined in: [three/src/animation/AnimationUtils.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationUtils.js#L426)

Returns an array by which times and values can be sorted.

#### Parameters

##### times

`number`[]

The keyframe time values.

#### Returns

`number`[]

The array.

#### Static

***

### isTypedArray()

> `static` **isTypedArray**(`object`): `boolean`

Defined in: [three/src/animation/AnimationUtils.js:413](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationUtils.js#L413)

Returns `true` if the given object is a typed array.

#### Parameters

##### object

`any`

The object to check.

#### Returns

`boolean`

Whether the given object is a typed array.

#### Static

***

### makeClipAdditive()

> `static` **makeClipAdditive**(`targetClip`, `referenceFrame`?, `referenceClip`?, `fps`?): `AnimationClip`

Defined in: [three/src/animation/AnimationUtils.js:489](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationUtils.js#L489)

Converts the keyframes of the given animation clip to an additive format.

#### Parameters

##### targetClip

`AnimationClip`

The clip to make additive.

##### referenceFrame?

`number` = `0`

The reference frame.

##### referenceClip?

`AnimationClip` = `targetClip`

The reference clip.

##### fps?

`number` = `30`

The FPS.

#### Returns

`AnimationClip`

The updated clip which is now additive.

#### Static

***

### sortedArray()

> `static` **sortedArray**(`values`, `stride`, `order`): `number`[]

Defined in: [three/src/animation/AnimationUtils.js:441](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationUtils.js#L441)

Sorts the given array by the previously computed order via `getKeyframeOrder()`.

#### Parameters

##### values

`number`[]

The values to sort.

##### stride

`number`

The stride.

##### order

`number`[]

The sort order.

#### Returns

`number`[]

The sorted values.

#### Static

***

### subclip()

> `static` **subclip**(`sourceClip`, `name`, `startFrame`, `endFrame`, `fps`?): `AnimationClip`

Defined in: [three/src/animation/AnimationUtils.js:473](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationUtils.js#L473)

Creates a new clip, containing only the segment of the original clip between the given frames.

#### Parameters

##### sourceClip

`AnimationClip`

The values to sort.

##### name

`string`

The name of the clip.

##### startFrame

`number`

The start frame.

##### endFrame

`number`

The end frame.

##### fps?

`number` = `30`

The FPS.

#### Returns

`AnimationClip`

The new sub clip.

#### Static

---
editUrl: false
next: false
prev: false
title: "AnimationClip"
---

Defined in: [three/src/animation/AnimationClip.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L15)

A reusable set of keyframe tracks which represent an animation.

## Constructors

### Constructor

> **new AnimationClip**(`name`?, `duration`?, `tracks`?, `blendMode`?): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L31)

Constructs a new animation clip.

Note: Instead of instantiating an AnimationClip directly with the constructor, you can
use the static interface of this class for creating clips. In most cases though, animation clips
will automatically be created by loaders when importing animated 3D assets.

#### Parameters

##### name?

`string` = `''`

The clip's name.

##### duration?

`number` = `- 1`

The clip's duration in seconds. If a negative value is passed,
the duration will be calculated from the passed keyframes.

##### tracks?

[`KeyframeTrack`](/reference/three/classes/keyframetrack/)[] = `[]`

An array of keyframe tracks.

##### blendMode?

`any` = `NormalAnimationBlendMode`

Defines how the animation
is blended/combined when two or more animations are simultaneously played.

#### Returns

`AnimationClip`

## Properties

### blendMode

> **blendMode**: `any`

Defined in: [three/src/animation/AnimationClip.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L60)

Defines how the animation is blended/combined when two or more animations
are simultaneously played.

***

### duration

> **duration**: `number`

Defined in: [three/src/animation/AnimationClip.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L52)

The clip's duration in seconds.

***

### name

> **name**: `string`

Defined in: [three/src/animation/AnimationClip.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L38)

The clip's name.

***

### tracks

> **tracks**: [`KeyframeTrack`](/reference/three/classes/keyframetrack/)[]

Defined in: [three/src/animation/AnimationClip.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L45)

An array of keyframe tracks.

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/animation/AnimationClip.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L68)

The UUID of the animation clip.

## Methods

### clone()

> **clone**(): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:508](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L508)

Returns a new animation clip with copied values from this instance.

#### Returns

`AnimationClip`

A clone of this instance.

***

### optimize()

> **optimize**(): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:491](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L491)

Optimizes each track by removing equivalent sequential keys (which are
common in morph target sequences).

#### Returns

`AnimationClip`

A reference to this animation clip.

***

### resetDuration()

> **resetDuration**(): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:429](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L429)

Sets the duration of this clip to the duration of its longest keyframe track.

#### Returns

`AnimationClip`

A reference to this animation clip.

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/animation/AnimationClip.js:527](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L527)

Serializes this animation clip into JSON.

#### Returns

`any`

The JSON object.

***

### trim()

> **trim**(): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:453](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L453)

Trims all tracks to the clip's duration.

#### Returns

`AnimationClip`

A reference to this animation clip.

***

### validate()

> **validate**(): `boolean`

Defined in: [three/src/animation/AnimationClip.js:471](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L471)

Performs minimal validation on each track in the clip. Returns `true` if all
tracks are valid.

#### Returns

`boolean`

Whether the clip's keyframes are valid or not.

***

### CreateClipsFromMorphTargetSequences()

> `static` **CreateClipsFromMorphTargetSequences**(`morphTargets`, `fps`, `noLoop`): `AnimationClip`[]

Defined in: [three/src/animation/AnimationClip.js:241](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L241)

Returns an array of new AnimationClips created from the morph target
sequences of a geometry, trying to sort morph target names into
animation-group-based patterns like "Walk_001, Walk_002, Run_001, Run_002...".

See MD2Loader#parse as an example for how the method should be used.

#### Parameters

##### morphTargets

`any`[]

A sequence of morph targets.

##### fps

`number`

The Frames-Per-Second value.

##### noLoop

`boolean`

Whether the clip should be no loop or not.

#### Returns

`AnimationClip`[]

An array of new animation clips.

#### Static

***

### CreateFromMorphTargetSequence()

> `static` **CreateFromMorphTargetSequence**(`name`, `morphTargetSequence`, `fps`, `noLoop`): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:151](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L151)

Returns a new animation clip from the passed morph targets array of a
geometry, taking a name and the number of frames per second.

Note: The fps parameter is required, but the animation speed can be
overridden via [AnimationAction#setDuration](/reference/three/classes/animationaction/#setduration).

#### Parameters

##### name

`string`

The name of the animation clip.

##### morphTargetSequence

`any`[]

A sequence of morph targets.

##### fps

`number`

The Frames-Per-Second value.

##### noLoop

`boolean`

Whether the clip should be no loop or not.

#### Returns

`AnimationClip`

The new animation clip.

#### Static

***

### findByName()

> `static` **findByName**(`objectOrClipArray`, `name`): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L203)

Searches for an animation clip by name, taking as its first parameter
either an array of clips, or a mesh or geometry that contains an
array named "animations" property.

#### Parameters

##### objectOrClipArray

`any`

The array or object to search through.

##### name

`string`

The name to search for.

#### Returns

`AnimationClip`

The found animation clip. Returns `null` if no clip has been found.

#### Static

***

### parse()

> `static` **parse**(`json`): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L86)

Factory method for creating an animation clip from the given JSON.

#### Parameters

##### json

`any`

The serialized animation clip.

#### Returns

`AnimationClip`

The new animation clip.

#### Static

***

### ~~parseAnimation()~~

> `static` **parseAnimation**(`animation`, `bones`): `AnimationClip`

Defined in: [three/src/animation/AnimationClip.js:295](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L295)

Parses the `animation.hierarchy` format and returns a new animation clip.

:::caution[Deprecated]
since r175.
:::

#### Parameters

##### animation

`any`

A serialized animation clip as JSON.

##### bones

`Bones`[]

An array of bones.

#### Returns

`AnimationClip`

The new animation clip.

#### Static

***

### toJSON()

> `static` **toJSON**(`clip`): `any`

Defined in: [three/src/animation/AnimationClip.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationClip.js#L112)

Serializes the given animation clip into JSON.

#### Parameters

##### clip

`AnimationClip`

The animation clip to serialize.

#### Returns

`any`

The JSON object.

#### Static

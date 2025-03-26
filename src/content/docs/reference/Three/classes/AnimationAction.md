---
editUrl: false
next: false
prev: false
title: "AnimationAction"
---

Defined in: [three/src/animation/AnimationAction.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L7)

An instance of `AnimationAction` schedules the playback of an animation which is
stored in [AnimationClip](/reference/three/classes/animationclip/).

## Constructors

### Constructor

> **new AnimationAction**(`mixer`, `clip`, `localRoot`?, `blendMode`?): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L17)

Constructs a new animation action.

#### Parameters

##### mixer

`AnimationMixer`

The mixer that is controlled by this action.

##### clip

`AnimationClip`

The animation clip that holds the actual keyframes.

##### localRoot?

`Object3D` = `null`

The root object on which this action is performed.

##### blendMode?

`number` = `clip.blendMode`

The blend mode.

#### Returns

`AnimationAction`

## Properties

### \_byClipCacheIndex

> **\_byClipCacheIndex**: `any`

Defined in: [three/src/animation/AnimationAction.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L56)

***

### \_cacheIndex

> **\_cacheIndex**: `any`

Defined in: [three/src/animation/AnimationAction.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L55)

***

### \_clip

> **\_clip**: `AnimationClip`

Defined in: [three/src/animation/AnimationAction.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L20)

***

### \_effectiveTimeScale

> **\_effectiveTimeScale**: `number`

Defined in: [three/src/animation/AnimationAction.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L93)

***

### \_effectiveWeight

> **\_effectiveWeight**: `number`

Defined in: [three/src/animation/AnimationAction.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L104)

***

### \_interpolants

> **\_interpolants**: `any`[]

Defined in: [three/src/animation/AnimationAction.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L50)

***

### \_interpolantSettings

> **\_interpolantSettings**: `object`

Defined in: [three/src/animation/AnimationAction.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L48)

#### endingEnd

> **endingEnd**: `number` = `ZeroCurvatureEnding`

#### endingStart

> **endingStart**: `number` = `ZeroCurvatureEnding`

***

### \_localRoot

> **\_localRoot**: `Object3D`

Defined in: [three/src/animation/AnimationAction.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L21)

***

### \_loopCount

> **\_loopCount**: `number`

Defined in: [three/src/animation/AnimationAction.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L68)

***

### \_mixer

> **\_mixer**: `AnimationMixer`

Defined in: [three/src/animation/AnimationAction.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L19)

***

### \_propertyBindings

> **\_propertyBindings**: `any`[]

Defined in: [three/src/animation/AnimationAction.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L53)

***

### \_startTime

> **\_startTime**: `number`

Defined in: [three/src/animation/AnimationAction.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L72)

***

### \_timeScaleInterpolant

> **\_timeScaleInterpolant**: `any`

Defined in: [three/src/animation/AnimationAction.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L58)

***

### \_weightInterpolant

> **\_weightInterpolant**: `any`

Defined in: [three/src/animation/AnimationAction.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L59)

***

### blendMode

> **blendMode**: `number`

Defined in: [three/src/animation/AnimationAction.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L29)

Defines how the animation is blended/combined when two or more animations
are simultaneously played.

***

### clampWhenFinished

> **clampWhenFinished**: `boolean`

Defined in: [three/src/animation/AnimationAction.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L150)

If set to true the animation will automatically be paused on its last frame.

If set to false, [AnimationAction#enabled](/reference/three/classes/animationaction/#enabled) will automatically be switched
to `false` when the last loop of the action has finished, so that this action has
no further impact.

Note: This member has no impact if the action is interrupted (it
has only an effect if its last loop has really finished).

#### Default

```ts
false
```

***

### enabled

> **enabled**: `boolean`

Defined in: [three/src/animation/AnimationAction.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L135)

If set to `false`, the action is disabled so it has no impact.

When the action is re-enabled, the animation continues from its current
time (setting `enabled` to `false` doesn't reset the action).

#### Default

```ts
true
```

***

### loop

> **loop**: `number`

Defined in: [three/src/animation/AnimationAction.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L67)

The loop mode, set via [AnimationAction#setLoop](/reference/three/classes/animationaction/#setloop).

#### Default

```ts
LoopRepeat
```

***

### paused

> **paused**: `boolean`

Defined in: [three/src/animation/AnimationAction.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L124)

If set to `true`, the playback of the action is paused.

#### Default

```ts
false
```

***

### repetitions

> **repetitions**: `number`

Defined in: [three/src/animation/AnimationAction.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L116)

The number of repetitions of the performed clip over the course of this action.
Can be set via [AnimationAction#setLoop](/reference/three/classes/animationaction/#setloop).

Setting this number has no effect if [AnimationAction#loop](/reference/three/classes/animationaction/#loop) is set to
`THREE:LoopOnce`.

#### Default

```ts
Infinity
```

***

### time

> **time**: `number`

Defined in: [three/src/animation/AnimationAction.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L83)

The local time of this action (in seconds, starting with `0`).

The value gets clamped or wrapped to `[0,clip.duration]` (according to the
loop state).

#### Default

```ts
Infinity
```

***

### timeScale

> **timeScale**: `number`

Defined in: [three/src/animation/AnimationAction.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L92)

Scaling factor for the [AnimationAction#time](/reference/three/classes/animationaction/#time). A value of `0` causes the
animation to pause. Negative values cause the animation to play backwards.

#### Default

```ts
1
```

***

### weight

> **weight**: `number`

Defined in: [three/src/animation/AnimationAction.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L103)

The degree of influence of this action (in the interval `[0, 1]`). Values
between `0` (no impact) and `1` (full impact) can be used to blend between
several actions.

#### Default

```ts
1
```

***

### zeroSlopeAtEnd

> **zeroSlopeAtEnd**: `boolean`

Defined in: [three/src/animation/AnimationAction.js:166](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L166)

Enables smooth interpolation without separate clips for start, loop and end.

#### Default

```ts
true
```

***

### zeroSlopeAtStart

> **zeroSlopeAtStart**: `boolean`

Defined in: [three/src/animation/AnimationAction.js:158](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L158)

Enables smooth interpolation without separate clips for start, loop and end.

#### Default

```ts
true
```

## Methods

### \_scheduleFading()

> **\_scheduleFading**(`duration`, `weightNow`, `weightThen`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:905](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L905)

#### Parameters

##### duration

`any`

##### weightNow

`any`

##### weightThen

`any`

#### Returns

`AnimationAction`

***

### \_setEndings()

> **\_setEndings**(`atStart`, `atEnd`, `pingPong`): `void`

Defined in: [three/src/animation/AnimationAction.js:868](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L868)

#### Parameters

##### atStart

`any`

##### atEnd

`any`

##### pingPong

`any`

#### Returns

`void`

***

### \_update()

> **\_update**(`time`, `deltaTime`, `timeDirection`, `accuIndex`): `void`

Defined in: [three/src/animation/AnimationAction.js:553](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L553)

#### Parameters

##### time

`any`

##### deltaTime

`any`

##### timeDirection

`any`

##### accuIndex

`any`

#### Returns

`void`

***

### \_updateTime()

> **\_updateTime**(`deltaTime`): `any`

Defined in: [three/src/animation/AnimationAction.js:711](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L711)

#### Parameters

##### deltaTime

`any`

#### Returns

`any`

***

### \_updateTimeScale()

> **\_updateTimeScale**(`time`): `number`

Defined in: [three/src/animation/AnimationAction.js:668](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L668)

#### Parameters

##### time

`any`

#### Returns

`number`

***

### \_updateWeight()

> **\_updateWeight**(`time`): `number`

Defined in: [three/src/animation/AnimationAction.js:631](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L631)

#### Parameters

##### time

`any`

#### Returns

`number`

***

### crossFadeFrom()

> **crossFadeFrom**(`fadeOutAction`, `duration`, `warp`?): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:333](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L333)

Causes this action to fade in and the given action to fade out,
within the passed time interval.

#### Parameters

##### fadeOutAction

`AnimationAction`

The animation action to fade out.

##### duration

`number`

The duration of the fade.

##### warp?

`boolean` = `false`

Whether warping should be used or not.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### crossFadeTo()

> **crossFadeTo**(`fadeInAction`, `duration`, `warp`?): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:364](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L364)

Causes this action to fade out and the given action to fade in,
within the passed time interval.

#### Parameters

##### fadeInAction

`AnimationAction`

The animation action to fade in.

##### duration

`number`

The duration of the fade.

##### warp?

`boolean` = `false`

Whether warping should be used or not.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### fadeIn()

> **fadeIn**(`duration`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:305](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L305)

Fades the animation in by increasing its weight gradually from `0` to `1`,
within the passed time interval.

#### Parameters

##### duration

`number`

The duration of the fade.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### fadeOut()

> **fadeOut**(`duration`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:318](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L318)

Fades the animation out by decreasing its weight gradually from `1` to `0`,
within the passed time interval.

#### Parameters

##### duration

`number`

The duration of the fade.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### getClip()

> **getClip**(): `AnimationClip`

Defined in: [three/src/animation/AnimationAction.js:534](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L534)

Returns the animation clip of this animation action.

#### Returns

`AnimationClip`

The animation clip.

***

### getEffectiveTimeScale()

> **getEffectiveTimeScale**(): `number`

Defined in: [three/src/animation/AnimationAction.js:413](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L413)

Returns the effective time scale of this action.

#### Returns

`number`

The effective time scale.

***

### getEffectiveWeight()

> **getEffectiveWeight**(): `number`

Defined in: [three/src/animation/AnimationAction.js:292](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L292)

Returns the effective weight of this action.

#### Returns

`number`

The effective weight.

***

### getMixer()

> **getMixer**(): `AnimationMixer`

Defined in: [three/src/animation/AnimationAction.js:523](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L523)

Returns the animation mixer of this animation action.

#### Returns

`AnimationMixer`

The animation mixer.

***

### getRoot()

> **getRoot**(): `Object3D`

Defined in: [three/src/animation/AnimationAction.js:545](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L545)

Returns the root object of this animation action.

#### Returns

`Object3D`

The root object.

***

### halt()

> **halt**(`duration`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:454](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L454)

Decelerates this animation's speed to `0` within the passed time interval.

#### Parameters

##### duration

`number`

The duration.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### isRunning()

> **isRunning**(): `boolean`

Defined in: [three/src/animation/AnimationAction.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L219)

Returns `true` if the animation is running.

#### Returns

`boolean`

Whether the animation is running or not.

***

### isScheduled()

> **isScheduled**(): `boolean`

Defined in: [three/src/animation/AnimationAction.js:231](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L231)

Returns `true` when [AnimationAction#play](/reference/three/classes/animationaction/#play) has been called.

#### Returns

`boolean`

Whether the animation is scheduled or not.

***

### play()

> **play**(): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L175)

Starts the playback of the animation.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### reset()

> **reset**(): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L201)

Resets the playback of the animation.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### setDuration()

> **setDuration**(`duration`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:425](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L425)

Sets the duration for a single loop of this action.

#### Parameters

##### duration

`number`

The duration to set.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### setEffectiveTimeScale()

> **setEffectiveTimeScale**(`timeScale`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:399](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L399)

Sets the effective time scale of this action.

An action has no effect and thus an effective time scale of zero when the
action is paused.

#### Parameters

##### timeScale

`number`

The time scale to set.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### setEffectiveWeight()

> **setEffectiveWeight**(`weight`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:276](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L276)

Sets the effective weight of this action.

An action has no effect and thus an effective weight of zero when the
action is disabled.

#### Parameters

##### weight

`number`

The weight to set.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### setLoop()

> **setLoop**(`mode`, `repetitions`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:258](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L258)

Configures the loop settings for this action.

#### Parameters

##### mode

`number`

The loop mode.

##### repetitions

`number`

The number of repetitions.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### startAt()

> **startAt**(`time`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:243](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L243)

Defines the time when the animation should start.

#### Parameters

##### time

`number`

The start time in seconds.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### stop()

> **stop**(): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:188](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L188)

Stops the playback of the animation.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### stopFading()

> **stopFading**(): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:375](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L375)

Stops any fading which is applied to this action.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### stopWarping()

> **stopWarping**(): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:503](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L503)

Stops any scheduled warping which is applied to this action.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### syncWith()

> **syncWith**(`action`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:439](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L439)

Synchronizes this action with the passed other action.

#### Parameters

##### action

`AnimationAction`

The action to sync with.

#### Returns

`AnimationAction`

A reference to this animation action.

***

### warp()

> **warp**(`startTimeScale`, `endTimeScale`, `duration`): `AnimationAction`

Defined in: [three/src/animation/AnimationAction.js:470](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationAction.js#L470)

Changes the playback speed, within the passed time interval, by modifying
[AnimationAction#timeScale](/reference/three/classes/animationaction/#timescale) gradually from `startTimeScale` to
`endTimeScale`.

#### Parameters

##### startTimeScale

`number`

The start time scale.

##### endTimeScale

`number`

The end time scale.

##### duration

`number`

The duration.

#### Returns

`AnimationAction`

A reference to this animation action.

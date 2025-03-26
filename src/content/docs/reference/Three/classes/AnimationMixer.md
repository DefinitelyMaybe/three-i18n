---
editUrl: false
next: false
prev: false
title: "AnimationMixer"
---

Defined in: [three/src/animation/AnimationMixer.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L16)

`AnimationMixer` is a player for animations on a particular object in
the scene. When multiple objects in the scene are animated independently,
one `AnimationMixer` may be used for each object.

## Extends

- [`EventDispatcher`](/reference/three/classes/eventdispatcher/)

## Constructors

### Constructor

> **new AnimationMixer**(`root`): `AnimationMixer`

Defined in: [three/src/animation/AnimationMixer.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L23)

Constructs a new animation mixer.

#### Parameters

##### root

`Object3D`

The object whose animations shall be played by this mixer.

#### Returns

`AnimationMixer`

#### Overrides

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`constructor`](/reference/three/classes/eventdispatcher/#constructor)

## Properties

### \_accuIndex

> **\_accuIndex**: `number`

Defined in: [three/src/animation/AnimationMixer.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L29)

***

### \_actions

> **\_actions**: `any`[]

Defined in: [three/src/animation/AnimationMixer.js:195](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L195)

***

### \_actionsByClip

> **\_actionsByClip**: `object`

Defined in: [three/src/animation/AnimationMixer.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L198)

***

### \_bindings

> **\_bindings**: `any`[]

Defined in: [three/src/animation/AnimationMixer.js:206](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L206)

***

### \_bindingsByRootAndName

> **\_bindingsByRootAndName**: `object`

Defined in: [three/src/animation/AnimationMixer.js:209](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L209)

***

### \_controlInterpolants

> **\_controlInterpolants**: `any`[]

Defined in: [three/src/animation/AnimationMixer.js:212](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L212)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`_listeners`](/reference/three/classes/eventdispatcher/#_listeners)

***

### \_nActiveActions

> **\_nActiveActions**: `number`

Defined in: [three/src/animation/AnimationMixer.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L196)

***

### \_nActiveBindings

> **\_nActiveBindings**: `number`

Defined in: [three/src/animation/AnimationMixer.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L207)

***

### \_nActiveControlInterpolants

> **\_nActiveControlInterpolants**: `number`

Defined in: [three/src/animation/AnimationMixer.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L213)

***

### \_root

> **\_root**: `Object3D`

Defined in: [three/src/animation/AnimationMixer.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L27)

***

### stats

> **stats**: `object`

Defined in: [three/src/animation/AnimationMixer.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L217)

#### actions

> **actions**: `object`

##### actions.inUse

###### Get Signature

> **get** **inUse**(): `number`

Defined in: [three/src/animation/AnimationMixer.js:225](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L225)

###### Returns

`number`

##### actions.total

###### Get Signature

> **get** **total**(): `number`

Defined in: [three/src/animation/AnimationMixer.js:220](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L220)

###### Returns

`number`

#### bindings

> **bindings**: `object`

##### bindings.inUse

###### Get Signature

> **get** **inUse**(): `number`

Defined in: [three/src/animation/AnimationMixer.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L237)

###### Returns

`number`

##### bindings.total

###### Get Signature

> **get** **total**(): `number`

Defined in: [three/src/animation/AnimationMixer.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L232)

###### Returns

`number`

#### controlInterpolants

> **controlInterpolants**: `object`

##### controlInterpolants.inUse

###### Get Signature

> **get** **inUse**(): `number`

Defined in: [three/src/animation/AnimationMixer.js:249](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L249)

###### Returns

`number`

##### controlInterpolants.total

###### Get Signature

> **get** **total**(): `number`

Defined in: [three/src/animation/AnimationMixer.js:244](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L244)

###### Returns

`number`

***

### time

> **time**: `number`

Defined in: [three/src/animation/AnimationMixer.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L37)

The global mixer time (in seconds; starting with `0` on the mixer's creation).

#### Default

```ts
0
```

***

### timeScale

> **timeScale**: `number`

Defined in: [three/src/animation/AnimationMixer.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L49)

A scaling factor for the global time.

Note: Setting this member to `0` and later back to `1` is a
possibility to pause/unpause all actions that are controlled by this
mixer.

#### Default

```ts
1
```

## Methods

### \_activateAction()

> **\_activateAction**(`action`): `void`

Defined in: [three/src/animation/AnimationMixer.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L123)

#### Parameters

##### action

`any`

#### Returns

`void`

***

### \_addInactiveAction()

> **\_addInactiveAction**(`action`, `clipUuid`, `rootUuid`): `void`

Defined in: [three/src/animation/AnimationMixer.js:269](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L269)

#### Parameters

##### action

`any`

##### clipUuid

`any`

##### rootUuid

`any`

#### Returns

`void`

***

### \_addInactiveBinding()

> **\_addInactiveBinding**(`binding`, `rootUuid`, `trackName`): `void`

Defined in: [three/src/animation/AnimationMixer.js:416](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L416)

#### Parameters

##### binding

`any`

##### rootUuid

`any`

##### trackName

`any`

#### Returns

`void`

***

### \_bindAction()

> **\_bindAction**(`action`, `prototypeAction`): `void`

Defined in: [three/src/animation/AnimationMixer.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L53)

#### Parameters

##### action

`any`

##### prototypeAction

`any`

#### Returns

`void`

***

### \_deactivateAction()

> **\_deactivateAction**(`action`): `void`

Defined in: [three/src/animation/AnimationMixer.js:165](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L165)

#### Parameters

##### action

`any`

#### Returns

`void`

***

### \_initMemoryManager()

> **\_initMemoryManager**(): `void`

Defined in: [three/src/animation/AnimationMixer.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L193)

#### Returns

`void`

***

### \_isActiveAction()

> **\_isActiveAction**(`action`): `boolean`

Defined in: [three/src/animation/AnimationMixer.js:262](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L262)

#### Parameters

##### action

`any`

#### Returns

`boolean`

***

### \_lendAction()

> **\_lendAction**(`action`): `void`

Defined in: [three/src/animation/AnimationMixer.js:368](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L368)

#### Parameters

##### action

`any`

#### Returns

`void`

***

### \_lendBinding()

> **\_lendBinding**(`binding`): `void`

Defined in: [three/src/animation/AnimationMixer.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L463)

#### Parameters

##### binding

`any`

#### Returns

`void`

***

### \_lendControlInterpolant()

> **\_lendControlInterpolant**(): `any`

Defined in: [three/src/animation/AnimationMixer.js:500](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L500)

#### Returns

`any`

***

### \_removeInactiveAction()

> **\_removeInactiveAction**(`action`): `void`

Defined in: [three/src/animation/AnimationMixer.js:305](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L305)

#### Parameters

##### action

`any`

#### Returns

`void`

***

### \_removeInactiveBinding()

> **\_removeInactiveBinding**(`binding`): `void`

Defined in: [three/src/animation/AnimationMixer.js:437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L437)

#### Parameters

##### binding

`any`

#### Returns

`void`

***

### \_removeInactiveBindingsForAction()

> **\_removeInactiveBindingsForAction**(`action`): `void`

Defined in: [three/src/animation/AnimationMixer.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L350)

#### Parameters

##### action

`any`

#### Returns

`void`

***

### \_takeBackAction()

> **\_takeBackAction**(`action`): `void`

Defined in: [three/src/animation/AnimationMixer.js:391](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L391)

#### Parameters

##### action

`any`

#### Returns

`void`

***

### \_takeBackBinding()

> **\_takeBackBinding**(`binding`): `void`

Defined in: [three/src/animation/AnimationMixer.js:480](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L480)

#### Parameters

##### binding

`any`

#### Returns

`void`

***

### \_takeBackControlInterpolant()

> **\_takeBackControlInterpolant**(`interpolant`): `void`

Defined in: [three/src/animation/AnimationMixer.js:522](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L522)

#### Parameters

##### interpolant

`any`

#### Returns

`void`

***

### addEventListener()

> **addEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L31)

Adds the given event listener to the given event type.

#### Parameters

##### type

`string`

The type of event to listen to.

##### listener

`Function`

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`addEventListener`](/reference/three/classes/eventdispatcher/#addeventlistener)

***

### clipAction()

> **clipAction**(`clip`, `optionalRoot`?, `blendMode`?): [`AnimationAction`](/reference/three/classes/animationaction/)

Defined in: [three/src/animation/AnimationMixer.js:551](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L551)

Returns an instance of [AnimationAction](/reference/three/classes/animationaction/) for the passed clip.

If an action fitting the clip and root parameters doesn't yet exist, it
will be created by this method. Calling this method several times with the
same clip and root parameters always returns the same action.

#### Parameters

##### clip

An animation clip or alternatively the name of the animation clip.

`string` | [`AnimationClip`](/reference/three/classes/animationclip/)

##### optionalRoot?

`Object3D`

An alternative root object.

##### blendMode?

`any`

The blend mode.

#### Returns

[`AnimationAction`](/reference/three/classes/animationaction/)

The animation action.

***

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [three/src/core/EventDispatcher.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L101)

Dispatches an event object.

#### Parameters

##### event

`any`

The event that gets fired.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`dispatchEvent`](/reference/three/classes/eventdispatcher/#dispatchevent)

***

### existingAction()

> **existingAction**(`clip`, `optionalRoot`?): [`AnimationAction`](/reference/three/classes/animationaction/)

Defined in: [three/src/animation/AnimationMixer.js:619](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L619)

Returns an existing animation action for the passed clip.

#### Parameters

##### clip

An animation clip or alternatively the name of the animation clip.

`string` | [`AnimationClip`](/reference/three/classes/animationclip/)

##### optionalRoot?

`Object3D`

An alternative root object.

#### Returns

[`AnimationAction`](/reference/three/classes/animationaction/)

The animation action. Returns `null` if no action was found.

***

### getRoot()

> **getRoot**(): `Object3D`

Defined in: [three/src/animation/AnimationMixer.js:734](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L734)

Returns this mixer's root object.

#### Returns

`Object3D`

The mixer's root object.

***

### hasEventListener()

> **hasEventListener**(`type`, `listener`): `boolean`

Defined in: [three/src/core/EventDispatcher.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L58)

Returns `true` if the given event listener has been added to the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to check.

#### Returns

`boolean`

Whether the given event listener has been added to the given event type.

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`hasEventListener`](/reference/three/classes/eventdispatcher/#haseventlistener)

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L74)

Removes the given event listener from the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to remove.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`removeEventListener`](/reference/three/classes/eventdispatcher/#removeeventlistener)

***

### setTime()

> **setTime**(`time`): `AnimationMixer`

Defined in: [three/src/animation/AnimationMixer.js:716](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L716)

Sets the global mixer to a specific time and updates the animation accordingly.

This is useful when you need to jump to an exact time in an animation. The
input parameter will be scaled by [AnimationMixer#timeScale](/reference/three/classes/animationmixer/#timescale)

#### Parameters

##### time

`number`

The time to set in seconds.

#### Returns

`AnimationMixer`

A reference to thi animation mixer.

***

### stopAllAction()

> **stopAllAction**(): `AnimationMixer`

Defined in: [three/src/animation/AnimationMixer.js:646](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L646)

Deactivates all previously scheduled actions on this mixer.

#### Returns

`AnimationMixer`

A reference to thi animation mixer.

***

### uncacheAction()

> **uncacheAction**(`clip`, `optionalRoot`?): `void`

Defined in: [three/src/animation/AnimationMixer.js:839](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L839)

Deallocates all memory resources for an action. The action is identified by the
given clip and an optional root object. Before using this method make
sure to call [AnimationAction#stop](/reference/three/classes/animationaction/#stop) to deactivate the action.

#### Parameters

##### clip

An animation clip or alternatively the name of the animation clip.

`string` | [`AnimationClip`](/reference/three/classes/animationclip/)

##### optionalRoot?

`Object3D`

An alternative root object.

#### Returns

`void`

***

### uncacheClip()

> **uncacheClip**(`clip`): `void`

Defined in: [three/src/animation/AnimationMixer.js:746](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L746)

Deallocates all memory resources for a clip. Before using this method make
sure to call [AnimationAction#stop](/reference/three/classes/animationaction/#stop) for all related actions.

#### Parameters

##### clip

[`AnimationClip`](/reference/three/classes/animationclip/)

The clip to uncache.

#### Returns

`void`

***

### uncacheRoot()

> **uncacheRoot**(`root`): `void`

Defined in: [three/src/animation/AnimationMixer.js:795](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L795)

Deallocates all memory resources for a root object. Before using this
method make sure to call [AnimationAction#stop](/reference/three/classes/animationaction/#stop) for all related
actions or alternatively [AnimationMixer#stopAllAction](/reference/three/classes/animationmixer/#stopallaction) when the
mixer operates on a single root.

#### Parameters

##### root

`Object3D`

The root object to uncache.

#### Returns

`void`

***

### update()

> **update**(`deltaTime`): `AnimationMixer`

Defined in: [three/src/animation/AnimationMixer.js:670](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationMixer.js#L670)

Advances the global mixer time and updates the animation.

This is usually done in the render loop by passing the delta
time from [Clock](/reference/three/classes/clock/) or Timer.

#### Parameters

##### deltaTime

`number`

The delta time in seconds.

#### Returns

`AnimationMixer`

A reference to thi animation mixer.

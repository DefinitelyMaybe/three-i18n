---
editUrl: false
next: false
prev: false
title: "MorphBlendMesh"
---

Defined in: [three/addons/misc/MorphBlendMesh.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L14)

A special type of an animated mesh with a more advanced interface
for animation playback. Unlike [MorphAnimMesh](/addons/classes/morphanimmesh/). It allows to
playback more than one morph animation at the same time but without
fading options.

## Extends

- `unknown`

## Constructors

### Constructor

> **new MorphBlendMesh**(`geometry`?, `material`?): `MorphBlendMesh`

Defined in: [three/addons/misc/MorphBlendMesh.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L22)

Constructs a new morph blend mesh.

#### Parameters

##### geometry?

`BufferGeometry`

The mesh geometry.

##### material?

`any`

The mesh material.

#### Returns

`MorphBlendMesh`

#### Overrides

`Mesh.constructor`

## Properties

### animationsList

> **animationsList**: `any`[]

Defined in: [three/addons/misc/MorphBlendMesh.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L38)

A list of animations.

***

### animationsMap

> **animationsMap**: `object`

Defined in: [three/addons/misc/MorphBlendMesh.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L31)

A dictionary of animations.

***

### firstAnimation

> **firstAnimation**: `string`

Defined in: [three/addons/misc/MorphBlendMesh.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L142)

## Methods

### autoCreateAnimations()

> **autoCreateAnimations**(`fps`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L102)

Automatically creates animations based on the values in
Mesh#morphTargetDictionary.

#### Parameters

##### fps

`number`

The FPS of all animations.

#### Returns

`void`

***

### createAnimation()

> **createAnimation**(`name`, `start`, `end`, `fps`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L65)

Creates a new animation.

#### Parameters

##### name

`string`

The animation name.

##### start

`number`

The start time.

##### end

`number`

The end time.

##### fps

`number`

The FPS.

#### Returns

`void`

***

### getAnimationDuration()

> **getAnimationDuration**(`name`): `number`

Defined in: [three/addons/misc/MorphBlendMesh.js:286](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L286)

Returns the duration for the defined animation.

#### Parameters

##### name

`string`

The animation name.

#### Returns

`number`

The duration.

***

### getAnimationTime()

> **getAnimationTime**(`name`): `number`

Defined in: [three/addons/misc/MorphBlendMesh.js:264](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L264)

Returns the time for the defined animation.

#### Parameters

##### name

`string`

The animation name.

#### Returns

`number`

The time.

***

### playAnimation()

> **playAnimation**(`name`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:307](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L307)

Plays the defined animation.

#### Parameters

##### name

`string`

The animation name.

#### Returns

`void`

***

### setAnimationDirectionBackward()

> **setAnimationDirectionBackward**(`name`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:171](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L171)

Sets the animation playback direction to "backward" for the
defined animation.

#### Parameters

##### name

`string`

The animation name.

#### Returns

`void`

***

### setAnimationDirectionForward()

> **setAnimationDirectionForward**(`name`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L152)

Sets the animation playback direction to "forward" for the
defined animation.

#### Parameters

##### name

`string`

The animation name.

#### Returns

`void`

***

### setAnimationDuration()

> **setAnimationDuration**(`name`, `duration`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:209](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L209)

Sets the duration to the given value for the defined animation.

#### Parameters

##### name

`string`

The animation name.

##### duration

`number`

The duration to set.

#### Returns

`void`

***

### setAnimationFPS()

> **setAnimationFPS**(`name`, `fps`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L190)

Sets the FPS to the given value for the defined animation.

#### Parameters

##### name

`string`

The animation name.

##### fps

`number`

The FPS to set.

#### Returns

`void`

***

### setAnimationTime()

> **setAnimationTime**(`name`, `time`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L246)

Sets the time to the given value for the defined animation.

#### Parameters

##### name

`string`

The animation name.

##### time

`number`

The time to set.

#### Returns

`void`

***

### setAnimationWeight()

> **setAnimationWeight**(`name`, `weight`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L228)

Sets the weight to the given value for the defined animation.

#### Parameters

##### name

`string`

The animation name.

##### weight

`number`

The weight to set.

#### Returns

`void`

***

### stopAnimation()

> **stopAnimation**(`name`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:329](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L329)

Stops the defined animation.

#### Parameters

##### name

`string`

The animation name.

#### Returns

`void`

***

### update()

> **update**(`delta`): `void`

Defined in: [three/addons/misc/MorphBlendMesh.js:346](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphBlendMesh.js#L346)

Updates the animations of the mesh.

#### Parameters

##### delta

`number`

The delta time in seconds.

#### Returns

`void`

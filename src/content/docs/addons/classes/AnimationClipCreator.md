---
editUrl: false
next: false
prev: false
title: "AnimationClipCreator"
---

Defined in: [three/addons/animation/AnimationClipCreator.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/AnimationClipCreator.js#L15)

A utility class with factory methods for creating basic animation clips.

## Methods

### CreateMaterialColorAnimation()

> `static` **CreateMaterialColorAnimation**(`duration`, `colors`): `AnimationClip`

Defined in: [three/addons/animation/AnimationClipCreator.js:143](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/AnimationClipCreator.js#L143)

Creates an animation clip that animates the `color` property of a 3D object's
material.

#### Parameters

##### duration

`number`

The duration of the animation.

##### colors

`Color`[]

An array of colors that should be sequentially animated.

#### Returns

`AnimationClip`

The created animation clip.

***

### CreatePulsationAnimation()

> `static` **CreatePulsationAnimation**(`duration`, `pulseScale`): `AnimationClip`

Defined in: [three/addons/animation/AnimationClipCreator.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/AnimationClipCreator.js#L95)

Creates an animation clip that scales a 3D object in a pulse pattern
in the given period.

#### Parameters

##### duration

`number`

The duration of the animation.

##### pulseScale

`number`

The scale of the pulse.

#### Returns

`AnimationClip`

The created animation clip.

***

### CreateRotationAnimation()

> `static` **CreateRotationAnimation**(`period`, `axis`?): `AnimationClip`

Defined in: [three/addons/animation/AnimationClipCreator.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/AnimationClipCreator.js#L25)

Creates an animation clip that rotates a 3D object 360 degrees
in the given period of time around the given axis.

#### Parameters

##### period

`number`

The duration of the animation.

##### axis?

The axis of rotation.

`"x"` | `"y"` | `"z"`

#### Returns

`AnimationClip`

The created animation clip.

***

### CreateScaleAxisAnimation()

> `static` **CreateScaleAxisAnimation**(`period`, `axis`?): `AnimationClip`

Defined in: [three/addons/animation/AnimationClipCreator.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/AnimationClipCreator.js#L45)

Creates an animation clip that scales a 3D object from `0` to `1`
in the given period of time along the given axis.

#### Parameters

##### period

`number`

The duration of the animation.

##### axis?

The axis to scale the 3D object along.

`"x"` | `"y"` | `"z"`

#### Returns

`AnimationClip`

The created animation clip.

***

### CreateShakeAnimation()

> `static` **CreateShakeAnimation**(`duration`, `shakeScale`): `AnimationClip`

Defined in: [three/addons/animation/AnimationClipCreator.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/AnimationClipCreator.js#L65)

Creates an animation clip that translates a 3D object in a shake pattern
in the given period.

#### Parameters

##### duration

`number`

The duration of the animation.

##### shakeScale

`Vector3`

The scale of the shake.

#### Returns

`AnimationClip`

The created animation clip.

***

### CreateVisibilityAnimation()

> `static` **CreateVisibilityAnimation**(`duration`): `AnimationClip`

Defined in: [three/addons/animation/AnimationClipCreator.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/AnimationClipCreator.js#L123)

Creates an animation clip that toggles the visibility of a 3D object.

#### Parameters

##### duration

`number`

The duration of the animation.

#### Returns

`AnimationClip`

The created animation clip.

---
editUrl: false
next: false
prev: false
title: "StereoEffect"
---

Defined in: [three/addons/effects/StereoEffect.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/StereoEffect.js#L12)

A class that creates an stereo effect.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use StereoPassNode.

## Constructors

### Constructor

> **new StereoEffect**(`renderer`): `StereoEffect`

Defined in: [three/addons/effects/StereoEffect.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/StereoEffect.js#L19)

Constructs a new stereo effect.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

#### Returns

`StereoEffect`

## Properties

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/addons/effects/StereoEffect.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/StereoEffect.js#L55)

When using this effect, this method should be called instead of the
default WebGLRenderer#render.

#### Parameters

##### scene

`Object3D`

The scene to render.

##### camera

`Camera`

The camera.

#### Returns

`void`

***

### setEyeSeparation()

> **setEyeSeparation**: (`eyeSep`) => `void`

Defined in: [three/addons/effects/StereoEffect.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/StereoEffect.js#L30)

Sets the given eye separation.

#### Parameters

##### eyeSep

`number`

The eye separation to set.

#### Returns

`void`

***

### setSize()

> **setSize**: (`width`, `height`) => `void`

Defined in: [three/addons/effects/StereoEffect.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/StereoEffect.js#L42)

Resizes the effect.

#### Parameters

##### width

`number`

The width of the effect in logical pixels.

##### height

`number`

The height of the effect in logical pixels.

#### Returns

`void`

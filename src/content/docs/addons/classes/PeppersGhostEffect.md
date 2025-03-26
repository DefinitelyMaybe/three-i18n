---
editUrl: false
next: false
prev: false
title: "PeppersGhostEffect"
---

Defined in: [three/addons/effects/PeppersGhostEffect.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/PeppersGhostEffect.js#L12)

A class that implements a peppers ghost effect.

Reference: [Reflective Prism][http://www.instructables.com/id/Reflective-Prism/?ALLSTEPS](http://www.instructables.com/id/Reflective-Prism/?ALLSTEPS)

## Constructors

### Constructor

> **new PeppersGhostEffect**(`renderer`): `PeppersGhostEffect`

Defined in: [three/addons/effects/PeppersGhostEffect.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/PeppersGhostEffect.js#L19)

Constructs a new peppers ghost effect.

#### Parameters

##### renderer

`any`

The renderer.

#### Returns

`PeppersGhostEffect`

## Properties

### cameraDistance

> **cameraDistance**: `number`

Defined in: [three/addons/effects/PeppersGhostEffect.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/PeppersGhostEffect.js#L23)

***

### reflectFromAbove

> **reflectFromAbove**: `boolean`

Defined in: [three/addons/effects/PeppersGhostEffect.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/PeppersGhostEffect.js#L24)

***

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/addons/effects/PeppersGhostEffect.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/PeppersGhostEffect.js#L73)

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

### setSize()

> **setSize**: (`width`, `height`) => `void`

Defined in: [three/addons/effects/PeppersGhostEffect.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/PeppersGhostEffect.js#L47)

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

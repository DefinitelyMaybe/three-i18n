---
editUrl: false
next: false
prev: false
title: "AnaglyphEffect"
---

Defined in: [three/addons/effects/AnaglyphEffect.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AnaglyphEffect.js#L18)

A class that creates an anaglyph effect.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use AnaglyphPassNode.

## Constructors

### Constructor

> **new AnaglyphEffect**(`renderer`, `width`, `height`): `AnaglyphEffect`

Defined in: [three/addons/effects/AnaglyphEffect.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AnaglyphEffect.js#L27)

Constructs a new anaglyph effect.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

##### width

`number` = `512`

The width of the effect in physical pixels.

##### height

`number` = `512`

The height of the effect in physical pixels.

#### Returns

`AnaglyphEffect`

## Properties

### colorMatrixLeft

> **colorMatrixLeft**: `any`

Defined in: [three/addons/effects/AnaglyphEffect.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AnaglyphEffect.js#L31)

***

### colorMatrixRight

> **colorMatrixRight**: `any`

Defined in: [three/addons/effects/AnaglyphEffect.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AnaglyphEffect.js#L37)

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/effects/AnaglyphEffect.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AnaglyphEffect.js#L163)

Frees internal resources. This method should be called
when the effect is no longer required.

#### Returns

`void`

***

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/addons/effects/AnaglyphEffect.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AnaglyphEffect.js#L134)

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

Defined in: [three/addons/effects/AnaglyphEffect.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AnaglyphEffect.js#L116)

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

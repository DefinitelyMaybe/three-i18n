---
editUrl: false
next: false
prev: false
title: "ParallaxBarrierEffect"
---

Defined in: [three/addons/effects/ParallaxBarrierEffect.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/ParallaxBarrierEffect.js#L17)

A class that creates an parallax barrier effect.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use ParallaxBarrierPassNode.

## Constructors

### Constructor

> **new ParallaxBarrierEffect**(`renderer`): `ParallaxBarrierEffect`

Defined in: [three/addons/effects/ParallaxBarrierEffect.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/ParallaxBarrierEffect.js#L24)

Constructs a new parallax barrier effect.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

#### Returns

`ParallaxBarrierEffect`

## Properties

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/effects/ParallaxBarrierEffect.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/ParallaxBarrierEffect.js#L139)

Frees internal resources. This method should be called
when the effect is no longer required.

#### Returns

`void`

***

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/addons/effects/ParallaxBarrierEffect.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/ParallaxBarrierEffect.js#L110)

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

Defined in: [three/addons/effects/ParallaxBarrierEffect.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/ParallaxBarrierEffect.js#L92)

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

---
editUrl: false
next: false
prev: false
title: "AsciiEffect"
---

Defined in: [three/addons/effects/AsciiEffect.js:6](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AsciiEffect.js#L6)

A class that creates an ASCII effect.

The ASCII generation is based on [jsascii][https://github.com/hassadee/jsascii/blob/master/jsascii.js](https://github.com/hassadee/jsascii/blob/master/jsascii.js).

## Constructors

### Constructor

> **new AsciiEffect**(`renderer`, `charSet`?, `options`?): `AsciiEffect`

Defined in: [three/addons/effects/AsciiEffect.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AsciiEffect.js#L15)

Constructs a new ASCII effect.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

##### charSet?

`string` = `' .:-=+*#%@'`

The char set.

##### options?

The configuration parameter.

#### Returns

`AsciiEffect`

## Properties

### domElement

> **domElement**: `HTMLDivElement`

Defined in: [three/addons/effects/AsciiEffect.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AsciiEffect.js#L79)

The DOM element of the effect. This element must be used instead of the
default WebGLRenderer#domElement.

***

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/addons/effects/AsciiEffect.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AsciiEffect.js#L66)

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

> **setSize**: (`w`, `h`) => `void`

Defined in: [three/addons/effects/AsciiEffect.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/AsciiEffect.js#L48)

Resizes the effect.

#### Parameters

##### w

`number`

The width of the effect in logical pixels.

##### h

`number`

The height of the effect in logical pixels.

#### Returns

`void`

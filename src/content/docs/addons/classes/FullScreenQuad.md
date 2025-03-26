---
editUrl: false
next: false
prev: false
title: "FullScreenQuad"
---

Defined in: [three/addons/postprocessing/Pass.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L136)

This module is a helper for passes which need to render a full
screen effect which is quite common in context of post processing.

The intended usage is to reuse a single full screen quad for rendering
subsequent passes by just reassigning the `material` reference.

This module can only be used with WebGLRenderer.

## Constructors

### Constructor

> **new FullScreenQuad**(`material`): `FullScreenQuad`

Defined in: [three/addons/postprocessing/Pass.js:143](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L143)

Constructs a new full screen quad.

#### Parameters

##### material

`Material`

The material to render te full screen quad with.

#### Returns

`FullScreenQuad`

## Properties

### \_mesh

> **\_mesh**: `any`

Defined in: [three/addons/postprocessing/Pass.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L145)

## Accessors

### material

#### Get Signature

> **get** **material**(): `Material`

Defined in: [three/addons/postprocessing/Pass.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L175)

The quad's material.

##### Returns

`Material`

#### Set Signature

> **set** **material**(`value`): `void`

Defined in: [three/addons/postprocessing/Pass.js:181](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L181)

##### Parameters

###### value

`Material`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/Pass.js:153](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L153)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the instance is no longer used in your app.

#### Returns

`void`

***

### render()

> **render**(`renderer`): `void`

Defined in: [three/addons/postprocessing/Pass.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L164)

Renders the full screen quad.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

#### Returns

`void`

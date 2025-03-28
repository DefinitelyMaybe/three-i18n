---
editUrl: false
next: false
prev: false
title: "Water"
---

Defined in: [three/addons/objects/Water.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water.js#L30)

A basic flat, reflective water effect.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use WaterMesh.

References:

- [Flat mirror for three.js][https://github.com/Slayvin](https://github.com/Slayvin)
- [An implementation of water shader based on the flat mirror][https://home.adelphi.edu/~stemkoski/](https://home.adelphi.edu/~stemkoski/)
- [Water shader explanations in WebGL][http://29a.ch/slides/2012/webglwater/](http://29a.ch/slides/2012/webglwater/)

## Extends

- `unknown`

## Constructors

### Constructor

> **new Water**(`geometry`, `options`): `Water`

Defined in: [three/addons/objects/Water.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water.js#L38)

Constructs a new water instance.

#### Parameters

##### geometry

`BufferGeometry`

The water's geometry.

##### options

The configuration options.

#### Returns

`Water`

#### Overrides

`Mesh.constructor`

## Properties

### isWater

> `readonly` **isWater**: `boolean`

Defined in: [three/addons/objects/Water.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water.js#L49)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### material

> **material**: `any`

Defined in: [three/addons/objects/Water.js:234](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water.js#L234)

***

### onBeforeRender()

> **onBeforeRender**: (`renderer`, `scene`, `camera`) => `void`

Defined in: [three/addons/objects/Water.js:236](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water.js#L236)

#### Parameters

##### renderer

`any`

##### scene

`any`

##### camera

`any`

#### Returns

`void`

---
editUrl: false
next: false
prev: false
title: "Projector"
---

Defined in: [three/addons/renderers/Projector.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/Projector.js#L128)

This class can project a given scene in 3D space into a 2D representation
used for rendering with a 2D API. `Projector` is currently used by [SVGRenderer](/addons/classes/svgrenderer/)
and was previously used by the legacy `CanvasRenderer`.

## Constructors

### Constructor

> **new Projector**(): `Projector`

Defined in: [three/addons/renderers/Projector.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/Projector.js#L133)

Constructs a new projector.

#### Returns

`Projector`

## Properties

### projectScene()

> **projectScene**: (`scene`, `camera`, `sortObjects`, `sortElements`) => `object`

Defined in: [three/addons/renderers/Projector.js:422](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/Projector.js#L422)

Projects the given scene in 3D space into a 2D representation. The result
is an object with renderable items.

#### Parameters

##### scene

`Object3D`

A scene or any other type of 3D object.

##### camera

`Camera`

The camera.

##### sortObjects

`boolean`

Whether to sort objects or not.

##### sortElements

`boolean`

Whether to sort elements (faces, lines and sprites) or not.

#### Returns

`object`

The projected scene as renderable objects.

##### elements

> **elements**: `Objects`[]

##### lights

> **lights**: `Objects`[]

##### objects

> **objects**: `Objects`[]

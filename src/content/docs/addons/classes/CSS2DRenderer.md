---
editUrl: false
next: false
prev: false
title: "CSS2DRenderer"
---

Defined in: [three/addons/renderers/CSS2DRenderer.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L107)

This renderer is a simplified version of [CSS3DRenderer](/addons/classes/css3drenderer/). The only transformation that is
supported is translation.

The renderer is very useful if you want to combine HTML based labels with 3D objects. Here too,
the respective DOM elements are wrapped into an instance of [CSS2DObject](/addons/classes/css2dobject/) and added to the
scene graph. All other types of renderable 3D objects (like meshes or point clouds) are ignored.

`CSS2DRenderer` only supports 100% browser and display zoom.

## Constructors

### Constructor

> **new CSS2DRenderer**(`parameters`): `CSS2DRenderer`

Defined in: [three/addons/renderers/CSS2DRenderer.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L114)

Constructs a new CSS2D renderer.

#### Parameters

##### parameters

The parameters.

#### Returns

`CSS2DRenderer`

## Properties

### domElement

> **domElement**: `DOMElement`

Defined in: [three/addons/renderers/CSS2DRenderer.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L134)

The DOM where the renderer appends its child-elements.

***

### getSize()

> **getSize**: () => `object`

Defined in: [three/addons/renderers/CSS2DRenderer.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L141)

Returns an object containing the width and height of the renderer.

#### Returns

`object`

The size of the renderer.

##### height

> **height**: `number`

##### width

> **width**: `number`

***

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/addons/renderers/CSS2DRenderer.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L156)

Renders the given scene using the given camera.

#### Parameters

##### scene

`Object3D`

A scene or any other type of 3D object.

##### camera

`Camera`

The camera.

#### Returns

`void`

***

### setSize()

> **setSize**: (`width`, `height`) => `void`

Defined in: [three/addons/renderers/CSS2DRenderer.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L175)

Resizes the renderer to the given width and height.

#### Parameters

##### width

`number`

The width of the renderer.

##### height

`number`

The height of the renderer.

#### Returns

`void`

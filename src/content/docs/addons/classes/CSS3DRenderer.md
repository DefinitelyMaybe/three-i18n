---
editUrl: false
next: false
prev: false
title: "CSS3DRenderer"
---

Defined in: [three/addons/renderers/CSS3DRenderer.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L152)

This renderer can be used to apply hierarchical 3D transformations to DOM elements
via the CSS3 [transform][https://www.w3schools.com/cssref/css3\_pr\_transform.asp](https://www.w3schools.com/cssref/css3_pr_transform.asp) property.
`CSS3DRenderer` is particularly interesting if you want to apply 3D effects to a website without
canvas based rendering. It can also be used in order to combine DOM elements with WebGLcontent.

There are, however, some important limitations:

- It's not possible to use the material system of *three.js*.
- It's also not possible to use geometries.
- The renderer only supports 100% browser and display zoom.

So `CSS3DRenderer` is just focused on ordinary DOM elements. These elements are wrapped into special
3D objects ([CSS3DObject](/addons/classes/css3dobject/) or [CSS3DSprite](/addons/classes/css3dsprite/)) and then added to the scene graph.

## Constructors

### Constructor

> **new CSS3DRenderer**(`parameters`): `CSS3DRenderer`

Defined in: [three/addons/renderers/CSS3DRenderer.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L159)

Constructs a new CSS3D renderer.

#### Parameters

##### parameters

The parameters.

#### Returns

`CSS3DRenderer`

## Properties

### domElement

> **domElement**: `DOMElement`

Defined in: [three/addons/renderers/CSS3DRenderer.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L180)

The DOM where the renderer appends its child-elements.

***

### getSize()

> **getSize**: () => `object`

Defined in: [three/addons/renderers/CSS3DRenderer.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L198)

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

Defined in: [three/addons/renderers/CSS3DRenderer.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L213)

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

Defined in: [three/addons/renderers/CSS3DRenderer.js:270](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L270)

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

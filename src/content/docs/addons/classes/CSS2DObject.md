---
editUrl: false
next: false
prev: false
title: "CSS2DObject"
---

Defined in: [three/addons/renderers/CSS2DRenderer.js:13](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L13)

The only type of 3D object that is supported by [CSS2DRenderer](/addons/classes/css2drenderer/).

## Extends

- `unknown`

## Constructors

### Constructor

> **new CSS2DObject**(`element`?): `CSS2DObject`

Defined in: [three/addons/renderers/CSS2DRenderer.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L20)

Constructs a new CSS2D object.

#### Parameters

##### element?

`DOMElement` = `...`

The DOM element.

#### Returns

`CSS2DObject`

#### Overrides

`Object3D.constructor`

## Properties

### center

> **center**: `Vector2`

Defined in: [three/addons/renderers/CSS2DRenderer.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L54)

The 3D objects center point.
`( 0, 0 )` is the lower left, `( 1, 1 )` is the top right.

#### Default

```ts
(0.5,0.5)
```

***

### element

> `readonly` **element**: `DOMElement`

Defined in: [three/addons/renderers/CSS2DRenderer.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L40)

The DOM element which defines the appearance of this 3D object.

#### Default

```ts
true
```

***

### isCSS2DObject

> `readonly` **isCSS2DObject**: `boolean`

Defined in: [three/addons/renderers/CSS2DRenderer.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L31)

This flag can be used for type testing.

#### Default

```ts
true
```

## Methods

### copy()

> **copy**(`source`, `recursive`): `CSS2DObject`

Defined in: [three/addons/renderers/CSS2DRenderer.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS2DRenderer.js#L75)

#### Parameters

##### source

`any`

##### recursive

`any`

#### Returns

`CSS2DObject`

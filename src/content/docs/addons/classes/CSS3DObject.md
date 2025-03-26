---
editUrl: false
next: false
prev: false
title: "CSS3DObject"
---

Defined in: [three/addons/renderers/CSS3DRenderer.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L19)

The base 3D object that is supported by [CSS3DRenderer](/addons/classes/css3drenderer/).

## Extends

- `unknown`

## Extended by

- [`CSS3DSprite`](/addons/classes/css3dsprite/)

## Constructors

### Constructor

> **new CSS3DObject**(`element`?): `CSS3DObject`

Defined in: [three/addons/renderers/CSS3DRenderer.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L26)

Constructs a new CSS3D object.

#### Parameters

##### element?

`DOMElement` = `...`

The DOM element.

#### Returns

`CSS3DObject`

#### Overrides

`Object3D.constructor`

## Properties

### element

> `readonly` **element**: `DOMElement`

Defined in: [three/addons/renderers/CSS3DRenderer.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L46)

The DOM element which defines the appearance of this 3D object.

#### Default

```ts
true
```

***

### isCSS3DObject

> `readonly` **isCSS3DObject**: `boolean`

Defined in: [three/addons/renderers/CSS3DRenderer.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L37)

This flag can be used for type testing.

#### Default

```ts
true
```

## Methods

### copy()

> **copy**(`source`, `recursive`): `CSS3DObject`

Defined in: [three/addons/renderers/CSS3DRenderer.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L72)

#### Parameters

##### source

`any`

##### recursive

`any`

#### Returns

`CSS3DObject`

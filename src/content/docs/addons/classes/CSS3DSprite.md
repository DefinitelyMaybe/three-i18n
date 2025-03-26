---
editUrl: false
next: false
prev: false
title: "CSS3DSprite"
---

Defined in: [three/addons/renderers/CSS3DRenderer.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L90)

A specialized version of [CSS3DObject](/addons/classes/css3dobject/) that represents
DOM elements as sprites.

## Extends

- [`CSS3DObject`](/addons/classes/css3dobject/)

## Constructors

### Constructor

> **new CSS3DSprite**(`element`?): `CSS3DSprite`

Defined in: [three/addons/renderers/CSS3DRenderer.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L97)

Constructs a new CSS3D sprite object.

#### Parameters

##### element?

`DOMElement`

The DOM element.

#### Returns

`CSS3DSprite`

#### Overrides

[`CSS3DObject`](/addons/classes/css3dobject/).[`constructor`](/addons/classes/css3dobject/#constructor)

## Properties

### element

> `readonly` **element**: `DOMElement`

Defined in: [three/addons/renderers/CSS3DRenderer.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L46)

The DOM element which defines the appearance of this 3D object.

#### Default

```ts
true
```

#### Inherited from

[`CSS3DObject`](/addons/classes/css3dobject/).[`element`](/addons/classes/css3dobject/#element)

***

### isCSS3DObject

> `readonly` **isCSS3DObject**: `boolean`

Defined in: [three/addons/renderers/CSS3DRenderer.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L37)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`CSS3DObject`](/addons/classes/css3dobject/).[`isCSS3DObject`](/addons/classes/css3dobject/#iscss3dobject)

***

### isCSS3DSprite

> `readonly` **isCSS3DSprite**: `boolean`

Defined in: [three/addons/renderers/CSS3DRenderer.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L108)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### rotation2D

> **rotation2D**: `number`

Defined in: [three/addons/renderers/CSS3DRenderer.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L116)

The sprite's rotation in radians.

#### Default

```ts
0
```

## Methods

### copy()

> **copy**(`source`, `recursive`): `CSS3DSprite`

Defined in: [three/addons/renderers/CSS3DRenderer.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/CSS3DRenderer.js#L120)

#### Parameters

##### source

`any`

##### recursive

`any`

#### Returns

`CSS3DSprite`

#### Overrides

[`CSS3DObject`](/addons/classes/css3dobject/).[`copy`](/addons/classes/css3dobject/#copy)

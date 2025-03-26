---
editUrl: false
next: false
prev: false
title: "Font"
---

Defined in: [three/addons/loaders/FontLoader.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L76)

Class representing a font.

## Constructors

### Constructor

> **new Font**(`data`): `Font`

Defined in: [three/addons/loaders/FontLoader.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L83)

Constructs a new font.

#### Parameters

##### data

`any`

The font data as JSON.

#### Returns

`Font`

## Properties

### data

> **data**: `any`

Defined in: [three/addons/loaders/FontLoader.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L101)

The font data as JSON.

***

### isFont

> `readonly` **isFont**: `boolean`

Defined in: [three/addons/loaders/FontLoader.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L92)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### type

> **type**: `string`

Defined in: [three/addons/loaders/FontLoader.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L94)

## Methods

### generateShapes()

> **generateShapes**(`text`, `size`?): `Shape`[]

Defined in: [three/addons/loaders/FontLoader.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L113)

Generates geometry shapes from the given text and size. The result of this method
should be used with ShapeGeometry to generate the actual geometry data.

#### Parameters

##### text

`string`

The text.

##### size?

`number` = `100`

The text size.

#### Returns

`Shape`[]

An array of shapes representing the text.

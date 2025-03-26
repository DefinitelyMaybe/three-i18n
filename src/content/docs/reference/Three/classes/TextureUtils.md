---
editUrl: false
next: false
prev: false
title: "TextureUtils"
---

Defined in: [three/src/extras/TextureUtils.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/TextureUtils.js#L235)

A class containing utility functions for textures.

## Methods

### contain()

> `static` **contain**(`texture`, `aspect`): `Texture`

Defined in: [three/src/extras/TextureUtils.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/TextureUtils.js#L246)

Scales the texture as large as possible within its surface without cropping
or stretching the texture. The method preserves the original aspect ratio of
the texture. Akin to CSS `object-fit: contain`

#### Parameters

##### texture

`Texture`

The texture.

##### aspect

`number`

The texture's aspect ratio.

#### Returns

`Texture`

The updated texture.

***

### cover()

> `static` **cover**(`texture`, `aspect`): `Texture`

Defined in: [three/src/extras/TextureUtils.js:261](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/TextureUtils.js#L261)

Scales the texture to the smallest possible size to fill the surface, leaving
no empty space. The method preserves the original aspect ratio of the texture.
Akin to CSS `object-fit: cover`.

#### Parameters

##### texture

`Texture`

The texture.

##### aspect

`number`

The texture's aspect ratio.

#### Returns

`Texture`

The updated texture.

***

### fill()

> `static` **fill**(`texture`): `Texture`

Defined in: [three/src/extras/TextureUtils.js:273](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/TextureUtils.js#L273)

Configures the texture to the default transformation. Akin to CSS `object-fit: fill`.

#### Parameters

##### texture

`Texture`

The texture.

#### Returns

`Texture`

The updated texture.

***

### getByteLength()

> `static` **getByteLength**(`width`, `height`, `format`, `type`): `number`

Defined in: [three/src/extras/TextureUtils.js:288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/TextureUtils.js#L288)

Determines how many bytes must be used to represent the texture.

#### Parameters

##### width

`number`

The width of the texture.

##### height

`number`

The height of the texture.

##### format

`number`

The texture's format.

##### type

`number`

The texture's type.

#### Returns

`number`

The byte length.

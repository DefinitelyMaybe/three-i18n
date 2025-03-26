---
editUrl: false
next: false
prev: false
title: "ImageUtils"
---

Defined in: [three/src/extras/ImageUtils.js:11](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/ImageUtils.js#L11)

A class containing utility functions for images.

## Methods

### getDataURL()

> `static` **getDataURL**(`image`, `type`?): `string`

Defined in: [three/src/extras/ImageUtils.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/ImageUtils.js#L20)

Returns a data URI containing a representation of the given image.

#### Parameters

##### image

The image object.

`HTMLImageElement` | `HTMLCanvasElement`

##### type?

`string` = `'image/png'`

Indicates the image format.

#### Returns

`string`

The data URI.

***

### sRGBToLinear()

> `static` **sRGBToLinear**(`image`): `any`

Defined in: [three/src/extras/ImageUtils.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/ImageUtils.js#L73)

Converts the given sRGB image data to linear color space.

#### Parameters

##### image

`any`

The image object.

#### Returns

`any`

The converted image.

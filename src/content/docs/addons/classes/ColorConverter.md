---
editUrl: false
next: false
prev: false
title: "ColorConverter"
---

Defined in: [three/addons/math/ColorConverter.js:10](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ColorConverter.js#L10)

A utility class with helper functions for color conversion.

## Methods

### getHSV()

> `static` **getHSV**(`color`, `target`): `object`

Defined in: [three/addons/math/ColorConverter.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ColorConverter.js#L40)

Returns a HSV color representation of the given color object.

#### Parameters

##### color

`Color`

The color to get HSV values from.

##### target

The target object that is used to store the method's result.

###### h

`number`

###### s

`number`

###### v

`number`

#### Returns

`object`

The HSV color.

##### h

> **h**: `number`

##### s

> **s**: `number`

##### v

> **v**: `number`

***

### setHSV()

> `static` **setHSV**(`color`, `h`, `s`, `v`): `Color`

Defined in: [three/addons/math/ColorConverter.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ColorConverter.js#L21)

Sets the given HSV color definition to the given color object.

#### Parameters

##### color

`Color`

The color to set.

##### h

`number`

The hue.

##### s

`number`

The saturation.

##### v

`number`

The value.

#### Returns

`Color`

The update color.

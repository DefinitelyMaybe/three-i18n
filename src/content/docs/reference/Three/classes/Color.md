---
editUrl: false
next: false
prev: false
title: "Color"
---

Defined in: [three/src/math/Color.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L87)

A Color instance is represented by RGB components in the linear <i>working
color space</i>, which defaults to `LinearSRGBColorSpace`. Inputs
conventionally using `SRGBColorSpace` (such as hexadecimals and CSS
strings) are converted to the working color space automatically.

```js
// converted automatically from SRGBColorSpace to LinearSRGBColorSpace
const color = new THREE.Color().setHex( 0x112233 );
```
Source color spaces may be specified explicitly, to ensure correct conversions.
```js
// assumed already LinearSRGBColorSpace; no conversion
const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5 );

// converted explicitly from SRGBColorSpace to LinearSRGBColorSpace
const color = new THREE.Color().setRGB( 0.5, 0.5, 0.5, SRGBColorSpace );
```
If THREE.ColorManagement is disabled, no conversions occur. For details,
see <i>Color management</i>. Iterating through a Color instance will yield
its components (r, g, b) in the corresponding order. A Color can be initialised
in any of the following ways:
```js
//empty constructor - will default white
const color1 = new THREE.Color();

//Hexadecimal color (recommended)
const color2 = new THREE.Color( 0xff0000 );

//RGB string
const color3 = new THREE.Color("rgb(255, 0, 0)");
const color4 = new THREE.Color("rgb(100%, 0%, 0%)");

//X11 color name - all 140 color names are supported.
//Note the lack of CamelCase in the name
const color5 = new THREE.Color( 'skyblue' );
//HSL string
const color6 = new THREE.Color("hsl(0, 100%, 50%)");

//Separate RGB values between 0 and 1
const color7 = new THREE.Color( 1, 0, 0 );
```

## Constructors

### Constructor

> **new Color**(`r`?, `g`?, `b`?): `Color`

Defined in: [three/src/math/Color.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L100)

Constructs a new color.

Note that standard method of specifying color in three.js is with a hexadecimal triplet,
and that method is used throughout the rest of the documentation.

#### Parameters

##### r?

The red component of the color. If `g` and `b` are
not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.

`string` | `number` | `Color`

##### g?

`number`

The green component.

##### b?

`number`

The blue component.

#### Returns

`Color`

## Properties

### b

> **b**: `number`

Defined in: [three/src/math/Color.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L133)

The blue component.

#### Default

```ts
1
```

***

### g

> **g**: `number`

Defined in: [three/src/math/Color.js:125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L125)

The green component.

#### Default

```ts
1
```

***

### isColor

> `readonly` **isColor**: `boolean`

Defined in: [three/src/math/Color.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L109)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### r

> **r**: `number`

Defined in: [three/src/math/Color.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L117)

The red component.

#### Default

```ts
1
```

***

### NAMES

> `static` **NAMES**: `any`

Defined in: [three/src/math/Color.js:964](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L964)

A dictionary with X11 color names.

Note that multiple words such as Dark Orange become the string 'darkorange'.

#### Static

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`number`, `void`, `unknown`\>

Defined in: [three/src/math/Color.js:944](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L944)

#### Returns

`Generator`\<`number`, `void`, `unknown`\>

***

### add()

> **add**(`color`): `Color`

Defined in: [three/src/math/Color.js:677](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L677)

Adds the RGB values of the given color to the RGB values of this color.

#### Parameters

##### color

`Color`

The color to add.

#### Returns

`Color`

A reference to this color.

***

### addColors()

> **addColors**(`color1`, `color2`): `Color`

Defined in: [three/src/math/Color.js:694](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L694)

Adds the RGB values of the given colors and stores the result in this instance.

#### Parameters

##### color1

`Color`

The first color.

##### color2

`Color`

The second color.

#### Returns

`Color`

A reference to this color.

***

### addScalar()

> **addScalar**(`s`): `Color`

Defined in: [three/src/math/Color.js:710](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L710)

Adds the given scalar value to the RGB values of this color.

#### Parameters

##### s

`number`

The scalar to add.

#### Returns

`Color`

A reference to this color.

***

### applyMatrix3()

> **applyMatrix3**(`m`): `Color`

Defined in: [three/src/math/Color.js:855](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L855)

Transforms this color with the given 3x3 matrix.

#### Parameters

##### m

`Matrix3`

The matrix.

#### Returns

`Color`

A reference to this color.

***

### clone()

> **clone**(): `Color`

Defined in: [three/src/math/Color.js:450](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L450)

Returns a new color with copied values from this instance.

#### Returns

`Color`

A clone of this instance.

***

### convertLinearToSRGB()

> **convertLinearToSRGB**(): `Color`

Defined in: [three/src/math/Color.js:524](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L524)

Converts this color from `LinearSRGBColorSpace` to `SRGBColorSpace`.

#### Returns

`Color`

A reference to this color.

***

### convertSRGBToLinear()

> **convertSRGBToLinear**(): `Color`

Defined in: [three/src/math/Color.js:511](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L511)

Converts this color from `SRGBColorSpace` to `LinearSRGBColorSpace`.

#### Returns

`Color`

A reference to this color.

***

### copy()

> **copy**(`color`): `Color`

Defined in: [three/src/math/Color.js:462](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L462)

Copies the values of the given color to this instance.

#### Parameters

##### color

`Color`

The color to copy.

#### Returns

`Color`

A reference to this color.

***

### copyLinearToSRGB()

> **copyLinearToSRGB**(`color`): `Color`

Defined in: [three/src/math/Color.js:496](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L496)

Copies the given color into this color, and then converts this color from
`LinearSRGBColorSpace` to `SRGBColorSpace`.

#### Parameters

##### color

`Color`

The color to copy/convert.

#### Returns

`Color`

A reference to this color.

***

### copySRGBToLinear()

> **copySRGBToLinear**(`color`): `Color`

Defined in: [three/src/math/Color.js:479](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L479)

Copies the given color into this color, and then converts this color from
`SRGBColorSpace` to `LinearSRGBColorSpace`.

#### Parameters

##### color

`Color`

The color to copy/convert.

#### Returns

`Color`

A reference to this color.

***

### equals()

> **equals**(`c`): `boolean`

Defined in: [three/src/math/Color.js:874](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L874)

Returns `true` if this color is equal with the given one.

#### Parameters

##### c

`Color`

The color to test for equality.

#### Returns

`boolean`

Whether this bounding color is equal with the given one.

***

### fromArray()

> **fromArray**(`array`, `offset`?): `Color`

Defined in: [three/src/math/Color.js:887](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L887)

Sets this color's RGB components from the given array.

#### Parameters

##### array

`number`[]

An array holding the RGB values.

##### offset?

`number` = `0`

The offset into the array.

#### Returns

`Color`

A reference to this color.

***

### fromBufferAttribute()

> **fromBufferAttribute**(`attribute`, `index`): `Color`

Defined in: [three/src/math/Color.js:922](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L922)

Sets the components of this color from the given buffer attribute.

#### Parameters

##### attribute

`BufferAttribute`

The buffer attribute holding color data.

##### index

`number`

The index into the attribute.

#### Returns

`Color`

A reference to this color.

***

### getHex()

> **getHex**(`colorSpace`?): `number`

Defined in: [three/src/math/Color.js:538](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L538)

Returns the hexadecimal value of this color.

#### Parameters

##### colorSpace?

`string` = `SRGBColorSpace`

The color space.

#### Returns

`number`

The hexadecimal value.

***

### getHexString()

> **getHexString**(`colorSpace`?): `string`

Defined in: [three/src/math/Color.js:552](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L552)

Returns the hexadecimal value of this color as a string (for example, 'FFFFFF').

#### Parameters

##### colorSpace?

`string` = `SRGBColorSpace`

The color space.

#### Returns

`string`

The hexadecimal value as a string.

***

### getHSL()

> **getHSL**(`target`, `colorSpace`?): `object`

Defined in: [three/src/math/Color.js:566](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L566)

Converts the colors RGB values into the HSL format and stores them into the
given target object.

#### Parameters

##### target

The target object that is used to store the method's result.

###### h

`number`

###### l

`number`

###### s

`number`

##### colorSpace?

`string` = `ColorManagement.workingColorSpace`

The color space.

#### Returns

`object`

The HSL representation of this color.

##### h

> **h**: `number`

##### l

> **l**: `number`

##### s

> **s**: `number`

***

### getRGB()

> **getRGB**(`target`, `colorSpace`?): `Color`

Defined in: [three/src/math/Color.js:618](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L618)

Returns the RGB values of this color and stores them into the given target object.

#### Parameters

##### target

`Color`

The target color that is used to store the method's result.

##### colorSpace?

`string` = `ColorManagement.workingColorSpace`

The color space.

#### Returns

`Color`

The RGB representation of this color.

***

### getStyle()

> **getStyle**(`colorSpace`?): `string`

Defined in: [three/src/math/Color.js:636](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L636)

Returns the value of this color as a CSS style string. Example: `rgb(255,0,0)`.

#### Parameters

##### colorSpace?

`string` = `SRGBColorSpace`

The color space.

#### Returns

`string`

The CSS representation of this color.

***

### lerp()

> **lerp**(`color`, `alpha`): `Color`

Defined in: [three/src/math/Color.js:777](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L777)

Linearly interpolates this color's RGB values toward the RGB values of the
given color. The alpha argument can be thought of as the ratio between
the two colors, where `0.0` is this color and `1.0` is the first argument.

#### Parameters

##### color

`Color`

The color to converge on.

##### alpha

`number`

The interpolation factor in the closed interval `[0,1]`.

#### Returns

`Color`

A reference to this color.

***

### lerpColors()

> **lerpColors**(`color1`, `color2`, `alpha`): `Color`

Defined in: [three/src/math/Color.js:797](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L797)

Linearly interpolates between the given colors and stores the result in this instance.
The alpha argument can be thought of as the ratio between the two colors, where `0.0`
is the first and `1.0` is the second color.

#### Parameters

##### color1

`Color`

The first color.

##### color2

`Color`

The second color.

##### alpha

`number`

The interpolation factor in the closed interval `[0,1]`.

#### Returns

`Color`

A reference to this color.

***

### lerpHSL()

> **lerpHSL**(`color`, `alpha`): `Color`

Defined in: [three/src/math/Color.js:818](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L818)

Linearly interpolates this color's HSL values toward the HSL values of the
given color. It differs from [Color#lerp](/reference/three/classes/color/#lerp) by not interpolating straight
from one color to the other, but instead going through all the hues in between
those two colors. The alpha argument can be thought of as the ratio between
the two colors, where 0.0 is this color and 1.0 is the first argument.

#### Parameters

##### color

`Color`

The color to converge on.

##### alpha

`number`

The interpolation factor in the closed interval `[0,1]`.

#### Returns

`Color`

A reference to this color.

***

### multiply()

> **multiply**(`color`): `Color`

Defined in: [three/src/math/Color.js:742](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L742)

Multiplies the RGB values of the given color with the RGB values of this color.

#### Parameters

##### color

`Color`

The color to multiply.

#### Returns

`Color`

A reference to this color.

***

### multiplyScalar()

> **multiplyScalar**(`s`): `Color`

Defined in: [three/src/math/Color.js:758](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L758)

Multiplies the given scalar value with the RGB values of this color.

#### Parameters

##### s

`number`

The scalar to multiply.

#### Returns

`Color`

A reference to this color.

***

### offsetHSL()

> **offsetHSL**(`h`, `s`, `l`): `Color`

Defined in: [three/src/math/Color.js:663](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L663)

Adds the given HSL values to this color's values.
Internally, this converts the color's RGB values to HSL, adds HSL
and then converts the color back to RGB.

#### Parameters

##### h

`number`

Hue value between `0.0` and `1.0`.

##### s

`number`

Saturation value between `0.0` and `1.0`.

##### l

`number`

Lightness value between `0.0` and `1.0`.

#### Returns

`Color`

A reference to this color.

***

### set()

> **set**(`r`?, `g`?, `b`?): `Color`

Defined in: [three/src/math/Color.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L148)

Sets the colors's components from the given values.

#### Parameters

##### r?

The red component of the color. If `g` and `b` are
not provided, it can be hexadecimal triplet, a CSS-style string or another `Color` instance.

`string` | `number` | `Color`

##### g?

`number`

The green component.

##### b?

`number`

The blue component.

#### Returns

`Color`

A reference to this color.

***

### setColorName()

> **setColorName**(`style`, `colorSpace`?): `Color`

Defined in: [three/src/math/Color.js:424](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L424)

Sets this color from a color name. Faster than [Color#setStyle](/reference/three/classes/color/#setstyle) if
you don't need the other CSS-style formats.

For convenience, the list of names is exposed in `Color.NAMES` as a hash.
```js
Color.NAMES.aliceblue // returns 0xF0F8FF
```

#### Parameters

##### style

`string`

The color name.

##### colorSpace?

`string` = `SRGBColorSpace`

The color space.

#### Returns

`Color`

A reference to this color.

***

### setFromVector3()

> **setFromVector3**(`v`): `Color`

Defined in: [three/src/math/Color.js:839](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L839)

Sets the color's RGB components from the given 3D vector.

#### Parameters

##### v

`Vector3`

The vector to set.

#### Returns

`Color`

A reference to this color.

***

### setHex()

> **setHex**(`hex`, `colorSpace`?): `Color`

Defined in: [three/src/math/Color.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L203)

Sets this color from a hexadecimal value.

#### Parameters

##### hex

`number`

The hexadecimal value.

##### colorSpace?

`string` = `SRGBColorSpace`

The color space.

#### Returns

`Color`

A reference to this color.

***

### setHSL()

> **setHSL**(`h`, `s`, `l`, `colorSpace`?): `Color`

Defined in: [three/src/math/Color.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L247)

Sets this color from RGB values.

#### Parameters

##### h

`number`

Hue value between `0.0` and `1.0`.

##### s

`number`

Saturation value between `0.0` and `1.0`.

##### l

`number`

Lightness value between `0.0` and `1.0`.

##### colorSpace?

`string` = `ColorManagement.workingColorSpace`

The color space.

#### Returns

`Color`

A reference to this color.

***

### setRGB()

> **setRGB**(`r`, `g`, `b`, `colorSpace`?): `Color`

Defined in: [three/src/math/Color.js:226](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L226)

Sets this color from RGB values.

#### Parameters

##### r

`number`

Red channel value between `0.0` and `1.0`.

##### g

`number`

Green channel value between `0.0` and `1.0`.

##### b

`number`

Blue channel value between `0.0` and `1.0`.

##### colorSpace?

`string` = `ColorManagement.workingColorSpace`

The color space.

#### Returns

`Color`

A reference to this color.

***

### setScalar()

> **setScalar**(`scalar`): `Color`

Defined in: [three/src/math/Color.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L186)

Sets the colors's components to the given scalar value.

#### Parameters

##### scalar

`number`

The scalar value.

#### Returns

`Color`

A reference to this color.

***

### setStyle()

> **setStyle**(`style`, `colorSpace`?): `Color`

Defined in: [three/src/math/Color.js:285](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L285)

Sets this color from a CSS-style string. For example, `rgb(250, 0,0)`,
`rgb(100%, 0%, 0%)`, `hsl(0, 100%, 50%)`, `#ff0000`, `#f00`, or `red` ( or
any [X11 color name][https://en.wikipedia.org/wiki/X11\_color\_names#Color\_name\_chart](https://en.wikipedia.org/wiki/X11_color_names#Color_name_chart) -
all 140 color names are supported).

#### Parameters

##### style

`string`

Color as a CSS-style string.

##### colorSpace?

`string` = `SRGBColorSpace`

The color space.

#### Returns

`Color`

A reference to this color.

***

### sub()

> **sub**(`color`): `Color`

Defined in: [three/src/math/Color.js:726](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L726)

Subtracts the RGB values of the given color from the RGB values of this color.

#### Parameters

##### color

`Color`

The color to subtract.

#### Returns

`Color`

A reference to this color.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/Color.js:905](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L905)

Writes the RGB components of this color to the given array. If no array is provided,
the method returns a new instance.

#### Parameters

##### array?

`number`[] = `[]`

The target array holding the color components.

##### offset?

`number` = `0`

Index of the first element in the array.

#### Returns

`number`[]

The color components.

***

### toJSON()

> **toJSON**(): `number`

Defined in: [three/src/math/Color.js:938](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Color.js#L938)

This methods defines the serialization result of this class. Returns the color
as a hexadecimal value.

#### Returns

`number`

The hexadecimal value.

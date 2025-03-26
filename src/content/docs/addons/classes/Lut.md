---
editUrl: false
next: false
prev: false
title: "Lut"
---

Defined in: [three/addons/math/Lut.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L16)

Represents a lookup table for colormaps. It is used to determine the color
values from a range of data values.

```js
const lut = new Lut( 'rainbow', 512 );
const color = lut.getColor( 0.5 );
```

## Constructors

### Constructor

> **new Lut**(`colormap`?, `count`?): `Lut`

Defined in: [three/addons/math/Lut.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L24)

Constructs a new Lut.

#### Parameters

##### colormap?

Sets a colormap from predefined list of colormaps.

`"rainbow"` | `"cooltowarm"` | `"blackbody"` | `"grayscale"`

##### count?

`number` = `32`

Sets the number of colors used to represent the data array.

#### Returns

`Lut`

## Properties

### isLut

> `readonly` **isLut**: `boolean`

Defined in: [three/addons/math/Lut.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L33)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### lut

> **lut**: `Color`[]

Defined in: [three/addons/math/Lut.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L41)

The lookup table for the selected color map

***

### map

> **map**: `any`[]

Defined in: [three/addons/math/Lut.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L48)

The currently selected color map.

***

### maxV

> **maxV**: `number`

Defined in: [three/addons/math/Lut.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L72)

The maximum value to be represented with the lookup table.

#### Default

```ts
1
```

***

### minV

> **minV**: `number`

Defined in: [three/addons/math/Lut.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L64)

The minimum value to be represented with the lookup table.

#### Default

```ts
0
```

***

### n

> **n**: `number`

Defined in: [three/addons/math/Lut.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L56)

The number of colors of the current selected color map.

#### Default

```ts
32
```

## Methods

### addColorMap()

> **addColorMap**(`name`, `arrayOfColors`): `Lut`

Defined in: [three/addons/math/Lut.js:224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L224)

Adds a color map to this Lut instance.

#### Parameters

##### name

`string`

The name of the color map.

##### arrayOfColors

`any`[]

An array of color values. Each value is an array
holding a threshold and the actual color value as a hexadecimal number.

#### Returns

`Lut`

A reference to this LUT.

***

### copy()

> **copy**(`lut`): `Lut`

Defined in: [three/addons/math/Lut.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L186)

Copies the given lut.

#### Parameters

##### lut

`Lut`

The LUT to copy.

#### Returns

`Lut`

A reference to this LUT.

***

### createCanvas()

> **createCanvas**(): `HTMLCanvasElement`

Defined in: [three/addons/math/Lut.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L237)

Creates a canvas in order to visualize the lookup table as a texture.

#### Returns

`HTMLCanvasElement`

The created canvas.

***

### getColor()

> **getColor**(`alpha`): `Color`

Defined in: [three/addons/math/Lut.js:204](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L204)

Returns an instance of Color for the given data value.

#### Parameters

##### alpha

`number`

The value to lookup.

#### Returns

`Color`

The color from the LUT.

***

### set()

> **set**(`value`): `Lut`

Defined in: [three/addons/math/Lut.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L84)

Sets the given LUT.

#### Parameters

##### value

`Lut`

The LUT to set.

#### Returns

`Lut`

A reference to this LUT.

***

### setColorMap()

> **setColorMap**(`colormap`, `count`?): `Lut`

Defined in: [three/addons/math/Lut.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L131)

Configure the lookup table for the given color map and number of colors.

#### Parameters

##### colormap

`string`

The name of the color map.

##### count?

`number` = `32`

The number of colors.

#### Returns

`Lut`

A reference to this LUT.

***

### setMax()

> **setMax**(`max`): `Lut`

Defined in: [three/addons/math/Lut.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L116)

Sets the maximum value to be represented with this LUT.

#### Parameters

##### max

`number`

The maximum value to be represented with the lookup table.

#### Returns

`Lut`

A reference to this LUT.

***

### setMin()

> **setMin**(`min`): `Lut`

Defined in: [three/addons/math/Lut.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L102)

Sets the minimum value to be represented with this LUT.

#### Parameters

##### min

`number`

The minimum value to be represented with the lookup table.

#### Returns

`Lut`

A reference to this LUT.

***

### updateCanvas()

> **updateCanvas**(`canvas`): `HTMLCanvasElement`

Defined in: [three/addons/math/Lut.js:255](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Lut.js#L255)

Updates the given canvas with the Lut's data.

#### Parameters

##### canvas

`HTMLCanvasElement`

The canvas to update.

#### Returns

`HTMLCanvasElement`

The updated canvas.

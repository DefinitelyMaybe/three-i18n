---
editUrl: false
next: false
prev: false
title: "ShapePath"
---

Defined in: [three/src/extras/core/ShapePath.js:10](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L10)

This class is used to convert a series of paths to an array of
shapes. It is specifically used in context of fonts and SVG.

## Constructors

### Constructor

> **new ShapePath**(): `ShapePath`

Defined in: [three/src/extras/core/ShapePath.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L15)

Constructs a new shape path.

#### Returns

`ShapePath`

## Properties

### color

> **color**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/extras/core/ShapePath.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L24)

The color of the shape.

***

### currentPath

> **currentPath**: [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/ShapePath.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L40)

The current path that is being generated.

#### Default

```ts
null
```

***

### subPaths

> **subPaths**: [`Path`](/reference/three/classes/path/)[]

Defined in: [three/src/extras/core/ShapePath.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L32)

The paths that have been generated for this shape.

#### Default

```ts
null
```

***

### type

> **type**: `string`

Defined in: [three/src/extras/core/ShapePath.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L17)

## Methods

### bezierCurveTo()

> **bezierCurveTo**(`aCP1x`, `aCP1y`, `aCP2x`, `aCP2y`, `aX`, `aY`): `ShapePath`

Defined in: [three/src/extras/core/ShapePath.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L107)

Adds an instance of [CubicBezierCurve](/reference/three/classes/cubicbeziercurve/) to the path by connecting
the current point with the given one.

#### Parameters

##### aCP1x

`number`

The x coordinate of the first control point.

##### aCP1y

`number`

The y coordinate of the first control point.

##### aCP2x

`number`

The x coordinate of the second control point.

##### aCP2y

`number`

The y coordinate of the second control point.

##### aX

`number`

The x coordinate of the end point.

##### aY

`number`

The y coordinate of the end point.

#### Returns

`ShapePath`

A reference to this shape path.

***

### lineTo()

> **lineTo**(`x`, `y`): `ShapePath`

Defined in: [three/src/extras/core/ShapePath.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L69)

Adds an instance of [LineCurve](/reference/three/classes/linecurve/) to the path by connecting
the current point with the given one.

#### Parameters

##### x

`number`

The x coordinate of the end point.

##### y

`number`

The y coordinate of the end point.

#### Returns

`ShapePath`

A reference to this shape path.

***

### moveTo()

> **moveTo**(`x`, `y`): `ShapePath`

Defined in: [three/src/extras/core/ShapePath.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L51)

Creates a new path and moves it current point to the given one.

#### Parameters

##### x

`number`

The x coordinate.

##### y

`number`

The y coordinate.

#### Returns

`ShapePath`

A reference to this shape path.

***

### quadraticCurveTo()

> **quadraticCurveTo**(`aCPx`, `aCPy`, `aX`, `aY`): `ShapePath`

Defined in: [three/src/extras/core/ShapePath.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L87)

Adds an instance of [QuadraticBezierCurve](/reference/three/classes/quadraticbeziercurve/) to the path by connecting
the current point with the given one.

#### Parameters

##### aCPx

`number`

The x coordinate of the control point.

##### aCPy

`number`

The y coordinate of the control point.

##### aX

`number`

The x coordinate of the end point.

##### aY

`number`

The y coordinate of the end point.

#### Returns

`ShapePath`

A reference to this shape path.

***

### splineThru()

> **splineThru**(`pts`): `ShapePath`

Defined in: [three/src/extras/core/ShapePath.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L122)

Adds an instance of [SplineCurve](/reference/three/classes/splinecurve/) to the path by connecting
the current point with the given list of points.

#### Parameters

##### pts

`Vector2`[]

An array of points in 2D space.

#### Returns

`ShapePath`

A reference to this shape path.

***

### toShapes()

> **toShapes**(`isCCW`): [`Shape`](/reference/three/classes/shape/)[]

Defined in: [three/src/extras/core/ShapePath.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/ShapePath.js#L137)

Converts the paths into an array of shapes.

#### Parameters

##### isCCW

`boolean`

By default solid shapes are  defined clockwise (CW) and holes are defined counterclockwise (CCW).
If this flag is set to `true`, then those are flipped.

#### Returns

[`Shape`](/reference/three/classes/shape/)[]

An array of shapes.

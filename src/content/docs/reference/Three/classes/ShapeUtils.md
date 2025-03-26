---
editUrl: false
next: false
prev: false
title: "ShapeUtils"
---

Defined in: [three/src/extras/ShapeUtils.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/ShapeUtils.js#L8)

A class containing utility functions for shapes.

## Methods

### area()

> `static` **area**(`contour`): `number`

Defined in: [three/src/extras/ShapeUtils.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/ShapeUtils.js#L16)

Calculate area of a ( 2D ) contour polygon.

#### Parameters

##### contour

`Vector2`[]

An array of 2D points.

#### Returns

`number`

The area.

***

### isClockWise()

> `static` **isClockWise**(`pts`): `boolean`

Defined in: [three/src/extras/ShapeUtils.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/ShapeUtils.js#L37)

Returns `true` if the given contour uses a clockwise winding order.

#### Parameters

##### pts

`Vector2`[]

An array of 2D points defining a polygon.

#### Returns

`boolean`

Whether the given contour uses a clockwise winding order or not.

***

### triangulateShape()

> `static` **triangulateShape**(`contour`, `holes`): `number`[][]

Defined in: [three/src/extras/ShapeUtils.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/ShapeUtils.js#L50)

Triangulates the given shape definition.

#### Parameters

##### contour

`Vector2`[]

An array of 2D points defining the contour.

##### holes

`Vector2`[][]

An array that holds arrays of 2D points defining the holes.

#### Returns

`number`[][]

An array that holds for each face definition an array with three indices.

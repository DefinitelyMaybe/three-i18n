---
editUrl: false
next: false
prev: false
title: "Shape"
---

Defined in: [three/src/extras/core/Shape.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L35)

Defines an arbitrary 2d shape plane using paths with optional holes. It
can be used with [ExtrudeGeometry](/reference/three/classes/extrudegeometry/), [ShapeGeometry](/reference/three/classes/shapegeometry/), to get
points, or to get triangulated faces.

```js
const heartShape = new THREE.Shape();

heartShape.moveTo( 25, 25 );
heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );

const extrudeSettings = {
	depth: 8,
	bevelEnabled: true,
	bevelSegments: 2,
	steps: 2,
	bevelSize: 1,
	bevelThickness: 1
};

const geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
const mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial() );
```

## Extends

- [`Path`](/reference/three/classes/path/)

## Constructors

### Constructor

> **new Shape**(`points`?): `Shape`

Defined in: [three/src/extras/core/Shape.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L42)

Constructs a new shape.

#### Parameters

##### points?

`Vector2`[]

An array of 2D points defining the shape.

#### Returns

`Shape`

#### Overrides

[`Path`](/reference/three/classes/path/).[`constructor`](/reference/three/classes/path/#constructor)

## Properties

### arcLengthDivisions

> **arcLengthDivisions**: `number`

Defined in: [three/src/extras/core/Curve.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L37)

This value determines the amount of divisions when calculating the
cumulative segment lengths of a curve via [Curve#getLengths](/reference/three/classes/curve/#getlengths). To ensure
precision when using methods like [Curve#getSpacedPoints](/reference/three/classes/curve/#getspacedpoints), it is
recommended to increase the value of this property if the curve is very large.

#### Default

```ts
200
```

#### Inherited from

[`Path`](/reference/three/classes/path/).[`arcLengthDivisions`](/reference/three/classes/path/#arclengthdivisions)

***

### autoClose

> **autoClose**: `boolean`

Defined in: [three/src/extras/core/CurvePath.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L36)

Whether the path should automatically be closed
by a line curve.

#### Default

```ts
false
```

#### Inherited from

[`Path`](/reference/three/classes/path/).[`autoClose`](/reference/three/classes/path/#autoclose)

***

### cacheLengths

> **cacheLengths**: `number`[]

Defined in: [three/src/extras/core/CurvePath.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L138)

#### Inherited from

[`Path`](/reference/three/classes/path/).[`cacheLengths`](/reference/three/classes/path/#cachelengths)

***

### currentPoint

> **currentPoint**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/extras/core/Path.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L49)

The current offset of the path. Any new curve added will start here.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`currentPoint`](/reference/three/classes/path/#currentpoint)

***

### curves

> **curves**: [`Curve`](/reference/three/classes/curve/)[]

Defined in: [three/src/extras/core/CurvePath.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L27)

An array of curves defining the
path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`curves`](/reference/three/classes/path/#curves)

***

### holes

> `readonly` **holes**: [`Path`](/reference/three/classes/path/)[]

Defined in: [three/src/extras/core/Shape.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L63)

Defines the holes in the shape. Hole definitions must use the
opposite winding order (CW/CCW) than the outer shape.

***

### needsUpdate

> **needsUpdate**: `boolean`

Defined in: [three/src/extras/core/Curve.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L45)

Must be set to `true` if the curve parameters have changed.

#### Default

```ts
false
```

#### Inherited from

[`Path`](/reference/three/classes/path/).[`needsUpdate`](/reference/three/classes/path/#needsupdate)

***

### type

> **type**: `string`

Defined in: [three/src/extras/core/Shape.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L54)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`type`](/reference/three/classes/path/#type)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/extras/core/Shape.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L52)

The UUID of the shape.

## Methods

### absarc()

> **absarc**(`aX`, `aY`, `aRadius`, `aStartAngle`, `aEndAngle`, `aClockwise`?): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L224)

Adds an absolutely positioned arc as an instance of [EllipseCurve](/reference/three/classes/ellipsecurve/) to the path.

#### Parameters

##### aX

`number`

The x coordinate of the center of the arc.

##### aY

`number`

The y coordinate of the center of the arc.

##### aRadius

`number`

The radius of the arc.

##### aStartAngle

`number`

The start angle in radians.

##### aEndAngle

`number`

The end angle in radians.

##### aClockwise?

`boolean`

Whether to sweep the arc clockwise or not.

#### Returns

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`absarc`](/reference/three/classes/path/#absarc)

***

### absellipse()

> **absellipse**(`aX`, `aY`, `xRadius`, `yRadius`, `aStartAngle`, `aEndAngle`, `aClockwise`?, `aRotation`?): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:270](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L270)

Adds an absolutely positioned ellipse as an instance of [EllipseCurve](/reference/three/classes/ellipsecurve/) to the path.

#### Parameters

##### aX

`number`

The x coordinate of the absolute center of the ellipse.

##### aY

`number`

The y coordinate of the absolute center of the ellipse.

##### xRadius

`number`

The radius of the ellipse in the x axis.

##### yRadius

`number`

The radius of the ellipse in the y axis.

##### aStartAngle

`number`

The start angle in radians.

##### aEndAngle

`number`

The end angle in radians.

##### aClockwise?

`boolean`

Whether to sweep the ellipse clockwise or not.

##### aRotation?

`number`

The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.

#### Returns

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`absellipse`](/reference/three/classes/path/#absellipse)

***

### add()

> **add**(`curve`): `void`

Defined in: [three/src/extras/core/CurvePath.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L45)

Adds a curve to this curve path.

#### Parameters

##### curve

[`Curve`](/reference/three/classes/curve/)

The curve to add.

#### Returns

`void`

#### Inherited from

[`Path`](/reference/three/classes/path/).[`add`](/reference/three/classes/path/#add)

***

### arc()

> **arc**(`aX`, `aY`, `aRadius`, `aStartAngle`, `aEndAngle`, `aClockwise`?): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L201)

Adds an arc as an instance of [EllipseCurve](/reference/three/classes/ellipsecurve/) to the path, positioned relative
to the current point.

#### Parameters

##### aX

`number`

The x coordinate of the center of the arc offsetted from the previous curve.

##### aY

`number`

The y coordinate of the center of the arc offsetted from the previous curve.

##### aRadius

`number`

The radius of the arc.

##### aStartAngle

`number`

The start angle in radians.

##### aEndAngle

`number`

The end angle in radians.

##### aClockwise?

`boolean`

Whether to sweep the arc clockwise or not.

#### Returns

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`arc`](/reference/three/classes/path/#arc)

***

### bezierCurveTo()

> **bezierCurveTo**(`aCP1x`, `aCP1y`, `aCP2x`, `aCP2y`, `aX`, `aY`): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L152)

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

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`bezierCurveTo`](/reference/three/classes/path/#beziercurveto)

***

### clone()

> **clone**(): [`Curve`](/reference/three/classes/curve/)

Defined in: [three/src/extras/core/Curve.js:456](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L456)

Returns a new curve with copied values from this instance.

#### Returns

[`Curve`](/reference/three/classes/curve/)

A clone of this instance.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`clone`](/reference/three/classes/path/#clone)

***

### closePath()

> **closePath**(): [`CurvePath`](/reference/three/classes/curvepath/)

Defined in: [three/src/extras/core/CurvePath.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L56)

Adds a line curve to close the path.

#### Returns

[`CurvePath`](/reference/three/classes/curvepath/)

A reference to this curve path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`closePath`](/reference/three/classes/path/#closepath)

***

### computeFrenetFrames()

> **computeFrenetFrames**(`segments`, `closed`?): `object`

Defined in: [three/src/extras/core/Curve.js:337](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L337)

Generates the Frenet Frames. Requires a curve definition in 3D space. Used
in geometries like [TubeGeometry](/reference/three/classes/tubegeometry/) or [ExtrudeGeometry](/reference/three/classes/extrudegeometry/).

#### Parameters

##### segments

`number`

The number of segments.

##### closed?

`boolean` = `false`

Whether the curve is closed or not.

#### Returns

`object`

The Frenet Frames.

##### binormals

> **binormals**: [`Vector3`](/reference/three/classes/vector3/)[]

##### normals

> **normals**: [`Vector3`](/reference/three/classes/vector3/)[]

##### tangents

> **tangents**: [`Vector3`](/reference/three/classes/vector3/)[]

#### Inherited from

[`Path`](/reference/three/classes/path/).[`computeFrenetFrames`](/reference/three/classes/path/#computefrenetframes)

***

### copy()

> **copy**(`source`): `Shape`

Defined in: [three/src/extras/core/Shape.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L108)

Copies the values of the given curve to this instance.

#### Parameters

##### source

`any`

The curve to copy.

#### Returns

`Shape`

A reference to this curve.

#### Overrides

[`Path`](/reference/three/classes/path/).[`copy`](/reference/three/classes/path/#copy)

***

### ellipse()

> **ellipse**(`aX`, `aY`, `xRadius`, `yRadius`, `aStartAngle`, `aEndAngle`, `aClockwise`?, `aRotation`?): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L246)

Adds an ellipse as an instance of [EllipseCurve](/reference/three/classes/ellipsecurve/) to the path, positioned relative
to the current point

#### Parameters

##### aX

`number`

The x coordinate of the center of the ellipse offsetted from the previous curve.

##### aY

`number`

The y coordinate of the center of the ellipse offsetted from the previous curve.

##### xRadius

`number`

The radius of the ellipse in the x axis.

##### yRadius

`number`

The radius of the ellipse in the y axis.

##### aStartAngle

`number`

The start angle in radians.

##### aEndAngle

`number`

The end angle in radians.

##### aClockwise?

`boolean`

Whether to sweep the ellipse clockwise or not.

##### aRotation?

`number`

The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.

#### Returns

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`ellipse`](/reference/three/classes/path/#ellipse)

***

### extractPoints()

> **extractPoints**(`divisions`): `object`

Defined in: [three/src/extras/core/Shape.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L97)

Returns an object that holds contour data for the shape and its holes as
arrays of 2D points.

#### Parameters

##### divisions

`number`

The fineness of the result.

#### Returns

`object`

An object with contour data.

##### holes

> **holes**: `Vector2`[][]

##### shape

> **shape**: `Vector2`[]

***

### fromJSON()

> **fromJSON**(`json`): `Shape`

Defined in: [three/src/extras/core/Shape.js:144](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L144)

Deserializes the curve from the given JSON.

#### Parameters

##### json

`any`

The JSON holding the serialized curve.

#### Returns

`Shape`

A reference to this curve.

#### Overrides

[`Path`](/reference/three/classes/path/).[`fromJSON`](/reference/three/classes/path/#fromjson)

***

### getCurveLengths()

> **getCurveLengths**(): `number`[]

Defined in: [three/src/extras/core/CurvePath.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L148)

Returns list of cumulative curve lengths of the defined curves.

#### Returns

`number`[]

The curve lengths.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getCurveLengths`](/reference/three/classes/path/#getcurvelengths)

***

### getLength()

> **getLength**(): `number`

Defined in: [three/src/extras/core/CurvePath.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L122)

Returns the total arc length of the curve.

#### Returns

`number`

The length of the curve.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getLength`](/reference/three/classes/path/#getlength)

***

### getLengths()

> **getLengths**(`divisions`?): `number`[]

Defined in: [three/src/extras/core/Curve.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L152)

Returns an array of cumulative segment lengths of the curve.

#### Parameters

##### divisions?

`number` = `...`

The number of divisions.

#### Returns

`number`[]

An array holding the cumulative segment lengths.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getLengths`](/reference/three/classes/path/#getlengths)

***

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): `any`

Defined in: [three/src/extras/core/CurvePath.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L81)

This method returns a vector in 2D or 3D space (depending on the curve definitions)
for the given interpolation factor.

#### Parameters

##### t

`number`

A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.

##### optionalTarget?

`any`

The optional target vector the result is written to.

#### Returns

`any`

The position on the curve. It can be a 2D or 3D vector depending on the curve definition.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getPoint`](/reference/three/classes/path/#getpoint)

***

### getPointAt()

> **getPointAt**(`u`, `optionalTarget`?): [`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/extras/core/Curve.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L82)

This method returns a vector in 2D or 3D space (depending on the curve definition)
for the given interpolation factor. Unlike [Curve#getPoint](/reference/three/classes/curve/#getpoint), this method honors the length
of the curve which equidistant samples.

#### Parameters

##### u

`number`

A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.

##### optionalTarget?

The optional target vector the result is written to.

[`Vector2`](/reference/three/classes/vector2/) | [`Vector3`](/reference/three/classes/vector3/)

#### Returns

[`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/)

The position on the curve. It can be a 2D or 3D vector depending on the curve definition.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getPointAt`](/reference/three/classes/path/#getpointat)

***

### getPoints()

> **getPoints**(`divisions`): ([`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/))[]

Defined in: [three/src/extras/core/CurvePath.js:199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L199)

This method samples the curve via [Curve#getPoint](/reference/three/classes/curve/#getpoint) and returns an array of points representing
the curve shape.

#### Parameters

##### divisions

`number` = `12`

The number of divisions.

#### Returns

([`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/))[]

An array holding the sampled curve values. The number of points is `divisions + 1`.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getPoints`](/reference/three/classes/path/#getpoints)

***

### getPointsHoles()

> **getPointsHoles**(`divisions`): `Vector2`[][]

Defined in: [three/src/extras/core/Shape.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L74)

Returns an array representing each contour of the holes
as a list of 2D points.

#### Parameters

##### divisions

`number`

The fineness of the result.

#### Returns

`Vector2`[][]

The holes as a series of 2D points.

***

### getSpacedPoints()

> **getSpacedPoints**(`divisions`): `any`[]

Defined in: [three/src/extras/core/CurvePath.js:179](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L179)

This method samples the curve via [Curve#getPointAt](/reference/three/classes/curve/#getpointat) and returns an array of points representing
the curve shape. Unlike [Curve#getPoints](/reference/three/classes/curve/#getpoints), this method returns equi-spaced points across the entire
curve.

#### Parameters

##### divisions

`number` = `40`

The number of divisions.

#### Returns

`any`[]

An array holding the sampled curve values. The number of points is `divisions + 1`.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getSpacedPoints`](/reference/three/classes/path/#getspacedpoints)

***

### getTangent()

> **getTangent**(`t`, `optionalTarget`?): [`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/extras/core/Curve.js:292](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L292)

Returns a unit vector tangent for the given interpolation factor.
If the derived curve does not implement its tangent derivation,
two points a small delta apart will be used to find its gradient
which seems to give a reasonable approximation.

#### Parameters

##### t

`number`

The interpolation factor.

##### optionalTarget?

The optional target vector the result is written to.

[`Vector2`](/reference/three/classes/vector2/) | [`Vector3`](/reference/three/classes/vector3/)

#### Returns

[`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/)

The tangent vector.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getTangent`](/reference/three/classes/path/#gettangent)

***

### getTangentAt()

> **getTangentAt**(`u`, `optionalTarget`?): [`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/extras/core/Curve.js:322](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L322)

Same as [Curve#getTangent](/reference/three/classes/curve/#gettangent) but with equidistant samples.

#### Parameters

##### u

`number`

The interpolation factor.

##### optionalTarget?

The optional target vector the result is written to.

[`Vector2`](/reference/three/classes/vector2/) | [`Vector3`](/reference/three/classes/vector3/)

#### Returns

[`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/)

The tangent vector.

#### See

[Curve#getPointAt](/reference/three/classes/curve/#getpointat)

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getTangentAt`](/reference/three/classes/path/#gettangentat)

***

### getUtoTmapping()

> **getUtoTmapping**(`u`, `distance`): `number`

Defined in: [three/src/extras/core/Curve.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L207)

Given an interpolation factor in the range `[0,1]`, this method returns an updated
interpolation factor in the same range that can be ued to sample equidistant points
from a curve.

#### Parameters

##### u

`number`

The interpolation factor.

##### distance

`number` = `null`

An optional distance on the curve.

#### Returns

`number`

The updated interpolation factor.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`getUtoTmapping`](/reference/three/classes/path/#getutotmapping)

***

### lineTo()

> **lineTo**(`x`, `y`): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L103)

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

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`lineTo`](/reference/three/classes/path/#lineto)

***

### moveTo()

> **moveTo**(`x`, `y`): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L87)

Moves [Path#currentPoint](/reference/three/classes/path/#currentpoint) to the given point.

#### Parameters

##### x

`number`

The x coordinate.

##### y

`number`

The y coordinate.

#### Returns

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`moveTo`](/reference/three/classes/path/#moveto)

***

### quadraticCurveTo()

> **quadraticCurveTo**(`aCPx`, `aCPy`, `aX`, `aY`): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L124)

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

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`quadraticCurveTo`](/reference/three/classes/path/#quadraticcurveto)

***

### setFromPoints()

> **setFromPoints**(`points`): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L66)

Creates a path from the given list of points. The points are added
to the path as instances of [LineCurve](/reference/three/classes/linecurve/).

#### Parameters

##### points

[`Vector2`](/reference/three/classes/vector2/)[]

An array of 2D points.

#### Returns

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`setFromPoints`](/reference/three/classes/path/#setfrompoints)

***

### splineThru()

> **splineThru**(`pts`): [`Path`](/reference/three/classes/path/)

Defined in: [three/src/extras/core/Path.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L176)

Adds an instance of [SplineCurve](/reference/three/classes/splinecurve/) to the path by connecting
the current point with the given list of points.

#### Parameters

##### pts

[`Vector2`](/reference/three/classes/vector2/)[]

An array of points in 2D space.

#### Returns

[`Path`](/reference/three/classes/path/)

A reference to this path.

#### Inherited from

[`Path`](/reference/three/classes/path/).[`splineThru`](/reference/three/classes/path/#splinethru)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/extras/core/Shape.js:126](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Shape.js#L126)

Serializes the curve into JSON.

#### Returns

`any`

A JSON object representing the serialized curve.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

#### Overrides

[`Path`](/reference/three/classes/path/).[`toJSON`](/reference/three/classes/path/#tojson)

***

### updateArcLengths()

> **updateArcLengths**(): `void`

Defined in: [three/src/extras/core/CurvePath.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L133)

Update the cumulative segment distance cache. The method must be called
every time curve parameters are changed. If an updated curve is part of a
composed curve like [CurvePath](/reference/three/classes/curvepath/), this method must be called on the
composed curve, too.

#### Returns

`void`

#### Inherited from

[`Path`](/reference/three/classes/path/).[`updateArcLengths`](/reference/three/classes/path/#updatearclengths)

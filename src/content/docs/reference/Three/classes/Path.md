---
editUrl: false
next: false
prev: false
title: "Path"
---

Defined in: [three/src/extras/core/Path.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L31)

A 2D path representation. The class provides methods for creating paths
and contours of 2D shapes similar to the 2D Canvas API.

```js
const path = new THREE.Path();

path.lineTo( 0, 0.8 );
path.quadraticCurveTo( 0, 1, 0.2, 1 );
path.lineTo( 1, 1 );

const points = path.getPoints();

const geometry = new THREE.BufferGeometry().setFromPoints( points );
const material = new THREE.LineBasicMaterial( { color: 0xffffff } );

const line = new THREE.Line( geometry, material );
scene.add( line );
```

## Extends

- [`CurvePath`](/reference/three/classes/curvepath/)

## Extended by

- [`Shape`](/reference/three/classes/shape/)

## Constructors

### Constructor

> **new Path**(`points`?): `Path`

Defined in: [three/src/extras/core/Path.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L38)

Constructs a new path.

#### Parameters

##### points?

[`Vector2`](/reference/three/classes/vector2/)[]

An array of 2D points defining the path.

#### Returns

`Path`

#### Overrides

[`CurvePath`](/reference/three/classes/curvepath/).[`constructor`](/reference/three/classes/curvepath/#constructor)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`arcLengthDivisions`](/reference/three/classes/curvepath/#arclengthdivisions)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`autoClose`](/reference/three/classes/curvepath/#autoclose)

***

### cacheLengths

> **cacheLengths**: `number`[]

Defined in: [three/src/extras/core/CurvePath.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L138)

#### Inherited from

[`CurvePath`](/reference/three/classes/curvepath/).[`cacheLengths`](/reference/three/classes/curvepath/#cachelengths)

***

### currentPoint

> **currentPoint**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/extras/core/Path.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L49)

The current offset of the path. Any new curve added will start here.

***

### curves

> **curves**: [`Curve`](/reference/three/classes/curve/)[]

Defined in: [three/src/extras/core/CurvePath.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L27)

An array of curves defining the
path.

#### Inherited from

[`CurvePath`](/reference/three/classes/curvepath/).[`curves`](/reference/three/classes/curvepath/#curves)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`needsUpdate`](/reference/three/classes/curvepath/#needsupdate)

***

### type

> **type**: `string`

Defined in: [three/src/extras/core/Path.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L42)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`CurvePath`](/reference/three/classes/curvepath/).[`type`](/reference/three/classes/curvepath/#type)

## Methods

### absarc()

> **absarc**(`aX`, `aY`, `aRadius`, `aStartAngle`, `aEndAngle`, `aClockwise`?): `Path`

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

`Path`

A reference to this path.

***

### absellipse()

> **absellipse**(`aX`, `aY`, `xRadius`, `yRadius`, `aStartAngle`, `aEndAngle`, `aClockwise`?, `aRotation`?): `Path`

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

`Path`

A reference to this path.

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

[`CurvePath`](/reference/three/classes/curvepath/).[`add`](/reference/three/classes/curvepath/#add)

***

### arc()

> **arc**(`aX`, `aY`, `aRadius`, `aStartAngle`, `aEndAngle`, `aClockwise`?): `Path`

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

`Path`

A reference to this path.

***

### bezierCurveTo()

> **bezierCurveTo**(`aCP1x`, `aCP1y`, `aCP2x`, `aCP2y`, `aX`, `aY`): `Path`

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

`Path`

A reference to this path.

***

### clone()

> **clone**(): [`Curve`](/reference/three/classes/curve/)

Defined in: [three/src/extras/core/Curve.js:456](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L456)

Returns a new curve with copied values from this instance.

#### Returns

[`Curve`](/reference/three/classes/curve/)

A clone of this instance.

#### Inherited from

[`CurvePath`](/reference/three/classes/curvepath/).[`clone`](/reference/three/classes/curvepath/#clone)

***

### closePath()

> **closePath**(): [`CurvePath`](/reference/three/classes/curvepath/)

Defined in: [three/src/extras/core/CurvePath.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L56)

Adds a line curve to close the path.

#### Returns

[`CurvePath`](/reference/three/classes/curvepath/)

A reference to this curve path.

#### Inherited from

[`CurvePath`](/reference/three/classes/curvepath/).[`closePath`](/reference/three/classes/curvepath/#closepath)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`computeFrenetFrames`](/reference/three/classes/curvepath/#computefrenetframes)

***

### copy()

> **copy**(`source`): `Path`

Defined in: [three/src/extras/core/Path.js:296](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L296)

Copies the values of the given curve to this instance.

#### Parameters

##### source

`any`

The curve to copy.

#### Returns

`Path`

A reference to this curve.

#### Overrides

[`CurvePath`](/reference/three/classes/curvepath/).[`copy`](/reference/three/classes/curvepath/#copy)

***

### ellipse()

> **ellipse**(`aX`, `aY`, `xRadius`, `yRadius`, `aStartAngle`, `aEndAngle`, `aClockwise`?, `aRotation`?): `Path`

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

`Path`

A reference to this path.

***

### fromJSON()

> **fromJSON**(`json`): `Path`

Defined in: [three/src/extras/core/Path.js:316](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L316)

Deserializes the curve from the given JSON.

#### Parameters

##### json

`any`

The JSON holding the serialized curve.

#### Returns

`Path`

A reference to this curve.

#### Overrides

[`CurvePath`](/reference/three/classes/curvepath/).[`fromJSON`](/reference/three/classes/curvepath/#fromjson)

***

### getCurveLengths()

> **getCurveLengths**(): `number`[]

Defined in: [three/src/extras/core/CurvePath.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L148)

Returns list of cumulative curve lengths of the defined curves.

#### Returns

`number`[]

The curve lengths.

#### Inherited from

[`CurvePath`](/reference/three/classes/curvepath/).[`getCurveLengths`](/reference/three/classes/curvepath/#getcurvelengths)

***

### getLength()

> **getLength**(): `number`

Defined in: [three/src/extras/core/CurvePath.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L122)

Returns the total arc length of the curve.

#### Returns

`number`

The length of the curve.

#### Inherited from

[`CurvePath`](/reference/three/classes/curvepath/).[`getLength`](/reference/three/classes/curvepath/#getlength)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`getLengths`](/reference/three/classes/curvepath/#getlengths)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`getPoint`](/reference/three/classes/curvepath/#getpoint)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`getPointAt`](/reference/three/classes/curvepath/#getpointat)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`getPoints`](/reference/three/classes/curvepath/#getpoints)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`getSpacedPoints`](/reference/three/classes/curvepath/#getspacedpoints)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`getTangent`](/reference/three/classes/curvepath/#gettangent)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`getTangentAt`](/reference/three/classes/curvepath/#gettangentat)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`getUtoTmapping`](/reference/three/classes/curvepath/#getutotmapping)

***

### lineTo()

> **lineTo**(`x`, `y`): `Path`

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

`Path`

A reference to this path.

***

### moveTo()

> **moveTo**(`x`, `y`): `Path`

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

`Path`

A reference to this path.

***

### quadraticCurveTo()

> **quadraticCurveTo**(`aCPx`, `aCPy`, `aX`, `aY`): `Path`

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

`Path`

A reference to this path.

***

### setFromPoints()

> **setFromPoints**(`points`): `Path`

Defined in: [three/src/extras/core/Path.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L66)

Creates a path from the given list of points. The points are added
to the path as instances of [LineCurve](/reference/three/classes/linecurve/).

#### Parameters

##### points

[`Vector2`](/reference/three/classes/vector2/)[]

An array of 2D points.

#### Returns

`Path`

A reference to this path.

***

### splineThru()

> **splineThru**(`pts`): `Path`

Defined in: [three/src/extras/core/Path.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L176)

Adds an instance of [SplineCurve](/reference/three/classes/splinecurve/) to the path by connecting
the current point with the given list of points.

#### Parameters

##### pts

[`Vector2`](/reference/three/classes/vector2/)[]

An array of points in 2D space.

#### Returns

`Path`

A reference to this path.

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/extras/core/Path.js:306](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Path.js#L306)

Serializes the curve into JSON.

#### Returns

`any`

A JSON object representing the serialized curve.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

#### Overrides

[`CurvePath`](/reference/three/classes/curvepath/).[`toJSON`](/reference/three/classes/curvepath/#tojson)

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

[`CurvePath`](/reference/three/classes/curvepath/).[`updateArcLengths`](/reference/three/classes/curvepath/#updatearclengths)

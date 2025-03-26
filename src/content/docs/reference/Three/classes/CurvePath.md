---
editUrl: false
next: false
prev: false
title: "CurvePath"
---

Defined in: [three/src/extras/core/CurvePath.js:10](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L10)

A base class extending [Curve](/reference/three/classes/curve/). `CurvePath` is simply an
array of connected curves, but retains the API of a curve.

## Extends

- [`Curve`](/reference/three/classes/curve/)

## Extended by

- [`Path`](/reference/three/classes/path/)

## Constructors

### Constructor

> **new CurvePath**(): `CurvePath`

Defined in: [three/src/extras/core/CurvePath.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L15)

Constructs a new curve path.

#### Returns

`CurvePath`

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`constructor`](/reference/three/classes/curve/#constructor)

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

[`Curve`](/reference/three/classes/curve/).[`arcLengthDivisions`](/reference/three/classes/curve/#arclengthdivisions)

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

***

### cacheLengths

> **cacheLengths**: `number`[]

Defined in: [three/src/extras/core/CurvePath.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L138)

***

### curves

> **curves**: [`Curve`](/reference/three/classes/curve/)[]

Defined in: [three/src/extras/core/CurvePath.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L27)

An array of curves defining the
path.

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

[`Curve`](/reference/three/classes/curve/).[`needsUpdate`](/reference/three/classes/curve/#needsupdate)

***

### type

> **type**: `string`

Defined in: [three/src/extras/core/CurvePath.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L19)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`Curve`](/reference/three/classes/curve/).[`type`](/reference/three/classes/curve/#type)

## Methods

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

***

### clone()

> **clone**(): [`Curve`](/reference/three/classes/curve/)

Defined in: [three/src/extras/core/Curve.js:456](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L456)

Returns a new curve with copied values from this instance.

#### Returns

[`Curve`](/reference/three/classes/curve/)

A clone of this instance.

#### Inherited from

[`Curve`](/reference/three/classes/curve/).[`clone`](/reference/three/classes/curve/#clone)

***

### closePath()

> **closePath**(): `CurvePath`

Defined in: [three/src/extras/core/CurvePath.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L56)

Adds a line curve to close the path.

#### Returns

`CurvePath`

A reference to this curve path.

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

[`Curve`](/reference/three/classes/curve/).[`computeFrenetFrames`](/reference/three/classes/curve/#computefrenetframes)

***

### copy()

> **copy**(`source`): `CurvePath`

Defined in: [three/src/extras/core/CurvePath.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L237)

Copies the values of the given curve to this instance.

#### Parameters

##### source

`any`

The curve to copy.

#### Returns

`CurvePath`

A reference to this curve.

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`copy`](/reference/three/classes/curve/#copy)

***

### fromJSON()

> **fromJSON**(`json`): `CurvePath`

Defined in: [three/src/extras/core/CurvePath.js:275](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L275)

Deserializes the curve from the given JSON.

#### Parameters

##### json

`any`

The JSON holding the serialized curve.

#### Returns

`CurvePath`

A reference to this curve.

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`fromJSON`](/reference/three/classes/curve/#fromjson)

***

### getCurveLengths()

> **getCurveLengths**(): `number`[]

Defined in: [three/src/extras/core/CurvePath.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L148)

Returns list of cumulative curve lengths of the defined curves.

#### Returns

`number`[]

The curve lengths.

***

### getLength()

> **getLength**(): `number`

Defined in: [three/src/extras/core/CurvePath.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L122)

Returns the total arc length of the curve.

#### Returns

`number`

The length of the curve.

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`getLength`](/reference/three/classes/curve/#getlength)

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

[`Curve`](/reference/three/classes/curve/).[`getLengths`](/reference/three/classes/curve/#getlengths)

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

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`getPoint`](/reference/three/classes/curve/#getpoint)

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

[`Curve`](/reference/three/classes/curve/).[`getPointAt`](/reference/three/classes/curve/#getpointat)

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

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`getPoints`](/reference/three/classes/curve/#getpoints)

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

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`getSpacedPoints`](/reference/three/classes/curve/#getspacedpoints)

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

[`Curve`](/reference/three/classes/curve/).[`getTangent`](/reference/three/classes/curve/#gettangent)

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

[`Curve`](/reference/three/classes/curve/).[`getTangentAt`](/reference/three/classes/curve/#gettangentat)

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

[`Curve`](/reference/three/classes/curve/).[`getUtoTmapping`](/reference/three/classes/curve/#getutotmapping)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/extras/core/CurvePath.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/CurvePath.js#L257)

Serializes the curve into JSON.

#### Returns

`any`

A JSON object representing the serialized curve.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`toJSON`](/reference/three/classes/curve/#tojson)

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

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`updateArcLengths`](/reference/three/classes/curve/#updatearclengths)

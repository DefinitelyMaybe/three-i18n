---
editUrl: false
next: false
prev: false
title: "LineCurve3"
---

Defined in: [three/src/extras/curves/LineCurve3.js:9](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L9)

A curve representing a 3D line segment.

## Extends

- [`Curve`](/reference/three/classes/curve/)

## Constructors

### Constructor

> **new LineCurve3**(`v1`?, `v2`?): `LineCurve3`

Defined in: [three/src/extras/curves/LineCurve3.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L17)

Constructs a new line curve.

#### Parameters

##### v1?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The start point.

##### v2?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The end point.

#### Returns

`LineCurve3`

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

### isLineCurve3

> `readonly` **isLineCurve3**: `boolean`

Defined in: [three/src/extras/curves/LineCurve3.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L28)

This flag can be used for type testing.

#### Default

```ts
true
```

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

Defined in: [three/src/extras/curves/LineCurve3.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L30)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`Curve`](/reference/three/classes/curve/).[`type`](/reference/three/classes/curve/#type)

***

### v1

> **v1**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/extras/curves/LineCurve3.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L37)

The start point.

***

### v2

> **v2**: `Vector2`

Defined in: [three/src/extras/curves/LineCurve3.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L44)

The end point.

## Methods

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

> **copy**(`source`): `LineCurve3`

Defined in: [three/src/extras/curves/LineCurve3.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L93)

Copies the values of the given curve to this instance.

#### Parameters

##### source

`any`

The curve to copy.

#### Returns

`LineCurve3`

A reference to this curve.

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`copy`](/reference/three/classes/curve/#copy)

***

### fromJSON()

> **fromJSON**(`json`): `LineCurve3`

Defined in: [three/src/extras/curves/LineCurve3.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L115)

Deserializes the curve from the given JSON.

#### Parameters

##### json

`any`

The JSON holding the serialized curve.

#### Returns

`LineCurve3`

A reference to this curve.

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`fromJSON`](/reference/three/classes/curve/#fromjson)

***

### getLength()

> **getLength**(): `number`

Defined in: [three/src/extras/core/Curve.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L139)

Returns the total arc length of the curve.

#### Returns

`number`

The length of the curve.

#### Inherited from

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

> **getPoint**(`t`, `optionalTarget`?): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/extras/curves/LineCurve3.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L55)

Returns a point on the line.

#### Parameters

##### t

`number`

A interpolation factor representing a position on the line. Must be in the range `[0,1]`.

##### optionalTarget?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The optional target vector the result is written to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The position on the line.

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`getPoint`](/reference/three/classes/curve/#getpoint)

***

### getPointAt()

> **getPointAt**(`u`, `optionalTarget`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/extras/curves/LineCurve3.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L75)

This method returns a vector in 2D or 3D space (depending on the curve definition)
for the given interpolation factor. Unlike [Curve#getPoint](/reference/three/classes/curve/#getpoint), this method honors the length
of the curve which equidistant samples.

#### Parameters

##### u

`any`

A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.

##### optionalTarget

`any`

The optional target vector the result is written to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The position on the curve. It can be a 2D or 3D vector depending on the curve definition.

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`getPointAt`](/reference/three/classes/curve/#getpointat)

***

### getPoints()

> **getPoints**(`divisions`?): ([`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/))[]

Defined in: [three/src/extras/core/Curve.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L96)

This method samples the curve via [Curve#getPoint](/reference/three/classes/curve/#getpoint) and returns an array of points representing
the curve shape.

#### Parameters

##### divisions?

`number` = `5`

The number of divisions.

#### Returns

([`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/))[]

An array holding the sampled curve values. The number of points is `divisions + 1`.

#### Inherited from

[`Curve`](/reference/three/classes/curve/).[`getPoints`](/reference/three/classes/curve/#getpoints)

***

### getSpacedPoints()

> **getSpacedPoints**(`divisions`?): ([`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/))[]

Defined in: [three/src/extras/core/Curve.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L120)

This method samples the curve via [Curve#getPointAt](/reference/three/classes/curve/#getpointat) and returns an array of points representing
the curve shape. Unlike [Curve#getPoints](/reference/three/classes/curve/#getpoints), this method returns equi-spaced points across the entire
curve.

#### Parameters

##### divisions?

`number` = `5`

The number of divisions.

#### Returns

([`Vector2`](/reference/three/classes/vector2/) \| [`Vector3`](/reference/three/classes/vector3/))[]

An array holding the sampled curve values. The number of points is `divisions + 1`.

#### Inherited from

[`Curve`](/reference/three/classes/curve/).[`getSpacedPoints`](/reference/three/classes/curve/#getspacedpoints)

***

### getTangent()

> **getTangent**(`t`, `optionalTarget`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/extras/curves/LineCurve3.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L81)

Returns a unit vector tangent for the given interpolation factor.
If the derived curve does not implement its tangent derivation,
two points a small delta apart will be used to find its gradient
which seems to give a reasonable approximation.

#### Parameters

##### t

`any`

The interpolation factor.

##### optionalTarget

[`Vector3`](/reference/three/classes/vector3/) = `...`

The optional target vector the result is written to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The tangent vector.

#### Overrides

[`Curve`](/reference/three/classes/curve/).[`getTangent`](/reference/three/classes/curve/#gettangent)

***

### getTangentAt()

> **getTangentAt**(`u`, `optionalTarget`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/extras/curves/LineCurve3.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L87)

Same as [Curve#getTangent](/reference/three/classes/curve/#gettangent) but with equidistant samples.

#### Parameters

##### u

`any`

The interpolation factor.

##### optionalTarget

`any`

The optional target vector the result is written to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The tangent vector.

#### See

[Curve#getPointAt](/reference/three/classes/curve/#getpointat)

#### Overrides

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

Defined in: [three/src/extras/curves/LineCurve3.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/LineCurve3.js#L104)

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

Defined in: [three/src/extras/core/Curve.js:191](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L191)

Update the cumulative segment distance cache. The method must be called
every time curve parameters are changed. If an updated curve is part of a
composed curve like [CurvePath](/reference/three/classes/curvepath/), this method must be called on the
composed curve, too.

#### Returns

`void`

#### Inherited from

[`Curve`](/reference/three/classes/curve/).[`updateArcLengths`](/reference/three/classes/curve/#updatearclengths)

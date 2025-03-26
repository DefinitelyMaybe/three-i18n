---
editUrl: false
next: false
prev: false
title: "ArcCurve"
---

Defined in: [three/src/extras/curves/ArcCurve.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/ArcCurve.js#L8)

A curve representing an arc.

## Extends

- [`EllipseCurve`](/reference/three/classes/ellipsecurve/)

## Constructors

### Constructor

> **new ArcCurve**(`aX`?, `aY`?, `aRadius`?, `aStartAngle`?, `aEndAngle`?, `aClockwise`?): `ArcCurve`

Defined in: [three/src/extras/curves/ArcCurve.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/ArcCurve.js#L20)

Constructs a new arc curve.

#### Parameters

##### aX?

`number`

The X center of the ellipse.

##### aY?

`number`

The Y center of the ellipse.

##### aRadius?

`number`

The radius of the ellipse in the x direction.

##### aStartAngle?

`number`

The start angle of the curve in radians starting from the positive X axis.

##### aEndAngle?

`number`

The end angle of the curve in radians starting from the positive X axis.

##### aClockwise?

`boolean`

Whether the ellipse is drawn clockwise or not.

#### Returns

`ArcCurve`

#### Overrides

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`constructor`](/reference/three/classes/ellipsecurve/#constructor)

## Properties

### aClockwise

> **aClockwise**: `boolean`

Defined in: [three/src/extras/curves/EllipseCurve.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L112)

Whether the ellipse is drawn clockwise or not.

#### Default

```ts
false
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`aClockwise`](/reference/three/classes/ellipsecurve/#aclockwise)

***

### aEndAngle

> **aEndAngle**: `number`

Defined in: [three/src/extras/curves/EllipseCurve.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L104)

The end angle of the curve in radians starting from the positive X axis.

#### Default

```ts
Math.PI*2
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`aEndAngle`](/reference/three/classes/ellipsecurve/#aendangle)

***

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`arcLengthDivisions`](/reference/three/classes/ellipsecurve/#arclengthdivisions)

***

### aRotation

> **aRotation**: `number`

Defined in: [three/src/extras/curves/EllipseCurve.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L120)

The rotation angle of the ellipse in radians, counterclockwise from the positive X axis.

#### Default

```ts
0
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`aRotation`](/reference/three/classes/ellipsecurve/#arotation)

***

### aStartAngle

> **aStartAngle**: `number`

Defined in: [three/src/extras/curves/EllipseCurve.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L96)

The start angle of the curve in radians starting from the positive X axis.

#### Default

```ts
0
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`aStartAngle`](/reference/three/classes/ellipsecurve/#astartangle)

***

### aX

> **aX**: `number`

Defined in: [three/src/extras/curves/EllipseCurve.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L62)

The X center of the ellipse.

#### Default

```ts
0
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`aX`](/reference/three/classes/ellipsecurve/#ax)

***

### aY

> **aY**: `number`

Defined in: [three/src/extras/curves/EllipseCurve.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L70)

The Y center of the ellipse.

#### Default

```ts
0
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`aY`](/reference/three/classes/ellipsecurve/#ay)

***

### isArcCurve

> `readonly` **isArcCurve**: `boolean`

Defined in: [three/src/extras/curves/ArcCurve.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/ArcCurve.js#L31)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isEllipseCurve

> `readonly` **isEllipseCurve**: `boolean`

Defined in: [three/src/extras/curves/EllipseCurve.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L52)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`isEllipseCurve`](/reference/three/classes/ellipsecurve/#isellipsecurve)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`needsUpdate`](/reference/three/classes/ellipsecurve/#needsupdate)

***

### type

> **type**: `string`

Defined in: [three/src/extras/curves/ArcCurve.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/ArcCurve.js#L33)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`type`](/reference/three/classes/ellipsecurve/#type)

***

### xRadius

> **xRadius**: `number`

Defined in: [three/src/extras/curves/EllipseCurve.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L79)

The radius of the ellipse in the x direction.
Setting the this value equal to the [EllipseCurve#yRadius](/reference/three/classes/ellipsecurve/#yradius) will result in a circle.

#### Default

```ts
1
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`xRadius`](/reference/three/classes/ellipsecurve/#xradius)

***

### yRadius

> **yRadius**: `number`

Defined in: [three/src/extras/curves/EllipseCurve.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L88)

The radius of the ellipse in the y direction.
Setting the this value equal to the [EllipseCurve#xRadius](/reference/three/classes/ellipsecurve/#xradius) will result in a circle.

#### Default

```ts
1
```

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`yRadius`](/reference/three/classes/ellipsecurve/#yradius)

## Methods

### clone()

> **clone**(): [`Curve`](/reference/three/classes/curve/)

Defined in: [three/src/extras/core/Curve.js:456](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L456)

Returns a new curve with copied values from this instance.

#### Returns

[`Curve`](/reference/three/classes/curve/)

A clone of this instance.

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`clone`](/reference/three/classes/ellipsecurve/#clone)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`computeFrenetFrames`](/reference/three/classes/ellipsecurve/#computefrenetframes)

***

### copy()

> **copy**(`source`): `ArcCurve`

Defined in: [three/src/extras/curves/EllipseCurve.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L193)

Copies the values of the given curve to this instance.

#### Parameters

##### source

`any`

The curve to copy.

#### Returns

`ArcCurve`

A reference to this curve.

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`copy`](/reference/three/classes/ellipsecurve/#copy)

***

### fromJSON()

> **fromJSON**(`json`): `ArcCurve`

Defined in: [three/src/extras/curves/EllipseCurve.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L235)

Deserializes the curve from the given JSON.

#### Parameters

##### json

`any`

The JSON holding the serialized curve.

#### Returns

`ArcCurve`

A reference to this curve.

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`fromJSON`](/reference/three/classes/ellipsecurve/#fromjson)

***

### getLength()

> **getLength**(): `number`

Defined in: [three/src/extras/core/Curve.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/core/Curve.js#L139)

Returns the total arc length of the curve.

#### Returns

`number`

The length of the curve.

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getLength`](/reference/three/classes/ellipsecurve/#getlength)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getLengths`](/reference/three/classes/ellipsecurve/#getlengths)

***

### getPoint()

> **getPoint**(`t`, `optionalTarget`?): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/extras/curves/EllipseCurve.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L131)

Returns a point on the curve.

#### Parameters

##### t

`number`

A interpolation factor representing a position on the curve. Must be in the range `[0,1]`.

##### optionalTarget?

[`Vector2`](/reference/three/classes/vector2/) = `...`

The optional target vector the result is written to.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

The position on the curve.

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getPoint`](/reference/three/classes/ellipsecurve/#getpoint)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getPointAt`](/reference/three/classes/ellipsecurve/#getpointat)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getPoints`](/reference/three/classes/ellipsecurve/#getpoints)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getSpacedPoints`](/reference/three/classes/ellipsecurve/#getspacedpoints)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getTangent`](/reference/three/classes/ellipsecurve/#gettangent)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getTangentAt`](/reference/three/classes/ellipsecurve/#gettangentat)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`getUtoTmapping`](/reference/three/classes/ellipsecurve/#getutotmapping)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/extras/curves/EllipseCurve.js:214](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/curves/EllipseCurve.js#L214)

Serializes the curve into JSON.

#### Returns

`any`

A JSON object representing the serialized curve.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

#### Inherited from

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`toJSON`](/reference/three/classes/ellipsecurve/#tojson)

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

[`EllipseCurve`](/reference/three/classes/ellipsecurve/).[`updateArcLengths`](/reference/three/classes/ellipsecurve/#updatearclengths)

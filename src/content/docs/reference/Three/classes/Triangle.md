---
editUrl: false
next: false
prev: false
title: "Triangle"
---

Defined in: [three/src/math/Triangle.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L23)

A geometric triangle as defined by three vectors representing its three corners.

## Constructors

### Constructor

> **new Triangle**(`a`?, `b`?, `c`?): `Triangle`

Defined in: [three/src/math/Triangle.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L32)

Constructs a new triangle.

#### Parameters

##### a?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The first corner of the triangle.

##### b?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The second corner of the triangle.

##### c?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The third corner of the triangle.

#### Returns

`Triangle`

## Properties

### a

> **a**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L39)

The first corner of the triangle.

***

### b

> **b**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L46)

The second corner of the triangle.

***

### c

> **c**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L53)

The third corner of the triangle.

## Methods

### clone()

> **clone**(): `Triangle`

Defined in: [three/src/math/Triangle.js:296](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L296)

Returns a new triangle with copied values from this instance.

#### Returns

`Triangle`

A clone of this instance.

***

### closestPointToPoint()

> **closestPointToPoint**(`p`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:444](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L444)

Returns the closest point on the triangle to the given point.

#### Parameters

##### p

[`Vector3`](/reference/three/classes/vector3/)

The point to compute the closest point for.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The closest point on the triangle.

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [three/src/math/Triangle.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L407)

Returns `true` if the given point, when projected onto the plane of the
triangle, lies within the triangle.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point in 3D space to test.

#### Returns

`boolean`

Whether the given point, when projected onto the plane of the
triangle, lies within the triangle or not.

***

### copy()

> **copy**(`triangle`): `Triangle`

Defined in: [three/src/math/Triangle.js:308](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L308)

Copies the values of the given triangle to this instance.

#### Parameters

##### triangle

`Triangle`

The triangle to copy.

#### Returns

`Triangle`

A reference to this triangle.

***

### equals()

> **equals**(`triangle`): `boolean`

Defined in: [three/src/math/Triangle.js:531](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L531)

Returns `true` if this triangle is equal with the given one.

#### Parameters

##### triangle

`Triangle`

The triangle to test for equality.

#### Returns

`boolean`

Whether this triangle is equal with the given one.

***

### getArea()

> **getArea**(): `number`

Defined in: [three/src/math/Triangle.js:323](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L323)

Computes the area of the triangle.

#### Returns

`number`

The triangle's area.

***

### getBarycoord()

> **getBarycoord**(`point`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:376](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L376)

Computes a barycentric coordinates from the given vector.
Returns `null` if the triangle is degenerate.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

A point in 3D space.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The barycentric coordinates for the given point

***

### getInterpolation()

> **getInterpolation**(`point`, `v1`, `v2`, `v3`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:393](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L393)

Computes the value barycentrically interpolated for the given point on the
triangle. Returns `null` if the triangle is degenerate.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

Position of interpolated point.

##### v1

[`Vector3`](/reference/three/classes/vector3/)

Value to interpolate of first vertex.

##### v2

[`Vector3`](/reference/three/classes/vector3/)

Value to interpolate of second vertex.

##### v3

[`Vector3`](/reference/three/classes/vector3/)

Value to interpolate of third vertex.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The interpolated value.

***

### getMidpoint()

> **getMidpoint**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L338)

Computes the midpoint of the triangle.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The triangle's midpoint.

***

### getNormal()

> **getNormal**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L350)

Computes the normal of the triangle.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The triangle's normal.

***

### getPlane()

> **getPlane**(`target`): `Plane`

Defined in: [three/src/math/Triangle.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L362)

Computes a plane the triangle lies within.

#### Parameters

##### target

`Plane`

The target vector that is used to store the method's result.

#### Returns

`Plane`

The plane the triangle lies within.

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [three/src/math/Triangle.js:431](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L431)

Returns `true` if this triangle intersects with the given box.

#### Parameters

##### box

`Box3`

The box to intersect.

#### Returns

`boolean`

Whether this triangle intersects with the given box or not.

***

### isFrontFacing()

> **isFrontFacing**(`direction`): `boolean`

Defined in: [three/src/math/Triangle.js:419](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L419)

Returns `true` if the triangle is oriented towards the given direction.

#### Parameters

##### direction

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) direction vector.

#### Returns

`boolean`

Whether the triangle is oriented towards the given direction or not.

***

### set()

> **set**(`a`, `b`, `c`): `Triangle`

Defined in: [three/src/math/Triangle.js:243](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L243)

Sets the triangle's vertices by copying the given values.

#### Parameters

##### a

[`Vector3`](/reference/three/classes/vector3/)

The first corner of the triangle.

##### b

[`Vector3`](/reference/three/classes/vector3/)

The second corner of the triangle.

##### c

[`Vector3`](/reference/three/classes/vector3/)

The third corner of the triangle.

#### Returns

`Triangle`

A reference to this triangle.

***

### setFromAttributeAndIndices()

> **setFromAttributeAndIndices**(`attribute`, `i0`, `i1`, `i2`): `Triangle`

Defined in: [three/src/math/Triangle.js:281](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L281)

Sets the triangle's vertices by copying the given attribute values.

#### Parameters

##### attribute

`BufferAttribute`

A buffer attribute with 3D points data.

##### i0

`number`

The attribute index representing the first corner of the triangle.

##### i1

`number`

The attribute index representing the second corner of the triangle.

##### i2

`number`

The attribute index representing the third corner of the triangle.

#### Returns

`Triangle`

A reference to this triangle.

***

### setFromPointsAndIndices()

> **setFromPointsAndIndices**(`points`, `i0`, `i1`, `i2`): `Triangle`

Defined in: [three/src/math/Triangle.js:262](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L262)

Sets the triangle's vertices by copying the given array values.

#### Parameters

##### points

[`Vector3`](/reference/three/classes/vector3/)[]

An array with 3D points.

##### i0

`number`

The array index representing the first corner of the triangle.

##### i1

`number`

The array index representing the second corner of the triangle.

##### i2

`number`

The array index representing the third corner of the triangle.

#### Returns

`Triangle`

A reference to this triangle.

***

### containsPoint()

> `static` **containsPoint**(`point`, `a`, `b`, `c`): `boolean`

Defined in: [three/src/math/Triangle.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L138)

Returns `true` if the given point, when projected onto the plane of the
triangle, lies within the triangle.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point in 3D space to test.

##### a

[`Vector3`](/reference/three/classes/vector3/)

The first corner of the triangle.

##### b

[`Vector3`](/reference/three/classes/vector3/)

The second corner of the triangle.

##### c

[`Vector3`](/reference/three/classes/vector3/)

The third corner of the triangle.

#### Returns

`boolean`

Whether the given point, when projected onto the plane of the
triangle, lies within the triangle or not.

***

### getBarycoord()

> `static` **getBarycoord**(`point`, `a`, `b`, `c`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L94)

Computes a barycentric coordinates from the given vector.
Returns `null` if the triangle is degenerate.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

A point in 3D space.

##### a

[`Vector3`](/reference/three/classes/vector3/)

The first corner of the triangle.

##### b

[`Vector3`](/reference/three/classes/vector3/)

The second corner of the triangle.

##### c

[`Vector3`](/reference/three/classes/vector3/)

The third corner of the triangle.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The barycentric coordinates for the given point

***

### getInterpolatedAttribute()

> `static` **getInterpolatedAttribute**(`attr`, `i1`, `i2`, `i3`, `barycoord`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:197](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L197)

Computes the value barycentrically interpolated for the given attribute and indices.

#### Parameters

##### attr

`BufferAttribute`

The attribute to interpolate.

##### i1

`number`

Index of first vertex.

##### i2

`number`

Index of second vertex.

##### i3

`number`

Index of third vertex.

##### barycoord

[`Vector3`](/reference/three/classes/vector3/)

The barycoordinate value to use to interpolate.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The interpolated attribute value.

***

### getInterpolation()

> `static` **getInterpolation**(`point`, `p1`, `p2`, `p3`, `v1`, `v2`, `v3`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:165](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L165)

Computes the value barycentrically interpolated for the given point on the
triangle. Returns `null` if the triangle is degenerate.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

Position of interpolated point.

##### p1

[`Vector3`](/reference/three/classes/vector3/)

The first corner of the triangle.

##### p2

[`Vector3`](/reference/three/classes/vector3/)

The second corner of the triangle.

##### p3

[`Vector3`](/reference/three/classes/vector3/)

The third corner of the triangle.

##### v1

[`Vector3`](/reference/three/classes/vector3/)

Value to interpolate of first vertex.

##### v2

[`Vector3`](/reference/three/classes/vector3/)

Value to interpolate of second vertex.

##### v3

[`Vector3`](/reference/three/classes/vector3/)

Value to interpolate of third vertex.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The interpolated value.

***

### getNormal()

> `static` **getNormal**(`a`, `b`, `c`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Triangle.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L66)

Computes the normal vector of a triangle.

#### Parameters

##### a

[`Vector3`](/reference/three/classes/vector3/)

The first corner of the triangle.

##### b

[`Vector3`](/reference/three/classes/vector3/)

The second corner of the triangle.

##### c

[`Vector3`](/reference/three/classes/vector3/)

The third corner of the triangle.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The triangle's normal.

***

### isFrontFacing()

> `static` **isFrontFacing**(`a`, `b`, `c`, `direction`): `boolean`

Defined in: [three/src/math/Triangle.js:225](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Triangle.js#L225)

Returns `true` if the triangle is oriented towards the given direction.

#### Parameters

##### a

[`Vector3`](/reference/three/classes/vector3/)

The first corner of the triangle.

##### b

[`Vector3`](/reference/three/classes/vector3/)

The second corner of the triangle.

##### c

[`Vector3`](/reference/three/classes/vector3/)

The third corner of the triangle.

##### direction

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) direction vector.

#### Returns

`boolean`

Whether the triangle is oriented towards the given direction or not.

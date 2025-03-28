---
editUrl: false
next: false
prev: false
title: "Box3"
---

Defined in: [three/src/math/Box3.js:6](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L6)

Represents an axis-aligned bounding box (AABB) in 3D space.

## Constructors

### Constructor

> **new Box3**(`min`?, `max`?): `Box3`

Defined in: [three/src/math/Box3.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L14)

Constructs a new bounding box.

#### Parameters

##### min?

[`Vector3`](/reference/three/classes/vector3/) = `...`

A vector representing the lower boundary of the box.

##### max?

[`Vector3`](/reference/three/classes/vector3/) = `...`

A vector representing the upper boundary of the box.

#### Returns

`Box3`

## Properties

### isBox3

> `readonly` **isBox3**: `boolean`

Defined in: [three/src/math/Box3.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L23)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### max

> **max**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Box3.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L37)

The upper boundary of the box.

***

### min

> **min**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Box3.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L30)

The lower boundary of the box.

## Methods

### applyMatrix4()

> **applyMatrix4**(`matrix`): `Box3`

Defined in: [three/src/math/Box3.js:668](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L668)

Transforms this bounding box by the given 4x4 transformation matrix.

#### Parameters

##### matrix

`Matrix4`

The transformation matrix.

#### Returns

`Box3`

A reference to this bounding box.

***

### clampPoint()

> **clampPoint**(`point`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Box3.js:581](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L581)

Clamps the given point within the bounds of this box.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to clamp.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The clamped point.

***

### clone()

> **clone**(): `Box3`

Defined in: [three/src/math/Box3.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L163)

Returns a new box with copied values from this instance.

#### Returns

`Box3`

A clone of this instance.

***

### containsBox()

> **containsBox**(`box`): `boolean`

Defined in: [three/src/math/Box3.js:403](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L403)

Returns `true` if this bounding box includes the entirety of the given bounding box.
If this box and the given one are identical, this function also returns `true`.

#### Parameters

##### box

`Box3`

The bounding box to test.

#### Returns

`boolean`

Whether the bounding box contains the given bounding box or not.

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [three/src/math/Box3.js:388](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L388)

Returns `true` if the given point lies within or on the boundaries of this box.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to test.

#### Returns

`boolean`

Whether the bounding box contains the given point or not.

***

### copy()

> **copy**(`box`): `Box3`

Defined in: [three/src/math/Box3.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L175)

Copies the values of the given box to this instance.

#### Parameters

##### box

`Box3`

The box to copy.

#### Returns

`Box3`

A reference to this bounding box.

***

### distanceToPoint()

> **distanceToPoint**(`point`): `number`

Defined in: [three/src/math/Box3.js:594](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L594)

Returns the euclidean distance from any edge of this box to the specified point. If
the given point lies inside of this box, the distance will be `0`.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to compute the distance to.

#### Returns

`number`

The euclidean distance.

***

### equals()

> **equals**(`box`): `boolean`

Defined in: [three/src/math/Box3.js:711](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L711)

Returns `true` if this bounding box is equal with the given one.

#### Parameters

##### box

`Box3`

The box to test for equality.

#### Returns

`boolean`

Whether this bounding box is equal with the given one.

***

### expandByObject()

> **expandByObject**(`object`, `precise`): `Box3`

Defined in: [three/src/math/Box3.js:298](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L298)

Expands the boundaries of this box to include the given 3D object and
its children, accounting for the object's, and children's, world
transforms. The function may result in a larger box than strictly
necessary (unless the precise parameter is set to true).

#### Parameters

##### object

`Object3D`

The 3D object that should expand the bounding box.

##### precise

`boolean` = `false`

If set to `true`, the method expands the bounding box
as little as necessary at the expense of more computation.

#### Returns

`Box3`

A reference to this bounding box.

***

### expandByPoint()

> **expandByPoint**(`point`): `Box3`

Defined in: [three/src/math/Box3.js:243](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L243)

Expands the boundaries of this box to include the given point.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point that should be included by the bounding box.

#### Returns

`Box3`

A reference to this bounding box.

***

### expandByScalar()

> **expandByScalar**(`scalar`): `Box3`

Defined in: [three/src/math/Box3.js:278](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L278)

Expands each dimension of the box by the given scalar. If negative, the
dimensions of the box will be contracted.

#### Parameters

##### scalar

`number`

The scalar value that should expand the bounding box.

#### Returns

`Box3`

A reference to this bounding box.

***

### expandByVector()

> **expandByVector**(`vector`): `Box3`

Defined in: [three/src/math/Box3.js:262](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L262)

Expands this box equilaterally by the given vector. The width of this
box will be expanded by the x component of the vector in both
directions. The height of this box will be expanded by the y component of
the vector in both directions. The depth of this box will be
expanded by the z component of the vector in both directions.

#### Parameters

##### vector

[`Vector3`](/reference/three/classes/vector3/)

The vector that should expand the bounding box.

#### Returns

`Box3`

A reference to this bounding box.

***

### getBoundingSphere()

> **getBoundingSphere**(`target`): `Sphere`

Defined in: [three/src/math/Box3.js:606](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L606)

Returns a bounding sphere that encloses this bounding box.

#### Parameters

##### target

`Sphere`

The target sphere that is used to store the method's result.

#### Returns

`Sphere`

The bounding sphere that encloses this bounding box.

***

### getCenter()

> **getCenter**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Box3.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L219)

Returns the center point of this box.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The center point.

***

### getParameter()

> **getParameter**(`point`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Box3.js:418](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L418)

Returns a point as a proportion of this box's width, height and depth.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

A point in 3D space.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

A point as a proportion of this box's width, height and depth.

***

### getSize()

> **getSize**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Box3.js:231](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L231)

Returns the dimensions of this box.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The size.

***

### intersect()

> **intersect**(`box`): `Box3`

Defined in: [three/src/math/Box3.js:633](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L633)

Computes the intersection of this bounding box and the given one, setting the upper
bound of this box to the lesser of the two boxes' upper bounds and the
lower bound of this box to the greater of the two boxes' lower bounds. If
there's no overlap, makes this box empty.

#### Parameters

##### box

`Box3`

The bounding box to intersect with.

#### Returns

`Box3`

A reference to this bounding box.

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [three/src/math/Box3.js:437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L437)

Returns `true` if the given bounding box intersects with this bounding box.

#### Parameters

##### box

`Box3`

The bounding box to test.

#### Returns

`boolean`

Whether the given bounding box intersects with this bounding box.

***

### intersectsPlane()

> **intersectsPlane**(`plane`): `boolean`

Defined in: [three/src/math/Box3.js:468](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L468)

Returns `true` if the given plane intersects with this bounding box.

#### Parameters

##### plane

`Plane`

The plane to test.

#### Returns

`boolean`

Whether the given plane intersects with this bounding box.

***

### intersectsSphere()

> **intersectsSphere**(`sphere`): `boolean`

Defined in: [three/src/math/Box3.js:452](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L452)

Returns `true` if the given bounding sphere intersects with this bounding box.

#### Parameters

##### sphere

`Sphere`

The bounding sphere to test.

#### Returns

`boolean`

Whether the given bounding sphere intersects with this bounding box.

***

### intersectsTriangle()

> **intersectsTriangle**(`triangle`): `boolean`

Defined in: [three/src/math/Box3.js:521](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L521)

Returns `true` if the given triangle intersects with this bounding box.

#### Parameters

##### triangle

`Triangle`

The triangle to test.

#### Returns

`boolean`

Whether the given triangle intersects with this bounding box.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [three/src/math/Box3.js:205](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L205)

Returns true if this box includes zero points within its bounds.
Note that a box with equal lower and upper bounds still includes one
point, the one both bounds share.

#### Returns

`boolean`

Whether this box is empty or not.

***

### makeEmpty()

> **makeEmpty**(): `Box3`

Defined in: [three/src/math/Box3.js:189](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L189)

Makes this box empty which means in encloses a zero space in 3D.

#### Returns

`Box3`

A reference to this bounding box.

***

### set()

> **set**(`min`, `max`): `Box3`

Defined in: [three/src/math/Box3.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L49)

Sets the lower and upper boundaries of this box.
Please note that this method only copies the values from the given objects.

#### Parameters

##### min

[`Vector3`](/reference/three/classes/vector3/)

The lower boundary of the box.

##### max

[`Vector3`](/reference/three/classes/vector3/)

The upper boundary of the box.

#### Returns

`Box3`

A reference to this bounding box.

***

### setFromArray()

> **setFromArray**(`array`): `Box3`

Defined in: [three/src/math/Box3.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L65)

Sets the upper and lower bounds of this box so it encloses the position data
in the given array.

#### Parameters

##### array

`number`[]

An array holding 3D position data.

#### Returns

`Box3`

A reference to this bounding box.

***

### setFromBufferAttribute()

> **setFromBufferAttribute**(`attribute`): `Box3`

Defined in: [three/src/math/Box3.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L86)

Sets the upper and lower bounds of this box so it encloses the position data
in the given buffer attribute.

#### Parameters

##### attribute

`BufferAttribute`

A buffer attribute holding 3D position data.

#### Returns

`Box3`

A reference to this bounding box.

***

### setFromCenterAndSize()

> **setFromCenterAndSize**(`center`, `size`): `Box3`

Defined in: [three/src/math/Box3.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L129)

Centers this box on the given center vector and sets this box's width, height and
depth to the given size values.

#### Parameters

##### center

[`Vector3`](/reference/three/classes/vector3/)

The center of the box.

##### size

[`Vector3`](/reference/three/classes/vector3/)

The x, y and z dimensions of the box.

#### Returns

`Box3`

A reference to this bounding box.

***

### setFromObject()

> **setFromObject**(`object`, `precise`?): `Box3`

Defined in: [three/src/math/Box3.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L150)

Computes the world-axis-aligned bounding box for the given 3D object
(including its children), accounting for the object's, and children's,
world transforms. The function may result in a larger box than strictly necessary.

#### Parameters

##### object

`Object3D`

The 3D object to compute the bounding box for.

##### precise?

`boolean` = `false`

If set to `true`, the method computes the smallest
world-axis-aligned bounding box at the expense of more computation.

#### Returns

`Box3`

A reference to this bounding box.

***

### setFromPoints()

> **setFromPoints**(`points`): `Box3`

Defined in: [three/src/math/Box3.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L107)

Sets the upper and lower bounds of this box so it encloses the position data
in the given array.

#### Parameters

##### points

[`Vector3`](/reference/three/classes/vector3/)[]

An array holding 3D position data as instances of [Vector3](/reference/three/classes/vector3/).

#### Returns

`Box3`

A reference to this bounding box.

***

### translate()

> **translate**(`offset`): `Box3`

Defined in: [three/src/math/Box3.js:696](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L696)

Adds the given offset to both the upper and lower bounds of this bounding box,
effectively moving it in 3D space.

#### Parameters

##### offset

[`Vector3`](/reference/three/classes/vector3/)

The offset that should be used to translate the bounding box.

#### Returns

`Box3`

A reference to this bounding box.

***

### union()

> **union**(`box`): `Box3`

Defined in: [three/src/math/Box3.js:653](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box3.js#L653)

Computes the union of this box and another and the given one, setting the upper
bound of this box to the greater of the two boxes' upper bounds and the
lower bound of this box to the lesser of the two boxes' lower bounds.

#### Parameters

##### box

`Box3`

The bounding box that will be unioned with this instance.

#### Returns

`Box3`

A reference to this bounding box.

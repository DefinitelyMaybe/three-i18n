---
editUrl: false
next: false
prev: false
title: "Box2"
---

Defined in: [three/src/math/Box2.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L8)

Represents an axis-aligned bounding box (AABB) in 2D space.

## Constructors

### Constructor

> **new Box2**(`min`?, `max`?): `Box2`

Defined in: [three/src/math/Box2.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L16)

Constructs a new bounding box.

#### Parameters

##### min?

[`Vector2`](/reference/three/classes/vector2/) = `...`

A vector representing the lower boundary of the box.

##### max?

[`Vector2`](/reference/three/classes/vector2/) = `...`

A vector representing the upper boundary of the box.

#### Returns

`Box2`

## Properties

### isBox2

> `readonly` **isBox2**: `boolean`

Defined in: [three/src/math/Box2.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L25)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### max

> **max**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/math/Box2.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L39)

The upper boundary of the box.

***

### min

> **min**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/math/Box2.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L32)

The lower boundary of the box.

## Methods

### clampPoint()

> **clampPoint**(`point`, `target`): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/math/Box2.js:295](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L295)

Clamps the given point within the bounds of this box.

#### Parameters

##### point

[`Vector2`](/reference/three/classes/vector2/)

The point to clamp.

##### target

[`Vector2`](/reference/three/classes/vector2/)

The target vector that is used to store the method's result.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

The clamped point.

***

### clone()

> **clone**(): `Box2`

Defined in: [three/src/math/Box2.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L104)

Returns a new box with copied values from this instance.

#### Returns

`Box2`

A clone of this instance.

***

### containsBox()

> **containsBox**(`box`): `boolean`

Defined in: [three/src/math/Box2.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L247)

Returns `true` if this bounding box includes the entirety of the given bounding box.
If this box and the given one are identical, this function also returns `true`.

#### Parameters

##### box

`Box2`

The bounding box to test.

#### Returns

`boolean`

Whether the bounding box contains the given bounding box or not.

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [three/src/math/Box2.js:233](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L233)

Returns `true` if the given point lies within or on the boundaries of this box.

#### Parameters

##### point

[`Vector2`](/reference/three/classes/vector2/)

The point to test.

#### Returns

`boolean`

Whether the bounding box contains the given point or not.

***

### copy()

> **copy**(`box`): `Box2`

Defined in: [three/src/math/Box2.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L116)

Copies the values of the given box to this instance.

#### Parameters

##### box

`Box2`

The box to copy.

#### Returns

`Box2`

A reference to this bounding box.

***

### distanceToPoint()

> **distanceToPoint**(`point`): `number`

Defined in: [three/src/math/Box2.js:308](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L308)

Returns the euclidean distance from any edge of this box to the specified point. If
the given point lies inside of this box, the distance will be `0`.

#### Parameters

##### point

[`Vector2`](/reference/three/classes/vector2/)

The point to compute the distance to.

#### Returns

`number`

The euclidean distance.

***

### equals()

> **equals**(`box`): `boolean`

Defined in: [three/src/math/Box2.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L373)

Returns `true` if this bounding box is equal with the given one.

#### Parameters

##### box

`Box2`

The box to test for equality.

#### Returns

`boolean`

Whether this bounding box is equal with the given one.

***

### expandByPoint()

> **expandByPoint**(`point`): `Box2`

Defined in: [three/src/math/Box2.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L184)

Expands the boundaries of this box to include the given point.

#### Parameters

##### point

[`Vector2`](/reference/three/classes/vector2/)

The point that should be included by the bounding box.

#### Returns

`Box2`

A reference to this bounding box.

***

### expandByScalar()

> **expandByScalar**(`scalar`): `Box2`

Defined in: [three/src/math/Box2.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L218)

Expands each dimension of the box by the given scalar. If negative, the
dimensions of the box will be contracted.

#### Parameters

##### scalar

`number`

The scalar value that should expand the bounding box.

#### Returns

`Box2`

A reference to this bounding box.

***

### expandByVector()

> **expandByVector**(`vector`): `Box2`

Defined in: [three/src/math/Box2.js:202](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L202)

Expands this box equilaterally by the given vector. The width of this
box will be expanded by the x component of the vector in both
directions. The height of this box will be expanded by the y component of
the vector in both directions.

#### Parameters

##### vector

[`Vector2`](/reference/three/classes/vector2/)

The vector that should expand the bounding box.

#### Returns

`Box2`

A reference to this bounding box.

***

### getCenter()

> **getCenter**(`target`): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/math/Box2.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L160)

Returns the center point of this box.

#### Parameters

##### target

[`Vector2`](/reference/three/classes/vector2/)

The target vector that is used to store the method's result.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

The center point.

***

### getParameter()

> **getParameter**(`point`, `target`): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/math/Box2.js:261](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L261)

Returns a point as a proportion of this box's width and height.

#### Parameters

##### point

[`Vector2`](/reference/three/classes/vector2/)

A point in 2D space.

##### target

[`Vector2`](/reference/three/classes/vector2/)

The target vector that is used to store the method's result.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

A point as a proportion of this box's width and height.

***

### getSize()

> **getSize**(`target`): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/math/Box2.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L172)

Returns the dimensions of this box.

#### Parameters

##### target

[`Vector2`](/reference/three/classes/vector2/)

The target vector that is used to store the method's result.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

The size.

***

### intersect()

> **intersect**(`box`): `Box2`

Defined in: [three/src/math/Box2.js:323](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L323)

Computes the intersection of this bounding box and the given one, setting the upper
bound of this box to the lesser of the two boxes' upper bounds and the
lower bound of this box to the greater of the two boxes' lower bounds. If
there's no overlap, makes this box empty.

#### Parameters

##### box

`Box2`

The bounding box to intersect with.

#### Returns

`Box2`

A reference to this bounding box.

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [three/src/math/Box2.js:279](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L279)

Returns `true` if the given bounding box intersects with this bounding box.

#### Parameters

##### box

`Box2`

The bounding box to test.

#### Returns

`boolean`

Whether the given bounding box intersects with this bounding box.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [three/src/math/Box2.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L146)

Returns true if this box includes zero points within its bounds.
Note that a box with equal lower and upper bounds still includes one
point, the one both bounds share.

#### Returns

`boolean`

Whether this box is empty or not.

***

### makeEmpty()

> **makeEmpty**(): `Box2`

Defined in: [three/src/math/Box2.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L130)

Makes this box empty which means in encloses a zero space in 2D.

#### Returns

`Box2`

A reference to this bounding box.

***

### set()

> **set**(`min`, `max`): `Box2`

Defined in: [three/src/math/Box2.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L51)

Sets the lower and upper boundaries of this box.
Please note that this method only copies the values from the given objects.

#### Parameters

##### min

[`Vector2`](/reference/three/classes/vector2/)

The lower boundary of the box.

##### max

[`Vector2`](/reference/three/classes/vector2/)

The upper boundary of the box.

#### Returns

`Box2`

A reference to this bounding box.

***

### setFromCenterAndSize()

> **setFromCenterAndSize**(`center`, `size`): `Box2`

Defined in: [three/src/math/Box2.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L89)

Centers this box on the given center vector and sets this box's width, height and
depth to the given size values.

#### Parameters

##### center

[`Vector2`](/reference/three/classes/vector2/)

The center of the box.

##### size

[`Vector2`](/reference/three/classes/vector2/)

The x and y dimensions of the box.

#### Returns

`Box2`

A reference to this bounding box.

***

### setFromPoints()

> **setFromPoints**(`points`): `Box2`

Defined in: [three/src/math/Box2.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L67)

Sets the upper and lower bounds of this box so it encloses the position data
in the given array.

#### Parameters

##### points

[`Vector2`](/reference/three/classes/vector2/)[]

An array holding 2D position data as instances of [Vector2](/reference/three/classes/vector2/).

#### Returns

`Box2`

A reference to this bounding box.

***

### translate()

> **translate**(`offset`): `Box2`

Defined in: [three/src/math/Box2.js:358](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L358)

Adds the given offset to both the upper and lower bounds of this bounding box,
effectively moving it in 2D space.

#### Parameters

##### offset

[`Vector2`](/reference/three/classes/vector2/)

The offset that should be used to translate the bounding box.

#### Returns

`Box2`

A reference to this bounding box.

***

### union()

> **union**(`box`): `Box2`

Defined in: [three/src/math/Box2.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Box2.js#L342)

Computes the union of this box and another and the given one, setting the upper
bound of this box to the greater of the two boxes' upper bounds and the
lower bound of this box to the lesser of the two boxes' lower bounds.

#### Parameters

##### box

`Box2`

The bounding box that will be unioned with this instance.

#### Returns

`Box2`

A reference to this bounding box.

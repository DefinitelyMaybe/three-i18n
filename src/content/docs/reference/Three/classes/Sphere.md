---
editUrl: false
next: false
prev: false
title: "Sphere"
---

Defined in: [three/src/math/Sphere.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L12)

An analytical 3D sphere defined by a center and radius. This class is mainly
used as a Bounding Sphere for 3D objects.

## Constructors

### Constructor

> **new Sphere**(`center`?, `radius`?): `Sphere`

Defined in: [three/src/math/Sphere.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L20)

Constructs a new sphere.

#### Parameters

##### center?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The center of the sphere

##### radius?

`number` = `- 1`

The radius of the sphere.

#### Returns

`Sphere`

## Properties

### center

> **center**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Sphere.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L36)

The center of the sphere

***

### isSphere

> `readonly` **isSphere**: `boolean`

Defined in: [three/src/math/Sphere.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L29)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### radius

> **radius**: `number`

Defined in: [three/src/math/Sphere.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L43)

The radius of the sphere.

## Methods

### applyMatrix4()

> **applyMatrix4**(`matrix`): `Sphere`

Defined in: [three/src/math/Sphere.js:264](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L264)

Transforms this sphere with the given 4x4 transformation matrix.

#### Parameters

##### matrix

`Matrix4`

The transformation matrix.

#### Returns

`Sphere`

A reference to this sphere.

***

### clampPoint()

> **clampPoint**(`point`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Sphere.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L218)

Clamps a point within the sphere. If the point is outside the sphere, it
will clamp it to the closest point on the edge of the sphere. Points
already inside the sphere will not be affected.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The plane to clamp.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The clamped point.

***

### clone()

> **clone**(): `Sphere`

Defined in: [three/src/math/Sphere.js:384](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L384)

Returns a new sphere with copied values from this instance.

#### Returns

`Sphere`

A clone of this instance.

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [three/src/math/Sphere.js:151](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L151)

Returns `true` if this sphere contains the given point inclusive of
the surface of the sphere.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to check.

#### Returns

`boolean`

Whether this sphere contains the given point or not.

***

### copy()

> **copy**(`sphere`): `Sphere`

Defined in: [three/src/math/Sphere.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L107)

Copies the values of the given sphere to this instance.

#### Parameters

##### sphere

`Sphere`

The sphere to copy.

#### Returns

`Sphere`

A reference to this sphere.

***

### distanceToPoint()

> **distanceToPoint**(`point`): `number`

Defined in: [three/src/math/Sphere.js:165](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L165)

Returns the closest distance from the boundary of the sphere to the
given point. If the sphere contains the point, the distance will
be negative.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to compute the distance to.

#### Returns

`number`

The distance to the point.

***

### equals()

> **equals**(`sphere`): `boolean`

Defined in: [three/src/math/Sphere.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L373)

Returns `true` if this sphere is equal with the given one.

#### Parameters

##### sphere

`Sphere`

The sphere to test for equality.

#### Returns

`boolean`

Whether this bounding sphere is equal with the given one.

***

### expandByPoint()

> **expandByPoint**(`point`): `Sphere`

Defined in: [three/src/math/Sphere.js:293](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L293)

Expands the boundaries of this sphere to include the given point.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to include.

#### Returns

`Sphere`

A reference to this sphere.

***

### getBoundingBox()

> **getBoundingBox**(`target`): [`Box3`](/reference/three/classes/box3/)

Defined in: [three/src/math/Sphere.js:241](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L241)

Returns a bounding box that encloses this sphere.

#### Parameters

##### target

[`Box3`](/reference/three/classes/box3/)

The target box that is used to store the method's result.

#### Returns

[`Box3`](/reference/three/classes/box3/)

The bounding box that encloses this sphere.

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [three/src/math/Sphere.js:191](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L191)

Returns `true` if this sphere intersects with the given box.

#### Parameters

##### box

[`Box3`](/reference/three/classes/box3/)

The box to test.

#### Returns

`boolean`

Whether this sphere intersects with the given box or not.

***

### intersectsPlane()

> **intersectsPlane**(`plane`): `boolean`

Defined in: [three/src/math/Sphere.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L203)

Returns `true` if this sphere intersects with the given plane.

#### Parameters

##### plane

`Plane`

The plane to test.

#### Returns

`boolean`

Whether this sphere intersects with the given plane or not.

***

### intersectsSphere()

> **intersectsSphere**(`sphere`): `boolean`

Defined in: [three/src/math/Sphere.js:177](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L177)

Returns `true` if this sphere intersects with the given one.

#### Parameters

##### sphere

`Sphere`

The sphere to test.

#### Returns

`boolean`

Whether this sphere intersects with the given one or not.

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [three/src/math/Sphere.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L124)

Returns `true` if the sphere is empty (the radius set to a negative number).

Spheres with a radius of `0` contain only their center point and are not
considered to be empty.

#### Returns

`boolean`

Whether this sphere is empty or not.

***

### makeEmpty()

> **makeEmpty**(): `Sphere`

Defined in: [three/src/math/Sphere.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L135)

Makes this sphere empty which means in encloses a zero space in 3D.

#### Returns

`Sphere`

A reference to this sphere.

***

### set()

> **set**(`center`, `radius`): `Sphere`

Defined in: [three/src/math/Sphere.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L54)

Sets the sphere's components by copying the given values.

#### Parameters

##### center

[`Vector3`](/reference/three/classes/vector3/)

The center.

##### radius

`number`

The radius.

#### Returns

`Sphere`

A reference to this sphere.

***

### setFromPoints()

> **setFromPoints**(`points`, `optionalCenter`?): `Sphere`

Defined in: [three/src/math/Sphere.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L73)

Computes the minimum bounding sphere for list of points.
If the optional center point is given, it is used as the sphere's
center. Otherwise, the center of the axis-aligned bounding box
encompassing the points is calculated.

#### Parameters

##### points

[`Vector3`](/reference/three/classes/vector3/)[]

A list of points in 3D space.

##### optionalCenter?

[`Vector3`](/reference/three/classes/vector3/)

The center of the sphere.

#### Returns

`Sphere`

A reference to this sphere.

***

### translate()

> **translate**(`offset`): `Sphere`

Defined in: [three/src/math/Sphere.js:279](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L279)

Translates the sphere's center by the given offset.

#### Parameters

##### offset

[`Vector3`](/reference/three/classes/vector3/)

The offset.

#### Returns

`Sphere`

A reference to this sphere.

***

### union()

> **union**(`sphere`): `Sphere`

Defined in: [three/src/math/Sphere.js:333](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Sphere.js#L333)

Expands this sphere to enclose both the original sphere and the given sphere.

#### Parameters

##### sphere

`Sphere`

The sphere to include.

#### Returns

`Sphere`

A reference to this sphere.

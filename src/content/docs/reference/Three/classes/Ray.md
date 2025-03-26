---
editUrl: false
next: false
prev: false
title: "Ray"
---

Defined in: [three/src/math/Ray.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L18)

A ray that emits from an origin in a certain direction. The class is used by
[Raycaster](/reference/three/classes/raycaster/) to assist with raycasting. Raycasting is used for
mouse picking (working out what objects in the 3D space the mouse is over)
amongst other things.

## Constructors

### Constructor

> **new Ray**(`origin`?, `direction`?): `Ray`

Defined in: [three/src/math/Ray.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L26)

Constructs a new ray.

#### Parameters

##### origin?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The origin of the ray.

##### direction?

[`Vector3`](/reference/three/classes/vector3/) = `...`

The (normalized) direction of the ray.

#### Returns

`Ray`

## Properties

### direction

> **direction**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Ray.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L40)

The (normalized) direction of the ray.

***

### origin

> **origin**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Ray.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L33)

The origin of the ray.

## Methods

### applyMatrix4()

> **applyMatrix4**(`matrix4`): `Ray`

Defined in: [three/src/math/Ray.js:619](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L619)

Transforms this ray with the given 4x4 transformation matrix.

#### Parameters

##### matrix4

`Matrix4`

The transformation matrix.

#### Returns

`Ray`

A reference to this ray.

***

### at()

> **at**(`t`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Ray.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L82)

Returns a vector that is located at a given distance along this ray.

#### Parameters

##### t

`number`

The distance along the ray to retrieve a position for.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

A position on the ray.

***

### clone()

> **clone**(): `Ray`

Defined in: [three/src/math/Ray.js:645](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L645)

Returns a new ray with copied values from this instance.

#### Returns

`Ray`

A clone of this instance.

***

### closestPointToPoint()

> **closestPointToPoint**(`point`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Ray.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L123)

Returns the point along this ray that is closest to the given point.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

A point in 3D space to get the closet location on the ray for.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The closest point on this ray.

***

### copy()

> **copy**(`ray`): `Ray`

Defined in: [three/src/math/Ray.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L66)

Copies the values of the given ray to this instance.

#### Parameters

##### ray

`Ray`

The ray to copy.

#### Returns

`Ray`

A reference to this ray.

***

### distanceSqToPoint()

> **distanceSqToPoint**(`point`): `number`

Defined in: [three/src/math/Ray.js:157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L157)

Returns the squared distance of the closest approach between this ray and the given point.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

A point in 3D space to compute the distance to.

#### Returns

`number`

The squared distance.

***

### distanceSqToSegment()

> **distanceSqToSegment**(`v0`, `v1`, `optionalPointOnRay`?, `optionalPointOnSegment`?): `number`

Defined in: [three/src/math/Ray.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L184)

Returns the squared distance between this ray and the given line segment.

#### Parameters

##### v0

[`Vector3`](/reference/three/classes/vector3/)

The start point of the line segment.

##### v1

[`Vector3`](/reference/three/classes/vector3/)

The end point of the line segment.

##### optionalPointOnRay?

[`Vector3`](/reference/three/classes/vector3/)

When provided, it receives the point on this ray that is closest to the segment.

##### optionalPointOnSegment?

[`Vector3`](/reference/three/classes/vector3/)

When provided, it receives the point on the line segment that is closest to this ray.

#### Returns

`number`

The squared distance.

***

### distanceToPlane()

> **distanceToPlane**(`plane`): `number`

Defined in: [three/src/math/Ray.js:360](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L360)

Computes the distance from the ray's origin to the given plane. Returns `null` if the ray
does not intersect with the plane.

#### Parameters

##### plane

`Plane`

The plane to compute the distance to.

#### Returns

`number`

Whether this ray intersects with the given sphere or not.

***

### distanceToPoint()

> **distanceToPoint**(`point`): `number`

Defined in: [three/src/math/Ray.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L145)

Returns the distance of the closest approach between this ray and the given point.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

A point in 3D space to compute the distance to.

#### Returns

`number`

The distance.

***

### equals()

> **equals**(`ray`): `boolean`

Defined in: [three/src/math/Ray.js:634](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L634)

Returns `true` if this ray is equal with the given one.

#### Parameters

##### ray

`Ray`

The ray to test for equality.

#### Returns

`boolean`

Whether this ray is equal with the given one.

***

### intersectBox()

> **intersectBox**(`box`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Ray.js:449](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L449)

Intersects this ray with the given bounding box, returning the intersection
point or `null` if there is no intersection.

#### Parameters

##### box

`Box3`

The box to intersect.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The intersection point.

***

### intersectPlane()

> **intersectPlane**(`plane`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Ray.js:395](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L395)

Intersects this ray with the given plane, returning the intersection
point or `null` if there is no intersection.

#### Parameters

##### plane

`Plane`

The plane to intersect.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The intersection point.

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [three/src/math/Ray.js:521](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L521)

Returns `true` if this ray intersects with the given box.

#### Parameters

##### box

`Box3`

The box to intersect.

#### Returns

`boolean`

Whether this ray intersects with the given box or not.

***

### intersectSphere()

> **intersectSphere**(`sphere`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Ray.js:311](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L311)

Intersects this ray with the given sphere, returning the intersection
point or `null` if there is no intersection.

#### Parameters

##### sphere

`Sphere`

The sphere to intersect.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The intersection point.

***

### intersectsPlane()

> **intersectsPlane**(`plane`): `boolean`

Defined in: [three/src/math/Ray.js:415](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L415)

Returns `true` if this ray intersects with the given plane.

#### Parameters

##### plane

`Plane`

The plane to intersect.

#### Returns

`boolean`

Whether this ray intersects with the given plane or not.

***

### intersectsSphere()

> **intersectsSphere**(`sphere`): `boolean`

Defined in: [three/src/math/Ray.js:347](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L347)

Returns `true` if this ray intersects with the given sphere.

#### Parameters

##### sphere

`Sphere`

The sphere to intersect.

#### Returns

`boolean`

Whether this ray intersects with the given sphere or not.

***

### intersectTriangle()

> **intersectTriangle**(`a`, `b`, `c`, `backfaceCulling`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Ray.js:538](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L538)

Intersects this ray with the given triangle, returning the intersection
point or `null` if there is no intersection.

#### Parameters

##### a

[`Vector3`](/reference/three/classes/vector3/)

The first vertex of the triangle.

##### b

[`Vector3`](/reference/three/classes/vector3/)

The second vertex of the triangle.

##### c

[`Vector3`](/reference/three/classes/vector3/)

The third vertex of the triangle.

##### backfaceCulling

`boolean`

Whether to use backface culling or not.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The intersection point.

***

### lookAt()

> **lookAt**(`v`): `Ray`

Defined in: [three/src/math/Ray.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L94)

Adjusts the direction of the ray to point at the given vector in world space.

#### Parameters

##### v

[`Vector3`](/reference/three/classes/vector3/)

The target position.

#### Returns

`Ray`

A reference to this ray.

***

### recast()

> **recast**(`t`): `Ray`

Defined in: [three/src/math/Ray.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L108)

Shift the origin of this ray along its direction by the given distance.

#### Parameters

##### t

`number`

The distance along the ray to interpolate.

#### Returns

`Ray`

A reference to this ray.

***

### set()

> **set**(`origin`, `direction`): `Ray`

Defined in: [three/src/math/Ray.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Ray.js#L51)

Sets the ray's components by copying the given values.

#### Parameters

##### origin

[`Vector3`](/reference/three/classes/vector3/)

The origin.

##### direction

[`Vector3`](/reference/three/classes/vector3/)

The direction.

#### Returns

`Ray`

A reference to this ray.

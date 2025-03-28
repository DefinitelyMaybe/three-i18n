---
editUrl: false
next: false
prev: false
title: "OBB"
---

Defined in: [three/addons/math/OBB.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L43)

Represents an oriented bounding box (OBB) in 3D space.

## Constructors

### Constructor

> **new OBB**(`center`?, `halfSize`?, `rotation`?): `OBB`

Defined in: [three/addons/math/OBB.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L52)

Constructs a new OBB.

#### Parameters

##### center?

`Vector3` = `...`

The center of the OBB.

##### halfSize?

`Vector3` = `...`

Positive halfwidth extents of the OBB along each axis.

##### rotation?

`Matrix3` = `...`

The rotation of the OBB.

#### Returns

`OBB`

## Properties

### center

> **center**: `Vector3`

Defined in: [three/addons/math/OBB.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L59)

The center of the OBB.

***

### halfSize

> **halfSize**: `Vector3`

Defined in: [three/addons/math/OBB.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L66)

Positive halfwidth extents of the OBB along each axis.

***

### rotation

> **rotation**: `Matrix3`

Defined in: [three/addons/math/OBB.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L73)

The rotation of the OBB.

## Methods

### applyMatrix4()

> **applyMatrix4**(`matrix`): `OBB`

Defined in: [three/addons/math/OBB.js:487](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L487)

Applies the given transformation matrix to this OBB. This method can be
used to transform the bounding volume with the world matrix of a 3D object
in order to keep both entities in sync.

#### Parameters

##### matrix

`Matrix4`

The matrix to apply.

#### Returns

`OBB`

A reference of this OBB.

***

### clampPoint()

> **clampPoint**(`point`, `target`): `Vector3`

Defined in: [three/addons/math/OBB.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L141)

Clamps the given point within the bounds of this OBB.

#### Parameters

##### point

`Vector3`

The point that should be clamped within the bounds of this OBB.

##### target

`Vector3`

The target vector that is used to store the method's result.

#### Returns

`Vector3`

- The clamped point.

***

### clone()

> **clone**(): `OBB`

Defined in: [three/addons/math/OBB.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L116)

Returns a new OBB with copied values from this instance.

#### Returns

`OBB`

A clone of this instance.

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [three/addons/math/OBB.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L176)

Returns `true` if the given point lies within this OBB.

#### Parameters

##### point

`Vector3`

The point to test.

#### Returns

`boolean`

- Whether the given point lies within this OBB or not.

***

### copy()

> **copy**(`obb`): `OBB`

Defined in: [three/addons/math/OBB.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L101)

Copies the values of the given OBB to this instance.

#### Parameters

##### obb

`OBB`

The OBB to copy.

#### Returns

`OBB`

A reference to this OBB.

***

### equals()

> **equals**(`obb`): `boolean`

Defined in: [three/addons/math/OBB.js:471](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L471)

Returns `true` if the given OBB is equal to this OBB.

#### Parameters

##### obb

`OBB`

The OBB to test.

#### Returns

`boolean`

Whether the given OBB is equal to this OBB or not.

***

### fromBox3()

> **fromBox3**(`box3`): `OBB`

Defined in: [three/addons/math/OBB.js:453](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L453)

Defines an OBB based on the given AABB.

#### Parameters

##### box3

`Box3`

The AABB to setup the OBB from.

#### Returns

`OBB`

A reference of this OBB.

***

### getSize()

> **getSize**(`target`): `Vector3`

Defined in: [three/addons/math/OBB.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L128)

Returns the size of this OBB.

#### Parameters

##### target

`Vector3`

The target vector that is used to store the method's result.

#### Returns

`Vector3`

The size.

***

### intersectRay()

> **intersectRay**(`ray`, `target`): `Vector3`

Defined in: [three/addons/math/OBB.js:401](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L401)

Performs a ray/OBB intersection test and stores the intersection point
in the given 3D vector.

#### Parameters

##### ray

`Ray`

The ray to test.

##### target

`Vector3`

The target vector that is used to store the method's result.

#### Returns

`Vector3`

The intersection point. If no intersection is detected, `null` is returned.

***

### intersectsBox3()

> **intersectsBox3**(`box3`): `boolean`

Defined in: [three/addons/math/OBB.js:195](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L195)

Returns `true` if the given AABB intersects this OBB.

#### Parameters

##### box3

`Box3`

The AABB to test.

#### Returns

`boolean`

- Whether the given AABB intersects this OBB or not.

***

### intersectsOBB()

> **intersectsOBB**(`obb`, `epsilon`?): `boolean`

Defined in: [three/addons/math/OBB.js:226](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L226)

Returns `true` if the given OBB intersects this OBB.

#### Parameters

##### obb

`OBB`

The OBB to test.

##### epsilon?

`number` = `Number.EPSILON`

A small value to prevent arithmetic errors.

#### Returns

`boolean`

- Whether the given OBB intersects this OBB or not.

***

### intersectsPlane()

> **intersectsPlane**(`plane`): `boolean`

Defined in: [three/addons/math/OBB.js:370](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L370)

Returns `true` if the given plane intersects this OBB.

#### Parameters

##### plane

`Plane`

The plane to test.

#### Returns

`boolean`

Whether the given plane intersects this OBB or not.

***

### intersectsRay()

> **intersectsRay**(`ray`): `boolean`

Defined in: [three/addons/math/OBB.js:441](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L441)

Returns `true` if the given ray intersects this OBB.

#### Parameters

##### ray

`Ray`

The ray to test.

#### Returns

`boolean`

Whether the given ray intersects this OBB or not.

***

### intersectsSphere()

> **intersectsSphere**(`sphere`): `boolean`

Defined in: [three/addons/math/OBB.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L207)

Returns `true` if the given bounding sphere intersects this OBB.

#### Parameters

##### sphere

`Sphere`

The bounding sphere to test.

#### Returns

`boolean`

- Whether the given bounding sphere intersects this OBB or not.

***

### set()

> **set**(`center`?, `halfSize`?, `rotation`?): `OBB`

Defined in: [three/addons/math/OBB.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/OBB.js#L85)

Sets the OBBs components to the given values.

#### Parameters

##### center?

`Vector3`

The center of the OBB.

##### halfSize?

`Vector3`

Positive halfwidth extents of the OBB along each axis.

##### rotation?

`Matrix3`

The rotation of the OBB.

#### Returns

`OBB`

A reference to this OBB.

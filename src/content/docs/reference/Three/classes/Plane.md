---
editUrl: false
next: false
prev: false
title: "Plane"
---

Defined in: [three/src/math/Plane.js:13](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L13)

A two dimensional surface that extends infinitely in 3D space, represented
in [Hessian normal form][http://mathworld.wolfram.com/HessianNormalForm.html](http://mathworld.wolfram.com/HessianNormalForm.html)
by a unit length normal vector and a constant.

## Constructors

### Constructor

> **new Plane**(`normal`?, `constant`?): `Plane`

Defined in: [three/src/math/Plane.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L21)

Constructs a new plane.

#### Parameters

##### normal?

[`Vector3`](/reference/three/classes/vector3/) = `...`

A unit length vector defining the normal of the plane.

##### constant?

`number` = `0`

The signed distance from the origin to the plane.

#### Returns

`Plane`

## Properties

### constant

> **constant**: `number`

Defined in: [three/src/math/Plane.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L45)

The signed distance from the origin to the plane.

#### Default

```ts
0
```

***

### isPlane

> `readonly` **isPlane**: `boolean`

Defined in: [three/src/math/Plane.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L30)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### normal

> **normal**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Plane.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L37)

A unit length vector defining the normal of the plane.

## Methods

### applyMatrix4()

> **applyMatrix4**(`matrix`, `optionalNormalMatrix`?): `Plane`

Defined in: [three/src/math/Plane.js:313](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L313)

Apply a 4x4 matrix to the plane. The matrix must be an affine, homogeneous transform.

The optional normal matrix can be pre-computed like so:
```js
const optionalNormalMatrix = new THREE.Matrix3().getNormalMatrix( matrix );
```

#### Parameters

##### matrix

`Matrix4`

The transformation matrix.

##### optionalNormalMatrix?

`Matrix4`

A pre-computed normal matrix.

#### Returns

`Plane`

A reference to this plane.

***

### clone()

> **clone**(): `Plane`

Defined in: [three/src/math/Plane.js:359](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L359)

Returns a new plane with copied values from this instance.

#### Returns

`Plane`

A clone of this instance.

***

### coplanarPoint()

> **coplanarPoint**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Plane.js:295](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L295)

Returns a coplanar vector to the plane, by calculating the
projection of the normal at the origin onto the plane.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The coplanar point.

***

### copy()

> **copy**(`plane`): `Plane`

Defined in: [three/src/math/Plane.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L129)

Copies the values of the given plane to this instance.

#### Parameters

##### plane

`Plane`

The plane to copy.

#### Returns

`Plane`

A reference to this plane.

***

### distanceToPoint()

> **distanceToPoint**(`point`): `number`

Defined in: [three/src/math/Plane.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L175)

Returns the signed distance from the given point to this plane.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to compute the distance for.

#### Returns

`number`

The signed distance.

***

### distanceToSphere()

> **distanceToSphere**(`sphere`): `number`

Defined in: [three/src/math/Plane.js:187](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L187)

Returns the signed distance from the given sphere to this plane.

#### Parameters

##### sphere

`Sphere`

The sphere to compute the distance for.

#### Returns

`number`

The signed distance.

***

### equals()

> **equals**(`plane`): `boolean`

Defined in: [three/src/math/Plane.js:348](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L348)

Returns `true` if this plane is equal with the given one.

#### Parameters

##### plane

`Plane`

The plane to test for equality.

#### Returns

`boolean`

Whether this plane is equal with the given one.

***

### intersectLine()

> **intersectLine**(`line`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Plane.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L215)

Returns the intersection point of the passed line and the plane. Returns
`null` if the line does not intersect. Returns the line's starting point if
the line is coplanar with the plane.

#### Parameters

##### line

`Line3`

The line to compute the intersection for.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The intersection point.

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [three/src/math/Plane.js:270](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L270)

Returns `true` if the given bounding box intersects with the plane.

#### Parameters

##### box

`Box3`

The bounding box to test.

#### Returns

`boolean`

Whether the given bounding box intersects with the plane or not.

***

### intersectsLine()

> **intersectsLine**(`line`): `boolean`

Defined in: [three/src/math/Plane.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L253)

Returns `true` if the given line segment intersects with (passes through) the plane.

#### Parameters

##### line

`Line3`

The line to test.

#### Returns

`boolean`

Whether the given line segment intersects with the plane or not.

***

### intersectsSphere()

> **intersectsSphere**(`sphere`): `boolean`

Defined in: [three/src/math/Plane.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L282)

Returns `true` if the given bounding sphere intersects with the plane.

#### Parameters

##### sphere

`Sphere`

The bounding sphere to test.

#### Returns

`boolean`

Whether the given bounding sphere intersects with the plane or not.

***

### negate()

> **negate**(): `Plane`

Defined in: [three/src/math/Plane.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L160)

Negates both the plane normal and the constant.

#### Returns

`Plane`

A reference to this plane.

***

### normalize()

> **normalize**(): `Plane`

Defined in: [three/src/math/Plane.js:143](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L143)

Normalizes the plane normal and adjusts the constant accordingly.

#### Returns

`Plane`

A reference to this plane.

***

### projectPoint()

> **projectPoint**(`point`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Plane.js:200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L200)

Projects a the given point onto the plane.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to project.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The projected point on the plane.

***

### set()

> **set**(`normal`, `constant`): `Plane`

Defined in: [three/src/math/Plane.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L56)

Sets the plane components by copying the given values.

#### Parameters

##### normal

[`Vector3`](/reference/three/classes/vector3/)

The normal.

##### constant

`number`

The constant.

#### Returns

`Plane`

A reference to this plane.

***

### setComponents()

> **setComponents**(`x`, `y`, `z`, `w`): `Plane`

Defined in: [three/src/math/Plane.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L75)

Sets the plane components by defining `x`, `y`, `z` as the
plane normal and `w` as the constant.

#### Parameters

##### x

`number`

The value for the normal's x component.

##### y

`number`

The value for the normal's y component.

##### z

`number`

The value for the normal's z component.

##### w

`number`

The constant value.

#### Returns

`Plane`

A reference to this plane.

***

### setFromCoplanarPoints()

> **setFromCoplanarPoints**(`a`, `b`, `c`): `Plane`

Defined in: [three/src/math/Plane.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L111)

Sets the plane from three coplanar points. The winding order is
assumed to be counter-clockwise, and determines the direction of
the plane normal.

#### Parameters

##### a

[`Vector3`](/reference/three/classes/vector3/)

The first coplanar point.

##### b

[`Vector3`](/reference/three/classes/vector3/)

The second coplanar point.

##### c

[`Vector3`](/reference/three/classes/vector3/)

The third coplanar point.

#### Returns

`Plane`

A reference to this plane.

***

### setFromNormalAndCoplanarPoint()

> **setFromNormalAndCoplanarPoint**(`normal`, `point`): `Plane`

Defined in: [three/src/math/Plane.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L92)

Sets the plane from the given normal and coplanar point (that is a point
that lies onto the plane).

#### Parameters

##### normal

[`Vector3`](/reference/three/classes/vector3/)

The normal.

##### point

[`Vector3`](/reference/three/classes/vector3/)

A coplanar point.

#### Returns

`Plane`

A reference to this plane.

***

### translate()

> **translate**(`offset`): `Plane`

Defined in: [three/src/math/Plane.js:334](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Plane.js#L334)

Translates the plane by the distance defined by the given offset vector.
Note that this only affects the plane constant and will not affect the normal vector.

#### Parameters

##### offset

[`Vector3`](/reference/three/classes/vector3/)

The offset vector.

#### Returns

`Plane`

A reference to this plane.

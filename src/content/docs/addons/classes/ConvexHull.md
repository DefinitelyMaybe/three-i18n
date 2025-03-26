---
editUrl: false
next: false
prev: false
title: "ConvexHull"
---

Defined in: [three/addons/math/ConvexHull.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L24)

Can be used to compute the convex hull in 3D space for a given set of points. It
is primarily intended for [ConvexGeometry](/addons/classes/convexgeometry/).

This Quickhull 3D implementation is a port of [quickhull3d][https://github.com/maurizzzio/quickhull3d/](https://github.com/maurizzzio/quickhull3d/)
by Mauricio Poppe.

## Constructors

### Constructor

> **new ConvexHull**(): `ConvexHull`

Defined in: [three/addons/math/ConvexHull.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L29)

Constructs a new convex hull.

#### Returns

`ConvexHull`

## Properties

### assigned

> **assigned**: `VertexList`

Defined in: [three/addons/math/ConvexHull.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L46)

***

### faces

> **faces**: `any`[]

Defined in: [three/addons/math/ConvexHull.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L33)

***

### newFaces

> **newFaces**: `any`[]

Defined in: [three/addons/math/ConvexHull.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L34)

***

### tolerance

> **tolerance**: `number`

Defined in: [three/addons/math/ConvexHull.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L31)

***

### unassigned

> **unassigned**: `VertexList`

Defined in: [three/addons/math/ConvexHull.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L47)

***

### vertices

> **vertices**: `any`[]

Defined in: [three/addons/math/ConvexHull.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L49)

## Methods

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [three/addons/math/ConvexHull.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L130)

Returns `true` if the given point lies in the convex hull.

#### Parameters

##### point

`Vector3`

The point to test.

#### Returns

`boolean`

Whether the given point lies in the convex hull or not.

***

### intersectRay()

> **intersectRay**(`ray`, `target`): `any`

Defined in: [three/addons/math/ConvexHull.js:155](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L155)

Computes the intersections point of the given ray and this convex hull.

#### Parameters

##### ray

`Ray`

The ray to test.

##### target

`Vector3`

The target vector that is used to store the method's result.

#### Returns

`any`

The intersection point. Returns `null` if not intersection was detected.

***

### intersectsRay()

> **intersectsRay**(`ray`): `boolean`

Defined in: [three/addons/math/ConvexHull.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L237)

Returns `true` if the given ray intersects with this convex hull.

#### Parameters

##### ray

`Ray`

The ray to test.

#### Returns

`boolean`

Whether the given ray intersects with this convex hull or not.

***

### makeEmpty()

> **makeEmpty**(): `ConvexHull`

Defined in: [three/addons/math/ConvexHull.js:248](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L248)

Makes the convex hull empty.

#### Returns

`ConvexHull`

A reference to this convex hull.

***

### setFromObject()

> **setFromObject**(`object`): `ConvexHull`

Defined in: [three/addons/math/ConvexHull.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L88)

Computes the convex hull of the given 3D object (including its descendants),
accounting for the world transforms of both the 3D object and its descendants.

#### Parameters

##### object

`Object3D`

The 3D object to compute the convex hull for.

#### Returns

`ConvexHull`

A reference to this convex hull.

***

### setFromPoints()

> **setFromPoints**(`points`): `ConvexHull`

Defined in: [three/addons/math/ConvexHull.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/ConvexHull.js#L59)

Computes to convex hull for the given array of points.

#### Parameters

##### points

`Vector3`[]

The array of points in 3D space.

#### Returns

`ConvexHull`

A reference to this convex hull.

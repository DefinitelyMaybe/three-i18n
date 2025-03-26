---
editUrl: false
next: false
prev: false
title: "ConvexObjectBreaker"
---

Defined in: [three/addons/misc/ConvexObjectBreaker.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L28)

This class can be used to subdivide a convex Geometry object into pieces.

Use the function prepareBreakableObject to prepare a Mesh object to be broken.
Then, call the various functions to subdivide the object (subdivideByImpact, cutByPlane).
Sub-objects that are product of subdivision don't need prepareBreakableObject to be called on them.

Requisites for the object:
- Mesh object must have a buffer geometry and a material.
- Vertex normals must be planar (not smoothed).
- The geometry must be convex (this is not checked in the library). You can create convex
geometries with [ConvexGeometry](/addons/classes/convexgeometry/). The BoxGeometry, SphereGeometry and other
convex primitives can also be used.

Note: This lib adds member variables to object's userData member (see prepareBreakableObject function)
Use with caution and read the code when using with other libs.

## Constructors

### Constructor

> **new ConvexObjectBreaker**(`minSizeForBreak`?, `smallDelta`?): `ConvexObjectBreaker`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L36)

Constructs a new convex object breaker.

#### Parameters

##### minSizeForBreak?

`number` = `1.4`

Min size a debris can have to break.
 *

##### smallDelta?

`number` = `0.0001`

Max distance to consider that a point belongs to a plane.

#### Returns

`ConvexObjectBreaker`

## Properties

### minSizeForBreak

> **minSizeForBreak**: `number`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L38)

***

### segments

> **segments**: `boolean`[]

Defined in: [three/addons/misc/ConvexObjectBreaker.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L59)

***

### smallDelta

> **smallDelta**: `number`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L39)

***

### tempCM1

> **tempCM1**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L45)

***

### tempCM2

> **tempCM2**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L46)

***

### tempLine1

> **tempLine1**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L41)

***

### tempPlane\_Cut

> **tempPlane\_Cut**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L44)

***

### tempPlane1

> **tempPlane1**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L42)

***

### tempPlane2

> **tempPlane2**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L43)

***

### tempResultObjects

> **tempResultObjects**: `object`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L57)

#### object1

> **object1**: `any` = `null`

#### object2

> **object2**: `any` = `null`

***

### tempVector3

> **tempVector3**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L47)

***

### tempVector3\_2

> **tempVector3\_2**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L48)

***

### tempVector3\_3

> **tempVector3\_3**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L49)

***

### tempVector3\_AB

> **tempVector3\_AB**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L55)

***

### tempVector3\_CB

> **tempVector3\_CB**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L56)

***

### tempVector3\_N0

> **tempVector3\_N0**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L53)

***

### tempVector3\_N1

> **tempVector3\_N1**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L54)

***

### tempVector3\_P0

> **tempVector3\_P0**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L50)

***

### tempVector3\_P1

> **tempVector3\_P1**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L51)

***

### tempVector3\_P2

> **tempVector3\_P2**: `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L52)

## Methods

### cutByPlane()

> **cutByPlane**(`object`, `plane`, `output`): `number`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:187](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L187)

Subdivides the given 3D object into pieces by a plane.

#### Parameters

##### object

`Object3D`

The 3D object to subdivide.

##### plane

`Plane`

The plane to cut the 3D object.

##### output

An object that stores the pieces.

###### object1

`Mesh`

###### object2

`Mesh`

#### Returns

`number`

The number of pieces.

***

### prepareBreakableObject()

> **prepareBreakableObject**(`object`, `mass`, `velocity`, `angularVelocity`, `breakable`): `void`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L74)

Must be called for all 3D objects that should be breakable.

#### Parameters

##### object

`Object3D`

The 3D object. It must have a convex geometry.

##### mass

`number`

The 3D object's mass in kg. Must be greater than `0`.

##### velocity

`Vector3`

The 3D object's velocity.

##### angularVelocity

`Vector3`

The 3D object's angular velocity.

##### breakable

`boolean`

Whether the 3D object is breakable or not.

#### Returns

`void`

***

### subdivideByImpact()

> **subdivideByImpact**(`object`, `pointOfImpact`, `normal`, `maxRadialIterations`, `maxRandomIterations`): `Object3D`[]

Defined in: [three/addons/misc/ConvexObjectBreaker.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L99)

Subdivides the given 3D object into pieces by an impact (meaning another object hits
the given 3D object at a certain surface point).

#### Parameters

##### object

`Object3D`

The 3D object to subdivide.

##### pointOfImpact

`Vector3`

The point of impact.

##### normal

`Vector3`

The impact normal.

##### maxRadialIterations

`number`

Iterations for radial cuts.

##### maxRandomIterations

`number`

Max random iterations for not-radial cuts.

#### Returns

`Object3D`[]

The array of pieces.

***

### transformFreeVector()

> `static` **transformFreeVector**(`v`, `m`): `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:470](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L470)

#### Parameters

##### v

`any`

##### m

`any`

#### Returns

`any`

***

### transformFreeVectorInverse()

> `static` **transformFreeVectorInverse**(`v`, `m`): `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:487](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L487)

#### Parameters

##### v

`any`

##### m

`any`

#### Returns

`any`

***

### transformPlaneToLocalSpace()

> `static` **transformPlaneToLocalSpace**(`plane`, `m`, `resultPlane`): `void`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:521](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L521)

#### Parameters

##### plane

`any`

##### m

`any`

##### resultPlane

`any`

#### Returns

`void`

***

### transformTiedVectorInverse()

> `static` **transformTiedVectorInverse**(`v`, `m`): `any`

Defined in: [three/addons/misc/ConvexObjectBreaker.js:504](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ConvexObjectBreaker.js#L504)

#### Parameters

##### v

`any`

##### m

`any`

#### Returns

`any`

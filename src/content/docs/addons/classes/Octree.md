---
editUrl: false
next: false
prev: false
title: "Octree"
---

Defined in: [three/addons/math/Octree.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L77)

An octree is a hierarchical tree data structure used to partition a three-dimensional
space by recursively subdividing it into eight octants.

This particular implementation can have up to sixteen levels and stores up to eight triangles
in leaf nodes.

`Octree` can be used in games to compute collision between the game world and colliders from
the player or other dynamic 3D objects.

```js
const octree = new Octree().fromGraphNode( scene );
const result = octree.capsuleIntersect( playerCollider ); // collision detection
```

## Constructors

### Constructor

> **new Octree**(`box`?): `Octree`

Defined in: [three/addons/math/Octree.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L83)

Constructs a new Octree.

#### Parameters

##### box?

`Box3`

The base box with enclose the entire Octree.

#### Returns

`Octree`

## Properties

### bounds

> **bounds**: `Box3`

Defined in: [three/addons/math/Octree.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L97)

The bounds of the Octree. Compared to [Octree#box](/addons/classes/octree/#box), no
margin is applied.

***

### box

> **box**: `Box3`

Defined in: [three/addons/math/Octree.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L89)

The base box with enclose the entire Octree.

***

### layers

> **layers**: `Layers`

Defined in: [three/addons/math/Octree.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L104)

Can by used for layers configuration for refine testing.

***

### subTrees

> **subTrees**: `any`[]

Defined in: [three/addons/math/Octree.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L108)

***

### triangles

> **triangles**: `any`[]

Defined in: [three/addons/math/Octree.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L109)

## Methods

### addTriangle()

> **addTriangle**(`triangle`): `Octree`

Defined in: [three/addons/math/Octree.js:119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L119)

Adds the given triangle to the Octree. The triangle vertices are clamped if they exceed
the bounds of the Octree.

#### Parameters

##### triangle

`Triangle`

The triangle to add.

#### Returns

`Octree`

A reference to this Octree.

***

### build()

> **build**(): `Octree`

Defined in: [three/addons/math/Octree.js:238](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L238)

Builds the Octree.

#### Returns

`Octree`

A reference to this Octree.

***

### calcBox()

> **calcBox**(): `Octree`

Defined in: [three/addons/math/Octree.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L167)

Prepares [Octree#box](/addons/classes/octree/#box) for the build.

#### Returns

`Octree`

A reference to this Octree.

***

### capsuleIntersect()

> **capsuleIntersect**(`capsule`): `any`

Defined in: [three/addons/math/Octree.js:460](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L460)

Performs a capsule intersection test with this Octree.

#### Parameters

##### capsule

[`Capsule`](/addons/classes/capsule/)

The capsule to test.

#### Returns

`any`

The intersection object. If no intersection
is detected, the method returns `false`.

***

### clear()

> **clear**(): `Octree`

Defined in: [three/addons/math/Octree.js:588](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L588)

Clears the Octree by making it empty.

#### Returns

`Octree`

A reference to this Octree.

***

### fromGraphNode()

> **fromGraphNode**(`group`): `Octree`

Defined in: [three/addons/math/Octree.js:535](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L535)

Constructs the Octree from the given 3D object.

#### Parameters

##### group

`Object3D`

The scene graph node.

#### Returns

`Octree`

A reference to this Octree.

***

### getCapsuleTriangles()

> **getCapsuleTriangles**(`capsule`, `triangles`): `void`

Defined in: [three/addons/math/Octree.js:402](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L402)

Computes the triangles that potentially intersect with the given capsule.

#### Parameters

##### capsule

[`Capsule`](/addons/classes/capsule/)

The capsule to test.

##### triangles

`Triangle`[]

The target array that holds the triangles.

#### Returns

`void`

***

### getRayTriangles()

> **getRayTriangles**(`ray`, `triangles`): `void`

Defined in: [three/addons/math/Octree.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L251)

Computes the triangles that potentially intersect with the given ray.

#### Parameters

##### ray

`Ray`

The ray to test.

##### triangles

`Triangle`[]

The target array that holds the triangles.

#### Returns

`void`

***

### getSphereTriangles()

> **getSphereTriangles**(`sphere`, `triangles`): `void`

Defined in: [three/addons/math/Octree.js:379](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L379)

Computes the triangles that potentially intersect with the given bounding sphere.

#### Parameters

##### sphere

`Sphere`

The sphere to test.

##### triangles

`Triangle`[]

The target array that holds the triangles.

#### Returns

`void`

***

### rayIntersect()

> **rayIntersect**(`ray`): `any`

Defined in: [three/addons/math/Octree.js:496](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L496)

Performs a ray intersection test with this Octree.

#### Parameters

##### ray

`Ray`

The ray to test.

#### Returns

`any`

The nearest intersection object. If no intersection
is detected, the method returns `false`.

***

### sphereIntersect()

> **sphereIntersect**(`sphere`): `any`

Defined in: [three/addons/math/Octree.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L426)

Performs a bounding sphere intersection test with this Octree.

#### Parameters

##### sphere

`Sphere`

The bounding sphere to test.

#### Returns

`any`

The intersection object. If no intersection
is detected, the method returns `false`.

***

### split()

> **split**(`level`): `Octree`

Defined in: [three/addons/math/Octree.js:185](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L185)

Splits the Octree. This method is used recursively when
building the Octree.

#### Parameters

##### level

`number`

The current level.

#### Returns

`Octree`

A reference to this Octree.

***

### triangleCapsuleIntersect()

> **triangleCapsuleIntersect**(`capsule`, `triangle`): `any`

Defined in: [three/addons/math/Octree.js:275](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L275)

Computes the intersection between the given capsule and triangle.

#### Parameters

##### capsule

[`Capsule`](/addons/classes/capsule/)

The capsule to test.

##### triangle

`Triangle`

The triangle to test.

#### Returns

`any`

The intersection object. If no intersection
is detected, the method returns `false`.

***

### triangleSphereIntersect()

> **triangleSphereIntersect**(`sphere`, `triangle`): `any`

Defined in: [three/addons/math/Octree.js:331](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Octree.js#L331)

Computes the intersection between the given sphere and triangle.

#### Parameters

##### sphere

`Sphere`

The sphere to test.

##### triangle

`Triangle`

The triangle to test.

#### Returns

`any`

The intersection object. If no intersection
is detected, the method returns `false`.

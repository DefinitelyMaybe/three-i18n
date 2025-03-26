---
editUrl: false
next: false
prev: false
title: "Raycaster"
---

Defined in: [three/src/core/Raycaster.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L12)

This class is designed to assist with raycasting. Raycasting is used for
mouse picking (working out what objects in the 3d space the mouse is over)
amongst other things.

## Constructors

### Constructor

> **new Raycaster**(`origin`, `direction`, `near`?, `far`?): `Raycaster`

Defined in: [three/src/core/Raycaster.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L22)

Constructs a new raycaster.

#### Parameters

##### origin

`Vector3`

The origin vector where the ray casts from.

##### direction

`Vector3`

The (normalized) direction vector that gives direction to the ray.

##### near?

`number` = `0`

All results returned are further away than near. Near can't be negative.

##### far?

`number` = `Infinity`

All results returned are closer than far. Far can't be lower than near.

#### Returns

`Raycaster`

## Properties

### camera

> **camera**: `Camera`

Defined in: [three/src/core/Raycaster.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L55)

The camera to use when raycasting against view-dependent objects such as
billboarded objects like sprites. This field can be set manually or
is set when calling `setFromCamera()`.

#### Default

```ts
null
```

***

### far

> **far**: `number`

Defined in: [three/src/core/Raycaster.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L45)

All results returned are further away than near. Near can't be negative.

#### Default

```ts
Infinity
```

***

### layers

> **layers**: [`Layers`](/reference/three/classes/layers/)

Defined in: [three/src/core/Raycaster.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L68)

Allows to selectively ignore 3D objects when performing intersection tests.
The following code example ensures that only 3D objects on layer `1` will be
honored by raycaster.
```js
raycaster.layers.set( 1 );
object.layers.enable( 1 );
```

***

### near

> **near**: `number`

Defined in: [three/src/core/Raycaster.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L37)

All results returned are further away than near. Near can't be negative.

#### Default

```ts
0
```

***

### params

> **params**: `any`

Defined in: [three/src/core/Raycaster.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L87)

A parameter object that configures the raycasting. It has the structure:

```
{
	Mesh: {},
	Line: { threshold: 1 },
	LOD: {},
	Points: { threshold: 1 },
	Sprite: {}
}
```
Where `threshold` is the precision of the raycaster when intersecting objects, in world units.

***

### ray

> **ray**: [`Ray`](/reference/three/classes/ray/)

Defined in: [three/src/core/Raycaster.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L29)

The ray used for raycasting.

## Methods

### intersectObject()

> **intersectObject**(`object`, `recursive`?, `intersects`?): `Raycaster`[]

Defined in: [three/src/core/Raycaster.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L193)

Checks all intersection between the ray and the object with or without the
descendants. Intersections are returned sorted by distance, closest first.

`Raycaster` delegates to the `raycast()` method of the passed 3D object, when
evaluating whether the ray intersects the object or not. This allows meshes to respond
differently to ray casting than lines or points.

Note that for meshes, faces must be pointed towards the origin of the ray in order
to be detected; intersections of the ray passing through the back of a face will not
be detected. To raycast against both faces of an object, you'll want to set  [Material#side](/reference/three/classes/material/#side)
to `THREE.DoubleSide`.

#### Parameters

##### object

`Object3D`

The 3D object to check for intersection with the ray.

##### recursive?

`boolean` = `true`

If set to `true`, it also checks all descendants.
Otherwise it only checks intersection with the object.

##### intersects?

`any`[] = `[]`

The target array that holds the result of the method.

#### Returns

`Raycaster`[]

An array holding the intersection points.

***

### intersectObjects()

> **intersectObjects**(`objects`, `recursive`?, `intersects`?): `Raycaster`[]

Defined in: [three/src/core/Raycaster.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L213)

Checks all intersection between the ray and the objects with or without
the descendants. Intersections are returned sorted by distance, closest first.

#### Parameters

##### objects

`Object3D`[]

The 3D objects to check for intersection with the ray.

##### recursive?

`boolean` = `true`

If set to `true`, it also checks all descendants.
Otherwise it only checks intersection with the object.

##### intersects?

`any`[] = `[]`

The target array that holds the result of the method.

#### Returns

`Raycaster`[]

An array holding the intersection points.

***

### set()

> **set**(`origin`, `direction`): `void`

Defined in: [three/src/core/Raycaster.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L103)

Updates the ray with a new origin and direction by copying the values from the arguments.

#### Parameters

##### origin

`Vector3`

The origin vector where the ray casts from.

##### direction

`Vector3`

The (normalized) direction vector that gives direction to the ray.

#### Returns

`void`

***

### setFromCamera()

> **setFromCamera**(`coords`, `camera`): `void`

Defined in: [three/src/core/Raycaster.js:118](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L118)

Uses the given coordinates and camera to compute a new origin and direction for the internal ray.

#### Parameters

##### coords

`Vector2`

2D coordinates of the mouse, in normalized device coordinates (NDC).
X and Y components should be between `-1` and `1`.

##### camera

`Camera`

The camera from which the ray should originate.

#### Returns

`void`

***

### setFromXRController()

> **setFromXRController**(`controller`): `Raycaster`

Defined in: [three/src/core/Raycaster.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Raycaster.js#L146)

Uses the given WebXR controller to compute a new origin and direction for the internal ray.

#### Parameters

##### controller

`WebXRController`

The controller to copy the position and direction from.

#### Returns

`Raycaster`

A reference to this raycaster.

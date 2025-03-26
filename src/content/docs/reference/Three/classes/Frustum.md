---
editUrl: false
next: false
prev: false
title: "Frustum"
---

Defined in: [three/src/math/Frustum.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L16)

Frustums are used to determine what is inside the camera's field of view.
They help speed up the rendering process - objects which lie outside a camera's
frustum can safely be excluded from rendering.

This class is mainly intended for use internally by a renderer.

## Constructors

### Constructor

> **new Frustum**(`p0`?, `p1`?, `p2`?, `p3`?, `p4`?, `p5`?): `Frustum`

Defined in: [three/src/math/Frustum.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L28)

Constructs a new frustum.

#### Parameters

##### p0?

[`Plane`](/reference/three/classes/plane/) = `...`

The first plane that encloses the frustum.

##### p1?

[`Plane`](/reference/three/classes/plane/) = `...`

The second plane that encloses the frustum.

##### p2?

[`Plane`](/reference/three/classes/plane/) = `...`

The third plane that encloses the frustum.

##### p3?

[`Plane`](/reference/three/classes/plane/) = `...`

The fourth plane that encloses the frustum.

##### p4?

[`Plane`](/reference/three/classes/plane/) = `...`

The fifth plane that encloses the frustum.

##### p5?

[`Plane`](/reference/three/classes/plane/) = `...`

The sixth plane that encloses the frustum.

#### Returns

`Frustum`

## Properties

### planes

> **planes**: [`Plane`](/reference/three/classes/plane/)[]

Defined in: [three/src/math/Frustum.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L35)

This array holds the planes that enclose the frustum.

## Methods

### clone()

> **clone**(): `Frustum`

Defined in: [three/src/math/Frustum.js:260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L260)

Returns a new frustum with copied values from this instance.

#### Returns

`Frustum`

A clone of this instance.

***

### containsPoint()

> **containsPoint**(`point`): `boolean`

Defined in: [three/src/math/Frustum.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L237)

Returns `true` if the given point lies within the frustum.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to test.

#### Returns

`boolean`

Whether the point lies within this frustum or not.

***

### copy()

> **copy**(`frustum`): `Frustum`

Defined in: [three/src/math/Frustum.js:71](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L71)

Copies the values of the given frustum to this instance.

#### Parameters

##### frustum

`Frustum`

The frustum to copy.

#### Returns

`Frustum`

A reference to this frustum.

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [three/src/math/Frustum.js:205](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L205)

Returns `true` if the given bounding box is intersecting this frustum.

#### Parameters

##### box

`Box3`

The bounding box to test.

#### Returns

`boolean`

Whether the bounding box is intersecting this frustum or not.

***

### intersectsObject()

> **intersectsObject**(`object`): `boolean`

Defined in: [three/src/math/Frustum.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L133)

Returns `true` if the 3D object's bounding sphere is intersecting this frustum.

Note that the 3D object must have a geometry so that the bounding sphere can be calculated.

#### Parameters

##### object

`Object3D`

The 3D object to test.

#### Returns

`boolean`

Whether the 3D object's bounding sphere is intersecting this frustum or not.

***

### intersectsSphere()

> **intersectsSphere**(`sphere`): `boolean`

Defined in: [three/src/math/Frustum.js:177](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L177)

Returns `true` if the given bounding sphere is intersecting this frustum.

#### Parameters

##### sphere

[`Sphere`](/reference/three/classes/sphere/)

The bounding sphere to test.

#### Returns

`boolean`

Whether the bounding sphere is intersecting this frustum or not.

***

### intersectsSprite()

> **intersectsSprite**(`sprite`): `boolean`

Defined in: [three/src/math/Frustum.js:161](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L161)

Returns `true` if the given sprite is intersecting this frustum.

#### Parameters

##### sprite

`Sprite`

The sprite to test.

#### Returns

`boolean`

Whether the sprite is intersecting this frustum or not.

***

### set()

> **set**(`p0`?, `p1`?, `p2`?, `p3`?, `p4`?, `p5`?): `Frustum`

Defined in: [three/src/math/Frustum.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L50)

Sets the frustum planes by copying the given planes.

#### Parameters

##### p0?

[`Plane`](/reference/three/classes/plane/)

The first plane that encloses the frustum.

##### p1?

[`Plane`](/reference/three/classes/plane/)

The second plane that encloses the frustum.

##### p2?

[`Plane`](/reference/three/classes/plane/)

The third plane that encloses the frustum.

##### p3?

[`Plane`](/reference/three/classes/plane/)

The fourth plane that encloses the frustum.

##### p4?

[`Plane`](/reference/three/classes/plane/)

The fifth plane that encloses the frustum.

##### p5?

[`Plane`](/reference/three/classes/plane/)

The sixth plane that encloses the frustum.

#### Returns

`Frustum`

A reference to this frustum.

***

### setFromProjectionMatrix()

> **setFromProjectionMatrix**(`m`, `coordinateSystem`): `Frustum`

Defined in: [three/src/math/Frustum.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Frustum.js#L92)

Sets the frustum planes from the given projection matrix.

#### Parameters

##### m

`Matrix4`

The projection matrix.

##### coordinateSystem

`number` = `WebGLCoordinateSystem`

The coordinate system.

#### Returns

`Frustum`

A reference to this frustum.

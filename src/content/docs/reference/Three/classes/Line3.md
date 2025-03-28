---
editUrl: false
next: false
prev: false
title: "Line3"
---

Defined in: [three/src/math/Line3.js:10](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L10)

An analytical line segment in 3D space represented by a start and end point.

## Constructors

### Constructor

> **new Line3**(`start`?, `end`?): `Line3`

Defined in: [three/src/math/Line3.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L18)

Constructs a new line segment.

#### Parameters

##### start?

[`Vector3`](/reference/three/classes/vector3/) = `...`

Start of the line segment.

##### end?

[`Vector3`](/reference/three/classes/vector3/) = `...`

End of the line segment.

#### Returns

`Line3`

## Properties

### end

> **end**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Line3.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L32)

End of the line segment.

***

### start

> **start**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Line3.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L25)

Start of the line segment.

## Methods

### applyMatrix4()

> **applyMatrix4**(`matrix`): `Line3`

Defined in: [three/src/math/Line3.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L175)

Applies a 4x4 transformation matrix to this line segment.

#### Parameters

##### matrix

`Matrix4`

The transformation matrix.

#### Returns

`Line3`

A reference to this line segment.

***

### at()

> **at**(`t`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Line3.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L120)

Returns a vector at a certain position along the line segment.

#### Parameters

##### t

`number`

A value between `[0,1]` to represent a position along the line segment.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The delta vector.

***

### clone()

> **clone**(): `Line3`

Defined in: [three/src/math/Line3.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L201)

Returns a new line segment with copied values from this instance.

#### Returns

`Line3`

A clone of this instance.

***

### closestPointToPoint()

> **closestPointToPoint**(`point`, `clampToLine`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Line3.js:161](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L161)

Returns the closets point on the line for a given point.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point to compute the closest point on the line for.

##### clampToLine

`boolean`

Whether to clamp the result to the range `[0,1]` or not.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The closest point on the line.

***

### closestPointToPointParameter()

> **closestPointToPointParameter**(`point`, `clampToLine`): `number`

Defined in: [three/src/math/Line3.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L133)

Returns a point parameter based on the closest point as projected on the line segment.

#### Parameters

##### point

[`Vector3`](/reference/three/classes/vector3/)

The point for which to return a point parameter.

##### clampToLine

`boolean`

Whether to clamp the result to the range `[0,1]` or not.

#### Returns

`number`

The point parameter.

***

### copy()

> **copy**(`line`): `Line3`

Defined in: [three/src/math/Line3.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L58)

Copies the values of the given line segment to this instance.

#### Parameters

##### line

`Line3`

The line segment to copy.

#### Returns

`Line3`

A reference to this line segment.

***

### delta()

> **delta**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Line3.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L85)

Returns the delta vector of the line segment's start and end point.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The delta vector.

***

### distance()

> **distance**(): `number`

Defined in: [three/src/math/Line3.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L107)

Returns the Euclidean distance between the line' start and end point.

#### Returns

`number`

The Euclidean distance.

***

### distanceSq()

> **distanceSq**(): `number`

Defined in: [three/src/math/Line3.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L96)

Returns the squared Euclidean distance between the line' start and end point.

#### Returns

`number`

The squared Euclidean distance.

***

### equals()

> **equals**(`line`): `boolean`

Defined in: [three/src/math/Line3.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L190)

Returns `true` if this line segment is equal with the given one.

#### Parameters

##### line

`Line3`

The line segment to test for equality.

#### Returns

`boolean`

Whether this line segment is equal with the given one.

***

### getCenter()

> **getCenter**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/Line3.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L73)

Returns the center of the line segment.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The center point.

***

### set()

> **set**(`start`, `end`): `Line3`

Defined in: [three/src/math/Line3.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Line3.js#L43)

Sets the start and end values by copying the given vectors.

#### Parameters

##### start

[`Vector3`](/reference/three/classes/vector3/)

The start point.

##### end

[`Vector3`](/reference/three/classes/vector3/)

The end point.

#### Returns

`Line3`

A reference to this line segment.

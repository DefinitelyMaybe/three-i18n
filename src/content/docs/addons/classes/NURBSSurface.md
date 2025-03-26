---
editUrl: false
next: false
prev: false
title: "NURBSSurface"
---

Defined in: [three/addons/curves/NURBSSurface.js:9](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSSurface.js#L9)

This class represents a NURBS surface.

Implementation is based on `(x, y [, z=0 [, w=1]])` control points with `w=weight`.

## Constructors

### Constructor

> **new NURBSSurface**(`degree1`, `degree2`, `knots1`, `knots2`, `controlPoints`): `NURBSSurface`

Defined in: [three/addons/curves/NURBSSurface.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSSurface.js#L19)

Constructs a new NURBS surface.

#### Parameters

##### degree1

`number`

The first NURBS degree.

##### degree2

`number`

The second NURBS degree.

##### knots1

`number`[]

The first knots as a flat array of numbers.

##### knots2

`number`[]

The second knots as a flat array of numbers.

##### controlPoints

`any`[][]

An array^2 holding control points.

#### Returns

`NURBSSurface`

## Properties

### controlPoints

> **controlPoints**: `any`[][]

Defined in: [three/addons/curves/NURBSSurface.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSSurface.js#L53)

An array holding arrays of control points.

***

### degree1

> **degree1**: `number`

Defined in: [three/addons/curves/NURBSSurface.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSSurface.js#L25)

The first NURBS degree.

***

### degree2

> **degree2**: `number`

Defined in: [three/addons/curves/NURBSSurface.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSSurface.js#L32)

The second NURBS degree.

***

### knots1

> **knots1**: `number`[]

Defined in: [three/addons/curves/NURBSSurface.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSSurface.js#L39)

The first knots as a flat array of numbers.

***

### knots2

> **knots2**: `number`[]

Defined in: [three/addons/curves/NURBSSurface.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSSurface.js#L46)

The second knots as a flat array of numbers.

## Methods

### getPoint()

> **getPoint**(`t1`, `t2`, `target`): `void`

Defined in: [three/addons/curves/NURBSSurface.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSSurface.js#L81)

This method returns a vector in 3D space for the given interpolation factor. This vector lies on the NURBS surface.

#### Parameters

##### t1

`number`

The first interpolation factor representing the `u` position on the surface. Must be in the range `[0,1]`.

##### t2

`number`

The second interpolation factor representing the `v` position on the surface. Must be in the range `[0,1]`.

##### target

`Vector3`

The target vector the result is written to.

#### Returns

`void`

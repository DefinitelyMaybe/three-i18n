---
editUrl: false
next: false
prev: false
title: "NURBSVolume"
---

Defined in: [three/addons/curves/NURBSVolume.js:9](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L9)

This class represents a NURBS volume.

Implementation is based on `(x, y [, z=0 [, w=1]])` control points with `w=weight`.

## Constructors

### Constructor

> **new NURBSVolume**(`degree1`, `degree2`, `degree3`, `knots1`, `knots2`, `knots3`, `controlPoints`): `NURBSVolume`

Defined in: [three/addons/curves/NURBSVolume.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L21)

Constructs a new NURBS surface.

#### Parameters

##### degree1

`number`

The first NURBS degree.

##### degree2

`number`

The second NURBS degree.

##### degree3

`number`

The third NURBS degree.

##### knots1

`number`[]

The first knots as a flat array of numbers.

##### knots2

`number`[]

The second knots as a flat array of numbers.

##### knots3

`number`[]

The third knots as a flat array of numbers.

##### controlPoints

`any`[][][]

An array^3 holding control points.

#### Returns

`NURBSVolume`

## Properties

### controlPoints

> **controlPoints**: `any`[][]

Defined in: [three/addons/curves/NURBSVolume.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L36)

***

### degree1

> **degree1**: `number`

Defined in: [three/addons/curves/NURBSVolume.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L30)

***

### degree2

> **degree2**: `number`

Defined in: [three/addons/curves/NURBSVolume.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L31)

***

### degree3

> **degree3**: `number`

Defined in: [three/addons/curves/NURBSVolume.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L32)

***

### knots1

> **knots1**: `number`[]

Defined in: [three/addons/curves/NURBSVolume.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L33)

***

### knots2

> **knots2**: `number`[]

Defined in: [three/addons/curves/NURBSVolume.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L34)

***

### knots3

> **knots3**: `number`[]

Defined in: [three/addons/curves/NURBSVolume.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L35)

## Methods

### getPoint()

> **getPoint**(`t1`, `t2`, `t3`, `target`): `void`

Defined in: [three/addons/curves/NURBSVolume.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/curves/NURBSVolume.js#L70)

This method returns a vector in 3D space for the given interpolation factor. This vector lies within the NURBS volume.

#### Parameters

##### t1

`number`

The first interpolation factor representing the `u` position within the volume. Must be in the range `[0,1]`.

##### t2

`number`

The second interpolation factor representing the `v` position within the volume. Must be in the range `[0,1]`.

##### t3

`number`

The third interpolation factor representing the `w` position within the volume. Must be in the range `[0,1]`.

##### target

`Vector3`

The target vector the result is written to.

#### Returns

`void`

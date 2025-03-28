---
editUrl: false
next: false
prev: false
title: "Matrix4"
---

Defined in: [three/src/math/Matrix4.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L42)

Represents a 4x4 matrix.

The most common use of a 4x4 matrix in 3D computer graphics is as a transformation matrix.
For an introduction to transformation matrices as used in WebGL, check out [this tutorial][https://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices](https://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices)

This allows a 3D vector representing a point in 3D space to undergo
transformations such as translation, rotation, shear, scale, reflection,
orthogonal or perspective projection and so on, by being multiplied by the
matrix. This is known as `applying` the matrix to the vector.

A Note on Row-Major and Column-Major Ordering:

The constructor and [Matrix3#set](/reference/three/classes/matrix3/#set) method take arguments in
[row-major][https://en.wikipedia.org/wiki/Row-\_and\_column-major\_order#Column-major\_order](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)
order, while internally they are stored in the [Matrix3#elements](/reference/three/classes/matrix3/#elements) array in column-major order.
This means that calling:
```js
const m = new THREE.Matrix4();
m.set( 11, 12, 13, 14,
       21, 22, 23, 24,
       31, 32, 33, 34,
       41, 42, 43, 44 );
```
will result in the elements array containing:
```js
m.elements = [ 11, 21, 31, 41,
               12, 22, 32, 42,
               13, 23, 33, 43,
               14, 24, 34, 44 ];
```
and internally all calculations are performed using column-major ordering.
However, as the actual ordering makes no difference mathematically and
most people are used to thinking about matrices in row-major order, the
three.js documentation shows matrices in row-major order. Just bear in
mind that if you are reading the source code, you'll have to take the
transpose of any matrices outlined here to make sense of the calculations.

## Constructors

### Constructor

> **new Matrix4**(`n11`?, `n12`?, `n13`?, `n14`?, `n21`?, `n22`?, `n23`?, `n24`?, `n31`?, `n32`?, `n33`?, `n34`?, `n41`?, `n42`?, `n43`?, `n44`?): `Matrix4`

Defined in: [three/src/math/Matrix4.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L66)

Constructs a new 4x4 matrix. The arguments are supposed to be
in row-major order. If no arguments are provided, the constructor
initializes the matrix as an identity matrix.

#### Parameters

##### n11?

`number`

1-1 matrix element.

##### n12?

`number`

1-2 matrix element.

##### n13?

`number`

1-3 matrix element.

##### n14?

`number`

1-4 matrix element.

##### n21?

`number`

2-1 matrix element.

##### n22?

`number`

2-2 matrix element.

##### n23?

`number`

2-3 matrix element.

##### n24?

`number`

2-4 matrix element.

##### n31?

`number`

3-1 matrix element.

##### n32?

`number`

3-2 matrix element.

##### n33?

`number`

3-3 matrix element.

##### n34?

`number`

3-4 matrix element.

##### n41?

`number`

4-1 matrix element.

##### n42?

`number`

4-2 matrix element.

##### n43?

`number`

4-3 matrix element.

##### n44?

`number`

4-4 matrix element.

#### Returns

`Matrix4`

## Properties

### elements

> **elements**: `number`[]

Defined in: [three/src/math/Matrix4.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L82)

A column-major list of matrix values.

## Methods

### clone()

> **clone**(): `Matrix4`

Defined in: [three/src/math/Matrix4.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L159)

Returns a matrix with copied values from this instance.

#### Returns

`Matrix4`

A clone of this instance.

***

### compose()

> **compose**(`position`, `quaternion`, `scale`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:1001](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L1001)

Sets this matrix to the transformation composed of the given position,
rotation (Quaternion) and scale.

#### Parameters

##### position

[`Vector3`](/reference/three/classes/vector3/)

The position vector.

##### quaternion

`Quaternion`

The rotation as a Quaternion.

##### scale

[`Vector3`](/reference/three/classes/vector3/)

The scale vector.

#### Returns

`Matrix4`

A reference to this matrix.

***

### copy()

> **copy**(`m`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:171](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L171)

Copies the values of the given matrix to this instance.

#### Parameters

##### m

`Matrix4`

The matrix to copy.

#### Returns

`Matrix4`

A reference to this matrix.

***

### copyPosition()

> **copyPosition**(`m`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:192](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L192)

Copies the translation component of the given matrix
into this matrix's translation component.

#### Parameters

##### m

`Matrix4`

The matrix to copy the translation component.

#### Returns

`Matrix4`

A reference to this matrix.

***

### decompose()

> **decompose**(`position`, `quaternion`, `scale`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:1050](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L1050)

Decomposes this matrix into its position, rotation and scale components
and provides the result in the given objects.

Note: Not all matrices are decomposable in this way. For example, if an
object has a non-uniformly scaled parent, then the object's world matrix
may not be decomposable, and this method may not be appropriate.

#### Parameters

##### position

[`Vector3`](/reference/three/classes/vector3/)

The position vector.

##### quaternion

`Quaternion`

The rotation as a Quaternion.

##### scale

[`Vector3`](/reference/three/classes/vector3/)

The scale vector.

#### Returns

`Matrix4`

A reference to this matrix.

***

### determinant()

> **determinant**(): `number`

Defined in: [three/src/math/Matrix4.js:608](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L608)

Computes and returns the determinant of this matrix.

Based on the method outlined [here][http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html](http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.html).

#### Returns

`number`

The determinant.

***

### equals()

> **equals**(`matrix`): `boolean`

Defined in: [three/src/math/Matrix4.js:1200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L1200)

Returns `true` if this matrix is equal with the given one.

#### Parameters

##### matrix

`Matrix4`

The matrix to test for equality.

#### Returns

`boolean`

Whether this matrix is equal with the given one.

***

### extractBasis()

> **extractBasis**(`xAxis`, `yAxis`, `zAxis`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L235)

Extracts the basis of this matrix into the three axis vectors provided.

#### Parameters

##### xAxis

[`Vector3`](/reference/three/classes/vector3/)

The basis's x axis.

##### yAxis

[`Vector3`](/reference/three/classes/vector3/)

The basis's y axis.

##### zAxis

[`Vector3`](/reference/three/classes/vector3/)

The basis's z axis.

#### Returns

`Matrix4`

A reference to this matrix.

***

### extractRotation()

> **extractRotation**(`m`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:275](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L275)

Extracts the rotation component of the given matrix
into this matrix's rotation component.

Note: This method does not support reflection matrices.

#### Parameters

##### m

`Matrix4`

The matrix.

#### Returns

`Matrix4`

A reference to this matrix.

***

### fromArray()

> **fromArray**(`array`, `offset`?): `Matrix4`

Defined in: [three/src/math/Matrix4.js:1222](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L1222)

Sets the elements of the matrix from the given array.

#### Parameters

##### array

`number`[]

The matrix elements in column-major order.

##### offset?

`number` = `0`

Index of the first element in the array.

#### Returns

`Matrix4`

A reference to this matrix.

***

### getMaxScaleOnAxis()

> **getMaxScaleOnAxis**(): `number`

Defined in: [three/src/math/Matrix4.js:787](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L787)

Gets the maximum scale value of the three axes.

#### Returns

`number`

The maximum scale.

***

### identity()

> **identity**(): `Matrix4`

Defined in: [three/src/math/Matrix4.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L139)

Sets this matrix to the 4x4 identity matrix.

#### Returns

`Matrix4`

A reference to this matrix.

***

### invert()

> **invert**(): `Matrix4`

Defined in: [three/src/math/Matrix4.js:717](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L717)

Inverts this matrix, using the [analytic method][https://en.wikipedia.org/wiki/Invertible\_matrix#Analytic\_solution](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
You can not invert with a determinant of zero. If you attempt this, the method produces
a zero matrix instead.

#### Returns

`Matrix4`

A reference to this matrix.

***

### lookAt()

> **lookAt**(`eye`, `target`, `up`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L463)

Sets the rotation component of the transformation matrix, looking from `eye` towards
`target`, and oriented by the up-direction.

#### Parameters

##### eye

[`Vector3`](/reference/three/classes/vector3/)

The eye vector.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector.

##### up

[`Vector3`](/reference/three/classes/vector3/)

The up vector.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeBasis()

> **makeBasis**(`xAxis`, `yAxis`, `zAxis`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L253)

Sets the given basis vectors to this matrix.

#### Parameters

##### xAxis

[`Vector3`](/reference/three/classes/vector3/)

The basis's x axis.

##### yAxis

[`Vector3`](/reference/three/classes/vector3/)

The basis's y axis.

##### zAxis

[`Vector3`](/reference/three/classes/vector3/)

The basis's z axis.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeOrthographic()

> **makeOrthographic**(`left`, `right`, `top`, `bottom`, `near`, `far`, `coordinateSystem`?): `Matrix4`

Defined in: [three/src/math/Matrix4.js:1157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L1157)

Creates a orthographic projection matrix. This is used internally by
[OrthographicCamera#updateProjectionMatrix](/reference/three/classes/orthographiccamera/#updateprojectionmatrix).

#### Parameters

##### left

`number`

Left boundary of the viewing frustum at the near plane.

##### right

`number`

Right boundary of the viewing frustum at the near plane.

##### top

`number`

Top boundary of the viewing frustum at the near plane.

##### bottom

`number`

Bottom boundary of the viewing frustum at the near plane.

##### near

`number`

The distance from the camera to the near plane.

##### far

`number`

The distance from the camera to the far plane.

##### coordinateSystem?

`number` = `WebGLCoordinateSystem`

The coordinate system.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makePerspective()

> **makePerspective**(`left`, `right`, `top`, `bottom`, `near`, `far`, `coordinateSystem`?): `Matrix4`

Defined in: [three/src/math/Matrix4.js:1108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L1108)

Creates a perspective projection matrix. This is used internally by
[PerspectiveCamera#updateProjectionMatrix](/reference/three/classes/perspectivecamera/#updateprojectionmatrix).

#### Parameters

##### left

`number`

Left boundary of the viewing frustum at the near plane.

##### right

`number`

Right boundary of the viewing frustum at the near plane.

##### top

`number`

Top boundary of the viewing frustum at the near plane.

##### bottom

`number`

Bottom boundary of the viewing frustum at the near plane.

##### near

`number`

The distance from the camera to the near plane.

##### far

`number`

The distance from the camera to the far plane.

##### coordinateSystem?

`number` = `WebGLCoordinateSystem`

The coordinate system.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeRotationAxis()

> **makeRotationAxis**(`axis`, `angle`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:920](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L920)

Sets this matrix as a rotational transformation around the given axis by
the given angle.

This is a somewhat controversial but mathematically sound alternative to
rotating via Quaternions. See the discussion [here][https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199](https://www.gamedev.net/articles/programming/math-and-physics/do-we-really-need-quaternions-r1199).

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The normalized rotation axis.

##### angle

`number`

The rotation in radians.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeRotationFromEuler()

> **makeRotationFromEuler**(`euler`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:318](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L318)

Sets the rotation component (the upper left 3x3 matrix) of this matrix to
the rotation specified by the given Euler angles. The rest of
the matrix is set to the identity. Depending on the [Euler#order](/reference/three/classes/euler/#order),
there are six possible outcomes. See [this page][https://en.wikipedia.org/wiki/Euler\_angles#Rotation\_matrix](https://en.wikipedia.org/wiki/Euler_angles#Rotation_matrix)
for a complete list.

#### Parameters

##### euler

`Euler`

The Euler angles.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeRotationFromQuaternion()

> **makeRotationFromQuaternion**(`q`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:448](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L448)

Sets the rotation component of this matrix to the rotation specified by
the given Quaternion as outlined [here][https://en.wikipedia.org/wiki/Rotation\_matrix#Quaternion](https://en.wikipedia.org/wiki/Rotation_matrix#Quaternion)
The rest of the matrix is set to the identity.

#### Parameters

##### q

`Quaternion`

The Quaternion.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeRotationX()

> **makeRotationX**(`theta`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:844](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L844)

Sets this matrix as a rotational transformation around the X axis by
the given angle.

#### Parameters

##### theta

`number`

The rotation in radians.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeRotationY()

> **makeRotationY**(`theta`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:868](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L868)

Sets this matrix as a rotational transformation around the Y axis by
the given angle.

#### Parameters

##### theta

`number`

The rotation in radians.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeRotationZ()

> **makeRotationZ**(`theta`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:892](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L892)

Sets this matrix as a rotational transformation around the Z axis by
the given angle.

#### Parameters

##### theta

`number`

The rotation in radians.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeScale()

> **makeScale**(`x`, `y`, `z`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:951](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L951)

Sets this matrix as a scale transformation.

#### Parameters

##### x

`number`

The amount to scale in the X axis.

##### y

`number`

The amount to scale in the Y axis.

##### z

`number`

The amount to scale in the Z axis.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeShear()

> **makeShear**(`xy`, `xz`, `yx`, `yz`, `zx`, `zy`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:977](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L977)

Sets this matrix as a shear transformation.

#### Parameters

##### xy

`number`

The amount to shear X by Y.

##### xz

`number`

The amount to shear X by Z.

##### yx

`number`

The amount to shear Y by X.

##### yz

`number`

The amount to shear Y by Z.

##### zx

`number`

The amount to shear Z by X.

##### zy

`number`

The amount to shear Z by Y.

#### Returns

`Matrix4`

A reference to this matrix.

***

### makeTranslation()

> **makeTranslation**(`x`, `y`, `z`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:807](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L807)

Sets this matrix as a translation transform from the given vector.

#### Parameters

##### x

The amount to translate in the X axis or alternatively a translation vector.

`number` | [`Vector3`](/reference/three/classes/vector3/)

##### y

`number`

The amount to translate in the Y axis.

##### z

`number`

The amount to translate in the z axis.

#### Returns

`Matrix4`

A reference to this matrix.

***

### multiply()

> **multiply**(`m`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:516](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L516)

Post-multiplies this matrix by the given 4x4 matrix.

#### Parameters

##### m

`Matrix4`

The matrix to multiply with.

#### Returns

`Matrix4`

A reference to this matrix.

***

### multiplyMatrices()

> **multiplyMatrices**(`a`, `b`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:542](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L542)

Multiples the given 4x4 matrices and stores the result
in this matrix.

#### Parameters

##### a

`Matrix4`

The first matrix.

##### b

`Matrix4`

The second matrix.

#### Returns

`Matrix4`

A reference to this matrix.

***

### multiplyScalar()

> **multiplyScalar**(`s`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:588](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L588)

Multiplies every component of the matrix by the given scalar.

#### Parameters

##### s

`number`

The scalar.

#### Returns

`Matrix4`

A reference to this matrix.

***

### premultiply()

> **premultiply**(`m`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:528](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L528)

Pre-multiplies this matrix by the given 4x4 matrix.

#### Parameters

##### m

`Matrix4`

The matrix to multiply with.

#### Returns

`Matrix4`

A reference to this matrix.

***

### scale()

> **scale**(`v`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:768](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L768)

Multiplies the columns of this matrix by the given vector.

#### Parameters

##### v

[`Vector3`](/reference/three/classes/vector3/)

The scale vector.

#### Returns

`Matrix4`

A reference to this matrix.

***

### set()

> **set**(`n11`?, `n12`?, `n13`?, `n14`?, `n21`?, `n22`?, `n23`?, `n24`?, `n31`?, `n32`?, `n33`?, `n34`?, `n41`?, `n42`?, `n43`?, `n44`?): `Matrix4`

Defined in: [three/src/math/Matrix4.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L121)

Sets the elements of the matrix.The arguments are supposed to be
in row-major order.

#### Parameters

##### n11?

`number`

1-1 matrix element.

##### n12?

`number`

1-2 matrix element.

##### n13?

`number`

1-3 matrix element.

##### n14?

`number`

1-4 matrix element.

##### n21?

`number`

2-1 matrix element.

##### n22?

`number`

2-2 matrix element.

##### n23?

`number`

2-3 matrix element.

##### n24?

`number`

2-4 matrix element.

##### n31?

`number`

3-1 matrix element.

##### n32?

`number`

3-2 matrix element.

##### n33?

`number`

3-3 matrix element.

##### n34?

`number`

3-4 matrix element.

##### n41?

`number`

4-1 matrix element.

##### n42?

`number`

4-2 matrix element.

##### n43?

`number`

4-3 matrix element.

##### n44?

`number`

4-4 matrix element.

#### Returns

`Matrix4`

A reference to this matrix.

***

### setFromMatrix3()

> **setFromMatrix3**(`m`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L210)

Set the upper 3x3 elements of this matrix to the values of given 3x3 matrix.

#### Parameters

##### m

`Matrix3`

The 3x3 matrix.

#### Returns

`Matrix4`

A reference to this matrix.

***

### setPosition()

> **setPosition**(`x`, `y`, `z`): `Matrix4`

Defined in: [three/src/math/Matrix4.js:688](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L688)

Sets the position component for this matrix from the given vector,
without affecting the rest of the matrix.

#### Parameters

##### x

The x component of the vector or alternatively the vector object.

`number` | [`Vector3`](/reference/three/classes/vector3/)

##### y

`number`

The y component of the vector.

##### z

`number`

The z component of the vector.

#### Returns

`Matrix4`

A reference to this matrix.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/Matrix4.js:1242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L1242)

Writes the elements of this matrix to the given array. If no array is provided,
the method returns a new instance.

#### Parameters

##### array?

`number`[] = `[]`

The target array holding the matrix elements in column-major order.

##### offset?

`number` = `0`

Index of the first element in the array.

#### Returns

`number`[]

The matrix elements in column-major order.

***

### transpose()

> **transpose**(): `Matrix4`

Defined in: [three/src/math/Matrix4.js:662](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix4.js#L662)

Transposes this matrix in place.

#### Returns

`Matrix4`

A reference to this matrix.

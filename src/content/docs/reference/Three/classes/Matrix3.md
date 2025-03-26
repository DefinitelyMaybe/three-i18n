---
editUrl: false
next: false
prev: false
title: "Matrix3"
---

Defined in: [three/src/math/Matrix3.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L29)

Represents a 3x3 matrix.

A Note on Row-Major and Column-Major Ordering:

The constructor and [Matrix3#set](/reference/three/classes/matrix3/#set) method take arguments in
[row-major][https://en.wikipedia.org/wiki/Row-\_and\_column-major\_order#Column-major\_order](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)
order, while internally they are stored in the [Matrix3#elements](/reference/three/classes/matrix3/#elements) array in column-major order.
This means that calling:
```js
const m = new THREE.Matrix();
m.set( 11, 12, 13,
       21, 22, 23,
       31, 32, 33 );
```
will result in the elements array containing:
```js
m.elements = [ 11, 21, 31,
               12, 22, 32,
               13, 23, 33 ];
```
and internally all calculations are performed using column-major ordering.
However, as the actual ordering makes no difference mathematically and
most people are used to thinking about matrices in row-major order, the
three.js documentation shows matrices in row-major order. Just bear in
mind that if you are reading the source code, you'll have to take the
transpose of any matrices outlined here to make sense of the calculations.

## Constructors

### Constructor

> **new Matrix3**(`n11`?, `n12`?, `n13`?, `n21`?, `n22`?, `n23`?, `n31`?, `n32`?, `n33`?): `Matrix3`

Defined in: [three/src/math/Matrix3.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L46)

Constructs a new 3x3 matrix. The arguments are supposed to be
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

##### n21?

`number`

2-1 matrix element.

##### n22?

`number`

2-2 matrix element.

##### n23?

`number`

2-3 matrix element.

##### n31?

`number`

3-1 matrix element.

##### n32?

`number`

3-2 matrix element.

##### n33?

`number`

3-3 matrix element.

#### Returns

`Matrix3`

## Properties

### elements

> **elements**: `number`[]

Defined in: [three/src/math/Matrix3.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L62)

A column-major list of matrix values.

## Methods

### clone()

> **clone**(): `Matrix3`

Defined in: [three/src/math/Matrix3.js:603](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L603)

Returns a matrix with copied values from this instance.

#### Returns

`Matrix3`

A clone of this instance.

***

### copy()

> **copy**(`m`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L130)

Copies the values of the given matrix to this instance.

#### Parameters

##### m

`Matrix3`

The matrix to copy.

#### Returns

`Matrix3`

A reference to this matrix.

***

### determinant()

> **determinant**(): `number`

Defined in: [three/src/math/Matrix3.js:268](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L268)

Computes and returns the determinant of this matrix.

#### Returns

`number`

The determinant.

***

### equals()

> **equals**(`matrix`): `boolean`

Defined in: [three/src/math/Matrix3.js:536](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L536)

Returns `true` if this matrix is equal with the given one.

#### Parameters

##### matrix

`Matrix3`

The matrix to test for equality.

#### Returns

`boolean`

Whether this matrix is equal with the given one.

***

### extractBasis()

> **extractBasis**(`xAxis`, `yAxis`, `zAxis`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:151](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L151)

Extracts the basis of this matrix into the three axis vectors provided.

#### Parameters

##### xAxis

`Vector3`

The basis's x axis.

##### yAxis

`Vector3`

The basis's y axis.

##### zAxis

`Vector3`

The basis's z axis.

#### Returns

`Matrix3`

A reference to this matrix.

***

### fromArray()

> **fromArray**(`array`, `offset`?): `Matrix3`

Defined in: [three/src/math/Matrix3.js:558](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L558)

Sets the elements of the matrix from the given array.

#### Parameters

##### array

`number`[]

The matrix elements in column-major order.

##### offset?

`number` = `0`

Index of the first element in the array.

#### Returns

`Matrix3`

A reference to this matrix.

***

### getNormalMatrix()

> **getNormalMatrix**(`matrix4`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:346](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L346)

Computes the normal matrix which is the inverse transpose of the upper
left 3x3 portion of the given 4x4 matrix.

#### Parameters

##### matrix4

`Matrix4`

The 4x4 matrix.

#### Returns

`Matrix3`

A reference to this matrix.

***

### identity()

> **identity**(): `Matrix3`

Defined in: [three/src/math/Matrix3.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L110)

Sets this matrix to the 3x3 identity matrix.

#### Returns

`Matrix3`

A reference to this matrix.

***

### invert()

> **invert**(): `Matrix3`

Defined in: [three/src/math/Matrix3.js:287](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L287)

Inverts this matrix, using the [analytic method][https://en.wikipedia.org/wiki/Invertible\_matrix#Analytic\_solution](https://en.wikipedia.org/wiki/Invertible_matrix#Analytic_solution).
You can not invert with a determinant of zero. If you attempt this, the method produces
a zero matrix instead.

#### Returns

`Matrix3`

A reference to this matrix.

***

### makeRotation()

> **makeRotation**(`theta`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:490](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L490)

Sets this matrix as a 2D rotational transformation.

#### Parameters

##### theta

`number`

The rotation in radians.

#### Returns

`Matrix3`

A reference to this matrix.

***

### makeScale()

> **makeScale**(`x`, `y`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:516](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L516)

Sets this matrix as a 2D scale transform.

#### Parameters

##### x

`number`

The amount to scale in the X axis.

##### y

`number`

The amount to scale in the Y axis.

#### Returns

`Matrix3`

A reference to this matrix.

***

### makeTranslation()

> **makeTranslation**(`x`, `y`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:456](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L456)

Sets this matrix as a 2D translation transform.

#### Parameters

##### x

`any`

The amount to translate in the X axis or alternatively a translation vector.

##### y

`number`

The amount to translate in the Y axis.

#### Returns

`Matrix3`

A reference to this matrix.

***

### multiply()

> **multiply**(`m`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:189](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L189)

Post-multiplies this matrix by the given 3x3 matrix.

#### Parameters

##### m

`Matrix3`

The matrix to multiply with.

#### Returns

`Matrix3`

A reference to this matrix.

***

### multiplyMatrices()

> **multiplyMatrices**(`a`, `b`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L215)

Multiples the given 3x3 matrices and stores the result
in this matrix.

#### Parameters

##### a

`Matrix3`

The first matrix.

##### b

`Matrix3`

The second matrix.

#### Returns

`Matrix3`

A reference to this matrix.

***

### multiplyScalar()

> **multiplyScalar**(`s`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L251)

Multiplies every component of the matrix by the given scalar.

#### Parameters

##### s

`number`

The scalar.

#### Returns

`Matrix3`

A reference to this matrix.

***

### premultiply()

> **premultiply**(`m`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L201)

Pre-multiplies this matrix by the given 3x3 matrix.

#### Parameters

##### m

`Matrix3`

The matrix to multiply with.

#### Returns

`Matrix3`

A reference to this matrix.

***

### rotate()

> **rotate**(`theta`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:424](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L424)

Rotates this matrix by the given angle.

#### Parameters

##### theta

`number`

The rotation in radians.

#### Returns

`Matrix3`

A reference to this matrix.

***

### scale()

> **scale**(`sx`, `sy`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:410](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L410)

Scales this matrix with the given scalar values.

#### Parameters

##### sx

`number`

The amount to scale in the X axis.

##### sy

`number`

The amount to scale in the Y axis.

#### Returns

`Matrix3`

A reference to this matrix.

***

### set()

> **set**(`n11`?, `n12`?, `n13`?, `n21`?, `n22`?, `n23`?, `n31`?, `n32`?, `n33`?): `Matrix3`

Defined in: [three/src/math/Matrix3.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L93)

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

##### n21?

`number`

2-1 matrix element.

##### n22?

`number`

2-2 matrix element.

##### n23?

`number`

2-3 matrix element.

##### n31?

`number`

3-1 matrix element.

##### n32?

`number`

3-2 matrix element.

##### n33?

`number`

3-3 matrix element.

#### Returns

`Matrix3`

A reference to this matrix.

***

### setFromMatrix4()

> **setFromMatrix4**(`m`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L167)

Set this matrix to the upper 3x3 matrix of the given 4x4 matrix.

#### Parameters

##### m

`Matrix4`

The 4x4 matrix.

#### Returns

`Matrix3`

A reference to this matrix.

***

### setUvTransform()

> **setUvTransform**(`tx`, `ty`, `sx`, `sy`, `rotation`, `cx`, `cy`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:388](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L388)

Sets the UV transform matrix from offset, repeat, rotation, and center.

#### Parameters

##### tx

`number`

Offset x.

##### ty

`number`

Offset y.

##### sx

`number`

Repeat x.

##### sy

`number`

Repeat y.

##### rotation

`number`

Rotation, in radians. Positive values rotate counterclockwise.

##### cx

`number`

Center x of rotation.

##### cy

`number`

Center y of rotation

#### Returns

`Matrix3`

A reference to this matrix.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/Matrix3.js:578](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L578)

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

### translate()

> **translate**(`tx`, `ty`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:439](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L439)

Translates this matrix by the given scalar values.

#### Parameters

##### tx

`number`

The amount to translate in the X axis.

##### ty

`number`

The amount to translate in the Y axis.

#### Returns

`Matrix3`

A reference to this matrix.

***

### transpose()

> **transpose**(): `Matrix3`

Defined in: [three/src/math/Matrix3.js:326](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L326)

Transposes this matrix in place.

#### Returns

`Matrix3`

A reference to this matrix.

***

### transposeIntoArray()

> **transposeIntoArray**(`r`): `Matrix3`

Defined in: [three/src/math/Matrix3.js:358](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix3.js#L358)

Transposes this matrix into the supplied array, and returns itself unchanged.

#### Parameters

##### r

`number`[]

An array to store the transposed matrix elements.

#### Returns

`Matrix3`

A reference to this matrix.

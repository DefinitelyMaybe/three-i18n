---
editUrl: false
next: false
prev: false
title: "Matrix2"
---

Defined in: [three/src/math/Matrix2.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix2.js#L27)

Represents a 2x2 matrix.

A Note on Row-Major and Column-Major Ordering:

The constructor and [Matrix2#set](/reference/three/classes/matrix2/#set) method take arguments in
[row-major][https://en.wikipedia.org/wiki/Row-\_and\_column-major\_order#Column-major\_order](https://en.wikipedia.org/wiki/Row-_and_column-major_order#Column-major_order)
order, while internally they are stored in the [Matrix2#elements](/reference/three/classes/matrix2/#elements) array in column-major order.
This means that calling:
```js
const m = new THREE.Matrix2();
m.set( 11, 12,
       21, 22 );
```
will result in the elements array containing:
```js
m.elements = [ 11, 21,
               12, 22 ];
```
and internally all calculations are performed using column-major ordering.
However, as the actual ordering makes no difference mathematically and
most people are used to thinking about matrices in row-major order, the
three.js documentation shows matrices in row-major order. Just bear in
mind that if you are reading the source code, you'll have to take the
transpose of any matrices outlined here to make sense of the calculations.

## Constructors

### Constructor

> **new Matrix2**(`n11`?, `n12`?, `n21`?, `n22`?): `Matrix2`

Defined in: [three/src/math/Matrix2.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix2.js#L39)

Constructs a new 2x2 matrix. The arguments are supposed to be
in row-major order. If no arguments are provided, the constructor
initializes the matrix as an identity matrix.

#### Parameters

##### n11?

`number`

1-1 matrix element.

##### n12?

`number`

1-2 matrix element.

##### n21?

`number`

2-1 matrix element.

##### n22?

`number`

2-2 matrix element.

#### Returns

`Matrix2`

## Properties

### elements

> **elements**: `number`[]

Defined in: [three/src/math/Matrix2.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix2.js#L55)

A column-major list of matrix values.

## Methods

### fromArray()

> **fromArray**(`array`, `offset`?): `Matrix2`

Defined in: [three/src/math/Matrix2.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix2.js#L91)

Sets the elements of the matrix from the given array.

#### Parameters

##### array

`number`[]

The matrix elements in column-major order.

##### offset?

`number` = `0`

Index of the first element in the array.

#### Returns

`Matrix2`

A reference to this matrix.

***

### identity()

> **identity**(): `Matrix2`

Defined in: [three/src/math/Matrix2.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix2.js#L73)

Sets this matrix to the 2x2 identity matrix.

#### Returns

`Matrix2`

A reference to this matrix.

***

### set()

> **set**(`n11`, `n12`, `n21`, `n22`): `Matrix2`

Defined in: [three/src/math/Matrix2.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Matrix2.js#L113)

Sets the elements of the matrix.The arguments are supposed to be
in row-major order.

#### Parameters

##### n11

`number`

1-1 matrix element.

##### n12

`number`

1-2 matrix element.

##### n21

`number`

2-1 matrix element.

##### n22

`number`

2-2 matrix element.

#### Returns

`Matrix2`

A reference to this matrix.

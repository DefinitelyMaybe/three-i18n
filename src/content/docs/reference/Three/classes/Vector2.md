---
editUrl: false
next: false
prev: false
title: "Vector2"
---

Defined in: [three/src/math/Vector2.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L28)

Class representing a 2D vector. A 2D vector is an ordered pair of numbers
(labeled x and y), which can be used to represent a number of things, such as:

- A point in 2D space (i.e. a position on a plane).
- A direction and length across a plane. In three.js the length will
always be the Euclidean distance(straight-line distance) from `(0, 0)` to `(x, y)`
and the direction is also measured from `(0, 0)` towards `(x, y)`.
- Any arbitrary ordered pair of numbers.

There are other things a 2D vector can be used to represent, such as
momentum vectors, complex numbers and so on, however these are the most
common uses in three.js.

Iterating through a vector instance will yield its components `(x, y)` in
the corresponding order.
```js
const a = new THREE.Vector2( 0, 1 );

//no arguments; will be initialised to (0, 0)
const b = new THREE.Vector2( );

const d = a.distanceTo( b );
```

## Constructors

### Constructor

> **new Vector2**(`x`?, `y`?): `Vector2`

Defined in: [three/src/math/Vector2.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L36)

Constructs a new 2D vector.

#### Parameters

##### x?

`number` = `0`

The x value of this vector.

##### y?

`number` = `0`

The y value of this vector.

#### Returns

`Vector2`

## Properties

### x

> **x**: `number`

Defined in: [three/src/math/Vector2.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L52)

The x value of this vector.

***

### y

> **y**: `number`

Defined in: [three/src/math/Vector2.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L59)

The y value of this vector.

## Accessors

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [three/src/math/Vector2.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L85)

Alias for [Vector2#y](/reference/three/classes/vector2/#y).

##### Returns

`number`

#### Set Signature

> **set** **height**(`value`): `void`

Defined in: [three/src/math/Vector2.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L91)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [three/src/math/Vector2.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L68)

Alias for [Vector2#x](/reference/three/classes/vector2/#x).

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [three/src/math/Vector2.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L74)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`number`, `void`, `unknown`\>

Defined in: [three/src/math/Vector2.js:857](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L857)

#### Returns

`Generator`\<`number`, `void`, `unknown`\>

***

### add()

> **add**(`v`): `Vector2`

Defined in: [three/src/math/Vector2.js:227](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L227)

Adds the given vector to this instance.

#### Parameters

##### v

`Vector2`

The vector to add.

#### Returns

`Vector2`

A reference to this vector.

***

### addScalar()

> **addScalar**(`s`): `Vector2`

Defined in: [three/src/math/Vector2.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L242)

Adds the given scalar value to all components of this instance.

#### Parameters

##### s

`number`

The scalar to add.

#### Returns

`Vector2`

A reference to this vector.

***

### addScaledVector()

> **addScaledVector**(`v`, `s`): `Vector2`

Defined in: [three/src/math/Vector2.js:274](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L274)

Adds the given vector scaled by the given factor to this instance.

#### Parameters

##### v

`Vector2`

The vector.

##### s

`number`

The factor that scales `v`.

#### Returns

`Vector2`

A reference to this vector.

***

### addVectors()

> **addVectors**(`a`, `b`): `Vector2`

Defined in: [three/src/math/Vector2.js:258](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L258)

Adds the given vectors and stores the result in this instance.

#### Parameters

##### a

`Vector2`

The first vector.

##### b

`Vector2`

The second vector.

#### Returns

`Vector2`

A reference to this vector.

***

### angle()

> **angle**(): `number`

Defined in: [three/src/math/Vector2.js:642](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L642)

Computes the angle in radians of this vector with respect to the positive x-axis.

#### Returns

`number`

The angle in radians.

***

### angleTo()

> **angleTo**(`v`): `number`

Defined in: [three/src/math/Vector2.js:656](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L656)

Returns the angle between the given vector and this instance in radians.

#### Parameters

##### v

`Vector2`

The vector to compute the angle with.

#### Returns

`number`

The angle in radians.

***

### applyMatrix3()

> **applyMatrix3**(`m`): `Vector2`

Defined in: [three/src/math/Vector2.js:393](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L393)

Multiplies this vector (with an implicit 1 as the 3rd component) by
the given 3x3 matrix.

#### Parameters

##### m

`Matrix3`

The matrix to apply.

#### Returns

`Vector2`

A reference to this vector.

***

### ceil()

> **ceil**(): `Vector2`

Defined in: [three/src/math/Vector2.js:514](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L514)

The components of this vector are rounded up to the nearest integer value.

#### Returns

`Vector2`

A reference to this vector.

***

### clamp()

> **clamp**(`min`, `max`): `Vector2`

Defined in: [three/src/math/Vector2.js:447](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L447)

If this vector's x or y value is greater than the max vector's x or y
value, it is replaced by the corresponding value.
If this vector's x or y value is less than the min vector's x or y value,
it is replaced by the corresponding value.

#### Parameters

##### min

`Vector2`

The minimum x and y values.

##### max

`Vector2`

The maximum x and y values in the desired range.

#### Returns

`Vector2`

A reference to this vector.

***

### clampLength()

> **clampLength**(`min`, `max`): `Vector2`

Defined in: [three/src/math/Vector2.js:487](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L487)

If this vector's length is greater than the max value, it is replaced by
the max value.
If this vector's length is less than the min value, it is replaced by the
min value.

#### Parameters

##### min

`number`

The minimum value the vector length will be clamped to.

##### max

`number`

The maximum value the vector length will be clamped to.

#### Returns

`Vector2`

A reference to this vector.

***

### clampScalar()

> **clampScalar**(`minVal`, `maxVal`): `Vector2`

Defined in: [three/src/math/Vector2.js:468](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L468)

If this vector's x or y values are greater than the max value, they are
replaced by the max value.
If this vector's x or y values are less than the min value, they are
replaced by the min value.

#### Parameters

##### minVal

`number`

The minimum value the components will be clamped to.

##### maxVal

`number`

The maximum value the components will be clamped to.

#### Returns

`Vector2`

A reference to this vector.

***

### clone()

> **clone**(): `Vector2`

Defined in: [three/src/math/Vector2.js:200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L200)

Returns a new vector with copied values from this instance.

#### Returns

`Vector2`

A clone of this instance.

***

### copy()

> **copy**(`v`): `Vector2`

Defined in: [three/src/math/Vector2.js:212](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L212)

Copies the values of the given vector to this instance.

#### Parameters

##### v

`Vector2`

The vector to copy.

#### Returns

`Vector2`

A reference to this vector.

***

### cross()

> **cross**(`v`): `number`

Defined in: [three/src/math/Vector2.js:584](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L584)

Calculates the cross product of the given vector with this instance.

#### Parameters

##### v

`Vector2`

The vector to compute the cross product with.

#### Returns

`number`

The result of the cross product.

***

### distanceTo()

> **distanceTo**(`v`): `number`

Defined in: [three/src/math/Vector2.js:676](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L676)

Computes the distance from the given vector to this instance.

#### Parameters

##### v

`Vector2`

The vector to compute the distance to.

#### Returns

`number`

The distance.

***

### distanceToSquared()

> **distanceToSquared**(`v`): `number`

Defined in: [three/src/math/Vector2.js:690](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L690)

Computes the squared distance from the given vector to this instance.
If you are just comparing the distance with another distance, you should compare
the distance squared instead as it is slightly more efficient to calculate.

#### Parameters

##### v

`Vector2`

The vector to compute the squared distance to.

#### Returns

`number`

The squared distance.

***

### divide()

> **divide**(`v`): `Vector2`

Defined in: [three/src/math/Vector2.js:365](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L365)

Divides this instance by the given vector.

#### Parameters

##### v

`Vector2`

The vector to divide.

#### Returns

`Vector2`

A reference to this vector.

***

### divideScalar()

> **divideScalar**(`scalar`): `Vector2`

Defined in: [three/src/math/Vector2.js:380](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L380)

Divides this vector by the given scalar.

#### Parameters

##### scalar

`number`

The scalar to divide.

#### Returns

`Vector2`

A reference to this vector.

***

### dot()

> **dot**(`v`): `number`

Defined in: [three/src/math/Vector2.js:572](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L572)

Calculates the dot product of the given vector with this instance.

#### Parameters

##### v

`Vector2`

The vector to compute the dot product with.

#### Returns

`number`

The result of the dot product.

***

### equals()

> **equals**(`v`): `boolean`

Defined in: [three/src/math/Vector2.js:765](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L765)

Returns `true` if this vector is equal with the given one.

#### Parameters

##### v

`Vector2`

The vector to test for equality.

#### Returns

`boolean`

Whether this vector is equal with the given one.

***

### floor()

> **floor**(): `Vector2`

Defined in: [three/src/math/Vector2.js:500](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L500)

The components of this vector are rounded down to the nearest integer value.

#### Returns

`Vector2`

A reference to this vector.

***

### fromArray()

> **fromArray**(`array`, `offset`?): `Vector2`

Defined in: [three/src/math/Vector2.js:779](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L779)

Sets this vector's x value to be `array[ offset ]` and y
value to be `array[ offset + 1 ]`.

#### Parameters

##### array

`number`[]

An array holding the vector component values.

##### offset?

`number` = `0`

The offset into the array.

#### Returns

`Vector2`

A reference to this vector.

***

### fromBufferAttribute()

> **fromBufferAttribute**(`attribute`, `index`): `Vector2`

Defined in: [three/src/math/Vector2.js:812](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L812)

Sets the components of this vector from the given buffer attribute.

#### Parameters

##### attribute

`BufferAttribute`

The buffer attribute holding vector data.

##### index

`number`

The index into the attribute.

#### Returns

`Vector2`

A reference to this vector.

***

### getComponent()

> **getComponent**(`index`): `number`

Defined in: [three/src/math/Vector2.js:183](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L183)

Returns the value of the vector component which matches the given index.

#### Parameters

##### index

`number`

The component index. `0` equals to x, `1` equals to y.

#### Returns

`number`

A vector component value.

***

### length()

> **length**(): `number`

Defined in: [three/src/math/Vector2.js:608](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L608)

Computes the  Euclidean length (straight-line length) from (0, 0) to (x, y).

#### Returns

`number`

The length of this vector.

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: [three/src/math/Vector2.js:597](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L597)

Computes the square of the Euclidean length (straight-line length) from
(0, 0) to (x, y). If you are comparing the lengths of vectors, you should
compare the length squared instead as it is slightly more efficient to calculate.

#### Returns

`number`

The square length of this vector.

***

### lerp()

> **lerp**(`v`, `alpha`): `Vector2`

Defined in: [three/src/math/Vector2.js:731](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L731)

Linearly interpolates between the given vector and this instance, where
alpha is the percent distance along the line - alpha = 0 will be this
vector, and alpha = 1 will be the given one.

#### Parameters

##### v

`Vector2`

The vector to interpolate towards.

##### alpha

`number`

The interpolation factor, typically in the closed interval `[0, 1]`.

#### Returns

`Vector2`

A reference to this vector.

***

### lerpVectors()

> **lerpVectors**(`v1`, `v2`, `alpha`): `Vector2`

Defined in: [three/src/math/Vector2.js:750](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L750)

Linearly interpolates between the given vectors, where alpha is the percent
distance along the line - alpha = 0 will be first vector, and alpha = 1 will
be the second one. The result is stored in this instance.

#### Parameters

##### v1

`Vector2`

The first vector.

##### v2

`Vector2`

The second vector.

##### alpha

`number`

The interpolation factor, typically in the closed interval `[0, 1]`.

#### Returns

`Vector2`

A reference to this vector.

***

### manhattanDistanceTo()

> **manhattanDistanceTo**(`v`): `number`

Defined in: [three/src/math/Vector2.js:703](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L703)

Computes the Manhattan distance from the given vector to this instance.

#### Parameters

##### v

`Vector2`

The vector to compute the Manhattan distance to.

#### Returns

`number`

The Manhattan distance.

***

### manhattanLength()

> **manhattanLength**(): `number`

Defined in: [three/src/math/Vector2.js:619](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L619)

Computes the Manhattan length of this vector.

#### Returns

`number`

The length of this vector.

***

### max()

> **max**(`v`): `Vector2`

Defined in: [three/src/math/Vector2.js:428](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L428)

If this vector's x or y value is less than the given vector's x or y
value, replace that value with the corresponding max value.

#### Parameters

##### v

`Vector2`

The vector.

#### Returns

`Vector2`

A reference to this vector.

***

### min()

> **min**(`v`): `Vector2`

Defined in: [three/src/math/Vector2.js:412](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L412)

If this vector's x or y value is greater than the given vector's x or y
value, replace that value with the corresponding min value.

#### Parameters

##### v

`Vector2`

The vector.

#### Returns

`Vector2`

A reference to this vector.

***

### multiply()

> **multiply**(`v`): `Vector2`

Defined in: [three/src/math/Vector2.js:335](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L335)

Multiplies the given vector with this instance.

#### Parameters

##### v

`Vector2`

The vector to multiply.

#### Returns

`Vector2`

A reference to this vector.

***

### multiplyScalar()

> **multiplyScalar**(`scalar`): `Vector2`

Defined in: [three/src/math/Vector2.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L350)

Multiplies the given scalar value with all components of this instance.

#### Parameters

##### scalar

`number`

The scalar to multiply.

#### Returns

`Vector2`

A reference to this vector.

***

### negate()

> **negate**(): `Vector2`

Defined in: [three/src/math/Vector2.js:557](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L557)

Inverts this vector - i.e. sets x = -x and y = -y.

#### Returns

`Vector2`

A reference to this vector.

***

### normalize()

> **normalize**(): `Vector2`

Defined in: [three/src/math/Vector2.js:631](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L631)

Converts this vector to a unit vector - that is, sets it equal to a vector
with the same direction as this one, but with a vector length of `1`.

#### Returns

`Vector2`

A reference to this vector.

***

### random()

> **random**(): `Vector2`

Defined in: [three/src/math/Vector2.js:848](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L848)

Sets each component of this vector to a pseudo-random value between `0` and
`1`, excluding `1`.

#### Returns

`Vector2`

A reference to this vector.

***

### rotateAround()

> **rotateAround**(`center`, `angle`): `Vector2`

Defined in: [three/src/math/Vector2.js:828](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L828)

Rotates this vector around the given center by the given angle.

#### Parameters

##### center

`Vector2`

The point around which to rotate.

##### angle

`number`

The angle to rotate, in radians.

#### Returns

`Vector2`

A reference to this vector.

***

### round()

> **round**(): `Vector2`

Defined in: [three/src/math/Vector2.js:528](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L528)

The components of this vector are rounded to the nearest integer value

#### Returns

`Vector2`

A reference to this vector.

***

### roundToZero()

> **roundToZero**(): `Vector2`

Defined in: [three/src/math/Vector2.js:543](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L543)

The components of this vector are rounded towards zero (up if negative,
down if positive) to an integer value.

#### Returns

`Vector2`

A reference to this vector.

***

### set()

> **set**(`x`, `y`): `Vector2`

Defined in: [three/src/math/Vector2.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L104)

Sets the vector components.

#### Parameters

##### x

`number`

The value of the x component.

##### y

`number`

The value of the y component.

#### Returns

`Vector2`

A reference to this vector.

***

### setComponent()

> **setComponent**(`index`, `value`): `Vector2`

Defined in: [three/src/math/Vector2.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L163)

Allows to set a vector component with an index.

#### Parameters

##### index

`number`

The component index. `0` equals to x, `1` equals to y.

##### value

`number`

The value to set.

#### Returns

`Vector2`

A reference to this vector.

***

### setLength()

> **setLength**(`length`): `Vector2`

Defined in: [three/src/math/Vector2.js:716](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L716)

Sets this vector to a vector with the same direction as this one, but
with the specified length.

#### Parameters

##### length

`number`

The new length of this vector.

#### Returns

`Vector2`

A reference to this vector.

***

### setScalar()

> **setScalar**(`scalar`): `Vector2`

Defined in: [three/src/math/Vector2.js:119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L119)

Sets the vector components to the same value.

#### Parameters

##### scalar

`number`

The value to set for all vector components.

#### Returns

`Vector2`

A reference to this vector.

***

### setX()

> **setX**(`x`): `Vector2`

Defined in: [three/src/math/Vector2.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L134)

Sets the vector's x component to the given value

#### Parameters

##### x

`number`

The value to set.

#### Returns

`Vector2`

A reference to this vector.

***

### setY()

> **setY**(`y`): `Vector2`

Defined in: [three/src/math/Vector2.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L148)

Sets the vector's y component to the given value

#### Parameters

##### y

`number`

The value to set.

#### Returns

`Vector2`

A reference to this vector.

***

### sub()

> **sub**(`v`): `Vector2`

Defined in: [three/src/math/Vector2.js:289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L289)

Subtracts the given vector from this instance.

#### Parameters

##### v

`Vector2`

The vector to subtract.

#### Returns

`Vector2`

A reference to this vector.

***

### subScalar()

> **subScalar**(`s`): `Vector2`

Defined in: [three/src/math/Vector2.js:304](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L304)

Subtracts the given scalar value from all components of this instance.

#### Parameters

##### s

`number`

The scalar to subtract.

#### Returns

`Vector2`

A reference to this vector.

***

### subVectors()

> **subVectors**(`a`, `b`): `Vector2`

Defined in: [three/src/math/Vector2.js:320](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L320)

Subtracts the given vectors and stores the result in this instance.

#### Parameters

##### a

`Vector2`

The first vector.

##### b

`Vector2`

The second vector.

#### Returns

`Vector2`

A reference to this vector.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/Vector2.js:796](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector2.js#L796)

Writes the components of this vector to the given array. If no array is provided,
the method returns a new instance.

#### Parameters

##### array?

`number`[] = `[]`

The target array holding the vector components.

##### offset?

`number` = `0`

Index of the first element in the array.

#### Returns

`number`[]

The vector components.

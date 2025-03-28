---
editUrl: false
next: false
prev: false
title: "Vector4"
---

Defined in: [three/src/math/Vector4.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L27)

Class representing a 4D vector. A 4D vector is an ordered quadruplet of numbers
(labeled x, y, z and w), which can be used to represent a number of things, such as:

- A point in 4D space.
- A direction and length in 4D space. In three.js the length will
always be the Euclidean distance(straight-line distance) from `(0, 0, 0, 0)` to `(x, y, z, w)`
and the direction is also measured from `(0, 0, 0, 0)` towards `(x, y, z, w)`.
- Any arbitrary ordered quadruplet of numbers.

There are other things a 4D vector can be used to represent, however these
are the most common uses in *three.js*.

Iterating through a vector instance will yield its components `(x, y, z, w)` in
the corresponding order.
```js
const a = new THREE.Vector4( 0, 1, 0, 0 );

//no arguments; will be initialised to (0, 0, 0, 1)
const b = new THREE.Vector4( );

const d = a.dot( b );
```

## Constructors

### Constructor

> **new Vector4**(`x`?, `y`?, `z`?, `w`?): `Vector4`

Defined in: [three/src/math/Vector4.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L37)

Constructs a new 4D vector.

#### Parameters

##### x?

`number` = `0`

The x value of this vector.

##### y?

`number` = `0`

The y value of this vector.

##### z?

`number` = `0`

The z value of this vector.

##### w?

`number` = `1`

The w value of this vector.

#### Returns

`Vector4`

## Properties

### w

> **w**: `number`

Defined in: [three/src/math/Vector4.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L74)

The w value of this vector.

***

### x

> **x**: `number`

Defined in: [three/src/math/Vector4.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L53)

The x value of this vector.

***

### y

> **y**: `number`

Defined in: [three/src/math/Vector4.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L60)

The y value of this vector.

***

### z

> **z**: `number`

Defined in: [three/src/math/Vector4.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L67)

The z value of this vector.

## Accessors

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [three/src/math/Vector4.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L100)

Alias for [Vector4#w](/reference/three/classes/vector4/#w).

##### Returns

`number`

#### Set Signature

> **set** **height**(`value`): `void`

Defined in: [three/src/math/Vector4.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L106)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [three/src/math/Vector4.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L83)

Alias for [Vector4#z](/reference/three/classes/vector4/#z).

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [three/src/math/Vector4.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L89)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`number`, `void`, `unknown`\>

Defined in: [three/src/math/Vector4.js:1052](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L1052)

#### Returns

`Generator`\<`number`, `void`, `unknown`\>

***

### add()

> **add**(`v`): `Vector4`

Defined in: [three/src/math/Vector4.js:284](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L284)

Adds the given vector to this instance.

#### Parameters

##### v

`Vector4`

The vector to add.

#### Returns

`Vector4`

A reference to this vector.

***

### addScalar()

> **addScalar**(`s`): `Vector4`

Defined in: [three/src/math/Vector4.js:301](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L301)

Adds the given scalar value to all components of this instance.

#### Parameters

##### s

`number`

The scalar to add.

#### Returns

`Vector4`

A reference to this vector.

***

### addScaledVector()

> **addScaledVector**(`v`, `s`): `Vector4`

Defined in: [three/src/math/Vector4.js:337](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L337)

Adds the given vector scaled by the given factor to this instance.

#### Parameters

##### v

`Vector4`

The vector.

##### s

`number`

The factor that scales `v`.

#### Returns

`Vector4`

A reference to this vector.

***

### addVectors()

> **addVectors**(`a`, `b`): `Vector4`

Defined in: [three/src/math/Vector4.js:319](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L319)

Adds the given vectors and stores the result in this instance.

#### Parameters

##### a

`Vector4`

The first vector.

##### b

`Vector4`

The second vector.

#### Returns

`Vector4`

A reference to this vector.

***

### applyMatrix4()

> **applyMatrix4**(`m`): `Vector4`

Defined in: [three/src/math/Vector4.js:440](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L440)

Multiplies this vector with the given 4x4 matrix.

#### Parameters

##### m

`Matrix4`

The 4x4 matrix.

#### Returns

`Vector4`

A reference to this vector.

***

### ceil()

> **ceil**(): `Vector4`

Defined in: [three/src/math/Vector4.js:794](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L794)

The components of this vector are rounded up to the nearest integer value.

#### Returns

`Vector4`

A reference to this vector.

***

### clamp()

> **clamp**(`min`, `max`): `Vector4`

Defined in: [three/src/math/Vector4.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L721)

If this vector's x, y, z or w value is greater than the max vector's x, y, z or w
value, it is replaced by the corresponding value.
If this vector's x, y, z or w value is less than the min vector's x, y, z or w value,
it is replaced by the corresponding value.

#### Parameters

##### min

`Vector4`

The minimum x, y and z values.

##### max

`Vector4`

The maximum x, y and z values in the desired range.

#### Returns

`Vector4`

A reference to this vector.

***

### clampLength()

> **clampLength**(`min`, `max`): `Vector4`

Defined in: [three/src/math/Vector4.js:765](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L765)

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

`Vector4`

A reference to this vector.

***

### clampScalar()

> **clampScalar**(`minVal`, `maxVal`): `Vector4`

Defined in: [three/src/math/Vector4.js:744](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L744)

If this vector's x, y, z or w values are greater than the max value, they are
replaced by the max value.
If this vector's x, y, z or w values are less than the min value, they are
replaced by the min value.

#### Parameters

##### minVal

`number`

The minimum value the components will be clamped to.

##### maxVal

`number`

The maximum value the components will be clamped to.

#### Returns

`Vector4`

A reference to this vector.

***

### clone()

> **clone**(): `Vector4`

Defined in: [three/src/math/Vector4.js:255](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L255)

Returns a new vector with copied values from this instance.

#### Returns

`Vector4`

A clone of this instance.

***

### copy()

> **copy**(`v`): `Vector4`

Defined in: [three/src/math/Vector4.js:267](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L267)

Copies the values of the given vector to this instance.

#### Parameters

##### v

`any`

The vector to copy.

#### Returns

`Vector4`

A reference to this vector.

***

### divide()

> **divide**(`v`): `Vector4`

Defined in: [three/src/math/Vector4.js:460](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L460)

Divides this instance by the given vector.

#### Parameters

##### v

`Vector4`

The vector to divide.

#### Returns

`Vector4`

A reference to this vector.

***

### divideScalar()

> **divideScalar**(`scalar`): `Vector4`

Defined in: [three/src/math/Vector4.js:477](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L477)

Divides this vector by the given scalar.

#### Parameters

##### scalar

`number`

The scalar to divide.

#### Returns

`Vector4`

A reference to this vector.

***

### dot()

> **dot**(`v`): `number`

Defined in: [three/src/math/Vector4.js:860](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L860)

Calculates the dot product of the given vector with this instance.

#### Parameters

##### v

`Vector4`

The vector to compute the dot product with.

#### Returns

`number`

The result of the dot product.

***

### equals()

> **equals**(`v`): `boolean`

Defined in: [three/src/math/Vector4.js:973](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L973)

Returns `true` if this vector is equal with the given one.

#### Parameters

##### v

`Vector4`

The vector to test for equality.

#### Returns

`boolean`

Whether this vector is equal with the given one.

***

### floor()

> **floor**(): `Vector4`

Defined in: [three/src/math/Vector4.js:778](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L778)

The components of this vector are rounded down to the nearest integer value.

#### Returns

`Vector4`

A reference to this vector.

***

### fromArray()

> **fromArray**(`array`, `offset`?): `Vector4`

Defined in: [three/src/math/Vector4.js:987](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L987)

Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`,
z value to be `array[ offset + 2 ]`, w value to be `array[ offset + 3 ]`.

#### Parameters

##### array

`number`[]

An array holding the vector component values.

##### offset?

`number` = `0`

The offset into the array.

#### Returns

`Vector4`

A reference to this vector.

***

### fromBufferAttribute()

> **fromBufferAttribute**(`attribute`, `index`): `Vector4`

Defined in: [three/src/math/Vector4.js:1024](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L1024)

Sets the components of this vector from the given buffer attribute.

#### Parameters

##### attribute

`BufferAttribute`

The buffer attribute holding vector data.

##### index

`number`

The index into the attribute.

#### Returns

`Vector4`

A reference to this vector.

***

### getComponent()

> **getComponent**(`index`): `number`

Defined in: [three/src/math/Vector4.js:236](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L236)

Returns the value of the vector component which matches the given index.

#### Parameters

##### index

`number`

The component index. `0` equals to x, `1` equals to y,
`2` equals to z, `3` equals to w.

#### Returns

`number`

A vector component value.

***

### length()

> **length**(): `number`

Defined in: [three/src/math/Vector4.js:884](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L884)

Computes the  Euclidean length (straight-line length) from (0, 0, 0, 0) to (x, y, z, w).

#### Returns

`number`

The length of this vector.

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: [three/src/math/Vector4.js:873](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L873)

Computes the square of the Euclidean length (straight-line length) from
(0, 0, 0, 0) to (x, y, z, w). If you are comparing the lengths of vectors, you should
compare the length squared instead as it is slightly more efficient to calculate.

#### Returns

`number`

The square length of this vector.

***

### lerp()

> **lerp**(`v`, `alpha`): `Vector4`

Defined in: [three/src/math/Vector4.js:935](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L935)

Linearly interpolates between the given vector and this instance, where
alpha is the percent distance along the line - alpha = 0 will be this
vector, and alpha = 1 will be the given one.

#### Parameters

##### v

`Vector4`

The vector to interpolate towards.

##### alpha

`number`

The interpolation factor, typically in the closed interval `[0, 1]`.

#### Returns

`Vector4`

A reference to this vector.

***

### lerpVectors()

> **lerpVectors**(`v1`, `v2`, `alpha`): `Vector4`

Defined in: [three/src/math/Vector4.js:956](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L956)

Linearly interpolates between the given vectors, where alpha is the percent
distance along the line - alpha = 0 will be first vector, and alpha = 1 will
be the second one. The result is stored in this instance.

#### Parameters

##### v1

`Vector4`

The first vector.

##### v2

`Vector4`

The second vector.

##### alpha

`number`

The interpolation factor, typically in the closed interval `[0, 1]`.

#### Returns

`Vector4`

A reference to this vector.

***

### manhattanLength()

> **manhattanLength**(): `number`

Defined in: [three/src/math/Vector4.js:895](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L895)

Computes the Manhattan length of this vector.

#### Returns

`number`

The length of this vector.

***

### max()

> **max**(`v`): `Vector4`

Defined in: [three/src/math/Vector4.js:700](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L700)

If this vector's x, y, z or w value is less than the given vector's x, y, z or w
value, replace that value with the corresponding max value.

#### Parameters

##### v

`Vector4`

The vector.

#### Returns

`Vector4`

A reference to this vector.

***

### min()

> **min**(`v`): `Vector4`

Defined in: [three/src/math/Vector4.js:682](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L682)

If this vector's x, y, z or w value is greater than the given vector's x, y, z or w
value, replace that value with the corresponding min value.

#### Parameters

##### v

`Vector4`

The vector.

#### Returns

`Vector4`

A reference to this vector.

***

### multiply()

> **multiply**(`v`): `Vector4`

Defined in: [three/src/math/Vector4.js:406](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L406)

Multiplies the given vector with this instance.

#### Parameters

##### v

`Vector4`

The vector to multiply.

#### Returns

`Vector4`

A reference to this vector.

***

### multiplyScalar()

> **multiplyScalar**(`scalar`): `Vector4`

Defined in: [three/src/math/Vector4.js:423](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L423)

Multiplies the given scalar value with all components of this instance.

#### Parameters

##### scalar

`number`

The scalar to multiply.

#### Returns

`Vector4`

A reference to this vector.

***

### negate()

> **negate**(): `Vector4`

Defined in: [three/src/math/Vector4.js:843](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L843)

Inverts this vector - i.e. sets x = -x, y = -y, z = -z, w = -w.

#### Returns

`Vector4`

A reference to this vector.

***

### normalize()

> **normalize**(): `Vector4`

Defined in: [three/src/math/Vector4.js:907](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L907)

Converts this vector to a unit vector - that is, sets it equal to a vector
with the same direction as this one, but with a vector length of `1`.

#### Returns

`Vector4`

A reference to this vector.

***

### random()

> **random**(): `Vector4`

Defined in: [three/src/math/Vector4.js:1041](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L1041)

Sets each component of this vector to a pseudo-random value between `0` and
`1`, excluding `1`.

#### Returns

`Vector4`

A reference to this vector.

***

### round()

> **round**(): `Vector4`

Defined in: [three/src/math/Vector4.js:810](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L810)

The components of this vector are rounded to the nearest integer value

#### Returns

`Vector4`

A reference to this vector.

***

### roundToZero()

> **roundToZero**(): `Vector4`

Defined in: [three/src/math/Vector4.js:827](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L827)

The components of this vector are rounded towards zero (up if negative,
down if positive) to an integer value.

#### Returns

`Vector4`

A reference to this vector.

***

### set()

> **set**(`x`, `y`, `z`, `w`): `Vector4`

Defined in: [three/src/math/Vector4.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L121)

Sets the vector components.

#### Parameters

##### x

`number`

The value of the x component.

##### y

`number`

The value of the y component.

##### z

`number`

The value of the z component.

##### w

`number`

The value of the w component.

#### Returns

`Vector4`

A reference to this vector.

***

### setAxisAngleFromQuaternion()

> **setAxisAngleFromQuaternion**(`q`): `Vector4`

Defined in: [three/src/math/Vector4.js:490](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L490)

Sets the x, y and z components of this
vector to the quaternion's axis and w to the angle.

#### Parameters

##### q

`Quaternion`

The Quaternion to set.

#### Returns

`Vector4`

A reference to this vector.

***

### setAxisAngleFromRotationMatrix()

> **setAxisAngleFromRotationMatrix**(`m`): `Vector4`

Defined in: [three/src/math/Vector4.js:525](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L525)

Sets the x, y and z components of this
vector to the axis of rotation and w to the angle.

#### Parameters

##### m

`Matrix4`

A 4x4 matrix of which the upper left 3x3 matrix is a pure rotation matrix.

#### Returns

`Vector4`

A reference to this vector.

***

### setComponent()

> **setComponent**(`index`, `value`): `Vector4`

Defined in: [three/src/math/Vector4.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L213)

Allows to set a vector component with an index.

#### Parameters

##### index

`number`

The component index. `0` equals to x, `1` equals to y,
`2` equals to z, `3` equals to w.

##### value

`number`

The value to set.

#### Returns

`Vector4`

A reference to this vector.

***

### setFromMatrixPosition()

> **setFromMatrixPosition**(`m`): `Vector4`

Defined in: [three/src/math/Vector4.js:662](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L662)

Sets the vector components to the position elements of the
given transformation matrix.

#### Parameters

##### m

`Matrix4`

The 4x4 matrix.

#### Returns

`Vector4`

A reference to this vector.

***

### setLength()

> **setLength**(`length`): `Vector4`

Defined in: [three/src/math/Vector4.js:920](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L920)

Sets this vector to a vector with the same direction as this one, but
with the specified length.

#### Parameters

##### length

`number`

The new length of this vector.

#### Returns

`Vector4`

A reference to this vector.

***

### setScalar()

> **setScalar**(`scalar`): `Vector4`

Defined in: [three/src/math/Vector4.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L138)

Sets the vector components to the same value.

#### Parameters

##### scalar

`number`

The value to set for all vector components.

#### Returns

`Vector4`

A reference to this vector.

***

### setW()

> **setW**(`w`): `Vector4`

Defined in: [three/src/math/Vector4.js:197](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L197)

Sets the vector's w component to the given value

#### Parameters

##### w

`number`

The value to set.

#### Returns

`Vector4`

A reference to this vector.

***

### setX()

> **setX**(`x`): `Vector4`

Defined in: [three/src/math/Vector4.js:155](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L155)

Sets the vector's x component to the given value

#### Parameters

##### x

`number`

The value to set.

#### Returns

`Vector4`

A reference to this vector.

***

### setY()

> **setY**(`y`): `Vector4`

Defined in: [three/src/math/Vector4.js:169](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L169)

Sets the vector's y component to the given value

#### Parameters

##### y

`number`

The value to set.

#### Returns

`Vector4`

A reference to this vector.

***

### setZ()

> **setZ**(`z`): `Vector4`

Defined in: [three/src/math/Vector4.js:183](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L183)

Sets the vector's z component to the given value

#### Parameters

##### z

`number`

The value to set.

#### Returns

`Vector4`

A reference to this vector.

***

### sub()

> **sub**(`v`): `Vector4`

Defined in: [three/src/math/Vector4.js:354](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L354)

Subtracts the given vector from this instance.

#### Parameters

##### v

`Vector4`

The vector to subtract.

#### Returns

`Vector4`

A reference to this vector.

***

### subScalar()

> **subScalar**(`s`): `Vector4`

Defined in: [three/src/math/Vector4.js:371](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L371)

Subtracts the given scalar value from all components of this instance.

#### Parameters

##### s

`number`

The scalar to subtract.

#### Returns

`Vector4`

A reference to this vector.

***

### subVectors()

> **subVectors**(`a`, `b`): `Vector4`

Defined in: [three/src/math/Vector4.js:389](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L389)

Subtracts the given vectors and stores the result in this instance.

#### Parameters

##### a

`Vector4`

The first vector.

##### b

`Vector4`

The second vector.

#### Returns

`Vector4`

A reference to this vector.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/Vector4.js:1006](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector4.js#L1006)

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

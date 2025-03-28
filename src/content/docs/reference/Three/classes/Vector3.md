---
editUrl: false
next: false
prev: false
title: "Vector3"
---

Defined in: [three/src/math/Vector3.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L29)

Class representing a 3D vector. A 3D vector is an ordered triplet of numbers
(labeled x, y and z), which can be used to represent a number of things, such as:

- A point in 3D space.
- A direction and length in 3D space. In three.js the length will
always be the Euclidean distance(straight-line distance) from `(0, 0, 0)` to `(x, y, z)`
and the direction is also measured from `(0, 0, 0)` towards `(x, y, z)`.
- Any arbitrary ordered triplet of numbers.

There are other things a 3D vector can be used to represent, such as
momentum vectors and so on, however these are the most
common uses in three.js.

Iterating through a vector instance will yield its components `(x, y, z)` in
the corresponding order.
```js
const a = new THREE.Vector3( 0, 1, 0 );

//no arguments; will be initialised to (0, 0, 0)
const b = new THREE.Vector3( );

const d = a.distanceTo( b );
```

## Constructors

### Constructor

> **new Vector3**(`x`?, `y`?, `z`?): `Vector3`

Defined in: [three/src/math/Vector3.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L38)

Constructs a new 3D vector.

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

#### Returns

`Vector3`

## Properties

### x

> **x**: `number`

Defined in: [three/src/math/Vector3.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L54)

The x value of this vector.

***

### y

> **y**: `number`

Defined in: [three/src/math/Vector3.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L61)

The y value of this vector.

***

### z

> **z**: `number`

Defined in: [three/src/math/Vector3.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L68)

The z value of this vector.

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`number`, `void`, `unknown`\>

Defined in: [three/src/math/Vector3.js:1248](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1248)

#### Returns

`Generator`\<`number`, `void`, `unknown`\>

***

### add()

> **add**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L224)

Adds the given vector to this instance.

#### Parameters

##### v

`Vector3`

The vector to add.

#### Returns

`Vector3`

A reference to this vector.

***

### addScalar()

> **addScalar**(`s`): `Vector3`

Defined in: [three/src/math/Vector3.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L240)

Adds the given scalar value to all components of this instance.

#### Parameters

##### s

`number`

The scalar to add.

#### Returns

`Vector3`

A reference to this vector.

***

### addScaledVector()

> **addScaledVector**(`v`, `s`): `Vector3`

Defined in: [three/src/math/Vector3.js:274](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L274)

Adds the given vector scaled by the given factor to this instance.

#### Parameters

##### v

`any`

The vector.

##### s

`number`

The factor that scales `v`.

#### Returns

`Vector3`

A reference to this vector.

***

### addVectors()

> **addVectors**(`a`, `b`): `Vector3`

Defined in: [three/src/math/Vector3.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L257)

Adds the given vectors and stores the result in this instance.

#### Parameters

##### a

`Vector3`

The first vector.

##### b

`Vector3`

The second vector.

#### Returns

`Vector3`

A reference to this vector.

***

### angleTo()

> **angleTo**(`v`): `number`

Defined in: [three/src/math/Vector3.js:931](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L931)

Returns the angle between the given vector and this instance in radians.

#### Parameters

##### v

`Vector3`

The vector to compute the angle with.

#### Returns

`number`

The angle in radians.

***

### applyAxisAngle()

> **applyAxisAngle**(`axis`, `angle`): `Vector3`

Defined in: [three/src/math/Vector3.js:401](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L401)

Applies a rotation specified by an axis and an angle to this vector.

#### Parameters

##### axis

`Vector3`

A normalized vector representing the rotation axis.

##### angle

`number`

The angle in radians.

#### Returns

`Vector3`

A reference to this vector.

***

### applyEuler()

> **applyEuler**(`euler`): `Vector3`

Defined in: [three/src/math/Vector3.js:388](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L388)

Applies the given Euler rotation to this vector.

#### Parameters

##### euler

`Euler`

The Euler angles.

#### Returns

`Vector3`

A reference to this vector.

***

### applyMatrix3()

> **applyMatrix3**(`m`): `Vector3`

Defined in: [three/src/math/Vector3.js:413](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L413)

Multiplies this vector with the given 3x3 matrix.

#### Parameters

##### m

`Matrix3`

The 3x3 matrix.

#### Returns

`Vector3`

A reference to this vector.

***

### applyMatrix4()

> **applyMatrix4**(`m`): `Vector3`

Defined in: [three/src/math/Vector3.js:446](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L446)

Multiplies this vector (with an implicit 1 in the 4th dimension) by m, and
divides by perspective.

#### Parameters

##### m

`Matrix4`

The matrix to apply.

#### Returns

`Vector3`

A reference to this vector.

***

### applyNormalMatrix()

> **applyNormalMatrix**(`m`): `Vector3`

Defined in: [three/src/math/Vector3.js:433](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L433)

Multiplies this vector by the given normal matrix and normalizes
the result.

#### Parameters

##### m

`Matrix3`

The normal matrix.

#### Returns

`Vector3`

A reference to this vector.

***

### applyQuaternion()

> **applyQuaternion**(`q`): `Vector3`

Defined in: [three/src/math/Vector3.js:467](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L467)

Applies the given Quaternion to this vector.

#### Parameters

##### q

[`Quaternion`](/reference/three/classes/quaternion/)

The Quaternion.

#### Returns

`Vector3`

A reference to this vector.

***

### ceil()

> **ceil**(): `Vector3`

Defined in: [three/src/math/Vector3.js:679](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L679)

The components of this vector are rounded up to the nearest integer value.

#### Returns

`Vector3`

A reference to this vector.

***

### clamp()

> **clamp**(`min`, `max`): `Vector3`

Defined in: [three/src/math/Vector3.js:609](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L609)

If this vector's x, y or z value is greater than the max vector's x, y or z
value, it is replaced by the corresponding value.
If this vector's x, y or z value is less than the min vector's x, y or z value,
it is replaced by the corresponding value.

#### Parameters

##### min

`Vector3`

The minimum x, y and z values.

##### max

`Vector3`

The maximum x, y and z values in the desired range.

#### Returns

`Vector3`

A reference to this vector.

***

### clampLength()

> **clampLength**(`min`, `max`): `Vector3`

Defined in: [three/src/math/Vector3.js:651](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L651)

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

`Vector3`

A reference to this vector.

***

### clampScalar()

> **clampScalar**(`minVal`, `maxVal`): `Vector3`

Defined in: [three/src/math/Vector3.js:631](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L631)

If this vector's x, y or z values are greater than the max value, they are
replaced by the max value.
If this vector's x, y or z values are less than the min value, they are
replaced by the min value.

#### Parameters

##### minVal

`number`

The minimum value the components will be clamped to.

##### maxVal

`number`

The maximum value the components will be clamped to.

#### Returns

`Vector3`

A reference to this vector.

***

### clone()

> **clone**(): `Vector3`

Defined in: [three/src/math/Vector3.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L196)

Returns a new vector with copied values from this instance.

#### Returns

`Vector3`

A clone of this instance.

***

### copy()

> **copy**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:208](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L208)

Copies the values of the given vector to this instance.

#### Parameters

##### v

`Vector3`

The vector to copy.

#### Returns

`Vector3`

A reference to this vector.

***

### cross()

> **cross**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:854](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L854)

Calculates the cross product of the given vector with this instance.

#### Parameters

##### v

`Vector3`

The vector to compute the cross product with.

#### Returns

`Vector3`

The result of the cross product.

***

### crossVectors()

> **crossVectors**(`a`, `b`): `Vector3`

Defined in: [three/src/math/Vector3.js:868](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L868)

Calculates the cross product of the given vectors and stores the result
in this instance.

#### Parameters

##### a

`Vector3`

The first vector.

##### b

`Vector3`

The second vector.

#### Returns

`Vector3`

A reference to this vector.

***

### distanceTo()

> **distanceTo**(`v`): `number`

Defined in: [three/src/math/Vector3.js:951](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L951)

Computes the distance from the given vector to this instance.

#### Parameters

##### v

`Vector3`

The vector to compute the distance to.

#### Returns

`number`

The distance.

***

### distanceToSquared()

> **distanceToSquared**(`v`): `number`

Defined in: [three/src/math/Vector3.js:965](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L965)

Computes the squared distance from the given vector to this instance.
If you are just comparing the distance with another distance, you should compare
the distance squared instead as it is slightly more efficient to calculate.

#### Parameters

##### v

`Vector3`

The vector to compute the squared distance to.

#### Returns

`number`

The squared distance.

***

### divide()

> **divide**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:543](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L543)

Divides this instance by the given vector.

#### Parameters

##### v

`Vector3`

The vector to divide.

#### Returns

`Vector3`

A reference to this vector.

***

### divideScalar()

> **divideScalar**(`scalar`): `Vector3`

Defined in: [three/src/math/Vector3.js:559](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L559)

Divides this vector by the given scalar.

#### Parameters

##### scalar

`number`

The scalar to divide.

#### Returns

`Vector3`

A reference to this vector.

***

### dot()

> **dot**(`v`): `number`

Defined in: [three/src/math/Vector3.js:741](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L741)

Calculates the dot product of the given vector with this instance.

#### Parameters

##### v

`Vector3`

The vector to compute the dot product with.

#### Returns

`number`

The result of the dot product.

***

### equals()

> **equals**(`v`): `boolean`

Defined in: [three/src/math/Vector3.js:1152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1152)

Returns `true` if this vector is equal with the given one.

#### Parameters

##### v

`Vector3`

The vector to test for equality.

#### Returns

`boolean`

Whether this vector is equal with the given one.

***

### floor()

> **floor**(): `Vector3`

Defined in: [three/src/math/Vector3.js:664](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L664)

The components of this vector are rounded down to the nearest integer value.

#### Returns

`Vector3`

A reference to this vector.

***

### fromArray()

> **fromArray**(`array`, `offset`?): `Vector3`

Defined in: [three/src/math/Vector3.js:1166](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1166)

Sets this vector's x value to be `array[ offset ]`, y value to be `array[ offset + 1 ]`
and z value to be `array[ offset + 2 ]`.

#### Parameters

##### array

`number`[]

An array holding the vector component values.

##### offset?

`number` = `0`

The offset into the array.

#### Returns

`Vector3`

A reference to this vector.

***

### fromBufferAttribute()

> **fromBufferAttribute**(`attribute`, `index`): `Vector3`

Defined in: [three/src/math/Vector3.js:1201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1201)

Sets the components of this vector from the given buffer attribute.

#### Parameters

##### attribute

`BufferAttribute`

The buffer attribute holding vector data.

##### index

`number`

The index into the attribute.

#### Returns

`Vector3`

A reference to this vector.

***

### getComponent()

> **getComponent**(`index`): `number`

Defined in: [three/src/math/Vector3.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L178)

Returns the value of the vector component which matches the given index.

#### Parameters

##### index

`number`

The component index. `0` equals to x, `1` equals to y, `2` equals to z.

#### Returns

`number`

A vector component value.

***

### length()

> **length**(): `number`

Defined in: [three/src/math/Vector3.js:767](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L767)

Computes the  Euclidean length (straight-line length) from (0, 0, 0) to (x, y, z).

#### Returns

`number`

The length of this vector.

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: [three/src/math/Vector3.js:756](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L756)

Computes the square of the Euclidean length (straight-line length) from
(0, 0, 0) to (x, y, z). If you are comparing the lengths of vectors, you should
compare the length squared instead as it is slightly more efficient to calculate.

#### Returns

`number`

The square length of this vector.

***

### lerp()

> **lerp**(`v`, `alpha`): `Vector3`

Defined in: [three/src/math/Vector3.js:818](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L818)

Linearly interpolates between the given vector and this instance, where
alpha is the percent distance along the line - alpha = 0 will be this
vector, and alpha = 1 will be the given one.

#### Parameters

##### v

`Vector3`

The vector to interpolate towards.

##### alpha

`number`

The interpolation factor, typically in the closed interval `[0, 1]`.

#### Returns

`Vector3`

A reference to this vector.

***

### lerpVectors()

> **lerpVectors**(`v1`, `v2`, `alpha`): `Vector3`

Defined in: [three/src/math/Vector3.js:838](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L838)

Linearly interpolates between the given vectors, where alpha is the percent
distance along the line - alpha = 0 will be first vector, and alpha = 1 will
be the second one. The result is stored in this instance.

#### Parameters

##### v1

`Vector3`

The first vector.

##### v2

`Vector3`

The second vector.

##### alpha

`number`

The interpolation factor, typically in the closed interval `[0, 1]`.

#### Returns

`Vector3`

A reference to this vector.

***

### manhattanDistanceTo()

> **manhattanDistanceTo**(`v`): `number`

Defined in: [three/src/math/Vector3.js:979](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L979)

Computes the Manhattan distance from the given vector to this instance.

#### Parameters

##### v

`Vector3`

The vector to compute the Manhattan distance to.

#### Returns

`number`

The Manhattan distance.

***

### manhattanLength()

> **manhattanLength**(): `number`

Defined in: [three/src/math/Vector3.js:778](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L778)

Computes the Manhattan length of this vector.

#### Returns

`number`

The length of this vector.

***

### max()

> **max**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:589](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L589)

If this vector's x, y or z value is less than the given vector's x, y or z
value, replace that value with the corresponding max value.

#### Parameters

##### v

`Vector3`

The vector.

#### Returns

`Vector3`

A reference to this vector.

***

### min()

> **min**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:572](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L572)

If this vector's x, y or z value is greater than the given vector's x, y or z
value, replace that value with the corresponding min value.

#### Parameters

##### v

`Vector3`

The vector.

#### Returns

`Vector3`

A reference to this vector.

***

### multiply()

> **multiply**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:339](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L339)

Multiplies the given vector with this instance.

#### Parameters

##### v

`Vector3`

The vector to multiply.

#### Returns

`Vector3`

A reference to this vector.

***

### multiplyScalar()

> **multiplyScalar**(`scalar`): `Vector3`

Defined in: [three/src/math/Vector3.js:355](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L355)

Multiplies the given scalar value with all components of this instance.

#### Parameters

##### scalar

`number`

The scalar to multiply.

#### Returns

`Vector3`

A reference to this vector.

***

### multiplyVectors()

> **multiplyVectors**(`a`, `b`): `Vector3`

Defined in: [three/src/math/Vector3.js:372](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L372)

Multiplies the given vectors and stores the result in this instance.

#### Parameters

##### a

`Vector3`

The first vector.

##### b

`Vector3`

The second vector.

#### Returns

`Vector3`

A reference to this vector.

***

### negate()

> **negate**(): `Vector3`

Defined in: [three/src/math/Vector3.js:725](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L725)

Inverts this vector - i.e. sets x = -x, y = -y and z = -z.

#### Returns

`Vector3`

A reference to this vector.

***

### normalize()

> **normalize**(): `Vector3`

Defined in: [three/src/math/Vector3.js:790](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L790)

Converts this vector to a unit vector - that is, sets it equal to a vector
with the same direction as this one, but with a vector length of `1`.

#### Returns

`Vector3`

A reference to this vector.

***

### project()

> **project**(`camera`): `Vector3`

Defined in: [three/src/math/Vector3.js:495](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L495)

Projects this vector from world space into the camera's normalized
device coordinate (NDC) space.

#### Parameters

##### camera

`Camera`

The camera.

#### Returns

`Vector3`

A reference to this vector.

***

### projectOnPlane()

> **projectOnPlane**(`planeNormal`): `Vector3`

Defined in: [three/src/math/Vector3.js:906](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L906)

Projects this vector onto a plane by subtracting this
vector projected onto the plane's normal from this vector.

#### Parameters

##### planeNormal

`Vector3`

The plane normal.

#### Returns

`Vector3`

A reference to this vector.

***

### projectOnVector()

> **projectOnVector**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:887](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L887)

Projects this vector onto the given one.

#### Parameters

##### v

`Vector3`

The vector to project to.

#### Returns

`Vector3`

A reference to this vector.

***

### random()

> **random**(): `Vector3`

Defined in: [three/src/math/Vector3.js:1217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1217)

Sets each component of this vector to a pseudo-random value between `0` and
`1`, excluding `1`.

#### Returns

`Vector3`

A reference to this vector.

***

### randomDirection()

> **randomDirection**(): `Vector3`

Defined in: [three/src/math/Vector3.js:1232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1232)

Sets this vector to a uniformly random point on a unit sphere.

#### Returns

`Vector3`

A reference to this vector.

***

### reflect()

> **reflect**(`normal`): `Vector3`

Defined in: [three/src/math/Vector3.js:920](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L920)

Reflects this vector off a plane orthogonal to the given normal vector.

#### Parameters

##### normal

`Vector3`

The (normalized) normal vector.

#### Returns

`Vector3`

A reference to this vector.

***

### round()

> **round**(): `Vector3`

Defined in: [three/src/math/Vector3.js:694](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L694)

The components of this vector are rounded to the nearest integer value

#### Returns

`Vector3`

A reference to this vector.

***

### roundToZero()

> **roundToZero**(): `Vector3`

Defined in: [three/src/math/Vector3.js:710](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L710)

The components of this vector are rounded towards zero (up if negative,
down if positive) to an integer value.

#### Returns

`Vector3`

A reference to this vector.

***

### set()

> **set**(`x`, `y`, `z`): `Vector3`

Defined in: [three/src/math/Vector3.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L80)

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

#### Returns

`Vector3`

A reference to this vector.

***

### setComponent()

> **setComponent**(`index`, `value`): `Vector3`

Defined in: [three/src/math/Vector3.js:157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L157)

Allows to set a vector component with an index.

#### Parameters

##### index

`number`

The component index. `0` equals to x, `1` equals to y, `2` equals to z.

##### value

`number`

The value to set.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromColor()

> **setFromColor**(`c`): `Vector3`

Defined in: [three/src/math/Vector3.js:1136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1136)

Sets the vector components from the RGB components of the
given color.

#### Parameters

##### c

`Color`

The color to set.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromCylindrical()

> **setFromCylindrical**(`c`): `Vector3`

Defined in: [three/src/math/Vector3.js:1023](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1023)

Sets the vector components from the given cylindrical coordinates.

#### Parameters

##### c

`Cylindrical`

The cylindrical coordinates.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromCylindricalCoords()

> **setFromCylindricalCoords**(`radius`, `theta`, `y`): `Vector3`

Defined in: [three/src/math/Vector3.js:1037](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1037)

Sets the vector components from the given cylindrical coordinates.

#### Parameters

##### radius

`number`

The radius.

##### theta

`number`

The theta angle in radians.

##### y

`number`

The y value.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromEuler()

> **setFromEuler**(`e`): `Vector3`

Defined in: [three/src/math/Vector3.js:1119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1119)

Sets the vector components from the given Euler angles.

#### Parameters

##### e

`Euler`

The Euler angles to set.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromMatrix3Column()

> **setFromMatrix3Column**(`m`, `index`): `Vector3`

Defined in: [three/src/math/Vector3.js:1107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1107)

Sets the vector components from the specified matrix column.

#### Parameters

##### m

`Matrix3`

The 3x3 matrix.

##### index

`number`

The column index.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromMatrixColumn()

> **setFromMatrixColumn**(`m`, `index`): `Vector3`

Defined in: [three/src/math/Vector3.js:1094](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1094)

Sets the vector components from the specified matrix column.

#### Parameters

##### m

`Matrix4`

The 4x4 matrix.

##### index

`number`

The column index.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromMatrixPosition()

> **setFromMatrixPosition**(`m`): `Vector3`

Defined in: [three/src/math/Vector3.js:1054](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1054)

Sets the vector components to the position elements of the
given transformation matrix.

#### Parameters

##### m

`Matrix4`

The 4x4 matrix.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromMatrixScale()

> **setFromMatrixScale**(`m`): `Vector3`

Defined in: [three/src/math/Vector3.js:1073](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1073)

Sets the vector components to the scale elements of the
given transformation matrix.

#### Parameters

##### m

`Matrix4`

The 4x4 matrix.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromSpherical()

> **setFromSpherical**(`s`): `Vector3`

Defined in: [three/src/math/Vector3.js:991](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L991)

Sets the vector components from the given spherical coordinates.

#### Parameters

##### s

`Spherical`

The spherical coordinates.

#### Returns

`Vector3`

A reference to this vector.

***

### setFromSphericalCoords()

> **setFromSphericalCoords**(`radius`, `phi`, `theta`): `Vector3`

Defined in: [three/src/math/Vector3.js:1005](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1005)

Sets the vector components from the given spherical coordinates.

#### Parameters

##### radius

`number`

The radius.

##### phi

`number`

The phi angle in radians.

##### theta

`number`

The theta angle in radians.

#### Returns

`Vector3`

A reference to this vector.

***

### setLength()

> **setLength**(`length`): `Vector3`

Defined in: [three/src/math/Vector3.js:803](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L803)

Sets this vector to a vector with the same direction as this one, but
with the specified length.

#### Parameters

##### length

`number`

The new length of this vector.

#### Returns

`Vector3`

A reference to this vector.

***

### setScalar()

> **setScalar**(`scalar`): `Vector3`

Defined in: [three/src/math/Vector3.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L98)

Sets the vector components to the same value.

#### Parameters

##### scalar

`number`

The value to set for all vector components.

#### Returns

`Vector3`

A reference to this vector.

***

### setX()

> **setX**(`x`): `Vector3`

Defined in: [three/src/math/Vector3.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L114)

Sets the vector's x component to the given value

#### Parameters

##### x

`number`

The value to set.

#### Returns

`Vector3`

A reference to this vector.

***

### setY()

> **setY**(`y`): `Vector3`

Defined in: [three/src/math/Vector3.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L128)

Sets the vector's y component to the given value

#### Parameters

##### y

`number`

The value to set.

#### Returns

`Vector3`

A reference to this vector.

***

### setZ()

> **setZ**(`z`): `Vector3`

Defined in: [three/src/math/Vector3.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L142)

Sets the vector's z component to the given value

#### Parameters

##### z

`number`

The value to set.

#### Returns

`Vector3`

A reference to this vector.

***

### sub()

> **sub**(`v`): `Vector3`

Defined in: [three/src/math/Vector3.js:290](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L290)

Subtracts the given vector from this instance.

#### Parameters

##### v

`Vector3`

The vector to subtract.

#### Returns

`Vector3`

A reference to this vector.

***

### subScalar()

> **subScalar**(`s`): `Vector3`

Defined in: [three/src/math/Vector3.js:306](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L306)

Subtracts the given scalar value from all components of this instance.

#### Parameters

##### s

`number`

The scalar to subtract.

#### Returns

`Vector3`

A reference to this vector.

***

### subVectors()

> **subVectors**(`a`, `b`): `Vector3`

Defined in: [three/src/math/Vector3.js:323](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L323)

Subtracts the given vectors and stores the result in this instance.

#### Parameters

##### a

`Vector3`

The first vector.

##### b

`Vector3`

The second vector.

#### Returns

`Vector3`

A reference to this vector.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/Vector3.js:1184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L1184)

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

***

### transformDirection()

> **transformDirection**(`m`): `Vector3`

Defined in: [three/src/math/Vector3.js:521](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L521)

Transforms the direction of this vector by a matrix (the upper left 3 x 3
subset of the given 4x4 matrix and then normalizes the result.

#### Parameters

##### m

`Matrix4`

The matrix.

#### Returns

`Vector3`

A reference to this vector.

***

### unproject()

> **unproject**(`camera`): `Vector3`

Defined in: [three/src/math/Vector3.js:508](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Vector3.js#L508)

Unprojects this vector from the camera's normalized device coordinate (NDC)
space into world space.

#### Parameters

##### camera

`Camera`

The camera.

#### Returns

`Vector3`

A reference to this vector.

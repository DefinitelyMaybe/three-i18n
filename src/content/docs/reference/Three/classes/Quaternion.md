---
editUrl: false
next: false
prev: false
title: "Quaternion"
---

Defined in: [three/src/math/Quaternion.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L18)

Class for representing a Quaternion. Quaternions are used in three.js to represent rotations.

Iterating through a vector instance will yield its components `(x, y, z, w)` in
the corresponding order.

Note that three.js expects Quaternions to be normalized.
```js
const quaternion = new THREE.Quaternion();
quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );

const vector = new THREE.Vector3( 1, 0, 0 );
vector.applyQuaternion( quaternion );
```

## Constructors

### Constructor

> **new Quaternion**(`x`?, `y`?, `z`?, `w`?): `Quaternion`

Defined in: [three/src/math/Quaternion.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L28)

Constructs a new quaternion.

#### Parameters

##### x?

`number` = `0`

The x value of this quaternion.

##### y?

`number` = `0`

The y value of this quaternion.

##### z?

`number` = `0`

The z value of this quaternion.

##### w?

`number` = `1`

The w value of this quaternion.

#### Returns

`Quaternion`

## Properties

### \_w

> **\_w**: `number`

Defined in: [three/src/math/Quaternion.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L42)

***

### \_x

> **\_x**: `number`

Defined in: [three/src/math/Quaternion.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L39)

***

### \_y

> **\_y**: `number`

Defined in: [three/src/math/Quaternion.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L40)

***

### \_z

> **\_z**: `number`

Defined in: [three/src/math/Quaternion.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L41)

***

### isQuaternion

> `readonly` **isQuaternion**: `boolean`

Defined in: [three/src/math/Quaternion.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L37)

This flag can be used for type testing.

#### Default

```ts
true
```

## Accessors

### w

#### Get Signature

> **get** **w**(): `number`

Defined in: [three/src/math/Quaternion.js:236](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L236)

The w value of this quaternion.

##### Default

```ts
1
```

##### Returns

`number`

#### Set Signature

> **set** **w**(`value`): `void`

Defined in: [three/src/math/Quaternion.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L242)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [three/src/math/Quaternion.js:179](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L179)

The x value of this quaternion.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [three/src/math/Quaternion.js:185](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L185)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [three/src/math/Quaternion.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L198)

The y value of this quaternion.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [three/src/math/Quaternion.js:204](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L204)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [three/src/math/Quaternion.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L217)

The z value of this quaternion.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [three/src/math/Quaternion.js:223](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L223)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### \_onChange()

> **\_onChange**(`callback`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:921](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L921)

#### Parameters

##### callback

`any`

#### Returns

`Quaternion`

***

### \_onChangeCallback()

> **\_onChangeCallback**(): `void`

Defined in: [three/src/math/Quaternion.js:929](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L929)

#### Returns

`void`

***

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`number`, `void`, `unknown`\>

Defined in: [three/src/math/Quaternion.js:931](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L931)

#### Returns

`Generator`\<`number`, `void`, `unknown`\>

***

### angleTo()

> **angleTo**(`q`): `number`

Defined in: [three/src/math/Quaternion.js:528](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L528)

Returns the angle between this quaternion and the given one in radians.

#### Parameters

##### q

`Quaternion`

The quaternion to compute the angle with.

#### Returns

`number`

The angle in radians.

***

### clone()

> **clone**(): `Quaternion`

Defined in: [three/src/math/Quaternion.js:276](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L276)

Returns a new quaternion with copied values from this instance.

#### Returns

`Quaternion`

A clone of this instance.

***

### conjugate()

> **conjugate**(): `Quaternion`

Defined in: [three/src/math/Quaternion.js:587](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L587)

Returns the rotational conjugate of this quaternion. The conjugate of a
quaternion represents the same rotation in the opposite direction about
the rotational axis.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### copy()

> **copy**(`quaternion`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L288)

Copies the values of the given quaternion to this instance.

#### Parameters

##### quaternion

`Quaternion`

The quaternion to copy.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### dot()

> **dot**(`v`): `number`

Defined in: [three/src/math/Quaternion.js:605](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L605)

Calculates the dot product of this quaternion and the given one.

#### Parameters

##### v

`Quaternion`

The quaternion to compute the dot product with.

#### Returns

`number`

The result of the dot product.

***

### equals()

> **equals**(`quaternion`): `boolean`

Defined in: [three/src/math/Quaternion.js:844](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L844)

Returns `true` if this quaternion is equal with the given one.

#### Parameters

##### quaternion

`Quaternion`

The quaternion to test for equality.

#### Returns

`boolean`

Whether this quaternion is equal with the given one.

***

### fromArray()

> **fromArray**(`array`, `offset`?): `Quaternion`

Defined in: [three/src/math/Quaternion.js:857](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L857)

Sets this quaternion's components from the given array.

#### Parameters

##### array

`number`[]

An array holding the quaternion component values.

##### offset?

`number` = `0`

The offset into the array.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### fromBufferAttribute()

> **fromBufferAttribute**(`attribute`, `index`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:896](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L896)

Sets the components of this quaternion from the given buffer attribute.

#### Parameters

##### attribute

`BufferAttribute`

The buffer attribute holding quaternion data.

##### index

`number`

The index into the attribute.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### identity()

> **identity**(): `Quaternion`

Defined in: [three/src/math/Quaternion.js:562](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L562)

Sets this quaternion to the identity quaternion; that is, to the
quaternion that represents "no rotation".

#### Returns

`Quaternion`

A reference to this quaternion.

***

### invert()

> **invert**(): `Quaternion`

Defined in: [three/src/math/Quaternion.js:574](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L574)

Inverts this quaternion via [Quaternion#conjugate](/reference/three/classes/quaternion/#conjugate). The
quaternion is assumed to have unit length.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### length()

> **length**(): `number`

Defined in: [three/src/math/Quaternion.js:631](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L631)

Computes the Euclidean length (straight-line length) of this quaternion,
considered as a 4 dimensional vector.

#### Returns

`number`

The Euclidean length.

***

### lengthSq()

> **lengthSq**(): `number`

Defined in: [three/src/math/Quaternion.js:619](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L619)

Computes the squared Euclidean length (straight-line length) of this quaternion,
considered as a 4 dimensional vector. This can be useful if you are comparing the
lengths of two quaternions, as this is a slightly more efficient calculation than
[Quaternion#length](/reference/three/classes/quaternion/#length).

#### Returns

`number`

The squared Euclidean length.

***

### multiply()

> **multiply**(`q`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:677](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L677)

Multiplies this quaternion by the given one.

#### Parameters

##### q

`Quaternion`

The quaternion.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### multiplyQuaternions()

> **multiplyQuaternions**(`a`, `b`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:702](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L702)

Multiplies the given quaternions and stores the result in this instance.

#### Parameters

##### a

`Quaternion`

The first quaternion.

##### b

`Quaternion`

The second quaternion.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### normalize()

> **normalize**(): `Quaternion`

Defined in: [three/src/math/Quaternion.js:643](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L643)

Normalizes this quaternion - that is, calculated the quaternion that performs
the same rotation as this one, but has a length equal to `1`.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### premultiply()

> **premultiply**(`q`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:689](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L689)

Pre-multiplies this quaternion by the given one.

#### Parameters

##### q

`Quaternion`

The quaternion.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### random()

> **random**(): `Quaternion`

Defined in: [three/src/math/Quaternion.js:816](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L816)

Sets this quaternion to a uniformly random, normalized quaternion.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### rotateTowards()

> **rotateTowards**(`q`, `step`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:542](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L542)

Rotates this quaternion by a given angular step to the given quaternion.
The method ensures that the final quaternion will not overshoot `q`.

#### Parameters

##### q

`Quaternion`

The target quaternion.

##### step

`number`

The angular step in radians.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### set()

> **set**(`x`, `y`, `z`, `w`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:258](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L258)

Sets the quaternion components.

#### Parameters

##### x

`number`

The x value of this quaternion.

##### y

`number`

The y value of this quaternion.

##### z

`number`

The z value of this quaternion.

##### w

`number`

The w value of this quaternion.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### setFromAxisAngle()

> **setFromAxisAngle**(`axis`, `angle`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L390)

Sets this quaternion from the given axis and angle.

#### Parameters

##### axis

`Vector3`

The normalized axis.

##### angle

`number`

The angle in radians.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### setFromEuler()

> **setFromEuler**(`euler`, `update`?): `Quaternion`

Defined in: [three/src/math/Quaternion.js:309](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L309)

Sets this quaternion from the rotation specified by the given
Euler angles.

#### Parameters

##### euler

`Euler`

The Euler angles.

##### update?

`boolean` = `true`

Whether the internal `onChange` callback should be executed or not.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### setFromRotationMatrix()

> **setFromRotationMatrix**(`m`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:413](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L413)

Sets this quaternion from the given rotation matrix.

#### Parameters

##### m

`Matrix4`

A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).

#### Returns

`Quaternion`

A reference to this quaternion.

***

### setFromUnitVectors()

> **setFromUnitVectors**(`vFrom`, `vTo`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:479](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L479)

Sets this quaternion to the rotation required to rotate the direction vector
`vFrom` to the direction vector `vTo`.

#### Parameters

##### vFrom

`Vector3`

The first (normalized) direction vector.

##### vTo

`Vector3`

The second (normalized) direction vector.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### slerp()

> **slerp**(`qb`, `t`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:727](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L727)

Performs a spherical linear interpolation between quaternions.

#### Parameters

##### qb

`Quaternion`

The target quaternion.

##### t

`number`

The interpolation factor in the closed interval `[0, 1]`.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### slerpQuaternions()

> **slerpQuaternions**(`qa`, `qb`, `t`): `Quaternion`

Defined in: [three/src/math/Quaternion.js:805](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L805)

Performs a spherical linear interpolation between the given quaternions
and stores the result in this quaternion.

#### Parameters

##### qa

`Quaternion`

The source quaternion.

##### qb

`Quaternion`

The target quaternion.

##### t

`number`

The interpolation factor in the closed interval `[0, 1]`.

#### Returns

`Quaternion`

A reference to this quaternion.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/Quaternion.js:878](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L878)

Writes the components of this quaternion to the given array. If no array is provided,
the method returns a new instance.

#### Parameters

##### array?

`number`[] = `[]`

The target array holding the quaternion components.

##### offset?

`number` = `0`

Index of the first element in the array.

#### Returns

`number`[]

The quaternion components.

***

### toJSON()

> **toJSON**(): `number`[]

Defined in: [three/src/math/Quaternion.js:915](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L915)

This methods defines the serialization result of this class. Returns the
numerical elements of this quaternion in an array of format `[x, y, z, w]`.

#### Returns

`number`[]

The serialized quaternion.

***

### multiplyQuaternionsFlat()

> `static` **multiplyQuaternionsFlat**(`dst`, `dstOffset`, `src0`, `srcOffset0`, `src1`, `srcOffset1`): `number`[]

Defined in: [three/src/math/Quaternion.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L152)

Multiplies two quaternions. This implementation assumes the quaternion data are managed
in flat arrays.

#### Parameters

##### dst

`number`[]

The destination array.

##### dstOffset

`number`

An offset into the destination array.

##### src0

`number`[]

The source array of the first quaternion.

##### srcOffset0

`number`

An offset into the first source array.

##### src1

`number`[]

The source array of the second quaternion.

##### srcOffset1

`number`

An offset into the second source array.

#### Returns

`number`[]

The destination array.

#### See

[Quaternion#multiplyQuaternions](/reference/three/classes/quaternion/#multiplyquaternions).

***

### slerpFlat()

> `static` **slerpFlat**(`dst`, `dstOffset`, `src0`, `srcOffset0`, `src1`, `srcOffset1`, `t`): `void`

Defined in: [three/src/math/Quaternion.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Quaternion.js#L59)

Interpolates between two quaternions via SLERP. This implementation assumes the
quaternion data are managed  in flat arrays.

#### Parameters

##### dst

`number`[]

The destination array.

##### dstOffset

`number`

An offset into the destination array.

##### src0

`number`[]

The source array of the first quaternion.

##### srcOffset0

`number`

An offset into the first source array.

##### src1

`number`[]

The source array of the second quaternion.

##### srcOffset1

`number`

An offset into the second source array.

##### t

`number`

The interpolation factor in the range `[0,1]`.

#### Returns

`void`

#### See

[Quaternion#slerp](/reference/three/classes/quaternion/#slerp)

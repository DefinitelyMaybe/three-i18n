---
editUrl: false
next: false
prev: false
title: "Euler"
---

Defined in: [three/src/math/Euler.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L24)

A class representing Euler angles.

Euler angles describe a rotational transformation by rotating an object on
its various axes in specified amounts per axis, and a specified axis
order.

Iterating through an instance will yield its components (x, y, z,
order) in the corresponding order.

```js
const a = new THREE.Euler( 0, 1, 1.57, 'XYZ' );
const b = new THREE.Vector3( 1, 0, 1 );
b.applyEuler(a);
```

## Constructors

### Constructor

> **new Euler**(`x`?, `y`?, `z`?, `order`?): `Euler`

Defined in: [three/src/math/Euler.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L34)

Constructs a new euler instance.

#### Parameters

##### x?

`number` = `0`

The angle of the x axis in radians.

##### y?

`number` = `0`

The angle of the y axis in radians.

##### z?

`number` = `0`

The angle of the z axis in radians.

##### order?

`string` = `Euler.DEFAULT_ORDER`

A string representing the order that the rotations are applied.

#### Returns

`Euler`

## Properties

### \_order

> **\_order**: `string`

Defined in: [three/src/math/Euler.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L48)

***

### \_x

> **\_x**: `number`

Defined in: [three/src/math/Euler.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L45)

***

### \_y

> **\_y**: `number`

Defined in: [three/src/math/Euler.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L46)

***

### \_z

> **\_z**: `number`

Defined in: [three/src/math/Euler.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L47)

***

### isEuler

> `readonly` **isEuler**: `boolean`

Defined in: [three/src/math/Euler.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L43)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### DEFAULT\_ORDER

> `static` **DEFAULT\_ORDER**: `string`

Defined in: [three/src/math/Euler.js:446](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L446)

The default Euler angle order.

#### Static

#### Default

```ts
'XYZ'
```

## Accessors

### order

#### Get Signature

> **get** **order**(): `string`

Defined in: [three/src/math/Euler.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L115)

A string representing the order that the rotations are applied.

##### Default

```ts
'XYZ'
```

##### Returns

`string`

#### Set Signature

> **set** **order**(`value`): `void`

Defined in: [three/src/math/Euler.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L121)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [three/src/math/Euler.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L58)

The angle of the x axis in radians.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [three/src/math/Euler.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L64)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [three/src/math/Euler.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L77)

The angle of the y axis in radians.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [three/src/math/Euler.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L83)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [three/src/math/Euler.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L96)

The angle of the z axis in radians.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [three/src/math/Euler.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L102)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### \_onChange()

> **\_onChange**(`callback`): `Euler`

Defined in: [three/src/math/Euler.js:418](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L418)

#### Parameters

##### callback

`any`

#### Returns

`Euler`

***

### \_onChangeCallback()

> **\_onChangeCallback**(): `void`

Defined in: [three/src/math/Euler.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L426)

#### Returns

`void`

***

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`string` \| `number`, `void`, `unknown`\>

Defined in: [three/src/math/Euler.js:428](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L428)

#### Returns

`Generator`\<`string` \| `number`, `void`, `unknown`\>

***

### clone()

> **clone**(): `Euler`

Defined in: [three/src/math/Euler.js:155](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L155)

Returns a new Euler instance with copied values from this instance.

#### Returns

`Euler`

A clone of this instance.

***

### copy()

> **copy**(`euler`): `Euler`

Defined in: [three/src/math/Euler.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L167)

Copies the values of the given Euler instance to this instance.

#### Parameters

##### euler

`Euler`

The Euler instance to copy.

#### Returns

`Euler`

A reference to this Euler instance.

***

### equals()

> **equals**(`euler`): `boolean`

Defined in: [three/src/math/Euler.js:372](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L372)

Returns `true` if this Euler instance is equal with the given one.

#### Parameters

##### euler

`Euler`

The Euler instance to test for equality.

#### Returns

`boolean`

Whether this Euler instance is equal with the given one.

***

### fromArray()

> **fromArray**(`array`): `Euler`

Defined in: [three/src/math/Euler.js:386](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L386)

Sets this Euler instance's components to values from the given array. The first three
entries of the array are assign to the x,y and z components. An optional fourth entry
defines the Euler order.

#### Parameters

##### array

`number`[]

An array holding the Euler component values.

#### Returns

`Euler`

A reference to this Euler instance.

***

### reorder()

> **reorder**(`newOrder`?): `Euler`

Defined in: [three/src/math/Euler.js:358](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L358)

Resets the euler angle with a new order by creating a quaternion from this
euler angle and then setting this euler angle with the quaternion and the
new order.

Warning: This discards revolution information.

#### Parameters

##### newOrder?

`string`

A string representing the new order that the rotations are applied.

#### Returns

`Euler`

A reference to this Euler instance.

***

### set()

> **set**(`x`, `y`, `z`, `order`?): `Euler`

Defined in: [three/src/math/Euler.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L137)

Sets the Euler components.

#### Parameters

##### x

`number`

The angle of the x axis in radians.

##### y

`number`

The angle of the y axis in radians.

##### z

`number`

The angle of the z axis in radians.

##### order?

`string` = `...`

A string representing the order that the rotations are applied.

#### Returns

`Euler`

A reference to this Euler instance.

***

### setFromQuaternion()

> **setFromQuaternion**(`q`, `order`?, `update`?): `Euler`

Defined in: [three/src/math/Euler.js:327](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L327)

Sets the angles of this Euler instance from a normalized quaternion.

#### Parameters

##### q

[`Quaternion`](/reference/three/classes/quaternion/)

A normalized Quaternion.

##### order?

`string`

A string representing the order that the rotations are applied.

##### update?

`boolean`

Whether the internal `onChange` callback should be executed or not.

#### Returns

`Euler`

A reference to this Euler instance.

***

### setFromRotationMatrix()

> **setFromRotationMatrix**(`m`, `order`?, `update`?): `Euler`

Defined in: [three/src/math/Euler.js:188](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L188)

Sets the angles of this Euler instance from a pure rotation matrix.

#### Parameters

##### m

[`Matrix4`](/reference/three/classes/matrix4/)

A 4x4 matrix of which the upper 3x3 of matrix is a pure rotation matrix (i.e. unscaled).

##### order?

`string` = `...`

A string representing the order that the rotations are applied.

##### update?

`boolean` = `true`

Whether the internal `onChange` callback should be executed or not.

#### Returns

`Euler`

A reference to this Euler instance.

***

### setFromVector3()

> **setFromVector3**(`v`, `order`?): `Euler`

Defined in: [three/src/math/Euler.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L342)

Sets the angles of this Euler instance from the given vector.

#### Parameters

##### v

`Vector3`

The vector.

##### order?

`string` = `...`

A string representing the order that the rotations are applied.

#### Returns

`Euler`

A reference to this Euler instance.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/Euler.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Euler.js#L407)

Writes the components of this Euler instance to the given array. If no array is provided,
the method returns a new instance.

#### Parameters

##### array?

`number`[] = `[]`

The target array holding the Euler components.

##### offset?

`number` = `0`

Index of the first element in the array.

#### Returns

`number`[]

The Euler components.

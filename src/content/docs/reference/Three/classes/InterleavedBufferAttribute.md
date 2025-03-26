---
editUrl: false
next: false
prev: false
title: "InterleavedBufferAttribute"
---

Defined in: [three/src/core/InterleavedBufferAttribute.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L12)

An alternative version of a buffer attribute with interleaved data. Interleaved
attributes share a common interleaved data storage ([InterleavedBuffer](/reference/three/classes/interleavedbuffer/)) and refer with
different offsets into the buffer.

## Constructors

### Constructor

> **new InterleavedBufferAttribute**(`interleavedBuffer`, `itemSize`, `offset`, `normalized`?): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L22)

Constructs a new interleaved buffer attribute.

#### Parameters

##### interleavedBuffer

`InterleavedBuffer`

The buffer holding the interleaved data.

##### itemSize

`number`

The item size.

##### offset

`number`

The attribute offset into the buffer.

##### normalized?

`boolean` = `false`

Whether the data are normalized or not.

#### Returns

`InterleavedBufferAttribute`

## Properties

### data

> **data**: `InterleavedBuffer`

Defined in: [three/src/core/InterleavedBufferAttribute.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L45)

The buffer holding the interleaved data.

***

### isInterleavedBufferAttribute

> `readonly` **isInterleavedBufferAttribute**: `boolean`

Defined in: [three/src/core/InterleavedBufferAttribute.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L31)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### itemSize

> **itemSize**: `number`

Defined in: [three/src/core/InterleavedBufferAttribute.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L52)

The item size, see [BufferAttribute#itemSize](/reference/three/classes/bufferattribute/#itemsize).

***

### name

> **name**: `string`

Defined in: [three/src/core/InterleavedBufferAttribute.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L38)

The name of the buffer attribute.

***

### normalized

> **normalized**: `InterleavedBuffer`

Defined in: [three/src/core/InterleavedBufferAttribute.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L66)

Whether the data are normalized or not, see [BufferAttribute#normalized](/reference/three/classes/bufferattribute/#normalized)

***

### offset

> **offset**: `number`

Defined in: [three/src/core/InterleavedBufferAttribute.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L59)

The attribute offset into the buffer.

## Accessors

### array

#### Get Signature

> **get** **array**(): `TypedArray`

Defined in: [three/src/core/InterleavedBufferAttribute.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L87)

The array holding the interleaved buffer attribute data.

##### Returns

`TypedArray`

***

### count

#### Get Signature

> **get** **count**(): `number`

Defined in: [three/src/core/InterleavedBufferAttribute.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L76)

The item count of this buffer attribute.

##### Returns

`number`

***

### needsUpdate

#### Set Signature

> **set** **needsUpdate**(`value`): `void`

Defined in: [three/src/core/InterleavedBufferAttribute.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L101)

Flag to indicate that this attribute has changed and should be re-sent to
the GPU. Set this to `true` when you modify the value of the array.

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### applyMatrix4()

> **applyMatrix4**(`m`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L114)

Applies the given 4x4 matrix to the given attribute. Only works with
item size `3`.

#### Parameters

##### m

`Matrix4`

The matrix to apply.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### applyNormalMatrix()

> **applyNormalMatrix**(`m`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L137)

Applies the given 3x3 normal matrix to the given attribute. Only works with
item size `3`.

#### Parameters

##### m

`Matrix3`

The normal matrix to apply.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### clone()

> **clone**(`data`?): [`BufferAttribute`](/reference/three/classes/bufferattribute/) \| `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:438](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L438)

Returns a new buffer attribute with copied values from this instance.

If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.

#### Parameters

##### data?

`any`

An object with interleaved buffers that allows to retain the interleaved property.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/) \| `InterleavedBufferAttribute`

A clone of this instance.

***

### getComponent()

> **getComponent**(`index`, `component`): `number`

Defined in: [three/src/core/InterleavedBufferAttribute.js:183](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L183)

Returns the given component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### component

`number`

The component index.

#### Returns

`number`

The returned value.

***

### getW()

> **getW**(`index`): `number`

Defined in: [three/src/core/InterleavedBufferAttribute.js:333](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L333)

Returns the w component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

#### Returns

`number`

The w component.

***

### getX()

> **getX**(`index`): `number`

Defined in: [three/src/core/InterleavedBufferAttribute.js:285](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L285)

Returns the x component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

#### Returns

`number`

The x component.

***

### getY()

> **getY**(`index`): `number`

Defined in: [three/src/core/InterleavedBufferAttribute.js:301](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L301)

Returns the y component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

#### Returns

`number`

The y component.

***

### getZ()

> **getZ**(`index`): `number`

Defined in: [three/src/core/InterleavedBufferAttribute.js:317](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L317)

Returns the z component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

#### Returns

`number`

The z component.

***

### setComponent()

> **setComponent**(`index`, `component`, `value`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L201)

Sets the given value to the given component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### component

`number`

The component index.

##### value

`number`

The value to set.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### setW()

> **setW**(`index`, `w`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:269](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L269)

Sets the w component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### w

`number`

The value to set.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### setX()

> **setX**(`index`, `x`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L218)

Sets the x component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### x

`number`

The value to set.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### setXY()

> **setXY**(`index`, `x`, `y`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:351](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L351)

Sets the x and y component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### x

`number`

The value for the x component to set.

##### y

`number`

The value for the y component to set.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### setXYZ()

> **setXYZ**(`index`, `x`, `y`, `z`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:378](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L378)

Sets the x, y and z component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### x

`number`

The value for the x component to set.

##### y

`number`

The value for the y component to set.

##### z

`number`

The value for the z component to set.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### setXYZW()

> **setXYZW**(`index`, `x`, `y`, `z`, `w`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:408](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L408)

Sets the x, y, z and w component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### x

`number`

The value for the x component to set.

##### y

`number`

The value for the y component to set.

##### z

`number`

The value for the z component to set.

##### w

`number`

The value for the w component to set.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### setY()

> **setY**(`index`, `y`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L235)

Sets the y component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### y

`number`

The value to set.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### setZ()

> **setZ**(`index`, `z`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L252)

Sets the z component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### z

`number`

The value to set.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: [three/src/core/InterleavedBufferAttribute.js:488](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L488)

Serializes the buffer attribute into JSON.

If no parameter is provided, cloning an interleaved buffer attribute will de-interleave buffer data.

#### Parameters

##### data?

`any`

An optional value holding meta information about the serialization.

#### Returns

`any`

A JSON object representing the serialized buffer attribute.

***

### transformDirection()

> **transformDirection**(`m`): `InterleavedBufferAttribute`

Defined in: [three/src/core/InterleavedBufferAttribute.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBufferAttribute.js#L160)

Applies the given 4x4 matrix to the given attribute. Only works with
item size `3` and with direction vectors.

#### Parameters

##### m

`Matrix4`

The matrix to apply.

#### Returns

`InterleavedBufferAttribute`

A reference to this instance.

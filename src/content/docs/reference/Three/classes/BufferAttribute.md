---
editUrl: false
next: false
prev: false
title: "BufferAttribute"
---

Defined in: [three/src/core/BufferAttribute.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L20)

This class stores data for an attribute (such as vertex positions, face
indices, normals, colors, UVs, and any custom attributes ) associated with
a geometry, which allows for more efficient passing of data to the GPU.

When working with vector-like data, the `fromBufferAttribute( attribute, index )`
helper methods on vector and color class might be helpful. E.g. [Vector3#fromBufferAttribute](/reference/three/classes/vector3/#frombufferattribute).

## Extended by

- [`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/)
- [`Float32BufferAttribute`](/reference/three/classes/float32bufferattribute/)
- [`Float16BufferAttribute`](/reference/three/classes/float16bufferattribute/)
- [`Uint32BufferAttribute`](/reference/three/classes/uint32bufferattribute/)
- [`Int32BufferAttribute`](/reference/three/classes/int32bufferattribute/)
- [`Uint16BufferAttribute`](/reference/three/classes/uint16bufferattribute/)
- [`Int16BufferAttribute`](/reference/three/classes/int16bufferattribute/)
- [`Uint8ClampedBufferAttribute`](/reference/three/classes/uint8clampedbufferattribute/)
- [`Uint8BufferAttribute`](/reference/three/classes/uint8bufferattribute/)
- [`Int8BufferAttribute`](/reference/three/classes/int8bufferattribute/)
- [`StorageBufferAttribute`](/reference/threewebgpu/classes/storagebufferattribute/)

## Constructors

### Constructor

> **new BufferAttribute**(`array`, `itemSize`, `normalized`?): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L29)

Constructs a new buffer attribute.

#### Parameters

##### array

`TypedArray`

The array holding the attribute data.

##### itemSize

`number`

The item size.

##### normalized?

`boolean` = `false`

Whether the data are normalized or not.

#### Returns

`BufferAttribute`

## Properties

### array

> **array**: `TypedArray`

Defined in: [three/src/core/BufferAttribute.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L68)

The array holding the attribute data. It should have `itemSize * numVertices`
elements, where `numVertices` is the number of vertices in the associated geometry.

***

### count

> `readonly` **count**: `number`

Defined in: [three/src/core/BufferAttribute.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L86)

Represents the number of items this buffer attribute stores. It is internally computed
by dividing the `array` length by the `itemSize`.

***

### gpuType

> **gpuType**: `any`

Defined in: [three/src/core/BufferAttribute.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L127)

Configures the bound GPU type for use in shaders.

Note: this only has an effect for integer arrays and is not configurable for float arrays.
For lower precision float types, use `Float16BufferAttribute`.

#### Default

```ts
FloatType
```

***

### isBufferAttribute

> `readonly` **isBufferAttribute**: `boolean`

Defined in: [three/src/core/BufferAttribute.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L44)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### itemSize

> **itemSize**: `number`

Defined in: [three/src/core/BufferAttribute.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L77)

The number of values of the array that should be associated with a particular vertex.
For instance, if this attribute is storing a 3-component vector (such as a position,
normal, or color), then the value should be `3`.

***

### name

> **name**: `string`

Defined in: [three/src/core/BufferAttribute.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L60)

The name of the buffer attribute.

***

### normalized

> **normalized**: `boolean`

Defined in: [three/src/core/BufferAttribute.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L97)

Applies to integer data only. Indicates how the underlying data in the buffer maps to
the values in the GLSL code. For instance, if `array` is an instance of `UInt16Array`,
and `normalized` is `true`, the values `0 -+65535` in the array data will be mapped to
`0.0f - +1.0f` in the GLSL attribute. If `normalized` is `false`, the values will be converted
to floats unmodified, i.e. `65535` becomes `65535.0f`.

***

### updateRanges

> **updateRanges**: `any`[]

Defined in: [three/src/core/BufferAttribute.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L116)

This can be used to only update some components of stored vectors (for example, just the
component related to color). Use the `addUpdateRange()` function to add ranges to this array.

***

### usage

> **usage**: `any`

Defined in: [three/src/core/BufferAttribute.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L108)

Defines the intended usage pattern of the data store for optimization purposes.

Note: After the initial use of a buffer, its usage cannot be changed. Instead,
instantiate a new one and set the desired usage before the next render.

#### Default

```ts
StaticDrawUsage
```

***

### version

> **version**: `number`

Defined in: [three/src/core/BufferAttribute.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L134)

A version number, incremented every time the `needsUpdate` is set to `true`.

## Accessors

### needsUpdate

#### Set Signature

> **set** **needsUpdate**(`value`): `void`

Defined in: [three/src/core/BufferAttribute.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L152)

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

### addUpdateRange()

> **addUpdateRange**(`start`, `count`): `void`

Defined in: [three/src/core/BufferAttribute.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L178)

Adds a range of data in the data array to be updated on the GPU.

#### Parameters

##### start

`number`

Position at which to start update.

##### count

`number`

The number of components to update.

#### Returns

`void`

***

### applyMatrix3()

> **applyMatrix3**(`m`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L260)

Applies the given 3x3 matrix to the given attribute. Works with
item size `2` and `3`.

#### Parameters

##### m

`Matrix3`

The matrix to apply.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### applyMatrix4()

> **applyMatrix4**(`m`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:297](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L297)

Applies the given 4x4 matrix to the given attribute. Only works with
item size `3`.

#### Parameters

##### m

`Matrix4`

The matrix to apply.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### applyNormalMatrix()

> **applyNormalMatrix**(`m`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:320](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L320)

Applies the given 3x3 normal matrix to the given attribute. Only works with
item size `3`.

#### Parameters

##### m

`Matrix3`

The normal matrix to apply.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### clearUpdateRanges()

> **clearUpdateRanges**(): `void`

Defined in: [three/src/core/BufferAttribute.js:187](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L187)

Clears the update ranges.

#### Returns

`void`

***

### clone()

> **clone**(): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:650](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L650)

Returns a new buffer attribute with copied values from this instance.

#### Returns

`BufferAttribute`

A clone of this instance.

***

### copy()

> **copy**(`source`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L199)

Copies the values of the given buffer attribute to this instance.

#### Parameters

##### source

`BufferAttribute`

The buffer attribute to copy.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### copyArray()

> **copyArray**(`array`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L245)

Copies the given array data into this buffer attribute.

#### Parameters

##### array

`any`

The array to copy.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### copyAt()

> **copyAt**(`index1`, `attribute`, `index2`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L224)

Copies a vector from the given buffer attribute to this one. The start
and destination position in the attribute buffers are represented by the
given indices.

#### Parameters

##### index1

`number`

The destination index into this buffer attribute.

##### attribute

`BufferAttribute`

The buffer attribute to copy from.

##### index2

`number`

The source index into the given buffer attribute.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### getComponent()

> **getComponent**(`index`, `component`): `number`

Defined in: [three/src/core/BufferAttribute.js:382](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L382)

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

Defined in: [three/src/core/BufferAttribute.js:515](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L515)

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

Defined in: [three/src/core/BufferAttribute.js:416](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L416)

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

Defined in: [three/src/core/BufferAttribute.js:449](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L449)

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

Defined in: [three/src/core/BufferAttribute.js:482](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L482)

Returns the z component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

#### Returns

`number`

The z component.

***

### onUpload()

> **onUpload**(`callback`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:637](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L637)

Sets the given callback function that is executed after the Renderer has transferred
the attribute array data to the GPU. Can be used to perform clean-up operations after
the upload when attribute data are not needed anymore on the CPU side.

#### Parameters

##### callback

`Function`

The `onUpload()` callback.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### onUploadCallback()

> **onUploadCallback**(): `void`

Defined in: [three/src/core/BufferAttribute.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L142)

A callback function that is executed after the renderer has transferred the attribute
array data to the GPU.

#### Returns

`void`

***

### set()

> **set**(`value`, `offset`?): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:366](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L366)

Sets the given array data in the buffer attribute.

#### Parameters

##### value

`any`

The array data to set.

##### offset?

`number` = `0`

The offset in this buffer attribute's array.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### setComponent()

> **setComponent**(`index`, `component`, `value`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:400](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L400)

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

`BufferAttribute`

A reference to this instance.

***

### setUsage()

> **setUsage**(`value`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L164)

Sets the usage of this buffer attribute.

#### Parameters

##### value

`any`

The usage to set.

#### Returns

`BufferAttribute`

A reference to this buffer attribute.

***

### setW()

> **setW**(`index`, `w`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:532](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L532)

Sets the w component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### w

`number`

The value to set.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### setX()

> **setX**(`index`, `x`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:433](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L433)

Sets the x component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### x

`number`

The value to set.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### setXY()

> **setXY**(`index`, `x`, `y`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:550](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L550)

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

`BufferAttribute`

A reference to this instance.

***

### setXYZ()

> **setXYZ**(`index`, `x`, `y`, `z`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:577](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L577)

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

`BufferAttribute`

A reference to this instance.

***

### setXYZW()

> **setXYZW**(`index`, `x`, `y`, `z`, `w`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:607](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L607)

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

`BufferAttribute`

A reference to this instance.

***

### setY()

> **setY**(`index`, `y`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:466](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L466)

Sets the y component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### y

`number`

The value to set.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### setZ()

> **setZ**(`index`, `z`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:499](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L499)

Sets the z component of the vector at the given index.

#### Parameters

##### index

`number`

The index into the buffer attribute.

##### z

`number`

The value to set.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/core/BufferAttribute.js:661](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L661)

Serializes the buffer attribute into JSON.

#### Returns

`any`

A JSON object representing the serialized buffer attribute.

***

### transformDirection()

> **transformDirection**(`m`): `BufferAttribute`

Defined in: [three/src/core/BufferAttribute.js:343](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L343)

Applies the given 4x4 matrix to the given attribute. Only works with
item size `3` and with direction vectors.

#### Parameters

##### m

`Matrix4`

The matrix to apply.

#### Returns

`BufferAttribute`

A reference to this instance.

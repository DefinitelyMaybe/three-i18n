---
editUrl: false
next: false
prev: false
title: "StorageInstancedBufferAttribute"
---

Defined in: [three/src/renderers/common/StorageInstancedBufferAttribute.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/StorageInstancedBufferAttribute.js#L17)

This special type of instanced buffer attribute is intended for compute shaders.
In earlier three.js versions it was only possible to update attribute data
on the CPU via JavaScript and then upload the data to the GPU. With the
new material system and renderer it is now possible to use compute shaders
to compute the data for an attribute more efficiently on the GPU.

The idea is to create an instance of this class and provide it as an input
to [StorageBufferNode](/reference/threewebgpu/classes/storagebuffernode/).

Note: This type of buffer attribute can only be used with `WebGPURenderer`.

## Extends

- [`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/)

## Constructors

### Constructor

> **new StorageInstancedBufferAttribute**(`count`, `itemSize`, `typeClass`?): `StorageInstancedBufferAttribute`

Defined in: [three/src/renderers/common/StorageInstancedBufferAttribute.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/StorageInstancedBufferAttribute.js#L27)

Constructs a new storage instanced buffer attribute.

#### Parameters

##### count

`any`

The item count. It is also valid to pass a typed array as an argument.
The subsequent parameters are then obsolete.

##### itemSize

`number`

The item size.

##### typeClass?

`constructor` = `Float32Array`

A typed array constructor.

#### Returns

`StorageInstancedBufferAttribute`

#### Overrides

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`constructor`](/reference/three/classes/instancedbufferattribute/#constructor)

## Properties

### array

> **array**: `TypedArray`

Defined in: [three/src/core/BufferAttribute.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L68)

The array holding the attribute data. It should have `itemSize * numVertices`
elements, where `numVertices` is the number of vertices in the associated geometry.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`array`](/reference/three/classes/instancedbufferattribute/#array)

***

### count

> `readonly` **count**: `number`

Defined in: [three/src/core/BufferAttribute.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L86)

Represents the number of items this buffer attribute stores. It is internally computed
by dividing the `array` length by the `itemSize`.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`count`](/reference/three/classes/instancedbufferattribute/#count)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`gpuType`](/reference/three/classes/instancedbufferattribute/#gputype)

***

### isBufferAttribute

> `readonly` **isBufferAttribute**: `boolean`

Defined in: [three/src/core/BufferAttribute.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L44)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`isBufferAttribute`](/reference/three/classes/instancedbufferattribute/#isbufferattribute)

***

### isInstancedBufferAttribute

> `readonly` **isInstancedBufferAttribute**: `boolean`

Defined in: [three/src/core/InstancedBufferAttribute.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedBufferAttribute.js#L29)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`isInstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/#isinstancedbufferattribute)

***

### isStorageInstancedBufferAttribute

> `readonly` **isStorageInstancedBufferAttribute**: `boolean`

Defined in: [three/src/renderers/common/StorageInstancedBufferAttribute.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/StorageInstancedBufferAttribute.js#L40)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`itemSize`](/reference/three/classes/instancedbufferattribute/#itemsize)

***

### meshPerAttribute

> **meshPerAttribute**: `number`

Defined in: [three/src/core/InstancedBufferAttribute.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedBufferAttribute.js#L40)

Defines how often a value of this buffer attribute should be repeated. A
value of one means that each value of the instanced attribute is used for
a single instance. A value of two means that each value is used for two
consecutive instances (and so on).

#### Default

```ts
1
```

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`meshPerAttribute`](/reference/three/classes/instancedbufferattribute/#meshperattribute)

***

### name

> **name**: `string`

Defined in: [three/src/core/BufferAttribute.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L60)

The name of the buffer attribute.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`name`](/reference/three/classes/instancedbufferattribute/#name)

***

### normalized

> **normalized**: `boolean`

Defined in: [three/src/core/BufferAttribute.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L97)

Applies to integer data only. Indicates how the underlying data in the buffer maps to
the values in the GLSL code. For instance, if `array` is an instance of `UInt16Array`,
and `normalized` is `true`, the values `0 -+65535` in the array data will be mapped to
`0.0f - +1.0f` in the GLSL attribute. If `normalized` is `false`, the values will be converted
to floats unmodified, i.e. `65535` becomes `65535.0f`.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`normalized`](/reference/three/classes/instancedbufferattribute/#normalized)

***

### updateRanges

> **updateRanges**: `any`[]

Defined in: [three/src/core/BufferAttribute.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L116)

This can be used to only update some components of stored vectors (for example, just the
component related to color). Use the `addUpdateRange()` function to add ranges to this array.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`updateRanges`](/reference/three/classes/instancedbufferattribute/#updateranges)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`usage`](/reference/three/classes/instancedbufferattribute/#usage)

***

### version

> **version**: `number`

Defined in: [three/src/core/BufferAttribute.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L134)

A version number, incremented every time the `needsUpdate` is set to `true`.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`version`](/reference/three/classes/instancedbufferattribute/#version)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`needsUpdate`](/reference/three/classes/instancedbufferattribute/#needsupdate)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`addUpdateRange`](/reference/three/classes/instancedbufferattribute/#addupdaterange)

***

### applyMatrix3()

> **applyMatrix3**(`m`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L260)

Applies the given 3x3 matrix to the given attribute. Works with
item size `2` and `3`.

#### Parameters

##### m

`Matrix3`

The matrix to apply.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`applyMatrix3`](/reference/three/classes/instancedbufferattribute/#applymatrix3)

***

### applyMatrix4()

> **applyMatrix4**(`m`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:297](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L297)

Applies the given 4x4 matrix to the given attribute. Only works with
item size `3`.

#### Parameters

##### m

`Matrix4`

The matrix to apply.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`applyMatrix4`](/reference/three/classes/instancedbufferattribute/#applymatrix4)

***

### applyNormalMatrix()

> **applyNormalMatrix**(`m`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:320](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L320)

Applies the given 3x3 normal matrix to the given attribute. Only works with
item size `3`.

#### Parameters

##### m

`Matrix3`

The normal matrix to apply.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`applyNormalMatrix`](/reference/three/classes/instancedbufferattribute/#applynormalmatrix)

***

### clearUpdateRanges()

> **clearUpdateRanges**(): `void`

Defined in: [three/src/core/BufferAttribute.js:187](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L187)

Clears the update ranges.

#### Returns

`void`

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`clearUpdateRanges`](/reference/three/classes/instancedbufferattribute/#clearupdateranges)

***

### clone()

> **clone**(): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:650](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L650)

Returns a new buffer attribute with copied values from this instance.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A clone of this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`clone`](/reference/three/classes/instancedbufferattribute/#clone)

***

### copy()

> **copy**(`source`): `StorageInstancedBufferAttribute`

Defined in: [three/src/core/InstancedBufferAttribute.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedBufferAttribute.js#L44)

Copies the values of the given buffer attribute to this instance.

#### Parameters

##### source

`any`

The buffer attribute to copy.

#### Returns

`StorageInstancedBufferAttribute`

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`copy`](/reference/three/classes/instancedbufferattribute/#copy)

***

### copyArray()

> **copyArray**(`array`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L245)

Copies the given array data into this buffer attribute.

#### Parameters

##### array

`any`

The array to copy.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`copyArray`](/reference/three/classes/instancedbufferattribute/#copyarray)

***

### copyAt()

> **copyAt**(`index1`, `attribute`, `index2`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L224)

Copies a vector from the given buffer attribute to this one. The start
and destination position in the attribute buffers are represented by the
given indices.

#### Parameters

##### index1

`number`

The destination index into this buffer attribute.

##### attribute

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

The buffer attribute to copy from.

##### index2

`number`

The source index into the given buffer attribute.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`copyAt`](/reference/three/classes/instancedbufferattribute/#copyat)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`getComponent`](/reference/three/classes/instancedbufferattribute/#getcomponent)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`getW`](/reference/three/classes/instancedbufferattribute/#getw)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`getX`](/reference/three/classes/instancedbufferattribute/#getx)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`getY`](/reference/three/classes/instancedbufferattribute/#gety)

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

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`getZ`](/reference/three/classes/instancedbufferattribute/#getz)

***

### onUpload()

> **onUpload**(`callback`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:637](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L637)

Sets the given callback function that is executed after the Renderer has transferred
the attribute array data to the GPU. Can be used to perform clean-up operations after
the upload when attribute data are not needed anymore on the CPU side.

#### Parameters

##### callback

`Function`

The `onUpload()` callback.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`onUpload`](/reference/three/classes/instancedbufferattribute/#onupload)

***

### onUploadCallback()

> **onUploadCallback**(): `void`

Defined in: [three/src/core/BufferAttribute.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L142)

A callback function that is executed after the renderer has transferred the attribute
array data to the GPU.

#### Returns

`void`

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`onUploadCallback`](/reference/three/classes/instancedbufferattribute/#onuploadcallback)

***

### set()

> **set**(`value`, `offset`?): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`set`](/reference/three/classes/instancedbufferattribute/#set)

***

### setComponent()

> **setComponent**(`index`, `component`, `value`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setComponent`](/reference/three/classes/instancedbufferattribute/#setcomponent)

***

### setUsage()

> **setUsage**(`value`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L164)

Sets the usage of this buffer attribute.

#### Parameters

##### value

`any`

The usage to set.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this buffer attribute.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setUsage`](/reference/three/classes/instancedbufferattribute/#setusage)

***

### setW()

> **setW**(`index`, `w`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setW`](/reference/three/classes/instancedbufferattribute/#setw)

***

### setX()

> **setX**(`index`, `x`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setX`](/reference/three/classes/instancedbufferattribute/#setx)

***

### setXY()

> **setXY**(`index`, `x`, `y`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setXY`](/reference/three/classes/instancedbufferattribute/#setxy)

***

### setXYZ()

> **setXYZ**(`index`, `x`, `y`, `z`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setXYZ`](/reference/three/classes/instancedbufferattribute/#setxyz)

***

### setXYZW()

> **setXYZW**(`index`, `x`, `y`, `z`, `w`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setXYZW`](/reference/three/classes/instancedbufferattribute/#setxyzw)

***

### setY()

> **setY**(`index`, `y`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setY`](/reference/three/classes/instancedbufferattribute/#sety)

***

### setZ()

> **setZ**(`index`, `z`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

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

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`setZ`](/reference/three/classes/instancedbufferattribute/#setz)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/core/InstancedBufferAttribute.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedBufferAttribute.js#L54)

Serializes the buffer attribute into JSON.

#### Returns

`any`

A JSON object representing the serialized buffer attribute.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`toJSON`](/reference/three/classes/instancedbufferattribute/#tojson)

***

### transformDirection()

> **transformDirection**(`m`): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferAttribute.js:343](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferAttribute.js#L343)

Applies the given 4x4 matrix to the given attribute. Only works with
item size `3` and with direction vectors.

#### Parameters

##### m

`Matrix4`

The matrix to apply.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

A reference to this instance.

#### Inherited from

[`InstancedBufferAttribute`](/reference/three/classes/instancedbufferattribute/).[`transformDirection`](/reference/three/classes/instancedbufferattribute/#transformdirection)

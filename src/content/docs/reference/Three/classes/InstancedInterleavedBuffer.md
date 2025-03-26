---
editUrl: false
next: false
prev: false
title: "InstancedInterleavedBuffer"
---

Defined in: [three/src/core/InstancedInterleavedBuffer.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedInterleavedBuffer.js#L8)

An instanced version of an interleaved buffer.

## Extends

- [`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

## Constructors

### Constructor

> **new InstancedInterleavedBuffer**(`array`, `stride`, `meshPerAttribute`?): `InstancedInterleavedBuffer`

Defined in: [three/src/core/InstancedInterleavedBuffer.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedInterleavedBuffer.js#L17)

Constructs a new instanced interleaved buffer.

#### Parameters

##### array

`TypedArray`

A typed array with a shared buffer storing attribute data.

##### stride

`number`

The number of typed-array elements per vertex.

##### meshPerAttribute?

`number` = `1`

Defines how often a value of this interleaved buffer should be repeated.

#### Returns

`InstancedInterleavedBuffer`

#### Overrides

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`constructor`](/reference/three/classes/interleavedbuffer/#constructor)

## Properties

### array

> **array**: `TypedArray`

Defined in: [three/src/core/InterleavedBuffer.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L34)

A typed array with a shared buffer storing attribute data.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`array`](/reference/three/classes/interleavedbuffer/#array)

***

### count

> `readonly` **count**: `number`

Defined in: [three/src/core/InterleavedBuffer.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L49)

The total number of elements in the array

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`count`](/reference/three/classes/interleavedbuffer/#count)

***

### isInstancedInterleavedBuffer

> `readonly` **isInstancedInterleavedBuffer**: `boolean`

Defined in: [three/src/core/InstancedInterleavedBuffer.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedInterleavedBuffer.js#L28)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isInterleavedBuffer

> `readonly` **isInterleavedBuffer**: `boolean`

Defined in: [three/src/core/InterleavedBuffer.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L27)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`isInterleavedBuffer`](/reference/three/classes/interleavedbuffer/#isinterleavedbuffer)

***

### meshPerAttribute

> **meshPerAttribute**: `number`

Defined in: [three/src/core/InstancedInterleavedBuffer.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedInterleavedBuffer.js#L37)

Defines how often a value of this buffer attribute should be repeated,
see [InstancedBufferAttribute#meshPerAttribute](/reference/three/classes/instancedbufferattribute/#meshperattribute).

#### Default

```ts
1
```

***

### stride

> **stride**: `number`

Defined in: [three/src/core/InterleavedBuffer.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L41)

The number of typed-array elements per vertex.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`stride`](/reference/three/classes/interleavedbuffer/#stride)

***

### updateRanges

> **updateRanges**: `any`[]

Defined in: [three/src/core/InterleavedBuffer.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L68)

This can be used to only update some components of stored vectors (for example, just the
component related to color). Use the `addUpdateRange()` function to add ranges to this array.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`updateRanges`](/reference/three/classes/interleavedbuffer/#updateranges)

***

### usage

> **usage**: `any`

Defined in: [three/src/core/InterleavedBuffer.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L60)

Defines the intended usage pattern of the data store for optimization purposes.

Note: After the initial use of a buffer, its usage cannot be changed. Instead,
instantiate a new one and set the desired usage before the next render.

#### Default

```ts
StaticDrawUsage
```

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`usage`](/reference/three/classes/interleavedbuffer/#usage)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/core/InterleavedBuffer.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L83)

The UUID of the interleaved buffer.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`uuid`](/reference/three/classes/interleavedbuffer/#uuid)

***

### version

> **version**: `number`

Defined in: [three/src/core/InterleavedBuffer.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L75)

A version number, incremented every time the `needsUpdate` is set to `true`.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`version`](/reference/three/classes/interleavedbuffer/#version)

## Accessors

### needsUpdate

#### Set Signature

> **set** **needsUpdate**(`value`): `void`

Defined in: [three/src/core/InterleavedBuffer.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L101)

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

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`needsUpdate`](/reference/three/classes/interleavedbuffer/#needsupdate)

## Methods

### addUpdateRange()

> **addUpdateRange**(`start`, `count`): `void`

Defined in: [three/src/core/InterleavedBuffer.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L127)

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

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`addUpdateRange`](/reference/three/classes/interleavedbuffer/#addupdaterange)

***

### clearUpdateRanges()

> **clearUpdateRanges**(): `void`

Defined in: [three/src/core/InterleavedBuffer.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L136)

Clears the update ranges.

#### Returns

`void`

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`clearUpdateRanges`](/reference/three/classes/interleavedbuffer/#clearupdateranges)

***

### clone()

> **clone**(`data`): [`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

Defined in: [three/src/core/InstancedInterleavedBuffer.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedInterleavedBuffer.js#L51)

Returns a new interleaved buffer with copied values from this instance.

#### Parameters

##### data

`any`

An object with shared array buffers that allows to retain shared structures.

#### Returns

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

A clone of this instance.

#### Overrides

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`clone`](/reference/three/classes/interleavedbuffer/#clone)

***

### copy()

> **copy**(`source`): `InstancedInterleavedBuffer`

Defined in: [three/src/core/InstancedInterleavedBuffer.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedInterleavedBuffer.js#L41)

Copies the values of the given interleaved buffer to this instance.

#### Parameters

##### source

`any`

The interleaved buffer to copy.

#### Returns

`InstancedInterleavedBuffer`

A reference to this instance.

#### Overrides

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`copy`](/reference/three/classes/interleavedbuffer/#copy)

***

### copyAt()

> **copyAt**(`index1`, `interleavedBuffer`, `index2`): [`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

Defined in: [three/src/core/InterleavedBuffer.js:169](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L169)

Copies a vector from the given interleaved buffer to this one. The start
and destination position in the attribute buffers are represented by the
given indices.

#### Parameters

##### index1

`number`

The destination index into this interleaved buffer.

##### interleavedBuffer

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

The interleaved buffer to copy from.

##### index2

`number`

The source index into the given interleaved buffer.

#### Returns

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

A reference to this instance.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`copyAt`](/reference/three/classes/interleavedbuffer/#copyat)

***

### onUpload()

> **onUpload**(`callback`): [`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

Defined in: [three/src/core/InterleavedBuffer.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L242)

Sets the given callback function that is executed after the Renderer has transferred
the array data to the GPU. Can be used to perform clean-up operations after
the upload when data are not needed anymore on the CPU side.

#### Parameters

##### callback

`Function`

The `onUpload()` callback.

#### Returns

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

A reference to this instance.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`onUpload`](/reference/three/classes/interleavedbuffer/#onupload)

***

### onUploadCallback()

> **onUploadCallback**(): `void`

Defined in: [three/src/core/InterleavedBuffer.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L91)

A callback function that is executed after the renderer has transferred the attribute array
data to the GPU.

#### Returns

`void`

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`onUploadCallback`](/reference/three/classes/interleavedbuffer/#onuploadcallback)

***

### set()

> **set**(`value`, `offset`?): [`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

Defined in: [three/src/core/InterleavedBuffer.js:191](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L191)

Sets the given array data in the interleaved buffer.

#### Parameters

##### value

`any`

The array data to set.

##### offset?

`number` = `0`

The offset in this interleaved buffer's array.

#### Returns

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

A reference to this instance.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`set`](/reference/three/classes/interleavedbuffer/#set)

***

### setUsage()

> **setUsage**(`value`): [`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

Defined in: [three/src/core/InterleavedBuffer.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L113)

Sets the usage of this interleaved buffer.

#### Parameters

##### value

`any`

The usage to set.

#### Returns

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/)

A reference to this interleaved buffer.

#### Inherited from

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`setUsage`](/reference/three/classes/interleavedbuffer/#setusage)

***

### toJSON()

> **toJSON**(`data`): `any`

Defined in: [three/src/core/InstancedInterleavedBuffer.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InstancedInterleavedBuffer.js#L61)

Serializes the interleaved buffer into JSON.

#### Parameters

##### data

`any`

An optional value holding meta information about the serialization.

#### Returns

`any`

A JSON object representing the serialized interleaved buffer.

#### Overrides

[`InterleavedBuffer`](/reference/three/classes/interleavedbuffer/).[`toJSON`](/reference/three/classes/interleavedbuffer/#tojson)

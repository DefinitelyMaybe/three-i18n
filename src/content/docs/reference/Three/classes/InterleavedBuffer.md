---
editUrl: false
next: false
prev: false
title: "InterleavedBuffer"
---

Defined in: [three/src/core/InterleavedBuffer.js:10](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L10)

"Interleaved" means that multiple attributes, possibly of different types,
(e.g., position, normal, uv, color) are packed into a single array buffer.

An introduction into interleaved arrays can be found here: [Interleaved array basics][https://blog.tojicode.com/2011/05/interleaved-array-basics.html](https://blog.tojicode.com/2011/05/interleaved-array-basics.html)

## Extended by

- [`InstancedInterleavedBuffer`](/reference/three/classes/instancedinterleavedbuffer/)

## Constructors

### Constructor

> **new InterleavedBuffer**(`array`, `stride`): `InterleavedBuffer`

Defined in: [three/src/core/InterleavedBuffer.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L18)

Constructs a new interleaved buffer.

#### Parameters

##### array

`TypedArray`

A typed array with a shared buffer storing attribute data.

##### stride

`number`

The number of typed-array elements per vertex.

#### Returns

`InterleavedBuffer`

## Properties

### array

> **array**: `TypedArray`

Defined in: [three/src/core/InterleavedBuffer.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L34)

A typed array with a shared buffer storing attribute data.

***

### count

> `readonly` **count**: `number`

Defined in: [three/src/core/InterleavedBuffer.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L49)

The total number of elements in the array

***

### isInterleavedBuffer

> `readonly` **isInterleavedBuffer**: `boolean`

Defined in: [three/src/core/InterleavedBuffer.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L27)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### stride

> **stride**: `number`

Defined in: [three/src/core/InterleavedBuffer.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L41)

The number of typed-array elements per vertex.

***

### updateRanges

> **updateRanges**: `any`[]

Defined in: [three/src/core/InterleavedBuffer.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L68)

This can be used to only update some components of stored vectors (for example, just the
component related to color). Use the `addUpdateRange()` function to add ranges to this array.

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

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/core/InterleavedBuffer.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L83)

The UUID of the interleaved buffer.

***

### version

> **version**: `number`

Defined in: [three/src/core/InterleavedBuffer.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L75)

A version number, incremented every time the `needsUpdate` is set to `true`.

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

***

### clearUpdateRanges()

> **clearUpdateRanges**(): `void`

Defined in: [three/src/core/InterleavedBuffer.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L136)

Clears the update ranges.

#### Returns

`void`

***

### clone()

> **clone**(`data`?): `InterleavedBuffer`

Defined in: [three/src/core/InterleavedBuffer.js:205](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L205)

Returns a new interleaved buffer with copied values from this instance.

#### Parameters

##### data?

`any`

An object with shared array buffers that allows to retain shared structures.

#### Returns

`InterleavedBuffer`

A clone of this instance.

***

### copy()

> **copy**(`source`): `InterleavedBuffer`

Defined in: [three/src/core/InterleavedBuffer.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L148)

Copies the values of the given interleaved buffer to this instance.

#### Parameters

##### source

`InterleavedBuffer`

The interleaved buffer to copy.

#### Returns

`InterleavedBuffer`

A reference to this instance.

***

### copyAt()

> **copyAt**(`index1`, `interleavedBuffer`, `index2`): `InterleavedBuffer`

Defined in: [three/src/core/InterleavedBuffer.js:169](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L169)

Copies a vector from the given interleaved buffer to this one. The start
and destination position in the attribute buffers are represented by the
given indices.

#### Parameters

##### index1

`number`

The destination index into this interleaved buffer.

##### interleavedBuffer

`InterleavedBuffer`

The interleaved buffer to copy from.

##### index2

`number`

The source index into the given interleaved buffer.

#### Returns

`InterleavedBuffer`

A reference to this instance.

***

### onUpload()

> **onUpload**(`callback`): `InterleavedBuffer`

Defined in: [three/src/core/InterleavedBuffer.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L242)

Sets the given callback function that is executed after the Renderer has transferred
the array data to the GPU. Can be used to perform clean-up operations after
the upload when data are not needed anymore on the CPU side.

#### Parameters

##### callback

`Function`

The `onUpload()` callback.

#### Returns

`InterleavedBuffer`

A reference to this instance.

***

### onUploadCallback()

> **onUploadCallback**(): `void`

Defined in: [three/src/core/InterleavedBuffer.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L91)

A callback function that is executed after the renderer has transferred the attribute array
data to the GPU.

#### Returns

`void`

***

### set()

> **set**(`value`, `offset`?): `InterleavedBuffer`

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

`InterleavedBuffer`

A reference to this instance.

***

### setUsage()

> **setUsage**(`value`): `InterleavedBuffer`

Defined in: [three/src/core/InterleavedBuffer.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L113)

Sets the usage of this interleaved buffer.

#### Parameters

##### value

`any`

The usage to set.

#### Returns

`InterleavedBuffer`

A reference to this interleaved buffer.

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: [three/src/core/InterleavedBuffer.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/InterleavedBuffer.js#L256)

Serializes the interleaved buffer into JSON.

#### Parameters

##### data?

`any`

An optional value holding meta information about the serialization.

#### Returns

`any`

A JSON object representing the serialized interleaved buffer.

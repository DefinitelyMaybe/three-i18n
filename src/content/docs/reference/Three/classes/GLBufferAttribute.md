---
editUrl: false
next: false
prev: false
title: "GLBufferAttribute"
---

Defined in: [three/src/core/GLBufferAttribute.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L12)

An alternative version of a buffer attribute with more control over the VBO.

The renderer does not construct a VBO for this kind of attribute. Instead, it uses
whatever VBO is passed in constructor and can later be altered via the `buffer` property.

The most common use case for this class is when some kind of GPGPU calculation interferes
or even produces the VBOs in question.

Notice that this class can only be used with [WebGLRenderer](/reference/three/classes/webglrenderer/).

## Constructors

### Constructor

> **new GLBufferAttribute**(`buffer`, `type`, `itemSize`, `elementSize`, `count`): `GLBufferAttribute`

Defined in: [three/src/core/GLBufferAttribute.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L23)

Constructs a new GL buffer attribute.

#### Parameters

##### buffer

`WebGLBuffer`

The native WebGL buffer.

##### type

`number`

The native data type (e.g. `gl.FLOAT`).

##### itemSize

`number`

The item size.

##### elementSize

`number`

The corresponding size (in bytes) for the given `type` parameter.

##### count

`number`

The expected number of vertices in VBO.

#### Returns

`GLBufferAttribute`

## Properties

### buffer

> **buffer**: `WebGLBuffer`

Defined in: [three/src/core/GLBufferAttribute.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L46)

The native WebGL buffer.

***

### count

> **count**: `number`

Defined in: [three/src/core/GLBufferAttribute.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L74)

The expected number of vertices in VBO.

***

### elementSize

> **elementSize**: `number`

Defined in: [three/src/core/GLBufferAttribute.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L67)

The corresponding size (in bytes) for the given `type` parameter.

***

### isGLBufferAttribute

> `readonly` **isGLBufferAttribute**: `boolean`

Defined in: [three/src/core/GLBufferAttribute.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L32)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### itemSize

> **itemSize**: `number`

Defined in: [three/src/core/GLBufferAttribute.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L60)

The item size, see [BufferAttribute#itemSize](/reference/three/classes/bufferattribute/#itemsize).

***

### name

> **name**: `string`

Defined in: [three/src/core/GLBufferAttribute.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L39)

The name of the buffer attribute.

***

### type

> **type**: `number`

Defined in: [three/src/core/GLBufferAttribute.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L53)

The native data type.

***

### version

> **version**: `number`

Defined in: [three/src/core/GLBufferAttribute.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L81)

A version number, incremented every time the `needsUpdate` is set to `true`.

## Accessors

### needsUpdate

#### Set Signature

> **set** **needsUpdate**(`value`): `void`

Defined in: [three/src/core/GLBufferAttribute.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L93)

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

### setBuffer()

> **setBuffer**(`buffer`): `BufferAttribute`

Defined in: [three/src/core/GLBufferAttribute.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L105)

Sets the given native WebGL buffer.

#### Parameters

##### buffer

`WebGLBuffer`

The buffer to set.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### setCount()

> **setCount**(`count`): `BufferAttribute`

Defined in: [three/src/core/GLBufferAttribute.js:149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L149)

Sets the count (the expected number of vertices in VBO).

#### Parameters

##### count

`number`

The count.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### setItemSize()

> **setItemSize**(`itemSize`): `BufferAttribute`

Defined in: [three/src/core/GLBufferAttribute.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L135)

Sets the item size.

#### Parameters

##### itemSize

`number`

The item size.

#### Returns

`BufferAttribute`

A reference to this instance.

***

### setType()

> **setType**(`type`, `elementSize`): `BufferAttribute`

Defined in: [three/src/core/GLBufferAttribute.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/GLBufferAttribute.js#L120)

Sets the given native data type and element size.

#### Parameters

##### type

`number`

The native data type (e.g. `gl.FLOAT`).

##### elementSize

`number`

The corresponding size (in bytes) for the given `type` parameter.

#### Returns

`BufferAttribute`

A reference to this instance.

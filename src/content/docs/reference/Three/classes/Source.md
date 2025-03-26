---
editUrl: false
next: false
prev: false
title: "Source"
---

Defined in: [three/src/textures/Source.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L12)

Represents the data source of a texture.

The main purpose of this class is to decouple the data definition from the texture
definition so the same data can be used with multiple texture instances.

## Constructors

### Constructor

> **new Source**(`data`?): `Source`

Defined in: [three/src/textures/Source.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L19)

Constructs a new video texture.

#### Parameters

##### data?

`any` = `null`

The data definition of a texture.

#### Returns

`Source`

## Properties

### data

> **data**: `any`

Defined in: [three/src/textures/Source.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L52)

The data definition of a texture.

***

### dataReady

> **dataReady**: `boolean`

Defined in: [three/src/textures/Source.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L63)

This property is only relevant when [Source#needsUpdate](/reference/three/classes/source/#needsupdate) is set to `true` and
provides more control on how texture data should be processed. When `dataReady` is set
to `false`, the engine performs the memory allocation (if necessary) but does not transfer
the data into the GPU memory.

#### Default

```ts
true
```

***

### isSource

> `readonly` **isSource**: `boolean`

Defined in: [three/src/textures/Source.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L28)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/textures/Source.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L45)

The UUID of the source.

***

### version

> `readonly` **version**: `number`

Defined in: [three/src/textures/Source.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L72)

This starts at `0` and counts how many times [Source#needsUpdate](/reference/three/classes/source/#needsupdate) is set to `true`.

#### Default

```ts
0
```

## Accessors

### needsUpdate

#### Set Signature

> **set** **needsUpdate**(`value`): `void`

Defined in: [three/src/textures/Source.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L85)

When the property is set to `true`, the engine allocates the memory
for the texture (if necessary) and triggers the actual texture upload
to the GPU next time the source is used.

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

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/textures/Source.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Source.js#L98)

Serializes the source into JSON.

#### Parameters

##### meta

`any`

An optional value holding meta information about the serialization.

#### Returns

`any`

A JSON object representing the serialized source.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

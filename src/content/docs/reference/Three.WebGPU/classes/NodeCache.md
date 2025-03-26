---
editUrl: false
next: false
prev: false
title: "NodeCache"
---

Defined in: [three/src/nodes/core/NodeCache.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCache.js#L7)

This utility class is used in [NodeBuilder](/reference/threewebgpu/classes/nodebuilder/) as an internal
cache data structure for node data.

## Constructors

### Constructor

> **new NodeCache**(`parent`): `NodeCache`

Defined in: [three/src/nodes/core/NodeCache.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCache.js#L14)

Constructs a new node cache.

#### Parameters

##### parent

`NodeCache` = `null`

A reference to a parent cache.

#### Returns

`NodeCache`

## Properties

### id

> `readonly` **id**: `number`

Defined in: [three/src/nodes/core/NodeCache.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCache.js#L22)

The id of the cache.

***

### nodesData

> **nodesData**: `WeakMap`\<`Node`, `any`\>

Defined in: [three/src/nodes/core/NodeCache.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCache.js#L29)

A weak map for managing node data.

***

### parent

> **parent**: `NodeCache`

Defined in: [three/src/nodes/core/NodeCache.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCache.js#L37)

Reference to a parent node cache.

#### Default

```ts
null
```

## Methods

### getData()

> **getData**(`node`): `any`

Defined in: [three/src/nodes/core/NodeCache.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCache.js#L47)

Returns the data for the given node.

#### Parameters

##### node

`Node`

The node.

#### Returns

`any`

The data for the node.

***

### setData()

> **setData**(`node`, `data`): `void`

Defined in: [three/src/nodes/core/NodeCache.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCache.js#L67)

Sets the data for a given node.

#### Parameters

##### node

`Node`

The node.

##### data

`any`

The data that should be cached.

#### Returns

`void`

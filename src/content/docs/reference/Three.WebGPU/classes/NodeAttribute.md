---
editUrl: false
next: false
prev: false
title: "NodeAttribute"
---

Defined in: [three/src/nodes/core/NodeAttribute.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeAttribute.js#L7)

[NodeBuilder](/reference/threewebgpu/classes/nodebuilder/) is going to create instances of this class during the build process
of nodes. They represent the final shader attributes that are going to be generated
by the builder. Arrays of node attributes is maintained in [NodeBuilder#attributes](/reference/threewebgpu/classes/nodebuilder/#attributes)
and [NodeBuilder#bufferAttributes](/reference/threewebgpu/classes/nodebuilder/#bufferattributes) for this purpose.

## Constructors

### Constructor

> **new NodeAttribute**(`name`, `type`, `node`): `NodeAttribute`

Defined in: [three/src/nodes/core/NodeAttribute.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeAttribute.js#L16)

Constructs a new node attribute.

#### Parameters

##### name

`string`

The name of the attribute.

##### type

`string`

The type of the attribute.

##### node

`Node` = `null`

An optional reference to the node.

#### Returns

`NodeAttribute`

## Properties

### isNodeAttribute

> `readonly` **isNodeAttribute**: `boolean`

Defined in: [three/src/nodes/core/NodeAttribute.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeAttribute.js#L25)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### name

> **name**: `string`

Defined in: [three/src/nodes/core/NodeAttribute.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeAttribute.js#L32)

The name of the attribute.

***

### node

> **node**: `Node`

Defined in: [three/src/nodes/core/NodeAttribute.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeAttribute.js#L47)

An optional reference to the node.

#### Default

```ts
null
```

***

### type

> **type**: `string`

Defined in: [three/src/nodes/core/NodeAttribute.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeAttribute.js#L39)

The type of the attribute.

---
editUrl: false
next: false
prev: false
title: "NodeUniform"
---

Defined in: [three/src/nodes/core/NodeUniform.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L7)

[NodeBuilder](/reference/threewebgpu/classes/nodebuilder/) is going to create instances of this class during the build process
of nodes. They represent the final shader uniforms that are going to be generated
by the builder. A dictionary of node uniforms is maintained in [NodeBuilder#uniforms](/reference/threewebgpu/classes/nodebuilder/#uniforms)
for this purpose.

## Constructors

### Constructor

> **new NodeUniform**(`name`, `type`, `node`): `NodeUniform`

Defined in: [three/src/nodes/core/NodeUniform.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L16)

Constructs a new node uniform.

#### Parameters

##### name

`string`

The name of the uniform.

##### type

`string`

The type of the uniform.

##### node

`UniformNode`

An reference to the node.

#### Returns

`NodeUniform`

## Properties

### isNodeUniform

> `readonly` **isNodeUniform**: `boolean`

Defined in: [three/src/nodes/core/NodeUniform.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L25)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### name

> **name**: `string`

Defined in: [three/src/nodes/core/NodeUniform.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L32)

The name of the uniform.

***

### node

> **node**: `UniformNode`

Defined in: [three/src/nodes/core/NodeUniform.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L46)

An reference to the node.

***

### type

> **type**: `string`

Defined in: [three/src/nodes/core/NodeUniform.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L39)

The type of the uniform.

## Accessors

### groupNode

#### Get Signature

> **get** **groupNode**(): `UniformGroupNode`

Defined in: [three/src/nodes/core/NodeUniform.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L83)

The uniform node's group.

##### Returns

`UniformGroupNode`

***

### id

#### Get Signature

> **get** **id**(): `number`

Defined in: [three/src/nodes/core/NodeUniform.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L72)

The id of the uniform node.

##### Returns

`number`

***

### value

#### Get Signature

> **get** **value**(): `any`

Defined in: [three/src/nodes/core/NodeUniform.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L55)

The value of the uniform node.

##### Returns

`any`

#### Set Signature

> **set** **value**(`val`): `void`

Defined in: [three/src/nodes/core/NodeUniform.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUniform.js#L61)

##### Parameters

###### val

`any`

##### Returns

`void`

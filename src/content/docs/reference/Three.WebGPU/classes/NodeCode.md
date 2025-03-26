---
editUrl: false
next: false
prev: false
title: "NodeCode"
---

Defined in: [three/src/nodes/core/NodeCode.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCode.js#L7)

[NodeBuilder](/reference/threewebgpu/classes/nodebuilder/) is going to create instances of this class during the build process
of nodes. They represent user-defined, native shader code portions that are going to be
injected by the builder. A dictionary of node codes is maintained in [NodeBuilder#codes](/reference/threewebgpu/classes/nodebuilder/#codes)
for this purpose.

## Constructors

### Constructor

> **new NodeCode**(`name`, `type`, `code`?): `NodeCode`

Defined in: [three/src/nodes/core/NodeCode.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCode.js#L16)

Constructs a new code node.

#### Parameters

##### name

`string`

The name of the code.

##### type

`string`

The node type.

##### code?

`string` = `''`

The native shader code.

#### Returns

`NodeCode`

## Properties

### code

> **code**: `string`

Defined in: [three/src/nodes/core/NodeCode.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCode.js#L38)

The native shader code.

#### Default

```ts
''
```

***

### name

> **name**: `string`

Defined in: [three/src/nodes/core/NodeCode.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCode.js#L23)

The name of the code.

***

### type

> **type**: `string`

Defined in: [three/src/nodes/core/NodeCode.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeCode.js#L30)

The node type.

---
editUrl: false
next: false
prev: false
title: "NodeVar"
---

Defined in: [three/src/nodes/core/NodeVar.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L7)

[NodeBuilder](/reference/threewebgpu/classes/nodebuilder/) is going to create instances of this class during the build process
of nodes. They represent the final shader variables that are going to be generated
by the builder. A dictionary of node variables is maintained in [NodeBuilder#vars](/reference/threewebgpu/classes/nodebuilder/#vars) for
this purpose.

## Extended by

- [`NodeVarying`](/reference/threewebgpu/classes/nodevarying/)

## Constructors

### Constructor

> **new NodeVar**(`name`, `type`, `readOnly`?, `count`?): `NodeVar`

Defined in: [three/src/nodes/core/NodeVar.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L17)

Constructs a new node variable.

#### Parameters

##### name

`string`

The name of the variable.

##### type

`string`

The type of the variable.

##### readOnly?

`boolean` = `false`

The read-only flag.

##### count?

`number` = `null`

The size.

#### Returns

`NodeVar`

## Properties

### count

> **count**: `number`

Defined in: [three/src/nodes/core/NodeVar.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L54)

The size.

***

### isNodeVar

> `readonly` **isNodeVar**: `boolean`

Defined in: [three/src/nodes/core/NodeVar.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L26)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### name

> **name**: `string`

Defined in: [three/src/nodes/core/NodeVar.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L33)

The name of the variable.

***

### readOnly

> **readOnly**: `boolean`

Defined in: [three/src/nodes/core/NodeVar.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L47)

The read-only flag.

***

### type

> **type**: `string`

Defined in: [three/src/nodes/core/NodeVar.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L40)

The type of the variable.

---
editUrl: false
next: false
prev: false
title: "NodeVarying"
---

Defined in: [three/src/nodes/core/NodeVarying.js:11](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVarying.js#L11)

[NodeBuilder](/reference/threewebgpu/classes/nodebuilder/) is going to create instances of this class during the build process
of nodes. They represent the final shader varyings that are going to be generated
by the builder. An array of node varyings is maintained in [NodeBuilder#varyings](/reference/threewebgpu/classes/nodebuilder/#varyings) for
this purpose.

## Extends

- [`NodeVar`](/reference/threewebgpu/classes/nodevar/)

## Constructors

### Constructor

> **new NodeVarying**(`name`, `type`): `NodeVarying`

Defined in: [three/src/nodes/core/NodeVarying.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVarying.js#L19)

Constructs a new node varying.

#### Parameters

##### name

`string`

The name of the varying.

##### type

`string`

The type of the varying.

#### Returns

`NodeVarying`

#### Overrides

[`NodeVar`](/reference/threewebgpu/classes/nodevar/).[`constructor`](/reference/threewebgpu/classes/nodevar/#constructor)

## Properties

### count

> **count**: `number`

Defined in: [three/src/nodes/core/NodeVar.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L54)

The size.

#### Inherited from

[`NodeVar`](/reference/threewebgpu/classes/nodevar/).[`count`](/reference/threewebgpu/classes/nodevar/#count)

***

### isNodeVar

> `readonly` **isNodeVar**: `boolean`

Defined in: [three/src/nodes/core/NodeVar.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L26)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`NodeVar`](/reference/threewebgpu/classes/nodevar/).[`isNodeVar`](/reference/threewebgpu/classes/nodevar/#isnodevar)

***

### isNodeVarying

> `readonly` **isNodeVarying**: `boolean`

Defined in: [three/src/nodes/core/NodeVarying.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVarying.js#L39)

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

#### Inherited from

[`NodeVar`](/reference/threewebgpu/classes/nodevar/).[`name`](/reference/threewebgpu/classes/nodevar/#name)

***

### needsInterpolation

> **needsInterpolation**: `boolean`

Defined in: [three/src/nodes/core/NodeVarying.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVarying.js#L30)

Whether this varying requires interpolation or not. This property can be used
to check if the varying can be optimized for a variable.

#### Default

```ts
false
```

***

### readOnly

> **readOnly**: `boolean`

Defined in: [three/src/nodes/core/NodeVar.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L47)

The read-only flag.

#### Inherited from

[`NodeVar`](/reference/threewebgpu/classes/nodevar/).[`readOnly`](/reference/threewebgpu/classes/nodevar/#readonly)

***

### type

> **type**: `string`

Defined in: [three/src/nodes/core/NodeVar.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeVar.js#L40)

The type of the variable.

#### Inherited from

[`NodeVar`](/reference/threewebgpu/classes/nodevar/).[`type`](/reference/threewebgpu/classes/nodevar/#type)

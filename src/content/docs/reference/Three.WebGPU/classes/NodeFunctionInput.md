---
editUrl: false
next: false
prev: false
title: "NodeFunctionInput"
---

Defined in: [three/src/nodes/core/NodeFunctionInput.js:4](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFunctionInput.js#L4)

Describes the input of a NodeFunction.

## Constructors

### Constructor

> **new NodeFunctionInput**(`type`, `name`, `count`?, `qualifier`?, `isConst`?): `NodeFunctionInput`

Defined in: [three/src/nodes/core/NodeFunctionInput.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFunctionInput.js#L15)

Constructs a new node function input.

#### Parameters

##### type

`string`

The input type.

##### name

`string`

The input name.

##### count?

`number` = `null`

If the input is an Array, count will be the length.

##### qualifier?

The parameter qualifier (only relevant for GLSL).

`"in"` | `"out"` | `"inout"`

##### isConst?

`boolean` = `false`

Whether the input uses a const qualifier or not (only relevant for GLSL).

#### Returns

`NodeFunctionInput`

## Properties

### count

> **count**: `number`

Defined in: [three/src/nodes/core/NodeFunctionInput.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFunctionInput.js#L37)

If the input is an Array, count will be the length.

#### Default

```ts
null
```

***

### isConst

> **isConst**: `boolean`

Defined in: [three/src/nodes/core/NodeFunctionInput.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFunctionInput.js#L53)

Whether the input uses a const qualifier or not (only relevant for GLSL).

#### Default

```ts
false
```

***

### name

> **name**: `string`

Defined in: [three/src/nodes/core/NodeFunctionInput.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFunctionInput.js#L29)

The input name.

***

### qualifier

> **qualifier**: `"in"` \| `"out"` \| `"inout"`

Defined in: [three/src/nodes/core/NodeFunctionInput.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFunctionInput.js#L45)

The parameter qualifier (only relevant for GLSL).

#### Default

```ts
''
```

***

### type

> **type**: `string`

Defined in: [three/src/nodes/core/NodeFunctionInput.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFunctionInput.js#L22)

The input type.

***

### isNodeFunctionInput

> `static` **isNodeFunctionInput**: `boolean`

Defined in: [three/src/nodes/core/NodeFunctionInput.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFunctionInput.js#L59)

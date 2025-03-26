---
editUrl: false
next: false
prev: false
title: "NodeFrame"
---

Defined in: [three/src/nodes/core/NodeFrame.js:9](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L9)

Management class for updating nodes. The module tracks metrics like
the elapsed time, delta time, the render and frame ID to correctly
call the node update methods [Node#updateBefore](/reference/threewebgpu/classes/node/#updatebefore), [Node#update](/reference/threewebgpu/classes/node/#update)
and [Node#updateAfter](/reference/threewebgpu/classes/node/#updateafter) depending on the node's configuration.

## Constructors

### Constructor

> **new NodeFrame**(): `NodeFrame`

Defined in: [three/src/nodes/core/NodeFrame.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L14)

Constructs a new node fame.

#### Returns

`NodeFrame`

## Properties

### camera

> **camera**: `Camera`

Defined in: [three/src/nodes/core/NodeFrame.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L91)

A reference to the current camera.

#### Default

```ts
null
```

***

### deltaTime

> **deltaTime**: `number`

Defined in: [three/src/nodes/core/NodeFrame.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L30)

The delta time in seconds.

#### Default

```ts
0
```

***

### frameId

> **frameId**: `number`

Defined in: [three/src/nodes/core/NodeFrame.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L38)

The frame ID.

#### Default

```ts
0
```

***

### lastTime

> **lastTime**: `number`

Defined in: [three/src/nodes/core/NodeFrame.js:294](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L294)

***

### material

> **material**: `Material`

Defined in: [three/src/nodes/core/NodeFrame.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L83)

A reference to the current material.

#### Default

```ts
null
```

***

### object

> **object**: `Object3D`

Defined in: [three/src/nodes/core/NodeFrame.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L99)

A reference to the current 3D object.

#### Default

```ts
null
```

***

### renderer

> **renderer**: `Renderer`

Defined in: [three/src/nodes/core/NodeFrame.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L75)

A reference to the current renderer.

#### Default

```ts
null
```

***

### renderId

> **renderId**: `number`

Defined in: [three/src/nodes/core/NodeFrame.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L46)

The render ID.

#### Default

```ts
0
```

***

### scene

> **scene**: `Scene`

Defined in: [three/src/nodes/core/NodeFrame.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L107)

A reference to the current scene.

#### Default

```ts
null
```

***

### time

> **time**: `number`

Defined in: [three/src/nodes/core/NodeFrame.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L22)

The elapsed time in seconds.

#### Default

```ts
0
```

***

### updateAfterMap

> **updateAfterMap**: `WeakMap`\<`Node`, `any`\>

Defined in: [three/src/nodes/core/NodeFrame.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L67)

Used to control the [Node#updateAfter](/reference/threewebgpu/classes/node/#updateafter) call.

***

### updateBeforeMap

> **updateBeforeMap**: `WeakMap`\<`Node`, `any`\>

Defined in: [three/src/nodes/core/NodeFrame.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L60)

Used to control the [Node#updateBefore](/reference/threewebgpu/classes/node/#updatebefore) call.

***

### updateMap

> **updateMap**: `WeakMap`\<`Node`, `any`\>

Defined in: [three/src/nodes/core/NodeFrame.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L53)

Used to control the [Node#update](/reference/threewebgpu/classes/node/#update) call.

## Methods

### update()

> **update**(): `void`

Defined in: [three/src/nodes/core/NodeFrame.js:290](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L290)

Updates the internal state of the node frame. This method is
called by the renderer in its internal animation loop.

#### Returns

`void`

***

### updateAfterNode()

> **updateAfterNode**(`node`): `void`

Defined in: [three/src/nodes/core/NodeFrame.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L196)

This method executes the [Node#updateAfter](/reference/threewebgpu/classes/node/#updateafter) for the given node.
It makes sure [Node#updateAfterType](/reference/threewebgpu/classes/node/#updateaftertype) is honored meaning the update
is only executed once per frame, render or object depending on the update
type.

#### Parameters

##### node

`Node`

The node that should be updated.

#### Returns

`void`

***

### updateBeforeNode()

> **updateBeforeNode**(`node`): `void`

Defined in: [three/src/nodes/core/NodeFrame.js:147](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L147)

This method executes the [Node#updateBefore](/reference/threewebgpu/classes/node/#updatebefore) for the given node.
It makes sure [Node#updateBeforeType](/reference/threewebgpu/classes/node/#updatebeforetype) is honored meaning the update
is only executed once per frame, render or object depending on the update
type.

#### Parameters

##### node

`Node`

The node that should be updated.

#### Returns

`void`

***

### updateNode()

> **updateNode**(`node`): `void`

Defined in: [three/src/nodes/core/NodeFrame.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeFrame.js#L245)

This method executes the [Node#update](/reference/threewebgpu/classes/node/#update) for the given node.
It makes sure [Node#updateType](/reference/threewebgpu/classes/node/#updatetype) is honored meaning the update
is only executed once per frame, render or object depending on the update
type.

#### Parameters

##### node

`Node`

The node that should be updated.

#### Returns

`void`

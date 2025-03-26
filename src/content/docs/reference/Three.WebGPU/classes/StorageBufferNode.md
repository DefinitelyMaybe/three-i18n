---
editUrl: false
next: false
prev: false
title: "StorageBufferNode"
---

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L39)

This node is used in context of compute shaders and allows to define a
storage buffer for data. A typical workflow is to create instances of
this node with the convenience functions `attributeArray()` or `instancedArray()`,
setup up a compute shader that writes into the buffers and then convert
the storage buffers to attribute nodes for rendering.

```js
const positionBuffer = instancedArray( particleCount, 'vec3' ); // the storage buffer node

const computeInit = Fn( () => { // the compute shader

	const position = positionBuffer.element( instanceIndex );

	// compute position data

	position.x = 1;
	position.y = 1;
	position.z = 1;

} )().compute( particleCount );

const particleMaterial = new THREE.SpriteNodeMaterial();
particleMaterial.positionNode = positionBuffer.toAttribute();

renderer.computeAsync( computeInit );

```

## Extends

- [`BufferNode`](/reference/threewebgpu/classes/buffernode/)

## Constructors

### Constructor

> **new StorageBufferNode**(`value`, `bufferType`?, `bufferCount`?): `StorageBufferNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L54)

Constructs a new storage buffer node.

#### Parameters

##### value

`any`

The buffer data.

##### bufferType?

`any` = `null`

The buffer type (e.g. `'vec3'`).

##### bufferCount?

`number` = `0`

The buffer count.

#### Returns

`StorageBufferNode`

#### Overrides

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`constructor`](/reference/threewebgpu/classes/buffernode/#constructor)

## Properties

### \_attribute

> **\_attribute**: `BufferAttributeNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L125)

A reference to the internal buffer attribute node.

#### Default

```ts
null
```

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`_listeners`](/reference/threewebgpu/classes/buffernode/#_listeners)

***

### \_varying

> **\_varying**: `VaryingNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L133)

A reference to the internal varying node.

#### Default

```ts
null
```

***

### access

> **access**: `string`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L100)

The access type of the texture node.

#### Default

```ts
'readWrite'
```

***

### bufferCount

> **bufferCount**: `number`

Defined in: [three/src/nodes/accessors/BufferNode.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/BufferNode.js#L59)

The uniform node that holds the value of the reference node.

#### Default

```ts
0
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`bufferCount`](/reference/threewebgpu/classes/buffernode/#buffercount)

***

### bufferType

> **bufferType**: `string`

Defined in: [three/src/nodes/accessors/BufferNode.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/BufferNode.js#L51)

The data type of the buffer.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`bufferType`](/reference/threewebgpu/classes/buffernode/#buffertype)

***

### global

> **global**: `boolean`

Defined in: [three/src/nodes/core/Node.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L88)

Whether this node is global or not. This property is relevant for the internal
node caching system. All nodes which should be declared just once should
set this flag to `true` (a typical example is [AttributeNode](/reference/threewebgpu/classes/attributenode/)).

#### Default

```ts
false
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`global`](/reference/threewebgpu/classes/buffernode/#global)

***

### groupNode

> **groupNode**: `UniformGroupNode`

Defined in: [three/src/nodes/core/UniformNode.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L52)

The uniform group of this uniform. By default, uniforms are
managed per object but they might belong to a shared group
which is updated per frame or render call.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`groupNode`](/reference/threewebgpu/classes/buffernode/#groupnode)

***

### isAtomic

> **isAtomic**: `boolean`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L108)

Whether the node is atomic or not.

#### Default

```ts
false
```

***

### isBufferNode

> `readonly` **isBufferNode**: `boolean`

Defined in: [three/src/nodes/accessors/BufferNode.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/BufferNode.js#L44)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`isBufferNode`](/reference/threewebgpu/classes/buffernode/#isbuffernode)

***

### isInputNode

> `readonly` **isInputNode**: `boolean`

Defined in: [three/src/nodes/core/InputNode.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/InputNode.js#L34)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`isInputNode`](/reference/threewebgpu/classes/buffernode/#isinputnode)

***

### isNode

> `readonly` **isNode**: `boolean`

Defined in: [three/src/nodes/core/Node.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L97)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`isNode`](/reference/threewebgpu/classes/buffernode/#isnode)

***

### isPBO

> **isPBO**: `boolean`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L117)

Whether the node represents a PBO or not.
Only relevant for WebGL.

#### Default

```ts
false
```

***

### isStorageBufferNode

> `readonly` **isStorageBufferNode**: `boolean`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L83)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isUniformNode

> `readonly` **isUniformNode**: `boolean`

Defined in: [three/src/nodes/core/UniformNode.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L35)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`isUniformNode`](/reference/threewebgpu/classes/buffernode/#isuniformnode)

***

### name

> **name**: `string`

Defined in: [three/src/nodes/core/UniformNode.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L43)

The name or label of the uniform.

#### Default

```ts
''
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`name`](/reference/threewebgpu/classes/buffernode/#name)

***

### nodeType

> **nodeType**: `string`

Defined in: [three/src/nodes/core/Node.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L37)

The node type. This represents the result type of the node (e.g. `float` or `vec3`).

#### Default

```ts
null
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`nodeType`](/reference/threewebgpu/classes/buffernode/#nodetype)

***

### precision

> **precision**: `"low"` \| `"medium"` \| `"high"`

Defined in: [three/src/nodes/core/InputNode.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/InputNode.js#L49)

The precision of the value in the shader.

#### Default

```ts
null
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`precision`](/reference/threewebgpu/classes/buffernode/#precision)

***

### structTypeNode

> **structTypeNode**: `StructTypeNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L92)

The buffer struct type.

#### Default

```ts
null
```

***

### updateAfterType

> **updateAfterType**: `string`

Defined in: [three/src/nodes/core/Node.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L61)

The update type of the node's [Node#updateAfter](/reference/threewebgpu/classes/node/#updateafter) method. Possible values are listed in [NodeUpdateType](/reference/threewebgpu/variables/nodeupdatetype/).

#### Default

```ts
'none'
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`updateAfterType`](/reference/threewebgpu/classes/buffernode/#updateaftertype)

***

### updateBeforeType

> **updateBeforeType**: `string`

Defined in: [three/src/nodes/core/Node.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L53)

The update type of the node's [Node#updateBefore](/reference/threewebgpu/classes/node/#updatebefore) method. Possible values are listed in [NodeUpdateType](/reference/threewebgpu/variables/nodeupdatetype/).

#### Default

```ts
'none'
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`updateBeforeType`](/reference/threewebgpu/classes/buffernode/#updatebeforetype)

***

### updateType

> **updateType**: `string`

Defined in: [three/src/nodes/core/Node.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L45)

The update type of the node's [Node#update](/reference/threewebgpu/classes/node/#update) method. Possible values are listed in [NodeUpdateType](/reference/threewebgpu/variables/nodeupdatetype/).

#### Default

```ts
'none'
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`updateType`](/reference/threewebgpu/classes/buffernode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`uuid`](/reference/threewebgpu/classes/buffernode/#uuid)

***

### value

> **value**: `any`

Defined in: [three/src/nodes/core/InputNode.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/InputNode.js#L41)

The value of this node. This can be any JS primitive, functions, array buffers or even three.js objects (vector, matrices, colors).

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`value`](/reference/threewebgpu/classes/buffernode/#value)

***

### version

> `readonly` **version**: `number`

Defined in: [three/src/nodes/core/Node.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L78)

The version of the node. The version automatically is increased when [Node#needsUpdate](/reference/threewebgpu/classes/node/#needsupdate) is set to `true`.

#### Default

```ts
0
```

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`version`](/reference/threewebgpu/classes/buffernode/#version)

## Accessors

### needsUpdate

#### Set Signature

> **set** **needsUpdate**(`value`): `void`

Defined in: [three/src/nodes/core/Node.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L130)

Set this property to `true` when the node should be regenerated.

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`needsUpdate`](/reference/threewebgpu/classes/buffernode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`type`](/reference/threewebgpu/classes/buffernode/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L41)

##### Returns

`string`

#### Overrides

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`type`](/reference/threewebgpu/classes/buffernode/#type-1)

## Methods

### addEventListener()

> **addEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L31)

Adds the given event listener to the given event type.

#### Parameters

##### type

`string`

The type of event to listen to.

##### listener

`Function`

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`addEventListener`](/reference/threewebgpu/classes/buffernode/#addeventlistener)

***

### analyze()

> **analyze**(`builder`): `void`

Defined in: [three/src/nodes/core/Node.js:502](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L502)

Represents the analyze stage which is the second step of the build process, see [Node#build](/reference/threewebgpu/classes/node/#build) method.
This stage analyzes the node hierarchy and ensures descendent nodes are built.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`analyze`](/reference/threewebgpu/classes/buffernode/#analyze)

***

### build()

> **build**(`builder`, `output`): `string`

Defined in: [three/src/nodes/core/Node.js:596](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L596)

This method performs the build of a node. The behavior of this method as well as its return value depend
on the current build stage (setup, analyze or generate).

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

##### output

`string` = `null`

Can be used to define the output type.

#### Returns

`string`

When this method is executed in the setup or analyze stage, `null` is returned. In the generate stage, the generated shader string.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`build`](/reference/threewebgpu/classes/buffernode/#build)

***

### customCacheKey()

> **customCacheKey**(): `number`

Defined in: [three/src/nodes/core/Node.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L338)

Generate a custom cache key for this node.

#### Returns

`number`

The cache key of the node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`customCacheKey`](/reference/threewebgpu/classes/buffernode/#customcachekey)

***

### deserialize()

> **deserialize**(`data`): `void`

Defined in: [three/src/nodes/core/InputNode.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/InputNode.js#L114)

Deserializes the node from the given JSON.

#### Parameters

##### data

`any`

#### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`deserialize`](/reference/threewebgpu/classes/buffernode/#deserialize)

***

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [three/src/core/EventDispatcher.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L101)

Dispatches an event object.

#### Parameters

##### event

`any`

The event that gets fired.

#### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`dispatchEvent`](/reference/threewebgpu/classes/buffernode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/core/Node.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L282)

Calling this method dispatches the `dispose` event. This event can be used
to register event listeners for clean up tasks.

#### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`dispose`](/reference/threewebgpu/classes/buffernode/#dispose)

***

### element()

> **element**(`indexNode`): `StorageArrayElementNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L203)

Enables element access with the given index node.

#### Parameters

##### indexNode

`IndexNode`

The index node.

#### Returns

`StorageArrayElementNode`

A node representing the element access.

***

### generate()

> **generate**(`builder`): `string`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L338)

Generates the code snippet of the storage buffer node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`string`

The generated code snippet.

#### Overrides

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`generate`](/reference/threewebgpu/classes/buffernode/#generate)

***

### getAttributeData()

> **getAttributeData**(): `object`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L289)

Returns attribute data for this storage buffer node.

#### Returns

`object`

The attribute data.

##### attribute

> **attribute**: `BufferAttributeNode`

##### varying

> **varying**: `VaryingNode`

***

### getCacheKey()

> **getCacheKey**(`force`?): `number`

Defined in: [three/src/nodes/core/Node.js:318](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L318)

Returns the cache key for this node.

#### Parameters

##### force?

`boolean` = `false`

When set to `true`, a recomputation of the cache key is forced.

#### Returns

`number`

The cache key of the node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getCacheKey`](/reference/threewebgpu/classes/buffernode/#getcachekey)

***

### getChildren()

> **getChildren**(): `Generator`\<`any`, `void`, `unknown`\>

Defined in: [three/src/nodes/core/Node.js:268](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L268)

Generator function that can be used to iterate over the child nodes.

#### Returns

`Generator`\<`any`, `void`, `unknown`\>

#### Generator

#### Yields

A child node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getChildren`](/reference/threewebgpu/classes/buffernode/#getchildren)

***

### getElementType()

> **getElementType**(`builder`): `string`

Defined in: [three/src/nodes/accessors/BufferNode.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/BufferNode.js#L69)

The data type of the buffer elements.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`string`

The element type.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getElementType`](/reference/threewebgpu/classes/buffernode/#getelementtype)

***

### getGroup()

> **getGroup**(): `UniformGroupNode`

Defined in: [three/src/nodes/core/UniformNode.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L89)

Returns the [UniformNode#groupNode](/reference/threewebgpu/classes/uniformnode/#groupnode).

#### Returns

`UniformGroupNode`

The uniform group.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getGroup`](/reference/threewebgpu/classes/buffernode/#getgroup)

***

### getHash()

> **getHash**(`builder`): `string`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:161](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L161)

This method is overwritten since the buffer data might be shared
and thus the hash should be shared as well.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`string`

The hash.

#### Overrides

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getHash`](/reference/threewebgpu/classes/buffernode/#gethash)

***

### getInputType()

> **getInputType**(): `string`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:191](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L191)

Overwrites the default implementation to return a fixed value `'indirectStorageBuffer'` or `'storageBuffer'`.

#### Returns

`string`

The input type.

#### Overrides

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getInputType`](/reference/threewebgpu/classes/buffernode/#getinputtype)

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getMemberType`](/reference/threewebgpu/classes/buffernode/#getmembertype)

***

### getNodeType()

> **getNodeType**(`builder`): `string`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L312)

This method is overwritten since the node type from the availability of storage buffers
and the attribute data.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`string`

The node type.

#### Overrides

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getNodeType`](/reference/threewebgpu/classes/buffernode/#getnodetype)

***

### getPBO()

> **getPBO**(): `boolean`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L228)

Returns the `isPBO` value.

#### Returns

`boolean`

Whether the node represents a PBO or not.

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getScope`](/reference/threewebgpu/classes/buffernode/#getscope)

***

### getSelf()

> **getSelf**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:227](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L227)

The `this` reference might point to a Proxy so this method can be used
to get the reference to the actual node instance.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to the node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getSelf`](/reference/threewebgpu/classes/buffernode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getSerializeChildren`](/reference/threewebgpu/classes/buffernode/#getserializechildren)

***

### getShared()

> **getShared**(`builder`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:461](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L461)

This method is used during the build process of a node and ensures
equal nodes are not built multiple times but just once. For example if
`attribute( 'uv' )` is used multiple times by the user, the build
process makes sure to process just the first node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

The shared node if possible. Otherwise `this` is returned.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getShared`](/reference/threewebgpu/classes/buffernode/#getshared)

***

### getUniformHash()

> **getUniformHash**(`builder`): `string`

Defined in: [three/src/nodes/core/UniformNode.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L102)

By default, this method returns the result of [Node#getHash](/reference/threewebgpu/classes/node/#gethash) but derived
classes might overwrite this method with a different implementation.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`string`

The uniform hash.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getUniformHash`](/reference/threewebgpu/classes/buffernode/#getuniformhash)

***

### getUpdateAfterType()

> **getUpdateAfterType**(): `object`

Defined in: [three/src/nodes/core/Node.js:396](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L396)

Returns the update type of [Node#updateAfter](/reference/threewebgpu/classes/node/#updateafter).

#### Returns

`object`

The update type.

##### FRAME

> **FRAME**: `string` = `'frame'`

##### NONE

> **NONE**: `string` = `'none'`

##### OBJECT

> **OBJECT**: `string` = `'object'`

##### RENDER

> **RENDER**: `string` = `'render'`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/buffernode/#getupdateaftertype)

***

### getUpdateBeforeType()

> **getUpdateBeforeType**(): `object`

Defined in: [three/src/nodes/core/Node.js:385](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L385)

Returns the update type of [Node#updateBefore](/reference/threewebgpu/classes/node/#updatebefore).

#### Returns

`object`

The update type.

##### FRAME

> **FRAME**: `string` = `'frame'`

##### NONE

> **NONE**: `string` = `'none'`

##### OBJECT

> **OBJECT**: `string` = `'object'`

##### RENDER

> **RENDER**: `string` = `'render'`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/buffernode/#getupdatebeforetype)

***

### getUpdateType()

> **getUpdateType**(): `object`

Defined in: [three/src/nodes/core/Node.js:374](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L374)

Returns the update type of [Node#update](/reference/threewebgpu/classes/node/#update).

#### Returns

`object`

The update type.

##### FRAME

> **FRAME**: `string` = `'frame'`

##### NONE

> **NONE**: `string` = `'none'`

##### OBJECT

> **OBJECT**: `string` = `'object'`

##### RENDER

> **RENDER**: `string` = `'render'`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`getUpdateType`](/reference/threewebgpu/classes/buffernode/#getupdatetype)

***

### hasEventListener()

> **hasEventListener**(`type`, `listener`): `boolean`

Defined in: [three/src/core/EventDispatcher.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L58)

Returns `true` if the given event listener has been added to the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to check.

#### Returns

`boolean`

Whether the given event listener has been added to the given event type.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`hasEventListener`](/reference/threewebgpu/classes/buffernode/#haseventlistener)

***

### isGlobal()

> **isGlobal**(): `boolean`

Defined in: [three/src/nodes/core/Node.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L256)

By default this method returns the value of the [Node#global](/reference/threewebgpu/classes/node/#global) flag. This method
can be overwritten in derived classes if an analytical way is required to determine the
global status.

#### Returns

`boolean`

Whether this node is global or not.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`isGlobal`](/reference/threewebgpu/classes/buffernode/#isglobal)

***

### label()

> **label**(`name`): [`UniformNode`](/reference/threewebgpu/classes/uniformnode/)

Defined in: [three/src/nodes/core/UniformNode.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L62)

Sets the [UniformNode#name](/reference/threewebgpu/classes/uniformnode/#name) property.

#### Parameters

##### name

`string`

The name of the uniform.

#### Returns

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/)

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`label`](/reference/threewebgpu/classes/buffernode/#label)

***

### onFrameUpdate()

> **onFrameUpdate**(`callback`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L175)

Convenient method for defining [Node#update](/reference/threewebgpu/classes/node/#update). Similar to [Node#onUpdate](/reference/threewebgpu/classes/node/#onupdate), but
this method automatically sets the update type to `FRAME`.

#### Parameters

##### callback

`Function`

The update method.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`onFrameUpdate`](/reference/threewebgpu/classes/buffernode/#onframeupdate)

***

### onObjectUpdate()

> **onObjectUpdate**(`callback`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L201)

Convenient method for defining [Node#update](/reference/threewebgpu/classes/node/#update). Similar to [Node#onUpdate](/reference/threewebgpu/classes/node/#onupdate), but
this method automatically sets the update type to `OBJECT`.

#### Parameters

##### callback

`Function`

The update method.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`onObjectUpdate`](/reference/threewebgpu/classes/buffernode/#onobjectupdate)

***

### onReference()

> **onReference**(`callback`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L213)

Convenient method for defining [Node#updateReference](/reference/threewebgpu/classes/node/#updatereference).

#### Parameters

##### callback

`Function`

The update method.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`onReference`](/reference/threewebgpu/classes/buffernode/#onreference)

***

### onRenderUpdate()

> **onRenderUpdate**(`callback`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:188](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L188)

Convenient method for defining [Node#update](/reference/threewebgpu/classes/node/#update). Similar to [Node#onUpdate](/reference/threewebgpu/classes/node/#onupdate), but
this method automatically sets the update type to `RENDER`.

#### Parameters

##### callback

`Function`

The update method.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`onRenderUpdate`](/reference/threewebgpu/classes/buffernode/#onrenderupdate)

***

### onUpdate()

> **onUpdate**(`callback`, `updateType`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/UniformNode.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L108)

Convenient method for defining [Node#update](/reference/threewebgpu/classes/node/#update).

#### Parameters

##### callback

`any`

The update method.

##### updateType

`any`

The update type.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`onUpdate`](/reference/threewebgpu/classes/buffernode/#onupdate)

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L74)

Removes the given event listener from the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to remove.

#### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`removeEventListener`](/reference/threewebgpu/classes/buffernode/#removeeventlistener)

***

### serialize()

> **serialize**(`data`): `void`

Defined in: [three/src/nodes/core/InputNode.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/InputNode.js#L97)

Serializes the node to JSON.

#### Parameters

##### data

`any`

#### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`serialize`](/reference/threewebgpu/classes/buffernode/#serialize)

***

### setAccess()

> **setAccess**(`value`): `StorageBufferNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L240)

Defines the node access.

#### Parameters

##### value

`string`

The node access.

#### Returns

`StorageBufferNode`

A reference to this node.

***

### setAtomic()

> **setAtomic**(`value`): `StorageBufferNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:265](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L265)

Defines whether the node is atomic or not.

#### Parameters

##### value

`boolean`

The atomic flag.

#### Returns

`StorageBufferNode`

A reference to this node.

***

### setGroup()

> **setGroup**(`group`): [`UniformNode`](/reference/threewebgpu/classes/uniformnode/)

Defined in: [three/src/nodes/core/UniformNode.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L76)

Sets the [UniformNode#groupNode](/reference/threewebgpu/classes/uniformnode/#groupnode) property.

#### Parameters

##### group

`UniformGroupNode`

The uniform group.

#### Returns

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/)

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`setGroup`](/reference/threewebgpu/classes/buffernode/#setgroup)

***

### setPBO()

> **setPBO**(`value`): `StorageBufferNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L215)

Defines whether this node is a PBO or not. Only relevant for WebGL.

#### Parameters

##### value

`boolean`

The value so set.

#### Returns

`StorageBufferNode`

A reference to this node.

***

### setPrecision()

> **setPrecision**(`precision`): `InputNode`

Defined in: [three/src/nodes/core/InputNode.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/InputNode.js#L89)

Sets the precision to the given value. The method can be
overwritten in derived classes if the final precision must be computed
analytically.

#### Parameters

##### precision

The precision of the input value in the shader.

`"low"` | `"medium"` | `"high"`

#### Returns

`InputNode`

A reference to this node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`setPrecision`](/reference/threewebgpu/classes/buffernode/#setprecision)

***

### setup()

> **setup**(`builder`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:478](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L478)

Represents the setup stage which is the first step of the build process, see [Node#build](/reference/threewebgpu/classes/node/#build) method.
This method is often overwritten in derived modules to prepare the node which is used as the output/result.
The output node must be returned in the `return` statement.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

The output node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`setup`](/reference/threewebgpu/classes/buffernode/#setup)

***

### toAtomic()

> **toAtomic**(): `StorageBufferNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:278](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L278)

Convenience method for making this node atomic.

#### Returns

`StorageBufferNode`

A reference to this node.

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/nodes/core/Node.js:825](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L825)

Serializes the node into the three.js JSON Object/Scene format.

#### Parameters

##### meta

`any`

An optional JSON object that already holds serialized data from other scene objects.

#### Returns

`any`

The serialized node.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`toJSON`](/reference/threewebgpu/classes/buffernode/#tojson)

***

### toReadOnly()

> **toReadOnly**(): `StorageBufferNode`

Defined in: [three/src/nodes/accessors/StorageBufferNode.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/StorageBufferNode.js#L253)

Convenience method for configuring a read-only node access.

#### Returns

`StorageBufferNode`

A reference to this node.

***

### traverse()

> **traverse**(`callback`): `void`

Defined in: [three/src/nodes/core/Node.js:300](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L300)

Can be used to traverse through the node's hierarchy.

#### Parameters

##### callback

`traverseCallback`

A callback that is executed per node.

#### Returns

`void`

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`traverse`](/reference/threewebgpu/classes/buffernode/#traverse)

***

### update()

> `abstract` **update**(): `boolean`

Defined in: [three/src/nodes/core/Node.js:582](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L582)

The method can be implemented to update the node's internal state when it is used to render an object.
The [Node#updateType](/reference/threewebgpu/classes/node/#updatetype) property defines how often the update is executed.

#### Returns

`boolean`

An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`update`](/reference/threewebgpu/classes/buffernode/#update)

***

### updateAfter()

> `abstract` **updateAfter**(): `boolean`

Defined in: [three/src/nodes/core/Node.js:568](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L568)

The method can be implemented to update the node's internal state after it was used to render an object.
The [Node#updateAfterType](/reference/threewebgpu/classes/node/#updateaftertype) property defines how often the update is executed.

#### Returns

`boolean`

An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`updateAfter`](/reference/threewebgpu/classes/buffernode/#updateafter)

***

### updateBefore()

> `abstract` **updateBefore**(): `boolean`

Defined in: [three/src/nodes/core/Node.js:554](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L554)

The method can be implemented to update the node's internal state before it is used to render an object.
The [Node#updateBeforeType](/reference/threewebgpu/classes/node/#updatebeforetype) property defines how often the update is executed.

#### Returns

`boolean`

An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`updateBefore`](/reference/threewebgpu/classes/buffernode/#updatebefore)

***

### updateReference()

> **updateReference**(): `any`

Defined in: [three/src/nodes/core/Node.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L242)

Nodes might refer to other objects like materials. This method allows to dynamically update the reference
to such objects based on a given state (e.g. the current node frame or builder).

#### Returns

`any`

The updated reference.

#### Inherited from

[`BufferNode`](/reference/threewebgpu/classes/buffernode/).[`updateReference`](/reference/threewebgpu/classes/buffernode/#updatereference)

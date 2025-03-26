---
editUrl: false
next: false
prev: false
title: "MaterialReferenceNode"
---

Defined in: [three/src/nodes/accessors/MaterialReferenceNode.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/MaterialReferenceNode.js#L15)

This node is a special type of reference node which is intended
for linking material properties with node values.
```js
const opacityNode = materialReference( 'opacity', 'float', material );
```
When changing `material.opacity`, the node value of `opacityNode` will
automatically be updated.

## Extends

- [`ReferenceNode`](/reference/threewebgpu/classes/referencenode/)

## Constructors

### Constructor

> **new MaterialReferenceNode**(`property`, `inputType`, `material`?): `MaterialReferenceNode`

Defined in: [three/src/nodes/accessors/MaterialReferenceNode.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/MaterialReferenceNode.js#L31)

Constructs a new material reference node.

#### Parameters

##### property

`string`

The name of the property the node refers to.

##### inputType

`string`

The uniform type that should be used to represent the property value.

##### material?

`Material` = `null`

The material the property belongs to. When no material is set,
the node refers to the material of the current rendered object.

#### Returns

`MaterialReferenceNode`

#### Overrides

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`constructor`](/reference/threewebgpu/classes/referencenode/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`_listeners`](/reference/threewebgpu/classes/referencenode/#_listeners)

***

### count

> **count**: `number`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L138)

When the linked property is an array, this parameter defines its length.

#### Default

```ts
null
```

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`count`](/reference/threewebgpu/classes/referencenode/#count)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`global`](/reference/threewebgpu/classes/referencenode/#global)

***

### group

> **group**: `UniformGroupNode`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:171](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L171)

The uniform group of the internal uniform.

#### Default

```ts
null
```

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`group`](/reference/threewebgpu/classes/referencenode/#group)

***

### isMaterialReferenceNode

> `readonly` **isMaterialReferenceNode**: `boolean`

Defined in: [three/src/nodes/accessors/MaterialReferenceNode.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/MaterialReferenceNode.js#L51)

This flag can be used for type testing.

#### Default

```ts
true
```

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`isNode`](/reference/threewebgpu/classes/referencenode/#isnode)

***

### material

> **material**: `Material`

Defined in: [three/src/nodes/accessors/MaterialReferenceNode.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/MaterialReferenceNode.js#L42)

The material the property belongs to. When no material is set,
the node refers to the material of the current rendered object.

#### Default

```ts
null
```

***

### name

> **name**: `string`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:179](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L179)

An optional label of the internal uniform node.

#### Default

```ts
null
```

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`name`](/reference/threewebgpu/classes/referencenode/#name)

***

### node

> **node**: `UniformNode`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L163)

The uniform node that holds the value of the reference node.

#### Default

```ts
null
```

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`node`](/reference/threewebgpu/classes/referencenode/#node)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`nodeType`](/reference/threewebgpu/classes/referencenode/#nodetype)

***

### object

> **object**: `any`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L130)

The object the property belongs to.

#### Default

```ts
null
```

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`object`](/reference/threewebgpu/classes/referencenode/#object)

***

### properties

> **properties**: `string`[]

Defined in: [three/src/nodes/accessors/ReferenceNode.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L146)

The property name might have dots so nested properties can be referred.
The hierarchy of the names is stored inside this array.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`properties`](/reference/threewebgpu/classes/referencenode/#properties)

***

### property

> **property**: `string`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L115)

The name of the property the node refers to.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`property`](/reference/threewebgpu/classes/referencenode/#property)

***

### reference

> **reference**: `any`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:155](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L155)

Points to the current referred object. This property exists next to [ReferenceNode#object](/reference/threewebgpu/classes/referencenode/#object)
since the final reference might be updated from calling code.

#### Default

```ts
null
```

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`reference`](/reference/threewebgpu/classes/referencenode/#reference)

***

### uniformType

> **uniformType**: `string`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L122)

The uniform type that should be used to represent the property value.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`uniformType`](/reference/threewebgpu/classes/referencenode/#uniformtype)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`updateAfterType`](/reference/threewebgpu/classes/referencenode/#updateaftertype)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`updateBeforeType`](/reference/threewebgpu/classes/referencenode/#updatebeforetype)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`updateType`](/reference/threewebgpu/classes/referencenode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`uuid`](/reference/threewebgpu/classes/referencenode/#uuid)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`version`](/reference/threewebgpu/classes/referencenode/#version)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`needsUpdate`](/reference/threewebgpu/classes/referencenode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`type`](/reference/threewebgpu/classes/referencenode/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/accessors/MaterialReferenceNode.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/MaterialReferenceNode.js#L17)

##### Returns

`string`

#### Overrides

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`type`](/reference/threewebgpu/classes/referencenode/#type-1)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`addEventListener`](/reference/threewebgpu/classes/referencenode/#addeventlistener)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`analyze`](/reference/threewebgpu/classes/referencenode/#analyze)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`build`](/reference/threewebgpu/classes/referencenode/#build)

***

### customCacheKey()

> **customCacheKey**(): `number`

Defined in: [three/src/nodes/core/Node.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L338)

Generate a custom cache key for this node.

#### Returns

`number`

The cache key of the node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`customCacheKey`](/reference/threewebgpu/classes/referencenode/#customcachekey)

***

### deserialize()

> **deserialize**(`json`): `void`

Defined in: [three/src/nodes/core/Node.js:771](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L771)

Deserializes the node from the given JSON.

#### Parameters

##### json

`any`

The JSON object.

#### Returns

`void`

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`deserialize`](/reference/threewebgpu/classes/referencenode/#deserialize)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`dispatchEvent`](/reference/threewebgpu/classes/referencenode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/core/Node.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L282)

Calling this method dispatches the `dispose` event. This event can be used
to register event listeners for clean up tasks.

#### Returns

`void`

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`dispose`](/reference/threewebgpu/classes/referencenode/#dispose)

***

### element()

> **element**(`indexNode`): `ReferenceElementNode`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L198)

When the referred property is array-like, this method can be used
to access elements via an index node.

#### Parameters

##### indexNode

`IndexNode`

indexNode.

#### Returns

`ReferenceElementNode`

A reference to an element.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`element`](/reference/threewebgpu/classes/referencenode/#element)

***

### generate()

> **generate**(`builder`, `output`): `string`

Defined in: [three/src/nodes/core/Node.js:534](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L534)

Represents the generate stage which is the third step of the build process, see [Node#build](/reference/threewebgpu/classes/node/#build) method.
This state builds the output node and returns the resulting shader string.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

##### output

`string`

Can be used to define the output type.

#### Returns

`string`

The generated shader string.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`generate`](/reference/threewebgpu/classes/referencenode/#generate)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getCacheKey`](/reference/threewebgpu/classes/referencenode/#getcachekey)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getChildren`](/reference/threewebgpu/classes/referencenode/#getchildren)

***

### getElementType()

> **getElementType**(`builder`): `string`

Defined in: [three/src/nodes/core/Node.js:410](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L410)

Certain types are composed of multiple elements. For example a `vec3`
is composed of three `float` values. This method returns the type of
these elements.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`string`

The type of the node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getElementType`](/reference/threewebgpu/classes/referencenode/#getelementtype)

***

### getHash()

> **getHash**(): `string`

Defined in: [three/src/nodes/core/Node.js:363](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L363)

Returns the hash of the node which is used to identify the node. By default it's
the [Node#uuid](/reference/threewebgpu/classes/node/#uuid) however derived node classes might have to overwrite this method
depending on their implementation.

#### Returns

`string`

The hash.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getHash`](/reference/threewebgpu/classes/referencenode/#gethash)

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getMemberType`](/reference/threewebgpu/classes/referencenode/#getmembertype)

***

### getNodeType()

> **getNodeType**(`builder`): `string`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:283](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L283)

This method is overwritten since the node type is inferred from
the type of the reference node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`string`

The node type.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getNodeType`](/reference/threewebgpu/classes/referencenode/#getnodetype)

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getScope`](/reference/threewebgpu/classes/referencenode/#getscope)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getSelf`](/reference/threewebgpu/classes/referencenode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getSerializeChildren`](/reference/threewebgpu/classes/referencenode/#getserializechildren)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getShared`](/reference/threewebgpu/classes/referencenode/#getshared)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/referencenode/#getupdateaftertype)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/referencenode/#getupdatebeforetype)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getUpdateType`](/reference/threewebgpu/classes/referencenode/#getupdatetype)

***

### getValueFromReference()

> **getValueFromReference**(`object`?): `any`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:302](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L302)

Returns the property value from the given referred object.

#### Parameters

##### object?

`any` = `...`

The object to retrieve the property value from.

#### Returns

`any`

The value.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`getValueFromReference`](/reference/threewebgpu/classes/referencenode/#getvaluefromreference)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`hasEventListener`](/reference/threewebgpu/classes/referencenode/#haseventlistener)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`isGlobal`](/reference/threewebgpu/classes/referencenode/#isglobal)

***

### label()

> **label**(`name`): [`ReferenceNode`](/reference/threewebgpu/classes/referencenode/)

Defined in: [three/src/nodes/accessors/ReferenceNode.js:224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L224)

Sets the label for the internal uniform.

#### Parameters

##### name

`string`

The label to set.

#### Returns

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/)

A reference to this node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`label`](/reference/threewebgpu/classes/referencenode/#label)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`onFrameUpdate`](/reference/threewebgpu/classes/referencenode/#onframeupdate)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`onObjectUpdate`](/reference/threewebgpu/classes/referencenode/#onobjectupdate)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`onReference`](/reference/threewebgpu/classes/referencenode/#onreference)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`onRenderUpdate`](/reference/threewebgpu/classes/referencenode/#onrenderupdate)

***

### onUpdate()

> **onUpdate**(`callback`, `updateType`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L159)

Convenient method for defining [Node#update](/reference/threewebgpu/classes/node/#update).

#### Parameters

##### callback

`Function`

The update method.

##### updateType

`string`

The update type.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`onUpdate`](/reference/threewebgpu/classes/referencenode/#onupdate)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`removeEventListener`](/reference/threewebgpu/classes/referencenode/#removeeventlistener)

***

### serialize()

> **serialize**(`json`): `void`

Defined in: [three/src/nodes/core/Node.js:732](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L732)

Serializes the node to JSON.

#### Parameters

##### json

`any`

The output JSON object.

#### Returns

`void`

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`serialize`](/reference/threewebgpu/classes/referencenode/#serialize)

***

### setGroup()

> **setGroup**(`group`): [`ReferenceNode`](/reference/threewebgpu/classes/referencenode/)

Defined in: [three/src/nodes/accessors/ReferenceNode.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L210)

Sets the uniform group for this reference node.

#### Parameters

##### group

`UniformGroupNode`

The uniform group to set.

#### Returns

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/)

A reference to this node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`setGroup`](/reference/threewebgpu/classes/referencenode/#setgroup)

***

### setNodeType()

> **setNodeType**(`uniformType`): `void`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:238](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L238)

Sets the node type which automatically defines the internal
uniform type.

#### Parameters

##### uniformType

`string`

The type to set.

#### Returns

`void`

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`setNodeType`](/reference/threewebgpu/classes/referencenode/#setnodetype)

***

### setup()

> **setup**(): `UniformNode`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:339](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L339)

The output of the reference node is the internal uniform node.

#### Returns

`UniformNode`

The output node.

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`setup`](/reference/threewebgpu/classes/referencenode/#setup)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`toJSON`](/reference/threewebgpu/classes/referencenode/#tojson)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`traverse`](/reference/threewebgpu/classes/referencenode/#traverse)

***

### update()

> **update**(): `void`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:352](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L352)

Overwritten to to update the internal uniform value.

#### Returns

`void`

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`update`](/reference/threewebgpu/classes/referencenode/#update)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`updateAfter`](/reference/threewebgpu/classes/referencenode/#updateafter)

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

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`updateBefore`](/reference/threewebgpu/classes/referencenode/#updatebefore)

***

### updateReference()

> **updateReference**(`state`): `any`

Defined in: [three/src/nodes/accessors/MaterialReferenceNode.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/MaterialReferenceNode.js#L62)

Updates the reference based on the given state. The state is only evaluated
[MaterialReferenceNode#material](/reference/threewebgpu/classes/materialreferencenode/#material) is not set.

#### Parameters

##### state

`any`

The current state.

#### Returns

`any`

The updated reference.

#### Overrides

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`updateReference`](/reference/threewebgpu/classes/referencenode/#updatereference)

***

### updateValue()

> **updateValue**(): `void`

Defined in: [three/src/nodes/accessors/ReferenceNode.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/ReferenceNode.js#L362)

Retrieves the value from the referred object property and uses it
to updated the internal uniform.

#### Returns

`void`

#### Inherited from

[`ReferenceNode`](/reference/threewebgpu/classes/referencenode/).[`updateValue`](/reference/threewebgpu/classes/referencenode/#updatevalue)

---
editUrl: false
next: false
prev: false
title: "MRTNode"
---

Defined in: [three/src/nodes/core/MRTNode.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L40)

This node can be used setup a MRT context for rendering. A typical MRT setup for
post-processing is shown below:
```js
const mrtNode = mrt( {
  output: output,
  normal: normalView
} ) );
```
The MRT output is defined as a dictionary.

## Extends

- [`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/)

## Constructors

### Constructor

> **new MRTNode**(`outputNodes`): `MRTNode`

Defined in: [three/src/nodes/core/MRTNode.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L53)

Constructs a new output struct node.

#### Parameters

##### outputNodes

The MRT outputs.

#### Returns

`MRTNode`

#### Overrides

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`constructor`](/reference/threewebgpu/classes/outputstructnode/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`_listeners`](/reference/threewebgpu/classes/outputstructnode/#_listeners)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`global`](/reference/threewebgpu/classes/outputstructnode/#global)

***

### isMRTNode

> `readonly` **isMRTNode**: `boolean`

Defined in: [three/src/nodes/core/MRTNode.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L73)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`isNode`](/reference/threewebgpu/classes/outputstructnode/#isnode)

***

### isOutputStructNode

> `readonly` **isOutputStructNode**: `boolean`

Defined in: [three/src/nodes/core/OutputStructNode.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/OutputStructNode.js#L41)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`isOutputStructNode`](/reference/threewebgpu/classes/outputstructnode/#isoutputstructnode)

***

### members

> **members**: [`Node`](/reference/threewebgpu/classes/node/)[]

Defined in: [three/src/nodes/core/OutputStructNode.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/OutputStructNode.js#L32)

An array of nodes which defines the output.

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`members`](/reference/threewebgpu/classes/outputstructnode/#members)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`nodeType`](/reference/threewebgpu/classes/outputstructnode/#nodetype)

***

### outputNodes

> **outputNodes**: `object`

Defined in: [three/src/nodes/core/MRTNode.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L64)

A dictionary representing the MRT outputs. The key
is the name of the output, the value the node which produces
the output result.

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`updateAfterType`](/reference/threewebgpu/classes/outputstructnode/#updateaftertype)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`updateBeforeType`](/reference/threewebgpu/classes/outputstructnode/#updatebeforetype)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`updateType`](/reference/threewebgpu/classes/outputstructnode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`uuid`](/reference/threewebgpu/classes/outputstructnode/#uuid)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`version`](/reference/threewebgpu/classes/outputstructnode/#version)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`needsUpdate`](/reference/threewebgpu/classes/outputstructnode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`type`](/reference/threewebgpu/classes/outputstructnode/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/core/MRTNode.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L42)

##### Returns

`string`

#### Overrides

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`type`](/reference/threewebgpu/classes/outputstructnode/#type-1)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`addEventListener`](/reference/threewebgpu/classes/outputstructnode/#addeventlistener)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`analyze`](/reference/threewebgpu/classes/outputstructnode/#analyze)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`build`](/reference/threewebgpu/classes/outputstructnode/#build)

***

### customCacheKey()

> **customCacheKey**(): `number`

Defined in: [three/src/nodes/core/Node.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L338)

Generate a custom cache key for this node.

#### Returns

`number`

The cache key of the node.

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`customCacheKey`](/reference/threewebgpu/classes/outputstructnode/#customcachekey)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`deserialize`](/reference/threewebgpu/classes/outputstructnode/#deserialize)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`dispatchEvent`](/reference/threewebgpu/classes/outputstructnode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/core/Node.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L282)

Calling this method dispatches the `dispose` event. This event can be used
to register event listeners for clean up tasks.

#### Returns

`void`

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`dispose`](/reference/threewebgpu/classes/outputstructnode/#dispose)

***

### generate()

> **generate**(`builder`): `any`

Defined in: [three/src/nodes/core/OutputStructNode.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/OutputStructNode.js#L72)

Represents the generate stage which is the third step of the build process, see [Node#build](/reference/threewebgpu/classes/node/#build) method.
This state builds the output node and returns the resulting shader string.

#### Parameters

##### builder

`any`

The current node builder.

#### Returns

`any`

The generated shader string.

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`generate`](/reference/threewebgpu/classes/outputstructnode/#generate)

***

### get()

> **get**(`name`): `Node`

Defined in: [three/src/nodes/core/MRTNode.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L95)

Returns the output node for the given name.

#### Parameters

##### name

`string`

The name of the output.

#### Returns

`Node`

The output node.

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getCacheKey`](/reference/threewebgpu/classes/outputstructnode/#getcachekey)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getChildren`](/reference/threewebgpu/classes/outputstructnode/#getchildren)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getElementType`](/reference/threewebgpu/classes/outputstructnode/#getelementtype)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getHash`](/reference/threewebgpu/classes/outputstructnode/#gethash)

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getMemberType`](/reference/threewebgpu/classes/outputstructnode/#getmembertype)

***

### getNodeType()

> **getNodeType**(`builder`): `any`

Defined in: [three/src/nodes/core/OutputStructNode.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/OutputStructNode.js#L45)

Returns the node's type.

#### Parameters

##### builder

`any`

The current node builder.

#### Returns

`any`

The type of the node.

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getNodeType`](/reference/threewebgpu/classes/outputstructnode/#getnodetype)

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getScope`](/reference/threewebgpu/classes/outputstructnode/#getscope)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getSelf`](/reference/threewebgpu/classes/outputstructnode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getSerializeChildren`](/reference/threewebgpu/classes/outputstructnode/#getserializechildren)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getShared`](/reference/threewebgpu/classes/outputstructnode/#getshared)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/outputstructnode/#getupdateaftertype)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/outputstructnode/#getupdatebeforetype)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`getUpdateType`](/reference/threewebgpu/classes/outputstructnode/#getupdatetype)

***

### has()

> **has**(`name`): `NodeBuilder`

Defined in: [three/src/nodes/core/MRTNode.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L83)

Returns `true` if the MRT node has an output with the given name.

#### Parameters

##### name

`string`

The name of the output.

#### Returns

`NodeBuilder`

Whether the MRT node has an output for the given name or not.

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`hasEventListener`](/reference/threewebgpu/classes/outputstructnode/#haseventlistener)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`isGlobal`](/reference/threewebgpu/classes/outputstructnode/#isglobal)

***

### merge()

> **merge**(`mrtNode`): `MRTNode`

Defined in: [three/src/nodes/core/MRTNode.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L107)

Merges the outputs of the given MRT node with the outputs of this node.

#### Parameters

##### mrtNode

`MRTNode`

The MRT to merge.

#### Returns

`MRTNode`

A new MRT node with merged outputs..

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`onFrameUpdate`](/reference/threewebgpu/classes/outputstructnode/#onframeupdate)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`onObjectUpdate`](/reference/threewebgpu/classes/outputstructnode/#onobjectupdate)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`onReference`](/reference/threewebgpu/classes/outputstructnode/#onreference)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`onRenderUpdate`](/reference/threewebgpu/classes/outputstructnode/#onrenderupdate)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`onUpdate`](/reference/threewebgpu/classes/outputstructnode/#onupdate)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`removeEventListener`](/reference/threewebgpu/classes/outputstructnode/#removeeventlistener)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`serialize`](/reference/threewebgpu/classes/outputstructnode/#serialize)

***

### setup()

> **setup**(`builder`): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/MRTNode.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/MRTNode.js#L115)

Represents the setup stage which is the first step of the build process, see [Node#build](/reference/threewebgpu/classes/node/#build) method.
This method is often overwritten in derived modules to prepare the node which is used as the output/result.
The output node must be returned in the `return` statement.

#### Parameters

##### builder

`any`

The current node builder.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

The output node.

#### Overrides

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`setup`](/reference/threewebgpu/classes/outputstructnode/#setup)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`toJSON`](/reference/threewebgpu/classes/outputstructnode/#tojson)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`traverse`](/reference/threewebgpu/classes/outputstructnode/#traverse)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`update`](/reference/threewebgpu/classes/outputstructnode/#update)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`updateAfter`](/reference/threewebgpu/classes/outputstructnode/#updateafter)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`updateBefore`](/reference/threewebgpu/classes/outputstructnode/#updatebefore)

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

[`OutputStructNode`](/reference/threewebgpu/classes/outputstructnode/).[`updateReference`](/reference/threewebgpu/classes/outputstructnode/#updatereference)

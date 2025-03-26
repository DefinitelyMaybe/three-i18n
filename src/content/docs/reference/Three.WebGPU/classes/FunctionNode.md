---
editUrl: false
next: false
prev: false
title: "FunctionNode"
---

Defined in: [three/src/nodes/code/FunctionNode.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/FunctionNode.js#L30)

This class represents a native shader function. It can be used to implement
certain aspects of a node material with native shader code. There are two predefined
TSL functions for easier usage.

- `wgslFn`: Creates a WGSL function node.
- `glslFn`: Creates a GLSL function node.

A basic example with one include looks like so:

```js
const desaturateWGSLFn = wgslFn( `
	fn desaturate( color:vec3<f32> ) -> vec3<f32> {
		let lum = vec3<f32>( 0.299, 0.587, 0.114 );
		return vec3<f32>( dot( lum, color ) );
	}`
);
const someWGSLFn = wgslFn( `
	fn someFn( color:vec3<f32> ) -> vec3<f32> {
		return desaturate( color );
	}
`, [ desaturateWGSLFn ] );
material.colorNode = someWGSLFn( { color: texture( map ) } );
```

## Extends

- [`CodeNode`](/reference/threewebgpu/classes/codenode/)

## Constructors

### Constructor

> **new FunctionNode**(`code`?, `includes`?, `language`?): `FunctionNode`

Defined in: [three/src/nodes/code/FunctionNode.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/FunctionNode.js#L45)

Constructs a new function node.

#### Parameters

##### code?

`string` = `''`

The native code.

##### includes?

`Node`[] = `[]`

An array of includes.

##### language?

The used language.

`"js"` | `"wgsl"` | `"glsl"`

#### Returns

`FunctionNode`

#### Overrides

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`constructor`](/reference/threewebgpu/classes/codenode/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`_listeners`](/reference/threewebgpu/classes/codenode/#_listeners)

***

### code

> **code**: `string`

Defined in: [three/src/nodes/code/CodeNode.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L45)

The native code.

#### Default

```ts
''
```

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`code`](/reference/threewebgpu/classes/codenode/#code)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`global`](/reference/threewebgpu/classes/codenode/#global)

***

### includes

> **includes**: [`Node`](/reference/threewebgpu/classes/node/)[]

Defined in: [three/src/nodes/code/CodeNode.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L53)

An array of includes

#### Default

```ts
[]
```

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`includes`](/reference/threewebgpu/classes/codenode/#includes)

***

### isCodeNode

> `readonly` **isCodeNode**: `boolean`

Defined in: [three/src/nodes/code/CodeNode.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L37)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`isCodeNode`](/reference/threewebgpu/classes/codenode/#iscodenode)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`isNode`](/reference/threewebgpu/classes/codenode/#isnode)

***

### language

> **language**: `"js"` \| `"wgsl"` \| `"glsl"`

Defined in: [three/src/nodes/code/CodeNode.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L61)

The used language.

#### Default

```ts
''
```

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`language`](/reference/threewebgpu/classes/codenode/#language)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`nodeType`](/reference/threewebgpu/classes/codenode/#nodetype)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`updateAfterType`](/reference/threewebgpu/classes/codenode/#updateaftertype)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`updateBeforeType`](/reference/threewebgpu/classes/codenode/#updatebeforetype)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`updateType`](/reference/threewebgpu/classes/codenode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`uuid`](/reference/threewebgpu/classes/codenode/#uuid)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`version`](/reference/threewebgpu/classes/codenode/#version)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`needsUpdate`](/reference/threewebgpu/classes/codenode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`type`](/reference/threewebgpu/classes/codenode/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/code/FunctionNode.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/FunctionNode.js#L32)

##### Returns

`string`

#### Overrides

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`type`](/reference/threewebgpu/classes/codenode/#type-1)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`addEventListener`](/reference/threewebgpu/classes/codenode/#addeventlistener)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`analyze`](/reference/threewebgpu/classes/codenode/#analyze)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`build`](/reference/threewebgpu/classes/codenode/#build)

***

### customCacheKey()

> **customCacheKey**(): `number`

Defined in: [three/src/nodes/core/Node.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L338)

Generate a custom cache key for this node.

#### Returns

`number`

The cache key of the node.

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`customCacheKey`](/reference/threewebgpu/classes/codenode/#customcachekey)

***

### deserialize()

> **deserialize**(`data`): `void`

Defined in: [three/src/nodes/code/CodeNode.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L128)

Deserializes the node from the given JSON.

#### Parameters

##### data

`any`

#### Returns

`void`

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`deserialize`](/reference/threewebgpu/classes/codenode/#deserialize)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`dispatchEvent`](/reference/threewebgpu/classes/codenode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/core/Node.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L282)

Calling this method dispatches the `dispose` event. This event can be used
to register event listeners for clean up tasks.

#### Returns

`void`

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`dispose`](/reference/threewebgpu/classes/codenode/#dispose)

***

### generate()

> **generate**(`builder`, `output`): `any`

Defined in: [three/src/nodes/code/FunctionNode.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/FunctionNode.js#L93)

Represents the generate stage which is the third step of the build process, see [Node#build](/reference/threewebgpu/classes/node/#build) method.
This state builds the output node and returns the resulting shader string.

#### Parameters

##### builder

`any`

The current node builder.

##### output

`any`

#### Returns

`any`

The generated shader string.

#### Overrides

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`generate`](/reference/threewebgpu/classes/codenode/#generate)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getCacheKey`](/reference/threewebgpu/classes/codenode/#getcachekey)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getChildren`](/reference/threewebgpu/classes/codenode/#getchildren)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getElementType`](/reference/threewebgpu/classes/codenode/#getelementtype)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getHash`](/reference/threewebgpu/classes/codenode/#gethash)

***

### getIncludes()

> **getIncludes**(): [`Node`](/reference/threewebgpu/classes/node/)[]

Defined in: [three/src/nodes/code/CodeNode.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L96)

Returns the includes of this code node.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)[]

The includes.

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getIncludes`](/reference/threewebgpu/classes/codenode/#getincludes)

***

### getInputs()

> **getInputs**(`builder`): `NodeFunctionInput`[]

Defined in: [three/src/nodes/code/FunctionNode.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/FunctionNode.js#L63)

Returns the inputs of this function node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`NodeFunctionInput`[]

The inputs.

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getMemberType`](/reference/threewebgpu/classes/codenode/#getmembertype)

***

### getNodeFunction()

> **getNodeFunction**(`builder`): `NodeFunction`

Defined in: [three/src/nodes/code/FunctionNode.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/FunctionNode.js#L75)

Returns the node function for this function node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`NodeFunction`

The node function.

***

### getNodeType()

> **getNodeType**(`builder`): `any`

Defined in: [three/src/nodes/code/FunctionNode.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/FunctionNode.js#L51)

Returns the node's type.

#### Parameters

##### builder

`any`

The current node builder.

#### Returns

`any`

The type of the node.

#### Overrides

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getNodeType`](/reference/threewebgpu/classes/codenode/#getnodetype)

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getScope`](/reference/threewebgpu/classes/codenode/#getscope)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getSelf`](/reference/threewebgpu/classes/codenode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getSerializeChildren`](/reference/threewebgpu/classes/codenode/#getserializechildren)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getShared`](/reference/threewebgpu/classes/codenode/#getshared)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/codenode/#getupdateaftertype)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/codenode/#getupdatebeforetype)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`getUpdateType`](/reference/threewebgpu/classes/codenode/#getupdatetype)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`hasEventListener`](/reference/threewebgpu/classes/codenode/#haseventlistener)

***

### isGlobal()

> **isGlobal**(): `boolean`

Defined in: [three/src/nodes/code/CodeNode.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L70)

The method is overwritten so it always returns `true`.

#### Returns

`boolean`

Whether this node is global or not.

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`isGlobal`](/reference/threewebgpu/classes/codenode/#isglobal)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`onFrameUpdate`](/reference/threewebgpu/classes/codenode/#onframeupdate)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`onObjectUpdate`](/reference/threewebgpu/classes/codenode/#onobjectupdate)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`onReference`](/reference/threewebgpu/classes/codenode/#onreference)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`onRenderUpdate`](/reference/threewebgpu/classes/codenode/#onrenderupdate)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`onUpdate`](/reference/threewebgpu/classes/codenode/#onupdate)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`removeEventListener`](/reference/threewebgpu/classes/codenode/#removeeventlistener)

***

### serialize()

> **serialize**(`data`): `void`

Defined in: [three/src/nodes/code/CodeNode.js:119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L119)

Serializes the node to JSON.

#### Parameters

##### data

`any`

#### Returns

`void`

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`serialize`](/reference/threewebgpu/classes/codenode/#serialize)

***

### setIncludes()

> **setIncludes**(`includes`): [`CodeNode`](/reference/threewebgpu/classes/codenode/)

Defined in: [three/src/nodes/code/CodeNode.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/code/CodeNode.js#L82)

Sets the includes of this code node.

#### Parameters

##### includes

[`Node`](/reference/threewebgpu/classes/node/)[]

The includes to set.

#### Returns

[`CodeNode`](/reference/threewebgpu/classes/codenode/)

A reference to this node.

#### Inherited from

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`setIncludes`](/reference/threewebgpu/classes/codenode/#setincludes)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`setup`](/reference/threewebgpu/classes/codenode/#setup)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`toJSON`](/reference/threewebgpu/classes/codenode/#tojson)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`traverse`](/reference/threewebgpu/classes/codenode/#traverse)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`update`](/reference/threewebgpu/classes/codenode/#update)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`updateAfter`](/reference/threewebgpu/classes/codenode/#updateafter)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`updateBefore`](/reference/threewebgpu/classes/codenode/#updatebefore)

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

[`CodeNode`](/reference/threewebgpu/classes/codenode/).[`updateReference`](/reference/threewebgpu/classes/codenode/#updatereference)

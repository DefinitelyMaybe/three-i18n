---
editUrl: false
next: false
prev: false
title: "PassNode"
---

Defined in: [three/src/nodes/display/PassNode.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L150)

Represents a render pass (sometimes called beauty pass) in context of post processing.
This pass produces a render for the given scene and camera and can provide multiple outputs
via MRT for further processing.

```js
const postProcessing = new PostProcessing( renderer );

const scenePass = pass( scene, camera );

postProcessing.outputNode = scenePass;
```

## Extends

- [`TempNode`](/reference/threewebgpu/classes/tempnode/)

## Extended by

- [`ToonOutlinePassNode`](/reference/threewebgpu/classes/toonoutlinepassnode/)

## Constructors

### Constructor

> **new PassNode**(`scope`, `scene`, `camera`, `options`): `PassNode`

Defined in: [three/src/nodes/display/PassNode.js:166](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L166)

Constructs a new pass node.

#### Parameters

##### scope

The scope of the pass. The scope determines whether the node outputs color or depth.

`"color"` | `"depth"`

##### scene

`Scene`

A reference to the scene.

##### camera

`Camera`

A reference to the camera.

##### options

`any` = `{}`

Options for the internal render target.

#### Returns

`PassNode`

#### Overrides

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`constructor`](/reference/threewebgpu/classes/tempnode/#constructor)

## Properties

### \_layers

> **\_layers**: `any`

Defined in: [three/src/nodes/display/PassNode.js:317](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L317)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`_listeners`](/reference/threewebgpu/classes/tempnode/#_listeners)

***

### \_resolution

> **\_resolution**: `number`

Defined in: [three/src/nodes/display/PassNode.js:319](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L319)

***

### camera

> **camera**: `Camera`

Defined in: [three/src/nodes/display/PassNode.js:189](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L189)

A reference to the camera.

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`global`](/reference/threewebgpu/classes/tempnode/#global)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`isNode`](/reference/threewebgpu/classes/tempnode/#isnode)

***

### isPassNode

> `readonly` **isPassNode**: `boolean`

Defined in: [three/src/nodes/display/PassNode.js:328](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L328)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isTempNode

> `readonly` **isTempNode**: `boolean`

Defined in: [three/src/nodes/core/TempNode.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/TempNode.js#L35)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`isTempNode`](/reference/threewebgpu/classes/tempnode/#istempnode)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`nodeType`](/reference/threewebgpu/classes/tempnode/#nodetype)

***

### options

> **options**: `any`

Defined in: [three/src/nodes/display/PassNode.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L196)

Options for the internal render target.

***

### renderTarget

> **renderTarget**: [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/nodes/display/PassNode.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L237)

The pass's render target.

***

### scene

> **scene**: `Scene`

Defined in: [three/src/nodes/display/PassNode.js:182](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L182)

A reference to the scene.

***

### scope

> **scope**: `"color"` \| `"depth"`

Defined in: [three/src/nodes/display/PassNode.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L175)

The scope of the pass. The scope determines whether the node outputs color or depth.

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`updateAfterType`](/reference/threewebgpu/classes/tempnode/#updateaftertype)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`updateBeforeType`](/reference/threewebgpu/classes/tempnode/#updatebeforetype)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`updateType`](/reference/threewebgpu/classes/tempnode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`uuid`](/reference/threewebgpu/classes/tempnode/#uuid)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`version`](/reference/threewebgpu/classes/tempnode/#version)

***

### COLOR

> `static` **COLOR**: `"color"`

Defined in: [three/src/nodes/display/PassNode.js:716](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L716)

#### Static

#### Default

```ts
'color'
```

***

### DEPTH

> `static` **DEPTH**: `"depth"`

Defined in: [three/src/nodes/display/PassNode.js:723](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L723)

#### Static

#### Default

```ts
'depth'
```

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`needsUpdate`](/reference/threewebgpu/classes/tempnode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`type`](/reference/threewebgpu/classes/tempnode/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/display/PassNode.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L152)

##### Returns

`string`

#### Overrides

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`type`](/reference/threewebgpu/classes/tempnode/#type-1)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`addEventListener`](/reference/threewebgpu/classes/tempnode/#addeventlistener)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`analyze`](/reference/threewebgpu/classes/tempnode/#analyze)

***

### build()

> **build**(`builder`, `output`): `any`

Defined in: [three/src/nodes/core/TempNode.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/TempNode.js#L51)

This method performs the build of a node. The behavior of this method as well as its return value depend
on the current build stage (setup, analyze or generate).

#### Parameters

##### builder

`any`

The current node builder.

##### output

`any`

Can be used to define the output type.

#### Returns

`any`

When this method is executed in the setup or analyze stage, `null` is returned. In the generate stage, the generated shader string.

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`build`](/reference/threewebgpu/classes/tempnode/#build)

***

### customCacheKey()

> **customCacheKey**(): `number`

Defined in: [three/src/nodes/core/Node.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L338)

Generate a custom cache key for this node.

#### Returns

`number`

The cache key of the node.

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`customCacheKey`](/reference/threewebgpu/classes/tempnode/#customcachekey)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`deserialize`](/reference/threewebgpu/classes/tempnode/#deserialize)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`dispatchEvent`](/reference/threewebgpu/classes/tempnode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/display/PassNode.js:702](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L702)

Frees internal resources. Should be called when the node is no longer in use.

#### Returns

`void`

#### Overrides

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`dispose`](/reference/threewebgpu/classes/tempnode/#dispose)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`generate`](/reference/threewebgpu/classes/tempnode/#generate)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getCacheKey`](/reference/threewebgpu/classes/tempnode/#getcachekey)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getChildren`](/reference/threewebgpu/classes/tempnode/#getchildren)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getElementType`](/reference/threewebgpu/classes/tempnode/#getelementtype)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getHash`](/reference/threewebgpu/classes/tempnode/#gethash)

***

### getLayers()

> **getLayers**(): `any`

Defined in: [three/src/nodes/display/PassNode.js:376](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L376)

#### Returns

`any`

***

### getLinearDepthNode()

> **getLinearDepthNode**(`name`?): `Node`

Defined in: [three/src/nodes/display/PassNode.js:568](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L568)

Returns a linear depth node of this pass.

#### Parameters

##### name?

`string` = `'depth'`

The output name to get the linear depth node for. In most cases the default `'depth'` can be used however the parameter exists for custom depth outputs.

#### Returns

`Node`

The linear depth node.

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getMemberType`](/reference/threewebgpu/classes/tempnode/#getmembertype)

***

### getMRT()

> **getMRT**(): `MRTNode`

Defined in: [three/src/nodes/display/PassNode.js:401](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L401)

Returns the current MRT node.

#### Returns

`MRTNode`

The current MRT node.

***

### getNodeType()

> **getNodeType**(`builder`): `string`

Defined in: [three/src/nodes/core/Node.js:438](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L438)

Returns the node's type.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`string`

The type of the node.

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getNodeType`](/reference/threewebgpu/classes/tempnode/#getnodetype)

***

### getPreviousTexture()

> **getPreviousTexture**(`name`): `Texture`

Defined in: [three/src/nodes/display/PassNode.js:451](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L451)

Returns the texture holding the data of the previous frame for the given output name.

#### Parameters

##### name

`string`

The output name to get the texture for.

#### Returns

`Texture`

The texture holding the data of the previous frame.

***

### getPreviousTextureNode()

> **getPreviousTextureNode**(`name`?): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/display/PassNode.js:521](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L521)

Returns the previous texture node for the given output name.

#### Parameters

##### name?

`string` = `'output'`

The output name to get the previous texture node for.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

The previous texture node.

***

### getResolution()

> **getResolution**(): `number`

Defined in: [three/src/nodes/display/PassNode.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L362)

Gets the current resolution of the pass.

#### Returns

`number`

The current resolution. A value of `1` means full resolution.

#### Default

```ts
1
```

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getScope`](/reference/threewebgpu/classes/tempnode/#getscope)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getSelf`](/reference/threewebgpu/classes/tempnode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getSerializeChildren`](/reference/threewebgpu/classes/tempnode/#getserializechildren)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getShared`](/reference/threewebgpu/classes/tempnode/#getshared)

***

### getTexture()

> **getTexture**(`name`): `Texture`

Defined in: [three/src/nodes/display/PassNode.js:424](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L424)

Returns the texture for the given output name.

#### Parameters

##### name

`string`

The output name to get the texture for.

#### Returns

`Texture`

The texture.

***

### getTextureNode()

> **getTextureNode**(`name`?): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/display/PassNode.js:499](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L499)

Returns the texture node for the given output name.

#### Parameters

##### name?

`string` = `'output'`

The output name to get the texture node for.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

The texture node.

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/tempnode/#getupdateaftertype)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/tempnode/#getupdatebeforetype)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`getUpdateType`](/reference/threewebgpu/classes/tempnode/#getupdatetype)

***

### getViewZNode()

> **getViewZNode**(`name`?): `Node`

Defined in: [three/src/nodes/display/PassNode.js:545](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L545)

Returns a viewZ node of this pass.

#### Parameters

##### name?

`string` = `'depth'`

The output name to get the viewZ node for. In most cases the default `'depth'` can be used however the parameter exists for custom depth outputs.

#### Returns

`Node`

The viewZ node.

***

### hasDependencies()

> **hasDependencies**(`builder`): `boolean`

Defined in: [three/src/nodes/core/TempNode.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/TempNode.js#L45)

Whether this node is used more than once in context of other nodes.

#### Parameters

##### builder

`NodeBuilder`

The node builder.

#### Returns

`boolean`

A flag that indicates if there is more than one dependency to other nodes.

#### Inherited from

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`hasDependencies`](/reference/threewebgpu/classes/tempnode/#hasdependencies)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`hasEventListener`](/reference/threewebgpu/classes/tempnode/#haseventlistener)

***

### isGlobal()

> **isGlobal**(): `boolean`

Defined in: [three/src/nodes/display/PassNode.js:412](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L412)

The method is overwritten so it always returns `true`.

#### Returns

`boolean`

Whether this node is global or not.

#### Overrides

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`isGlobal`](/reference/threewebgpu/classes/tempnode/#isglobal)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`onFrameUpdate`](/reference/threewebgpu/classes/tempnode/#onframeupdate)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`onObjectUpdate`](/reference/threewebgpu/classes/tempnode/#onobjectupdate)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`onReference`](/reference/threewebgpu/classes/tempnode/#onreference)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`onRenderUpdate`](/reference/threewebgpu/classes/tempnode/#onrenderupdate)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`onUpdate`](/reference/threewebgpu/classes/tempnode/#onupdate)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`removeEventListener`](/reference/threewebgpu/classes/tempnode/#removeeventlistener)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`serialize`](/reference/threewebgpu/classes/tempnode/#serialize)

***

### setLayers()

> **setLayers**(`layers`): `PassNode`

Defined in: [three/src/nodes/display/PassNode.js:368](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L368)

#### Parameters

##### layers

`any`

#### Returns

`PassNode`

***

### setMRT()

> **setMRT**(`mrt`): `PassNode`

Defined in: [three/src/nodes/display/PassNode.js:388](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L388)

Sets the given MRT node to setup MRT for this pass.

#### Parameters

##### mrt

`MRTNode`

The MRT object.

#### Returns

`PassNode`

A reference to this pass.

***

### setPixelRatio()

> **setPixelRatio**(`pixelRatio`): `void`

Defined in: [three/src/nodes/display/PassNode.js:691](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L691)

Sets the pixel ratio the pass's render target and updates the size.

#### Parameters

##### pixelRatio

`number`

The pixel ratio to set.

#### Returns

`void`

***

### setResolution()

> **setResolution**(`resolution`): `PassNode`

Defined in: [three/src/nodes/display/PassNode.js:348](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L348)

Sets the resolution for the pass.
The resolution is a factor that is multiplied with the renderer's width and height.

#### Parameters

##### resolution

`number`

The resolution to set. A value of `1` means full resolution.

#### Returns

`PassNode`

A reference to this pass.

***

### setSize()

> **setSize**(`width`, `height`): `void`

Defined in: [three/src/nodes/display/PassNode.js:674](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L674)

Sets the size of the pass's render target. Honors the pixel ratio.

#### Parameters

##### width

`number`

The width to set.

##### height

`number`

The height to set.

#### Returns

`void`

***

### setup()

> **setup**(`builder`): `Node` \| [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/display/PassNode.js:588](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L588)

Represents the setup stage which is the first step of the build process, see [Node#build](/reference/threewebgpu/classes/node/#build) method.
This method is often overwritten in derived modules to prepare the node which is used as the output/result.
The output node must be returned in the `return` statement.

#### Parameters

##### builder

The current node builder.

###### renderer

`any`

#### Returns

`Node` \| [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

The output node.

#### Overrides

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`setup`](/reference/threewebgpu/classes/tempnode/#setup)

***

### toggleTexture()

> **toggleTexture**(`name`): `void`

Defined in: [three/src/nodes/display/PassNode.js:472](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L472)

Switches current and previous textures for the given output name.

#### Parameters

##### name

`string`

The output name.

#### Returns

`void`

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`toJSON`](/reference/threewebgpu/classes/tempnode/#tojson)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`traverse`](/reference/threewebgpu/classes/tempnode/#traverse)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`update`](/reference/threewebgpu/classes/tempnode/#update)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`updateAfter`](/reference/threewebgpu/classes/tempnode/#updateafter)

***

### updateBefore()

> `abstract` **updateBefore**(`frame`): `void`

Defined in: [three/src/nodes/display/PassNode.js:605](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/PassNode.js#L605)

The method can be implemented to update the node's internal state before it is used to render an object.
The [Node#updateBeforeType](/reference/threewebgpu/classes/node/#updatebeforetype) property defines how often the update is executed.

#### Parameters

##### frame

`any`

A reference to the current node frame.

#### Returns

`void`

An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).

#### Overrides

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`updateBefore`](/reference/threewebgpu/classes/tempnode/#updatebefore)

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

[`TempNode`](/reference/threewebgpu/classes/tempnode/).[`updateReference`](/reference/threewebgpu/classes/tempnode/#updatereference)

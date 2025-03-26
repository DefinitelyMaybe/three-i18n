---
editUrl: false
next: false
prev: false
title: "TextureNode"
---

Defined in: [three/src/nodes/accessors/TextureNode.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L17)

This type of uniform node represents a 2D texture.

## Extends

- [`UniformNode`](/reference/threewebgpu/classes/uniformnode/)

## Extended by

- [`ReflectorNode`](/reference/threewebgpu/classes/reflectornode/)
- [`RTTNode`](/reference/threewebgpu/classes/rttnode/)
- [`CubeTextureNode`](/reference/threewebgpu/classes/cubetexturenode/)
- [`StorageTextureNode`](/reference/threewebgpu/classes/storagetexturenode/)
- [`Texture3DNode`](/reference/threewebgpu/classes/texture3dnode/)
- [`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/)

## Constructors

### Constructor

> **new TextureNode**(`value`, `uvNode`?, `levelNode`?, `biasNode`?): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L33)

Constructs a new texture node.

#### Parameters

##### value

`Texture`

The texture.

##### uvNode?

`any` = `null`

The uv node.

##### levelNode?

`any` = `null`

The level node.

##### biasNode?

`any` = `null`

The bias node.

#### Returns

`TextureNode`

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`constructor`](/reference/threewebgpu/classes/uniformnode/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`_listeners`](/reference/threewebgpu/classes/uniformnode/#_listeners)

***

### biasNode

> **biasNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L68)

Represents the bias to be applied during level-of-detail computation.

#### Default

```ts
null
```

***

### compareNode

> **compareNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L76)

Represents a reference value a texture sample is compared to.

#### Default

```ts
null
```

***

### depthNode

> **depthNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L84)

When using texture arrays, the depth node defines the layer to select.

#### Default

```ts
null
```

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`global`](/reference/threewebgpu/classes/uniformnode/#global)

***

### gradNode

> **gradNode**: `any`[]

Defined in: [three/src/nodes/accessors/TextureNode.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L92)

When defined, a texture is sampled using explicit gradients.

#### Default

```ts
null
```

***

### groupNode

> **groupNode**: `UniformGroupNode`

Defined in: [three/src/nodes/core/UniformNode.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L52)

The uniform group of this uniform. By default, uniforms are
managed per object but they might belong to a shared group
which is updated per frame or render call.

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`groupNode`](/reference/threewebgpu/classes/uniformnode/#groupnode)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`isInputNode`](/reference/threewebgpu/classes/uniformnode/#isinputnode)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`isNode`](/reference/threewebgpu/classes/uniformnode/#isnode)

***

### isTextureNode

> `readonly` **isTextureNode**: `boolean`

Defined in: [three/src/nodes/accessors/TextureNode.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L44)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`isUniformNode`](/reference/threewebgpu/classes/uniformnode/#isuniformnode)

***

### levelNode

> **levelNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L60)

Represents the mip level that should be selected.

#### Default

```ts
null
```

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`name`](/reference/threewebgpu/classes/uniformnode/#name)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`nodeType`](/reference/threewebgpu/classes/uniformnode/#nodetype)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`precision`](/reference/threewebgpu/classes/uniformnode/#precision)

***

### referenceNode

> **referenceNode**: `Node`

Defined in: [three/src/nodes/accessors/TextureNode.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L128)

The reference node.

#### Default

```ts
null
```

***

### sampler

> **sampler**: `boolean`

Defined in: [three/src/nodes/accessors/TextureNode.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L100)

Whether texture values should be sampled or fetched.

#### Default

```ts
true
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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`updateAfterType`](/reference/threewebgpu/classes/uniformnode/#updateaftertype)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`updateBeforeType`](/reference/threewebgpu/classes/uniformnode/#updatebeforetype)

***

### updateMatrix

> **updateMatrix**: `boolean`

Defined in: [three/src/nodes/accessors/TextureNode.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L110)

Whether the uv transformation matrix should be
automatically updated or not. Use `setUpdateMatrix()`
if you want to change the value of the property.

#### Default

```ts
false
```

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`updateType`](/reference/threewebgpu/classes/uniformnode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`uuid`](/reference/threewebgpu/classes/uniformnode/#uuid)

***

### uvNode

> **uvNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L52)

Represents the texture coordinates.

#### Default

```ts
null
```

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`version`](/reference/threewebgpu/classes/uniformnode/#version)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`needsUpdate`](/reference/threewebgpu/classes/uniformnode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`type`](/reference/threewebgpu/classes/uniformnode/#type)

***

### value

#### Get Signature

> **get** **value**(): `Texture`

Defined in: [three/src/nodes/accessors/TextureNode.js:169](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L169)

The texture value.

##### Returns

`Texture`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [three/src/nodes/accessors/TextureNode.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L150)

The value of this node. This can be any JS primitive, functions, array buffers or even three.js objects (vector, matrices, colors).

##### Parameters

###### value

`Texture`

##### Returns

`void`

The value of this node. This can be any JS primitive, functions, array buffers or even three.js objects (vector, matrices, colors).

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`value`](/reference/threewebgpu/classes/uniformnode/#value)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L19)

##### Returns

`string`

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`type`](/reference/threewebgpu/classes/uniformnode/#type-1)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`addEventListener`](/reference/threewebgpu/classes/uniformnode/#addeventlistener)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`analyze`](/reference/threewebgpu/classes/uniformnode/#analyze)

***

### bias()

> **bias**(`biasNode`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:613](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L613)

Samples the texture with the given bias.

#### Parameters

##### biasNode

`any`

The bias node.

#### Returns

`TextureNode`

A texture node representing the texture sample.

***

### blur()

> **blur**(`amountNode`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:559](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L559)

Samples a blurred version of the texture by defining an internal bias.

#### Parameters

##### amountNode

`any`

How blurred the texture should be.

#### Returns

`TextureNode`

A texture node representing the texture sample.

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`build`](/reference/threewebgpu/classes/uniformnode/#build)

***

### clone()

> **clone**(): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:719](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L719)

Clones the texture node.

#### Returns

`TextureNode`

The cloned texture node.

***

### compare()

> **compare**(`compareNode`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:629](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L629)

Samples the texture by executing a compare operation.

#### Parameters

##### compareNode

`any`

The node that defines the compare value.

#### Returns

`TextureNode`

A texture node representing the texture sample.

***

### customCacheKey()

> **customCacheKey**(): `number`

Defined in: [three/src/nodes/core/Node.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L338)

Generate a custom cache key for this node.

#### Returns

`number`

The cache key of the node.

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`customCacheKey`](/reference/threewebgpu/classes/uniformnode/#customcachekey)

***

### depth()

> **depth**(`depthNode`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:662](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L662)

Samples the texture by defining a depth node.

#### Parameters

##### depthNode

`any`

The depth node.

#### Returns

`TextureNode`

A texture node representing the texture sample.

***

### deserialize()

> **deserialize**(`data`): `void`

Defined in: [three/src/nodes/accessors/TextureNode.js:685](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L685)

Deserializes the node from the given JSON.

#### Parameters

##### data

`any`

#### Returns

`void`

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`deserialize`](/reference/threewebgpu/classes/uniformnode/#deserialize)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`dispatchEvent`](/reference/threewebgpu/classes/uniformnode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/core/Node.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L282)

Calling this method dispatches the `dispose` event. This event can be used
to register event listeners for clean up tasks.

#### Returns

`void`

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`dispose`](/reference/threewebgpu/classes/uniformnode/#dispose)

***

### generate()

> **generate**(`builder`, `output`): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:435](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L435)

Generates the code snippet of the texture node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

##### output

`string`

The current output.

#### Returns

`string`

The generated code snippet.

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`generate`](/reference/threewebgpu/classes/uniformnode/#generate)

***

### generateSnippet()

> **generateSnippet**(`builder`, `textureProperty`, `uvSnippet`, `levelSnippet`, `biasSnippet`, `depthSnippet`, `compareSnippet`, `gradSnippet`): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:392](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L392)

Generates the snippet for the texture sampling.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

##### textureProperty

`string`

The texture property.

##### uvSnippet

`string`

The uv snippet.

##### levelSnippet

`string`

The level snippet.

##### biasSnippet

`string`

The bias snippet.

##### depthSnippet

`string`

The depth snippet.

##### compareSnippet

`string`

The compare snippet.

##### gradSnippet

`string`[]

The grad snippet.

#### Returns

`string`

The generated code snippet.

***

### generateUV()

> **generateUV**(`builder`, `uvNode`): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L373)

Generates the uv code snippet.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

##### uvNode

`Node`

The uv node to generate code for.

#### Returns

`string`

The generated code snippet.

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getCacheKey`](/reference/threewebgpu/classes/uniformnode/#getcachekey)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getChildren`](/reference/threewebgpu/classes/uniformnode/#getchildren)

***

### getDefaultUV()

> **getDefaultUV**(): `AttributeNode`\<`vec2`\>

Defined in: [three/src/nodes/accessors/TextureNode.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L228)

Returns a default uvs based on the current texture's channel.

#### Returns

`AttributeNode`\<`vec2`\>

The default uvs.

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getElementType`](/reference/threewebgpu/classes/uniformnode/#getelementtype)

***

### getGroup()

> **getGroup**(): `UniformGroupNode`

Defined in: [three/src/nodes/core/UniformNode.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L89)

Returns the [UniformNode#groupNode](/reference/threewebgpu/classes/uniformnode/#groupnode).

#### Returns

`UniformGroupNode`

The uniform group.

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getGroup`](/reference/threewebgpu/classes/uniformnode/#getgroup)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getHash`](/reference/threewebgpu/classes/uniformnode/#gethash)

***

### getInputType()

> **getInputType**(): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L217)

Overwrites the default implementation to return a fixed value `'texture'`.

#### Returns

`string`

The input type.

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getInputType`](/reference/threewebgpu/classes/uniformnode/#getinputtype)

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getMemberType`](/reference/threewebgpu/classes/uniformnode/#getmembertype)

***

### getNodeType()

> **getNodeType**(): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L193)

Overwritten since the node type is inferred from the texture type.

#### Returns

`string`

The node type.

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getNodeType`](/reference/threewebgpu/classes/uniformnode/#getnodetype)

***

### getSampler()

> **getSampler**(): `boolean`

Defined in: [three/src/nodes/accessors/TextureNode.js:514](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L514)

Returns the sampler value.

#### Returns

`boolean`

The sampler value.

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getScope`](/reference/threewebgpu/classes/uniformnode/#getscope)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getSelf`](/reference/threewebgpu/classes/uniformnode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getSerializeChildren`](/reference/threewebgpu/classes/uniformnode/#getserializechildren)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getShared`](/reference/threewebgpu/classes/uniformnode/#getshared)

***

### getTransformedUV()

> **getTransformedUV**(`uvNode`): `Node`

Defined in: [three/src/nodes/accessors/TextureNode.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L252)

Transforms the given uv node with the texture transformation matrix.

#### Parameters

##### uvNode

`Node`

The uv node to transform.

#### Returns

`Node`

The transformed uv node.

***

### getUniformHash()

> **getUniformHash**(): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:181](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L181)

Overwritten since the uniform hash is defined by the texture's UUID.

#### Returns

`string`

The uniform hash.

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getUniformHash`](/reference/threewebgpu/classes/uniformnode/#getuniformhash)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/uniformnode/#getupdateaftertype)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/uniformnode/#getupdatebeforetype)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`getUpdateType`](/reference/threewebgpu/classes/uniformnode/#getupdatetype)

***

### grad()

> **grad**(`gradNodeX`, `gradNodeY`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:646](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L646)

Samples the texture using an explicit gradient.

#### Parameters

##### gradNodeX

`any`

The gradX node.

##### gradNodeY

`any`

The gradY node.

#### Returns

`TextureNode`

A texture node representing the texture sample.

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`hasEventListener`](/reference/threewebgpu/classes/uniformnode/#haseventlistener)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`isGlobal`](/reference/threewebgpu/classes/uniformnode/#isglobal)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`label`](/reference/threewebgpu/classes/uniformnode/#label)

***

### level()

> **level**(`levelNode`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:585](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L585)

Samples a specific mip of the texture.

#### Parameters

##### levelNode

`any`

The mip level to sample.

#### Returns

`TextureNode`

A texture node representing the texture sample.

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`onFrameUpdate`](/reference/threewebgpu/classes/uniformnode/#onframeupdate)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`onObjectUpdate`](/reference/threewebgpu/classes/uniformnode/#onobjectupdate)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`onReference`](/reference/threewebgpu/classes/uniformnode/#onreference)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`onRenderUpdate`](/reference/threewebgpu/classes/uniformnode/#onrenderupdate)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`onUpdate`](/reference/threewebgpu/classes/uniformnode/#onupdate)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`removeEventListener`](/reference/threewebgpu/classes/uniformnode/#removeeventlistener)

***

### sample()

> **sample**(`uvNode`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:543](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L543)

Samples the texture with the given uv node.

#### Parameters

##### uvNode

`Node`

The uv node.

#### Returns

`TextureNode`

A texture node representing the texture sample.

***

### serialize()

> **serialize**(`data`): `void`

Defined in: [three/src/nodes/accessors/TextureNode.js:674](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L674)

Serializes the node to JSON.

#### Parameters

##### data

`any`

#### Returns

`void`

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`serialize`](/reference/threewebgpu/classes/uniformnode/#serialize)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`setGroup`](/reference/threewebgpu/classes/uniformnode/#setgroup)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`setPrecision`](/reference/threewebgpu/classes/uniformnode/#setprecision)

***

### setSampler()

> **setSampler**(`value`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:501](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L501)

Sets the sampler value.

#### Parameters

##### value

`boolean`

The sampler value to set.

#### Returns

`TextureNode`

A reference to this texture node.

***

### setup()

> **setup**(`builder`): `void`

Defined in: [three/src/nodes/accessors/TextureNode.js:310](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L310)

Setups texture node by preparing the internal nodes for code generation.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`setup`](/reference/threewebgpu/classes/uniformnode/#setup)

***

### setUpdateMatrix()

> **setUpdateMatrix**(`value`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:266](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L266)

Defines whether the uv transformation matrix should automatically be updated or not.

#### Parameters

##### value

`boolean`

The update toggle.

#### Returns

`TextureNode`

A reference to this node.

***

### setupUV()

> **setupUV**(`builder`, `uvNode`): `Node`

Defined in: [three/src/nodes/accessors/TextureNode.js:283](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L283)

Setups the uv node. Depending on the backend as well as texture's image and type, it might be necessary
to modify the uv node for correct sampling.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

##### uvNode

`Node`

The uv node to setup.

#### Returns

`Node`

The updated uv node.

***

### size()

> **size**(`levelNode`): `TextureSizeNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:601](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L601)

Returns the texture size of the requested level.

#### Parameters

##### levelNode

`any`

The level to compute the size for.

#### Returns

`TextureSizeNode`

The texture size.

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`toJSON`](/reference/threewebgpu/classes/uniformnode/#tojson)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`traverse`](/reference/threewebgpu/classes/uniformnode/#traverse)

***

### update()

> **update**(): `void`

Defined in: [three/src/nodes/accessors/TextureNode.js:699](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L699)

The update is used to implement the update of the uv transformation matrix.

#### Returns

`void`

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`update`](/reference/threewebgpu/classes/uniformnode/#update)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`updateAfter`](/reference/threewebgpu/classes/uniformnode/#updateafter)

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

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`updateBefore`](/reference/threewebgpu/classes/uniformnode/#updatebefore)

***

### updateReference()

> **updateReference**(): `Texture`

Defined in: [three/src/nodes/accessors/TextureNode.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L240)

Overwritten to always return the texture reference of the node.

#### Returns

`Texture`

The texture reference.

#### Overrides

[`UniformNode`](/reference/threewebgpu/classes/uniformnode/).[`updateReference`](/reference/threewebgpu/classes/uniformnode/#updatereference)

***

### ~~uv()~~

> **uv**(`uvNode`): `TextureNode`

Defined in: [three/src/nodes/accessors/TextureNode.js:529](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L529)

**`Function`**

:::caution[Deprecated]
since r172. Use [TextureNode#sample](/reference/threewebgpu/classes/texturenode/#sample) instead.
:::

#### Parameters

##### uvNode

`Node`

The uv node.

#### Returns

`TextureNode`

A texture node representing the texture sample.

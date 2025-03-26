---
editUrl: false
next: false
prev: false
title: "ViewportDepthTextureNode"
---

Defined in: [three/src/nodes/display/ViewportDepthTextureNode.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/ViewportDepthTextureNode.js#L16)

Represents the depth of the current viewport as a texture. This module
can be used in combination with viewport texture to achieve effects
that require depth evaluation.

## Extends

- [`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/)

## Constructors

### Constructor

> **new ViewportDepthTextureNode**(`uvNode`?, `levelNode`?): `ViewportDepthTextureNode`

Defined in: [three/src/nodes/display/ViewportDepthTextureNode.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/ViewportDepthTextureNode.js#L30)

Constructs a new viewport depth texture node.

#### Parameters

##### uvNode?

`Node` = `screenUV`

The uv node.

##### levelNode?

`Node` = `null`

The level node.

#### Returns

`ViewportDepthTextureNode`

#### Overrides

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`constructor`](/reference/threewebgpu/classes/viewporttexturenode/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`_listeners`](/reference/threewebgpu/classes/viewporttexturenode/#_listeners)

***

### biasNode

> **biasNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L68)

Represents the bias to be applied during level-of-detail computation.

#### Default

```ts
null
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`biasNode`](/reference/threewebgpu/classes/viewporttexturenode/#biasnode)

***

### compareNode

> **compareNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L76)

Represents a reference value a texture sample is compared to.

#### Default

```ts
null
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`compareNode`](/reference/threewebgpu/classes/viewporttexturenode/#comparenode)

***

### depthNode

> **depthNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L84)

When using texture arrays, the depth node defines the layer to select.

#### Default

```ts
null
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`depthNode`](/reference/threewebgpu/classes/viewporttexturenode/#depthnode)

***

### generateMipmaps

> **generateMipmaps**: `boolean`

Defined in: [three/src/nodes/display/ViewportTextureNode.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/ViewportTextureNode.js#L53)

Whether to generate mipmaps or not.

#### Default

```ts
false
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`generateMipmaps`](/reference/threewebgpu/classes/viewporttexturenode/#generatemipmaps)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`global`](/reference/threewebgpu/classes/viewporttexturenode/#global)

***

### gradNode

> **gradNode**: `any`[]

Defined in: [three/src/nodes/accessors/TextureNode.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L92)

When defined, a texture is sampled using explicit gradients.

#### Default

```ts
null
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`gradNode`](/reference/threewebgpu/classes/viewporttexturenode/#gradnode)

***

### groupNode

> **groupNode**: `UniformGroupNode`

Defined in: [three/src/nodes/core/UniformNode.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L52)

The uniform group of this uniform. By default, uniforms are
managed per object but they might belong to a shared group
which is updated per frame or render call.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`groupNode`](/reference/threewebgpu/classes/viewporttexturenode/#groupnode)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`isInputNode`](/reference/threewebgpu/classes/viewporttexturenode/#isinputnode)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`isNode`](/reference/threewebgpu/classes/viewporttexturenode/#isnode)

***

### isOutputTextureNode

> `readonly` **isOutputTextureNode**: `boolean`

Defined in: [three/src/nodes/display/ViewportTextureNode.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/ViewportTextureNode.js#L62)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`isOutputTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/#isoutputtexturenode)

***

### isTextureNode

> `readonly` **isTextureNode**: `boolean`

Defined in: [three/src/nodes/accessors/TextureNode.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L44)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`isTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/#istexturenode)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`isUniformNode`](/reference/threewebgpu/classes/viewporttexturenode/#isuniformnode)

***

### levelNode

> **levelNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L60)

Represents the mip level that should be selected.

#### Default

```ts
null
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`levelNode`](/reference/threewebgpu/classes/viewporttexturenode/#levelnode)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`name`](/reference/threewebgpu/classes/viewporttexturenode/#name)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`nodeType`](/reference/threewebgpu/classes/viewporttexturenode/#nodetype)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`precision`](/reference/threewebgpu/classes/viewporttexturenode/#precision)

***

### referenceNode

> **referenceNode**: `Node`

Defined in: [three/src/nodes/accessors/TextureNode.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L128)

The reference node.

#### Default

```ts
null
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`referenceNode`](/reference/threewebgpu/classes/viewporttexturenode/#referencenode)

***

### sampler

> **sampler**: `boolean`

Defined in: [three/src/nodes/accessors/TextureNode.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L100)

Whether texture values should be sampled or fetched.

#### Default

```ts
true
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`sampler`](/reference/threewebgpu/classes/viewporttexturenode/#sampler)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`updateAfterType`](/reference/threewebgpu/classes/viewporttexturenode/#updateaftertype)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`updateBeforeType`](/reference/threewebgpu/classes/viewporttexturenode/#updatebeforetype)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`updateMatrix`](/reference/threewebgpu/classes/viewporttexturenode/#updatematrix)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`updateType`](/reference/threewebgpu/classes/viewporttexturenode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`uuid`](/reference/threewebgpu/classes/viewporttexturenode/#uuid)

***

### uvNode

> **uvNode**: `any`

Defined in: [three/src/nodes/accessors/TextureNode.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L52)

Represents the texture coordinates.

#### Default

```ts
null
```

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`uvNode`](/reference/threewebgpu/classes/viewporttexturenode/#uvnode)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`version`](/reference/threewebgpu/classes/viewporttexturenode/#version)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`needsUpdate`](/reference/threewebgpu/classes/viewporttexturenode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`type`](/reference/threewebgpu/classes/viewporttexturenode/#type)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`value`](/reference/threewebgpu/classes/viewporttexturenode/#value)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/display/ViewportDepthTextureNode.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/ViewportDepthTextureNode.js#L18)

##### Returns

`string`

#### Overrides

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`type`](/reference/threewebgpu/classes/viewporttexturenode/#type-1)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`addEventListener`](/reference/threewebgpu/classes/viewporttexturenode/#addeventlistener)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`analyze`](/reference/threewebgpu/classes/viewporttexturenode/#analyze)

***

### bias()

> **bias**(`biasNode`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/accessors/TextureNode.js:613](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L613)

Samples the texture with the given bias.

#### Parameters

##### biasNode

`any`

The bias node.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A texture node representing the texture sample.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`bias`](/reference/threewebgpu/classes/viewporttexturenode/#bias)

***

### blur()

> **blur**(`amountNode`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/accessors/TextureNode.js:559](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L559)

Samples a blurred version of the texture by defining an internal bias.

#### Parameters

##### amountNode

`any`

How blurred the texture should be.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A texture node representing the texture sample.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`blur`](/reference/threewebgpu/classes/viewporttexturenode/#blur)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`build`](/reference/threewebgpu/classes/viewporttexturenode/#build)

***

### clone()

> **clone**(): `any`

Defined in: [three/src/nodes/display/ViewportTextureNode.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/ViewportTextureNode.js#L103)

Clones the texture node.

#### Returns

`any`

The cloned texture node.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`clone`](/reference/threewebgpu/classes/viewporttexturenode/#clone)

***

### compare()

> **compare**(`compareNode`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/accessors/TextureNode.js:629](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L629)

Samples the texture by executing a compare operation.

#### Parameters

##### compareNode

`any`

The node that defines the compare value.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A texture node representing the texture sample.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`compare`](/reference/threewebgpu/classes/viewporttexturenode/#compare)

***

### customCacheKey()

> **customCacheKey**(): `number`

Defined in: [three/src/nodes/core/Node.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L338)

Generate a custom cache key for this node.

#### Returns

`number`

The cache key of the node.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`customCacheKey`](/reference/threewebgpu/classes/viewporttexturenode/#customcachekey)

***

### depth()

> **depth**(`depthNode`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/accessors/TextureNode.js:662](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L662)

Samples the texture by defining a depth node.

#### Parameters

##### depthNode

`any`

The depth node.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A texture node representing the texture sample.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`depth`](/reference/threewebgpu/classes/viewporttexturenode/#depth)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`deserialize`](/reference/threewebgpu/classes/viewporttexturenode/#deserialize)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`dispatchEvent`](/reference/threewebgpu/classes/viewporttexturenode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/core/Node.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L282)

Calling this method dispatches the `dispose` event. This event can be used
to register event listeners for clean up tasks.

#### Returns

`void`

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`dispose`](/reference/threewebgpu/classes/viewporttexturenode/#dispose)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`generate`](/reference/threewebgpu/classes/viewporttexturenode/#generate)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`generateSnippet`](/reference/threewebgpu/classes/viewporttexturenode/#generatesnippet)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`generateUV`](/reference/threewebgpu/classes/viewporttexturenode/#generateuv)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getCacheKey`](/reference/threewebgpu/classes/viewporttexturenode/#getcachekey)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getChildren`](/reference/threewebgpu/classes/viewporttexturenode/#getchildren)

***

### getDefaultUV()

> **getDefaultUV**(): `AttributeNode`\<`vec2`\>

Defined in: [three/src/nodes/accessors/TextureNode.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L228)

Returns a default uvs based on the current texture's channel.

#### Returns

`AttributeNode`\<`vec2`\>

The default uvs.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getDefaultUV`](/reference/threewebgpu/classes/viewporttexturenode/#getdefaultuv)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getElementType`](/reference/threewebgpu/classes/viewporttexturenode/#getelementtype)

***

### getGroup()

> **getGroup**(): `UniformGroupNode`

Defined in: [three/src/nodes/core/UniformNode.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/UniformNode.js#L89)

Returns the [UniformNode#groupNode](/reference/threewebgpu/classes/uniformnode/#groupnode).

#### Returns

`UniformGroupNode`

The uniform group.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getGroup`](/reference/threewebgpu/classes/viewporttexturenode/#getgroup)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getHash`](/reference/threewebgpu/classes/viewporttexturenode/#gethash)

***

### getInputType()

> **getInputType**(): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L217)

Overwrites the default implementation to return a fixed value `'texture'`.

#### Returns

`string`

The input type.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getInputType`](/reference/threewebgpu/classes/viewporttexturenode/#getinputtype)

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getMemberType`](/reference/threewebgpu/classes/viewporttexturenode/#getmembertype)

***

### getNodeType()

> **getNodeType**(): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L193)

Overwritten since the node type is inferred from the texture type.

#### Returns

`string`

The node type.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getNodeType`](/reference/threewebgpu/classes/viewporttexturenode/#getnodetype)

***

### getSampler()

> **getSampler**(): `boolean`

Defined in: [three/src/nodes/accessors/TextureNode.js:514](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L514)

Returns the sampler value.

#### Returns

`boolean`

The sampler value.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getSampler`](/reference/threewebgpu/classes/viewporttexturenode/#getsampler)

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getScope`](/reference/threewebgpu/classes/viewporttexturenode/#getscope)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getSelf`](/reference/threewebgpu/classes/viewporttexturenode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getSerializeChildren`](/reference/threewebgpu/classes/viewporttexturenode/#getserializechildren)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getShared`](/reference/threewebgpu/classes/viewporttexturenode/#getshared)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getTransformedUV`](/reference/threewebgpu/classes/viewporttexturenode/#gettransformeduv)

***

### getUniformHash()

> **getUniformHash**(): `string`

Defined in: [three/src/nodes/accessors/TextureNode.js:181](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L181)

Overwritten since the uniform hash is defined by the texture's UUID.

#### Returns

`string`

The uniform hash.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getUniformHash`](/reference/threewebgpu/classes/viewporttexturenode/#getuniformhash)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/viewporttexturenode/#getupdateaftertype)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/viewporttexturenode/#getupdatebeforetype)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`getUpdateType`](/reference/threewebgpu/classes/viewporttexturenode/#getupdatetype)

***

### grad()

> **grad**(`gradNodeX`, `gradNodeY`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

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

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A texture node representing the texture sample.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`grad`](/reference/threewebgpu/classes/viewporttexturenode/#grad)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`hasEventListener`](/reference/threewebgpu/classes/viewporttexturenode/#haseventlistener)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`isGlobal`](/reference/threewebgpu/classes/viewporttexturenode/#isglobal)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`label`](/reference/threewebgpu/classes/viewporttexturenode/#label)

***

### level()

> **level**(`levelNode`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/accessors/TextureNode.js:585](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L585)

Samples a specific mip of the texture.

#### Parameters

##### levelNode

`any`

The mip level to sample.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A texture node representing the texture sample.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`level`](/reference/threewebgpu/classes/viewporttexturenode/#level)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`onFrameUpdate`](/reference/threewebgpu/classes/viewporttexturenode/#onframeupdate)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`onObjectUpdate`](/reference/threewebgpu/classes/viewporttexturenode/#onobjectupdate)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`onReference`](/reference/threewebgpu/classes/viewporttexturenode/#onreference)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`onRenderUpdate`](/reference/threewebgpu/classes/viewporttexturenode/#onrenderupdate)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`onUpdate`](/reference/threewebgpu/classes/viewporttexturenode/#onupdate)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`removeEventListener`](/reference/threewebgpu/classes/viewporttexturenode/#removeeventlistener)

***

### sample()

> **sample**(`uvNode`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/accessors/TextureNode.js:543](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L543)

Samples the texture with the given uv node.

#### Parameters

##### uvNode

`Node`

The uv node.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A texture node representing the texture sample.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`sample`](/reference/threewebgpu/classes/viewporttexturenode/#sample)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`serialize`](/reference/threewebgpu/classes/viewporttexturenode/#serialize)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`setGroup`](/reference/threewebgpu/classes/viewporttexturenode/#setgroup)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`setPrecision`](/reference/threewebgpu/classes/viewporttexturenode/#setprecision)

***

### setSampler()

> **setSampler**(`value`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/accessors/TextureNode.js:501](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L501)

Sets the sampler value.

#### Parameters

##### value

`boolean`

The sampler value to set.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A reference to this texture node.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`setSampler`](/reference/threewebgpu/classes/viewporttexturenode/#setsampler)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`setup`](/reference/threewebgpu/classes/viewporttexturenode/#setup)

***

### setUpdateMatrix()

> **setUpdateMatrix**(`value`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

Defined in: [three/src/nodes/accessors/TextureNode.js:266](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L266)

Defines whether the uv transformation matrix should automatically be updated or not.

#### Parameters

##### value

`boolean`

The update toggle.

#### Returns

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A reference to this node.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`setUpdateMatrix`](/reference/threewebgpu/classes/viewporttexturenode/#setupdatematrix)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`setupUV`](/reference/threewebgpu/classes/viewporttexturenode/#setupuv)

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

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`size`](/reference/threewebgpu/classes/viewporttexturenode/#size)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`toJSON`](/reference/threewebgpu/classes/viewporttexturenode/#tojson)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`traverse`](/reference/threewebgpu/classes/viewporttexturenode/#traverse)

***

### update()

> **update**(): `void`

Defined in: [three/src/nodes/accessors/TextureNode.js:699](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L699)

The update is used to implement the update of the uv transformation matrix.

#### Returns

`void`

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`update`](/reference/threewebgpu/classes/viewporttexturenode/#update)

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

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`updateAfter`](/reference/threewebgpu/classes/viewporttexturenode/#updateafter)

***

### updateBefore()

> `abstract` **updateBefore**(`frame`): `void`

Defined in: [three/src/nodes/display/ViewportTextureNode.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/ViewportTextureNode.js#L75)

The method can be implemented to update the node's internal state before it is used to render an object.
The [Node#updateBeforeType](/reference/threewebgpu/classes/node/#updatebeforetype) property defines how often the update is executed.

#### Parameters

##### frame

`any`

A reference to the current node frame.

#### Returns

`void`

An optional bool that indicates whether the implementation actually performed an update or not (e.g. due to caching).

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`updateBefore`](/reference/threewebgpu/classes/viewporttexturenode/#updatebefore)

***

### updateReference()

> **updateReference**(): `Texture`

Defined in: [three/src/nodes/accessors/TextureNode.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/accessors/TextureNode.js#L240)

Overwritten to always return the texture reference of the node.

#### Returns

`Texture`

The texture reference.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`updateReference`](/reference/threewebgpu/classes/viewporttexturenode/#updatereference)

***

### ~~uv()~~

> **uv**(`uvNode`): [`TextureNode`](/reference/threewebgpu/classes/texturenode/)

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

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

A texture node representing the texture sample.

#### Inherited from

[`ViewportTextureNode`](/reference/threewebgpu/classes/viewporttexturenode/).[`uv`](/reference/threewebgpu/classes/viewporttexturenode/#uv)

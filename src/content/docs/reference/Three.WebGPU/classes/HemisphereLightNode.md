---
editUrl: false
next: false
prev: false
title: "HemisphereLightNode"
---

Defined in: [three/src/nodes/lighting/HemisphereLightNode.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/HemisphereLightNode.js#L15)

Module for representing hemisphere lights as nodes.

## Extends

- [`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/)

## Constructors

### Constructor

> **new HemisphereLightNode**(`light`?): `HemisphereLightNode`

Defined in: [three/src/nodes/lighting/HemisphereLightNode.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/HemisphereLightNode.js#L28)

Constructs a new hemisphere light node.

#### Parameters

##### light?

`HemisphereLight` = `null`

The hemisphere light source.

#### Returns

`HemisphereLightNode`

#### Overrides

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`constructor`](/reference/threewebgpu/classes/analyticlightnode/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`_listeners`](/reference/threewebgpu/classes/analyticlightnode/#_listeners)

***

### baseColorNode

> **baseColorNode**: `Node`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L64)

This property is used to retain a reference to the original value of [AnalyticLightNode#colorNode](/reference/threewebgpu/classes/analyticlightnode/#colornode).
The final color node is represented by a different node when using shadows.

#### Default

```ts
null
```

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`baseColorNode`](/reference/threewebgpu/classes/analyticlightnode/#basecolornode)

***

### color

> **color**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L47)

The light's color value.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`color`](/reference/threewebgpu/classes/analyticlightnode/#color)

***

### colorNode

> **colorNode**: `Node`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L55)

The light's color node. Points to `colorNode` of the light source, if set. Otherwise
it creates a uniform node based on [AnalyticLightNode#color](/reference/threewebgpu/classes/analyticlightnode/#color).

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`colorNode`](/reference/threewebgpu/classes/analyticlightnode/#colornode)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`global`](/reference/threewebgpu/classes/analyticlightnode/#global)

***

### groundColorNode

> **groundColorNode**: `UniformNode`\<`vec3`\>

Defined in: [three/src/nodes/lighting/HemisphereLightNode.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/HemisphereLightNode.js#L51)

Uniform node representing the light's ground color.

***

### isAnalyticLightNode

> `readonly` **isAnalyticLightNode**: `boolean`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L89)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`isAnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/#isanalyticlightnode)

***

### isLightingNode

> `readonly` **isLightingNode**: `boolean`

Defined in: [three/src/nodes/lighting/LightingNode.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/LightingNode.js#L30)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`isLightingNode`](/reference/threewebgpu/classes/analyticlightnode/#islightingnode)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`isNode`](/reference/threewebgpu/classes/analyticlightnode/#isnode)

***

### light

> **light**: `Light`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L40)

The light source.

#### Default

```ts
null
```

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`light`](/reference/threewebgpu/classes/analyticlightnode/#light)

***

### lightDirectionNode

> **lightDirectionNode**: `any`

Defined in: [three/src/nodes/lighting/HemisphereLightNode.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/HemisphereLightNode.js#L44)

A node representing the light's direction.

***

### lightPositionNode

> **lightPositionNode**: `UniformNode`\<`vec3`\>

Defined in: [three/src/nodes/lighting/HemisphereLightNode.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/HemisphereLightNode.js#L37)

Uniform node representing the light's position.

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`nodeType`](/reference/threewebgpu/classes/analyticlightnode/#nodetype)

***

### shadowColorNode

> **shadowColorNode**: `Node`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L80)

Represents the light's shadow color.

#### Default

```ts
null
```

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`shadowColorNode`](/reference/threewebgpu/classes/analyticlightnode/#shadowcolornode)

***

### shadowNode

> **shadowNode**: `ShadowNode`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L72)

Represents the light's shadow.

#### Default

```ts
null
```

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`shadowNode`](/reference/threewebgpu/classes/analyticlightnode/#shadownode)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`updateAfterType`](/reference/threewebgpu/classes/analyticlightnode/#updateaftertype)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`updateBeforeType`](/reference/threewebgpu/classes/analyticlightnode/#updatebeforetype)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`updateType`](/reference/threewebgpu/classes/analyticlightnode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`uuid`](/reference/threewebgpu/classes/analyticlightnode/#uuid)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`version`](/reference/threewebgpu/classes/analyticlightnode/#version)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`needsUpdate`](/reference/threewebgpu/classes/analyticlightnode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`type`](/reference/threewebgpu/classes/analyticlightnode/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/lighting/HemisphereLightNode.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/HemisphereLightNode.js#L17)

##### Returns

`string`

#### Overrides

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`type`](/reference/threewebgpu/classes/analyticlightnode/#type-1)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`addEventListener`](/reference/threewebgpu/classes/analyticlightnode/#addeventlistener)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`analyze`](/reference/threewebgpu/classes/analyticlightnode/#analyze)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`build`](/reference/threewebgpu/classes/analyticlightnode/#build)

***

### customCacheKey()

> **customCacheKey**(): `number`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L108)

Overwrites the default [Node#customCacheKey](/reference/threewebgpu/classes/node/#customcachekey) implementation by including the
`light.id` and `light.castShadow` into the cache key.

#### Returns

`number`

The custom cache key.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`customCacheKey`](/reference/threewebgpu/classes/analyticlightnode/#customcachekey)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`deserialize`](/reference/threewebgpu/classes/analyticlightnode/#deserialize)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`dispatchEvent`](/reference/threewebgpu/classes/analyticlightnode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/core/Node.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L282)

Calling this method dispatches the `dispose` event. This event can be used
to register event listeners for clean up tasks.

#### Returns

`void`

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`dispose`](/reference/threewebgpu/classes/analyticlightnode/#dispose)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`generate`](/reference/threewebgpu/classes/analyticlightnode/#generate)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getCacheKey`](/reference/threewebgpu/classes/analyticlightnode/#getcachekey)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getChildren`](/reference/threewebgpu/classes/analyticlightnode/#getchildren)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getElementType`](/reference/threewebgpu/classes/analyticlightnode/#getelementtype)

***

### getHash()

> **getHash**(): `any`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L114)

Returns the hash of the node which is used to identify the node. By default it's
the [Node#uuid](/reference/threewebgpu/classes/node/#uuid) however derived node classes might have to overwrite this method
depending on their implementation.

#### Returns

`any`

The hash.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getHash`](/reference/threewebgpu/classes/analyticlightnode/#gethash)

***

### getLightVector()

> **getLightVector**(`builder`): `any`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L120)

#### Parameters

##### builder

`any`

#### Returns

`any`

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getLightVector`](/reference/threewebgpu/classes/analyticlightnode/#getlightvector)

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getMemberType`](/reference/threewebgpu/classes/analyticlightnode/#getmembertype)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getNodeType`](/reference/threewebgpu/classes/analyticlightnode/#getnodetype)

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getScope`](/reference/threewebgpu/classes/analyticlightnode/#getscope)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getSelf`](/reference/threewebgpu/classes/analyticlightnode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getSerializeChildren`](/reference/threewebgpu/classes/analyticlightnode/#getserializechildren)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getShared`](/reference/threewebgpu/classes/analyticlightnode/#getshared)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/analyticlightnode/#getupdateaftertype)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/analyticlightnode/#getupdatebeforetype)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`getUpdateType`](/reference/threewebgpu/classes/analyticlightnode/#getupdatetype)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`hasEventListener`](/reference/threewebgpu/classes/analyticlightnode/#haseventlistener)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`isGlobal`](/reference/threewebgpu/classes/analyticlightnode/#isglobal)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`onFrameUpdate`](/reference/threewebgpu/classes/analyticlightnode/#onframeupdate)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`onObjectUpdate`](/reference/threewebgpu/classes/analyticlightnode/#onobjectupdate)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`onReference`](/reference/threewebgpu/classes/analyticlightnode/#onreference)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`onRenderUpdate`](/reference/threewebgpu/classes/analyticlightnode/#onrenderupdate)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`onUpdate`](/reference/threewebgpu/classes/analyticlightnode/#onupdate)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`removeEventListener`](/reference/threewebgpu/classes/analyticlightnode/#removeeventlistener)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`serialize`](/reference/threewebgpu/classes/analyticlightnode/#serialize)

***

### setup()

> **setup**(`builder`): `void`

Defined in: [three/src/nodes/lighting/HemisphereLightNode.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/HemisphereLightNode.js#L72)

Unlike most other nodes, lighting nodes do not return a output node in [Node#setup](/reference/threewebgpu/classes/node/#setup).
The main purpose of lighting nodes is to configure the current [LightingModel](/reference/threewebgpu/classes/lightingmodel/) and/or
invocate the respective interface methods.

#### Parameters

##### builder

`any`

The current node builder.

#### Returns

`void`

#### Overrides

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`setup`](/reference/threewebgpu/classes/analyticlightnode/#setup)

***

### setupDirect()

> `abstract` **setupDirect**(): `any`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L133)

Sets up the direct lighting for the analytic light node.

#### Returns

`any`

The direct light data (color and direction).

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`setupDirect`](/reference/threewebgpu/classes/analyticlightnode/#setupdirect)

***

### setupDirectRectArea()

> `abstract` **setupDirectRectArea**(): `any`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L142)

Sets up the direct rect area lighting for the analytic light node.

#### Returns

`any`

The direct rect area light data.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`setupDirectRectArea`](/reference/threewebgpu/classes/analyticlightnode/#setupdirectrectarea)

***

### setupShadow()

> **setupShadow**(`builder`): `void`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L163)

Setups the shadow for this light. This method is only executed if the light
cast shadows and the current build object receives shadows. It incorporates
shadows into the lighting computation.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`setupShadow`](/reference/threewebgpu/classes/analyticlightnode/#setupshadow)

***

### setupShadowNode()

> **setupShadowNode**(): `ShadowNode`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L150)

Setups the shadow node for this light. The method exists so concrete light classes
can setup different types of shadow nodes.

#### Returns

`ShadowNode`

The created shadow node.

#### Inherited from

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`setupShadowNode`](/reference/threewebgpu/classes/analyticlightnode/#setupshadownode)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`toJSON`](/reference/threewebgpu/classes/analyticlightnode/#tojson)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`traverse`](/reference/threewebgpu/classes/analyticlightnode/#traverse)

***

### update()

> **update**(`frame`): `void`

Defined in: [three/src/nodes/lighting/HemisphereLightNode.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/HemisphereLightNode.js#L60)

Overwritten to updated hemisphere light specific uniforms.

#### Parameters

##### frame

`NodeFrame`

A reference to the current node frame.

#### Returns

`void`

#### Overrides

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`update`](/reference/threewebgpu/classes/analyticlightnode/#update)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`updateAfter`](/reference/threewebgpu/classes/analyticlightnode/#updateafter)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`updateBefore`](/reference/threewebgpu/classes/analyticlightnode/#updatebefore)

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

[`AnalyticLightNode`](/reference/threewebgpu/classes/analyticlightnode/).[`updateReference`](/reference/threewebgpu/classes/analyticlightnode/#updatereference)

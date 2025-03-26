---
editUrl: false
next: false
prev: false
title: "IESSpotLightNode"
---

Defined in: [three/src/nodes/lighting/IESSpotLightNode.js:10](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/IESSpotLightNode.js#L10)

An IES version of the default spot light node.

## Extends

- [`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/)

## Constructors

### Constructor

> **new IESSpotLightNode**(`light`?): `IESSpotLightNode`

Defined in: [three/src/nodes/lighting/SpotLightNode.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/SpotLightNode.js#L27)

Constructs a new spot light node.

#### Parameters

##### light?

`SpotLight` = `null`

The spot light source.

#### Returns

`IESSpotLightNode`

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`constructor`](/reference/threewebgpu/classes/spotlightnode/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`_listeners`](/reference/threewebgpu/classes/spotlightnode/#_listeners)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`baseColorNode`](/reference/threewebgpu/classes/spotlightnode/#basecolornode)

***

### color

> **color**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L47)

The light's color value.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`color`](/reference/threewebgpu/classes/spotlightnode/#color)

***

### colorNode

> **colorNode**: `Node`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L55)

The light's color node. Points to `colorNode` of the light source, if set. Otherwise
it creates a uniform node based on [AnalyticLightNode#color](/reference/threewebgpu/classes/analyticlightnode/#color).

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`colorNode`](/reference/threewebgpu/classes/spotlightnode/#colornode)

***

### coneCosNode

> **coneCosNode**: `UniformNode`\<`float`\>

Defined in: [three/src/nodes/lighting/SpotLightNode.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/SpotLightNode.js#L36)

Uniform node representing the cone cosine.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`coneCosNode`](/reference/threewebgpu/classes/spotlightnode/#conecosnode)

***

### cutoffDistanceNode

> **cutoffDistanceNode**: `UniformNode`\<`float`\>

Defined in: [three/src/nodes/lighting/SpotLightNode.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/SpotLightNode.js#L50)

Uniform node representing the cutoff distance.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`cutoffDistanceNode`](/reference/threewebgpu/classes/spotlightnode/#cutoffdistancenode)

***

### decayExponentNode

> **decayExponentNode**: `UniformNode`\<`float`\>

Defined in: [three/src/nodes/lighting/SpotLightNode.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/SpotLightNode.js#L57)

Uniform node representing the decay exponent.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`decayExponentNode`](/reference/threewebgpu/classes/spotlightnode/#decayexponentnode)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`global`](/reference/threewebgpu/classes/spotlightnode/#global)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`isAnalyticLightNode`](/reference/threewebgpu/classes/spotlightnode/#isanalyticlightnode)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`isLightingNode`](/reference/threewebgpu/classes/spotlightnode/#islightingnode)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`isNode`](/reference/threewebgpu/classes/spotlightnode/#isnode)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`light`](/reference/threewebgpu/classes/spotlightnode/#light)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`nodeType`](/reference/threewebgpu/classes/spotlightnode/#nodetype)

***

### penumbraCosNode

> **penumbraCosNode**: `UniformNode`\<`float`\>

Defined in: [three/src/nodes/lighting/SpotLightNode.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/SpotLightNode.js#L43)

Uniform node representing the penumbra cosine.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`penumbraCosNode`](/reference/threewebgpu/classes/spotlightnode/#penumbracosnode)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`shadowColorNode`](/reference/threewebgpu/classes/spotlightnode/#shadowcolornode)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`shadowNode`](/reference/threewebgpu/classes/spotlightnode/#shadownode)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`updateAfterType`](/reference/threewebgpu/classes/spotlightnode/#updateaftertype)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`updateBeforeType`](/reference/threewebgpu/classes/spotlightnode/#updatebeforetype)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`updateType`](/reference/threewebgpu/classes/spotlightnode/#updatetype)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/nodes/core/Node.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L69)

The UUID of the node.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`uuid`](/reference/threewebgpu/classes/spotlightnode/#uuid)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`version`](/reference/threewebgpu/classes/spotlightnode/#version)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`needsUpdate`](/reference/threewebgpu/classes/spotlightnode/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/nodes/core/Node.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L146)

The type of the class. The value is usually the constructor name.

##### Returns

`string`

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`type`](/reference/threewebgpu/classes/spotlightnode/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/nodes/lighting/IESSpotLightNode.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/IESSpotLightNode.js#L12)

##### Returns

`string`

#### Overrides

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`type`](/reference/threewebgpu/classes/spotlightnode/#type-1)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`addEventListener`](/reference/threewebgpu/classes/spotlightnode/#addeventlistener)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`analyze`](/reference/threewebgpu/classes/spotlightnode/#analyze)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`build`](/reference/threewebgpu/classes/spotlightnode/#build)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`customCacheKey`](/reference/threewebgpu/classes/spotlightnode/#customcachekey)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`deserialize`](/reference/threewebgpu/classes/spotlightnode/#deserialize)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`dispatchEvent`](/reference/threewebgpu/classes/spotlightnode/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/nodes/core/Node.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L282)

Calling this method dispatches the `dispose` event. This event can be used
to register event listeners for clean up tasks.

#### Returns

`void`

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`dispose`](/reference/threewebgpu/classes/spotlightnode/#dispose)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`generate`](/reference/threewebgpu/classes/spotlightnode/#generate)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getCacheKey`](/reference/threewebgpu/classes/spotlightnode/#getcachekey)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getChildren`](/reference/threewebgpu/classes/spotlightnode/#getchildren)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getElementType`](/reference/threewebgpu/classes/spotlightnode/#getelementtype)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getHash`](/reference/threewebgpu/classes/spotlightnode/#gethash)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getLightVector`](/reference/threewebgpu/classes/spotlightnode/#getlightvector)

***

### getMemberType()

> **getMemberType**(): `string`

Defined in: [three/src/nodes/core/Node.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L426)

Returns the node member type for the given name.

#### Returns

`string`

The type of the node.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getMemberType`](/reference/threewebgpu/classes/spotlightnode/#getmembertype)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getNodeType`](/reference/threewebgpu/classes/spotlightnode/#getnodetype)

***

### getScope()

> **getScope**(): [`Node`](/reference/threewebgpu/classes/node/)

Defined in: [three/src/nodes/core/Node.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L349)

Returns the references to this node which is by default `this`.

#### Returns

[`Node`](/reference/threewebgpu/classes/node/)

A reference to this node.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getScope`](/reference/threewebgpu/classes/spotlightnode/#getscope)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getSelf`](/reference/threewebgpu/classes/spotlightnode/#getself)

***

### getSerializeChildren()

> **getSerializeChildren**(): `any`[]

Defined in: [three/src/nodes/core/Node.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/Node.js#L721)

Returns the child nodes as a JSON object.

#### Returns

`any`[]

An iterable list of serialized child objects as JSON.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getSerializeChildren`](/reference/threewebgpu/classes/spotlightnode/#getserializechildren)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getShared`](/reference/threewebgpu/classes/spotlightnode/#getshared)

***

### getSpotAttenuation()

> **getSpotAttenuation**(`angleCosine`): `any`

Defined in: [three/src/nodes/lighting/IESSpotLightNode.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/IESSpotLightNode.js#L24)

Overwrites the default implementation to compute an IES conform spot attenuation.

#### Parameters

##### angleCosine

`any`

The angle to compute the spot attenuation for.

#### Returns

`any`

The spot attenuation.

#### Overrides

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getSpotAttenuation`](/reference/threewebgpu/classes/spotlightnode/#getspotattenuation)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getUpdateAfterType`](/reference/threewebgpu/classes/spotlightnode/#getupdateaftertype)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getUpdateBeforeType`](/reference/threewebgpu/classes/spotlightnode/#getupdatebeforetype)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`getUpdateType`](/reference/threewebgpu/classes/spotlightnode/#getupdatetype)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`hasEventListener`](/reference/threewebgpu/classes/spotlightnode/#haseventlistener)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`isGlobal`](/reference/threewebgpu/classes/spotlightnode/#isglobal)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`onFrameUpdate`](/reference/threewebgpu/classes/spotlightnode/#onframeupdate)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`onObjectUpdate`](/reference/threewebgpu/classes/spotlightnode/#onobjectupdate)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`onReference`](/reference/threewebgpu/classes/spotlightnode/#onreference)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`onRenderUpdate`](/reference/threewebgpu/classes/spotlightnode/#onrenderupdate)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`onUpdate`](/reference/threewebgpu/classes/spotlightnode/#onupdate)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`removeEventListener`](/reference/threewebgpu/classes/spotlightnode/#removeeventlistener)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`serialize`](/reference/threewebgpu/classes/spotlightnode/#serialize)

***

### setup()

> **setup**(`builder`): `void`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:208](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L208)

Unlike most other nodes, lighting nodes do not return a output node in [Node#setup](/reference/threewebgpu/classes/node/#setup).
The main purpose of lighting nodes is to configure the current [LightingModel](/reference/threewebgpu/classes/lightingmodel/) and/or
invocate the respective interface methods.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`setup`](/reference/threewebgpu/classes/spotlightnode/#setup)

***

### setupDirect()

> `abstract` **setupDirect**(`builder`): `object`

Defined in: [three/src/nodes/lighting/SpotLightNode.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/SpotLightNode.js#L94)

Sets up the direct lighting for the analytic light node.

#### Parameters

##### builder

`any`

The builder object used for setting up the light.

#### Returns

`object`

The direct light data (color and direction).

##### lightColor

> **lightColor**: `any`

##### lightDirection

> **lightDirection**: `any`

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`setupDirect`](/reference/threewebgpu/classes/spotlightnode/#setupdirect)

***

### setupDirectRectArea()

> `abstract` **setupDirectRectArea**(): `any`

Defined in: [three/src/nodes/lighting/AnalyticLightNode.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/AnalyticLightNode.js#L142)

Sets up the direct rect area lighting for the analytic light node.

#### Returns

`any`

The direct rect area light data.

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`setupDirectRectArea`](/reference/threewebgpu/classes/spotlightnode/#setupdirectrectarea)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`setupShadow`](/reference/threewebgpu/classes/spotlightnode/#setupshadow)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`setupShadowNode`](/reference/threewebgpu/classes/spotlightnode/#setupshadownode)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`toJSON`](/reference/threewebgpu/classes/spotlightnode/#tojson)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`traverse`](/reference/threewebgpu/classes/spotlightnode/#traverse)

***

### update()

> **update**(`frame`): `void`

Defined in: [three/src/nodes/lighting/SpotLightNode.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/lighting/SpotLightNode.js#L66)

Overwritten to updated spot light specific uniforms.

#### Parameters

##### frame

`NodeFrame`

A reference to the current node frame.

#### Returns

`void`

#### Inherited from

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`update`](/reference/threewebgpu/classes/spotlightnode/#update)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`updateAfter`](/reference/threewebgpu/classes/spotlightnode/#updateafter)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`updateBefore`](/reference/threewebgpu/classes/spotlightnode/#updatebefore)

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

[`SpotLightNode`](/reference/threewebgpu/classes/spotlightnode/).[`updateReference`](/reference/threewebgpu/classes/spotlightnode/#updatereference)

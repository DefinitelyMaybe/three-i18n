---
editUrl: false
next: false
prev: false
title: "NodeBuilder"
---

Defined in: [three/src/nodes/core/NodeBuilder.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L67)

Base class for builders which generate a shader program based
on a 3D object and its node material definition.

## Constructors

### Constructor

> **new NodeBuilder**(`object`, `renderer`, `parser`): `NodeBuilder`

Defined in: [three/src/nodes/core/NodeBuilder.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L76)

Constructs a new node builder.

#### Parameters

##### object

`Object3D`

The 3D object.

##### renderer

`Renderer`

The current renderer.

##### parser

`NodeParser`

A reference to a node parser.

#### Returns

`NodeBuilder`

## Properties

### attributes

> **attributes**: [`NodeAttribute`](/reference/threewebgpu/classes/nodeattribute/)[]

Defined in: [three/src/nodes/core/NodeBuilder.js:297](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L297)

This array holds the node attributes of this builder
created via [AttributeNode](/reference/threewebgpu/classes/attributenode/).

***

### bindGroups

> **bindGroups**: `BindGroup`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L289)

Reference to the array of bind groups.

***

### bindings

> **bindings**: `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:267](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L267)

This dictionary holds the bindings for each shader stage.

***

### bindingsIndexes

> **bindingsIndexes**: `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L282)

This dictionary maintains the binding indices per bind group.

***

### bufferAttributes

> **bufferAttributes**: [`NodeAttribute`](/reference/threewebgpu/classes/nodeattribute/)[]

Defined in: [three/src/nodes/core/NodeBuilder.js:305](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L305)

This array holds the node attributes of this builder
created via [BufferAttributeNode](/reference/threewebgpu/classes/bufferattributenode/).

***

### buildStage

> **buildStage**: `"setup"` \| `"analyze"` \| `"generate"`

Defined in: [three/src/nodes/core/NodeBuilder.js:421](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L421)

The current build stage.

***

### cache

> **cache**: [`NodeCache`](/reference/threewebgpu/classes/nodecache/)

Defined in: [three/src/nodes/core/NodeBuilder.js:395](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L395)

The builder's cache.

***

### camera

> **camera**: `Camera`

Defined in: [three/src/nodes/core/NodeBuilder.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L127)

The camera the 3D object is rendered with.

#### Default

```ts
null
```

***

### chaining

> **chaining**: `Node`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:346](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L346)

A chain of nodes.
Used to check recursive calls in node-graph.

***

### clippingContext

> **clippingContext**: `ClippingContext`

Defined in: [three/src/nodes/core/NodeBuilder.js:209](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L209)

The current clipping context.

***

### codes

> **codes**: `object`

Defined in: [three/src/nodes/core/NodeBuilder.js:320](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L320)

This dictionary holds the (native) node codes of this builder.
The codes are maintained in an array for each shader stage.

***

### computeShader

> **computeShader**: `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:230](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L230)

The generated compute shader.

***

### context

> **context**: `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:386](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L386)

The builder's context.

***

### currentFunctionNode

> **currentFunctionNode**: [`FunctionNode`](/reference/threewebgpu/classes/functionnode/)

Defined in: [three/src/nodes/core/NodeBuilder.js:379](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L379)

Reference to the current function node.

#### Default

```ts
null
```

***

### declarations

> **declarations**: `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:275](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L275)

This dictionary holds the declarations for each shader stage.

***

### environmentNode

> **environmentNode**: `Node`

Defined in: [three/src/nodes/core/NodeBuilder.js:194](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L194)

A reference to the current environment node.

#### Default

```ts
null
```

***

### flow

> **flow**: `object`

Defined in: [three/src/nodes/core/NodeBuilder.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L338)

Current code flow.
All code generated in this stack will be stored in `.flow`.

#### code

> **code**: `string`

***

### flowCode

> **flowCode**: `object`

Defined in: [three/src/nodes/core/NodeBuilder.js:244](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L244)

Nodes code from `.flowNodes`.

***

### flowNodes

> **flowNodes**: `object`

Defined in: [three/src/nodes/core/NodeBuilder.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L237)

Nodes used in the primary flow of code generation.

***

### flowsData

> **flowsData**: `WeakMap`\<`WeakKey`, `any`\>

Defined in: [three/src/nodes/core/NodeBuilder.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L407)

***

### fogNode

> **fogNode**: `FogNode`

Defined in: [three/src/nodes/core/NodeBuilder.js:202](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L202)

A reference to the current fog node.

#### Default

```ts
null
```

***

### fragmentShader

> **fragmentShader**: `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:223](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L223)

The generated fragment shader.

***

### geometry

> **geometry**: `BufferGeometry`

Defined in: [three/src/nodes/core/NodeBuilder.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L97)

The geometry of the 3D object.

***

### globalCache

> **globalCache**: [`NodeCache`](/reference/threewebgpu/classes/nodecache/)

Defined in: [three/src/nodes/core/NodeBuilder.js:405](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L405)

Since the [NodeBuilder#cache](/reference/threewebgpu/classes/nodebuilder/#cache) might be temporarily
overwritten by other caches, this member retains the reference
to the builder's own cache.

#### Default

```ts
this.cache
```

***

### hashNodes

> **hashNodes**: `object`

Defined in: [three/src/nodes/core/NodeBuilder.js:170](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L170)

A dictionary that assigns each node to a unique hash.

***

### lightsNode

> **lightsNode**: `LightsNode`

Defined in: [three/src/nodes/core/NodeBuilder.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L186)

A reference to the current lights node.

#### Default

```ts
null
```

***

### material

> **material**: `Material`

Defined in: [three/src/nodes/core/NodeBuilder.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L90)

The material of the 3D object.

***

### nodes

> **nodes**: `Node`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L135)

A list of all nodes the builder is processing
for this 3D object.

***

### object

> **object**: `Object3D`

Defined in: [three/src/nodes/core/NodeBuilder.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L83)

The 3D object.

***

### observer

> **observer**: `NodeMaterialObserver`

Defined in: [three/src/nodes/core/NodeBuilder.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L178)

A reference to a node material observer.

#### Default

```ts
null
```

***

### parser

> **parser**: `NodeParser`

Defined in: [three/src/nodes/core/NodeBuilder.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L111)

A reference to a node parser.

***

### renderer

> **renderer**: `Renderer`

Defined in: [three/src/nodes/core/NodeBuilder.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L104)

The current renderer.

***

### scene

> **scene**: `Scene`

Defined in: [three/src/nodes/core/NodeBuilder.js:119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L119)

The scene the 3D object belongs to.

#### Default

```ts
null
```

***

### sequentialNodes

> **sequentialNodes**: `Node`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L142)

A list of all sequential nodes.

***

### shaderStage

> **shaderStage**: `"compute"` \| `"vertex"` \| `"fragment"` \| `"any"`

Defined in: [three/src/nodes/core/NodeBuilder.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L414)

The current shader stage.

***

### stack

> **stack**: `StackNode`

Defined in: [three/src/nodes/core/NodeBuilder.js:355](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L355)

The current stack.
This reflects the current process in the code block hierarchy,
it is useful to know if the current process is inside a conditional for example.

***

### stacks

> **stacks**: `StackNode`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:363](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L363)

List of stack nodes.
The current stack hierarchy is stored in an array.

***

### structs

> **structs**: `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L260)

This dictionary holds the output structs of the builder.
The structs are maintained in an array for each shader stage.

***

### tab

> **tab**: `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:371](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L371)

A tab value. Used for shader string generation.

#### Default

```ts
'\t'
```

***

### uniforms

> **uniforms**: `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L252)

This dictionary holds the node uniforms of the builder.
The uniforms are maintained in an array for each shader stage.

***

### updateAfterNodes

> **updateAfterNodes**: `Node`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L163)

A list of all nodes which [Node#updateAfter](/reference/threewebgpu/classes/node/#updateafter) method should be executed.

***

### updateBeforeNodes

> **updateBeforeNodes**: `Node`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L156)

A list of all nodes which [Node#updateBefore](/reference/threewebgpu/classes/node/#updatebefore) method should be executed.

***

### updateNodes

> **updateNodes**: `Node`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L149)

A list of all nodes which [Node#update](/reference/threewebgpu/classes/node/#update) method should be executed.

***

### vars

> **vars**: `object`

Defined in: [three/src/nodes/core/NodeBuilder.js:330](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L330)

This dictionary holds the node variables of this builder.
The variables are maintained in an array for each shader stage.
This dictionary is also used to count the number of variables
according to their type (const, vars).

***

### varyings

> **varyings**: [`NodeVarying`](/reference/threewebgpu/classes/nodevarying/)[]

Defined in: [three/src/nodes/core/NodeBuilder.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L312)

This array holds the node varyings of this builder.

***

### vertexShader

> **vertexShader**: `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:216](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L216)

The generated vertex shader.

## Accessors

### currentNode

#### Get Signature

> **get** **currentNode**(): `Node`

Defined in: [three/src/nodes/core/NodeBuilder.js:735](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L735)

A reference the current node which is the
last node in the chain of nodes.

##### Returns

`Node`

## Methods

### addChain()

> **addChain**(`node`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:760](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L760)

Adds the given node to the internal node chain.
This is used to check recursive calls in node-graph.

#### Parameters

##### node

`Node`

The node to add.

#### Returns

`void`

***

### addFlow()

> **addFlow**(`shaderStage`, `node`): `Node`

Defined in: [three/src/nodes/core/NodeBuilder.js:825](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L825)

Adds the Node to a target flow so that it can generate code in the 'generate' process.

#### Parameters

##### shaderStage

The shader stage.

`"compute"` | `"vertex"` | `"fragment"`

##### node

`Node`

The node to add.

#### Returns

`Node`

The node.

***

### addFlowCode()

> **addFlowCode**(`code`): `NodeBuilder`

Defined in: [three/src/nodes/core/NodeBuilder.js:2014](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2014)

Adds a code to the current code flow.

#### Parameters

##### code

`string`

Shader code.

#### Returns

`NodeBuilder`

A reference to this node builder.

***

### addFlowCodeHierarchy()

> **addFlowCodeHierarchy**(`node`, `nodeBlock`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:1927](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1927)

Adds a code flow based on the code-block hierarchy.

This is used so that code-blocks like If,Else create their variables locally if the Node
is only used inside one of these conditionals in the current shader stage.

#### Parameters

##### node

`Node`

The node to add.

##### nodeBlock

`Node`

Node-based code-block. Usually 'ConditionalNode'.

#### Returns

`void`

***

### addFlowTab()

> **addFlowTab**(): `NodeBuilder`

Defined in: [three/src/nodes/core/NodeBuilder.js:2028](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2028)

Add tab in the code that will be generated so that other snippets respect the current tabulation.
Typically used in codes with If,Else.

#### Returns

`NodeBuilder`

A reference to this node builder.

***

### addInclude()

> **addInclude**(`node`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:2086](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2086)

Includes a node in the current function node.

#### Parameters

##### node

`Node`

The node to include.

#### Returns

`void`

***

### addLineFlowCode()

> **addLineFlowCode**(`code`, `node`?): `NodeBuilder`

Defined in: [three/src/nodes/core/NodeBuilder.js:1984](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1984)

Add a inline-code to the current flow.

#### Parameters

##### code

`string`

The code to add.

##### node?

`Node` = `null`

Optional Node, can help the system understand if the Node is part of a code-block.

#### Returns

`NodeBuilder`

A reference to this node builder.

***

### addLineFlowCodeBlock()

> **addLineFlowCodeBlock**(`node`, `code`, `nodeBlock`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:1966](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1966)

Add a inline-code to the current flow code-block.

#### Parameters

##### node

`Node`

The node to add.

##### code

`string`

The code to add.

##### nodeBlock

`Node`

Current ConditionalNode

#### Returns

`void`

***

### addNode()

> **addNode**(`node`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:662](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L662)

Adds a node to this builder.

#### Parameters

##### node

`Node`

The node to add.

#### Returns

`void`

***

### addSequentialNode()

> **addSequentialNode**(`node`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:681](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L681)

It is used to add Nodes that will be used as FRAME and RENDER events,
and need to follow a certain sequence in the calls to work correctly.
This function should be called after 'setup()' in the 'build()' process to ensure that the child nodes are processed first.

#### Parameters

##### node

`Node`

The node to add.

#### Returns

`void`

***

### addStack()

> **addStack**(): `StackNode`

Defined in: [three/src/nodes/core/NodeBuilder.js:1517](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1517)

Adds a stack node to the internal stack.

#### Returns

`StackNode`

The added stack node.

***

### build()

> **build**(): `NodeBuilder`

Defined in: [three/src/nodes/core/NodeBuilder.js:2481](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2481)

Central build method which controls the build for the given object.

#### Returns

`NodeBuilder`

A reference to this node builder.

***

### buildCode()

> `abstract` **buildCode**(): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:2470](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2470)

Controls the code build of the shader stages.

#### Returns

`void`

***

### buildFunctionCode()

> `abstract` **buildFunctionCode**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2229](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2229)

Builds the given shader node.

#### Returns

`string`

The function code.

***

### buildFunctionNode()

> **buildFunctionNode**(`shaderNode`): [`FunctionNode`](/reference/threewebgpu/classes/functionnode/)

Defined in: [three/src/nodes/core/NodeBuilder.js:2103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2103)

Returns the native shader operator name for a given generic name.
It is a similar type of method like [NodeBuilder#getMethod](/reference/threewebgpu/classes/nodebuilder/#getmethod).

#### Parameters

##### shaderNode

`ShaderNodeInternal`

The shader node to build the function node with.

#### Returns

[`FunctionNode`](/reference/threewebgpu/classes/functionnode/)

The build function node.

***

### buildUpdateNodes()

> **buildUpdateNodes**(): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:694](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L694)

Checks the update types of nodes

#### Returns

`void`

***

### changeComponentType()

> **changeComponentType**(`type`, `newComponentType`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1490](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1490)

For a given type this method changes the component type to the
given value. E.g. `vec4` should be changed to the new component type
`uint` which results in `uvec4`.

#### Parameters

##### type

`string`

The type.

##### newComponentType

`string`

The new component type.

#### Returns

`string`

The new type.

***

### createCubeRenderTarget()

> **createCubeRenderTarget**(`size`, `options`): `CubeRenderTarget`

Defined in: [three/src/nodes/core/NodeBuilder.js:469](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L469)

Factory method for creating an instance of CubeRenderTarget with the given
dimensions and options.

#### Parameters

##### size

`number`

The size of the cube render target.

##### options

`any`

The options of the cube render target.

#### Returns

`CubeRenderTarget`

The cube render target.

***

### ~~createNodeMaterial()~~

> **createNodeMaterial**(`type`?): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:2687](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2687)

**`Function`**

:::caution[Deprecated]
since r168. Use `new NodeMaterial()` instead, with targeted node material name.
:::

#### Parameters

##### type?

`string` = `'NodeMaterial'`

The node material type.

#### Returns

`void`

#### Throws

***

### createRenderTarget()

> **createRenderTarget**(`width`, `height`, `options`): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/nodes/core/NodeBuilder.js:455](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L455)

Factory method for creating an instance of [RenderTarget](/reference/three/classes/rendertarget/) with the given
dimensions and options.

#### Parameters

##### width

`number`

The width of the render target.

##### height

`number`

The height of the render target.

##### options

`any`

The options of the render target.

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

The render target.

***

### flowChildNode()

> **flowChildNode**(`node`, `output`): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:2242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2242)

Generates a code flow based on a child Node.

#### Parameters

##### node

`Node`

The node to execute.

##### output

`string` = `null`

Expected output type. For example 'vec3'.

#### Returns

`any`

The code flow.

***

### flowNode()

> **flowNode**(`node`): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:2068](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2068)

Executes the node flow based on a root node to generate the final shader code.

#### Parameters

##### node

`Node`

The node to execute.

#### Returns

`any`

The code flow.

***

### flowNodeFromShaderStage()

> **flowNodeFromShaderStage**(`shaderStage`, `node`, `output`, `propertyName`): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:2272](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2272)

Executes a flow of code in a different stage.

Some nodes like `varying()` have the ability to compute code in vertex-stage and
return the value in fragment-stage even if it is being executed in an input fragment.

#### Parameters

##### shaderStage

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

##### node

`Node`

The node to execute.

##### output

`string` = `null`

Expected output type. For example 'vec3'.

##### propertyName

`string` = `null`

The property name to assign the result.

#### Returns

`any`

***

### flowShaderNode()

> **flowShaderNode**(`shaderNode`): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:2125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2125)

Generates a code flow based on a TSL function: Fn().

#### Parameters

##### shaderNode

`ShaderNodeInternal`

A function code will be generated based on the input.

#### Returns

`any`

***

### flowStagesNode()

> **flowStagesNode**(`node`, `output`): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:2170](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2170)

Runs the node flow through all the steps of creation, 'setup', 'analyze', 'generate'.

#### Parameters

##### node

`Node`

The node to execute.

##### output

`string` = `null`

Expected output type. For example 'vec3'.

#### Returns

`any`

***

### format()

> **format**(`snippet`, `fromType`, `toType`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2587](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2587)

Formats the given shader snippet from a given type into another one. E.g.
this method might be used to convert a simple float string `"1.0"` into a
`vec3` representation: `"vec3<f32>( 1.0 )"`.

#### Parameters

##### snippet

`string`

The shader snippet.

##### fromType

`string`

The source type.

##### toType

`string`

The target type.

#### Returns

`string`

The updated shader string.

***

### generateArray()

> **generateArray**(`type`, `count`?, `values`?): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1064](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1064)

Generates the array shader string for the given type and value.

#### Parameters

##### type

`string`

The type.

##### count?

`number`

The count.

##### values?

`Node`[] = `null`

The default values.

#### Returns

`string`

The generated value as a shader string.

***

### generateArrayDeclaration()

> **generateArrayDeclaration**(`type`, `count`?): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1050](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1050)

Generates the array declaration string.

#### Parameters

##### type

`string`

The type.

##### count?

`number`

The count.

#### Returns

`string`

The generated value as a shader string.

***

### generateConst()

> **generateConst**(`type`, `value`?): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1132)

Generates the shader string for the given type and value.

#### Parameters

##### type

`string`

The type.

##### value?

`any` = `null`

The value.

#### Returns

`string`

The generated value as a shader string.

***

### generateStruct()

> **generateStruct**(`type`, `membersLayout`?, `values`?): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1100)

Generates the struct shader string.

#### Parameters

##### type

`string`

The type.

##### membersLayout?

`any`[]

The count.

##### values?

`Node`[] = `null`

The default values.

#### Returns

`string`

The generated value as a shader string.

***

### generateTexture()

> `abstract` **generateTexture**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1020](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1020)

Generates a texture sample shader string for the given texture data.

#### Returns

`string`

The generated shader string.

***

### generateTextureLod()

> `abstract` **generateTextureLod**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1037](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1037)

Generates a texture LOD shader string for the given texture data.

#### Returns

`string`

The generated shader string.

***

### getArrayCount()

> **getArrayCount**(`node`): `number`

Defined in: [three/src/nodes/core/NodeBuilder.js:1705](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1705)

Returns the array length.

#### Parameters

##### node

`Node`

The node.

#### Returns

`number`

The array length.

***

### getAttribute()

> **getAttribute**(`name`, `type`): [`NodeAttribute`](/reference/threewebgpu/classes/nodeattribute/)

Defined in: [three/src/nodes/core/NodeBuilder.js:1217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1217)

Returns a node attribute for the given name and type.

#### Parameters

##### name

`string`

The attribute's name.

##### type

`string`

The attribute's type.

#### Returns

[`NodeAttribute`](/reference/threewebgpu/classes/nodeattribute/)

The node attribute.

***

### getAttributes()

> `abstract` **getAttributes**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2312)

Returns the attribute definitions as a shader string for the given shader stage.

#### Returns

`string`

The attribute code section.

***

### getAttributesArray()

> **getAttributesArray**(): [`NodeAttribute`](/reference/threewebgpu/classes/nodeattribute/)[]

Defined in: [three/src/nodes/core/NodeBuilder.js:2299](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2299)

Returns an array holding all node attributes of this node builder.

#### Returns

[`NodeAttribute`](/reference/threewebgpu/classes/nodeattribute/)[]

The node attributes of this builder.

***

### getBindGroupArray()

> **getBindGroupArray**(`groupName`, `shaderStage`): `NodeUniformsGroup`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:555](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L555)

Returns an array of node uniform groups for the given group name and shader stage.

#### Parameters

##### groupName

`string`

The group name.

##### shaderStage

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

#### Returns

`NodeUniformsGroup`[]

The array of node uniform groups.

***

### getBindGroupsCache()

> **getBindGroupsCache**(): `ChainMap`

Defined in: [three/src/nodes/core/NodeBuilder.js:430](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L430)

Returns the bind groups of the current renderer.

#### Returns

`ChainMap`

The cache.

***

### getBindings()

> **getBindings**(): `BindGroup`[]

Defined in: [three/src/nodes/core/NodeBuilder.js:582](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L582)

Returns a list bindings of all shader stages separated by groups.

#### Returns

`BindGroup`[]

The list of bindings.

***

### getBufferAttributeFromNode()

> **getBufferAttributeFromNode**(`node`, `type`): [`NodeAttribute`](/reference/threewebgpu/classes/nodeattribute/)

Defined in: [three/src/nodes/core/NodeBuilder.js:1595](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1595)

Returns an instance of [NodeAttribute](/reference/threewebgpu/classes/nodeattribute/) for the given buffer attribute node.

#### Parameters

##### node

`BufferAttributeNode`

The buffer attribute node.

##### type

`string`

The node type.

#### Returns

[`NodeAttribute`](/reference/threewebgpu/classes/nodeattribute/)

The node attribute.

***

### getBuildStage()

> **getBuildStage**(): `"setup"` \| `"analyze"` \| `"generate"`

Defined in: [three/src/nodes/core/NodeBuilder.js:2459](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2459)

Returns the current build stage.

#### Returns

`"setup"` \| `"analyze"` \| `"generate"`

The current build stage.

***

### getCache()

> **getCache**(): [`NodeCache`](/reference/threewebgpu/classes/nodecache/)

Defined in: [three/src/nodes/core/NodeBuilder.js:887](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L887)

Returns the builder's current cache.

#### Returns

[`NodeCache`](/reference/threewebgpu/classes/nodecache/)

The builder's current cache.

***

### getCacheFromNode()

> **getCacheFromNode**(`node`, `parent`?): [`NodeCache`](/reference/threewebgpu/classes/nodecache/)

Defined in: [three/src/nodes/core/NodeBuilder.js:900](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L900)

Returns a cache for the given node.

#### Parameters

##### node

`Node`

The node.

##### parent?

`boolean` = `true`

Whether this node refers to a shared parent cache or not.

#### Returns

[`NodeCache`](/reference/threewebgpu/classes/nodecache/)

The cache.

***

### getCodeFromNode()

> **getCodeFromNode**(`node`, `type`, `shaderStage`?): [`NodeCode`](/reference/threewebgpu/classes/nodecode/)

Defined in: [three/src/nodes/core/NodeBuilder.js:1895](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1895)

Returns an instance of [NodeCode](/reference/threewebgpu/classes/nodecode/) for the given code node.

#### Parameters

##### node

`CodeNode`

The code node.

##### type

`string`

The node type.

##### shaderStage?

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

#### Returns

[`NodeCode`](/reference/threewebgpu/classes/nodecode/)

The node code.

***

### getCodes()

> **getCodes**(`shaderStage`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2390)

Returns the native code definitions as a shader string for the given shader stage.

#### Parameters

##### shaderStage

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

#### Returns

`string`

The native code section.

***

### getComponentType()

> **getComponentType**(`type`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1350)

Returns the component type for a given type.

#### Parameters

##### type

`string`

The type.

#### Returns

`string`

The component type.

***

### getComponentTypeFromTexture()

> **getComponentTypeFromTexture**(`texture`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1313](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1313)

Returns the component type of a given texture.

#### Parameters

##### texture

`Texture`

The texture.

#### Returns

`string`

The component type.

***

### getContext()

> **getContext**(): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:849](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L849)

Returns the builder's current context.

#### Returns

`any`

The builder's current context.

***

### getDataFromNode()

> **getDataFromNode**(`node`, `shaderStage`?, `cache`?): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:1553](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1553)

The builder maintains (cached) data for each node during the building process. This method
can be used to get these data for a specific shader stage and cache.

#### Parameters

##### node

`Node`

The node to get the data for.

##### shaderStage?

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

##### cache?

[`NodeCache`](/reference/threewebgpu/classes/nodecache/) = `null`

An optional cache.

#### Returns

`any`

The node data.

***

### getDrawIndex()

> `abstract` **getDrawIndex**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:953](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L953)

Returns the drawIndex input variable as a native shader string.
Only relevant for WebGL and its `WEBGL_multi_draw` extension.

#### Returns

`string`

The drawIndex shader string.

***

### getElementType()

> **getElementType**(`type`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1334](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1334)

Returns the element type for a given type.

#### Parameters

##### type

`string`

The type.

#### Returns

`string`

The element type.

***

### getFlowData()

> **getFlowData**(`node`): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:2056](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2056)

Gets the current flow data based on a Node.

#### Parameters

##### node

`Node`

Node that the flow was started.

#### Returns

`any`

The flow data.

***

### getFragCoord()

> `abstract` **getFragCoord**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:977](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L977)

Returns the fragCoord input variable as a native shader string.

#### Returns

`string`

The fragCoord shader string.

***

### getFrontFacing()

> `abstract` **getFrontFacing**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:965](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L965)

Returns the frontFacing input variable as a native shader string.

#### Returns

`string`

The frontFacing shader string.

***

### getFunctionOperator()

> `abstract` **getFunctionOperator**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2216](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2216)

Returns the native shader operator name for a given generic name.
It is a similar type of method like [NodeBuilder#getMethod](/reference/threewebgpu/classes/nodebuilder/#getmethod).

#### Returns

`string`

The resolved operator name.

***

### getHash()

> **getHash**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2415](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2415)

Returns the hash of this node builder.

#### Returns

`string`

The hash.

***

### getInstanceIndex()

> `abstract` **getInstanceIndex**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:940](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L940)

Returns the instanceIndex input variable as a native shader string.

#### Returns

`string`

The instanceIndex shader string.

***

### getIntegerType()

> **getIntegerType**(`type`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1502](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1502)

Returns the integer type pendant for the given type.

#### Parameters

##### type

`string`

The type.

#### Returns

`string`

The integer type.

***

### getMethod()

> `abstract` **getMethod**(`method`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:800](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L800)

Returns the native shader method name for a given generic name. E.g.
the method name `textureDimensions` matches the WGSL name but must be
resolved to `textureSize` in GLSL.

#### Parameters

##### method

`string`

The method name to resolve.

#### Returns

`string`

The resolved method name.

***

### getNodeFromHash()

> **getNodeFromHash**(`hash`): `Node`

Defined in: [three/src/nodes/core/NodeBuilder.js:812](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L812)

Returns a node for the given hash, see [NodeBuilder#setHashNode](/reference/threewebgpu/classes/nodebuilder/#sethashnode).

#### Parameters

##### hash

`number`

The hash of the node.

#### Returns

`Node`

The found node.

***

### getNodeProperties()

> **getNodeProperties**(`node`, `shaderStage`?): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:1580](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1580)

Returns the properties for the given node and shader stage.

#### Parameters

##### node

`Node`

The node to get the properties for.

##### shaderStage?

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

#### Returns

`any`

The node properties.

***

### getNodeUniform()

> **getNodeUniform**(`uniformNode`, `type`): `Uniform`

Defined in: [three/src/nodes/core/NodeBuilder.js:2562](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2562)

Returns a uniform representation which is later used for UBO generation and rendering.

#### Parameters

##### uniformNode

[`NodeUniform`](/reference/threewebgpu/classes/nodeuniform/)

The uniform node.

##### type

`string`

The requested type.

#### Returns

`Uniform`

The uniform.

***

### getOutputStructName()

> `abstract` **getOutputStructName**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:494](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L494)

Returns the output struct name which is required by
[OutputStructNode](/reference/threewebgpu/classes/outputstructnode/).

#### Returns

`string`

The name of the output struct.

***

### getOutputStructTypeFromNode()

> **getOutputStructTypeFromNode**(`node`, `membersLayout`): `StructType`

Defined in: [three/src/nodes/core/NodeBuilder.js:1657](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1657)

Returns an instance of StructType for the given output struct node.

#### Parameters

##### node

`OutputStructNode`

The output struct node.

##### membersLayout

`any`[]

The output struct types.

#### Returns

`StructType`

The struct type attribute.

***

### getPropertyName()

> **getPropertyName**(`node`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1252)

Returns for the given node and shader stage the property name for the shader.

#### Parameters

##### node

`Node`

The node.

#### Returns

`string`

The property name.

***

### getShaderStage()

> **getShaderStage**(): `"compute"` \| `"vertex"` \| `"fragment"` \| `"any"`

Defined in: [three/src/nodes/core/NodeBuilder.js:2437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2437)

Returns the current shader stage.

#### Returns

`"compute"` \| `"vertex"` \| `"fragment"` \| `"any"`

The current shader stage.

***

### getSharedContext()

> **getSharedContext**(): `any`

Defined in: [three/src/nodes/core/NodeBuilder.js:861](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L861)

Gets a context used in shader construction that can be shared across different materials.
This is necessary since the renderer cache can reuse shaders generated in one material and use them in another.

#### Returns

`any`

The builder's current context without material.

***

### getSignature()

> **getSignature**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2672](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2672)

Returns a signature with the engine's current revision.

#### Returns

`string`

The signature.

***

### getStructTypeFromNode()

> **getStructTypeFromNode**(`node`, `membersLayout`, `name`?, `shaderStage`?): `StructType`

Defined in: [three/src/nodes/core/NodeBuilder.js:1626](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1626)

Returns an instance of StructType for the given output struct node.

#### Parameters

##### node

`OutputStructNode`

The output struct node.

##### membersLayout

`any`[]

The output struct types.

##### name?

`string` = `null`

The name of the struct.

##### shaderStage?

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

#### Returns

`StructType`

The struct type attribute.

***

### getType()

> **getType**(`type`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1190)

It might be necessary to convert certain data types to different ones
so this method can be used to hide the conversion.

#### Parameters

##### type

`string`

The type.

#### Returns

`string`

The updated type.

***

### getTypeFromArray()

> **getTypeFromArray**(`array`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1414)

Returns the type for a given typed array.

#### Parameters

##### array

`TypedArray`

The typed array.

#### Returns

`string`

The type.

***

### getTypeFromAttribute()

> **getTypeFromAttribute**(`attribute`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1426)

Returns the type for a given buffer attribute.

#### Parameters

##### attribute

`BufferAttribute`

The buffer attribute.

#### Returns

`string`

The type.

***

### getTypeFromLength()

> **getTypeFromLength**(`length`, `componentType`?): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1390)

Returns the data type for the given the length and component type.

#### Parameters

##### length

`number`

The length.

##### componentType?

`string` = `'float'`

The component type.

#### Returns

`string`

The type.

***

### getTypeLength()

> **getTypeLength**(`type`): `number`

Defined in: [three/src/nodes/core/NodeBuilder.js:1454](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1454)

Returns the length for the given data type.

#### Parameters

##### type

`string`

The data type.

#### Returns

`number`

The length.

***

### getUniformFromNode()

> **getUniformFromNode**(`node`, `type`, `shaderStage`?, `name`?): [`NodeUniform`](/reference/threewebgpu/classes/nodeuniform/)

Defined in: [three/src/nodes/core/NodeBuilder.js:1675](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1675)

Returns an instance of [NodeUniform](/reference/threewebgpu/classes/nodeuniform/) for the given uniform node.

#### Parameters

##### node

`UniformNode`

The uniform node.

##### type

`string`

The uniform type.

##### shaderStage?

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

##### name?

`string` = `null`

The name of the uniform.

#### Returns

[`NodeUniform`](/reference/threewebgpu/classes/nodeuniform/)

The node uniform.

***

### getUniforms()

> `abstract` **getUniforms**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2378](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2378)

Returns the uniform definitions as a shader string for the given shader stage.

#### Returns

`string`

The uniform code section.

***

### getVar()

> **getVar**(`type`, `name`, `count`?): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2339](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2339)

Returns a single variable definition as a shader string for the given variable type and name.

#### Parameters

##### type

`string`

The variable's type.

##### name

`string`

The variable's name.

##### count?

`number` = `null`

The array length.

#### Returns

`string`

The shader string.

***

### getVarFromNode()

> **getVarFromNode**(`node`, `name`, `type`?, `shaderStage`?, `readOnly`?): [`NodeVar`](/reference/threewebgpu/classes/nodevar/)

Defined in: [three/src/nodes/core/NodeBuilder.js:1727](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1727)

Returns an instance of [NodeVar](/reference/threewebgpu/classes/nodevar/) for the given variable node.

#### Parameters

##### node

`VarNode`

The variable node.

##### name

`string` = `null`

The variable's name.

##### type?

`string` = `...`

The variable's type.

##### shaderStage?

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

##### readOnly?

`boolean` = `false`

Whether the variable is read-only or not.

#### Returns

[`NodeVar`](/reference/threewebgpu/classes/nodevar/)

The node variable.

***

### getVars()

> **getVars**(`shaderStage`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2351](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2351)

Returns the variable definitions as a shader string for the given shader stage.

#### Parameters

##### shaderStage

The shader stage.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

#### Returns

`string`

The variable code section.

***

### getVaryingFromNode()

> **getVaryingFromNode**(`node`, `name`, `type`?): [`NodeVar`](/reference/threewebgpu/classes/nodevar/)

Defined in: [three/src/nodes/core/NodeBuilder.js:1825](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1825)

Returns an instance of [NodeVarying](/reference/threewebgpu/classes/nodevarying/) for the given varying node.

#### Parameters

##### node

`any`

The varying node.

##### name

`string` = `null`

The varying's name.

##### type?

`string` = `...`

The varying's type.

#### Returns

[`NodeVar`](/reference/threewebgpu/classes/nodevar/)

The node varying.

***

### getVaryings()

> `abstract` **getVaryings**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:2325](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2325)

Returns the varying definitions as a shader string for the given shader stage.

#### Returns

`string`

The varying code section.

***

### getVectorFromMatrix()

> **getVectorFromMatrix**(`type`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1475](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1475)

Returns the vector type for a given matrix type.

#### Parameters

##### type

`string`

The matrix type.

#### Returns

`string`

The vector type.

***

### getVectorType()

> **getVectorType**(`type`): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:1374](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1374)

Returns the vector type for a given type.

#### Parameters

##### type

`string`

The type.

#### Returns

`string`

The vector type.

***

### getVertexIndex()

> `abstract` **getVertexIndex**(): `string`

Defined in: [three/src/nodes/core/NodeBuilder.js:928](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L928)

Returns the vertexIndex input variable as a native shader string.

#### Returns

`string`

The instanceIndex shader string.

***

### hasGeometryAttribute()

> **hasGeometryAttribute**(`name`): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:1204](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1204)

Whether the given attribute name is defined in the geometry or not.

#### Parameters

##### name

`string`

The attribute name.

#### Returns

`boolean`

Whether the given attribute name is defined in the geometry.

***

### includes()

> **includes**(`node`): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:481](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L481)

Whether the given node is included in the internal array of nodes or not.

#### Parameters

##### node

`Node`

The node to test.

#### Returns

`boolean`

Whether the given node is included in the internal array of nodes or not.

***

### increaseUsage()

> **increaseUsage**(`node`): `number`

Defined in: [three/src/nodes/core/NodeBuilder.js:1002](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1002)

Calling this method increases the usage count for the given node by one.

#### Parameters

##### node

`Node`

The node to increase the usage count for.

#### Returns

`number`

The updated usage count.

***

### isAvailable()

> `abstract` **isAvailable**(): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:916](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L916)

Whether the requested feature is available or not.

#### Returns

`boolean`

Whether the requested feature is supported or not.

***

### isDeterministic()

> **isDeterministic**(`node`): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:1776](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1776)

Returns whether a Node or its flow is deterministic, useful for use in `const`.

#### Parameters

##### node

`Node`

The varying node.

#### Returns

`boolean`

Returns true if deterministic.

***

### isFilteredTexture()

> **isFilteredTexture**(`texture`): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:747](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L747)

Whether the given texture is filtered or not.

#### Parameters

##### texture

`Texture`

The texture to check.

#### Returns

`boolean`

Whether the given texture is filtered or not.

***

### isFlipY()

> `abstract` **isFlipY**(): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:990](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L990)

Whether to flip texture data along its vertical axis or not. WebGL needs
this method evaluate to `true`, WebGPU to `false`.

#### Returns

`boolean`

Whether to flip texture data along its vertical axis or not.

***

### isMatrix()

> **isMatrix**(`type`): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:1276](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1276)

Whether the given type is a matrix type or not.

#### Parameters

##### type

`string`

The type to check.

#### Returns

`boolean`

Whether the given type is a matrix type or not.

***

### isReference()

> **isReference**(`type`): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:1288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1288)

Whether the given type is a reference type or not.

#### Parameters

##### type

`string`

The type to check.

#### Returns

`boolean`

Whether the given type is a reference type or not.

***

### isVector()

> **isVector**(`type`): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:1264](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1264)

Whether the given type is a vector type or not.

#### Parameters

##### type

`string`

The type to check.

#### Returns

`boolean`

Whether the given type is a vector type or not.

***

### needsToWorkingColorSpace()

> `abstract` **needsToWorkingColorSpace**(): `boolean`

Defined in: [three/src/nodes/core/NodeBuilder.js:1301](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1301)

Checks if the given texture requires a manual conversion to the working color space.

#### Returns

`boolean`

Whether the given texture requires a conversion to working color space or not.

***

### registerDeclaration()

> **registerDeclaration**(`node`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:1857](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1857)

Registers a node declaration in the current shader stage.

#### Parameters

##### node

`any`

The node to be registered.

#### Returns

`void`

***

### removeChain()

> **removeChain**(`node`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:779](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L779)

Removes the given node from the internal node chain.

#### Parameters

##### node

`Node`

The node to remove.

#### Returns

`void`

***

### removeFlowTab()

> **removeFlowTab**(): `NodeBuilder`

Defined in: [three/src/nodes/core/NodeBuilder.js:2041](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2041)

Removes a tab.

#### Returns

`NodeBuilder`

A reference to this node builder.

***

### removeStack()

> **removeStack**(): `StackNode`

Defined in: [three/src/nodes/core/NodeBuilder.js:1533](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L1533)

Removes the last stack node from the internal stack.

#### Returns

`StackNode`

The removed stack node.

***

### setBuildStage()

> **setBuildStage**(`buildStage`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:2448](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2448)

Sets the current build stage.

#### Parameters

##### buildStage

The build stage to set.

`"setup"` | `"analyze"` | `"generate"`

#### Returns

`void`

***

### setCache()

> **setCache**(`cache`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:876](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L876)

Sets builder's cache.

#### Parameters

##### cache

[`NodeCache`](/reference/threewebgpu/classes/nodecache/)

The cache to set.

#### Returns

`void`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:838](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L838)

Sets builder's context.

#### Parameters

##### context

`any`

The context to set.

#### Returns

`void`

***

### setHashNode()

> **setHashNode**(`node`, `hash`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:651](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L651)

The builder maintains each node in a hash-based dictionary.
This method sets the given node (value) with the given hash (key) into this dictionary.

#### Parameters

##### node

`Node`

The node to add.

##### hash

`number`

The hash of the node.

#### Returns

`void`

***

### setShaderStage()

> **setShaderStage**(`shaderStage`): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:2426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L2426)

Sets the current shader stage.

#### Parameters

##### shaderStage

The shader stage to set.

`"compute"` | `"vertex"` | `"fragment"` | `"any"`

#### Returns

`void`

***

### sortBindingGroups()

> **sortBindingGroups**(): `void`

Defined in: [three/src/nodes/core/NodeBuilder.js:627](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeBuilder.js#L627)

Sorts the bind groups and updates [NodeBuilder#bindingsIndexes](/reference/threewebgpu/classes/nodebuilder/#bindingsindexes).

#### Returns

`void`

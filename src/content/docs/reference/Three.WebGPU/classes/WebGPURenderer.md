---
editUrl: false
next: false
prev: false
title: "WebGPURenderer"
---

Defined in: [three/src/renderers/webgpu/WebGPURenderer.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/webgpu/WebGPURenderer.js#L27)

This renderer is the new alternative of `WebGLRenderer`. `WebGPURenderer` has the ability
to target different backends. By default, the renderer tries to use a WebGPU backend if the
browser supports WebGPU. If not, `WebGPURenderer` falls backs to a WebGL 2 backend.

## Extends

- `Renderer`

## Constructors

### Constructor

> **new WebGPURenderer**(`parameters`): `WebGPURenderer`

Defined in: [three/src/renderers/webgpu/WebGPURenderer.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/webgpu/WebGPURenderer.js#L50)

Constructs a new WebGPU renderer.

#### Parameters

##### parameters

The configuration parameter.

#### Returns

`WebGPURenderer`

#### Overrides

`Renderer.constructor`

## Properties

### alpha

> **alpha**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L157)

Whether the default framebuffer should be transparent or opaque.

#### Default

```ts
true
```

#### Inherited from

`Renderer.alpha`

***

### autoClear

> **autoClear**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L122)

Whether the renderer should automatically clear the current rendering target
before execute a `render()` call. The target can be the canvas (default framebuffer)
or the current bound render target (custom framebuffer).

#### Default

```ts
true
```

#### Inherited from

`Renderer.autoClear`

***

### autoClearColor

> **autoClearColor**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L131)

When `autoClear` is set to `true`, this property defines whether the renderer
should clear the color buffer.

#### Default

```ts
true
```

#### Inherited from

`Renderer.autoClearColor`

***

### autoClearDepth

> **autoClearDepth**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L140)

When `autoClear` is set to `true`, this property defines whether the renderer
should clear the depth buffer.

#### Default

```ts
true
```

#### Inherited from

`Renderer.autoClearDepth`

***

### autoClearStencil

> **autoClearStencil**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L149)

When `autoClear` is set to `true`, this property defines whether the renderer
should clear the stencil buffer.

#### Default

```ts
true
```

#### Inherited from

`Renderer.autoClearStencil`

***

### backend

> **backend**: `Backend`

Defined in: [three/src/renderers/common/Renderer.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L104)

A reference to the current backend.

#### Inherited from

`Renderer.backend`

***

### debug

> **debug**: `DebugConfig`

Defined in: [three/src/renderers/common/Renderer.js:694](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L694)

The renderer's debug configuration.

#### Inherited from

`Renderer.debug`

***

### depth

> **depth**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L210)

Whether the default framebuffer should have a depth buffer or not.

#### Default

```ts
true
```

#### Inherited from

`Renderer.depth`

***

### domElement

> **domElement**: `HTMLCanvasElement` \| `OffscreenCanvas`

Defined in: [three/src/renderers/common/Renderer.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L97)

A reference to the canvas element the renderer is drawing to.
This value of this property will automatically be created by
the renderer.

#### Inherited from

`Renderer.domElement`

***

### info

> **info**: `Info`

Defined in: [three/src/renderers/common/Renderer.js:226](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L226)

Holds a series of statistical information about the GPU memory
and the rendering process. Useful for debugging and monitoring.

#### Inherited from

`Renderer.info`

***

### isRenderer

> `readonly` **isRenderer**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L75)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

`Renderer.isRenderer`

***

### isWebGPURenderer

> `readonly` **isWebGPURenderer**: `boolean`

Defined in: [three/src/renderers/webgpu/WebGPURenderer.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/webgpu/WebGPURenderer.js#L92)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### library

> **library**: `NodeLibrary`

Defined in: [three/src/renderers/common/Renderer.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L242)

The node library defines how certain library objects like materials, lights
or tone mapping functions are mapped to node types. This is required since
although instances of classes like `MeshBasicMaterial` or `PointLight` can
be part of the scene graph, they are internally represented as nodes for
further processing.

#### Inherited from

`Renderer.library`

***

### lighting

> **lighting**: `Lighting`

Defined in: [three/src/renderers/common/Renderer.js:249](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L249)

A map-like data structure for managing lights.

#### Inherited from

`Renderer.lighting`

***

### logarithmicDepthBuffer

> **logarithmicDepthBuffer**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:165](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L165)

Whether logarithmic depth buffer is enabled or not.

#### Default

```ts
false
```

#### Inherited from

`Renderer.logarithmicDepthBuffer`

***

### nodes

> **nodes**: `object`

Defined in: [three/src/renderers/common/Renderer.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L228)

#### modelNormalViewMatrix

> **modelNormalViewMatrix**: `any` = `null`

#### modelViewMatrix

> **modelViewMatrix**: `any` = `null`

#### Inherited from

`Renderer.nodes`

***

### onDeviceLost

> **onDeviceLost**: `Function`

Defined in: [three/src/renderers/common/Renderer.js:595](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L595)

A callback function that defines what should happen when a device/context lost occurs.

#### Inherited from

`Renderer.onDeviceLost`

***

### opaque

> **opaque**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:649](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L649)

Whether the renderer should render opaque render objects or not.

#### Default

```ts
true
```

#### Inherited from

`Renderer.opaque`

***

### outputColorSpace

> **outputColorSpace**: `string`

Defined in: [three/src/renderers/common/Renderer.js:173](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L173)

Defines the output color space of the renderer.

#### Default

```ts
SRGBColorSpace
```

#### Inherited from

`Renderer.outputColorSpace`

***

### samples

> **samples**: `number`

Defined in: [three/src/renderers/common/Renderer.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L112)

The number of MSAA samples.

#### Default

```ts
0
```

#### Inherited from

`Renderer.samples`

***

### shadowMap

> **shadowMap**: `ShadowMapConfig`

Defined in: [three/src/renderers/common/Renderer.js:663](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L663)

The renderer's shadow configuration.

#### Inherited from

`Renderer.shadowMap`

***

### sortObjects

> **sortObjects**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:202](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L202)

Whether the renderer should sort its render lists or not.

Note: Sorting is used to attempt to properly render objects that have some degree of transparency.
By definition, sorting objects may not work in all cases. Depending on the needs of application,
it may be necessary to turn off sorting and use other methods to deal with transparency rendering
e.g. manually determining each object's rendering order.

#### Default

```ts
true
```

#### Inherited from

`Renderer.sortObjects`

***

### stencil

> **stencil**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L218)

Whether the default framebuffer should have a stencil buffer or not.

#### Default

```ts
false
```

#### Inherited from

`Renderer.stencil`

***

### toneMapping

> **toneMapping**: `number`

Defined in: [three/src/renderers/common/Renderer.js:181](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L181)

Defines the tone mapping of the renderer.

#### Default

```ts
NoToneMapping
```

#### Inherited from

`Renderer.toneMapping`

***

### toneMappingExposure

> **toneMappingExposure**: `number`

Defined in: [three/src/renderers/common/Renderer.js:189](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L189)

Defines the tone mapping exposure.

#### Default

```ts
1
```

#### Inherited from

`Renderer.toneMappingExposure`

***

### transparent

> **transparent**: `boolean`

Defined in: [three/src/renderers/common/Renderer.js:641](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L641)

Whether the renderer should render transparent render objects or not.

#### Default

```ts
true
```

#### Inherited from

`Renderer.transparent`

***

### xr

> **xr**: `XRManager`

Defined in: [three/src/renderers/common/Renderer.js:679](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L679)

The renderer's XR manager.

#### Inherited from

`Renderer.xr`

## Accessors

### compile

#### Get Signature

> **get** **compile**(): (`arg0`, `arg1`, `arg2`) => `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2943](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2943)

Alias for `compileAsync()`.

##### Method

##### Returns

`Function`

A Promise that resolves when the compile has been finished.

###### Parameters

###### arg0

`Object3D`

###### arg1

`Camera`

###### arg2

[`Scene`](/reference/three/classes/scene/)

###### Returns

`Promise`\<`any`\>

#### Inherited from

`Renderer.compile`

***

### coordinateSystem

#### Get Signature

> **get** **coordinateSystem**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:806](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L806)

The coordinate system of the renderer. The value of this property
depends on the selected backend. Either `THREE.WebGLCoordinateSystem` or
`THREE.WebGPUCoordinateSystem`.

##### Returns

`number`

#### Inherited from

`Renderer.coordinateSystem`

***

### currentColorSpace

#### Get Signature

> **get** **currentColorSpace**(): `string`

Defined in: [three/src/renderers/common/Renderer.js:2068](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2068)

The current output color space of the renderer. When a render target is set,
the output color space is always `LinearSRGBColorSpace`.

##### Returns

`string`

#### Inherited from

`Renderer.currentColorSpace`

***

### currentToneMapping

#### Get Signature

> **get** **currentToneMapping**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:2056](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2056)

The current output tone mapping of the renderer. When a render target is set,
the output tone mapping is always `NoToneMapping`.

##### Returns

`number`

#### Inherited from

`Renderer.currentToneMapping`

***

### isOutputTarget

#### Get Signature

> **get** **isOutputTarget**(): `boolean`

Defined in: [three/src/renderers/common/Renderer.js:2079](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2079)

Returns `true` if the rendering settings are set to screen output.

##### Returns

`boolean`

True if the current render target is the same of output render target or `null`, otherwise false.

#### Inherited from

`Renderer.isOutputTarget`

## Methods

### \_projectObject()

> **\_projectObject**(`object`, `camera`, `groupOrder`, `renderList`, `clippingContext`): `void`

Defined in: [three/src/renderers/common/Renderer.js:2524](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2524)

Analyzes the given 3D object's hierarchy and builds render lists from the
processed hierarchy.

#### Parameters

##### object

`Object3D`

The 3D object to process (usually a scene).

##### camera

`Camera`

The camera the object is rendered with.

##### groupOrder

`number`

The group order is derived from the `renderOrder` of groups and is used to group 3D objects within groups.

##### renderList

`RenderList`

The current render list.

##### clippingContext

`ClippingContext`

The current clipping context.

#### Returns

`void`

#### Inherited from

`Renderer._projectObject`

***

### clear()

> **clear**(`color`?, `depth`?, `stencil`?): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:1916](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1916)

Performs a manual clear operation. This method ignores `autoClear` properties.

#### Parameters

##### color?

`boolean` = `true`

Whether the color buffer should be cleared or not.

##### depth?

`boolean` = `true`

Whether the depth buffer should be cleared or not.

##### stencil?

`boolean` = `true`

Whether the stencil buffer should be cleared or not.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the clear operation has been executed.
Only returned when the renderer has not been initialized.

#### Inherited from

`Renderer.clear`

***

### clearAsync()

> **clearAsync**(`color`?, `depth`?, `stencil`?): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2006](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2006)

Async version of [Renderer#clear](/reference/threewebgpu/classes/webgpurenderer/#clear).

#### Parameters

##### color?

`boolean` = `true`

Whether the color buffer should be cleared or not.

##### depth?

`boolean` = `true`

Whether the depth buffer should be cleared or not.

##### stencil?

`boolean` = `true`

Whether the stencil buffer should be cleared or not.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the clear operation has been executed.

#### Async

#### Inherited from

`Renderer.clearAsync`

***

### clearColor()

> **clearColor**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:1967](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1967)

Performs a manual clear operation of the color buffer. This method ignores `autoClear` properties.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the clear operation has been executed.
Only returned when the renderer has not been initialized.

#### Inherited from

`Renderer.clearColor`

***

### clearColorAsync()

> **clearColorAsync**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2020](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2020)

Async version of [Renderer#clearColor](/reference/threewebgpu/classes/webgpurenderer/#clearcolor).

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the clear operation has been executed.

#### Async

#### Inherited from

`Renderer.clearColorAsync`

***

### clearDepth()

> **clearDepth**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:1979](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1979)

Performs a manual clear operation of the depth buffer. This method ignores `autoClear` properties.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the clear operation has been executed.
Only returned when the renderer has not been initialized.

#### Inherited from

`Renderer.clearDepth`

***

### clearDepthAsync()

> **clearDepthAsync**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2032](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2032)

Async version of [Renderer#clearDepth](/reference/threewebgpu/classes/webgpurenderer/#cleardepth).

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the clear operation has been executed.

#### Async

#### Inherited from

`Renderer.clearDepthAsync`

***

### clearStencil()

> **clearStencil**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:1991](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1991)

Performs a manual clear operation of the stencil buffer. This method ignores `autoClear` properties.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the clear operation has been executed.
Only returned when the renderer has not been initialized.

#### Inherited from

`Renderer.clearStencil`

***

### clearStencilAsync()

> **clearStencilAsync**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2044](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2044)

Async version of [Renderer#clearStencil](/reference/threewebgpu/classes/webgpurenderer/#clearstencil).

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the clear operation has been executed.

#### Async

#### Inherited from

`Renderer.clearStencilAsync`

***

### compileAsync()

> **compileAsync**(`scene`, `camera`, `targetScene`): `Promise`\<`any`[]\>

Defined in: [three/src/renderers/common/Renderer.js:827](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L827)

Compiles all materials in the given scene. This can be useful to avoid a
phenomenon which is called "shader compilation stutter", which occurs when
rendering an object with a new shader for the first time.

If you want to add a 3D object to an existing scene, use the third optional
parameter for applying the target scene. Note that the (target) scene's lighting
and environment must be configured before calling this method.

#### Parameters

##### scene

`Object3D`

The scene or 3D object to precompile.

##### camera

`Camera`

The camera that is used to render the scene.

##### targetScene

[`Scene`](/reference/three/classes/scene/) = `null`

If the first argument is a 3D object, this parameter must represent the scene the 3D object is going to be added.

#### Returns

`Promise`\<`any`[]\>

A Promise that resolves when the compile has been finished.

#### Async

#### Inherited from

`Renderer.compileAsync`

***

### compute()

> **compute**(`computeNodes`): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2216](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2216)

Execute a single or an array of compute nodes. This method can only be called
if the renderer has been initialized.

#### Parameters

##### computeNodes

The compute node(s).

`Node` | `Node`[]

#### Returns

`Promise`\<`any`\>

A Promise that resolve when the compute has finished. Only returned when the renderer has not been initialized.

#### Inherited from

`Renderer.compute`

***

### computeAsync()

> **computeAsync**(`computeNodes`): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2314](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2314)

Execute a single or an array of compute nodes.

#### Parameters

##### computeNodes

The compute node(s).

`Node` | `Node`[]

#### Returns

`Promise`\<`any`\>

A Promise that resolve when the compute has finished.

#### Async

#### Inherited from

`Renderer.computeAsync`

***

### copyFramebufferToTexture()

> **copyFramebufferToTexture**(`framebufferTexture`, `rectangle`?): `void`

Defined in: [three/src/renderers/common/Renderer.js:2419](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2419)

Copies the current bound framebuffer into the given texture.

#### Parameters

##### framebufferTexture

`FramebufferTexture`

The texture.

##### rectangle?

A two or four dimensional vector that defines the rectangular portion of the framebuffer that should be copied.

[`Vector2`](/reference/three/classes/vector2/) | [`Vector4`](/reference/three/classes/vector4/)

#### Returns

`void`

#### Inherited from

`Renderer.copyFramebufferToTexture`

***

### copyTextureToTexture()

> **copyTextureToTexture**(`srcTexture`, `dstTexture`, `srcRegion`?, `dstPosition`?, `srcLevel`?, `dstLevel`?): `void`

Defined in: [three/src/renderers/common/Renderer.js:2486](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2486)

Copies data of the given source texture into a destination texture.

#### Parameters

##### srcTexture

`Texture`

The source texture.

##### dstTexture

`Texture`

The destination texture.

##### srcRegion?

`any` = `null`

A bounding box which describes the source region. Can be two or three-dimensional.

##### dstPosition?

`any` = `null`

A vector that represents the origin of the destination region. Can be two or three-dimensional.

##### srcLevel?

`number` = `0`

The source mip level to copy from.

##### dstLevel?

`number` = `0`

The destination mip level to copy to.

#### Returns

`void`

#### Inherited from

`Renderer.copyTextureToTexture`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/renderers/common/Renderer.js:2089](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2089)

Frees all internal resources of the renderer. Call this method if the renderer
is no longer in use by your app.

#### Returns

`void`

#### Inherited from

`Renderer.dispose`

***

### getActiveCubeFace()

> **getActiveCubeFace**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:1495](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1495)

Returns the active cube face.

#### Returns

`number`

The active cube face.

#### Inherited from

`Renderer.getActiveCubeFace`

***

### getActiveMipmapLevel()

> **getActiveMipmapLevel**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:1506](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1506)

Returns the active mipmap level.

#### Returns

`number`

The active mipmap level.

#### Inherited from

`Renderer.getActiveMipmapLevel`

***

### getArrayBufferAsync()

> **getArrayBufferAsync**(`attribute`): `Promise`\<`ArrayBuffer`\>

Defined in: [three/src/renderers/common/Renderer.js:1537](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1537)

Can be used to transfer buffer data from a storage buffer attribute
from the GPU to the CPU in context of compute shaders.

#### Parameters

##### attribute

`StorageBufferAttribute`

The storage buffer attribute.

#### Returns

`Promise`\<`ArrayBuffer`\>

A promise that resolves with the buffer data when the data are ready.

#### Async

#### Inherited from

`Renderer.getArrayBufferAsync`

***

### getClearAlpha()

> **getClearAlpha**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:1830](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1830)

Returns the clear alpha.

#### Returns

`number`

The clear alpha.

#### Inherited from

`Renderer.getClearAlpha`

***

### getClearColor()

> **getClearColor**(`target`): `Color`

Defined in: [three/src/renderers/common/Renderer.js:1806](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1806)

Returns the clear color.

#### Parameters

##### target

`Color`

The method writes the result in this target object.

#### Returns

`Color`

The clear color.

#### Inherited from

`Renderer.getClearColor`

***

### getClearDepth()

> **getClearDepth**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:1852](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1852)

Returns the clear depth.

#### Returns

`number`

The clear depth.

#### Inherited from

`Renderer.getClearDepth`

***

### getClearStencil()

> **getClearStencil**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:1874](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1874)

Returns the clear stencil.

#### Returns

`number`

The clear stencil.

#### Inherited from

`Renderer.getClearStencil`

***

### getColorBufferType()

> **getColorBufferType**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:1010](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1010)

Returns the color buffer type.

#### Returns

`number`

The color buffer type.

#### Inherited from

`Renderer.getColorBufferType`

***

### getContext()

> **getContext**(): `any`

Defined in: [three/src/renderers/common/Renderer.js:1548](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1548)

Returns the rendering context.

#### Returns

`any`

The rendering context.

#### Inherited from

`Renderer.getContext`

***

### getDrawingBufferSize()

> **getDrawingBufferSize**(`target`): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/renderers/common/Renderer.js:1571](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1571)

Returns the drawing buffer size in physical pixels. This method honors the pixel ratio.

#### Parameters

##### target

[`Vector2`](/reference/three/classes/vector2/)

The method writes the result in this target object.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

The drawing buffer size.

#### Inherited from

`Renderer.getDrawingBufferSize`

***

### getMaxAnisotropy()

> **getMaxAnisotropy**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:1484](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1484)

Returns the maximum available anisotropy for texture filtering.

#### Returns

`number`

The maximum available anisotropy.

#### Inherited from

`Renderer.getMaxAnisotropy`

***

### getMRT()

> **getMRT**(): `MRTNode`

Defined in: [three/src/renderers/common/Renderer.js:999](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L999)

Returns the MRT configuration.

#### Returns

`MRTNode`

The MRT configuration.

#### Inherited from

`Renderer.getMRT`

***

### getOutputRenderTarget()

> **getOutputRenderTarget**(): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/renderers/common/Renderer.js:2160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2160)

Returns the current output target.

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

The current output render target. Returns `null` if no output target is set.

#### Inherited from

`Renderer.getOutputRenderTarget`

***

### getPixelRatio()

> **getPixelRatio**(): `number`

Defined in: [three/src/renderers/common/Renderer.js:1559](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1559)

Returns the pixel ratio.

#### Returns

`number`

The pixel ratio.

#### Inherited from

`Renderer.getPixelRatio`

***

### getRenderObjectFunction()

> **getRenderObjectFunction**(): `Function`

Defined in: [three/src/renderers/common/Renderer.js:2203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2203)

Returns the current render object function.

#### Returns

`Function`

The current render object function. Returns `null` if no function is set.

#### Inherited from

`Renderer.getRenderObjectFunction`

***

### getRenderTarget()

> **getRenderTarget**(): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/renderers/common/Renderer.js:2138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2138)

Returns the current render target.

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

The render target. Returns `null` if no render target is set.

#### Inherited from

`Renderer.getRenderTarget`

***

### getScissor()

> **getScissor**(`target`): [`Vector4`](/reference/three/classes/vector4/)

Defined in: [three/src/renderers/common/Renderer.js:1697](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1697)

Returns the scissor rectangle.

#### Parameters

##### target

[`Vector4`](/reference/three/classes/vector4/)

The method writes the result in this target object.

#### Returns

[`Vector4`](/reference/three/classes/vector4/)

The scissor rectangle.

#### Inherited from

`Renderer.getScissor`

***

### getScissorTest()

> **getScissorTest**(): `boolean`

Defined in: [three/src/renderers/common/Renderer.js:1740](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1740)

Returns the scissor test value.

#### Returns

`boolean`

Whether the scissor test should be enabled or not.

#### Inherited from

`Renderer.getScissorTest`

***

### getSize()

> **getSize**(`target`): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/renderers/common/Renderer.js:1583](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1583)

Returns the renderer's size in logical pixels. This method does not honor the pixel ratio.

#### Parameters

##### target

[`Vector2`](/reference/three/classes/vector2/)

The method writes the result in this target object.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

The renderer's size in logical pixels.

#### Inherited from

`Renderer.getSize`

***

### getViewport()

> **getViewport**(`target`): [`Vector4`](/reference/three/classes/vector4/)

Defined in: [three/src/renderers/common/Renderer.js:1765](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1765)

Returns the viewport definition.

#### Parameters

##### target

[`Vector4`](/reference/three/classes/vector4/)

The method writes the result in this target object.

#### Returns

[`Vector4`](/reference/three/classes/vector4/)

The viewport definition.

#### Inherited from

`Renderer.getViewport`

***

### hasFeature()

> **hasFeature**(`name`): `boolean`

Defined in: [three/src/renderers/common/Renderer.js:2352](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2352)

Checks if the given feature is supported by the selected backend. If the
renderer has not been initialized, this method always returns `false`.

#### Parameters

##### name

`string`

The feature's name.

#### Returns

`boolean`

Whether the feature is supported or not.

#### Inherited from

`Renderer.hasFeature`

***

### hasFeatureAsync()

> **hasFeatureAsync**(`name`): `Promise`\<`boolean`\>

Defined in: [three/src/renderers/common/Renderer.js:2329](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2329)

Checks if the given feature is supported by the selected backend.

#### Parameters

##### name

`string`

The feature's name.

#### Returns

`Promise`\<`boolean`\>

A Promise that resolves with a bool that indicates whether the feature is supported or not.

#### Async

#### Inherited from

`Renderer.hasFeatureAsync`

***

### hasInitialized()

> **hasInitialized**(): `boolean`

Defined in: [three/src/renderers/common/Renderer.js:2371](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2371)

Returns `true` when the renderer has been initialized.

#### Returns

`boolean`

Whether the renderer has been initialized or not.

#### Inherited from

`Renderer.hasInitialized`

***

### init()

> **init**(): `Promise`\<`WebGPURenderer`\>

Defined in: [three/src/renderers/common/Renderer.js:723](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L723)

Initializes the renderer so it is ready for usage.

#### Returns

`Promise`\<`WebGPURenderer`\>

A Promise that resolves when the renderer has been initialized.

#### Async

#### Inherited from

`Renderer.init`

***

### initTexture()

> **initTexture**(`texture`): `void`

Defined in: [three/src/renderers/common/Renderer.js:2401](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2401)

Initializes the given texture. Useful for preloading a texture rather than waiting until first render
(which can cause noticeable lags due to decode and GPU upload overhead).

This method can only be used if the renderer has been initialized.

#### Parameters

##### texture

`Texture`

The texture.

#### Returns

`void`

#### Inherited from

`Renderer.initTexture`

***

### initTextureAsync()

> **initTextureAsync**(`texture`): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2385](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2385)

Initializes the given textures. Useful for preloading a texture rather than waiting until first render
(which can cause noticeable lags due to decode and GPU upload overhead).

#### Parameters

##### texture

`Texture`

The texture.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the texture has been initialized.

#### Async

#### Inherited from

`Renderer.initTextureAsync`

***

### isOccluded()

> **isOccluded**(`object`): `boolean`

Defined in: [three/src/renderers/common/Renderer.js:1899](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1899)

This method performs an occlusion query for the given 3D object.
It returns `true` if the given 3D object is fully occluded by other
3D objects in the scene.

#### Parameters

##### object

`Object3D`

The 3D object to test.

#### Returns

`boolean`

Whether the 3D object is fully occluded or not.

#### Inherited from

`Renderer.isOccluded`

***

### readRenderTargetPixelsAsync()

> **readRenderTargetPixelsAsync**(`renderTarget`, `x`, `y`, `width`, `height`, `textureIndex`?, `faceIndex`?): `Promise`\<`TypedArray`\>

Defined in: [three/src/renderers/common/Renderer.js:2508](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2508)

Reads pixel data from the given render target.

#### Parameters

##### renderTarget

[`RenderTarget`](/reference/three/classes/rendertarget/)

The render target to read from.

##### x

`number`

The `x` coordinate of the copy region's origin.

##### y

`number`

The `y` coordinate of the copy region's origin.

##### width

`number`

The width of the copy region.

##### height

`number`

The height of the copy region.

##### textureIndex?

`number` = `0`

The texture index of a MRT render target.

##### faceIndex?

`number` = `0`

The active cube face index.

#### Returns

`Promise`\<`TypedArray`\>

A Promise that resolves when the read has been finished. The resolve provides the read data as a typed array.

#### Async

#### Inherited from

`Renderer.readRenderTargetPixelsAsync`

***

### render()

> **render**(`scene`, `camera`): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:1134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1134)

Renders the scene or 3D object with the given camera. This method can only be called
if the renderer has been initialized.

The target of the method is the default framebuffer (meaning the canvas)
or alternatively a render target when specified via `setRenderTarget()`.

#### Parameters

##### scene

`Object3D`

The scene or 3D object to render.

##### camera

`Camera`

The camera to render the scene with.

#### Returns

`Promise`\<`any`\>

A Promise that resolve when the scene has been rendered.
Only returned when the renderer has not been initialized.

#### Inherited from

`Renderer.render`

***

### renderAsync()

> **renderAsync**(`scene`, `camera`): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:959](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L959)

Renders the scene in an async fashion.

#### Parameters

##### scene

`Object3D`

The scene or 3D object to render.

##### camera

`Camera`

The camera.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the render has been finished.

#### Async

#### Inherited from

`Renderer.renderAsync`

***

### renderObject()

> **renderObject**(`object`, `scene`, `camera`, `geometry`, `material`, `group`, `lightsNode`, `clippingContext`, `passId`?): `void`

Defined in: [three/src/renderers/common/Renderer.js:2749](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2749)

This method represents the default render object function that manages the render lifecycle
of the object.

#### Parameters

##### object

`Object3D`

The 3D object.

##### scene

[`Scene`](/reference/three/classes/scene/)

The scene the 3D object belongs to.

##### camera

`Camera`

The camera the object should be rendered with.

##### geometry

`BufferGeometry`

The object's geometry.

##### material

`Material`

The object's material.

##### group

`any`

Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.

##### lightsNode

`LightsNode`

The current lights node.

##### clippingContext

`ClippingContext` = `null`

The clipping context.

##### passId?

`string` = `null`

An optional ID for identifying the pass.

#### Returns

`void`

#### Inherited from

`Renderer.renderObject`

***

### resolveTimestampsAsync()

> **resolveTimestampsAsync**(`type`): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:2337](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2337)

#### Parameters

##### type

`string` = `'render'`

#### Returns

`Promise`\<`any`\>

#### Inherited from

`Renderer.resolveTimestampsAsync`

***

### setAnimationLoop()

> **setAnimationLoop**(`callback`): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:1521](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1521)

Applications are advised to always define the animation loop
with this method and not manually with `requestAnimationFrame()`
for best compatibility.

#### Parameters

##### callback

`Function`

The application's animation loop.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the set has been executed.

#### Async

#### Inherited from

`Renderer.setAnimationLoop`

***

### setClearAlpha()

> **setClearAlpha**(`alpha`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1841](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1841)

Defines the clear alpha.

#### Parameters

##### alpha

`number`

The clear alpha.

#### Returns

`void`

#### Inherited from

`Renderer.setClearAlpha`

***

### setClearColor()

> **setClearColor**(`color`, `alpha`?): `void`

Defined in: [three/src/renderers/common/Renderer.js:1818](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1818)

Defines the clear color and optionally the clear alpha.

#### Parameters

##### color

`Color`

The clear color.

##### alpha?

`number` = `1`

The clear alpha.

#### Returns

`void`

#### Inherited from

`Renderer.setClearColor`

***

### setClearDepth()

> **setClearDepth**(`depth`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1863](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1863)

Defines the clear depth.

#### Parameters

##### depth

`number`

The clear depth.

#### Returns

`void`

#### Inherited from

`Renderer.setClearDepth`

***

### setClearStencil()

> **setClearStencil**(`stencil`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1885](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1885)

Defines the clear stencil.

#### Parameters

##### stencil

`number`

The clear stencil.

#### Returns

`void`

#### Inherited from

`Renderer.setClearStencil`

***

### setDrawingBufferSize()

> **setDrawingBufferSize**(`width`, `height`, `pixelRatio`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1617](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1617)

This method allows to define the drawing buffer size by specifying
width, height and pixel ratio all at once. The size of the drawing
buffer is computed with this formula:
```js
size.x = width * pixelRatio;
size.y = height * pixelRatio;
```

#### Parameters

##### width

`number`

The width in logical pixels.

##### height

`number`

The height in logical pixels.

##### pixelRatio

`number`

The pixel ratio.

#### Returns

`void`

#### Inherited from

`Renderer.setDrawingBufferSize`

***

### setMRT()

> **setMRT**(`mrt`): `Renderer`

Defined in: [three/src/renderers/common/Renderer.js:986](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L986)

Sets the given MRT configuration.

#### Parameters

##### mrt

`MRTNode`

The MRT node to set.

#### Returns

`Renderer`

A reference to this renderer.

#### Inherited from

`Renderer.setMRT`

***

### setOpaqueSort()

> **setOpaqueSort**(`method`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1673](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1673)

Defines a manual sort function for the opaque render list.
Pass `null` to use the default sort.

#### Parameters

##### method

`Function`

The sort function.

#### Returns

`void`

#### Inherited from

`Renderer.setOpaqueSort`

***

### setOutputRenderTarget()

> **setOutputRenderTarget**(`renderTarget`): `void`

Defined in: [three/src/renderers/common/Renderer.js:2149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2149)

Sets the output render target for the renderer.

#### Parameters

##### renderTarget

`any`

The render target to set as the output target.

#### Returns

`void`

#### Inherited from

`Renderer.setOutputRenderTarget`

***

### setPixelRatio()

> **setPixelRatio**(`value`?): `void`

Defined in: [three/src/renderers/common/Renderer.js:1594](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1594)

Sets the given pixel ratio and resizes the canvas if necessary.

#### Parameters

##### value?

`number` = `1`

The pixel ratio.

#### Returns

`void`

#### Inherited from

`Renderer.setPixelRatio`

***

### setRenderObjectFunction()

> **setRenderObjectFunction**(`renderObjectFunction`): `void`

Defined in: [three/src/renderers/common/Renderer.js:2192](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2192)

Sets the given render object function. Calling this method overwrites the default implementation
which is Renderer#renderObject. Defining a custom function can be useful
if you want to modify the way objects are rendered. For example you can define things like "every
object that has material of a certain type should perform a pre-pass with a special overwrite material".
The custom function must always call `renderObject()` in its implementation.

Use `null` as the first argument to reset the state.

#### Parameters

##### renderObjectFunction

`renderObjectFunction`

The render object function.

#### Returns

`void`

#### Inherited from

`Renderer.setRenderObjectFunction`

***

### setRenderTarget()

> **setRenderTarget**(`renderTarget`, `activeCubeFace`?, `activeMipmapLevel`?): `void`

Defined in: [three/src/renderers/common/Renderer.js:2125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L2125)

Sets the given render target. Calling this method means the renderer does not
target the default framebuffer (meaning the canvas) anymore but a custom framebuffer.
Use `null` as the first argument to reset the state.

#### Parameters

##### renderTarget

[`RenderTarget`](/reference/three/classes/rendertarget/)

The render target to set.

##### activeCubeFace?

`number` = `0`

The active cube face.

##### activeMipmapLevel?

`number` = `0`

The active mipmap level.

#### Returns

`void`

#### Inherited from

`Renderer.setRenderTarget`

***

### setScissor()

> **setScissor**(`x`, `y`, `width`, `height`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1719](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1719)

Defines the scissor rectangle.

#### Parameters

##### x

The horizontal coordinate for the lower left corner of the box in logical pixel unit.
Instead of passing four arguments, the method also works with a single four-dimensional vector.

`number` | [`Vector4`](/reference/three/classes/vector4/)

##### y

`number`

The vertical coordinate for the lower left corner of the box in logical pixel unit.

##### width

`number`

The width of the scissor box in logical pixel unit.

##### height

`number`

The height of the scissor box in logical pixel unit.

#### Returns

`void`

#### Inherited from

`Renderer.setScissor`

***

### setScissorTest()

> **setScissorTest**(`boolean`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1751](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1751)

Defines the scissor test.

#### Parameters

##### boolean

`boolean`

Whether the scissor test should be enabled or not.

#### Returns

`void`

#### Inherited from

`Renderer.setScissorTest`

***

### setSize()

> **setSize**(`width`, `height`, `updateStyle`?): `void`

Defined in: [three/src/renderers/common/Renderer.js:1643](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1643)

Sets the size of the renderer.

#### Parameters

##### width

`number`

The width in logical pixels.

##### height

`number`

The height in logical pixels.

##### updateStyle?

`boolean` = `true`

Whether to update the `style` attribute of the canvas or not.

#### Returns

`void`

#### Inherited from

`Renderer.setSize`

***

### setTransparentSort()

> **setTransparentSort**(`method`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1685](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1685)

Defines a manual sort function for the transparent render list.
Pass `null` to use the default sort.

#### Parameters

##### method

`Function`

The sort function.

#### Returns

`void`

#### Inherited from

`Renderer.setTransparentSort`

***

### setViewport()

> **setViewport**(`x`, `y`, `width`, `height`, `minDepth`, `maxDepth`): `void`

Defined in: [three/src/renderers/common/Renderer.js:1781](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L1781)

Defines the viewport.

#### Parameters

##### x

The horizontal coordinate for the lower left corner of the viewport origin in logical pixel unit.

`number` | [`Vector4`](/reference/three/classes/vector4/)

##### y

`number`

The vertical coordinate for the lower left corner of the viewport origin  in logical pixel unit.

##### width

`number`

The width of the viewport in logical pixel unit.

##### height

`number`

The height of the viewport in logical pixel unit.

##### minDepth

`number` = `0`

The minimum depth value of the viewport. WebGPU only.

##### maxDepth

`number` = `1`

The maximum depth value of the viewport. WebGPU only.

#### Returns

`void`

#### Inherited from

`Renderer.setViewport`

***

### waitForGPU()

> **waitForGPU**(): `Promise`\<`any`\>

Defined in: [three/src/renderers/common/Renderer.js:974](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/Renderer.js#L974)

Can be used to synchronize CPU operations with GPU tasks. So when this method is called,
the CPU waits for the GPU to complete its operation (e.g. a compute task).

#### Returns

`Promise`\<`any`\>

A Promise that resolves when synchronization has been finished.

#### Async

#### Inherited from

`Renderer.waitForGPU`

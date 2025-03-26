---
editUrl: false
next: false
prev: false
title: "WebGLRenderTarget"
---

Defined in: [three/src/renderers/WebGLRenderTarget.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderTarget.js#L8)

A render target used in context of [WebGLRenderer](/reference/three/classes/webglrenderer/).

## Extends

- [`RenderTarget`](/reference/three/classes/rendertarget/)

## Extended by

- [`WebGLArrayRenderTarget`](/reference/three/classes/webglarrayrendertarget/)
- [`WebGL3DRenderTarget`](/reference/three/classes/webgl3drendertarget/)
- [`WebGLCubeRenderTarget`](/reference/three/classes/webglcuberendertarget/)

## Constructors

### Constructor

> **new WebGLRenderTarget**(`width`?, `height`?, `options`?): `WebGLRenderTarget`

Defined in: [three/src/renderers/WebGLRenderTarget.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderTarget.js#L17)

Constructs a new 3D render target.

#### Parameters

##### width?

`number` = `1`

The width of the render target.

##### height?

`number` = `1`

The height of the render target.

##### options?

The configuration object.

#### Returns

`WebGLRenderTarget`

#### Overrides

[`RenderTarget`](/reference/three/classes/rendertarget/).[`constructor`](/reference/three/classes/rendertarget/#constructor)

## Properties

### \_depthTexture

> **\_depthTexture**: `any`

Defined in: [three/src/core/RenderTarget.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L180)

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`_depthTexture`](/reference/three/classes/rendertarget/#_depthtexture)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`_listeners`](/reference/three/classes/rendertarget/#_listeners)

***

### depth

> **depth**: `number`

Defined in: [three/src/core/RenderTarget.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L82)

The depth of the render target.

#### Default

```ts
1
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`depth`](/reference/three/classes/rendertarget/#depth)

***

### depthBuffer

> **depthBuffer**: `boolean`

Defined in: [three/src/core/RenderTarget.js:154](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L154)

Whether to allocate a depth buffer or not.

#### Default

```ts
true
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`depthBuffer`](/reference/three/classes/rendertarget/#depthbuffer)

***

### height

> **height**: `number`

Defined in: [three/src/core/RenderTarget.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L74)

The height of the render target.

#### Default

```ts
1
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`height`](/reference/three/classes/rendertarget/#height)

***

### isRenderTarget

> `readonly` **isRenderTarget**: `boolean`

Defined in: [three/src/core/RenderTarget.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L58)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`isRenderTarget`](/reference/three/classes/rendertarget/#isrendertarget)

***

### isWebGLRenderTarget

> `readonly` **isWebGLRenderTarget**: `boolean`

Defined in: [three/src/renderers/WebGLRenderTarget.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderTarget.js#L28)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### resolveDepthBuffer

> **resolveDepthBuffer**: `boolean`

Defined in: [three/src/core/RenderTarget.js:170](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L170)

Whether to resolve the depth buffer or not.

#### Default

```ts
true
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`resolveDepthBuffer`](/reference/three/classes/rendertarget/#resolvedepthbuffer)

***

### resolveStencilBuffer

> **resolveStencilBuffer**: `boolean`

Defined in: [three/src/core/RenderTarget.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L178)

Whether to resolve the stencil buffer or not.

#### Default

```ts
true
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`resolveStencilBuffer`](/reference/three/classes/rendertarget/#resolvestencilbuffer)

***

### samples

> **samples**: `number`

Defined in: [three/src/core/RenderTarget.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L190)

The number of MSAA samples.

A value of `0` disables MSAA.

#### Default

```ts
0
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`samples`](/reference/three/classes/rendertarget/#samples)

***

### scissor

> **scissor**: [`Vector4`](/reference/three/classes/vector4/)

Defined in: [three/src/core/RenderTarget.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L91)

A rectangular area inside the render target's viewport. Fragments that are
outside the area will be discarded.

#### Default

```ts
(0,0,width,height)
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`scissor`](/reference/three/classes/rendertarget/#scissor)

***

### scissorTest

> **scissorTest**: `boolean`

Defined in: [three/src/core/RenderTarget.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L100)

Indicates whether the scissor test should be enabled when rendering into
this render target or not.

#### Default

```ts
false
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`scissorTest`](/reference/three/classes/rendertarget/#scissortest)

***

### stencilBuffer

> **stencilBuffer**: `boolean`

Defined in: [three/src/core/RenderTarget.js:162](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L162)

Whether to allocate a stencil buffer or not.

#### Default

```ts
false
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`stencilBuffer`](/reference/three/classes/rendertarget/#stencilbuffer)

***

### textures

> **textures**: [`Texture`](/reference/three/classes/texture/)[]

Defined in: [three/src/core/RenderTarget.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L137)

An array of textures. Each color attachment is represented as a separate texture.
Has at least a single entry for the default color attachment.

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`textures`](/reference/three/classes/rendertarget/#textures)

***

### viewport

> **viewport**: [`Vector4`](/reference/three/classes/vector4/)

Defined in: [three/src/core/RenderTarget.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L108)

A rectangular area representing the render target's viewport.

#### Default

```ts
(0,0,width,height)
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`viewport`](/reference/three/classes/rendertarget/#viewport)

***

### width

> **width**: `number`

Defined in: [three/src/core/RenderTarget.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L66)

The width of the render target.

#### Default

```ts
1
```

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`width`](/reference/three/classes/rendertarget/#width)

## Accessors

### depthTexture

#### Get Signature

> **get** **depthTexture**(): `DepthTexture`

Defined in: [three/src/core/RenderTarget.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L228)

Instead of saving the depth in a renderbuffer, a texture
can be used instead which is useful for further processing
e.g. in context of post-processing.

##### Default

```ts
null
```

##### Returns

`DepthTexture`

#### Set Signature

> **set** **depthTexture**(`current`): `void`

Defined in: [three/src/core/RenderTarget.js:211](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L211)

##### Parameters

###### current

`DepthTexture`

##### Returns

`void`

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`depthTexture`](/reference/three/classes/rendertarget/#depthtexture)

***

### texture

#### Get Signature

> **get** **texture**(): [`Texture`](/reference/three/classes/texture/)

Defined in: [three/src/core/RenderTarget.js:199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L199)

The texture representing the default color attachment.

##### Returns

[`Texture`](/reference/three/classes/texture/)

#### Set Signature

> **set** **texture**(`value`): `void`

Defined in: [three/src/core/RenderTarget.js:205](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L205)

##### Parameters

###### value

[`Texture`](/reference/three/classes/texture/)

##### Returns

`void`

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`texture`](/reference/three/classes/rendertarget/#texture)

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

[`RenderTarget`](/reference/three/classes/rendertarget/).[`addEventListener`](/reference/three/classes/rendertarget/#addeventlistener)

***

### clone()

> **clone**(): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/core/RenderTarget.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L271)

Returns a new render target with copied values from this instance.

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

A clone of this instance.

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`clone`](/reference/three/classes/rendertarget/#clone)

***

### copy()

> **copy**(`source`): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/core/RenderTarget.js:285](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L285)

Copies the settings of the given render target. This is a structural copy so
no resources are shared between render targets after the copy. That includes
all MRT textures and the depth texture.

#### Parameters

##### source

[`RenderTarget`](/reference/three/classes/rendertarget/)

The render target to copy.

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

A reference to this instance.

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`copy`](/reference/three/classes/rendertarget/#copy)

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

[`RenderTarget`](/reference/three/classes/rendertarget/).[`dispatchEvent`](/reference/three/classes/rendertarget/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/core/RenderTarget.js:331](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L331)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

#### Fires

RenderTarget#dispose

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`dispose`](/reference/three/classes/rendertarget/#dispose)

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

[`RenderTarget`](/reference/three/classes/rendertarget/).[`hasEventListener`](/reference/three/classes/rendertarget/#haseventlistener)

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

[`RenderTarget`](/reference/three/classes/rendertarget/).[`removeEventListener`](/reference/three/classes/rendertarget/#removeeventlistener)

***

### setSize()

> **setSize**(`width`, `height`, `depth`?): `void`

Defined in: [three/src/core/RenderTarget.js:241](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L241)

Sets the size of this render target.

#### Parameters

##### width

`number`

The width.

##### height

`number`

The height.

##### depth?

`number` = `1`

The depth.

#### Returns

`void`

#### Inherited from

[`RenderTarget`](/reference/three/classes/rendertarget/).[`setSize`](/reference/three/classes/rendertarget/#setsize)

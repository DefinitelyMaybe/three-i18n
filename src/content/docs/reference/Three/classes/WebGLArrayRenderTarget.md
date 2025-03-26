---
editUrl: false
next: false
prev: false
title: "WebGLArrayRenderTarget"
---

Defined in: [three/src/renderers/WebGLArrayRenderTarget.js:9](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLArrayRenderTarget.js#L9)

An array render target used in context of [WebGLRenderer](/reference/three/classes/webglrenderer/).

## Extends

- [`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

## Constructors

### Constructor

> **new WebGLArrayRenderTarget**(`width`?, `height`?, `depth`?, `options`?): `WebGLArrayRenderTarget`

Defined in: [three/src/renderers/WebGLArrayRenderTarget.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLArrayRenderTarget.js#L19)

Constructs a new array render target.

#### Parameters

##### width?

`number` = `1`

The width of the render target.

##### height?

`number` = `1`

The height of the render target.

##### depth?

`number` = `1`

The height of the render target.

##### options?

The configuration object.

#### Returns

`WebGLArrayRenderTarget`

#### Overrides

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`constructor`](/reference/three/classes/webglrendertarget/#constructor)

## Properties

### \_depthTexture

> **\_depthTexture**: `any`

Defined in: [three/src/core/RenderTarget.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L180)

#### Inherited from

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`_depthTexture`](/reference/three/classes/webglrendertarget/#_depthtexture)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`_listeners`](/reference/three/classes/webglrendertarget/#_listeners)

***

### depth

> **depth**: `number`

Defined in: [three/src/renderers/WebGLArrayRenderTarget.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLArrayRenderTarget.js#L32)

The depth of the render target.

#### Default

```ts
1
```

#### Inherited from

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`depth`](/reference/three/classes/webglrendertarget/#depth)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`depthBuffer`](/reference/three/classes/webglrendertarget/#depthbuffer)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`height`](/reference/three/classes/webglrendertarget/#height)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`isRenderTarget`](/reference/three/classes/webglrendertarget/#isrendertarget)

***

### isWebGLArrayRenderTarget

> `readonly` **isWebGLArrayRenderTarget**: `boolean`

Defined in: [three/src/renderers/WebGLArrayRenderTarget.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLArrayRenderTarget.js#L30)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isWebGLRenderTarget

> `readonly` **isWebGLRenderTarget**: `boolean`

Defined in: [three/src/renderers/WebGLRenderTarget.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderTarget.js#L28)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`isWebGLRenderTarget`](/reference/three/classes/webglrendertarget/#iswebglrendertarget)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`resolveDepthBuffer`](/reference/three/classes/webglrendertarget/#resolvedepthbuffer)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`resolveStencilBuffer`](/reference/three/classes/webglrendertarget/#resolvestencilbuffer)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`samples`](/reference/three/classes/webglrendertarget/#samples)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`scissor`](/reference/three/classes/webglrendertarget/#scissor)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`scissorTest`](/reference/three/classes/webglrendertarget/#scissortest)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`stencilBuffer`](/reference/three/classes/webglrendertarget/#stencilbuffer)

***

### textures

> **textures**: [`Texture`](/reference/three/classes/texture/)[]

Defined in: [three/src/core/RenderTarget.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L137)

An array of textures. Each color attachment is represented as a separate texture.
Has at least a single entry for the default color attachment.

#### Inherited from

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`textures`](/reference/three/classes/webglrendertarget/#textures)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`viewport`](/reference/three/classes/webglrendertarget/#viewport)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`width`](/reference/three/classes/webglrendertarget/#width)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`depthTexture`](/reference/three/classes/webglrendertarget/#depthtexture)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`texture`](/reference/three/classes/webglrendertarget/#texture)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`addEventListener`](/reference/three/classes/webglrendertarget/#addeventlistener)

***

### clone()

> **clone**(): [`RenderTarget`](/reference/three/classes/rendertarget/)

Defined in: [three/src/core/RenderTarget.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/RenderTarget.js#L271)

Returns a new render target with copied values from this instance.

#### Returns

[`RenderTarget`](/reference/three/classes/rendertarget/)

A clone of this instance.

#### Inherited from

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`clone`](/reference/three/classes/webglrendertarget/#clone)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`copy`](/reference/three/classes/webglrendertarget/#copy)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`dispatchEvent`](/reference/three/classes/webglrendertarget/#dispatchevent)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`dispose`](/reference/three/classes/webglrendertarget/#dispose)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`hasEventListener`](/reference/three/classes/webglrendertarget/#haseventlistener)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`removeEventListener`](/reference/three/classes/webglrendertarget/#removeeventlistener)

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

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/).[`setSize`](/reference/three/classes/webglrendertarget/#setsize)

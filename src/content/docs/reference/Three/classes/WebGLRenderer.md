---
editUrl: false
next: false
prev: false
title: "WebGLRenderer"
---

Defined in: [three/src/renderers/WebGLRenderer.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L63)

This renderer uses WebGL 2 to display scenes.

WebGL 1 is not supported since `r163`.

## Constructors

### Constructor

> **new WebGLRenderer**(`parameters`): `WebGLRenderer`

Defined in: [three/src/renderers/WebGLRenderer.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L70)

Constructs a new WebGL renderer.

#### Parameters

##### parameters

The configuration parameter.

#### Returns

`WebGLRenderer`

## Properties

### \_outputColorSpace

> **\_outputColorSpace**: `string`

Defined in: [three/src/renderers/WebGLRenderer.js:276](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L276)

***

### autoClear

> **autoClear**: `boolean`

Defined in: [three/src/renderers/WebGLRenderer.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L175)

Whether the renderer should automatically clear its output before rendering a frame or not.

#### Default

```ts
true
```

***

### autoClearColor

> **autoClearColor**: `boolean`

Defined in: [three/src/renderers/WebGLRenderer.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L184)

If [WebGLRenderer#autoClear](/reference/three/classes/webglrenderer/#autoclear) set to `true`, whether the renderer should clear
the color buffer or not.

#### Default

```ts
true
```

***

### autoClearDepth

> **autoClearDepth**: `boolean`

Defined in: [three/src/renderers/WebGLRenderer.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L193)

If [WebGLRenderer#autoClear](/reference/three/classes/webglrenderer/#autoclear) set to `true`, whether the renderer should clear
the depth buffer or not.

#### Default

```ts
true
```

***

### autoClearStencil

> **autoClearStencil**: `boolean`

Defined in: [three/src/renderers/WebGLRenderer.js:202](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L202)

If [WebGLRenderer#autoClear](/reference/three/classes/webglrenderer/#autoclear) set to `true`, whether the renderer should clear
the stencil buffer or not.

#### Default

```ts
true
```

***

### clear()

> **clear**: (`color`?, `depth`?, `stencil`?) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:876](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L876)

Tells the renderer to clear its color, depth or stencil drawing buffer(s).
This method initializes the buffers to the current clear color values.

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

`void`

***

### clearColor()

> **clearColor**: () => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:957](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L957)

Clears the color buffer. Equivalent to calling `renderer.clear( true, false, false )`.

#### Returns

`void`

***

### clearDepth()

> **clearDepth**: () => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:966](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L966)

Clears the depth buffer. Equivalent to calling `renderer.clear( false, true, false )`.

#### Returns

`void`

***

### clearStencil()

> **clearStencil**: () => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:975](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L975)

Clears the stencil buffer. Equivalent to calling `renderer.clear( false, false, true )`.

#### Returns

`void`

***

### clippingPlanes

> **clippingPlanes**: `Plane`[]

Defined in: [three/src/renderers/WebGLRenderer.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L228)

User-defined clipping planes specified in world space. These planes apply globally.
Points in space whose dot product with the plane is negative are cut away.

***

### compile()

> **compile**: (`scene`, `camera`, `targetScene`?) => `Set`\<`any`\>

Defined in: [three/src/renderers/WebGLRenderer.js:1302](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L1302)

Compiles all materials in the scene with the camera. This is useful to precompile shaders
before the first rendering. If you want to add a 3D object to an existing scene, use the third
optional parameter for applying the target scene.

Note that the (target) scene's lighting and environment must be configured before calling this method.

#### Parameters

##### scene

`Object3D`

The scene or another type of 3D object to precompile.

##### camera

`Camera`

The camera.

##### targetScene?

`Scene` = `null`

The target scene.

#### Returns

`Set`\<`any`\>

The precompiled materials.

***

### compileAsync()

> **compileAsync**: (`scene`, `camera`, `targetScene`?) => `Promise`\<`any`\>

Defined in: [three/src/renderers/WebGLRenderer.js:1409](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L1409)

Asynchronous version of [WebGLRenderer#compile](/reference/three/classes/webglrenderer/#compile).

This method makes use of the `KHR_parallel_shader_compile` WebGL extension. Hence,
it is recommended to use this version of `compile()` whenever possible.

#### Parameters

##### scene

`Object3D`

The scene or another type of 3D object to precompile.

##### camera

`Camera`

The camera.

##### targetScene?

`Scene` = `null`

The target scene.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the given scene can be rendered without unnecessary stalling due to shader compilation.

#### Async

***

### copyFramebufferToTexture()

> **copyFramebufferToTexture**: (`texture`, `position`, `level`?) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:3003](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3003)

Copies pixels from the current bound framebuffer into the given texture.

#### Parameters

##### texture

`FramebufferTexture`

The texture.

##### position

`Vector2` = `null`

The start position of the copy operation.

##### level?

`number` = `0`

The mip level. The default represents the base mip.

#### Returns

`void`

***

### copyTextureToTexture()

> **copyTextureToTexture**: (`srcTexture`, `dstTexture`, `srcRegion`?, `dstPosition`?, `srcLevel`, `dstLevel`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:3036](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3036)

Copies data of the given source texture into a destination texture.

When using render target textures as `srcTexture` and `dstTexture`, you must make sure both render targets are initialized
[WebGLRenderer#initRenderTarget](/reference/three/classes/webglrenderer/#initrendertarget).

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

The source mipmap level to copy.

##### dstLevel?

`number` = `null`

The destination mipmap level.

#### Returns

`void`

***

### copyTextureToTexture3D()

> **copyTextureToTexture3D**: (`srcTexture`, `dstTexture`, `srcRegion`, `dstPosition`, `level`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:3288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3288)

#### Parameters

##### srcTexture

`any`

##### dstTexture

`any`

##### srcRegion

`any` = `null`

##### dstPosition

`any` = `null`

##### level

`number` = `0`

#### Returns

`void`

***

### debug

> **debug**: `any`

Defined in: [three/src/renderers/WebGLRenderer.js:153](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L153)

A object with debug configuration settings.

- `checkShaderErrors`: If it is `true`, defines whether material shader programs are
checked for errors during compilation and linkage process. It may be useful to disable
this check in production for performance gain. It is strongly recommended to keep these
checks enabled during development. If the shader does not compile and link - it will not
work and associated material will not render.
- `onShaderError(gl, program, glVertexShader,glFragmentShader)`: A callback function that
can be used for custom error reporting. The callback receives the WebGL context, an instance
of WebGLProgram as well two instances of WebGLShader representing the vertex and fragment shader.
Assigning a custom function disables the default error reporting.

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:985](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L985)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### domElement

> **domElement**: `DOMElement`

Defined in: [three/src/renderers/WebGLRenderer.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L136)

A canvas where the renderer draws its output.This is automatically created by the renderer
in the constructor (if not provided already); you just need to add it to your page like so:
```js
document.body.appendChild( renderer.domElement );
```

***

### forceContextLoss()

> **forceContextLoss**: () => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:557](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L557)

Simulates a loss of the WebGL context. This requires support for the `WEBGL_lose_context` extension.

#### Returns

`void`

***

### forceContextRestore()

> **forceContextRestore**: () => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:567](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L567)

Simulates a restore of the WebGL context. This requires support for the `WEBGL_lose_context` extension.

#### Returns

`void`

***

### getActiveCubeFace()

> **getActiveCubeFace**: () => `number`

Defined in: [three/src/renderers/WebGLRenderer.js:2615](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L2615)

Returns the active cube face.

#### Returns

`number`

The active cube face.

***

### getActiveMipmapLevel()

> **getActiveMipmapLevel**: () => `number`

Defined in: [three/src/renderers/WebGLRenderer.js:2626](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L2626)

Returns the active mipmap level.

#### Returns

`number`

The active mipmap level.

***

### getClearAlpha()

> **getClearAlpha**: () => `number`

Defined in: [three/src/renderers/WebGLRenderer.js:851](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L851)

Returns the clear alpha. Ranges within `[0,1]`.

#### Returns

`number`

The clear alpha.

***

### getClearColor()

> **getClearColor**: (`target`) => [`Color`](/reference/three/classes/color/)

Defined in: [three/src/renderers/WebGLRenderer.js:828](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L828)

Returns the clear color.

#### Parameters

##### target

[`Color`](/reference/three/classes/color/)

The method writes the result in this target object.

#### Returns

[`Color`](/reference/three/classes/color/)

The clear color.

***

### getContext()

> **getContext**: () => `WebGL2RenderingContext`

Defined in: [three/src/renderers/WebGLRenderer.js:537](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L537)

Returns the rendering context.

#### Returns

`WebGL2RenderingContext`

The rendering context.

***

### getContextAttributes()

> **getContextAttributes**: () => `WebGLContextAttributes`

Defined in: [three/src/renderers/WebGLRenderer.js:548](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L548)

Returns the rendering context attributes.

#### Returns

`WebGLContextAttributes`

The rendering context attributes.

***

### getCurrentViewport()

> **getCurrentViewport**: (`target`) => `Vector2`

Defined in: [three/src/renderers/WebGLRenderer.js:692](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L692)

Returns the current viewport definition.

#### Parameters

##### target

`Vector2`

The method writes the result in this target object.

#### Returns

`Vector2`

The current viewport definition.

***

### getDrawingBufferSize()

> **getDrawingBufferSize**: (`target`) => `Vector2`

Defined in: [three/src/renderers/WebGLRenderer.js:653](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L653)

Returns the drawing buffer size in physical pixels. This method honors the pixel ratio.

#### Parameters

##### target

`Vector2`

The method writes the result in this target object.

#### Returns

`Vector2`

The drawing buffer size.

***

### getPixelRatio()

> **getPixelRatio**: () => `number`

Defined in: [three/src/renderers/WebGLRenderer.js:579](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L579)

Returns the pixel ratio.

#### Returns

`number`

The pixel ratio.

***

### getRenderTarget()

> **getRenderTarget**: () => [`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

Defined in: [three/src/renderers/WebGLRenderer.js:2638](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L2638)

Returns the active render target.

#### Returns

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

The active render target. Returns `null` if no render target
is currently set.

***

### getScissor()

> **getScissor**: (`target`) => [`Vector4`](/reference/three/classes/vector4/)

Defined in: [three/src/renderers/WebGLRenderer.js:741](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L741)

Returns the scissor region.

#### Parameters

##### target

[`Vector4`](/reference/three/classes/vector4/)

The method writes the result in this target object.

#### Returns

[`Vector4`](/reference/three/classes/vector4/)

The scissor region.

***

### getScissorTest()

> **getScissorTest**: () => `boolean`

Defined in: [three/src/renderers/WebGLRenderer.js:777](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L777)

Returns `true` if the scissor test is enabled.

#### Returns

`boolean`

Whether the scissor test is enabled or not.

***

### getSize()

> **getSize**: (`target`) => `Vector2`

Defined in: [three/src/renderers/WebGLRenderer.js:606](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L606)

Returns the renderer's size in logical pixels. This method does not honor the pixel ratio.

#### Parameters

##### target

`Vector2`

The method writes the result in this target object.

#### Returns

`Vector2`

The renderer's size in logical pixels.

***

### getViewport()

> **getViewport**: (`target`) => [`Vector4`](/reference/three/classes/vector4/)

Defined in: [three/src/renderers/WebGLRenderer.js:704](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L704)

Returns the viewport definition.

#### Parameters

##### target

[`Vector4`](/reference/three/classes/vector4/)

The method writes the result in this target object.

#### Returns

[`Vector4`](/reference/three/classes/vector4/)

The viewport definition.

***

### initRenderTarget()

> **initRenderTarget**: (`target`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:3304](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3304)

Initializes the given WebGLRenderTarget memory. Useful for initializing a render target so data
can be copied into it using [WebGLRenderer#copyTextureToTexture](/reference/three/classes/webglrenderer/#copytexturetotexture) before it has been
rendered to.

#### Parameters

##### target

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

The render target.

#### Returns

`void`

***

### initTexture()

> **initTexture**: (`texture`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:3320](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3320)

Initializes the given texture. Useful for preloading a texture rather than waiting until first
render (which can cause noticeable lags due to decode and GPU upload overhead).

#### Parameters

##### texture

`Texture`

The texture.

#### Returns

`void`

***

### isWebGLRenderer

> `readonly` **isWebGLRenderer**: `boolean`

Defined in: [three/src/renderers/WebGLRenderer.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L93)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### localClippingEnabled

> **localClippingEnabled**: `boolean`

Defined in: [three/src/renderers/WebGLRenderer.js:236](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L236)

Whether the renderer respects object-level clipping planes or not.

#### Default

```ts
false
```

***

### readRenderTargetPixels()

> **readRenderTargetPixels**: (`renderTarget`, `x`, `y`, `width`, `height`, `buffer`, `activeCubeFaceIndex`?) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:2846](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L2846)

Reads the pixel data from the given render target into the given buffer.

#### Parameters

##### renderTarget

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

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

##### buffer

`TypedArray`

The result buffer.

##### activeCubeFaceIndex?

`number`

The active cube face index.

#### Returns

`void`

***

### readRenderTargetPixelsAsync()

> **readRenderTargetPixelsAsync**: (`renderTarget`, `x`, `y`, `width`, `height`, `buffer`, `activeCubeFaceIndex`?) => `Promise`\<`TypedArray`\>

Defined in: [three/src/renderers/WebGLRenderer.js:2923](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L2923)

Asynchronous, non-blocking version of [WebGLRenderer#readRenderTargetPixels](/reference/three/classes/webglrenderer/#readrendertargetpixels).

It is recommended to use this version of `readRenderTargetPixels()` whenever possible.

#### Parameters

##### renderTarget

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

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

##### buffer

`TypedArray`

The result buffer.

##### activeCubeFaceIndex?

`number`

The active cube face index.

#### Returns

`Promise`\<`TypedArray`\>

A Promise that resolves when the read has been finished. The resolve provides the read data as a typed array.

#### Async

***

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:1524](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L1524)

Renders the given scene (or other type of 3D object) using the given camera.

The render is done to a previously specified render target set by calling [WebGLRenderer#setRenderTarget](/reference/three/classes/webglrenderer/#setrendertarget)
or to the canvas as usual.

By default render buffers are cleared before rendering but you can prevent
this by setting the property `autoClear` to `false`. If you want to prevent
only certain buffers being cleared you can `autoClearColor`, `autoClearDepth`
or `autoClearStencil` to `false`. To force a clear, use [WebGLRenderer#clear](/reference/three/classes/webglrenderer/#clear).

#### Parameters

##### scene

`Object3D`

The scene to render.

##### camera

`Camera`

The camera.

#### Returns

`void`

***

### renderBufferDirect()

> **renderBufferDirect**: (`camera`, `scene`, `geometry`, `material`, `object`, `group`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:1096](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L1096)

#### Parameters

##### camera

`any`

##### scene

`any`

##### geometry

`any`

##### material

`any`

##### object

`any`

##### group

`any`

#### Returns

`void`

***

### resetState()

> **resetState**: () => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:3349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3349)

Can be used to reset the internal WebGL state. This method is mostly
relevant for applications which share a single WebGL context across
multiple WebGL libraries.

#### Returns

`void`

***

### setAnimationLoop()

> **setAnimationLoop**: (`callback`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:1496](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L1496)

#### Parameters

##### callback

`any`

#### Returns

`void`

***

### setClearAlpha()

> **setClearAlpha**: (...`args`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:862](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L862)

Sets the clear alpha.

#### Parameters

##### args

...`any`

#### Returns

`void`

***

### setClearColor()

> **setClearColor**: (...`args`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:840](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L840)

Sets the clear color and alpha.

#### Parameters

##### args

...`any`

#### Returns

`void`

***

### setDrawingBufferSize()

> **setDrawingBufferSize**: (`width`, `height`, `pixelRatio`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:672](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L672)

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

***

### setOpaqueSort()

> **setOpaqueSort**: (`method`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:802](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L802)

Sets a custom opaque sort function for the render lists. Pass `null`
to use the default `painterSortStable` function.

#### Parameters

##### method

`Function`

The opaque sort function.

#### Returns

`void`

***

### setPixelRatio()

> **setPixelRatio**: (`value`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:590](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L590)

Sets the given pixel ratio and resizes the canvas if necessary.

#### Parameters

##### value

`number`

The pixel ratio.

#### Returns

`void`

***

### setRenderTarget()

> **setRenderTarget**: (`renderTarget`, `activeCubeFace`?, `activeMipmapLevel`?) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:2683](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L2683)

Sets the active rendertarget.

#### Parameters

##### renderTarget

[`WebGLRenderTarget`](/reference/three/classes/webglrendertarget/)

The render target to set. When `null` is given,
the canvas is set as the active render target instead.

##### activeCubeFace?

`number` = `0`

The active cube face when using a cube render target.
Indicates the z layer to render in to when using 3D or array render targets.

##### activeMipmapLevel?

`number` = `0`

The active mipmap level.

#### Returns

`void`

***

### setRenderTargetFramebuffer()

> **setRenderTargetFramebuffer**: (`renderTarget`, `defaultFramebuffer`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:2664](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L2664)

#### Parameters

##### renderTarget

`any`

##### defaultFramebuffer

`any`

#### Returns

`void`

***

### setRenderTargetTextures()

> **setRenderTargetTextures**: (`renderTarget`, `colorTexture`, `depthTexture`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:2644](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L2644)

#### Parameters

##### renderTarget

`any`

##### colorTexture

`any`

##### depthTexture

`any`

#### Returns

`void`

***

### setScissor()

> **setScissor**: (`x`, `y`, `width`, `height`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:756](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L756)

Sets the scissor region to render from `(x, y)` to `(x + width, y + height)`.

#### Parameters

##### x

The horizontal coordinate for the lower left corner of the scissor region origin in logical pixel unit.
Or alternatively a four-component vector specifying all the parameters of the scissor region.

`number` | [`Vector4`](/reference/three/classes/vector4/)

##### y

`number`

The vertical coordinate for the lower left corner of the scissor region origin  in logical pixel unit.

##### width

`number`

The width of the scissor region in logical pixel unit.

##### height

`number`

The height of the scissor region in logical pixel unit.

#### Returns

`void`

***

### setScissorTest()

> **setScissorTest**: (`boolean`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:790](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L790)

Enable or disable the scissor test. When this is enabled, only the pixels
within the defined scissor area will be affected by further renderer
actions.

#### Parameters

##### boolean

`boolean`

Whether the scissor test is enabled or not.

#### Returns

`void`

***

### setSize()

> **setSize**: (`width`, `height`, `updateStyle`?) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:621](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L621)

Resizes the output canvas to (width, height) with device pixel ratio taken
into account, and also sets the viewport to fit that size, starting in (0,
0). Setting `updateStyle` to false prevents any style changes to the output canvas.

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

***

### setTransparentSort()

> **setTransparentSort**: (`method`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:814](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L814)

Sets a custom transparent sort function for the render lists. Pass `null`
to use the default `reversePainterSortStable` function.

#### Parameters

##### method

`Function`

The opaque sort function.

#### Returns

`void`

***

### setViewport()

> **setViewport**: (`x`, `y`, `width`, `height`) => `void`

Defined in: [three/src/renderers/WebGLRenderer.js:719](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L719)

Sets the viewport to render from `(x, y)` to `(x + width, y + height)`.

#### Parameters

##### x

The horizontal coordinate for the lower left corner of the viewport origin in logical pixel unit.
Or alternatively a four-component vector specifying all the parameters of the viewport.

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

#### Returns

`void`

***

### sortObjects

> **sortObjects**: `boolean`

Defined in: [three/src/renderers/WebGLRenderer.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L218)

Whether the renderer should sort objects or not.

Note: Sorting is used to attempt to properly render objects that have some
degree of transparency. By definition, sorting objects may not work in all
cases. Depending on the needs of application, it may be necessary to turn
off sorting and use other methods to deal with transparency rendering e.g.
manually determining each object's rendering order.

#### Default

```ts
true
```

***

### toneMapping

> **toneMapping**: `any`

Defined in: [three/src/renderers/WebGLRenderer.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L246)

The tone mapping technique of the renderer.

#### Default

```ts
NoToneMapping
```

***

### toneMappingExposure

> **toneMappingExposure**: `number`

Defined in: [three/src/renderers/WebGLRenderer.js:254](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L254)

Exposure level of tone mapping.

#### Default

```ts
1
```

***

### transmissionResolutionScale

> **transmissionResolutionScale**: `number`

Defined in: [three/src/renderers/WebGLRenderer.js:266](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L266)

The normalized resolution scale for the transmission render target, measured in percentage
of viewport dimensions. Lowering this value can result in significant performance improvements
when using [MeshPhysicalMaterial#transmission](/reference/three/classes/meshphysicalmaterial/#transmission).

#### Default

```ts
1
```

***

### xr

> **xr**: `WebXRManager`

Defined in: [three/src/renderers/WebGLRenderer.js:530](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L530)

A reference to the XR manager.

## Accessors

### coordinateSystem

#### Get Signature

> **get** **coordinateSystem**(): `any`

Defined in: [three/src/renderers/WebGLRenderer.js:3377](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3377)

Defines the coordinate system of the renderer.

In `WebGLRenderer`, the value is always `WebGLCoordinateSystem`.

##### Default

```ts
WebGLCoordinateSystem
@readonly
```

##### Returns

`any`

***

### outputColorSpace

#### Get Signature

> **get** **outputColorSpace**(): `string`

Defined in: [three/src/renderers/WebGLRenderer.js:3389](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3389)

Defines the output color space of the renderer.

##### Default

```ts
SRGBColorSpace
```

##### Returns

`string`

#### Set Signature

> **set** **outputColorSpace**(`colorSpace`): `void`

Defined in: [three/src/renderers/WebGLRenderer.js:3395](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/WebGLRenderer.js#L3395)

##### Parameters

###### colorSpace

`string`

##### Returns

`void`

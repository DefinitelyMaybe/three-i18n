---
editUrl: false
next: false
prev: false
title: "EffectComposer"
---

Defined in: [three/addons/postprocessing/EffectComposer.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L40)

Used to implement post-processing effects in three.js.
The class manages a chain of post-processing passes to produce the final visual result.
Post-processing passes are executed in order of their addition/insertion.
The last pass is automatically rendered to screen.

This module can only be used with WebGLRenderer.

```js
const composer = new EffectComposer( renderer );

// adding some passes
const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );

const glitchPass = new GlitchPass();
composer.addPass( glitchPass );

const outputPass = new OutputPass()
composer.addPass( outputPass );

function animate() {

	composer.render(); // instead of renderer.render()

}
```

## Constructors

### Constructor

> **new EffectComposer**(`renderer`, `renderTarget`?): `EffectComposer`

Defined in: [three/addons/postprocessing/EffectComposer.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L50)

Constructs a new effect composer.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

##### renderTarget?

`WebGLRenderTarget`

This render target and a clone will
be used as the internal read and write buffers. If not given, the composer creates
the buffers automatically.

#### Returns

`EffectComposer`

## Properties

### \_height

> **\_height**: `any`

Defined in: [three/addons/postprocessing/EffectComposer.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L65)

***

### \_pixelRatio

> **\_pixelRatio**: `any`

Defined in: [three/addons/postprocessing/EffectComposer.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L59)

***

### \_width

> **\_width**: `any`

Defined in: [three/addons/postprocessing/EffectComposer.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L64)

***

### passes

> **passes**: `Pass`[]

Defined in: [three/addons/postprocessing/EffectComposer.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L110)

An array representing the (ordered) chain of post-processing passes.

***

### readBuffer

> **readBuffer**: `WebGLRenderTarget`

Defined in: [three/addons/postprocessing/EffectComposer.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L95)

A reference to the internal read buffer. Passes usually read
the previous render result from this buffer.

***

### renderer

> **renderer**: `WebGLRenderer`

Defined in: [three/addons/postprocessing/EffectComposer.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L57)

The renderer.

***

### renderTarget1

> **renderTarget1**: `WebGLRenderTarget`

Defined in: [three/addons/postprocessing/EffectComposer.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L77)

***

### renderTarget2

> **renderTarget2**: `any`

Defined in: [three/addons/postprocessing/EffectComposer.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L78)

***

### renderToScreen

> **renderToScreen**: `boolean`

Defined in: [three/addons/postprocessing/EffectComposer.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L103)

Whether the final pass is rendered to the screen (default framebuffer) or not.

#### Default

```ts
true
```

***

### writeBuffer

> **writeBuffer**: `WebGLRenderTarget`

Defined in: [three/addons/postprocessing/EffectComposer.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L87)

A reference to the internal write buffer. Passes usually write
their result into this buffer.

## Methods

### addPass()

> **addPass**(`pass`): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:147](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L147)

Adds the given pass to the pass chain.

#### Parameters

##### pass

`Pass`

The pass to add.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L350)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the composer is no longer used in your app.

#### Returns

`void`

***

### insertPass()

> **insertPass**(`pass`, `index`): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L160)

Inserts the given pass at a given index.

#### Parameters

##### pass

`Pass`

The pass to insert.

##### index

`number`

The index into the pass chain.

#### Returns

`void`

***

### isLastEnabledPass()

> **isLastEnabledPass**(`passIndex`): `boolean`

Defined in: [three/addons/postprocessing/EffectComposer.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L190)

Returns `true` if the pass for the given index is the last enabled pass in the pass chain.

#### Parameters

##### passIndex

`number`

The pass index.

#### Returns

`boolean`

Whether the the pass for the given index is the last pass in the pass chain.

***

### removePass()

> **removePass**(`pass`): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L172)

Removes the given pass from the pass chain.

#### Parameters

##### pass

`Pass`

The pass to remove.

#### Returns

`void`

***

### render()

> **render**(`deltaTime`): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:212](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L212)

Executes all enabled post-processing passes in order to produce the final frame.

#### Parameters

##### deltaTime

`number`

The delta time in seconds. If not given, the composer computes
its own time delta value.

#### Returns

`void`

***

### reset()

> **reset**(`renderTarget`?): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L282)

Resets the internal state of the EffectComposer.

#### Parameters

##### renderTarget?

`WebGLRenderTarget`

This render target has the same purpose like
the one from the constructor. If set, it is used to setup the read and write buffers.

#### Returns

`void`

***

### setPixelRatio()

> **setPixelRatio**(`pixelRatio`): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L338)

Sets device pixel ratio. This is usually used for HiDPI device to prevent blurring output.
Setting the pixel ratio will automatically resize the composer.

#### Parameters

##### pixelRatio

`number`

The pixel ratio to set.

#### Returns

`void`

***

### setSize()

> **setSize**(`width`, `height`): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:313](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L313)

Resizes the internal read and write buffers as well as all passes. Similar to WebGLRenderer#setSize,
this method honors the current pixel ration.

#### Parameters

##### width

`number`

The width in logical pixels.

##### height

`number`

The height in logical pixels.

#### Returns

`void`

***

### swapBuffers()

> **swapBuffers**(): `void`

Defined in: [three/addons/postprocessing/EffectComposer.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/EffectComposer.js#L134)

Swaps the internal read/write buffers.

#### Returns

`void`

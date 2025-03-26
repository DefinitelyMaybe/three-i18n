---
editUrl: false
next: false
prev: false
title: "Pass"
---

Defined in: [three/addons/postprocessing/Pass.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L15)

Abstract base class for all post processing passes.

This module is only relevant for post processing with WebGLRenderer.

## Extended by

- [`AfterimagePass`](/addons/classes/afterimagepass/)
- [`BloomPass`](/addons/classes/bloompass/)
- [`BokehPass`](/addons/classes/bokehpass/)
- [`ClearPass`](/addons/classes/clearpass/)
- [`CubeTexturePass`](/addons/classes/cubetexturepass/)
- [`DotScreenPass`](/addons/classes/dotscreenpass/)
- [`FilmPass`](/addons/classes/filmpass/)
- [`GlitchPass`](/addons/classes/glitchpass/)
- [`GTAOPass`](/addons/classes/gtaopass/)
- [`HalftonePass`](/addons/classes/halftonepass/)
- [`MaskPass`](/addons/classes/maskpass/)
- [`ClearMaskPass`](/addons/classes/clearmaskpass/)
- [`OutlinePass`](/addons/classes/outlinepass/)
- [`OutputPass`](/addons/classes/outputpass/)
- [`RenderPass`](/addons/classes/renderpass/)
- [`RenderPixelatedPass`](/addons/classes/renderpixelatedpass/)
- [`SAOPass`](/addons/classes/saopass/)
- [`SMAAPass`](/addons/classes/smaapass/)
- [`SSAARenderPass`](/addons/classes/ssaarenderpass/)
- [`SSAOPass`](/addons/classes/ssaopass/)
- [`SSRPass`](/addons/classes/ssrpass/)
- [`SavePass`](/addons/classes/savepass/)
- [`ShaderPass`](/addons/classes/shaderpass/)
- [`TexturePass`](/addons/classes/texturepass/)
- [`UnrealBloomPass`](/addons/classes/unrealbloompass/)

## Constructors

### Constructor

> **new Pass**(): `Pass`

Defined in: [three/addons/postprocessing/Pass.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L20)

Constructs a new pass.

#### Returns

`Pass`

## Properties

### clear

> **clear**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L53)

If set to `true`, the pass clears its buffer before rendering

#### Default

```ts
false
```

***

### enabled

> **enabled**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L37)

If set to `true`, the pass is processed by the composer.

#### Default

```ts
true
```

***

### isPass

> `readonly` **isPass**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L29)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### needsSwap

> **needsSwap**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L45)

If set to `true`, the pass indicates to swap read and write buffer after rendering.

#### Default

```ts
true
```

***

### renderToScreen

> **renderToScreen**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L62)

If set to `true`, the result of the pass is rendered to screen. The last pass in the composers
pass chain gets automatically rendered to screen, no matter how this property is configured.

#### Default

```ts
false
```

## Methods

### dispose()

> `abstract` **dispose**(): `void`

Defined in: [three/addons/postprocessing/Pass.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L99)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

***

### render()

> `abstract` **render**(): `void`

Defined in: [three/addons/postprocessing/Pass.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L87)

This method holds the render logic of a pass. It must be implemented in all derived classes.

#### Returns

`void`

***

### setSize()

> `abstract` **setSize**(): `void`

Defined in: [three/addons/postprocessing/Pass.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L73)

Sets the size of the pass.

#### Returns

`void`

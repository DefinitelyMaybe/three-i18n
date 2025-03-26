---
editUrl: false
next: false
prev: false
title: "GlitchPass"
---

Defined in: [three/addons/postprocessing/GlitchPass.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L22)

Pass for creating a glitch effect.

```js
const glitchPass = new GlitchPass();
composer.addPass( glitchPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new GlitchPass**(`dt_size`?): `GlitchPass`

Defined in: [three/addons/postprocessing/GlitchPass.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L30)

Constructs a new glitch pass.

#### Parameters

##### dt\_size?

`number` = `64`

The size of the displacement texture
for digital glitch squares.

#### Returns

`GlitchPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_curF

> **\_curF**: `number`

Defined in: [three/addons/postprocessing/GlitchPass.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L67)

***

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/GlitchPass.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L65)

***

### \_heightMap

> **\_heightMap**: `any`

Defined in: [three/addons/postprocessing/GlitchPass.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L62)

***

### \_randX

> **\_randX**: `number`

Defined in: [three/addons/postprocessing/GlitchPass.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L68)

***

### clear

> **clear**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L53)

If set to `true`, the pass clears its buffer before rendering

#### Default

```ts
false
```

#### Inherited from

[`Pass`](/addons/classes/pass/).[`clear`](/addons/classes/pass/#clear)

***

### enabled

> **enabled**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L37)

If set to `true`, the pass is processed by the composer.

#### Default

```ts
true
```

#### Inherited from

[`Pass`](/addons/classes/pass/).[`enabled`](/addons/classes/pass/#enabled)

***

### goWild

> **goWild**: `boolean`

Defined in: [three/addons/postprocessing/GlitchPass.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L58)

Whether to noticeably increase the effect instensity or not.

#### Default

```ts
false
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

#### Inherited from

[`Pass`](/addons/classes/pass/).[`isPass`](/addons/classes/pass/#ispass)

***

### material

> **material**: `ShaderMaterial`

Defined in: [three/addons/postprocessing/GlitchPass.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L46)

The pass material.

***

### needsSwap

> **needsSwap**: `boolean`

Defined in: [three/addons/postprocessing/Pass.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L45)

If set to `true`, the pass indicates to swap read and write buffer after rendering.

#### Default

```ts
true
```

#### Inherited from

[`Pass`](/addons/classes/pass/).[`needsSwap`](/addons/classes/pass/#needsswap)

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

#### Inherited from

[`Pass`](/addons/classes/pass/).[`renderToScreen`](/addons/classes/pass/#rendertoscreen)

***

### uniforms

> **uniforms**: `any`

Defined in: [three/addons/postprocessing/GlitchPass.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L39)

The pass uniforms.

## Methods

### \_generateHeightmap()

> **\_generateHeightmap**(`dt_size`): `any`

Defined in: [three/addons/postprocessing/GlitchPass.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L156)

#### Parameters

##### dt\_size

`any`

#### Returns

`any`

***

### \_generateTrigger()

> **\_generateTrigger**(): `void`

Defined in: [three/addons/postprocessing/GlitchPass.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L150)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/GlitchPass.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L138)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`): `void`

Defined in: [three/addons/postprocessing/GlitchPass.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/GlitchPass.js#L85)

Performs the glitch pass.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

##### writeBuffer

`WebGLRenderTarget`

The write buffer. This buffer is intended as the rendering
destination for the pass.

##### readBuffer

`WebGLRenderTarget`

The read buffer. The pass can access the result from the
previous pass from this buffer.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`render`](/addons/classes/pass/#render)

***

### setSize()

> `abstract` **setSize**(): `void`

Defined in: [three/addons/postprocessing/Pass.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L73)

Sets the size of the pass.

#### Returns

`void`

#### Inherited from

[`Pass`](/addons/classes/pass/).[`setSize`](/addons/classes/pass/#setsize)

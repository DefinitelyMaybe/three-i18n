---
editUrl: false
next: false
prev: false
title: "SMAAPass"
---

Defined in: [three/addons/postprocessing/SMAAPass.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L24)

A pass for applying SMAA. Unlike FXAAPass, `SMAAPass` operates in
`linar-srgb` so this pass must be executed before [OutputPass](/addons/classes/outputpass/).

```js
const smaaPass = new SMAAPass();
composer.addPass( smaaPass );
```

## Extends

- [`Pass`](/addons/classes/pass/)

## Constructors

### Constructor

> **new SMAAPass**(): `SMAAPass`

Defined in: [three/addons/postprocessing/SMAAPass.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L29)

Constructs a new SMAA pass.

#### Returns

`SMAAPass`

#### Overrides

[`Pass`](/addons/classes/pass/).[`constructor`](/addons/classes/pass/#constructor)

## Properties

### \_areaTexture

> **\_areaTexture**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L59)

***

### \_edgesRT

> **\_edgesRT**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L35)

***

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/SMAAPass.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L120)

***

### \_materialBlend

> **\_materialBlend**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L114)

***

### \_materialEdges

> **\_materialEdges**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L87)

***

### \_materialWeights

> **\_materialWeights**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L102)

***

### \_searchTexture

> **\_searchTexture**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L75)

***

### \_uniformsBlend

> **\_uniformsBlend**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L111)

***

### \_uniformsEdges

> **\_uniformsEdges**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L85)

***

### \_uniformsWeights

> **\_uniformsWeights**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L96)

***

### \_weightsRT

> **\_weightsRT**: `any`

Defined in: [three/addons/postprocessing/SMAAPass.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L41)

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

## Methods

### \_getAreaTexture()

> **\_getAreaTexture**(): `string`

Defined in: [three/addons/postprocessing/SMAAPass.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L215)

#### Returns

`string`

***

### \_getSearchTexture()

> **\_getSearchTexture**(): `string`

Defined in: [three/addons/postprocessing/SMAAPass.js:221](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L221)

#### Returns

`string`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/SMAAPass.js:197](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L197)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`dispose`](/addons/classes/pass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`): `void`

Defined in: [three/addons/postprocessing/SMAAPass.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L135)

Performs the SMAA pass.

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

> **setSize**(`width`, `height`): `void`

Defined in: [three/addons/postprocessing/SMAAPass.js:182](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/SMAAPass.js#L182)

Sets the size of the pass.

#### Parameters

##### width

`number`

The width to set.

##### height

`number`

The width to set.

#### Returns

`void`

#### Overrides

[`Pass`](/addons/classes/pass/).[`setSize`](/addons/classes/pass/#setsize)

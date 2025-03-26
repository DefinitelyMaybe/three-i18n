---
editUrl: false
next: false
prev: false
title: "LUTPass"
---

Defined in: [three/addons/postprocessing/LUTPass.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/LUTPass.js#L69)

Pass for color grading via lookup tables.

```js
const lutPass = new LUTPass( { lut: lut.texture3D } );
composer.addPass( lutPass );
```

## Extends

- [`ShaderPass`](/addons/classes/shaderpass/)

## Constructors

### Constructor

> **new LUTPass**(`options`?): `LUTPass`

Defined in: [three/addons/postprocessing/LUTPass.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/LUTPass.js#L76)

Constructs a LUT pass.

#### Parameters

##### options?

The pass options.

###### intensity

`number`

###### lut

`Data3DTexture`

#### Returns

`LUTPass`

#### Overrides

[`ShaderPass`](/addons/classes/shaderpass/).[`constructor`](/addons/classes/shaderpass/#constructor)

## Properties

### \_fsQuad

> **\_fsQuad**: [`FullScreenQuad`](/addons/classes/fullscreenquad/)

Defined in: [three/addons/postprocessing/ShaderPass.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/ShaderPass.js#L79)

#### Inherited from

[`ShaderPass`](/addons/classes/shaderpass/).[`_fsQuad`](/addons/classes/shaderpass/#_fsquad)

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

[`ShaderPass`](/addons/classes/shaderpass/).[`clear`](/addons/classes/shaderpass/#clear)

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

[`ShaderPass`](/addons/classes/shaderpass/).[`enabled`](/addons/classes/shaderpass/#enabled)

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

[`ShaderPass`](/addons/classes/shaderpass/).[`isPass`](/addons/classes/shaderpass/#ispass)

***

### material

> **material**: `ShaderMaterial`

Defined in: [three/addons/postprocessing/ShaderPass.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/ShaderPass.js#L53)

The pass material.

#### Inherited from

[`ShaderPass`](/addons/classes/shaderpass/).[`material`](/addons/classes/shaderpass/#material)

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

[`ShaderPass`](/addons/classes/shaderpass/).[`needsSwap`](/addons/classes/shaderpass/#needsswap)

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

[`ShaderPass`](/addons/classes/shaderpass/).[`renderToScreen`](/addons/classes/shaderpass/#rendertoscreen)

***

### textureID

> **textureID**: `string`

Defined in: [three/addons/postprocessing/ShaderPass.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/ShaderPass.js#L39)

The name of the texture uniform that should sample the read buffer.

#### Default

```ts
'tDiffuse'
```

#### Inherited from

[`ShaderPass`](/addons/classes/shaderpass/).[`textureID`](/addons/classes/shaderpass/#textureid)

***

### uniforms

> **uniforms**: `any`

Defined in: [three/addons/postprocessing/ShaderPass.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/ShaderPass.js#L46)

The pass uniforms.

#### Inherited from

[`ShaderPass`](/addons/classes/shaderpass/).[`uniforms`](/addons/classes/shaderpass/#uniforms)

## Accessors

### intensity

#### Get Signature

> **get** **intensity**(): `any`

Defined in: [three/addons/postprocessing/LUTPass.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/LUTPass.js#L129)

##### Returns

`any`

#### Set Signature

> **set** **intensity**(`v`): `void`

Defined in: [three/addons/postprocessing/LUTPass.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/LUTPass.js#L123)

##### Parameters

###### v

`any`

##### Returns

`void`

***

### lut

#### Get Signature

> **get** **lut**(): `any`

Defined in: [three/addons/postprocessing/LUTPass.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/LUTPass.js#L117)

##### Returns

`any`

#### Set Signature

> **set** **lut**(`v`): `void`

Defined in: [three/addons/postprocessing/LUTPass.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/LUTPass.js#L98)

##### Parameters

###### v

`any`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/postprocessing/ShaderPass.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/ShaderPass.js#L124)

Frees the GPU-related resources allocated by this instance. Call this
method whenever the pass is no longer used in your app.

#### Returns

`void`

#### Inherited from

[`ShaderPass`](/addons/classes/shaderpass/).[`dispose`](/addons/classes/shaderpass/#dispose)

***

### render()

> **render**(`renderer`, `writeBuffer`, `readBuffer`): `void`

Defined in: [three/addons/postprocessing/ShaderPass.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/ShaderPass.js#L94)

Performs the shader pass.

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

#### Inherited from

[`ShaderPass`](/addons/classes/shaderpass/).[`render`](/addons/classes/shaderpass/#render)

***

### setSize()

> `abstract` **setSize**(): `void`

Defined in: [three/addons/postprocessing/Pass.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/postprocessing/Pass.js#L73)

Sets the size of the pass.

#### Returns

`void`

#### Inherited from

[`ShaderPass`](/addons/classes/shaderpass/).[`setSize`](/addons/classes/shaderpass/#setsize)

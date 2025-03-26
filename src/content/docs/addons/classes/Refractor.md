---
editUrl: false
next: false
prev: false
title: "Refractor"
---

Defined in: [three/addons/objects/Refractor.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L37)

Can be used to create a flat, refractive surface like for special
windows or water effects.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use viewportSharedTexture.

```js
const geometry = new THREE.PlaneGeometry( 100, 100 );

const refractor = new Refractor( refractorGeometry, {
	color: 0xcbcbcb,
	textureWidth: 1024,
	textureHeight: 1024
} );

scene.add( refractor );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new Refractor**(`geometry`, `options`): `Refractor`

Defined in: [three/addons/objects/Refractor.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L45)

Constructs a new refractor.

#### Parameters

##### geometry

`BufferGeometry`

The refractor's geometry.

##### options

The configuration options.

#### Returns

`Refractor`

#### Overrides

`Mesh.constructor`

## Properties

### camera

> **camera**: `PerspectiveCamera`

Defined in: [three/addons/objects/Refractor.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L65)

The reflector's virtual camera.

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/objects/Refractor.js:301](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L301)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### getRenderTarget()

> **getRenderTarget**: () => `WebGLRenderTarget`

Defined in: [three/addons/objects/Refractor.js:291](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L291)

Returns the reflector's internal render target.

#### Returns

`WebGLRenderTarget`

The internal render target

***

### isRefractor

> `readonly` **isRefractor**: `boolean`

Defined in: [three/addons/objects/Refractor.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L56)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### material

> **material**: `any`

Defined in: [three/addons/objects/Refractor.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L93)

***

### onBeforeRender()

> **onBeforeRender**: (`renderer`, `scene`, `camera`) => `void`

Defined in: [three/addons/objects/Refractor.js:264](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L264)

#### Parameters

##### renderer

`any`

##### scene

`any`

##### camera

`any`

#### Returns

`void`

***

### type

> **type**: `string`

Defined in: [three/addons/objects/Refractor.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L58)

***

### RefractorShader

> `static` **RefractorShader**: `object`

Defined in: [three/addons/objects/Refractor.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Refractor.js#L312)

#### fragmentShader

> **fragmentShader**: `string`

#### name

> **name**: `string` = `'RefractorShader'`

#### uniforms

> **uniforms**: `object`

##### uniforms.color

> **color**: `object`

##### uniforms.color.value

> **value**: `any` = `null`

##### uniforms.tDiffuse

> **tDiffuse**: `object`

##### uniforms.tDiffuse.value

> **value**: `any` = `null`

##### uniforms.textureMatrix

> **textureMatrix**: `object`

##### uniforms.textureMatrix.value

> **value**: `any` = `null`

#### vertexShader

> **vertexShader**: `string`

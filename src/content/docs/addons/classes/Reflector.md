---
editUrl: false
next: false
prev: false
title: "Reflector"
---

Defined in: [three/addons/objects/Reflector.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L36)

Can be used to create a flat, reflective surface like a mirror.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use ReflectorNode.

```js
const geometry = new THREE.PlaneGeometry( 100, 100 );

const reflector = new Reflector( geometry, {
	clipBias: 0.003,
	textureWidth: window.innerWidth * window.devicePixelRatio,
	textureHeight: window.innerHeight * window.devicePixelRatio,
	color: 0xc1cbcb
} );

scene.add( reflector );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new Reflector**(`geometry`, `options`): `Reflector`

Defined in: [three/addons/objects/Reflector.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L44)

Constructs a new reflector.

#### Parameters

##### geometry

`BufferGeometry`

The reflector's geometry.

##### options

The configuration options.

#### Returns

`Reflector`

#### Overrides

`Mesh.constructor`

## Properties

### camera

> **camera**: `PerspectiveCamera`

Defined in: [three/addons/objects/Reflector.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L74)

The reflector's virtual camera. This is used to render
the scene from the mirror's point of view.

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/objects/Reflector.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L245)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### forceUpdate

> **forceUpdate**: `boolean`

Defined in: [three/addons/objects/Reflector.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L66)

Whether to force an update, no matter if the reflector
is in view or not.

#### Default

```ts
false
```

***

### getRenderTarget()

> **getRenderTarget**: () => `WebGLRenderTarget`

Defined in: [three/addons/objects/Reflector.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L235)

Returns the reflector's internal render target.

#### Returns

`WebGLRenderTarget`

The internal render target

***

### isReflector

> `readonly` **isReflector**: `boolean`

Defined in: [three/addons/objects/Reflector.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L55)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### material

> **material**: `any`

Defined in: [three/addons/objects/Reflector.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L115)

***

### onBeforeRender

> **onBeforeRender**: *typeof* `__function`

Defined in: [three/addons/objects/Reflector.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L117)

***

### type

> **type**: `string`

Defined in: [three/addons/objects/Reflector.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L57)

***

### ReflectorShader

> `static` **ReflectorShader**: `object`

Defined in: [three/addons/objects/Reflector.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Reflector.js#L256)

#### fragmentShader

> **fragmentShader**: `string`

#### name

> **name**: `string` = `'ReflectorShader'`

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

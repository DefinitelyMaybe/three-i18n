---
editUrl: false
next: false
prev: false
title: "Water2"
---

Defined in: [three/addons/objects/Water2.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water2.js#L32)

An advanced water effect that supports reflections, refractions and flow maps.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use module:Water2Mesh.

References:

- [https://alex.vlachos.com/graphics/Vlachos-SIGGRAPH10-WaterFlow.pdf](https://alex.vlachos.com/graphics/Vlachos-SIGGRAPH10-WaterFlow.pdf)
- [http://graphicsrunner.blogspot.de/2010/08/water-using-flow-maps.html](http://graphicsrunner.blogspot.de/2010/08/water-using-flow-maps.html)

## Extends

- `unknown`

## Constructors

### Constructor

> **new Water2**(`geometry`, `options`?): `Water`

Defined in: [three/addons/objects/Water2.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water2.js#L39)

Constructs a new water instance.

#### Parameters

##### geometry

`BufferGeometry`

The water's geometry.

##### options?

`any` = `{}`

The configuration options.

#### Returns

`Water`

#### Overrides

`Mesh.constructor`

## Properties

### isWater

> `readonly` **isWater**: `boolean`

Defined in: [three/addons/objects/Water2.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water2.js#L49)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### material

> **material**: `any`

Defined in: [three/addons/objects/Water2.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water2.js#L120)

***

### onBeforeRender()

> **onBeforeRender**: (`renderer`, `scene`, `camera`) => `void`

Defined in: [three/addons/objects/Water2.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water2.js#L215)

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

Defined in: [three/addons/objects/Water2.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water2.js#L51)

***

### WaterShader

> `static` **WaterShader**: `object`

Defined in: [three/addons/objects/Water2.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Water2.js#L232)

#### fragmentShader

> **fragmentShader**: `string`

#### name

> **name**: `string` = `"WaterShader"`

#### uniforms

> **uniforms**: `object`

##### uniforms.color

> **color**: `object`

##### uniforms.color.type

> **type**: `string` = `"c"`

##### uniforms.color.value

> **value**: `any` = `null`

##### uniforms.config

> **config**: `object`

##### uniforms.config.type

> **type**: `string` = `"v4"`

##### uniforms.config.value

> **value**: `any`

##### uniforms.reflectivity

> **reflectivity**: `object`

##### uniforms.reflectivity.type

> **type**: `string` = `"f"`

##### uniforms.reflectivity.value

> **value**: `number` = `0`

##### uniforms.textureMatrix

> **textureMatrix**: `object`

##### uniforms.textureMatrix.type

> **type**: `string` = `"m4"`

##### uniforms.textureMatrix.value

> **value**: `any` = `null`

##### uniforms.tNormalMap0

> **tNormalMap0**: `object`

##### uniforms.tNormalMap0.type

> **type**: `string` = `"t"`

##### uniforms.tNormalMap0.value

> **value**: `any` = `null`

##### uniforms.tNormalMap1

> **tNormalMap1**: `object`

##### uniforms.tNormalMap1.type

> **type**: `string` = `"t"`

##### uniforms.tNormalMap1.value

> **value**: `any` = `null`

##### uniforms.tReflectionMap

> **tReflectionMap**: `object`

##### uniforms.tReflectionMap.type

> **type**: `string` = `"t"`

##### uniforms.tReflectionMap.value

> **value**: `any` = `null`

##### uniforms.tRefractionMap

> **tRefractionMap**: `object`

##### uniforms.tRefractionMap.type

> **type**: `string` = `"t"`

##### uniforms.tRefractionMap.value

> **value**: `any` = `null`

#### vertexShader

> **vertexShader**: `string`

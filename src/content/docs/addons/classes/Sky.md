---
editUrl: false
next: false
prev: false
title: "Sky"
---

Defined in: [three/addons/objects/Sky.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Sky.js#L31)

Represents a skydome for scene backgrounds. Based on [A Practical Analytic Model for Daylight][https://www.researchgate.net/publication/220720443\_A\_Practical\_Analytic\_Model\_for\_Daylight](https://www.researchgate.net/publication/220720443_A_Practical_Analytic_Model_for_Daylight)
aka The Preetham Model, the de facto standard for analytical skydomes.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use SkyMesh.

More references:

- [http://simonwallner.at/project/atmospheric-scattering/](http://simonwallner.at/project/atmospheric-scattering/)
- [http://blenderartists.org/forum/showthread.php?245954-preethams-sky-impementation-HDR](http://blenderartists.org/forum/showthread.php?245954-preethams-sky-impementation-HDR)

```js
const sky = new Sky();
sky.scale.setScalar( 10000 );
scene.add( sky );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new Sky**(): `Sky`

Defined in: [three/addons/objects/Sky.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Sky.js#L36)

Constructs a new skydome.

#### Returns

`Sky`

#### Overrides

`Mesh.constructor`

## Properties

### isSky

> `readonly` **isSky**: `boolean`

Defined in: [three/addons/objects/Sky.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Sky.js#L58)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### SkyShader

> `static` **SkyShader**: `object`

Defined in: [three/addons/objects/Sky.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Sky.js#L64)

#### fragmentShader

> **fragmentShader**: `string`

#### name

> **name**: `string` = `'SkyShader'`

#### uniforms

> **uniforms**: `object`

##### uniforms.mieCoefficient

> **mieCoefficient**: `object`

##### uniforms.mieCoefficient.value

> **value**: `number` = `0.005`

##### uniforms.mieDirectionalG

> **mieDirectionalG**: `object`

##### uniforms.mieDirectionalG.value

> **value**: `number` = `0.8`

##### uniforms.rayleigh

> **rayleigh**: `object`

##### uniforms.rayleigh.value

> **value**: `number` = `1`

##### uniforms.sunPosition

> **sunPosition**: `object`

##### uniforms.sunPosition.value

> **value**: `any`

##### uniforms.turbidity

> **turbidity**: `object`

##### uniforms.turbidity.value

> **value**: `number` = `2`

##### uniforms.up

> **up**: `object`

##### uniforms.up.value

> **value**: `any`

#### vertexShader

> **vertexShader**: `string`

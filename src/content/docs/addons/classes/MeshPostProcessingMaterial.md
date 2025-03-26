---
editUrl: false
next: false
prev: false
title: "MeshPostProcessingMaterial"
---

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L27)

The aim of this mesh material is to use information from a post processing pass in the diffuse color pass.
This material is based on the MeshPhysicalMaterial.

In the current state, only the information of a screen space AO pass can be used in the material.
Actually, the output of any screen space AO (SSAO, GTAO) can be used,
as it is only necessary to provide the AO in one color channel of a texture,
however the AO pass must be rendered prior to the color pass,
which makes the post-processing pass somewhat of a pre-processing pass.
Fot this purpose a new map (`aoPassMap`) is added to the material.
The value of the map is used the same way as the `aoMap` value.

Motivation to use the outputs AO pass directly in the material:
The incident light of a fragment is composed of ambient light, direct light and indirect light
Ambient Occlusion only occludes ambient light and environment light, but not direct light.
Direct light is only occluded by geometry that casts shadows.
And of course the emitted light should not be darkened by ambient occlusion either.
This cannot be achieved if the AO post processing pass is simply blended with the diffuse render pass.

Further extension work might be to use the output of an SSR pass or an HBIL pass from a previous frame.
This would then create the possibility of SSR and IR depending on material properties such as `roughness`, `metalness` and `reflectivity`.

## Extends

- `unknown`

## Constructors

### Constructor

> **new MeshPostProcessingMaterial**(`parameters`?): `MeshPostProcessingMaterial`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L38)

Constructs a new conditional line material.

#### Parameters

##### parameters?

`any`

An object with one or more properties
defining the material's appearance. Any property of the material
(including any property from inherited materials) can be passed
in here. Color values can be passed any type of value accepted
by Color#set.

#### Returns

`MeshPostProcessingMaterial`

#### Overrides

`MeshPhysicalMaterial.constructor`

## Properties

### \_aoPassMap

> **\_aoPassMap**: `any`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L49)

***

### \_shader

> **\_shader**: `any`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L58)

***

### aoPassMapScale

> **aoPassMapScale**: `number`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L57)

The scale of the AO pass.

#### Default

```ts
1
```

***

### customProgramCacheKey()

> **customProgramCacheKey**: () => `""` \| `"aoPassMap"`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L48)

#### Returns

`""` \| `"aoPassMap"`

***

### needsUpdate

> **needsUpdate**: `boolean`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L76)

***

### onBeforeCompile()

> **onBeforeCompile**: (`shader`) => `void`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L47)

#### Parameters

##### shader

`any`

#### Returns

`void`

## Accessors

### aoPassMap

#### Get Signature

> **get** **aoPassMap**(): `Texture`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L67)

A texture representing the AO pass.

##### Returns

`Texture`

#### Set Signature

> **set** **aoPassMap**(`aoPassMap`): `void`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L73)

##### Parameters

###### aoPassMap

`Texture`

##### Returns

`void`

## Methods

### \_customProgramCacheKey()

> **\_customProgramCacheKey**(): `""` \| `"aoPassMap"`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L81)

#### Returns

`""` \| `"aoPassMap"`

***

### \_onBeforeCompile()

> **\_onBeforeCompile**(`shader`): `void`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L87)

#### Parameters

##### shader

`any`

#### Returns

`void`

***

### \_setUniforms()

> **\_setUniforms**(): `void`

Defined in: [three/addons/materials/MeshPostProcessingMaterial.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/MeshPostProcessingMaterial.js#L108)

#### Returns

`void`

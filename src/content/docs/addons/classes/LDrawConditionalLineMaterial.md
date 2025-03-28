---
editUrl: false
next: false
prev: false
title: "LDrawConditionalLineMaterial"
---

Defined in: [three/addons/materials/LDrawConditionalLineMaterial.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/LDrawConditionalLineMaterial.js#L16)

A special line material for meshes loaded via [LDrawLoader](/addons/classes/ldrawloader/).

This module can only be used with WebGLRenderer. When using WebGPURenderer,
import the class from `LDrawConditionalLineNodeMaterial.js`.

## Extends

- `unknown`

## Constructors

### Constructor

> **new LDrawConditionalLineMaterial**(`parameters`?): `LDrawConditionalLineMaterial`

Defined in: [three/addons/materials/LDrawConditionalLineMaterial.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/LDrawConditionalLineMaterial.js#L33)

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

`LDrawConditionalLineMaterial`

#### Overrides

`ShaderMaterial.constructor`

## Properties

### isLDrawConditionalLineMaterial

> `readonly` **isLDrawConditionalLineMaterial**: `boolean`

Defined in: [three/addons/materials/LDrawConditionalLineMaterial.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/LDrawConditionalLineMaterial.js#L176)

This flag can be used for type testing.

#### Default

```ts
true
```

## Accessors

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/addons/materials/LDrawConditionalLineMaterial.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/materials/LDrawConditionalLineMaterial.js#L18)

##### Returns

`string`

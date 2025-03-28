---
editUrl: false
next: false
prev: false
title: "Flow"
---

Defined in: [three/addons/modifiers/CurveModifier.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L207)

A modifier for making meshes bend around curves.

This module can only be used with WebGLRenderer. When using WebGPURenderer,
import the class from `CurveModifierGPU.js`.

## Extended by

- [`InstancedFlow`](/addons/classes/instancedflow/)

## Constructors

### Constructor

> **new Flow**(`mesh`, `numberOfCurves`): `Flow`

Defined in: [three/addons/modifiers/CurveModifier.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L215)

Constructs a new Flow instance.

#### Parameters

##### mesh

`Mesh`

The mesh to clone and modify to bend around the curve.

##### numberOfCurves

`number` = `1`

The amount of space that should preallocated for additional curves.

#### Returns

`Flow`

## Properties

### curveArray

> **curveArray**: `any`[]

Defined in: [three/addons/modifiers/CurveModifier.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L252)

***

### curveLengthArray

> **curveLengthArray**: `any`[]

Defined in: [three/addons/modifiers/CurveModifier.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L253)

***

### object3D

> **object3D**: `any`

Defined in: [three/addons/modifiers/CurveModifier.js:255](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L255)

***

### splineTexture

> **splineTexture**: `DataTexture`

Defined in: [three/addons/modifiers/CurveModifier.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L256)

***

### uniforms

> **uniforms**: `any`

Defined in: [three/addons/modifiers/CurveModifier.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L257)

## Methods

### moveAlongCurve()

> **moveAlongCurve**(`amount`): `void`

Defined in: [three/addons/modifiers/CurveModifier.js:283](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L283)

Moves the mesh along the curve.

#### Parameters

##### amount

`number`

The offset.

#### Returns

`void`

***

### updateCurve()

> **updateCurve**(`index`, `curve`): `void`

Defined in: [three/addons/modifiers/CurveModifier.js:267](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L267)

Updates the curve for the given curve index.

#### Parameters

##### index

`number`

The curve index.

##### curve

`Curve`

The curve that should be used to bend the mesh.

#### Returns

`void`

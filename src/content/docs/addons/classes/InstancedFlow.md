---
editUrl: false
next: false
prev: false
title: "InstancedFlow"
---

Defined in: [three/addons/modifiers/CurveModifier.js:300](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L300)

An instanced version of [Flow](/addons/classes/flow/) for making meshes bend around curves, where the instances are placed on the curve.

This module can only be used with WebGLRenderer.

## Extends

- [`Flow`](/addons/classes/flow/)

## Constructors

### Constructor

> **new InstancedFlow**(`count`, `curveCount`, `geometry`, `material`): `InstancedFlow`

Defined in: [three/addons/modifiers/CurveModifier.js:310](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L310)

Constructs a new InstancedFlow instance.

#### Parameters

##### count

`number`

The number of instanced elements.

##### curveCount

`number`

The number of curves to preallocate for.

##### geometry

`Geometry`

The geometry to use for the instanced mesh.

##### material

`Material`

The material to use for the instanced mesh.

#### Returns

`InstancedFlow`

#### Overrides

[`Flow`](/addons/classes/flow/).[`constructor`](/addons/classes/flow/#constructor)

## Properties

### curveArray

> **curveArray**: `any`[]

Defined in: [three/addons/modifiers/CurveModifier.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L252)

#### Inherited from

[`Flow`](/addons/classes/flow/).[`curveArray`](/addons/classes/flow/#curvearray)

***

### curveLengthArray

> **curveLengthArray**: `any`[]

Defined in: [three/addons/modifiers/CurveModifier.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L253)

#### Inherited from

[`Flow`](/addons/classes/flow/).[`curveLengthArray`](/addons/classes/flow/#curvelengtharray)

***

### object3D

> **object3D**: `any`

Defined in: [three/addons/modifiers/CurveModifier.js:255](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L255)

#### Inherited from

[`Flow`](/addons/classes/flow/).[`object3D`](/addons/classes/flow/#object3d)

***

### offsets

> **offsets**: `any`[]

Defined in: [three/addons/modifiers/CurveModifier.js:321](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L321)

***

### splineTexture

> **splineTexture**: `DataTexture`

Defined in: [three/addons/modifiers/CurveModifier.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L256)

#### Inherited from

[`Flow`](/addons/classes/flow/).[`splineTexture`](/addons/classes/flow/#splinetexture)

***

### uniforms

> **uniforms**: `any`

Defined in: [three/addons/modifiers/CurveModifier.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L257)

#### Inherited from

[`Flow`](/addons/classes/flow/).[`uniforms`](/addons/classes/flow/#uniforms)

***

### whichCurve

> **whichCurve**: `any`[]

Defined in: [three/addons/modifiers/CurveModifier.js:322](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L322)

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

#### Inherited from

[`Flow`](/addons/classes/flow/).[`moveAlongCurve`](/addons/classes/flow/#movealongcurve)

***

### moveIndividualAlongCurve()

> **moveIndividualAlongCurve**(`index`, `offset`): `void`

Defined in: [three/addons/modifiers/CurveModifier.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L350)

Move an individual element along the curve by a specific amount.

#### Parameters

##### index

`number`

Which element to update.

##### offset

`number`

The offset.

#### Returns

`void`

***

### setCurve()

> **setCurve**(`index`, `curveNo`): `void`

Defined in: [three/addons/modifiers/CurveModifier.js:363](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L363)

Select which curve to use for an element.

#### Parameters

##### index

`number`

The index of the instanced element to update.

##### curveNo

`number`

The index of the curve it should use.

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

#### Inherited from

[`Flow`](/addons/classes/flow/).[`updateCurve`](/addons/classes/flow/#updatecurve)

***

### writeChanges()

> **writeChanges**(`index`): `void`

Defined in: [three/addons/modifiers/CurveModifier.js:332](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/CurveModifier.js#L332)

The extra information about which curve and curve position is stored in the translation components of the matrix for the instanced objects
This writes that information to the matrix and marks it as needing update.

#### Parameters

##### index

`number`

The index of tge instanced element to update.

#### Returns

`void`

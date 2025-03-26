---
editUrl: false
next: false
prev: false
title: "CSMFrustum"
---

Defined in: [three/addons/csm/CSMFrustum.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMFrustum.js#L8)

Represents the frustum of a CSM instance.

## Constructors

### Constructor

> **new CSMFrustum**(`data`): `CSMFrustum`

Defined in: [three/addons/csm/CSMFrustum.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMFrustum.js#L15)

Constructs a new CSM frustum.

#### Parameters

##### data

`any`

The CSM data.

#### Returns

`CSMFrustum`

## Properties

### vertices

> **vertices**: `any`

Defined in: [three/addons/csm/CSMFrustum.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMFrustum.js#L34)

An object representing the vertices of the near and
far plane in view space.

***

### zNear

> **zNear**: `number`

Defined in: [three/addons/csm/CSMFrustum.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMFrustum.js#L26)

The zNear value. This value depends on whether the CSM
is used with WebGL or WebGPU. Both API use different
conventions for their projection matrices.

## Methods

### setFromProjectionMatrix()

> **setFromProjectionMatrix**(`projectionMatrix`, `maxFar`): `any`

Defined in: [three/addons/csm/CSMFrustum.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMFrustum.js#L64)

Setups this CSM frustum from the given projection matrix and max far value.

#### Parameters

##### projectionMatrix

`Matrix4`

The projection matrix, usually of the scene's camera.

##### maxFar

`number`

The maximum far value.

#### Returns

`any`

An object representing the vertices of the near and far plane in view space.

***

### split()

> **split**(`breaks`, `target`): `void`

Defined in: [three/addons/csm/CSMFrustum.js:119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMFrustum.js#L119)

Splits the CSM frustum by the given array. The new CSM frustum are pushed into the given
target array.

#### Parameters

##### breaks

`number`[]

An array of numbers in the range `[0,1]` the defines how the
CSM frustum should be split up.

##### target

`CSMFrustum`[]

The target array that holds the new CSM frustums.

#### Returns

`void`

***

### toSpace()

> **toSpace**(`cameraMatrix`, `target`): `void`

Defined in: [three/addons/csm/CSMFrustum.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMFrustum.js#L180)

Transforms the given target CSM frustum into the different coordinate system defined by the
given camera matrix.

#### Parameters

##### cameraMatrix

`Matrix4`

The matrix that defines the new coordinate system.

##### target

`CSMFrustum`

The CSM to convert.

#### Returns

`void`

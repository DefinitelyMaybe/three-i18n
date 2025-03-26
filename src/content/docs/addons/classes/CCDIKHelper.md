---
editUrl: false
next: false
prev: false
title: "CCDIKHelper"
---

Defined in: [three/addons/animation/CCDIKSolver.js:326](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L326)

Helper for visualizing IK bones.

## Extends

- `unknown`

## Constructors

### Constructor

> **new CCDIKHelper**(`mesh`, `iks`, `sphereSize`?): `CCDIKHelper`

Defined in: [three/addons/animation/CCDIKSolver.js:333](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L333)

#### Parameters

##### mesh

`SkinnedMesh`

The skinned mesh.
 *

##### iks

`any`[] = `[]`

The IK objects.
 *

##### sphereSize?

`number` = `0.25`

The sphere size.

#### Returns

`CCDIKHelper`

#### Overrides

`Object3D.constructor`

## Properties

### effectorSphereMaterial

> **effectorSphereMaterial**: `MeshBasicMaterial`

Defined in: [three/addons/animation/CCDIKSolver.js:378](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L378)

The material for the effector spheres.

***

### iks

> **iks**: [`CCDIKSolver`](/addons/classes/ccdiksolver/)[]

Defined in: [three/addons/animation/CCDIKSolver.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L349)

The IK objects.

***

### lineMaterial

> **lineMaterial**: `LineBasicMaterial`

Defined in: [three/addons/animation/CCDIKSolver.js:402](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L402)

A global line material.

***

### linkSphereMaterial

> **linkSphereMaterial**: `MeshBasicMaterial`

Defined in: [three/addons/animation/CCDIKSolver.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L390)

The material for the link spheres.

***

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

Defined in: [three/addons/animation/CCDIKSolver.js:352](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L352)

***

### root

> **root**: `SkinnedMesh`

Defined in: [three/addons/animation/CCDIKSolver.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L342)

The skinned mesh this helper refers to.

***

### sphereGeometry

> **sphereGeometry**: `SkinnedMesh`

Defined in: [three/addons/animation/CCDIKSolver.js:359](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L359)

The helpers sphere geometry.

***

### targetSphereMaterial

> **targetSphereMaterial**: `MeshBasicMaterial`

Defined in: [three/addons/animation/CCDIKSolver.js:366](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L366)

The material for the target spheres.

## Methods

### \_init()

> **\_init**(): `void`

Defined in: [three/addons/animation/CCDIKSolver.js:503](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L503)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/animation/CCDIKSolver.js:480](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L480)

Frees the GPU-related resources allocated by this instance.
Call this method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`): `void`

Defined in: [three/addons/animation/CCDIKSolver.js:413](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L413)

#### Parameters

##### force

`any`

#### Returns

`void`

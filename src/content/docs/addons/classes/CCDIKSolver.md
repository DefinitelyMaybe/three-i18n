---
editUrl: false
next: false
prev: false
title: "CCDIKSolver"
---

Defined in: [three/addons/animation/CCDIKSolver.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L33)

This class solves the Inverse Kinematics Problem with a [CCD Algorithm][https://web.archive.org/web/20221206080850/https://sites.google.com/site/auraliusproject/ccd-algorithm](https://web.archive.org/web/20221206080850/https://sites.google.com/site/auraliusproject/ccd-algorithm).

`CCDIKSolver` is designed to work with instances of SkinnedMesh.

## Constructors

### Constructor

> **new CCDIKSolver**(`mesh`, `iks`): `CCDIKSolver`

Defined in: [three/addons/animation/CCDIKSolver.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L39)

#### Parameters

##### mesh

`SkinnedMesh`

The skinned mesh.

##### iks

`any`[] = `[]`

The IK objects.

#### Returns

`CCDIKSolver`

## Properties

### \_initialQuaternions

> **\_initialQuaternions**: `any`[][]

Defined in: [three/addons/animation/CCDIKSolver.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L55)

***

### \_workingQuaternion

> **\_workingQuaternion**: `any`

Defined in: [three/addons/animation/CCDIKSolver.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L56)

***

### iks

> **iks**: `SkinnedMesh`

Defined in: [three/addons/animation/CCDIKSolver.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L53)

The IK objects.

***

### mesh

> **mesh**: `SkinnedMesh`

Defined in: [three/addons/animation/CCDIKSolver.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L46)

The skinned mesh.

## Methods

### \_valid()

> **\_valid**(): `void`

Defined in: [three/addons/animation/CCDIKSolver.js:269](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L269)

#### Returns

`void`

***

### createHelper()

> **createHelper**(`sphereSize`): [`CCDIKHelper`](/addons/classes/ccdikhelper/)

Defined in: [three/addons/animation/CCDIKSolver.js:261](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L261)

Creates a helper for visualizing the CCDIK.

#### Parameters

##### sphereSize

`number`

The sphere size.

#### Returns

[`CCDIKHelper`](/addons/classes/ccdikhelper/)

The created helper.

***

### update()

> **update**(`globalBlendFactor`?): `CCDIKSolver`

Defined in: [three/addons/animation/CCDIKSolver.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L81)

Updates all IK bones by solving the CCD algorithm.

#### Parameters

##### globalBlendFactor?

`number` = `1.0`

Blend factor applied if an IK chain doesn't have its own .blendFactor.

#### Returns

`CCDIKSolver`

A reference to this instance.

***

### updateOne()

> **updateOne**(`ik`, `overrideBlend`?): `CCDIKSolver`

Defined in: [three/addons/animation/CCDIKSolver.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/animation/CCDIKSolver.js#L102)

Updates one IK bone solving the CCD algorithm.

#### Parameters

##### ik

`any`

The IK to update.

##### overrideBlend?

`number` = `1.0`

If the IK object does not define `blendFactor`, this value is used.

#### Returns

`CCDIKSolver`

A reference to this instance.

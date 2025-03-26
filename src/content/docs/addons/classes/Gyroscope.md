---
editUrl: false
next: false
prev: false
title: "Gyroscope"
---

Defined in: [three/addons/misc/Gyroscope.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Gyroscope.js#L23)

A special type of 3D object that takes a position from the scene graph hierarchy
but uses its local rotation as world rotation. It works like real-world gyroscope -
you can move it around using hierarchy while its orientation stays fixed with
respect to the world.

## Extends

- `unknown`

## Constructors

### Constructor

> **new Gyroscope**(): `Gyroscope`

Defined in: [three/addons/misc/Gyroscope.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Gyroscope.js#L28)

Constructs a new gyroscope.

#### Returns

`Gyroscope`

#### Overrides

`Object3D.constructor`

## Properties

### matrixWorldNeedsUpdate

> **matrixWorldNeedsUpdate**: `boolean`

Defined in: [three/addons/misc/Gyroscope.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Gyroscope.js#L59)

## Methods

### updateMatrixWorld()

> **updateMatrixWorld**(`force`): `void`

Defined in: [three/addons/misc/Gyroscope.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Gyroscope.js#L34)

#### Parameters

##### force

`any`

#### Returns

`void`

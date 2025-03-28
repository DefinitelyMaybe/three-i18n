---
editUrl: false
next: false
prev: false
title: "RoomEnvironment"
---

Defined in: [three/addons/environments/RoomEnvironment.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/environments/RoomEnvironment.js#L30)

This class represents a scene with a basic room setup that can be used as
input for PMREMGenerator#fromScene. The resulting PMREM represents the room's
lighting and can be used for Image Based Lighting by assigning it to Scene#environment
or directly as an environment map to PBR materials.

The implementation is based on the [EnvironmentScene](https://github.com/google/model-viewer/blob/master/packages/model-viewer/src/three-components/EnvironmentScene.ts)
component from the `model-viewer` project.

```js
const environment = new RoomEnvironment();
const pmremGenerator = new THREE.PMREMGenerator( renderer );

const envMap = pmremGenerator.fromScene( environment ).texture;
scene.environment = envMap;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new RoomEnvironment**(): `RoomEnvironment`

Defined in: [three/addons/environments/RoomEnvironment.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/environments/RoomEnvironment.js#L32)

#### Returns

`RoomEnvironment`

#### Overrides

`Scene.constructor`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/environments/RoomEnvironment.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/environments/RoomEnvironment.js#L130)

Frees internal resources. This method should be called
when the environment is no longer required.

#### Returns

`void`

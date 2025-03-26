---
editUrl: false
next: false
prev: false
title: "DebugEnvironment"
---

Defined in: [three/addons/environments/DebugEnvironment.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/environments/DebugEnvironment.js#L30)

This class represents a scene with a very basic room setup that can be used as
input for PMREMGenerator#fromScene. The resulting PMREM represents the room's
lighting and can be used for Image Based Lighting by assigning it to Scene#environment
or directly as an environment map to PBR materials.

This class uses a simple room setup and should only be used for development purposes.
A more appropriate setup for production is [RoomEnvironment](/addons/classes/roomenvironment/).

```js
const environment = new DebugEnvironment();
const pmremGenerator = new THREE.PMREMGenerator( renderer );

const envMap = pmremGenerator.fromScene( environment ).texture;
scene.environment = envMap;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new DebugEnvironment**(): `DebugEnvironment`

Defined in: [three/addons/environments/DebugEnvironment.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/environments/DebugEnvironment.js#L35)

Constructs a new debug environment.

#### Returns

`DebugEnvironment`

#### Overrides

`Scene.constructor`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/environments/DebugEnvironment.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/environments/DebugEnvironment.js#L76)

Frees internal resources. This method should be called
when the environment is no longer required.

#### Returns

`void`

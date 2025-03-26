---
editUrl: false
next: false
prev: false
title: "MorphAnimMesh"
---

Defined in: [three/addons/misc/MorphAnimMesh.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L14)

A special type of an animated mesh with a simple interface
for animation playback. It allows to playback just one animation
without any transitions or fading between animation changes.

## Extends

- `unknown`

## Constructors

### Constructor

> **new MorphAnimMesh**(`geometry`?, `material`?): `MorphAnimMesh`

Defined in: [three/addons/misc/MorphAnimMesh.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L22)

Constructs a new morph anim mesh.

#### Parameters

##### geometry?

`BufferGeometry`

The mesh geometry.

##### material?

`any`

The mesh material.

#### Returns

`MorphAnimMesh`

#### Overrides

`Mesh.constructor`

## Properties

### activeAction

> **activeAction**: `AnimationAction`

Defined in: [three/addons/misc/MorphAnimMesh.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L41)

The current active animation action.

#### Default

```ts
null
```

***

### mixer

> **mixer**: `AnimationMixer`

Defined in: [three/addons/misc/MorphAnimMesh.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L33)

The internal animation mixer.

***

### type

> **type**: `string`

Defined in: [three/addons/misc/MorphAnimMesh.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L26)

## Methods

### copy()

> **copy**(`source`, `recursive`): `MorphAnimMesh`

Defined in: [three/addons/misc/MorphAnimMesh.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L106)

#### Parameters

##### source

`any`

##### recursive

`any`

#### Returns

`MorphAnimMesh`

***

### playAnimation()

> **playAnimation**(`label`, `fps`): `void`

Defined in: [three/addons/misc/MorphAnimMesh.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L70)

Plays the defined animation clip. The implementation assumes the animation
clips are stored in Object3D#animations or the geometry.

#### Parameters

##### label

`string`

The name of the animation clip.

##### fps

`number`

The FPS of the animation clip.

#### Returns

`void`

***

### setDirectionBackward()

> **setDirectionBackward**(): `void`

Defined in: [three/addons/misc/MorphAnimMesh.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L57)

Sets the animation playback direction to "backward".

#### Returns

`void`

***

### setDirectionForward()

> **setDirectionForward**(): `void`

Defined in: [three/addons/misc/MorphAnimMesh.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L48)

Sets the animation playback direction to "forward".

#### Returns

`void`

***

### updateAnimation()

> **updateAnimation**(`delta`): `void`

Defined in: [three/addons/misc/MorphAnimMesh.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MorphAnimMesh.js#L100)

Updates the animations of the mesh. Must be called inside the animation loop.

#### Parameters

##### delta

`number`

The delta time in seconds.

#### Returns

`void`

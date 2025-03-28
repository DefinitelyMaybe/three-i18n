---
editUrl: false
next: false
prev: false
title: "MDDLoader"
---

Defined in: [three/addons/loaders/MDDLoader.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MDDLoader.js#L44)

A loader for the MDD format.

MDD stores a position for every vertex in a model for every frame in an animation.
Similar to BVH, it can be used to transfer animation data between different 3D applications or engines.

MDD stores its data in binary format (big endian) in the following way:

- number of frames (a single uint32)
- number of vertices (a single uint32)
- time values for each frame (sequence of float32)
- vertex data for each frame (sequence of float32)

```js
const loader = new MDDLoader();
const result = await loader.loadAsync( 'models/mdd/cube.mdd' );

const morphTargets = result.morphTargets;
const clip = result.clip;
// clip.optimize(); // optional

const geometry = new THREE.BoxGeometry();
geometry.morphAttributes.position = morphTargets; // apply morph targets (vertex data must match)

const material = new THREE.MeshBasicMaterial();

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const mixer = new THREE.AnimationMixer( mesh );
mixer.clipAction( clip ).play();
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new MDDLoader**(`manager`?): `MDDLoader`

Defined in: [three/addons/loaders/MDDLoader.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MDDLoader.js#L51)

Constructs a new MDD loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`MDDLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/MDDLoader.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MDDLoader.js#L66)

Starts loading from the given URL and passes the loaded MDD asset
to the `onLoad()` callback.

#### Parameters

##### url

`string`

The path/URL of the file to be loaded. This can also be a data URI.

##### onLoad

(`arg0`) => `any`

Executed when the loading process has been finished.

##### onProgress

`onProgressCallback`

Executed while the loading is in progress.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`void`

***

### parse()

> **parse**(`data`): `object`

Defined in: [three/addons/loaders/MDDLoader.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MDDLoader.js#L88)

Parses the given MDD data and returns an object holding the animation clip and the respective
morph targets.

#### Parameters

##### data

`ArrayBuffer`

The raw XYZ data as an array buffer.

#### Returns

`object`

The result object.

##### clip

> **clip**: `AnimationClip`

##### morphTargets

> **morphTargets**: `BufferAttribute`[]

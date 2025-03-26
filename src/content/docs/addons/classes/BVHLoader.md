---
editUrl: false
next: false
prev: false
title: "BVHLoader"
---

Defined in: [three/addons/loaders/BVHLoader.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/BVHLoader.js#L35)

A loader for the BVH format.

Imports BVH files and outputs a single Skeleton and AnimationClip.
The loader only supports BVH files containing a single root right now.

```js
const loader = new BVHLoader();
const result = await loader.loadAsync( 'models/bvh/pirouette.bvh' );

// visualize skeleton
const skeletonHelper = new THREE.SkeletonHelper( result.skeleton.bones[ 0 ] );
scene.add( result.skeleton.bones[ 0 ] );
scene.add( skeletonHelper );

// play animation clip
mixer = new THREE.AnimationMixer( result.skeleton.bones[ 0 ] );
mixer.clipAction( result.clip ).play();
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new BVHLoader**(`manager`?): `BVHLoader`

Defined in: [three/addons/loaders/BVHLoader.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/BVHLoader.js#L42)

Constructs a new BVH loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`BVHLoader`

#### Overrides

`Loader.constructor`

## Properties

### animateBonePositions

> **animateBonePositions**: `boolean`

Defined in: [three/addons/loaders/BVHLoader.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/BVHLoader.js#L52)

Whether to animate bone positions or not.

#### Default

```ts
true
```

***

### animateBoneRotations

> **animateBoneRotations**: `boolean`

Defined in: [three/addons/loaders/BVHLoader.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/BVHLoader.js#L60)

Whether to animate bone rotations or not.

#### Default

```ts
true
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/BVHLoader.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/BVHLoader.js#L73)

Starts loading from the given URL and passes the loaded BVH asset
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

> **parse**(`text`): `object`

Defined in: [three/addons/loaders/BVHLoader.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/BVHLoader.js#L113)

Parses the given BVH data and returns the resulting data.

#### Parameters

##### text

`string`

The raw BVH data as a string.

#### Returns

`object`

An object representing the parsed asset.

##### clip

> **clip**: `AnimationClip`

##### skeleton

> **skeleton**: `Skeleton`

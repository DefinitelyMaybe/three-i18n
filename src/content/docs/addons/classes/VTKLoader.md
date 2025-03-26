---
editUrl: false
next: false
prev: false
title: "VTKLoader"
---

Defined in: [three/addons/loaders/VTKLoader.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VTKLoader.js#L30)

A loader for the VTK format.

This loader only supports the `POLYDATA` dataset format so far. Other formats
(structured points, structured grid, rectilinear grid, unstructured grid, appended)
are not supported.

```js
const loader = new VTKLoader();
const geometry = await loader.loadAsync( 'models/vtk/liver.vtk' );
geometry.computeVertexNormals();

const mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial() );
scene.add( mesh );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new VTKLoader**(`manager`?): `VTKLoader`

Defined in: [three/addons/loaders/VTKLoader.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VTKLoader.js#L37)

Constructs a new VTK loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`VTKLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/VTKLoader.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VTKLoader.js#L52)

Starts loading from the given URL and passes the loaded VRML asset
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

> **parse**(`data`): `BufferGeometry`

Defined in: [three/addons/loaders/VTKLoader.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VTKLoader.js#L93)

Parses the given VTK data and returns the resulting geometry.

#### Parameters

##### data

`ArrayBuffer`

The raw VTK data as an array buffer

#### Returns

`BufferGeometry`

The parsed geometry.

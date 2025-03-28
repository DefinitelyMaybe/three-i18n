---
editUrl: false
next: false
prev: false
title: "Rhino3dmLoader"
---

Defined in: [three/addons/loaders/3DMLoader.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L52)

A loader for Rhinoceros 3D files and objects.

Rhinoceros is a 3D modeler used to create, edit, analyze, document, render,
animate, and translate NURBS curves, surfaces, breps, extrusions, point clouds,
as well as polygon meshes and SubD objects. `rhino3dm.js` is compiled to WebAssembly
from the open source geometry library `openNURBS`. The loader currently uses
`rhino3dm.js 8.4.0`.

```js
const loader = new Rhino3dmLoader();
loader.setLibraryPath( 'https://cdn.jsdelivr.net/npm/rhino3dm@8.0.1' );

const object = await loader.loadAsync( 'models/3dm/Rhino_Logo.3dm' );
scene.add( object );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new Rhino3dmLoader**(`manager`?): `Rhino3dmLoader`

Defined in: [three/addons/loaders/3DMLoader.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L58)

Constructs a new Rhino 3DM loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`Rhino3dmLoader`

#### Overrides

`Loader.constructor`

## Properties

### libraryBinary

> **libraryBinary**: `any`

Defined in: [three/addons/loaders/3DMLoader.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L65)

***

### libraryConfig

> **libraryConfig**: `object`

Defined in: [three/addons/loaders/3DMLoader.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L66)

***

### libraryPath

> **libraryPath**: `string`

Defined in: [three/addons/loaders/3DMLoader.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L63)

***

### libraryPending

> **libraryPending**: `Promise`\<`void`\>

Defined in: [three/addons/loaders/3DMLoader.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L64)

***

### materials

> **materials**: `any`[]

Defined in: [three/addons/loaders/3DMLoader.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L76)

***

### url

> **url**: `string`

Defined in: [three/addons/loaders/3DMLoader.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L68)

***

### warnings

> **warnings**: `any`[]

Defined in: [three/addons/loaders/3DMLoader.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L77)

***

### workerConfig

> **workerConfig**: `object`

Defined in: [three/addons/loaders/3DMLoader.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L74)

***

### workerLimit

> **workerLimit**: `number`

Defined in: [three/addons/loaders/3DMLoader.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L70)

***

### workerNextTaskID

> **workerNextTaskID**: `number`

Defined in: [three/addons/loaders/3DMLoader.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L72)

***

### workerPool

> **workerPool**: `any`[]

Defined in: [three/addons/loaders/3DMLoader.js:71](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L71)

***

### workerSourceURL

> **workerSourceURL**: `string`

Defined in: [three/addons/loaders/3DMLoader.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L73)

## Methods

### \_compareMaterials()

> **\_compareMaterials**(`material`): `any`

Defined in: [three/addons/loaders/3DMLoader.js:226](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L226)

#### Parameters

##### material

`any`

#### Returns

`any`

***

### \_createGeometry()

> **\_createGeometry**(`data`): `any`

Defined in: [three/addons/loaders/3DMLoader.js:457](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L457)

#### Parameters

##### data

`any`

#### Returns

`any`

***

### \_createMaterial()

> **\_createMaterial**(`material`, `renderEnvironment`): `any`

Defined in: [three/addons/loaders/3DMLoader.js:259](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L259)

#### Parameters

##### material

`any`

##### renderEnvironment

`any`

#### Returns

`any`

***

### \_createObject()

> **\_createObject**(`obj`, `mat`): `any`

Defined in: [three/addons/loaders/3DMLoader.js:584](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L584)

#### Parameters

##### obj

`any`

##### mat

`any`

#### Returns

`any`

***

### \_getWorker()

> **\_getWorker**(`taskCost`): `Promise`\<`any`\>

Defined in: [three/addons/loaders/3DMLoader.js:863](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L863)

#### Parameters

##### taskCost

`any`

#### Returns

`Promise`\<`any`\>

***

### \_initLibrary()

> **\_initLibrary**(): `Promise`\<`void`\>

Defined in: [three/addons/loaders/3DMLoader.js:824](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L824)

#### Returns

`Promise`\<`void`\>

***

### \_releaseTask()

> **\_releaseTask**(`worker`, `taskID`): `void`

Defined in: [three/addons/loaders/3DMLoader.js:918](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L918)

#### Parameters

##### worker

`any`

##### taskID

`any`

#### Returns

`void`

***

### debug()

> **debug**(): `void`

Defined in: [three/addons/loaders/3DMLoader.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L150)

Prints debug messages to the browser console.

#### Returns

`void`

***

### decodeObjects()

> **decodeObjects**(`buffer`, `url`): `Promise`\<`Object3D`\>

Defined in: [three/addons/loaders/3DMLoader.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L164)

Decodes the 3DM asset data with a Web Worker.

#### Parameters

##### buffer

`ArrayBuffer`

The raw 3DM asset data as an array buffer.

##### url

`string`

The asset URL.

#### Returns

`Promise`\<`Object3D`\>

A Promise that resolved with the decoded 3D object.

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/loaders/3DMLoader.js:928](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L928)

Frees internal resources. This method should be called
when the loader is no longer required.

#### Returns

`void`

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/3DMLoader.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L115)

Starts loading from the given URL and passes the loaded 3DM asset
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

> **parse**(`data`, `onLoad`, `onError`): `void`

Defined in: [three/addons/loaders/3DMLoader.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L217)

Parses the given 3DM data and passes the loaded 3DM asset
to the `onLoad()` callback.

#### Parameters

##### data

`ArrayBuffer`

The raw 3DM asset data as an array buffer.

##### onLoad

(`arg0`) => `any`

Executed when the loading process has been finished.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`void`

***

### setLibraryPath()

> **setLibraryPath**(`path`): `Rhino3dmLoader`

Defined in: [three/addons/loaders/3DMLoader.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L86)

Path to a folder containing the JS and WASM libraries.

#### Parameters

##### path

`string`

The library path to set.

#### Returns

`Rhino3dmLoader`

A reference to this loader.

***

### setWorkerLimit()

> **setWorkerLimit**(`workerLimit`): `Rhino3dmLoader`

Defined in: [three/addons/loaders/3DMLoader.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3DMLoader.js#L100)

Sets the maximum number of Web Workers to be used during decoding.
A lower limit may be preferable if workers are also for other
tasks in the application.

#### Parameters

##### workerLimit

`number`

The worker limit.

#### Returns

`Rhino3dmLoader`

A reference to this loader.

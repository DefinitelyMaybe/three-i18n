---
editUrl: false
next: false
prev: false
title: "DRACOLoader"
---

Defined in: [three/addons/loaders/DRACOLoader.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L45)

A loader for the Draco format.

[Draco][https://google.github.io/draco/](https://google.github.io/draco/) is an open source library for compressing
and decompressing 3D meshes and point clouds. Compressed geometry can be significantly smaller,
at the cost of additional decoding time on the client device.

Standalone Draco files have a `.drc` extension, and contain vertex positions, normals, colors,
and other attributes. Draco files do not contain materials, textures, animation, or node hierarchies –
to use these features, embed Draco geometry inside of a glTF file. A normal glTF file can be converted
to a Draco-compressed glTF file using [glTF-Pipeline][https://github.com/CesiumGS/gltf-pipeline](https://github.com/CesiumGS/gltf-pipeline).
When using Draco with glTF, an instance of `DRACOLoader` will be used internally by [GLTFLoader](/addons/classes/gltfloader/).

It is recommended to create one DRACOLoader instance and reuse it to avoid loading and creating
multiple decoder instances.

`DRACOLoader` will automatically use either the JS or the WASM decoding library, based on
browser capabilities.

```js
const loader = new DRACOLoader();
loader.setDecoderPath( '/examples/jsm/libs/draco/' );

const geometry = await dracoLoader.loadAsync( 'models/draco/bunny.drc' );
geometry.computeVertexNormals(); // optional

dracoLoader.dispose();
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new DRACOLoader**(`manager`?): `DRACOLoader`

Defined in: [three/addons/loaders/DRACOLoader.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L52)

Constructs a new Draco loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`DRACOLoader`

#### Overrides

`Loader.constructor`

## Properties

### decoderBinary

> **decoderBinary**: `any`

Defined in: [three/addons/loaders/DRACOLoader.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L58)

***

### decoderConfig

> **decoderConfig**: `object`

Defined in: [three/addons/loaders/DRACOLoader.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L57)

***

### decoderPath

> **decoderPath**: `string`

Defined in: [three/addons/loaders/DRACOLoader.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L56)

***

### decoderPending

> **decoderPending**: `Promise`\<`void`\>

Defined in: [three/addons/loaders/DRACOLoader.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L59)

***

### defaultAttributeIDs

> **defaultAttributeIDs**: `object`

Defined in: [three/addons/loaders/DRACOLoader.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L66)

#### color

> **color**: `string` = `'COLOR'`

#### normal

> **normal**: `string` = `'NORMAL'`

#### position

> **position**: `string` = `'POSITION'`

#### uv

> **uv**: `string` = `'TEX_COORD'`

***

### defaultAttributeTypes

> **defaultAttributeTypes**: `object`

Defined in: [three/addons/loaders/DRACOLoader.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L72)

#### color

> **color**: `string` = `'Float32Array'`

#### normal

> **normal**: `string` = `'Float32Array'`

#### position

> **position**: `string` = `'Float32Array'`

#### uv

> **uv**: `string` = `'Float32Array'`

***

### workerLimit

> **workerLimit**: `number`

Defined in: [three/addons/loaders/DRACOLoader.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L61)

***

### workerNextTaskID

> **workerNextTaskID**: `number`

Defined in: [three/addons/loaders/DRACOLoader.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L63)

***

### workerPool

> **workerPool**: `any`[]

Defined in: [three/addons/loaders/DRACOLoader.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L62)

***

### workerSourceURL

> **workerSourceURL**: `string`

Defined in: [three/addons/loaders/DRACOLoader.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L64)

## Methods

### \_assignVertexColorSpace()

> **\_assignVertexColorSpace**(`attribute`, `inputColorSpace`): `void`

Defined in: [three/addons/loaders/DRACOLoader.js:298](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L298)

#### Parameters

##### attribute

`any`

##### inputColorSpace

`any`

#### Returns

`void`

***

### \_createGeometry()

> **\_createGeometry**(`geometryData`): `any`

Defined in: [three/addons/loaders/DRACOLoader.js:263](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L263)

#### Parameters

##### geometryData

`any`

#### Returns

`any`

***

### \_getWorker()

> **\_getWorker**(`taskID`, `taskCost`): `Promise`\<`any`\>

Defined in: [three/addons/loaders/DRACOLoader.js:389](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L389)

#### Parameters

##### taskID

`any`

##### taskCost

`any`

#### Returns

`Promise`\<`any`\>

***

### \_initDecoder()

> **\_initDecoder**(): `Promise`\<`void`\>

Defined in: [three/addons/loaders/DRACOLoader.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L342)

#### Returns

`Promise`\<`void`\>

***

### \_loadLibrary()

> **\_loadLibrary**(`url`, `responseType`): `Promise`\<`any`\>

Defined in: [three/addons/loaders/DRACOLoader.js:319](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L319)

#### Parameters

##### url

`any`

##### responseType

`any`

#### Returns

`Promise`\<`any`\>

***

### \_releaseTask()

> **\_releaseTask**(`worker`, `taskID`): `void`

Defined in: [three/addons/loaders/DRACOLoader.js:445](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L445)

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

Defined in: [three/addons/loaders/DRACOLoader.js:453](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L453)

#### Returns

`void`

***

### decodeDracoFile()

> **decodeDracoFile**(`buffer`, `callback`, `attributeIDs`, `attributeTypes`, `vertexColorSpace`, `onError`): `any`

Defined in: [three/addons/loaders/DRACOLoader.js:165](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L165)

#### Parameters

##### buffer

`any`

##### callback

`any`

##### attributeIDs

`any`

##### attributeTypes

`any`

##### vertexColorSpace

`any` = `LinearSRGBColorSpace`

##### onError

() => `void`

#### Returns

`any`

***

### decodeGeometry()

> **decodeGeometry**(`buffer`, `taskConfig`): `any`

Defined in: [three/addons/loaders/DRACOLoader.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L178)

#### Parameters

##### buffer

`any`

##### taskConfig

`any`

#### Returns

`any`

***

### dispose()

> **dispose**(): `DRACOLoader`

Defined in: [three/addons/loaders/DRACOLoader.js:459](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L459)

#### Returns

`DRACOLoader`

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/DRACOLoader.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L133)

Starts loading from the given URL and passes the loaded Draco asset
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

> **parse**(`buffer`, `onLoad`, `onError`): `void`

Defined in: [three/addons/loaders/DRACOLoader.js:157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L157)

Parses the given Draco data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw Draco data as an array buffer.

##### onLoad

(`arg0`) => `any`

Executed when the loading/parsing process has been finished.

##### onError

`onErrorCallback` = `...`

Executed when errors occur.

#### Returns

`void`

***

### preload()

> **preload**(): `DRACOLoader`

Defined in: [three/addons/loaders/DRACOLoader.js:334](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L334)

#### Returns

`DRACOLoader`

***

### setDecoderConfig()

> **setDecoderConfig**(`config`): `DRACOLoader`

Defined in: [three/addons/loaders/DRACOLoader.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L101)

Provides configuration for the decoder libraries. Configuration cannot be changed after decoding begins.

#### Parameters

##### config

The decoder config.

###### type

`"js"` \| `"wasm"`

#### Returns

`DRACOLoader`

A reference to this loader.

***

### setDecoderPath()

> **setDecoderPath**(`path`): `DRACOLoader`

Defined in: [three/addons/loaders/DRACOLoader.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L87)

Provides configuration for the decoder libraries. Configuration cannot be changed after decoding begins.

#### Parameters

##### path

`string`

The decoder path.

#### Returns

`DRACOLoader`

A reference to this loader.

***

### setWorkerLimit()

> **setWorkerLimit**(`workerLimit`): `DRACOLoader`

Defined in: [three/addons/loaders/DRACOLoader.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/DRACOLoader.js#L116)

Sets the maximum number of Web Workers to be used during decoding.
A lower limit may be preferable if workers are also for other tasks in the application.

#### Parameters

##### workerLimit

`number`

The worker limit.

#### Returns

`DRACOLoader`

A reference to this loader.

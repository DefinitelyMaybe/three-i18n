---
editUrl: false
next: false
prev: false
title: "GLTFLoader"
---

Defined in: [three/addons/loaders/GLTFLoader.js:119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L119)

A loader for the glTF 2.0 format.

[glTF][https://www.khronos.org/gltf/](https://www.khronos.org/gltf/) (GL Transmission Format) is an [open format specification][https://github.com/KhronosGroup/glTF/tree/main/specification/2.0](https://github.com/KhronosGroup/glTF/tree/main/specification/2.0)
for efficient delivery and loading of 3D content. Assets may be provided either in JSON (.gltf) or binary (.glb)
format. External files store textures (.jpg, .png) and additional binary data (.bin). A glTF asset may deliver
one or more scenes, including meshes, materials, textures, skins, skeletons, morph targets, animations, lights,
and/or cameras.

`GLTFLoader` uses ImageBitmapLoader whenever possible. Be advised that image bitmaps are not
automatically GC-collected when they are no longer referenced, and they require special handling during
the disposal process.

`GLTFLoader` supports the following glTF 2.0 extensions:
- KHR_draco_mesh_compression
- KHR_materials_clearcoat
- KHR_materials_dispersion
- KHR_materials_ior
- KHR_materials_specular
- KHR_materials_transmission
- KHR_materials_iridescence
- KHR_materials_unlit
- KHR_materials_volume
- KHR_mesh_quantization
- KHR_lights_punctual
- KHR_texture_basisu
- KHR_texture_transform
- EXT_texture_webp
- EXT_meshopt_compression
- EXT_mesh_gpu_instancing

The following glTF 2.0 extension is supported by an external user plugin:
- [KHR_materials_variants][https://github.com/takahirox/three-gltf-extensions](https://github.com/takahirox/three-gltf-extensions)
- [MSFT_texture_dds][https://github.com/takahirox/three-gltf-extensions](https://github.com/takahirox/three-gltf-extensions)

```js
const loader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
loader.setDRACOLoader( dracoLoader );

const gltf = await loader.loadAsync( 'models/gltf/duck/duck.gltf' );
scene.add( gltf.scene );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new GLTFLoader**(`manager`?): `GLTFLoader`

Defined in: [three/addons/loaders/GLTFLoader.js:126](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L126)

Constructs a new glTF loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`GLTFLoader`

#### Overrides

`Loader.constructor`

## Properties

### dracoLoader

> **dracoLoader**: `any`

Defined in: [three/addons/loaders/GLTFLoader.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L130)

***

### ktx2Loader

> **ktx2Loader**: `any`

Defined in: [three/addons/loaders/GLTFLoader.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L131)

***

### meshoptDecoder

> **meshoptDecoder**: `any`

Defined in: [three/addons/loaders/GLTFLoader.js:132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L132)

***

### pluginCallbacks

> **pluginCallbacks**: `any`[]

Defined in: [three/addons/loaders/GLTFLoader.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L134)

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/GLTFLoader.js:249](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L249)

Starts loading from the given URL and passes the loaded glTF asset
to the `onLoad()` callback.

#### Parameters

##### url

`string`

The path/URL of the file to be loaded. This can also be a data URI.

##### onLoad

`any`

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

> **parse**(`data`, `path`, `onLoad`, `onError`): `void`

Defined in: [three/addons/loaders/GLTFLoader.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L414)

Parses the given FBX data and returns the resulting group.

#### Parameters

##### data

The raw glTF data.

`string` | `ArrayBuffer`

##### path

`string`

The URL base path.

##### onLoad

`any`

Executed when the loading process has been finished.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`void`

***

### parseAsync()

> **parseAsync**(`data`, `path`): `Promise`\<`GLTFLoader`\>

Defined in: [three/addons/loaders/GLTFLoader.js:545](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L545)

Async version of [GLTFLoader#parse](/addons/classes/gltfloader/#parse).

#### Parameters

##### data

The raw glTF data.

`string` | `ArrayBuffer`

##### path

`string`

The URL base path.

#### Returns

`Promise`\<`GLTFLoader`\>

A Promise that resolves with the loaded glTF when the parsing has been finished.

#### Async

***

### register()

> **register**(`callback`): `GLTFLoader`

Defined in: [three/addons/loaders/GLTFLoader.js:376](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L376)

Registers a plugin callback. This API is internally used to implement the various
glTF extensions but can also used by third-party code to add additional logic
to the loader.

#### Parameters

##### callback

`any`

The callback function to register.

#### Returns

`GLTFLoader`

A reference to this loader.

***

### setDRACOLoader()

> **setDRACOLoader**(`dracoLoader`): `GLTFLoader`

Defined in: [three/addons/loaders/GLTFLoader.js:333](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L333)

Sets the given Draco loader to this loader. Required for decoding assets
compressed with the `KHR_draco_mesh_compression` extension.

#### Parameters

##### dracoLoader

`DRACOLoader`

The Draco loader to set.

#### Returns

`GLTFLoader`

A reference to this loader.

***

### setKTX2Loader()

> **setKTX2Loader**(`ktx2Loader`): `GLTFLoader`

Defined in: [three/addons/loaders/GLTFLoader.js:347](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L347)

Sets the given KTX2 loader to this loader. Required for loading KTX2
compressed textures.

#### Parameters

##### ktx2Loader

`KTX2Loader`

The KTX2 loader to set.

#### Returns

`GLTFLoader`

A reference to this loader.

***

### setMeshoptDecoder()

> **setMeshoptDecoder**(`meshoptDecoder`): `GLTFLoader`

Defined in: [three/addons/loaders/GLTFLoader.js:361](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L361)

Sets the given meshopt decoder. Required for decoding assets
compressed with the `EXT_meshopt_compression` extension.

#### Parameters

##### meshoptDecoder

`any`

The meshopt decoder to set.

#### Returns

`GLTFLoader`

A reference to this loader.

***

### unregister()

> **unregister**(`callback`): `GLTFLoader`

Defined in: [three/addons/loaders/GLTFLoader.js:394](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/GLTFLoader.js#L394)

Unregisters a plugin callback.

#### Parameters

##### callback

`Function`

The callback function to unregister.

#### Returns

`GLTFLoader`

A reference to this loader.

---
editUrl: false
next: false
prev: false
title: "GLTFExporter"
---

Defined in: [three/addons/exporters/GLTFExporter.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L101)

An exporter for `glTF` 2.0.

glTF (GL Transmission Format) is an [open format specification][https://github.com/KhronosGroup/glTF/tree/master/specification/2.0](https://github.com/KhronosGroup/glTF/tree/master/specification/2.0)
for efficient delivery and loading of 3D content. Assets may be provided either in JSON (.gltf)
or binary (.glb) format. External files store textures (.jpg, .png) and additional binary
data (.bin). A glTF asset may deliver one or more scenes, including meshes, materials,
textures, skins, skeletons, morph targets, animations, lights, and/or cameras.

GLTFExporter supports the [glTF 2.0 extensions][https://github.com/KhronosGroup/glTF/tree/master/extensions/](https://github.com/KhronosGroup/glTF/tree/master/extensions/):

- KHR_lights_punctual
- KHR_materials_clearcoat
- KHR_materials_dispersion
- KHR_materials_emissive_strength
- KHR_materials_ior
- KHR_materials_iridescence
- KHR_materials_specular
- KHR_materials_sheen
- KHR_materials_transmission
- KHR_materials_unlit
- KHR_materials_volume
- KHR_mesh_quantization
- KHR_texture_transform
- EXT_materials_bump
- EXT_mesh_gpu_instancing

The following glTF 2.0 extension is supported by an external user plugin:

- [KHR_materials_variants][https://github.com/takahirox/three-gltf-extensions](https://github.com/takahirox/three-gltf-extensions)

```js
const exporter = new GLTFExporter();
const data = await exporter.parseAsync( scene, options );
```

## Constructors

### Constructor

> **new GLTFExporter**(): `GLTFExporter`

Defined in: [three/addons/exporters/GLTFExporter.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L106)

Constructs a new glTF exporter.

#### Returns

`GLTFExporter`

## Properties

### pluginCallbacks

> **pluginCallbacks**: `any`[]

Defined in: [three/addons/exporters/GLTFExporter.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L116)

***

### textureUtils

> **textureUtils**: `any`

Defined in: [three/addons/exporters/GLTFExporter.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L114)

A reference to a texture utils module.

#### Default

```ts
null
```

## Methods

### parse()

> **parse**(`input`, `onDone`, `onError`, `options`): `void`

Defined in: [three/addons/exporters/GLTFExporter.js:267](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L267)

Parses the given scenes and generates the glTF output.

#### Parameters

##### input

`any`

A scene or an array of scenes.

##### onDone

`any`

A callback function that is executed when the export has finished.

##### onError

`any`

A callback function that is executed when an error happens.

##### options

`any`

options

#### Returns

`void`

***

### parseAsync()

> **parseAsync**(`input`, `options`): `Promise`\<`string` \| `ArrayBuffer`\>

Defined in: [three/addons/exporters/GLTFExporter.js:291](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L291)

Async version of [GLTFExporter#parse](/addons/classes/gltfexporter/#parse).

#### Parameters

##### input

`any`

A scene or an array of scenes.

##### options

`any`

options.

#### Returns

`Promise`\<`string` \| `ArrayBuffer`\>

A Promise that resolved with the exported glTF data.

***

### register()

> **register**(`callback`): `GLTFExporter`

Defined in: [three/addons/exporters/GLTFExporter.js:212](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L212)

Registers a plugin callback. This API is internally used to implement the various
glTF extensions but can also used by third-party code to add additional logic
to the exporter.

#### Parameters

##### callback

`any`

The callback function to register.

#### Returns

`GLTFExporter`

A reference to this exporter.

***

### setTextureUtils()

> **setTextureUtils**(`utils`): `GLTFExporter`

Defined in: [three/addons/exporters/GLTFExporter.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L251)

Sets the texture utils for this exporter. Only relevant when compressed textures have to be exported.

Depending on whether you use WebGLRenderer or WebGPURenderer, you must inject the
corresponding texture utils WebGLTextureUtils or WebGPUTextureUtils.

#### Parameters

##### utils

`any`

The texture utils.

#### Returns

`GLTFExporter`

A reference to this exporter.

***

### unregister()

> **unregister**(`callback`): `GLTFExporter`

Defined in: [three/addons/exporters/GLTFExporter.js:230](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L230)

Unregisters a plugin callback.

#### Parameters

##### callback

`Function`

The callback function to unregister.

#### Returns

`GLTFExporter`

A reference to this exporter.

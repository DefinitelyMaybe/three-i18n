---
editUrl: false
next: false
prev: false
title: "USDZExporter"
---

Defined in: [three/addons/exporters/USDZExporter.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L20)

An exporter for USDZ.

```js
const exporter = new USDZExporter();
const arraybuffer = await exporter.parseAsync( scene );
```

## Constructors

### Constructor

> **new USDZExporter**(): `USDZExporter`

Defined in: [three/addons/exporters/USDZExporter.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L25)

Constructs a new USDZ exporter.

#### Returns

`USDZExporter`

## Properties

### textureUtils

> **textureUtils**: `any`

Defined in: [three/addons/exporters/USDZExporter.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L33)

A reference to a texture utils module.

#### Default

```ts
null
```

## Methods

### parse()

> **parse**(`scene`, `onDone`, `onError`, `options`): `void`

Defined in: [three/addons/exporters/USDZExporter.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L59)

Parse the given 3D object and generates the USDZ output.

#### Parameters

##### scene

`Object3D`

The 3D object to export.

##### onDone

`any`

A callback function that is executed when the export has finished.

##### onError

`any`

A callback function that is executed when an error happens.

##### options

`any`

The export options.

#### Returns

`void`

***

### parseAsync()

> **parseAsync**(`scene`, `options`): `Promise`\<`ArrayBuffer`\>

Defined in: [three/addons/exporters/USDZExporter.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L73)

Async version of [USDZExporter#parse](/addons/classes/usdzexporter/#parse).

#### Parameters

##### scene

`Object3D`

The 3D object to export.

##### options

The export options.

#### Returns

`Promise`\<`ArrayBuffer`\>

A Promise that resolved with the exported USDZ data.

#### Async

***

### setTextureUtils()

> **setTextureUtils**(`utils`): `void`

Defined in: [three/addons/exporters/USDZExporter.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L45)

Sets the texture utils for this exporter. Only relevant when compressed textures have to be exported.

Depending on whether you use WebGLRenderer or WebGPURenderer, you must inject the
corresponding texture utils WebGLTextureUtils or WebGPUTextureUtils.

#### Parameters

##### utils

`any`

The texture utils.

#### Returns

`void`

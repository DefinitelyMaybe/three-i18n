---
editUrl: false
next: false
prev: false
title: "EXRExporter"
---

Defined in: [three/addons/exporters/EXRExporter.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/EXRExporter.js#L30)

An exporter for EXR.

EXR ( Extended Dynamic Range) is an [open format specification][https://github.com/AcademySoftwareFoundation/openexr](https://github.com/AcademySoftwareFoundation/openexr)
for professional-grade image storage format of the motion picture industry. The purpose of
format is to accurately and efficiently represent high-dynamic-range scene-linear image data
and associated metadata. The library is widely used in host application software where accuracy
is critical, such as photorealistic rendering, texture access, image compositing, deep compositing,
and DI.

```js
const exporter = new EXRExporter();
const result = await exporter.parse( renderer, options );
```

## Constructors

### Constructor

> **new EXRExporter**(): `EXRExporter`

#### Returns

`EXRExporter`

## Methods

### parse()

> **parse**(`arg1`, `arg2`, `arg3`): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [three/addons/exporters/EXRExporter.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/EXRExporter.js#L45)

This method has two variants.

- When exporting a data texture, it receives two parameters. The texture and the exporter options.
- When exporting a render target (e.g. a PMREM), it receives three parameters. The renderer, the
render target and the exporter options.

#### Parameters

##### arg1

`any`

The data texture to export or a renderer.

##### arg2

`any`

The exporter options or a render target.

##### arg3

`any`

The exporter options.

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A Promise that resolves with the exported EXR.

#### Async

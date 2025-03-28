---
editUrl: false
next: false
prev: false
title: "KTX2Exporter"
---

Defined in: [three/addons/exporters/KTX2Exporter.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/KTX2Exporter.js#L138)

An exporter for KTX2.

```js
const exporter = new KTX2Exporter();
const result = await exporter.parse( dataTexture );
```

## Constructors

### Constructor

> **new KTX2Exporter**(): `KTX2Exporter`

#### Returns

`KTX2Exporter`

## Methods

### parse()

> **parse**(`arg1`, `arg2`?): `Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

Defined in: [three/addons/exporters/KTX2Exporter.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/KTX2Exporter.js#L152)

This method has two variants.

- When exporting a data texture, it receives one parameter. The data or 3D data texture.
- When exporting a render target (e.g. a PMREM), it receives two parameters. The renderer and the
render target.

#### Parameters

##### arg1

`any`

The data texture to export or a renderer.

##### arg2?

`RenderTarget`

The render target that should be exported

#### Returns

`Promise`\<`Uint8Array`\<`ArrayBufferLike`\>\>

A Promise that resolves with the exported KTX2.

#### Async

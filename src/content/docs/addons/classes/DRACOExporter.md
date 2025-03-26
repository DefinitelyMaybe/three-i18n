---
editUrl: false
next: false
prev: false
title: "DRACOExporter"
---

Defined in: [three/addons/exporters/DRACOExporter.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L23)

An exporter to compress geometry with the Draco library.

[Draco][https://google.github.io/draco/](https://google.github.io/draco/) is an open source library for compressing and
decompressing 3D meshes and point clouds. Compressed geometry can be significantly smaller,
at the cost of additional decoding time on the client device.

Standalone Draco files have a `.drc` extension, and contain vertex positions,
normals, colors, and other attributes. Draco files *do not* contain materials,
textures, animation, or node hierarchies – to use these features, embed Draco geometry
inside of a glTF file. A normal glTF file can be converted to a Draco-compressed glTF file
using [glTF-Pipeline][https://github.com/AnalyticalGraphicsInc/gltf-pipeline](https://github.com/AnalyticalGraphicsInc/gltf-pipeline).

```js
const exporter = new DRACOExporter();
const data = exporter.parse( mesh, options );
```

## Constructors

### Constructor

> **new DRACOExporter**(): `DRACOExporter`

#### Returns

`DRACOExporter`

## Properties

### COLOR

> `static` **COLOR**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:292](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L292)

***

### GENERIC

> `static` **GENERIC**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:294](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L294)

***

### INVALID

> `static` **INVALID**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L289)

***

### MESH\_EDGEBREAKER\_ENCODING

> `static` **MESH\_EDGEBREAKER\_ENCODING**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:270](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L270)

Edgebreaker encoding.

#### Static

#### Constant

#### Default

```ts
1
```

***

### MESH\_SEQUENTIAL\_ENCODING

> `static` **MESH\_SEQUENTIAL\_ENCODING**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:280](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L280)

Sequential encoding.

#### Static

#### Constant

#### Default

```ts
0
```

***

### NORMAL

> `static` **NORMAL**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:291](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L291)

***

### POINT\_CLOUD

> `static` **POINT\_CLOUD**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:284](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L284)

***

### POSITION

> `static` **POSITION**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:290](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L290)

***

### TEX\_COORD

> `static` **TEX\_COORD**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:293](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L293)

***

### TRIANGULAR\_MESH

> `static` **TRIANGULAR\_MESH**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:285](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L285)

## Methods

### parse()

> **parse**(`object`, `options`): `ArrayBuffer`

Defined in: [three/addons/exporters/DRACOExporter.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L32)

Parses the given mesh or point cloud and generates the Draco output.

#### Parameters

##### object

`any`

The mesh or point cloud to export.

##### options

The export options.

#### Returns

`ArrayBuffer`

The exported Draco.

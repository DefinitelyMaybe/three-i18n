---
editUrl: false
next: false
prev: false
title: "PLYExporter"
---

Defined in: [three/addons/exporters/PLYExporter.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/PLYExporter.js#L22)

An exporter for PLY.

PLY (Polygon or Stanford Triangle Format) is a file format for efficient delivery and
loading of simple, static 3D content in a dense format. Both binary and ascii formats are
supported. PLY can store vertex positions, colors, normals and uv coordinates. No textures
or texture references are saved.

```js
const exporter = new PLYExporter();
const data = exporter.parse( scene, options );
```

## Constructors

### Constructor

> **new PLYExporter**(): `PLYExporter`

#### Returns

`PLYExporter`

## Methods

### parse()

> **parse**(`object`, `onDone`, `options`): `string` \| `ArrayBuffer`

Defined in: [three/addons/exporters/PLYExporter.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/PLYExporter.js#L34)

Parses the given 3D object and generates the PLY output.

If the 3D object is composed of multiple children and geometry, they are merged into a single mesh in the file.

#### Parameters

##### object

`Object3D`

The 3D object to export.

##### onDone

`any`

A callback function that is executed when the export has finished.

##### options

The export options.

#### Returns

`string` \| `ArrayBuffer`

The exported PLY.

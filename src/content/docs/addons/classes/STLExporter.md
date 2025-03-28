---
editUrl: false
next: false
prev: false
title: "STLExporter"
---

Defined in: [three/addons/exporters/STLExporter.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/STLExporter.js#L16)

An exporter for STL.

STL files describe only the surface geometry of a three-dimensional object without
any representation of color, texture or other common model attributes. The STL format
specifies both ASCII and binary representations, with binary being more compact.
STL files contain no scale information or indexes, and the units are arbitrary.

```js
const exporter = new STLExporter();
const data = exporter.parse( mesh, { binary: true } );
```

## Constructors

### Constructor

> **new STLExporter**(): `STLExporter`

#### Returns

`STLExporter`

## Methods

### parse()

> **parse**(`scene`, `options`): `string` \| `ArrayBuffer`

Defined in: [three/addons/exporters/STLExporter.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/STLExporter.js#L27)

Parses the given 3D object and generates the STL output.

If the 3D object is composed of multiple children and geometry, they are merged into a single mesh in the file.

#### Parameters

##### scene

`Object3D`

A scene, mesh or any other 3D object containing meshes to encode.

##### options

The export options.

#### Returns

`string` \| `ArrayBuffer`

The exported STL.

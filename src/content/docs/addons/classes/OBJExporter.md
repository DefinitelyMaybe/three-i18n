---
editUrl: false
next: false
prev: false
title: "OBJExporter"
---

Defined in: [three/addons/exporters/OBJExporter.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/OBJExporter.js#L20)

An exporter for OBJ.

`OBJExporter` is not able to export material data into MTL files so only geometry data are supported.

```js
const exporter = new OBJExporter();
const data = exporter.parse( scene );
```

## Constructors

### Constructor

> **new OBJExporter**(): `OBJExporter`

#### Returns

`OBJExporter`

## Methods

### parse()

> **parse**(`object`): `string`

Defined in: [three/addons/exporters/OBJExporter.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/OBJExporter.js#L30)

Parses the given 3D object and generates the OBJ output.

If the 3D object is composed of multiple children and geometry, they are merged into a single mesh in the file.

#### Parameters

##### object

`Object3D`

The 3D object to export.

#### Returns

`string`

The exported OBJ.

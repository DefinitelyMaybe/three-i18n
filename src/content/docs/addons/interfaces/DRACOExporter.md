---
editUrl: false
next: false
prev: false
title: "DRACOExporter"
---

Defined in: [three/addons/exporters/DRACOExporter.js:309](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L309)

## Properties

### decodeSpeed?

> `optional` **decodeSpeed**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:300](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L300)

Indicates how to tune the encoder regarding decode speed (0 gives better speed but worst quality).

***

### encoderMethod?

> `optional` **encoderMethod**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:302](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L302)

Either sequential (very little compression) or Edgebreaker. Edgebreaker traverses the triangles of the mesh in a deterministic, spiral-like way which provides most of the benefits of this data format.

***

### encodeSpeed?

> `optional` **encodeSpeed**: `number`

Defined in: [three/addons/exporters/DRACOExporter.js:301](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L301)

Indicates how to tune the encoder parameters (0 gives better speed but worst quality).

***

### exportColor?

> `optional` **exportColor**: `boolean`

Defined in: [three/addons/exporters/DRACOExporter.js:306](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L306)

Whether to export colors or not.

***

### exportNormals?

> `optional` **exportNormals**: `boolean`

Defined in: [three/addons/exporters/DRACOExporter.js:305](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L305)

Whether to export normals or not.

***

### exportUvs?

> `optional` **exportUvs**: `boolean`

Defined in: [three/addons/exporters/DRACOExporter.js:304](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L304)

Whether to export UVs or not.

***

### quantization?

> `optional` **quantization**: `number`[]

Defined in: [three/addons/exporters/DRACOExporter.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/DRACOExporter.js#L303)

Indicates the precision of each type of data stored in the draco file in the order (POSITION, NORMAL, COLOR, TEX_COORD, GENERIC).

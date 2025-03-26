---
editUrl: false
next: false
prev: false
title: "PLYExporter"
---

Defined in: [three/addons/exporters/PLYExporter.js:560](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/PLYExporter.js#L560)

## Properties

### binary?

> `optional` **binary**: `boolean`

Defined in: [three/addons/exporters/PLYExporter.js:546](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/PLYExporter.js#L546)

Whether to export in binary format or ASCII.

***

### excludeAttributes?

> `optional` **excludeAttributes**: `string`[]

Defined in: [three/addons/exporters/PLYExporter.js:547](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/PLYExporter.js#L547)

Which properties to explicitly exclude from
the exported PLY file. Valid values are `'color'`, `'normal'`, `'uv'`, and `'index'`. If triangle
indices are excluded, then a point cloud is exported.

***

### littleEndian?

> `optional` **littleEndian**: `boolean`

Defined in: [three/addons/exporters/PLYExporter.js:550](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/PLYExporter.js#L550)

Whether the binary export uses little or big endian.

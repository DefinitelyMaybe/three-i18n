---
editUrl: false
next: false
prev: false
title: "GLTFExporter"
---

Defined in: [three/addons/exporters/GLTFExporter.js:3584](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L3584)

## Properties

### animations?

> `optional` **animations**: `AnimationClip`[]

Defined in: [three/addons/exporters/GLTFExporter.js:3566](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L3566)

List of animations to be included in the export.

***

### binary?

> `optional` **binary**: `boolean`

Defined in: [three/addons/exporters/GLTFExporter.js:3564](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L3564)

Export in binary (.glb) format, returning an ArrayBuffer.

***

### includeCustomExtensions?

> `optional` **includeCustomExtensions**: `boolean`

Defined in: [three/addons/exporters/GLTFExporter.js:3567](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L3567)

Export custom glTF extensions defined on an object's `userData.gltfExtensions` property.

***

### maxTextureSize?

> `optional` **maxTextureSize**: `number`

Defined in: [three/addons/exporters/GLTFExporter.js:3565](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L3565)

Restricts the image maximum size (both width and height) to the given value.

***

### onlyVisible?

> `optional` **onlyVisible**: `boolean`

Defined in: [three/addons/exporters/GLTFExporter.js:3563](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L3563)

Export only visible 3D objects.

***

### trs?

> `optional` **trs**: `boolean`

Defined in: [three/addons/exporters/GLTFExporter.js:3562](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/GLTFExporter.js#L3562)

Export position, rotation and scale instead of matrix per node.

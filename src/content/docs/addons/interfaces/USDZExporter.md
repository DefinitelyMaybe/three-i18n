---
editUrl: false
next: false
prev: false
title: "USDZExporter"
---

Defined in: [three/addons/exporters/USDZExporter.js:849](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L849)

## Properties

### ar?

> `optional` **ar**: `any`

Defined in: [three/addons/exporters/USDZExporter.js:829](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L829)

If `includeAnchoringProperties` is set to `true`, the anchoring type and alignment
can be configured via `ar.anchoring.type` and `ar.planeAnchoring.alignment`.

***

### includeAnchoringProperties?

> `optional` **includeAnchoringProperties**: `boolean`

Defined in: [three/addons/exporters/USDZExporter.js:828](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L828)

Whether to include anchoring properties or not.

***

### maxTextureSize?

> `optional` **maxTextureSize**: `number`

Defined in: [three/addons/exporters/USDZExporter.js:827](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L827)

The maximum texture size that is going to be exported.

***

### quickLookCompatible?

> `optional` **quickLookCompatible**: `boolean`

Defined in: [three/addons/exporters/USDZExporter.js:831](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/exporters/USDZExporter.js#L831)

Whether to make the exported USDZ compatible to QuickLook
which means the asset is modified to accommodate the bugs FB10036297 and FB11442287 (Apple Feedback).

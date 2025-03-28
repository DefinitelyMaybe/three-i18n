---
editUrl: false
next: false
prev: false
title: "UVsDebug"
---

> **UVsDebug**(`geometry`, `size`?): `HTMLCanvasElement`

Defined in: [three/addons/utils/UVsDebug.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/UVsDebug.js#L18)

Function for "unwrapping" and debugging three.js geometries UV mapping.

```js
document.body.appendChild( UVsDebug( new THREE.SphereGeometry() ) );
```

## Parameters

### geometry

`BufferGeometry`

The geometry whose uv coordinates should be inspected.

### size?

`number` = `1024`

The size of the debug canvas.

## Returns

`HTMLCanvasElement`

A canvas element with visualized uv coordinates.

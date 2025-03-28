---
editUrl: false
next: false
prev: false
title: "getParallaxCorrectNormal"
---

> **getParallaxCorrectNormal**(...`params`): `any`

Defined in: [three/src/nodes/functions/material/getParallaxCorrectNormal.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/material/getParallaxCorrectNormal.js#L21)

This computes a parallax corrected normal which is used for box-projected cube mapping (BPCEM).

Reference: [https://devlog-martinsh.blogspot.com/2011/09/box-projected-cube-environment-mapping.html](https://devlog-martinsh.blogspot.com/2011/09/box-projected-cube-environment-mapping.html)

```js
const uvNode = getParallaxCorrectNormal( reflectVector, vec3( 200, 100, 100 ), vec3( 0, - 50, 0 ) );
material.envNode = pmremTexture( renderTarget.texture, uvNode );
```

## Parameters

### params

...`any`[]

## Returns

`any`

The parallax corrected normal.

## Tsl

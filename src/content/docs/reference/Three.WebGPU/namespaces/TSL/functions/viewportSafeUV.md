---
editUrl: false
next: false
prev: false
title: "viewportSafeUV"
---

> **viewportSafeUV**(...`params`): `any`

Defined in: [three/src/nodes/utils/ViewportUtils.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/utils/ViewportUtils.js#L18)

A special version of a screen uv function that involves a depth comparison
when computing the final uvs. The function mitigates visual errors when
using viewport texture nodes for refraction purposes. Without this function
objects in front of a refractive surface might appear on the refractive surface
which is incorrect.

## Parameters

### params

...`any`[]

## Returns

`any`

The update uv coordinates.

## Tsl

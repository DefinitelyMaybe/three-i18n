---
editUrl: false
next: false
prev: false
title: "computeMorphedAttributes"
---

> **computeMorphedAttributes**(`object`): `any`

Defined in: [three/addons/utils/BufferGeometryUtils.js:922](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/BufferGeometryUtils.js#L922)

Calculates the morphed attributes of a morphed/skinned BufferGeometry.

Helpful for Raytracing or Decals (i.e. a `DecalGeometry` applied to a morphed Object with a `BufferGeometry`
will use the original `BufferGeometry`, not the morphed/skinned one, generating an incorrect result.
Using this function to create a shadow `Object3`D the `DecalGeometry` can be correctly generated).

## Parameters

### object

`any`

The 3D object to compute morph attributes for.

## Returns

`any`

An object with original position/normal attributes and morphed ones.

---
editUrl: false
next: false
prev: false
title: "createMultiMaterialObject"
---

> **createMultiMaterialObject**(`geometry`, `materials`): `Group`

Defined in: [three/addons/utils/SceneUtils.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/SceneUtils.js#L140)

This function represents an alternative way to create 3D objects with multiple materials.
Normally, BufferGeometry#groups are used which might introduce issues e.g. when
exporting the object to a 3D format. This function accepts a geometry and an array of
materials and creates for each material a mesh that is added to a group.

## Parameters

### geometry

`BufferGeometry`

The geometry.

### materials

`Material`[]

An array of materials.

## Returns

`Group`

A group representing a multi-material object.

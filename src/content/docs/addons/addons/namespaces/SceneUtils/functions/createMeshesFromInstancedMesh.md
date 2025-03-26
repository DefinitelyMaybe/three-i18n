---
editUrl: false
next: false
prev: false
title: "createMeshesFromInstancedMesh"
---

> **createMeshesFromInstancedMesh**(`instancedMesh`): `Group`

Defined in: [three/addons/utils/SceneUtils.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/SceneUtils.js#L26)

This function creates a mesh for each instance of the given instanced mesh and
adds it to a group. Each mesh will honor the current 3D transformation of its
corresponding instance.

## Parameters

### instancedMesh

`InstancedMesh`

The instanced mesh.

## Returns

`Group`

A group of meshes.

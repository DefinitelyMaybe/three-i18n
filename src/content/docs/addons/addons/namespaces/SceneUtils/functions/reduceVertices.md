---
editUrl: false
next: false
prev: false
title: "reduceVertices"
---

> **reduceVertices**(`object`, `func`, `initialValue`): `any`

Defined in: [three/addons/utils/SceneUtils.js:166](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/SceneUtils.js#L166)

Executes a reducer function for each vertex of the given 3D object.
`reduceVertices()` returns a single value: the function's accumulated result.

## Parameters

### object

`Object3D`

The 3D object that should be processed. It must have a
geometry with a `position` attribute.

### func

(`arg0`, `arg1`) => `number`

The reducer function. First argument
is the current value, second argument the current vertex.

### initialValue

`any`

The initial value.

## Returns

`any`

The result.

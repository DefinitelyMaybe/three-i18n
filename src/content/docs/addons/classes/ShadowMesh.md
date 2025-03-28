---
editUrl: false
next: false
prev: false
title: "ShadowMesh"
---

Defined in: [three/addons/objects/ShadowMesh.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ShadowMesh.js#L27)

A Shadow Mesh that follows a shadow-casting mesh in the scene,
but is confined to a single plane. This technique can be used as
a very performant alternative to classic shadow mapping. However,
it has serious limitations like:

- Shadows can only be casted on flat planes.
- No soft shadows support.

```js
const cubeShadow = new ShadowMesh( cube );
scene.add( cubeShadow );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new ShadowMesh**(`mesh`): `ShadowMesh`

Defined in: [three/addons/objects/ShadowMesh.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ShadowMesh.js#L34)

Constructs a new shadow mesh.

#### Parameters

##### mesh

`Mesh`

The shadow-casting reference mesh.

#### Returns

`ShadowMesh`

#### Overrides

`Mesh.constructor`

## Properties

### frustumCulled

> **frustumCulled**: `boolean`

Defined in: [three/addons/objects/ShadowMesh.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ShadowMesh.js#L73)

Overwritten to disable view-frustum culling by default.

#### Default

```ts
false
```

***

### isShadowMesh

> `readonly` **isShadowMesh**: `boolean`

Defined in: [three/addons/objects/ShadowMesh.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ShadowMesh.js#L58)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

Defined in: [three/addons/objects/ShadowMesh.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ShadowMesh.js#L82)

Overwritten to disable automatic matrix update. The local
matrix is computed manually in [ShadowMesh#update](/addons/classes/shadowmesh/#update).

#### Default

```ts
false
```

***

### meshMatrix

> **meshMatrix**: `Matrix4`

Defined in: [three/addons/objects/ShadowMesh.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ShadowMesh.js#L65)

Represent the world matrix of the reference mesh.

## Methods

### update()

> **update**(`plane`, `lightPosition4D`): `void`

Defined in: [three/addons/objects/ShadowMesh.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/ShadowMesh.js#L92)

Updates the shadow mesh so it follows its shadow-casting reference mesh.

#### Parameters

##### plane

`Plane`

The plane onto the shadow mesh is projected.

##### lightPosition4D

`Vector4`

The light position.

#### Returns

`void`

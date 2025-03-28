---
editUrl: false
next: false
prev: false
title: "DecalGeometry"
---

Defined in: [three/addons/geometries/DecalGeometry.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/DecalGeometry.js#L29)

This class can be used to create a decal mesh that serves different kinds of purposes e.g.
adding unique details to models, performing dynamic visual environmental changes or covering seams.

Please not that decal projections can be distorted when used around corners. More information at
this GitHub issue: [Decal projections without distortions][https://github.com/mrdoob/three.js/issues/21187](https://github.com/mrdoob/three.js/issues/21187).

Reference: [How to project decals][http://blog.wolfire.com/2009/06/how-to-project-decals/](http://blog.wolfire.com/2009/06/how-to-project-decals/)

```js
const geometry = new DecalGeometry( mesh, position, orientation, size );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new DecalGeometry**(`mesh`?, `position`?, `orientation`?, `size`?): `DecalGeometry`

Defined in: [three/addons/geometries/DecalGeometry.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/DecalGeometry.js#L39)

Constructs a new decal geometry.

#### Parameters

##### mesh?

`Mesh` = `...`

The base mesh the decal should be projected on.

##### position?

`Vector3` = `...`

The position of the decal projector.

##### orientation?

`Euler` = `...`

The orientation of the decal projector.

##### size?

`Vector3` = `...`

Tje scale of the decal projector.

#### Returns

`DecalGeometry`

#### Overrides

`BufferGeometry.constructor`

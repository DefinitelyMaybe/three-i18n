---
editUrl: false
next: false
prev: false
title: "ConvexGeometry"
---

Defined in: [three/addons/geometries/ConvexGeometry.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/ConvexGeometry.js#L20)

This class can be used to generate a convex hull for a given array of 3D points.
The average time complexity for this task is considered to be O(nlog(n)).

```js
const geometry = new ConvexGeometry( points );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new ConvexGeometry**(`points`): `ConvexGeometry`

Defined in: [three/addons/geometries/ConvexGeometry.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/ConvexGeometry.js#L27)

Constructs a new convex geometry.

#### Parameters

##### points

`Vector3`[] = `[]`

An array of points in 3D space which should be enclosed by the convex hull.

#### Returns

`ConvexGeometry`

#### Overrides

`BufferGeometry.constructor`

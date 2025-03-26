---
editUrl: false
next: false
prev: false
title: "RoundedBoxGeometry"
---

Defined in: [three/addons/geometries/RoundedBoxGeometry.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/RoundedBoxGeometry.js#L53)

A special type of box geometry with rounded corners and edges.

```js
const geometry = new THREE.RoundedBoxGeometry();
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new RoundedBoxGeometry**(`width`?, `height`?, `depth`?, `segments`?, `radius`?): `RoundedBoxGeometry`

Defined in: [three/addons/geometries/RoundedBoxGeometry.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/RoundedBoxGeometry.js#L64)

Constructs a new rounded box geometry.

#### Parameters

##### width?

`number` = `1`

The width. That is, the length of the edges parallel to the X axis.

##### height?

`number` = `1`

The height. That is, the length of the edges parallel to the Y axis.

##### depth?

`number` = `1`

The depth. That is, the length of the edges parallel to the Z axis.

##### segments?

`number` = `2`

Number of segmented that form the rounded corners.

##### radius?

`number` = `0.1`

The radius of the rounded corners.

#### Returns

`RoundedBoxGeometry`

#### Overrides

`BoxGeometry.constructor`

## Properties

### index

> **index**: `any`

Defined in: [three/addons/geometries/RoundedBoxGeometry.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/RoundedBoxGeometry.js#L79)

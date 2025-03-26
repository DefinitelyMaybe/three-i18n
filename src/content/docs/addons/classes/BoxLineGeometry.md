---
editUrl: false
next: false
prev: false
title: "BoxLineGeometry"
---

Defined in: [three/addons/geometries/BoxLineGeometry.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/BoxLineGeometry.js#L18)

A special type of box geometry intended for LineSegments.

```js
const geometry = new THREE.BoxLineGeometry();
const material = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
const lines = new THREE.LineSegments( geometry, material );
scene.add( lines );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new BoxLineGeometry**(`width`?, `height`?, `depth`?, `widthSegments`?, `heightSegments`?, `depthSegments`?): `BoxLineGeometry`

Defined in: [three/addons/geometries/BoxLineGeometry.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/BoxLineGeometry.js#L30)

Constructs a new box line geometry.

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

##### widthSegments?

`number` = `1`

Number of segmented rectangular sections along the width of the sides.

##### heightSegments?

`number` = `1`

Number of segmented rectangular sections along the height of the sides.

##### depthSegments?

`number` = `1`

Number of segmented rectangular sections along the depth of the sides.

#### Returns

`BoxLineGeometry`

#### Overrides

`BufferGeometry.constructor`

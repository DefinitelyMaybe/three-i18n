---
editUrl: false
next: false
prev: false
title: "TeapotGeometry"
---

Defined in: [three/addons/geometries/TeapotGeometry.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/TeapotGeometry.js#L30)

Tessellates the famous Utah teapot database by Martin Newell into triangles.

The teapot should normally be rendered as a double sided object, since for some
patches both sides can be seen, e.g., the gap around the lid and inside the spout.

Segments 'n' determines the number of triangles output. Total triangles = 32*2*n*n - 8*n
(degenerates at the top and bottom cusps are deleted).

Code based on [SPD software][http://tog.acm.org/resources/SPD/](http://tog.acm.org/resources/SPD/)
Created for the Udacity course [Interactive Rendering][http://bit.ly/ericity](http://bit.ly/ericity)

```js
const geometry = new TeapotGeometry( 50, 18 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const teapot = new THREE.Mesh( geometry, material );
scene.add( teapot );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new TeapotGeometry**(`size`?, `segments`?, `bottom`?, `lid`?, `body`?, `fitLid`?, `blinn`?): `TeapotGeometry`

Defined in: [three/addons/geometries/TeapotGeometry.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/TeapotGeometry.js#L43)

Constructs a new teapot geometry.

#### Parameters

##### size?

`number` = `50`

Relative scale of the teapot.

##### segments?

`number` = `10`

Number of line segments to subdivide each patch edge.

##### bottom?

`boolean` = `true`

Whether the bottom of the teapot is generated or not.

##### lid?

`boolean` = `true`

Whether the lid is generated or not.

##### body?

`boolean` = `true`

Whether the body is generated or not.

##### fitLid?

`boolean` = `true`

Whether the lid is slightly stretched to prevent gaps between the body and lid or not.

##### blinn?

`boolean` = `true`

Whether the teapot is scaled vertically for better aesthetics or not.

#### Returns

`TeapotGeometry`

#### Overrides

`BufferGeometry.constructor`

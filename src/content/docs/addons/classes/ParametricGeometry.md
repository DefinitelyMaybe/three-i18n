---
editUrl: false
next: false
prev: false
title: "ParametricGeometry"
---

Defined in: [three/addons/geometries/ParametricGeometry.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/ParametricGeometry.js#L21)

This class can be used to generate a geometry based on a parametric surface.

Reference: [Mesh Generation with Python][https://prideout.net/blog/old/blog/index.html@p=44.html](https://prideout.net/blog/old/blog/index.html@p=44.html)

```js
const geometry = new THREE.ParametricGeometry( klein, 25, 25 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const klein = new THREE.Mesh( geometry, material );
scene.add( klein );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new ParametricGeometry**(`func`, `slices`?, `stacks`?): `ParametricGeometry`

Defined in: [three/addons/geometries/ParametricGeometry.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/ParametricGeometry.js#L30)

Constructs a new parametric geometry.

#### Parameters

##### func

(`u`, `v`, `target`) => `any`

The parametric function. Default is a function that generates a curved plane surface.

##### slices?

`number` = `8`

The number of slices to use for the parametric function.

##### stacks?

`number` = `8`

The stacks of slices to use for the parametric function.

#### Returns

`ParametricGeometry`

#### Overrides

`BufferGeometry.constructor`

## Properties

### parameters

> **parameters**: `any`

Defined in: [three/addons/geometries/ParametricGeometry.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/ParametricGeometry.js#L43)

Holds the constructor parameters that have been
used to generate the geometry. Any modification
after instantiation does not change the geometry.

***

### type

> **type**: `string`

Defined in: [three/addons/geometries/ParametricGeometry.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/ParametricGeometry.js#L34)

## Methods

### copy()

> **copy**(`source`): `ParametricGeometry`

Defined in: [three/addons/geometries/ParametricGeometry.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/ParametricGeometry.js#L150)

#### Parameters

##### source

`any`

#### Returns

`ParametricGeometry`

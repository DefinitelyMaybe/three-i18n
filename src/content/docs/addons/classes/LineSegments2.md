---
editUrl: false
next: false
prev: false
title: "LineSegments2"
---

Defined in: [three/addons/lines/LineSegments2.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L232)

A series of lines drawn between pairs of vertices.

This adds functionality beyond LineSegments, like arbitrary line width and changing width
to be in world units. [Line2](/addons/classes/line2/) extends this object, forming a polyline instead of individual
segments.

This module can only be used with WebGLRenderer. When using WebGPURenderer,
import the class from `lines/webgpu/LineSegments2.js`.

 ```js
const geometry = new LineSegmentsGeometry();
geometry.setPositions( positions );
geometry.setColors( colors );

const material = new LineMaterial( { linewidth: 5, vertexColors: true } };

const lineSegments = new LineSegments2( geometry, material );
scene.add( lineSegments );
```

## Extends

- `unknown`

## Extended by

- [`Line2`](/addons/classes/line2/)

## Constructors

### Constructor

> **new LineSegments2**(`geometry`?, `material`?): `LineSegments2`

Defined in: [three/addons/lines/LineSegments2.js:239](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L239)

Constructs a new wide line.

#### Parameters

##### geometry?

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/) = `...`

The line geometry.

##### material?

[`LineMaterial`](/addons/classes/linematerial/) = `...`

The line material.

#### Returns

`LineSegments2`

#### Overrides

`Mesh.constructor`

## Properties

### isLineSegments2

> `readonly` **isLineSegments2**: `boolean`

Defined in: [three/addons/lines/LineSegments2.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L252)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### type

> **type**: `string`

Defined in: [three/addons/lines/LineSegments2.js:254](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L254)

## Methods

### computeLineDistances()

> **computeLineDistances**(): `LineSegments2`

Defined in: [three/addons/lines/LineSegments2.js:264](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L264)

Computes an array of distance values which are necessary for rendering dashed lines.
For each vertex in the geometry, the method calculates the cumulative length from the
current point to the very beginning of the line.

#### Returns

`LineSegments2`

A reference to this instance.

***

### onBeforeRender()

> **onBeforeRender**(`renderer`): `void`

Defined in: [three/addons/lines/LineSegments2.js:393](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L393)

#### Parameters

##### renderer

`any`

#### Returns

`void`

***

### raycast()

> **raycast**(`raycaster`, `intersects`): `void`

Defined in: [three/addons/lines/LineSegments2.js:305](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L305)

Computes intersection points between a casted ray and this instance.

#### Parameters

##### raycaster

`Raycaster`

The raycaster.

##### intersects

`any`[]

The target array that holds the intersection points.

#### Returns

`void`

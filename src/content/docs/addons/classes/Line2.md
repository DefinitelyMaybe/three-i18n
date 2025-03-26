---
editUrl: false
next: false
prev: false
title: "Line2"
---

Defined in: [three/addons/lines/Line2.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Line2.js#L28)

A polyline drawn between vertices.

This adds functionality beyond Line, like arbitrary line width and changing width to
be in world units.It extends [LineSegments2](/addons/classes/linesegments2/), simplifying constructing segments from a
chain of points.

This module can only be used with WebGLRenderer. When using WebGPURenderer,
import the class from `lines/webgpu/Line2.js`.

```js
const geometry = new LineGeometry();
geometry.setPositions( positions );
geometry.setColors( colors );

const material = new LineMaterial( { linewidth: 5, vertexColors: true } };

const line = new Line2( geometry, material );
scene.add( line );
```

## Extends

- [`LineSegments2`](/addons/classes/linesegments2/)

## Constructors

### Constructor

> **new Line2**(`geometry`?, `material`?): `Line2`

Defined in: [three/addons/lines/Line2.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Line2.js#L35)

Constructs a new wide line.

#### Parameters

##### geometry?

[`LineGeometry`](/addons/classes/linegeometry/) = `...`

The line geometry.

##### material?

[`LineMaterial`](/addons/classes/linematerial/) = `...`

The line material.

#### Returns

`Line2`

#### Overrides

[`LineSegments2`](/addons/classes/linesegments2/).[`constructor`](/addons/classes/linesegments2/#constructor)

## Properties

### isLine2

> `readonly` **isLine2**: `boolean`

Defined in: [three/addons/lines/Line2.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Line2.js#L48)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isLineSegments2

> `readonly` **isLineSegments2**: `boolean`

Defined in: [three/addons/lines/LineSegments2.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L252)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`LineSegments2`](/addons/classes/linesegments2/).[`isLineSegments2`](/addons/classes/linesegments2/#islinesegments2)

***

### type

> **type**: `string`

Defined in: [three/addons/lines/Line2.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Line2.js#L50)

#### Inherited from

[`LineSegments2`](/addons/classes/linesegments2/).[`type`](/addons/classes/linesegments2/#type)

## Methods

### computeLineDistances()

> **computeLineDistances**(): [`LineSegments2`](/addons/classes/linesegments2/)

Defined in: [three/addons/lines/LineSegments2.js:264](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L264)

Computes an array of distance values which are necessary for rendering dashed lines.
For each vertex in the geometry, the method calculates the cumulative length from the
current point to the very beginning of the line.

#### Returns

[`LineSegments2`](/addons/classes/linesegments2/)

A reference to this instance.

#### Inherited from

[`LineSegments2`](/addons/classes/linesegments2/).[`computeLineDistances`](/addons/classes/linesegments2/#computelinedistances)

***

### onBeforeRender()

> **onBeforeRender**(`renderer`): `void`

Defined in: [three/addons/lines/LineSegments2.js:393](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegments2.js#L393)

#### Parameters

##### renderer

`any`

#### Returns

`void`

#### Inherited from

[`LineSegments2`](/addons/classes/linesegments2/).[`onBeforeRender`](/addons/classes/linesegments2/#onbeforerender)

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

#### Inherited from

[`LineSegments2`](/addons/classes/linesegments2/).[`raycast`](/addons/classes/linesegments2/#raycast)

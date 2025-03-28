---
editUrl: false
next: false
prev: false
title: "LineSegmentsGeometry"
---

Defined in: [three/addons/lines/LineSegmentsGeometry.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L22)

A series of vertex pairs, forming line segments.

This is used in [LineSegments2](/addons/classes/linesegments2/) to describe the shape.

## Extends

- `unknown`

## Extended by

- [`LineGeometry`](/addons/classes/linegeometry/)
- [`WireframeGeometry2`](/addons/classes/wireframegeometry2/)

## Constructors

### Constructor

> **new LineSegmentsGeometry**(): `LineSegmentsGeometry`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L27)

Constructs a new line segments geometry.

#### Returns

`LineSegmentsGeometry`

#### Overrides

`InstancedBufferGeometry.constructor`

## Properties

### boundingBox

> **boundingBox**: `any`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:223](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L223)

***

### boundingSphere

> **boundingSphere**: `any`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L246)

***

### instanceCount

> **instanceCount**: `any`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L115)

***

### isLineSegmentsGeometry

> `readonly` **isLineSegmentsGeometry**: `boolean`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L38)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### type

> **type**: `string`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L40)

## Methods

### applyMatrix4()

> **applyMatrix4**(`matrix`): `LineSegmentsGeometry`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L58)

Applies the given 4x4 transformation matrix to the geometry.

#### Parameters

##### matrix

`Matrix4`

The matrix to apply.

#### Returns

`LineSegmentsGeometry`

A reference to this instance.

***

### computeBoundingBox()

> **computeBoundingBox**(): `void`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L219)

#### Returns

`void`

***

### computeBoundingSphere()

> **computeBoundingSphere**(): `void`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L242)

#### Returns

`void`

***

### fromEdgesGeometry()

> **fromEdgesGeometry**(`geometry`): `LineSegmentsGeometry`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L176)

Setups this line segments geometry from the given edges geometry.

#### Parameters

##### geometry

`EdgesGeometry`

The geometry that should be used as a data source for this geometry.

#### Returns

`LineSegmentsGeometry`

A reference to this geometry.

***

### fromLineSegments()

> **fromLineSegments**(`lineSegments`): `LineSegmentsGeometry`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L207)

Setups this line segments geometry from the given line segments.

#### Parameters

##### lineSegments

`LineSegments`

The line segments that should be used as a data source for this geometry.
Assumes the source geometry is not using indices.

#### Returns

`LineSegmentsGeometry`

A reference to this geometry.

***

### fromMesh()

> **fromMesh**(`mesh`): `LineSegmentsGeometry`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L190)

Setups this line segments geometry from the given mesh.

#### Parameters

##### mesh

`Mesh`

The mesh geometry that should be used as a data source for this geometry.

#### Returns

`LineSegmentsGeometry`

A reference to this geometry.

***

### fromWireframeGeometry()

> **fromWireframeGeometry**(`geometry`): `LineSegmentsGeometry`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:162](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L162)

Setups this line segments geometry from the given wireframe geometry.

#### Parameters

##### geometry

`WireframeGeometry`

The geometry that should be used as a data source for this geometry.

#### Returns

`LineSegmentsGeometry`

A reference to this geometry.

***

### setColors()

> **setColors**(`array`): `LineSegmentsGeometry`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L133)

Sets the given line colors for this geometry. The length must be a multiple of six since
each line segment is defined by a start end color in the pattern `(rgb rgb)`.

#### Parameters

##### array

`any`

The position data to set.

#### Returns

`LineSegmentsGeometry`

A reference to this geometry.

***

### setPositions()

> **setPositions**(`array`): `LineSegmentsGeometry`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L96)

Sets the given line positions for this geometry. The length must be a multiple of six since
each line segment is defined by a start end vertex in the pattern `(xyz xyz)`.

#### Parameters

##### array

`any`

The position data to set.

#### Returns

`LineSegmentsGeometry`

A reference to this geometry.

***

### toJSON()

> **toJSON**(): `void`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L289)

#### Returns

`void`

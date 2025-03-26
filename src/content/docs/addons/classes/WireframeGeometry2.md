---
editUrl: false
next: false
prev: false
title: "WireframeGeometry2"
---

Defined in: [three/addons/lines/WireframeGeometry2.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/WireframeGeometry2.js#L16)

A special type of line segments geometry intended for wireframe rendering.

This is used in [Wireframe](/addons/classes/wireframe/) to describe the shape.

```js
const geometry = new THREE.IcosahedronGeometry();
const wireframeGeometry = new WireframeGeometry2( geo );
```

## Extends

- [`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

## Constructors

### Constructor

> **new WireframeGeometry2**(`geometry`?): `WireframeGeometry2`

Defined in: [three/addons/lines/WireframeGeometry2.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/WireframeGeometry2.js#L22)

Constructs a new wireframe geometry.

#### Parameters

##### geometry?

`BufferGeometry`

The geometry to render the wireframe for.

#### Returns

`WireframeGeometry2`

#### Overrides

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`constructor`](/addons/classes/linesegmentsgeometry/#constructor)

## Properties

### boundingBox

> **boundingBox**: `any`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:223](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L223)

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`boundingBox`](/addons/classes/linesegmentsgeometry/#boundingbox)

***

### boundingSphere

> **boundingSphere**: `any`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L246)

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`boundingSphere`](/addons/classes/linesegmentsgeometry/#boundingsphere)

***

### instanceCount

> **instanceCount**: `any`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L115)

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`instanceCount`](/addons/classes/linesegmentsgeometry/#instancecount)

***

### isLineSegmentsGeometry

> `readonly` **isLineSegmentsGeometry**: `boolean`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L38)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`isLineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/#islinesegmentsgeometry)

***

### isWireframeGeometry2

> `readonly` **isWireframeGeometry2**: `boolean`

Defined in: [three/addons/lines/WireframeGeometry2.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/WireframeGeometry2.js#L32)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### type

> **type**: `string`

Defined in: [three/addons/lines/WireframeGeometry2.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/WireframeGeometry2.js#L34)

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`type`](/addons/classes/linesegmentsgeometry/#type)

## Methods

### applyMatrix4()

> **applyMatrix4**(`matrix`): [`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

Defined in: [three/addons/lines/LineSegmentsGeometry.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L58)

Applies the given 4x4 transformation matrix to the geometry.

#### Parameters

##### matrix

`Matrix4`

The matrix to apply.

#### Returns

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

A reference to this instance.

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`applyMatrix4`](/addons/classes/linesegmentsgeometry/#applymatrix4)

***

### computeBoundingBox()

> **computeBoundingBox**(): `void`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L219)

#### Returns

`void`

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`computeBoundingBox`](/addons/classes/linesegmentsgeometry/#computeboundingbox)

***

### computeBoundingSphere()

> **computeBoundingSphere**(): `void`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L242)

#### Returns

`void`

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`computeBoundingSphere`](/addons/classes/linesegmentsgeometry/#computeboundingsphere)

***

### fromEdgesGeometry()

> **fromEdgesGeometry**(`geometry`): [`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

Defined in: [three/addons/lines/LineSegmentsGeometry.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L176)

Setups this line segments geometry from the given edges geometry.

#### Parameters

##### geometry

`EdgesGeometry`

The geometry that should be used as a data source for this geometry.

#### Returns

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

A reference to this geometry.

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`fromEdgesGeometry`](/addons/classes/linesegmentsgeometry/#fromedgesgeometry)

***

### fromLineSegments()

> **fromLineSegments**(`lineSegments`): [`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

Defined in: [three/addons/lines/LineSegmentsGeometry.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L207)

Setups this line segments geometry from the given line segments.

#### Parameters

##### lineSegments

`LineSegments`

The line segments that should be used as a data source for this geometry.
Assumes the source geometry is not using indices.

#### Returns

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

A reference to this geometry.

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`fromLineSegments`](/addons/classes/linesegmentsgeometry/#fromlinesegments)

***

### fromMesh()

> **fromMesh**(`mesh`): [`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

Defined in: [three/addons/lines/LineSegmentsGeometry.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L190)

Setups this line segments geometry from the given mesh.

#### Parameters

##### mesh

`Mesh`

The mesh geometry that should be used as a data source for this geometry.

#### Returns

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

A reference to this geometry.

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`fromMesh`](/addons/classes/linesegmentsgeometry/#frommesh)

***

### fromWireframeGeometry()

> **fromWireframeGeometry**(`geometry`): [`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

Defined in: [three/addons/lines/LineSegmentsGeometry.js:162](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L162)

Setups this line segments geometry from the given wireframe geometry.

#### Parameters

##### geometry

`WireframeGeometry`

The geometry that should be used as a data source for this geometry.

#### Returns

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

A reference to this geometry.

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`fromWireframeGeometry`](/addons/classes/linesegmentsgeometry/#fromwireframegeometry)

***

### setColors()

> **setColors**(`array`): [`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

Defined in: [three/addons/lines/LineSegmentsGeometry.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L133)

Sets the given line colors for this geometry. The length must be a multiple of six since
each line segment is defined by a start end color in the pattern `(rgb rgb)`.

#### Parameters

##### array

`any`

The position data to set.

#### Returns

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

A reference to this geometry.

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`setColors`](/addons/classes/linesegmentsgeometry/#setcolors)

***

### setPositions()

> **setPositions**(`array`): [`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

Defined in: [three/addons/lines/LineSegmentsGeometry.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L96)

Sets the given line positions for this geometry. The length must be a multiple of six since
each line segment is defined by a start end vertex in the pattern `(xyz xyz)`.

#### Parameters

##### array

`any`

The position data to set.

#### Returns

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/)

A reference to this geometry.

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`setPositions`](/addons/classes/linesegmentsgeometry/#setpositions)

***

### toJSON()

> **toJSON**(): `void`

Defined in: [three/addons/lines/LineSegmentsGeometry.js:289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineSegmentsGeometry.js#L289)

#### Returns

`void`

#### Inherited from

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/).[`toJSON`](/addons/classes/linesegmentsgeometry/#tojson)

---
editUrl: false
next: false
prev: false
title: "VertexTangentsHelper"
---

Defined in: [three/addons/helpers/VertexTangentsHelper.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexTangentsHelper.js#L24)

Visualizes an object's vertex tangents.

Requires that tangents have been specified in the geometry as a buffer attribute or
have been calculated using BufferGeometry#computeTangents.
```js
const helper = new VertexTangentsHelper( mesh, 1, 0xff0000 );
scene.add( helper );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new VertexTangentsHelper**(`object`, `size`?, `color`?): `VertexTangentsHelper`

Defined in: [three/addons/helpers/VertexTangentsHelper.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexTangentsHelper.js#L33)

Constructs a new vertex tangents helper.

#### Parameters

##### object

`Object3D`

The object for which to visualize vertex tangents.

##### size?

`number` = `1`

The helper's size.

##### color?

`any` = `0x00ffff`

The helper's color.

#### Returns

`VertexTangentsHelper`

#### Overrides

`LineSegments.constructor`

## Properties

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

Defined in: [three/addons/helpers/VertexTangentsHelper.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexTangentsHelper.js#L68)

Overwritten and set to `false` since the object's world transformation
is encoded in the helper's geometry data.

#### Default

```ts
false
```

***

### object

> **object**: `Object3D`

Defined in: [three/addons/helpers/VertexTangentsHelper.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexTangentsHelper.js#L49)

The object for which to visualize vertex tangents.

***

### size

> **size**: `number`

Defined in: [three/addons/helpers/VertexTangentsHelper.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexTangentsHelper.js#L57)

The helper's size.

#### Default

```ts
1
```

***

### type

> **type**: `string`

Defined in: [three/addons/helpers/VertexTangentsHelper.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexTangentsHelper.js#L59)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/helpers/VertexTangentsHelper.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexTangentsHelper.js#L123)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [three/addons/helpers/VertexTangentsHelper.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexTangentsHelper.js#L77)

Updates the vertex normals preview based on the object's world transform.

#### Returns

`void`

---
editUrl: false
next: false
prev: false
title: "VertexNormalsHelper"
---

Defined in: [three/addons/helpers/VertexNormalsHelper.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L31)

Visualizes an object's vertex normals.

Requires that normals have been specified in the geometry as a buffer attribute or
have been calculated using BufferGeometry#computeVertexNormals.
```js
const geometry = new THREE.BoxGeometry( 10, 10, 10, 2, 2, 2 );
const material = new THREE.MeshStandardMaterial();
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const helper = new VertexNormalsHelper( mesh, 1, 0xff0000 );
scene.add( helper );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new VertexNormalsHelper**(`object`, `size`?, `color`?): `VertexNormalsHelper`

Defined in: [three/addons/helpers/VertexNormalsHelper.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L40)

Constructs a new vertex normals helper.

#### Parameters

##### object

`Object3D`

The object for which to visualize vertex normals.

##### size?

`number` = `1`

The helper's size.

##### color?

`any` = `0xff0000`

The helper's color.

#### Returns

`VertexNormalsHelper`

#### Overrides

`LineSegments.constructor`

## Properties

### isVertexNormalsHelper

> `readonly` **isVertexNormalsHelper**: `boolean`

Defined in: [three/addons/helpers/VertexNormalsHelper.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L84)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

Defined in: [three/addons/helpers/VertexNormalsHelper.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L75)

Overwritten and set to `false` since the object's world transformation
is encoded in the helper's geometry data.

#### Default

```ts
false
```

***

### object

> **object**: `Object3D`

Defined in: [three/addons/helpers/VertexNormalsHelper.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L56)

The object for which to visualize vertex normals.

***

### size

> **size**: `number`

Defined in: [three/addons/helpers/VertexNormalsHelper.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L64)

The helper's size.

#### Default

```ts
1
```

***

### type

> **type**: `string`

Defined in: [three/addons/helpers/VertexNormalsHelper.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L66)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/helpers/VertexNormalsHelper.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L145)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [three/addons/helpers/VertexNormalsHelper.js:93](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/VertexNormalsHelper.js#L93)

Updates the vertex normals preview based on the object's world transform.

#### Returns

`void`

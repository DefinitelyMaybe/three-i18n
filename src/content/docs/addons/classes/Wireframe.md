---
editUrl: false
next: false
prev: false
title: "Wireframe"
---

Defined in: [three/addons/lines/Wireframe.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Wireframe.js#L31)

A class for creating wireframes based on wide lines.

This module can only be used with WebGLRenderer. When using WebGPURenderer,
import the class from `lines/webgpu/Wireframe.js`.

```js
const geometry = new THREE.IcosahedronGeometry();
const wireframeGeometry = new WireframeGeometry2( geo );

const wireframe = new Wireframe( wireframeGeometry, material );
scene.add( wireframe );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new Wireframe**(`geometry`?, `material`?): `Wireframe`

Defined in: [three/addons/lines/Wireframe.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Wireframe.js#L38)

Constructs a new wireframe.

#### Parameters

##### geometry?

[`LineSegmentsGeometry`](/addons/classes/linesegmentsgeometry/) = `...`

The line geometry.

##### material?

[`LineMaterial`](/addons/classes/linematerial/) = `...`

The line material.

#### Returns

`Wireframe`

#### Overrides

`Mesh.constructor`

## Properties

### isWireframe

> `readonly` **isWireframe**: `boolean`

Defined in: [three/addons/lines/Wireframe.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Wireframe.js#L51)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### type

> **type**: `string`

Defined in: [three/addons/lines/Wireframe.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Wireframe.js#L53)

## Methods

### computeLineDistances()

> **computeLineDistances**(): `Wireframe`

Defined in: [three/addons/lines/Wireframe.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Wireframe.js#L63)

Computes an array of distance values which are necessary for rendering dashed lines.
For each vertex in the geometry, the method calculates the cumulative length from the
current point to the very beginning of the line.

#### Returns

`Wireframe`

A reference to this instance.

***

### onBeforeRender()

> **onBeforeRender**(`renderer`): `void`

Defined in: [three/addons/lines/Wireframe.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/Wireframe.js#L98)

#### Parameters

##### renderer

`any`

#### Returns

`void`

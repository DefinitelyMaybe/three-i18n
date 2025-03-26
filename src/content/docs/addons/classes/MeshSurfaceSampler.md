---
editUrl: false
next: false
prev: false
title: "MeshSurfaceSampler"
---

Defined in: [three/addons/math/MeshSurfaceSampler.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L44)

Utility class for sampling weighted random points on the surface of a mesh.

Building the sampler is a one-time O(n) operation. Once built, any number of
random samples may be selected in O(logn) time. Memory usage is O(n).

References:
- [http://www.joesfer.com/?p=84](http://www.joesfer.com/?p=84)
- [https://stackoverflow.com/a/4322940/1314762](https://stackoverflow.com/a/4322940/1314762)

```js
const sampler = new MeshSurfaceSampler( surfaceMesh )
	.setWeightAttribute( 'color' )
	.build();

const mesh = new THREE.InstancedMesh( sampleGeometry, sampleMaterial, 100 );

const position = new THREE.Vector3();
const matrix = new THREE.Matrix4();

// Sample randomly from the surface, creating an instance of the sample geometry at each sample point.

for ( let i = 0; i < 100; i ++ ) {

	sampler.sample( position );
	matrix.makeTranslation( position.x, position.y, position.z );
	mesh.setMatrixAt( i, matrix );

}

scene.add( mesh );
```

## Constructors

### Constructor

> **new MeshSurfaceSampler**(`mesh`): `MeshSurfaceSampler`

Defined in: [three/addons/math/MeshSurfaceSampler.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L51)

Constructs a mesh surface sampler.

#### Parameters

##### mesh

`Mesh`

Surface mesh from which to sample.

#### Returns

`MeshSurfaceSampler`

## Properties

### colorAttribute

> **colorAttribute**: `any`

Defined in: [three/addons/math/MeshSurfaceSampler.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L59)

***

### distribution

> **distribution**: `Float32Array`\<`ArrayBuffer`\>

Defined in: [three/addons/math/MeshSurfaceSampler.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L63)

***

### geometry

> **geometry**: `any`

Defined in: [three/addons/math/MeshSurfaceSampler.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L53)

***

### indexAttribute

> **indexAttribute**: `any`

Defined in: [three/addons/math/MeshSurfaceSampler.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L56)

***

### normalAttribute

> **normalAttribute**: `any`

Defined in: [three/addons/math/MeshSurfaceSampler.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L58)

***

### positionAttribute

> **positionAttribute**: `any`

Defined in: [three/addons/math/MeshSurfaceSampler.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L57)

***

### randomFunction()

> **randomFunction**: () => `number`

Defined in: [three/addons/math/MeshSurfaceSampler.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L54)

Returns a pseudorandom number between 0 and 1.

#### Returns

`number`

***

### uvAttribute

> **uvAttribute**: `any`

Defined in: [three/addons/math/MeshSurfaceSampler.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L60)

***

### weightAttribute

> **weightAttribute**: `any`

Defined in: [three/addons/math/MeshSurfaceSampler.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L61)

## Methods

### \_binarySearch()

> **\_binarySearch**(`x`): `number`

Defined in: [three/addons/math/MeshSurfaceSampler.js:194](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L194)

#### Parameters

##### x

`any`

#### Returns

`number`

***

### \_sampleFace()

> **\_sampleFace**(`faceIndex`, `targetPosition`, `targetNormal`, `targetColor`, `targetUV`): `MeshSurfaceSampler`

Defined in: [three/addons/math/MeshSurfaceSampler.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L228)

#### Parameters

##### faceIndex

`any`

##### targetPosition

`any`

##### targetNormal

`any`

##### targetColor

`any`

##### targetUV

`any`

#### Returns

`MeshSurfaceSampler`

***

### \_sampleFaceIndex()

> **\_sampleFaceIndex**(): `number`

Defined in: [three/addons/math/MeshSurfaceSampler.js:187](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L187)

#### Returns

`number`

***

### build()

> **build**(): `MeshSurfaceSampler`

Defined in: [three/addons/math/MeshSurfaceSampler.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L92)

Processes the input geometry and prepares to return samples. Any configuration of the
geometry or sampler must occur before this method is called. Time complexity is O(n)
for a surface with n faces.

#### Returns

`MeshSurfaceSampler`

A reference to this sampler.

***

### sample()

> **sample**(`targetPosition`, `targetNormal`, `targetColor`, `targetUV`): `MeshSurfaceSampler`

Defined in: [three/addons/math/MeshSurfaceSampler.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L178)

Selects a random point on the surface of the input geometry, returning the
position and optionally the normal vector, color and UV Coordinate at that point.
Time complexity is O(log n) for a surface with n faces.

#### Parameters

##### targetPosition

`Vector3`

The target object holding the sampled position.

##### targetNormal

`Vector3`

The target object holding the sampled normal.

##### targetColor

`Color`

The target object holding the sampled color.

##### targetUV

`Vector2`

The target object holding the sampled uv coordinates.

#### Returns

`MeshSurfaceSampler`

A reference to this sampler.

***

### setRandomGenerator()

> **setRandomGenerator**(`randomFunction`): `MeshSurfaceSampler`

Defined in: [three/addons/math/MeshSurfaceSampler.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L160)

Allows to set a custom random number generator. Default is `Math.random()`.

#### Parameters

##### randomFunction

`Function`

A random number generator.

#### Returns

`MeshSurfaceSampler`

A reference to this sampler.

***

### setWeightAttribute()

> **setWeightAttribute**(`name`): `MeshSurfaceSampler`

Defined in: [three/addons/math/MeshSurfaceSampler.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/MeshSurfaceSampler.js#L77)

Specifies a vertex attribute to be used as a weight when sampling from the surface.
Faces with higher weights are more likely to be sampled, and those with weights of
zero will not be sampled at all. For vector attributes, only .x is used in sampling.

If no weight attribute is selected, sampling is randomly distributed by area.

#### Parameters

##### name

`string`

The attribute name.

#### Returns

`MeshSurfaceSampler`

A reference to this sampler.

---
editUrl: false
next: false
prev: false
title: "BatchedMesh"
---

Defined in: [three/src/objects/BatchedMesh.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L180)

A special version of a mesh with multi draw batch rendering support. Use
this class if you have to render a large number of objects with the same
material but with different geometries or world transformations. The usage of
`BatchedMesh` will help you to reduce the number of draw calls and thus improve the overall
rendering performance in your application.

```js
const box = new THREE.BoxGeometry( 1, 1, 1 );
const sphere = new THREE.SphereGeometry( 1, 12, 12 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// initialize and add geometries into the batched mesh
const batchedMesh = new BatchedMesh( 10, 5000, 10000, material );
const boxGeometryId = batchedMesh.addGeometry( box );
const sphereGeometryId = batchedMesh.addGeometry( sphere );

// create instances of those geometries
const boxInstancedId1 = batchedMesh.addInstance( boxGeometryId );
const boxInstancedId2 = batchedMesh.addInstance( boxGeometryId );

const sphereInstancedId1 = batchedMesh.addInstance( sphereGeometryId );
const sphereInstancedId2 = batchedMesh.addInstance( sphereGeometryId );

// position the geometries
batchedMesh.setMatrixAt( boxInstancedId1, boxMatrix1 );
batchedMesh.setMatrixAt( boxInstancedId2, boxMatrix2 );

batchedMesh.setMatrixAt( sphereInstancedId1, sphereMatrix1 );
batchedMesh.setMatrixAt( sphereInstancedId2, sphereMatrix2 );

scene.add( batchedMesh );
```

## Extends

- [`Mesh`](/reference/three/classes/mesh/)

## Constructors

### Constructor

> **new BatchedMesh**(`maxInstanceCount`, `maxVertexCount`, `maxIndexCount`?, `material`?): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L190)

Constructs a new batched mesh.

#### Parameters

##### maxInstanceCount

`number`

The maximum number of individual instances planned to be added and rendered.

##### maxVertexCount

`number`

The maximum number of vertices to be used by all unique geometries.

##### maxIndexCount?

`number` = `...`

The maximum number of indices to be used by all unique geometries

##### material?

`any`

The mesh material.

#### Returns

`BatchedMesh`

#### Overrides

[`Mesh`](/reference/three/classes/mesh/).[`constructor`](/reference/three/classes/mesh/#constructor)

## Properties

### \_availableGeometryIds

> **\_availableGeometryIds**: `any`[]

Defined in: [three/src/objects/BatchedMesh.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L253)

***

### \_availableInstanceIds

> **\_availableInstanceIds**: `any`[]

Defined in: [three/src/objects/BatchedMesh.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L252)

***

### \_colorsTexture

> **\_colorsTexture**: `any`

Defined in: [three/src/objects/BatchedMesh.js:278](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L278)

***

### \_geometryCount

> **\_geometryCount**: `number`

Defined in: [three/src/objects/BatchedMesh.js:258](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L258)

***

### \_geometryInfo

> **\_geometryInfo**: `any`[]

Defined in: [three/src/objects/BatchedMesh.js:249](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L249)

***

### \_geometryInitialized

> **\_geometryInitialized**: `boolean`

Defined in: [three/src/objects/BatchedMesh.js:262](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L262)

***

### \_indirectTexture

> **\_indirectTexture**: [`DataTexture`](/reference/three/classes/datatexture/)

Defined in: [three/src/objects/BatchedMesh.js:277](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L277)

***

### \_instanceInfo

> **\_instanceInfo**: `any`[]

Defined in: [three/src/objects/BatchedMesh.js:248](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L248)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`_listeners`](/reference/three/classes/mesh/#_listeners)

***

### \_matricesTexture

> **\_matricesTexture**: `any`

Defined in: [three/src/objects/BatchedMesh.js:276](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L276)

***

### \_maxIndexCount

> **\_maxIndexCount**: `number`

Defined in: [three/src/objects/BatchedMesh.js:267](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L267)

***

### \_maxInstanceCount

> **\_maxInstanceCount**: `number`

Defined in: [three/src/objects/BatchedMesh.js:265](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L265)

***

### \_maxVertexCount

> **\_maxVertexCount**: `number`

Defined in: [three/src/objects/BatchedMesh.js:266](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L266)

***

### \_multiDrawCount

> **\_multiDrawCount**: `number`

Defined in: [three/src/objects/BatchedMesh.js:272](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L272)

***

### \_multiDrawCounts

> **\_multiDrawCounts**: `Int32Array`\<`ArrayBuffer`\>

Defined in: [three/src/objects/BatchedMesh.js:270](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L270)

***

### \_multiDrawInstances

> **\_multiDrawInstances**: `any`

Defined in: [three/src/objects/BatchedMesh.js:273](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L273)

***

### \_multiDrawStarts

> **\_multiDrawStarts**: `Int32Array`\<`ArrayBuffer`\>

Defined in: [three/src/objects/BatchedMesh.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L271)

***

### \_nextIndexStart

> **\_nextIndexStart**: `number`

Defined in: [three/src/objects/BatchedMesh.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L256)

***

### \_nextVertexStart

> **\_nextVertexStart**: `number`

Defined in: [three/src/objects/BatchedMesh.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L257)

***

### \_visibilityChanged

> **\_visibilityChanged**: `boolean`

Defined in: [three/src/objects/BatchedMesh.js:261](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L261)

***

### animations

> **animations**: `AnimationClip`[]

Defined in: [three/src/core/Object3D.js:331](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L331)

An array holding the animation clips of the 3D object.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`animations`](/reference/three/classes/mesh/#animations)

***

### boundingBox

> **boundingBox**: [`Box3`](/reference/three/classes/box3/)

Defined in: [three/src/objects/BatchedMesh.js:227](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L227)

The bounding box of the batched mesh. Can be computed via [BatchedMesh#computeBoundingBox](/reference/three/classes/batchedmesh/#computeboundingbox).

#### Default

```ts
null
```

***

### boundingSphere

> **boundingSphere**: [`Sphere`](/reference/three/classes/sphere/)

Defined in: [three/src/objects/BatchedMesh.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L235)

The bounding sphere of the batched mesh. Can be computed via [BatchedMesh#computeBoundingSphere](/reference/three/classes/batchedmesh/#computeboundingsphere).

#### Default

```ts
null
```

***

### castShadow

> **castShadow**: `boolean`

Defined in: [three/src/core/Object3D.js:296](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L296)

When set to `true`, the 3D object gets rendered into shadow maps.

#### Default

```ts
false
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`castShadow`](/reference/three/classes/mesh/#castshadow)

***

### children

> **children**: [`Object3D`](/reference/three/classes/object3d/)[]

Defined in: [three/src/core/Object3D.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L127)

An array holding the child 3D objects of this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`children`](/reference/three/classes/mesh/#children)

***

### customDepthMaterial

> **customDepthMaterial**: `any`

Defined in: [three/src/core/Object3D.js:344](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L344)

Custom depth material to be used when rendering to the depth map. Can only be used
in context of meshes. When shadow-casting with a [DirectionalLight](/reference/three/classes/directionallight/) or [SpotLight](/reference/three/classes/spotlight/),
if you are modifying vertex positions in the vertex shader you must specify a custom depth
material for proper shadows.

Only relevant in context of [WebGLRenderer](/reference/three/classes/webglrenderer/).

#### Default

```ts
undefined
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`customDepthMaterial`](/reference/three/classes/mesh/#customdepthmaterial)

***

### customDistanceMaterial

> **customDistanceMaterial**: `any`

Defined in: [three/src/core/Object3D.js:354](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L354)

Same as [Object3D#customDepthMaterial](/reference/three/classes/object3d/#customdepthmaterial), but used with [PointLight](/reference/three/classes/pointlight/).

Only relevant in context of [WebGLRenderer](/reference/three/classes/webglrenderer/).

#### Default

```ts
undefined
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`customDistanceMaterial`](/reference/three/classes/mesh/#customdistancematerial)

***

### customSort

> **customSort**: `Function`

Defined in: [three/src/objects/BatchedMesh.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L245)

Takes a sort a function that is run before render. The function takes a list of instances to
sort and a camera. The objects in the list include a "z" field to perform a depth-ordered
sort with.

#### Default

```ts
null
```

***

### frustumCulled

> **frustumCulled**: `boolean`

Defined in: [three/src/core/Object3D.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L312)

When set to `true`, the 3D object is honored by view frustum culling.

#### Default

```ts
true
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`frustumCulled`](/reference/three/classes/mesh/#frustumculled)

***

### geometry

> **geometry**: [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/objects/Mesh.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L67)

The mesh geometry.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`geometry`](/reference/three/classes/mesh/#geometry)

***

### isBatchedMesh

> `readonly` **isBatchedMesh**: `boolean`

Defined in: [three/src/objects/BatchedMesh.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L201)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isMesh

> `readonly` **isMesh**: `boolean`

Defined in: [three/src/objects/Mesh.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L58)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`isMesh`](/reference/three/classes/mesh/#ismesh)

***

### isObject3D

> `readonly` **isObject3D**: `boolean`

Defined in: [three/src/core/Object3D.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L79)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`isObject3D`](/reference/three/classes/mesh/#isobject3d)

***

### layers

> **layers**: [`Layers`](/reference/three/classes/layers/)

Defined in: [three/src/core/Object3D.js:280](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L280)

The layer membership of the 3D object. The 3D object is only visible if it has
at least one layer in common with the camera in use. This property can also be
used to filter out unwanted objects in ray-intersection tests when using [Raycaster](/reference/three/classes/raycaster/).

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`layers`](/reference/three/classes/mesh/#layers)

***

### material

> **material**: `any`

Defined in: [three/src/objects/Mesh.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L75)

The mesh material.

#### Default

```ts
MeshBasicMaterial
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`material`](/reference/three/classes/mesh/#material)

***

### matrix

> **matrix**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/core/Object3D.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L232)

Represents the object's transformation matrix in local space.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`matrix`](/reference/three/classes/mesh/#matrix)

***

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

Defined in: [three/src/core/Object3D.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L251)

When set to `true`, the engine automatically computes the local matrix from position,
rotation and scale every frame.

The default values for all 3D objects is defined by `Object3D.DEFAULT_MATRIX_AUTO_UPDATE`.

#### Default

```ts
true
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`matrixAutoUpdate`](/reference/three/classes/mesh/#matrixautoupdate)

***

### matrixWorld

> **matrixWorld**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/core/Object3D.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L240)

Represents the object's transformation matrix in world space.
If the 3D object has no parent, then it's identical to the local transformation matrix

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`matrixWorld`](/reference/three/classes/mesh/#matrixworld)

***

### matrixWorldAutoUpdate

> **matrixWorldAutoUpdate**: `boolean`

Defined in: [three/src/core/Object3D.js:262](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L262)

When set to `true`, the engine automatically computes the world matrix from the current local
matrix and the object's transformation hierarchy.

The default values for all 3D objects is defined by `Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE`.

#### Default

```ts
true
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`matrixWorldAutoUpdate`](/reference/three/classes/mesh/#matrixworldautoupdate)

***

### matrixWorldNeedsUpdate

> **matrixWorldNeedsUpdate**: `boolean`

Defined in: [three/src/core/Object3D.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L271)

When set to `true`, it calculates the world matrix in that frame and resets this property
to `false`.

#### Default

```ts
false
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`matrixWorldNeedsUpdate`](/reference/three/classes/mesh/#matrixworldneedsupdate)

***

### morphTargetDictionary

> **morphTargetDictionary**: `any`

Defined in: [three/src/objects/Mesh.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L85)

A dictionary representing the morph targets in the geometry. The key is the
morph targets name, the value its attribute index. This member is `undefined`
by default and only set when morph targets are detected in the geometry.

#### Default

```ts
undefined
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`morphTargetDictionary`](/reference/three/classes/mesh/#morphtargetdictionary)

***

### morphTargetInfluences

> **morphTargetInfluences**: `number`[]

Defined in: [three/src/objects/Mesh.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L95)

An array of weights typically in the range `[0,1]` that specify how much of the morph
is applied. This member is `undefined` by default and only set when morph targets are
detected in the geometry.

#### Default

```ts
undefined
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`morphTargetInfluences`](/reference/three/classes/mesh/#morphtargetinfluences)

***

### name

> **name**: `string`

Defined in: [three/src/core/Object3D.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L103)

The name of the 3D object.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`name`](/reference/three/classes/mesh/#name)

***

### parent

> **parent**: [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L120)

A reference to the parent object.

#### Default

```ts
null
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`parent`](/reference/three/classes/mesh/#parent)

***

### perObjectFrustumCulled

> **perObjectFrustumCulled**: `boolean`

Defined in: [three/src/objects/BatchedMesh.js:209](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L209)

When set ot `true`, the individual objects of a batch are frustum culled.

#### Default

```ts
true
```

***

### receiveShadow

> **receiveShadow**: `boolean`

Defined in: [three/src/core/Object3D.js:304](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L304)

When set to `true`, the 3D object is affected by shadows in the scene.

#### Default

```ts
false
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`receiveShadow`](/reference/three/classes/mesh/#receiveshadow)

***

### renderOrder

> **renderOrder**: `number`

Defined in: [three/src/core/Object3D.js:324](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L324)

This value allows the default rendering order of scene graph objects to be
overridden although opaque and transparent objects remain sorted independently.
When this property is set for an instance of [Group](/reference/three/classes/group/),all descendants
objects will be sorted and rendered together. Sorting is from lowest to highest
render order.

#### Default

```ts
0
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`renderOrder`](/reference/three/classes/mesh/#renderorder)

***

### sortObjects

> **sortObjects**: `boolean`

Defined in: [three/src/objects/BatchedMesh.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L219)

When set to `true`, the individual objects of a batch are sorted to improve overdraw-related artifacts.
If the material is marked as "transparent" objects are rendered back to front and if not then they are
rendered front to back.

#### Default

```ts
true
```

***

### type

> **type**: `string`

Defined in: [three/src/objects/Mesh.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L60)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`type`](/reference/three/classes/mesh/#type)

***

### up

> **up**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L137)

Defines the `up` direction of the 3D object which influences
the orientation via methods like [Object3D#lookAt](/reference/three/classes/object3d/#lookat).

The default values for all 3D objects is defined by `Object3D.DEFAULT_UP`.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`up`](/reference/three/classes/mesh/#up)

***

### userData

> **userData**: `any`

Defined in: [three/src/core/Object3D.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L362)

An object that can be used to store custom data about the 3D object. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`userData`](/reference/three/classes/mesh/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/core/Object3D.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L96)

The UUID of the 3D object.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`uuid`](/reference/three/classes/mesh/#uuid)

***

### visible

> **visible**: `boolean`

Defined in: [three/src/core/Object3D.js:288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L288)

When set to `true`, the 3D object gets rendered.

#### Default

```ts
true
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`visible`](/reference/three/classes/mesh/#visible)

***

### DEFAULT\_MATRIX\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_AUTO\_UPDATE**: `boolean`

Defined in: [three/src/core/Object3D.js:1605](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1605)

The default setting for [Object3D#matrixAutoUpdate](/reference/three/classes/object3d/#matrixautoupdate) for
newly created 3D objects.

#### Static

#### Default

```ts
true
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`DEFAULT_MATRIX_AUTO_UPDATE`](/reference/three/classes/mesh/#default_matrix_auto_update)

***

### DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE**: `boolean`

Defined in: [three/src/core/Object3D.js:1615](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1615)

The default setting for [Object3D#matrixWorldAutoUpdate](/reference/three/classes/object3d/#matrixworldautoupdate) for
newly created 3D objects.

#### Static

#### Default

```ts
true
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`DEFAULT_MATRIX_WORLD_AUTO_UPDATE`](/reference/three/classes/mesh/#default_matrix_world_auto_update)

***

### DEFAULT\_UP

> `static` **DEFAULT\_UP**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:1595](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1595)

The default up direction for objects, also used as the default
position for [DirectionalLight](/reference/three/classes/directionallight/) and [HemisphereLight](/reference/three/classes/hemispherelight/).

#### Static

#### Default

```ts
(0,1,0)
```

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`DEFAULT_UP`](/reference/three/classes/mesh/#default_up)

## Accessors

### instanceCount

#### Get Signature

> **get** **instanceCount**(): `number`

Defined in: [three/src/objects/BatchedMesh.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L303)

The instance count.

##### Returns

`number`

***

### maxInstanceCount

#### Get Signature

> **get** **maxInstanceCount**(): `number`

Defined in: [three/src/objects/BatchedMesh.js:291](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L291)

The maximum number of individual instances that can be stored in the batch.

##### Returns

`number`

***

### unusedIndexCount

#### Get Signature

> **get** **unusedIndexCount**(): `number`

Defined in: [three/src/objects/BatchedMesh.js:327](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L327)

The number of unused indices.

##### Returns

`number`

***

### unusedVertexCount

#### Get Signature

> **get** **unusedVertexCount**(): `number`

Defined in: [three/src/objects/BatchedMesh.js:315](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L315)

The number of unused vertices.

##### Returns

`number`

## Methods

### \_computeIntersections()

> **\_computeIntersections**(`raycaster`, `intersects`, `rayLocalSpace`): `void`

Defined in: [three/src/objects/Mesh.js:263](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L263)

#### Parameters

##### raycaster

`any`

##### intersects

`any`

##### rayLocalSpace

`any`

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`_computeIntersections`](/reference/three/classes/mesh/#_computeintersections)

***

### \_initColorsTexture()

> **\_initColorsTexture**(): `void`

Defined in: [three/src/objects/BatchedMesh.js:365](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L365)

#### Returns

`void`

***

### \_initializeGeometry()

> **\_initializeGeometry**(`reference`): `void`

Defined in: [three/src/objects/BatchedMesh.js:379](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L379)

#### Parameters

##### reference

`any`

#### Returns

`void`

***

### \_initIndirectTexture()

> **\_initIndirectTexture**(): `void`

Defined in: [three/src/objects/BatchedMesh.js:353](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L353)

#### Returns

`void`

***

### \_initMatricesTexture()

> **\_initMatricesTexture**(): `void`

Defined in: [three/src/objects/BatchedMesh.js:333](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L333)

#### Returns

`void`

***

### \_validateGeometry()

> **\_validateGeometry**(`geometry`): `void`

Defined in: [three/src/objects/BatchedMesh.js:416](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L416)

#### Parameters

##### geometry

`any`

#### Returns

`void`

***

### add()

> **add**(`object`, ...`args`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:720](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L720)

Adds the given 3D object as a child to this 3D object. An arbitrary number of
objects may be added. Any current parent on an object passed in here will be
removed, since an object can have at most one parent.

#### Parameters

##### object

[`Object3D`](/reference/three/classes/object3d/)

The 3D object to add.

##### args

...`any`

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#added

#### Fires

Object3D#childadded

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`add`](/reference/three/classes/mesh/#add)

***

### addEventListener()

> **addEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L31)

Adds the given event listener to the given event type.

#### Parameters

##### type

`string`

The type of event to listen to.

##### listener

`Function`

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`addEventListener`](/reference/three/classes/mesh/#addeventlistener)

***

### addGeometry()

> **addGeometry**(`geometry`, `reservedVertexCount`?, `reservedIndexCount`?): `number`

Defined in: [three/src/objects/BatchedMesh.js:625](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L625)

Adds the given geometry to the batch and returns the associated
geometry id referring to it to be used in other functions.

#### Parameters

##### geometry

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

The geometry to add.

##### reservedVertexCount?

`number` = `- 1`

Optional parameter specifying the amount of
vertex buffer space to reserve for the added geometry. This is necessary if it is planned
to set a new geometry at this index at a later time that is larger than the original geometry.
Defaults to the length of the given geometry vertex buffer.

##### reservedIndexCount?

`number` = `- 1`

Optional parameter specifying the amount of index
buffer space to reserve for the added geometry. This is necessary if it is planned to set a
new geometry at this index at a later time that is larger than the original geometry. Defaults to
the length of the given geometry index buffer.

#### Returns

`number`

The geometry ID.

***

### addInstance()

> **addInstance**(`geometryId`): `number`

Defined in: [three/src/objects/BatchedMesh.js:559](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L559)

Adds a new instance to the batch using the geometry of the given ID and returns
a new id referring to the new instance to be used by other functions.

#### Parameters

##### geometryId

`number`

The ID of a previously added geometry via [BatchedMesh#addGeometry](/reference/three/classes/batchedmesh/#addgeometry).

#### Returns

`number`

The instance ID.

***

### applyMatrix4()

> **applyMatrix4**(`matrix`): `void`

Defined in: [three/src/core/Object3D.js:422](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L422)

Applies the given transformation matrix to the object and updates the object's position,
rotation and scale.

#### Parameters

##### matrix

[`Matrix4`](/reference/three/classes/matrix4/)

The transformation matrix.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`applyMatrix4`](/reference/three/classes/mesh/#applymatrix4)

***

### applyQuaternion()

> **applyQuaternion**(`q`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:438](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L438)

Applies a rotation represented by given the quaternion to the 3D object.

#### Parameters

##### q

[`Quaternion`](/reference/three/classes/quaternion/)

The quaternion.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`applyQuaternion`](/reference/three/classes/mesh/#applyquaternion)

***

### attach()

> **attach**(`object`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:848](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L848)

Adds the given 3D object as a child of this 3D object, while maintaining the object's world
transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).

#### Parameters

##### object

[`Object3D`](/reference/three/classes/object3d/)

The 3D object to attach.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#added

#### Fires

Object3D#childadded

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`attach`](/reference/three/classes/mesh/#attach)

***

### clear()

> **clear**(): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:833](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L833)

Removes all child objects.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#removed

#### Fires

Object3D#childremoved

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`clear`](/reference/three/classes/mesh/#clear)

***

### clone()

> **clone**(`recursive`?): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:1525](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1525)

Returns a new 3D object with copied values from this instance.

#### Parameters

##### recursive?

`boolean`

When set to `true`, descendants of the 3D object are also cloned.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A clone of this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`clone`](/reference/three/classes/mesh/#clone)

***

### computeBoundingBox()

> **computeBoundingBox**(): `void`

Defined in: [three/src/objects/BatchedMesh.js:497](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L497)

Computes the bounding box, updating [BatchedMesh#boundingBox](/reference/three/classes/batchedmesh/#boundingbox).
Bounding boxes aren't computed by default. They need to be explicitly computed,
otherwise they are `null`.

#### Returns

`void`

***

### computeBoundingSphere()

> **computeBoundingSphere**(): `void`

Defined in: [three/src/objects/BatchedMesh.js:527](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L527)

Computes the bounding sphere, updating [BatchedMesh#boundingSphere](/reference/three/classes/batchedmesh/#boundingsphere).
Bounding spheres aren't computed by default. They need to be explicitly computed,
otherwise they are `null`.

#### Returns

`void`

***

### copy()

> **copy**(`source`): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:1426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1426)

Copies the values of the given 3D object to this instance.

#### Parameters

##### source

`any`

The 3D object to copy.

#### Returns

`BatchedMesh`

A reference to this instance.

#### Overrides

[`Mesh`](/reference/three/classes/mesh/).[`copy`](/reference/three/classes/mesh/#copy)

***

### deleteGeometry()

> **deleteGeometry**(`geometryId`): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:824](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L824)

Deletes the geometry defined by the given ID from this batch. Any instances referencing
this geometry will also be removed as a side effect.

#### Parameters

##### geometryId

`number`

The ID of the geometry to remove from the batch.

#### Returns

`BatchedMesh`

A reference to this batched mesh.

***

### deleteInstance()

> **deleteInstance**(`instanceId`): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:859](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L859)

Deletes an existing instance from the batch using the given ID.

#### Parameters

##### instanceId

`number`

The ID of the instance to remove from the batch.

#### Returns

`BatchedMesh`

A reference to this batched mesh.

***

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [three/src/core/EventDispatcher.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L101)

Dispatches an event object.

#### Parameters

##### event

`any`

The event that gets fired.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`dispatchEvent`](/reference/three/classes/mesh/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/objects/BatchedMesh.js:1471](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1471)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### getBoundingBoxAt()

> **getBoundingBoxAt**(`geometryId`, `target`): [`Box3`](/reference/three/classes/box3/)

Defined in: [three/src/objects/BatchedMesh.js:974](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L974)

Returns the bounding box for the given geometry.

#### Parameters

##### geometryId

`number`

The ID of the geometry to return the bounding box for.

##### target

[`Box3`](/reference/three/classes/box3/)

The target object that is used to store the method's result.

#### Returns

[`Box3`](/reference/three/classes/box3/)

The geometry's bounding box. Returns `null` if no geometry has been found for the given ID.

***

### getBoundingSphereAt()

> **getBoundingSphereAt**(`geometryId`, `target`): [`Sphere`](/reference/three/classes/sphere/)

Defined in: [three/src/objects/BatchedMesh.js:1019](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1019)

Returns the bounding sphere for the given geometry.

#### Parameters

##### geometryId

`number`

The ID of the geometry to return the bounding sphere for.

##### target

[`Sphere`](/reference/three/classes/sphere/)

The target object that is used to store the method's result.

#### Returns

[`Sphere`](/reference/three/classes/sphere/)

The geometry's bounding sphere. Returns `null` if no geometry has been found for the given ID.

***

### getColorAt()

> **getColorAt**(`instanceId`, `color`): [`Color`](/reference/three/classes/color/)

Defined in: [three/src/objects/BatchedMesh.js:1130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1130)

Returns the color of the defined instance.

#### Parameters

##### instanceId

`number`

The ID of an instance to get the color of.

##### color

[`Color`](/reference/three/classes/color/)

The target object that is used to store the method's result.

#### Returns

[`Color`](/reference/three/classes/color/)

The instance's color.

***

### getGeometryIdAt()

> **getGeometryIdAt**(`instanceId`): `number`

Defined in: [three/src/objects/BatchedMesh.js:1199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1199)

Returns the geometry ID of the defined instance.

#### Parameters

##### instanceId

`number`

The ID of an instance to get the geometry ID of.

#### Returns

`number`

The instance's geometry ID.

***

### getGeometryRangeAt()

> **getGeometryRangeAt**(`geometryId`, `target`?): `object`

Defined in: [three/src/objects/BatchedMesh.js:1219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1219)

Get the range representing the subset of triangles related to the attached geometry,
indicating the starting offset and count, or `null` if invalid.

#### Parameters

##### geometryId

`number`

The id of the geometry to get the range of.

##### target?

`any` = `{}`

The target object that is used to store the method's result.

#### Returns

`object`

The result object with range data.

##### count

> **count**: `number`

##### indexCount

> **indexCount**: `number`

##### indexStart

> **indexStart**: `number`

##### reservedIndexCount

> **reservedIndexCount**: `number`

##### reservedVertexCount

> **reservedVertexCount**: `number`

##### start

> **start**: `number`

##### vertexCount

> **vertexCount**: `number`

##### vertexStart

> **vertexStart**: `number`

***

### getMatrixAt()

> **getMatrixAt**(`instanceId`, `matrix`): [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/objects/BatchedMesh.js:1092](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1092)

Returns the local transformation matrix of the defined instance.

#### Parameters

##### instanceId

`number`

The ID of an instance to get the matrix of.

##### matrix

[`Matrix4`](/reference/three/classes/matrix4/)

The target object that is used to store the method's result.

#### Returns

[`Matrix4`](/reference/three/classes/matrix4/)

The instance's local transformation matrix.

***

### getObjectById()

> **getObjectById**(`id`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:891](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L891)

Searches through the 3D object and its children, starting with the 3D object
itself, and returns the first with a matching ID.

#### Parameters

##### id

`number`

The id.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

The found 3D object. Returns `undefined` if no 3D object has been found.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getObjectById`](/reference/three/classes/mesh/#getobjectbyid)

***

### getObjectByName()

> **getObjectByName**(`name`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:904](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L904)

Searches through the 3D object and its children, starting with the 3D object
itself, and returns the first with a matching name.

#### Parameters

##### name

`string`

The name.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

The found 3D object. Returns `undefined` if no 3D object has been found.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getObjectByName`](/reference/three/classes/mesh/#getobjectbyname)

***

### getObjectByProperty()

> **getObjectByProperty**(`name`, `value`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:918](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L918)

Searches through the 3D object and its children, starting with the 3D object
itself, and returns the first with a matching property value.

#### Parameters

##### name

`string`

The name of the property.

##### value

`any`

The value.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

The found 3D object. Returns `undefined` if no 3D object has been found.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getObjectByProperty`](/reference/three/classes/mesh/#getobjectbyproperty)

***

### getObjectsByProperty()

> **getObjectsByProperty**(`name`, `value`, `result`): [`Object3D`](/reference/three/classes/object3d/)[]

Defined in: [three/src/core/Object3D.js:948](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L948)

Searches through the 3D object and its children, starting with the 3D object
itself, and returns all 3D objects with a matching property value.

#### Parameters

##### name

`string`

The name of the property.

##### value

`any`

The value.

##### result

[`Object3D`](/reference/three/classes/object3d/)[] = `[]`

The method stores the result in this array.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)[]

The found 3D objects.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getObjectsByProperty`](/reference/three/classes/mesh/#getobjectsbyproperty)

***

### getVertexPosition()

> **getVertexPosition**(`index`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/objects/Mesh.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L167)

Returns the local-space position of the vertex at the given index, taking into
account the current animation state of both morph targets and skinning.

#### Parameters

##### index

`number`

The vertex index.

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target object that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The vertex position in local space.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getVertexPosition`](/reference/three/classes/mesh/#getvertexposition)

***

### getVisibleAt()

> **getVisibleAt**(`instanceId`): `boolean`

Defined in: [three/src/objects/BatchedMesh.js:1167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1167)

Returns the visibility state of the defined instance.

#### Parameters

##### instanceId

`number`

The ID of an instance to get the visibility state of.

#### Returns

`boolean`

Whether the instance is visible or not.

***

### getWorldDirection()

> **getWorldDirection**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:1016](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1016)

Returns a vector representing the ("look") direction of the 3D object in world space.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector the result is stored to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The 3D object's direction in world space.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getWorldDirection`](/reference/three/classes/mesh/#getworlddirection)

***

### getWorldPosition()

> **getWorldPosition**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:970](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L970)

Returns a vector representing the position of the 3D object in world space.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector the result is stored to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The 3D object's position in world space.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getWorldPosition`](/reference/three/classes/mesh/#getworldposition)

***

### getWorldQuaternion()

> **getWorldQuaternion**(`target`): [`Quaternion`](/reference/three/classes/quaternion/)

Defined in: [three/src/core/Object3D.js:984](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L984)

Returns a Quaternion representing the position of the 3D object in world space.

#### Parameters

##### target

[`Quaternion`](/reference/three/classes/quaternion/)

The target Quaternion the result is stored to.

#### Returns

[`Quaternion`](/reference/three/classes/quaternion/)

The 3D object's rotation in world space.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getWorldQuaternion`](/reference/three/classes/mesh/#getworldquaternion)

***

### getWorldScale()

> **getWorldScale**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:1000](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1000)

Returns a vector representing the scale of the 3D object in world space.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector the result is stored to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The 3D object's scale in world space.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`getWorldScale`](/reference/three/classes/mesh/#getworldscale)

***

### hasEventListener()

> **hasEventListener**(`type`, `listener`): `boolean`

Defined in: [three/src/core/EventDispatcher.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L58)

Returns `true` if the given event listener has been added to the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to check.

#### Returns

`boolean`

Whether the given event listener has been added to the given event type.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`hasEventListener`](/reference/three/classes/mesh/#haseventlistener)

***

### localToWorld()

> **localToWorld**(`vector`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:637](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L637)

Converts the given vector from this 3D object's local space to world space.

#### Parameters

##### vector

[`Vector3`](/reference/three/classes/vector3/)

The vector to convert.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The converted vector.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`localToWorld`](/reference/three/classes/mesh/#localtoworld)

***

### lookAt()

> **lookAt**(`x`, `y`?, `z`?): `void`

Defined in: [three/src/core/Object3D.js:668](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L668)

Rotates the object to face a point in world space.

This method does not support objects having non-uniformly-scaled parent(s).

#### Parameters

##### x

The x coordinate in world space. Alternatively, a vector representing a position in world space

`number` | [`Vector3`](/reference/three/classes/vector3/)

##### y?

`number`

The y coordinate in world space.

##### z?

`number`

The z coordinate in world space.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`lookAt`](/reference/three/classes/mesh/#lookat)

***

### onAfterRender()

> **onAfterRender**(): `void`

Defined in: [three/src/core/Object3D.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L414)

A callback that is executed immediately after a 3D object is rendered.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`onAfterRender`](/reference/three/classes/mesh/#onafterrender)

***

### onAfterShadow()

> **onAfterShadow**(): `void`

Defined in: [three/src/core/Object3D.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L390)

A callback that is executed immediately after a 3D object is rendered to a shadow map.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`onAfterShadow`](/reference/three/classes/mesh/#onaftershadow)

***

### onBeforeRender()

> **onBeforeRender**(`renderer`, `scene`, `camera`, `geometry`, `material`): `void`

Defined in: [three/src/objects/BatchedMesh.js:1491](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1491)

A callback that is executed immediately before a 3D object is rendered.

#### Parameters

##### renderer

`any`

The renderer.

##### scene

`any`

##### camera

`any`

The camera that is used to render the scene.

##### geometry

`any`

The 3D object's geometry.

##### material

`any`

The 3D object's material.

#### Returns

`void`

#### Overrides

[`Mesh`](/reference/three/classes/mesh/).[`onBeforeRender`](/reference/three/classes/mesh/#onbeforerender)

***

### onBeforeShadow()

> **onBeforeShadow**(`renderer`, `object`, `camera`, `shadowCamera`, `geometry`, `depthMaterial`): `void`

Defined in: [three/src/objects/BatchedMesh.js:1632](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1632)

A callback that is executed immediately before a 3D object is rendered to a shadow map.

#### Parameters

##### renderer

`any`

The renderer.

##### object

`any`

The 3D object.

##### camera

`any`

The camera that is used to render the scene.

##### shadowCamera

`any`

The shadow camera.

##### geometry

`any`

The 3D object's geometry.

##### depthMaterial

`any`

The depth material.

#### Returns

`void`

#### Overrides

[`Mesh`](/reference/three/classes/mesh/).[`onBeforeShadow`](/reference/three/classes/mesh/#onbeforeshadow)

***

### optimize()

> **optimize**(): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:878](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L878)

Repacks the sub geometries in [name] to remove any unused space remaining from
previously deleted geometry, freeing up space to add new geometry.

#### Returns

`BatchedMesh`

A reference to this batched mesh.

***

### raycast()

> **raycast**(`raycaster`, `intersects`): `void`

Defined in: [three/src/objects/BatchedMesh.js:1364](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1364)

Computes intersection points between a casted ray and this line.

#### Parameters

##### raycaster

`any`

The raycaster.

##### intersects

`any`

The target array that holds the intersection points.

#### Returns

`void`

#### Overrides

[`Mesh`](/reference/three/classes/mesh/).[`raycast`](/reference/three/classes/mesh/#raycast)

***

### remove()

> **remove**(`object`, ...`args`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:772](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L772)

Removes the given 3D object as child from this 3D object.
An arbitrary number of objects may be removed.

#### Parameters

##### object

[`Object3D`](/reference/three/classes/object3d/)

The 3D object to remove.

##### args

...`any`

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#removed

#### Fires

Object3D#childremoved

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`remove`](/reference/three/classes/mesh/#remove)

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L74)

Removes the given event listener from the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to remove.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`removeEventListener`](/reference/three/classes/mesh/#removeeventlistener)

***

### removeFromParent()

> **removeFromParent**(): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:812](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L812)

Removes this 3D object from its current parent.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#removed

#### Fires

Object3D#childremoved

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`removeFromParent`](/reference/three/classes/mesh/#removefromparent)

***

### rotateOnAxis()

> **rotateOnAxis**(`axis`, `angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:505](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L505)

Rotates the 3D object along an axis in local space.

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) axis vector.

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`rotateOnAxis`](/reference/three/classes/mesh/#rotateonaxis)

***

### rotateOnWorldAxis()

> **rotateOnWorldAxis**(`axis`, `angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:525](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L525)

Rotates the 3D object along an axis in world space.

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) axis vector.

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`rotateOnWorldAxis`](/reference/three/classes/mesh/#rotateonworldaxis)

***

### rotateX()

> **rotateX**(`angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:545](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L545)

Rotates the 3D object around its X axis in local space.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`rotateX`](/reference/three/classes/mesh/#rotatex)

***

### rotateY()

> **rotateY**(`angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:557](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L557)

Rotates the 3D object around its Y axis in local space.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`rotateY`](/reference/three/classes/mesh/#rotatey)

***

### rotateZ()

> **rotateZ**(`angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:569](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L569)

Rotates the 3D object around its Z axis in local space.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`rotateZ`](/reference/three/classes/mesh/#rotatez)

***

### setColorAt()

> **setColorAt**(`instanceId`, `color`): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:1106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1106)

Sets the given color to the defined instance.

#### Parameters

##### instanceId

`number`

The ID of an instance to set the color of.

##### color

[`Color`](/reference/three/classes/color/)

The color to set the instance to.

#### Returns

`BatchedMesh`

A reference to this batched mesh.

***

### setCustomSort()

> **setCustomSort**(`func`): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:485](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L485)

Takes a sort a function that is run before render. The function takes a list of instances to
sort and a camera. The objects in the list include a "z" field to perform a depth-ordered sort with.

#### Parameters

##### func

`Function`

The custom sort function.

#### Returns

`BatchedMesh`

A reference to this batched mesh.

***

### setGeometryAt()

> **setGeometryAt**(`geometryId`, `geometry`): `number`

Defined in: [three/src/objects/BatchedMesh.js:712](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L712)

Replaces the geometry at the given ID with the provided geometry. Throws an error if there
is not enough space reserved for geometry. Calling this will change all instances that are
rendering that geometry.

#### Parameters

##### geometryId

`number`

The ID of the geometry that should be replaced with the given geometry.

##### geometry

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

The new geometry.

#### Returns

`number`

The geometry ID.

***

### setGeometryIdAt()

> **setGeometryIdAt**(`instanceId`, `geometryId`): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:1182](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1182)

Sets the geometry ID of the instance at the given index.

#### Parameters

##### instanceId

`number`

The ID of the instance to set the geometry ID of.

##### geometryId

`number`

The geometry ID to be use by the instance.

#### Returns

`BatchedMesh`

A reference to this batched mesh.

***

### setGeometrySize()

> **setGeometrySize**(`maxVertexCount`, `maxIndexCount`): `void`

Defined in: [three/src/objects/BatchedMesh.js:1307](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1307)

Resizes the available space in the batch's vertex and index buffer attributes to the provided sizes.
If the provided arguments shrink the geometry buffers but there is not enough unused space at the
end of the geometry attributes then an error is thrown.

#### Parameters

##### maxVertexCount

`number`

The maximum number of vertices to be used by all unique geometries to resize to.

##### maxIndexCount

`number`

The maximum number of indices to be used by all unique geometries to resize to.

#### Returns

`void`

***

### setInstanceCount()

> **setInstanceCount**(`maxInstanceCount`): `void`

Defined in: [three/src/objects/BatchedMesh.js:1246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1246)

Resizes the necessary buffers to support the provided number of instances.
If the provided arguments shrink the number of instances but there are not enough
unused Ids at the end of the list then an error is thrown.

#### Parameters

##### maxInstanceCount

`number`

The max number of individual instances that can be added and rendered by the batch.

#### Returns

`void`

***

### setMatrixAt()

> **setMatrixAt**(`instanceId`, `matrix`): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:1072](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1072)

Sets the given local transformation matrix to the defined instance.
Negatively scaled matrices are not supported.

#### Parameters

##### instanceId

`number`

The ID of an instance to set the matrix of.

##### matrix

[`Matrix4`](/reference/three/classes/matrix4/)

A 4x4 matrix representing the local transformation of a single instance.

#### Returns

`BatchedMesh`

A reference to this batched mesh.

***

### setRotationFromAxisAngle()

> **setRotationFromAxisAngle**(`axis`, `angle`): `void`

Defined in: [three/src/core/Object3D.js:452](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L452)

Sets the given rotation represented as an axis/angle couple to the 3D object.

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) axis vector.

##### angle

`number`

The angle in radians.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`setRotationFromAxisAngle`](/reference/three/classes/mesh/#setrotationfromaxisangle)

***

### setRotationFromEuler()

> **setRotationFromEuler**(`euler`): `void`

Defined in: [three/src/core/Object3D.js:465](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L465)

Sets the given rotation represented as Euler angles to the 3D object.

#### Parameters

##### euler

[`Euler`](/reference/three/classes/euler/)

The Euler angles.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`setRotationFromEuler`](/reference/three/classes/mesh/#setrotationfromeuler)

***

### setRotationFromMatrix()

> **setRotationFromMatrix**(`m`): `void`

Defined in: [three/src/core/Object3D.js:477](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L477)

Sets the given rotation represented as rotation matrix to the 3D object.

#### Parameters

##### m

[`Matrix4`](/reference/three/classes/matrix4/)

Although a 4x4 matrix is expected, the upper 3x3 portion must be
a pure rotation matrix (i.e, unscaled).

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`setRotationFromMatrix`](/reference/three/classes/mesh/#setrotationfrommatrix)

***

### setRotationFromQuaternion()

> **setRotationFromQuaternion**(`q`): `void`

Defined in: [three/src/core/Object3D.js:490](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L490)

Sets the given rotation represented as a Quaternion to the 3D object.

#### Parameters

##### q

[`Quaternion`](/reference/three/classes/quaternion/)

The Quaternion

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`setRotationFromQuaternion`](/reference/three/classes/mesh/#setrotationfromquaternion)

***

### setVisibleAt()

> **setVisibleAt**(`instanceId`, `visible`): `BatchedMesh`

Defined in: [three/src/objects/BatchedMesh.js:1144](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L1144)

Sets the visibility of the instance.

#### Parameters

##### instanceId

`number`

The id of the instance to set the visibility of.

##### visible

`boolean`

Whether the instance is visible or not.

#### Returns

`BatchedMesh`

A reference to this batched mesh.

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/core/Object3D.js:1224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1224)

Serializes the 3D object into JSON.

#### Parameters

##### meta

`any`

An optional value holding meta information about the serialization.

#### Returns

`any`

A JSON object representing the serialized 3D object.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`toJSON`](/reference/three/classes/mesh/#tojson)

***

### translateOnAxis()

> **translateOnAxis**(`axis`, `distance`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:582](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L582)

Translate the 3D object by a distance along the given axis in local space.

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) axis vector.

##### distance

`number`

The distance in world units.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`translateOnAxis`](/reference/three/classes/mesh/#translateonaxis)

***

### translateX()

> **translateX**(`distance`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:601](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L601)

Translate the 3D object by a distance along its X-axis in local space.

#### Parameters

##### distance

`number`

The distance in world units.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`translateX`](/reference/three/classes/mesh/#translatex)

***

### translateY()

> **translateY**(`distance`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:613](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L613)

Translate the 3D object by a distance along its Y-axis in local space.

#### Parameters

##### distance

`number`

The distance in world units.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`translateY`](/reference/three/classes/mesh/#translatey)

***

### translateZ()

> **translateZ**(`distance`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:625](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L625)

Translate the 3D object by a distance along its Z-axis in local space.

#### Parameters

##### distance

`number`

The distance in world units.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`translateZ`](/reference/three/classes/mesh/#translatez)

***

### traverse()

> **traverse**(`callback`): `void`

Defined in: [three/src/core/Object3D.js:1044](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1044)

Executes the callback on this 3D object and all descendants.

Note: Modifying the scene graph inside the callback is discouraged.

#### Parameters

##### callback

`Function`

A callback function that allows to process the current 3D object.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`traverse`](/reference/three/classes/mesh/#traverse)

***

### traverseAncestors()

> **traverseAncestors**(`callback`): `void`

Defined in: [three/src/core/Object3D.js:1089](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1089)

Like [Object3D#traverse](/reference/three/classes/object3d/#traverse), but the callback will only be executed for all ancestors.

Note: Modifying the scene graph inside the callback is discouraged.

#### Parameters

##### callback

`Function`

A callback function that allows to process the current 3D object.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`traverseAncestors`](/reference/three/classes/mesh/#traverseancestors)

***

### traverseVisible()

> **traverseVisible**(`callback`): `void`

Defined in: [three/src/core/Object3D.js:1066](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1066)

Like [Object3D#traverse](/reference/three/classes/object3d/#traverse), but the callback will only be executed for visible 3D objects.
Descendants of invisible 3D objects are not traversed.

Note: Modifying the scene graph inside the callback is discouraged.

#### Parameters

##### callback

`Function`

A callback function that allows to process the current 3D object.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`traverseVisible`](/reference/three/classes/mesh/#traversevisible)

***

### updateMatrix()

> **updateMatrix**(): `void`

Defined in: [three/src/core/Object3D.js:1107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1107)

Updates the transformation matrix in local space by computing it from the current
position, rotation and scale values.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`updateMatrix`](/reference/three/classes/mesh/#updatematrix)

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`?): `void`

Defined in: [three/src/core/Object3D.js:1126](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1126)

Updates the transformation matrix in world space of this 3D objects and its descendants.

To ensure correct results, this method also recomputes the 3D object's transformation matrix in
local space. The computation of the local and world matrix can be controlled with the
[Object3D#matrixAutoUpdate](/reference/three/classes/object3d/#matrixautoupdate) and [Object3D#matrixWorldAutoUpdate](/reference/three/classes/object3d/#matrixworldautoupdate) flags which are both
`true` by default.  Set these flags to `false` if you need more control over the update matrix process.

#### Parameters

##### force?

`boolean`

When set to `true`, a recomputation of world matrices is forced even
when [Object3D#matrixWorldAutoUpdate](/reference/three/classes/object3d/#matrixworldautoupdate) is set to `false`.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`updateMatrixWorld`](/reference/three/classes/mesh/#updatematrixworld)

***

### updateMorphTargets()

> **updateMorphTargets**(): `void`

Defined in: [three/src/objects/Mesh.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Mesh.js#L128)

Sets the values of [Mesh#morphTargetDictionary](/reference/three/classes/mesh/#morphtargetdictionary) and [Mesh#morphTargetInfluences](/reference/three/classes/mesh/#morphtargetinfluences)
to make sure existing morph targets can influence this 3D object.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`updateMorphTargets`](/reference/three/classes/mesh/#updatemorphtargets)

***

### updateWorldMatrix()

> **updateWorldMatrix**(`updateParents`?, `updateChildren`?): `void`

Defined in: [three/src/core/Object3D.js:1173](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1173)

An alternative version of [Object3D#updateMatrixWorld](/reference/three/classes/object3d/#updatematrixworld) with more control over the
update of ancestor and descendant nodes.

#### Parameters

##### updateParents?

`boolean`

Whether ancestor nodes should be updated or not.

##### updateChildren?

`boolean`

Whether descendant nodes should be updated or not.

#### Returns

`void`

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`updateWorldMatrix`](/reference/three/classes/mesh/#updateworldmatrix)

***

### validateGeometryId()

> **validateGeometryId**(`geometryId`): `void`

Defined in: [three/src/objects/BatchedMesh.js:467](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L467)

Validates the geometry defined by the given ID.

#### Parameters

##### geometryId

`number`

The geometry to validate.

#### Returns

`void`

***

### validateInstanceId()

> **validateInstanceId**(`instanceId`): `void`

Defined in: [three/src/objects/BatchedMesh.js:451](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/BatchedMesh.js#L451)

Validates the instance defined by the given ID.

#### Parameters

##### instanceId

`number`

The instance to validate.

#### Returns

`void`

***

### worldToLocal()

> **worldToLocal**(`vector`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:651](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L651)

Converts the given vector from this 3D object's word space to local space.

#### Parameters

##### vector

[`Vector3`](/reference/three/classes/vector3/)

The vector to convert.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The converted vector.

#### Inherited from

[`Mesh`](/reference/three/classes/mesh/).[`worldToLocal`](/reference/three/classes/mesh/#worldtolocal)

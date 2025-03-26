---
editUrl: false
next: false
prev: false
title: "TetrahedronGeometry"
---

Defined in: [three/src/geometries/TetrahedronGeometry.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/geometries/TetrahedronGeometry.js#L15)

A geometry class for representing an tetrahedron.

```js
const geometry = new THREE.TetrahedronGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const tetrahedron = new THREE.Mesh( geometry, material );
scene.add( tetrahedron );
```

## Extends

- [`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/)

## Constructors

### Constructor

> **new TetrahedronGeometry**(`radius`?, `detail`?): `TetrahedronGeometry`

Defined in: [three/src/geometries/TetrahedronGeometry.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/geometries/TetrahedronGeometry.js#L23)

Constructs a new tetrahedron geometry.

#### Parameters

##### radius?

`number` = `1`

Radius of the tetrahedron.

##### detail?

`number` = `0`

Setting this to a value greater than `0` adds vertices making it no longer a tetrahedron.

#### Returns

`TetrahedronGeometry`

#### Overrides

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`constructor`](/reference/three/classes/polyhedrongeometry/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`_listeners`](/reference/three/classes/polyhedrongeometry/#_listeners)

***

### attributes

> **attributes**: `object`

Defined in: [three/src/core/BufferGeometry.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L121)

This dictionary has as id the name of the attribute to be set and as value
the buffer attribute to set it to. Rather than accessing this property directly,
use `setAttribute()` and `getAttribute()` to access attributes of this geometry.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`attributes`](/reference/three/classes/polyhedrongeometry/#attributes)

***

### boundingBox

> **boundingBox**: [`Box3`](/reference/three/classes/box3/)

Defined in: [three/src/core/BufferGeometry.js:162](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L162)

Bounding box for the geometry which can be calculated with `computeBoundingBox()`.

#### Default

```ts
null
```

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`boundingBox`](/reference/three/classes/polyhedrongeometry/#boundingbox)

***

### boundingSphere

> **boundingSphere**: [`Sphere`](/reference/three/classes/sphere/)

Defined in: [three/src/core/BufferGeometry.js:170](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L170)

Bounding sphere for the geometry which can be calculated with `computeBoundingSphere()`.

#### Default

```ts
null
```

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`boundingSphere`](/reference/three/classes/polyhedrongeometry/#boundingsphere)

***

### drawRange

> **drawRange**: `object`

Defined in: [three/src/core/BufferGeometry.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L178)

Determines the part of the geometry to render. This should not be set directly,
instead use `setDrawRange()`.

#### count

> **count**: `number`

#### start

> **start**: `number`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`drawRange`](/reference/three/classes/polyhedrongeometry/#drawrange)

***

### groups

> **groups**: `any`[]

Defined in: [three/src/core/BufferGeometry.js:154](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L154)

Split the geometry into groups, each of which will be rendered in a
separate draw call. This allows an array of materials to be used with the geometry.

Use `addGroup()` and `clearGroups()` to edit groups, rather than modifying this array directly.

Every vertex and index must belong to exactly one group — groups must not share vertices or
indices, and must not leave vertices or indices unused.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`groups`](/reference/three/classes/polyhedrongeometry/#groups)

***

### index

> **index**: [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferGeometry.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L101)

Allows for vertices to be re-used across multiple triangles; this is
called using "indexed triangles". Each triangle is associated with the
indices of three vertices. This attribute therefore stores the index of
each vertex for each triangular face. If this attribute is not set, the
renderer assumes that each three contiguous positions represent a single triangle.

#### Default

```ts
null
```

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`index`](/reference/three/classes/polyhedrongeometry/#index)

***

### indirect

> **indirect**: [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferGeometry.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L112)

A (storage) buffer attribute which was generated with a compute shader and
now defines indirect draw calls.

Can only be used with WebGPURenderer and a WebGPU backend.

#### Default

```ts
null
```

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`indirect`](/reference/three/classes/polyhedrongeometry/#indirect)

***

### isBufferGeometry

> `readonly` **isBufferGeometry**: `boolean`

Defined in: [three/src/core/BufferGeometry.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L64)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`isBufferGeometry`](/reference/three/classes/polyhedrongeometry/#isbuffergeometry)

***

### morphAttributes

> **morphAttributes**: `any`

Defined in: [three/src/core/BufferGeometry.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L131)

This dictionary holds the morph targets of the geometry.

Note: Once the geometry has been rendered, the morph attribute data cannot
be changed. You will have to call `dispose()?, and create a new geometry instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`morphAttributes`](/reference/three/classes/polyhedrongeometry/#morphattributes)

***

### morphTargetsRelative

> **morphTargetsRelative**: `boolean`

Defined in: [three/src/core/BufferGeometry.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L141)

Used to control the morph target behavior; when set to `true`, the morph
target data is treated as relative offsets, rather than as absolute
positions/normals.

#### Default

```ts
false
```

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`morphTargetsRelative`](/reference/three/classes/polyhedrongeometry/#morphtargetsrelative)

***

### name

> **name**: `string`

Defined in: [three/src/core/BufferGeometry.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L88)

The name of the geometry.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`name`](/reference/three/classes/polyhedrongeometry/#name)

***

### parameters

> **parameters**: `any`

Defined in: [three/src/geometries/PolyhedronGeometry.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/geometries/PolyhedronGeometry.js#L36)

Holds the constructor parameters that have been
used to generate the geometry. Any modification
after instantiation does not change the geometry.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`parameters`](/reference/three/classes/polyhedrongeometry/#parameters)

***

### type

> **type**: `string`

Defined in: [three/src/geometries/TetrahedronGeometry.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/geometries/TetrahedronGeometry.js#L35)

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`type`](/reference/three/classes/polyhedrongeometry/#type)

***

### userData

> **userData**: `any`

Defined in: [three/src/core/BufferGeometry.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L186)

An object that can be used to store custom data about the geometry.
It should not hold references to functions as these will not be cloned.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`userData`](/reference/three/classes/polyhedrongeometry/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/core/BufferGeometry.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L81)

The UUID of the geometry.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`uuid`](/reference/three/classes/polyhedrongeometry/#uuid)

## Methods

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

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`addEventListener`](/reference/three/classes/polyhedrongeometry/#addeventlistener)

***

### addGroup()

> **addGroup**(`start`, `count`, `materialIndex`?): `void`

Defined in: [three/src/core/BufferGeometry.js:310](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L310)

Adds a group to this geometry.

#### Parameters

##### start

`number`

The first element in this draw call. That is the first
vertex for non-indexed geometry, otherwise the first triangle index.

##### count

`number`

Specifies how many vertices (or indices) are part of this group.

##### materialIndex?

`number` = `0`

The material array index to use.

#### Returns

`void`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`addGroup`](/reference/three/classes/polyhedrongeometry/#addgroup)

***

### applyMatrix4()

> **applyMatrix4**(`matrix`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:351](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L351)

Applies the given 4x4 transformation matrix to the geometry.

#### Parameters

##### matrix

[`Matrix4`](/reference/three/classes/matrix4/)

The matrix to apply.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`applyMatrix4`](/reference/three/classes/polyhedrongeometry/#applymatrix4)

***

### applyQuaternion()

> **applyQuaternion**(`q`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L407)

Applies the rotation represented by the Quaternion to the geometry.

#### Parameters

##### q

`Quaternion`

The Quaternion to apply.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`applyQuaternion`](/reference/three/classes/polyhedrongeometry/#applyquaternion)

***

### center()

> **center**(): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:546](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L546)

Center the geometry based on its bounding box.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`center`](/reference/three/classes/polyhedrongeometry/#center)

***

### clearGroups()

> **clearGroups**(): `void`

Defined in: [three/src/core/BufferGeometry.js:325](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L325)

Clears all groups.

#### Returns

`void`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`clearGroups`](/reference/three/classes/polyhedrongeometry/#cleargroups)

***

### clone()

> **clone**(): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:1318](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1318)

Returns a new geometry with copied values from this instance.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A clone of this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`clone`](/reference/three/classes/polyhedrongeometry/#clone)

***

### computeBoundingBox()

> **computeBoundingBox**(): `void`

Defined in: [three/src/core/BufferGeometry.js:616](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L616)

Computes the bounding box of the geometry, and updates the `boundingBox` member.
The bounding box is not computed by the engine; it must be computed by your app.
You may need to recompute the bounding box if the geometry vertices are modified.

#### Returns

`void`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`computeBoundingBox`](/reference/three/classes/polyhedrongeometry/#computeboundingbox)

***

### computeBoundingSphere()

> **computeBoundingSphere**(): `void`

Defined in: [three/src/core/BufferGeometry.js:691](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L691)

Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
You may need to recompute the bounding sphere if the geometry vertices are modified.

#### Returns

`void`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`computeBoundingSphere`](/reference/three/classes/polyhedrongeometry/#computeboundingsphere)

***

### computeTangents()

> **computeTangents**(): `void`

Defined in: [three/src/core/BufferGeometry.js:810](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L810)

Calculates and adds a tangent attribute to this geometry.

The computation is only supported for indexed geometries and if position, normal, and uv attributes
are defined. When using a tangent space normal map, prefer the MikkTSpace algorithm provided by
BufferGeometryUtils#computeMikkTSpaceTangents instead.

#### Returns

`void`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`computeTangents`](/reference/three/classes/polyhedrongeometry/#computetangents)

***

### computeVertexNormals()

> **computeVertexNormals**(): `void`

Defined in: [three/src/core/BufferGeometry.js:975](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L975)

Computes vertex normals for the given vertex data. For indexed geometries, the method sets
each vertex normal to be the average of the face normals of the faces that share that vertex.
For non-indexed geometries, vertices are not shared, and the method sets each vertex normal
to be the same as the face normal.

#### Returns

`void`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`computeVertexNormals`](/reference/three/classes/polyhedrongeometry/#computevertexnormals)

***

### copy()

> **copy**(`source`): `TetrahedronGeometry`

Defined in: [three/src/geometries/PolyhedronGeometry.js:323](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/geometries/PolyhedronGeometry.js#L323)

Copies the values of the given geometry to this instance.

#### Parameters

##### source

`any`

The geometry to copy.

#### Returns

`TetrahedronGeometry`

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`copy`](/reference/three/classes/polyhedrongeometry/#copy)

***

### deleteAttribute()

> **deleteAttribute**(`name`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L282)

Deletes the attribute for the given name.

#### Parameters

##### name

`string`

The attribute name to delete.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`deleteAttribute`](/reference/three/classes/polyhedrongeometry/#deleteattribute)

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

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`dispatchEvent`](/reference/three/classes/polyhedrongeometry/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/core/BufferGeometry.js:1441](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1441)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

#### Fires

BufferGeometry#dispose

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`dispose`](/reference/three/classes/polyhedrongeometry/#dispose)

***

### getAttribute()

> **getAttribute**(`name`): `any`

Defined in: [three/src/core/BufferGeometry.js:255](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L255)

Returns the buffer attribute for the given name.

#### Parameters

##### name

`string`

The attribute name.

#### Returns

`any`

The buffer attribute.
Returns `undefined` if not attribute has been found.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`getAttribute`](/reference/three/classes/polyhedrongeometry/#getattribute)

***

### getIndex()

> **getIndex**(): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferGeometry.js:195](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L195)

Returns the index of this geometry.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

The index. Returns `null` if no index is defined.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`getIndex`](/reference/three/classes/polyhedrongeometry/#getindex)

***

### getIndirect()

> **getIndirect**(): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferGeometry.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L242)

Returns the indirect attribute of this geometry.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

The indirect attribute. Returns `null` if no indirect attribute is defined.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`getIndirect`](/reference/three/classes/polyhedrongeometry/#getindirect)

***

### hasAttribute()

> **hasAttribute**(`name`): `boolean`

Defined in: [three/src/core/BufferGeometry.js:296](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L296)

Returns `true` if this geometry has an attribute for the given name.

#### Parameters

##### name

`string`

The attribute name.

#### Returns

`boolean`

Whether this geometry has an attribute for the given name or not.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`hasAttribute`](/reference/three/classes/polyhedrongeometry/#hasattribute)

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

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`hasEventListener`](/reference/three/classes/polyhedrongeometry/#haseventlistener)

***

### lookAt()

> **lookAt**(`vector`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:529](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L529)

Rotates the geometry to face a point in 3D space. This is typically done as a one time
operation, and not during a loop. Use [Object3D#lookAt](/reference/three/classes/object3d/#lookat) for typical
real-time mesh rotation.

#### Parameters

##### vector

[`Vector3`](/reference/three/classes/vector3/)

The target point.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`lookAt`](/reference/three/classes/polyhedrongeometry/#lookat)

***

### normalizeNormals()

> **normalizeNormals**(): `void`

Defined in: [three/src/core/BufferGeometry.js:1071](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1071)

Ensures every normal vector in a geometry will have a magnitude of `1`. This will
correct lighting on the geometry surfaces.

#### Returns

`void`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`normalizeNormals`](/reference/three/classes/polyhedrongeometry/#normalizenormals)

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

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`removeEventListener`](/reference/three/classes/polyhedrongeometry/#removeeventlistener)

***

### rotateX()

> **rotateX**(`angle`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:425](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L425)

Rotates the geometry about the X axis. This is typically done as a one time
operation, and not during a loop. Use Object3D#rotation for typical
real-time mesh rotation.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`rotateX`](/reference/three/classes/polyhedrongeometry/#rotatex)

***

### rotateY()

> **rotateY**(`angle`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:445](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L445)

Rotates the geometry about the Y axis. This is typically done as a one time
operation, and not during a loop. Use Object3D#rotation for typical
real-time mesh rotation.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`rotateY`](/reference/three/classes/polyhedrongeometry/#rotatey)

***

### rotateZ()

> **rotateZ**(`angle`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:465](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L465)

Rotates the geometry about the Z axis. This is typically done as a one time
operation, and not during a loop. Use Object3D#rotation for typical
real-time mesh rotation.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`rotateZ`](/reference/three/classes/polyhedrongeometry/#rotatez)

***

### scale()

> **scale**(`x`, `y`, `z`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:509](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L509)

Scales the geometry. This is typically done as a one time
operation, and not during a loop. Use Object3D#scale for typical
real-time mesh rotation.

#### Parameters

##### x

`number`

The x scale.

##### y

`number`

The y scale.

##### z

`number`

The z scale.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`scale`](/reference/three/classes/polyhedrongeometry/#scale)

***

### setAttribute()

> **setAttribute**(`name`, `attribute`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:268](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L268)

Sets the given attribute for the given name.

#### Parameters

##### name

`string`

The attribute name.

##### attribute

`any`

The attribute to set.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`setAttribute`](/reference/three/classes/polyhedrongeometry/#setattribute)

***

### setDrawRange()

> **setDrawRange**(`start`, `count`): `void`

Defined in: [three/src/core/BufferGeometry.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L338)

Sets the draw range for this geometry.

#### Parameters

##### start

`number`

The first vertex for non-indexed geometry, otherwise the first triangle index.

##### count

`number`

For non-indexed BufferGeometry, `count` is the number of vertices to render.
For indexed BufferGeometry, `count` is the number of indices to render.

#### Returns

`void`

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`setDrawRange`](/reference/three/classes/polyhedrongeometry/#setdrawrange)

***

### setFromPoints()

> **setFromPoints**(`points`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:569](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L569)

Defines a geometry by creating a `position` attribute based on the given array of points. The array
can hold 2D or 3D vectors. When using two-dimensional data, the `z` coordinate for all vertices is
set to `0`.

If the method is used with an existing `position` attribute, the vertex data are overwritten with the
data from the array. The length of the array must match the vertex count.

#### Parameters

##### points

The points.

[`Vector3`](/reference/three/classes/vector3/)[] | [`Vector2`](/reference/three/classes/vector2/)[]

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`setFromPoints`](/reference/three/classes/polyhedrongeometry/#setfrompoints)

***

### setIndex()

> **setIndex**(`index`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L207)

Sets the given index to this geometry.

#### Parameters

##### index

The index to set.

`number`[] | [`BufferAttribute`](/reference/three/classes/bufferattribute/)

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`setIndex`](/reference/three/classes/polyhedrongeometry/#setindex)

***

### setIndirect()

> **setIndirect**(`indirect`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:229](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L229)

Sets the given indirect attribute to this geometry.

#### Parameters

##### indirect

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

The attribute holding indirect draw calls.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`setIndirect`](/reference/three/classes/polyhedrongeometry/#setindirect)

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/core/BufferGeometry.js:1200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1200)

Serializes the geometry into JSON.

#### Returns

`any`

A JSON object representing the serialized geometry.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`toJSON`](/reference/three/classes/polyhedrongeometry/#tojson)

***

### toNonIndexed()

> **toNonIndexed**(): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:1093](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1093)

Return a new non-index version of this indexed geometry. If the geometry
is already non-indexed, the method is a NOOP.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

The non-indexed version of this indexed geometry.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`toNonIndexed`](/reference/three/classes/polyhedrongeometry/#tononindexed)

***

### translate()

> **translate**(`x`, `y`, `z`): [`BufferGeometry`](/reference/three/classes/buffergeometry/)

Defined in: [three/src/core/BufferGeometry.js:487](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L487)

Translates the geometry. This is typically done as a one time
operation, and not during a loop. Use Object3D#position for typical
real-time mesh rotation.

#### Parameters

##### x

`number`

The x offset.

##### y

`number`

The y offset.

##### z

`number`

The z offset.

#### Returns

[`BufferGeometry`](/reference/three/classes/buffergeometry/)

A reference to this instance.

#### Inherited from

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`translate`](/reference/three/classes/polyhedrongeometry/#translate)

***

### fromJSON()

> `static` **fromJSON**(`data`): `TetrahedronGeometry`

Defined in: [three/src/geometries/TetrahedronGeometry.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/geometries/TetrahedronGeometry.js#L58)

Factory method for creating an instance of this class from the given
JSON object.

#### Parameters

##### data

`any`

A JSON object representing the serialized geometry.

#### Returns

`TetrahedronGeometry`

A new instance.

#### Overrides

[`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/).[`fromJSON`](/reference/three/classes/polyhedrongeometry/#fromjson)

---
editUrl: false
next: false
prev: false
title: "BufferGeometry"
---

Defined in: [three/src/core/BufferGeometry.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L48)

A representation of mesh, line, or point geometry. Includes vertex
positions, face indices, normals, colors, UVs, and custom attributes
within buffers, reducing the cost of passing all this data to the GPU.

```js
const geometry = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = new Float32Array( [
	-1.0, -1.0,  1.0, // v0
	 1.0, -1.0,  1.0, // v1
	 1.0,  1.0,  1.0, // v2

	 1.0,  1.0,  1.0, // v3
	-1.0,  1.0,  1.0, // v4
	-1.0, -1.0,  1.0  // v5
] );
// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material );
```

## Extends

- [`EventDispatcher`](/reference/three/classes/eventdispatcher/)

## Extended by

- [`InstancedBufferGeometry`](/reference/three/classes/instancedbuffergeometry/)
- [`BoxGeometry`](/reference/three/classes/boxgeometry/)
- [`CircleGeometry`](/reference/three/classes/circlegeometry/)
- [`CylinderGeometry`](/reference/three/classes/cylindergeometry/)
- [`EdgesGeometry`](/reference/three/classes/edgesgeometry/)
- [`ExtrudeGeometry`](/reference/three/classes/extrudegeometry/)
- [`LatheGeometry`](/reference/three/classes/lathegeometry/)
- [`PlaneGeometry`](/reference/three/classes/planegeometry/)
- [`PolyhedronGeometry`](/reference/three/classes/polyhedrongeometry/)
- [`RingGeometry`](/reference/three/classes/ringgeometry/)
- [`ShapeGeometry`](/reference/three/classes/shapegeometry/)
- [`SphereGeometry`](/reference/three/classes/spheregeometry/)
- [`TorusGeometry`](/reference/three/classes/torusgeometry/)
- [`TorusKnotGeometry`](/reference/three/classes/torusknotgeometry/)
- [`TubeGeometry`](/reference/three/classes/tubegeometry/)
- [`WireframeGeometry`](/reference/three/classes/wireframegeometry/)

## Constructors

### Constructor

> **new BufferGeometry**(): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L53)

Constructs a new geometry.

#### Returns

`BufferGeometry`

#### Overrides

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`constructor`](/reference/three/classes/eventdispatcher/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`_listeners`](/reference/three/classes/eventdispatcher/#_listeners)

***

### attributes

> **attributes**: `object`

Defined in: [three/src/core/BufferGeometry.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L121)

This dictionary has as id the name of the attribute to be set and as value
the buffer attribute to set it to. Rather than accessing this property directly,
use `setAttribute()` and `getAttribute()` to access attributes of this geometry.

***

### boundingBox

> **boundingBox**: [`Box3`](/reference/three/classes/box3/)

Defined in: [three/src/core/BufferGeometry.js:162](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L162)

Bounding box for the geometry which can be calculated with `computeBoundingBox()`.

#### Default

```ts
null
```

***

### boundingSphere

> **boundingSphere**: [`Sphere`](/reference/three/classes/sphere/)

Defined in: [three/src/core/BufferGeometry.js:170](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L170)

Bounding sphere for the geometry which can be calculated with `computeBoundingSphere()`.

#### Default

```ts
null
```

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

***

### groups

> **groups**: `any`[]

Defined in: [three/src/core/BufferGeometry.js:154](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L154)

Split the geometry into groups, each of which will be rendered in a
separate draw call. This allows an array of materials to be used with the geometry.

Use `addGroup()` and `clearGroups()` to edit groups, rather than modifying this array directly.

Every vertex and index must belong to exactly one group — groups must not share vertices or
indices, and must not leave vertices or indices unused.

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

***

### isBufferGeometry

> `readonly` **isBufferGeometry**: `boolean`

Defined in: [three/src/core/BufferGeometry.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L64)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### morphAttributes

> **morphAttributes**: `any`

Defined in: [three/src/core/BufferGeometry.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L131)

This dictionary holds the morph targets of the geometry.

Note: Once the geometry has been rendered, the morph attribute data cannot
be changed. You will have to call `dispose()?, and create a new geometry instance.

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

***

### name

> **name**: `string`

Defined in: [three/src/core/BufferGeometry.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L88)

The name of the geometry.

***

### type

> **type**: `string`

Defined in: [three/src/core/BufferGeometry.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L89)

***

### userData

> **userData**: `any`

Defined in: [three/src/core/BufferGeometry.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L186)

An object that can be used to store custom data about the geometry.
It should not hold references to functions as these will not be cloned.

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/core/BufferGeometry.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L81)

The UUID of the geometry.

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

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`addEventListener`](/reference/three/classes/eventdispatcher/#addeventlistener)

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

***

### applyMatrix4()

> **applyMatrix4**(`matrix`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:351](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L351)

Applies the given 4x4 transformation matrix to the geometry.

#### Parameters

##### matrix

[`Matrix4`](/reference/three/classes/matrix4/)

The matrix to apply.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### applyQuaternion()

> **applyQuaternion**(`q`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L407)

Applies the rotation represented by the Quaternion to the geometry.

#### Parameters

##### q

`Quaternion`

The Quaternion to apply.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### center()

> **center**(): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:546](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L546)

Center the geometry based on its bounding box.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### clearGroups()

> **clearGroups**(): `void`

Defined in: [three/src/core/BufferGeometry.js:325](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L325)

Clears all groups.

#### Returns

`void`

***

### clone()

> **clone**(): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:1318](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1318)

Returns a new geometry with copied values from this instance.

#### Returns

`BufferGeometry`

A clone of this instance.

***

### computeBoundingBox()

> **computeBoundingBox**(): `void`

Defined in: [three/src/core/BufferGeometry.js:616](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L616)

Computes the bounding box of the geometry, and updates the `boundingBox` member.
The bounding box is not computed by the engine; it must be computed by your app.
You may need to recompute the bounding box if the geometry vertices are modified.

#### Returns

`void`

***

### computeBoundingSphere()

> **computeBoundingSphere**(): `void`

Defined in: [three/src/core/BufferGeometry.js:691](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L691)

Computes the bounding sphere of the geometry, and updates the `boundingSphere` member.
The engine automatically computes the bounding sphere when it is needed, e.g., for ray casting or view frustum culling.
You may need to recompute the bounding sphere if the geometry vertices are modified.

#### Returns

`void`

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

***

### copy()

> **copy**(`source`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:1330](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1330)

Copies the values of the given geometry to this instance.

#### Parameters

##### source

`BufferGeometry`

The geometry to copy.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### deleteAttribute()

> **deleteAttribute**(`name`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L282)

Deletes the attribute for the given name.

#### Parameters

##### name

`string`

The attribute name to delete.

#### Returns

`BufferGeometry`

A reference to this instance.

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

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`dispatchEvent`](/reference/three/classes/eventdispatcher/#dispatchevent)

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

***

### getIndex()

> **getIndex**(): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferGeometry.js:195](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L195)

Returns the index of this geometry.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

The index. Returns `null` if no index is defined.

***

### getIndirect()

> **getIndirect**(): [`BufferAttribute`](/reference/three/classes/bufferattribute/)

Defined in: [three/src/core/BufferGeometry.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L242)

Returns the indirect attribute of this geometry.

#### Returns

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

The indirect attribute. Returns `null` if no indirect attribute is defined.

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

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`hasEventListener`](/reference/three/classes/eventdispatcher/#haseventlistener)

***

### lookAt()

> **lookAt**(`vector`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:529](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L529)

Rotates the geometry to face a point in 3D space. This is typically done as a one time
operation, and not during a loop. Use [Object3D#lookAt](/reference/three/classes/object3d/#lookat) for typical
real-time mesh rotation.

#### Parameters

##### vector

[`Vector3`](/reference/three/classes/vector3/)

The target point.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### normalizeNormals()

> **normalizeNormals**(): `void`

Defined in: [three/src/core/BufferGeometry.js:1071](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1071)

Ensures every normal vector in a geometry will have a magnitude of `1`. This will
correct lighting on the geometry surfaces.

#### Returns

`void`

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

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`removeEventListener`](/reference/three/classes/eventdispatcher/#removeeventlistener)

***

### rotateX()

> **rotateX**(`angle`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:425](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L425)

Rotates the geometry about the X axis. This is typically done as a one time
operation, and not during a loop. Use Object3D#rotation for typical
real-time mesh rotation.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### rotateY()

> **rotateY**(`angle`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:445](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L445)

Rotates the geometry about the Y axis. This is typically done as a one time
operation, and not during a loop. Use Object3D#rotation for typical
real-time mesh rotation.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### rotateZ()

> **rotateZ**(`angle`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:465](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L465)

Rotates the geometry about the Z axis. This is typically done as a one time
operation, and not during a loop. Use Object3D#rotation for typical
real-time mesh rotation.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### scale()

> **scale**(`x`, `y`, `z`): `BufferGeometry`

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

`BufferGeometry`

A reference to this instance.

***

### setAttribute()

> **setAttribute**(`name`, `attribute`): `BufferGeometry`

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

`BufferGeometry`

A reference to this instance.

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

***

### setFromPoints()

> **setFromPoints**(`points`): `BufferGeometry`

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

`BufferGeometry`

A reference to this instance.

***

### setIndex()

> **setIndex**(`index`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L207)

Sets the given index to this geometry.

#### Parameters

##### index

The index to set.

`number`[] | [`BufferAttribute`](/reference/three/classes/bufferattribute/)

#### Returns

`BufferGeometry`

A reference to this instance.

***

### setIndirect()

> **setIndirect**(`indirect`): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:229](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L229)

Sets the given indirect attribute to this geometry.

#### Parameters

##### indirect

[`BufferAttribute`](/reference/three/classes/bufferattribute/)

The attribute holding indirect draw calls.

#### Returns

`BufferGeometry`

A reference to this instance.

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/core/BufferGeometry.js:1200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1200)

Serializes the geometry into JSON.

#### Returns

`any`

A JSON object representing the serialized geometry.

***

### toNonIndexed()

> **toNonIndexed**(): `BufferGeometry`

Defined in: [three/src/core/BufferGeometry.js:1093](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/BufferGeometry.js#L1093)

Return a new non-index version of this indexed geometry. If the geometry
is already non-indexed, the method is a NOOP.

#### Returns

`BufferGeometry`

The non-indexed version of this indexed geometry.

***

### translate()

> **translate**(`x`, `y`, `z`): `BufferGeometry`

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

`BufferGeometry`

A reference to this instance.

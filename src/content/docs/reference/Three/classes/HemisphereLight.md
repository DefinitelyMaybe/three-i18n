---
editUrl: false
next: false
prev: false
title: "HemisphereLight"
---

Defined in: [three/src/lights/HemisphereLight.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/HemisphereLight.js#L18)

A light source positioned directly above the scene, with color fading from
the sky color to the ground color.

This light cannot be used to cast shadows.

```js
const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );
```

## Extends

- [`Light`](/reference/three/classes/light/)

## Constructors

### Constructor

> **new HemisphereLight**(`skyColor`?, `groundColor`?, `intensity`?): `HemisphereLight`

Defined in: [three/src/lights/HemisphereLight.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/HemisphereLight.js#L27)

Constructs a new hemisphere light.

#### Parameters

##### skyColor?

The light's sky color.

`string` | `number` | [`Color`](/reference/three/classes/color/)

##### groundColor?

The light's ground color.

`string` | `number` | [`Color`](/reference/three/classes/color/)

##### intensity?

`number`

The light's strength/intensity.

#### Returns

`HemisphereLight`

#### Overrides

[`Light`](/reference/three/classes/light/).[`constructor`](/reference/three/classes/light/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`Light`](/reference/three/classes/light/).[`_listeners`](/reference/three/classes/light/#_listeners)

***

### animations

> **animations**: `AnimationClip`[]

Defined in: [three/src/core/Object3D.js:331](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L331)

An array holding the animation clips of the 3D object.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`animations`](/reference/three/classes/light/#animations)

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

[`Light`](/reference/three/classes/light/).[`castShadow`](/reference/three/classes/light/#castshadow)

***

### children

> **children**: [`Object3D`](/reference/three/classes/object3d/)[]

Defined in: [three/src/core/Object3D.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L127)

An array holding the child 3D objects of this instance.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`children`](/reference/three/classes/light/#children)

***

### color

> **color**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/lights/Light.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/Light.js#L39)

The light's color.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`color`](/reference/three/classes/light/#color)

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

[`Light`](/reference/three/classes/light/).[`customDepthMaterial`](/reference/three/classes/light/#customdepthmaterial)

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

[`Light`](/reference/three/classes/light/).[`customDistanceMaterial`](/reference/three/classes/light/#customdistancematerial)

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

[`Light`](/reference/three/classes/light/).[`frustumCulled`](/reference/three/classes/light/#frustumculled)

***

### groundColor

> **groundColor**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/lights/HemisphereLight.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/HemisphereLight.js#L50)

The light's ground color.

***

### intensity

> **intensity**: `number`

Defined in: [three/src/lights/Light.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/Light.js#L47)

The light's intensity.

#### Default

```ts
1
```

#### Inherited from

[`Light`](/reference/three/classes/light/).[`intensity`](/reference/three/classes/light/#intensity)

***

### isHemisphereLight

> `readonly` **isHemisphereLight**: `boolean`

Defined in: [three/src/lights/HemisphereLight.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/HemisphereLight.js#L38)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isLight

> `readonly` **isLight**: `boolean`

Defined in: [three/src/lights/Light.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/Light.js#L30)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`Light`](/reference/three/classes/light/).[`isLight`](/reference/three/classes/light/#islight)

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

[`Light`](/reference/three/classes/light/).[`isObject3D`](/reference/three/classes/light/#isobject3d)

***

### layers

> **layers**: [`Layers`](/reference/three/classes/layers/)

Defined in: [three/src/core/Object3D.js:280](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L280)

The layer membership of the 3D object. The 3D object is only visible if it has
at least one layer in common with the camera in use. This property can also be
used to filter out unwanted objects in ray-intersection tests when using [Raycaster](/reference/three/classes/raycaster/).

#### Inherited from

[`Light`](/reference/three/classes/light/).[`layers`](/reference/three/classes/light/#layers)

***

### matrix

> **matrix**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/core/Object3D.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L232)

Represents the object's transformation matrix in local space.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`matrix`](/reference/three/classes/light/#matrix)

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

[`Light`](/reference/three/classes/light/).[`matrixAutoUpdate`](/reference/three/classes/light/#matrixautoupdate)

***

### matrixWorld

> **matrixWorld**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/core/Object3D.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L240)

Represents the object's transformation matrix in world space.
If the 3D object has no parent, then it's identical to the local transformation matrix

#### Inherited from

[`Light`](/reference/three/classes/light/).[`matrixWorld`](/reference/three/classes/light/#matrixworld)

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

[`Light`](/reference/three/classes/light/).[`matrixWorldAutoUpdate`](/reference/three/classes/light/#matrixworldautoupdate)

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

[`Light`](/reference/three/classes/light/).[`matrixWorldNeedsUpdate`](/reference/three/classes/light/#matrixworldneedsupdate)

***

### name

> **name**: `string`

Defined in: [three/src/core/Object3D.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L103)

The name of the 3D object.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`name`](/reference/three/classes/light/#name)

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

[`Light`](/reference/three/classes/light/).[`parent`](/reference/three/classes/light/#parent)

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

[`Light`](/reference/three/classes/light/).[`receiveShadow`](/reference/three/classes/light/#receiveshadow)

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

[`Light`](/reference/three/classes/light/).[`renderOrder`](/reference/three/classes/light/#renderorder)

***

### type

> **type**: `string`

Defined in: [three/src/lights/HemisphereLight.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/HemisphereLight.js#L40)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`type`](/reference/three/classes/light/#type)

***

### up

> **up**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L137)

Defines the `up` direction of the 3D object which influences
the orientation via methods like [Object3D#lookAt](/reference/three/classes/object3d/#lookat).

The default values for all 3D objects is defined by `Object3D.DEFAULT_UP`.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`up`](/reference/three/classes/light/#up)

***

### userData

> **userData**: `any`

Defined in: [three/src/core/Object3D.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L362)

An object that can be used to store custom data about the 3D object. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`userData`](/reference/three/classes/light/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/core/Object3D.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L96)

The UUID of the 3D object.

#### Inherited from

[`Light`](/reference/three/classes/light/).[`uuid`](/reference/three/classes/light/#uuid)

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

[`Light`](/reference/three/classes/light/).[`visible`](/reference/three/classes/light/#visible)

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

[`Light`](/reference/three/classes/light/).[`DEFAULT_MATRIX_AUTO_UPDATE`](/reference/three/classes/light/#default_matrix_auto_update)

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

[`Light`](/reference/three/classes/light/).[`DEFAULT_MATRIX_WORLD_AUTO_UPDATE`](/reference/three/classes/light/#default_matrix_world_auto_update)

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

[`Light`](/reference/three/classes/light/).[`DEFAULT_UP`](/reference/three/classes/light/#default_up)

## Methods

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

[`Light`](/reference/three/classes/light/).[`add`](/reference/three/classes/light/#add)

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

[`Light`](/reference/three/classes/light/).[`addEventListener`](/reference/three/classes/light/#addeventlistener)

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

[`Light`](/reference/three/classes/light/).[`applyMatrix4`](/reference/three/classes/light/#applymatrix4)

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

[`Light`](/reference/three/classes/light/).[`applyQuaternion`](/reference/three/classes/light/#applyquaternion)

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

[`Light`](/reference/three/classes/light/).[`attach`](/reference/three/classes/light/#attach)

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

[`Light`](/reference/three/classes/light/).[`clear`](/reference/three/classes/light/#clear)

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

[`Light`](/reference/three/classes/light/).[`clone`](/reference/three/classes/light/#clone)

***

### copy()

> **copy**(`source`, `recursive`): `HemisphereLight`

Defined in: [three/src/lights/HemisphereLight.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/HemisphereLight.js#L54)

Copies the values of the given 3D object to this instance.

#### Parameters

##### source

`any`

The 3D object to copy.

##### recursive

`any`

When set to `true`, descendants of the 3D object are cloned.

#### Returns

`HemisphereLight`

A reference to this instance.

#### Overrides

[`Light`](/reference/three/classes/light/).[`copy`](/reference/three/classes/light/#copy)

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

[`Light`](/reference/three/classes/light/).[`dispatchEvent`](/reference/three/classes/light/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/lights/Light.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/Light.js#L55)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

#### Inherited from

[`Light`](/reference/three/classes/light/).[`dispose`](/reference/three/classes/light/#dispose)

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

[`Light`](/reference/three/classes/light/).[`getObjectById`](/reference/three/classes/light/#getobjectbyid)

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

[`Light`](/reference/three/classes/light/).[`getObjectByName`](/reference/three/classes/light/#getobjectbyname)

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

[`Light`](/reference/three/classes/light/).[`getObjectByProperty`](/reference/three/classes/light/#getobjectbyproperty)

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

[`Light`](/reference/three/classes/light/).[`getObjectsByProperty`](/reference/three/classes/light/#getobjectsbyproperty)

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

[`Light`](/reference/three/classes/light/).[`getWorldDirection`](/reference/three/classes/light/#getworlddirection)

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

[`Light`](/reference/three/classes/light/).[`getWorldPosition`](/reference/three/classes/light/#getworldposition)

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

[`Light`](/reference/three/classes/light/).[`getWorldQuaternion`](/reference/three/classes/light/#getworldquaternion)

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

[`Light`](/reference/three/classes/light/).[`getWorldScale`](/reference/three/classes/light/#getworldscale)

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

[`Light`](/reference/three/classes/light/).[`hasEventListener`](/reference/three/classes/light/#haseventlistener)

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

[`Light`](/reference/three/classes/light/).[`localToWorld`](/reference/three/classes/light/#localtoworld)

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

[`Light`](/reference/three/classes/light/).[`lookAt`](/reference/three/classes/light/#lookat)

***

### onAfterRender()

> **onAfterRender**(): `void`

Defined in: [three/src/core/Object3D.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L414)

A callback that is executed immediately after a 3D object is rendered.

#### Returns

`void`

#### Inherited from

[`Light`](/reference/three/classes/light/).[`onAfterRender`](/reference/three/classes/light/#onafterrender)

***

### onAfterShadow()

> **onAfterShadow**(): `void`

Defined in: [three/src/core/Object3D.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L390)

A callback that is executed immediately after a 3D object is rendered to a shadow map.

#### Returns

`void`

#### Inherited from

[`Light`](/reference/three/classes/light/).[`onAfterShadow`](/reference/three/classes/light/#onaftershadow)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/core/Object3D.js:402](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L402)

A callback that is executed immediately before a 3D object is rendered.

#### Returns

`void`

#### Inherited from

[`Light`](/reference/three/classes/light/).[`onBeforeRender`](/reference/three/classes/light/#onbeforerender)

***

### onBeforeShadow()

> **onBeforeShadow**(): `void`

Defined in: [three/src/core/Object3D.js:377](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L377)

A callback that is executed immediately before a 3D object is rendered to a shadow map.

#### Returns

`void`

#### Inherited from

[`Light`](/reference/three/classes/light/).[`onBeforeShadow`](/reference/three/classes/light/#onbeforeshadow)

***

### raycast()

> `abstract` **raycast**(): `void`

Defined in: [three/src/core/Object3D.js:1035](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1035)

Abstract method to get intersections between a casted ray and this
3D object. Renderable 3D objects such as [Mesh](/reference/three/classes/mesh/), [Line](/reference/three/classes/line/) or [Points](/reference/three/classes/points/)
implement this method in order to use raycasting.

#### Returns

`void`

#### Inherited from

[`Light`](/reference/three/classes/light/).[`raycast`](/reference/three/classes/light/#raycast)

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

[`Light`](/reference/three/classes/light/).[`remove`](/reference/three/classes/light/#remove)

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

[`Light`](/reference/three/classes/light/).[`removeEventListener`](/reference/three/classes/light/#removeeventlistener)

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

[`Light`](/reference/three/classes/light/).[`removeFromParent`](/reference/three/classes/light/#removefromparent)

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

[`Light`](/reference/three/classes/light/).[`rotateOnAxis`](/reference/three/classes/light/#rotateonaxis)

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

[`Light`](/reference/three/classes/light/).[`rotateOnWorldAxis`](/reference/three/classes/light/#rotateonworldaxis)

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

[`Light`](/reference/three/classes/light/).[`rotateX`](/reference/three/classes/light/#rotatex)

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

[`Light`](/reference/three/classes/light/).[`rotateY`](/reference/three/classes/light/#rotatey)

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

[`Light`](/reference/three/classes/light/).[`rotateZ`](/reference/three/classes/light/#rotatez)

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

[`Light`](/reference/three/classes/light/).[`setRotationFromAxisAngle`](/reference/three/classes/light/#setrotationfromaxisangle)

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

[`Light`](/reference/three/classes/light/).[`setRotationFromEuler`](/reference/three/classes/light/#setrotationfromeuler)

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

[`Light`](/reference/three/classes/light/).[`setRotationFromMatrix`](/reference/three/classes/light/#setrotationfrommatrix)

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

[`Light`](/reference/three/classes/light/).[`setRotationFromQuaternion`](/reference/three/classes/light/#setrotationfromquaternion)

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/lights/Light.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/lights/Light.js#L72)

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

[`Light`](/reference/three/classes/light/).[`toJSON`](/reference/three/classes/light/#tojson)

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

[`Light`](/reference/three/classes/light/).[`translateOnAxis`](/reference/three/classes/light/#translateonaxis)

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

[`Light`](/reference/three/classes/light/).[`translateX`](/reference/three/classes/light/#translatex)

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

[`Light`](/reference/three/classes/light/).[`translateY`](/reference/three/classes/light/#translatey)

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

[`Light`](/reference/three/classes/light/).[`translateZ`](/reference/three/classes/light/#translatez)

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

[`Light`](/reference/three/classes/light/).[`traverse`](/reference/three/classes/light/#traverse)

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

[`Light`](/reference/three/classes/light/).[`traverseAncestors`](/reference/three/classes/light/#traverseancestors)

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

[`Light`](/reference/three/classes/light/).[`traverseVisible`](/reference/three/classes/light/#traversevisible)

***

### updateMatrix()

> **updateMatrix**(): `void`

Defined in: [three/src/core/Object3D.js:1107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1107)

Updates the transformation matrix in local space by computing it from the current
position, rotation and scale values.

#### Returns

`void`

#### Inherited from

[`Light`](/reference/three/classes/light/).[`updateMatrix`](/reference/three/classes/light/#updatematrix)

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

[`Light`](/reference/three/classes/light/).[`updateMatrixWorld`](/reference/three/classes/light/#updatematrixworld)

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

[`Light`](/reference/three/classes/light/).[`updateWorldMatrix`](/reference/three/classes/light/#updateworldmatrix)

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

[`Light`](/reference/three/classes/light/).[`worldToLocal`](/reference/three/classes/light/#worldtolocal)

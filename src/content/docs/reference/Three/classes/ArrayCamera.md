---
editUrl: false
next: false
prev: false
title: "ArrayCamera"
---

Defined in: [three/src/cameras/ArrayCamera.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/ArrayCamera.js#L14)

This type of camera can be used in order to efficiently render a scene with a
predefined set of cameras. This is an important performance aspect for
rendering VR scenes.

An instance of `ArrayCamera` always has an array of sub cameras. It's mandatory
to define for each sub camera the `viewport` property which determines the
part of the viewport that is rendered with this camera.

## Extends

- [`PerspectiveCamera`](/reference/three/classes/perspectivecamera/)

## Constructors

### Constructor

> **new ArrayCamera**(`array`?): `ArrayCamera`

Defined in: [three/src/cameras/ArrayCamera.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/ArrayCamera.js#L21)

Constructs a new array camera.

#### Parameters

##### array?

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/)[] = `[]`

An array of perspective sub cameras.

#### Returns

`ArrayCamera`

#### Overrides

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`constructor`](/reference/three/classes/perspectivecamera/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`_listeners`](/reference/three/classes/perspectivecamera/#_listeners)

***

### animations

> **animations**: `AnimationClip`[]

Defined in: [three/src/core/Object3D.js:331](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L331)

An array holding the animation clips of the 3D object.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`animations`](/reference/three/classes/perspectivecamera/#animations)

***

### aspect

> **aspect**: `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L102)

The aspect ratio, usually the canvas width / canvas height.

#### Default

```ts
1
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`aspect`](/reference/three/classes/perspectivecamera/#aspect)

***

### cameras

> **cameras**: [`PerspectiveCamera`](/reference/three/classes/perspectivecamera/)[]

Defined in: [three/src/cameras/ArrayCamera.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/ArrayCamera.js#L39)

An array of perspective sub cameras.

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`castShadow`](/reference/three/classes/perspectivecamera/#castshadow)

***

### children

> **children**: [`Object3D`](/reference/three/classes/object3d/)[]

Defined in: [three/src/core/Object3D.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L127)

An array holding the child 3D objects of this instance.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`children`](/reference/three/classes/perspectivecamera/#children)

***

### coordinateSystem

> **coordinateSystem**: `any`

Defined in: [three/src/cameras/Camera.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L58)

The coordinate system in which the camera is used.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`coordinateSystem`](/reference/three/classes/perspectivecamera/#coordinatesystem)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`customDepthMaterial`](/reference/three/classes/perspectivecamera/#customdepthmaterial)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`customDistanceMaterial`](/reference/three/classes/perspectivecamera/#customdistancematerial)

***

### far

> **far**: `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L84)

The camera's far plane. Must be greater than the
current value of [PerspectiveCamera#near](/reference/three/classes/perspectivecamera/#near).

#### Default

```ts
2000
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`far`](/reference/three/classes/perspectivecamera/#far)

***

### filmGauge

> **filmGauge**: `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L121)

Film size used for the larger axis. Default is `35` (millimeters). This
parameter does not influence the projection matrix unless [PerspectiveCamera#filmOffset](/reference/three/classes/perspectivecamera/#filmoffset)
is set to a nonzero value.

#### Default

```ts
35
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`filmGauge`](/reference/three/classes/perspectivecamera/#filmgauge)

***

### filmOffset

> **filmOffset**: `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L129)

Horizontal off-center offset in the same unit as [PerspectiveCamera#filmGauge](/reference/three/classes/perspectivecamera/#filmgauge).

#### Default

```ts
0
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`filmOffset`](/reference/three/classes/perspectivecamera/#filmoffset)

***

### focus

> **focus**: `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L94)

Object distance used for stereoscopy and depth-of-field effects. This
parameter does not influence the projection matrix unless a
[StereoCamera](/reference/three/classes/stereocamera/) is being used.

#### Default

```ts
10
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`focus`](/reference/three/classes/perspectivecamera/#focus)

***

### fov

> **fov**: `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L55)

The vertical field of view, from bottom to top of view,
in degrees.

#### Default

```ts
50
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`fov`](/reference/three/classes/perspectivecamera/#fov)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`frustumCulled`](/reference/three/classes/perspectivecamera/#frustumculled)

***

### index

> **index**: `number`

Defined in: [three/src/cameras/ArrayCamera.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/ArrayCamera.js#L40)

***

### isArrayCamera

> `readonly` **isArrayCamera**: `boolean`

Defined in: [three/src/cameras/ArrayCamera.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/ArrayCamera.js#L32)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isCamera

> `readonly` **isCamera**: `boolean`

Defined in: [three/src/cameras/Camera.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L28)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`isCamera`](/reference/three/classes/perspectivecamera/#iscamera)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`isObject3D`](/reference/three/classes/perspectivecamera/#isobject3d)

***

### isPerspectiveCamera

> `readonly` **isPerspectiveCamera**: `boolean`

Defined in: [three/src/cameras/PerspectiveCamera.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L44)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`isPerspectiveCamera`](/reference/three/classes/perspectivecamera/#isperspectivecamera)

***

### layers

> **layers**: [`Layers`](/reference/three/classes/layers/)

Defined in: [three/src/core/Object3D.js:280](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L280)

The layer membership of the 3D object. The 3D object is only visible if it has
at least one layer in common with the camera in use. This property can also be
used to filter out unwanted objects in ray-intersection tests when using [Raycaster](/reference/three/classes/raycaster/).

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`layers`](/reference/three/classes/perspectivecamera/#layers)

***

### matrix

> **matrix**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/core/Object3D.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L232)

Represents the object's transformation matrix in local space.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`matrix`](/reference/three/classes/perspectivecamera/#matrix)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`matrixAutoUpdate`](/reference/three/classes/perspectivecamera/#matrixautoupdate)

***

### matrixWorld

> **matrixWorld**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/core/Object3D.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L240)

Represents the object's transformation matrix in world space.
If the 3D object has no parent, then it's identical to the local transformation matrix

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`matrixWorld`](/reference/three/classes/perspectivecamera/#matrixworld)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`matrixWorldAutoUpdate`](/reference/three/classes/perspectivecamera/#matrixworldautoupdate)

***

### matrixWorldInverse

> **matrixWorldInverse**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/cameras/Camera.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L37)

The inverse of the camera's world matrix.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`matrixWorldInverse`](/reference/three/classes/perspectivecamera/#matrixworldinverse)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`matrixWorldNeedsUpdate`](/reference/three/classes/perspectivecamera/#matrixworldneedsupdate)

***

### name

> **name**: `string`

Defined in: [three/src/core/Object3D.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L103)

The name of the 3D object.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`name`](/reference/three/classes/perspectivecamera/#name)

***

### near

> **near**: `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L75)

The camera's near plane. The valid range is greater than `0`
and less than the current value of [PerspectiveCamera#far](/reference/three/classes/perspectivecamera/#far).

Note that, unlike for the [OrthographicCamera](/reference/three/classes/orthographiccamera/), `0` is <em>not</em> a
valid value for a perspective camera's near plane.

#### Default

```ts
0.1
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`near`](/reference/three/classes/perspectivecamera/#near)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`parent`](/reference/three/classes/perspectivecamera/#parent)

***

### projectionMatrix

> **projectionMatrix**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/cameras/Camera.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L44)

The camera's projection matrix.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`projectionMatrix`](/reference/three/classes/perspectivecamera/#projectionmatrix)

***

### projectionMatrixInverse

> **projectionMatrixInverse**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/cameras/Camera.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L51)

The inverse of the camera's projection matrix.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`projectionMatrixInverse`](/reference/three/classes/perspectivecamera/#projectionmatrixinverse)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`receiveShadow`](/reference/three/classes/perspectivecamera/#receiveshadow)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`renderOrder`](/reference/three/classes/perspectivecamera/#renderorder)

***

### type

> **type**: `string`

Defined in: [three/src/cameras/PerspectiveCamera.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L46)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`type`](/reference/three/classes/perspectivecamera/#type)

***

### up

> **up**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L137)

Defines the `up` direction of the 3D object which influences
the orientation via methods like [Object3D#lookAt](/reference/three/classes/object3d/#lookat).

The default values for all 3D objects is defined by `Object3D.DEFAULT_UP`.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`up`](/reference/three/classes/perspectivecamera/#up)

***

### userData

> **userData**: `any`

Defined in: [three/src/core/Object3D.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L362)

An object that can be used to store custom data about the 3D object. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`userData`](/reference/three/classes/perspectivecamera/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/core/Object3D.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L96)

The UUID of the 3D object.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`uuid`](/reference/three/classes/perspectivecamera/#uuid)

***

### view

> **view**: `any`

Defined in: [three/src/cameras/PerspectiveCamera.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L111)

Represents the frustum window specification. This property should not be edited
directly but via [PerspectiveCamera#setViewOffset](/reference/three/classes/perspectivecamera/#setviewoffset) and [PerspectiveCamera#clearViewOffset](/reference/three/classes/perspectivecamera/#clearviewoffset).

#### Default

```ts
null
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`view`](/reference/three/classes/perspectivecamera/#view)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`visible`](/reference/three/classes/perspectivecamera/#visible)

***

### zoom

> **zoom**: `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L63)

The zoom factor of the camera.

#### Default

```ts
1
```

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`zoom`](/reference/three/classes/perspectivecamera/#zoom)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`DEFAULT_MATRIX_AUTO_UPDATE`](/reference/three/classes/perspectivecamera/#default_matrix_auto_update)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`DEFAULT_MATRIX_WORLD_AUTO_UPDATE`](/reference/three/classes/perspectivecamera/#default_matrix_world_auto_update)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`DEFAULT_UP`](/reference/three/classes/perspectivecamera/#default_up)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`add`](/reference/three/classes/perspectivecamera/#add)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`addEventListener`](/reference/three/classes/perspectivecamera/#addeventlistener)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`applyMatrix4`](/reference/three/classes/perspectivecamera/#applymatrix4)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`applyQuaternion`](/reference/three/classes/perspectivecamera/#applyquaternion)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`attach`](/reference/three/classes/perspectivecamera/#attach)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`clear`](/reference/three/classes/perspectivecamera/#clear)

***

### clearViewOffset()

> **clearViewOffset**(): `void`

Defined in: [three/src/cameras/PerspectiveCamera.js:337](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L337)

Removes the view offset from the projection matrix.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`clearViewOffset`](/reference/three/classes/perspectivecamera/#clearviewoffset)

***

### clone()

> **clone**(): `any`

Defined in: [three/src/cameras/Camera.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L108)

Returns a new 3D object with copied values from this instance.

#### Returns

`any`

A clone of this instance.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`clone`](/reference/three/classes/perspectivecamera/#clone)

***

### copy()

> **copy**(`source`, `recursive`): `ArrayCamera`

Defined in: [three/src/cameras/PerspectiveCamera.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L135)

Copies the values of the given 3D object to this instance.

#### Parameters

##### source

`any`

The 3D object to copy.

##### recursive

`any`

When set to `true`, descendants of the 3D object are cloned.

#### Returns

`ArrayCamera`

A reference to this instance.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`copy`](/reference/three/classes/perspectivecamera/#copy)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`dispatchEvent`](/reference/three/classes/perspectivecamera/#dispatchevent)

***

### getEffectiveFOV()

> **getEffectiveFOV**(): `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L193)

Returns the current vertical field of view angle in degrees considering [PerspectiveCamera#zoom](/reference/three/classes/perspectivecamera/#zoom).

#### Returns

`number`

The effective FOV.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getEffectiveFOV`](/reference/three/classes/perspectivecamera/#geteffectivefov)

***

### getFilmHeight()

> **getFilmHeight**(): `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L219)

Returns the height of the image on the film. If [PerspectiveCamera#aspect](/reference/three/classes/perspectivecamera/#aspect) is greater than or
equal to one (landscape format), the result equals [PerspectiveCamera#filmGauge](/reference/three/classes/perspectivecamera/#filmgauge).

#### Returns

`number`

The film width.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getFilmHeight`](/reference/three/classes/perspectivecamera/#getfilmheight)

***

### getFilmWidth()

> **getFilmWidth**(): `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:206](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L206)

Returns the width of the image on the film. If [PerspectiveCamera#aspect](/reference/three/classes/perspectivecamera/#aspect) is greater than or
equal to one (landscape format), the result equals [PerspectiveCamera#filmGauge](/reference/three/classes/perspectivecamera/#filmgauge).

#### Returns

`number`

The film width.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getFilmWidth`](/reference/three/classes/perspectivecamera/#getfilmwidth)

***

### getFocalLength()

> **getFocalLength**(): `number`

Defined in: [three/src/cameras/PerspectiveCamera.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L180)

Returns the focal length from the current [PerspectiveCamera#fov](/reference/three/classes/perspectivecamera/#fov) and
[PerspectiveCamera#filmGauge](/reference/three/classes/perspectivecamera/#filmgauge).

#### Returns

`number`

The computed focal length.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getFocalLength`](/reference/three/classes/perspectivecamera/#getfocallength)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getObjectById`](/reference/three/classes/perspectivecamera/#getobjectbyid)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getObjectByName`](/reference/three/classes/perspectivecamera/#getobjectbyname)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getObjectByProperty`](/reference/three/classes/perspectivecamera/#getobjectbyproperty)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getObjectsByProperty`](/reference/three/classes/perspectivecamera/#getobjectsbyproperty)

***

### getViewBounds()

> **getViewBounds**(`distance`, `minTarget`, `maxTarget`): `void`

Defined in: [three/src/cameras/PerspectiveCamera.js:234](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L234)

Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
Sets `minTarget` and `maxTarget` to the coordinates of the lower-left and upper-right corners of the view rectangle.

#### Parameters

##### distance

`number`

The viewing distance.

##### minTarget

[`Vector2`](/reference/three/classes/vector2/)

The lower-left corner of the view rectangle is written into this vector.

##### maxTarget

[`Vector2`](/reference/three/classes/vector2/)

The upper-right corner of the view rectangle is written into this vector.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getViewBounds`](/reference/three/classes/perspectivecamera/#getviewbounds)

***

### getViewSize()

> **getViewSize**(`distance`, `target`): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/cameras/PerspectiveCamera.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L253)

Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.

#### Parameters

##### distance

`number`

The viewing distance.

##### target

[`Vector2`](/reference/three/classes/vector2/)

The target vector that is used to store result where x is width and y is height.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

The view size.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getViewSize`](/reference/three/classes/perspectivecamera/#getviewsize)

***

### getWorldDirection()

> **getWorldDirection**(`target`): `Vector3`

Defined in: [three/src/cameras/Camera.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L86)

Returns a vector representing the ("look") direction of the 3D object in world space.

This method is overwritten since cameras have a different forward vector compared to other
3D objects. A camera looks down its local, negative z-axis by default.

#### Parameters

##### target

`Vector3`

The target vector the result is stored to.

#### Returns

`Vector3`

The 3D object's direction in world space.

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getWorldDirection`](/reference/three/classes/perspectivecamera/#getworlddirection)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getWorldPosition`](/reference/three/classes/perspectivecamera/#getworldposition)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getWorldQuaternion`](/reference/three/classes/perspectivecamera/#getworldquaternion)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`getWorldScale`](/reference/three/classes/perspectivecamera/#getworldscale)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`hasEventListener`](/reference/three/classes/perspectivecamera/#haseventlistener)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`localToWorld`](/reference/three/classes/perspectivecamera/#localtoworld)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`lookAt`](/reference/three/classes/perspectivecamera/#lookat)

***

### onAfterRender()

> **onAfterRender**(): `void`

Defined in: [three/src/core/Object3D.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L414)

A callback that is executed immediately after a 3D object is rendered.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`onAfterRender`](/reference/three/classes/perspectivecamera/#onafterrender)

***

### onAfterShadow()

> **onAfterShadow**(): `void`

Defined in: [three/src/core/Object3D.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L390)

A callback that is executed immediately after a 3D object is rendered to a shadow map.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`onAfterShadow`](/reference/three/classes/perspectivecamera/#onaftershadow)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/core/Object3D.js:402](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L402)

A callback that is executed immediately before a 3D object is rendered.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`onBeforeRender`](/reference/three/classes/perspectivecamera/#onbeforerender)

***

### onBeforeShadow()

> **onBeforeShadow**(): `void`

Defined in: [three/src/core/Object3D.js:377](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L377)

A callback that is executed immediately before a 3D object is rendered to a shadow map.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`onBeforeShadow`](/reference/three/classes/perspectivecamera/#onbeforeshadow)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`raycast`](/reference/three/classes/perspectivecamera/#raycast)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`remove`](/reference/three/classes/perspectivecamera/#remove)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`removeEventListener`](/reference/three/classes/perspectivecamera/#removeeventlistener)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`removeFromParent`](/reference/three/classes/perspectivecamera/#removefromparent)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`rotateOnAxis`](/reference/three/classes/perspectivecamera/#rotateonaxis)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`rotateOnWorldAxis`](/reference/three/classes/perspectivecamera/#rotateonworldaxis)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`rotateX`](/reference/three/classes/perspectivecamera/#rotatex)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`rotateY`](/reference/three/classes/perspectivecamera/#rotatey)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`rotateZ`](/reference/three/classes/perspectivecamera/#rotatez)

***

### setFocalLength()

> **setFocalLength**(`focalLength`): `void`

Defined in: [three/src/cameras/PerspectiveCamera.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L164)

Sets the FOV by focal length in respect to the current [PerspectiveCamera#filmGauge](/reference/three/classes/perspectivecamera/#filmgauge).

The default film gauge is 35, so that the focal length can be specified for
a 35mm (full frame) camera.

#### Parameters

##### focalLength

`number`

Values for focal length and film gauge must have the same unit.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`setFocalLength`](/reference/three/classes/perspectivecamera/#setfocallength)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`setRotationFromAxisAngle`](/reference/three/classes/perspectivecamera/#setrotationfromaxisangle)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`setRotationFromEuler`](/reference/three/classes/perspectivecamera/#setrotationfromeuler)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`setRotationFromMatrix`](/reference/three/classes/perspectivecamera/#setrotationfrommatrix)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`setRotationFromQuaternion`](/reference/three/classes/perspectivecamera/#setrotationfromquaternion)

***

### setViewOffset()

> **setViewOffset**(`fullWidth`, `fullHeight`, `x`, `y`, `width`, `height`): `void`

Defined in: [three/src/cameras/PerspectiveCamera.js:304](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L304)

Sets an offset in a larger frustum. This is useful for multi-window or
multi-monitor/multi-machine setups.

For example, if you have 3x2 monitors and each monitor is 1920x1080 and
the monitors are in grid like this
```
  +---+---+---+
  | A | B | C |
  +---+---+---+
  | D | E | F |
  +---+---+---+
```
then for each monitor you would call it like this:
```js
const w = 1920;
const h = 1080;
const fullWidth = w * 3;
const fullHeight = h * 2;

// --A--
camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
// --B--
camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
// --C--
camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
// --D--
camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
// --E--
camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
// --F--
camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
```

Note there is no reason monitors have to be the same size or in a grid.

#### Parameters

##### fullWidth

`number`

The full width of multiview setup.

##### fullHeight

`number`

The full height of multiview setup.

##### x

`number`

The horizontal offset of the subcamera.

##### y

`number`

The vertical offset of the subcamera.

##### width

`number`

The width of subcamera.

##### height

`number`

The height of subcamera.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`setViewOffset`](/reference/three/classes/perspectivecamera/#setviewoffset)

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/cameras/PerspectiveCamera.js:383](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L383)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`toJSON`](/reference/three/classes/perspectivecamera/#tojson)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`translateOnAxis`](/reference/three/classes/perspectivecamera/#translateonaxis)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`translateX`](/reference/three/classes/perspectivecamera/#translatex)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`translateY`](/reference/three/classes/perspectivecamera/#translatey)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`translateZ`](/reference/three/classes/perspectivecamera/#translatez)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`traverse`](/reference/three/classes/perspectivecamera/#traverse)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`traverseAncestors`](/reference/three/classes/perspectivecamera/#traverseancestors)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`traverseVisible`](/reference/three/classes/perspectivecamera/#traversevisible)

***

### updateMatrix()

> **updateMatrix**(): `void`

Defined in: [three/src/core/Object3D.js:1107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1107)

Updates the transformation matrix in local space by computing it from the current
position, rotation and scale values.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`updateMatrix`](/reference/three/classes/perspectivecamera/#updatematrix)

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`): `void`

Defined in: [three/src/cameras/Camera.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L92)

Updates the transformation matrix in world space of this 3D objects and its descendants.

To ensure correct results, this method also recomputes the 3D object's transformation matrix in
local space. The computation of the local and world matrix can be controlled with the
[Object3D#matrixAutoUpdate](/reference/three/classes/object3d/#matrixautoupdate) and [Object3D#matrixWorldAutoUpdate](/reference/three/classes/object3d/#matrixworldautoupdate) flags which are both
`true` by default.  Set these flags to `false` if you need more control over the update matrix process.

#### Parameters

##### force

`any`

When set to `true`, a recomputation of world matrices is forced even
when [Object3D#matrixWorldAutoUpdate](/reference/three/classes/object3d/#matrixworldautoupdate) is set to `false`.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`updateMatrixWorld`](/reference/three/classes/perspectivecamera/#updatematrixworld)

***

### updateProjectionMatrix()

> **updateProjectionMatrix**(): `void`

Defined in: [three/src/cameras/PerspectiveCamera.js:353](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/PerspectiveCamera.js#L353)

Updates the camera's projection matrix. Must be called after any change of
camera properties.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`updateProjectionMatrix`](/reference/three/classes/perspectivecamera/#updateprojectionmatrix)

***

### updateWorldMatrix()

> **updateWorldMatrix**(`updateParents`, `updateChildren`): `void`

Defined in: [three/src/cameras/Camera.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/Camera.js#L100)

An alternative version of [Object3D#updateMatrixWorld](/reference/three/classes/object3d/#updatematrixworld) with more control over the
update of ancestor and descendant nodes.

#### Parameters

##### updateParents

`any`

Whether ancestor nodes should be updated or not.

##### updateChildren

`any`

Whether descendant nodes should be updated or not.

#### Returns

`void`

#### Inherited from

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`updateWorldMatrix`](/reference/three/classes/perspectivecamera/#updateworldmatrix)

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

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/).[`worldToLocal`](/reference/three/classes/perspectivecamera/#worldtolocal)

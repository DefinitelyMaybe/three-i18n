---
editUrl: false
next: false
prev: false
title: "OculusHandPointerModel"
---

Defined in: [three/addons/webxr/OculusHandPointerModel.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L27)

Represents an Oculus hand pointer model.

## Extends

- `unknown`

## Constructors

### Constructor

> **new OculusHandPointerModel**(`hand`, `controller`): `OculusHandPointerModel`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L35)

Constructs a new Oculus hand model.

#### Parameters

##### hand

`Group`

The hand controller.

##### controller

`Group`

The WebXR controller in target ray space.

#### Returns

`OculusHandPointerModel`

#### Overrides

`Object3D.constructor`

## Properties

### attached

> **attached**: `boolean`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L96)

Whether the model is attached or not.

#### Default

```ts
false
```

***

### controller

> **controller**: `Group`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L51)

The WebXR controller in target ray space.

***

### cursorObject

> **cursorObject**: `Mesh`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L104)

The cursor object.

#### Default

```ts
null
```

***

### envMap

> **envMap**: `any`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L55)

***

### hand

> **hand**: `Group`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L44)

The hand controller.

***

### mesh

> **mesh**: `any`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L56)

***

### motionController

> **motionController**: `any`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L54)

***

### pinched

> **pinched**: `boolean`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L88)

Whether the model is pinched or not.

#### Default

```ts
false
```

***

### pointerGeometry

> **pointerGeometry**: `BufferGeometry`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L64)

The pointer geometry.

#### Default

```ts
null
```

***

### pointerMesh

> **pointerMesh**: `Mesh`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L72)

The pointer mesh.

#### Default

```ts
null
```

***

### pointerObject

> **pointerObject**: `Object3D`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L80)

The pointer object that holds the pointer mesh.

#### Default

```ts
null
```

***

### raycaster

> **raycaster**: `Raycaster`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L113)

The internal raycaster used for detecting
intersections.

#### Default

```ts
null
```

***

### visible

> **visible**: `boolean`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L127)

***

### xrInputSource

> **xrInputSource**: `any`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L128)

## Methods

### \_drawVerticesRing()

> **\_drawVerticesRing**(`vertices`, `baseVector`, `ringIndex`): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L148)

#### Parameters

##### vertices

`any`

##### baseVector

`any`

##### ringIndex

`any`

#### Returns

`void`

***

### \_onConnected()

> **\_onConnected**(`event`): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L122)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_onDisconnected()

> **\_onDisconnected**(): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L136)

#### Returns

`void`

***

### \_updatePointer()

> **\_updatePointer**(): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:328](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L328)

#### Returns

`void`

***

### \_updatePointerVertices()

> **\_updatePointerVertices**(`rearRadius`): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L163)

#### Parameters

##### rearRadius

`any`

#### Returns

`void`

***

### \_updateRaycaster()

> **\_updateRaycaster**(): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:314](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L314)

#### Returns

`void`

***

### checkIntersections()

> **checkIntersections**(`objects`, `recursive`?): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:486](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L486)

Checks for intersections between the model's raycaster and the given objects. The method
updates the cursor object to the intersection point.

#### Parameters

##### objects

`Object3D`[]

The 3D objects to check for intersection with the ray.

##### recursive?

`boolean` = `false`

If set to `true`, it also checks all descendants.
Otherwise it only checks intersection with the object.

#### Returns

`void`

***

### createPointer()

> **createPointer**(): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L217)

Creates a pointer mesh and adds it to this model.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:528](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L528)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### intersectObject()

> **intersectObject**(`object`, `recursive`?): `Raycaster`[]

Defined in: [three/addons/webxr/OculusHandPointerModel.js:450](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L450)

Performs an intersection test with the model's raycaster and the given object.

#### Parameters

##### object

`Object3D`

The 3D object to check for intersection with the ray.

##### recursive?

`boolean` = `true`

If set to `true`, it also checks all descendants.
Otherwise it only checks intersection with the object.

#### Returns

`Raycaster`[]

An array holding the intersection points.

***

### intersectObjects()

> **intersectObjects**(`objects`, `recursive`?): `Raycaster`[]

Defined in: [three/addons/webxr/OculusHandPointerModel.js:468](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L468)

Performs an intersection test with the model's raycaster and the given objects.

#### Parameters

##### objects

`Object3D`[]

The 3D objects to check for intersection with the ray.

##### recursive?

`boolean` = `true`

If set to `true`, it also checks all descendants.
Otherwise it only checks intersection with the object.

#### Returns

`Raycaster`[]

An array holding the intersection points.

***

### isAttached()

> **isAttached**(): `boolean`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:436](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L436)

Returns `true` is the model is attached.

#### Returns

`boolean`

Whether the model is attached or not.

***

### isPinched()

> **isPinched**(): `boolean`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L414)

Returns `true` is the model is pinched.

#### Returns

`boolean`

Whether the model is pinched or not.

***

### setAttached()

> **setAttached**(`attached`): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:425](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L425)

Sets the attached state.

#### Parameters

##### attached

`boolean`

Whether the model is attached or not.

#### Returns

`void`

***

### setCursor()

> **setCursor**(`distance`): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:513](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L513)

Sets the cursor to the given distance.

#### Parameters

##### distance

`number`

The distance to set the cursor to.

#### Returns

`void`

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`?): `void`

Defined in: [three/addons/webxr/OculusHandPointerModel.js:397](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandPointerModel.js#L397)

Overwritten with a custom implementation. Makes sure the internal pointer and raycaster are updated.

#### Parameters

##### force?

`boolean`

When set to `true`, a recomputation of world matrices is forced even
when Object3D#matrixWorldAutoUpdate is set to `false`.

#### Returns

`void`

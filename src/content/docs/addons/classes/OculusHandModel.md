---
editUrl: false
next: false
prev: false
title: "OculusHandModel"
---

Defined in: [three/addons/webxr/OculusHandModel.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L12)

Represents an Oculus hand model.

## Extends

- `unknown`

## Constructors

### Constructor

> **new OculusHandModel**(`controller`, `loader`?, `onLoad`?): `OculusHandModel`

Defined in: [three/addons/webxr/OculusHandModel.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L21)

Constructs a new Oculus hand model.

#### Parameters

##### controller

`Group`

The hand controller.

##### loader?

`Loader` = `null`

A loader that is used to load hand models.

##### onLoad?

`Function` = `null`

A callback that is executed when a hand model has been loaded.

#### Returns

`OculusHandModel`

#### Overrides

`Object3D.constructor`

## Properties

### controller

> **controller**: `Group`

Defined in: [three/addons/webxr/OculusHandModel.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L30)

The hand controller.

***

### envMap

> **envMap**: `Texture`

Defined in: [three/addons/webxr/OculusHandModel.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L46)

The model's environment map.

#### Default

```ts
null
```

***

### loader

> **loader**: `Loader`

Defined in: [three/addons/webxr/OculusHandModel.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L54)

A loader that is used to load hand models.

#### Default

```ts
null
```

***

### mesh

> **mesh**: `Mesh`

Defined in: [three/addons/webxr/OculusHandModel.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L78)

The model mesh.

#### Default

```ts
null
```

***

### motionController

> **motionController**: `MotionController`

Defined in: [three/addons/webxr/OculusHandModel.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L38)

The motion controller.

#### Default

```ts
null
```

***

### onLoad

> **onLoad**: `Function`

Defined in: [three/addons/webxr/OculusHandModel.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L62)

A callback that is executed when a hand model has been loaded.

#### Default

```ts
null
```

***

### path

> **path**: `string`

Defined in: [three/addons/webxr/OculusHandModel.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L70)

The path to the model repository.

#### Default

```ts
null
```

***

### xrInputSource

> **xrInputSource**: `any`

Defined in: [three/addons/webxr/OculusHandModel.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L86)

## Methods

### checkButton()

> **checkButton**(`button`): `void`

Defined in: [three/addons/webxr/OculusHandModel.js:171](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L171)

Executed actions depending on the interaction state with
the given button.

#### Parameters

##### button

`any`

The button.

#### Returns

`void`

***

### getPointerPosition()

> **getPointerPosition**(): `any`

Defined in: [three/addons/webxr/OculusHandModel.js:126](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L126)

Returns the pointer position which is the position of the index finger tip.

#### Returns

`any`

The pointer position. Returns `null` if not index finger tip joint was found.

***

### intersectBoxObject()

> **intersectBoxObject**(`boxObject`): `boolean`

Defined in: [three/addons/webxr/OculusHandModel.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L148)

Returns `true` if the current pointer position (the index finger tip) intersections
with the given box object.

#### Parameters

##### boxObject

`Mesh`

The box object.

#### Returns

`boolean`

Whether an intersection was found or not.

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`?): `void`

Defined in: [three/addons/webxr/OculusHandModel.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/OculusHandModel.js#L109)

Overwritten with a custom implementation. Makes sure the motion controller updates the mesh.

#### Parameters

##### force?

`boolean`

When set to `true`, a recomputation of world matrices is forced even
when Object3D#matrixWorldAutoUpdate is set to `false`.

#### Returns

`void`

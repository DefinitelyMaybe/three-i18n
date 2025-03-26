---
editUrl: false
next: false
prev: false
title: "TransformControls"
---

Defined in: [three/addons/controls/TransformControls.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L76)

This class can be used to transform objects in 3D space by adapting a similar interaction model
of DCC tools like Blender. Unlike other controls, it is not intended to transform the scene's camera.

`TransformControls` expects that its attached 3D object is part of the scene graph.

## Extends

- `unknown`

## Constructors

### Constructor

> **new TransformControls**(`camera`, `domElement`): `TransformControls`

Defined in: [three/addons/controls/TransformControls.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L84)

Constructs a new controls instance.

#### Parameters

##### camera

`Camera`

The camera of the rendered scene.

##### domElement

`HTMLDOMElement` = `null`

The HTML element used for event listeners.

#### Returns

`TransformControls`

#### Overrides

`Controls.constructor`

## Properties

### \_cameraScale

> **\_cameraScale**: `any`

Defined in: [three/addons/controls/TransformControls.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L338)

***

### \_endNorm

> **\_endNorm**: `any`

Defined in: [three/addons/controls/TransformControls.js:337](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L337)

***

### \_getPointer

> **\_getPointer**: `any`

Defined in: [three/addons/controls/TransformControls.js:353](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L353)

***

### \_gizmo

> **\_gizmo**: [`TransformControlsGizmo`](/addons/classes/transformcontrolsgizmo/)

Defined in: [three/addons/controls/TransformControls.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L92)

***

### \_offset

> **\_offset**: `any`

Defined in: [three/addons/controls/TransformControls.js:335](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L335)

***

### \_onPointerDown

> **\_onPointerDown**: `any`

Defined in: [three/addons/controls/TransformControls.js:354](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L354)

***

### \_onPointerHover

> **\_onPointerHover**: `any`

Defined in: [three/addons/controls/TransformControls.js:355](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L355)

***

### \_onPointerMove

> **\_onPointerMove**: `any`

Defined in: [three/addons/controls/TransformControls.js:356](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L356)

***

### \_onPointerUp

> **\_onPointerUp**: `any`

Defined in: [three/addons/controls/TransformControls.js:357](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L357)

***

### \_parentPosition

> **\_parentPosition**: `any`

Defined in: [three/addons/controls/TransformControls.js:340](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L340)

***

### \_parentQuaternion

> **\_parentQuaternion**: `any`

Defined in: [three/addons/controls/TransformControls.js:341](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L341)

***

### \_parentQuaternionInv

> **\_parentQuaternionInv**: `any`

Defined in: [three/addons/controls/TransformControls.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L342)

***

### \_parentScale

> **\_parentScale**: `any`

Defined in: [three/addons/controls/TransformControls.js:343](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L343)

***

### \_plane

> **\_plane**: [`TransformControlsPlane`](/addons/classes/transformcontrolsplane/)

Defined in: [three/addons/controls/TransformControls.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L96)

***

### \_positionStart

> **\_positionStart**: `any`

Defined in: [three/addons/controls/TransformControls.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L349)

***

### \_quaternionStart

> **\_quaternionStart**: `any`

Defined in: [three/addons/controls/TransformControls.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L350)

***

### \_root

> **\_root**: `TransformControlsRoot`

Defined in: [three/addons/controls/TransformControls.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L89)

***

### \_scaleStart

> **\_scaleStart**: `any`

Defined in: [three/addons/controls/TransformControls.js:351](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L351)

***

### \_startNorm

> **\_startNorm**: `any`

Defined in: [three/addons/controls/TransformControls.js:336](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L336)

***

### \_worldQuaternionInv

> **\_worldQuaternionInv**: `any`

Defined in: [three/addons/controls/TransformControls.js:346](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L346)

***

### \_worldScale

> **\_worldScale**: `any`

Defined in: [three/addons/controls/TransformControls.js:347](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L347)

***

### \_worldScaleStart

> **\_worldScaleStart**: `any`

Defined in: [three/addons/controls/TransformControls.js:345](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L345)

***

### axis

> **axis**: `any`

Defined in: [three/addons/controls/TransformControls.js:412](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L412)

***

### dragging

> **dragging**: `boolean`

Defined in: [three/addons/controls/TransformControls.js:447](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L447)

***

### mode

> **mode**: `"translate"` \| `"rotate"` \| `"scale"`

Defined in: [three/addons/controls/TransformControls.js:831](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L831)

***

### object

> **object**: `any`

Defined in: [three/addons/controls/TransformControls.js:756](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L756)

***

### rotationAngle

> **rotationAngle**: `any`

Defined in: [three/addons/controls/TransformControls.js:657](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L657)

***

### rotationSnap

> **rotationSnap**: `number`

Defined in: [three/addons/controls/TransformControls.js:853](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L853)

***

### scaleSnap

> **scaleSnap**: `number`

Defined in: [three/addons/controls/TransformControls.js:864](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L864)

***

### size

> **size**: `number`

Defined in: [three/addons/controls/TransformControls.js:875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L875)

***

### space

> **space**: `"world"` \| `"local"`

Defined in: [three/addons/controls/TransformControls.js:886](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L886)

***

### translationSnap

> **translationSnap**: `number`

Defined in: [three/addons/controls/TransformControls.js:842](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L842)

## Methods

### attach()

> **attach**(`object`): `TransformControls`

Defined in: [three/addons/controls/TransformControls.js:754](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L754)

Sets the 3D object that should be transformed and ensures the controls UI is visible.

#### Parameters

##### object

`Object3D`

The 3D object that should be transformed.

#### Returns

`TransformControls`

A reference to this controls.

***

### connect()

> **connect**(`element`): `void`

Defined in: [three/addons/controls/TransformControls.js:367](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L367)

#### Parameters

##### element

`any`

#### Returns

`void`

***

### detach()

> **detach**(): `TransformControls`

Defined in: [three/addons/controls/TransformControls.js:768](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L768)

Removes the current 3D object from the controls and makes the helper UI invisible.

#### Returns

`TransformControls`

A reference to this controls.

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/controls/TransformControls.js:379](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L379)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/controls/TransformControls.js:740](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L740)

#### Returns

`void`

***

### getHelper()

> **getHelper**(): `TransformControlsRoot`

Defined in: [three/addons/controls/TransformControls.js:396](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L396)

Returns the visual representation of the controls. Add the helper to your scene to
visually transform the attached  3D object.

#### Returns

`TransformControlsRoot`

The helper.

***

### getMode()

> **getMode**(): `"translate"` \| `"rotate"` \| `"scale"`

Defined in: [three/addons/controls/TransformControls.js:818](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L818)

Returns the transformation mode.

#### Returns

`"translate"` \| `"rotate"` \| `"scale"`

The transformation mode.

***

### getRaycaster()

> **getRaycaster**(): `Raycaster`

Defined in: [three/addons/controls/TransformControls.js:807](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L807)

Returns the raycaster that is used for user interaction. This object is shared between all
instances of `TransformControls`.

#### Returns

`Raycaster`

The internal raycaster.

***

### pointerDown()

> **pointerDown**(`pointer`): `void`

Defined in: [three/addons/controls/TransformControls.js:422](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L422)

#### Parameters

##### pointer

`any`

#### Returns

`void`

***

### pointerHover()

> **pointerHover**(`pointer`): `void`

Defined in: [three/addons/controls/TransformControls.js:402](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L402)

#### Parameters

##### pointer

`any`

#### Returns

`void`

***

### pointerMove()

> **pointerMove**(`pointer`): `void`

Defined in: [three/addons/controls/TransformControls.js:455](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L455)

#### Parameters

##### pointer

`any`

#### Returns

`void`

***

### pointerUp()

> **pointerUp**(`pointer`): `void`

Defined in: [three/addons/controls/TransformControls.js:724](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L724)

#### Parameters

##### pointer

`any`

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [three/addons/controls/TransformControls.js:782](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L782)

Resets the object's position, rotation and scale to when the current transform began.

#### Returns

`void`

***

### setMode()

> **setMode**(`mode`): `void`

Defined in: [three/addons/controls/TransformControls.js:829](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L829)

Sets the given transformation mode.

#### Parameters

##### mode

The transformation mode to set.

`"translate"` | `"rotate"` | `"scale"`

#### Returns

`void`

***

### setRotationSnap()

> **setRotationSnap**(`rotationSnap`): `void`

Defined in: [three/addons/controls/TransformControls.js:851](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L851)

Sets the rotation snap.

#### Parameters

##### rotationSnap

`number`

The rotation snap to set.

#### Returns

`void`

***

### setScaleSnap()

> **setScaleSnap**(`scaleSnap`): `void`

Defined in: [three/addons/controls/TransformControls.js:862](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L862)

Sets the scale snap.

#### Parameters

##### scaleSnap

`number`

The scale snap to set.

#### Returns

`void`

***

### setSize()

> **setSize**(`size`): `void`

Defined in: [three/addons/controls/TransformControls.js:873](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L873)

Sets the size of the helper UI.

#### Parameters

##### size

`number`

The size to set.

#### Returns

`void`

***

### setSpace()

> **setSpace**(`space`): `void`

Defined in: [three/addons/controls/TransformControls.js:884](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L884)

Sets the coordinate space in which transformations are applied.

#### Parameters

##### space

The space to set.

`"world"` | `"local"`

#### Returns

`void`

***

### setTranslationSnap()

> **setTranslationSnap**(`translationSnap`): `void`

Defined in: [three/addons/controls/TransformControls.js:840](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TransformControls.js#L840)

Sets the translation snap.

#### Parameters

##### translationSnap

`number`

The translation snap to set.

#### Returns

`void`

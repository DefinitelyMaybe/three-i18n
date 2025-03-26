---
editUrl: false
next: false
prev: false
title: "ArcballControls"
---

Defined in: [three/addons/controls/ArcballControls.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L111)

Arcball controls allow the camera to be controlled by a virtual trackball with full touch support and advanced navigation functionality.
Cursor/finger positions and movements are mapped over a virtual trackball surface represented by a gizmo and mapped in intuitive and
consistent camera movements. Dragging cursor/fingers will cause camera to orbit around the center of the trackball in a conservative
way (returning to the starting point will make the camera to return to its starting orientation).

In addition to supporting pan, zoom and pinch gestures, Arcball controls provide focus< functionality with a double click/tap for intuitively
moving the object's point of interest in the center of the virtual trackball. Focus allows a much better inspection and navigation in complex
environment. Moreover Arcball controls allow FOV manipulation (in a vertigo-style method) and z-rotation. Saving and restoring of Camera State
is supported also through clipboard (use ctrl+c and ctrl+v shortcuts for copy and paste the state).

Unlike [OrbitControls](/addons/classes/orbitcontrols/) and [TrackballControls](/addons/classes/trackballcontrols/), `ArcballControls` doesn't require `update()` to be called externally in an
animation loop when animations are on.

## Extends

- `unknown`

## Constructors

### Constructor

> **new ArcballControls**(`camera`, `domElement`?, `scene`?): `ArcballControls`

Defined in: [three/addons/controls/ArcballControls.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L120)

Constructs a new controls instance.

#### Parameters

##### camera

`Camera`

The camera to be controlled. The camera must not be a child of another object, unless that object is the scene itself.

##### domElement?

`HTMLDOMElement` = `null`

The HTML element used for event listeners.

##### scene?

`Scene` = `null`

The scene rendered by the camera. If not given, gizmos cannot be shown.

#### Returns

`ArcballControls`

#### Overrides

`Controls.constructor`

## Properties

### \_angleCurrent

> **\_angleCurrent**: `number`

Defined in: [three/addons/controls/ArcballControls.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L253)

***

### \_anglePrev

> **\_anglePrev**: `number`

Defined in: [three/addons/controls/ArcballControls.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L252)

***

### \_animationId

> **\_animationId**: `number`

Defined in: [three/addons/controls/ArcballControls.js:239](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L239)

***

### \_button

> **\_button**: `number`

Defined in: [three/addons/controls/ArcballControls.js:200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L200)

***

### \_cameraMatrixState

> **\_cameraMatrixState**: `any`

Defined in: [three/addons/controls/ArcballControls.js:177](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L177)

***

### \_cameraMatrixState0

> **\_cameraMatrixState0**: `any`

Defined in: [three/addons/controls/ArcballControls.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L196)

***

### \_cameraProjectionState

> **\_cameraProjectionState**: `any`

Defined in: [three/addons/controls/ArcballControls.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L178)

***

### \_clickStart

> **\_clickStart**: `number`

Defined in: [three/addons/controls/ArcballControls.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L218)

***

### \_currentCursorPosition

> **\_currentCursorPosition**: `any`

Defined in: [three/addons/controls/ArcballControls.js:225](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L225)

***

### \_currentFingerDistance

> **\_currentFingerDistance**: `number`

Defined in: [three/addons/controls/ArcballControls.js:208](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L208)

***

### \_currentFingerRotation

> **\_currentFingerRotation**: `number`

Defined in: [three/addons/controls/ArcballControls.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L210)

***

### \_currentTarget

> **\_currentTarget**: `any`

Defined in: [three/addons/controls/ArcballControls.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L138)

***

### \_cursorPosCurr

> **\_cursorPosCurr**: `any`

Defined in: [three/addons/controls/ArcballControls.js:255](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L255)

***

### \_cursorPosPrev

> **\_cursorPosPrev**: `any`

Defined in: [three/addons/controls/ArcballControls.js:254](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L254)

***

### \_curvePts

> **\_curvePts**: `number`

Defined in: [three/addons/controls/ArcballControls.js:234](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L234)

***

### \_devPxRatio

> **\_devPxRatio**: `number`

Defined in: [three/addons/controls/ArcballControls.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L213)

***

### \_downEvents

> **\_downEvents**: `any`[]

Defined in: [three/addons/controls/ArcballControls.js:216](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L216)

***

### \_downStart

> **\_downStart**: `number`

Defined in: [three/addons/controls/ArcballControls.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L217)

***

### \_downValid

> **\_downValid**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:214](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L214)

***

### \_farPos

> **\_farPos**: `number`

Defined in: [three/addons/controls/ArcballControls.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L184)

***

### \_farPos0

> **\_farPos0**: `number`

Defined in: [three/addons/controls/ArcballControls.js:195](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L195)

***

### \_fov0

> **\_fov0**: `number`

Defined in: [three/addons/controls/ArcballControls.js:191](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L191)

***

### \_fovState

> **\_fovState**: `number`

Defined in: [three/addons/controls/ArcballControls.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L180)

***

### \_gizmoMatrixState

> **\_gizmoMatrixState**: `any`

Defined in: [three/addons/controls/ArcballControls.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L186)

***

### \_gizmoMatrixState0

> **\_gizmoMatrixState0**: `any`

Defined in: [three/addons/controls/ArcballControls.js:197](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L197)

***

### \_gizmos

> **\_gizmos**: `any`

Defined in: [three/addons/controls/ArcballControls.js:233](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L233)

***

### \_grid

> **\_grid**: `any`

Defined in: [three/addons/controls/ArcballControls.js:229](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L229)

***

### \_gridPosition

> **\_gridPosition**: `any`

Defined in: [three/addons/controls/ArcballControls.js:230](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L230)

***

### \_initialFar

> **\_initialFar**: `number`

Defined in: [three/addons/controls/ArcballControls.js:194](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L194)

***

### \_initialNear

> **\_initialNear**: `number`

Defined in: [three/addons/controls/ArcballControls.js:192](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L192)

***

### \_input

> **\_input**: `symbol`

Defined in: [three/addons/controls/ArcballControls.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L203)

***

### \_m4\_1

> **\_m4\_1**: `any`

Defined in: [three/addons/controls/ArcballControls.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L163)

***

### \_m4\_2

> **\_m4\_2**: `any`

Defined in: [three/addons/controls/ArcballControls.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L164)

***

### \_maxDownTime

> **\_maxDownTime**: `number`

Defined in: [three/addons/controls/ArcballControls.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L219)

***

### \_maxInterval

> **\_maxInterval**: `number`

Defined in: [three/addons/controls/ArcballControls.js:220](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L220)

***

### \_mouseOp

> **\_mouseOp**: `any`

Defined in: [three/addons/controls/ArcballControls.js:155](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L155)

***

### \_movementThreshold

> **\_movementThreshold**: `number`

Defined in: [three/addons/controls/ArcballControls.js:222](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L222)

***

### \_nclicks

> **\_nclicks**: `number`

Defined in: [three/addons/controls/ArcballControls.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L215)

***

### \_nearPos

> **\_nearPos**: `number`

Defined in: [three/addons/controls/ArcballControls.js:183](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L183)

***

### \_nearPos0

> **\_nearPos0**: `number`

Defined in: [three/addons/controls/ArcballControls.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L193)

***

### \_onContextMenu

> **\_onContextMenu**: `any`

Defined in: [three/addons/controls/ArcballControls.js:434](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L434)

***

### \_onPointerCancel

> **\_onPointerCancel**: `any`

Defined in: [three/addons/controls/ArcballControls.js:439](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L439)

***

### \_onPointerDown

> **\_onPointerDown**: `any`

Defined in: [three/addons/controls/ArcballControls.js:438](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L438)

***

### \_onPointerMove

> **\_onPointerMove**: `any`

Defined in: [three/addons/controls/ArcballControls.js:437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L437)

***

### \_onPointerUp

> **\_onPointerUp**: `any`

Defined in: [three/addons/controls/ArcballControls.js:436](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L436)

***

### \_onWheel

> **\_onWheel**: `any`

Defined in: [three/addons/controls/ArcballControls.js:435](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L435)

***

### \_onWindowResize

> **\_onWindowResize**: `any`

Defined in: [three/addons/controls/ArcballControls.js:440](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L440)

***

### \_posThreshold

> **\_posThreshold**: `number`

Defined in: [three/addons/controls/ArcballControls.js:221](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L221)

***

### \_quat

> **\_quat**: `any`

Defined in: [three/addons/controls/ArcballControls.js:166](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L166)

***

### \_rotationAxis

> **\_rotationAxis**: `any`

Defined in: [three/addons/controls/ArcballControls.js:173](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L173)

***

### \_rotationMatrix

> **\_rotationMatrix**: `any`

Defined in: [three/addons/controls/ArcballControls.js:170](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L170)

***

### \_scaleMatrix

> **\_scaleMatrix**: `any`

Defined in: [three/addons/controls/ArcballControls.js:171](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L171)

***

### \_startCursorPosition

> **\_startCursorPosition**: `any`

Defined in: [three/addons/controls/ArcballControls.js:226](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L226)

***

### \_startFingerDistance

> **\_startFingerDistance**: `number`

Defined in: [three/addons/controls/ArcballControls.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L207)

***

### \_startFingerRotation

> **\_startFingerRotation**: `number`

Defined in: [three/addons/controls/ArcballControls.js:209](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L209)

***

### \_state

> **\_state**: `symbol`

Defined in: [three/addons/controls/ArcballControls.js:420](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L420)

***

### \_switchSensibility

> **\_switchSensibility**: `number`

Defined in: [three/addons/controls/ArcballControls.js:206](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L206)

***

### \_tbRadius

> **\_tbRadius**: `number`

Defined in: [three/addons/controls/ArcballControls.js:417](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L417)

***

### \_timeCurrent

> **\_timeCurrent**: `number`

Defined in: [three/addons/controls/ArcballControls.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L251)

***

### \_timePrev

> **\_timePrev**: `number`

Defined in: [three/addons/controls/ArcballControls.js:250](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L250)

***

### \_timeStart

> **\_timeStart**: `number`

Defined in: [three/addons/controls/ArcballControls.js:238](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L238)

***

### \_touchCurrent

> **\_touchCurrent**: `any`[]

Defined in: [three/addons/controls/ArcballControls.js:202](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L202)

***

### \_touchStart

> **\_touchStart**: `any`[]

Defined in: [three/addons/controls/ArcballControls.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L201)

***

### \_translationMatrix

> **\_translationMatrix**: `any`

Defined in: [three/addons/controls/ArcballControls.js:169](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L169)

***

### \_up0

> **\_up0**: `any`

Defined in: [three/addons/controls/ArcballControls.js:189](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L189)

***

### \_upState

> **\_upState**: `any`

Defined in: [three/addons/controls/ArcballControls.js:181](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L181)

***

### \_v2\_1

> **\_v2\_1**: `any`

Defined in: [three/addons/controls/ArcballControls.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L159)

***

### \_v3\_1

> **\_v3\_1**: `any`

Defined in: [three/addons/controls/ArcballControls.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L160)

***

### \_v3\_2

> **\_v3\_2**: `any`

Defined in: [three/addons/controls/ArcballControls.js:161](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L161)

***

### \_wCurr

> **\_wCurr**: `number`

Defined in: [three/addons/controls/ArcballControls.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L257)

***

### \_wPrev

> **\_wPrev**: `number`

Defined in: [three/addons/controls/ArcballControls.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L256)

***

### \_zoom0

> **\_zoom0**: `number`

Defined in: [three/addons/controls/ArcballControls.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L190)

***

### \_zoomState

> **\_zoomState**: `number`

Defined in: [three/addons/controls/ArcballControls.js:182](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L182)

***

### adjustNearFar

> **adjustNearFar**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:269](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L269)

If set to `true`, the camera's near and far values will be adjusted every time zoom is
performed trying to maintain the same visible portion given by initial near and far
values. Only works with perspective cameras.

#### Default

```ts
false
```

***

### cursorZoom

> **cursorZoom**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:318](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L318)

Set to `true` to make zoom become cursor centered.

#### Default

```ts
false
```

***

### dampingFactor

> **dampingFactor**: `number`

Defined in: [three/addons/controls/ArcballControls.js:285](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L285)

The damping inertia used if 'enableAnimations` is set to `true`.

#### Default

```ts
25
```

***

### enableAnimations

> **enableAnimations**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:301](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L301)

Set to `true` to enable animations for rotation (damping) and focus operation.

#### Default

```ts
true
```

***

### enableFocus

> **enableFocus**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:382](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L382)

Enable or disable camera focusing on double-tap (or click) operations.

#### Default

```ts
true
```

***

### enableGizmos

> **enableGizmos**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:374](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L374)

Enable or disable gizmos.

#### Default

```ts
true
```

***

### enableGrid

> **enableGrid**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:310](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L310)

If set to `true`, a grid will appear when panning operation is being performed
(desktop interaction only).

#### Default

```ts
false
```

***

### enablePan

> **enablePan**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L350)

Enable or disable camera panning.

#### Default

```ts
true
```

***

### enableRotate

> **enableRotate**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:358](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L358)

Enable or disable camera rotation.

#### Default

```ts
true
```

***

### enableZoom

> **enableZoom**: `boolean`

Defined in: [three/addons/controls/ArcballControls.js:366](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L366)

Enable or disable camera zoom.

#### Default

```ts
true
```

***

### focusAnimationTime

> **focusAnimationTime**: `number`

Defined in: [three/addons/controls/ArcballControls.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L247)

Duration of focus animations in ms.

#### Default

```ts
500
```

***

### maxDistance

> **maxDistance**: `number`

Defined in: [three/addons/controls/ArcballControls.js:398](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L398)

How far you can dolly out. For perspective cameras only.

#### Default

```ts
Infinity
```

***

### maxFov

> **maxFov**: `number`

Defined in: [three/addons/controls/ArcballControls.js:334](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L334)

The maximum FOV in degrees.

#### Default

```ts
90
```

***

### maxZoom

> **maxZoom**: `number`

Defined in: [three/addons/controls/ArcballControls.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L414)

How far you can zoom out. For orthographic cameras only.

#### Default

```ts
Infinity
```

***

### minDistance

> **minDistance**: `number`

Defined in: [three/addons/controls/ArcballControls.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L390)

How far you can dolly in. For perspective cameras only.

#### Default

```ts
0
```

***

### minFov

> **minFov**: `number`

Defined in: [three/addons/controls/ArcballControls.js:326](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L326)

The minimum FOV in degrees.

#### Default

```ts
5
```

***

### minZoom

> **minZoom**: `number`

Defined in: [three/addons/controls/ArcballControls.js:406](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L406)

How far you can zoom in. For orthographic cameras only.

#### Default

```ts
0
```

***

### mouseActions

> **mouseActions**: `any`[]

Defined in: [three/addons/controls/ArcballControls.js:154](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L154)

Holds the mouse actions of this controls. This property is maintained by the methods
`setMouseAction()` and `unsetMouseAction()`.

***

### object

> **object**: `Camera`

Defined in: [three/addons/controls/ArcballControls.js:1934](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1934)

***

### radiusFactor

> **radiusFactor**: `number`

Defined in: [three/addons/controls/ArcballControls.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L146)

The size of the gizmo relative to the screen width and height.

#### Default

```ts
0.67
```

***

### rotateSpeed

> **rotateSpeed**: `number`

Defined in: [three/addons/controls/ArcballControls.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L342)

Speed of rotation.

#### Default

```ts
1
```

***

### scaleFactor

> **scaleFactor**: `number`

Defined in: [three/addons/controls/ArcballControls.js:277](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L277)

The scaling factor used when performing zoom operation.

#### Default

```ts
1.1
```

***

### scene

> **scene**: `Scene`

Defined in: [three/addons/controls/ArcballControls.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L130)

The scene rendered by the camera. If not given, gizmos cannot be shown.

#### Default

```ts
null
```

***

### target

> **target**: `Vector3`

Defined in: [three/addons/controls/ArcballControls.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L137)

The control's focus point.

***

### wMax

> **wMax**: `number`

Defined in: [three/addons/controls/ArcballControls.js:293](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L293)

Maximum angular velocity allowed on rotation animation start.

#### Default

```ts
20
```

## Methods

### activateGizmos()

> **activateGizmos**(`isActive`): `void`

Defined in: [three/addons/controls/ArcballControls.js:1841](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1841)

Makes rotation gizmos more or less visible.

#### Parameters

##### isActive

`boolean`

If set to `true`, gizmos are more visible.

#### Returns

`void`

***

### connect()

> **connect**(`element`): `void`

Defined in: [three/addons/controls/ArcballControls.js:450](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L450)

#### Parameters

##### element

`any`

#### Returns

`void`

***

### copyState()

> **copyState**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:2291](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L2291)

Copy the current state to clipboard (as a readable JSON text).

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:466](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L466)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1794](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1794)

#### Returns

`void`

***

### disposeGrid()

> **disposeGrid**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1812](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1812)

Removes the grid from the scene.

#### Returns

`void`

***

### getRaycaster()

> **getRaycaster**(): `Raycaster`

Defined in: [three/addons/controls/ArcballControls.js:2580](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L2580)

Returns the raycaster that is used for user interaction. This object is shared between all
instances of `ArcballControls`.

#### Returns

`Raycaster`

The internal raycaster.

***

### onDoublePanEnd()

> **onDoublePanEnd**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:983](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L983)

#### Returns

`void`

***

### onDoublePanMove()

> **onDoublePanMove**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:962](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L962)

#### Returns

`void`

***

### onDoublePanStart()

> **onDoublePanStart**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:944](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L944)

#### Returns

`void`

***

### onDoubleTap()

> **onDoubleTap**(`event`): `void`

Defined in: [three/addons/controls/ArcballControls.js:903](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L903)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### onPinchEnd()

> **onPinchEnd**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1125)

#### Returns

`void`

***

### onPinchMove()

> **onPinchMove**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1076](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1076)

#### Returns

`void`

***

### onPinchStart()

> **onPinchStart**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1060](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1060)

#### Returns

`void`

***

### onRotateEnd()

> **onRotateEnd**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1052](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1052)

#### Returns

`void`

***

### onRotateMove()

> **onRotateMove**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1015](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1015)

#### Returns

`void`

***

### onRotateStart()

> **onRotateStart**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:990](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L990)

#### Returns

`void`

***

### onSinglePanEnd()

> **onSinglePanEnd**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:837](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L837)

#### Returns

`void`

***

### onSinglePanMove()

> **onSinglePanMove**(`event`, `opState`): `void`

Defined in: [three/addons/controls/ArcballControls.js:607](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L607)

#### Parameters

##### event

`any`

##### opState

`any`

#### Returns

`void`

***

### onSinglePanStart()

> **onSinglePanStart**(`event`, `operation`): `void`

Defined in: [three/addons/controls/ArcballControls.js:480](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L480)

#### Parameters

##### event

`any`

##### operation

`any`

#### Returns

`void`

***

### onTriplePanEnd()

> **onTriplePanEnd**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1238](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1238)

#### Returns

`void`

***

### onTriplePanMove()

> **onTriplePanMove**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1161](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1161)

#### Returns

`void`

***

### onTriplePanStart()

> **onTriplePanStart**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:1132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1132)

#### Returns

`void`

***

### pasteState()

> **pasteState**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:2333](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L2333)

Set the controls state from the clipboard, assumes that the clipboard stores a JSON
text as saved from `copyState()`.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:2229](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L2229)

Resets the controls.

#### Returns

`void`

***

### saveState()

> **saveState**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:2347](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L2347)

Saves the current state of the control. This can later be recover with `reset()`.

#### Returns

`void`

***

### setCamera()

> **setCamera**(`camera`): `void`

Defined in: [three/addons/controls/ArcballControls.js:1904](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1904)

Sets the camera to be controlled.  Must be called in order to set a new camera to be controlled.

#### Parameters

##### camera

`Camera`

The camera to be controlled.

#### Returns

`void`

***

### setGizmosVisible()

> **setGizmosVisible**(`value`): `void`

Defined in: [three/addons/controls/ArcballControls.js:1948](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1948)

Sets gizmos visibility.

#### Parameters

##### value

`boolean`

Value of gizmos visibility.

#### Returns

`void`

***

### setMouseAction()

> **setMouseAction**(`operation`, `mouse`, `key`?): `boolean`

Defined in: [three/addons/controls/ArcballControls.js:1319](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1319)

Set a new mouse action by specifying the operation to be performed and a mouse/key combination. In case of conflict, replaces the existing one.

#### Parameters

##### operation

The operation to be performed ('PAN', 'ROTATE', 'ZOOM', 'FOV').

`"PAN"` | `"ROTATE"` | `"FOV"` | `"ZOOM"`

##### mouse

A mouse button (0, 1, 2) or 'WHEEL' for wheel notches.

`0` | `1` | `2` | `"WHEEL"`

##### key?

The keyboard modifier ('CTRL', 'SHIFT') or null if key is not needed.

`"CTRL"` | `"SHIFT"`

#### Returns

`boolean`

`true` if the mouse action has been successfully added, `false` otherwise.

***

### setStateFromJSON()

> **setStateFromJSON**(`json`): `void`

Defined in: [three/addons/controls/ArcballControls.js:2943](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L2943)

#### Parameters

##### json

`any`

#### Returns

`void`

***

### setTbRadius()

> **setTbRadius**(`value`): `void`

Defined in: [three/addons/controls/ArcballControls.js:1960](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1960)

Sets gizmos radius factor and redraws gizmos.

#### Parameters

##### value

`number`

Value of radius factor.

#### Returns

`void`

***

### unsetMouseAction()

> **unsetMouseAction**(`mouse`, `key`): `boolean`

Defined in: [three/addons/controls/ArcballControls.js:1400](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L1400)

Remove a mouse action by specifying its mouse/key combination.

#### Parameters

##### mouse

A mouse button (0, 1, 2) or 'WHEEL' for wheel notches.

`0` | `1` | `2` | `"WHEEL"`

##### key

The keyboard modifier ('CTRL', 'SHIFT') or null if key is not needed.

`"CTRL"` | `"SHIFT"`

#### Returns

`boolean`

`true` if the operation has been successfully removed, `false` otherwise.

***

### update()

> **update**(): `void`

Defined in: [three/addons/controls/ArcballControls.js:2875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/ArcballControls.js#L2875)

#### Returns

`void`

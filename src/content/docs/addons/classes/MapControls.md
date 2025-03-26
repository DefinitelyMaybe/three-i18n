---
editUrl: false
next: false
prev: false
title: "MapControls"
---

Defined in: [three/addons/controls/MapControls.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/MapControls.js#L16)

This class is intended for transforming a camera over a map from bird's eye perspective.
The class shares its implementation with [OrbitControls](/addons/classes/orbitcontrols/) but uses a specific preset
for mouse/touch interaction and disables screen space panning by default.

- Orbit: Right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate.
- Zoom: Middle mouse, or mousewheel / touch: two-finger spread or squish.
- Pan: Left mouse, or arrow keys / touch: one-finger move.

## Extends

- [`OrbitControls`](/addons/classes/orbitcontrols/)

## Constructors

### Constructor

> **new MapControls**(`object`, `domElement`): `MapControls`

Defined in: [three/addons/controls/MapControls.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/MapControls.js#L18)

#### Parameters

##### object

`any`

##### domElement

`any`

#### Returns

`MapControls`

#### Overrides

[`OrbitControls`](/addons/classes/orbitcontrols/).[`constructor`](/addons/classes/orbitcontrols/#constructor)

## Properties

### \_controlActive

> **\_controlActive**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:432](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L432)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_controlActive`](/addons/classes/orbitcontrols/#_controlactive)

***

### \_dollyDelta

> **\_dollyDelta**: `any`

Defined in: [three/addons/controls/OrbitControls.js:423](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L423)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_dollyDelta`](/addons/classes/orbitcontrols/#_dollydelta)

***

### \_dollyDirection

> **\_dollyDirection**: `any`

Defined in: [three/addons/controls/OrbitControls.js:425](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L425)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_dollyDirection`](/addons/classes/orbitcontrols/#_dollydirection)

***

### \_dollyEnd

> **\_dollyEnd**: `any`

Defined in: [three/addons/controls/OrbitControls.js:422](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L422)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_dollyEnd`](/addons/classes/orbitcontrols/#_dollyend)

***

### \_dollyStart

> **\_dollyStart**: `any`

Defined in: [three/addons/controls/OrbitControls.js:421](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L421)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_dollyStart`](/addons/classes/orbitcontrols/#_dollystart)

***

### \_domElementKeyEvents

> **\_domElementKeyEvents**: `any`

Defined in: [three/addons/controls/OrbitControls.js:394](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L394)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_domElementKeyEvents`](/addons/classes/orbitcontrols/#_domelementkeyevents)

***

### \_interceptControlDown

> **\_interceptControlDown**: `any`

Defined in: [three/addons/controls/OrbitControls.js:449](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L449)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_interceptControlDown`](/addons/classes/orbitcontrols/#_interceptcontroldown)

***

### \_interceptControlUp

> **\_interceptControlUp**: `any`

Defined in: [three/addons/controls/OrbitControls.js:450](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L450)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_interceptControlUp`](/addons/classes/orbitcontrols/#_interceptcontrolup)

***

### \_lastPosition

> **\_lastPosition**: `any`

Defined in: [three/addons/controls/OrbitControls.js:398](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L398)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_lastPosition`](/addons/classes/orbitcontrols/#_lastposition)

***

### \_lastQuaternion

> **\_lastQuaternion**: `any`

Defined in: [three/addons/controls/OrbitControls.js:399](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L399)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_lastQuaternion`](/addons/classes/orbitcontrols/#_lastquaternion)

***

### \_lastTargetPosition

> **\_lastTargetPosition**: `any`

Defined in: [three/addons/controls/OrbitControls.js:400](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L400)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_lastTargetPosition`](/addons/classes/orbitcontrols/#_lasttargetposition)

***

### \_mouse

> **\_mouse**: `any`

Defined in: [three/addons/controls/OrbitControls.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L426)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_mouse`](/addons/classes/orbitcontrols/#_mouse)

***

### \_onContextMenu

> **\_onContextMenu**: `any`

Defined in: [three/addons/controls/OrbitControls.js:439](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L439)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onContextMenu`](/addons/classes/orbitcontrols/#_oncontextmenu)

***

### \_onKeyDown

> **\_onKeyDown**: `any`

Defined in: [three/addons/controls/OrbitControls.js:441](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L441)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onKeyDown`](/addons/classes/orbitcontrols/#_onkeydown)

***

### \_onMouseDown

> **\_onMouseDown**: `any`

Defined in: [three/addons/controls/OrbitControls.js:446](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L446)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onMouseDown`](/addons/classes/orbitcontrols/#_onmousedown)

***

### \_onMouseMove

> **\_onMouseMove**: `any`

Defined in: [three/addons/controls/OrbitControls.js:447](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L447)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onMouseMove`](/addons/classes/orbitcontrols/#_onmousemove)

***

### \_onMouseWheel

> **\_onMouseWheel**: `any`

Defined in: [three/addons/controls/OrbitControls.js:440](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L440)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onMouseWheel`](/addons/classes/orbitcontrols/#_onmousewheel)

***

### \_onPointerDown

> **\_onPointerDown**: `any`

Defined in: [three/addons/controls/OrbitControls.js:437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L437)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onPointerDown`](/addons/classes/orbitcontrols/#_onpointerdown)

***

### \_onPointerMove

> **\_onPointerMove**: `any`

Defined in: [three/addons/controls/OrbitControls.js:436](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L436)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onPointerMove`](/addons/classes/orbitcontrols/#_onpointermove)

***

### \_onPointerUp

> **\_onPointerUp**: `any`

Defined in: [three/addons/controls/OrbitControls.js:438](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L438)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onPointerUp`](/addons/classes/orbitcontrols/#_onpointerup)

***

### \_onTouchMove

> **\_onTouchMove**: `any`

Defined in: [three/addons/controls/OrbitControls.js:444](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L444)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onTouchMove`](/addons/classes/orbitcontrols/#_ontouchmove)

***

### \_onTouchStart

> **\_onTouchStart**: `any`

Defined in: [three/addons/controls/OrbitControls.js:443](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L443)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_onTouchStart`](/addons/classes/orbitcontrols/#_ontouchstart)

***

### \_panDelta

> **\_panDelta**: `any`

Defined in: [three/addons/controls/OrbitControls.js:419](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L419)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_panDelta`](/addons/classes/orbitcontrols/#_pandelta)

***

### \_panEnd

> **\_panEnd**: `any`

Defined in: [three/addons/controls/OrbitControls.js:418](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L418)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_panEnd`](/addons/classes/orbitcontrols/#_panend)

***

### \_panOffset

> **\_panOffset**: `any`

Defined in: [three/addons/controls/OrbitControls.js:411](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L411)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_panOffset`](/addons/classes/orbitcontrols/#_panoffset)

***

### \_panStart

> **\_panStart**: `any`

Defined in: [three/addons/controls/OrbitControls.js:417](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L417)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_panStart`](/addons/classes/orbitcontrols/#_panstart)

***

### \_performCursorZoom

> **\_performCursorZoom**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:427](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L427)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_performCursorZoom`](/addons/classes/orbitcontrols/#_performcursorzoom)

***

### \_pointerPositions

> **\_pointerPositions**: `object`

Defined in: [three/addons/controls/OrbitControls.js:430](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L430)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_pointerPositions`](/addons/classes/orbitcontrols/#_pointerpositions)

***

### \_pointers

> **\_pointers**: `any`[]

Defined in: [three/addons/controls/OrbitControls.js:429](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L429)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_pointers`](/addons/classes/orbitcontrols/#_pointers)

***

### \_quat

> **\_quat**: `any`

Defined in: [three/addons/controls/OrbitControls.js:403](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L403)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_quat`](/addons/classes/orbitcontrols/#_quat)

***

### \_quatInverse

> **\_quatInverse**: `any`

Defined in: [three/addons/controls/OrbitControls.js:404](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L404)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_quatInverse`](/addons/classes/orbitcontrols/#_quatinverse)

***

### \_rotateDelta

> **\_rotateDelta**: `any`

Defined in: [three/addons/controls/OrbitControls.js:415](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L415)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_rotateDelta`](/addons/classes/orbitcontrols/#_rotatedelta)

***

### \_rotateEnd

> **\_rotateEnd**: `any`

Defined in: [three/addons/controls/OrbitControls.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L414)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_rotateEnd`](/addons/classes/orbitcontrols/#_rotateend)

***

### \_rotateStart

> **\_rotateStart**: `any`

Defined in: [three/addons/controls/OrbitControls.js:413](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L413)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_rotateStart`](/addons/classes/orbitcontrols/#_rotatestart)

***

### \_scale

> **\_scale**: `number`

Defined in: [three/addons/controls/OrbitControls.js:410](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L410)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_scale`](/addons/classes/orbitcontrols/#_scale)

***

### \_spherical

> **\_spherical**: `any`

Defined in: [three/addons/controls/OrbitControls.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L407)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_spherical`](/addons/classes/orbitcontrols/#_spherical)

***

### \_sphericalDelta

> **\_sphericalDelta**: `any`

Defined in: [three/addons/controls/OrbitControls.js:408](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L408)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_sphericalDelta`](/addons/classes/orbitcontrols/#_sphericaldelta)

***

### autoRotate

> **autoRotate**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:317](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L317)

Set to true to automatically rotate around the target

Note that if this is enabled, you must call `update()` in your animation loop.
If you want the auto-rotate speed to be independent of the frame rate (the refresh
rate of the display), you must pass the time `deltaTime`, in seconds, to `update()`.

#### Default

```ts
false
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`autoRotate`](/addons/classes/orbitcontrols/#autorotate)

***

### autoRotateSpeed

> **autoRotateSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:328](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L328)

How fast to rotate around the target if `autoRotate` is `true`. The default  equates to 30 seconds
per orbit at 60fps.

Note that if `autoRotate` is enabled, you must call `update()` in your animation loop.

#### Default

```ts
2
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`autoRotateSpeed`](/addons/classes/orbitcontrols/#autorotatespeed)

***

### cursor

> **cursor**: `Vector3`

Defined in: [three/addons/controls/OrbitControls.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L116)

The focus point of the `minTargetRadius` and `maxTargetRadius` limits.
It can be updated manually at any point to change the center of interest
for the `target`.

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`cursor`](/addons/classes/orbitcontrols/#cursor)

***

### dampingFactor

> **dampingFactor**: `number`

Defined in: [three/addons/controls/OrbitControls.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L218)

The damping inertia used if `enableDamping` is set to `true`.

Note that for this to work, you must call `update()` in your animation loop.

#### Default

```ts
0.05
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`dampingFactor`](/addons/classes/orbitcontrols/#dampingfactor)

***

### enableDamping

> **enableDamping**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:208](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L208)

Set to `true` to enable damping (inertia), which can be used to give a sense of weight
to the controls. Note that if this is enabled, you must call `update()` in your animation
loop.

#### Default

```ts
false
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`enableDamping`](/addons/classes/orbitcontrols/#enabledamping)

***

### enablePan

> **enablePan**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:270](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L270)

Enable or disable camera panning.

#### Default

```ts
true
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`enablePan`](/addons/classes/orbitcontrols/#enablepan)

***

### enableRotate

> **enableRotate**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L246)

Enable or disable horizontal and vertical rotation of the camera.

Note that it is possible to disable a single axis by setting the min and max of the
`minPolarAngle` or `minAzimuthAngle` to the same value, which will cause the vertical
or horizontal rotation to be fixed at that value.

#### Default

```ts
true
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`enableRotate`](/addons/classes/orbitcontrols/#enablerotate)

***

### enableZoom

> **enableZoom**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:226](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L226)

Enable or disable zooming (dollying) of the camera.

#### Default

```ts
true
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`enableZoom`](/addons/classes/orbitcontrols/#enablezoom)

***

### keyPanSpeed

> **keyPanSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:297](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L297)

How fast to pan the camera when the keyboard is used in
pixels per keypress.

#### Default

```ts
7
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`keyPanSpeed`](/addons/classes/orbitcontrols/#keypanspeed)

***

### keyRotateSpeed

> **keyRotateSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:262](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L262)

How fast to rotate the camera when the keyboard is used.

#### Default

```ts
1
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`keyRotateSpeed`](/addons/classes/orbitcontrols/#keyrotatespeed)

***

### keys

> **keys**: `any`

Defined in: [three/addons/controls/OrbitControls.js:343](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L343)

This object contains references to the keycodes for controlling camera panning.

```js
controls.keys = {
	LEFT: 'ArrowLeft', //left arrow
	UP: 'ArrowUp', // up arrow
	RIGHT: 'ArrowRight', // right arrow
	BOTTOM: 'ArrowDown' // down arrow
}
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`keys`](/addons/classes/orbitcontrols/#keys)

***

### maxAzimuthAngle

> **maxAzimuthAngle**: `number`

Defined in: [three/addons/controls/OrbitControls.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L198)

How far you can orbit horizontally, upper limit. If set, the interval `[ min, max ]`
must be a sub-interval of `[ - 2 PI, 2 PI ]`, with `( max - min < 2 PI )`.

#### Default

```ts
-Infinity
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`maxAzimuthAngle`](/addons/classes/orbitcontrols/#maxazimuthangle)

***

### maxDistance

> **maxDistance**: `number`

Defined in: [three/addons/controls/OrbitControls.js:132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L132)

How far you can dolly out (perspective camera only).

#### Default

```ts
Infinity
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`maxDistance`](/addons/classes/orbitcontrols/#maxdistance)

***

### maxPolarAngle

> **maxPolarAngle**: `number`

Defined in: [three/addons/controls/OrbitControls.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L180)

How far you can orbit vertically, upper limit. Range is `[0, Math.PI]` radians.

#### Default

```ts
Math.PI
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`maxPolarAngle`](/addons/classes/orbitcontrols/#maxpolarangle)

***

### maxTargetRadius

> **maxTargetRadius**: `number`

Defined in: [three/addons/controls/OrbitControls.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L164)

How far you can move the target from the 3D `cursor`.

#### Default

```ts
Infinity
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`maxTargetRadius`](/addons/classes/orbitcontrols/#maxtargetradius)

***

### maxZoom

> **maxZoom**: `number`

Defined in: [three/addons/controls/OrbitControls.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L148)

How far you can zoom out (orthographic camera only).

#### Default

```ts
Infinity
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`maxZoom`](/addons/classes/orbitcontrols/#maxzoom)

***

### minAzimuthAngle

> **minAzimuthAngle**: `number`

Defined in: [three/addons/controls/OrbitControls.js:189](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L189)

How far you can orbit horizontally, lower limit. If set, the interval `[ min, max ]`
must be a sub-interval of `[ - 2 PI, 2 PI ]`, with `( max - min < 2 PI )`.

#### Default

```ts
-Infinity
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`minAzimuthAngle`](/addons/classes/orbitcontrols/#minazimuthangle)

***

### minDistance

> **minDistance**: `number`

Defined in: [three/addons/controls/OrbitControls.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L124)

How far you can dolly in (perspective camera only).

#### Default

```ts
0
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`minDistance`](/addons/classes/orbitcontrols/#mindistance)

***

### minPolarAngle

> **minPolarAngle**: `number`

Defined in: [three/addons/controls/OrbitControls.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L172)

How far you can orbit vertically, lower limit. Range is `[0, Math.PI]` radians.

#### Default

```ts
0
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`minPolarAngle`](/addons/classes/orbitcontrols/#minpolarangle)

***

### minTargetRadius

> **minTargetRadius**: `number`

Defined in: [three/addons/controls/OrbitControls.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L156)

How close you can get the target to the 3D `cursor`.

#### Default

```ts
0
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`minTargetRadius`](/addons/classes/orbitcontrols/#mintargetradius)

***

### minZoom

> **minZoom**: `number`

Defined in: [three/addons/controls/OrbitControls.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L140)

How far you can zoom in (orthographic camera only).

#### Default

```ts
0
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`minZoom`](/addons/classes/orbitcontrols/#minzoom)

***

### mouseButtons

> **mouseButtons**: `any`

Defined in: [three/addons/controls/OrbitControls.js:357](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L357)

This object contains references to the mouse actions used by the controls.

```js
controls.mouseButtons = {
	LEFT: THREE.MOUSE.ROTATE,
	MIDDLE: THREE.MOUSE.DOLLY,
	RIGHT: THREE.MOUSE.PAN
}
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`mouseButtons`](/addons/classes/orbitcontrols/#mousebuttons)

***

### panSpeed

> **panSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:278](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L278)

Speed of panning.

#### Default

```ts
1
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`panSpeed`](/addons/classes/orbitcontrols/#panspeed)

***

### position0

> **position0**: `Vector3`

Defined in: [three/addons/controls/OrbitControls.js:384](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L384)

Used internally by `saveState()` and `reset()`.

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`position0`](/addons/classes/orbitcontrols/#position0)

***

### rotateSpeed

> **rotateSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:254](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L254)

Speed of rotation.

#### Default

```ts
1
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`rotateSpeed`](/addons/classes/orbitcontrols/#rotatespeed)

***

### screenSpacePanning

> **screenSpacePanning**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L288)

Defines how the camera's position is translated when panning. If `true`, the camera pans
in screen space. Otherwise, the camera pans in the plane orthogonal to the camera's up
direction.

#### Default

```ts
true
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`screenSpacePanning`](/addons/classes/orbitcontrols/#screenspacepanning)

***

### state

> **state**: `number`

Defined in: [three/addons/controls/OrbitControls.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L99)

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`state`](/addons/classes/orbitcontrols/#state)

***

### target

> **target**: `Vector3`

Defined in: [three/addons/controls/OrbitControls.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L107)

The focus point of the controls, the `object` orbits around this.
It can be updated manually at any point to change the focus of the controls.

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`target`](/addons/classes/orbitcontrols/#target)

***

### target0

> **target0**: `Vector3`

Defined in: [three/addons/controls/OrbitControls.js:377](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L377)

Used internally by `saveState()` and `reset()`.

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`target0`](/addons/classes/orbitcontrols/#target0)

***

### touches

> **touches**: `any`

Defined in: [three/addons/controls/OrbitControls.js:370](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L370)

This object contains references to the touch actions used by the controls.

```js
controls.mouseButtons = {
	ONE: THREE.TOUCH.ROTATE,
	TWO: THREE.TOUCH.DOLLY_PAN
}
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`touches`](/addons/classes/orbitcontrols/#touches)

***

### zoom0

> **zoom0**: `number`

Defined in: [three/addons/controls/OrbitControls.js:391](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L391)

Used internally by `saveState()` and `reset()`.

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`zoom0`](/addons/classes/orbitcontrols/#zoom0)

***

### zoomSpeed

> **zoomSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:234](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L234)

Speed of zooming / dollying.

#### Default

```ts
1
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`zoomSpeed`](/addons/classes/orbitcontrols/#zoomspeed)

***

### zoomToCursor

> **zoomToCursor**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:305](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L305)

Setting this property to `true` allows to zoom to the cursor's position.

#### Default

```ts
false
```

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`zoomToCursor`](/addons/classes/orbitcontrols/#zoomtocursor)

## Methods

### \_addPointer()

> **\_addPointer**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1356](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1356)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_addPointer`](/addons/classes/orbitcontrols/#_addpointer)

***

### \_clampDistance()

> **\_clampDistance**(`dist`): `number`

Defined in: [three/addons/controls/OrbitControls.js:980](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L980)

#### Parameters

##### dist

`any`

#### Returns

`number`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_clampDistance`](/addons/classes/orbitcontrols/#_clampdistance)

***

### \_customWheelEvent()

> **\_customWheelEvent**(`event`): `object`

Defined in: [three/addons/controls/OrbitControls.js:1416](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1416)

#### Parameters

##### event

`any`

#### Returns

`object`

##### clientX

> **clientX**: `any` = `event.clientX`

##### clientY

> **clientY**: `any` = `event.clientY`

##### deltaY

> **deltaY**: `any` = `event.deltaY`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_customWheelEvent`](/addons/classes/orbitcontrols/#_customwheelevent)

***

### \_dollyIn()

> **\_dollyIn**(`dollyScale`): `void`

Defined in: [three/addons/controls/OrbitControls.js:942](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L942)

#### Parameters

##### dollyScale

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_dollyIn`](/addons/classes/orbitcontrols/#_dollyin)

***

### \_dollyOut()

> **\_dollyOut**(`dollyScale`): `void`

Defined in: [three/addons/controls/OrbitControls.js:927](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L927)

#### Parameters

##### dollyScale

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_dollyOut`](/addons/classes/orbitcontrols/#_dollyout)

***

### \_getAutoRotationAngle()

> **\_getAutoRotationAngle**(`deltaTime`): `number`

Defined in: [three/addons/controls/OrbitControls.js:831](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L831)

#### Parameters

##### deltaTime

`any`

#### Returns

`number`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_getAutoRotationAngle`](/addons/classes/orbitcontrols/#_getautorotationangle)

***

### \_getSecondPointerPosition()

> **\_getSecondPointerPosition**(`event`): `any`

Defined in: [three/addons/controls/OrbitControls.js:1406](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1406)

#### Parameters

##### event

`any`

#### Returns

`any`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_getSecondPointerPosition`](/addons/classes/orbitcontrols/#_getsecondpointerposition)

***

### \_getZoomScale()

> **\_getZoomScale**(`delta`): `number`

Defined in: [three/addons/controls/OrbitControls.js:845](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L845)

#### Parameters

##### delta

`any`

#### Returns

`number`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_getZoomScale`](/addons/classes/orbitcontrols/#_getzoomscale)

***

### \_handleKeyDown()

> **\_handleKeyDown**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1081](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1081)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleKeyDown`](/addons/classes/orbitcontrols/#_handlekeydown)

***

### \_handleMouseDownDolly()

> **\_handleMouseDownDolly**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:996](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L996)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleMouseDownDolly`](/addons/classes/orbitcontrols/#_handlemousedowndolly)

***

### \_handleMouseDownPan()

> **\_handleMouseDownPan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1003](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1003)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleMouseDownPan`](/addons/classes/orbitcontrols/#_handlemousedownpan)

***

### \_handleMouseDownRotate()

> **\_handleMouseDownRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:990](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L990)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleMouseDownRotate`](/addons/classes/orbitcontrols/#_handlemousedownrotate)

***

### \_handleMouseMoveDolly()

> **\_handleMouseMoveDolly**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1027](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1027)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleMouseMoveDolly`](/addons/classes/orbitcontrols/#_handlemousemovedolly)

***

### \_handleMouseMovePan()

> **\_handleMouseMovePan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1049](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1049)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleMouseMovePan`](/addons/classes/orbitcontrols/#_handlemousemovepan)

***

### \_handleMouseMoveRotate()

> **\_handleMouseMoveRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1009](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1009)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleMouseMoveRotate`](/addons/classes/orbitcontrols/#_handlemousemoverotate)

***

### \_handleMouseWheel()

> **\_handleMouseWheel**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1063](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1063)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleMouseWheel`](/addons/classes/orbitcontrols/#_handlemousewheel)

***

### \_handleTouchMoveDolly()

> **\_handleTouchMoveDolly**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1314](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1314)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchMoveDolly`](/addons/classes/orbitcontrols/#_handletouchmovedolly)

***

### \_handleTouchMoveDollyPan()

> **\_handleTouchMoveDollyPan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1338)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchMoveDollyPan`](/addons/classes/orbitcontrols/#_handletouchmovedollypan)

***

### \_handleTouchMoveDollyRotate()

> **\_handleTouchMoveDollyRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1346](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1346)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchMoveDollyRotate`](/addons/classes/orbitcontrols/#_handletouchmovedollyrotate)

***

### \_handleTouchMovePan()

> **\_handleTouchMovePan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1289)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchMovePan`](/addons/classes/orbitcontrols/#_handletouchmovepan)

***

### \_handleTouchMoveRotate()

> **\_handleTouchMoveRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1260)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchMoveRotate`](/addons/classes/orbitcontrols/#_handletouchmoverotate)

***

### \_handleTouchStartDolly()

> **\_handleTouchStartDolly**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1231](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1231)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchStartDolly`](/addons/classes/orbitcontrols/#_handletouchstartdolly)

***

### \_handleTouchStartDollyPan()

> **\_handleTouchStartDollyPan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1244](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1244)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchStartDollyPan`](/addons/classes/orbitcontrols/#_handletouchstartdollypan)

***

### \_handleTouchStartDollyRotate()

> **\_handleTouchStartDollyRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1252)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchStartDollyRotate`](/addons/classes/orbitcontrols/#_handletouchstartdollyrotate)

***

### \_handleTouchStartPan()

> **\_handleTouchStartPan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1212](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1212)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchStartPan`](/addons/classes/orbitcontrols/#_handletouchstartpan)

***

### \_handleTouchStartRotate()

> **\_handleTouchStartRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1193)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_handleTouchStartRotate`](/addons/classes/orbitcontrols/#_handletouchstartrotate)

***

### \_isTrackingPointer()

> **\_isTrackingPointer**(`event`): `boolean`

Defined in: [three/addons/controls/OrbitControls.js:1379](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1379)

#### Parameters

##### event

`any`

#### Returns

`boolean`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_isTrackingPointer`](/addons/classes/orbitcontrols/#_istrackingpointer)

***

### \_pan()

> **\_pan**(`deltaX`, `deltaY`): `void`

Defined in: [three/addons/controls/OrbitControls.js:893](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L893)

#### Parameters

##### deltaX

`any`

##### deltaY

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_pan`](/addons/classes/orbitcontrols/#_pan)

***

### \_panLeft()

> **\_panLeft**(`distance`, `objectMatrix`): `void`

Defined in: [three/addons/controls/OrbitControls.js:864](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L864)

#### Parameters

##### distance

`any`

##### objectMatrix

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_panLeft`](/addons/classes/orbitcontrols/#_panleft)

***

### \_panUp()

> **\_panUp**(`distance`, `objectMatrix`): `void`

Defined in: [three/addons/controls/OrbitControls.js:873](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L873)

#### Parameters

##### distance

`any`

##### objectMatrix

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_panUp`](/addons/classes/orbitcontrols/#_panup)

***

### \_removePointer()

> **\_removePointer**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1362)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_removePointer`](/addons/classes/orbitcontrols/#_removepointer)

***

### \_rotateLeft()

> **\_rotateLeft**(`angle`): `void`

Defined in: [three/addons/controls/OrbitControls.js:852](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L852)

#### Parameters

##### angle

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_rotateLeft`](/addons/classes/orbitcontrols/#_rotateleft)

***

### \_rotateUp()

> **\_rotateUp**(`angle`): `void`

Defined in: [three/addons/controls/OrbitControls.js:858](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L858)

#### Parameters

##### angle

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_rotateUp`](/addons/classes/orbitcontrols/#_rotateup)

***

### \_trackPointer()

> **\_trackPointer**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1391](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1391)

#### Parameters

##### event

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_trackPointer`](/addons/classes/orbitcontrols/#_trackpointer)

***

### \_updateZoomParameters()

> **\_updateZoomParameters**(`x`, `y`): `void`

Defined in: [three/addons/controls/OrbitControls.js:957](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L957)

#### Parameters

##### x

`any`

##### y

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`_updateZoomParameters`](/addons/classes/orbitcontrols/#_updatezoomparameters)

***

### connect()

> **connect**(`element`): `void`

Defined in: [three/addons/controls/OrbitControls.js:464](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L464)

#### Parameters

##### element

`any`

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`connect`](/addons/classes/orbitcontrols/#connect)

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:481](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L481)

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`disconnect`](/addons/classes/orbitcontrols/#disconnect)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:500](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L500)

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`dispose`](/addons/classes/orbitcontrols/#dispose)

***

### getAzimuthalAngle()

> **getAzimuthalAngle**(): `number`

Defined in: [three/addons/controls/OrbitControls.js:522](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L522)

Get the current horizontal rotation, in radians.

#### Returns

`number`

The current horizontal rotation, in radians.

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`getAzimuthalAngle`](/addons/classes/orbitcontrols/#getazimuthalangle)

***

### getDistance()

> **getDistance**(): `number`

Defined in: [three/addons/controls/OrbitControls.js:533](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L533)

Returns the distance from the camera to the target.

#### Returns

`number`

The distance from the camera to the target.

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`getDistance`](/addons/classes/orbitcontrols/#getdistance)

***

### getPolarAngle()

> **getPolarAngle**(): `number`

Defined in: [three/addons/controls/OrbitControls.js:511](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L511)

Get the current vertical rotation, in radians.

#### Returns

`number`

The current vertical rotation, in radians.

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`getPolarAngle`](/addons/classes/orbitcontrols/#getpolarangle)

***

### listenToKeyEvents()

> **listenToKeyEvents**(`domElement`): `void`

Defined in: [three/addons/controls/OrbitControls.js:545](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L545)

Adds key event listeners to the given DOM element.
`window` is a recommended argument for using this method.

#### Parameters

##### domElement

`HTMLDOMElement`

The DOM element

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`listenToKeyEvents`](/addons/classes/orbitcontrols/#listentokeyevents)

***

### reset()

> **reset**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:581](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L581)

Reset the controls to their state from either the last time the `saveState()`
was called, or the initial state.

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`reset`](/addons/classes/orbitcontrols/#reset)

***

### saveState()

> **saveState**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:569](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L569)

Save the current state of the controls. This can later be recovered with `reset()`.

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`saveState`](/addons/classes/orbitcontrols/#savestate)

***

### stopListenToKeyEvents()

> **stopListenToKeyEvents**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:555](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L555)

Removes the key event listener previously defined with `listenToKeyEvents()`.

#### Returns

`void`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`stopListenToKeyEvents`](/addons/classes/orbitcontrols/#stoplistentokeyevents)

***

### update()

> **update**(`deltaTime`): `boolean`

Defined in: [three/addons/controls/OrbitControls.js:596](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L596)

#### Parameters

##### deltaTime

`any` = `null`

#### Returns

`boolean`

#### Inherited from

[`OrbitControls`](/addons/classes/orbitcontrols/).[`update`](/addons/classes/orbitcontrols/#update)

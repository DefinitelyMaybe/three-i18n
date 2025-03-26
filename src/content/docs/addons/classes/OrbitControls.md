---
editUrl: false
next: false
prev: false
title: "OrbitControls"
---

Defined in: [three/addons/controls/OrbitControls.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L87)

Orbit controls allow the camera to orbit around a target.

OrbitControls performs orbiting, dollying (zooming), and panning. Unlike [TrackballControls](/addons/classes/trackballcontrols/),
it maintains the "up" direction `object.up` (+Y by default).

- Orbit: Left mouse / touch: one-finger move.
- Zoom: Middle mouse, or mousewheel / touch: two-finger spread or squish.
- Pan: Right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move.

```js
const controls = new OrbitControls( camera, renderer.domElement );

// controls.update() must be called after any manual changes to the camera's transform
camera.position.set( 0, 20, 100 );
controls.update();

function animate() {

	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();

	renderer.render( scene, camera );

}
```

## Extends

- `unknown`

## Extended by

- [`MapControls`](/addons/classes/mapcontrols/)

## Constructors

### Constructor

> **new OrbitControls**(`object`, `domElement`): `OrbitControls`

Defined in: [three/addons/controls/OrbitControls.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L95)

Constructs a new controls instance.

#### Parameters

##### object

`Object3D`

The object that is managed by the controls.

##### domElement

`HTMLDOMElement` = `null`

The HTML element used for event listeners.

#### Returns

`OrbitControls`

#### Overrides

`Controls.constructor`

## Properties

### \_controlActive

> **\_controlActive**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:432](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L432)

***

### \_dollyDelta

> **\_dollyDelta**: `any`

Defined in: [three/addons/controls/OrbitControls.js:423](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L423)

***

### \_dollyDirection

> **\_dollyDirection**: `any`

Defined in: [three/addons/controls/OrbitControls.js:425](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L425)

***

### \_dollyEnd

> **\_dollyEnd**: `any`

Defined in: [three/addons/controls/OrbitControls.js:422](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L422)

***

### \_dollyStart

> **\_dollyStart**: `any`

Defined in: [three/addons/controls/OrbitControls.js:421](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L421)

***

### \_domElementKeyEvents

> **\_domElementKeyEvents**: `any`

Defined in: [three/addons/controls/OrbitControls.js:394](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L394)

***

### \_interceptControlDown

> **\_interceptControlDown**: `any`

Defined in: [three/addons/controls/OrbitControls.js:449](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L449)

***

### \_interceptControlUp

> **\_interceptControlUp**: `any`

Defined in: [three/addons/controls/OrbitControls.js:450](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L450)

***

### \_lastPosition

> **\_lastPosition**: `any`

Defined in: [three/addons/controls/OrbitControls.js:398](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L398)

***

### \_lastQuaternion

> **\_lastQuaternion**: `any`

Defined in: [three/addons/controls/OrbitControls.js:399](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L399)

***

### \_lastTargetPosition

> **\_lastTargetPosition**: `any`

Defined in: [three/addons/controls/OrbitControls.js:400](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L400)

***

### \_mouse

> **\_mouse**: `any`

Defined in: [three/addons/controls/OrbitControls.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L426)

***

### \_onContextMenu

> **\_onContextMenu**: `any`

Defined in: [three/addons/controls/OrbitControls.js:439](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L439)

***

### \_onKeyDown

> **\_onKeyDown**: `any`

Defined in: [three/addons/controls/OrbitControls.js:441](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L441)

***

### \_onMouseDown

> **\_onMouseDown**: `any`

Defined in: [three/addons/controls/OrbitControls.js:446](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L446)

***

### \_onMouseMove

> **\_onMouseMove**: `any`

Defined in: [three/addons/controls/OrbitControls.js:447](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L447)

***

### \_onMouseWheel

> **\_onMouseWheel**: `any`

Defined in: [three/addons/controls/OrbitControls.js:440](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L440)

***

### \_onPointerDown

> **\_onPointerDown**: `any`

Defined in: [three/addons/controls/OrbitControls.js:437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L437)

***

### \_onPointerMove

> **\_onPointerMove**: `any`

Defined in: [three/addons/controls/OrbitControls.js:436](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L436)

***

### \_onPointerUp

> **\_onPointerUp**: `any`

Defined in: [three/addons/controls/OrbitControls.js:438](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L438)

***

### \_onTouchMove

> **\_onTouchMove**: `any`

Defined in: [three/addons/controls/OrbitControls.js:444](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L444)

***

### \_onTouchStart

> **\_onTouchStart**: `any`

Defined in: [three/addons/controls/OrbitControls.js:443](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L443)

***

### \_panDelta

> **\_panDelta**: `any`

Defined in: [three/addons/controls/OrbitControls.js:419](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L419)

***

### \_panEnd

> **\_panEnd**: `any`

Defined in: [three/addons/controls/OrbitControls.js:418](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L418)

***

### \_panOffset

> **\_panOffset**: `any`

Defined in: [three/addons/controls/OrbitControls.js:411](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L411)

***

### \_panStart

> **\_panStart**: `any`

Defined in: [three/addons/controls/OrbitControls.js:417](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L417)

***

### \_performCursorZoom

> **\_performCursorZoom**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:427](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L427)

***

### \_pointerPositions

> **\_pointerPositions**: `object`

Defined in: [three/addons/controls/OrbitControls.js:430](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L430)

***

### \_pointers

> **\_pointers**: `any`[]

Defined in: [three/addons/controls/OrbitControls.js:429](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L429)

***

### \_quat

> **\_quat**: `any`

Defined in: [three/addons/controls/OrbitControls.js:403](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L403)

***

### \_quatInverse

> **\_quatInverse**: `any`

Defined in: [three/addons/controls/OrbitControls.js:404](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L404)

***

### \_rotateDelta

> **\_rotateDelta**: `any`

Defined in: [three/addons/controls/OrbitControls.js:415](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L415)

***

### \_rotateEnd

> **\_rotateEnd**: `any`

Defined in: [three/addons/controls/OrbitControls.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L414)

***

### \_rotateStart

> **\_rotateStart**: `any`

Defined in: [three/addons/controls/OrbitControls.js:413](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L413)

***

### \_scale

> **\_scale**: `number`

Defined in: [three/addons/controls/OrbitControls.js:410](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L410)

***

### \_spherical

> **\_spherical**: `any`

Defined in: [three/addons/controls/OrbitControls.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L407)

***

### \_sphericalDelta

> **\_sphericalDelta**: `any`

Defined in: [three/addons/controls/OrbitControls.js:408](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L408)

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

***

### cursor

> **cursor**: `Vector3`

Defined in: [three/addons/controls/OrbitControls.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L116)

The focus point of the `minTargetRadius` and `maxTargetRadius` limits.
It can be updated manually at any point to change the center of interest
for the `target`.

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

***

### enablePan

> **enablePan**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:270](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L270)

Enable or disable camera panning.

#### Default

```ts
true
```

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

***

### enableZoom

> **enableZoom**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:226](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L226)

Enable or disable zooming (dollying) of the camera.

#### Default

```ts
true
```

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

***

### keyRotateSpeed

> **keyRotateSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:262](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L262)

How fast to rotate the camera when the keyboard is used.

#### Default

```ts
1
```

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

***

### maxDistance

> **maxDistance**: `number`

Defined in: [three/addons/controls/OrbitControls.js:132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L132)

How far you can dolly out (perspective camera only).

#### Default

```ts
Infinity
```

***

### maxPolarAngle

> **maxPolarAngle**: `number`

Defined in: [three/addons/controls/OrbitControls.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L180)

How far you can orbit vertically, upper limit. Range is `[0, Math.PI]` radians.

#### Default

```ts
Math.PI
```

***

### maxTargetRadius

> **maxTargetRadius**: `number`

Defined in: [three/addons/controls/OrbitControls.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L164)

How far you can move the target from the 3D `cursor`.

#### Default

```ts
Infinity
```

***

### maxZoom

> **maxZoom**: `number`

Defined in: [three/addons/controls/OrbitControls.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L148)

How far you can zoom out (orthographic camera only).

#### Default

```ts
Infinity
```

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

***

### minDistance

> **minDistance**: `number`

Defined in: [three/addons/controls/OrbitControls.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L124)

How far you can dolly in (perspective camera only).

#### Default

```ts
0
```

***

### minPolarAngle

> **minPolarAngle**: `number`

Defined in: [three/addons/controls/OrbitControls.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L172)

How far you can orbit vertically, lower limit. Range is `[0, Math.PI]` radians.

#### Default

```ts
0
```

***

### minTargetRadius

> **minTargetRadius**: `number`

Defined in: [three/addons/controls/OrbitControls.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L156)

How close you can get the target to the 3D `cursor`.

#### Default

```ts
0
```

***

### minZoom

> **minZoom**: `number`

Defined in: [three/addons/controls/OrbitControls.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L140)

How far you can zoom in (orthographic camera only).

#### Default

```ts
0
```

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

***

### panSpeed

> **panSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:278](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L278)

Speed of panning.

#### Default

```ts
1
```

***

### position0

> **position0**: `Vector3`

Defined in: [three/addons/controls/OrbitControls.js:384](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L384)

Used internally by `saveState()` and `reset()`.

***

### rotateSpeed

> **rotateSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:254](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L254)

Speed of rotation.

#### Default

```ts
1
```

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

***

### state

> **state**: `number`

Defined in: [three/addons/controls/OrbitControls.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L99)

***

### target

> **target**: `Vector3`

Defined in: [three/addons/controls/OrbitControls.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L107)

The focus point of the controls, the `object` orbits around this.
It can be updated manually at any point to change the focus of the controls.

***

### target0

> **target0**: `Vector3`

Defined in: [three/addons/controls/OrbitControls.js:377](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L377)

Used internally by `saveState()` and `reset()`.

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

***

### zoom0

> **zoom0**: `number`

Defined in: [three/addons/controls/OrbitControls.js:391](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L391)

Used internally by `saveState()` and `reset()`.

***

### zoomSpeed

> **zoomSpeed**: `number`

Defined in: [three/addons/controls/OrbitControls.js:234](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L234)

Speed of zooming / dollying.

#### Default

```ts
1
```

***

### zoomToCursor

> **zoomToCursor**: `boolean`

Defined in: [three/addons/controls/OrbitControls.js:305](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L305)

Setting this property to `true` allows to zoom to the cursor's position.

#### Default

```ts
false
```

## Methods

### \_addPointer()

> **\_addPointer**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1356](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1356)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_clampDistance()

> **\_clampDistance**(`dist`): `number`

Defined in: [three/addons/controls/OrbitControls.js:980](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L980)

#### Parameters

##### dist

`any`

#### Returns

`number`

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

***

### \_dollyIn()

> **\_dollyIn**(`dollyScale`): `void`

Defined in: [three/addons/controls/OrbitControls.js:942](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L942)

#### Parameters

##### dollyScale

`any`

#### Returns

`void`

***

### \_dollyOut()

> **\_dollyOut**(`dollyScale`): `void`

Defined in: [three/addons/controls/OrbitControls.js:927](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L927)

#### Parameters

##### dollyScale

`any`

#### Returns

`void`

***

### \_getAutoRotationAngle()

> **\_getAutoRotationAngle**(`deltaTime`): `number`

Defined in: [three/addons/controls/OrbitControls.js:831](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L831)

#### Parameters

##### deltaTime

`any`

#### Returns

`number`

***

### \_getSecondPointerPosition()

> **\_getSecondPointerPosition**(`event`): `any`

Defined in: [three/addons/controls/OrbitControls.js:1406](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1406)

#### Parameters

##### event

`any`

#### Returns

`any`

***

### \_getZoomScale()

> **\_getZoomScale**(`delta`): `number`

Defined in: [three/addons/controls/OrbitControls.js:845](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L845)

#### Parameters

##### delta

`any`

#### Returns

`number`

***

### \_handleKeyDown()

> **\_handleKeyDown**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1081](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1081)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleMouseDownDolly()

> **\_handleMouseDownDolly**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:996](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L996)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleMouseDownPan()

> **\_handleMouseDownPan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1003](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1003)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleMouseDownRotate()

> **\_handleMouseDownRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:990](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L990)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleMouseMoveDolly()

> **\_handleMouseMoveDolly**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1027](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1027)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleMouseMovePan()

> **\_handleMouseMovePan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1049](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1049)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleMouseMoveRotate()

> **\_handleMouseMoveRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1009](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1009)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleMouseWheel()

> **\_handleMouseWheel**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1063](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1063)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchMoveDolly()

> **\_handleTouchMoveDolly**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1314](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1314)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchMoveDollyPan()

> **\_handleTouchMoveDollyPan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1338)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchMoveDollyRotate()

> **\_handleTouchMoveDollyRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1346](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1346)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchMovePan()

> **\_handleTouchMovePan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1289](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1289)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchMoveRotate()

> **\_handleTouchMoveRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1260)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchStartDolly()

> **\_handleTouchStartDolly**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1231](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1231)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchStartDollyPan()

> **\_handleTouchStartDollyPan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1244](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1244)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchStartDollyRotate()

> **\_handleTouchStartDollyRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1252)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchStartPan()

> **\_handleTouchStartPan**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1212](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1212)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_handleTouchStartRotate()

> **\_handleTouchStartRotate**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1193)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_isTrackingPointer()

> **\_isTrackingPointer**(`event`): `boolean`

Defined in: [three/addons/controls/OrbitControls.js:1379](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1379)

#### Parameters

##### event

`any`

#### Returns

`boolean`

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

***

### \_removePointer()

> **\_removePointer**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1362)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_rotateLeft()

> **\_rotateLeft**(`angle`): `void`

Defined in: [three/addons/controls/OrbitControls.js:852](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L852)

#### Parameters

##### angle

`any`

#### Returns

`void`

***

### \_rotateUp()

> **\_rotateUp**(`angle`): `void`

Defined in: [three/addons/controls/OrbitControls.js:858](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L858)

#### Parameters

##### angle

`any`

#### Returns

`void`

***

### \_trackPointer()

> **\_trackPointer**(`event`): `void`

Defined in: [three/addons/controls/OrbitControls.js:1391](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L1391)

#### Parameters

##### event

`any`

#### Returns

`void`

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

***

### connect()

> **connect**(`element`): `void`

Defined in: [three/addons/controls/OrbitControls.js:464](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L464)

#### Parameters

##### element

`any`

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:481](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L481)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:500](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L500)

#### Returns

`void`

***

### getAzimuthalAngle()

> **getAzimuthalAngle**(): `number`

Defined in: [three/addons/controls/OrbitControls.js:522](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L522)

Get the current horizontal rotation, in radians.

#### Returns

`number`

The current horizontal rotation, in radians.

***

### getDistance()

> **getDistance**(): `number`

Defined in: [three/addons/controls/OrbitControls.js:533](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L533)

Returns the distance from the camera to the target.

#### Returns

`number`

The distance from the camera to the target.

***

### getPolarAngle()

> **getPolarAngle**(): `number`

Defined in: [three/addons/controls/OrbitControls.js:511](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L511)

Get the current vertical rotation, in radians.

#### Returns

`number`

The current vertical rotation, in radians.

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

***

### reset()

> **reset**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:581](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L581)

Reset the controls to their state from either the last time the `saveState()`
was called, or the initial state.

#### Returns

`void`

***

### saveState()

> **saveState**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:569](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L569)

Save the current state of the controls. This can later be recovered with `reset()`.

#### Returns

`void`

***

### stopListenToKeyEvents()

> **stopListenToKeyEvents**(): `void`

Defined in: [three/addons/controls/OrbitControls.js:555](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L555)

Removes the key event listener previously defined with `listenToKeyEvents()`.

#### Returns

`void`

***

### update()

> **update**(`deltaTime`): `boolean`

Defined in: [three/addons/controls/OrbitControls.js:596](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/OrbitControls.js#L596)

#### Parameters

##### deltaTime

`any` = `null`

#### Returns

`boolean`

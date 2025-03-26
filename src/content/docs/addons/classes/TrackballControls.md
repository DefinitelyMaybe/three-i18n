---
editUrl: false
next: false
prev: false
title: "TrackballControls"
---

Defined in: [three/addons/controls/TrackballControls.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L55)

This class is similar to [OrbitControls](/addons/classes/orbitcontrols/). However, it does not maintain a constant camera
`up` vector. That means if the camera orbits over the “north” and “south” poles, it does not flip
to stay "right side up".

## Extends

- `unknown`

## Constructors

### Constructor

> **new TrackballControls**(`object`, `domElement`): `TrackballControls`

Defined in: [three/addons/controls/TrackballControls.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L63)

Constructs a new controls instance.

#### Parameters

##### object

`Object3D`

The object that is managed by the controls.

##### domElement

`HTMLDOMElement` = `null`

The HTML element used for event listeners.

#### Returns

`TrackballControls`

#### Overrides

`Controls.constructor`

## Properties

### \_eye

> **\_eye**: `any`

Defined in: [three/addons/controls/TrackballControls.js:216](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L216)

***

### \_lastAngle

> **\_lastAngle**: `number`

Defined in: [three/addons/controls/TrackballControls.js:214](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L214)

***

### \_lastAxis

> **\_lastAxis**: `any`

Defined in: [three/addons/controls/TrackballControls.js:221](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L221)

***

### \_lastPosition

> **\_lastPosition**: `any`

Defined in: [three/addons/controls/TrackballControls.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L210)

***

### \_lastZoom

> **\_lastZoom**: `number`

Defined in: [three/addons/controls/TrackballControls.js:211](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L211)

***

### \_moveCurr

> **\_moveCurr**: `any`

Defined in: [three/addons/controls/TrackballControls.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L219)

***

### \_movePrev

> **\_movePrev**: `any`

Defined in: [three/addons/controls/TrackballControls.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L218)

***

### \_onContextMenu

> **\_onContextMenu**: `any`

Defined in: [three/addons/controls/TrackballControls.js:238](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L238)

***

### \_onKeyDown

> **\_onKeyDown**: `any`

Defined in: [three/addons/controls/TrackballControls.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L240)

***

### \_onKeyUp

> **\_onKeyUp**: `any`

Defined in: [three/addons/controls/TrackballControls.js:241](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L241)

***

### \_onMouseDown

> **\_onMouseDown**: `any`

Defined in: [three/addons/controls/TrackballControls.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L247)

***

### \_onMouseMove

> **\_onMouseMove**: `any`

Defined in: [three/addons/controls/TrackballControls.js:248](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L248)

***

### \_onMouseUp

> **\_onMouseUp**: `any`

Defined in: [three/addons/controls/TrackballControls.js:249](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L249)

***

### \_onMouseWheel

> **\_onMouseWheel**: `any`

Defined in: [three/addons/controls/TrackballControls.js:239](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L239)

***

### \_onPointerCancel

> **\_onPointerCancel**: `any`

Defined in: [three/addons/controls/TrackballControls.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L237)

***

### \_onPointerDown

> **\_onPointerDown**: `any`

Defined in: [three/addons/controls/TrackballControls.js:235](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L235)

***

### \_onPointerMove

> **\_onPointerMove**: `any`

Defined in: [three/addons/controls/TrackballControls.js:234](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L234)

***

### \_onPointerUp

> **\_onPointerUp**: `any`

Defined in: [three/addons/controls/TrackballControls.js:236](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L236)

***

### \_onTouchEnd

> **\_onTouchEnd**: `any`

Defined in: [three/addons/controls/TrackballControls.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L245)

***

### \_onTouchMove

> **\_onTouchMove**: `any`

Defined in: [three/addons/controls/TrackballControls.js:244](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L244)

***

### \_onTouchStart

> **\_onTouchStart**: `any`

Defined in: [three/addons/controls/TrackballControls.js:243](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L243)

***

### \_panEnd

> **\_panEnd**: `any`

Defined in: [three/addons/controls/TrackballControls.js:227](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L227)

***

### \_panStart

> **\_panStart**: `any`

Defined in: [three/addons/controls/TrackballControls.js:226](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L226)

***

### \_pointerPositions

> **\_pointerPositions**: `object`

Defined in: [three/addons/controls/TrackballControls.js:230](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L230)

***

### \_pointers

> **\_pointers**: `any`[]

Defined in: [three/addons/controls/TrackballControls.js:229](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L229)

***

### \_position0

> **\_position0**: `any`

Defined in: [three/addons/controls/TrackballControls.js:254](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L254)

***

### \_target0

> **\_target0**: `any`

Defined in: [three/addons/controls/TrackballControls.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L253)

***

### \_touchZoomDistanceEnd

> **\_touchZoomDistanceEnd**: `number`

Defined in: [three/addons/controls/TrackballControls.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L213)

***

### \_touchZoomDistanceStart

> **\_touchZoomDistanceStart**: `number`

Defined in: [three/addons/controls/TrackballControls.js:212](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L212)

***

### \_up0

> **\_up0**: `any`

Defined in: [three/addons/controls/TrackballControls.js:255](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L255)

***

### \_zoom0

> **\_zoom0**: `any`

Defined in: [three/addons/controls/TrackballControls.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L256)

***

### \_zoomEnd

> **\_zoomEnd**: `any`

Defined in: [three/addons/controls/TrackballControls.js:224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L224)

***

### \_zoomStart

> **\_zoomStart**: `any`

Defined in: [three/addons/controls/TrackballControls.js:223](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L223)

***

### dynamicDampingFactor

> **dynamicDampingFactor**: `number`

Defined in: [three/addons/controls/TrackballControls.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L137)

Defines the intensity of damping. Only considered if `staticMoving` is set to `false`.

#### Default

```ts
0.2
```

***

### keys

> **keys**: `string`[]

Defined in: [three/addons/controls/TrackballControls.js:182](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L182)

This array holds keycodes for controlling interactions.

- When the first defined key is pressed, all mouse interactions (left, middle, right) performs orbiting.
- When the second defined key is pressed, all mouse interactions (left, middle, right) performs zooming.
- When the third defined key is pressed, all mouse interactions (left, middle, right) performs panning.

Default is *KeyA, KeyS, KeyD* which represents A, S, D.

***

### keyState

> **keyState**: `number`

Defined in: [three/addons/controls/TrackballControls.js:208](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L208)

***

### maxDistance

> **maxDistance**: `number`

Defined in: [three/addons/controls/TrackballControls.js:153](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L153)

How far you can dolly out (perspective camera only).

#### Default

```ts
Infinity
```

***

### maxZoom

> **maxZoom**: `number`

Defined in: [three/addons/controls/TrackballControls.js:169](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L169)

How far you can zoom out (orthographic camera only).

#### Default

```ts
Infinity
```

***

### minDistance

> **minDistance**: `number`

Defined in: [three/addons/controls/TrackballControls.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L145)

How far you can dolly in (perspective camera only).

#### Default

```ts
0
```

***

### minZoom

> **minZoom**: `number`

Defined in: [three/addons/controls/TrackballControls.js:161](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L161)

How far you can zoom in (orthographic camera only).

#### Default

```ts
0
```

***

### mouseButtons

> **mouseButtons**: `any`

Defined in: [three/addons/controls/TrackballControls.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L196)

This object contains references to the mouse actions used by the controls.

```js
controls.mouseButtons = {
	LEFT: THREE.MOUSE.ROTATE,
	MIDDLE: THREE.MOUSE.DOLLY,
	RIGHT: THREE.MOUSE.PAN
}
```

***

### noPan

> **noPan**: `boolean`

Defined in: [three/addons/controls/TrackballControls.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L121)

Whether panning is disabled or not.

#### Default

```ts
false
```

***

### noRotate

> **noRotate**: `boolean`

Defined in: [three/addons/controls/TrackballControls.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L105)

Whether rotation is disabled or not.

#### Default

```ts
false
```

***

### noZoom

> **noZoom**: `boolean`

Defined in: [three/addons/controls/TrackballControls.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L113)

Whether zooming is disabled or not.

#### Default

```ts
false
```

***

### panSpeed

> **panSpeed**: `number`

Defined in: [three/addons/controls/TrackballControls.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L97)

The pan speed.

#### Default

```ts
0.3
```

***

### rotateSpeed

> **rotateSpeed**: `number`

Defined in: [three/addons/controls/TrackballControls.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L81)

The rotation speed.

#### Default

```ts
1
```

***

### screen

> `readonly` **screen**: `any`

Defined in: [three/addons/controls/TrackballControls.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L73)

Represents the properties of the screen. Automatically set when `handleResize()` is called.

***

### state

> **state**: `number`

Defined in: [three/addons/controls/TrackballControls.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L207)

***

### staticMoving

> **staticMoving**: `boolean`

Defined in: [three/addons/controls/TrackballControls.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L129)

Whether damping is disabled or not.

#### Default

```ts
false
```

***

### target

> **target**: `Vector3`

Defined in: [three/addons/controls/TrackballControls.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L203)

The focus point of the controls.

***

### zoomSpeed

> **zoomSpeed**: `number`

Defined in: [three/addons/controls/TrackballControls.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L89)

The zoom speed.

#### Default

```ts
1.2
```

## Methods

### \_addPointer()

> **\_addPointer**(`event`): `void`

Defined in: [three/addons/controls/TrackballControls.js:584](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L584)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_checkDistances()

> **\_checkDistances**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:630](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L630)

#### Returns

`void`

***

### \_getMouseOnCircle()

> **\_getMouseOnCircle**(`pageX`, `pageY`): `any`

Defined in: [three/addons/controls/TrackballControls.js:573](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L573)

#### Parameters

##### pageX

`any`

##### pageY

`any`

#### Returns

`any`

***

### \_getMouseOnScreen()

> **\_getMouseOnScreen**(`pageX`, `pageY`): `any`

Defined in: [three/addons/controls/TrackballControls.js:562](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L562)

#### Parameters

##### pageX

`any`

##### pageY

`any`

#### Returns

`any`

***

### \_getSecondPointerPosition()

> **\_getSecondPointerPosition**(`event`): `any`

Defined in: [three/addons/controls/TrackballControls.js:622](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L622)

#### Parameters

##### event

`any`

#### Returns

`any`

***

### \_panCamera()

> **\_panCamera**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:410](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L410)

#### Returns

`void`

***

### \_removePointer()

> **\_removePointer**(`event`): `void`

Defined in: [three/addons/controls/TrackballControls.js:590](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L590)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_rotateCamera()

> **\_rotateCamera**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:448](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L448)

#### Returns

`void`

***

### \_trackPointer()

> **\_trackPointer**(`event`): `void`

Defined in: [three/addons/controls/TrackballControls.js:607](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L607)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_zoomCamera()

> **\_zoomCamera**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:491](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L491)

#### Returns

`void`

***

### connect()

> **connect**(`element`): `void`

Defined in: [three/addons/controls/TrackballControls.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L271)

#### Parameters

##### element

`any`

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:287](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L287)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L303)

#### Returns

`void`

***

### handleResize()

> **handleResize**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L312)

Must be called if the application window is resized.

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:387](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L387)

Resets the controls to its initial state.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [three/addons/controls/TrackballControls.js:325](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/TrackballControls.js#L325)

#### Returns

`void`

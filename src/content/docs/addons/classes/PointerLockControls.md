---
editUrl: false
next: false
prev: false
title: "PointerLockControls"
---

Defined in: [three/addons/controls/PointerLockControls.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L59)

The implementation of this class is based on the [Pointer Lock API][https://developer.mozilla.org/en-US/docs/Web/API/Pointer\_Lock\_API](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API).
`PointerLockControls` is a perfect choice for first person 3D games.

```js
const controls = new PointerLockControls( camera, document.body );

// add event listener to show/hide a UI (e.g. the game's menu)
controls.addEventListener( 'lock', function () {

	menu.style.display = 'none';

} );

controls.addEventListener( 'unlock', function () {

	menu.style.display = 'block';

} );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new PointerLockControls**(`camera`, `domElement`): `PointerLockControls`

Defined in: [three/addons/controls/PointerLockControls.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L67)

Constructs a new controls instance.

#### Parameters

##### camera

`Camera`

The camera that is managed by the controls.

##### domElement

`HTMLDOMElement` = `null`

The HTML element used for event listeners.

#### Returns

`PointerLockControls`

#### Overrides

`Controls.constructor`

## Properties

### \_onMouseMove

> **\_onMouseMove**: `any`

Defined in: [three/addons/controls/PointerLockControls.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L106)

***

### \_onPointerlockChange

> **\_onPointerlockChange**: `any`

Defined in: [three/addons/controls/PointerLockControls.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L107)

***

### \_onPointerlockError

> **\_onPointerlockError**: `any`

Defined in: [three/addons/controls/PointerLockControls.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L108)

***

### isLocked

> `readonly` **isLocked**: `boolean`

Defined in: [three/addons/controls/PointerLockControls.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L78)

Whether the controls are locked or not.

#### Default

```ts
false
```

***

### maxPolarAngle

> **maxPolarAngle**: `number`

Defined in: [three/addons/controls/PointerLockControls.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L94)

Camera pitch, upper limit. Range is '[0, Math.PI]' in radians.

#### Default

```ts
Math.PI
```

***

### minPolarAngle

> **minPolarAngle**: `number`

Defined in: [three/addons/controls/PointerLockControls.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L86)

Camera pitch, lower limit. Range is '[0, Math.PI]' in radians.

#### Default

```ts
0
```

***

### pointerSpeed

> **pointerSpeed**: `number`

Defined in: [three/addons/controls/PointerLockControls.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L102)

Multiplier for how much the pointer movement influences the camera rotation.

#### Default

```ts
1
```

## Methods

### connect()

> **connect**(`element`): `void`

Defined in: [three/addons/controls/PointerLockControls.js:118](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L118)

#### Parameters

##### element

`any`

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/controls/PointerLockControls.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L128)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/controls/PointerLockControls.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L136)

#### Returns

`void`

***

### getDirection()

> **getDirection**(`v`): `Vector3`

Defined in: [three/addons/controls/PointerLockControls.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L156)

Returns the look direction of the camera.

#### Parameters

##### v

`Vector3`

The target vector that is used to store the method's result.

#### Returns

`Vector3`

The normalized direction vector.

***

### getObject()

> **getObject**(): `any`

Defined in: [three/addons/controls/PointerLockControls.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L142)

#### Returns

`any`

***

### lock()

> **lock**(`unadjustedMovement`?): `void`

Defined in: [three/addons/controls/PointerLockControls.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L207)

Activates the pointer lock.

#### Parameters

##### unadjustedMovement?

`boolean` = `false`

Disables OS-level adjustment for mouse acceleration, and accesses raw mouse input instead.
Setting it to true will disable mouse acceleration.

#### Returns

`void`

***

### moveForward()

> **moveForward**(`distance`): `void`

Defined in: [three/addons/controls/PointerLockControls.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L167)

Moves the camera forward parallel to the xz-plane. Assumes camera.up is y-up.

#### Parameters

##### distance

`number`

The signed distance.

#### Returns

`void`

***

### moveRight()

> **moveRight**(`distance`): `void`

Defined in: [three/addons/controls/PointerLockControls.js:189](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L189)

Moves the camera sidewards parallel to the xz-plane.

#### Parameters

##### distance

`number`

The signed distance.

#### Returns

`void`

***

### unlock()

> **unlock**(): `void`

Defined in: [three/addons/controls/PointerLockControls.js:218](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/PointerLockControls.js#L218)

Exits the pointer lock.

#### Returns

`void`

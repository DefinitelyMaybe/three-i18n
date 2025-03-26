---
editUrl: false
next: false
prev: false
title: "FlyControls"
---

Defined in: [three/addons/controls/FlyControls.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L25)

This class enables a navigation similar to fly modes in DCC tools like Blender.
You can arbitrarily transform the camera in 3D space without any limitations
(e.g. focus on a specific target).

## Extends

- `unknown`

## Constructors

### Constructor

> **new FlyControls**(`object`, `domElement`): `FlyControls`

Defined in: [three/addons/controls/FlyControls.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L33)

Constructs a new controls instance.

#### Parameters

##### object

`Object3D`

The object that is managed by the controls.

##### domElement

`HTMLDOMElement` = `null`

The HTML element used for event listeners.

#### Returns

`FlyControls`

#### Overrides

`Controls.constructor`

## Properties

### \_lastPosition

> **\_lastPosition**: `any`

Defined in: [three/addons/controls/FlyControls.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L75)

***

### \_lastQuaternion

> **\_lastQuaternion**: `any`

Defined in: [three/addons/controls/FlyControls.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L74)

***

### \_moveState

> **\_moveState**: `object`

Defined in: [three/addons/controls/FlyControls.js:71](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L71)

#### back

> **back**: `number` = `0`

#### down

> **down**: `number` = `0`

#### forward

> **forward**: `number` = `0`

#### left

> **left**: `number` = `0`

#### pitchDown

> **pitchDown**: `number` = `0`

#### pitchUp

> **pitchUp**: `number` = `0`

#### right

> **right**: `number` = `0`

#### rollLeft

> **rollLeft**: `number` = `0`

#### rollRight

> **rollRight**: `number` = `0`

#### up

> **up**: `number` = `0`

#### yawLeft

> **yawLeft**: `number` = `0`

#### yawRight

> **yawRight**: `number` = `0`

***

### \_moveVector

> **\_moveVector**: `any`

Defined in: [three/addons/controls/FlyControls.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L72)

***

### \_onContextMenu

> **\_onContextMenu**: `any`

Defined in: [three/addons/controls/FlyControls.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L86)

***

### \_onKeyDown

> **\_onKeyDown**: `any`

Defined in: [three/addons/controls/FlyControls.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L80)

***

### \_onKeyUp

> **\_onKeyUp**: `any`

Defined in: [three/addons/controls/FlyControls.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L81)

***

### \_onPointerCancel

> **\_onPointerCancel**: `any`

Defined in: [three/addons/controls/FlyControls.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L85)

***

### \_onPointerDown

> **\_onPointerDown**: `any`

Defined in: [three/addons/controls/FlyControls.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L83)

***

### \_onPointerMove

> **\_onPointerMove**: `any`

Defined in: [three/addons/controls/FlyControls.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L82)

***

### \_onPointerUp

> **\_onPointerUp**: `any`

Defined in: [three/addons/controls/FlyControls.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L84)

***

### \_rotationVector

> **\_rotationVector**: `any`

Defined in: [three/addons/controls/FlyControls.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L73)

***

### \_status

> **\_status**: `number`

Defined in: [three/addons/controls/FlyControls.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L76)

***

### autoForward

> **autoForward**: `boolean`

Defined in: [three/addons/controls/FlyControls.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L67)

If set to `true`, the camera automatically moves forward (and does not stop) when initially translated.

#### Default

```ts
false
```

***

### dragToLook

> **dragToLook**: `boolean`

Defined in: [three/addons/controls/FlyControls.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L59)

If set to `true`, you can only look around by performing a drag interaction.

#### Default

```ts
false
```

***

### movementSpeed

> **movementSpeed**: `number`

Defined in: [three/addons/controls/FlyControls.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L43)

The movement speed.

#### Default

```ts
1
```

***

### rollSpeed

> **rollSpeed**: `number`

Defined in: [three/addons/controls/FlyControls.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L51)

The rotation speed.

#### Default

```ts
0.005
```

## Methods

### \_getContainerDimensions()

> **\_getContainerDimensions**(): `object`

Defined in: [three/addons/controls/FlyControls.js:185](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L185)

#### Returns

`object`

##### offset

> **offset**: `any`[]

##### size

> **size**: `any`[]

***

### \_updateMovementVector()

> **\_updateMovementVector**(): `void`

Defined in: [three/addons/controls/FlyControls.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L163)

#### Returns

`void`

***

### \_updateRotationVector()

> **\_updateRotationVector**(): `void`

Defined in: [three/addons/controls/FlyControls.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L175)

#### Returns

`void`

***

### connect()

> **connect**(`element`): `void`

Defined in: [three/addons/controls/FlyControls.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L98)

#### Parameters

##### element

`any`

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/controls/FlyControls.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L113)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/controls/FlyControls.js:126](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L126)

#### Returns

`void`

***

### update()

> **update**(`delta`): `void`

Defined in: [three/addons/controls/FlyControls.js:132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/FlyControls.js#L132)

#### Parameters

##### delta

`any`

#### Returns

`void`

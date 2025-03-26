---
editUrl: false
next: false
prev: false
title: "DragControls"
---

Defined in: [three/addons/controls/DragControls.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L56)

This class can be used to provide a drag'n'drop interaction.

```js
const controls = new DragControls( objects, camera, renderer.domElement );

// add event listener to highlight dragged objects
controls.addEventListener( 'dragstart', function ( event ) {

	event.object.material.emissive.set( 0xaaaaaa );

} );

controls.addEventListener( 'dragend', function ( event ) {

	event.object.material.emissive.set( 0x000000 );

} );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new DragControls**(`objects`, `camera`, `domElement`?): `DragControls`

Defined in: [three/addons/controls/DragControls.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L65)

Constructs a new controls instance.

#### Parameters

##### objects

`Object3D`[]

An array of draggable 3D objects.

##### camera

`Camera`

The camera of the rendered scene.

##### domElement?

`HTMLDOMElement` = `null`

The HTML DOM element used for event listeners.

#### Returns

`DragControls`

#### Overrides

`Controls.constructor`

## Properties

### \_onContextMenu

> **\_onContextMenu**: `any`

Defined in: [three/addons/controls/DragControls.js:119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L119)

***

### \_onPointerCancel

> **\_onPointerCancel**: `any`

Defined in: [three/addons/controls/DragControls.js:118](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L118)

***

### \_onPointerDown

> **\_onPointerDown**: `any`

Defined in: [three/addons/controls/DragControls.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L117)

***

### \_onPointerMove

> **\_onPointerMove**: `any`

Defined in: [three/addons/controls/DragControls.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L116)

***

### mouseButtons

> **mouseButtons**: `object`

Defined in: [three/addons/controls/DragControls.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L111)

#### LEFT

> **LEFT**: `any` = `MOUSE.PAN`

#### MIDDLE

> **MIDDLE**: `any` = `MOUSE.PAN`

#### RIGHT

> **RIGHT**: `any` = `MOUSE.ROTATE`

***

### objects

> **objects**: `Object3D`[]

Defined in: [three/addons/controls/DragControls.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L74)

An array of draggable 3D objects.

***

### raycaster

> **raycaster**: `Raycaster`

Defined in: [three/addons/controls/DragControls.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L107)

The raycaster used for detecting 3D objects.

***

### recursive

> **recursive**: `boolean`

Defined in: [three/addons/controls/DragControls.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L82)

Whether children of draggable objects can be dragged independently from their parent.

#### Default

```ts
true
```

***

### rotateSpeed

> **rotateSpeed**: `number`

Defined in: [three/addons/controls/DragControls.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L100)

The speed at which the object will rotate when dragged in `rotate` mode.
The higher the number the faster the rotation.

#### Default

```ts
1
```

***

### state

> **state**: `number`

Defined in: [three/addons/controls/DragControls.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L217)

***

### touches

> **touches**: `object`

Defined in: [three/addons/controls/DragControls.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L112)

#### ONE

> **ONE**: `any` = `TOUCH.PAN`

***

### transformGroup

> **transformGroup**: `boolean`

Defined in: [three/addons/controls/DragControls.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L91)

This option only works if the `objects` array contains a single draggable  group object.
If set to `true`, the controls does not transform individual objects but the entire group.

#### Default

```ts
false
```

## Accessors

### mode

#### Get Signature

> **get** **mode**(): `void`

Defined in: [three/addons/controls/DragControls.js:280](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L280)

##### Returns

`void`

#### Set Signature

> **set** **mode**(`value`): `void`

Defined in: [three/addons/controls/DragControls.js:274](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L274)

##### Parameters

###### value

`void`

##### Returns

`void`

## Methods

### \_updatePointer()

> **\_updatePointer**(`event`): `void`

Defined in: [three/addons/controls/DragControls.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L164)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_updateState()

> **\_updateState**(`event`): `void`

Defined in: [three/addons/controls/DragControls.js:173](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L173)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### activate()

> **activate**(): `void`

Defined in: [three/addons/controls/DragControls.js:260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L260)

#### Returns

`void`

***

### connect()

> **connect**(`element`): `void`

Defined in: [three/addons/controls/DragControls.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L131)

#### Parameters

##### element

`any`

#### Returns

`void`

***

### deactivate()

> **deactivate**(): `void`

Defined in: [three/addons/controls/DragControls.js:267](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L267)

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/controls/DragControls.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L145)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/controls/DragControls.js:158](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L158)

#### Returns

`void`

***

### getObjects()

> **getObjects**(): `Object3D`[]

Defined in: [three/addons/controls/DragControls.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L252)

#### Returns

`Object3D`[]

***

### getRaycaster()

> **getRaycaster**(): `Raycaster`

Defined in: [three/addons/controls/DragControls.js:236](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L236)

#### Returns

`Raycaster`

***

### setObjects()

> **setObjects**(`objects`): `void`

Defined in: [three/addons/controls/DragControls.js:244](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/controls/DragControls.js#L244)

#### Parameters

##### objects

`any`

#### Returns

`void`

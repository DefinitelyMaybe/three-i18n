---
editUrl: false
next: false
prev: false
title: "InteractiveGroup"
---

Defined in: [three/addons/interactive/InteractiveGroup.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L38)

This class can be used to group 3D objects in an interactive group.
The group itself can listen to Pointer, Mouse or XR controller events to
detect selections of descendant 3D objects. If a 3D object is selected,
the respective event is going to dispatched to it.

```js
const group = new InteractiveGroup();
group.listenToPointerEvents( renderer, camera );
group.listenToXRControllerEvents( controller1 );
group.listenToXRControllerEvents( controller2 );
scene.add( group );

// now add objects that should be interactive
group.add( mesh1, mesh2, mesh3 );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new InteractiveGroup**(): `InteractiveGroup`

Defined in: [three/addons/interactive/InteractiveGroup.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L40)

#### Returns

`InteractiveGroup`

#### Overrides

`Group.constructor`

## Properties

### \_onPointerEvent

> **\_onPointerEvent**: `any`

Defined in: [three/addons/interactive/InteractiveGroup.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L74)

***

### \_onXRControllerEvent

> **\_onXRControllerEvent**: `any`

Defined in: [three/addons/interactive/InteractiveGroup.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L75)

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/interactive/InteractiveGroup.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L65)

The camera used for raycasting.

#### Default

```ts
null
```

***

### controllers

> **controllers**: `Group`[]

Defined in: [three/addons/interactive/InteractiveGroup.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L72)

An array of XR controllers.

***

### element

> **element**: `HTMLDOMElement`

Defined in: [three/addons/interactive/InteractiveGroup.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L57)

The internal raycaster.

#### Default

```ts
null
```

***

### raycaster

> **raycaster**: `Raycaster`

Defined in: [three/addons/interactive/InteractiveGroup.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L49)

The internal raycaster.

## Methods

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/interactive/InteractiveGroup.js:209](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L209)

Disconnects this interactive group from the DOM and all XR controllers.

#### Returns

`void`

***

### disconnectionPointerEvents()

> **disconnectionPointerEvents**(): `void`

Defined in: [three/addons/interactive/InteractiveGroup.js:158](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L158)

Disconnects this interactive group from all Pointer and Mouse Events.

#### Returns

`void`

***

### disconnectXrControllerEvents()

> **disconnectXrControllerEvents**(): `void`

Defined in: [three/addons/interactive/InteractiveGroup.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L193)

Disconnects this interactive group from all XR controllers.

#### Returns

`void`

***

### listenToPointerEvents()

> **listenToPointerEvents**(`renderer`, `camera`): `void`

Defined in: [three/addons/interactive/InteractiveGroup.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L140)

Calling this method makes sure the interactive group listens to Pointer and Mouse events.
The target is the `domElement` of the given renderer. The camera is required for the internal
raycasting so 3D objects can be detected based on the events.

#### Parameters

##### renderer

`any`

The renderer.

##### camera

`Camera`

The camera.

#### Returns

`void`

***

### listenToXRControllerEvents()

> **listenToXRControllerEvents**(`controller`): `void`

Defined in: [three/addons/interactive/InteractiveGroup.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L180)

Calling this method makes sure the interactive group listens to events of
the given XR controller.

#### Parameters

##### controller

`Group`

The XR controller.

#### Returns

`void`

***

### onPointerEvent()

> **onPointerEvent**(`event`): `void`

Defined in: [three/addons/interactive/InteractiveGroup.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L79)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### onXRControllerEvent()

> **onXRControllerEvent**(`event`): `void`

Defined in: [three/addons/interactive/InteractiveGroup.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/InteractiveGroup.js#L108)

#### Parameters

##### event

`any`

#### Returns

`void`

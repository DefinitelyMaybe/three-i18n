---
editUrl: false
next: false
prev: false
title: "SelectionHelper"
---

Defined in: [three/addons/interactive/SelectionHelper.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L8)

A helper for [SelectionBox](/addons/classes/selectionbox/).

It visualizes the current selection box with a `div` container element.

## Constructors

### Constructor

> **new SelectionHelper**(`renderer`, `cssClassName`): `SelectionHelper`

Defined in: [three/addons/interactive/SelectionHelper.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L16)

Constructs a new selection helper.

#### Parameters

##### renderer

`any`

The renderer.

##### cssClassName

`string`

The CSS class name of the `div`.

#### Returns

`SelectionHelper`

## Properties

### \_onPointerDown

> **\_onPointerDown**: `any`

Defined in: [three/addons/interactive/SelectionHelper.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L56)

***

### \_onPointerMove

> **\_onPointerMove**: `any`

Defined in: [three/addons/interactive/SelectionHelper.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L65)

***

### \_onPointerUp

> **\_onPointerUp**: `any`

Defined in: [three/addons/interactive/SelectionHelper.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L77)

***

### \_pointBottomRight

> **\_pointBottomRight**: `any`

Defined in: [three/addons/interactive/SelectionHelper.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L54)

***

### \_pointTopLeft

> **\_pointTopLeft**: `any`

Defined in: [three/addons/interactive/SelectionHelper.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L53)

***

### \_startPoint

> **\_startPoint**: `any`

Defined in: [three/addons/interactive/SelectionHelper.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L52)

***

### element

> **element**: `HTMLDivElement`

Defined in: [three/addons/interactive/SelectionHelper.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L23)

The visualization of the selection box.

***

### enabled

> **enabled**: `boolean`

Defined in: [three/addons/interactive/SelectionHelper.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L48)

Whether helper is enabled or not.

#### Default

```ts
true
```

***

### isDown

> **isDown**: `boolean`

Defined in: [three/addons/interactive/SelectionHelper.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L40)

Whether the mouse or pointer is pressed down.

#### Default

```ts
false
```

***

### renderer

> **renderer**: `any`

Defined in: [three/addons/interactive/SelectionHelper.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L32)

A reference to the renderer.

## Methods

### \_onSelectMove()

> **\_onSelectMove**(`event`): `void`

Defined in: [three/addons/interactive/SelectionHelper.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L124)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### \_onSelectOver()

> **\_onSelectOver**(): `void`

Defined in: [three/addons/interactive/SelectionHelper.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L140)

#### Returns

`void`

***

### \_onSelectStart()

> **\_onSelectStart**(`event`): `void`

Defined in: [three/addons/interactive/SelectionHelper.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L108)

#### Parameters

##### event

`any`

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/interactive/SelectionHelper.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionHelper.js#L96)

Call this method if you no longer want use to the controls. It frees all internal
resources and removes all event listeners.

#### Returns

`void`

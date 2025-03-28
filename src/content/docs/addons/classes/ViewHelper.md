---
editUrl: false
next: false
prev: false
title: "ViewHelper"
---

Defined in: [three/addons/helpers/ViewHelper.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L30)

A special type of helper that visualizes the camera's transformation
in a small viewport area as an axes helper. Such a helper is often wanted
in 3D modeling tools or scene editors like the [three.js editor][https://threejs.org/editor](https://threejs.org/editor).

The helper allows to click on the X, Y and Z axes which animates the camera
so it looks along the selected axis.

## Extends

- `unknown`

## Constructors

### Constructor

> **new ViewHelper**(`camera`, `domElement`?): `ViewHelper`

Defined in: [three/addons/helpers/ViewHelper.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L38)

Constructs a new view helper.

#### Parameters

##### camera

`Camera`

The camera whose transformation should be visualized.

##### domElement?

`HTMLDOMElement`

The DOM element that is used to render the view.

#### Returns

`ViewHelper`

#### Overrides

`Object3D.constructor`

## Properties

### animating

> `readonly` **animating**: `boolean`

Defined in: [three/addons/helpers/ViewHelper.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L58)

Whether the helper is currently animating or not.

#### Default

```ts
false
```

***

### center

> **center**: `Vector3`

Defined in: [three/addons/helpers/ViewHelper.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L65)

The helper's center point.

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/helpers/ViewHelper.js:286](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L286)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### handleClick

> **handleClick**: *typeof* `__function`

Defined in: [three/addons/helpers/ViewHelper.js:188](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L188)

This method should be called when a click or pointer event
has happened in the app.

#### Param

The event to process.

#### Returns

Whether an intersection with the helper has been detected or not.

***

### isViewHelper

> `readonly` **isViewHelper**: `boolean`

Defined in: [three/addons/helpers/ViewHelper.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L49)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### render()

> **render**: (`renderer`) => `void`

Defined in: [three/addons/helpers/ViewHelper.js:149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L149)

Renders the helper in a separate view in the bottom-right corner
of the viewport.

#### Parameters

##### renderer

`any`

The renderer.

#### Returns

`void`

***

### setLabels()

> **setLabels**: (`labelX`, `labelY`, `labelZ`) => `void`

Defined in: [three/addons/helpers/ViewHelper.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L228)

Sets labels for each axis. By default, they are unlabeled.

#### Parameters

##### labelX

`string`

The label for the x-axis.

##### labelY

`string`

The label for the y-axis.

##### labelZ

`string`

The label for the z-axis.

#### Returns

`void`

***

### setLabelStyle()

> **setLabelStyle**: (`font`?, `color`?, `radius`?) => `void`

Defined in: [three/addons/helpers/ViewHelper.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L245)

Sets the label style. Has no effect when the axes are unlabeled.

#### Parameters

##### font?

`string`

The label font.

##### color?

`string`

The label color.

##### radius?

`number`

The label radius.

#### Returns

`void`

***

### update

> **update**: *typeof* `__function`

Defined in: [three/addons/helpers/ViewHelper.js:261](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/ViewHelper.js#L261)

Updates the helper. This method should be called in the app's animation
loop.

#### Param

The delta time in seconds.

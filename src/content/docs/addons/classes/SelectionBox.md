---
editUrl: false
next: false
prev: false
title: "SelectionBox"
---

Defined in: [three/addons/interactive/SelectionBox.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L41)

This class can be used to select 3D objects in a scene with a selection box.
It is recommended to visualize the selected area with the help of [SelectionHelper](/addons/classes/selectionhelper/).

```js
const selectionBox = new SelectionBox( camera, scene );
const selectedObjects = selectionBox.select( startPoint, endPoint );
```

## Constructors

### Constructor

> **new SelectionBox**(`camera`, `scene`, `deep`?): `SelectionBox`

Defined in: [three/addons/interactive/SelectionBox.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L50)

Constructs a new selection box.

#### Parameters

##### camera

`Camera`

The camera the scene is rendered with.

##### scene

`Scene`

The scene.

##### deep?

`number` = `Number.MAX_VALUE`

How deep the selection frustum of perspective cameras should extend.

#### Returns

`SelectionBox`

## Properties

### camera

> **camera**: `Camera`

Defined in: [three/addons/interactive/SelectionBox.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L57)

The camera the scene is rendered with.

***

### collection

> **collection**: `Object3D`[]

Defined in: [three/addons/interactive/SelectionBox.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L85)

The selected 3D objects.

***

### deep

> **deep**: `number`

Defined in: [three/addons/interactive/SelectionBox.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L100)

How deep the selection frustum of perspective cameras should extend.

#### Default

```ts
Number.MAX_VALUE
```

***

### endPoint

> **endPoint**: `Vector3`

Defined in: [three/addons/interactive/SelectionBox.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L78)

The end point of the selection.

***

### instances

> **instances**: `any`

Defined in: [three/addons/interactive/SelectionBox.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L92)

The selected instance IDs of instanced meshes.

***

### scene

> **scene**: `Scene`

Defined in: [three/addons/interactive/SelectionBox.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L64)

The camera the scene is rendered with.

***

### startPoint

> **startPoint**: `Vector3`

Defined in: [three/addons/interactive/SelectionBox.js:71](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L71)

The start point of the selection.

## Methods

### \_searchChildInFrustum()

> **\_searchChildInFrustum**(`frustum`, `object`): `void`

Defined in: [three/addons/interactive/SelectionBox.js:238](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L238)

#### Parameters

##### frustum

`any`

##### object

`any`

#### Returns

`void`

***

### \_updateFrustum()

> **\_updateFrustum**(`startPoint`, `endPoint`): `void`

Defined in: [three/addons/interactive/SelectionBox.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L128)

#### Parameters

##### startPoint

`any`

##### endPoint

`any`

#### Returns

`void`

***

### select()

> **select**(`startPoint`?, `endPoint`?): `Object3D`[]

Defined in: [three/addons/interactive/SelectionBox.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/SelectionBox.js#L113)

This method selects 3D objects in the scene based on the given start
and end point. If no parameters are provided, the method uses the start
and end values of the respective members.

#### Parameters

##### startPoint?

`Vector3`

The start point.

##### endPoint?

`Vector3`

The end point.

#### Returns

`Object3D`[]

The selected 3D objects.

---
editUrl: false
next: false
prev: false
title: "OctreeHelper"
---

Defined in: [three/addons/helpers/OctreeHelper.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/OctreeHelper.js#L18)

A helper for visualizing an Octree.

```js
const helper = new OctreeHelper( octree );
scene.add( helper );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new OctreeHelper**(`octree`, `color`?): `OctreeHelper`

Defined in: [three/addons/helpers/OctreeHelper.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/OctreeHelper.js#L26)

Constructs a new Octree helper.

#### Parameters

##### octree

`Octree`

The octree to visualize.

##### color?

`any` = `0xffff00`

The helper's color.

#### Returns

`OctreeHelper`

#### Overrides

`LineSegments.constructor`

## Properties

### color

> **color**: `any`

Defined in: [three/addons/helpers/OctreeHelper.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/OctreeHelper.js#L42)

The helper's color.

***

### geometry

> **geometry**: `any`

Defined in: [three/addons/helpers/OctreeHelper.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/OctreeHelper.js#L90)

***

### octree

> **octree**: `Octree`

Defined in: [three/addons/helpers/OctreeHelper.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/OctreeHelper.js#L35)

The octree to visualize.

***

### type

> **type**: `string`

Defined in: [three/addons/helpers/OctreeHelper.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/OctreeHelper.js#L44)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/helpers/OctreeHelper.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/OctreeHelper.js#L99)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [three/addons/helpers/OctreeHelper.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/OctreeHelper.js#L54)

Updates the helper. This method must be called whenever the Octree's
structure is changed.

#### Returns

`void`

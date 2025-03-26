---
editUrl: false
next: false
prev: false
title: "ProgressiveLightMap"
---

Defined in: [three/addons/misc/ProgressiveLightMap.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L20)

Progressive Light Map Accumulator, by [zalo][https://github.com/zalo/](https://github.com/zalo/).

To use, simply construct a `ProgressiveLightMap` object,
`plmap.addObjectsToLightMap(object)` an array of semi-static
objects and lights to the class once, and then call
`plmap.update(camera)` every frame to begin accumulating
lighting samples.

This should begin accumulating lightmaps which apply to
your objects, so you can start jittering lighting to achieve
the texture-space effect you're looking for.

This class can only be used with WebGLRenderer.
When using WebGPURenderer, import from `ProgressiveLightMapGPU.js`.

## Constructors

### Constructor

> **new ProgressiveLightMap**(`renderer`, `res`?): `ProgressiveLightMap`

Defined in: [three/addons/misc/ProgressiveLightMap.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L28)

Constructs a new progressive light map.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.
 *

##### res?

`number` = `1024`

The side-long dimension of the total lightmap.

#### Returns

`ProgressiveLightMap`

## Properties

### blurringPlane

> **blurringPlane**: `any`

Defined in: [three/addons/misc/ProgressiveLightMap.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L52)

***

### buffer1Active

> **buffer1Active**: `boolean`

Defined in: [three/addons/misc/ProgressiveLightMap.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L49)

***

### firstUpdate

> **firstUpdate**: `boolean`

Defined in: [three/addons/misc/ProgressiveLightMap.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L50)

***

### labelMesh

> **labelMesh**: `any`

Defined in: [three/addons/misc/ProgressiveLightMap.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L51)

***

### lightMapContainers

> **lightMapContainers**: `any`[]

Defined in: [three/addons/misc/ProgressiveLightMap.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L47)

***

### progressiveLightMap1

> **progressiveLightMap1**: `any`

Defined in: [three/addons/misc/ProgressiveLightMap.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L56)

***

### progressiveLightMap2

> **progressiveLightMap2**: `any`

Defined in: [three/addons/misc/ProgressiveLightMap.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L57)

***

### renderer

> **renderer**: `WebGLRenderer`

Defined in: [three/addons/misc/ProgressiveLightMap.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L35)

The renderer.

***

### res

> **res**: `number`

Defined in: [three/addons/misc/ProgressiveLightMap.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L43)

The side-long dimension of the total lightmap.

#### Default

```ts
1024
```

***

### scene

> **scene**: `any`

Defined in: [three/addons/misc/ProgressiveLightMap.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L48)

***

### uv\_boxes

> **uv\_boxes**: `any`[]

Defined in: [three/addons/misc/ProgressiveLightMap.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L105)

***

### uvMat

> **uvMat**: `any`

Defined in: [three/addons/misc/ProgressiveLightMap.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L61)

## Methods

### addObjectsToLightMap()

> **addObjectsToLightMap**(`objects`): `void`

Defined in: [three/addons/misc/ProgressiveLightMap.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L102)

Sets these objects' materials' lightmaps and modifies their uv1's.

#### Parameters

##### objects

`Object3D`[]

An array of objects and lights to set up your lightmap.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/misc/ProgressiveLightMap.js:337](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L337)

Frees all internal resources.

#### Returns

`void`

***

### showDebugLightmap()

> **showDebugLightmap**(`visible`, `position`?): `void`

Defined in: [three/addons/misc/ProgressiveLightMap.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L246)

Draws the lightmap in the main scene. Call this after adding the objects to it.

#### Parameters

##### visible

`boolean`

Whether the debug plane should be visible

##### position?

`Vector3` = `undefined`

Where the debug plane should be drawn

#### Returns

`void`

***

### update()

> **update**(`camera`, `blendWindow`?, `blurEdges`?): `void`

Defined in: [three/addons/misc/ProgressiveLightMap.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/ProgressiveLightMap.js#L172)

This function renders each mesh one at a time into their respective surface maps.

#### Parameters

##### camera

`Camera`

The camera the scene is rendered with.

##### blendWindow?

`number` = `100`

When >1, samples will accumulate over time.

##### blurEdges?

`boolean` = `true`

Whether to fix UV Edges via blurring.

#### Returns

`void`

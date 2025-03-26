---
editUrl: false
next: false
prev: false
title: "VolumeSlice"
---

Defined in: [three/addons/misc/VolumeSlice.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L17)

This class has been made to hold a slice of a volume data.

## See

[Volume](/addons/classes/volume/)

## Constructors

### Constructor

> **new VolumeSlice**(`volume`, `index`?, `axis`?): `VolumeSlice`

Defined in: [three/addons/misc/VolumeSlice.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L26)

Constructs a new volume slice.

 *

#### Parameters

##### volume

`Volume`

The associated volume.
 *

##### index?

`number` = `0`

The index of the slice.
 *

##### axis?

For now only 'x', 'y' or 'z' but later it will change to a normal vector.

`"x"` | `"y"` | `"z"`

#### Returns

`VolumeSlice`

## Properties

### axis

> **axis**: `"x"` \| `"y"` \| `"z"`

Defined in: [three/addons/misc/VolumeSlice.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L66)

The normal axis.

***

### canvas

> **canvas**: `HTMLCanvasElement`

Defined in: [three/addons/misc/VolumeSlice.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L73)

The final canvas used for the texture.

***

### canvasBuffer

> **canvasBuffer**: `HTMLCanvasElement`

Defined in: [three/addons/misc/VolumeSlice.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L87)

The intermediary canvas used to paint the data.

***

### ctx

> **ctx**: `CanvasRenderingContext2D`

Defined in: [three/addons/misc/VolumeSlice.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L80)

The rendering context of the canvas.

***

### ctxBuffer

> **ctxBuffer**: `CanvasRenderingContext2D`

Defined in: [three/addons/misc/VolumeSlice.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L94)

The rendering context of the canvas buffer,

***

### geometry

> **geometry**: `any`

Defined in: [three/addons/misc/VolumeSlice.js:258](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L258)

***

### geometryNeedsUpdate

> **geometryNeedsUpdate**: `boolean`

Defined in: [three/addons/misc/VolumeSlice.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L120)

If set to `true`, `updateGeometry()` will be triggered at the next repaint.

#### Default

```ts
true
```

***

### iLength

> **iLength**: `number`

Defined in: [three/addons/misc/VolumeSlice.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L129)

Width of slice in the original coordinate system, corresponds to the width of the buffer canvas.

#### Default

```ts
0
```

***

### jLength

> **jLength**: `number`

Defined in: [three/addons/misc/VolumeSlice.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L137)

Height of slice in the original coordinate system, corresponds to the height of the buffer canvas.

#### Default

```ts
0
```

***

### matrix

> **matrix**: `any`

Defined in: [three/addons/misc/VolumeSlice.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L247)

***

### mesh

> **mesh**: `Mesh`

Defined in: [three/addons/misc/VolumeSlice.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L111)

The mesh ready to get used in the scene.

***

### sliceAccess

> **sliceAccess**: `Function`

Defined in: [three/addons/misc/VolumeSlice.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L145)

Function that allow the slice to access right data.

#### See

[Volume#extractPerpendicularPlane](/addons/classes/volume/#extractperpendicularplane)

***

### volume

> **volume**: `Volume`

Defined in: [three/addons/misc/VolumeSlice.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L35)

The associated volume.

## Methods

### repaint()

> **repaint**(): `void`

Defined in: [three/addons/misc/VolumeSlice.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L152)

Refresh the texture and the geometry if geometryNeedsUpdate is set to `true`.

#### Returns

`void`

***

### updateGeometry()

> **updateGeometry**(): `void`

Defined in: [three/addons/misc/VolumeSlice.js:241](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/VolumeSlice.js#L241)

Refresh the geometry according to axis and index.

#### Returns

`void`

#### See

[Volume#extractPerpendicularPlane](/addons/classes/volume/#extractperpendicularplane)

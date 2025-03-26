---
editUrl: false
next: false
prev: false
title: "Volume"
---

Defined in: [three/addons/misc/Volume.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L8)

This class had been written to handle the output of the [NRRDLoader](/addons/classes/nrrdloader/).
It contains a volume of data and information about it. For now it only handles 3 dimensional data.

## Constructors

### Constructor

> **new Volume**(`xLength`?, `yLength`?, `zLength`?, `type`?, `arrayBuffer`?): `Volume`

Defined in: [three/addons/misc/Volume.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L18)

Constructs a new volume.

#### Parameters

##### xLength?

`number`

Width of the volume.

##### yLength?

`number`

Length of the volume.

##### zLength?

`number`

Depth of the volume.

##### type?

`string`

The type of data (uint8, uint16, ...).

##### arrayBuffer?

`ArrayBuffer`

The buffer with volume data.

#### Returns

`Volume`

## Properties

### axisOrder

> **axisOrder**: `string`[]

Defined in: [three/addons/misc/Volume.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L49)

The order of the Axis dictated by the NRRD header

***

### data

> **data**: `TypedArray`

Defined in: [three/addons/misc/Volume.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L56)

The data of the volume.

***

### inverseMatrix

> **inverseMatrix**: `Martrix3`

Defined in: [three/addons/misc/Volume.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L167)

The RAS to IJK matrix.

***

### matrix

> **matrix**: `Martrix3`

Defined in: [three/addons/misc/Volume.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L159)

The IJK to RAS matrix.

***

### max

> **max**: `number`

Defined in: [three/addons/misc/Volume.js:469](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L469)

***

### min

> **min**: `number`

Defined in: [three/addons/misc/Volume.js:468](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L468)

***

### offset

> **offset**: `number`[]

Defined in: [three/addons/misc/Volume.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L152)

Offset of the volume in the RAS coordinate system

***

### RASDimensions

> **RASDimensions**: `number`[]

Defined in: [three/addons/misc/Volume.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L232)

This array holds the dimensions of the volume in the RAS space

***

### segmentation

> **segmentation**: `boolean`

Defined in: [three/addons/misc/Volume.js:225](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L225)

Whether to use segmentation mode or not.
It can load 16-bits nrrds correctly.

#### Default

```ts
false
```

***

### sliceList

> **sliceList**: `any`[]

Defined in: [three/addons/misc/Volume.js:216](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L216)

The list of all the slices associated to this volume

***

### spacing

> **spacing**: `number`[]

Defined in: [three/addons/misc/Volume.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L145)

Spacing to apply to the volume from IJK to RAS coordinate system

***

### xLength

> **xLength**: `number`

Defined in: [three/addons/misc/Volume.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L26)

Width of the volume in the IJK coordinate system.

#### Default

```ts
1
```

***

### yLength

> **yLength**: `number`

Defined in: [three/addons/misc/Volume.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L34)

Height of the volume in the IJK coordinate system.

#### Default

```ts
1
```

***

### zLength

> **zLength**: `number`

Defined in: [three/addons/misc/Volume.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L42)

Depth of the volume in the IJK coordinate system.

#### Default

```ts
1
```

## Methods

### access()

> **access**(`i`, `j`, `k`): `number`

Defined in: [three/addons/misc/Volume.js:255](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L255)

Compute the index in the data array corresponding to the given coordinates in IJK system.

#### Parameters

##### i

`number`

First coordinate.

##### j

`number`

Second coordinate.

##### k

`number`

Third coordinate.

#### Returns

`number`

The index.

***

### computeMinMax()

> **computeMinMax**(): `number`[]

Defined in: [three/addons/misc/Volume.js:451](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L451)

Compute the minimum and the maximum of the data in the volume.

#### Returns

`number`[]

The min/max data as `[min,max]`.

***

### extractPerpendicularPlane()

> **extractPerpendicularPlane**(`axis`, `RASIndex`): `any`

Defined in: [three/addons/misc/Volume.js:301](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L301)

Compute the orientation of the slice and returns all the information relative to the geometry such as sliceAccess,
the plane matrix (orientation and position in RAS coordinate) and the dimensions of the plane in both coordinate system.

#### Parameters

##### axis

The normal axis to the slice.

`"x"` | `"y"` | `"z"`

##### RASIndex

`number`

The index of the slice.

#### Returns

`any`

An object containing all the useful information on the geometry of the slice.

***

### extractSlice()

> **extractSlice**(`axis`, `index`): [`VolumeSlice`](/addons/classes/volumeslice/)

Defined in: [three/addons/misc/Volume.js:426](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L426)

Returns a slice corresponding to the given axis and index.
The coordinate are given in the Right Anterior Superior coordinate format.

#### Parameters

##### axis

The normal axis to the slice.

`"x"` | `"y"` | `"z"`

##### index

`number`

The index of the slice.

#### Returns

[`VolumeSlice`](/addons/classes/volumeslice/)

The extracted slice.

***

### getData()

> **getData**(`i`, `j`, `k`): `number`

Defined in: [three/addons/misc/Volume.js:243](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L243)

Shortcut for data[access(i,j,k)].

#### Parameters

##### i

`number`

First coordinate.

##### j

`number`

Second coordinate.

##### k

`number`

Third coordinate.

#### Returns

`number`

The value in the data array.

***

### map()

> **map**(`functionToMap`, `context`): `Volume`

Defined in: [three/addons/misc/Volume.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L282)

Apply a function to all the voxels, be careful, the value will be replaced.

#### Parameters

##### functionToMap

`Function`

A function to apply to every voxel, will be called with the following parameters:
value of the voxel, index of the voxel, the data (TypedArray).

##### context

`any`

You can specify a context in which call the function, default if this Volume.

#### Returns

`Volume`

A reference to this instance.

***

### repaintAllSlices()

> **repaintAllSlices**(): `Volume`

Defined in: [three/addons/misc/Volume.js:438](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L438)

Call repaint on all the slices extracted from this volume.

#### Returns

`Volume`

A reference to this volume.

#### See

[VolumeSlice#repaint](/addons/classes/volumeslice/#repaint)

***

### reverseAccess()

> **reverseAccess**(`index`): `number`[]

Defined in: [three/addons/misc/Volume.js:265](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Volume.js#L265)

Retrieve the IJK coordinates of the voxel corresponding of the given index in the data.

#### Parameters

##### index

`number`

Index of the voxel.

#### Returns

`number`[]

The IJK coordinates as `[x,y,z]`.

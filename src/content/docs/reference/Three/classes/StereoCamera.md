---
editUrl: false
next: false
prev: false
title: "StereoCamera"
---

Defined in: [three/src/cameras/StereoCamera.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L15)

A special type of camera that uses two perspective cameras with
stereoscopic projection. Can be used for rendering stereo effects
like [3D Anaglyph][https://en.wikipedia.org/wiki/Anaglyph\_3D](https://en.wikipedia.org/wiki/Anaglyph_3D) or
[Parallax Barrier][https://en.wikipedia.org/wiki/parallax\_barrier](https://en.wikipedia.org/wiki/parallax_barrier).

## Constructors

### Constructor

> **new StereoCamera**(): `StereoCamera`

Defined in: [three/src/cameras/StereoCamera.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L20)

Constructs a new stereo camera.

#### Returns

`StereoCamera`

## Properties

### \_cache

> **\_cache**: `object`

Defined in: [three/src/cameras/StereoCamera.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L68)

#### aspect

> **aspect**: `any` = `null`

#### eyeSep

> **eyeSep**: `any` = `null`

#### far

> **far**: `any` = `null`

#### focus

> **focus**: `any` = `null`

#### fov

> **fov**: `any` = `null`

#### near

> **near**: `any` = `null`

#### zoom

> **zoom**: `any` = `null`

***

### aspect

> **aspect**: `number`

Defined in: [three/src/cameras/StereoCamera.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L37)

The aspect.

#### Default

```ts
1
```

***

### cameraL

> **cameraL**: [`PerspectiveCamera`](/reference/three/classes/perspectivecamera/)

Defined in: [three/src/cameras/StereoCamera.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L54)

The camera representing the left eye. This is added to layer `1` so objects to be
rendered by the left camera must also be added to this layer.

***

### cameraR

> **cameraR**: [`PerspectiveCamera`](/reference/three/classes/perspectivecamera/)

Defined in: [three/src/cameras/StereoCamera.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L64)

The camera representing the right eye. This is added to layer `2` so objects to be
rendered by the right camera must also be added to this layer.

***

### eyeSep

> **eyeSep**: `number`

Defined in: [three/src/cameras/StereoCamera.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L46)

The eye separation which represents the distance
between the left and right camera.

#### Default

```ts
0.064
```

***

### type

> `readonly` **type**: `string`

Defined in: [three/src/cameras/StereoCamera.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L29)

The type property is used for detecting the object type
in context of serialization/deserialization.

## Methods

### update()

> **update**(`camera`): `void`

Defined in: [three/src/cameras/StereoCamera.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/cameras/StereoCamera.js#L85)

Updates the stereo camera based on the given perspective camera.

#### Parameters

##### camera

[`PerspectiveCamera`](/reference/three/classes/perspectivecamera/)

The perspective camera.

#### Returns

`void`

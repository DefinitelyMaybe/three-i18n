---
editUrl: false
next: false
prev: false
title: "RectAreaLightHelper"
---

Defined in: [three/addons/helpers/RectAreaLightHelper.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/RectAreaLightHelper.js#L24)

Creates a visual aid for rect area lights.

`RectAreaLightHelper` must be added as a child of the light.

```js
const light = new THREE.RectAreaLight( 0xffffbb, 1.0, 5, 5 );
const helper = new RectAreaLightHelper( light );
light.add( helper );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new RectAreaLightHelper**(`light`, `color`?): `RectAreaLightHelper`

Defined in: [three/addons/helpers/RectAreaLightHelper.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/RectAreaLightHelper.js#L33)

Constructs a new rect area light helper.

#### Parameters

##### light

`RectAreaLight`

The light to visualize.

##### color?

`any`

The helper's color.
If this is not the set, the helper will take the color of the light.

#### Returns

`RectAreaLightHelper`

#### Overrides

`Line.constructor`

## Properties

### color

> **color**: `any`

Defined in: [three/addons/helpers/RectAreaLightHelper.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/RectAreaLightHelper.js#L57)

The helper's color. If `undefined`, the helper will take the color of the light.

***

### light

> **light**: `RectAreaLight`

Defined in: [three/addons/helpers/RectAreaLightHelper.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/RectAreaLightHelper.js#L50)

The light to visualize.

***

### type

> **type**: `string`

Defined in: [three/addons/helpers/RectAreaLightHelper.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/RectAreaLightHelper.js#L59)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/helpers/RectAreaLightHelper.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/RectAreaLightHelper.js#L106)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### updateMatrixWorld()

> **updateMatrixWorld**(): `void`

Defined in: [three/addons/helpers/RectAreaLightHelper.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/RectAreaLightHelper.js#L73)

#### Returns

`void`

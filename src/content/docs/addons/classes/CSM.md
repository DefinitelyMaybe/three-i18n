---
editUrl: false
next: false
prev: false
title: "CSM"
---

Defined in: [three/addons/csm/CSM.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L29)

An implementation of Cascade Shadow Maps (CSM).

This module can only be used with WebGLRenderer. When using WebGPURenderer,
use CSMShadowNode instead.

## Constructors

### Constructor

> **new CSM**(`data`): `CSM`

Defined in: [three/addons/csm/CSM.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L36)

Constructs a new CSM instance.

#### Parameters

##### data

`any`

The CSM data.

#### Returns

`CSM`

## Properties

### breaks

> **breaks**: `number`[]

Defined in: [three/addons/csm/CSM.js:166](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L166)

An array of numbers in the range `[0,1]` the defines how the
mainCSM frustum should be split up.

***

### camera

> **camera**: `Camera`

Defined in: [three/addons/csm/CSM.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L43)

The scene's camera.

***

### cascades

> **cascades**: `number`

Defined in: [three/addons/csm/CSM.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L58)

The number of cascades.

#### Default

```ts
3
```

***

### customSplitsCallback

> **customSplitsCallback**: `Function`

Defined in: [three/addons/csm/CSM.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L136)

Custom split callback when using `mode='custom'`.

***

### fade

> **fade**: `boolean`

Defined in: [three/addons/csm/CSM.js:144](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L144)

Whether to fade between cascades or not.

#### Default

```ts
false
```

***

### frustums

> **frustums**: [`CSMFrustum`](/addons/classes/csmfrustum/)[]

Defined in: [three/addons/csm/CSM.js:158](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L158)

An array of frustums representing the cascades.

***

### lightDirection

> **lightDirection**: `Vector3`

Defined in: [three/addons/csm/CSM.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L97)

The light direction.

***

### lightFar

> **lightFar**: `number`

Defined in: [three/addons/csm/CSM.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L121)

The light far value.

#### Default

```ts
2000
```

***

### lightIntensity

> **lightIntensity**: `number`

Defined in: [three/addons/csm/CSM.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L105)

The light intensity.

#### Default

```ts
3
```

***

### lightMargin

> **lightMargin**: `number`

Defined in: [three/addons/csm/CSM.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L129)

The light margin.

#### Default

```ts
200
```

***

### lightNear

> **lightNear**: `number`

Defined in: [three/addons/csm/CSM.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L113)

The light near value.

#### Default

```ts
1
```

***

### lights

> **lights**: `DirectionalLight`[]

Defined in: [three/addons/csm/CSM.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L175)

An array of directional lights which cast the shadows for
the different cascades. There is one directional light for each
cascade.

***

### mainFrustum

> **mainFrustum**: [`CSMFrustum`](/addons/classes/csmfrustum/)

Defined in: [three/addons/csm/CSM.js:151](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L151)

The main frustum.

***

### maxFar

> **maxFar**: `number`

Defined in: [three/addons/csm/CSM.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L66)

The maximum far value.

#### Default

```ts
100000
```

***

### mode

> **mode**: `"practical"` \| `"uniform"` \| `"logarithmic"` \| `"custom"`

Defined in: [three/addons/csm/CSM.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L74)

The frustum split mode.

#### Default

```ts
'practical'
```

***

### parent

> **parent**: `Object3D`

Defined in: [three/addons/csm/CSM.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L50)

The parent object, usually the scene.

***

### shaders

> **shaders**: `Map`\<`Material`, `any`\>

Defined in: [three/addons/csm/CSM.js:182](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L182)

A Map holding enhanced material shaders.

***

### shadowBias

> **shadowBias**: `number`

Defined in: [three/addons/csm/CSM.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L90)

The shadow bias.

#### Default

```ts
0.000001
```

***

### shadowMapSize

> **shadowMapSize**: `number`

Defined in: [three/addons/csm/CSM.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L82)

The shadow map size.

#### Default

```ts
2048
```

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/csm/CSM.js:551](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L551)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### remove()

> **remove**(): `void`

Defined in: [three/addons/csm/CSM.js:536](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L536)

Applications must call this method when they remove the CSM usage from their scene.

#### Returns

`void`

***

### setupMaterial()

> **setupMaterial**(`material`): `void`

Defined in: [three/addons/csm/CSM.js:424](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L424)

Applications must call this method for all materials that should be affected by CSM.

#### Parameters

##### material

`Material`

The material to setup for CSM support.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [three/addons/csm/CSM.js:361](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L361)

Updates the CSM. This method must be called in your animation loop before
calling `renderer.render()`.

#### Returns

`void`

***

### updateFrustums()

> **updateFrustums**(): `void`

Defined in: [three/addons/csm/CSM.js:524](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSM.js#L524)

Applications must call this method every time they change camera or CSM settings.

#### Returns

`void`

---
editUrl: false
next: false
prev: false
title: "XREstimatedLight"
---

Defined in: [three/addons/webxr/XREstimatedLight.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XREstimatedLight.js#L142)

This class can be used to represent the environmental light of
a XR session. It relies on the WebXR Lighting Estimation API.

## Extends

- `unknown`

## Constructors

### Constructor

> **new XREstimatedLight**(`renderer`, `environmentEstimation`?): `XREstimatedLight`

Defined in: [three/addons/webxr/XREstimatedLight.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XREstimatedLight.js#L150)

Constructs a new light.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

##### environmentEstimation?

`boolean` = `true`

Whether to use environment estimation or not.

#### Returns

`XREstimatedLight`

#### Overrides

`Group.constructor`

## Properties

### directionalLight

> **directionalLight**: `DirectionalLight`

Defined in: [three/addons/webxr/XREstimatedLight.js:168](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XREstimatedLight.js#L168)

Represents the primary light from the XR environment.

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/webxr/XREstimatedLight.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XREstimatedLight.js#L232)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### environment

> **environment**: `Texture`

Defined in: [three/addons/webxr/XREstimatedLight.js:179](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XREstimatedLight.js#L179)

Will be set to a cube map in the SessionLightProbe if environment estimation is
available and requested.

#### Default

```ts
null
```

***

### lightProbe

> **lightProbe**: `LightProbe`

Defined in: [three/addons/webxr/XREstimatedLight.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XREstimatedLight.js#L159)

The light probe that represents the estimated light.

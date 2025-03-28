---
editUrl: false
next: false
prev: false
title: "XRPlanes"
---

Defined in: [three/addons/webxr/XRPlanes.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRPlanes.js#L21)

A utility class for the WebXR Plane Detection Module. If planes
are detected by WebXR, this class will automatically add them
as thin box meshes to the scene when below code snippet is used.

```js
const planes = new XRPlanes( renderer );
scene.add( planes );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new XRPlanes**(`renderer`): `XRPlanes`

Defined in: [three/addons/webxr/XRPlanes.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRPlanes.js#L28)

Constructs a new XR plane container.

#### Parameters

##### renderer

`any`

The renderer.

#### Returns

`XRPlanes`

#### Overrides

`Object3D.constructor`

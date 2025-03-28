---
editUrl: false
next: false
prev: false
title: "GroundedSkybox"
---

Defined in: [three/addons/objects/GroundedSkybox.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/GroundedSkybox.js#L19)

A ground-projected skybox.

By default the object is centered at the camera, so it is often helpful to set
`skybox.position.y = height` to put the ground at the origin.

```js
const height = 15, radius = 100;

const skybox = new GroundedSkybox( envMap, height, radius );
skybox.position.y = height;
scene.add( skybox );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new GroundedSkybox**(`map`, `height`, `radius`, `resolution`?): `GroundedSkybox`

Defined in: [three/addons/objects/GroundedSkybox.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/GroundedSkybox.js#L30)

Constructs a new ground-projected skybox.

#### Parameters

##### map

`Texture`

The environment map to use.

##### height

`number`

The height is how far the camera that took the photo was above the ground.
A larger value will magnify the downward part of the image.

##### radius

`number`

The radius of the skybox. Must be large enough to ensure the scene's camera stays inside.

##### resolution?

`number` = `128`

The geometry resolution of the skybox.

#### Returns

`GroundedSkybox`

#### Overrides

`Mesh.constructor`

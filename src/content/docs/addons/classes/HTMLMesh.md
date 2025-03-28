---
editUrl: false
next: false
prev: false
title: "HTMLMesh"
---

Defined in: [three/addons/interactive/HTMLMesh.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/HTMLMesh.js#L27)

This class can be used to render a DOM element onto a canvas and use it as a texture
for a plane mesh.

A typical use case for this class is to render the GUI of `lil-gui` as a texture so it
is compatible for VR.

```js
const gui = new GUI( { width: 300 } ); // create lil-gui instance

const mesh = new HTMLMesh( gui.domElement );
scene.add( mesh );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new HTMLMesh**(`dom`): `HTMLMesh`

Defined in: [three/addons/interactive/HTMLMesh.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/HTMLMesh.js#L34)

Constructs a new HTML mesh.

#### Parameters

##### dom

`HTMLElement`

The DOM element to display as a plane mesh.

#### Returns

`HTMLMesh`

#### Overrides

`Mesh.constructor`

## Properties

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/interactive/HTMLMesh.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/interactive/HTMLMesh.js#L58)

Frees the GPU-related resources allocated by this instance and removes all event listeners.
Call this method whenever this instance is no longer used in your app.

#### Returns

`void`

---
editUrl: false
next: false
prev: false
title: "OutlineEffect"
---

Defined in: [three/addons/effects/OutlineEffect.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/OutlineEffect.js#L25)

An outline effect for toon shaders.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use ToonOutlinePassNode.

```js
const effect = new OutlineEffect( renderer );

function render() {

	effect.render( scene, camera );

}
```

## Constructors

### Constructor

> **new OutlineEffect**(`renderer`, `parameters`): `OutlineEffect`

Defined in: [three/addons/effects/OutlineEffect.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/OutlineEffect.js#L33)

Constructs a new outline effect.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

##### parameters

The configuration parameter.

#### Returns

`OutlineEffect`

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [three/addons/effects/OutlineEffect.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/OutlineEffect.js#L35)

***

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/addons/effects/OutlineEffect.js:389](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/OutlineEffect.js#L389)

When using this effect, this method should be called instead of the
default WebGLRenderer#render.

#### Parameters

##### scene

`Object3D`

The scene to render.

##### camera

`Camera`

The camera.

#### Returns

`void`

***

### renderOutline()

> **renderOutline**: (`scene`, `camera`) => `void`

Defined in: [three/addons/effects/OutlineEffect.js:433](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/OutlineEffect.js#L433)

This method can be used to render outlines in VR.

```js
const effect = new OutlineEffect( renderer );
let renderingOutline = false;

scene.onAfterRender = function () {

	if ( renderingOutline ) return;

	renderingOutline = true;
	effect.renderOutline( scene, camera );
	renderingOutline = false;
};

function render() {
	renderer.render( scene, camera );
}
```

#### Parameters

##### scene

`Object3D`

The scene to render.

##### camera

`Camera`

The camera.

#### Returns

`void`

***

### setSize()

> **setSize**: (`width`, `height`) => `void`

Defined in: [three/addons/effects/OutlineEffect.js:466](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/effects/OutlineEffect.js#L466)

Resizes the effect.

#### Parameters

##### width

`number`

The width of the effect in logical pixels.

##### height

`number`

The height of the effect in logical pixels.

#### Returns

`void`

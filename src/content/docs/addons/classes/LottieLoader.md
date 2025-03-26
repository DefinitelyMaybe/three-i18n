---
editUrl: false
next: false
prev: false
title: "LottieLoader"
---

Defined in: [three/addons/loaders/LottieLoader.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LottieLoader.js#L33)

A loader for the Lottie texture animation format.

The loader returns an instance of CanvasTexture to represent
the animated texture. Two additional properties are added to each texture:
- `animation`: The return value of `lottie.loadAnimation()` which is an object
with an API for controlling the animation's playback.
- `image`: The image container.

```js
const loader = new LottieLoader();
loader.setQuality( 2 );
const texture = await loader.loadAsync( 'textures/lottie/24017-lottie-logo-animation.json' );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { map: texture } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new LottieLoader**(): `LottieLoader`

#### Returns

`LottieLoader`

#### Inherited from

`Loader.constructor`

## Properties

### \_quality

> **\_quality**: `number`

Defined in: [three/addons/loaders/LottieLoader.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LottieLoader.js#L42)

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `CanvasTexture`

Defined in: [three/addons/loaders/LottieLoader.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LottieLoader.js#L56)

Starts loading from the given URL and passes the loaded Lottie asset
to the `onLoad()` callback.

#### Parameters

##### url

`string`

The path/URL of the file to be loaded. This can also be a data URI.

##### onLoad

(`arg0`) => `any`

Executed when the loading process has been finished.

##### onProgress

`onProgressCallback`

Executed while the loading is in progress.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`CanvasTexture`

The Lottie texture.

***

### setQuality()

> **setQuality**(`value`): `void`

Defined in: [three/addons/loaders/LottieLoader.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LottieLoader.js#L40)

Sets the texture quality.

#### Parameters

##### value

`number`

The texture quality.

#### Returns

`void`

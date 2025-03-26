---
editUrl: false
next: false
prev: false
title: "VOXLoader"
---

Defined in: [three/addons/loaders/VOXLoader.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VOXLoader.js#L34)

A loader for the VOX format.

```js
const loader = new VOXLoader();
const chunks = await loader.loadAsync( 'models/vox/monu10.vox' );

for ( let i = 0; i < chunks.length; i ++ ) {

	const chunk = chunks[ i ];
	const mesh = new VOXMesh( chunk );
	mesh.scale.setScalar( 0.0015 );
	scene.add( mesh );

}
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new VOXLoader**(): `VOXLoader`

#### Returns

`VOXLoader`

#### Inherited from

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/VOXLoader.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VOXLoader.js#L45)

Starts loading from the given URL and passes the loaded VOX asset
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

`void`

***

### parse()

> **parse**(`buffer`): `any`[]

Defined in: [three/addons/loaders/VOXLoader.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/VOXLoader.js#L85)

Parses the given VOX data and returns the resulting chunks.

#### Parameters

##### buffer

`ArrayBuffer`

The raw VOX data as an array buffer.

#### Returns

`any`[]

The parsed chunks.

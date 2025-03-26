---
editUrl: false
next: false
prev: false
title: "XYZLoader"
---

Defined in: [three/addons/loaders/XYZLoader.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/XYZLoader.js#L30)

A loader for the XYZ format.

XYZ is a very simple format for storing point clouds. The layouts
`XYZ` (points) and `XYZRGB` (points + colors) are supported.

```js
const loader = new XYZLoader();
const geometry = await loader.loadAsync( 'models/xyz/helix_201.xyz' );
geometry.center();

const vertexColors = ( geometry.hasAttribute( 'color' ) === true );
const material = new THREE.PointsMaterial( { size: 0.1, vertexColors: vertexColors } );

const points = new THREE.Points( geometry, material );
scene.add( points );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new XYZLoader**(): `XYZLoader`

#### Returns

`XYZLoader`

#### Inherited from

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/XYZLoader.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/XYZLoader.js#L41)

Starts loading from the given URL and passes the loaded XYZ asset
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

> **parse**(`text`): `BufferGeometry`

Defined in: [three/addons/loaders/XYZLoader.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/XYZLoader.js#L81)

Parses the given XYZ data and returns the resulting geometry.

#### Parameters

##### text

`string`

The raw XYZ data as a string.

#### Returns

`BufferGeometry`

The geometry representing the point cloud.

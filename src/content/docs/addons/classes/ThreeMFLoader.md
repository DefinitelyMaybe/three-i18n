---
editUrl: false
next: false
prev: false
title: "ThreeMFLoader"
---

Defined in: [three/addons/loaders/3MFLoader.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3MFLoader.js#L52)

A loader for the [3D Manufacturing Format (3MF)][https://3mf.io/specification/](https://3mf.io/specification/) format.

The following features from the core specification are supported:

- 3D Models
- Object Resources (Meshes and Components)
- Material Resources (Base Materials)

3MF Materials and Properties Extension are only partially supported.

- Texture 2D
- Texture 2D Groups
- Color Groups (Vertex Colors)
- Metallic Display Properties (PBR)

```js
const loader = new ThreeMFLoader();

const object = await loader.loadAsync( './models/3mf/truck.3mf' );
object.rotation.set( - Math.PI / 2, 0, 0 ); // z-up conversion
scene.add( object );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new ThreeMFLoader**(`manager`?): `ThreeMFLoader`

Defined in: [three/addons/loaders/3MFLoader.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3MFLoader.js#L59)

Constructs a new 3MF loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`ThreeMFLoader`

#### Overrides

`Loader.constructor`

## Properties

### availableExtensions

> **availableExtensions**: `any`[]

Defined in: [three/addons/loaders/3MFLoader.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3MFLoader.js#L68)

An array of available extensions.

## Methods

### addExtension()

> **addExtension**(`extension`): `void`

Defined in: [three/addons/loaders/3MFLoader.js:1612](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3MFLoader.js#L1612)

Adds a 3MF extension.

#### Parameters

##### extension

`any`

The extension to add.

#### Returns

`void`

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/3MFLoader.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3MFLoader.js#L81)

Starts loading from the given URL and passes the loaded 3MF asset
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

> **parse**(`data`): `Group`

Defined in: [three/addons/loaders/3MFLoader.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/3MFLoader.js#L121)

Parses the given 3MF data and returns the resulting group.

#### Parameters

##### data

`ArrayBuffer`

The raw 3MF asset data as an array buffer.

#### Returns

`Group`

A group representing the parsed asset.

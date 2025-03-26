---
editUrl: false
next: false
prev: false
title: "TDSLoader"
---

Defined in: [three/addons/loaders/TDSLoader.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TDSLoader.js#L30)

A loader for the 3DS format, based on lib3ds.

Loads geometry with uv and materials basic properties with texture support.

```js
const loader = new TDSLoader();
loader.setResourcePath( 'models/3ds/portalgun/textures/' );
const object = await loader.loadAsync( 'models/3ds/portalgun/portalgun.3ds' );
scene.add( object );

@augments Loader

## Extends

- `unknown`

## Constructors

### Constructor

> **new TDSLoader**(`manager`?): `TDSLoader`

Defined in: [three/addons/loaders/TDSLoader.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TDSLoader.js#L37)

Constructs a new 3DS loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`TDSLoader`

#### Overrides

`Loader.constructor`

## Properties

### debug

> **debug**: `boolean`

Defined in: [three/addons/loaders/TDSLoader.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TDSLoader.js#L47)

Whether debug mode should be enabled or not.

#### Default

```ts
false
```

***

### group

> **group**: `any`

Defined in: [three/addons/loaders/TDSLoader.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TDSLoader.js#L51)

***

### materials

> **materials**: `any`[]

Defined in: [three/addons/loaders/TDSLoader.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TDSLoader.js#L53)

***

### meshes

> **meshes**: `any`[]

Defined in: [three/addons/loaders/TDSLoader.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TDSLoader.js#L54)

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/TDSLoader.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TDSLoader.js#L67)

Starts loading from the given URL and passes the loaded 3DS asset
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

> **parse**(`arraybuffer`, `path`): `Group`

Defined in: [three/addons/loaders/TDSLoader.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TDSLoader.js#L112)

Parses the given 3DS data and returns the resulting data.

#### Parameters

##### arraybuffer

`ArrayBuffer`

The raw 3DS data as an array buffer.

##### path

`string`

The asset path.

#### Returns

`Group`

The parsed asset represented as a group.

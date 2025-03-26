---
editUrl: false
next: false
prev: false
title: "TTFLoader"
---

Defined in: [three/addons/loaders/TTFLoader.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TTFLoader.js#L21)

A loader for the TTF format.

Loads TTF files and converts them into typeface JSON that can be used directly
to create THREE.Font objects.

```js
const loader = new TTFLoader();
const json = await loader.loadAsync( 'fonts/ttf/kenpixel.ttf' );
const font = new Font( json );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new TTFLoader**(`manager`?): `TTFLoader`

Defined in: [three/addons/loaders/TTFLoader.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TTFLoader.js#L28)

Constructs a new TTF loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`TTFLoader`

#### Overrides

`Loader.constructor`

## Properties

### reversed

> **reversed**: `boolean`

Defined in: [three/addons/loaders/TTFLoader.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TTFLoader.js#L38)

Whether the TTF commands should be reversed or not.

#### Default

```ts
false
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/TTFLoader.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TTFLoader.js#L51)

Starts loading from the given URL and passes the loaded TTF asset
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

> **parse**(`arraybuffer`): `any`

Defined in: [three/addons/loaders/TTFLoader.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/TTFLoader.js#L92)

Parses the given TTF data and returns a JSON for creating a font.

#### Parameters

##### arraybuffer

`ArrayBuffer`

The raw TTF data as an array buffer.

#### Returns

`any`

The result JSON.

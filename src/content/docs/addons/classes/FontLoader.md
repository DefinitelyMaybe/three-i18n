---
editUrl: false
next: false
prev: false
title: "FontLoader"
---

Defined in: [three/addons/loaders/FontLoader.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L19)

A loader for loading fonts.

You can convert fonts online using [facetype.js][https://gero3.github.io/facetype.js/](https://gero3.github.io/facetype.js/).

```js
const loader = new FontLoader();
const font = await loader.loadAsync( 'fonts/helvetiker_regular.typeface.json' );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new FontLoader**(`manager`?): `FontLoader`

Defined in: [three/addons/loaders/FontLoader.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L26)

Constructs a new font loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`FontLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/FontLoader.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L41)

Starts loading from the given URL and passes the loaded font
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

> **parse**(`json`): [`Font`](/addons/classes/font/)

Defined in: [three/addons/loaders/FontLoader.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/FontLoader.js#L65)

Parses the given font data and returns the resulting font.

#### Parameters

##### json

`any`

The raw font data as a JSON object.

#### Returns

[`Font`](/addons/classes/font/)

The font.

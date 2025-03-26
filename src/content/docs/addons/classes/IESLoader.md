---
editUrl: false
next: false
prev: false
title: "IESLoader"
---

Defined in: [three/addons/loaders/IESLoader.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/IESLoader.js#L29)

A loader for the IES format.

The loaded texture should be assigned to IESSpotLight#map.

```js
const loader = new IESLoader();
const texture = await loader.loadAsync( 'ies/007cfb11e343e2f42e3b476be4ab684e.ies' );

const spotLight = new THREE.IESSpotLight( 0xff0000, 500 );
spotLight.iesMap = texture;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new IESLoader**(`manager`?): `IESLoader`

Defined in: [three/addons/loaders/IESLoader.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/IESLoader.js#L36)

Constructs a new IES loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`IESLoader`

#### Overrides

`Loader.constructor`

## Properties

### type

> **type**: `any`

Defined in: [three/addons/loaders/IESLoader.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/IESLoader.js#L46)

The texture type.

#### Default

```ts
HalfFloatType
```

## Methods

### \_getIESValues()

> **\_getIESValues**(`iesLamp`, `type`): `Float32Array`\<`ArrayBuffer`\> \| `Uint16Array`\<`ArrayBuffer`\> \| `Uint8Array`\<`ArrayBuffer`\>

Defined in: [three/addons/loaders/IESLoader.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/IESLoader.js#L50)

#### Parameters

##### iesLamp

`any`

##### type

`any`

#### Returns

`Float32Array`\<`ArrayBuffer`\> \| `Uint16Array`\<`ArrayBuffer`\> \| `Uint8Array`\<`ArrayBuffer`\>

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/IESLoader.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/IESLoader.js#L150)

Starts loading from the given URL and passes the loaded IES texture
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

> **parse**(`text`): `DataTexture`

Defined in: [three/addons/loaders/IESLoader.js:173](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/IESLoader.js#L173)

Parses the given IES data.

#### Parameters

##### text

`string`

The raw IES data.

#### Returns

`DataTexture`

THE IES data as a texture.

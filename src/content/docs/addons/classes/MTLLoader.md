---
editUrl: false
next: false
prev: false
title: "MTLLoader"
---

Defined in: [three/addons/loaders/MTLLoader.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MTLLoader.js#L33)

A loader for the MTL format.

The Material Template Library format (MTL) or .MTL File Format is a companion file format
to OBJ that describes surface shading (material) properties of objects within one or more
OBJ files.

```js
const loader = new MTLLoader();
const materials = await loader.loadAsync( 'models/obj/male02/male02.mtl' );

const objLoader = new OBJLoader();
objLoader.setMaterials( materials );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new MTLLoader**(`manager`): `MTLLoader`

Defined in: [three/addons/loaders/MTLLoader.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MTLLoader.js#L35)

#### Parameters

##### manager

`any`

#### Returns

`MTLLoader`

#### Overrides

`Loader.constructor`

## Properties

### materialOptions

> **materialOptions**: `any`

Defined in: [three/addons/loaders/MTLLoader.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MTLLoader.js#L94)

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/MTLLoader.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MTLLoader.js#L50)

Starts loading from the given URL and passes the loaded MTL asset
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

> **parse**(`text`, `path`): `MaterialCreator`

Defined in: [three/addons/loaders/MTLLoader.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MTLLoader.js#L106)

Parses the given MTL data and returns the resulting material creator.

#### Parameters

##### text

`string`

The raw MTL data as a string.

##### path

`string`

The URL base path.

#### Returns

`MaterialCreator`

The material creator.

***

### setMaterialOptions()

> **setMaterialOptions**(`value`): `MTLLoader`

Defined in: [three/addons/loaders/MTLLoader.js:92](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/MTLLoader.js#L92)

Sets the material options.

#### Parameters

##### value

`any`

The material options.

#### Returns

`MTLLoader`

A reference to this loader.

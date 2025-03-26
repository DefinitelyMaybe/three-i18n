---
editUrl: false
next: false
prev: false
title: "OBJLoader"
---

Defined in: [three/addons/loaders/OBJLoader.js:452](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/OBJLoader.js#L452)

A loader for the OBJ format.

The [OBJ format][https://en.wikipedia.org/wiki/Wavefront\_.obj\_file](https://en.wikipedia.org/wiki/Wavefront_.obj_file) is a simple data-format that
represents 3D geometry in a human readable format as the position of each vertex, the UV position of
each texture coordinate vertex, vertex normals, and the faces that make each polygon defined as a list
of vertices, and texture vertices.

```js
const loader = new OBJLoader();
const object = await loader.loadAsync( 'models/monster.obj' );
scene.add( object );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new OBJLoader**(`manager`?): `OBJLoader`

Defined in: [three/addons/loaders/OBJLoader.js:459](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/OBJLoader.js#L459)

Constructs a new OBJ loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`OBJLoader`

#### Overrides

`Loader.constructor`

## Properties

### materials

> **materials**: `MaterialCreator`

Defined in: [three/addons/loaders/OBJLoader.js:469](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/OBJLoader.js#L469)

A reference to a material creator.

#### Default

```ts
null
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/OBJLoader.js:482](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/OBJLoader.js#L482)

Starts loading from the given URL and passes the loaded OBJ asset
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

> **parse**(`text`): `Group`

Defined in: [three/addons/loaders/OBJLoader.js:536](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/OBJLoader.js#L536)

Parses the given OBJ data and returns the resulting group.

#### Parameters

##### text

`string`

The raw OBJ data as a string.

#### Returns

`Group`

The parsed OBJ.

***

### setMaterials()

> **setMaterials**(`materials`): `OBJLoader`

Defined in: [three/addons/loaders/OBJLoader.js:522](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/OBJLoader.js#L522)

Sets the material creator for this OBJ. This object is loaded via [MTLLoader](/addons/classes/mtlloader/).

#### Parameters

##### materials

`MaterialCreator`

An object that creates the materials for this OBJ.

#### Returns

`OBJLoader`

A reference to this loader.

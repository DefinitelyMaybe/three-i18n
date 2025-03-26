---
editUrl: false
next: false
prev: false
title: "PDBLoader"
---

Defined in: [three/addons/loaders/PDBLoader.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PDBLoader.js#L27)

A loader for the PDB format.

The [Protein Data Bank][https://en.wikipedia.org/wiki/Protein\_Data\_Bank\_(file\_format)](https://en.wikipedia.org/wiki/Protein_Data_Bank_(file_format))
file format is a textual file describing the three-dimensional structures of molecules.

```js
const loader = new PDBLoader();
const pdb = await loader.loadAsync( 'models/pdb/ethanol.pdb' );

const geometryAtoms = pdb.geometryAtoms;
const geometryBonds = pdb.geometryBonds;
const json = pdb.json;
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new PDBLoader**(`manager`?): `PDBLoader`

Defined in: [three/addons/loaders/PDBLoader.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PDBLoader.js#L34)

Constructs a new PDB loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`PDBLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/PDBLoader.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PDBLoader.js#L49)

Starts loading from the given URL and passes the loaded PDB asset
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

> **parse**(`text`): `any`

Defined in: [three/addons/loaders/PDBLoader.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PDBLoader.js#L90)

Parses the given PDB data and returns an object holding the atoms and
bond geometries as well as the raw atom data as JSON.

#### Parameters

##### text

`string`

The raw PDB data as a string.

#### Returns

`any`

The result object.

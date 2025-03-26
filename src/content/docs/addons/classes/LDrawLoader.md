---
editUrl: false
next: false
prev: false
title: "LDrawLoader"
---

Defined in: [three/addons/loaders/LDrawLoader.js:1780](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1780)

A loader for the LDraw format.

[LDraw][https://ldraw.org/](https://ldraw.org/) (LEGO Draw) is an [open format specification][https://ldraw.org/article/218.html](https://ldraw.org/article/218.html)
for describing LEGO and other construction set 3D models.

An LDraw asset (a text file usually with extension .ldr, .dat or .txt) can describe just a single construction
piece, or an entire model. In the case of a model the LDraw file can reference other LDraw files, which are
loaded from a library path set with `setPartsLibraryPath`. You usually download the LDraw official parts library,
extract to a folder and point setPartsLibraryPath to it.

Library parts will be loaded by trial and error in subfolders 'parts', 'p' and 'models'. These file accesses
are not optimal for web environment, so a script tool has been made to pack an LDraw file with all its dependencies
into a single file, which loads much faster. See section 'Packing LDraw models'. The LDrawLoader example loads
several packed files. The official parts library is not included due to its large size.

`LDrawLoader` supports the following extensions:
- !COLOUR: Color and surface finish declarations.
- BFC: Back Face Culling specification.
- !CATEGORY: Model/part category declarations.
- !KEYWORDS: Model/part keywords declarations.

```js
const loader = new LDrawLoader();
loader.setConditionalLineMaterial( LDrawConditionalLineMaterial ); // the type of line material depends on the used renderer
const object = await loader.loadAsync( 'models/ldraw/officialLibrary/models/car.ldr_Packed.mpd' );
scene.add( object );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new LDrawLoader**(`manager`?): `LDrawLoader`

Defined in: [three/addons/loaders/LDrawLoader.js:1787](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1787)

Constructs a new LDraw loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`LDrawLoader`

#### Overrides

`Loader.constructor`

## Properties

### conditionalEdgeMaterialCache

> **conditionalEdgeMaterialCache**: `WeakMap`\<`WeakKey`, `any`\>

Defined in: [three/addons/loaders/LDrawLoader.js:1795](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1795)

***

### ConditionalLineMaterial

> **ConditionalLineMaterial**: `any`

Defined in: [three/addons/loaders/LDrawLoader.js:1810](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1810)

***

### edgeMaterialCache

> **edgeMaterialCache**: `WeakMap`\<`WeakKey`, `any`\>

Defined in: [three/addons/loaders/LDrawLoader.js:1794](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1794)

***

### fileMap

> **fileMap**: `object`

Defined in: [three/addons/loaders/LDrawLoader.js:1801](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1801)

***

### materialLibrary

> **materialLibrary**: `object`

Defined in: [three/addons/loaders/LDrawLoader.js:1793](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1793)

***

### materials

> **materials**: `any`[]

Defined in: [three/addons/loaders/LDrawLoader.js:1792](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1792)

***

### missingColorMaterial

> **missingColorMaterial**: `any`

Defined in: [three/addons/loaders/LDrawLoader.js:1813](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1813)

***

### missingConditionalEdgeColorMaterial

> **missingConditionalEdgeColorMaterial**: `any`

Defined in: [three/addons/loaders/LDrawLoader.js:1815](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1815)

***

### missingEdgeColorMaterial

> **missingEdgeColorMaterial**: `any`

Defined in: [three/addons/loaders/LDrawLoader.js:1814](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1814)

***

### partsCache

> **partsCache**: `LDrawPartsGeometryCache`

Defined in: [three/addons/loaders/LDrawLoader.js:1798](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1798)

***

### partsLibraryPath

> **partsLibraryPath**: `string`

Defined in: [three/addons/loaders/LDrawLoader.js:1807](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1807)

***

### smoothNormals

> **smoothNormals**: `boolean`

Defined in: [three/addons/loaders/LDrawLoader.js:1804](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1804)

## Methods

### addMaterial()

> **addMaterial**(`material`): `LDrawLoader`

Defined in: [three/addons/loaders/LDrawLoader.js:1984](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1984)

#### Parameters

##### material

`any`

#### Returns

`LDrawLoader`

***

### applyMaterialsToMesh()

> **applyMaterialsToMesh**(`group`, `parentColorCode`, `materialHierarchy`, `finalMaterialPass`): `void`

Defined in: [three/addons/loaders/LDrawLoader.js:2023](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L2023)

#### Parameters

##### group

`any`

##### parentColorCode

`any`

##### materialHierarchy

`any`

##### finalMaterialPass

`boolean` = `false`

#### Returns

`void`

***

### computeBuildingSteps()

> **computeBuildingSteps**(`model`): `void`

Defined in: [three/addons/loaders/LDrawLoader.js:2439](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L2439)

#### Parameters

##### model

`any`

#### Returns

`void`

***

### getMainEdgeMaterial()

> **getMainEdgeMaterial**(): `Material`

Defined in: [three/addons/loaders/LDrawLoader.js:2146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L2146)

Returns the material for the edges main LDraw color.

#### Returns

`Material`

The material. Returns `null` if no material has been found.

***

### getMainMaterial()

> **getMainMaterial**(): `Material`

Defined in: [three/addons/loaders/LDrawLoader.js:2135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L2135)

Returns the Material for the main LDraw color.

For an already loaded LDraw asset, returns the Material associated with the main color code.
This method can be useful to modify the main material of a model or part that exposes it.

The main color code is the standard way to color an LDraw part. It is '16' for triangles and
'24' for edges. Usually a complete model will not expose the main color (that is, no part
uses the code '16' at the top level, because they are assigned other specific colors) An LDraw
 part file on the other hand will expose the code '16' to be colored, and can have additional
fixed colors.

#### Returns

`Material`

The material. Returns `null` if no material has been found.

***

### getMaterial()

> **getMaterial**(`colorCode`): `Material`

Defined in: [three/addons/loaders/LDrawLoader.js:2006](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L2006)

Returns a material for the given color code.

#### Parameters

##### colorCode

`string`

The color code.

#### Returns

`Material`

The material. Returns `null` if no material has been found.

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/LDrawLoader.js:1900](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1900)

Starts loading from the given URL and passes the loaded LDraw asset
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

> **parse**(`text`, `onLoad`, `onError`): `void`

Defined in: [three/addons/loaders/LDrawLoader.js:1934](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1934)

Parses the given LDraw data and returns the resulting group.

#### Parameters

##### text

`string`

The raw VRML data as a string.

##### onLoad

(`arg0`) => `any`

Executed when the loading/parsing process has been finished.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`void`

***

### parseColorMetaDirective()

> **parseColorMetaDirective**(`lineParser`): `any`

Defined in: [three/addons/loaders/LDrawLoader.js:2153](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L2153)

#### Parameters

##### lineParser

`any`

#### Returns

`any`

***

### preloadMaterials()

> **preloadMaterials**(`url`): `Promise`\<`any`\>

Defined in: [three/addons/loaders/LDrawLoader.js:1863](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1863)

This async method preloads materials from a single LDraw file. In the official
parts library there is a special file which is loaded always the first (LDConfig.ldr)
and contains all the standard color codes. This method is intended to be used with
not packed files, for example in an editor where materials are preloaded and parts
are loaded on demand.

#### Parameters

##### url

`string`

Path of the LDraw materials asset.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the preload has finished.

#### Async

***

### setConditionalLineMaterial()

> **setConditionalLineMaterial**(`type`): `LDrawLoader`

Defined in: [three/addons/loaders/LDrawLoader.js:1844](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1844)

Sets the conditional line material type which depends on the used renderer.
Use [LDrawConditionalLineMaterial](/addons/classes/ldrawconditionallinematerial/) when using `WebGLRenderer` and
LDrawConditionalLineNodeMaterial when using `WebGPURenderer`.

#### Parameters

##### type

`any`

The conditional line material type.

#### Returns

`LDrawLoader`

A reference to this loader.

***

### setFileMap()

> **setFileMap**(`fileMap`): `LDrawLoader`

Defined in: [three/addons/loaders/LDrawLoader.js:1976](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1976)

Sets a map which maps referenced library filenames to new filenames.
If a fileMap is not specified (the default), library parts will be accessed by trial and
error in subfolders 'parts', 'p' and 'models'.

#### Parameters

##### fileMap

The file map to set.

#### Returns

`LDrawLoader`

A reference to this loader.

***

### setMaterials()

> **setMaterials**(`materials`): `LDrawLoader`

Defined in: [three/addons/loaders/LDrawLoader.js:1950](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1950)

#### Parameters

##### materials

`any`

#### Returns

`LDrawLoader`

***

### setPartsLibraryPath()

> **setPartsLibraryPath**(`path`): `LDrawLoader`

Defined in: [three/addons/loaders/LDrawLoader.js:1829](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/LDrawLoader.js#L1829)

This method must be called prior to `load()` unless the model to load does not reference
library parts (usually it will be a model with all its parts packed in a single file).

#### Parameters

##### path

`string`

Path to library parts files to load referenced parts from.
This is different from Loader.setPath, which indicates the path to load the main asset from.

#### Returns

`LDrawLoader`

A reference to this loader.

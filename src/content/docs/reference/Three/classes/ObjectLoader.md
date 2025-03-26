---
editUrl: false
next: false
prev: false
title: "ObjectLoader"
---

Defined in: [three/src/loaders/ObjectLoader.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L82)

A loader for loading a JSON resource in the [JSON Object/Scene format][https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4](https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4).
The files are internally loaded via [FileLoader](/reference/three/classes/fileloader/).

```js
const loader = new THREE.ObjectLoader();
const obj = await loader.loadAsync( 'models/json/example.json' );
scene.add( obj );

// Alternatively, to parse a previously loaded JSON structure
const object = await loader.parseAsync( a_json_object );
scene.add( object );
```

## Extends

- [`Loader`](/reference/three/classes/loader/)

## Extended by

- [`NodeObjectLoader`](/reference/threewebgpu/classes/nodeobjectloader/)

## Constructors

### Constructor

> **new ObjectLoader**(`manager`?): `ObjectLoader`

Defined in: [three/src/loaders/ObjectLoader.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L89)

Constructs a new object loader.

#### Parameters

##### manager?

[`LoadingManager`](/reference/three/classes/loadingmanager/)

The loading manager.

#### Returns

`ObjectLoader`

#### Overrides

[`Loader`](/reference/three/classes/loader/).[`constructor`](/reference/three/classes/loader/#constructor)

## Properties

### crossOrigin

> **crossOrigin**: `string`

Defined in: [three/src/loaders/Loader.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L32)

The crossOrigin string to implement CORS for loading the url from a
different domain that allows CORS.

#### Default

```ts
'anonymous'
```

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`crossOrigin`](/reference/three/classes/loader/#crossorigin)

***

### manager

> **manager**: `LoadingManager`

Defined in: [three/src/loaders/Loader.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L23)

The loading manager.

#### Default

```ts
DefaultLoadingManager
```

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`manager`](/reference/three/classes/loader/#manager)

***

### path

> **path**: `string`

Defined in: [three/src/loaders/Loader.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L47)

The base path from which the asset will be loaded.

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`path`](/reference/three/classes/loader/#path)

***

### requestHeader

> **requestHeader**: `object`

Defined in: [three/src/loaders/Loader.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L62)

The [request header][https://developer.mozilla.org/en-US/docs/Glossary/Request\_header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
used in HTTP request.

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`requestHeader`](/reference/three/classes/loader/#requestheader)

***

### resourcePath

> **resourcePath**: `string`

Defined in: [three/src/loaders/Loader.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L54)

The base path from which additional resources like textures will be loaded.

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`resourcePath`](/reference/three/classes/loader/#resourcepath)

***

### withCredentials

> **withCredentials**: `boolean`

Defined in: [three/src/loaders/Loader.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L40)

Whether the XMLHttpRequest uses credentials.

#### Default

```ts
false
```

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`withCredentials`](/reference/three/classes/loader/#withcredentials)

***

### DEFAULT\_MATERIAL\_NAME

> `static` **DEFAULT\_MATERIAL\_NAME**: `string`

Defined in: [three/src/loaders/Loader.js:200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L200)

The default material name that is used by loaders
when creating materials for loaded 3D objects.

Note: Not all loaders might honor this setting.

#### Static

#### Default

```ts
'__DEFAULT'
```

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`DEFAULT_MATERIAL_NAME`](/reference/three/classes/loader/#default_material_name)

## Methods

### bindLightTargets()

> **bindLightTargets**(`object`): `void`

Defined in: [three/src/loaders/ObjectLoader.js:1184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L1184)

#### Parameters

##### object

`any`

#### Returns

`void`

***

### bindSkeletons()

> **bindSkeletons**(`object`, `skeletons`): `void`

Defined in: [three/src/loaders/ObjectLoader.js:1158](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L1158)

#### Parameters

##### object

`any`

##### skeletons

`any`

#### Returns

`void`

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/src/loaders/ObjectLoader.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L103)

Starts loading from the given URL and pass the loaded 3D object to the `onLoad()` callback.

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

#### Overrides

[`Loader`](/reference/three/classes/loader/).[`load`](/reference/three/classes/loader/#load)

***

### loadAsync()

> **loadAsync**(`url`, `onProgress`): `Promise`\<[`Object3D`](/reference/three/classes/object3d/)\>

Defined in: [three/src/loaders/ObjectLoader.js:157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L157)

Async version of [ObjectLoader#load](/reference/three/classes/objectloader/#load).

#### Parameters

##### url

`string`

The path/URL of the file to be loaded. This can also be a data URI.

##### onProgress

`onProgressCallback`

Executed while the loading is in progress.

#### Returns

`Promise`\<[`Object3D`](/reference/three/classes/object3d/)\>

A Promise that resolves with the loaded 3D object.

#### Async

#### Overrides

[`Loader`](/reference/three/classes/loader/).[`loadAsync`](/reference/three/classes/loader/#loadasync)

***

### parse()

> **parse**(`json`, `onLoad`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/loaders/ObjectLoader.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L193)

Parses the given JSON. This is used internally by [ObjectLoader#load](/reference/three/classes/objectloader/#load)
but can also be used directly to parse a previously loaded JSON structure.

#### Parameters

##### json

`any`

The serialized 3D object.

##### onLoad

`any`

Executed when all resources (e.g. textures) have been fully loaded.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

The parsed 3D object.

#### Overrides

[`Loader`](/reference/three/classes/loader/).[`parse`](/reference/three/classes/loader/#parse)

***

### parseAnimations()

> **parseAnimations**(`json`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:399](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L399)

#### Parameters

##### json

`any`

#### Returns

`object`

***

### parseAsync()

> **parseAsync**(`json`): `Promise`\<[`Object3D`](/reference/three/classes/object3d/)\>

Defined in: [three/src/loaders/ObjectLoader.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L245)

Async version of [ObjectLoader#parse](/reference/three/classes/objectloader/#parse).

#### Parameters

##### json

`any`

The serialized 3D object.

#### Returns

`Promise`\<[`Object3D`](/reference/three/classes/object3d/)\>

A Promise that resolves with the parsed 3D object.

***

### parseGeometries()

> **parseGeometries**(`json`, `shapes`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:319](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L319)

#### Parameters

##### json

`any`

##### shapes

`any`

#### Returns

`object`

***

### parseImages()

> **parseImages**(`json`, `onLoad`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:421](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L421)

#### Parameters

##### json

`any`

##### onLoad

`any`

#### Returns

`object`

***

### parseImagesAsync()

> **parseImagesAsync**(`json`): `Promise`\<\{\}\>

Defined in: [three/src/loaders/ObjectLoader.js:537](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L537)

#### Parameters

##### json

`any`

#### Returns

`Promise`\<\{\}\>

***

### parseMaterials()

> **parseMaterials**(`json`, `textures`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:369](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L369)

#### Parameters

##### json

`any`

##### textures

`any`

#### Returns

`object`

***

### parseObject()

> **parseObject**(`data`, `geometries`, `materials`, `textures`, `animations`): [`Object3D`](/reference/three/classes/object3d/) \| [`Mesh`](/reference/three/classes/mesh/) \| [`PerspectiveCamera`](/reference/three/classes/perspectivecamera/) \| [`Scene`](/reference/three/classes/scene/) \| [`Sprite`](/reference/three/classes/sprite/) \| [`LOD`](/reference/three/classes/lod/) \| [`SkinnedMesh`](/reference/three/classes/skinnedmesh/) \| [`InstancedMesh`](/reference/three/classes/instancedmesh/) \| [`BatchedMesh`](/reference/three/classes/batchedmesh/) \| [`Line`](/reference/three/classes/line/) \| [`Points`](/reference/three/classes/points/) \| [`HemisphereLight`](/reference/three/classes/hemispherelight/) \| [`SpotLight`](/reference/three/classes/spotlight/) \| [`PointLight`](/reference/three/classes/pointlight/) \| [`OrthographicCamera`](/reference/three/classes/orthographiccamera/) \| [`DirectionalLight`](/reference/three/classes/directionallight/) \| [`AmbientLight`](/reference/three/classes/ambientlight/) \| [`RectAreaLight`](/reference/three/classes/rectarealight/) \| [`LightProbe`](/reference/three/classes/lightprobe/)

Defined in: [three/src/loaders/ObjectLoader.js:741](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L741)

#### Parameters

##### data

`any`

##### geometries

`any`

##### materials

`any`

##### textures

`any`

##### animations

`any`

#### Returns

[`Object3D`](/reference/three/classes/object3d/) \| [`Mesh`](/reference/three/classes/mesh/) \| [`PerspectiveCamera`](/reference/three/classes/perspectivecamera/) \| [`Scene`](/reference/three/classes/scene/) \| [`Sprite`](/reference/three/classes/sprite/) \| [`LOD`](/reference/three/classes/lod/) \| [`SkinnedMesh`](/reference/three/classes/skinnedmesh/) \| [`InstancedMesh`](/reference/three/classes/instancedmesh/) \| [`BatchedMesh`](/reference/three/classes/batchedmesh/) \| [`Line`](/reference/three/classes/line/) \| [`Points`](/reference/three/classes/points/) \| [`HemisphereLight`](/reference/three/classes/hemispherelight/) \| [`SpotLight`](/reference/three/classes/spotlight/) \| [`PointLight`](/reference/three/classes/pointlight/) \| [`OrthographicCamera`](/reference/three/classes/orthographiccamera/) \| [`DirectionalLight`](/reference/three/classes/directionallight/) \| [`AmbientLight`](/reference/three/classes/ambientlight/) \| [`RectAreaLight`](/reference/three/classes/rectarealight/) \| [`LightProbe`](/reference/three/classes/lightprobe/)

***

### parseShapes()

> **parseShapes**(`json`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:268](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L268)

#### Parameters

##### json

`any`

#### Returns

`object`

***

### parseSkeletons()

> **parseSkeletons**(`json`, `object`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L288)

#### Parameters

##### json

`any`

##### object

`any`

#### Returns

`object`

***

### parseTextures()

> **parseTextures**(`json`, `images`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:633](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L633)

#### Parameters

##### json

`any`

##### images

`any`

#### Returns

`object`

***

### setCrossOrigin()

> **setCrossOrigin**(`crossOrigin`): [`Loader`](/reference/three/classes/loader/)

Defined in: [three/src/loaders/Loader.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L111)

Sets the `crossOrigin` String to implement CORS for loading the URL
from a different domain that allows CORS.

#### Parameters

##### crossOrigin

`string`

The `crossOrigin` value.

#### Returns

[`Loader`](/reference/three/classes/loader/)

A reference to this instance.

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`setCrossOrigin`](/reference/three/classes/loader/#setcrossorigin)

***

### setPath()

> **setPath**(`path`): [`Loader`](/reference/three/classes/loader/)

Defined in: [three/src/loaders/Loader.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L140)

Sets the base path for the asset.

#### Parameters

##### path

`string`

The base path.

#### Returns

[`Loader`](/reference/three/classes/loader/)

A reference to this instance.

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`setPath`](/reference/three/classes/loader/#setpath)

***

### setRequestHeader()

> **setRequestHeader**(`requestHeader`): [`Loader`](/reference/three/classes/loader/)

Defined in: [three/src/loaders/Loader.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L167)

Sets the given request header.

#### Parameters

##### requestHeader

`any`

A [request header][https://developer.mozilla.org/en-US/docs/Glossary/Request\_header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
for configuring the HTTP request.

#### Returns

[`Loader`](/reference/three/classes/loader/)

A reference to this instance.

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`setRequestHeader`](/reference/three/classes/loader/#setrequestheader)

***

### setResourcePath()

> **setResourcePath**(`resourcePath`): [`Loader`](/reference/three/classes/loader/)

Defined in: [three/src/loaders/Loader.js:153](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L153)

Sets the base path for dependent resources like textures.

#### Parameters

##### resourcePath

`string`

The resource path.

#### Returns

[`Loader`](/reference/three/classes/loader/)

A reference to this instance.

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`setResourcePath`](/reference/three/classes/loader/#setresourcepath)

***

### setWithCredentials()

> **setWithCredentials**(`value`): [`Loader`](/reference/three/classes/loader/)

Defined in: [three/src/loaders/Loader.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L127)

Whether the XMLHttpRequest uses credentials such as cookies, authorization
headers or TLS client certificates, see [XMLHttpRequest.withCredentials][https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials).

Note: This setting has no effect if you are loading files locally or from the same domain.

#### Parameters

##### value

`boolean`

The `withCredentials` value.

#### Returns

[`Loader`](/reference/three/classes/loader/)

A reference to this instance.

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`setWithCredentials`](/reference/three/classes/loader/#setwithcredentials)

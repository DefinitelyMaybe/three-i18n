---
editUrl: false
next: false
prev: false
title: "NodeObjectLoader"
---

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L12)

A special type of object loader for loading 3D objects using
node materials.

## Extends

- [`ObjectLoader`](/reference/three/classes/objectloader/)

## Constructors

### Constructor

> **new NodeObjectLoader**(`manager`?): `NodeObjectLoader`

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L18)

Constructs a new node object loader.

#### Parameters

##### manager?

`LoadingManager`

A reference to a loading manager.

#### Returns

`NodeObjectLoader`

#### Overrides

[`ObjectLoader`](/reference/three/classes/objectloader/).[`constructor`](/reference/three/classes/objectloader/#constructor)

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`crossOrigin`](/reference/three/classes/objectloader/#crossorigin)

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`manager`](/reference/three/classes/objectloader/#manager)

***

### nodeMaterials

> **nodeMaterials**: `object`

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L33)

Represents a dictionary of node material types.

***

### nodes

> **nodes**: `object`

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L26)

Represents a dictionary of node types.

***

### path

> **path**: `string`

Defined in: [three/src/loaders/Loader.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L47)

The base path from which the asset will be loaded.

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`path`](/reference/three/classes/objectloader/#path)

***

### requestHeader

> **requestHeader**: `object`

Defined in: [three/src/loaders/Loader.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L62)

The [request header][https://developer.mozilla.org/en-US/docs/Glossary/Request\_header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
used in HTTP request.

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`requestHeader`](/reference/three/classes/objectloader/#requestheader)

***

### resourcePath

> **resourcePath**: `string`

Defined in: [three/src/loaders/Loader.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L54)

The base path from which additional resources like textures will be loaded.

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`resourcePath`](/reference/three/classes/objectloader/#resourcepath)

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`withCredentials`](/reference/three/classes/objectloader/#withcredentials)

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`DEFAULT_MATERIAL_NAME`](/reference/three/classes/objectloader/#default_material_name)

## Methods

### bindLightTargets()

> **bindLightTargets**(`object`): `void`

Defined in: [three/src/loaders/ObjectLoader.js:1184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L1184)

#### Parameters

##### object

`any`

#### Returns

`void`

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`bindLightTargets`](/reference/three/classes/objectloader/#bindlighttargets)

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`bindSkeletons`](/reference/three/classes/objectloader/#bindskeletons)

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`load`](/reference/three/classes/objectloader/#load)

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`loadAsync`](/reference/three/classes/objectloader/#loadasync)

***

### parse()

> **parse**(`json`, `onLoad`): `Object3D`

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L73)

Parses the node objects from the given JSON.

#### Parameters

##### json

`any`

The JSON definition

##### onLoad

`Function`

The onLoad callback function.

#### Returns

`Object3D`

. The parsed 3D object.

#### Overrides

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parse`](/reference/three/classes/objectloader/#parse)

***

### parseAnimations()

> **parseAnimations**(`json`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:399](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L399)

#### Parameters

##### json

`any`

#### Returns

`object`

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseAnimations`](/reference/three/classes/objectloader/#parseanimations)

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseAsync`](/reference/three/classes/objectloader/#parseasync)

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseGeometries`](/reference/three/classes/objectloader/#parsegeometries)

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseImages`](/reference/three/classes/objectloader/#parseimages)

***

### parseImagesAsync()

> **parseImagesAsync**(`json`): `Promise`\<\{\}\>

Defined in: [three/src/loaders/ObjectLoader.js:537](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L537)

#### Parameters

##### json

`any`

#### Returns

`Promise`\<\{\}\>

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseImagesAsync`](/reference/three/classes/objectloader/#parseimagesasync)

***

### parseMaterials()

> **parseMaterials**(`json`, `textures`): `object`

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L109)

Parses the node objects from the given JSON and textures.

#### Parameters

##### json

`any`

The JSON definition

##### textures

The texture library.

#### Returns

`object`

. The parsed materials.

#### Overrides

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseMaterials`](/reference/three/classes/objectloader/#parsematerials)

***

### parseNodes()

> **parseNodes**(`json`, `textures`): `object`

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L90)

Parses the node objects from the given JSON and textures.

#### Parameters

##### json

`any`

The JSON definition

##### textures

The texture library.

#### Returns

`object`

. The parsed nodes.

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseObject`](/reference/three/classes/objectloader/#parseobject)

***

### parseShapes()

> **parseShapes**(`json`): `object`

Defined in: [three/src/loaders/ObjectLoader.js:268](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/ObjectLoader.js#L268)

#### Parameters

##### json

`any`

#### Returns

`object`

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseShapes`](/reference/three/classes/objectloader/#parseshapes)

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseSkeletons`](/reference/three/classes/objectloader/#parseskeletons)

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

#### Inherited from

[`ObjectLoader`](/reference/three/classes/objectloader/).[`parseTextures`](/reference/three/classes/objectloader/#parsetextures)

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`setCrossOrigin`](/reference/three/classes/objectloader/#setcrossorigin)

***

### setNodeMaterials()

> **setNodeMaterials**(`value`): `NodeObjectLoader`

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L61)

Defines the dictionary of node material types.

#### Parameters

##### value

The node material library defined as `<classname,class>`.

#### Returns

`NodeObjectLoader`

A reference to this loader.

***

### setNodes()

> **setNodes**(`value`): `NodeObjectLoader`

Defined in: [three/src/loaders/nodes/NodeObjectLoader.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeObjectLoader.js#L50)

Defines the dictionary of node types.

#### Parameters

##### value

The node library defined as `<classname,class>`.

#### Returns

`NodeObjectLoader`

A reference to this loader.

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`setPath`](/reference/three/classes/objectloader/#setpath)

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`setRequestHeader`](/reference/three/classes/objectloader/#setrequestheader)

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`setResourcePath`](/reference/three/classes/objectloader/#setresourcepath)

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

[`ObjectLoader`](/reference/three/classes/objectloader/).[`setWithCredentials`](/reference/three/classes/objectloader/#setwithcredentials)

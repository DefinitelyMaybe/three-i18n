---
editUrl: false
next: false
prev: false
title: "NodeMaterialLoader"
---

Defined in: [three/src/loaders/nodes/NodeMaterialLoader.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeMaterialLoader.js#L8)

A special type of material loader for loading node materials.

## Extends

- [`MaterialLoader`](/reference/three/classes/materialloader/)

## Constructors

### Constructor

> **new NodeMaterialLoader**(`manager`?): `NodeMaterialLoader`

Defined in: [three/src/loaders/nodes/NodeMaterialLoader.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeMaterialLoader.js#L14)

Constructs a new node material loader.

#### Parameters

##### manager?

`LoadingManager`

A reference to a loading manager.

#### Returns

`NodeMaterialLoader`

#### Overrides

[`MaterialLoader`](/reference/three/classes/materialloader/).[`constructor`](/reference/three/classes/materialloader/#constructor)

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`crossOrigin`](/reference/three/classes/materialloader/#crossorigin)

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`manager`](/reference/three/classes/materialloader/#manager)

***

### nodeMaterials

> **nodeMaterials**: `object`

Defined in: [three/src/loaders/nodes/NodeMaterialLoader.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeMaterialLoader.js#L29)

Represents a dictionary of node material types.

***

### nodes

> **nodes**: `object`

Defined in: [three/src/loaders/nodes/NodeMaterialLoader.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeMaterialLoader.js#L22)

Represents a dictionary of node types.

***

### path

> **path**: `string`

Defined in: [three/src/loaders/Loader.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L47)

The base path from which the asset will be loaded.

#### Inherited from

[`MaterialLoader`](/reference/three/classes/materialloader/).[`path`](/reference/three/classes/materialloader/#path)

***

### requestHeader

> **requestHeader**: `object`

Defined in: [three/src/loaders/Loader.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L62)

The [request header][https://developer.mozilla.org/en-US/docs/Glossary/Request\_header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
used in HTTP request.

#### Inherited from

[`MaterialLoader`](/reference/three/classes/materialloader/).[`requestHeader`](/reference/three/classes/materialloader/#requestheader)

***

### resourcePath

> **resourcePath**: `string`

Defined in: [three/src/loaders/Loader.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L54)

The base path from which additional resources like textures will be loaded.

#### Inherited from

[`MaterialLoader`](/reference/three/classes/materialloader/).[`resourcePath`](/reference/three/classes/materialloader/#resourcepath)

***

### textures

> **textures**: `object`

Defined in: [three/src/loaders/MaterialLoader.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/MaterialLoader.js#L58)

A dictionary holding textures used by the material.

#### Inherited from

[`MaterialLoader`](/reference/three/classes/materialloader/).[`textures`](/reference/three/classes/materialloader/#textures)

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`withCredentials`](/reference/three/classes/materialloader/#withcredentials)

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`DEFAULT_MATERIAL_NAME`](/reference/three/classes/materialloader/#default_material_name)

## Methods

### createMaterialFromType()

> **createMaterialFromType**(`type`): `Node`

Defined in: [three/src/loaders/nodes/NodeMaterialLoader.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeMaterialLoader.js#L81)

Creates a node material from the given type.

#### Parameters

##### type

`string`

The node material type.

#### Returns

`Node`

The created node material instance.

#### Overrides

[`MaterialLoader`](/reference/three/classes/materialloader/).[`createMaterialFromType`](/reference/three/classes/materialloader/#creatematerialfromtype)

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/src/loaders/MaterialLoader.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/MaterialLoader.js#L70)

Starts loading from the given URL and pass the loaded material to the `onLoad()` callback.

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`load`](/reference/three/classes/materialloader/#load)

***

### loadAsync()

> **loadAsync**(`url`, `onProgress`?): `Promise`\<`any`\>

Defined in: [three/src/loaders/Loader.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L84)

A async version of [Loader#load](/reference/three/classes/loader/#load).

#### Parameters

##### url

`string`

The path/URL of the file to be loaded.

##### onProgress?

`onProgressCallback`

Executed while the loading is in progress.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the asset has been loaded.

#### Inherited from

[`MaterialLoader`](/reference/three/classes/materialloader/).[`loadAsync`](/reference/three/classes/materialloader/#loadasync)

***

### parse()

> **parse**(`json`): `NodeMaterial`

Defined in: [three/src/loaders/nodes/NodeMaterialLoader.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeMaterialLoader.js#L38)

Parses the node material from the given JSON.

#### Parameters

##### json

`any`

The JSON definition

#### Returns

`NodeMaterial`

. The parsed material.

#### Overrides

[`MaterialLoader`](/reference/three/classes/materialloader/).[`parse`](/reference/three/classes/materialloader/#parse)

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`setCrossOrigin`](/reference/three/classes/materialloader/#setcrossorigin)

***

### setNodeMaterials()

> **setNodeMaterials**(`value`): `NodeLoader`

Defined in: [three/src/loaders/nodes/NodeMaterialLoader.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeMaterialLoader.js#L70)

Defines the dictionary of node material types.

#### Parameters

##### value

The node material library defined as `<classname,class>`.

#### Returns

`NodeLoader`

A reference to this loader.

***

### setNodes()

> **setNodes**(`value`): `NodeLoader`

Defined in: [three/src/loaders/nodes/NodeMaterialLoader.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeMaterialLoader.js#L59)

Defines the dictionary of node types.

#### Parameters

##### value

The node library defined as `<classname,class>`.

#### Returns

`NodeLoader`

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`setPath`](/reference/three/classes/materialloader/#setpath)

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`setRequestHeader`](/reference/three/classes/materialloader/#setrequestheader)

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`setResourcePath`](/reference/three/classes/materialloader/#setresourcepath)

***

### setTextures()

> **setTextures**(`value`): [`MaterialLoader`](/reference/three/classes/materialloader/)

Defined in: [three/src/loaders/MaterialLoader.js:382](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/MaterialLoader.js#L382)

Textures are not embedded in the material JSON so they have
to be injected before the loading process starts.

#### Parameters

##### value

`any`

A dictionary holding textures for material properties.

#### Returns

[`MaterialLoader`](/reference/three/classes/materialloader/)

A reference to this material loader.

#### Inherited from

[`MaterialLoader`](/reference/three/classes/materialloader/).[`setTextures`](/reference/three/classes/materialloader/#settextures)

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

[`MaterialLoader`](/reference/three/classes/materialloader/).[`setWithCredentials`](/reference/three/classes/materialloader/#setwithcredentials)

***

### createMaterialFromType()

> `static` **createMaterialFromType**(`type`): [`Material`](/reference/three/classes/material/)

Defined in: [three/src/loaders/MaterialLoader.js:408](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/MaterialLoader.js#L408)

Creates a material for the given type.

#### Parameters

##### type

`string`

The material type.

#### Returns

[`Material`](/reference/three/classes/material/)

The new material.

#### Static

#### Inherited from

[`MaterialLoader`](/reference/three/classes/materialloader/).[`createMaterialFromType`](/reference/three/classes/materialloader/#creatematerialfromtype-2)

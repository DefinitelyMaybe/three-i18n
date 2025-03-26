---
editUrl: false
next: false
prev: false
title: "NodeLoader"
---

Defined in: [three/src/loaders/nodes/NodeLoader.js:11](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L11)

A loader for loading node objects in the three.js JSON Object/Scene format.

## Extends

- [`Loader`](/reference/three/classes/loader/)

## Constructors

### Constructor

> **new NodeLoader**(`manager`?): `NodeLoader`

Defined in: [three/src/loaders/nodes/NodeLoader.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L17)

Constructs a new node loader.

#### Parameters

##### manager?

`LoadingManager`

A reference to a loading manager.

#### Returns

`NodeLoader`

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

### nodes

> **nodes**: `object`

Defined in: [three/src/loaders/nodes/NodeLoader.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L32)

Represents a dictionary of node types.

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

### textures

> **textures**: `object`

Defined in: [three/src/loaders/nodes/NodeLoader.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L25)

Represents a dictionary of textures.

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

### createNodeFromType()

> **createNodeFromType**(`type`): `Node`

Defined in: [three/src/loaders/nodes/NodeLoader.js:150](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L150)

Creates a node object from the given type.

#### Parameters

##### type

`string`

The node type.

#### Returns

`Node`

The created node instance.

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/src/loaders/nodes/NodeLoader.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L43)

Loads the node definitions from the given URL.

#### Parameters

##### url

`string`

The path/URL of the file to be loaded.

##### onLoad

`Function`

Will be called when load completes.

##### onProgress

`Function`

Will be called while load progresses.

##### onError

`Function`

Will be called when errors are thrown during the loading process.

#### Returns

`void`

#### Overrides

[`Loader`](/reference/three/classes/loader/).[`load`](/reference/three/classes/loader/#load)

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

[`Loader`](/reference/three/classes/loader/).[`loadAsync`](/reference/three/classes/loader/#loadasync)

***

### parse()

> **parse**(`json`): `Node`

Defined in: [three/src/loaders/nodes/NodeLoader.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L106)

Parses the node from the given JSON.

#### Parameters

##### json

`any`

The JSON definition

#### Returns

`Node`

The parsed node.

#### Overrides

[`Loader`](/reference/three/classes/loader/).[`parse`](/reference/three/classes/loader/#parse)

***

### parseNodes()

> **parseNodes**(`json`): `object`

Defined in: [three/src/loaders/nodes/NodeLoader.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L74)

Parse the node dependencies for the loaded node.

#### Parameters

##### json

`any`

The JSON definition

#### Returns

`object`

A dictionary with node dependencies.

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

### setNodes()

> **setNodes**(`value`): `NodeLoader`

Defined in: [three/src/loaders/nodes/NodeLoader.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L139)

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

### setTextures()

> **setTextures**(`value`): `NodeLoader`

Defined in: [three/src/loaders/nodes/NodeLoader.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/nodes/NodeLoader.js#L128)

Defines the dictionary of textures.

#### Parameters

##### value

The texture library defines as `<uuid,texture>`.

#### Returns

`NodeLoader`

A reference to this loader.

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

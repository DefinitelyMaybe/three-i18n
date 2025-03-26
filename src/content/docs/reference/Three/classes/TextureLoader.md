---
editUrl: false
next: false
prev: false
title: "TextureLoader"
---

Defined in: [three/src/loaders/TextureLoader.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/TextureLoader.js#L21)

Class for loading textures. Images are internally
loaded via [ImageLoader](/reference/three/classes/imageloader/).

```js
const loader = new THREE.TextureLoader();
const texture = await loader.loadAsync( 'textures/land_ocean_ice_cloud_2048.jpg' );

const material = new THREE.MeshBasicMaterial( { map:texture } );
```
Please note that `TextureLoader` has dropped support for progress
events in `r84`. For a `TextureLoader` that supports progress events, see
[this thread][https://github.com/mrdoob/three.js/issues/10439#issuecomment-293260145](https://github.com/mrdoob/three.js/issues/10439#issuecomment-293260145).

## Extends

- [`Loader`](/reference/three/classes/loader/)

## Constructors

### Constructor

> **new TextureLoader**(`manager`?): `TextureLoader`

Defined in: [three/src/loaders/TextureLoader.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/TextureLoader.js#L28)

Constructs a new texture loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`TextureLoader`

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

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): [`Texture`](/reference/three/classes/texture/)

Defined in: [three/src/loaders/TextureLoader.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/TextureLoader.js#L46)

Starts loading from the given URL and pass the fully loaded texture
to the `onLoad()` callback. The method also returns a new texture object which can
directly be used for material creation. If you do it this way, the texture
may pop up in your scene once the respective loading process is finished.

#### Parameters

##### url

`string`

The path/URL of the file to be loaded. This can also be a data URI.

##### onLoad

(`arg0`) => `any`

Executed when the loading process has been finished.

##### onProgress

`onProgressCallback`

Unsupported in this loader.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

[`Texture`](/reference/three/classes/texture/)

The texture.

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

> **parse**(): `void`

Defined in: [three/src/loaders/Loader.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L102)

This method needs to be implemented by all concrete loaders. It holds the
logic for parsing the asset into three.js entities.

#### Returns

`void`

#### Inherited from

[`Loader`](/reference/three/classes/loader/).[`parse`](/reference/three/classes/loader/#parse)

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

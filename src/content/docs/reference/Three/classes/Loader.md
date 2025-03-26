---
editUrl: false
next: false
prev: false
title: "Loader"
---

Defined in: [three/src/loaders/Loader.js:8](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L8)

Abstract base class for loaders.

## Extended by

- [`AnimationLoader`](/reference/three/classes/animationloader/)
- [`CompressedTextureLoader`](/reference/three/classes/compressedtextureloader/)
- [`CubeTextureLoader`](/reference/three/classes/cubetextureloader/)
- [`DataTextureLoader`](/reference/three/classes/datatextureloader/)
- [`TextureLoader`](/reference/three/classes/textureloader/)
- [`ObjectLoader`](/reference/three/classes/objectloader/)
- [`MaterialLoader`](/reference/three/classes/materialloader/)
- [`BufferGeometryLoader`](/reference/three/classes/buffergeometryloader/)
- [`ImageLoader`](/reference/three/classes/imageloader/)
- [`ImageBitmapLoader`](/reference/three/classes/imagebitmaploader/)
- [`FileLoader`](/reference/three/classes/fileloader/)
- [`AudioLoader`](/reference/three/classes/audioloader/)
- [`NodeLoader`](/reference/threewebgpu/classes/nodeloader/)

## Constructors

### Constructor

> **new Loader**(`manager`?): `Loader`

Defined in: [three/src/loaders/Loader.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L15)

Constructs a new loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`Loader`

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

***

### manager

> **manager**: `LoadingManager`

Defined in: [three/src/loaders/Loader.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L23)

The loading manager.

#### Default

```ts
DefaultLoadingManager
```

***

### path

> **path**: `string`

Defined in: [three/src/loaders/Loader.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L47)

The base path from which the asset will be loaded.

***

### requestHeader

> **requestHeader**: `object`

Defined in: [three/src/loaders/Loader.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L62)

The [request header][https://developer.mozilla.org/en-US/docs/Glossary/Request\_header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
used in HTTP request.

***

### resourcePath

> **resourcePath**: `string`

Defined in: [three/src/loaders/Loader.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L54)

The base path from which additional resources like textures will be loaded.

***

### withCredentials

> **withCredentials**: `boolean`

Defined in: [three/src/loaders/Loader.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L40)

Whether the XMLHttpRequest uses credentials.

#### Default

```ts
false
```

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

## Methods

### load()

> **load**(): `void`

Defined in: [three/src/loaders/Loader.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L75)

This method needs to be implemented by all concrete loaders. It holds the
logic for loading assets from the backend.

#### Returns

`void`

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

***

### parse()

> **parse**(): `void`

Defined in: [three/src/loaders/Loader.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L102)

This method needs to be implemented by all concrete loaders. It holds the
logic for parsing the asset into three.js entities.

#### Returns

`void`

***

### setCrossOrigin()

> **setCrossOrigin**(`crossOrigin`): `Loader`

Defined in: [three/src/loaders/Loader.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L111)

Sets the `crossOrigin` String to implement CORS for loading the URL
from a different domain that allows CORS.

#### Parameters

##### crossOrigin

`string`

The `crossOrigin` value.

#### Returns

`Loader`

A reference to this instance.

***

### setPath()

> **setPath**(`path`): `Loader`

Defined in: [three/src/loaders/Loader.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L140)

Sets the base path for the asset.

#### Parameters

##### path

`string`

The base path.

#### Returns

`Loader`

A reference to this instance.

***

### setRequestHeader()

> **setRequestHeader**(`requestHeader`): `Loader`

Defined in: [three/src/loaders/Loader.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L167)

Sets the given request header.

#### Parameters

##### requestHeader

`any`

A [request header][https://developer.mozilla.org/en-US/docs/Glossary/Request\_header](https://developer.mozilla.org/en-US/docs/Glossary/Request_header)
for configuring the HTTP request.

#### Returns

`Loader`

A reference to this instance.

***

### setResourcePath()

> **setResourcePath**(`resourcePath`): `Loader`

Defined in: [three/src/loaders/Loader.js:153](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L153)

Sets the base path for dependent resources like textures.

#### Parameters

##### resourcePath

`string`

The resource path.

#### Returns

`Loader`

A reference to this instance.

***

### setWithCredentials()

> **setWithCredentials**(`value`): `Loader`

Defined in: [three/src/loaders/Loader.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Loader.js#L127)

Whether the XMLHttpRequest uses credentials such as cookies, authorization
headers or TLS client certificates, see [XMLHttpRequest.withCredentials][https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials).

Note: This setting has no effect if you are loading files locally or from the same domain.

#### Parameters

##### value

`boolean`

The `withCredentials` value.

#### Returns

`Loader`

A reference to this instance.

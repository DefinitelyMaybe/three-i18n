---
editUrl: false
next: false
prev: false
title: "LoaderUtils"
---

Defined in: [three/src/loaders/LoaderUtils.js:4](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoaderUtils.js#L4)

A class with loader utility functions.

## Constructors

### Constructor

> **new LoaderUtils**(): `LoaderUtils`

#### Returns

`LoaderUtils`

## Methods

### extractUrlBase()

> `static` **extractUrlBase**(`url`): `string`

Defined in: [three/src/loaders/LoaderUtils.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoaderUtils.js#L12)

Extracts the base URL from the given URL.

#### Parameters

##### url

`string`

The URL to extract the base URL from.

#### Returns

`string`

The extracted base URL.

***

### resolveURL()

> `static` **resolveURL**(`url`, `path`): `string`

Defined in: [three/src/loaders/LoaderUtils.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoaderUtils.js#L31)

Resolves relative URLs against the given path. Absolute paths, data urls,
and blob URLs will be returned as is. Invalid URLs will return an empty
string.

#### Parameters

##### url

`string`

The URL to resolve.

##### path

`string`

The base path for relative URLs to be resolved against.

#### Returns

`string`

The resolved URL.

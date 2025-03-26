---
editUrl: false
next: false
prev: false
title: "Cache"
---

Defined in: [three/src/loaders/Cache.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Cache.js#L7)

## Classdesc

A simple caching system, used internally by [FileLoader](/reference/three/classes/fileloader/).
To enable caching across all loaders that use [FileLoader](/reference/three/classes/fileloader/), add `THREE.Cache.enabled = true.` once in your app.

## Properties

### add()

> `static` **add**: (`key`, `file`) => `void`

Defined in: [three/src/loaders/Cache.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Cache.js#L34)

Adds a cache entry with a key to reference the file. If this key already
holds a file, it is overwritten.

#### Parameters

##### key

`string`

The key to reference the cached file.

##### file

`any`

The file to be cached.

#### Returns

`void`

#### Static

***

### clear

> `static` **clear**: *typeof* `__function`

Defined in: [three/src/loaders/Cache.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Cache.js#L78)

Remove all values from the cache.

#### Static

***

### enabled

> `static` **enabled**: `boolean` = `false`

Defined in: [three/src/loaders/Cache.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Cache.js#L16)

Whether caching is enabled or not.

#### Static

#### Default

```ts
false
```

***

### files

> `static` **files**: `object` = `{}`

Defined in: [three/src/loaders/Cache.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Cache.js#L24)

A dictionary that holds cached files.

#### Static

***

### get()

> `static` **get**: (`key`) => `any`

Defined in: [three/src/loaders/Cache.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Cache.js#L51)

Gets the cached value for the given key.

#### Parameters

##### key

`string`

The key to reference the cached file.

#### Returns

`any`

The cached file. If the key does not exist `undefined` is returned.

#### Static

***

### remove()

> `static` **remove**: (`key`) => `void`

Defined in: [three/src/loaders/Cache.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/Cache.js#L67)

Removes the cached file associated with the given key.

#### Parameters

##### key

`string`

The key to reference the cached file.

#### Returns

`void`

#### Static

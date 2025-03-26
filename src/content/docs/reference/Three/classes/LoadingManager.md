---
editUrl: false
next: false
prev: false
title: "LoadingManager"
---

Defined in: [three/src/loaders/LoadingManager.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L18)

Handles and keeps track of loaded and pending data. A default global
instance of this class is created and used by loaders if not supplied
manually.

In general that should be sufficient, however there are times when it can
be useful to have separate loaders - for example if you want to show
separate loading bars for objects and textures.

```js
const manager = new THREE.LoadingManager();
manager.onLoad = () => console.log( 'Loading complete!' );

const loader1 = new OBJLoader( manager );
const loader2 = new ColladaLoader( manager );
```

## Constructors

### Constructor

> **new LoadingManager**(`onLoad`?, `onProgress`?, `onError`?): `LoadingManager`

Defined in: [three/src/loaders/LoadingManager.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L27)

Constructs a new loading manager.

#### Parameters

##### onLoad?

`Function`

Executes when all items have been loaded.

##### onProgress?

`Function`

Executes when single items have been loaded.

##### onError?

`Function`

Executes when an error occurs.

#### Returns

`LoadingManager`

## Properties

### addHandler()

> **addHandler**: (`regex`, `loader`) => `LoadingManager`

Defined in: [three/src/loaders/LoadingManager.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L217)

Registers a loader with the given regular expression. Can be used to
define what loader should be used in order to load specific files. A
typical use case is to overwrite the default loader for textures.

```js
// add handler for TGA textures
manager.addHandler( /\.tga$/i, new TGALoader() );
```

#### Parameters

##### regex

`string`

A regular expression.

##### loader

`Loader`

A loader that should handle matched cases.

#### Returns

`LoadingManager`

A reference to this loading manager.

***

### getHandler()

> **getHandler**: (`file`) => `Loader`

Defined in: [three/src/loaders/LoadingManager.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L251)

Can be used to retrieve the registered loader for the given file path.

#### Parameters

##### file

`string`

The file path.

#### Returns

`Loader`

The registered loader. Returns `null` if no loader was found.

***

### itemEnd()

> **itemEnd**: (`url`) => `void`

Defined in: [three/src/loaders/LoadingManager.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L102)

This should be called by any loader using the manager when the loader
ended loading an item.

#### Parameters

##### url

`string`

The URL of the loaded item.

#### Returns

`void`

***

### itemError()

> **itemError**: (`url`) => `void`

Defined in: [three/src/loaders/LoadingManager.js:132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L132)

This should be called by any loader using the manager when the loader
encounters an error when loading an item.

#### Parameters

##### url

`string`

The URL of the item that produces an error.

#### Returns

`void`

***

### itemStart()

> **itemStart**: (`url`) => `void`

Defined in: [three/src/loaders/LoadingManager.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L78)

This should be called by any loader using the manager when the loader
starts loading an item.

#### Parameters

##### url

`string`

The URL to load.

#### Returns

`void`

***

### onError

> **onError**: `Function`

Defined in: [three/src/loaders/LoadingManager.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L70)

Executes when an error occurs.

#### Default

```ts
undefined
```

***

### onLoad

> **onLoad**: `Function`

Defined in: [three/src/loaders/LoadingManager.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L54)

Executes when all items have been loaded.

#### Default

```ts
undefined
```

***

### onProgress

> **onProgress**: `Function`

Defined in: [three/src/loaders/LoadingManager.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L62)

Executes when single items have been loaded.

#### Default

```ts
undefined
```

***

### onStart

> **onStart**: `Function`

Defined in: [three/src/loaders/LoadingManager.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L46)

Executes when an item starts loading.

#### Default

```ts
undefined
```

***

### removeHandler()

> **removeHandler**: (`regex`) => `LoadingManager`

Defined in: [three/src/loaders/LoadingManager.js:231](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L231)

Removes the loader for the given regular expression.

#### Parameters

##### regex

`string`

A regular expression.

#### Returns

`LoadingManager`

A reference to this loading manager.

***

### resolveURL()

> **resolveURL**: (`url`) => `string`

Defined in: [three/src/loaders/LoadingManager.js:149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L149)

Given a URL, uses the URL modifier callback (if any) and returns a
resolved URL. If no URL modifier is set, returns the original URL.

#### Parameters

##### url

`string`

The URL to load.

#### Returns

`string`

The resolved URL.

***

### setURLModifier()

> **setURLModifier**: (`transform`) => `LoadingManager`

Defined in: [three/src/loaders/LoadingManager.js:195](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/loaders/LoadingManager.js#L195)

If provided, the callback will be passed each resource URL before a
request is sent. The callback may return the original URL, or a new URL to
override loading behavior. This behavior can be used to load assets from
.ZIP files, drag-and-drop APIs, and Data URIs.

```js
const blobs = {'fish.gltf': blob1, 'diffuse.png': blob2, 'normal.png': blob3};

const manager = new THREE.LoadingManager();

// Initialize loading manager with URL callback.
const objectURLs = [];
manager.setURLModifier( ( url ) => {

	url = URL.createObjectURL( blobs[ url ] );
	objectURLs.push( url );
	return url;

} );

// Load as usual, then revoke the blob URLs.
const loader = new GLTFLoader( manager );
loader.load( 'fish.gltf', (gltf) => {

	scene.add( gltf.scene );
	objectURLs.forEach( ( url ) => URL.revokeObjectURL( url ) );

} );
```

#### Parameters

##### transform

(`arg0`) => `string`

URL modifier callback. Called with an URL and must return a resolved URL.

#### Returns

`LoadingManager`

A reference to this loading manager.

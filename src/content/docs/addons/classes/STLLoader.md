---
editUrl: false
next: false
prev: false
title: "STLLoader"
---

Defined in: [three/addons/loaders/STLLoader.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/STLLoader.js#L53)

A loader for the STL format, as created by Solidworks and other CAD programs.

Supports both binary and ASCII encoded files. The loader returns a non-indexed buffer geometry.

Limitations:
- Binary decoding supports "Magics" color format (http://en.wikipedia.org/wiki/STL_(file_format)#Color_in_binary_STL).
- There is perhaps some question as to how valid it is to always assume little-endian-ness.
- ASCII decoding assumes file is UTF-8.

```js
const loader = new STLLoader();
const geometry = await loader.loadAsync( './models/stl/slotted_disk.stl' )
scene.add( new THREE.Mesh( geometry ) );
```
For binary STLs geometry might contain colors for vertices. To use it:
```js
// use the same code to load STL as above
if ( geometry.hasColors ) {
	material = new THREE.MeshPhongMaterial( { opacity: geometry.alpha, vertexColors: true } );
}
const mesh = new THREE.Mesh( geometry, material );
```
For ASCII STLs containing multiple solids, each solid is assigned to a different group.
Groups can be used to assign a different color by defining an array of materials with the same length of
geometry.groups and passing it to the Mesh constructor:

```js
const materials = [];
const nGeometryGroups = geometry.groups.length;

for ( let i = 0; i < nGeometryGroups; i ++ ) {
	const material = new THREE.MeshPhongMaterial( { color: colorMap[ i ], wireframe: false } );
	materials.push( material );
}

const mesh = new THREE.Mesh(geometry, materials);
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new STLLoader**(`manager`?): `STLLoader`

Defined in: [three/addons/loaders/STLLoader.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/STLLoader.js#L60)

Constructs a new STL loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`STLLoader`

#### Overrides

`Loader.constructor`

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/STLLoader.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/STLLoader.js#L75)

Starts loading from the given URL and passes the loaded STL asset
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

> **parse**(`data`): `BufferGeometry`

Defined in: [three/addons/loaders/STLLoader.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/STLLoader.js#L117)

Parses the given STL data and returns the resulting geometry.

#### Parameters

##### data

`ArrayBuffer`

The raw STL data as an array buffer.

#### Returns

`BufferGeometry`

The parsed geometry.

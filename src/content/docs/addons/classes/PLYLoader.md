---
editUrl: false
next: false
prev: false
title: "PLYLoader"
---

Defined in: [three/addons/loaders/PLYLoader.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PLYLoader.js#L27)

A loader for PLY the PLY format (known as the Polygon
File Format or the Stanford Triangle Format).

Limitations:
 - ASCII decoding assumes file is UTF-8.

```js
const loader = new PLYLoader();
const geometry = await loader.loadAsync( './models/ply/ascii/dolphins.ply' );
scene.add( new THREE.Mesh( geometry ) );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new PLYLoader**(`manager`?): `PLYLoader`

Defined in: [three/addons/loaders/PLYLoader.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PLYLoader.js#L34)

Constructs a new PLY loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`PLYLoader`

#### Overrides

`Loader.constructor`

## Properties

### customPropertyMapping

> **customPropertyMapping**: `object`

Defined in: [three/addons/loaders/PLYLoader.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PLYLoader.js#L41)

***

### propertyNameMapping

> **propertyNameMapping**: `object`

Defined in: [three/addons/loaders/PLYLoader.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PLYLoader.js#L40)

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/PLYLoader.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PLYLoader.js#L54)

Starts loading from the given URL and passes the loaded PLY asset
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

Defined in: [three/addons/loaders/PLYLoader.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PLYLoader.js#L136)

Parses the given PLY data and returns the resulting geometry.

#### Parameters

##### data

`ArrayBuffer`

The raw PLY data as an array buffer.

#### Returns

`BufferGeometry`

The parsed geometry.

***

### setCustomPropertyNameMapping()

> **setCustomPropertyNameMapping**(`mapping`): `void`

Defined in: [three/addons/loaders/PLYLoader.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PLYLoader.js#L124)

Custom properties outside of the defaults for position, uv, normal
and color attributes can be added using the setCustomPropertyNameMapping method.
For example, the following maps the element properties “custom_property_a”
and “custom_property_b” to an attribute “customAttribute” with an item size of 2.
Attribute item sizes are set from the number of element properties in the property array.

```js
loader.setCustomPropertyNameMapping( {
	customAttribute: ['custom_property_a', 'custom_property_b'],
} );
```

#### Parameters

##### mapping

`any`

The mapping dictionary.

#### Returns

`void`

***

### setPropertyNameMapping()

> **setPropertyNameMapping**(`mapping`): `void`

Defined in: [three/addons/loaders/PLYLoader.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/PLYLoader.js#L104)

Sets a property name mapping that maps default property names
to custom ones. For example, the following maps the properties
“diffuse_(red|green|blue)” in the file to standard color names.

```js
loader.setPropertyNameMapping( {
	diffuse_red: 'red',
	diffuse_green: 'green',
	diffuse_blue: 'blue'
} );
```

#### Parameters

##### mapping

`any`

The mapping dictionary.

#### Returns

`void`

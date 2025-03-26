---
editUrl: false
next: false
prev: false
title: "SVGLoader"
---

Defined in: [three/addons/loaders/SVGLoader.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L59)

A loader for the SVG format.

Scalable Vector Graphics is an XML-based vector image format for two-dimensional graphics
with support for interactivity and animation.

```js
const loader = new SVGLoader();
const data = await loader.loadAsync( 'data/svgSample.svg' );

const paths = data.paths;
const group = new THREE.Group();

for ( let i = 0; i < paths.length; i ++ ) {

	const path = paths[ i ];
	const material = new THREE.MeshBasicMaterial( {
		color: path.color,
		side: THREE.DoubleSide,
		depthWrite: false
	} );

	const shapes = SVGLoader.createShapes( path );

	for ( let j = 0; j < shapes.length; j ++ ) {

		const shape = shapes[ j ];
		const geometry = new THREE.ShapeGeometry( shape );
		const mesh = new THREE.Mesh( geometry, material );
		group.add( mesh );

	}

}

scene.add( group );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new SVGLoader**(`manager`?): `SVGLoader`

Defined in: [three/addons/loaders/SVGLoader.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L66)

Constructs a new SVG loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`SVGLoader`

#### Overrides

`Loader.constructor`

## Properties

### defaultDPI

> **defaultDPI**: `number`

Defined in: [three/addons/loaders/SVGLoader.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L76)

Default dots per inch.

#### Default

```ts
90
```

***

### defaultUnit

> **defaultUnit**: `"px"` \| `"in"` \| `"mm"` \| `"cm"` \| `"pt"` \| `"pc"`

Defined in: [three/addons/loaders/SVGLoader.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L84)

Default unit.

#### Default

```ts
'px'
```

## Methods

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/SVGLoader.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L97)

Starts loading from the given URL and passes the loaded SVG asset
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

> **parse**(`text`): `object`

Defined in: [three/addons/loaders/SVGLoader.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L138)

Parses the given SVG data and returns the resulting data.

#### Parameters

##### text

`string`

The raw SVG data as a string.

#### Returns

`object`

An object holding an array of shape paths and the
SVG XML document.

##### paths

> **paths**: `ShapePath`[]

##### xml

> **xml**: `string`

***

### createShapes()

> `static` **createShapes**(`shapePath`): `Shape`[]

Defined in: [three/addons/loaders/SVGLoader.js:1997](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L1997)

Creates from the given shape path and array of shapes.

#### Parameters

##### shapePath

`ShapePath`

The shape path.

#### Returns

`Shape`[]

An array of shapes.

***

### getStrokeStyle()

> `static` **getStrokeStyle**(`width`?, `color`?, `lineJoin`?, `lineCap`?, `miterLimit`?): `any`

Defined in: [three/addons/loaders/SVGLoader.js:2448](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L2448)

Returns a stroke style object from the given parameters.

#### Parameters

##### width?

`number`

The stroke width.

##### color?

`string`

The stroke color, as  returned by Color#getStyle.

##### lineJoin?

The line join style.

`"round"` | `"bevel"` | `"miter"` | `"miter-limit"`

##### lineCap?

The line cap style.

`"butt"` | `"round"` | `"square"`

##### miterLimit?

`number`

Maximum join length, in multiples of the `width` parameter (join is truncated if it exceeds that distance).

#### Returns

`any`

The style object.

***

### pointsToStroke()

> `static` **pointsToStroke**(`points`, `style`, `arcDivisions`?, `minDistance`?): `BufferGeometry`

Defined in: [three/addons/loaders/SVGLoader.js:2476](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L2476)

Creates a stroke from an array of points.

#### Parameters

##### points

`Vector2`[]

The points in 2D space. Minimum 2 points. The path can be open or closed (last point equals to first point).

##### style

`any`

Object with SVG properties as returned by `SVGLoader.getStrokeStyle()`, or `SVGLoader.parse()` in the `path.userData.style` object.

##### arcDivisions?

`number`

Arc divisions for round joins and endcaps.

##### minDistance?

`number`

Points closer to this distance will be merged.

#### Returns

`BufferGeometry`

The stroke geometry. UV coordinates are generated ('u' along path. 'v' across it, from left to right).
Returns `null` if not geometry was generated.

***

### pointsToStrokeWithBuffers()

> `static` **pointsToStrokeWithBuffers**(`points`, `style`, `arcDivisions`?, `minDistance`?, `vertices`?, `normals`?, `uvs`?, `vertexOffset`?): `number`

Defined in: [three/addons/loaders/SVGLoader.js:2510](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/SVGLoader.js#L2510)

Creates a stroke from an array of points.

#### Parameters

##### points

`Vector2`[]

The points in 2D space. Minimum 2 points.

##### style

`any`

Object with SVG properties as returned by `SVGLoader.getStrokeStyle()`, or `SVGLoader.parse()` in the `path.userData.style` object.

##### arcDivisions?

`number`

Arc divisions for round joins and endcaps.

##### minDistance?

`number`

Points closer to this distance will be merged.

##### vertices?

`number`[]

An array holding vertices.

##### normals?

`number`[]

An array holding normals.

##### uvs?

`number`[]

An array holding uvs.

##### vertexOffset?

`number`

The vertex offset.

#### Returns

`number`

The number of vertices.

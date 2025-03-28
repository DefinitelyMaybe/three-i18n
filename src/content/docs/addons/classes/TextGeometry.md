---
editUrl: false
next: false
prev: false
title: "TextGeometry"
---

Defined in: [three/addons/geometries/TextGeometry.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/TextGeometry.js#L27)

A class for generating text as a single geometry. It is constructed by providing a string of text, and a set of
parameters consisting of a loaded font and extrude settings.

See the [FontLoader](/addons/classes/fontloader/) page for additional details.

`TextGeometry` uses [typeface.json][http://gero3.github.io/facetype.js/](http://gero3.github.io/facetype.js/) generated fonts.
Some existing fonts can be found located in `/examples/fonts`.

```js
const loader = new FontLoader();
const font = await loader.loadAsync( 'fonts/helvetiker_regular.typeface.json' );
const geometry = new TextGeometry( 'Hello three.js!', {
	font: font,
	size: 80,
	depth: 5,
	curveSegments: 12
} );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new TextGeometry**(`text`, `parameters`): `TextGeometry`

Defined in: [three/addons/geometries/TextGeometry.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/TextGeometry.js#L35)

Constructs a new text geometry.

#### Parameters

##### text

`string`

The text that should be transformed into a geometry.

##### parameters

The text settings.

#### Returns

`TextGeometry`

#### Overrides

`ExtrudeGeometry.constructor`

## Properties

### type

> **type**: `string`

Defined in: [three/addons/geometries/TextGeometry.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/geometries/TextGeometry.js#L58)

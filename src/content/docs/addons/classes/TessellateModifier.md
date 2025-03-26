---
editUrl: false
next: false
prev: false
title: "TessellateModifier"
---

Defined in: [three/addons/modifiers/TessellateModifier.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/TessellateModifier.js#L18)

This class can be used to modify a geometry by breaking its edges if they
are longer than maximum length.

```js
const modifier = new TessellateModifier( 8, 6 );
geometry = modifier.modify( geometry );
```

## Constructors

### Constructor

> **new TessellateModifier**(`maxEdgeLength`?, `maxIterations`?): `TessellateModifier`

Defined in: [three/addons/modifiers/TessellateModifier.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/TessellateModifier.js#L26)

Constructs a new Tessellate modifier.

#### Parameters

##### maxEdgeLength?

`number` = `0.1`

The maximum edge length.

##### maxIterations?

`number` = `6`

The number of iterations.

#### Returns

`TessellateModifier`

## Properties

### maxEdgeLength

> **maxEdgeLength**: `number`

Defined in: [three/addons/modifiers/TessellateModifier.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/TessellateModifier.js#L34)

The maximum edge length.

#### Default

```ts
0.1
```

***

### maxIterations

> **maxIterations**: `number`

Defined in: [three/addons/modifiers/TessellateModifier.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/TessellateModifier.js#L42)

The maximum edge length.

#### Default

```ts
0.1
```

## Methods

### modify()

> **modify**(`geometry`): `BufferGeometry`

Defined in: [three/addons/modifiers/TessellateModifier.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/TessellateModifier.js#L53)

Returns a new, modified version of the given geometry by applying a tesselation.
Please note that the resulting geometry is always non-indexed.

#### Parameters

##### geometry

`BufferGeometry`

The geometry to modify.

#### Returns

`BufferGeometry`

A new, modified geometry.

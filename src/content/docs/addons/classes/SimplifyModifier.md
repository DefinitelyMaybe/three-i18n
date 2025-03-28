---
editUrl: false
next: false
prev: false
title: "SimplifyModifier"
---

Defined in: [three/addons/modifiers/SimplifyModifier.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/SimplifyModifier.js#L25)

This class can be used to modify a geometry by simplifying it. A typical use
case for such a modifier is automatic LOD generation.

The implementation is based on [Progressive Mesh type Polygon Reduction Algorithm][https://web.archive.org/web/20230610044040/http://www.melax.com/polychop/](https://web.archive.org/web/20230610044040/http://www.melax.com/polychop/)
by Stan Melax in 1998.

```js
const modifier = new SimplifyModifier();
geometry = modifier.modify( geometry );
```

## Constructors

### Constructor

> **new SimplifyModifier**(): `SimplifyModifier`

#### Returns

`SimplifyModifier`

## Methods

### modify()

> **modify**(`geometry`, `count`): `BufferGeometry`

Defined in: [three/addons/modifiers/SimplifyModifier.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/SimplifyModifier.js#L35)

Returns a new, modified version of the given geometry by applying a simplification.
Please note that the resulting geometry is always non-indexed.

#### Parameters

##### geometry

`BufferGeometry`

The geometry to modify.

##### count

`number`

The number of vertices to remove.

#### Returns

`BufferGeometry`

A new, modified geometry.

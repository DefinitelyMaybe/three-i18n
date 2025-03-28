---
editUrl: false
next: false
prev: false
title: "EdgeSplitModifier"
---

Defined in: [three/addons/modifiers/EdgeSplitModifier.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/EdgeSplitModifier.js#L21)

The modifier can be used to split faces at sharp edges. This allows to compute
normals without smoothing the edges which can lead to an improved visual result.

```js
const modifier = new EdgeSplitModifier();
geometry = modifier.modify( geometry, Math.PI * 0.4 );
```

## Constructors

### Constructor

> **new EdgeSplitModifier**(): `EdgeSplitModifier`

#### Returns

`EdgeSplitModifier`

## Methods

### modify()

> **modify**(`geometry`, `cutOffAngle`, `tryKeepNormals`?): `BufferGeometry`

Defined in: [three/addons/modifiers/EdgeSplitModifier.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/modifiers/EdgeSplitModifier.js#L32)

Returns a new, modified version of the given geometry by applying an edge-split operation.
Please note that the resulting geometry is always indexed.

#### Parameters

##### geometry

`BufferGeometry`

The geometry to modify.

##### cutOffAngle

`number`

The cut off angle in radians.

##### tryKeepNormals?

`boolean` = `true`

Whether to try to keep normals or not.

#### Returns

`BufferGeometry`

A new, modified geometry.

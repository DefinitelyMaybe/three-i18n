---
editUrl: false
next: false
prev: false
title: "gain"
---

> **gain**(`x`, `k`): `any`

Defined in: [three/src/nodes/math/MathUtils.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/math/MathUtils.js#L28)

A function that remaps the `[0,1]` interval into the `[0,1]` interval.
Expands the sides and compresses the center, and keeps `0.5` mapped to `0.5`.
Reference: [https://iquilezles.org/articles/functions/](https://iquilezles.org/articles/functions/).

## Parameters

### x

`any`

The value to remap.

### k

`any`

`k=1` is the identity curve,`k<1` produces the classic `gain()` shape, and `k>1` produces "s" shaped curves.

## Returns

`any`

The remapped value.

## Tsl

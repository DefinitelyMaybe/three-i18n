---
editUrl: false
next: false
prev: false
title: "Spherical"
---

Defined in: [three/src/math/Spherical.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L7)

This class can be used to represent points in 3D space as
[Spherical coordinates][https://en.wikipedia.org/wiki/Spherical\_coordinate\_system](https://en.wikipedia.org/wiki/Spherical_coordinate_system).

## Constructors

### Constructor

> **new Spherical**(`radius`?, `phi`?, `theta`?): `Spherical`

Defined in: [three/src/math/Spherical.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L16)

Constructs a new spherical.

#### Parameters

##### radius?

`number` = `1`

The radius, or the Euclidean distance (straight-line distance) from the point to the origin.

##### phi?

`number` = `0`

The polar angle in radians from the y (up) axis.

##### theta?

`number` = `0`

The equator/azimuthal angle in radians around the y (up) axis.

#### Returns

`Spherical`

## Properties

### phi

> **phi**: `number`

Defined in: [three/src/math/Spherical.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L32)

The polar angle in radians from the y (up) axis.

#### Default

```ts
0
```

***

### radius

> **radius**: `number`

Defined in: [three/src/math/Spherical.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L24)

The radius, or the Euclidean distance (straight-line distance) from the point to the origin.

#### Default

```ts
1
```

***

### theta

> **theta**: `number`

Defined in: [three/src/math/Spherical.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L40)

The equator/azimuthal angle in radians around the y (up) axis.

#### Default

```ts
0
```

## Methods

### clone()

> **clone**(): `Spherical`

Defined in: [three/src/math/Spherical.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L139)

Returns a new spherical with copied values from this instance.

#### Returns

`Spherical`

A clone of this instance.

***

### copy()

> **copy**(`other`): `Spherical`

Defined in: [three/src/math/Spherical.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L68)

Copies the values of the given spherical to this instance.

#### Parameters

##### other

`Spherical`

The spherical to copy.

#### Returns

`Spherical`

A reference to this spherical.

***

### makeSafe()

> **makeSafe**(): `Spherical`

Defined in: [three/src/math/Spherical.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L84)

Restricts the polar angle [page:.phi phi] to be between `0.000001` and pi -
`0.000001`.

#### Returns

`Spherical`

A reference to this spherical.

***

### set()

> **set**(`radius`, `phi`, `theta`): `Spherical`

Defined in: [three/src/math/Spherical.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L52)

Sets the spherical components by copying the given values.

#### Parameters

##### radius

`number`

The radius.

##### phi

`number`

The polar angle.

##### theta

`number`

The azimuthal angle.

#### Returns

`Spherical`

A reference to this spherical.

***

### setFromCartesianCoords()

> **setFromCartesianCoords**(`x`, `y`, `z`): `Spherical`

Defined in: [three/src/math/Spherical.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L114)

Sets the spherical components from the given Cartesian coordinates.

#### Parameters

##### x

`number`

The x value.

##### y

`number`

The x value.

##### z

`number`

The x value.

#### Returns

`Spherical`

A reference to this spherical.

***

### setFromVector3()

> **setFromVector3**(`v`): `Spherical`

Defined in: [three/src/math/Spherical.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Spherical.js#L100)

Sets the spherical components from the given vector which is assumed to hold
Cartesian coordinates.

#### Parameters

##### v

`Vector3`

The vector to set.

#### Returns

`Spherical`

A reference to this spherical.

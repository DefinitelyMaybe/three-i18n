---
editUrl: false
next: false
prev: false
title: "Cylindrical"
---

Defined in: [three/src/math/Cylindrical.js:5](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L5)

This class can be used to represent points in 3D space as
[Cylindrical coordinates][https://en.wikipedia.org/wiki/Cylindrical\_coordinate\_system](https://en.wikipedia.org/wiki/Cylindrical_coordinate_system).

## Constructors

### Constructor

> **new Cylindrical**(`radius`?, `theta`?, `y`?): `Cylindrical`

Defined in: [three/src/math/Cylindrical.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L14)

Constructs a new cylindrical.

#### Parameters

##### radius?

`number` = `1`

The distance from the origin to a point in the x-z plane.

##### theta?

`number` = `0`

A counterclockwise angle in the x-z plane measured in radians from the positive z-axis.

##### y?

`number` = `0`

The height above the x-z plane.

#### Returns

`Cylindrical`

## Properties

### radius

> **radius**: `number`

Defined in: [three/src/math/Cylindrical.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L22)

The distance from the origin to a point in the x-z plane.

#### Default

```ts
1
```

***

### theta

> **theta**: `number`

Defined in: [three/src/math/Cylindrical.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L30)

A counterclockwise angle in the x-z plane measured in radians from the positive z-axis.

#### Default

```ts
0
```

***

### y

> **y**: `number`

Defined in: [three/src/math/Cylindrical.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L38)

The height above the x-z plane.

#### Default

```ts
0
```

## Methods

### clone()

> **clone**(): `Cylindrical`

Defined in: [three/src/math/Cylindrical.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L112)

Returns a new cylindrical with copied values from this instance.

#### Returns

`Cylindrical`

A clone of this instance.

***

### copy()

> **copy**(`other`): `Cylindrical`

Defined in: [three/src/math/Cylindrical.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L66)

Copies the values of the given cylindrical to this instance.

#### Parameters

##### other

`Cylindrical`

The cylindrical to copy.

#### Returns

`Cylindrical`

A reference to this cylindrical.

***

### set()

> **set**(`radius`, `theta`, `y`): `Cylindrical`

Defined in: [three/src/math/Cylindrical.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L50)

Sets the cylindrical components by copying the given values.

#### Parameters

##### radius

`number`

The radius.

##### theta

`number`

The theta angle.

##### y

`number`

The height value.

#### Returns

`Cylindrical`

A reference to this cylindrical.

***

### setFromCartesianCoords()

> **setFromCartesianCoords**(`x`, `y`, `z`): `Cylindrical`

Defined in: [three/src/math/Cylindrical.js:97](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L97)

Sets the cylindrical components from the given Cartesian coordinates.

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

`Cylindrical`

A reference to this cylindrical.

***

### setFromVector3()

> **setFromVector3**(`v`): `Cylindrical`

Defined in: [three/src/math/Cylindrical.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/Cylindrical.js#L83)

Sets the cylindrical components from the given vector which is assumed to hold
Cartesian coordinates.

#### Parameters

##### v

`Vector3`

The vector to set.

#### Returns

`Cylindrical`

A reference to this cylindrical.

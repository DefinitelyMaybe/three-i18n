---
editUrl: false
next: false
prev: false
title: "SimplexNoise"
---

Defined in: [three/addons/math/SimplexNoise.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L7)

A utility class providing noise functions.

The code is based on [Simplex noise demystified][https://web.archive.org/web/20210210162332/http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf](https://web.archive.org/web/20210210162332/http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf)
by Stefan Gustavson, 2005.

## Constructors

### Constructor

> **new SimplexNoise**(`r`?): `SimplexNoise`

Defined in: [three/addons/math/SimplexNoise.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L15)

Constructs a new simplex noise object.

#### Parameters

##### r?

`any` = `Math`

A math utility class that holds a `random()` method. This makes it
possible to pass in custom random number generator.

#### Returns

`SimplexNoise`

## Properties

### grad3

> **grad3**: `number`[][]

Defined in: [three/addons/math/SimplexNoise.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L17)

***

### grad4

> **grad4**: `number`[][]

Defined in: [three/addons/math/SimplexNoise.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L21)

***

### p

> **p**: `number`[]

Defined in: [three/addons/math/SimplexNoise.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L30)

***

### perm

> **perm**: `number`[]

Defined in: [three/addons/math/SimplexNoise.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L39)

***

### simplex

> **simplex**: `number`[][]

Defined in: [three/addons/math/SimplexNoise.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L49)

## Methods

### \_dot()

> **\_dot**(`g`, `x`, `y`): `number`

Defined in: [three/addons/math/SimplexNoise.js:448](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L448)

#### Parameters

##### g

`any`

##### x

`any`

##### y

`any`

#### Returns

`number`

***

### \_dot3()

> **\_dot3**(`g`, `x`, `y`, `z`): `number`

Defined in: [three/addons/math/SimplexNoise.js:454](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L454)

#### Parameters

##### g

`any`

##### x

`any`

##### y

`any`

##### z

`any`

#### Returns

`number`

***

### \_dot4()

> **\_dot4**(`g`, `x`, `y`, `z`, `w`): `number`

Defined in: [three/addons/math/SimplexNoise.js:460](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L460)

#### Parameters

##### g

`any`

##### x

`any`

##### y

`any`

##### z

`any`

##### w

`any`

#### Returns

`number`

***

### noise()

> **noise**(`xin`, `yin`): `number`

Defined in: [three/addons/math/SimplexNoise.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L68)

A 2D simplex noise method.

#### Parameters

##### xin

`number`

The x coordinate.

##### yin

`number`

The y coordinate.

#### Returns

`number`

The noise value.

***

### noise3d()

> **noise3d**(`xin`, `yin`, `zin`): `number`

Defined in: [three/addons/math/SimplexNoise.js:157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L157)

A 3D simplex noise method.

#### Parameters

##### xin

`number`

The x coordinate.

##### yin

`number`

The y coordinate.

##### zin

`number`

The z coordinate.

#### Returns

`number`

The noise value.

***

### noise4d()

> **noise4d**(`x`, `y`, `z`, `w`): `number`

Defined in: [three/addons/math/SimplexNoise.js:302](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/SimplexNoise.js#L302)

A 4D simplex noise method.

#### Parameters

##### x

`number`

The x coordinate.

##### y

`number`

The y coordinate.

##### z

`number`

The z coordinate.

##### w

`number`

The w coordinate.

#### Returns

`number`

The noise value.

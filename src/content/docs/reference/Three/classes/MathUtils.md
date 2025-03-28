---
editUrl: false
next: false
prev: false
title: "MathUtils"
---

Defined in: [three/src/math/MathUtils.js:478](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L478)

## Classdesc

A collection of math utility functions.

## Properties

### ceilPowerOfTwo()

> `static` **ceilPowerOfTwo**: (`value`) => `number`

Defined in: [three/src/math/MathUtils.js:675](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L675)

Returns the smallest power of two that is greater than or equal to the given number.

Returns the smallest power of two that is greater than or equal to the given number.

#### Parameters

##### value

`number`

The value to find a POT for.

#### Returns

`number`

The smallest power of two that is greater than or equal to the given number.

#### Static

#### Method

#### Param

The value to find a POT for.

#### Returns

The smallest power of two that is greater than or equal to the given number.

***

### clamp()

> `static` **clamp**: (`value`, `min`, `max`) => `number`

Defined in: [three/src/math/MathUtils.js:500](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L500)

Clamps the given value between min and max.

Clamps the given value between min and max.

#### Parameters

##### value

`number`

The value to clamp.

##### min

`number`

The min value.

##### max

`number`

The max value.

#### Returns

`number`

The clamped value.

#### Static

#### Method

#### Param

The value to clamp.

#### Param

The min value.

#### Param

The max value.

#### Returns

The clamped value.

***

### damp()

> `static` **damp**: (`x`, `y`, `lambda`, `dt`) => `number`

Defined in: [three/src/math/MathUtils.js:564](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L564)

Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
time to maintain frame rate independent movement. For details, see
[Frame rate independent damping using lerp][http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/](http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/).

Smoothly interpolate a number from `x` to `y` in  a spring-like manner using a delta
time to maintain frame rate independent movement. For details, see
[Frame rate independent damping using lerp][http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/](http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/).

#### Parameters

##### x

`number`

The current point.

##### y

`number`

The target point.

##### lambda

`number`

A higher lambda value will make the movement more sudden,
and a lower value will make the movement more gradual.

##### dt

`number`

Delta time in seconds.

#### Returns

`number`

The interpolated value.

#### Static

#### Method

#### Param

The current point.

#### Param

The target point.

#### Param

A higher lambda value will make the movement more sudden,
and a lower value will make the movement more gradual.

#### Param

Delta time in seconds.

#### Returns

The interpolated value.

***

### DEG2RAD

> `static` **DEG2RAD**: `number`

Defined in: [three/src/math/MathUtils.js:479](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L479)

***

### degToRad()

> `static` **degToRad**: (`degrees`) => `number`

Defined in: [three/src/math/MathUtils.js:648](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L648)

Converts degrees to radians.

Converts degrees to radians.

#### Parameters

##### degrees

`number`

A value in degrees.

#### Returns

`number`

The converted value in radians.

#### Static

#### Method

#### Param

A value in degrees.

#### Returns

The converted value in radians.

***

### denormalize()

> `static` **denormalize**: (`value`, `array`) => `number`

Defined in: [three/src/math/MathUtils.js:720](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L720)

Denormalizes the given value according to the given typed array.

Denormalizes the given value according to the given typed array.

#### Parameters

##### value

`number`

The value to denormalize.

##### array

`TypedArray`

The typed array that defines the data type of the value.

#### Returns

`number`

The denormalize (float) value in the range `[0,1]`.

#### Static

#### Method

#### Param

The value to denormalize.

#### Param

The typed array that defines the data type of the value.

#### Returns

The denormalize (float) value in the range `[0,1]`.

***

### euclideanModulo()

> `static` **euclideanModulo**: (`n`, `m`) => `number`

Defined in: [three/src/math/MathUtils.js:511](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L511)

Computes the Euclidean modulo of the given parameters that
is `( ( n % m ) + m ) % m`.

Computes the Euclidean modulo of the given parameters that
is `( ( n % m ) + m ) % m`.

#### Parameters

##### n

`number`

The first parameter.

##### m

`number`

The second parameter.

#### Returns

`number`

The Euclidean modulo.

#### Static

#### Method

#### Param

The first parameter.

#### Param

The second parameter.

#### Returns

The Euclidean modulo.

***

### floorPowerOfTwo()

> `static` **floorPowerOfTwo**: (`value`) => `number`

Defined in: [three/src/math/MathUtils.js:684](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L684)

Returns the largest power of two that is less than or equal to the given number.

Returns the largest power of two that is less than or equal to the given number.

#### Parameters

##### value

`number`

The value to find a POT for.

#### Returns

`number`

The largest power of two that is less than or equal to the given number.

#### Static

#### Method

#### Param

The value to find a POT for.

#### Returns

The largest power of two that is less than or equal to the given number.

***

### generateUUID()

> `static` **generateUUID**: () => `string`

Defined in: [three/src/math/MathUtils.js:489](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L489)

Generate a [UUID][https://en.wikipedia.org/wiki/Universally\_unique\_identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)
(universally unique identifier).

Generate a [UUID][https://en.wikipedia.org/wiki/Universally\_unique\_identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)
(universally unique identifier).

#### Returns

`string`

The UUID.

#### Static

#### Method

#### Returns

The UUID.

***

### inverseLerp()

> `static` **inverseLerp**: (`x`, `y`, `value`) => `number`

Defined in: [three/src/math/MathUtils.js:537](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L537)

Returns the percentage in the closed interval `[0, 1]` of the given value
between the start and end point.

Returns the percentage in the closed interval `[0, 1]` of the given value
between the start and end point.

#### Parameters

##### x

`number`

The start point

##### y

`number`

The end point.

##### value

`number`

A value between start and end.

#### Returns

`number`

The interpolation factor.

#### Static

#### Method

#### Param

The start point

#### Param

The end point.

#### Param

A value between start and end.

#### Returns

The interpolation factor.

***

### isPowerOfTwo()

> `static` **isPowerOfTwo**: (`value`) => `boolean`

Defined in: [three/src/math/MathUtils.js:666](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L666)

Returns `true` if the given number is a power of two.

Returns `true` if the given number is a power of two.

#### Parameters

##### value

`number`

The value to check.

#### Returns

`boolean`

Whether the given number is a power of two or not.

#### Static

#### Method

#### Param

The value to check.

#### Returns

Whether the given number is a power of two or not.

***

### lerp()

> `static` **lerp**: (`x`, `y`, `t`) => `number`

Defined in: [three/src/math/MathUtils.js:549](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L549)

Returns a value linearly interpolated from two known points based on the given interval -
`t = 0` will return `x` and `t = 1` will return `y`.

Returns a value linearly interpolated from two known points based on the given interval -
`t = 0` will return `x` and `t = 1` will return `y`.

#### Parameters

##### x

`number`

The start point

##### y

`number`

The end point.

##### t

`number`

The interpolation factor in the closed interval `[0, 1]`.

#### Returns

`number`

The interpolated value.

#### Static

#### Method

#### Param

The start point

#### Param

The end point.

#### Param

The interpolation factor in the closed interval `[0, 1]`.

#### Returns

The interpolated value.

***

### mapLinear()

> `static` **mapLinear**: (`x`, `a1`, `a2`, `b1`, `b2`) => `number`

Defined in: [three/src/math/MathUtils.js:525](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L525)

Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
for the given value.

Performs a linear mapping from range `<a1, a2>` to range `<b1, b2>`
for the given value.

#### Parameters

##### x

`number`

The value to be mapped.

##### a1

`number`

Minimum value for range A.

##### a2

`number`

Maximum value for range A.

##### b1

`number`

Minimum value for range B.

##### b2

`number`

Maximum value for range B.

#### Returns

`number`

The mapped value.

#### Static

#### Method

#### Param

The value to be mapped.

#### Param

Minimum value for range A.

#### Param

Maximum value for range A.

#### Param

Minimum value for range B.

#### Param

Maximum value for range B.

#### Returns

The mapped value.

***

### normalize()

> `static` **normalize**: (`value`, `array`) => `number`

Defined in: [three/src/math/MathUtils.js:710](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L710)

Normalizes the given value according to the given typed array.

Normalizes the given value according to the given typed array.

#### Parameters

##### value

`number`

The float value in the range `[0,1]` to normalize.

##### array

`TypedArray`

The typed array that defines the data type of the value.

#### Returns

`number`

The normalize value.

#### Static

#### Method

#### Param

The float value in the range `[0,1]` to normalize.

#### Param

The typed array that defines the data type of the value.

#### Returns

The normalize value.

***

### pingpong()

> `static` **pingpong**: (`x`, `length`?) => `number`

Defined in: [three/src/math/MathUtils.js:574](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L574)

Returns a value that alternates between `0` and the given `length` parameter.

Returns a value that alternates between `0` and the given `length` parameter.

#### Parameters

##### x

`number`

The value to pingpong.

##### length?

`number` = `1`

The positive value the function will pingpong to.

#### Returns

`number`

The alternated value.

#### Static

#### Method

#### Param

The value to pingpong.

#### Param

The positive value the function will pingpong to.

#### Returns

The alternated value.

***

### RAD2DEG

> `static` **RAD2DEG**: `number`

Defined in: [three/src/math/MathUtils.js:480](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L480)

***

### radToDeg()

> `static` **radToDeg**: (`radians`) => `number`

Defined in: [three/src/math/MathUtils.js:657](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L657)

Converts radians to degrees.

Converts radians to degrees.

#### Parameters

##### radians

`number`

A value in radians.

#### Returns

`number`

The converted value in degrees.

#### Static

#### Method

#### Param

A value in radians.

#### Returns

The converted value in degrees.

***

### randFloat()

> `static` **randFloat**: (`low`, `high`) => `number`

Defined in: [three/src/math/MathUtils.js:621](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L621)

Returns a random float from `<low, high>` interval.

Returns a random float from `<low, high>` interval.

#### Parameters

##### low

`number`

The lower value boundary.

##### high

`number`

The upper value boundary

#### Returns

`number`

A random float.

#### Static

#### Method

#### Param

The lower value boundary.

#### Param

The upper value boundary

#### Returns

A random float.

***

### randFloatSpread()

> `static` **randFloatSpread**: (`range`) => `number`

Defined in: [three/src/math/MathUtils.js:630](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L630)

Returns a random integer from `<-range/2, range/2>` interval.

Returns a random integer from `<-range/2, range/2>` interval.

#### Parameters

##### range

`number`

Defines the value range.

#### Returns

`number`

A random float.

#### Static

#### Method

#### Param

Defines the value range.

#### Returns

A random float.

***

### randInt()

> `static` **randInt**: (`low`, `high`) => `number`

Defined in: [three/src/math/MathUtils.js:611](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L611)

Returns a random integer from `<low, high>` interval.

Returns a random integer from `<low, high>` interval.

#### Parameters

##### low

`number`

The lower value boundary.

##### high

`number`

The upper value boundary

#### Returns

`number`

A random integer.

#### Static

#### Method

#### Param

The lower value boundary.

#### Param

The upper value boundary

#### Returns

A random integer.

***

### seededRandom()

> `static` **seededRandom**: (`s`?) => `number`

Defined in: [three/src/math/MathUtils.js:639](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L639)

Returns a deterministic pseudo-random float in the interval `[0, 1]`.

Returns a deterministic pseudo-random float in the interval `[0, 1]`.

#### Parameters

##### s?

`number`

The integer seed.

#### Returns

`number`

A random float.

#### Static

#### Method

#### Param

The integer seed.

#### Returns

A random float.

***

### setQuaternionFromProperEuler()

> `static` **setQuaternionFromProperEuler**: (`q`, `a`, `b`, `c`, `order`) => `void`

Defined in: [three/src/math/MathUtils.js:700](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L700)

Sets the given quaternion from the [Intrinsic Proper Euler Angles][https://en.wikipedia.org/wiki/Euler\_angles](https://en.wikipedia.org/wiki/Euler_angles)
defined by the given angles and order.

Rotations are applied to the axes in the order specified by order:
rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.

Sets the given quaternion from the [Intrinsic Proper Euler Angles][https://en.wikipedia.org/wiki/Euler\_angles](https://en.wikipedia.org/wiki/Euler_angles)
defined by the given angles and order.

Rotations are applied to the axes in the order specified by order:
rotation by angle `a` is applied first, then by angle `b`, then by angle `c`.

#### Parameters

##### q

`Quaternion`

The quaternion to set.

##### a

`number`

The rotation applied to the first axis, in radians.

##### b

`number`

The rotation applied to the second axis, in radians.

##### c

`number`

The rotation applied to the third axis, in radians.

##### order

A string specifying the axes order.

`"XYX"` | `"XZX"` | `"YXY"` | `"YZY"` | `"ZXZ"` | `"ZYZ"`

#### Returns

`void`

#### Static

#### Method

#### Param

The quaternion to set.

#### Param

The rotation applied to the first axis, in radians.

#### Param

The rotation applied to the second axis, in radians.

#### Param

The rotation applied to the third axis, in radians.

#### Param

A string specifying the axes order.

***

### smootherstep()

> `static` **smootherstep**: (`x`, `min`, `max`) => `number`

Defined in: [three/src/math/MathUtils.js:601](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L601)

A [variation on smoothstep][https://en.wikipedia.org/wiki/Smoothstep#Variations](https://en.wikipedia.org/wiki/Smoothstep#Variations)
that has zero 1st and 2nd order derivatives at x=0 and x=1.

A [variation on smoothstep][https://en.wikipedia.org/wiki/Smoothstep#Variations](https://en.wikipedia.org/wiki/Smoothstep#Variations)
that has zero 1st and 2nd order derivatives at x=0 and x=1.

#### Parameters

##### x

`number`

The value to evaluate based on its position between min and max.

##### min

`number`

The min value. Any x value below min will be `0`.

##### max

`number`

The max value. Any x value above max will be `1`.

#### Returns

`number`

The alternated value.

#### Static

#### Method

#### Param

The value to evaluate based on its position between min and max.

#### Param

The min value. Any x value below min will be `0`.

#### Param

The max value. Any x value above max will be `1`.

#### Returns

The alternated value.

***

### smoothstep()

> `static` **smoothstep**: (`x`, `min`, `max`) => `number`

Defined in: [three/src/math/MathUtils.js:589](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/MathUtils.js#L589)

Returns a value in the range `[0,1]` that represents the percentage that `x` has
moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
the `min` and `max`.

See [Smoothstep][http://en.wikipedia.org/wiki/Smoothstep](http://en.wikipedia.org/wiki/Smoothstep) for more details.

Returns a value in the range `[0,1]` that represents the percentage that `x` has
moved between `min` and `max`, but smoothed or slowed down the closer `x` is to
the `min` and `max`.

See [Smoothstep][http://en.wikipedia.org/wiki/Smoothstep](http://en.wikipedia.org/wiki/Smoothstep) for more details.

#### Parameters

##### x

`number`

The value to evaluate based on its position between min and max.

##### min

`number`

The min value. Any x value below min will be `0`.

##### max

`number`

The max value. Any x value above max will be `1`.

#### Returns

`number`

The alternated value.

#### Static

#### Method

#### Param

The value to evaluate based on its position between min and max.

#### Param

The min value. Any x value below min will be `0`.

#### Param

The max value. Any x value above max will be `1`.

#### Returns

The alternated value.

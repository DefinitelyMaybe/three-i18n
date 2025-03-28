---
editUrl: false
next: false
prev: false
title: "SphericalHarmonics3"
---

Defined in: [three/src/math/SphericalHarmonics3.js:10](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L10)

Represents a third-order spherical harmonics (SH). Light probes use this class
to encode lighting information.

- Primary reference: [https://graphics.stanford.edu/papers/envmap/envmap.pdf](https://graphics.stanford.edu/papers/envmap/envmap.pdf)
- Secondary reference: [https://www.ppsloan.org/publications/StupidSH36.pdf](https://www.ppsloan.org/publications/StupidSH36.pdf)

## Constructors

### Constructor

> **new SphericalHarmonics3**(): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L15)

Constructs a new spherical harmonics.

#### Returns

`SphericalHarmonics3`

## Properties

### coefficients

> **coefficients**: [`Vector3`](/reference/three/classes/vector3/)[]

Defined in: [three/src/math/SphericalHarmonics3.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L31)

An array holding the (9) SH coefficients.

***

### isSphericalHarmonics3

> `readonly` **isSphericalHarmonics3**: `boolean`

Defined in: [three/src/math/SphericalHarmonics3.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L24)

This flag can be used for type testing.

#### Default

```ts
true
```

## Methods

### add()

> **add**(`sh`): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L152)

Adds the given SH to this instance.

#### Parameters

##### sh

`SphericalHarmonics3`

The SH to add.

#### Returns

`SphericalHarmonics3`

A reference to this spherical harmonics.

***

### addScaledSH()

> **addScaledSH**(`sh`, `s`): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L172)

A convenience method for performing [SphericalHarmonics3#add](/reference/three/classes/sphericalharmonics3/#add) and
[SphericalHarmonics3#scale](/reference/three/classes/sphericalharmonics3/#scale) at once.

#### Parameters

##### sh

`SphericalHarmonics3`

The SH to add.

##### s

`number`

The scale factor.

#### Returns

`SphericalHarmonics3`

A reference to this spherical harmonics.

***

### clone()

> **clone**(): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:261](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L261)

Returns a new spherical harmonics with copied values from this instance.

#### Returns

`SphericalHarmonics3`

A clone of this instance.

***

### copy()

> **copy**(`sh`): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:250](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L250)

Copies the values of the given spherical harmonics to this instance.

#### Parameters

##### sh

`SphericalHarmonics3`

The spherical harmonics to copy.

#### Returns

`SphericalHarmonics3`

A reference to this spherical harmonics.

***

### equals()

> **equals**(`sh`): `boolean`

Defined in: [three/src/math/SphericalHarmonics3.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L228)

Returns `true` if this spherical harmonics is equal with the given one.

#### Parameters

##### sh

`SphericalHarmonics3`

The spherical harmonics to test for equality.

#### Returns

`boolean`

Whether this spherical harmonics is equal with the given one.

***

### fromArray()

> **fromArray**(`array`, `offset`?): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:274](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L274)

Sets the SH coefficients of this instance from the given array.

#### Parameters

##### array

`number`[]

An array holding the SH coefficients.

##### offset?

`number` = `0`

The array offset where to start copying.

#### Returns

`SphericalHarmonics3`

A clone of this instance.

***

### getAt()

> **getAt**(`normal`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/SphericalHarmonics3.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L84)

Returns the radiance in the direction of the given normal.

#### Parameters

##### normal

[`Vector3`](/reference/three/classes/vector3/)

The normal vector (assumed to be unit length)

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The radiance.

***

### getIrradianceAt()

> **getIrradianceAt**(`normal`, `target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/math/SphericalHarmonics3.js:119](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L119)

Returns the irradiance (radiance convolved with cosine lobe) in the
direction of the given normal.

#### Parameters

##### normal

[`Vector3`](/reference/three/classes/vector3/)

The normal vector (assumed to be unit length)

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector that is used to store the method's result.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The irradiance.

***

### lerp()

> **lerp**(`sh`, `alpha`): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L210)

Linear interpolates between the given SH and this instance by the given
alpha factor.

#### Parameters

##### sh

`SphericalHarmonics3`

The SH to interpolate with.

##### alpha

`number`

The alpha factor.

#### Returns

`SphericalHarmonics3`

A reference to this spherical harmonics.

***

### scale()

> **scale**(`s`): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L190)

Scales this SH by the given scale factor.

#### Parameters

##### s

`number`

The scale factor.

#### Returns

`SphericalHarmonics3`

A reference to this spherical harmonics.

***

### set()

> **set**(`coefficients`): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L48)

Sets the given SH coefficients to this instance by copying
the values.

#### Parameters

##### coefficients

[`Vector3`](/reference/three/classes/vector3/)[]

The SH coefficients.

#### Returns

`SphericalHarmonics3`

A reference to this spherical harmonics.

***

### toArray()

> **toArray**(`array`?, `offset`?): `number`[]

Defined in: [three/src/math/SphericalHarmonics3.js:296](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L296)

Returns an array with the SH coefficients, or copies them into the provided
array. The coefficients are represented as numbers.

#### Parameters

##### array?

`number`[] = `[]`

The target array.

##### offset?

`number` = `0`

The array offset where to start copying.

#### Returns

`number`[]

An array with flat SH coefficients.

***

### zero()

> **zero**(): `SphericalHarmonics3`

Defined in: [three/src/math/SphericalHarmonics3.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L65)

Sets all SH coefficients to `0`.

#### Returns

`SphericalHarmonics3`

A reference to this spherical harmonics.

***

### getBasisAt()

> `static` **getBasisAt**(`normal`, `shBasis`): `void`

Defined in: [three/src/math/SphericalHarmonics3.js:316](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/SphericalHarmonics3.js#L316)

Computes the SH basis for the given normal vector.

#### Parameters

##### normal

[`Vector3`](/reference/three/classes/vector3/)

The normal.

##### shBasis

`number`[]

The target array holding the SH basis.

#### Returns

`void`

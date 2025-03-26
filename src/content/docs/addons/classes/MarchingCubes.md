---
editUrl: false
next: false
prev: false
title: "MarchingCubes"
---

Defined in: [three/addons/objects/MarchingCubes.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L16)

A marching cubes implementation.

Port of: [http://webglsamples.org/blob/blob.html](http://webglsamples.org/blob/blob.html)

## Extends

- `unknown`

## Constructors

### Constructor

> **new MarchingCubes**(`resolution`, `material`, `enableUvs`?, `enableColors`?, `maxPolyCount`?): `MarchingCubes`

Defined in: [three/addons/objects/MarchingCubes.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L27)

Constructs a new marching cubes instance.

#### Parameters

##### resolution

`number`

The effect's resolution.

##### material

`Material`

The cube's material.

##### enableUvs?

`boolean` = `false`

Whether texture coordinates should be animated or not.

##### enableColors?

`boolean` = `false`

Whether colors should be animated or not.

##### maxPolyCount?

`number` = `10000`

The maximum size of the geometry buffers.

#### Returns

`MarchingCubes`

#### Overrides

`Mesh.constructor`

## Properties

### addBall()

> **addBall**: (`ballx`, `bally`, `ballz`, `strength`, `subtract`, `colors`) => `void`

Defined in: [three/addons/objects/MarchingCubes.js:539](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L539)

Adds a reciprocal ball (nice and blobby) that, to be fast, fades to zero after
a fixed distance, determined by strength and subtract.

#### Parameters

##### ballx

`number`

The x-coordinate of the ball.

##### bally

`number`

The y-coordinate of the ball.

##### ballz

`number`

The z-coordinate of the ball.

##### strength

`number`

The strength factor.

##### subtract

`number`

The subtract factor.

##### colors

`Color`

The color.

#### Returns

`void`

***

### addPlaneX()

> **addPlaneX**: (`strength`, `subtract`) => `void`

Defined in: [three/addons/objects/MarchingCubes.js:645](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L645)

Adds a plane along the x-axis.

#### Parameters

##### strength

`number`

The strength factor.

##### subtract

`number`

The subtract factor.

#### Returns

`void`

***

### addPlaneY()

> **addPlaneY**: (`strength`, `subtract`) => `void`

Defined in: [three/addons/objects/MarchingCubes.js:696](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L696)

Adds a plane along the y-axis.

#### Parameters

##### strength

`number`

The strength factor.

##### subtract

`number`

The subtract factor.

#### Returns

`void`

***

### addPlaneZ()

> **addPlaneZ**: (`strength`, `subtract`) => `void`

Defined in: [three/addons/objects/MarchingCubes.js:746](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L746)

Adds a plane along the z-axis.

#### Parameters

##### strength

`number`

The strength factor.

##### subtract

`number`

The subtract factor.

#### Returns

`void`

***

### blur()

> **blur**: (`intensity`?) => `void`

Defined in: [three/addons/objects/MarchingCubes.js:829](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L829)

Applies a blur with the given intensity.

#### Parameters

##### intensity?

`number` = `1`

The intensity of the blur.

#### Returns

`void`

***

### enableColors

> **enableColors**: `boolean`

Defined in: [three/addons/objects/MarchingCubes.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L64)

Whether colors should be animated or not.

#### Default

```ts
false
```

***

### enableUvs

> **enableUvs**: `boolean`

Defined in: [three/addons/objects/MarchingCubes.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L56)

Whether texture coordinates should be animated or not.

#### Default

```ts
false
```

***

### getCell()

> **getCell**: (`x`, `y`, `z`) => `number`

Defined in: [three/addons/objects/MarchingCubes.js:817](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L817)

Returns the cell value for the given coordinates.

#### Parameters

##### x

`number`

The x value.

##### y

`number`

The y value.

##### z

`number`

The z value.

#### Returns

`number`

The value.

***

### init

> **init**: *typeof* `__function`

Defined in: [three/addons/objects/MarchingCubes.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L70)

***

### isMarchingCubes

> `readonly` **isMarchingCubes**: `boolean`

Defined in: [three/addons/objects/MarchingCubes.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L40)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### reset()

> **reset**: () => `void`

Defined in: [three/addons/objects/MarchingCubes.js:885](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L885)

Resets the effect.

#### Returns

`void`

***

### setCell()

> **setCell**: (`x`, `y`, `z`, `value`) => `void`

Defined in: [three/addons/objects/MarchingCubes.js:802](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L802)

Sets the cell value for the given coordinates.

#### Parameters

##### x

`number`

The x value.

##### y

`number`

The y value.

##### z

`number`

The z value.

##### value

`number`

The value to set.

#### Returns

`void`

***

### update

> **update**: *typeof* `__function`

Defined in: [three/addons/objects/MarchingCubes.js:904](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/MarchingCubes.js#L904)

Updates the effect.

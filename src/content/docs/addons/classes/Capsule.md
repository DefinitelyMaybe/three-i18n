---
editUrl: false
next: false
prev: false
title: "Capsule"
---

Defined in: [three/addons/math/Capsule.js:11](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L11)

A capsule is essentially a cylinder with hemispherical caps at both ends.
It can be thought of as a swept sphere, where a sphere is moved along a line segment.

Capsules are often used as bounding volumes (next to AABBs and bounding spheres).

## Constructors

### Constructor

> **new Capsule**(`start`?, `end`?, `radius`?): `Capsule`

Defined in: [three/addons/math/Capsule.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L20)

Constructs a new capsule.

#### Parameters

##### start?

`Vector3` = `...`

The start vector.

##### end?

`Vector3` = `...`

The end vector.

##### radius?

`number` = `1`

The capsule's radius.

#### Returns

`Capsule`

## Properties

### end

> **end**: `Vector3`

Defined in: [three/addons/math/Capsule.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L34)

The end vector.

***

### radius

> **radius**: `number`

Defined in: [three/addons/math/Capsule.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L42)

The capsule's radius.

#### Default

```ts
1
```

***

### start

> **start**: `Vector3`

Defined in: [three/addons/math/Capsule.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L27)

The start vector.

## Methods

### clone()

> **clone**(): `Capsule`

Defined in: [three/addons/math/Capsule.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L51)

Returns a new capsule with copied values from this instance.

#### Returns

`Capsule`

A clone of this instance.

***

### copy()

> **copy**(`capsule`): `Capsule`

Defined in: [three/addons/math/Capsule.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L82)

Copies the values of the given capsule to this instance.

#### Parameters

##### capsule

`Capsule`

The capsule to copy.

#### Returns

`Capsule`

A reference to this capsule.

***

### getCenter()

> **getCenter**(`target`): `Vector3`

Defined in: [three/addons/math/Capsule.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L98)

Returns the center point of this capsule.

#### Parameters

##### target

`Vector3`

The target vector that is used to store the method's result.

#### Returns

`Vector3`

The center point.

***

### intersectsBox()

> **intersectsBox**(`box`): `boolean`

Defined in: [three/addons/math/Capsule.js:125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L125)

Returns `true` if the given bounding box intersects with this capsule.

#### Parameters

##### box

`Box3`

The bounding box to test.

#### Returns

`boolean`

Whether the given bounding box intersects with this capsule.

***

### set()

> **set**(`start`, `end`, `radius`): `Capsule`

Defined in: [three/addons/math/Capsule.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L66)

Sets the capsule components to the given values.
Please note that this method only copies the values from the given objects.

#### Parameters

##### start

`Vector3`

The start vector.

##### end

`Vector3`

The end vector

##### radius

`number`

The capsule's radius.

#### Returns

`Capsule`

A reference to this capsule.

***

### translate()

> **translate**(`v`): `Capsule`

Defined in: [three/addons/math/Capsule.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/math/Capsule.js#L110)

Adds the given offset to this capsule, effectively moving it in 3D space.

#### Parameters

##### v

`Vector3`

The offset that should be used to translate the capsule.

#### Returns

`Capsule`

A reference to this capsule.

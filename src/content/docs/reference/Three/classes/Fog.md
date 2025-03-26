---
editUrl: false
next: false
prev: false
title: "Fog"
---

Defined in: [three/src/scenes/Fog.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L12)

This class can be used to define a linear fog that grows linearly denser
with the distance.

```js
const scene = new THREE.Scene();
scene.fog = new THREE.Fog( 0xcccccc, 10, 15 );
```

## Constructors

### Constructor

> **new Fog**(`color`, `near`?, `far`?): `Fog`

Defined in: [three/src/scenes/Fog.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L21)

Constructs a new fog.

#### Parameters

##### color

The fog's color.

`number` | [`Color`](/reference/three/classes/color/)

##### near?

`number` = `1`

The minimum distance to start applying fog.

##### far?

`number` = `1000`

The maximum distance at which fog stops being calculated and applied.

#### Returns

`Fog`

## Properties

### color

> **color**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/scenes/Fog.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L44)

The fog's color.

***

### far

> **far**: `number`

Defined in: [three/src/scenes/Fog.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L63)

The maximum distance at which fog stops being calculated and applied.
Objects that are more than `far` units away from the active camera won't
be affected by fog.

#### Default

```ts
1000
```

***

### isFog

> `readonly` **isFog**: `boolean`

Defined in: [three/src/scenes/Fog.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L30)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### name

> **name**: `string`

Defined in: [three/src/scenes/Fog.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L37)

The name of the fog.

***

### near

> **near**: `number`

Defined in: [three/src/scenes/Fog.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L53)

The minimum distance to start applying fog. Objects that are less than
`near` units from the active camera won't be affected by fog.

#### Default

```ts
1
```

## Methods

### clone()

> **clone**(): `Fog`

Defined in: [three/src/scenes/Fog.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L72)

Returns a new fog with copied values from this instance.

#### Returns

`Fog`

A clone of this instance.

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/scenes/Fog.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/Fog.js#L84)

Serializes the fog into JSON.

#### Returns

`any`

A JSON object representing the serialized fog

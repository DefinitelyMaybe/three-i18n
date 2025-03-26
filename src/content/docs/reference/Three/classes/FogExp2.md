---
editUrl: false
next: false
prev: false
title: "FogExp2"
---

Defined in: [three/src/scenes/FogExp2.js:13](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/FogExp2.js#L13)

This class can be used to define an exponential squared fog,
which gives a clear view near the camera and a faster than exponentially
densening fog farther from the camera.

```js
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );
```

## Constructors

### Constructor

> **new FogExp2**(`color`, `density`?): `FogExp2`

Defined in: [three/src/scenes/FogExp2.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/FogExp2.js#L21)

Constructs a new fog.

#### Parameters

##### color

The fog's color.

`number` | [`Color`](/reference/three/classes/color/)

##### density?

`number` = `0.00025`

Defines how fast the fog will grow dense.

#### Returns

`FogExp2`

## Properties

### color

> **color**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/scenes/FogExp2.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/FogExp2.js#L44)

The fog's color.

***

### density

> **density**: `number`

Defined in: [three/src/scenes/FogExp2.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/FogExp2.js#L52)

Defines how fast the fog will grow dense.

#### Default

```ts
0.00025
```

***

### isFogExp2

> `readonly` **isFogExp2**: `boolean`

Defined in: [three/src/scenes/FogExp2.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/FogExp2.js#L30)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### name

> **name**: `string`

Defined in: [three/src/scenes/FogExp2.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/FogExp2.js#L37)

The name of the fog.

## Methods

### clone()

> **clone**(): `FogExp2`

Defined in: [three/src/scenes/FogExp2.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/FogExp2.js#L61)

Returns a new fog with copied values from this instance.

#### Returns

`FogExp2`

A clone of this instance.

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/scenes/FogExp2.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/scenes/FogExp2.js#L73)

Serializes the fog into JSON.

#### Returns

`any`

A JSON object representing the serialized fog

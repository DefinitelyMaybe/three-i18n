---
editUrl: false
next: false
prev: false
title: "PositionalAudioHelper"
---

Defined in: [three/addons/helpers/PositionalAudioHelper.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L25)

This helper displays the directional cone of a positional audio.

`PositionalAudioHelper` must be added as a child of the positional audio.

```js
const positionalAudio = new THREE.PositionalAudio( listener );
positionalAudio.setDirectionalCone( 180, 230, 0.1 );
scene.add( positionalAudio );

const helper = new PositionalAudioHelper( positionalAudio );
positionalAudio.add( helper );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new PositionalAudioHelper**(`audio`, `range`?, `divisionsInnerAngle`?, `divisionsOuterAngle`?): `PositionalAudioHelper`

Defined in: [three/addons/helpers/PositionalAudioHelper.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L35)

Constructs a new positional audio helper.

#### Parameters

##### audio

`PositionalAudio`

The audio to visualize.

##### range?

`number` = `1`

The range of the directional cone.

##### divisionsInnerAngle?

`number` = `16`

The number of divisions of the inner part of the directional cone.

##### divisionsOuterAngle?

`number` = `2`

The number of divisions of the outer part of the directional cone.

#### Returns

`PositionalAudioHelper`

#### Overrides

`Line.constructor`

## Properties

### audio

> **audio**: `PositionalAudio`

Defined in: [three/addons/helpers/PositionalAudioHelper.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L52)

The audio to visualize.

***

### divisionsInnerAngle

> **divisionsInnerAngle**: `number`

Defined in: [three/addons/helpers/PositionalAudioHelper.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L68)

The number of divisions of the inner part of the directional cone.

#### Default

```ts
16
```

***

### divisionsOuterAngle

> **divisionsOuterAngle**: `number`

Defined in: [three/addons/helpers/PositionalAudioHelper.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L76)

The number of divisions of the outer part of the directional cone.

#### Default

```ts
2
```

***

### range

> **range**: `number`

Defined in: [three/addons/helpers/PositionalAudioHelper.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L60)

The range of the directional cone.

#### Default

```ts
1
```

***

### type

> **type**: `string`

Defined in: [three/addons/helpers/PositionalAudioHelper.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L78)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/helpers/PositionalAudioHelper.js:157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L157)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [three/addons/helpers/PositionalAudioHelper.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/PositionalAudioHelper.js#L88)

Updates the helper. This method must be called whenever the directional cone
of the positional audio is changed.

#### Returns

`void`

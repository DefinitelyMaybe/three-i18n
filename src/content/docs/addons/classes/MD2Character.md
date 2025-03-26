---
editUrl: false
next: false
prev: false
title: "MD2Character"
---

Defined in: [three/addons/misc/MD2Character.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L17)

This class represents a management component for animated MD2
character assets.

## Constructors

### Constructor

> **new MD2Character**(): `MD2Character`

Defined in: [three/addons/misc/MD2Character.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L22)

Constructs a new MD2 character.

#### Returns

`MD2Character`

## Properties

### activeAnimationClipName

> **activeAnimationClipName**: `string`

Defined in: [three/addons/misc/MD2Character.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L90)

The name of the active animation clip.

#### Default

```ts
null
```

***

### activeClipName

> **activeClipName**: `string`

Defined in: [three/addons/misc/MD2Character.js:342](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L342)

***

### animationFPS

> **animationFPS**: `number`

Defined in: [three/addons/misc/MD2Character.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L38)

The FPS

#### Default

```ts
6
```

***

### loadCounter

> **loadCounter**: `number`

Defined in: [three/addons/misc/MD2Character.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L109)

***

### meshBody

> **meshBody**: `Mesh`

Defined in: [three/addons/misc/MD2Character.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L53)

The body mesh.

#### Default

```ts
null
```

***

### meshWeapon

> **meshWeapon**: `Mesh`

Defined in: [three/addons/misc/MD2Character.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L61)

The weapon mesh.

#### Default

```ts
null
```

***

### mixer

> **mixer**: `AnimationMixer`

Defined in: [three/addons/misc/MD2Character.js:98](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L98)

The animation mixer.

#### Default

```ts
null
```

***

### onLoadComplete

> **onLoadComplete**: `Function`

Defined in: [three/addons/misc/MD2Character.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L105)

The `onLoad` callback function.

***

### root

> **root**: `Object3D`

Defined in: [three/addons/misc/MD2Character.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L45)

The root 3D object

***

### scale

> **scale**: `number`

Defined in: [three/addons/misc/MD2Character.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L30)

The mesh scale.

#### Default

```ts
1
```

***

### skinsBody

> **skinsBody**: `Texture`[]

Defined in: [three/addons/misc/MD2Character.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L68)

The body skins.

***

### skinsWeapon

> **skinsWeapon**: `Texture`[]

Defined in: [three/addons/misc/MD2Character.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L75)

The weapon skins.

***

### weapons

> **weapons**: `Mesh`[]

Defined in: [three/addons/misc/MD2Character.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L82)

The weapon meshes.

## Methods

### loadParts()

> **loadParts**(`config`): `void`

Defined in: [three/addons/misc/MD2Character.js:118](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L118)

Loads the character model for the given config.

#### Parameters

##### config

`any`

The config which defines the model and textures paths.

#### Returns

`void`

***

### setAnimation()

> **setAnimation**(`clipName`): `void`

Defined in: [three/addons/misc/MD2Character.js:321](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L321)

Sets the defined animation clip as the active animation.

#### Parameters

##### clipName

`string`

The name of the animation clip.

#### Returns

`void`

***

### setPlaybackRate()

> **setPlaybackRate**(`rate`): `void`

Defined in: [three/addons/misc/MD2Character.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L242)

Sets the animation playback rate.

#### Parameters

##### rate

`number`

The playback rate to set.

#### Returns

`void`

***

### setSkin()

> **setSkin**(`index`): `void`

Defined in: [three/addons/misc/MD2Character.js:283](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L283)

Sets the skin defined by the given skin index. This will result in a different texture
for the body mesh.

#### Parameters

##### index

`number`

The skin index.

#### Returns

`void`

***

### setWeapon()

> **setWeapon**(`index`): `void`

Defined in: [three/addons/misc/MD2Character.js:299](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L299)

Sets the weapon defined by the given weapon index. This will result in a different weapon
hold by the character.

#### Parameters

##### index

`number`

The weapon index.

#### Returns

`void`

***

### setWireframe()

> **setWireframe**(`wireframeEnabled`): `void`

Defined in: [three/addons/misc/MD2Character.js:261](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L261)

Sets the wireframe material flag.

#### Parameters

##### wireframeEnabled

`boolean`

Whether to enable wireframe rendering or not.

#### Returns

`void`

***

### syncWeaponAnimation()

> **syncWeaponAnimation**(): `void`

Defined in: [three/addons/misc/MD2Character.js:351](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L351)

Synchronizes the weapon with the body animation.

#### Returns

`void`

***

### update()

> **update**(`delta`): `void`

Defined in: [three/addons/misc/MD2Character.js:381](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/MD2Character.js#L381)

Updates the animations of the mesh. Must be called inside the animation loop.

#### Parameters

##### delta

`number`

The delta time in seconds.

#### Returns

`void`

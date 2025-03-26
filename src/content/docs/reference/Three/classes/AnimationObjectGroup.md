---
editUrl: false
next: false
prev: false
title: "AnimationObjectGroup"
---

Defined in: [three/src/animation/AnimationObjectGroup.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L24)

A group of objects that receives a shared animation state.

Usage:

- Add objects you would otherwise pass as 'root' to the
constructor or the .clipAction method of AnimationMixer.
- Instead pass this object as 'root'.
- You can also add and remove objects later when the mixer is running.

Note:

- Objects of this class appear as one object to the mixer,
so cache control of the individual objects must be done on the group.

Limitation:

- The animated properties must be compatible among the all objects in the group.
- A single property can either be controlled through a target group or directly, but not both.

## Constructors

### Constructor

> **new AnimationObjectGroup**(...`args`): `AnimationObjectGroup`

Defined in: [three/src/animation/AnimationObjectGroup.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L31)

Constructs a new animation group.

#### Parameters

##### args

...`any`

#### Returns

`AnimationObjectGroup`

## Properties

### \_bindings

> **\_bindings**: `any`[]

Defined in: [three/src/animation/AnimationObjectGroup.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L67)

***

### \_bindingsIndicesByPath

> **\_bindingsIndicesByPath**: `object`

Defined in: [three/src/animation/AnimationObjectGroup.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L68)

***

### \_indicesByUUID

> **\_indicesByUUID**: `object`

Defined in: [three/src/animation/AnimationObjectGroup.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L57)

***

### \_objects

> **\_objects**: `any`

Defined in: [three/src/animation/AnimationObjectGroup.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L51)

***

### \_parsedPaths

> **\_parsedPaths**: `any`[]

Defined in: [three/src/animation/AnimationObjectGroup.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L66)

***

### \_paths

> **\_paths**: `any`[]

Defined in: [three/src/animation/AnimationObjectGroup.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L65)

***

### isAnimationObjectGroup

> `readonly` **isAnimationObjectGroup**: `boolean`

Defined in: [three/src/animation/AnimationObjectGroup.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L40)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### nCachedObjects\_

> **nCachedObjects\_**: `number`

Defined in: [three/src/animation/AnimationObjectGroup.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L53)

***

### stats

> **stats**: `object`

Defined in: [three/src/animation/AnimationObjectGroup.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L72)

#### objects

> **objects**: `object`

##### objects.inUse

###### Get Signature

> **get** **inUse**(): `number`

Defined in: [three/src/animation/AnimationObjectGroup.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L80)

###### Returns

`number`

##### objects.total

###### Get Signature

> **get** **total**(): `any`

Defined in: [three/src/animation/AnimationObjectGroup.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L75)

###### Returns

`any`

#### bindingsPerObject

##### Get Signature

> **get** **bindingsPerObject**(): `number`

###### Returns

`number`

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/animation/AnimationObjectGroup.js:48](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L48)

The UUID of the 3D object.

## Methods

### add()

> **add**(...`args`): `void`

Defined in: [three/src/animation/AnimationObjectGroup.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L101)

Adds an arbitrary number of objects to this animation group.

#### Parameters

##### args

...`any`

#### Returns

`void`

***

### remove()

> **remove**(...`args`): `void`

Defined in: [three/src/animation/AnimationObjectGroup.js:194](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L194)

Removes an arbitrary number of objects to this animation group

#### Parameters

##### args

...`any`

#### Returns

`void`

***

### subscribe\_()

> **subscribe\_**(`path`, `parsedPath`): `any`

Defined in: [three/src/animation/AnimationObjectGroup.js:339](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L339)

#### Parameters

##### path

`any`

##### parsedPath

`any`

#### Returns

`any`

***

### uncache()

> **uncache**(...`args`): `void`

Defined in: [three/src/animation/AnimationObjectGroup.js:248](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L248)

Deallocates all memory resources for the passed 3D objects of this animation group.

#### Parameters

##### args

...`any`

#### Returns

`void`

***

### unsubscribe\_()

> **unsubscribe\_**(`path`): `void`

Defined in: [three/src/animation/AnimationObjectGroup.js:376](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/AnimationObjectGroup.js#L376)

#### Parameters

##### path

`any`

#### Returns

`void`

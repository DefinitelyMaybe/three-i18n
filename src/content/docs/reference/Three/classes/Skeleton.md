---
editUrl: false
next: false
prev: false
title: "Skeleton"
---

Defined in: [three/src/objects/Skeleton.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L36)

Class for representing the armatures in `three.js`. The skeleton
is defined by a hierarchy of bones.

```js
const bones = [];

const shoulder = new THREE.Bone();
const elbow = new THREE.Bone();
const hand = new THREE.Bone();

shoulder.add( elbow );
elbow.add( hand );

bones.push( shoulder , elbow, hand);

shoulder.position.y = -5;
elbow.position.y = 0;
hand.position.y = 5;

const armSkeleton = new THREE.Skeleton( bones );
```

## Constructors

### Constructor

> **new Skeleton**(`bones`?, `boneInverses`?): `Skeleton`

Defined in: [three/src/objects/Skeleton.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L45)

Constructs a new skeleton.

#### Parameters

##### bones?

[`Bone`](/reference/three/classes/bone/)[] = `[]`

An array of bones.

##### boneInverses?

[`Matrix4`](/reference/three/classes/matrix4/)[] = `[]`

An array of bone inverse matrices.
If not provided, these matrices will be computed automatically via [Skeleton#calculateInverses](/reference/three/classes/skeleton/#calculateinverses).

#### Returns

`Skeleton`

## Properties

### boneInverses

> **boneInverses**: [`Matrix4`](/reference/three/classes/matrix4/)[]

Defined in: [three/src/objects/Skeleton.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L61)

An array of bone inverse matrices.

***

### boneMatrices

> **boneMatrices**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [three/src/objects/Skeleton.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L70)

An array buffer holding the bone data.
Input data for [Skeleton#boneTexture](/reference/three/classes/skeleton/#bonetexture).

#### Default

```ts
null
```

***

### bones

> **bones**: [`Bone`](/reference/three/classes/bone/)[]

Defined in: [three/src/objects/Skeleton.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L54)

An array of bones defining the skeleton.

***

### boneTexture

> **boneTexture**: [`DataTexture`](/reference/three/classes/datatexture/)

Defined in: [three/src/objects/Skeleton.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L79)

A texture holding the bone data for use
in the vertex shader.

#### Default

```ts
null
```

***

### uuid

> **uuid**: `string`

Defined in: [three/src/objects/Skeleton.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L47)

## Methods

### calculateInverses()

> **calculateInverses**(): `void`

Defined in: [three/src/objects/Skeleton.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L129)

Computes the bone inverse matrices. This method resets [Skeleton#boneInverses](/reference/three/classes/skeleton/#boneinverses)
and fills it with new matrices.

#### Returns

`void`

***

### clone()

> **clone**(): `Skeleton`

Defined in: [three/src/objects/Skeleton.js:231](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L231)

Returns a new skeleton with copied values from this instance.

#### Returns

`Skeleton`

A clone of this instance.

***

### computeBoneTexture()

> **computeBoneTexture**(): `Skeleton`

Defined in: [three/src/objects/Skeleton.js:242](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L242)

Computes a data texture for passing bone data to the vertex shader.

#### Returns

`Skeleton`

A reference of this instance.

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/objects/Skeleton.js:297](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L297)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### fromJSON()

> **fromJSON**(`json`, `bones`): `Skeleton`

Defined in: [three/src/objects/Skeleton.js:316](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L316)

Setups the skeleton by the given JSON and bones.

#### Parameters

##### json

`any`

The skeleton as serialized JSON.

##### bones

An array of bones.

#### Returns

`Skeleton`

A reference of this instance.

***

### getBoneByName()

> **getBoneByName**(`name`): [`Bone`](/reference/three/classes/bone/)

Defined in: [three/src/objects/Skeleton.js:275](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L275)

Searches through the skeleton's bone array and returns the first with a
matching name.

#### Parameters

##### name

`string`

The name of the bone.

#### Returns

[`Bone`](/reference/three/classes/bone/)

The found bone. `undefined` if no bone has been found.

***

### init()

> **init**(): `void`

Defined in: [three/src/objects/Skeleton.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L90)

Initializes the skeleton. This method gets automatically called by the constructor
but depending on how the skeleton is created it might be necessary to call this method
manually.

#### Returns

`void`

***

### pose()

> **pose**(): `void`

Defined in: [three/src/objects/Skeleton.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L152)

Resets the skeleton to the base pose.

#### Returns

`void`

***

### toJSON()

> **toJSON**(): `any`

Defined in: [three/src/objects/Skeleton.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L349)

Serializes the skeleton into JSON.

#### Returns

`any`

A JSON object representing the serialized skeleton.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

***

### update()

> **update**(): `void`

Defined in: [three/src/objects/Skeleton.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/objects/Skeleton.js#L198)

Resets the skeleton to the base pose.

#### Returns

`void`

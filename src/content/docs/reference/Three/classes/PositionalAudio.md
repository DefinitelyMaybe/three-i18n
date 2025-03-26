---
editUrl: false
next: false
prev: false
title: "PositionalAudio"
---

Defined in: [three/src/audio/PositionalAudio.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L40)

Represents a positional audio object.

```js
// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create the PositionalAudio object (passing in the listener)
const sound = new THREE.PositionalAudio( listener );

// load a sound and set it as the PositionalAudio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/song.ogg', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setRefDistance( 20 );
	sound.play();
});

// create an object for the sound to play from
const sphere = new THREE.SphereGeometry( 20, 32, 16 );
const material = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const mesh = new THREE.Mesh( sphere, material );
scene.add( mesh );

// finally add the sound to the mesh
mesh.add( sound );

@augments Audio

## Extends

- [`Audio`](/reference/three/classes/audio/)

## Constructors

### Constructor

> **new PositionalAudio**(`listener`): `PositionalAudio`

Defined in: [three/src/audio/PositionalAudio.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L47)

Constructs a positional audio.

#### Parameters

##### listener

`AudioListener`

The global audio listener.

#### Returns

`PositionalAudio`

#### Overrides

[`Audio`](/reference/three/classes/audio/).[`constructor`](/reference/three/classes/audio/#constructor)

## Properties

### \_connected

> **\_connected**: `boolean`

Defined in: [three/src/audio/Audio.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L203)

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`_connected`](/reference/three/classes/audio/#_connected)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`_listeners`](/reference/three/classes/audio/#_listeners)

***

### \_progress

> **\_progress**: `number`

Defined in: [three/src/audio/Audio.js:202](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L202)

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`_progress`](/reference/three/classes/audio/#_progress)

***

### \_startedAt

> **\_startedAt**: `number`

Defined in: [three/src/audio/Audio.js:201](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L201)

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`_startedAt`](/reference/three/classes/audio/#_startedat)

***

### animations

> **animations**: `AnimationClip`[]

Defined in: [three/src/core/Object3D.js:331](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L331)

An array holding the animation clips of the 3D object.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`animations`](/reference/three/classes/audio/#animations)

***

### autoplay

> **autoplay**: `boolean`

Defined in: [three/src/audio/Audio.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L72)

Whether to start playback automatically or not.

#### Default

```ts
false
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`autoplay`](/reference/three/classes/audio/#autoplay)

***

### buffer

> `readonly` **buffer**: `AudioBuffer`

Defined in: [three/src/audio/Audio.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L83)

A reference to an audio buffer.

Defined via [Audio#setBuffer](/reference/three/classes/audio/#setbuffer).

#### Default

```ts
null
@readonly
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`buffer`](/reference/three/classes/audio/#buffer)

***

### castShadow

> **castShadow**: `boolean`

Defined in: [three/src/core/Object3D.js:296](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L296)

When set to `true`, the 3D object gets rendered into shadow maps.

#### Default

```ts
false
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`castShadow`](/reference/three/classes/audio/#castshadow)

***

### children

> **children**: [`Object3D`](/reference/three/classes/object3d/)[]

Defined in: [three/src/core/Object3D.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L127)

An array holding the child 3D objects of this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`children`](/reference/three/classes/audio/#children)

***

### context

> `readonly` **context**: `AudioContext`

Defined in: [three/src/audio/Audio.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L55)

The audio context.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`context`](/reference/three/classes/audio/#context)

***

### customDepthMaterial

> **customDepthMaterial**: `any`

Defined in: [three/src/core/Object3D.js:344](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L344)

Custom depth material to be used when rendering to the depth map. Can only be used
in context of meshes. When shadow-casting with a [DirectionalLight](/reference/three/classes/directionallight/) or [SpotLight](/reference/three/classes/spotlight/),
if you are modifying vertex positions in the vertex shader you must specify a custom depth
material for proper shadows.

Only relevant in context of [WebGLRenderer](/reference/three/classes/webglrenderer/).

#### Default

```ts
undefined
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`customDepthMaterial`](/reference/three/classes/audio/#customdepthmaterial)

***

### customDistanceMaterial

> **customDistanceMaterial**: `any`

Defined in: [three/src/core/Object3D.js:354](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L354)

Same as [Object3D#customDepthMaterial](/reference/three/classes/object3d/#customdepthmaterial), but used with [PointLight](/reference/three/classes/pointlight/).

Only relevant in context of [WebGLRenderer](/reference/three/classes/webglrenderer/).

#### Default

```ts
undefined
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`customDistanceMaterial`](/reference/three/classes/audio/#customdistancematerial)

***

### detune

> `readonly` **detune**: `number`

Defined in: [three/src/audio/Audio.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L95)

Modify pitch, measured in cents. +/- 100 is a semitone.
+/- 1200 is an octave.

Defined via [Audio#setDetune](/reference/three/classes/audio/#setdetune).

#### Default

```ts
0
@readonly
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`detune`](/reference/three/classes/audio/#detune)

***

### duration

> **duration**: `number`

Defined in: [three/src/audio/Audio.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L141)

Overrides the default duration of the audio.

#### Default

```ts
undefined
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`duration`](/reference/three/classes/audio/#duration)

***

### filters

> `readonly` **filters**: `AudioNode`[]

Defined in: [three/src/audio/Audio.js:214](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L214)

Can be used to apply a variety of low-order filters to create
more complex sound effects e.g. via `BiquadFilterNode`.

The property is automatically set by [Audio#setFilters](/reference/three/classes/audio/#setfilters).

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`filters`](/reference/three/classes/audio/#filters)

***

### frustumCulled

> **frustumCulled**: `boolean`

Defined in: [three/src/core/Object3D.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L312)

When set to `true`, the 3D object is honored by view frustum culling.

#### Default

```ts
true
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`frustumCulled`](/reference/three/classes/audio/#frustumculled)

***

### gain

> `readonly` **gain**: `GainNode`

Defined in: [three/src/audio/Audio.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L63)

The gain node used for volume control.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`gain`](/reference/three/classes/audio/#gain)

***

### hasPlaybackControl

> `readonly` **hasPlaybackControl**: `boolean`

Defined in: [three/src/audio/Audio.js:177](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L177)

Indicates whether the audio playback can be controlled
with method like [Audio#play](/reference/three/classes/audio/#play) or [Audio#pause](/reference/three/classes/audio/#pause).

This flag will be automatically set when audio sources are
defined.

#### Default

```ts
true
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`hasPlaybackControl`](/reference/three/classes/audio/#hasplaybackcontrol)

***

### isObject3D

> `readonly` **isObject3D**: `boolean`

Defined in: [three/src/core/Object3D.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L79)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`isObject3D`](/reference/three/classes/audio/#isobject3d)

***

### isPlaying

> `readonly` **isPlaying**: `boolean`

Defined in: [three/src/audio/Audio.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L164)

Indicates whether the audio is playing or not.

This flag will be automatically set when using [Audio#play](/reference/three/classes/audio/#play),
[Audio#pause](/reference/three/classes/audio/#pause), [Audio#stop](/reference/three/classes/audio/#stop).

#### Default

```ts
false
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`isPlaying`](/reference/three/classes/audio/#isplaying)

***

### layers

> **layers**: [`Layers`](/reference/three/classes/layers/)

Defined in: [three/src/core/Object3D.js:280](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L280)

The layer membership of the 3D object. The 3D object is only visible if it has
at least one layer in common with the camera in use. This property can also be
used to filter out unwanted objects in ray-intersection tests when using [Raycaster](/reference/three/classes/raycaster/).

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`layers`](/reference/three/classes/audio/#layers)

***

### listener

> `readonly` **listener**: `AudioListener`

Defined in: [three/src/audio/Audio.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L47)

The global audio listener.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`listener`](/reference/three/classes/audio/#listener)

***

### loop

> `readonly` **loop**: `boolean`

Defined in: [three/src/audio/Audio.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L106)

Whether the audio should loop or not.

Defined via [Audio#setLoop](/reference/three/classes/audio/#setloop).

#### Default

```ts
false
@readonly
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`loop`](/reference/three/classes/audio/#loop)

***

### loopEnd

> **loopEnd**: `number`

Defined in: [three/src/audio/Audio.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L124)

Defines where in the audio buffer the replay should
stop, in seconds.

#### Default

```ts
0
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`loopEnd`](/reference/three/classes/audio/#loopend)

***

### loopStart

> **loopStart**: `number`

Defined in: [three/src/audio/Audio.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L115)

Defines where in the audio buffer the replay should
start, in seconds.

#### Default

```ts
0
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`loopStart`](/reference/three/classes/audio/#loopstart)

***

### matrix

> **matrix**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/core/Object3D.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L232)

Represents the object's transformation matrix in local space.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`matrix`](/reference/three/classes/audio/#matrix)

***

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

Defined in: [three/src/core/Object3D.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L251)

When set to `true`, the engine automatically computes the local matrix from position,
rotation and scale every frame.

The default values for all 3D objects is defined by `Object3D.DEFAULT_MATRIX_AUTO_UPDATE`.

#### Default

```ts
true
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`matrixAutoUpdate`](/reference/three/classes/audio/#matrixautoupdate)

***

### matrixWorld

> **matrixWorld**: [`Matrix4`](/reference/three/classes/matrix4/)

Defined in: [three/src/core/Object3D.js:240](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L240)

Represents the object's transformation matrix in world space.
If the 3D object has no parent, then it's identical to the local transformation matrix

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`matrixWorld`](/reference/three/classes/audio/#matrixworld)

***

### matrixWorldAutoUpdate

> **matrixWorldAutoUpdate**: `boolean`

Defined in: [three/src/core/Object3D.js:262](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L262)

When set to `true`, the engine automatically computes the world matrix from the current local
matrix and the object's transformation hierarchy.

The default values for all 3D objects is defined by `Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE`.

#### Default

```ts
true
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`matrixWorldAutoUpdate`](/reference/three/classes/audio/#matrixworldautoupdate)

***

### matrixWorldNeedsUpdate

> **matrixWorldNeedsUpdate**: `boolean`

Defined in: [three/src/core/Object3D.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L271)

When set to `true`, it calculates the world matrix in that frame and resets this property
to `false`.

#### Default

```ts
false
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`matrixWorldNeedsUpdate`](/reference/three/classes/audio/#matrixworldneedsupdate)

***

### name

> **name**: `string`

Defined in: [three/src/core/Object3D.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L103)

The name of the 3D object.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`name`](/reference/three/classes/audio/#name)

***

### offset

> **offset**: `number`

Defined in: [three/src/audio/Audio.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L133)

An offset to the time within the audio buffer the playback
should begin, in seconds.

#### Default

```ts
0
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`offset`](/reference/three/classes/audio/#offset)

***

### panner

> `readonly` **panner**: `PannerNode`

Defined in: [three/src/audio/PositionalAudio.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L58)

The panner node represents the location, direction, and behavior of an audio
source in 3D space.

***

### parent

> **parent**: [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L120)

A reference to the parent object.

#### Default

```ts
null
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`parent`](/reference/three/classes/audio/#parent)

***

### playbackRate

> `readonly` **playbackRate**: `number`

Defined in: [three/src/audio/Audio.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L152)

The playback speed.

Defined via [Audio#setPlaybackRate](/reference/three/classes/audio/#setplaybackrate).

#### Default

```ts
1
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`playbackRate`](/reference/three/classes/audio/#playbackrate)

***

### receiveShadow

> **receiveShadow**: `boolean`

Defined in: [three/src/core/Object3D.js:304](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L304)

When set to `true`, the 3D object is affected by shadows in the scene.

#### Default

```ts
false
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`receiveShadow`](/reference/three/classes/audio/#receiveshadow)

***

### renderOrder

> **renderOrder**: `number`

Defined in: [three/src/core/Object3D.js:324](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L324)

This value allows the default rendering order of scene graph objects to be
overridden although opaque and transparent objects remain sorted independently.
When this property is set for an instance of [Group](/reference/three/classes/group/),all descendants
objects will be sorted and rendered together. Sorting is from lowest to highest
render order.

#### Default

```ts
0
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`renderOrder`](/reference/three/classes/audio/#renderorder)

***

### source

> `readonly` **source**: `AudioNode`

Defined in: [three/src/audio/Audio.js:188](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L188)

Holds a reference to the current audio source.

The property is automatically by one of the `set*()` methods.

#### Default

```ts
null
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`source`](/reference/three/classes/audio/#source)

***

### sourceType

> `readonly` **sourceType**: `"buffer"` \| `"empty"` \| `"audioNode"` \| `"mediaNode"` \| `"mediaStreamNode"`

Defined in: [three/src/audio/Audio.js:199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L199)

Defines the source type.

The property is automatically by one of the `set*()` methods.

#### Default

```ts
'empty'
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`sourceType`](/reference/three/classes/audio/#sourcetype)

***

### type

> **type**: `string`

Defined in: [three/src/audio/Audio.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L39)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`type`](/reference/three/classes/audio/#type)

***

### up

> **up**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:137](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L137)

Defines the `up` direction of the 3D object which influences
the orientation via methods like [Object3D#lookAt](/reference/three/classes/object3d/#lookat).

The default values for all 3D objects is defined by `Object3D.DEFAULT_UP`.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`up`](/reference/three/classes/audio/#up)

***

### userData

> **userData**: `any`

Defined in: [three/src/core/Object3D.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L362)

An object that can be used to store custom data about the 3D object. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`userData`](/reference/three/classes/audio/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/core/Object3D.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L96)

The UUID of the 3D object.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`uuid`](/reference/three/classes/audio/#uuid)

***

### visible

> **visible**: `boolean`

Defined in: [three/src/core/Object3D.js:288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L288)

When set to `true`, the 3D object gets rendered.

#### Default

```ts
true
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`visible`](/reference/three/classes/audio/#visible)

***

### DEFAULT\_MATRIX\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_AUTO\_UPDATE**: `boolean`

Defined in: [three/src/core/Object3D.js:1605](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1605)

The default setting for [Object3D#matrixAutoUpdate](/reference/three/classes/object3d/#matrixautoupdate) for
newly created 3D objects.

#### Static

#### Default

```ts
true
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`DEFAULT_MATRIX_AUTO_UPDATE`](/reference/three/classes/audio/#default_matrix_auto_update)

***

### DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE

> `static` **DEFAULT\_MATRIX\_WORLD\_AUTO\_UPDATE**: `boolean`

Defined in: [three/src/core/Object3D.js:1615](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1615)

The default setting for [Object3D#matrixWorldAutoUpdate](/reference/three/classes/object3d/#matrixworldautoupdate) for
newly created 3D objects.

#### Static

#### Default

```ts
true
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`DEFAULT_MATRIX_WORLD_AUTO_UPDATE`](/reference/three/classes/audio/#default_matrix_world_auto_update)

***

### DEFAULT\_UP

> `static` **DEFAULT\_UP**: [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:1595](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1595)

The default up direction for objects, also used as the default
position for [DirectionalLight](/reference/three/classes/directionallight/) and [HemisphereLight](/reference/three/classes/hemispherelight/).

#### Static

#### Default

```ts
(0,1,0)
```

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`DEFAULT_UP`](/reference/three/classes/audio/#default_up)

## Methods

### add()

> **add**(`object`, ...`args`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:720](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L720)

Adds the given 3D object as a child to this 3D object. An arbitrary number of
objects may be added. Any current parent on an object passed in here will be
removed, since an object can have at most one parent.

#### Parameters

##### object

[`Object3D`](/reference/three/classes/object3d/)

The 3D object to add.

##### args

...`any`

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#added

#### Fires

Object3D#childadded

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`add`](/reference/three/classes/audio/#add)

***

### addEventListener()

> **addEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L31)

Adds the given event listener to the given event type.

#### Parameters

##### type

`string`

The type of event to listen to.

##### listener

`Function`

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`addEventListener`](/reference/three/classes/audio/#addeventlistener)

***

### applyMatrix4()

> **applyMatrix4**(`matrix`): `void`

Defined in: [three/src/core/Object3D.js:422](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L422)

Applies the given transformation matrix to the object and updates the object's position,
rotation and scale.

#### Parameters

##### matrix

[`Matrix4`](/reference/three/classes/matrix4/)

The transformation matrix.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`applyMatrix4`](/reference/three/classes/audio/#applymatrix4)

***

### applyQuaternion()

> **applyQuaternion**(`q`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:438](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L438)

Applies a rotation represented by given the quaternion to the 3D object.

#### Parameters

##### q

[`Quaternion`](/reference/three/classes/quaternion/)

The quaternion.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`applyQuaternion`](/reference/three/classes/audio/#applyquaternion)

***

### attach()

> **attach**(`object`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:848](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L848)

Adds the given 3D object as a child of this 3D object, while maintaining the object's world
transform. This method does not support scene graphs having non-uniformly-scaled nodes(s).

#### Parameters

##### object

[`Object3D`](/reference/three/classes/object3d/)

The 3D object to attach.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#added

#### Fires

Object3D#childadded

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`attach`](/reference/three/classes/audio/#attach)

***

### clear()

> **clear**(): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:833](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L833)

Removes all child objects.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#removed

#### Fires

Object3D#childremoved

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`clear`](/reference/three/classes/audio/#clear)

***

### clone()

> **clone**(`recursive`): `any`

Defined in: [three/src/audio/Audio.js:769](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L769)

Returns a new 3D object with copied values from this instance.

#### Parameters

##### recursive

`any`

When set to `true`, descendants of the 3D object are also cloned.

#### Returns

`any`

A clone of this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`clone`](/reference/three/classes/audio/#clone)

***

### connect()

> **connect**(): `PositionalAudio`

Defined in: [three/src/audio/PositionalAudio.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L64)

Connects to the audio source. This is used internally on
initialisation and when setting / removing filters.

#### Returns

`PositionalAudio`

A reference to this instance.

#### Overrides

[`Audio`](/reference/three/classes/audio/).[`connect`](/reference/three/classes/audio/#connect)

***

### copy()

> **copy**(`source`, `recursive`): `PositionalAudio`

Defined in: [three/src/audio/Audio.js:738](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L738)

Copies the values of the given 3D object to this instance.

#### Parameters

##### source

`any`

The 3D object to copy.

##### recursive

`any`

When set to `true`, descendants of the 3D object are cloned.

#### Returns

`PositionalAudio`

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`copy`](/reference/three/classes/audio/#copy)

***

### disconnect()

> **disconnect**(): `PositionalAudio`

Defined in: [three/src/audio/PositionalAudio.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L74)

Disconnects to the audio source. This is used internally on
initialisation and when setting / removing filters.

#### Returns

`PositionalAudio`

A reference to this instance.

#### Overrides

[`Audio`](/reference/three/classes/audio/).[`disconnect`](/reference/three/classes/audio/#disconnect)

***

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [three/src/core/EventDispatcher.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L101)

Dispatches an event object.

#### Parameters

##### event

`any`

The event that gets fired.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`dispatchEvent`](/reference/three/classes/audio/#dispatchevent)

***

### getDetune()

> **getDetune**(): `number`

Defined in: [three/src/audio/Audio.js:555](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L555)

Returns the detuning of oscillation in cents.

#### Returns

`number`

The detuning of oscillation in cents.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getDetune`](/reference/three/classes/audio/#getdetune)

***

### getDistanceModel()

> **getDistanceModel**(): `"linear"` \| `"inverse"` \| `"exponential"`

Defined in: [three/src/audio/PositionalAudio.js:147](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L147)

Returns the current distance model.

#### Returns

`"linear"` \| `"inverse"` \| `"exponential"`

The distance model.

***

### getFilter()

> **getFilter**(): `AudioNode`

Defined in: [three/src/audio/Audio.js:566](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L566)

Returns the first filter in the list of filters.

#### Returns

`AudioNode`

The first filter in the list of filters.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getFilter`](/reference/three/classes/audio/#getfilter)

***

### getFilters()

> **getFilters**(): `AudioNode`[]

Defined in: [three/src/audio/Audio.js:498](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L498)

Returns the current set filters.

#### Returns

`AudioNode`[]

The list of filters.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getFilters`](/reference/three/classes/audio/#getfilters)

***

### getLoop()

> **getLoop**(): `boolean`

Defined in: [three/src/audio/Audio.js:641](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L641)

Returns the loop flag.

Can only be used with compatible audio sources that allow playback control.

#### Returns

`boolean`

Whether the audio should loop or not.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getLoop`](/reference/three/classes/audio/#getloop)

***

### getMaxDistance()

> **getMaxDistance**(): `number`

Defined in: [three/src/audio/PositionalAudio.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L176)

Returns the current max distance.

#### Returns

`number`

The max distance.

***

### getObjectById()

> **getObjectById**(`id`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:891](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L891)

Searches through the 3D object and its children, starting with the 3D object
itself, and returns the first with a matching ID.

#### Parameters

##### id

`number`

The id.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

The found 3D object. Returns `undefined` if no 3D object has been found.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getObjectById`](/reference/three/classes/audio/#getobjectbyid)

***

### getObjectByName()

> **getObjectByName**(`name`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:904](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L904)

Searches through the 3D object and its children, starting with the 3D object
itself, and returns the first with a matching name.

#### Parameters

##### name

`string`

The name.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

The found 3D object. Returns `undefined` if no 3D object has been found.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getObjectByName`](/reference/three/classes/audio/#getobjectbyname)

***

### getObjectByProperty()

> **getObjectByProperty**(`name`, `value`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:918](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L918)

Searches through the 3D object and its children, starting with the 3D object
itself, and returns the first with a matching property value.

#### Parameters

##### name

`string`

The name of the property.

##### value

`any`

The value.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

The found 3D object. Returns `undefined` if no 3D object has been found.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getObjectByProperty`](/reference/three/classes/audio/#getobjectbyproperty)

***

### getObjectsByProperty()

> **getObjectsByProperty**(`name`, `value`, `result`): [`Object3D`](/reference/three/classes/object3d/)[]

Defined in: [three/src/core/Object3D.js:948](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L948)

Searches through the 3D object and its children, starting with the 3D object
itself, and returns all 3D objects with a matching property value.

#### Parameters

##### name

`string`

The name of the property.

##### value

`any`

The value.

##### result

[`Object3D`](/reference/three/classes/object3d/)[] = `[]`

The method stores the result in this array.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)[]

The found 3D objects.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getObjectsByProperty`](/reference/three/classes/audio/#getobjectsbyproperty)

***

### getOutput()

> **getOutput**(): `PannerNode`

Defined in: [three/src/audio/PositionalAudio.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L84)

Returns the output audio node.

#### Returns

`PannerNode`

The output node.

#### Overrides

[`Audio`](/reference/three/classes/audio/).[`getOutput`](/reference/three/classes/audio/#getoutput)

***

### getPlaybackRate()

> **getPlaybackRate**(): `number`

Defined in: [three/src/audio/Audio.js:618](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L618)

Returns the current playback rate.

#### Returns

`number`

The playback rate.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getPlaybackRate`](/reference/three/classes/audio/#getplaybackrate)

***

### getRefDistance()

> **getRefDistance**(): `number`

Defined in: [three/src/audio/PositionalAudio.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L95)

Returns the current reference distance.

#### Returns

`number`

The reference distance.

***

### getRolloffFactor()

> **getRolloffFactor**(): `number`

Defined in: [three/src/audio/PositionalAudio.js:122](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L122)

Returns the current rolloff factor.

#### Returns

`number`

The rolloff factor.

***

### getVolume()

> **getVolume**(): `number`

Defined in: [three/src/audio/Audio.js:718](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L718)

Returns the volume.

#### Returns

`number`

The volume.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getVolume`](/reference/three/classes/audio/#getvolume)

***

### getWorldDirection()

> **getWorldDirection**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:1016](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1016)

Returns a vector representing the ("look") direction of the 3D object in world space.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector the result is stored to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The 3D object's direction in world space.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getWorldDirection`](/reference/three/classes/audio/#getworlddirection)

***

### getWorldPosition()

> **getWorldPosition**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:970](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L970)

Returns a vector representing the position of the 3D object in world space.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector the result is stored to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The 3D object's position in world space.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getWorldPosition`](/reference/three/classes/audio/#getworldposition)

***

### getWorldQuaternion()

> **getWorldQuaternion**(`target`): [`Quaternion`](/reference/three/classes/quaternion/)

Defined in: [three/src/core/Object3D.js:984](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L984)

Returns a Quaternion representing the position of the 3D object in world space.

#### Parameters

##### target

[`Quaternion`](/reference/three/classes/quaternion/)

The target Quaternion the result is stored to.

#### Returns

[`Quaternion`](/reference/three/classes/quaternion/)

The 3D object's rotation in world space.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getWorldQuaternion`](/reference/three/classes/audio/#getworldquaternion)

***

### getWorldScale()

> **getWorldScale**(`target`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:1000](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1000)

Returns a vector representing the scale of the 3D object in world space.

#### Parameters

##### target

[`Vector3`](/reference/three/classes/vector3/)

The target vector the result is stored to.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The 3D object's scale in world space.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`getWorldScale`](/reference/three/classes/audio/#getworldscale)

***

### hasEventListener()

> **hasEventListener**(`type`, `listener`): `boolean`

Defined in: [three/src/core/EventDispatcher.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L58)

Returns `true` if the given event listener has been added to the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to check.

#### Returns

`boolean`

Whether the given event listener has been added to the given event type.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`hasEventListener`](/reference/three/classes/audio/#haseventlistener)

***

### localToWorld()

> **localToWorld**(`vector`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:637](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L637)

Converts the given vector from this 3D object's local space to world space.

#### Parameters

##### vector

[`Vector3`](/reference/three/classes/vector3/)

The vector to convert.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The converted vector.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`localToWorld`](/reference/three/classes/audio/#localtoworld)

***

### lookAt()

> **lookAt**(`x`, `y`?, `z`?): `void`

Defined in: [three/src/core/Object3D.js:668](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L668)

Rotates the object to face a point in world space.

This method does not support objects having non-uniformly-scaled parent(s).

#### Parameters

##### x

The x coordinate in world space. Alternatively, a vector representing a position in world space

`number` | [`Vector3`](/reference/three/classes/vector3/)

##### y?

`number`

The y coordinate in world space.

##### z?

`number`

The z coordinate in world space.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`lookAt`](/reference/three/classes/audio/#lookat)

***

### onAfterRender()

> **onAfterRender**(): `void`

Defined in: [three/src/core/Object3D.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L414)

A callback that is executed immediately after a 3D object is rendered.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`onAfterRender`](/reference/three/classes/audio/#onafterrender)

***

### onAfterShadow()

> **onAfterShadow**(): `void`

Defined in: [three/src/core/Object3D.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L390)

A callback that is executed immediately after a 3D object is rendered to a shadow map.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`onAfterShadow`](/reference/three/classes/audio/#onaftershadow)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/core/Object3D.js:402](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L402)

A callback that is executed immediately before a 3D object is rendered.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`onBeforeRender`](/reference/three/classes/audio/#onbeforerender)

***

### onBeforeShadow()

> **onBeforeShadow**(): `void`

Defined in: [three/src/core/Object3D.js:377](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L377)

A callback that is executed immediately before a 3D object is rendered to a shadow map.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`onBeforeShadow`](/reference/three/classes/audio/#onbeforeshadow)

***

### onEnded()

> **onEnded**(): `void`

Defined in: [three/src/audio/Audio.js:627](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L627)

Automatically called when playback finished.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`onEnded`](/reference/three/classes/audio/#onended)

***

### pause()

> **pause**(): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:357](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L357)

Pauses the playback of the audio.

Can only be used with compatible audio sources that allow playback control.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`pause`](/reference/three/classes/audio/#pause)

***

### play()

> **play**(`delay`?): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:313](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L313)

Starts the playback of the audio.

Can only be used with compatible audio sources that allow playback control.

#### Parameters

##### delay?

`number` = `0`

The delay, in seconds, at which the audio should start playing.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`play`](/reference/three/classes/audio/#play)

***

### raycast()

> `abstract` **raycast**(): `void`

Defined in: [three/src/core/Object3D.js:1035](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1035)

Abstract method to get intersections between a casted ray and this
3D object. Renderable 3D objects such as [Mesh](/reference/three/classes/mesh/), [Line](/reference/three/classes/line/) or [Points](/reference/three/classes/points/)
implement this method in order to use raycasting.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`raycast`](/reference/three/classes/audio/#raycast)

***

### remove()

> **remove**(`object`, ...`args`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:772](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L772)

Removes the given 3D object as child from this 3D object.
An arbitrary number of objects may be removed.

#### Parameters

##### object

[`Object3D`](/reference/three/classes/object3d/)

The 3D object to remove.

##### args

...`any`

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#removed

#### Fires

Object3D#childremoved

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`remove`](/reference/three/classes/audio/#remove)

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L74)

Removes the given event listener from the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to remove.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`removeEventListener`](/reference/three/classes/audio/#removeeventlistener)

***

### removeFromParent()

> **removeFromParent**(): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:812](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L812)

Removes this 3D object from its current parent.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Fires

Object3D#removed

#### Fires

Object3D#childremoved

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`removeFromParent`](/reference/three/classes/audio/#removefromparent)

***

### rotateOnAxis()

> **rotateOnAxis**(`axis`, `angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:505](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L505)

Rotates the 3D object along an axis in local space.

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) axis vector.

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`rotateOnAxis`](/reference/three/classes/audio/#rotateonaxis)

***

### rotateOnWorldAxis()

> **rotateOnWorldAxis**(`axis`, `angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:525](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L525)

Rotates the 3D object along an axis in world space.

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) axis vector.

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`rotateOnWorldAxis`](/reference/three/classes/audio/#rotateonworldaxis)

***

### rotateX()

> **rotateX**(`angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:545](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L545)

Rotates the 3D object around its X axis in local space.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`rotateX`](/reference/three/classes/audio/#rotatex)

***

### rotateY()

> **rotateY**(`angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:557](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L557)

Rotates the 3D object around its Y axis in local space.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`rotateY`](/reference/three/classes/audio/#rotatey)

***

### rotateZ()

> **rotateZ**(`angle`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:569](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L569)

Rotates the 3D object around its Z axis in local space.

#### Parameters

##### angle

`number`

The angle in radians.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`rotateZ`](/reference/three/classes/audio/#rotatez)

***

### setBuffer()

> **setBuffer**(`audioBuffer`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:294](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L294)

Sets the given audio buffer as the source of this instance.

[Audio#sourceType](/reference/three/classes/audio/#sourcetype) is set to `buffer` and [Audio#hasPlaybackControl](/reference/three/classes/audio/#hasplaybackcontrol) to `true`.

#### Parameters

##### audioBuffer

`AudioBuffer`

The audio buffer.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setBuffer`](/reference/three/classes/audio/#setbuffer)

***

### setDetune()

> **setDetune**(`value`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:536](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L536)

Defines the detuning of oscillation in cents.

#### Parameters

##### value

`number`

The detuning of oscillation in cents.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setDetune`](/reference/three/classes/audio/#setdetune)

***

### setDirectionalCone()

> **setDirectionalCone**(`coneInnerAngle`, `coneOuterAngle`, `coneOuterGain`): `PositionalAudio`

Defined in: [three/src/audio/PositionalAudio.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L207)

Sets the directional cone in which the audio can be listened.

#### Parameters

##### coneInnerAngle

`number`

An angle, in degrees, of a cone inside of which there will be no volume reduction.

##### coneOuterAngle

`number`

An angle, in degrees, of a cone outside of which the volume will be reduced by a constant value, defined by the `coneOuterGain` parameter.

##### coneOuterGain

`number`

The amount of volume reduction outside the cone defined by the `coneOuterAngle`. When set to `0`, no sound can be heard.

#### Returns

`PositionalAudio`

A reference to this instance.

***

### setDistanceModel()

> **setDistanceModel**(`value`): `PositionalAudio`

Defined in: [three/src/audio/PositionalAudio.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L163)

Defines which algorithm to use to reduce the volume of the audio source
as it moves away from the listener.

Read [the spec][https://www.w3.org/TR/webaudio-1.1/#enumdef-distancemodeltype](https://www.w3.org/TR/webaudio-1.1/#enumdef-distancemodeltype)
for more details.

#### Parameters

##### value

The distance model to set.

`"linear"` | `"inverse"` | `"exponential"`

#### Returns

`PositionalAudio`

A reference to this instance.

***

### setFilter()

> **setFilter**(`filter`?): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:578](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L578)

Applies a single filter node to the audio.

#### Parameters

##### filter?

`AudioNode`

The filter to set.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setFilter`](/reference/three/classes/audio/#setfilter)

***

### setFilters()

> **setFilters**(`value`?): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:510](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L510)

Sets an array of filters and connects them with the audio source.

#### Parameters

##### value?

`AudioNode`[]

A list of filters.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setFilters`](/reference/three/classes/audio/#setfilters)

***

### setLoop()

> **setLoop**(`value`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:662](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L662)

Sets the loop flag.

Can only be used with compatible audio sources that allow playback control.

#### Parameters

##### value

`boolean`

Whether the audio should loop or not.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setLoop`](/reference/three/classes/audio/#setloop)

***

### setLoopEnd()

> **setLoopEnd**(`value`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:705](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L705)

Sets the loop end value which defines where in the audio buffer the replay should
stop, in seconds.

#### Parameters

##### value

`number`

The loop end value.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setLoopEnd`](/reference/three/classes/audio/#setloopend)

***

### setLoopStart()

> **setLoopStart**(`value`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:690](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L690)

Sets the loop start value which defines where in the audio buffer the replay should
start, in seconds.

#### Parameters

##### value

`number`

The loop start value.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setLoopStart`](/reference/three/classes/audio/#setloopstart)

***

### setMaxDistance()

> **setMaxDistance**(`value`): `PositionalAudio`

Defined in: [three/src/audio/PositionalAudio.js:191](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L191)

Defines the maximum distance between the audio source and the listener,
after which the volume is not reduced any further.

This value is used only by the `linear` distance model.

#### Parameters

##### value

`number`

The max distance.

#### Returns

`PositionalAudio`

A reference to this instance.

***

### setMediaElementSource()

> **setMediaElementSource**(`mediaElement`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:256](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L256)

Sets the given media element as the source of this instance.

[Audio#sourceType](/reference/three/classes/audio/#sourcetype) is set to `mediaNode` and [Audio#hasPlaybackControl](/reference/three/classes/audio/#hasplaybackcontrol) to `false`.

#### Parameters

##### mediaElement

`HTMLMediaElement`

The media element.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setMediaElementSource`](/reference/three/classes/audio/#setmediaelementsource)

***

### setMediaStreamSource()

> **setMediaStreamSource**(`mediaStream`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:275](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L275)

Sets the given media stream as the source of this instance.

[Audio#sourceType](/reference/three/classes/audio/#sourcetype) is set to `mediaStreamNode` and [Audio#hasPlaybackControl](/reference/three/classes/audio/#hasplaybackcontrol) to `false`.

#### Parameters

##### mediaStream

`MediaStream`

The media stream.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setMediaStreamSource`](/reference/three/classes/audio/#setmediastreamsource)

***

### setNodeSource()

> **setNodeSource**(`audioNode`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:237](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L237)

Sets the given audio node as the source of this instance.

[Audio#sourceType](/reference/three/classes/audio/#sourcetype) is set to `audioNode` and [Audio#hasPlaybackControl](/reference/three/classes/audio/#hasplaybackcontrol) to `false`.

#### Parameters

##### audioNode

`AudioNode`

The audio node like an instance of `OscillatorNode`.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setNodeSource`](/reference/three/classes/audio/#setnodesource)

***

### setPlaybackRate()

> **setPlaybackRate**(`value`?): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:592](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L592)

Sets the playback rate.

Can only be used with compatible audio sources that allow playback control.

#### Parameters

##### value?

`number`

The playback rate to set.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setPlaybackRate`](/reference/three/classes/audio/#setplaybackrate)

***

### setRefDistance()

> **setRefDistance**(`value`): `PositionalAudio`

Defined in: [three/src/audio/PositionalAudio.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L109)

Defines the reference distance for reducing volume as the audio source moves
further from the listener – i.e. the distance at which the volume reduction
starts taking effect.

#### Parameters

##### value

`number`

The reference distance to set.

#### Returns

`PositionalAudio`

A reference to this instance.

***

### setRolloffFactor()

> **setRolloffFactor**(`value`): `PositionalAudio`

Defined in: [three/src/audio/PositionalAudio.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L134)

Defines how quickly the volume is reduced as the source moves away from the listener.

#### Parameters

##### value

`number`

The rolloff factor.

#### Returns

`PositionalAudio`

A reference to this instance.

***

### setRotationFromAxisAngle()

> **setRotationFromAxisAngle**(`axis`, `angle`): `void`

Defined in: [three/src/core/Object3D.js:452](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L452)

Sets the given rotation represented as an axis/angle couple to the 3D object.

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) axis vector.

##### angle

`number`

The angle in radians.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setRotationFromAxisAngle`](/reference/three/classes/audio/#setrotationfromaxisangle)

***

### setRotationFromEuler()

> **setRotationFromEuler**(`euler`): `void`

Defined in: [three/src/core/Object3D.js:465](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L465)

Sets the given rotation represented as Euler angles to the 3D object.

#### Parameters

##### euler

[`Euler`](/reference/three/classes/euler/)

The Euler angles.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setRotationFromEuler`](/reference/three/classes/audio/#setrotationfromeuler)

***

### setRotationFromMatrix()

> **setRotationFromMatrix**(`m`): `void`

Defined in: [three/src/core/Object3D.js:477](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L477)

Sets the given rotation represented as rotation matrix to the 3D object.

#### Parameters

##### m

[`Matrix4`](/reference/three/classes/matrix4/)

Although a 4x4 matrix is expected, the upper 3x3 portion must be
a pure rotation matrix (i.e, unscaled).

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setRotationFromMatrix`](/reference/three/classes/audio/#setrotationfrommatrix)

***

### setRotationFromQuaternion()

> **setRotationFromQuaternion**(`q`): `void`

Defined in: [three/src/core/Object3D.js:490](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L490)

Sets the given rotation represented as a Quaternion to the 3D object.

#### Parameters

##### q

[`Quaternion`](/reference/three/classes/quaternion/)

The Quaternion

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setRotationFromQuaternion`](/reference/three/classes/audio/#setrotationfromquaternion)

***

### setVolume()

> **setVolume**(`value`): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:730](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L730)

Sets the volume.

#### Parameters

##### value

`number`

The volume to set.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`setVolume`](/reference/three/classes/audio/#setvolume)

***

### stop()

> **stop**(`delay`?): [`Audio`](/reference/three/classes/audio/)

Defined in: [three/src/audio/Audio.js:399](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/Audio.js#L399)

Stops the playback of the audio.

Can only be used with compatible audio sources that allow playback control.

#### Parameters

##### delay?

`number` = `0`

The delay, in seconds, at which the audio should stop playing.

#### Returns

[`Audio`](/reference/three/classes/audio/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`stop`](/reference/three/classes/audio/#stop)

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/core/Object3D.js:1224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1224)

Serializes the 3D object into JSON.

#### Parameters

##### meta

`any`

An optional value holding meta information about the serialization.

#### Returns

`any`

A JSON object representing the serialized 3D object.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`toJSON`](/reference/three/classes/audio/#tojson)

***

### translateOnAxis()

> **translateOnAxis**(`axis`, `distance`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:582](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L582)

Translate the 3D object by a distance along the given axis in local space.

#### Parameters

##### axis

[`Vector3`](/reference/three/classes/vector3/)

The (normalized) axis vector.

##### distance

`number`

The distance in world units.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`translateOnAxis`](/reference/three/classes/audio/#translateonaxis)

***

### translateX()

> **translateX**(`distance`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:601](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L601)

Translate the 3D object by a distance along its X-axis in local space.

#### Parameters

##### distance

`number`

The distance in world units.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`translateX`](/reference/three/classes/audio/#translatex)

***

### translateY()

> **translateY**(`distance`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:613](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L613)

Translate the 3D object by a distance along its Y-axis in local space.

#### Parameters

##### distance

`number`

The distance in world units.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`translateY`](/reference/three/classes/audio/#translatey)

***

### translateZ()

> **translateZ**(`distance`): [`Object3D`](/reference/three/classes/object3d/)

Defined in: [three/src/core/Object3D.js:625](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L625)

Translate the 3D object by a distance along its Z-axis in local space.

#### Parameters

##### distance

`number`

The distance in world units.

#### Returns

[`Object3D`](/reference/three/classes/object3d/)

A reference to this instance.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`translateZ`](/reference/three/classes/audio/#translatez)

***

### traverse()

> **traverse**(`callback`): `void`

Defined in: [three/src/core/Object3D.js:1044](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1044)

Executes the callback on this 3D object and all descendants.

Note: Modifying the scene graph inside the callback is discouraged.

#### Parameters

##### callback

`Function`

A callback function that allows to process the current 3D object.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`traverse`](/reference/three/classes/audio/#traverse)

***

### traverseAncestors()

> **traverseAncestors**(`callback`): `void`

Defined in: [three/src/core/Object3D.js:1089](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1089)

Like [Object3D#traverse](/reference/three/classes/object3d/#traverse), but the callback will only be executed for all ancestors.

Note: Modifying the scene graph inside the callback is discouraged.

#### Parameters

##### callback

`Function`

A callback function that allows to process the current 3D object.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`traverseAncestors`](/reference/three/classes/audio/#traverseancestors)

***

### traverseVisible()

> **traverseVisible**(`callback`): `void`

Defined in: [three/src/core/Object3D.js:1066](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1066)

Like [Object3D#traverse](/reference/three/classes/object3d/#traverse), but the callback will only be executed for visible 3D objects.
Descendants of invisible 3D objects are not traversed.

Note: Modifying the scene graph inside the callback is discouraged.

#### Parameters

##### callback

`Function`

A callback function that allows to process the current 3D object.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`traverseVisible`](/reference/three/classes/audio/#traversevisible)

***

### updateMatrix()

> **updateMatrix**(): `void`

Defined in: [three/src/core/Object3D.js:1107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1107)

Updates the transformation matrix in local space by computing it from the current
position, rotation and scale values.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`updateMatrix`](/reference/three/classes/audio/#updatematrix)

***

### updateMatrixWorld()

> **updateMatrixWorld**(`force`): `void`

Defined in: [three/src/audio/PositionalAudio.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/PositionalAudio.js#L217)

Updates the transformation matrix in world space of this 3D objects and its descendants.

To ensure correct results, this method also recomputes the 3D object's transformation matrix in
local space. The computation of the local and world matrix can be controlled with the
[Object3D#matrixAutoUpdate](/reference/three/classes/object3d/#matrixautoupdate) and [Object3D#matrixWorldAutoUpdate](/reference/three/classes/object3d/#matrixworldautoupdate) flags which are both
`true` by default.  Set these flags to `false` if you need more control over the update matrix process.

#### Parameters

##### force

`any`

When set to `true`, a recomputation of world matrices is forced even
when [Object3D#matrixWorldAutoUpdate](/reference/three/classes/object3d/#matrixworldautoupdate) is set to `false`.

#### Returns

`void`

#### Overrides

[`Audio`](/reference/three/classes/audio/).[`updateMatrixWorld`](/reference/three/classes/audio/#updatematrixworld)

***

### updateWorldMatrix()

> **updateWorldMatrix**(`updateParents`?, `updateChildren`?): `void`

Defined in: [three/src/core/Object3D.js:1173](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L1173)

An alternative version of [Object3D#updateMatrixWorld](/reference/three/classes/object3d/#updatematrixworld) with more control over the
update of ancestor and descendant nodes.

#### Parameters

##### updateParents?

`boolean`

Whether ancestor nodes should be updated or not.

##### updateChildren?

`boolean`

Whether descendant nodes should be updated or not.

#### Returns

`void`

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`updateWorldMatrix`](/reference/three/classes/audio/#updateworldmatrix)

***

### worldToLocal()

> **worldToLocal**(`vector`): [`Vector3`](/reference/three/classes/vector3/)

Defined in: [three/src/core/Object3D.js:651](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Object3D.js#L651)

Converts the given vector from this 3D object's word space to local space.

#### Parameters

##### vector

[`Vector3`](/reference/three/classes/vector3/)

The vector to convert.

#### Returns

[`Vector3`](/reference/three/classes/vector3/)

The converted vector.

#### Inherited from

[`Audio`](/reference/three/classes/audio/).[`worldToLocal`](/reference/three/classes/audio/#worldtolocal)

---
editUrl: false
next: false
prev: false
title: "VideoFrameTexture"
---

Defined in: [three/src/textures/VideoFrameTexture.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/VideoFrameTexture.js#L16)

This class can be used as an alternative way to define video data. Instead of using
an instance of `HTMLVideoElement` like with `VideoTexture`, `VideoFrameTexture` expects each frame is
defined manually via [VideoFrameTexture#setFrame](/reference/three/classes/videoframetexture/#setframe). A typical use case for this module is when
video frames are decoded with the WebCodecs API.

```js
const texture = new THREE.VideoFrameTexture();
texture.setFrame( frame );
```

## Extends

- [`VideoTexture`](/reference/three/classes/videotexture/)

## Constructors

### Constructor

> **new VideoFrameTexture**(`mapping`?, `wrapS`?, `wrapT`?, `magFilter`?, `minFilter`?, `format`?, `type`?, `anisotropy`?): `VideoFrameTexture`

Defined in: [three/src/textures/VideoFrameTexture.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/VideoFrameTexture.js#L30)

Constructs a new video frame texture.

#### Parameters

##### mapping?

`number`

The texture mapping.

##### wrapS?

`number`

The wrapS value.

##### wrapT?

`number`

The wrapT value.

##### magFilter?

`number`

The mag filter value.

##### minFilter?

`number`

The min filter value.

##### format?

`number`

The texture format.

##### type?

`number`

The texture type.

##### anisotropy?

`number`

The anisotropy value.

#### Returns

`VideoFrameTexture`

#### Overrides

[`VideoTexture`](/reference/three/classes/videotexture/).[`constructor`](/reference/three/classes/videotexture/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`_listeners`](/reference/three/classes/videotexture/#_listeners)

***

### anisotropy

> **anisotropy**: `number`

Defined in: [three/src/textures/Texture.js:159](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L159)

The number of samples taken along the axis through the pixel that has the
highest density of texels. By default, this value is `1`. A higher value
gives a less blurry result than a basic mipmap, at the cost of more
texture samples being used.

#### Default

```ts
0
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`anisotropy`](/reference/three/classes/videotexture/#anisotropy)

***

### center

> **center**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/textures/Texture.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L215)

The point around which rotation occurs. A value of `(0.5, 0.5)` corresponds
to the center of the texture. Default is `(0, 0)`, the lower left.

#### Default

```ts
(0,0)
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`center`](/reference/three/classes/videotexture/#center)

***

### channel

> **channel**: `number`

Defined in: [three/src/textures/Texture.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L114)

Lets you select the uv attribute to map the texture to. `0` for `uv`,
`1` for `uv1`, `2` for `uv2` and `3` for `uv3`.

#### Default

```ts
0
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`channel`](/reference/three/classes/videotexture/#channel)

***

### colorSpace

> **colorSpace**: `string`

Defined in: [three/src/textures/Texture.js:295](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L295)

Textures containing color data should be annotated with `SRGBColorSpace` or `LinearSRGBColorSpace`.

#### Default

```ts
NoColorSpace
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`colorSpace`](/reference/three/classes/videotexture/#colorspace)

***

### flipY

> **flipY**: `boolean`

Defined in: [three/src/textures/Texture.js:277](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L277)

If set to `true`, the texture is flipped along the vertical axis when
uploaded to the GPU.

Note that this property has no effect when using `ImageBitmap`. You need to
configure the flip on bitmap creation instead.

#### Default

```ts
true
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`flipY`](/reference/three/classes/videotexture/#flipy)

***

### format

> **format**: `number`

Defined in: [three/src/textures/Texture.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L167)

The format of the texture.

#### Default

```ts
RGBAFormat
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`format`](/reference/three/classes/videotexture/#format)

***

### generateMipmaps

> **generateMipmaps**: `boolean`

Defined in: [three/src/textures/Texture.js:253](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L253)

Whether to generate mipmaps (if possible) for a texture.

Set this to `false` if you are creating mipmaps manually.

#### Default

```ts
true
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`generateMipmaps`](/reference/three/classes/videotexture/#generatemipmaps)

***

### internalFormat

> **internalFormat**: `string`

Defined in: [three/src/textures/Texture.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L178)

The default internal format is derived from [Texture#format](/reference/three/classes/texture/#format) and [Texture#type](/reference/three/classes/texture/#type) and
defines how the texture data is going to be stored on the GPU.

This property allows to overwrite the default format.

#### Default

```ts
null
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`internalFormat`](/reference/three/classes/videotexture/#internalformat)

***

### isRenderTargetTexture

> `readonly` **isRenderTargetTexture**: `boolean`

Defined in: [three/src/textures/Texture.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L338)

Indicates whether a texture belongs to a render target or not.

#### Default

```ts
false
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`isRenderTargetTexture`](/reference/three/classes/videotexture/#isrendertargettexture)

***

### isTexture

> `readonly` **isTexture**: `boolean`

Defined in: [three/src/textures/Texture.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L55)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`isTexture`](/reference/three/classes/videotexture/#istexture)

***

### isVideoFrameTexture

> `readonly` **isVideoFrameTexture**: `boolean`

Defined in: [three/src/textures/VideoFrameTexture.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/VideoFrameTexture.js#L41)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isVideoTexture

> `readonly` **isVideoTexture**: `boolean`

Defined in: [three/src/textures/VideoTexture.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/VideoTexture.js#L44)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`isVideoTexture`](/reference/three/classes/videotexture/#isvideotexture)

***

### magFilter

> **magFilter**: `any`

Defined in: [three/src/textures/Texture.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L140)

How the texture is sampled when a texel covers more than one pixel.

#### Default

```ts
LinearFilter
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`magFilter`](/reference/three/classes/videotexture/#magfilter)

***

### mapping

> **mapping**: `any`

Defined in: [three/src/textures/Texture.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L105)

How the texture is applied to the object. The value `UVMapping`
is the default, where texture or uv coordinates are used to apply the map.

#### Default

```ts
UVMapping
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`mapping`](/reference/three/classes/videotexture/#mapping)

***

### matrix

> **matrix**: [`Matrix3`](/reference/three/classes/matrix3/)

Defined in: [three/src/textures/Texture.js:243](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L243)

The uv-transformation matrix of the texture.

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`matrix`](/reference/three/classes/videotexture/#matrix)

***

### matrixAutoUpdate

> **matrixAutoUpdate**: `boolean`

Defined in: [three/src/textures/Texture.js:236](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L236)

Whether to update the texture's uv-transformation [Texture#matrix](/reference/three/classes/texture/#matrix)
from the properties [Texture#offset](/reference/three/classes/texture/#offset), [Texture#repeat](/reference/three/classes/texture/#repeat),
[Texture#rotation](/reference/three/classes/texture/#rotation), and [Texture#center](/reference/three/classes/texture/#center).

Set this to `false` if you are specifying the uv-transform matrix directly.

#### Default

```ts
true
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`matrixAutoUpdate`](/reference/three/classes/videotexture/#matrixautoupdate)

***

### minFilter

> **minFilter**: `any`

Defined in: [three/src/textures/Texture.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L148)

How the texture is sampled when a texel covers less than one pixel.

#### Default

```ts
LinearMipmapLinearFilter
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`minFilter`](/reference/three/classes/videotexture/#minfilter)

***

### mipmaps

> **mipmaps**: `any`[]

Defined in: [three/src/textures/Texture.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L96)

An array holding user-defined mipmaps.

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`mipmaps`](/reference/three/classes/videotexture/#mipmaps)

***

### name

> **name**: `string`

Defined in: [three/src/textures/Texture.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L79)

The name of the material.

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`name`](/reference/three/classes/videotexture/#name)

***

### offset

> **offset**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/textures/Texture.js:195](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L195)

How much a single repetition of the texture is offset from the beginning,
in each direction U and V. Typical range is `0.0` to `1.0`.

#### Default

```ts
(0,0)
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`offset`](/reference/three/classes/videotexture/#offset)

***

### onUpdate

> **onUpdate**: `Function`

Defined in: [three/src/textures/Texture.js:321](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L321)

A callback function, called when the texture is updated (e.g., when
[Texture#needsUpdate](/reference/three/classes/texture/#needsupdate) has been set to true and then the texture is used).

#### Default

```ts
null
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`onUpdate`](/reference/three/classes/videotexture/#onupdate)

***

### pmremVersion

> `readonly` **pmremVersion**: `number`

Defined in: [three/src/textures/Texture.js:348](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L348)

Indicates whether this texture should be processed by `PMREMGenerator` or not
(only relevant for render target textures).

#### Default

```ts
0
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`pmremVersion`](/reference/three/classes/videotexture/#pmremversion)

***

### premultiplyAlpha

> **premultiplyAlpha**: `boolean`

Defined in: [three/src/textures/Texture.js:265](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L265)

If set to `true`, the alpha channel, if present, is multiplied into the
color channels when the texture is uploaded to the GPU.

Note that this property has no effect when using `ImageBitmap`. You need to
configure premultiply alpha on bitmap creation instead.

#### Default

```ts
false
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`premultiplyAlpha`](/reference/three/classes/videotexture/#premultiplyalpha)

***

### renderTarget

> **renderTarget**: `any`

Defined in: [three/src/textures/Texture.js:329](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L329)

An optional back reference to the textures render target.

#### Default

```ts
null
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`renderTarget`](/reference/three/classes/videotexture/#rendertarget)

***

### repeat

> **repeat**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/textures/Texture.js:206](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L206)

How many times the texture is repeated across the surface, in each
direction U and V. If repeat is set greater than `1` in either direction,
the corresponding wrap parameter should also be set to `RepeatWrapping`
or `MirroredRepeatWrapping` to achieve the desired tiling effect.

#### Default

```ts
(1,1)
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`repeat`](/reference/three/classes/videotexture/#repeat)

***

### rotation

> **rotation**: `number`

Defined in: [three/src/textures/Texture.js:224](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L224)

How much the texture is rotated around the center point, in radians.
Positive values are counter-clockwise.

#### Default

```ts
0
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`rotation`](/reference/three/classes/videotexture/#rotation)

***

### source

> **source**: [`Source`](/reference/three/classes/source/)

Defined in: [three/src/textures/Texture.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L89)

The data definition of a texture. A reference to the data source can be
shared across textures. This is often useful in context of spritesheets
where multiple textures render the same data but with different texture
transformations.

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`source`](/reference/three/classes/videotexture/#source)

***

### type

> **type**: `number`

Defined in: [three/src/textures/Texture.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L186)

The data type of the texture.

#### Default

```ts
UnsignedByteType
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`type`](/reference/three/classes/videotexture/#type)

***

### unpackAlignment

> **unpackAlignment**: `number`

Defined in: [three/src/textures/Texture.js:287](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L287)

Specifies the alignment requirements for the start of each pixel row in memory.
The allowable values are `1` (byte-alignment), `2` (rows aligned to even-numbered bytes),
`4` (word-alignment), and `8` (rows start on double-word boundaries).

#### Default

```ts
4
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`unpackAlignment`](/reference/three/classes/videotexture/#unpackalignment)

***

### userData

> **userData**: `any`

Defined in: [three/src/textures/Texture.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L303)

An object that can be used to store custom data about the texture. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`userData`](/reference/three/classes/videotexture/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/textures/Texture.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L72)

The UUID of the material.

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`uuid`](/reference/three/classes/videotexture/#uuid)

***

### version

> `readonly` **version**: `number`

Defined in: [three/src/textures/Texture.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L312)

This starts at `0` and counts how many times [Texture#needsUpdate](/reference/three/classes/texture/#needsupdate) is set to `true`.

#### Default

```ts
0
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`version`](/reference/three/classes/videotexture/#version)

***

### wrapS

> **wrapS**: `number`

Defined in: [three/src/textures/Texture.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L123)

This defines how the texture is wrapped horizontally and corresponds to
*U* in UV mapping.

#### Default

```ts
ClampToEdgeWrapping
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`wrapS`](/reference/three/classes/videotexture/#wraps)

***

### wrapT

> **wrapT**: `number`

Defined in: [three/src/textures/Texture.js:132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L132)

This defines how the texture is wrapped horizontally and corresponds to
*V* in UV mapping.

#### Default

```ts
ClampToEdgeWrapping
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`wrapT`](/reference/three/classes/videotexture/#wrapt)

***

### DEFAULT\_ANISOTROPY

> `static` **DEFAULT\_ANISOTROPY**: `number`

Defined in: [three/src/textures/Texture.js:681](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L681)

The default anisotropy value for all textures.

#### Static

#### Default

```ts
1
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`DEFAULT_ANISOTROPY`](/reference/three/classes/videotexture/#default_anisotropy)

***

### DEFAULT\_IMAGE()

> `static` **DEFAULT\_IMAGE**: (`width`?, `height`?) => `HTMLImageElement`

Defined in: [three/src/textures/Texture.js:663](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L663)

The default image for all textures.

#### Parameters

##### width?

`number`

##### height?

`number`

#### Returns

`HTMLImageElement`

#### Static

#### Default

```ts
null
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`DEFAULT_IMAGE`](/reference/three/classes/videotexture/#default_image)

***

### DEFAULT\_MAPPING

> `static` **DEFAULT\_MAPPING**: `number`

Defined in: [three/src/textures/Texture.js:672](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L672)

The default mapping for all textures.

#### Static

#### Default

```ts
UVMapping
```

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`DEFAULT_MAPPING`](/reference/three/classes/videotexture/#default_mapping)

## Accessors

### image

#### Get Signature

> **get** **image**(): `any`

Defined in: [three/src/textures/Texture.js:357](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L357)

The image object holding the texture data.

##### Returns

`any`

#### Set Signature

> **set** **image**(`value`): `void`

Defined in: [three/src/textures/Texture.js:363](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L363)

##### Parameters

###### value

`any` = `null`

##### Returns

`void`

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`image`](/reference/three/classes/videotexture/#image)

***

### needsPMREMUpdate

#### Set Signature

> **set** **needsPMREMUpdate**(`value`): `void`

Defined in: [three/src/textures/Texture.js:644](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L644)

Setting this property to `true` indicates the engine the PMREM
must be regenerated.

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`needsPMREMUpdate`](/reference/three/classes/videotexture/#needspmremupdate)

***

### needsUpdate

#### Set Signature

> **set** **needsUpdate**(`value`): `void`

Defined in: [three/src/textures/Texture.js:625](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L625)

Setting this property to `true` indicates the engine the texture
must be updated in the next render. This triggers a texture upload
to the GPU and ensures correct texture parameter configuration.

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`needsUpdate`](/reference/three/classes/videotexture/#needsupdate)

## Methods

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

[`VideoTexture`](/reference/three/classes/videotexture/).[`addEventListener`](/reference/three/classes/videotexture/#addeventlistener)

***

### clone()

> **clone**(): `any`

Defined in: [three/src/textures/VideoFrameTexture.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/VideoFrameTexture.js#L51)

Returns a new texture with copied values from this instance.

#### Returns

`any`

A clone of this instance.

#### Overrides

[`VideoTexture`](/reference/three/classes/videotexture/).[`clone`](/reference/three/classes/videotexture/#clone)

***

### copy()

> **copy**(`source`): [`Texture`](/reference/three/classes/texture/)

Defined in: [three/src/textures/Texture.js:396](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L396)

Copies the values of the given texture to this instance.

#### Parameters

##### source

[`Texture`](/reference/three/classes/texture/)

The texture to copy.

#### Returns

[`Texture`](/reference/three/classes/texture/)

A reference to this instance.

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`copy`](/reference/three/classes/videotexture/#copy)

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

[`VideoTexture`](/reference/three/classes/videotexture/).[`dispatchEvent`](/reference/three/classes/videotexture/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/textures/Texture.js:518](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L518)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

#### Fires

Texture#dispose

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`dispose`](/reference/three/classes/videotexture/#dispose)

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

[`VideoTexture`](/reference/three/classes/videotexture/).[`hasEventListener`](/reference/three/classes/videotexture/#haseventlistener)

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

[`VideoTexture`](/reference/three/classes/videotexture/).[`removeEventListener`](/reference/three/classes/videotexture/#removeeventlistener)

***

### setFrame()

> **setFrame**(`frame`): `void`

Defined in: [three/src/textures/VideoFrameTexture.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/VideoFrameTexture.js#L63)

Sets the current frame of the video. This will automatically update the texture
so the data can be used for rendering.

#### Parameters

##### frame

`VideoFrame`

The video frame.

#### Returns

`void`

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/textures/Texture.js:450](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L450)

Serializes the texture into JSON.

#### Parameters

##### meta

`any`

An optional value holding meta information about the serialization.

#### Returns

`any`

A JSON object representing the serialized texture.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`toJSON`](/reference/three/classes/videotexture/#tojson)

***

### transformUv()

> **transformUv**(`uv`): [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/textures/Texture.js:536](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L536)

Transforms the given uv vector with the textures uv transformation matrix.

#### Parameters

##### uv

[`Vector2`](/reference/three/classes/vector2/)

The uv vector.

#### Returns

[`Vector2`](/reference/three/classes/vector2/)

The transformed uv vector.

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`transformUv`](/reference/three/classes/videotexture/#transformuv)

***

### update()

> **update**(): `void`

Defined in: [three/src/textures/VideoFrameTexture.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/VideoFrameTexture.js#L49)

This method overwritten with an empty implementation since
this type of texture is updated via `setFrame()`.

#### Returns

`void`

#### Overrides

[`VideoTexture`](/reference/three/classes/videotexture/).[`update`](/reference/three/classes/videotexture/#update)

***

### updateMatrix()

> **updateMatrix**(): `void`

Defined in: [three/src/textures/Texture.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L373)

Updates the texture transformation matrix from the from the properties [Texture#offset](/reference/three/classes/texture/#offset),
[Texture#repeat](/reference/three/classes/texture/#repeat), [Texture#rotation](/reference/three/classes/texture/#rotation), and [Texture#center](/reference/three/classes/texture/#center).

#### Returns

`void`

#### Inherited from

[`VideoTexture`](/reference/three/classes/videotexture/).[`updateMatrix`](/reference/three/classes/videotexture/#updatematrix)

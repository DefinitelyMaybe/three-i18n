---
editUrl: false
next: false
prev: false
title: "StorageTexture"
---

Defined in: [three/src/renderers/common/StorageTexture.js:13](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/StorageTexture.js#L13)

This special type of texture is intended for compute shaders.
It can be used to compute the data of a texture with a compute shader.

Note: This type of texture can only be used with `WebGPURenderer`
and a WebGPU backend.

## Extends

- [`Texture`](/reference/three/classes/texture/)

## Constructors

### Constructor

> **new StorageTexture**(`width`?, `height`?): `StorageTexture`

Defined in: [three/src/renderers/common/StorageTexture.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/StorageTexture.js#L21)

Constructs a new storage texture.

#### Parameters

##### width?

`number` = `1`

The storage texture's width.

##### height?

`number` = `1`

The storage texture's height.

#### Returns

`StorageTexture`

#### Overrides

[`Texture`](/reference/three/classes/texture/).[`constructor`](/reference/three/classes/texture/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`_listeners`](/reference/three/classes/texture/#_listeners)

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

[`Texture`](/reference/three/classes/texture/).[`anisotropy`](/reference/three/classes/texture/#anisotropy)

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

[`Texture`](/reference/three/classes/texture/).[`center`](/reference/three/classes/texture/#center)

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

[`Texture`](/reference/three/classes/texture/).[`channel`](/reference/three/classes/texture/#channel)

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

[`Texture`](/reference/three/classes/texture/).[`colorSpace`](/reference/three/classes/texture/#colorspace)

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

[`Texture`](/reference/three/classes/texture/).[`flipY`](/reference/three/classes/texture/#flipy)

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

[`Texture`](/reference/three/classes/texture/).[`format`](/reference/three/classes/texture/#format)

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

[`Texture`](/reference/three/classes/texture/).[`generateMipmaps`](/reference/three/classes/texture/#generatemipmaps)

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

[`Texture`](/reference/three/classes/texture/).[`internalFormat`](/reference/three/classes/texture/#internalformat)

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

[`Texture`](/reference/three/classes/texture/).[`isRenderTargetTexture`](/reference/three/classes/texture/#isrendertargettexture)

***

### isStorageTexture

> `readonly` **isStorageTexture**: `boolean`

Defined in: [three/src/renderers/common/StorageTexture.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/common/StorageTexture.js#L53)

This flag can be used for type testing.

#### Default

```ts
true
```

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

[`Texture`](/reference/three/classes/texture/).[`isTexture`](/reference/three/classes/texture/#istexture)

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

[`Texture`](/reference/three/classes/texture/).[`magFilter`](/reference/three/classes/texture/#magfilter)

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

[`Texture`](/reference/three/classes/texture/).[`mapping`](/reference/three/classes/texture/#mapping)

***

### matrix

> **matrix**: [`Matrix3`](/reference/three/classes/matrix3/)

Defined in: [three/src/textures/Texture.js:243](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L243)

The uv-transformation matrix of the texture.

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`matrix`](/reference/three/classes/texture/#matrix)

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

[`Texture`](/reference/three/classes/texture/).[`matrixAutoUpdate`](/reference/three/classes/texture/#matrixautoupdate)

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

[`Texture`](/reference/three/classes/texture/).[`minFilter`](/reference/three/classes/texture/#minfilter)

***

### mipmaps

> **mipmaps**: `any`[]

Defined in: [three/src/textures/Texture.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L96)

An array holding user-defined mipmaps.

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`mipmaps`](/reference/three/classes/texture/#mipmaps)

***

### name

> **name**: `string`

Defined in: [three/src/textures/Texture.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L79)

The name of the material.

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`name`](/reference/three/classes/texture/#name)

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

[`Texture`](/reference/three/classes/texture/).[`offset`](/reference/three/classes/texture/#offset)

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

[`Texture`](/reference/three/classes/texture/).[`onUpdate`](/reference/three/classes/texture/#onupdate)

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

[`Texture`](/reference/three/classes/texture/).[`pmremVersion`](/reference/three/classes/texture/#pmremversion)

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

[`Texture`](/reference/three/classes/texture/).[`premultiplyAlpha`](/reference/three/classes/texture/#premultiplyalpha)

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

[`Texture`](/reference/three/classes/texture/).[`renderTarget`](/reference/three/classes/texture/#rendertarget)

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

[`Texture`](/reference/three/classes/texture/).[`repeat`](/reference/three/classes/texture/#repeat)

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

[`Texture`](/reference/three/classes/texture/).[`rotation`](/reference/three/classes/texture/#rotation)

***

### source

> **source**: [`Source`](/reference/three/classes/source/)

Defined in: [three/src/textures/Texture.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L89)

The data definition of a texture. A reference to the data source can be
shared across textures. This is often useful in context of spritesheets
where multiple textures render the same data but with different texture
transformations.

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`source`](/reference/three/classes/texture/#source)

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

[`Texture`](/reference/three/classes/texture/).[`type`](/reference/three/classes/texture/#type)

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

[`Texture`](/reference/three/classes/texture/).[`unpackAlignment`](/reference/three/classes/texture/#unpackalignment)

***

### userData

> **userData**: `any`

Defined in: [three/src/textures/Texture.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L303)

An object that can be used to store custom data about the texture. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`userData`](/reference/three/classes/texture/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/textures/Texture.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L72)

The UUID of the material.

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`uuid`](/reference/three/classes/texture/#uuid)

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

[`Texture`](/reference/three/classes/texture/).[`version`](/reference/three/classes/texture/#version)

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

[`Texture`](/reference/three/classes/texture/).[`wrapS`](/reference/three/classes/texture/#wraps)

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

[`Texture`](/reference/three/classes/texture/).[`wrapT`](/reference/three/classes/texture/#wrapt)

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

[`Texture`](/reference/three/classes/texture/).[`DEFAULT_ANISOTROPY`](/reference/three/classes/texture/#default_anisotropy)

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

[`Texture`](/reference/three/classes/texture/).[`DEFAULT_IMAGE`](/reference/three/classes/texture/#default_image)

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

[`Texture`](/reference/three/classes/texture/).[`DEFAULT_MAPPING`](/reference/three/classes/texture/#default_mapping)

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

[`Texture`](/reference/three/classes/texture/).[`image`](/reference/three/classes/texture/#image)

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

[`Texture`](/reference/three/classes/texture/).[`needsPMREMUpdate`](/reference/three/classes/texture/#needspmremupdate)

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

[`Texture`](/reference/three/classes/texture/).[`needsUpdate`](/reference/three/classes/texture/#needsupdate)

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

[`Texture`](/reference/three/classes/texture/).[`addEventListener`](/reference/three/classes/texture/#addeventlistener)

***

### clone()

> **clone**(): [`Texture`](/reference/three/classes/texture/)

Defined in: [three/src/textures/Texture.js:384](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L384)

Returns a new texture with copied values from this instance.

#### Returns

[`Texture`](/reference/three/classes/texture/)

A clone of this instance.

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`clone`](/reference/three/classes/texture/#clone)

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

[`Texture`](/reference/three/classes/texture/).[`copy`](/reference/three/classes/texture/#copy)

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

[`Texture`](/reference/three/classes/texture/).[`dispatchEvent`](/reference/three/classes/texture/#dispatchevent)

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

[`Texture`](/reference/three/classes/texture/).[`dispose`](/reference/three/classes/texture/#dispose)

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

[`Texture`](/reference/three/classes/texture/).[`hasEventListener`](/reference/three/classes/texture/#haseventlistener)

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

[`Texture`](/reference/three/classes/texture/).[`removeEventListener`](/reference/three/classes/texture/#removeeventlistener)

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

[`Texture`](/reference/three/classes/texture/).[`toJSON`](/reference/three/classes/texture/#tojson)

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

[`Texture`](/reference/three/classes/texture/).[`transformUv`](/reference/three/classes/texture/#transformuv)

***

### updateMatrix()

> **updateMatrix**(): `void`

Defined in: [three/src/textures/Texture.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L373)

Updates the texture transformation matrix from the from the properties [Texture#offset](/reference/three/classes/texture/#offset),
[Texture#repeat](/reference/three/classes/texture/#repeat), [Texture#rotation](/reference/three/classes/texture/#rotation), and [Texture#center](/reference/three/classes/texture/#center).

#### Returns

`void`

#### Inherited from

[`Texture`](/reference/three/classes/texture/).[`updateMatrix`](/reference/three/classes/texture/#updatematrix)

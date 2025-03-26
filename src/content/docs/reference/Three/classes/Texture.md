---
editUrl: false
next: false
prev: false
title: "Texture"
---

Defined in: [three/src/textures/Texture.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L28)

Base class for all textures.

Note: After the initial use of a texture, its dimensions, format, and type
cannot be changed. Instead, call [Texture#dispose](/reference/three/classes/texture/#dispose) on the texture and instantiate a new one.

## Extends

- [`EventDispatcher`](/reference/three/classes/eventdispatcher/)

## Extended by

- [`VideoTexture`](/reference/three/classes/videotexture/)
- [`FramebufferTexture`](/reference/three/classes/framebuffertexture/)
- [`DataTexture`](/reference/three/classes/datatexture/)
- [`DataArrayTexture`](/reference/three/classes/dataarraytexture/)
- [`Data3DTexture`](/reference/three/classes/data3dtexture/)
- [`CompressedTexture`](/reference/three/classes/compressedtexture/)
- [`CubeTexture`](/reference/three/classes/cubetexture/)
- [`CanvasTexture`](/reference/three/classes/canvastexture/)
- [`DepthTexture`](/reference/three/classes/depthtexture/)
- [`StorageTexture`](/reference/threewebgpu/classes/storagetexture/)

## Constructors

### Constructor

> **new Texture**(`image`?, `mapping`?, `wrapS`?, `wrapT`?, `magFilter`?, `minFilter`?, `format`?, `type`?, `anisotropy`?, `colorSpace`?): `Texture`

Defined in: [three/src/textures/Texture.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L44)

Constructs a new texture.

#### Parameters

##### image?

`any` = `Texture.DEFAULT_IMAGE`

The image holding the texture data.

##### mapping?

`number` = `Texture.DEFAULT_MAPPING`

The texture mapping.

##### wrapS?

`number` = `ClampToEdgeWrapping`

The wrapS value.

##### wrapT?

`number` = `ClampToEdgeWrapping`

The wrapT value.

##### magFilter?

`number` = `LinearFilter`

The mag filter value.

##### minFilter?

`number` = `LinearMipmapLinearFilter`

The min filter value.

##### format?

`number` = `RGBAFormat`

The texture format.

##### type?

`number` = `UnsignedByteType`

The texture type.

##### anisotropy?

`number` = `Texture.DEFAULT_ANISOTROPY`

The anisotropy value.

##### colorSpace?

`string` = `NoColorSpace`

The color space.

#### Returns

`Texture`

#### Overrides

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`constructor`](/reference/three/classes/eventdispatcher/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`_listeners`](/reference/three/classes/eventdispatcher/#_listeners)

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

***

### colorSpace

> **colorSpace**: `string`

Defined in: [three/src/textures/Texture.js:295](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L295)

Textures containing color data should be annotated with `SRGBColorSpace` or `LinearSRGBColorSpace`.

#### Default

```ts
NoColorSpace
```

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

***

### format

> **format**: `number`

Defined in: [three/src/textures/Texture.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L167)

The format of the texture.

#### Default

```ts
RGBAFormat
```

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

***

### isRenderTargetTexture

> `readonly` **isRenderTargetTexture**: `boolean`

Defined in: [three/src/textures/Texture.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L338)

Indicates whether a texture belongs to a render target or not.

#### Default

```ts
false
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

***

### magFilter

> **magFilter**: `any`

Defined in: [three/src/textures/Texture.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L140)

How the texture is sampled when a texel covers more than one pixel.

#### Default

```ts
LinearFilter
```

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

***

### matrix

> **matrix**: [`Matrix3`](/reference/three/classes/matrix3/)

Defined in: [three/src/textures/Texture.js:243](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L243)

The uv-transformation matrix of the texture.

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

***

### minFilter

> **minFilter**: `any`

Defined in: [three/src/textures/Texture.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L148)

How the texture is sampled when a texel covers less than one pixel.

#### Default

```ts
LinearMipmapLinearFilter
```

***

### mipmaps

> **mipmaps**: `any`[]

Defined in: [three/src/textures/Texture.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L96)

An array holding user-defined mipmaps.

***

### name

> **name**: `string`

Defined in: [three/src/textures/Texture.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L79)

The name of the material.

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

***

### renderTarget

> **renderTarget**: `any`

Defined in: [three/src/textures/Texture.js:329](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L329)

An optional back reference to the textures render target.

#### Default

```ts
null
```

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

***

### source

> **source**: [`Source`](/reference/three/classes/source/)

Defined in: [three/src/textures/Texture.js:89](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L89)

The data definition of a texture. A reference to the data source can be
shared across textures. This is often useful in context of spritesheets
where multiple textures render the same data but with different texture
transformations.

***

### type

> **type**: `number`

Defined in: [three/src/textures/Texture.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L186)

The data type of the texture.

#### Default

```ts
UnsignedByteType
```

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

***

### userData

> **userData**: `any`

Defined in: [three/src/textures/Texture.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L303)

An object that can be used to store custom data about the texture. It
should not hold references to functions as these will not be cloned.

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/textures/Texture.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L72)

The UUID of the material.

***

### version

> `readonly` **version**: `number`

Defined in: [three/src/textures/Texture.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L312)

This starts at `0` and counts how many times [Texture#needsUpdate](/reference/three/classes/texture/#needsupdate) is set to `true`.

#### Default

```ts
0
```

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

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`addEventListener`](/reference/three/classes/eventdispatcher/#addeventlistener)

***

### clone()

> **clone**(): `Texture`

Defined in: [three/src/textures/Texture.js:384](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L384)

Returns a new texture with copied values from this instance.

#### Returns

`Texture`

A clone of this instance.

***

### copy()

> **copy**(`source`): `Texture`

Defined in: [three/src/textures/Texture.js:396](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L396)

Copies the values of the given texture to this instance.

#### Parameters

##### source

`Texture`

The texture to copy.

#### Returns

`Texture`

A reference to this instance.

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

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`dispatchEvent`](/reference/three/classes/eventdispatcher/#dispatchevent)

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

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`hasEventListener`](/reference/three/classes/eventdispatcher/#haseventlistener)

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

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`removeEventListener`](/reference/three/classes/eventdispatcher/#removeeventlistener)

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

***

### updateMatrix()

> **updateMatrix**(): `void`

Defined in: [three/src/textures/Texture.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/textures/Texture.js#L373)

Updates the texture transformation matrix from the from the properties [Texture#offset](/reference/three/classes/texture/#offset),
[Texture#repeat](/reference/three/classes/texture/#repeat), [Texture#rotation](/reference/three/classes/texture/#rotation), and [Texture#center](/reference/three/classes/texture/#center).

#### Returns

`void`

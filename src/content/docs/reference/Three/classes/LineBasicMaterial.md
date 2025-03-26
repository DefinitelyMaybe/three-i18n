---
editUrl: false
next: false
prev: false
title: "LineBasicMaterial"
---

Defined in: [three/src/materials/LineBasicMaterial.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L15)

A material for rendering line primitives.

Materials define the appearance of renderable 3D objects.

```js
const material = new THREE.LineBasicMaterial( { color: 0xffffff } );
```

## Extends

- [`Material`](/reference/three/classes/material/)

## Extended by

- [`LineDashedMaterial`](/reference/three/classes/linedashedmaterial/)

## Constructors

### Constructor

> **new LineBasicMaterial**(`parameters`?): `LineBasicMaterial`

Defined in: [three/src/materials/LineBasicMaterial.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L26)

Constructs a new line basic material.

#### Parameters

##### parameters?

`any`

An object with one or more properties
defining the material's appearance. Any property of the material
(including any property from inherited materials) can be passed
in here. Color values can be passed any type of value accepted
by [Color#set](/reference/three/classes/color/#set).

#### Returns

`LineBasicMaterial`

#### Overrides

[`Material`](/reference/three/classes/material/).[`constructor`](/reference/three/classes/material/#constructor)

## Properties

### \_alphaTest

> **\_alphaTest**: `number`

Defined in: [three/src/materials/Material.js:474](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L474)

#### Inherited from

[`Material`](/reference/three/classes/material/).[`_alphaTest`](/reference/three/classes/material/#_alphatest)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`Material`](/reference/three/classes/material/).[`_listeners`](/reference/three/classes/material/#_listeners)

***

### allowOverride

> **allowOverride**: `boolean`

Defined in: [three/src/materials/Material.js:436](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L436)

Whether it's possible to override the material with [Scene#overrideMaterial](/reference/three/classes/scene/#overridematerial) or not.

#### Default

```ts
true
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`allowOverride`](/reference/three/classes/material/#allowoverride)

***

### alphaHash

> **alphaHash**: `boolean`

Defined in: [three/src/materials/Material.js:132](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L132)

Enables alpha hashed transparency, an alternative to [Material#transparent](/reference/three/classes/material/#transparent) or
[Material#alphaTest](/reference/three/classes/material/#alphatest). The material will not be rendered if opacity is lower than
a random threshold. Randomization introduces some grain or noise, but approximates alpha
blending without the associated problems of sorting. Using TAA can reduce the resulting noise.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`alphaHash`](/reference/three/classes/material/#alphahash)

***

### alphaToCoverage

> **alphaToCoverage**: `boolean`

Defined in: [three/src/materials/Material.js:406](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L406)

Whether alpha to coverage should be enabled or not. Can only be used with MSAA-enabled contexts
(meaning when the renderer was created with *antialias* parameter set to `true`). Enabling this
will smooth aliasing on clip plane edges and alphaTest-clipped edges.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`alphaToCoverage`](/reference/three/classes/material/#alphatocoverage)

***

### blendAlpha

> **blendAlpha**: `number`

Defined in: [three/src/materials/Material.js:200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L200)

Represents the alpha value of the constant blend color.

This property has only an effect when using custom blending with `ConstantAlpha` or `OneMinusConstantAlpha`.

#### Default

```ts
0
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blendAlpha`](/reference/three/classes/material/#blendalpha)

***

### blendColor

> **blendColor**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/materials/Material.js:190](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L190)

Represents the RGB values of the constant blend color.

This property has only an effect when using custom blending with `ConstantColor` or `OneMinusConstantColor`.

#### Default

```ts
(0,0,0)
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blendColor`](/reference/three/classes/material/#blendcolor)

***

### blendDst

> **blendDst**: `any`

Defined in: [three/src/materials/Material.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L148)

Defines the blending destination factor.

#### Default

```ts
OneMinusSrcAlphaFactor
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blendDst`](/reference/three/classes/material/#blenddst)

***

### blendDstAlpha

> **blendDstAlpha**: `any`

Defined in: [three/src/materials/Material.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L172)

Defines the blending destination alpha factor.

#### Default

```ts
null
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blendDstAlpha`](/reference/three/classes/material/#blenddstalpha)

***

### blendEquation

> **blendEquation**: `any`

Defined in: [three/src/materials/Material.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L156)

Defines the blending equation.

#### Default

```ts
OneMinusSrcAlphaFactor
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blendEquation`](/reference/three/classes/material/#blendequation)

***

### blendEquationAlpha

> **blendEquationAlpha**: `any`

Defined in: [three/src/materials/Material.js:180](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L180)

Defines the blending equation of the alpha channel.

#### Default

```ts
OneMinusSrcAlphaFactor
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blendEquationAlpha`](/reference/three/classes/material/#blendequationalpha)

***

### blending

> **blending**: `any`

Defined in: [three/src/materials/Material.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L77)

Defines the blending type of the material.

It must be set to `CustomBlending` if custom blending properties like
[Material#blendSrc](/reference/three/classes/material/#blendsrc), [Material#blendDst](/reference/three/classes/material/#blenddst) or [Material#blendEquation](/reference/three/classes/material/#blendequation)
should have any effect.

#### Default

```ts
NormalBlending
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blending`](/reference/three/classes/material/#blending)

***

### blendSrc

> **blendSrc**: `any`

Defined in: [three/src/materials/Material.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L140)

Defines the blending source factor.

#### Default

```ts
SrcAlphaFactor
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blendSrc`](/reference/three/classes/material/#blendsrc)

***

### blendSrcAlpha

> **blendSrcAlpha**: `any`

Defined in: [three/src/materials/Material.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L164)

Defines the blending source alpha factor.

#### Default

```ts
null
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`blendSrcAlpha`](/reference/three/classes/material/#blendsrcalpha)

***

### clipIntersection

> **clipIntersection**: `boolean`

Defined in: [three/src/materials/Material.js:317](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L317)

Changes the behavior of clipping planes so that only their intersection is
clipped, rather than their union.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`clipIntersection`](/reference/three/classes/material/#clipintersection)

***

### clippingPlanes

> **clippingPlanes**: `Plane`[]

Defined in: [three/src/materials/Material.js:308](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L308)

User-defined clipping planes specified as THREE.Plane objects in world
space. These planes apply to the objects this material is attached to.
Points in space whose signed distance to the plane is negative are clipped
(not rendered). This requires [WebGLRenderer#localClippingEnabled](/reference/three/classes/webglrenderer/#localclippingenabled) to
be `true`.

#### Default

```ts
null
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`clippingPlanes`](/reference/three/classes/material/#clippingplanes)

***

### clipShadows

> **clipShadows**: `boolean`

Defined in: [three/src/materials/Material.js:326](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L326)

Defines whether to clip shadows according to the clipping planes specified
on this material.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`clipShadows`](/reference/three/classes/material/#clipshadows)

***

### color

> **color**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/materials/LineBasicMaterial.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L47)

Color of the material.

#### Default

```ts
(1,1,1)
```

***

### colorWrite

> **colorWrite**: `boolean`

Defined in: [three/src/materials/Material.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L350)

Whether to render the material's color.

This can be used in conjunction with Object3D#renderOder to create invisible
objects that occlude other objects.

#### Default

```ts
true
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`colorWrite`](/reference/three/classes/material/#colorwrite)

***

### depthFunc

> **depthFunc**: `any`

Defined in: [three/src/materials/Material.js:208](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L208)

Defines the depth function.

#### Default

```ts
LessEqualDepth
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`depthFunc`](/reference/three/classes/material/#depthfunc)

***

### depthTest

> **depthTest**: `boolean`

Defined in: [three/src/materials/Material.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L217)

Whether to have depth test enabled when rendering this material.
When the depth test is disabled, the depth write will also be implicitly disabled.

#### Default

```ts
true
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`depthTest`](/reference/three/classes/material/#depthtest)

***

### depthWrite

> **depthWrite**: `boolean`

Defined in: [three/src/materials/Material.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L228)

Whether rendering this material has any effect on the depth buffer.

When drawing 2D overlays it can be useful to disable the depth writing in
order to layer several things together without creating z-index artifacts.

#### Default

```ts
true
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`depthWrite`](/reference/three/classes/material/#depthwrite)

***

### dithering

> **dithering**: `boolean`

Defined in: [three/src/materials/Material.js:396](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L396)

Whether to apply dithering to the color to remove the appearance of banding.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`dithering`](/reference/three/classes/material/#dithering)

***

### fog

> **fog**: `boolean`

Defined in: [three/src/materials/LineBasicMaterial.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L96)

Whether the material is affected by fog or not.

#### Default

```ts
true
```

***

### forceSinglePass

> **forceSinglePass**: `boolean`

Defined in: [three/src/materials/Material.js:428](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L428)

Whether double-sided, transparent objects should be rendered with a single pass or not.

The engine renders double-sided, transparent objects with two draw calls (back faces first,
then front faces) to mitigate transparency artifacts. There are scenarios however where this
approach produces no quality gains but still doubles draw calls e.g. when rendering flat
vegetation like grass sprites. In these cases, set the `forceSinglePass` flag to `true` to
disable the two pass rendering to avoid performance issues.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`forceSinglePass`](/reference/three/classes/material/#forcesinglepass)

***

### isLineBasicMaterial

> `readonly` **isLineBasicMaterial**: `boolean`

Defined in: [three/src/materials/LineBasicMaterial.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L37)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isMaterial

> `readonly` **isMaterial**: `boolean`

Defined in: [three/src/materials/Material.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L32)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`isMaterial`](/reference/three/classes/material/#ismaterial)

***

### linecap

> **linecap**: `"round"` \| `"butt"` \| `"square"`

Defined in: [three/src/materials/LineBasicMaterial.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L78)

Defines appearance of line ends.

Can only be used with SVGRenderer.

#### Default

```ts
'round'
```

***

### linejoin

> **linejoin**: `"round"` \| `"bevel"` \| `"miter"`

Defined in: [three/src/materials/LineBasicMaterial.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L88)

Defines appearance of line joints.

Can only be used with SVGRenderer.

#### Default

```ts
'round'
```

***

### linewidth

> **linewidth**: `number`

Defined in: [three/src/materials/LineBasicMaterial.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L68)

Controls line thickness or lines.

Can only be used with SVGRenderer. WebGL and WebGPU
ignore this setting and always render line primitives with a
width of one pixel.

#### Default

```ts
1
```

***

### map

> **map**: `Texture`

Defined in: [three/src/materials/LineBasicMaterial.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L56)

Sets the color of the lines using data from a texture. The texture map
color is modulated by the diffuse `color`.

#### Default

```ts
null
```

***

### name

> **name**: `string`

Defined in: [three/src/materials/Material.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L56)

The name of the material.

#### Inherited from

[`Material`](/reference/three/classes/material/).[`name`](/reference/three/classes/material/#name)

***

### opacity

> **opacity**: `number`

Defined in: [three/src/materials/Material.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L108)

Defines how transparent the material is.
A value of `0.0` indicates fully transparent, `1.0` is fully opaque.

If the [Material#transparent](/reference/three/classes/material/#transparent) is not set to `true`,
the material will remain fully opaque and this value will only affect its color.

#### Default

```ts
1
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`opacity`](/reference/three/classes/material/#opacity)

***

### polygonOffset

> **polygonOffset**: `boolean`

Defined in: [three/src/materials/Material.js:372](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L372)

Whether to use polygon offset or not. When enabled, each fragment's depth value will
be offset after it is interpolated from the depth values of the appropriate vertices.
The offset is added before the depth test is performed and before the value is written
into the depth buffer.

Can be useful for rendering hidden-line images, for applying decals to surfaces, and for
rendering solids with highlighted edges.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`polygonOffset`](/reference/three/classes/material/#polygonoffset)

***

### polygonOffsetFactor

> **polygonOffsetFactor**: `number`

Defined in: [three/src/materials/Material.js:380](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L380)

Specifies a scale factor that is used to create a variable depth offset for each polygon.

#### Default

```ts
0
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`polygonOffsetFactor`](/reference/three/classes/material/#polygonoffsetfactor)

***

### polygonOffsetUnits

> **polygonOffsetUnits**: `number`

Defined in: [three/src/materials/Material.js:388](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L388)

Is multiplied by an implementation-specific value to create a constant depth offset.

#### Default

```ts
0
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`polygonOffsetUnits`](/reference/three/classes/material/#polygonoffsetunits)

***

### precision

> **precision**: `"highp"` \| `"mediump"` \| `"lowp"`

Defined in: [three/src/materials/Material.js:358](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L358)

Override the renderer's default precision for this material.

#### Default

```ts
null
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`precision`](/reference/three/classes/material/#precision)

***

### premultipliedAlpha

> **premultipliedAlpha**: `boolean`

Defined in: [three/src/materials/Material.js:414](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L414)

Whether to premultiply the alpha (transparency) value.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`premultipliedAlpha`](/reference/three/classes/material/#premultipliedalpha)

***

### shadowSide

> **shadowSide**: `any`

Defined in: [three/src/materials/Material.js:339](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L339)

Defines which side of faces cast shadows. If `null`, the side casting shadows
is determined as follows:

- When [Material#side](/reference/three/classes/material/#side) is set to `FrontSide`, the back side cast shadows.
- When [Material#side](/reference/three/classes/material/#side) is set to `BackSide`, the front side cast shadows.
- When [Material#side](/reference/three/classes/material/#side) is set to `DoubleSide`, both sides cast shadows.

#### Default

```ts
null
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`shadowSide`](/reference/three/classes/material/#shadowside)

***

### side

> **side**: `any`

Defined in: [three/src/materials/Material.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L85)

Defines which side of faces will be rendered - front, back or both.

#### Default

```ts
FrontSide
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`side`](/reference/three/classes/material/#side)

***

### stencilFail

> **stencilFail**: `any`

Defined in: [three/src/materials/Material.js:268](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L268)

Which stencil operation to perform when the comparison function returns `false`.

#### Default

```ts
KeepStencilOp
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`stencilFail`](/reference/three/classes/material/#stencilfail)

***

### stencilFunc

> **stencilFunc**: `any`

Defined in: [three/src/materials/Material.js:244](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L244)

The stencil comparison function to use.

#### Default

```ts
AlwaysStencilFunc
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`stencilFunc`](/reference/three/classes/material/#stencilfunc)

***

### stencilFuncMask

> **stencilFuncMask**: `number`

Defined in: [three/src/materials/Material.js:260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L260)

The bit mask to use when comparing against the stencil buffer.

#### Default

```ts
0xff
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`stencilFuncMask`](/reference/three/classes/material/#stencilfuncmask)

***

### stencilRef

> **stencilRef**: `number`

Defined in: [three/src/materials/Material.js:252](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L252)

The value to use when performing stencil comparisons or stencil operations.

#### Default

```ts
0
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`stencilRef`](/reference/three/classes/material/#stencilref)

***

### stencilWrite

> **stencilWrite**: `boolean`

Defined in: [three/src/materials/Material.js:296](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L296)

Whether stencil operations are performed against the stencil buffer. In
order to perform writes or comparisons against the stencil buffer this
value must be `true`.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`stencilWrite`](/reference/three/classes/material/#stencilwrite)

***

### stencilWriteMask

> **stencilWriteMask**: `number`

Defined in: [three/src/materials/Material.js:236](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L236)

The bit mask to use when writing to the stencil buffer.

#### Default

```ts
0xff
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`stencilWriteMask`](/reference/three/classes/material/#stencilwritemask)

***

### stencilZFail

> **stencilZFail**: `any`

Defined in: [three/src/materials/Material.js:277](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L277)

Which stencil operation to perform when the comparison function returns
`true` but the depth test fails.

#### Default

```ts
KeepStencilOp
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`stencilZFail`](/reference/three/classes/material/#stencilzfail)

***

### stencilZPass

> **stencilZPass**: `any`

Defined in: [three/src/materials/Material.js:286](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L286)

Which stencil operation to perform when the comparison function returns
`true` and the depth test passes.

#### Default

```ts
KeepStencilOp
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`stencilZPass`](/reference/three/classes/material/#stencilzpass)

***

### toneMapped

> **toneMapped**: `boolean`

Defined in: [three/src/materials/Material.js:455](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L455)

Defines whether this material is tone mapped according to the renderer's tone mapping setting.

It is ignored when rendering to a render target or using post processing or when using
`WebGPURenderer`. In all these cases, all materials are honored by tone mapping.

#### Default

```ts
true
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`toneMapped`](/reference/three/classes/material/#tonemapped)

***

### transparent

> **transparent**: `boolean`

Defined in: [three/src/materials/Material.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L121)

Defines whether this material is transparent. This has an effect on
rendering as transparent objects need special treatment and are rendered
after non-transparent objects.

When set to true, the extent to which the material is transparent is
controlled by [Material#opacity](/reference/three/classes/material/#opacity).

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`transparent`](/reference/three/classes/material/#transparent)

***

### type

> **type**: `string`

Defined in: [three/src/materials/LineBasicMaterial.js:39](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L39)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`Material`](/reference/three/classes/material/).[`type`](/reference/three/classes/material/#type)

***

### userData

> **userData**: `any`

Defined in: [three/src/materials/Material.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L463)

An object that can be used to store custom data about the Material. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`Material`](/reference/three/classes/material/).[`userData`](/reference/three/classes/material/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/materials/Material.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L49)

The UUID of the material.

#### Inherited from

[`Material`](/reference/three/classes/material/).[`uuid`](/reference/three/classes/material/#uuid)

***

### version

> `readonly` **version**: `number`

Defined in: [three/src/materials/Material.js:472](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L472)

This starts at `0` and counts how many times [Material#needsUpdate](/reference/three/classes/material/#needsupdate) is set to `true`.

#### Default

```ts
0
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`version`](/reference/three/classes/material/#version)

***

### vertexColors

> **vertexColors**: `boolean`

Defined in: [three/src/materials/Material.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L96)

If set to `true`, vertex colors should be used.

The engine supports RGB and RGBA vertex colors depending on whether a three (RGB) or
four (RGBA) component color buffer attribute is used.

#### Default

```ts
false
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`vertexColors`](/reference/three/classes/material/#vertexcolors)

***

### visible

> **visible**: `boolean`

Defined in: [three/src/materials/Material.js:444](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L444)

Defines whether 3D objects using this material are visible.

#### Default

```ts
true
```

#### Inherited from

[`Material`](/reference/three/classes/material/).[`visible`](/reference/three/classes/material/#visible)

## Accessors

### alphaTest

#### Get Signature

> **get** **alphaTest**(): `number`

Defined in: [three/src/materials/Material.js:486](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L486)

Sets the alpha value to be used when running an alpha test. The material
will not be rendered if the opacity is lower than this value.

##### Default

```ts
0
```

##### Returns

`number`

#### Inherited from

[`Material`](/reference/three/classes/material/).[`alphaTest`](/reference/three/classes/material/#alphatest)

***

### needsUpdate

#### Set Signature

> **set** **needsUpdate**(`value`): `void`

Defined in: [three/src/materials/Material.js:994](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L994)

Setting this property to `true` indicates the engine the material
needs to be recompiled.

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

[`Material`](/reference/three/classes/material/).[`needsUpdate`](/reference/three/classes/material/#needsupdate)

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

[`Material`](/reference/three/classes/material/).[`addEventListener`](/reference/three/classes/material/#addeventlistener)

***

### clone()

> **clone**(): [`Material`](/reference/three/classes/material/)

Defined in: [three/src/materials/Material.js:875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L875)

Returns a new material with copied values from this instance.

#### Returns

[`Material`](/reference/three/classes/material/)

A clone of this instance.

#### Inherited from

[`Material`](/reference/three/classes/material/).[`clone`](/reference/three/classes/material/#clone)

***

### copy()

> **copy**(`source`): `LineBasicMaterial`

Defined in: [three/src/materials/LineBasicMaterial.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/LineBasicMaterial.js#L102)

Copies the values of the given material to this instance.

#### Parameters

##### source

`any`

The material to copy.

#### Returns

`LineBasicMaterial`

A reference to this instance.

#### Overrides

[`Material`](/reference/three/classes/material/).[`copy`](/reference/three/classes/material/#copy)

***

### customProgramCacheKey()

> **customProgramCacheKey**(): `string`

Defined in: [three/src/materials/Material.js:541](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L541)

In case [Material#onBeforeCompile](/reference/three/classes/material/#onbeforecompile) is used, this callback can be used to identify
values of settings used in `onBeforeCompile()`, so three.js can reuse a cached
shader or recompile the shader for this material as needed.

This method can only be used when rendering with [WebGLRenderer](/reference/three/classes/webglrenderer/).

#### Returns

`string`

The custom program cache key.

#### Inherited from

[`Material`](/reference/three/classes/material/).[`customProgramCacheKey`](/reference/three/classes/material/#customprogramcachekey)

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

[`Material`](/reference/three/classes/material/).[`dispatchEvent`](/reference/three/classes/material/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/materials/Material.js:974](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L974)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

#### Fires

Material#dispose

#### Inherited from

[`Material`](/reference/three/classes/material/).[`dispose`](/reference/three/classes/material/#dispose)

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

[`Material`](/reference/three/classes/material/).[`hasEventListener`](/reference/three/classes/material/#haseventlistener)

***

### onBeforeCompile()

> **onBeforeCompile**(): `void`

Defined in: [three/src/materials/Material.js:530](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L530)

An optional callback that is executed immediately before the shader
program is compiled. This function is called with the shader source code
as a parameter. Useful for the modification of built-in materials.

This method can only be used when rendering with [WebGLRenderer](/reference/three/classes/webglrenderer/). The
recommended approach when customizing materials is to use `WebGPURenderer` with the new
Node Material system and [TSL][https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).

#### Returns

`void`

#### Inherited from

[`Material`](/reference/three/classes/material/).[`onBeforeCompile`](/reference/three/classes/material/#onbeforecompile)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/materials/Material.js:516](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L516)

An optional callback that is executed immediately before the material is used to render a 3D object.

This method can only be used when rendering with [WebGLRenderer](/reference/three/classes/webglrenderer/).

#### Returns

`void`

#### Inherited from

[`Material`](/reference/three/classes/material/).[`onBeforeRender`](/reference/three/classes/material/#onbeforerender)

***

### onBuild()

> **onBuild**(): `void`

Defined in: [three/src/materials/Material.js:1000](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L1000)

#### Returns

`void`

#### Inherited from

[`Material`](/reference/three/classes/material/).[`onBuild`](/reference/three/classes/material/#onbuild)

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

[`Material`](/reference/three/classes/material/).[`removeEventListener`](/reference/three/classes/material/#removeeventlistener)

***

### setValues()

> **setValues**(`values`?): `void`

Defined in: [three/src/materials/Material.js:554](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L554)

This method can be used to set default values from parameter objects.
It is a generic implementation so it can be used with different types
of materials.

#### Parameters

##### values?

`any`

The material values to set.

#### Returns

`void`

#### Inherited from

[`Material`](/reference/three/classes/material/).[`setValues`](/reference/three/classes/material/#setvalues)

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/materials/Material.js:603](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L603)

Serializes the material into JSON.

#### Parameters

##### meta

`any`

An optional value holding meta information about the serialization.

#### Returns

`any`

A JSON object representing the serialized material.

#### See

[ObjectLoader#parse](/reference/three/classes/objectloader/#parse)

#### Inherited from

[`Material`](/reference/three/classes/material/).[`toJSON`](/reference/three/classes/material/#tojson)

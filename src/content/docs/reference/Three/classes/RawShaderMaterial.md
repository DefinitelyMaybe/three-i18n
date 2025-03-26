---
editUrl: false
next: false
prev: false
title: "RawShaderMaterial"
---

Defined in: [three/src/materials/RawShaderMaterial.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/RawShaderMaterial.js#L12)

This class works just like [ShaderMaterial](/reference/three/classes/shadermaterial/), except that definitions
of built-in uniforms and attributes are not automatically prepended to the
GLSL shader code.

`RawShaderMaterial` can only be used with [WebGLRenderer](/reference/three/classes/webglrenderer/).

## Extends

- [`ShaderMaterial`](/reference/three/classes/shadermaterial/)

## Constructors

### Constructor

> **new RawShaderMaterial**(`parameters`?): `RawShaderMaterial`

Defined in: [three/src/materials/RawShaderMaterial.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/RawShaderMaterial.js#L23)

Constructs a new raw shader material.

#### Parameters

##### parameters?

`any`

An object with one or more properties
defining the material's appearance. Any property of the material
(including any property from inherited materials) can be passed
in here. Color values can be passed any type of value accepted
by [Color#set](/reference/three/classes/color/#set).

#### Returns

`RawShaderMaterial`

#### Overrides

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`constructor`](/reference/three/classes/shadermaterial/#constructor)

## Properties

### \_alphaTest

> **\_alphaTest**: `number`

Defined in: [three/src/materials/Material.js:474](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L474)

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`_alphaTest`](/reference/three/classes/shadermaterial/#_alphatest)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`_listeners`](/reference/three/classes/shadermaterial/#_listeners)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`allowOverride`](/reference/three/classes/shadermaterial/#allowoverride)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`alphaHash`](/reference/three/classes/shadermaterial/#alphahash)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`alphaToCoverage`](/reference/three/classes/shadermaterial/#alphatocoverage)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blendAlpha`](/reference/three/classes/shadermaterial/#blendalpha)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blendColor`](/reference/three/classes/shadermaterial/#blendcolor)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blendDst`](/reference/three/classes/shadermaterial/#blenddst)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blendDstAlpha`](/reference/three/classes/shadermaterial/#blenddstalpha)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blendEquation`](/reference/three/classes/shadermaterial/#blendequation)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blendEquationAlpha`](/reference/three/classes/shadermaterial/#blendequationalpha)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blending`](/reference/three/classes/shadermaterial/#blending)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blendSrc`](/reference/three/classes/shadermaterial/#blendsrc)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`blendSrcAlpha`](/reference/three/classes/shadermaterial/#blendsrcalpha)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`clipIntersection`](/reference/three/classes/shadermaterial/#clipintersection)

***

### clipping

> **clipping**: `boolean`

Defined in: [three/src/materials/ShaderMaterial.js:185](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L185)

Defines whether this material supports clipping; `true` to let the renderer
pass the clippingPlanes uniform.

#### Default

```ts
false
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`clipping`](/reference/three/classes/shadermaterial/#clipping)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`clippingPlanes`](/reference/three/classes/shadermaterial/#clippingplanes)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`clipShadows`](/reference/three/classes/shadermaterial/#clipshadows)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`colorWrite`](/reference/three/classes/shadermaterial/#colorwrite)

***

### defaultAttributeValues

> **defaultAttributeValues**: `any`

Defined in: [three/src/materials/ShaderMaterial.js:219](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L219)

When the rendered geometry doesn't include these attributes but the
material does, these default values will be passed to the shaders. This
avoids errors when buffer data is missing.

- color: [ 1, 1, 1 ]
- uv: [ 0, 0 ]
- uv1: [ 0, 0 ]

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`defaultAttributeValues`](/reference/three/classes/shadermaterial/#defaultattributevalues)

***

### defines

> **defines**: `any`

Defined in: [three/src/materials/ShaderMaterial.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L83)

Defines custom constants using `#define` directives within the GLSL code
for both the vertex shader and the fragment shader; each key/value pair
yields another directive.
```js
defines: {
	FOO: 15,
	BAR: true
}
```
Yields the lines:
```
#define FOO 15
#define BAR true
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`defines`](/reference/three/classes/shadermaterial/#defines)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`depthFunc`](/reference/three/classes/shadermaterial/#depthfunc)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`depthTest`](/reference/three/classes/shadermaterial/#depthtest)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`depthWrite`](/reference/three/classes/shadermaterial/#depthwrite)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`dithering`](/reference/three/classes/shadermaterial/#dithering)

***

### extensions

> **extensions**: `object`

Defined in: [three/src/materials/ShaderMaterial.js:203](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L203)

This object allows to enable certain WebGL 2 extensions.

- clipCullDistance: set to `true` to use vertex shader clipping
- multiDraw: set to `true` to use vertex shader multi_draw / enable gl_DrawID

#### clipCullDistance

> **clipCullDistance**: `false`

#### multiDraw

> **multiDraw**: `false`

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`extensions`](/reference/three/classes/shadermaterial/#extensions)

***

### fog

> **fog**: `boolean`

Defined in: [three/src/materials/ShaderMaterial.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L167)

Define whether the material color is affected by global fog settings; `true`
to pass fog uniforms to the shader.

#### Default

```ts
false
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`fog`](/reference/three/classes/shadermaterial/#fog)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`forceSinglePass`](/reference/three/classes/shadermaterial/#forcesinglepass)

***

### fragmentShader

> **fragmentShader**: `string`

Defined in: [three/src/materials/ShaderMaterial.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L128)

Fragment shader GLSL code. This is the actual code for the shader.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`fragmentShader`](/reference/three/classes/shadermaterial/#fragmentshader)

***

### glslVersion

> **glslVersion**: `any`

Defined in: [three/src/materials/ShaderMaterial.js:249](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L249)

Defines the GLSL version of custom shader code.

#### Default

```ts
null
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`glslVersion`](/reference/three/classes/shadermaterial/#glslversion)

***

### index0AttributeName

> **index0AttributeName**: `string`

Defined in: [three/src/materials/ShaderMaterial.js:232](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L232)

If set, this calls [gl.bindAttribLocation][https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindAttribLocation](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindAttribLocation)
to bind a generic vertex index to an attribute variable.

#### Default

```ts
undefined
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`index0AttributeName`](/reference/three/classes/shadermaterial/#index0attributename)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`isMaterial`](/reference/three/classes/shadermaterial/#ismaterial)

***

### isRawShaderMaterial

> `readonly` **isRawShaderMaterial**: `boolean`

Defined in: [three/src/materials/RawShaderMaterial.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/RawShaderMaterial.js#L34)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isShaderMaterial

> `readonly` **isShaderMaterial**: `boolean`

Defined in: [three/src/materials/ShaderMaterial.js:61](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L61)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`isShaderMaterial`](/reference/three/classes/shadermaterial/#isshadermaterial)

***

### lights

> **lights**: `boolean`

Defined in: [three/src/materials/ShaderMaterial.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L176)

Defines whether this material uses lighting; `true` to pass uniform data
related to lighting to this shader.

#### Default

```ts
false
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`lights`](/reference/three/classes/shadermaterial/#lights)

***

### linewidth

> **linewidth**: `number`

Defined in: [three/src/materials/ShaderMaterial.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L139)

Controls line thickness or lines.

WebGL and WebGPU ignore this setting and always render line primitives with a
width of one pixel.

#### Default

```ts
1
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`linewidth`](/reference/three/classes/shadermaterial/#linewidth)

***

### name

> **name**: `string`

Defined in: [three/src/materials/Material.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L56)

The name of the material.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`name`](/reference/three/classes/shadermaterial/#name)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`opacity`](/reference/three/classes/shadermaterial/#opacity)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`polygonOffset`](/reference/three/classes/shadermaterial/#polygonoffset)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`polygonOffsetFactor`](/reference/three/classes/shadermaterial/#polygonoffsetfactor)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`polygonOffsetUnits`](/reference/three/classes/shadermaterial/#polygonoffsetunits)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`precision`](/reference/three/classes/shadermaterial/#precision)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`premultipliedAlpha`](/reference/three/classes/shadermaterial/#premultipliedalpha)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`shadowSide`](/reference/three/classes/shadermaterial/#shadowside)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`side`](/reference/three/classes/shadermaterial/#side)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`stencilFail`](/reference/three/classes/shadermaterial/#stencilfail)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`stencilFunc`](/reference/three/classes/shadermaterial/#stencilfunc)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`stencilFuncMask`](/reference/three/classes/shadermaterial/#stencilfuncmask)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`stencilRef`](/reference/three/classes/shadermaterial/#stencilref)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`stencilWrite`](/reference/three/classes/shadermaterial/#stencilwrite)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`stencilWriteMask`](/reference/three/classes/shadermaterial/#stencilwritemask)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`stencilZFail`](/reference/three/classes/shadermaterial/#stencilzfail)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`stencilZPass`](/reference/three/classes/shadermaterial/#stencilzpass)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`toneMapped`](/reference/three/classes/shadermaterial/#tonemapped)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`transparent`](/reference/three/classes/shadermaterial/#transparent)

***

### type

> **type**: `string`

Defined in: [three/src/materials/RawShaderMaterial.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/RawShaderMaterial.js#L36)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`type`](/reference/three/classes/shadermaterial/#type)

***

### uniforms

> **uniforms**: `any`

Defined in: [three/src/materials/ShaderMaterial.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L107)

An object of the form:
```js
{
	"uniform1": { value: 1.0 },
	"uniform2": { value: 2 }
}
```
specifying the uniforms to be passed to the shader code; keys are uniform
names, values are definitions of the form
```
{
	value: 1.0
}
```
where `value` is the value of the uniform. Names must match the name of
the uniform, as defined in the GLSL code. Note that uniforms are refreshed
on every frame, so updating the value of the uniform will immediately
update the value available to the GLSL code.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`uniforms`](/reference/three/classes/shadermaterial/#uniforms)

***

### uniformsGroups

> **uniformsGroups**: `UniformsGroup`[]

Defined in: [three/src/materials/ShaderMaterial.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L114)

An array holding uniforms groups for configuring UBOs.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`uniformsGroups`](/reference/three/classes/shadermaterial/#uniformsgroups)

***

### uniformsNeedUpdate

> **uniformsNeedUpdate**: `boolean`

Defined in: [three/src/materials/ShaderMaterial.js:241](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L241)

Can be used to force a uniform update while changing uniforms in
[Object3D#onBeforeRender](/reference/three/classes/object3d/#onbeforerender).

#### Default

```ts
false
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`uniformsNeedUpdate`](/reference/three/classes/shadermaterial/#uniformsneedupdate)

***

### userData

> **userData**: `any`

Defined in: [three/src/materials/Material.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L463)

An object that can be used to store custom data about the Material. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`userData`](/reference/three/classes/shadermaterial/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/materials/Material.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L49)

The UUID of the material.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`uuid`](/reference/three/classes/shadermaterial/#uuid)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`version`](/reference/three/classes/shadermaterial/#version)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`vertexColors`](/reference/three/classes/shadermaterial/#vertexcolors)

***

### vertexShader

> **vertexShader**: `string`

Defined in: [three/src/materials/ShaderMaterial.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L121)

Vertex shader GLSL code. This is the actual code for the shader.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`vertexShader`](/reference/three/classes/shadermaterial/#vertexshader)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`visible`](/reference/three/classes/shadermaterial/#visible)

***

### wireframe

> **wireframe**: `boolean`

Defined in: [three/src/materials/ShaderMaterial.js:147](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L147)

Renders the geometry as a wireframe.

#### Default

```ts
false
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`wireframe`](/reference/three/classes/shadermaterial/#wireframe)

***

### wireframeLinewidth

> **wireframeLinewidth**: `number`

Defined in: [three/src/materials/ShaderMaterial.js:158](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L158)

Controls the thickness of the wireframe.

WebGL and WebGPU ignore this property and always render
1 pixel wide lines.

#### Default

```ts
1
```

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`wireframeLinewidth`](/reference/three/classes/shadermaterial/#wireframelinewidth)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`alphaTest`](/reference/three/classes/shadermaterial/#alphatest)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`needsUpdate`](/reference/three/classes/shadermaterial/#needsupdate)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`addEventListener`](/reference/three/classes/shadermaterial/#addeventlistener)

***

### clone()

> **clone**(): [`Material`](/reference/three/classes/material/)

Defined in: [three/src/materials/Material.js:875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L875)

Returns a new material with copied values from this instance.

#### Returns

[`Material`](/reference/three/classes/material/)

A clone of this instance.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`clone`](/reference/three/classes/shadermaterial/#clone)

***

### copy()

> **copy**(`source`): `RawShaderMaterial`

Defined in: [three/src/materials/ShaderMaterial.js:259](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L259)

Copies the values of the given material to this instance.

#### Parameters

##### source

`any`

The material to copy.

#### Returns

`RawShaderMaterial`

A reference to this instance.

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`copy`](/reference/three/classes/shadermaterial/#copy)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`customProgramCacheKey`](/reference/three/classes/shadermaterial/#customprogramcachekey)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`dispatchEvent`](/reference/three/classes/shadermaterial/#dispatchevent)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`dispose`](/reference/three/classes/shadermaterial/#dispose)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`hasEventListener`](/reference/three/classes/shadermaterial/#haseventlistener)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`onBeforeCompile`](/reference/three/classes/shadermaterial/#onbeforecompile)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/materials/Material.js:516](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L516)

An optional callback that is executed immediately before the material is used to render a 3D object.

This method can only be used when rendering with [WebGLRenderer](/reference/three/classes/webglrenderer/).

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`onBeforeRender`](/reference/three/classes/shadermaterial/#onbeforerender)

***

### onBuild()

> **onBuild**(): `void`

Defined in: [three/src/materials/Material.js:1000](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L1000)

#### Returns

`void`

#### Inherited from

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`onBuild`](/reference/three/classes/shadermaterial/#onbuild)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`removeEventListener`](/reference/three/classes/shadermaterial/#removeeventlistener)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`setValues`](/reference/three/classes/shadermaterial/#setvalues)

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/materials/ShaderMaterial.js:286](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/ShaderMaterial.js#L286)

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

[`ShaderMaterial`](/reference/three/classes/shadermaterial/).[`toJSON`](/reference/three/classes/shadermaterial/#tojson)

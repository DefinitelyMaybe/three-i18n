---
editUrl: false
next: false
prev: false
title: "MeshPhysicalMaterial"
---

Defined in: [three/src/materials/MeshPhysicalMaterial.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L31)

An extension of the [MeshStandardMaterial](/reference/three/classes/meshstandardmaterial/), providing more advanced
physically-based rendering properties:

- Anisotropy: Ability to represent the anisotropic property of materials
as observable with brushed metals.
- Clearcoat: Some materials — like car paints, carbon fiber, and wet surfaces — require
a clear, reflective layer on top of another layer that may be irregular or rough.
Clearcoat approximates this effect, without the need for a separate transparent surface.
- Iridescence: Allows to render the effect where hue varies  depending on the viewing
angle and illumination angle. This can be seen on soap bubbles, oil films, or on the
wings of many insects.
- Physically-based transparency: One limitation of [Material#opacity](/reference/three/classes/material/#opacity) is that highly
transparent materials are less reflective. Physically-based transmission provides a more
realistic option for thin, transparent surfaces like glass.
- Advanced reflectivity: More flexible reflectivity for non-metallic materials.
- Sheen: Can be used for representing cloth and fabric materials.

As a result of these complex shading features, `MeshPhysicalMaterial` has a
higher performance cost, per pixel, than other three.js materials. Most
effects are disabled by default, and add cost as they are enabled. For
best results, always specify an environment map when using this material.

## Extends

- [`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/)

## Constructors

### Constructor

> **new MeshPhysicalMaterial**(`parameters`?): `MeshPhysicalMaterial`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L42)

Constructs a new mesh physical material.

#### Parameters

##### parameters?

`any`

An object with one or more properties
defining the material's appearance. Any property of the material
(including any property from inherited materials) can be passed
in here. Color values can be passed any type of value accepted
by [Color#set](/reference/three/classes/color/#set).

#### Returns

`MeshPhysicalMaterial`

#### Overrides

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`constructor`](/reference/three/classes/meshstandardmaterial/#constructor)

## Properties

### \_alphaTest

> **\_alphaTest**: `number`

Defined in: [three/src/materials/Material.js:474](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L474)

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`_alphaTest`](/reference/three/classes/meshstandardmaterial/#_alphatest)

***

### \_anisotropy

> **\_anisotropy**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:314](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L314)

***

### \_clearcoat

> **\_clearcoat**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:315](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L315)

***

### \_dispersion

> **\_dispersion**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:316](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L316)

***

### \_iridescence

> **\_iridescence**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:317](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L317)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`_listeners`](/reference/three/classes/meshstandardmaterial/#_listeners)

***

### \_sheen

> **\_sheen**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:318](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L318)

***

### \_transmission

> **\_transmission**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:319](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L319)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`allowOverride`](/reference/three/classes/meshstandardmaterial/#allowoverride)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`alphaHash`](/reference/three/classes/meshstandardmaterial/#alphahash)

***

### alphaMap

> **alphaMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:281](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L281)

The alpha map is a grayscale texture that controls the opacity across the
surface (black: fully transparent; white: fully opaque).

Only the color of the texture is used, ignoring the alpha channel if one
exists. For RGB and RGBA textures, the renderer will use the green channel
when sampling this texture due to the extra bit of precision provided for
green in DXT-compressed and uncompressed RGB 565 formats. Luminance-only and
luminance/alpha textures will also still work as expected.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`alphaMap`](/reference/three/classes/meshstandardmaterial/#alphamap)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`alphaToCoverage`](/reference/three/classes/meshstandardmaterial/#alphatocoverage)

***

### anisotropyMap

> **anisotropyMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L82)

Red and green channels represent the anisotropy direction in `[-1, 1]` tangent,
bitangent space, to be rotated by `anisotropyRotation`. The blue channel
contains strength as `[0, 1]` to be multiplied by `anisotropy`.

#### Default

```ts
null
```

***

### anisotropyRotation

> **anisotropyRotation**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L72)

The rotation of the anisotropy in tangent, bitangent space, measured in radians
counter-clockwise from the tangent. When `anisotropyMap` is present, this
property provides additional rotation to the vectors in the texture.

#### Default

```ts
1
```

***

### aoMap

> **aoMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L130)

The red channel of this texture is used as the ambient occlusion map.
Requires a second set of UVs.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`aoMap`](/reference/three/classes/meshstandardmaterial/#aomap)

***

### aoMapIntensity

> **aoMapIntensity**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L140)

Intensity of the ambient occlusion effect. Range is `[0,1]`, where `0`
disables ambient occlusion. Where intensity is `1` and the AO map's
red channel is also `1`, ambient light is fully occluded on a surface.

#### Default

```ts
1
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`aoMapIntensity`](/reference/three/classes/meshstandardmaterial/#aomapintensity)

***

### attenuationColor

> **attenuationColor**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/materials/MeshPhysicalMaterial.js:277](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L277)

The color that white light turns into due to absorption when reaching the
attenuation distance.

#### Default

```ts
(1,1,1)
```

***

### attenuationDistance

> **attenuationDistance**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:268](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L268)

Density of the medium given as the average distance that light travels in
the medium before interacting with a particle. The value is given in world
space units, and must be greater than zero.

#### Default

```ts
Infinity
```

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blendAlpha`](/reference/three/classes/meshstandardmaterial/#blendalpha)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blendColor`](/reference/three/classes/meshstandardmaterial/#blendcolor)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blendDst`](/reference/three/classes/meshstandardmaterial/#blenddst)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blendDstAlpha`](/reference/three/classes/meshstandardmaterial/#blenddstalpha)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blendEquation`](/reference/three/classes/meshstandardmaterial/#blendequation)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blendEquationAlpha`](/reference/three/classes/meshstandardmaterial/#blendequationalpha)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blending`](/reference/three/classes/meshstandardmaterial/#blending)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blendSrc`](/reference/three/classes/meshstandardmaterial/#blendsrc)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`blendSrcAlpha`](/reference/three/classes/meshstandardmaterial/#blendsrcalpha)

***

### bumpMap

> **bumpMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L178)

The texture to create a bump map. The black and white values map to the
perceived depth in relation to the lights. Bump doesn't actually affect
the geometry of the object, only the lighting. If a normal map is defined
this will be ignored.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`bumpMap`](/reference/three/classes/meshstandardmaterial/#bumpmap)

***

### bumpScale

> **bumpScale**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L186)

How much the bump map affects the material. Typical range is `[0,1]`.

#### Default

```ts
1
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`bumpScale`](/reference/three/classes/meshstandardmaterial/#bumpscale)

***

### clearcoatMap

> **clearcoatMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L91)

The red channel of this texture is multiplied against `clearcoat`,
for per-pixel control over a coating's intensity.

#### Default

```ts
null
```

***

### clearcoatNormalMap

> **clearcoatNormalMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L125)

Can be used to enable independent normals for the clear coat layer.

#### Default

```ts
null
```

***

### clearcoatNormalScale

> **clearcoatNormalScale**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/materials/MeshPhysicalMaterial.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L117)

How much `clearcoatNormalMap` affects the clear coat layer, from
`(0,0)` to `(1,1)`.

#### Default

```ts
(1,1)
```

***

### clearcoatRoughness

> **clearcoatRoughness**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:99](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L99)

Roughness of the clear coat layer, from `0.0` to `1.0`.

#### Default

```ts
0
```

***

### clearcoatRoughnessMap

> **clearcoatRoughnessMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L108)

The green channel of this texture is multiplied against
`clearcoatRoughness`, for per-pixel control over a coating's roughness.

#### Default

```ts
null
```

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`clipIntersection`](/reference/three/classes/meshstandardmaterial/#clipintersection)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`clippingPlanes`](/reference/three/classes/meshstandardmaterial/#clippingplanes)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`clipShadows`](/reference/three/classes/meshstandardmaterial/#clipshadows)

***

### color

> **color**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/materials/MeshStandardMaterial.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L74)

Color of the material.

#### Default

```ts
(1,1,1)
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`color`](/reference/three/classes/meshstandardmaterial/#color)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`colorWrite`](/reference/three/classes/meshstandardmaterial/#colorwrite)

***

### defines

> **defines**: `object`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L55)

#### PHYSICAL

> **PHYSICAL**: `string` = `''`

#### STANDARD

> **STANDARD**: `string` = `''`

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`defines`](/reference/three/classes/meshstandardmaterial/#defines)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`depthFunc`](/reference/three/classes/meshstandardmaterial/#depthfunc)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`depthTest`](/reference/three/classes/meshstandardmaterial/#depthtest)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`depthWrite`](/reference/three/classes/meshstandardmaterial/#depthwrite)

***

### displacementBias

> **displacementBias**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:248](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L248)

The offset of the displacement map's values on the mesh's vertices.
The bias is added to the scaled sample of the displacement map.
Without a displacement map set, this value is not applied.

#### Default

```ts
0
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`displacementBias`](/reference/three/classes/meshstandardmaterial/#displacementbias)

***

### displacementMap

> **displacementMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:228](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L228)

The displacement map affects the position of the mesh's vertices. Unlike
other maps which only affect the light and shade of the material the
displaced vertices can cast shadows, block other objects, and otherwise
act as real geometry. The displacement texture is an image where the value
of each pixel (white being the highest) is mapped against, and
repositions, the vertices of the mesh.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`displacementMap`](/reference/three/classes/meshstandardmaterial/#displacementmap)

***

### displacementScale

> **displacementScale**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:238](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L238)

How much the displacement map affects the mesh (where black is no
displacement, and white is maximum displacement). Without a displacement
map set, this value is not applied.

#### Default

```ts
0
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`displacementScale`](/reference/three/classes/meshstandardmaterial/#displacementscale)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`dithering`](/reference/three/classes/meshstandardmaterial/#dithering)

***

### emissive

> **emissive**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/materials/MeshStandardMaterial.js:149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L149)

Emissive (light) color of the material, essentially a solid color
unaffected by other lighting.

#### Default

```ts
(0,0,0)
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`emissive`](/reference/three/classes/meshstandardmaterial/#emissive)

***

### emissiveIntensity

> **emissiveIntensity**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:157](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L157)

Intensity of the emissive light. Modulates the emissive color.

#### Default

```ts
1
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`emissiveIntensity`](/reference/three/classes/meshstandardmaterial/#emissiveintensity)

***

### emissiveMap

> **emissiveMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:167](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L167)

Set emissive (glow) map. The emissive map color is modulated by the
emissive color and the emissive intensity. If you have an emissive map,
be sure to set the emissive color to something other than black.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`emissiveMap`](/reference/three/classes/meshstandardmaterial/#emissivemap)

***

### envMap

> **envMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:290](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L290)

The environment map. To ensure a physically correct rendering, environment maps
are internally pre-processed with [PMREMGenerator](/reference/three/classes/pmremgenerator/).

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`envMap`](/reference/three/classes/meshstandardmaterial/#envmap)

***

### envMapIntensity

> **envMapIntensity**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:306](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L306)

Scales the effect of the environment map by multiplying its color.

#### Default

```ts
1
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`envMapIntensity`](/reference/three/classes/meshstandardmaterial/#envmapintensity)

***

### envMapRotation

> **envMapRotation**: [`Euler`](/reference/three/classes/euler/)

Defined in: [three/src/materials/MeshStandardMaterial.js:298](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L298)

The rotation of the environment map in radians.

#### Default

```ts
(0,0,0)
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`envMapRotation`](/reference/three/classes/meshstandardmaterial/#envmaprotation)

***

### flatShading

> **flatShading**: `boolean`

Defined in: [three/src/materials/MeshStandardMaterial.js:352](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L352)

Whether the material is rendered with flat shading or not.

#### Default

```ts
false
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`flatShading`](/reference/three/classes/meshstandardmaterial/#flatshading)

***

### fog

> **fog**: `boolean`

Defined in: [three/src/materials/MeshStandardMaterial.js:360](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L360)

Whether the material is affected by fog or not.

#### Default

```ts
true
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`fog`](/reference/three/classes/meshstandardmaterial/#fog)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`forceSinglePass`](/reference/three/classes/meshstandardmaterial/#forcesinglepass)

***

### ior

> **ior**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L133)

Index-of-refraction for non-metallic materials, from `1.0` to `2.333`.

#### Default

```ts
1.5
```

***

### iridescenceIOR

> **iridescenceIOR**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L175)

Strength of the iridescence RGB color shift effect, represented by an index-of-refraction.
Between `1.0` to `2.333`.

#### Default

```ts
1.3
```

***

### iridescenceMap

> **iridescenceMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:166](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L166)

The red channel of this texture is multiplied against `iridescence`, for per-pixel
control over iridescence.

#### Default

```ts
null
```

***

### iridescenceThicknessMap

> **iridescenceThicknessMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L196)

A texture that defines the thickness of the iridescence layer, stored in the green channel.
Minimum and maximum values of thickness are defined by `iridescenceThicknessRange` array:
- `0.0` in the green channel will result in thickness equal to first element of the array.
- `1.0` in the green channel will result in thickness equal to second element of the array.
- Values in-between will linearly interpolate between the elements of the array.

#### Default

```ts
null
```

***

### iridescenceThicknessRange

> **iridescenceThicknessRange**: `number`[]

Defined in: [three/src/materials/MeshPhysicalMaterial.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L184)

Array of exactly 2 elements, specifying minimum and maximum thickness of the iridescence layer.
Thickness of iridescence layer has an equivalent effect of the one `thickness` has on `ior`.

#### Default

```ts
[100,400]
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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`isMaterial`](/reference/three/classes/meshstandardmaterial/#ismaterial)

***

### isMeshPhysicalMaterial

> `readonly` **isMeshPhysicalMaterial**: `boolean`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L53)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isMeshStandardMaterial

> `readonly` **isMeshStandardMaterial**: `boolean`

Defined in: [three/src/materials/MeshStandardMaterial.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L62)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`isMeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/#ismeshstandardmaterial)

***

### lightMap

> **lightMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L113)

The light map. Requires a second set of UVs.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`lightMap`](/reference/three/classes/meshstandardmaterial/#lightmap)

***

### lightMapIntensity

> **lightMapIntensity**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L121)

Intensity of the baked light.

#### Default

```ts
1
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`lightMapIntensity`](/reference/three/classes/meshstandardmaterial/#lightmapintensity)

***

### map

> **map**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L105)

The color map. May optionally include an alpha channel, typically combined
with [Material#transparent](/reference/three/classes/material/#transparent) or [Material#alphaTest](/reference/three/classes/material/#alphatest). The texture map
color is modulated by the diffuse `color`.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`map`](/reference/three/classes/meshstandardmaterial/#map)

***

### metalness

> **metalness**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L95)

How much the material is like a metal. Non-metallic materials such as wood
or stone use `0.0`, metallic use `1.0`, with nothing (usually) in between.
A value between `0.0` and `1.0` could be used for a rusty metal look.
If `metalnessMap` is also provided, both values are multiplied.

#### Default

```ts
0
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`metalness`](/reference/three/classes/meshstandardmaterial/#metalness)

***

### metalnessMap

> **metalnessMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:266](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L266)

The blue channel of this texture is used to alter the metalness of the
material.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`metalnessMap`](/reference/three/classes/meshstandardmaterial/#metalnessmap)

***

### name

> **name**: `string`

Defined in: [three/src/materials/Material.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L56)

The name of the material.

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`name`](/reference/three/classes/meshstandardmaterial/#name)

***

### normalMap

> **normalMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L199)

The texture to create a normal map. The RGB values affect the surface
normal for each pixel fragment and change the way the color is lit. Normal
maps do not change the actual shape of the surface, only the lighting. In
case the material has a normal map authored using the left handed
convention, the `y` component of `normalScale` should be negated to compensate
for the different handedness.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`normalMap`](/reference/three/classes/meshstandardmaterial/#normalmap)

***

### normalMapType

> **normalMapType**: `any`

Defined in: [three/src/materials/MeshStandardMaterial.js:207](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L207)

The type of normal map.

#### Default

```ts
TangentSpaceNormalMap
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`normalMapType`](/reference/three/classes/meshstandardmaterial/#normalmaptype)

***

### normalScale

> **normalScale**: [`Vector2`](/reference/three/classes/vector2/)

Defined in: [three/src/materials/MeshStandardMaterial.js:215](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L215)

How much the normal map affects the material. Typical value range is `[0,1]`.

#### Default

```ts
(1,1)
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`normalScale`](/reference/three/classes/meshstandardmaterial/#normalscale)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`opacity`](/reference/three/classes/meshstandardmaterial/#opacity)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`polygonOffset`](/reference/three/classes/meshstandardmaterial/#polygonoffset)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`polygonOffsetFactor`](/reference/three/classes/meshstandardmaterial/#polygonoffsetfactor)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`polygonOffsetUnits`](/reference/three/classes/meshstandardmaterial/#polygonoffsetunits)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`precision`](/reference/three/classes/meshstandardmaterial/#precision)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`premultipliedAlpha`](/reference/three/classes/meshstandardmaterial/#premultipliedalpha)

***

### roughness

> **roughness**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L84)

How rough the material appears. `0.0` means a smooth mirror reflection, `1.0`
means fully diffuse. If `roughnessMap` is also provided,
both values are multiplied.

#### Default

```ts
1
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`roughness`](/reference/three/classes/meshstandardmaterial/#roughness)

***

### roughnessMap

> **roughnessMap**: `Texture`

Defined in: [three/src/materials/MeshStandardMaterial.js:257](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L257)

The green channel of this texture is used to alter the roughness of the
material.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`roughnessMap`](/reference/three/classes/meshstandardmaterial/#roughnessmap)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`shadowSide`](/reference/three/classes/meshstandardmaterial/#shadowside)

***

### sheenColor

> **sheenColor**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/materials/MeshPhysicalMaterial.js:204](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L204)

The sheen tint.

#### Default

```ts
(0,0,0)
```

***

### sheenColorMap

> **sheenColorMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L213)

The RGB channels of this texture are multiplied against  `sheenColor`, for per-pixel control
over sheen tint.

#### Default

```ts
null
```

***

### sheenRoughness

> **sheenRoughness**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:221](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L221)

Roughness of the sheen layer, from `0.0` to `1.0`.

#### Default

```ts
1
```

***

### sheenRoughnessMap

> **sheenRoughnessMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:230](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L230)

The alpha channel of this texture is multiplied against `sheenRoughness`, for per-pixel control
over sheen roughness.

#### Default

```ts
null
```

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`side`](/reference/three/classes/meshstandardmaterial/#side)

***

### specularColor

> **specularColor**: [`Color`](/reference/three/classes/color/)

Defined in: [three/src/materials/MeshPhysicalMaterial.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L303)

Tints the specular reflection at normal incidence for non-metals only.

#### Default

```ts
(1,1,1)
```

***

### specularColorMap

> **specularColorMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:312](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L312)

The RGB channels of this texture are multiplied against `specularColor`,
for per-pixel control over specular color.

#### Default

```ts
null
```

***

### specularIntensity

> **specularIntensity**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:286](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L286)

A float that scales the amount of specular reflection for non-metals only.
When set to zero, the model is effectively Lambertian. From `0.0` to `1.0`.

#### Default

```ts
1
```

***

### specularIntensityMap

> **specularIntensityMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:295](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L295)

The alpha channel of this texture is multiplied against `specularIntensity`,
for per-pixel control over specular intensity.

#### Default

```ts
null
```

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`stencilFail`](/reference/three/classes/meshstandardmaterial/#stencilfail)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`stencilFunc`](/reference/three/classes/meshstandardmaterial/#stencilfunc)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`stencilFuncMask`](/reference/three/classes/meshstandardmaterial/#stencilfuncmask)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`stencilRef`](/reference/three/classes/meshstandardmaterial/#stencilref)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`stencilWrite`](/reference/three/classes/meshstandardmaterial/#stencilwrite)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`stencilWriteMask`](/reference/three/classes/meshstandardmaterial/#stencilwritemask)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`stencilZFail`](/reference/three/classes/meshstandardmaterial/#stencilzfail)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`stencilZPass`](/reference/three/classes/meshstandardmaterial/#stencilzpass)

***

### thickness

> **thickness**: `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:249](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L249)

The thickness of the volume beneath the surface. The value is given in the
coordinate space of the mesh. If the value is `0` the material is
thin-walled. Otherwise the material is a volume boundary.

#### Default

```ts
0
```

***

### thicknessMap

> **thicknessMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:258](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L258)

A texture that defines the thickness, stored in the green channel. This will
be multiplied by `thickness`.

#### Default

```ts
null
```

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`toneMapped`](/reference/three/classes/meshstandardmaterial/#tonemapped)

***

### transmissionMap

> **transmissionMap**: `Texture`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:239](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L239)

The red channel of this texture is multiplied against `transmission`, for per-pixel control over
optical transparency.

#### Default

```ts
null
```

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`transparent`](/reference/three/classes/meshstandardmaterial/#transparent)

***

### type

> **type**: `string`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L62)

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`type`](/reference/three/classes/meshstandardmaterial/#type)

***

### userData

> **userData**: `any`

Defined in: [three/src/materials/Material.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L463)

An object that can be used to store custom data about the Material. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`userData`](/reference/three/classes/meshstandardmaterial/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/materials/Material.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L49)

The UUID of the material.

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`uuid`](/reference/three/classes/meshstandardmaterial/#uuid)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`version`](/reference/three/classes/meshstandardmaterial/#version)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`vertexColors`](/reference/three/classes/meshstandardmaterial/#vertexcolors)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`visible`](/reference/three/classes/meshstandardmaterial/#visible)

***

### wireframe

> **wireframe**: `boolean`

Defined in: [three/src/materials/MeshStandardMaterial.js:314](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L314)

Renders the geometry as a wireframe.

#### Default

```ts
false
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`wireframe`](/reference/three/classes/meshstandardmaterial/#wireframe)

***

### wireframeLinecap

> **wireframeLinecap**: `"round"` \| `"bevel"` \| `"miter"`

Defined in: [three/src/materials/MeshStandardMaterial.js:334](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L334)

Defines appearance of wireframe ends.

Can only be used with SVGRenderer.

#### Default

```ts
'round'
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`wireframeLinecap`](/reference/three/classes/meshstandardmaterial/#wireframelinecap)

***

### wireframeLinejoin

> **wireframeLinejoin**: `"round"` \| `"bevel"` \| `"miter"`

Defined in: [three/src/materials/MeshStandardMaterial.js:344](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L344)

Defines appearance of wireframe joints.

Can only be used with SVGRenderer.

#### Default

```ts
'round'
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`wireframeLinejoin`](/reference/three/classes/meshstandardmaterial/#wireframelinejoin)

***

### wireframeLinewidth

> **wireframeLinewidth**: `number`

Defined in: [three/src/materials/MeshStandardMaterial.js:324](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshStandardMaterial.js#L324)

Controls the thickness of the wireframe.

Can only be used with SVGRenderer.

#### Default

```ts
1
```

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`wireframeLinewidth`](/reference/three/classes/meshstandardmaterial/#wireframelinewidth)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`alphaTest`](/reference/three/classes/meshstandardmaterial/#alphatest)

***

### anisotropy

#### Get Signature

> **get** **anisotropy**(): `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:331](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L331)

The anisotropy strength.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **anisotropy**(`value`): `void`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:337](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L337)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### clearcoat

#### Get Signature

> **get** **clearcoat**(): `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:357](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L357)

Represents the intensity of the clear coat layer, from `0.0` to `1.0`. Use
clear coat related properties to enable multilayer materials that have a
thin translucent layer over the base layer.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **clearcoat**(`value`): `void`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:363](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L363)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dispersion

#### Get Signature

> **get** **dispersion**(): `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L407)

Defines the strength of the angular separation of colors (chromatic aberration) transmitting
through a relatively clear volume. Any value zero or larger is valid, the typical range of
realistic values is `[0, 1]`. This property can be only be used with transmissive objects.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **dispersion**(`value`): `void`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:413](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L413)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### iridescence

#### Get Signature

> **get** **iridescence**(): `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:381](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L381)

The intensity of the iridescence layer, simulating RGB color shift based on the angle between
the surface and the viewer, from `0.0` to `1.0`.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **iridescence**(`value`): `void`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:387](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L387)

##### Parameters

###### value

`number`

##### Returns

`void`

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`needsUpdate`](/reference/three/classes/meshstandardmaterial/#needsupdate)

***

### sheen

#### Get Signature

> **get** **sheen**(): `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:431](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L431)

The intensity of the sheen layer, from `0.0` to `1.0`.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **sheen**(`value`): `void`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L437)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### transmission

#### Get Signature

> **get** **transmission**(): `number`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:461](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L461)

Degree of transmission (or optical transparency), from `0.0` to `1.0`.

Thin, transparent or semitransparent, plastic or glass materials remain
largely reflective even if they are fully transmissive. The transmission
property can be used to model these materials.

When transmission is non-zero, `opacity` should be  set to `1`.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **transmission**(`value`): `void`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:467](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L467)

##### Parameters

###### value

`number`

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`addEventListener`](/reference/three/classes/meshstandardmaterial/#addeventlistener)

***

### clone()

> **clone**(): [`Material`](/reference/three/classes/material/)

Defined in: [three/src/materials/Material.js:875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L875)

Returns a new material with copied values from this instance.

#### Returns

[`Material`](/reference/three/classes/material/)

A clone of this instance.

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`clone`](/reference/three/classes/meshstandardmaterial/#clone)

***

### copy()

> **copy**(`source`): `MeshPhysicalMaterial`

Defined in: [three/src/materials/MeshPhysicalMaterial.js:479](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/MeshPhysicalMaterial.js#L479)

Copies the values of the given material to this instance.

#### Parameters

##### source

`any`

The material to copy.

#### Returns

`MeshPhysicalMaterial`

A reference to this instance.

#### Overrides

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`copy`](/reference/three/classes/meshstandardmaterial/#copy)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`customProgramCacheKey`](/reference/three/classes/meshstandardmaterial/#customprogramcachekey)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`dispatchEvent`](/reference/three/classes/meshstandardmaterial/#dispatchevent)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`dispose`](/reference/three/classes/meshstandardmaterial/#dispose)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`hasEventListener`](/reference/three/classes/meshstandardmaterial/#haseventlistener)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`onBeforeCompile`](/reference/three/classes/meshstandardmaterial/#onbeforecompile)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/materials/Material.js:516](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L516)

An optional callback that is executed immediately before the material is used to render a 3D object.

This method can only be used when rendering with [WebGLRenderer](/reference/three/classes/webglrenderer/).

#### Returns

`void`

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`onBeforeRender`](/reference/three/classes/meshstandardmaterial/#onbeforerender)

***

### onBuild()

> **onBuild**(): `void`

Defined in: [three/src/materials/Material.js:1000](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L1000)

#### Returns

`void`

#### Inherited from

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`onBuild`](/reference/three/classes/meshstandardmaterial/#onbuild)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`removeEventListener`](/reference/three/classes/meshstandardmaterial/#removeeventlistener)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`setValues`](/reference/three/classes/meshstandardmaterial/#setvalues)

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

[`MeshStandardMaterial`](/reference/three/classes/meshstandardmaterial/).[`toJSON`](/reference/three/classes/meshstandardmaterial/#tojson)

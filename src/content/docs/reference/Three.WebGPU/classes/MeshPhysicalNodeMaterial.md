---
editUrl: false
next: false
prev: false
title: "MeshPhysicalNodeMaterial"
---

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L19)

Node material version of [MeshPhysicalMaterial](/reference/three/classes/meshphysicalmaterial/).

## Extends

- [`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/)

## Extended by

- [`MeshSSSNodeMaterial`](/reference/threewebgpu/classes/meshsssnodematerial/)

## Constructors

### Constructor

> **new MeshPhysicalNodeMaterial**(`parameters`?): `MeshPhysicalNodeMaterial`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L32)

Constructs a new mesh physical node material.

#### Parameters

##### parameters?

`any`

The configuration parameter.

#### Returns

`MeshPhysicalNodeMaterial`

#### Overrides

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`constructor`](/reference/threewebgpu/classes/meshstandardnodematerial/#constructor)

## Properties

### \_alphaTest

> **\_alphaTest**: `number`

Defined in: [three/src/materials/Material.js:474](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L474)

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`_alphaTest`](/reference/threewebgpu/classes/meshstandardnodematerial/#_alphatest)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`_listeners`](/reference/threewebgpu/classes/meshstandardnodematerial/#_listeners)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`allowOverride`](/reference/threewebgpu/classes/meshstandardnodematerial/#allowoverride)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`alphaHash`](/reference/threewebgpu/classes/meshstandardnodematerial/#alphahash)

***

### alphaTestNode

> **alphaTestNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:230](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L230)

The alpha test of node materials is by default inferred from the `alphaTest`
property. This node property allows to overwrite the default and define the
alpha test with a node instead.

If you don't want to overwrite the alpha test but modify the existing
value instead, use [materialAlphaTest](/reference/threewebgpu/namespaces/tsl/variables/materialalphatest/).

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`alphaTestNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#alphatestnode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`alphaToCoverage`](/reference/threewebgpu/classes/meshstandardnodematerial/#alphatocoverage)

***

### anisotropyNode

> **anisotropyNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:264](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L264)

The anisotropy of physical materials is by default inferred from the
`anisotropy` property. This node property allows to overwrite the default
and define the anisotropy with a node instead.

If you don't want to overwrite the anisotropy but modify the existing
value instead, use [materialAnisotropy](/reference/threewebgpu/namespaces/tsl/variables/materialanisotropy/).

#### Default

```ts
null
```

***

### aoNode

> **aoNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:141](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L141)

The lighting of node materials might be influenced by ambient occlusion.
The default AO is inferred from an ambient occlusion map assigned to `aoMap`
and the respective `aoMapIntensity`. This node property allows to overwrite
the default and define the ambient occlusion with a custom node instead.

If you don't want to overwrite the diffuse color but modify the existing
values instead, use [materialAO](/reference/threewebgpu/namespaces/tsl/variables/materialao/).

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`aoNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#aonode)

***

### attenuationColorNode

> **attenuationColorNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:238](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L238)

The attenuation color of physical materials is by default inferred from the
`attenuationColor` property. This node property allows to overwrite the default
and define the attenuation color with a node instead.

If you don't want to overwrite the attenuation color but modify the existing
value instead, use [materialAttenuationColor](/reference/threewebgpu/namespaces/tsl/variables/materialattenuationcolor/).

#### Default

```ts
null
```

***

### attenuationDistanceNode

> **attenuationDistanceNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:225](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L225)

The attenuation distance of physical materials is by default inferred from the
`attenuationDistance` property. This node property allows to overwrite the default
and define the attenuation distance with a node instead.

If you don't want to overwrite the attenuation distance but modify the existing
value instead, use [materialAttenuationDistance](/reference/threewebgpu/namespaces/tsl/variables/materialattenuationdistance/).

#### Default

```ts
null
```

***

### backdropAlphaNode

> **backdropAlphaNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:217](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L217)

This node allows to modulate the influence of `backdropNode` to the outgoing light.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`backdropAlphaNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#backdropalphanode)

***

### backdropNode

> **backdropNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:209](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L209)

This node can be used to to implement a variety of filter-like effects. The idea is
to store the current rendering into a texture e.g. via `viewportSharedTexture()`, use it
to create an arbitrary effect and then assign the node composition to this property.
Everything behind the object using this material will now be affected by a filter.

```js
const material = new NodeMaterial()
material.transparent = true;

// everything behind the object will be monochromatic
material.backdropNode = saturation( viewportSharedTexture().rgb, 0 );
```

Backdrop computations are part of the lighting so only lit materials can use this property.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`backdropNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#backdropnode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blendAlpha`](/reference/threewebgpu/classes/meshstandardnodematerial/#blendalpha)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blendColor`](/reference/threewebgpu/classes/meshstandardnodematerial/#blendcolor)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blendDst`](/reference/threewebgpu/classes/meshstandardnodematerial/#blenddst)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blendDstAlpha`](/reference/threewebgpu/classes/meshstandardnodematerial/#blenddstalpha)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blendEquation`](/reference/threewebgpu/classes/meshstandardnodematerial/#blendequation)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blendEquationAlpha`](/reference/threewebgpu/classes/meshstandardnodematerial/#blendequationalpha)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blending`](/reference/threewebgpu/classes/meshstandardnodematerial/#blending)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blendSrc`](/reference/threewebgpu/classes/meshstandardnodematerial/#blendsrc)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`blendSrcAlpha`](/reference/threewebgpu/classes/meshstandardnodematerial/#blendsrcalpha)

***

### castShadowNode

> **castShadowNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:322](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L322)

This node can be used to influence how an object using this node material
casts shadows. To apply a color to shadows, you can simply do:

```js
material.castShadowNode = vec4( 1, 0, 0, 1 );
```

Which can be nice to fake colored shadows of semi-transparent objects. It
is also common to use the property with `Fn` function so checks are performed
per fragment.

```js
materialCustomShadow.castShadowNode = Fn( () => {
	hash( vertexIndex ).greaterThan( 0.5 ).discard();
	return materialColor;
} )();
 ```

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`castShadowNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#castshadownode)

***

### clearcoatNode

> **clearcoatNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L56)

The clearcoat of physical materials is by default inferred from the `clearcoat`
and `clearcoatMap` properties. This node property allows to overwrite the default
and define the clearcoat with a node instead.

If you don't want to overwrite the clearcoat but modify the existing
value instead, use [materialClearcoat](/reference/threewebgpu/namespaces/tsl/variables/materialclearcoat/).

#### Default

```ts
null
```

***

### clearcoatNormalNode

> **clearcoatNormalNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L82)

The clearcoat normal of physical materials is by default inferred from the `clearcoatNormalMap`
property. This node property allows to overwrite the default
and define the clearcoat normal with a node instead.

If you don't want to overwrite the clearcoat normal but modify the existing
value instead, use [materialClearcoatNormal](/reference/threewebgpu/namespaces/tsl/variables/materialclearcoatnormal/).

#### Default

```ts
null
```

***

### clearcoatRoughnessNode

> **clearcoatRoughnessNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L69)

The clearcoat roughness of physical materials is by default inferred from the `clearcoatRoughness`
and `clearcoatRoughnessMap` properties. This node property allows to overwrite the default
and define the clearcoat roughness with a node instead.

If you don't want to overwrite the clearcoat roughness but modify the existing
value instead, use [materialClearcoatRoughness](/reference/threewebgpu/namespaces/tsl/variables/materialclearcoatroughness/).

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`clipIntersection`](/reference/threewebgpu/classes/meshstandardnodematerial/#clipintersection)

***

### clippingPlanes

> **clippingPlanes**: `Plane`[]

Defined in: [three/src/materials/Material.js:308](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L308)

User-defined clipping planes specified as THREE.Plane objects in world
space. These planes apply to the objects this material is attached to.
Points in space whose signed distance to the plane is negative are clipped
(not rendered). This requires WebGLRenderer#localClippingEnabled to
be `true`.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`clippingPlanes`](/reference/threewebgpu/classes/meshstandardnodematerial/#clippingplanes)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`clipShadows`](/reference/threewebgpu/classes/meshstandardnodematerial/#clipshadows)

***

### colorNode

> **colorNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:162](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L162)

The diffuse color of node materials is by default inferred from the
`color` and `map` properties. This node property allows to overwrite the default
and define the diffuse color with a node instead.

```js
material.colorNode = color( 0xff0000 ); // define red color
```

If you don't want to overwrite the diffuse color but modify the existing
values instead, use [materialColor](/reference/threewebgpu/namespaces/tsl/variables/materialcolor/).

```js
material.colorNode = materialColor.mul( color( 0xff0000 ) ); // give diffuse colors a red tint
```

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`colorNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#colornode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`colorWrite`](/reference/threewebgpu/classes/meshstandardnodematerial/#colorwrite)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`depthFunc`](/reference/threewebgpu/classes/meshstandardnodematerial/#depthfunc)

***

### depthNode

> **depthNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:271](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L271)

Allows to overwrite depth values in the fragment shader.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`depthNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#depthnode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`depthTest`](/reference/threewebgpu/classes/meshstandardnodematerial/#depthtest)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`depthWrite`](/reference/threewebgpu/classes/meshstandardnodematerial/#depthwrite)

***

### dispersionNode

> **dispersionNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:251](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L251)

The dispersion of physical materials is by default inferred from the
`dispersion` property. This node property allows to overwrite the default
and define the dispersion with a node instead.

If you don't want to overwrite the dispersion but modify the existing
value instead, use [materialDispersion](/reference/threewebgpu/namespaces/tsl/variables/materialdispersion/).

#### Default

```ts
null
```

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`dithering`](/reference/threewebgpu/classes/meshstandardnodematerial/#dithering)

***

### emissiveNode

> **emissiveNode**: `any`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L64)

The emissive color of standard materials is by default inferred from the `emissive`,
`emissiveIntensity` and `emissiveMap` properties. This node property allows to
overwrite the default and define the emissive color with a node instead.

If you don't want to overwrite the emissive color but modify the existing
value instead, use materialEmissive.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`emissiveNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#emissivenode)

***

### envNode

> **envNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:127](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L127)

The environment of node materials can be defined by an environment
map assigned to the `envMap` property or by `Scene.environment`
if the node material is a PBR material. This node property allows to overwrite
the default behavior and define the environment with a custom node.

```js
material.envNode = pmremTexture( renderTarget.texture );
```

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`envNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#envnode)

***

### fog

> **fog**: `boolean`

Defined in: [three/src/materials/nodes/NodeMaterial.js:76](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L76)

Whether this material is affected by fog or not.

#### Default

```ts
true
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`fog`](/reference/threewebgpu/classes/meshstandardnodematerial/#fog)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`forceSinglePass`](/reference/threewebgpu/classes/meshstandardnodematerial/#forcesinglepass)

***

### fragmentNode

> **fragmentNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:353](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L353)

This node property can be used if you need complete freedom in implementing
the fragment shader. Assigning a node will replace the built-in material
logic used in the fragment stage.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`fragmentNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#fragmentnode)

***

### geometryNode

> **geometryNode**: `Function`

Defined in: [three/src/materials/nodes/NodeMaterial.js:263](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L263)

This node property is intended for logic which modifies geometry data once or per animation step.
Apps usually place such logic randomly in initialization routines or in the animation loop.
`geometryNode` is intended as a dedicated API so there is an intended spot where geometry modifications
can be implemented.

The idea is to assign a `Fn` definition that holds the geometry modification logic. A typical example
would be a GPU based particle system that provides a node material for usage on app level. The particle
simulation would be implemented as compute shaders and managed inside a `Fn` function. This function is
eventually assigned to `geometryNode`.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`geometryNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#geometrynode)

***

### hardwareClipping

> **hardwareClipping**: `boolean`

Defined in: [three/src/materials/nodes/NodeMaterial.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L94)

Whether this material uses hardware clipping or not.
This property is managed by the engine and should not be
modified by apps.

#### Default

```ts
false
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`hardwareClipping`](/reference/threewebgpu/classes/meshstandardnodematerial/#hardwareclipping)

***

### iorNode

> **iorNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:186](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L186)

The ior of physical materials is by default inferred from the `ior`
property. This node property allows to overwrite the default
and define the ior with a node instead.

If you don't want to overwrite the ior but modify the existing
value instead, use [materialIOR](/reference/threewebgpu/namespaces/tsl/variables/materialior/).

#### Default

```ts
null
```

***

### iridescenceIORNode

> **iridescenceIORNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L134)

The iridescence IOR of physical materials is by default inferred from the `iridescenceIOR`
property. This node property allows to overwrite the default
and define the iridescence IOR with a node instead.

If you don't want to overwrite the iridescence IOR but modify the existing
value instead, use [materialIridescenceIOR](/reference/threewebgpu/namespaces/tsl/variables/materialiridescenceior/).

#### Default

```ts
null
```

***

### iridescenceNode

> **iridescenceNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:121](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L121)

The iridescence of physical materials is by default inferred from the `iridescence`
property. This node property allows to overwrite the default
and define the iridescence with a node instead.

If you don't want to overwrite the iridescence but modify the existing
value instead, use [materialIridescence](/reference/threewebgpu/namespaces/tsl/variables/materialiridescence/).

#### Default

```ts
null
```

***

### iridescenceThicknessNode

> **iridescenceThicknessNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:147](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L147)

The iridescence thickness of physical materials is by default inferred from the `iridescenceThicknessRange`
and `iridescenceThicknessMap` properties. This node property allows to overwrite the default
and define the iridescence thickness with a node instead.

If you don't want to overwrite the iridescence thickness but modify the existing
value instead, use [materialIridescenceThickness](/reference/threewebgpu/namespaces/tsl/variables/materialiridescencethickness/).

#### Default

```ts
null
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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`isMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/#ismaterial)

***

### isMeshPhysicalNodeMaterial

> `readonly` **isMeshPhysicalNodeMaterial**: `boolean`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L43)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isMeshStandardNodeMaterial

> `readonly` **isMeshStandardNodeMaterial**: `boolean`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L43)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`isMeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/#ismeshstandardnodematerial)

***

### isNodeMaterial

> `readonly` **isNodeMaterial**: `boolean`

Defined in: [three/src/materials/nodes/NodeMaterial.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L68)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`isNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/#isnodematerial)

***

### lights

> **lights**: `boolean`

Defined in: [three/src/materials/nodes/NodeMaterial.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L84)

Whether this material is affected by lights or not.

#### Default

```ts
false
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`lights`](/reference/threewebgpu/classes/meshstandardnodematerial/#lights)

***

### lightsNode

> **lightsNode**: `LightsNode`

Defined in: [three/src/materials/nodes/NodeMaterial.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L112)

Node materials which set their `lights` property to `true`
are affected by all lights of the scene. Sometimes selective
lighting is wanted which means only _some_ lights in the scene
affect a material. This can be achieved by creating an instance
of [LightsNode](/reference/threewebgpu/classes/lightsnode/) with a list of selective
lights and assign the node to this property.

```js
const customLightsNode = lights( [ light1, light2 ] );
material.lightsNode = customLightsNode;
```

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`lightsNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#lightsnode)

***

### metalnessNode

> **metalnessNode**: `any`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L77)

The metalness of standard materials is by default inferred from the `metalness`,
and `metalnessMap` properties. This node property allows to
overwrite the default and define the metalness with a node instead.

If you don't want to overwrite the metalness but modify the existing
value instead, use [materialMetalness](/reference/threewebgpu/namespaces/tsl/variables/materialmetalness/).

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`metalnessNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#metalnessnode)

***

### mrtNode

> **mrtNode**: `MRTNode`

Defined in: [three/src/materials/nodes/NodeMaterial.js:343](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L343)

MRT configuration is done on renderer or pass level. This node allows to
overwrite what values are written into MRT targets on material level. This
can be useful for implementing selective FX features that should only affect
specific objects.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`mrtNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#mrtnode)

***

### name

> **name**: `string`

Defined in: [three/src/materials/Material.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L56)

The name of the material.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`name`](/reference/threewebgpu/classes/meshstandardnodematerial/#name)

***

### normalNode

> **normalNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:175](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L175)

The normals of node materials are by default inferred from the `normalMap`/`normalScale`
or `bumpMap`/`bumpScale` properties. This node property allows to overwrite the default
and define the normals with a node instead.

If you don't want to overwrite the normals but modify the existing values instead,
use [materialNormal](/reference/threewebgpu/namespaces/tsl/variables/materialnormal/).

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`normalNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#normalnode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`opacity`](/reference/threewebgpu/classes/meshstandardnodematerial/#opacity)

***

### opacityNode

> **opacityNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:188](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L188)

The opacity of node materials is by default inferred from the `opacity`
and `alphaMap` properties. This node property allows to overwrite the default
and define the opacity with a node instead.

If you don't want to overwrite the normals but modify the existing
value instead, use [materialOpacity](/reference/threewebgpu/namespaces/tsl/variables/materialopacity/).

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`opacityNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#opacitynode)

***

### outputNode

> **outputNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:332](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L332)

This node can be used to define the final output of the material.

TODO: Explain the differences to `fragmentNode`.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`outputNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#outputnode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`polygonOffset`](/reference/threewebgpu/classes/meshstandardnodematerial/#polygonoffset)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`polygonOffsetFactor`](/reference/threewebgpu/classes/meshstandardnodematerial/#polygonoffsetfactor)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`polygonOffsetUnits`](/reference/threewebgpu/classes/meshstandardnodematerial/#polygonoffsetunits)

***

### positionNode

> **positionNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:247](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L247)

The local vertex positions are computed based on multiple factors like the
attribute data, morphing or skinning. This node property allows to overwrite
the default and define local vertex positions with nodes instead.

If you don't want to overwrite the vertex positions but modify the existing
values instead, use [positionLocal](/reference/threewebgpu/namespaces/tsl/variables/positionlocal/).

```js
material.positionNode = positionLocal.add( displace );
```

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`positionNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#positionnode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`precision`](/reference/threewebgpu/classes/meshstandardnodematerial/#precision)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`premultipliedAlpha`](/reference/threewebgpu/classes/meshstandardnodematerial/#premultipliedalpha)

***

### receivedShadowNode

> **receivedShadowNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:298](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L298)

This node can be used to influence how an object using this node material
receive shadows.

```js
const totalShadows = float( 1 ).toVar();
material.receivedShadowNode = Fn( ( [ shadow ] ) => {
	totalShadows.mulAssign( shadow );
	//return float( 1 ); // bypass received shadows
	return shadow.mix( color( 0xff0000 ), 1 ); // modify shadow color
} );

@type {?(Function|FunctionNode<vec4>)}
@default null

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`receivedShadowNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#receivedshadownode)

***

### roughnessNode

> **roughnessNode**: `any`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:90](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L90)

The roughness of standard materials is by default inferred from the `roughness`,
and `roughnessMap` properties. This node property allows to
overwrite the default and define the roughness with a node instead.

If you don't want to overwrite the roughness but modify the existing
value instead, use [materialRoughness](/reference/threewebgpu/namespaces/tsl/variables/materialroughness/).

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`roughnessNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#roughnessnode)

***

### shadowPositionNode

> **shadowPositionNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:281](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L281)

Allows to overwrite the position used for shadow map rendering which
is by default positionWorld, the vertex position
in world space.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`shadowPositionNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#shadowpositionnode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`shadowSide`](/reference/threewebgpu/classes/meshstandardnodematerial/#shadowside)

***

### sheenNode

> **sheenNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L95)

The sheen of physical materials is by default inferred from the `sheen`, `sheenColor`
and `sheenColorMap` properties. This node property allows to overwrite the default
and define the sheen with a node instead.

If you don't want to overwrite the sheen but modify the existing
value instead, use [materialSheen](/reference/threewebgpu/namespaces/tsl/variables/materialsheen/).

#### Default

```ts
null
```

***

### sheenRoughnessNode

> **sheenRoughnessNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L108)

The sheen roughness of physical materials is by default inferred from the `sheenRoughness` and
`sheenRoughnessMap` properties. This node property allows to overwrite the default
and define the sheen roughness with a node instead.

If you don't want to overwrite the sheen roughness but modify the existing
value instead, use [materialSheenRoughness](/reference/threewebgpu/namespaces/tsl/variables/materialsheenroughness/).

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`side`](/reference/threewebgpu/classes/meshstandardnodematerial/#side)

***

### specularColorNode

> **specularColorNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:173](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L173)

The specular color of physical materials is by default inferred from the `specularColor`
and `specularColorMap` properties. This node property allows to overwrite the default
and define the specular color with a node instead.

If you don't want to overwrite the specular color but modify the existing
value instead, use [materialSpecularColor](/reference/threewebgpu/namespaces/tsl/variables/materialspecularcolor/).

#### Default

```ts
null
```

***

### specularIntensityNode

> **specularIntensityNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:160](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L160)

The specular intensity of physical materials is by default inferred from the `specularIntensity`
and `specularIntensityMap` properties. This node property allows to overwrite the default
and define the specular intensity with a node instead.

If you don't want to overwrite the specular intensity but modify the existing
value instead, use [materialSpecularIntensity](/reference/threewebgpu/namespaces/tsl/variables/materialspecularintensity/).

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`stencilFail`](/reference/threewebgpu/classes/meshstandardnodematerial/#stencilfail)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`stencilFunc`](/reference/threewebgpu/classes/meshstandardnodematerial/#stencilfunc)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`stencilFuncMask`](/reference/threewebgpu/classes/meshstandardnodematerial/#stencilfuncmask)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`stencilRef`](/reference/threewebgpu/classes/meshstandardnodematerial/#stencilref)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`stencilWrite`](/reference/threewebgpu/classes/meshstandardnodematerial/#stencilwrite)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`stencilWriteMask`](/reference/threewebgpu/classes/meshstandardnodematerial/#stencilwritemask)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`stencilZFail`](/reference/threewebgpu/classes/meshstandardnodematerial/#stencilzfail)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`stencilZPass`](/reference/threewebgpu/classes/meshstandardnodematerial/#stencilzpass)

***

### thicknessNode

> **thicknessNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:212](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L212)

The thickness of physical materials is by default inferred from the `thickness` and
`thicknessMap` properties. This node property allows to overwrite the default
and define the thickness with a node instead.

If you don't want to overwrite the thickness but modify the existing
value instead, use [materialThickness](/reference/threewebgpu/namespaces/tsl/variables/materialthickness/).

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`toneMapped`](/reference/threewebgpu/classes/meshstandardnodematerial/#tonemapped)

***

### transmissionNode

> **transmissionNode**: `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:199](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L199)

The transmission of physical materials is by default inferred from the `transmission` and
`transmissionMap` properties. This node property allows to overwrite the default
and define the transmission with a node instead.

If you don't want to overwrite the transmission but modify the existing
value instead, use [materialTransmission](/reference/threewebgpu/namespaces/tsl/variables/materialtransmission/).

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`transparent`](/reference/threewebgpu/classes/meshstandardnodematerial/#transparent)

***

### userData

> **userData**: `any`

Defined in: [three/src/materials/Material.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L463)

An object that can be used to store custom data about the Material. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`userData`](/reference/threewebgpu/classes/meshstandardnodematerial/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/materials/Material.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L49)

The UUID of the material.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`uuid`](/reference/threewebgpu/classes/meshstandardnodematerial/#uuid)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`version`](/reference/threewebgpu/classes/meshstandardnodematerial/#version)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`vertexColors`](/reference/threewebgpu/classes/meshstandardnodematerial/#vertexcolors)

***

### vertexNode

> **vertexNode**: `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:363](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L363)

This node property can be used if you need complete freedom in implementing
the vertex shader. Assigning a node will replace the built-in material logic
used in the vertex stage.

#### Default

```ts
null
```

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`vertexNode`](/reference/threewebgpu/classes/meshstandardnodematerial/#vertexnode)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`visible`](/reference/threewebgpu/classes/meshstandardnodematerial/#visible)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`alphaTest`](/reference/threewebgpu/classes/meshstandardnodematerial/#alphatest)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`needsUpdate`](/reference/threewebgpu/classes/meshstandardnodematerial/#needsupdate)

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: [three/src/materials/nodes/NodeMaterial.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L46)

Represents the type of the node material.

##### Returns

`string`

#### Set Signature

> **set** **type**(`_value`): `void`

Defined in: [three/src/materials/nodes/NodeMaterial.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L52)

The type property is used for detecting the object type
in context of serialization/deserialization.

##### Parameters

###### \_value

`string`

##### Returns

`void`

The type property is used for detecting the object type
in context of serialization/deserialization.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`type`](/reference/threewebgpu/classes/meshstandardnodematerial/#type)

***

### useAnisotropy

#### Get Signature

> **get** **useAnisotropy**(): `boolean`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:314](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L314)

Whether the lighting model should use anisotropy or not.

##### Default

```ts
true
```

##### Returns

`boolean`

***

### useClearcoat

#### Get Signature

> **get** **useClearcoat**(): `boolean`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:278](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L278)

Whether the lighting model should use clearcoat or not.

##### Default

```ts
true
```

##### Returns

`boolean`

***

### useDispersion

#### Get Signature

> **get** **useDispersion**(): `boolean`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L338)

Whether the lighting model should use dispersion or not.

##### Default

```ts
true
```

##### Returns

`boolean`

***

### useIridescence

#### Get Signature

> **get** **useIridescence**(): `boolean`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:290](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L290)

Whether the lighting model should use iridescence or not.

##### Default

```ts
true
```

##### Returns

`boolean`

***

### useSheen

#### Get Signature

> **get** **useSheen**(): `boolean`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:302](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L302)

Whether the lighting model should use sheen or not.

##### Default

```ts
true
```

##### Returns

`boolean`

***

### useTransmission

#### Get Signature

> **get** **useTransmission**(): `boolean`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:326](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L326)

Whether the lighting model should use transmission or not.

##### Default

```ts
true
```

##### Returns

`boolean`

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L21)

##### Returns

`string`

#### Overrides

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`type`](/reference/threewebgpu/classes/meshstandardnodematerial/#type-1)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`addEventListener`](/reference/threewebgpu/classes/meshstandardnodematerial/#addeventlistener)

***

### build()

> **build**(`builder`): `void`

Defined in: [three/src/materials/nodes/NodeMaterial.js:384](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L384)

Builds this material with the given node builder.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`build`](/reference/threewebgpu/classes/meshstandardnodematerial/#build)

***

### clone()

> **clone**(): [`Material`](/reference/three/classes/material/)

Defined in: [three/src/materials/Material.js:875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L875)

Returns a new material with copied values from this instance.

#### Returns

[`Material`](/reference/three/classes/material/)

A clone of this instance.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`clone`](/reference/threewebgpu/classes/meshstandardnodematerial/#clone)

***

### copy()

> **copy**(`source`): [`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:487](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L487)

Copies the properties of the given node material to this instance.

#### Parameters

##### source

`any`

The material to copy.

#### Returns

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

A reference to this node material.

#### Overrides

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`copy`](/reference/threewebgpu/classes/meshstandardnodematerial/#copy)

***

### customProgramCacheKey()

> **customProgramCacheKey**(): `string`

Defined in: [three/src/materials/nodes/NodeMaterial.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L373)

Allows to define a custom cache key that influence the material key computation
for render objects.

#### Returns

`string`

The custom cache key.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`customProgramCacheKey`](/reference/threewebgpu/classes/meshstandardnodematerial/#customprogramcachekey)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`dispatchEvent`](/reference/threewebgpu/classes/meshstandardnodematerial/#dispatchevent)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`dispose`](/reference/threewebgpu/classes/meshstandardnodematerial/#dispose)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`hasEventListener`](/reference/threewebgpu/classes/meshstandardnodematerial/#haseventlistener)

***

### onBeforeCompile()

> **onBeforeCompile**(): `void`

Defined in: [three/src/materials/Material.js:530](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L530)

An optional callback that is executed immediately before the shader
program is compiled. This function is called with the shader source code
as a parameter. Useful for the modification of built-in materials.

This method can only be used when rendering with WebGLRenderer. The
recommended approach when customizing materials is to use `WebGPURenderer` with the new
Node Material system and [TSL][https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language).

#### Returns

`void`

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`onBeforeCompile`](/reference/threewebgpu/classes/meshstandardnodematerial/#onbeforecompile)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/materials/Material.js:516](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L516)

An optional callback that is executed immediately before the material is used to render a 3D object.

This method can only be used when rendering with WebGLRenderer.

#### Returns

`void`

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`onBeforeRender`](/reference/threewebgpu/classes/meshstandardnodematerial/#onbeforerender)

***

### onBuild()

> **onBuild**(): `void`

Defined in: [three/src/materials/Material.js:1000](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L1000)

#### Returns

`void`

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`onBuild`](/reference/threewebgpu/classes/meshstandardnodematerial/#onbuild)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`removeEventListener`](/reference/threewebgpu/classes/meshstandardnodematerial/#removeeventlistener)

***

### setDefaultValues()

> **setDefaultValues**(`material`): `void`

Defined in: [three/src/materials/nodes/NodeMaterial.js:1047](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L1047)

Most classic material types have a node pendant e.g. for `MeshBasicMaterial`
there is `MeshBasicNodeMaterial`. This utility method is intended for
defining all material properties of the classic type in the node type.

#### Parameters

##### material

[`Material`](/reference/three/classes/material/)

The material to copy properties with their values to this node material.

#### Returns

`void`

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setDefaultValues`](/reference/threewebgpu/classes/meshstandardnodematerial/#setdefaultvalues)

***

### setup()

> **setup**(`builder`): `void`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:479](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L479)

Setups the vertex and fragment stage of this node material.

#### Parameters

##### builder

`any`

The current node builder.

#### Returns

`void`

#### Overrides

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setup`](/reference/threewebgpu/classes/meshstandardnodematerial/#setup)

***

### setupClearcoatNormal()

> **setupClearcoatNormal**(): `any`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:473](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L473)

Setups the clearcoat normal node.

#### Returns

`any`

The clearcoat normal.

***

### setupClipping()

> **setupClipping**(`builder`): `ClippingNode`

Defined in: [three/src/materials/nodes/NodeMaterial.js:540](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L540)

Setups the clipping node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`ClippingNode`

The clipping node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupClipping`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupclipping)

***

### setupDepth()

> **setupDepth**(`builder`): `void`

Defined in: [three/src/materials/nodes/NodeMaterial.js:601](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L601)

Setups the depth of this material.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupDepth`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupdepth)

***

### setupDiffuseColor()

> **setupDiffuseColor**(`__namedParameters`): `void`

Defined in: [three/src/materials/nodes/NodeMaterial.js:744](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L744)

Setups the computation of the material's diffuse color.

#### Parameters

##### \_\_namedParameters

`NodeBuilder`

#### Returns

`void`

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupDiffuseColor`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupdiffusecolor)

***

### setupEnvironment()

> **setupEnvironment**(`builder`): `any`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L106)

Overwritten since this type of material uses [EnvironmentNode](/reference/threewebgpu/classes/environmentnode/)
to implement the PBR (PMREM based) environment mapping. Besides, the
method honors `Scene.environment`.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`any`

The environment node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupEnvironment`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupenvironment)

***

### setupFog()

> **setupFog**(`builder`, `outputNode`): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:1003](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L1003)

Setup the fog.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

##### outputNode

`any`

The existing output node.

#### Returns

`any`

The output node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupFog`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupfog)

***

### setupHardwareClipping()

> **setupHardwareClipping**(`builder`): `void`

Defined in: [three/src/materials/nodes/NodeMaterial.js:574](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L574)

Setups the hardware clipping if available on the current device.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupHardwareClipping`](/reference/threewebgpu/classes/meshstandardnodematerial/#setuphardwareclipping)

***

### setupLighting()

> **setupLighting**(`builder`): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:957](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L957)

Setups the outgoing light node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`any`

The outgoing light node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupLighting`](/reference/threewebgpu/classes/meshstandardnodematerial/#setuplighting)

***

### setupLightingModel()

> **setupLightingModel**(): [`PhysicalLightingModel`](/reference/threewebgpu/classes/physicallightingmodel/)

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L362)

Setups the lighting model.

#### Returns

[`PhysicalLightingModel`](/reference/threewebgpu/classes/physicallightingmodel/)

The lighting model.

#### Overrides

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupLightingModel`](/reference/threewebgpu/classes/meshstandardnodematerial/#setuplightingmodel)

***

### setupLightMap()

> **setupLightMap**(`builder`): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L875)

Setups the light map node from the material.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`any`

The light map node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupLightMap`](/reference/threewebgpu/classes/meshstandardnodematerial/#setuplightmap)

***

### setupLights()

> **setupLights**(`builder`): `LightsNode`

Defined in: [three/src/materials/nodes/NodeMaterial.js:895](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L895)

Setups the lights node based on the scene, environment and material.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`LightsNode`

The lights node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupLights`](/reference/threewebgpu/classes/meshstandardnodematerial/#setuplights)

***

### setupModelViewProjection()

> **setupModelViewProjection**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:660](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L660)

Setups the position in clip space.

#### Returns

`any`

The position in view space.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupModelViewProjection`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupmodelviewprojection)

***

### setupNormal()

> **setupNormal**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:839](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L839)

Setups the normal node from the material.

#### Returns

`any`

The normal node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupNormal`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupnormal)

***

### setupObserver()

> **setupObserver**(`builder`): [`NodeMaterialObserver`](/reference/threewebgpu/classes/nodematerialobserver/)

Defined in: [three/src/materials/nodes/NodeMaterial.js:396](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L396)

Setups a node material observer with the given builder.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

[`NodeMaterialObserver`](/reference/threewebgpu/classes/nodematerialobserver/)

The node material observer.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupObserver`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupobserver)

***

### setupOutgoingLight()

> **setupOutgoingLight**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:828](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L828)

Setups the outgoing light node variable

#### Returns

`any`

The outgoing light node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupOutgoingLight`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupoutgoinglight)

***

### setupOutput()

> **setupOutput**(`builder`, `outputNode`): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:1026](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L1026)

Setups the output node.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

##### outputNode

`any`

The existing output node.

#### Returns

`any`

The output node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupOutput`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupoutput)

***

### setupPosition()

> **setupPosition**(`builder`): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:690](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L690)

Setups the computation of the position in local space.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`any`

The position in local space.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupPosition`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupposition)

***

### setupPositionView()

> **setupPositionView**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:648](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L648)

Setups the position node in view space. This method exists
so derived node materials can modify the implementation e.g. sprite materials.

#### Returns

`any`

The position in view space.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupPositionView`](/reference/threewebgpu/classes/meshstandardnodematerial/#setuppositionview)

***

### setupSpecular()

> **setupSpecular**(): `void`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:347](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L347)

Setups the specular related node variables.

#### Returns

`void`

#### Overrides

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupSpecular`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupspecular)

***

### setupVariants()

> **setupVariants**(`builder`): `void`

Defined in: [three/src/materials/nodes/MeshPhysicalNodeMaterial.js:373](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshPhysicalNodeMaterial.js#L373)

Setups the physical specific node variables.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Overrides

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupVariants`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupvariants)

***

### setupVertex()

> **setupVertex**(`builder`): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:672](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L672)

Setups the logic for the vertex stage.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`any`

The position in clip space.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setupVertex`](/reference/threewebgpu/classes/meshstandardnodematerial/#setupvertex)

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

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`setValues`](/reference/threewebgpu/classes/meshstandardnodematerial/#setvalues)

***

### toJSON()

> **toJSON**(`meta`): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:1087](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L1087)

Serializes this material to JSON.

#### Parameters

##### meta

`any`

The meta information for serialization.

#### Returns

`any`

The serialized node.

#### Inherited from

[`MeshStandardNodeMaterial`](/reference/threewebgpu/classes/meshstandardnodematerial/).[`toJSON`](/reference/threewebgpu/classes/meshstandardnodematerial/#tojson)

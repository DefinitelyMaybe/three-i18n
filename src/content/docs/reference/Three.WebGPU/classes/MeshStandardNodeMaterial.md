---
editUrl: false
next: false
prev: false
title: "MeshStandardNodeMaterial"
---

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L19)

Node material version of [MeshStandardMaterial](/reference/three/classes/meshstandardmaterial/).

## Extends

- [`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

## Extended by

- [`MeshPhysicalNodeMaterial`](/reference/threewebgpu/classes/meshphysicalnodematerial/)

## Constructors

### Constructor

> **new MeshStandardNodeMaterial**(`parameters`?): `MeshStandardNodeMaterial`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L32)

Constructs a new mesh standard node material.

#### Parameters

##### parameters?

`any`

The configuration parameter.

#### Returns

`MeshStandardNodeMaterial`

#### Overrides

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`constructor`](/reference/threewebgpu/classes/nodematerial/#constructor)

## Properties

### \_alphaTest

> **\_alphaTest**: `number`

Defined in: [three/src/materials/Material.js:474](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L474)

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`_alphaTest`](/reference/threewebgpu/classes/nodematerial/#_alphatest)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`_listeners`](/reference/threewebgpu/classes/nodematerial/#_listeners)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`allowOverride`](/reference/threewebgpu/classes/nodematerial/#allowoverride)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`alphaHash`](/reference/threewebgpu/classes/nodematerial/#alphahash)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`alphaTestNode`](/reference/threewebgpu/classes/nodematerial/#alphatestnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`alphaToCoverage`](/reference/threewebgpu/classes/nodematerial/#alphatocoverage)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`aoNode`](/reference/threewebgpu/classes/nodematerial/#aonode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`backdropAlphaNode`](/reference/threewebgpu/classes/nodematerial/#backdropalphanode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`backdropNode`](/reference/threewebgpu/classes/nodematerial/#backdropnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blendAlpha`](/reference/threewebgpu/classes/nodematerial/#blendalpha)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blendColor`](/reference/threewebgpu/classes/nodematerial/#blendcolor)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blendDst`](/reference/threewebgpu/classes/nodematerial/#blenddst)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blendDstAlpha`](/reference/threewebgpu/classes/nodematerial/#blenddstalpha)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blendEquation`](/reference/threewebgpu/classes/nodematerial/#blendequation)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blendEquationAlpha`](/reference/threewebgpu/classes/nodematerial/#blendequationalpha)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blending`](/reference/threewebgpu/classes/nodematerial/#blending)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blendSrc`](/reference/threewebgpu/classes/nodematerial/#blendsrc)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`blendSrcAlpha`](/reference/threewebgpu/classes/nodematerial/#blendsrcalpha)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`castShadowNode`](/reference/threewebgpu/classes/nodematerial/#castshadownode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`clipIntersection`](/reference/threewebgpu/classes/nodematerial/#clipintersection)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`clippingPlanes`](/reference/threewebgpu/classes/nodematerial/#clippingplanes)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`clipShadows`](/reference/threewebgpu/classes/nodematerial/#clipshadows)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`colorNode`](/reference/threewebgpu/classes/nodematerial/#colornode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`colorWrite`](/reference/threewebgpu/classes/nodematerial/#colorwrite)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`depthFunc`](/reference/threewebgpu/classes/nodematerial/#depthfunc)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`depthNode`](/reference/threewebgpu/classes/nodematerial/#depthnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`depthTest`](/reference/threewebgpu/classes/nodematerial/#depthtest)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`depthWrite`](/reference/threewebgpu/classes/nodematerial/#depthwrite)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`dithering`](/reference/threewebgpu/classes/nodematerial/#dithering)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`envNode`](/reference/threewebgpu/classes/nodematerial/#envnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`fog`](/reference/threewebgpu/classes/nodematerial/#fog)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`forceSinglePass`](/reference/threewebgpu/classes/nodematerial/#forcesinglepass)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`fragmentNode`](/reference/threewebgpu/classes/nodematerial/#fragmentnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`geometryNode`](/reference/threewebgpu/classes/nodematerial/#geometrynode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`hardwareClipping`](/reference/threewebgpu/classes/nodematerial/#hardwareclipping)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`isMaterial`](/reference/threewebgpu/classes/nodematerial/#ismaterial)

***

### isMeshStandardNodeMaterial

> `readonly` **isMeshStandardNodeMaterial**: `boolean`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L43)

This flag can be used for type testing.

#### Default

```ts
true
```

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`isNodeMaterial`](/reference/threewebgpu/classes/nodematerial/#isnodematerial)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`lights`](/reference/threewebgpu/classes/nodematerial/#lights)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`lightsNode`](/reference/threewebgpu/classes/nodematerial/#lightsnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`mrtNode`](/reference/threewebgpu/classes/nodematerial/#mrtnode)

***

### name

> **name**: `string`

Defined in: [three/src/materials/Material.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L56)

The name of the material.

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`name`](/reference/threewebgpu/classes/nodematerial/#name)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`normalNode`](/reference/threewebgpu/classes/nodematerial/#normalnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`opacity`](/reference/threewebgpu/classes/nodematerial/#opacity)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`opacityNode`](/reference/threewebgpu/classes/nodematerial/#opacitynode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`outputNode`](/reference/threewebgpu/classes/nodematerial/#outputnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`polygonOffset`](/reference/threewebgpu/classes/nodematerial/#polygonoffset)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`polygonOffsetFactor`](/reference/threewebgpu/classes/nodematerial/#polygonoffsetfactor)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`polygonOffsetUnits`](/reference/threewebgpu/classes/nodematerial/#polygonoffsetunits)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`positionNode`](/reference/threewebgpu/classes/nodematerial/#positionnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`precision`](/reference/threewebgpu/classes/nodematerial/#precision)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`premultipliedAlpha`](/reference/threewebgpu/classes/nodematerial/#premultipliedalpha)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`receivedShadowNode`](/reference/threewebgpu/classes/nodematerial/#receivedshadownode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`shadowPositionNode`](/reference/threewebgpu/classes/nodematerial/#shadowpositionnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`shadowSide`](/reference/threewebgpu/classes/nodematerial/#shadowside)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`side`](/reference/threewebgpu/classes/nodematerial/#side)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`stencilFail`](/reference/threewebgpu/classes/nodematerial/#stencilfail)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`stencilFunc`](/reference/threewebgpu/classes/nodematerial/#stencilfunc)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`stencilFuncMask`](/reference/threewebgpu/classes/nodematerial/#stencilfuncmask)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`stencilRef`](/reference/threewebgpu/classes/nodematerial/#stencilref)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`stencilWrite`](/reference/threewebgpu/classes/nodematerial/#stencilwrite)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`stencilWriteMask`](/reference/threewebgpu/classes/nodematerial/#stencilwritemask)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`stencilZFail`](/reference/threewebgpu/classes/nodematerial/#stencilzfail)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`stencilZPass`](/reference/threewebgpu/classes/nodematerial/#stencilzpass)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`toneMapped`](/reference/threewebgpu/classes/nodematerial/#tonemapped)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`transparent`](/reference/threewebgpu/classes/nodematerial/#transparent)

***

### userData

> **userData**: `any`

Defined in: [three/src/materials/Material.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L463)

An object that can be used to store custom data about the Material. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`userData`](/reference/threewebgpu/classes/nodematerial/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/materials/Material.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L49)

The UUID of the material.

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`uuid`](/reference/threewebgpu/classes/nodematerial/#uuid)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`version`](/reference/threewebgpu/classes/nodematerial/#version)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`vertexColors`](/reference/threewebgpu/classes/nodematerial/#vertexcolors)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`vertexNode`](/reference/threewebgpu/classes/nodematerial/#vertexnode)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`visible`](/reference/threewebgpu/classes/nodematerial/#visible)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`alphaTest`](/reference/threewebgpu/classes/nodematerial/#alphatest)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`needsUpdate`](/reference/threewebgpu/classes/nodematerial/#needsupdate)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`type`](/reference/threewebgpu/classes/nodematerial/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L21)

##### Returns

`string`

#### Overrides

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`type`](/reference/threewebgpu/classes/nodematerial/#type-1)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`addEventListener`](/reference/threewebgpu/classes/nodematerial/#addeventlistener)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`build`](/reference/threewebgpu/classes/nodematerial/#build)

***

### clone()

> **clone**(): [`Material`](/reference/three/classes/material/)

Defined in: [three/src/materials/Material.js:875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L875)

Returns a new material with copied values from this instance.

#### Returns

[`Material`](/reference/three/classes/material/)

A clone of this instance.

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`clone`](/reference/threewebgpu/classes/nodematerial/#clone)

***

### copy()

> **copy**(`source`): [`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:173](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L173)

Copies the properties of the given node material to this instance.

#### Parameters

##### source

`any`

The material to copy.

#### Returns

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

A reference to this node material.

#### Overrides

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`copy`](/reference/threewebgpu/classes/nodematerial/#copy)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`customProgramCacheKey`](/reference/threewebgpu/classes/nodematerial/#customprogramcachekey)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`dispatchEvent`](/reference/threewebgpu/classes/nodematerial/#dispatchevent)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`dispose`](/reference/threewebgpu/classes/nodematerial/#dispose)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`hasEventListener`](/reference/threewebgpu/classes/nodematerial/#haseventlistener)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`onBeforeCompile`](/reference/threewebgpu/classes/nodematerial/#onbeforecompile)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/materials/Material.js:516](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L516)

An optional callback that is executed immediately before the material is used to render a 3D object.

This method can only be used when rendering with WebGLRenderer.

#### Returns

`void`

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`onBeforeRender`](/reference/threewebgpu/classes/nodematerial/#onbeforerender)

***

### onBuild()

> **onBuild**(): `void`

Defined in: [three/src/materials/Material.js:1000](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L1000)

#### Returns

`void`

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`onBuild`](/reference/threewebgpu/classes/nodematerial/#onbuild)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`removeEventListener`](/reference/threewebgpu/classes/nodematerial/#removeeventlistener)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setDefaultValues`](/reference/threewebgpu/classes/nodematerial/#setdefaultvalues)

***

### setup()

> **setup**(`builder`): `void`

Defined in: [three/src/materials/nodes/NodeMaterial.js:407](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L407)

Setups the vertex and fragment stage of this node material.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setup`](/reference/threewebgpu/classes/nodematerial/#setup)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupClipping`](/reference/threewebgpu/classes/nodematerial/#setupclipping)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupDepth`](/reference/threewebgpu/classes/nodematerial/#setupdepth)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupDiffuseColor`](/reference/threewebgpu/classes/nodematerial/#setupdiffusecolor)

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

#### Overrides

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupEnvironment`](/reference/threewebgpu/classes/nodematerial/#setupenvironment)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupFog`](/reference/threewebgpu/classes/nodematerial/#setupfog)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupHardwareClipping`](/reference/threewebgpu/classes/nodematerial/#setuphardwareclipping)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupLighting`](/reference/threewebgpu/classes/nodematerial/#setuplighting)

***

### setupLightingModel()

> **setupLightingModel**(): [`PhysicalLightingModel`](/reference/threewebgpu/classes/physicallightingmodel/)

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:125](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L125)

Setups the lighting model.

#### Returns

[`PhysicalLightingModel`](/reference/threewebgpu/classes/physicallightingmodel/)

The lighting model.

#### Overrides

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupLightingModel`](/reference/threewebgpu/classes/nodematerial/#setuplightingmodel)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupLightMap`](/reference/threewebgpu/classes/nodematerial/#setuplightmap)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupLights`](/reference/threewebgpu/classes/nodematerial/#setuplights)

***

### setupModelViewProjection()

> **setupModelViewProjection**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:660](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L660)

Setups the position in clip space.

#### Returns

`any`

The position in view space.

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupModelViewProjection`](/reference/threewebgpu/classes/nodematerial/#setupmodelviewprojection)

***

### setupNormal()

> **setupNormal**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:839](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L839)

Setups the normal node from the material.

#### Returns

`any`

The normal node.

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupNormal`](/reference/threewebgpu/classes/nodematerial/#setupnormal)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupObserver`](/reference/threewebgpu/classes/nodematerial/#setupobserver)

***

### setupOutgoingLight()

> **setupOutgoingLight**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:828](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L828)

Setups the outgoing light node variable

#### Returns

`any`

The outgoing light node.

#### Inherited from

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupOutgoingLight`](/reference/threewebgpu/classes/nodematerial/#setupoutgoinglight)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupOutput`](/reference/threewebgpu/classes/nodematerial/#setupoutput)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupPosition`](/reference/threewebgpu/classes/nodematerial/#setupposition)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupPositionView`](/reference/threewebgpu/classes/nodematerial/#setuppositionview)

***

### setupSpecular()

> **setupSpecular**(): `void`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L134)

Setups the specular related node variables.

#### Returns

`void`

***

### setupVariants()

> **setupVariants**(): `void`

Defined in: [three/src/materials/nodes/MeshStandardNodeMaterial.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/MeshStandardNodeMaterial.js#L148)

Setups the standard specific node variables.

#### Returns

`void`

#### Overrides

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupVariants`](/reference/threewebgpu/classes/nodematerial/#setupvariants)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setupVertex`](/reference/threewebgpu/classes/nodematerial/#setupvertex)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`setValues`](/reference/threewebgpu/classes/nodematerial/#setvalues)

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

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/).[`toJSON`](/reference/threewebgpu/classes/nodematerial/#tojson)

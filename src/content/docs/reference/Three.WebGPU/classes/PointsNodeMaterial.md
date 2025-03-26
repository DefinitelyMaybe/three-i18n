---
editUrl: false
next: false
prev: false
title: "PointsNodeMaterial"
---

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:18](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L18)

Node material version of [PointsMaterial](/reference/three/classes/pointsmaterial/).

## Extends

- [`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/)

## Constructors

### Constructor

> **new PointsNodeMaterial**(`parameters`?): `PointsNodeMaterial`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L31)

Constructs a new points node material.

#### Parameters

##### parameters?

`any`

The configuration parameter.

#### Returns

`PointsNodeMaterial`

#### Overrides

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`constructor`](/reference/threewebgpu/classes/spritenodematerial/#constructor)

## Properties

### \_alphaTest

> **\_alphaTest**: `number`

Defined in: [three/src/materials/Material.js:474](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L474)

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`_alphaTest`](/reference/threewebgpu/classes/spritenodematerial/#_alphatest)

***

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`_listeners`](/reference/threewebgpu/classes/spritenodematerial/#_listeners)

***

### \_useAlphaToCoverage

> **\_useAlphaToCoverage**: `any`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:144](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L144)

***

### \_useSizeAttenuation

> **\_useSizeAttenuation**: `boolean`

Defined in: [three/src/materials/nodes/SpriteNodeMaterial.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/SpriteNodeMaterial.js#L45)

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`_useSizeAttenuation`](/reference/threewebgpu/classes/spritenodematerial/#_usesizeattenuation)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`allowOverride`](/reference/threewebgpu/classes/spritenodematerial/#allowoverride)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`alphaHash`](/reference/threewebgpu/classes/spritenodematerial/#alphahash)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`alphaTestNode`](/reference/threewebgpu/classes/spritenodematerial/#alphatestnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`aoNode`](/reference/threewebgpu/classes/spritenodematerial/#aonode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`backdropAlphaNode`](/reference/threewebgpu/classes/spritenodematerial/#backdropalphanode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`backdropNode`](/reference/threewebgpu/classes/spritenodematerial/#backdropnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blendAlpha`](/reference/threewebgpu/classes/spritenodematerial/#blendalpha)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blendColor`](/reference/threewebgpu/classes/spritenodematerial/#blendcolor)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blendDst`](/reference/threewebgpu/classes/spritenodematerial/#blenddst)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blendDstAlpha`](/reference/threewebgpu/classes/spritenodematerial/#blenddstalpha)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blendEquation`](/reference/threewebgpu/classes/spritenodematerial/#blendequation)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blendEquationAlpha`](/reference/threewebgpu/classes/spritenodematerial/#blendequationalpha)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blending`](/reference/threewebgpu/classes/spritenodematerial/#blending)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blendSrc`](/reference/threewebgpu/classes/spritenodematerial/#blendsrc)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`blendSrcAlpha`](/reference/threewebgpu/classes/spritenodematerial/#blendsrcalpha)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`castShadowNode`](/reference/threewebgpu/classes/spritenodematerial/#castshadownode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`clipIntersection`](/reference/threewebgpu/classes/spritenodematerial/#clipintersection)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`clippingPlanes`](/reference/threewebgpu/classes/spritenodematerial/#clippingplanes)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`clipShadows`](/reference/threewebgpu/classes/spritenodematerial/#clipshadows)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`colorNode`](/reference/threewebgpu/classes/spritenodematerial/#colornode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`colorWrite`](/reference/threewebgpu/classes/spritenodematerial/#colorwrite)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`depthFunc`](/reference/threewebgpu/classes/spritenodematerial/#depthfunc)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`depthNode`](/reference/threewebgpu/classes/spritenodematerial/#depthnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`depthTest`](/reference/threewebgpu/classes/spritenodematerial/#depthtest)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`depthWrite`](/reference/threewebgpu/classes/spritenodematerial/#depthwrite)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`dithering`](/reference/threewebgpu/classes/spritenodematerial/#dithering)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`envNode`](/reference/threewebgpu/classes/spritenodematerial/#envnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`fog`](/reference/threewebgpu/classes/spritenodematerial/#fog)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`forceSinglePass`](/reference/threewebgpu/classes/spritenodematerial/#forcesinglepass)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`fragmentNode`](/reference/threewebgpu/classes/spritenodematerial/#fragmentnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`geometryNode`](/reference/threewebgpu/classes/spritenodematerial/#geometrynode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`hardwareClipping`](/reference/threewebgpu/classes/spritenodematerial/#hardwareclipping)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`isMaterial`](/reference/threewebgpu/classes/spritenodematerial/#ismaterial)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`isNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/#isnodematerial)

***

### isPointsNodeMaterial

> `readonly` **isPointsNodeMaterial**: `boolean`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L50)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### isSpriteNodeMaterial

> `readonly` **isSpriteNodeMaterial**: `boolean`

Defined in: [three/src/materials/nodes/SpriteNodeMaterial.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/SpriteNodeMaterial.js#L43)

This flag can be used for type testing.

#### Default

```ts
true
```

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`isSpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/#isspritenodematerial)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`lights`](/reference/threewebgpu/classes/spritenodematerial/#lights)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`lightsNode`](/reference/threewebgpu/classes/spritenodematerial/#lightsnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`mrtNode`](/reference/threewebgpu/classes/spritenodematerial/#mrtnode)

***

### name

> **name**: `string`

Defined in: [three/src/materials/Material.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L56)

The name of the material.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`name`](/reference/threewebgpu/classes/spritenodematerial/#name)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`normalNode`](/reference/threewebgpu/classes/spritenodematerial/#normalnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`opacity`](/reference/threewebgpu/classes/spritenodematerial/#opacity)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`opacityNode`](/reference/threewebgpu/classes/spritenodematerial/#opacitynode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`outputNode`](/reference/threewebgpu/classes/spritenodematerial/#outputnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`polygonOffset`](/reference/threewebgpu/classes/spritenodematerial/#polygonoffset)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`polygonOffsetFactor`](/reference/threewebgpu/classes/spritenodematerial/#polygonoffsetfactor)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`polygonOffsetUnits`](/reference/threewebgpu/classes/spritenodematerial/#polygonoffsetunits)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`positionNode`](/reference/threewebgpu/classes/spritenodematerial/#positionnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`precision`](/reference/threewebgpu/classes/spritenodematerial/#precision)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`premultipliedAlpha`](/reference/threewebgpu/classes/spritenodematerial/#premultipliedalpha)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`receivedShadowNode`](/reference/threewebgpu/classes/spritenodematerial/#receivedshadownode)

***

### rotationNode

> **rotationNode**: `any`

Defined in: [three/src/materials/nodes/SpriteNodeMaterial.js:77](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/SpriteNodeMaterial.js#L77)

The rotation of sprite materials is by default inferred from the `rotation`,
property. This node property allows to overwrite the default and define
the rotation with a node instead.

If you don't want to overwrite the rotation but modify the existing
value instead, use [materialRotation](/reference/threewebgpu/namespaces/tsl/variables/materialrotation/).

#### Default

```ts
null
```

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`rotationNode`](/reference/threewebgpu/classes/spritenodematerial/#rotationnode)

***

### scaleNode

> **scaleNode**: `any`

Defined in: [three/src/materials/nodes/SpriteNodeMaterial.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/SpriteNodeMaterial.js#L87)

This node property provides an additional way to scale sprites next to
`Object3D.scale`. The scale transformation based in `Object3D.scale`
is multiplied with the scale value of this node in the vertex shader.

#### Default

```ts
null
```

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`scaleNode`](/reference/threewebgpu/classes/spritenodematerial/#scalenode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`shadowPositionNode`](/reference/threewebgpu/classes/spritenodematerial/#shadowpositionnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`shadowSide`](/reference/threewebgpu/classes/spritenodematerial/#shadowside)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`side`](/reference/threewebgpu/classes/spritenodematerial/#side)

***

### sizeNode

> **sizeNode**: `any`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:41](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L41)

This node property provides an additional way to set the point size.

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`stencilFail`](/reference/threewebgpu/classes/spritenodematerial/#stencilfail)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`stencilFunc`](/reference/threewebgpu/classes/spritenodematerial/#stencilfunc)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`stencilFuncMask`](/reference/threewebgpu/classes/spritenodematerial/#stencilfuncmask)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`stencilRef`](/reference/threewebgpu/classes/spritenodematerial/#stencilref)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`stencilWrite`](/reference/threewebgpu/classes/spritenodematerial/#stencilwrite)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`stencilWriteMask`](/reference/threewebgpu/classes/spritenodematerial/#stencilwritemask)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`stencilZFail`](/reference/threewebgpu/classes/spritenodematerial/#stencilzfail)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`stencilZPass`](/reference/threewebgpu/classes/spritenodematerial/#stencilzpass)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`toneMapped`](/reference/threewebgpu/classes/spritenodematerial/#tonemapped)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`transparent`](/reference/threewebgpu/classes/spritenodematerial/#transparent)

***

### userData

> **userData**: `any`

Defined in: [three/src/materials/Material.js:463](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L463)

An object that can be used to store custom data about the Material. It
should not hold references to functions as these will not be cloned.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`userData`](/reference/threewebgpu/classes/spritenodematerial/#userdata)

***

### uuid

> `readonly` **uuid**: `string`

Defined in: [three/src/materials/Material.js:49](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L49)

The UUID of the material.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`uuid`](/reference/threewebgpu/classes/spritenodematerial/#uuid)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`version`](/reference/threewebgpu/classes/spritenodematerial/#version)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`vertexColors`](/reference/threewebgpu/classes/spritenodematerial/#vertexcolors)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`vertexNode`](/reference/threewebgpu/classes/spritenodematerial/#vertexnode)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`visible`](/reference/threewebgpu/classes/spritenodematerial/#visible)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`alphaTest`](/reference/threewebgpu/classes/spritenodematerial/#alphatest)

***

### alphaToCoverage

#### Get Signature

> **get** **alphaToCoverage**(): `boolean`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L134)

Whether alpha to coverage should be used or not.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **alphaToCoverage**(`value`): `void`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L140)

Whether alpha to coverage should be enabled or not. Can only be used with MSAA-enabled contexts
(meaning when the renderer was created with *antialias* parameter set to `true`). Enabling this
will smooth aliasing on clip plane edges and alphaTest-clipped edges.

##### Default

```ts
false
```

##### Parameters

###### value

`boolean`

##### Returns

`void`

Whether alpha to coverage should be enabled or not. Can only be used with MSAA-enabled contexts
(meaning when the renderer was created with *antialias* parameter set to `true`). Enabling this
will smooth aliasing on clip plane edges and alphaTest-clipped edges.

#### Default

```ts
false
```

#### Overrides

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`alphaToCoverage`](/reference/threewebgpu/classes/spritenodematerial/#alphatocoverage)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`needsUpdate`](/reference/threewebgpu/classes/spritenodematerial/#needsupdate)

***

### sizeAttenuation

#### Get Signature

> **get** **sizeAttenuation**(): `boolean`

Defined in: [three/src/materials/nodes/SpriteNodeMaterial.js:179](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/SpriteNodeMaterial.js#L179)

Whether to use size attenuation or not.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **sizeAttenuation**(`value`): `void`

Defined in: [three/src/materials/nodes/SpriteNodeMaterial.js:185](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/SpriteNodeMaterial.js#L185)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`sizeAttenuation`](/reference/threewebgpu/classes/spritenodematerial/#sizeattenuation)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`type`](/reference/threewebgpu/classes/spritenodematerial/#type)

***

### type

#### Get Signature

> **get** `static` **type**(): `string`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L20)

##### Returns

`string`

#### Overrides

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`type`](/reference/threewebgpu/classes/spritenodematerial/#type-1)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`addEventListener`](/reference/threewebgpu/classes/spritenodematerial/#addeventlistener)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`build`](/reference/threewebgpu/classes/spritenodematerial/#build)

***

### clone()

> **clone**(): [`Material`](/reference/three/classes/material/)

Defined in: [three/src/materials/Material.js:875](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L875)

Returns a new material with copied values from this instance.

#### Returns

[`Material`](/reference/three/classes/material/)

A clone of this instance.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`clone`](/reference/threewebgpu/classes/spritenodematerial/#clone)

***

### copy()

> **copy**(`source`): [`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

Defined in: [three/src/materials/nodes/SpriteNodeMaterial.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/SpriteNodeMaterial.js#L163)

Copies the properties of the given node material to this instance.

#### Parameters

##### source

`any`

The material to copy.

#### Returns

[`NodeMaterial`](/reference/threewebgpu/classes/nodematerial/)

A reference to this node material.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`copy`](/reference/threewebgpu/classes/spritenodematerial/#copy)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`customProgramCacheKey`](/reference/threewebgpu/classes/spritenodematerial/#customprogramcachekey)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`dispatchEvent`](/reference/threewebgpu/classes/spritenodematerial/#dispatchevent)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`dispose`](/reference/threewebgpu/classes/spritenodematerial/#dispose)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`hasEventListener`](/reference/threewebgpu/classes/spritenodematerial/#haseventlistener)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`onBeforeCompile`](/reference/threewebgpu/classes/spritenodematerial/#onbeforecompile)

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/src/materials/Material.js:516](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L516)

An optional callback that is executed immediately before the material is used to render a 3D object.

This method can only be used when rendering with WebGLRenderer.

#### Returns

`void`

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`onBeforeRender`](/reference/threewebgpu/classes/spritenodematerial/#onbeforerender)

***

### onBuild()

> **onBuild**(): `void`

Defined in: [three/src/materials/Material.js:1000](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/Material.js#L1000)

#### Returns

`void`

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`onBuild`](/reference/threewebgpu/classes/spritenodematerial/#onbuild)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`removeEventListener`](/reference/threewebgpu/classes/spritenodematerial/#removeeventlistener)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setDefaultValues`](/reference/threewebgpu/classes/spritenodematerial/#setdefaultvalues)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setup`](/reference/threewebgpu/classes/spritenodematerial/#setup)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupClipping`](/reference/threewebgpu/classes/spritenodematerial/#setupclipping)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupDepth`](/reference/threewebgpu/classes/spritenodematerial/#setupdepth)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupDiffuseColor`](/reference/threewebgpu/classes/spritenodematerial/#setupdiffusecolor)

***

### setupEnvironment()

> **setupEnvironment**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:851](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L851)

Setups the environment node from the material.

#### Returns

`any`

The environment node.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupEnvironment`](/reference/threewebgpu/classes/spritenodematerial/#setupenvironment)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupFog`](/reference/threewebgpu/classes/spritenodematerial/#setupfog)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupHardwareClipping`](/reference/threewebgpu/classes/spritenodematerial/#setuphardwareclipping)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupLighting`](/reference/threewebgpu/classes/spritenodematerial/#setuplighting)

***

### setupLightingModel()

> `abstract` **setupLightingModel**(): `LightingModel`

Defined in: [three/src/materials/nodes/NodeMaterial.js:945](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L945)

This method should be implemented by most derived materials
since it defines the material's lighting model.

#### Returns

`LightingModel`

The lighting model.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupLightingModel`](/reference/threewebgpu/classes/spritenodematerial/#setuplightingmodel)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupLightMap`](/reference/threewebgpu/classes/spritenodematerial/#setuplightmap)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupLights`](/reference/threewebgpu/classes/spritenodematerial/#setuplights)

***

### setupModelViewProjection()

> **setupModelViewProjection**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:660](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L660)

Setups the position in clip space.

#### Returns

`any`

The position in view space.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupModelViewProjection`](/reference/threewebgpu/classes/spritenodematerial/#setupmodelviewprojection)

***

### setupNormal()

> **setupNormal**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:839](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L839)

Setups the normal node from the material.

#### Returns

`any`

The normal node.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupNormal`](/reference/threewebgpu/classes/spritenodematerial/#setupnormal)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupObserver`](/reference/threewebgpu/classes/spritenodematerial/#setupobserver)

***

### setupOutgoingLight()

> **setupOutgoingLight**(): `any`

Defined in: [three/src/materials/nodes/NodeMaterial.js:828](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L828)

Setups the outgoing light node variable

#### Returns

`any`

The outgoing light node.

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupOutgoingLight`](/reference/threewebgpu/classes/spritenodematerial/#setupoutgoinglight)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupOutput`](/reference/threewebgpu/classes/spritenodematerial/#setupoutput)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupPosition`](/reference/threewebgpu/classes/spritenodematerial/#setupposition)

***

### setupPositionView()

> **setupPositionView**(): `any`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L58)

Setups the position node in view space. This method implements
the sprite specific vertex shader.

#### Returns

`any`

The position in view space.

#### Overrides

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupPositionView`](/reference/threewebgpu/classes/spritenodematerial/#setuppositionview)

***

### setupVariants()

> `abstract` **setupVariants**(): `void`

Defined in: [three/src/materials/nodes/NodeMaterial.js:817](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/NodeMaterial.js#L817)

Abstract interface method that can be implemented by derived materials
to setup material-specific node variables.

#### Returns

`void`

#### Inherited from

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupVariants`](/reference/threewebgpu/classes/spritenodematerial/#setupvariants)

***

### setupVertex()

> **setupVertex**(`builder`): `any`

Defined in: [three/src/materials/nodes/PointsNodeMaterial.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/PointsNodeMaterial.js#L66)

Setups the logic for the vertex stage.

#### Parameters

##### builder

`any`

The current node builder.

#### Returns

`any`

The position in clip space.

#### Overrides

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setupVertex`](/reference/threewebgpu/classes/spritenodematerial/#setupvertex)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`setValues`](/reference/threewebgpu/classes/spritenodematerial/#setvalues)

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

[`SpriteNodeMaterial`](/reference/threewebgpu/classes/spritenodematerial/).[`toJSON`](/reference/threewebgpu/classes/spritenodematerial/#tojson)

---
editUrl: false
next: false
prev: false
title: "PhysicalLightingModel"
---

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:350](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L350)

Represents the lighting model for a PBR material.

## Extends

- [`LightingModel`](/reference/threewebgpu/classes/lightingmodel/)

## Constructors

### Constructor

> **new PhysicalLightingModel**(`clearcoat`?, `sheen`?, `iridescence`?, `anisotropy`?, `transmission`?, `dispersion`?): `PhysicalLightingModel`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:362](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L362)

Constructs a new physical lighting model.

#### Parameters

##### clearcoat?

`boolean` = `false`

Whether clearcoat is supported or not.

##### sheen?

`boolean` = `false`

Whether sheen is supported or not.

##### iridescence?

`boolean` = `false`

Whether iridescence is supported or not.

##### anisotropy?

`boolean` = `false`

Whether anisotropy is supported or not.

##### transmission?

`boolean` = `false`

Whether transmission is supported or not.

##### dispersion?

`boolean` = `false`

Whether dispersion is supported or not.

#### Returns

`PhysicalLightingModel`

#### Overrides

[`LightingModel`](/reference/threewebgpu/classes/lightingmodel/).[`constructor`](/reference/threewebgpu/classes/lightingmodel/#constructor)

## Properties

### anisotropy

> **anisotropy**: `boolean`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:396](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L396)

Whether anisotropy is supported or not.

#### Default

```ts
false
```

***

### clearcoat

> **clearcoat**: `boolean`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:372](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L372)

Whether clearcoat is supported or not.

#### Default

```ts
false
```

***

### clearcoatRadiance

> **clearcoatRadiance**: `Node`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:420](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L420)

The clear coat radiance.

#### Default

```ts
null
```

***

### clearcoatSpecularDirect

> **clearcoatSpecularDirect**: `Node`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:428](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L428)

The clear coat specular direct.

#### Default

```ts
null
```

***

### clearcoatSpecularIndirect

> **clearcoatSpecularIndirect**: `Node`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:436](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L436)

The clear coat specular indirect.

#### Default

```ts
null
```

***

### dispersion

> **dispersion**: `boolean`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:412](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L412)

Whether dispersion is supported or not.

#### Default

```ts
false
```

***

### iridescence

> **iridescence**: `boolean`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:388](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L388)

Whether iridescence is supported or not.

#### Default

```ts
false
```

***

### iridescenceF0

> **iridescenceF0**: `Node`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:468](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L468)

The iridescence F0.

#### Default

```ts
null
```

***

### iridescenceFresnel

> **iridescenceFresnel**: `Node`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:460](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L460)

The iridescence Fresnel.

#### Default

```ts
null
```

***

### sheen

> **sheen**: `boolean`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:380](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L380)

Whether sheen is supported or not.

#### Default

```ts
false
```

***

### sheenSpecularDirect

> **sheenSpecularDirect**: `Node`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:444](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L444)

The sheen specular direct.

#### Default

```ts
null
```

***

### sheenSpecularIndirect

> **sheenSpecularIndirect**: `Node`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:452](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L452)

The sheen specular indirect.

#### Default

```ts
null
```

***

### transmission

> **transmission**: `boolean`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:404](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L404)

Whether transmission is supported or not.

#### Default

```ts
false
```

## Methods

### ambientOcclusion()

> **ambientOcclusion**(`builder`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:730](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L730)

Implements the ambient occlusion term.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Overrides

[`LightingModel`](/reference/threewebgpu/classes/lightingmodel/).[`ambientOcclusion`](/reference/threewebgpu/classes/lightingmodel/#ambientocclusion)

***

### computeMultiscattering()

> **computeMultiscattering**(`singleScatter`, `multiScatter`, `specularF90`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:551](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L551)

#### Parameters

##### singleScatter

`any`

##### multiScatter

`any`

##### specularF90

`any`

#### Returns

`void`

***

### direct()

> **direct**(`__namedParameters`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:578](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L578)

Implements the direct light.

#### Parameters

##### \_\_namedParameters

`any`

#### Returns

`void`

#### Overrides

[`LightingModel`](/reference/threewebgpu/classes/lightingmodel/).[`direct`](/reference/threewebgpu/classes/lightingmodel/#direct)

***

### directRectArea()

> **directRectArea**(`__namedParameters`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:611](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L611)

This method is intended for implementing the direct light term for
rect area light nodes.

#### Parameters

##### \_\_namedParameters

`any`

#### Returns

`void`

#### Overrides

[`LightingModel`](/reference/threewebgpu/classes/lightingmodel/).[`directRectArea`](/reference/threewebgpu/classes/lightingmodel/#directrectarea)

***

### finish()

> **finish**(`builder`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:763](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L763)

Used for final lighting accumulations depending on the requested features.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Overrides

[`LightingModel`](/reference/threewebgpu/classes/lightingmodel/).[`finish`](/reference/threewebgpu/classes/lightingmodel/#finish)

***

### indirect()

> **indirect**(`builder`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:648](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L648)

Implements the indirect lighting.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Overrides

[`LightingModel`](/reference/threewebgpu/classes/lightingmodel/).[`indirect`](/reference/threewebgpu/classes/lightingmodel/#indirect)

***

### indirectDiffuse()

> **indirectDiffuse**(`builder`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:661](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L661)

Implements the indirect diffuse term.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

***

### indirectSpecular()

> **indirectSpecular**(`builder`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:674](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L674)

Implements the indirect specular term.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

***

### start()

> **start**(`builder`): `void`

Defined in: [three/src/nodes/functions/PhysicalLightingModel.js:478](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhysicalLightingModel.js#L478)

Depending on what features are requested, the method prepares certain node variables
which are later used for lighting computations.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Overrides

[`LightingModel`](/reference/threewebgpu/classes/lightingmodel/).[`start`](/reference/threewebgpu/classes/lightingmodel/#start)

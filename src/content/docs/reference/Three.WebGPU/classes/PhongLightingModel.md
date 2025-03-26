---
editUrl: false
next: false
prev: false
title: "PhongLightingModel"
---

Defined in: [three/src/nodes/functions/PhongLightingModel.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhongLightingModel.js#L38)

Represents the lighting model for a phong material. Used in [MeshPhongNodeMaterial](/reference/threewebgpu/classes/meshphongnodematerial/).

## Extends

- `BasicLightingModel`

## Constructors

### Constructor

> **new PhongLightingModel**(`specular`?): `PhongLightingModel`

Defined in: [three/src/nodes/functions/PhongLightingModel.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhongLightingModel.js#L45)

Constructs a new phong lighting model.

#### Parameters

##### specular?

`boolean` = `true`

Whether specular is supported or not.

#### Returns

`PhongLightingModel`

#### Overrides

`BasicLightingModel.constructor`

## Properties

### specular

> **specular**: `boolean`

Defined in: [three/src/nodes/functions/PhongLightingModel.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhongLightingModel.js#L57)

Whether specular is supported or not. Set this to `false` if you are
looking for a Lambert-like material meaning a material for non-shiny
surfaces, without specular highlights.

#### Default

```ts
true
```

## Methods

### ambientOcclusion()

> `abstract` **ambientOcclusion**(): `void`

Defined in: [three/src/nodes/core/LightingModel.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L73)

This method is intended for implementing the ambient occlusion term.
Unlike other methods, this method must be called manually by the lighting
model in its indirect term.

#### Returns

`void`

#### Inherited from

`BasicLightingModel.ambientOcclusion`

***

### direct()

> **direct**(`lightData`): `void`

Defined in: [three/src/nodes/functions/PhongLightingModel.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhongLightingModel.js#L67)

Implements the direct lighting. The specular portion is optional an can be controlled
with the [PhongLightingModel#specular](/reference/threewebgpu/classes/phonglightingmodel/#specular) flag.

#### Parameters

##### lightData

`any`

The light data.

#### Returns

`void`

#### Overrides

`BasicLightingModel.direct`

***

### directRectArea()

> `abstract` **directRectArea**(): `void`

Defined in: [three/src/nodes/core/LightingModel.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L55)

This method is intended for implementing the direct light term for
rect area light nodes.

#### Returns

`void`

#### Inherited from

`BasicLightingModel.directRectArea`

***

### finish()

> **finish**(`builder`): `void`

Defined in: [three/src/nodes/functions/BasicLightingModel.js:64](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/BasicLightingModel.js#L64)

Implements the environment mapping.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

`BasicLightingModel.finish`

***

### indirect()

> **indirect**(`builder`): `void`

Defined in: [three/src/nodes/functions/PhongLightingModel.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/functions/PhongLightingModel.js#L87)

Implements the indirect lighting.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Overrides

`BasicLightingModel.indirect`

***

### start()

> `abstract` **start**(`builder`): `void`

Defined in: [three/src/nodes/core/LightingModel.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L16)

This method is intended for setting up lighting model and context data
which are later used in the evaluation process.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`void`

#### Inherited from

`BasicLightingModel.start`

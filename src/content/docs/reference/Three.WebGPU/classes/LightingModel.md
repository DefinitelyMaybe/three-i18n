---
editUrl: false
next: false
prev: false
title: "LightingModel"
---

Defined in: [three/src/nodes/core/LightingModel.js:7](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L7)

Abstract class for implementing lighting models. The module defines
multiple methods that concrete lighting models can implement. These
methods are executed at different points during the light evaluation
process.

## Extended by

- [`PhysicalLightingModel`](/reference/threewebgpu/classes/physicallightingmodel/)

## Constructors

### Constructor

> **new LightingModel**(): `LightingModel`

#### Returns

`LightingModel`

## Methods

### ambientOcclusion()

> `abstract` **ambientOcclusion**(): `void`

Defined in: [three/src/nodes/core/LightingModel.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L73)

This method is intended for implementing the ambient occlusion term.
Unlike other methods, this method must be called manually by the lighting
model in its indirect term.

#### Returns

`void`

***

### direct()

> `abstract` **direct**(): `void`

Defined in: [three/src/nodes/core/LightingModel.js:45](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L45)

This method is intended for implementing the direct light term and
executed during the build process of directional, point and spot light nodes.

#### Returns

`void`

***

### directRectArea()

> `abstract` **directRectArea**(): `void`

Defined in: [three/src/nodes/core/LightingModel.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L55)

This method is intended for implementing the direct light term for
rect area light nodes.

#### Returns

`void`

***

### finish()

> `abstract` **finish**(): `void`

Defined in: [three/src/nodes/core/LightingModel.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L35)

This method is intended for executing final tasks like final updates
to the outgoing light.

#### Returns

`void`

***

### indirect()

> `abstract` **indirect**(): `void`

Defined in: [three/src/nodes/core/LightingModel.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/LightingModel.js#L63)

This method is intended for implementing the indirect light term.

#### Returns

`void`

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

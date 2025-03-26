---
editUrl: false
next: false
prev: false
title: "NodeMaterialObserver"
---

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L59)

This class is used by [WebGPURenderer](/reference/threewebgpu/classes/webgpurenderer/) as management component.
It's primary purpose is to determine whether render objects require a
refresh right before they are going to be rendered or not.

## Constructors

### Constructor

> **new NodeMaterialObserver**(`builder`): `NodeMaterialObserver`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L66)

Constructs a new node material observer.

#### Parameters

##### builder

`NodeBuilder`

The node builder.

#### Returns

`NodeMaterialObserver`

## Properties

### hasAnimation

> **hasAnimation**: `boolean`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L88)

Whether the node builder's 3D object is animated or not.

***

### hasNode

> **hasNode**: `boolean`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:81](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L81)

Whether the material uses node objects or not.

***

### refreshUniforms

> **refreshUniforms**: `string`[]

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:95](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L95)

A list of all possible material uniforms

***

### renderId

> **renderId**: `number`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L103)

Holds the current render ID from the node frame.

#### Default

```ts
0
```

***

### renderObjects

> **renderObjects**: `WeakMap`\<`RenderObject`, `any`\>

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L74)

A node material can be used by more than one render object so the
monitor must maintain a list of render objects.

## Methods

### containsNode()

> **containsNode**(`builder`): `boolean`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:221](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L221)

Returns `true` if the node builder's material uses
node properties.

#### Parameters

##### builder

`NodeBuilder`

The current node builder.

#### Returns

`boolean`

Whether the node builder's material uses node properties or not.

***

### equals()

> **equals**(`renderObject`): `boolean`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:286](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L286)

Returns `true` if the given render object has not changed its state.

#### Parameters

##### renderObject

`RenderObject`

The render object.

#### Returns

`boolean`

Whether the given render object has changed its state or not.

***

### firstInitialization()

> **firstInitialization**(`renderObject`): `boolean`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L113)

Returns `true` if the given render object is verified for the first time of this observer.

#### Parameters

##### renderObject

`RenderObject`

The render object.

#### Returns

`boolean`

Whether the given render object is verified for the first time of this observer.

***

### getAttributesData()

> **getAttributesData**(`attributes`): `any`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:196](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L196)

Returns an attribute data structure holding the attributes versions for
monitoring.

#### Parameters

##### attributes

`any`

The geometry attributes.

#### Returns

`any`

An object for monitoring the versions of attributes.

***

### getMaterialData()

> **getMaterialData**(`material`): `any`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:246](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L246)

Returns a material data structure holding the material property values for
monitoring.

#### Parameters

##### material

`Material`

The material.

#### Returns

`any`

An object for monitoring material properties.

***

### getRenderObjectData()

> **getRenderObjectData**(`renderObject`): `any`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L135)

Returns monitoring data for the given render object.

#### Parameters

##### renderObject

`RenderObject`

The render object.

#### Returns

`any`

The monitoring data.

***

### needsRefresh()

> **needsRefresh**(`renderObject`, `nodeFrame`): `boolean`

Defined in: [three/src/materials/nodes/manager/NodeMaterialObserver.js:480](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/materials/nodes/manager/NodeMaterialObserver.js#L480)

Checks if the given render object requires a refresh.

#### Parameters

##### renderObject

`RenderObject`

The render object.

##### nodeFrame

`NodeFrame`

The current node frame.

#### Returns

`boolean`

Whether the given render object requires a refresh or not.

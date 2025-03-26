---
editUrl: false
next: false
prev: false
title: "reflector"
---

> **reflector**(`parameters`?): [`ReflectorNode`](/reference/threewebgpu/classes/reflectornode/)

Defined in: [three/src/nodes/utils/ReflectorNode.js:507](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/utils/ReflectorNode.js#L507)

TSL function for creating a reflector node.

## Parameters

### parameters?

An object holding configuration parameters.

#### bounces?

`boolean`

Whether reflectors can render other reflector nodes or not.

#### defaultTexture?

[`TextureNode`](/reference/threewebgpu/classes/texturenode/)

The default texture node.

#### depth?

`boolean`

Whether depth data should be generated or not.

#### generateMipmaps?

`boolean`

Whether mipmaps should be generated or not.

#### reflector?

`ReflectorBaseNode`

The reflector base node.

#### resolution?

`number`

The resolution scale.

#### target?

[`Object3D`](/reference/three/classes/object3d/)

The 3D object the reflector is linked to.

## Returns

[`ReflectorNode`](/reference/threewebgpu/classes/reflectornode/)

## Tsl

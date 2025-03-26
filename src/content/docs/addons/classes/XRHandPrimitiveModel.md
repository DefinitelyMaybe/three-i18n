---
editUrl: false
next: false
prev: false
title: "XRHandPrimitiveModel"
---

Defined in: [three/addons/webxr/XRHandPrimitiveModel.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandPrimitiveModel.js#L19)

Represents one of the hand model types [XRHandModelFactory](/addons/classes/xrhandmodelfactory/) might produce
depending on the selected profile. `XRHandPrimitiveModel` represents a hand
with sphere or box primitives according to the selected `primitive` option.

## Constructors

### Constructor

> **new XRHandPrimitiveModel**(`handModel`, `controller`, `path`, `handedness`, `options`): `XRHandPrimitiveModel`

Defined in: [three/addons/webxr/XRHandPrimitiveModel.js:30](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandPrimitiveModel.js#L30)

Constructs a new XR hand primitive model.

#### Parameters

##### handModel

`XRHandModel`

The hand model.

##### controller

`Group`

The WebXR controller.

##### path

`string`

The model path.

##### handedness

`XRHandedness`

The handedness of the XR input source.

##### options

`any`

The model options.

#### Returns

`XRHandPrimitiveModel`

## Properties

### controller

> **controller**: `Group`

Defined in: [three/addons/webxr/XRHandPrimitiveModel.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandPrimitiveModel.js#L37)

The WebXR controller.

***

### envMap

> **envMap**: `Texture`

Defined in: [three/addons/webxr/XRHandPrimitiveModel.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandPrimitiveModel.js#L52)

The model's environment map.

#### Default

```ts
null
```

***

### handMesh

> **handMesh**: `any`

Defined in: [three/addons/webxr/XRHandPrimitiveModel.js:68](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandPrimitiveModel.js#L68)

***

### handModel

> **handModel**: `XRHandModel`

Defined in: [three/addons/webxr/XRHandPrimitiveModel.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandPrimitiveModel.js#L44)

The hand model.

***

### joints

> **joints**: `string`[]

Defined in: [three/addons/webxr/XRHandPrimitiveModel.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandPrimitiveModel.js#L75)

## Methods

### updateMesh()

> **updateMesh**(): `void`

Defined in: [three/addons/webxr/XRHandPrimitiveModel.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandPrimitiveModel.js#L108)

Updates the mesh based on the tracked XR joints data.

#### Returns

`void`

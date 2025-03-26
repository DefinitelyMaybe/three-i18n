---
editUrl: false
next: false
prev: false
title: "XRHandMeshModel"
---

Defined in: [three/addons/webxr/XRHandMeshModel.js:10](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandMeshModel.js#L10)

Represents one of the hand model types [XRHandModelFactory](/addons/classes/xrhandmodelfactory/) might produce
depending on the selected profile. `XRHandMeshModel` represents a hand with a
custom asset.

## Constructors

### Constructor

> **new XRHandMeshModel**(`handModel`, `controller`, `path`, `handedness`, `loader`?, `onLoad`?): `XRHandMeshModel`

Defined in: [three/addons/webxr/XRHandMeshModel.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandMeshModel.js#L22)

Constructs a new XR hand mesh model.

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

##### loader?

`Loader` = `null`

The loader. If not provided, an instance of `GLTFLoader` will be used to load models.

##### onLoad?

`Function` = `null`

A callback that is executed when a controller model has been loaded.

#### Returns

`XRHandMeshModel`

## Properties

### bones

> **bones**: `Bone`[]

Defined in: [three/addons/webxr/XRHandMeshModel.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandMeshModel.js#L44)

An array of bones representing the bones
of the hand skeleton.

***

### controller

> **controller**: `Group`

Defined in: [three/addons/webxr/XRHandMeshModel.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandMeshModel.js#L29)

The WebXR controller.

***

### handModel

> **handModel**: `XRHandModel`

Defined in: [three/addons/webxr/XRHandMeshModel.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandMeshModel.js#L36)

The hand model.

## Methods

### updateMesh()

> **updateMesh**(): `void`

Defined in: [three/addons/webxr/XRHandMeshModel.js:118](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandMeshModel.js#L118)

Updates the mesh based on the tracked XR joints data.

#### Returns

`void`

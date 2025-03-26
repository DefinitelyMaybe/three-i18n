---
editUrl: false
next: false
prev: false
title: "XRControllerModelFactory"
---

Defined in: [three/addons/webxr/XRControllerModelFactory.js:259](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRControllerModelFactory.js#L259)

Allows to create controller models for WebXR controllers that can be added as a visual
representation to your scene. `XRControllerModelFactory` will automatically fetch controller
models that match what the user is holding as closely as possible. The models should be
attached to the object returned from getControllerGrip in order to match the orientation of
the held device.

This module depends on the [motion-controllers][https://github.com/immersive-web/webxr-input-profiles/blob/main/packages/motion-controllers/README.md](https://github.com/immersive-web/webxr-input-profiles/blob/main/packages/motion-controllers/README.md)
third-part library.

```js
const controllerModelFactory = new XRControllerModelFactory();

const controllerGrip = renderer.xr.getControllerGrip( 0 );
controllerGrip.add( controllerModelFactory.createControllerModel( controllerGrip ) );
scene.add( controllerGrip );
```

## Constructors

### Constructor

> **new XRControllerModelFactory**(`gltfLoader`?, `onLoad`?): `XRControllerModelFactory`

Defined in: [three/addons/webxr/XRControllerModelFactory.js:267](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRControllerModelFactory.js#L267)

Constructs a new XR controller model factory.

#### Parameters

##### gltfLoader?

[`GLTFLoader`](/addons/classes/gltfloader/) = `null`

A glTF loader that is used to load controller models.

##### onLoad?

`Function` = `null`

A callback that is executed when a controller model has been loaded.

#### Returns

`XRControllerModelFactory`

## Properties

### \_assetCache

> **\_assetCache**: `object`

Defined in: [three/addons/webxr/XRControllerModelFactory.js:283](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRControllerModelFactory.js#L283)

***

### gltfLoader

> **gltfLoader**: [`GLTFLoader`](/addons/classes/gltfloader/)

Defined in: [three/addons/webxr/XRControllerModelFactory.js:275](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRControllerModelFactory.js#L275)

A glTF loader that is used to load controller models.

#### Default

```ts
null
```

***

### onLoad

> **onLoad**: `Function`

Defined in: [three/addons/webxr/XRControllerModelFactory.js:291](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRControllerModelFactory.js#L291)

A callback that is executed when a controller model has been loaded.

#### Default

```ts
null
```

***

### path

> **path**: `string`

Defined in: [three/addons/webxr/XRControllerModelFactory.js:282](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRControllerModelFactory.js#L282)

The path to the model repository.

## Methods

### createControllerModel()

> **createControllerModel**(`controller`): `XRControllerModel`

Defined in: [three/addons/webxr/XRControllerModelFactory.js:322](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRControllerModelFactory.js#L322)

Creates a controller model for the given WebXR controller.

#### Parameters

##### controller

`Group`

The controller.

#### Returns

`XRControllerModel`

The XR controller model.

***

### setPath()

> **setPath**(`path`): `XRControllerModelFactory`

Defined in: [three/addons/webxr/XRControllerModelFactory.js:308](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRControllerModelFactory.js#L308)

Sets the path to the model repository.

#### Parameters

##### path

`string`

The path to set.

#### Returns

`XRControllerModelFactory`

A reference to this instance.

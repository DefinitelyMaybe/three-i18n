---
editUrl: false
next: false
prev: false
title: "XRHandModelFactory"
---

Defined in: [three/addons/webxr/XRHandModelFactory.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandModelFactory.js#L94)

Similar to [XRControllerModelFactory](/addons/classes/xrcontrollermodelfactory/), this class allows to create hand models
for WebXR controllers that can be added as a visual representation to your scene.

```js
const handModelFactory = new XRHandModelFactory();

const hand = renderer.xr.getHand( 0 );
hand.add( handModelFactory.createHandModel( hand ) );
scene.add( hand );
```

## Constructors

### Constructor

> **new XRHandModelFactory**(`gltfLoader`?, `onLoad`?): `XRHandModelFactory`

Defined in: [three/addons/webxr/XRHandModelFactory.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandModelFactory.js#L102)

Constructs a new XR hand model factory.

#### Parameters

##### gltfLoader?

`GLTFLoader` = `null`

A glTF loader that is used to load hand models.

##### onLoad?

`Function` = `null`

A callback that is executed when a hand model has been loaded.

#### Returns

`XRHandModelFactory`

## Properties

### gltfLoader

> **gltfLoader**: `GLTFLoader`

Defined in: [three/addons/webxr/XRHandModelFactory.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandModelFactory.js#L110)

A glTF loader that is used to load hand models.

#### Default

```ts
null
```

***

### onLoad

> **onLoad**: `Function`

Defined in: [three/addons/webxr/XRHandModelFactory.js:126](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandModelFactory.js#L126)

A callback that is executed when a hand model has been loaded.

#### Default

```ts
null
```

***

### path

> **path**: `string`

Defined in: [three/addons/webxr/XRHandModelFactory.js:118](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandModelFactory.js#L118)

The path to the model repository.

#### Default

```ts
null
```

## Methods

### createHandModel()

> **createHandModel**(`controller`, `profile`?): `XRHandModel`

Defined in: [three/addons/webxr/XRHandModelFactory.js:151](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandModelFactory.js#L151)

Creates a controller model for the given WebXR hand controller.

#### Parameters

##### controller

`Group`

The hand controller.

##### profile?

The model profile that defines the model type.

`"mesh"` | `"spheres"` | `"boxes"`

#### Returns

`XRHandModel`

The XR hand model.

***

### setPath()

> **setPath**(`path`): `XRHandModelFactory`

Defined in: [three/addons/webxr/XRHandModelFactory.js:136](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRHandModelFactory.js#L136)

Sets the path to the hand model repository.

#### Parameters

##### path

`string`

The path to set.

#### Returns

`XRHandModelFactory`

A reference to this instance.

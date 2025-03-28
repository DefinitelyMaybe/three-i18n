---
editUrl: false
next: false
prev: false
title: "Layers"
---

Defined in: [three/src/core/Layers.js:13](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L13)

A layers object assigns an 3D object to 1 or more of 32
layers numbered `0` to `31` - internally the layers are stored as a
bit mask], and by default all 3D objects are a member of layer `0`.

This can be used to control visibility - an object must share a layer with
a camera to be visible when that camera's view is
rendered.

All classes that inherit from [Object3D](/reference/three/classes/object3d/) have an `layers` property which
is an instance of this class.

## Constructors

### Constructor

> **new Layers**(): `Layers`

Defined in: [three/src/core/Layers.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L19)

Constructs a new layers instance, with membership
initially set to layer `0`.

#### Returns

`Layers`

## Properties

### mask

> **mask**: `number`

Defined in: [three/src/core/Layers.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L27)

A bit mask storing which of the 32 layers this layers object is currently
a member of.

## Methods

### disable()

> **disable**(`layer`): `void`

Defined in: [three/src/core/Layers.js:78](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L78)

Removes membership of the given layer.

#### Parameters

##### layer

`number`

The layer to enable.

#### Returns

`void`

***

### disableAll()

> **disableAll**(): `void`

Defined in: [three/src/core/Layers.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L87)

Removes the membership from all layers.

#### Returns

`void`

***

### enable()

> **enable**(`layer`): `void`

Defined in: [three/src/core/Layers.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L47)

Adds membership of the given layer.

#### Parameters

##### layer

`number`

The layer to enable.

#### Returns

`void`

***

### enableAll()

> **enableAll**(): `void`

Defined in: [three/src/core/Layers.js:56](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L56)

Adds membership to all layers.

#### Returns

`void`

***

### isEnabled()

> **isEnabled**(`layer`): `boolean`

Defined in: [three/src/core/Layers.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L112)

Returns `true` if the given layer is enabled.

#### Parameters

##### layer

`number`

The layer to test.

#### Returns

`boolean`

Whether the given layer is enabled or not.

***

### set()

> **set**(`layer`): `void`

Defined in: [three/src/core/Layers.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L36)

Sets membership to the given layer, and remove membership all other layers.

#### Parameters

##### layer

`number`

The layer to set.

#### Returns

`void`

***

### test()

> **test**(`layers`): `boolean`

Defined in: [three/src/core/Layers.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L100)

Returns `true` if this and the given layers object have at least one
layer in common.

#### Parameters

##### layers

`Layers`

The layers to test.

#### Returns

`boolean`

Whether this and the given layers object have at least one layer in common or not.

***

### toggle()

> **toggle**(`layer`): `void`

Defined in: [three/src/core/Layers.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Layers.js#L67)

Toggles the membership of the given layer.

#### Parameters

##### layer

`number`

The layer to toggle.

#### Returns

`void`

---
editUrl: false
next: false
prev: false
title: "UniformsGroup"
---

Defined in: [three/src/core/UniformsGroup.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L15)

A class for managing multiple uniforms in a single group. The renderer will process
such a definition as a single UBO.

Since this class can only be used in context of [ShaderMaterial](/reference/three/classes/shadermaterial/), it is only supported
in [WebGLRenderer](/reference/three/classes/webglrenderer/).

## Extends

- [`EventDispatcher`](/reference/three/classes/eventdispatcher/)

## Constructors

### Constructor

> **new UniformsGroup**(): `UniformsGroup`

Defined in: [three/src/core/UniformsGroup.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L20)

Constructs a new uniforms group.

#### Returns

`UniformsGroup`

#### Overrides

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`constructor`](/reference/three/classes/eventdispatcher/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`_listeners`](/reference/three/classes/eventdispatcher/#_listeners)

***

### isUniformsGroup

> `readonly` **isUniformsGroup**: `boolean`

Defined in: [three/src/core/UniformsGroup.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L31)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### name

> **name**: `string`

Defined in: [three/src/core/UniformsGroup.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L47)

The name of the uniforms group.

***

### uniforms

> **uniforms**: `Uniform`[]

Defined in: [three/src/core/UniformsGroup.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L62)

An array holding the uniforms.

***

### usage

> **usage**: `any`

Defined in: [three/src/core/UniformsGroup.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L55)

The buffer usage.

#### Default

```ts
StaticDrawUsage
```

## Methods

### add()

> **add**(`uniform`): `UniformsGroup`

Defined in: [three/src/core/UniformsGroup.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L72)

Adds the given uniform to this uniforms group.

#### Parameters

##### uniform

`Uniform`

The uniform to add.

#### Returns

`UniformsGroup`

A reference to this uniforms group.

***

### addEventListener()

> **addEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L31)

Adds the given event listener to the given event type.

#### Parameters

##### type

`string`

The type of event to listen to.

##### listener

`Function`

The function that gets called when the event is fired.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`addEventListener`](/reference/three/classes/eventdispatcher/#addeventlistener)

***

### clone()

> **clone**(): `UniformsGroup`

Defined in: [three/src/core/UniformsGroup.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L172)

Returns a new uniforms group with copied values from this instance.

#### Returns

`UniformsGroup`

A clone of this instance.

***

### copy()

> **copy**(`source`): `UniformsGroup`

Defined in: [three/src/core/UniformsGroup.js:142](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L142)

Copies the values of the given uniforms group to this instance.

#### Parameters

##### source

`UniformsGroup`

The uniforms group to copy.

#### Returns

`UniformsGroup`

A reference to this uniforms group.

***

### dispatchEvent()

> **dispatchEvent**(`event`): `void`

Defined in: [three/src/core/EventDispatcher.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L101)

Dispatches an event object.

#### Parameters

##### event

`any`

The event that gets fired.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`dispatchEvent`](/reference/three/classes/eventdispatcher/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/core/UniformsGroup.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L130)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

#### Fires

Texture#dispose

***

### hasEventListener()

> **hasEventListener**(`type`, `listener`): `boolean`

Defined in: [three/src/core/EventDispatcher.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L58)

Returns `true` if the given event listener has been added to the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to check.

#### Returns

`boolean`

Whether the given event listener has been added to the given event type.

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`hasEventListener`](/reference/three/classes/eventdispatcher/#haseventlistener)

***

### remove()

> **remove**(`uniform`): `UniformsGroup`

Defined in: [three/src/core/UniformsGroup.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L86)

Removes the given uniform from this uniforms group.

#### Parameters

##### uniform

`Uniform`

The uniform to remove.

#### Returns

`UniformsGroup`

A reference to this uniforms group.

***

### removeEventListener()

> **removeEventListener**(`type`, `listener`): `void`

Defined in: [three/src/core/EventDispatcher.js:74](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L74)

Removes the given event listener from the given event type.

#### Parameters

##### type

`string`

The type of event.

##### listener

`Function`

The listener to remove.

#### Returns

`void`

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`removeEventListener`](/reference/three/classes/eventdispatcher/#removeeventlistener)

***

### setName()

> **setName**(`name`): `UniformsGroup`

Defined in: [three/src/core/UniformsGroup.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L102)

Sets the name of this uniforms group.

#### Parameters

##### name

`string`

The name to set.

#### Returns

`UniformsGroup`

A reference to this uniforms group.

***

### setUsage()

> **setUsage**(`value`): `UniformsGroup`

Defined in: [three/src/core/UniformsGroup.js:116](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/UniformsGroup.js#L116)

Sets the usage of this uniforms group.

#### Parameters

##### value

`any`

The usage to set.

#### Returns

`UniformsGroup`

A reference to this uniforms group.

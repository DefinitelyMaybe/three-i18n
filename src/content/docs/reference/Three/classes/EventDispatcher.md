---
editUrl: false
next: false
prev: false
title: "EventDispatcher"
---

Defined in: [three/src/core/EventDispatcher.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L23)

This modules allows to dispatch event objects on custom JavaScript objects.

Main repository: [eventdispatcher.js][https://github.com/mrdoob/eventdispatcher.js/](https://github.com/mrdoob/eventdispatcher.js/)

Code Example:
```js
class Car extends EventDispatcher {
	start() {
		this.dispatchEvent( { type: 'start', message: 'vroom vroom!' } );
	}
};

// Using events with the custom object
const car = new Car();
car.addEventListener( 'start', function ( event ) {
	alert( event.message );
} );

car.start();
```

## Extended by

- [`Texture`](/reference/three/classes/texture/)
- [`AnimationMixer`](/reference/three/classes/animationmixer/)
- [`RenderTarget`](/reference/three/classes/rendertarget/)
- [`UniformsGroup`](/reference/three/classes/uniformsgroup/)
- [`BufferGeometry`](/reference/three/classes/buffergeometry/)
- [`Object3D`](/reference/three/classes/object3d/)
- [`Controls`](/reference/three/classes/controls/)
- [`Material`](/reference/three/classes/material/)
- [`Node`](/reference/threewebgpu/classes/node/)

## Constructors

### Constructor

> **new EventDispatcher**(): `EventDispatcher`

#### Returns

`EventDispatcher`

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

## Methods

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

---
editUrl: false
next: false
prev: false
title: "Controls"
---

Defined in: [three/src/extras/Controls.js:9](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L9)

Abstract base class for controls.

## Extends

- [`EventDispatcher`](/reference/three/classes/eventdispatcher/)

## Constructors

### Constructor

> **new Controls**(`object`, `domElement`): `Controls`

Defined in: [three/src/extras/Controls.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L17)

Constructs a new controls instance.

#### Parameters

##### object

`Object3D`

The object that is managed by the controls.

##### domElement

`HTMLDOMElement` = `null`

The HTML element used for event listeners.

#### Returns

`Controls`

#### Overrides

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`constructor`](/reference/three/classes/eventdispatcher/#constructor)

## Properties

### \_listeners

> **\_listeners**: `object`

Defined in: [three/src/core/EventDispatcher.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/EventDispatcher.js#L33)

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`_listeners`](/reference/three/classes/eventdispatcher/#_listeners)

***

### domElement

> **domElement**: `HTMLDOMElement`

Defined in: [three/src/extras/Controls.js:34](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L34)

The HTML element used for event listeners.

#### Default

```ts
null
```

***

### enabled

> **enabled**: `boolean`

Defined in: [three/src/extras/Controls.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L42)

Whether the controls responds to user input or not.

#### Default

```ts
true
```

***

### keys

> **keys**: `any`

Defined in: [three/src/extras/Controls.js:57](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L57)

This object defines the keyboard input of the controls.

***

### mouseButtons

> **mouseButtons**: `object`

Defined in: [three/src/extras/Controls.js:65](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L65)

This object defines what type of actions are assigned to the available mouse buttons.
It depends on the control implementation what kind of mouse buttons and actions are supported.

#### LEFT

> **LEFT**: `number`

#### MIDDLE

> **MIDDLE**: `number`

#### RIGHT

> **RIGHT**: `number`

***

### object

> **object**: `Object3D`

Defined in: [three/src/extras/Controls.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L26)

The object that is managed by the controls.

***

### state

> **state**: `number`

Defined in: [three/src/extras/Controls.js:50](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L50)

The internal state of the controls.

#### Default

```ts
-1
```

***

### touches

> **touches**: `object`

Defined in: [three/src/extras/Controls.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L73)

This object defines what type of actions are assigned to what kind of touch interaction.
It depends on the control implementation what kind of touch interaction and actions are supported.

#### ONE

> **ONE**: `number`

#### TWO

> **TWO**: `number`

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

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`addEventListener`](/reference/three/classes/eventdispatcher/#addeventlistener)

***

### connect()

> **connect**(`element`): `void`

Defined in: [three/src/extras/Controls.js:83](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L83)

Connects the controls to the DOM. This method has so called "side effects" since
it adds the module's event listeners to the DOM.

#### Parameters

##### element

`HTMLDOMElement`

The DOM element to connect to.

#### Returns

`void`

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/src/extras/Controls.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L101)

Disconnects the controls from the DOM.

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

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`dispatchEvent`](/reference/three/classes/eventdispatcher/#dispatchevent)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/src/extras/Controls.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L107)

Call this method if you no longer want use to the controls. It frees all internal
resources and removes all event listeners.

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

#### Inherited from

[`EventDispatcher`](/reference/three/classes/eventdispatcher/).[`hasEventListener`](/reference/three/classes/eventdispatcher/#haseventlistener)

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

### update()

> **update**(): `void`

Defined in: [three/src/extras/Controls.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/Controls.js#L115)

Controls should implement this method if they have to update their internal state
per simulation step.

#### Returns

`void`

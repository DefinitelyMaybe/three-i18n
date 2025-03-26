---
editUrl: false
next: false
prev: false
title: "FixedTimer"
---

Defined in: [three/addons/misc/Timer.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L184)

A special version of a timer with a fixed time delta value.
Can be useful for testing and debugging purposes.

## Extends

- [`Timer`](/addons/classes/timer/)

## Constructors

### Constructor

> **new FixedTimer**(`fps`?): `FixedTimer`

Defined in: [three/addons/misc/Timer.js:191](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L191)

Constructs a new timer.

#### Parameters

##### fps?

`number` = `60`

The fixed FPS of this timer.

#### Returns

`FixedTimer`

#### Overrides

[`Timer`](/addons/classes/timer/).[`constructor`](/addons/classes/timer/#constructor)

## Properties

### \_currentTime

> **\_currentTime**: `number`

Defined in: [three/addons/misc/Timer.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L23)

#### Inherited from

[`Timer`](/addons/classes/timer/).[`_currentTime`](/addons/classes/timer/#_currenttime)

***

### \_delta

> **\_delta**: `number`

Defined in: [three/addons/misc/Timer.js:194](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L194)

#### Inherited from

[`Timer`](/addons/classes/timer/).[`_delta`](/addons/classes/timer/#_delta)

***

### \_document

> **\_document**: `Document`

Defined in: [three/addons/misc/Timer.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L31)

#### Inherited from

[`Timer`](/addons/classes/timer/).[`_document`](/addons/classes/timer/#_document)

***

### \_elapsed

> **\_elapsed**: `number`

Defined in: [three/addons/misc/Timer.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L27)

#### Inherited from

[`Timer`](/addons/classes/timer/).[`_elapsed`](/addons/classes/timer/#_elapsed)

***

### \_pageVisibilityHandler

> **\_pageVisibilityHandler**: `any`

Defined in: [three/addons/misc/Timer.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L32)

#### Inherited from

[`Timer`](/addons/classes/timer/).[`_pageVisibilityHandler`](/addons/classes/timer/#_pagevisibilityhandler)

***

### \_previousTime

> **\_previousTime**: `number`

Defined in: [three/addons/misc/Timer.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L22)

#### Inherited from

[`Timer`](/addons/classes/timer/).[`_previousTime`](/addons/classes/timer/#_previoustime)

***

### \_startTime

> **\_startTime**: `number`

Defined in: [three/addons/misc/Timer.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L24)

#### Inherited from

[`Timer`](/addons/classes/timer/).[`_startTime`](/addons/classes/timer/#_starttime)

***

### \_timescale

> **\_timescale**: `number`

Defined in: [three/addons/misc/Timer.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L29)

#### Inherited from

[`Timer`](/addons/classes/timer/).[`_timescale`](/addons/classes/timer/#_timescale)

## Methods

### connect()

> **connect**(`document`): `void`

Defined in: [three/addons/misc/Timer.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L43)

Connect the timer to the given document.Calling this method is not mandatory to
use the timer but enables the usage of the Page Visibility API to avoid large time
delta values.

#### Parameters

##### document

`Document`

The document.

#### Returns

`void`

#### Inherited from

[`Timer`](/addons/classes/timer/).[`connect`](/addons/classes/timer/#connect)

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/misc/Timer.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L62)

Disconnects the timer from the DOM and also disables the usage of the Page Visibility API.

#### Returns

`void`

#### Inherited from

[`Timer`](/addons/classes/timer/).[`disconnect`](/addons/classes/timer/#disconnect)

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/misc/Timer.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L140)

Can be used to free all internal resources. Usually called when
the timer instance isn't required anymore.

#### Returns

`void`

#### Inherited from

[`Timer`](/addons/classes/timer/).[`dispose`](/addons/classes/timer/#dispose)

***

### getDelta()

> **getDelta**(): `number`

Defined in: [three/addons/misc/Timer.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L80)

Returns the time delta in seconds.

#### Returns

`number`

The time delta in second.

#### Inherited from

[`Timer`](/addons/classes/timer/).[`getDelta`](/addons/classes/timer/#getdelta)

***

### getElapsed()

> **getElapsed**(): `number`

Defined in: [three/addons/misc/Timer.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L91)

Returns the elapsed time in seconds.

#### Returns

`number`

The elapsed time in second.

#### Inherited from

[`Timer`](/addons/classes/timer/).[`getElapsed`](/addons/classes/timer/#getelapsed)

***

### getTimescale()

> **getTimescale**(): `number`

Defined in: [three/addons/misc/Timer.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L102)

Returns the timescale.

#### Returns

`number`

The timescale.

#### Inherited from

[`Timer`](/addons/classes/timer/).[`getTimescale`](/addons/classes/timer/#gettimescale)

***

### reset()

> **reset**(): [`Timer`](/addons/classes/timer/)

Defined in: [three/addons/misc/Timer.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L128)

Resets the time computation for the current simulation step.

#### Returns

[`Timer`](/addons/classes/timer/)

A reference to this timer.

#### Inherited from

[`Timer`](/addons/classes/timer/).[`reset`](/addons/classes/timer/#reset)

***

### setTimescale()

> **setTimescale**(`timescale`): [`Timer`](/addons/classes/timer/)

Defined in: [three/addons/misc/Timer.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L115)

Sets the given timescale which scale the time delta computation
in `update()`.

#### Parameters

##### timescale

`number`

The timescale to set.

#### Returns

[`Timer`](/addons/classes/timer/)

A reference to this timer.

#### Inherited from

[`Timer`](/addons/classes/timer/).[`setTimescale`](/addons/classes/timer/#settimescale)

***

### update()

> **update**(): `FixedTimer`

Defined in: [three/addons/misc/Timer.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L198)

Updates the internal state of the timer. This method should be called
once per simulation step and before you perform queries against the timer
(e.g. via `getDelta()`).

#### Returns

`FixedTimer`

A reference to this timer.

#### Overrides

[`Timer`](/addons/classes/timer/).[`update`](/addons/classes/timer/#update)

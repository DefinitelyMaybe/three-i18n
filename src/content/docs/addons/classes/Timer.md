---
editUrl: false
next: false
prev: false
title: "Timer"
---

Defined in: [three/addons/misc/Timer.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L15)

This class is an alternative to Clock with a different API design and behavior.
The goal is to avoid the conceptual flaws that became apparent in `Clock` over time.

- `Timer` has an `update()` method that updates its internal state. That makes it possible to
call `getDelta()` and `getElapsed()` multiple times per simulation step without getting different values.
- The class can make use of the Page Visibility API to avoid large time delta values when the app
is inactive (e.g. tab switched or browser hidden).

```js
const timer = new Timer();
timer.connect( document ); // use Page Visibility API
```

## Extended by

- [`FixedTimer`](/addons/classes/fixedtimer/)

## Constructors

### Constructor

> **new Timer**(): `Timer`

Defined in: [three/addons/misc/Timer.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L20)

Constructs a new timer.

#### Returns

`Timer`

## Properties

### \_currentTime

> **\_currentTime**: `number`

Defined in: [three/addons/misc/Timer.js:23](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L23)

***

### \_delta

> **\_delta**: `number`

Defined in: [three/addons/misc/Timer.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L26)

***

### \_document

> **\_document**: `Document`

Defined in: [three/addons/misc/Timer.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L31)

***

### \_elapsed

> **\_elapsed**: `number`

Defined in: [three/addons/misc/Timer.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L27)

***

### \_pageVisibilityHandler

> **\_pageVisibilityHandler**: `any`

Defined in: [three/addons/misc/Timer.js:32](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L32)

***

### \_previousTime

> **\_previousTime**: `number`

Defined in: [three/addons/misc/Timer.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L22)

***

### \_startTime

> **\_startTime**: `number`

Defined in: [three/addons/misc/Timer.js:24](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L24)

***

### \_timescale

> **\_timescale**: `number`

Defined in: [three/addons/misc/Timer.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L29)

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

***

### disconnect()

> **disconnect**(): `void`

Defined in: [three/addons/misc/Timer.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L62)

Disconnects the timer from the DOM and also disables the usage of the Page Visibility API.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/misc/Timer.js:140](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L140)

Can be used to free all internal resources. Usually called when
the timer instance isn't required anymore.

#### Returns

`void`

***

### getDelta()

> **getDelta**(): `number`

Defined in: [three/addons/misc/Timer.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L80)

Returns the time delta in seconds.

#### Returns

`number`

The time delta in second.

***

### getElapsed()

> **getElapsed**(): `number`

Defined in: [three/addons/misc/Timer.js:91](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L91)

Returns the elapsed time in seconds.

#### Returns

`number`

The elapsed time in second.

***

### getTimescale()

> **getTimescale**(): `number`

Defined in: [three/addons/misc/Timer.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L102)

Returns the timescale.

#### Returns

`number`

The timescale.

***

### reset()

> **reset**(): `Timer`

Defined in: [three/addons/misc/Timer.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L128)

Resets the time computation for the current simulation step.

#### Returns

`Timer`

A reference to this timer.

***

### setTimescale()

> **setTimescale**(`timescale`): `Timer`

Defined in: [three/addons/misc/Timer.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L115)

Sets the given timescale which scale the time delta computation
in `update()`.

#### Parameters

##### timescale

`number`

The timescale to set.

#### Returns

`Timer`

A reference to this timer.

***

### update()

> **update**(`timestamp`): `Timer`

Defined in: [three/addons/misc/Timer.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/Timer.js#L156)

Updates the internal state of the timer. This method should be called
once per simulation step and before you perform queries against the timer
(e.g. via `getDelta()`).

#### Parameters

##### timestamp

`number`

The current time in milliseconds. Can be obtained
from the `requestAnimationFrame` callback argument. If not provided, the current
time will be determined with `performance.now`.

#### Returns

`Timer`

A reference to this timer.

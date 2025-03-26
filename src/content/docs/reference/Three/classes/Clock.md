---
editUrl: false
next: false
prev: false
title: "Clock"
---

Defined in: [three/src/core/Clock.js:4](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L4)

Class for keeping track of time.

## Constructors

### Constructor

> **new Clock**(`autoStart`?): `Clock`

Defined in: [three/src/core/Clock.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L12)

Constructs a new clock.

#### Parameters

##### autoStart?

`boolean` = `true`

Whether to automatically start the clock when
`getDelta()` is called for the first time.

#### Returns

`Clock`

## Properties

### autoStart

> **autoStart**: `boolean`

Defined in: [three/src/core/Clock.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L21)

If set to `true`, the clock starts automatically when `getDelta()` is called
for the first time.

#### Default

```ts
true
```

***

### elapsedTime

> **elapsedTime**: `number`

Defined in: [three/src/core/Clock.js:46](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L46)

Keeps track of the total time that the clock has been running.

#### Default

```ts
0
```

***

### oldTime

> **oldTime**: `number`

Defined in: [three/src/core/Clock.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L38)

Holds the time at which the clock's `start()`, `getElapsedTime()` or
`getDelta()` methods were last called.

#### Default

```ts
0
```

***

### running

> **running**: `boolean`

Defined in: [three/src/core/Clock.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L54)

Whether the clock is running or not.

#### Default

```ts
true
```

***

### startTime

> **startTime**: `number`

Defined in: [three/src/core/Clock.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L29)

Holds the time at which the clock's `start()` method was last called.

#### Default

```ts
0
```

## Methods

### getDelta()

> **getDelta**(): `number`

Defined in: [three/src/core/Clock.js:100](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L100)

Returns the delta time in seconds.

#### Returns

`number`

The delta time.

***

### getElapsedTime()

> **getElapsedTime**(): `number`

Defined in: [three/src/core/Clock.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L88)

Returns the elapsed time in seconds.

#### Returns

`number`

The elapsed time.

***

### start()

> **start**(): `void`

Defined in: [three/src/core/Clock.js:62](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L62)

Starts the clock. When `autoStart` is set to `true`, the method is automatically
called by the class.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [three/src/core/Clock.js:75](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Clock.js#L75)

Stops the clock.

#### Returns

`void`

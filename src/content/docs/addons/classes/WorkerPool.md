---
editUrl: false
next: false
prev: false
title: "WorkerPool"
---

Defined in: [three/addons/utils/WorkerPool.js:4](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L4)

A simple pool for managing Web Workers.

## Constructors

### Constructor

> **new WorkerPool**(`pool`?): `WorkerPool`

Defined in: [three/addons/utils/WorkerPool.js:11](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L11)

Constructs a new Worker pool.

#### Parameters

##### pool?

`number` = `4`

The size of the pool.

#### Returns

`WorkerPool`

## Properties

### pool

> **pool**: `number`

Defined in: [three/addons/utils/WorkerPool.js:19](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L19)

The size of the pool.

#### Default

```ts
4
```

***

### queue

> **queue**: `any`[]

Defined in: [three/addons/utils/WorkerPool.js:26](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L26)

A message queue.

***

### workerCreator

> **workerCreator**: `Function`

Defined in: [three/addons/utils/WorkerPool.js:54](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L54)

A factory function for creating workers.

***

### workers

> **workers**: `Worker`[]

Defined in: [three/addons/utils/WorkerPool.js:33](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L33)

An array of Workers.

***

### workersResolve

> **workersResolve**: `Function`[]

Defined in: [three/addons/utils/WorkerPool.js:40](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L40)

An array with resolve functions for messages.

***

### workerStatus

> **workerStatus**: `number`

Defined in: [three/addons/utils/WorkerPool.js:47](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L47)

The current worker status.

## Methods

### \_getIdleWorker()

> **\_getIdleWorker**(): `number`

Defined in: [three/addons/utils/WorkerPool.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L70)

#### Returns

`number`

***

### \_initWorker()

> **\_initWorker**(`workerId`): `void`

Defined in: [three/addons/utils/WorkerPool.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L58)

#### Parameters

##### workerId

`any`

#### Returns

`void`

***

### \_onMessage()

> **\_onMessage**(`workerId`, `msg`): `void`

Defined in: [three/addons/utils/WorkerPool.js:79](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L79)

#### Parameters

##### workerId

`any`

##### msg

`any`

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/utils/WorkerPool.js:155](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L155)

Terminates all Workers of this pool. Call this  method whenever this
Worker pool is no longer used in your app.

#### Returns

`void`

***

### postMessage()

> **postMessage**(`msg`, `transfer`): `Promise`\<`any`\>

Defined in: [three/addons/utils/WorkerPool.js:128](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L128)

Post a message to an idle Worker. If no Worker is available,
the message is pushed into a message queue for later processing.

#### Parameters

##### msg

`any`

The message.

##### transfer

`ArrayBuffer`[]

An array with array buffers for data transfer.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the message has been processed.

***

### setWorkerCreator()

> **setWorkerCreator**(`workerCreator`): `void`

Defined in: [three/addons/utils/WorkerPool.js:103](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L103)

Sets a function that is responsible for creating Workers.

#### Parameters

##### workerCreator

`Function`

The worker creator function.

#### Returns

`void`

***

### setWorkerLimit()

> **setWorkerLimit**(`pool`): `void`

Defined in: [three/addons/utils/WorkerPool.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/WorkerPool.js#L114)

Sets the Worker limit

#### Parameters

##### pool

`number`

The size of the pool.

#### Returns

`void`

---
editUrl: false
next: false
prev: false
title: "DataUtils"
---

Defined in: [three/src/extras/DataUtils.js:182](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/DataUtils.js#L182)

A class containing utility functions for data.

## Methods

### fromHalfFloat()

> `static` **fromHalfFloat**(`val`): `number`

Defined in: [three/src/extras/DataUtils.js:204](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/DataUtils.js#L204)

Returns a single precision floating point value (FP32) from the given half
precision floating point value (FP16).

#### Parameters

##### val

`number`

A half precision floating point value.

#### Returns

`number`

The FP32 value.

***

### toHalfFloat()

> `static` **toHalfFloat**(`val`): `number`

Defined in: [three/src/extras/DataUtils.js:191](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/extras/DataUtils.js#L191)

Returns a half precision floating point value (FP16) from the given single
precision floating point value (FP32).

#### Parameters

##### val

`number`

A single precision floating point value.

#### Returns

`number`

The FP16 value.

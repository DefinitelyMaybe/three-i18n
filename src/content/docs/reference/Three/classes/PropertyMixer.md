---
editUrl: false
next: false
prev: false
title: "PropertyMixer"
---

Defined in: [three/src/animation/PropertyMixer.js:6](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L6)

Buffered scene graph property that allows weighted accumulation; used internally.

## Constructors

### Constructor

> **new PropertyMixer**(`binding`, `typeName`, `valueSize`): `PropertyMixer`

Defined in: [three/src/animation/PropertyMixer.js:15](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L15)

Constructs a new property mixer.

#### Parameters

##### binding

`PropertyBinding`

The property binding.

##### typeName

`string`

The keyframe track type name.

##### valueSize

`number`

The keyframe track value size.

#### Returns

`PropertyMixer`

## Properties

### \_addIndex

> **\_addIndex**: `number`

Defined in: [three/src/animation/PropertyMixer.js:88](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L88)

***

### \_mixBufferRegion()

> **\_mixBufferRegion**: (`buffer`, `dstOffset`, `srcOffset`, `t`, `stride`) => `void`

Defined in: [three/src/animation/PropertyMixer.js:84](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L84)

#### Parameters

##### buffer

`any`

##### dstOffset

`any`

##### srcOffset

`any`

##### t

`any`

##### stride

`any`

#### Returns

`void`

***

### \_mixBufferRegionAdditive()

> **\_mixBufferRegionAdditive**: (`buffer`, `dstOffset`, `srcOffset`, `t`, `stride`) => `void`

Defined in: [three/src/animation/PropertyMixer.js:85](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L85)

#### Parameters

##### buffer

`any`

##### dstOffset

`any`

##### srcOffset

`any`

##### t

`any`

##### stride

`any`

#### Returns

`void`

***

### \_origIndex

> **\_origIndex**: `number`

Defined in: [three/src/animation/PropertyMixer.js:87](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L87)

***

### \_setIdentity()

> **\_setIdentity**: () => `void`

Defined in: [three/src/animation/PropertyMixer.js:86](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L86)

#### Returns

`void`

***

### \_workIndex

> **\_workIndex**: `number`

Defined in: [three/src/animation/PropertyMixer.js:59](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L59)

***

### binding

> **binding**: `PropertyBinding`

Defined in: [three/src/animation/PropertyMixer.js:22](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L22)

The property binding.

***

### buffer

> **buffer**: `any`[] \| `Float64Array`\<`ArrayBuffer`\>

Defined in: [three/src/animation/PropertyMixer.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L58)

***

### cumulativeWeight

> **cumulativeWeight**: `number`

Defined in: [three/src/animation/PropertyMixer.js:96](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L96)

TODO

#### Default

```ts
0
```

***

### cumulativeWeightAdditive

> **cumulativeWeightAdditive**: `number`

Defined in: [three/src/animation/PropertyMixer.js:104](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L104)

TODO

#### Default

```ts
0
```

***

### referenceCount

> **referenceCount**: `number`

Defined in: [three/src/animation/PropertyMixer.js:120](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L120)

TODO

#### Default

```ts
0
```

***

### useCount

> **useCount**: `number`

Defined in: [three/src/animation/PropertyMixer.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L112)

TODO

#### Default

```ts
0
```

***

### valueSize

> **valueSize**: `number`

Defined in: [three/src/animation/PropertyMixer.js:29](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L29)

The keyframe track value size.

## Methods

### \_lerp()

> **\_lerp**(`buffer`, `dstOffset`, `srcOffset`, `t`, `stride`): `void`

Defined in: [three/src/animation/PropertyMixer.js:356](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L356)

#### Parameters

##### buffer

`any`

##### dstOffset

`any`

##### srcOffset

`any`

##### t

`any`

##### stride

`any`

#### Returns

`void`

***

### \_lerpAdditive()

> **\_lerpAdditive**(`buffer`, `dstOffset`, `srcOffset`, `t`, `stride`): `void`

Defined in: [three/src/animation/PropertyMixer.js:370](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L370)

#### Parameters

##### buffer

`any`

##### dstOffset

`any`

##### srcOffset

`any`

##### t

`any`

##### stride

`any`

#### Returns

`void`

***

### \_select()

> **\_select**(`buffer`, `dstOffset`, `srcOffset`, `t`, `stride`): `void`

Defined in: [three/src/animation/PropertyMixer.js:324](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L324)

#### Parameters

##### buffer

`any`

##### dstOffset

`any`

##### srcOffset

`any`

##### t

`any`

##### stride

`any`

#### Returns

`void`

***

### \_setAdditiveIdentityNumeric()

> **\_setAdditiveIdentityNumeric**(): `void`

Defined in: [three/src/animation/PropertyMixer.js:288](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L288)

#### Returns

`void`

***

### \_setAdditiveIdentityOther()

> **\_setAdditiveIdentityOther**(): `void`

Defined in: [three/src/animation/PropertyMixer.js:308](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L308)

#### Returns

`void`

***

### \_setAdditiveIdentityQuaternion()

> **\_setAdditiveIdentityQuaternion**(): `void`

Defined in: [three/src/animation/PropertyMixer.js:301](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L301)

#### Returns

`void`

***

### \_slerp()

> **\_slerp**(`buffer`, `dstOffset`, `srcOffset`, `t`): `void`

Defined in: [three/src/animation/PropertyMixer.js:338](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L338)

#### Parameters

##### buffer

`any`

##### dstOffset

`any`

##### srcOffset

`any`

##### t

`any`

#### Returns

`void`

***

### \_slerpAdditive()

> **\_slerpAdditive**(`buffer`, `dstOffset`, `srcOffset`, `t`, `stride`): `void`

Defined in: [three/src/animation/PropertyMixer.js:344](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L344)

#### Parameters

##### buffer

`any`

##### dstOffset

`any`

##### srcOffset

`any`

##### t

`any`

##### stride

`any`

#### Returns

`void`

***

### accumulate()

> **accumulate**(`accuIndex`, `weight`): `void`

Defined in: [three/src/animation/PropertyMixer.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L130)

Accumulates data in the `incoming` region into `accu<i>`.

#### Parameters

##### accuIndex

`number`

The accumulation index.

##### weight

`number`

The weight.

#### Returns

`void`

***

### accumulateAdditive()

> **accumulateAdditive**(`weight`): `void`

Defined in: [three/src/animation/PropertyMixer.js:172](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L172)

Accumulates data in the `incoming` region into `add`.

#### Parameters

##### weight

`number`

The weight.

#### Returns

`void`

***

### apply()

> **apply**(`accuIndex`): `void`

Defined in: [three/src/animation/PropertyMixer.js:198](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L198)

Applies the state of `accu<i>` to the binding when accus differ.

#### Parameters

##### accuIndex

`number`

The accumulation index.

#### Returns

`void`

***

### restoreOriginalState()

> **restoreOriginalState**(): `void`

Defined in: [three/src/animation/PropertyMixer.js:279](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L279)

Applies the state previously taken via [PropertyMixer#saveOriginalState](/reference/three/classes/propertymixer/#saveoriginalstate) to the binding.

#### Returns

`void`

***

### saveOriginalState()

> **saveOriginalState**(): `void`

Defined in: [three/src/animation/PropertyMixer.js:250](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyMixer.js#L250)

Remembers the state of the bound property and copy it to both accus.

#### Returns

`void`

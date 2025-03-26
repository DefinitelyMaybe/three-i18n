---
editUrl: false
next: false
prev: false
title: "CSMHelper"
---

Defined in: [three/addons/csm/CSMHelper.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L20)

A helper for visualizing the cascades of a CSM instance.

## Extends

- `unknown`

## Constructors

### Constructor

> **new CSMHelper**(`csm`): `CSMHelper`

Defined in: [three/addons/csm/CSMHelper.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L27)

Constructs a new CSM helper.

#### Parameters

##### csm

`any`

The CSM instance to visualize.

#### Returns

`CSMHelper`

#### Overrides

`Group.constructor`

## Properties

### cascadeLines

> **cascadeLines**: `any`[]

Defined in: [three/addons/csm/CSMHelper.js:71](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L71)

***

### cascadePlanes

> **cascadePlanes**: `any`[]

Defined in: [three/addons/csm/CSMHelper.js:72](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L72)

***

### csm

> **csm**: `any`

Defined in: [three/addons/csm/CSMHelper.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L36)

The CSM instance to visualize.

***

### displayFrustum

> **displayFrustum**: `boolean`

Defined in: [three/addons/csm/CSMHelper.js:44](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L44)

Whether to display the CSM frustum or not.

#### Default

```ts
true
```

***

### displayPlanes

> **displayPlanes**: `boolean`

Defined in: [three/addons/csm/CSMHelper.js:52](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L52)

Whether to display the cascade planes or not.

#### Default

```ts
true
```

***

### displayShadowBounds

> **displayShadowBounds**: `boolean`

Defined in: [three/addons/csm/CSMHelper.js:60](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L60)

Whether to display the shadow bounds or not.

#### Default

```ts
true
```

***

### frustumLines

> **frustumLines**: `any`

Defined in: [three/addons/csm/CSMHelper.js:70](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L70)

***

### shadowLines

> **shadowLines**: `any`[]

Defined in: [three/addons/csm/CSMHelper.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L73)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/csm/CSMHelper.js:210](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L210)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [three/addons/csm/CSMHelper.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L109)

Updates the helper. This method should be called in the app's animation loop.

#### Returns

`void`

***

### updateVisibility()

> **updateVisibility**(): `void`

Defined in: [three/addons/csm/CSMHelper.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/csm/CSMHelper.js#L80)

This method must be called if one of the `display*` properties is changed at runtime.

#### Returns

`void`

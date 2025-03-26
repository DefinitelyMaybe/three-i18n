---
editUrl: false
next: false
prev: false
title: "PropertyBinding"
---

Defined in: [three/src/animation/PropertyBinding.js:108](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L108)

This holds a reference to a real property in the scene graph; used internally.

## Constructors

### Constructor

> **new PropertyBinding**(`rootNode`, `path`, `parsedPath`?): `PropertyBinding`

Defined in: [three/src/animation/PropertyBinding.js:117](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L117)

Constructs a new property binding.

#### Parameters

##### rootNode

`any`

The root node.

##### path

`string`

The path.

##### parsedPath?

`any`

The parsed path.

#### Returns

`PropertyBinding`

## Properties

### BindingType

> **BindingType**: `object`

Defined in: [three/src/animation/PropertyBinding.js:736](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L736)

#### ArrayElement

> **ArrayElement**: `number` = `2`

#### Direct

> **Direct**: `number` = `0`

#### EntireArray

> **EntireArray**: `number` = `1`

#### HasFromToArray

> **HasFromToArray**: `number` = `3`

***

### GetterByBindingType

> **GetterByBindingType**: (`buffer`, `offset`) => `void`[]

Defined in: [three/src/animation/PropertyBinding.js:749](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L749)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### getValue()

> **getValue**: (`targetArray`, `offset`) => `void`

Defined in: [three/src/animation/PropertyBinding.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L148)

#### Parameters

##### targetArray

`any`

##### offset

`any`

#### Returns

`void`

***

### node

> **node**: `any`

Defined in: [three/src/animation/PropertyBinding.js:138](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L138)

The object owns the animated property.

***

### parsedPath

> **parsedPath**: `any`

Defined in: [three/src/animation/PropertyBinding.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L131)

An object holding information about the path.

***

### path

> **path**: `string`

Defined in: [three/src/animation/PropertyBinding.js:124](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L124)

The object path to the animated property.

***

### propertyIndex

> **propertyIndex**: `any`

Defined in: [three/src/animation/PropertyBinding.js:690](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L690)

***

### propertyName

> **propertyName**: `any`

Defined in: [three/src/animation/PropertyBinding.js:708](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L708)

***

### resolvedProperty

> **resolvedProperty**: `any`

Defined in: [three/src/animation/PropertyBinding.js:689](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L689)

***

### rootNode

> **rootNode**: `any`

Defined in: [three/src/animation/PropertyBinding.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L145)

The root node.

***

### SetterByBindingTypeAndVersioning

> **SetterByBindingTypeAndVersioning**: (`buffer`, `offset`) => `void`[][]

Defined in: [three/src/animation/PropertyBinding.js:758](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L758)

***

### setValue()

> **setValue**: (`sourceArray`, `offset`) => `void`

Defined in: [three/src/animation/PropertyBinding.js:149](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L149)

#### Parameters

##### sourceArray

`any`

##### offset

`any`

#### Returns

`void`

***

### targetObject

> **targetObject**: `any`

Defined in: [three/src/animation/PropertyBinding.js:641](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L641)

***

### Versioning

> **Versioning**: `object`

Defined in: [three/src/animation/PropertyBinding.js:743](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L743)

#### MatrixWorldNeedsUpdate

> **MatrixWorldNeedsUpdate**: `number` = `2`

#### NeedsUpdate

> **NeedsUpdate**: `number` = `1`

#### None

> **None**: `number` = `0`

***

### Composite

> `static` **Composite**: *typeof* `Composite`

Defined in: [three/src/animation/PropertyBinding.js:734](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L734)

## Methods

### \_getValue\_array()

> **\_getValue\_array**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:337](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L337)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_getValue\_arrayElement()

> **\_getValue\_arrayElement**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:349](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L349)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_getValue\_direct()

> **\_getValue\_direct**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:331](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L331)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_getValue\_toArray()

> **\_getValue\_toArray**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:355](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L355)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_getValue\_unavailable()

> **\_getValue\_unavailable**(): `void`

Defined in: [three/src/animation/PropertyBinding.js:326](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L326)

#### Returns

`void`

***

### \_getValue\_unbound()

> **\_getValue\_unbound**(`targetArray`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:469](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L469)

#### Parameters

##### targetArray

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_array()

> **\_setValue\_array**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:385](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L385)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_array\_setMatrixWorldNeedsUpdate()

> **\_setValue\_array\_setMatrixWorldNeedsUpdate**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:411](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L411)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_array\_setNeedsUpdate()

> **\_setValue\_array\_setNeedsUpdate**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:397](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L397)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_arrayElement()

> **\_setValue\_arrayElement**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:427](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L427)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_arrayElement\_setMatrixWorldNeedsUpdate()

> **\_setValue\_arrayElement\_setMatrixWorldNeedsUpdate**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:440](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L440)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_arrayElement\_setNeedsUpdate()

> **\_setValue\_arrayElement\_setNeedsUpdate**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:433](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L433)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_direct()

> **\_setValue\_direct**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:363](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L363)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_direct\_setMatrixWorldNeedsUpdate()

> **\_setValue\_direct\_setMatrixWorldNeedsUpdate**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:376](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L376)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_direct\_setNeedsUpdate()

> **\_setValue\_direct\_setNeedsUpdate**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:369](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L369)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_fromArray()

> **\_setValue\_fromArray**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:449](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L449)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_fromArray\_setMatrixWorldNeedsUpdate()

> **\_setValue\_fromArray\_setMatrixWorldNeedsUpdate**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:462](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L462)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_fromArray\_setNeedsUpdate()

> **\_setValue\_fromArray\_setNeedsUpdate**(`buffer`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:455](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L455)

#### Parameters

##### buffer

`any`

##### offset

`any`

#### Returns

`void`

***

### \_setValue\_unavailable()

> **\_setValue\_unavailable**(): `void`

Defined in: [three/src/animation/PropertyBinding.js:327](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L327)

#### Returns

`void`

***

### \_setValue\_unbound()

> **\_setValue\_unbound**(`sourceArray`, `offset`): `void`

Defined in: [three/src/animation/PropertyBinding.js:476](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L476)

#### Parameters

##### sourceArray

`any`

##### offset

`any`

#### Returns

`void`

***

### bind()

> **bind**(): `void`

Defined in: [three/src/animation/PropertyBinding.js:486](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L486)

Creates a getter / setter pair for the property tracked by this binding.

#### Returns

`void`

***

### unbind()

> **unbind**(): `void`

Defined in: [three/src/animation/PropertyBinding.js:721](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L721)

Unbinds the property.

#### Returns

`void`

***

### create()

> `static` **create**(`root`, `path`, `parsedPath`?): `Composite` \| `PropertyBinding`

Defined in: [three/src/animation/PropertyBinding.js:163](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L163)

Factory method for creating a property binding from the given parameters.

#### Parameters

##### root

`any`

The root node.

##### path

`string`

The path.

##### parsedPath?

`any`

The parsed path.

#### Returns

`Composite` \| `PropertyBinding`

The created property binding or composite.

#### Static

***

### findNode()

> `static` **findNode**(`root`, `nodeName`): `any`

Defined in: [three/src/animation/PropertyBinding.js:265](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L265)

Searches for a node in the hierarchy of the given root object by the given
node name.

#### Parameters

##### root

`any`

The root object.

##### nodeName

The name of the node.

`string` | `number`

#### Returns

`any`

The found node. Returns `null` if no object was found.

#### Static

***

### parseTrackName()

> `static` **parseTrackName**(`trackName`): `any`

Defined in: [three/src/animation/PropertyBinding.js:208](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L208)

Parses the given track name (an object path to an animated property) and
returns an object with information about the path. Matches strings in the following forms:

- nodeName.property
- nodeName.property[accessor]
- nodeName.material.property[accessor]
- uuid.property[accessor]
- uuid.objectName[objectIndex].propertyName[propertyIndex]
- parentName/nodeName.property
- parentName/parentName/nodeName.property[index]
- .bone[Armature.DEF_cog].position
- scene:helium_balloon_model:helium_balloon_model.position

#### Parameters

##### trackName

`string`

The track name to parse.

#### Returns

`any`

The parsed track name as an object.

#### Static

***

### sanitizeNodeName()

> `static` **sanitizeNodeName**(`name`): `string`

Defined in: [three/src/animation/PropertyBinding.js:184](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/animation/PropertyBinding.js#L184)

Replaces spaces with underscores and removes unsupported characters from
node names, to ensure compatibility with parseTrackName().

#### Parameters

##### name

`string`

Node name to be sanitized.

#### Returns

`string`

The sanitized node name.

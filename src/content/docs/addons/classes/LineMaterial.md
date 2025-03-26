---
editUrl: false
next: false
prev: false
title: "LineMaterial"
---

Defined in: [three/addons/lines/LineMaterial.js:417](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L417)

A material for drawing wireframe-style geometries.

Unlike LineBasicMaterial, it supports arbitrary line widths and allows using world units
instead of screen space units. This material is used with [LineSegments2](/addons/classes/linesegments2/) and [Line2](/addons/classes/line2/).

This module can only be used with WebGLRenderer. When using WebGPURenderer,
use Line2NodeMaterial.

## Extends

- `unknown`

## Constructors

### Constructor

> **new LineMaterial**(`parameters`?): `LineMaterial`

Defined in: [three/addons/lines/LineMaterial.js:428](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L428)

Constructs a new line segments geometry.

#### Parameters

##### parameters?

`any`

An object with one or more properties
defining the material's appearance. Any property of the material
(including any property from inherited materials) can be passed
in here. Color values can be passed any type of value accepted
by Color#set.

#### Returns

`LineMaterial`

#### Overrides

`ShaderMaterial.constructor`

## Properties

### isLineMaterial

> `readonly` **isLineMaterial**: `boolean`

Defined in: [three/addons/lines/LineMaterial.js:449](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L449)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### needsUpdate

> **needsUpdate**: `boolean`

Defined in: [three/addons/lines/LineMaterial.js:535](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L535)

## Accessors

### alphaToCoverage

#### Get Signature

> **get** **alphaToCoverage**(): `boolean`

Defined in: [three/addons/lines/LineMaterial.js:667](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L667)

Whether to use alphaToCoverage or not. When enabled, this can improve the
anti-aliasing of line edges when using MSAA.

##### Returns

`boolean`

#### Set Signature

> **set** **alphaToCoverage**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:673](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L673)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### color

#### Get Signature

> **get** **color**(): `Color`

Defined in: [three/addons/lines/LineMaterial.js:461](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L461)

The material's color.

##### Default

```ts
(1,1,1)
```

##### Returns

`Color`

#### Set Signature

> **set** **color**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:467](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L467)

##### Parameters

###### value

`Color`

##### Returns

`void`

***

### dashed

#### Get Signature

> **get** **dashed**(): `boolean`

Defined in: [three/addons/lines/LineMaterial.js:525](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L525)

Whether the line is dashed, or solid.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **dashed**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:531](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L531)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### dashOffset

#### Get Signature

> **get** **dashOffset**(): `number`

Defined in: [three/addons/lines/LineMaterial.js:593](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L593)

Where in the dash cycle the dash starts.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **dashOffset**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:599](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L599)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dashScale

#### Get Signature

> **get** **dashScale**(): `number`

Defined in: [three/addons/lines/LineMaterial.js:557](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L557)

The scale of the dashes and gaps.

##### Default

```ts
1
```

##### Returns

`number`

#### Set Signature

> **set** **dashScale**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:563](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L563)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dashSize

#### Get Signature

> **get** **dashSize**(): `number`

Defined in: [three/addons/lines/LineMaterial.js:575](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L575)

The size of the dash.

##### Default

```ts
1
```

##### Returns

`number`

#### Set Signature

> **set** **dashSize**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:581](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L581)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### gapSize

#### Get Signature

> **get** **gapSize**(): `number`

Defined in: [three/addons/lines/LineMaterial.js:611](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L611)

The size of the gap.

##### Default

```ts
0
```

##### Returns

`number`

#### Set Signature

> **set** **gapSize**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:617](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L617)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### linewidth

#### Get Signature

> **get** **linewidth**(): `number`

Defined in: [three/addons/lines/LineMaterial.js:506](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L506)

Controls line thickness in CSS pixel units when `worldUnits` is `false` (default),
or in world units when `worldUnits` is `true`.

##### Default

```ts
1
```

##### Returns

`number`

#### Set Signature

> **set** **linewidth**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:512](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L512)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### opacity

#### Get Signature

> **get** **opacity**(): `number`

Defined in: [three/addons/lines/LineMaterial.js:629](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L629)

The opacity.

##### Default

```ts
1
```

##### Returns

`number`

#### Set Signature

> **set** **opacity**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:635](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L635)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### resolution

#### Get Signature

> **get** **resolution**(): `Vector2`

Defined in: [three/addons/lines/LineMaterial.js:649](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L649)

The size of the viewport, in screen pixels. This must be kept updated to make
screen-space rendering accurate.The `LineSegments2.onBeforeRender` callback
performs the update for visible objects.

##### Returns

`Vector2`

#### Set Signature

> **set** **resolution**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:655](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L655)

##### Parameters

###### value

`Vector2`

##### Returns

`void`

***

### worldUnits

#### Get Signature

> **get** **worldUnits**(): `boolean`

Defined in: [three/addons/lines/LineMaterial.js:479](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L479)

Whether the material's sizes (width, dash gaps) are in world units.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **worldUnits**(`value`): `void`

Defined in: [three/addons/lines/LineMaterial.js:485](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lines/LineMaterial.js#L485)

##### Parameters

###### value

`boolean`

##### Returns

`void`

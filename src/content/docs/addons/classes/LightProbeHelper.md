---
editUrl: false
next: false
prev: false
title: "LightProbeHelper"
---

Defined in: [three/addons/helpers/LightProbeHelper.js:20](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/LightProbeHelper.js#L20)

Renders a sphere to visualize a light probe in the scene.

This helper can only be used with WebGLRenderer.
When using WebGPURenderer, import from `LightProbeHelperGPU.js`.

```js
const helper = new LightProbeHelper( lightProbe );
scene.add( helper );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new LightProbeHelper**(`lightProbe`, `size`?): `LightProbeHelper`

Defined in: [three/addons/helpers/LightProbeHelper.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/LightProbeHelper.js#L28)

Constructs a new light probe helper.

#### Parameters

##### lightProbe

`LightProbe`

The light probe to visualize.

##### size?

`number` = `1`

The size of the helper.

#### Returns

`LightProbeHelper`

#### Overrides

`Mesh.constructor`

## Properties

### lightProbe

> **lightProbe**: `LightProbe`

Defined in: [three/addons/helpers/LightProbeHelper.js:126](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/LightProbeHelper.js#L126)

The light probe to visualize.

***

### size

> **size**: `number`

Defined in: [three/addons/helpers/LightProbeHelper.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/LightProbeHelper.js#L134)

The size of the helper.

#### Default

```ts
1
```

***

### type

> **type**: `string`

Defined in: [three/addons/helpers/LightProbeHelper.js:135](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/LightProbeHelper.js#L135)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/helpers/LightProbeHelper.js:145](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/LightProbeHelper.js#L145)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### onBeforeRender()

> **onBeforeRender**(): `void`

Defined in: [three/addons/helpers/LightProbeHelper.js:152](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/helpers/LightProbeHelper.js#L152)

#### Returns

`void`

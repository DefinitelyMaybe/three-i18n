---
editUrl: false
next: false
prev: false
title: "Lensflare"
---

Defined in: [three/addons/objects/Lensflare.js:37](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L37)

Creates a simulated lens flare that tracks a light.

Note that this class can only be used with WebGLRenderer.
When using WebGPURenderer, use LensflareMesh.

```js
const light = new THREE.PointLight( 0xffffff, 1.5, 2000 );

const lensflare = new Lensflare();
lensflare.addElement( new LensflareElement( textureFlare0, 512, 0 ) );
lensflare.addElement( new LensflareElement( textureFlare1, 512, 0 ) );
lensflare.addElement( new LensflareElement( textureFlare2, 60, 0.6 ) );

light.add( lensflare );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new Lensflare**(): `Lensflare`

Defined in: [three/addons/objects/Lensflare.js:42](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L42)

Constructs a new lensflare.

#### Returns

`Lensflare`

#### Overrides

`Mesh.constructor`

## Properties

### addElement()

> **addElement**: (`element`) => `void`

Defined in: [three/addons/objects/Lensflare.js:200](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L200)

Adds the given lensflare element to this instance.

#### Parameters

##### element

[`LensflareElement`](/addons/classes/lensflareelement/)

The element to add.

#### Returns

`void`

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/objects/Lensflare.js:318](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L318)

Frees the GPU-related resources allocated by this instance. Call this
method whenever this instance is no longer used in your app.

#### Returns

`void`

***

### frustumCulled

> **frustumCulled**: `boolean`

Defined in: [three/addons/objects/Lensflare.js:63](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L63)

Overwritten to disable view-frustum culling by default.

#### Default

```ts
false
```

***

### isLensflare

> `readonly` **isLensflare**: `boolean`

Defined in: [three/addons/objects/Lensflare.js:53](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L53)

This flag can be used for type testing.

#### Default

```ts
true
```

***

### onBeforeRender()

> **onBeforeRender**: (`renderer`, `scene`, `camera`) => `void`

Defined in: [three/addons/objects/Lensflare.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L213)

#### Parameters

##### renderer

`any`

##### scene

`any`

##### camera

`any`

#### Returns

`void`

***

### renderOrder

> **renderOrder**: `number`

Defined in: [three/addons/objects/Lensflare.js:71](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L71)

Overwritten to make sure lensflares a rendered last.

#### Default

```ts
Infinity
```

***

### type

> **type**: `string`

Defined in: [three/addons/objects/Lensflare.js:55](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L55)

***

### Geometry

> `static` **Geometry**: `any`

Defined in: [three/addons/objects/Lensflare.js:465](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/objects/Lensflare.js#L465)

---
editUrl: false
next: false
prev: false
title: "ShadowMapViewer"
---

Defined in: [three/addons/utils/ShadowMapViewer.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/ShadowMapViewer.js#L31)

This is a helper for visualising a given light's shadow map.
It works for shadow casting lights: DirectionalLight and SpotLight.
It renders out the shadow map and displays it on a HUD.

This module can only be used with WebGLRenderer. When using WebGPURenderer,
import the class from `ShadowMapViewerGPU.js`.

```js
const lightShadowMapViewer = new ShadowMapViewer( light );
lightShadowMapViewer.position.x = 10;
lightShadowMapViewer.position.y = SCREEN_HEIGHT - ( SHADOW_MAP_HEIGHT / 4 ) - 10;
lightShadowMapViewer.size.width = SHADOW_MAP_WIDTH / 4;
lightShadowMapViewer.size.height = SHADOW_MAP_HEIGHT / 4;
lightShadowMapViewer.update();
```

## Constructors

### Constructor

> **new ShadowMapViewer**(`light`): `ShadowMapViewer`

Defined in: [three/addons/utils/ShadowMapViewer.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/ShadowMapViewer.js#L38)

Constructs a new shadow map viewer.

#### Parameters

##### light

`Light`

The shadow casting light.

#### Returns

`ShadowMapViewer`

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [three/addons/utils/ShadowMapViewer.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/ShadowMapViewer.js#L114)

Whether to display the shadow map viewer or not.

#### Default

```ts
true
```

***

### position

> **position**: `object`

Defined in: [three/addons/utils/ShadowMapViewer.js:146](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/ShadowMapViewer.js#L146)

The position of the viewer. When changing this property, make sure
to call [ShadowMapViewer#update](/addons/classes/shadowmapviewer/#update).

#### set()

> **set**: (`arg0`, `arg1`) => `any`

##### Parameters

###### arg0

`number`

###### arg1

`number`

##### Returns

`any`

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Default

```ts
true
```

***

### render()

> **render**: (`renderer`) => `void`

Defined in: [three/addons/utils/ShadowMapViewer.js:169](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/ShadowMapViewer.js#L169)

Renders the viewer. This method must be called in the app's animation loop.

#### Parameters

##### renderer

`WebGLRenderer`

The renderer.

#### Returns

`void`

***

### size

> **size**: `object`

Defined in: [three/addons/utils/ShadowMapViewer.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/ShadowMapViewer.js#L123)

The size of the viewer. When changing this property, make sure
to call [ShadowMapViewer#update](/addons/classes/shadowmapviewer/#update).

#### height

> **height**: `number`

#### width

> **width**: `number`

#### Default

```ts
true
```

***

### update()

> **update**: () => `void`

Defined in: [three/addons/utils/ShadowMapViewer.js:213](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/ShadowMapViewer.js#L213)

Updates the viewer.

#### Returns

`void`

***

### updateForWindowResize()

> **updateForWindowResize**: () => `void`

Defined in: [three/addons/utils/ShadowMapViewer.js:194](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/ShadowMapViewer.js#L194)

Resizes the viewer. This method should be called whenever the app's
window is resized.

#### Returns

`void`

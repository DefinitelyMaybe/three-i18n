---
editUrl: false
next: false
prev: false
title: "RectAreaLightUniformsLib"
---

Defined in: [three/addons/lights/RectAreaLightUniformsLib.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/RectAreaLightUniformsLib.js#L16)

This class is only relevant when using RectAreaLight with WebGLRenderer.

Before rect area lights can be used, the internal uniform library of the renderer must be
enhanced with the following code.

```js
RectAreaLightUniformsLib.init();
```

## Methods

### init()

> `static` **init**(): `void`

Defined in: [three/addons/lights/RectAreaLightUniformsLib.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/lights/RectAreaLightUniformsLib.js#L21)

Inits the uniform library required when using rect area lights.

#### Returns

`void`

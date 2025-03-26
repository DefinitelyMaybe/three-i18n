---
editUrl: false
next: false
prev: false
title: "WebGL"
---

Defined in: [three/addons/capabilities/WebGL.js:6](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/capabilities/WebGL.js#L6)

A utility module with basic WebGL 2 capability testing.

## Methods

### \_getErrorMessage()

> `static` **\_getErrorMessage**(`version`): `HTMLDivElement`

Defined in: [three/addons/capabilities/WebGL.js:66](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/capabilities/WebGL.js#L66)

#### Parameters

##### version

`any`

#### Returns

`HTMLDivElement`

***

### getWebGL2ErrorMessage()

> `static` **getWebGL2ErrorMessage**(): `HTMLDivElement`

Defined in: [three/addons/capabilities/WebGL.js:58](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/capabilities/WebGL.js#L58)

Returns a `div` element representing a formatted error message that can be appended in
web sites if WebGL 2 isn't supported.

#### Returns

`HTMLDivElement`

A `div` element representing a formatted error message that WebGL 2 isn't supported.

***

### getWebGLErrorMessage()

> `static` **getWebGLErrorMessage**(): `HTMLDivElement`

Defined in: [three/addons/capabilities/WebGL.js:129](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/capabilities/WebGL.js#L129)

#### Returns

`HTMLDivElement`

***

### isColorSpaceAvailable()

> `static` **isColorSpaceAvailable**(`colorSpace`): `boolean`

Defined in: [three/addons/capabilities/WebGL.js:35](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/capabilities/WebGL.js#L35)

Returns `true` if the given color space is available. This method can only be used
if WebGL 2 is supported.

#### Parameters

##### colorSpace

`string`

The color space to test.

#### Returns

`boolean`

Whether the given color space is available or not.

***

### isWebGL2Available()

> `static` **isWebGL2Available**(): `boolean`

Defined in: [three/addons/capabilities/WebGL.js:13](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/capabilities/WebGL.js#L13)

Returns `true` if WebGL 2 is available.

#### Returns

`boolean`

Whether WebGL 2 is available or not.

***

### isWebGLAvailable()

> `static` **isWebGLAvailable**(): `boolean`

Defined in: [three/addons/capabilities/WebGL.js:112](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/capabilities/WebGL.js#L112)

#### Returns

`boolean`

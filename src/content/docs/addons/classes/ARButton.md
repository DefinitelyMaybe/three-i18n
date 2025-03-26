---
editUrl: false
next: false
prev: false
title: "ARButton"
---

Defined in: [three/addons/webxr/ARButton.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/ARButton.js#L12)

A utility class for creating a button that allows to initiate
immersive AR sessions based on WebXR. The button can be created
with a factory method and then appended ot the website's DOM.

```js
document.body.appendChild( ARButton.createButton( renderer ) );
```

## Methods

### createButton()

> `static` **createButton**(`renderer`, `sessionInit`?): `HTMLElement`

Defined in: [three/addons/webxr/ARButton.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/ARButton.js#L21)

Constructs a new AR button.

#### Parameters

##### renderer

`any`

The renderer.

##### sessionInit?

`XRSessionInit` = `{}`

The a configuration object for the AR session.

#### Returns

`HTMLElement`

The button or an error message if `immersive-ar` isn't supported.

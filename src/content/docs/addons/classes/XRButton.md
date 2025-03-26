---
editUrl: false
next: false
prev: false
title: "XRButton"
---

Defined in: [three/addons/webxr/XRButton.js:16](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRButton.js#L16)

A utility class for creating a button that allows to initiate
immersive XR sessions based on WebXR. The button can be created
with a factory method and then appended ot the website's DOM.

```js
document.body.appendChild( XRButton.createButton( renderer ) );
```

Compared to [ARButton](/addons/classes/arbutton/) and [VRButton](/addons/classes/vrbutton/), this class will
try to offer an immersive AR session first. If the device does not
support this type of session, it uses an immersive VR session.

## Methods

### createButton()

> `static` **createButton**(`renderer`, `sessionInit`?): `HTMLElement`

Defined in: [three/addons/webxr/XRButton.js:25](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/XRButton.js#L25)

Constructs a new XR button.

#### Parameters

##### renderer

`any`

The renderer.

##### sessionInit?

`XRSessionInit` = `{}`

The a configuration object for the AR session.

#### Returns

`HTMLElement`

The button or an error message if WebXR isn't supported.

---
editUrl: false
next: false
prev: false
title: "VRButton"
---

Defined in: [three/addons/webxr/VRButton.js:12](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/VRButton.js#L12)

A utility class for creating a button that allows to initiate
immersive VR sessions based on WebXR. The button can be created
with a factory method and then appended ot the website's DOM.

```js
document.body.appendChild( VRButton.createButton( renderer ) );
```

## Properties

### xrSessionIsGranted

> `static` **xrSessionIsGranted**: `boolean`

Defined in: [three/addons/webxr/VRButton.js:260](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/VRButton.js#L260)

Whether a XR session has been granted or not.

#### Static

#### Default

```ts
false
```

## Methods

### createButton()

> `static` **createButton**(`renderer`, `sessionInit`?): `HTMLElement`

Defined in: [three/addons/webxr/VRButton.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/VRButton.js#L21)

Constructs a new VR button.

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

***

### registerSessionGrantedListener()

> `static` **registerSessionGrantedListener**(): `void`

Defined in: [three/addons/webxr/VRButton.js:233](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/webxr/VRButton.js#L233)

Registers a `sessiongranted` event listener. When a session is granted, the VRButton#xrSessionIsGranted
flag will evaluate to `true`. This method is automatically called by the module itself so there
should be no need to use it on app level.

#### Returns

`void`

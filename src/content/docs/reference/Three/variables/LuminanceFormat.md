---
editUrl: false
next: false
prev: false
title: "LuminanceFormat"
---

> `const` **LuminanceFormat**: `number` = `1024`

Defined in: [three/src/constants.js:756](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/constants.js#L756)

reads each element as a single luminance component. This is then converted to a floating point,
clamped to the range `[0,1]`, and then assembled into an RGBA element by placing the luminance value
in the red, green and blue channels, and attaching 1.0 to the alpha channel.

## Constant

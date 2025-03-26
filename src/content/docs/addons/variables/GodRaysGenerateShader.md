---
editUrl: false
next: false
prev: false
title: "GodRaysGenerateShader"
---

> `const` **GodRaysGenerateShader**: `any`

Defined in: [three/addons/shaders/GodRaysShader.js:82](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/shaders/GodRaysShader.js#L82)

The god-ray generation shader.

First pass:

The depth map is blurred along radial lines towards the "sun". The
output is written to a temporary render target (I used a 1/4 sized
target).

Pass two & three:

The results of the previous pass are re-blurred, each time with a
decreased distance between samples.

## Constant

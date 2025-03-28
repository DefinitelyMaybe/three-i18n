---
editUrl: false
next: false
prev: false
title: "GodRaysDepthMaskShader"
---

> `const` **GodRaysDepthMaskShader**: `any`

Defined in: [three/addons/shaders/GodRaysShader.js:27](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/shaders/GodRaysShader.js#L27)

God-rays (crepuscular rays)

Similar implementation to the one used by Crytek for CryEngine 2 [Sousa2008].
Blurs a mask generated from the depth map along radial lines emanating from the light
source. The blur repeatedly applies a blur filter of increasing support but constant
sample count to produce a blur filter with large support.

My implementation performs 3 passes, similar to the implementation from Sousa. I found
just 6 samples per pass produced acceptable results. The blur is applied three times,
with decreasing filter support. The result is equivalent to a single pass with
6*6*6 = 216 samples.

References:
- [Sousa2008, Crysis Next Gen Effects, GDC2008][http://www.crytek.com/sites/default/files/GDC08\_SousaT\_CrysisEffects.ppt](http://www.crytek.com/sites/default/files/GDC08_SousaT_CrysisEffects.ppt).

## Constant

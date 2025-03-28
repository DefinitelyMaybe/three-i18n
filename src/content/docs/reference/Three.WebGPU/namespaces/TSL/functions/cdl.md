---
editUrl: false
next: false
prev: false
title: "cdl"
---

> **cdl**(...`params`): `any`

Defined in: [three/src/nodes/display/ColorAdjustment.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/display/ColorAdjustment.js#L114)

Color Decision List (CDL) v1.2

Compact representation of color grading information, defined by slope, offset, power, and
saturation. The CDL should be typically be given input in a log space (such as LogC, ACEScc,
or AgX Log), and will return output in the same space. Output may require clamping >=0.

## Parameters

### params

...`any`[]

## Returns

`any`

Output, -Infinity < output < +Infinity

References:
- ASC CDL v1.2
- [https://blender.stackexchange.com/a/55239/43930](https://blender.stackexchange.com/a/55239/43930)
- [https://docs.acescentral.com/specifications/acescc/](https://docs.acescentral.com/specifications/acescc/)

## Tsl

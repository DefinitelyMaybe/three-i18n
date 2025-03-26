---
editUrl: false
next: false
prev: false
title: "BlurShaderUtils"
---

> `const` **BlurShaderUtils**: `object`

Defined in: [three/addons/shaders/DepthLimitedBlurShader.js:130](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/shaders/DepthLimitedBlurShader.js#L130)

## Type declaration

### configure()

> **configure**: (`material`, `kernelRadius`, `stdDev`, `uvIncrement`) => `void`

#### Parameters

##### material

`any`

##### kernelRadius

`any`

##### stdDev

`any`

##### uvIncrement

`any`

#### Returns

`void`

### createSampleOffsets()

> **createSampleOffsets**: (`kernelRadius`, `uvIncrement`) => `any`[]

#### Parameters

##### kernelRadius

`any`

##### uvIncrement

`any`

#### Returns

`any`[]

### createSampleWeights()

> **createSampleWeights**: (`kernelRadius`, `stdDev`) => `number`[]

#### Parameters

##### kernelRadius

`any`

##### stdDev

`any`

#### Returns

`number`[]

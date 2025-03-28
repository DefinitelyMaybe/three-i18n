---
editUrl: false
next: false
prev: false
title: "ColorManagement"
---

> `const` **ColorManagement**: `object`

Defined in: [three/src/math/ColorManagement.js:178](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/math/ColorManagement.js#L178)

## Type declaration

### \_getDrawingBufferColorSpace()

> **\_getDrawingBufferColorSpace**: (`colorSpace`) => `any`

#### Parameters

##### colorSpace

`any`

#### Returns

`any`

### \_getMatrix()

> **\_getMatrix**: (`targetMatrix`, `sourceColorSpace`, `targetColorSpace`) => `any`

#### Parameters

##### targetMatrix

`any`

##### sourceColorSpace

`any`

##### targetColorSpace

`any`

#### Returns

`any`

### \_getUnpackColorSpace()

> **\_getUnpackColorSpace**: (`colorSpace`) => `any`

#### Parameters

##### colorSpace

`any` = `...`

#### Returns

`any`

### convert()

> **convert**: (`color`, `sourceColorSpace`, `targetColorSpace`) => `any`

#### Parameters

##### color

`any`

##### sourceColorSpace

`any`

##### targetColorSpace

`any`

#### Returns

`any`

### define()

> **define**: (`colorSpaces`) => `void`

#### Parameters

##### colorSpaces

`any`

#### Returns

`void`

### enabled

> **enabled**: `boolean` = `true`

### fromWorkingColorSpace()

> **fromWorkingColorSpace**: (`color`, `targetColorSpace`) => `any`

#### Parameters

##### color

`any`

##### targetColorSpace

`any`

#### Returns

`any`

### getLuminanceCoefficients()

> **getLuminanceCoefficients**: (`target`, `colorSpace`) => `any`

#### Parameters

##### target

`any`

##### colorSpace

`any` = `...`

#### Returns

`any`

### getPrimaries()

> **getPrimaries**: (`colorSpace`) => `any`

#### Parameters

##### colorSpace

`any`

#### Returns

`any`

### getTransfer()

> **getTransfer**: (`colorSpace`) => `any`

#### Parameters

##### colorSpace

`any`

#### Returns

`any`

### spaces

> **spaces**: `object` = `{}`

Implementations of supported color spaces.

Required:
	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
	- whitePoint: reference white [ x y ]
	- transfer: transfer function (pre-defined)
	- toXYZ: Matrix3 RGB to XYZ transform
	- fromXYZ: Matrix3 XYZ to RGB transform
	- luminanceCoefficients: RGB luminance coefficients

Optional:
 - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
 - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }

Reference:
- https://www.russellcottrell.com/photo/matrixCalculator.htm

### toWorkingColorSpace()

> **toWorkingColorSpace**: (`color`, `sourceColorSpace`) => `any`

#### Parameters

##### color

`any`

##### sourceColorSpace

`any`

#### Returns

`any`

### workingColorSpace

> **workingColorSpace**: `string` = `LinearSRGBColorSpace`

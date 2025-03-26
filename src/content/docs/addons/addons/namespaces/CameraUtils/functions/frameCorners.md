---
editUrl: false
next: false
prev: false
title: "frameCorners"
---

> **frameCorners**(`camera`, `bottomLeftCorner`, `bottomRightCorner`, `topLeftCorner`, `estimateViewFrustum`?): `void`

Defined in: [three/addons/utils/CameraUtils.js:31](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/utils/CameraUtils.js#L31)

Set projection matrix and the orientation of a perspective camera
to exactly frame the corners of an arbitrary rectangle.
NOTE: This function ignores the standard parameters;
do not call `updateProjectionMatrix()` after this.

## Parameters

### camera

`PerspectiveCamera`

The camera.

### bottomLeftCorner

`Vector3`

The bottom-left corner point.

### bottomRightCorner

`Vector3`

The bottom-right corner point.

### topLeftCorner

`Vector3`

The top-left corner point.

### estimateViewFrustum?

`boolean` = `false`

If set to `true`, the function tries to estimate the camera's FOV.

## Returns

`void`

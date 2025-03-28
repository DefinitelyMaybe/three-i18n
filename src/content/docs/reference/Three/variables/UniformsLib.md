---
editUrl: false
next: false
prev: false
title: "UniformsLib"
---

> `const` **UniformsLib**: `object`

Defined in: [three/src/renderers/shaders/UniformsLib.js:6](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/shaders/UniformsLib.js#L6)

## Type declaration

### aomap

> **aomap**: `object`

#### aomap.aoMap

> **aoMap**: `object`

#### aomap.aoMap.value

> **value**: `any` = `null`

#### aomap.aoMapIntensity

> **aoMapIntensity**: `object`

#### aomap.aoMapIntensity.value

> **value**: `number` = `1`

#### aomap.aoMapTransform

> **aoMapTransform**: `object`

#### aomap.aoMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

### bumpmap

> **bumpmap**: `object`

#### bumpmap.bumpMap

> **bumpMap**: `object`

#### bumpmap.bumpMap.value

> **value**: `any` = `null`

#### bumpmap.bumpMapTransform

> **bumpMapTransform**: `object`

#### bumpmap.bumpMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### bumpmap.bumpScale

> **bumpScale**: `object`

#### bumpmap.bumpScale.value

> **value**: `number` = `1`

### common

> **common**: `object`

#### common.alphaMap

> **alphaMap**: `object`

#### common.alphaMap.value

> **value**: `any` = `null`

#### common.alphaMapTransform

> **alphaMapTransform**: `object`

#### common.alphaMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### common.alphaTest

> **alphaTest**: `object`

#### common.alphaTest.value

> **value**: `number` = `0`

#### common.diffuse

> **diffuse**: `object`

#### common.diffuse.value

> **value**: [`Color`](/reference/three/classes/color/)

#### common.map

> **map**: `object`

#### common.map.value

> **value**: `any` = `null`

#### common.mapTransform

> **mapTransform**: `object`

#### common.mapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### common.opacity

> **opacity**: `object`

#### common.opacity.value

> **value**: `number` = `1.0`

### displacementmap

> **displacementmap**: `object`

#### displacementmap.displacementBias

> **displacementBias**: `object`

#### displacementmap.displacementBias.value

> **value**: `number` = `0`

#### displacementmap.displacementMap

> **displacementMap**: `object`

#### displacementmap.displacementMap.value

> **value**: `any` = `null`

#### displacementmap.displacementMapTransform

> **displacementMapTransform**: `object`

#### displacementmap.displacementMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### displacementmap.displacementScale

> **displacementScale**: `object`

#### displacementmap.displacementScale.value

> **value**: `number` = `1`

### emissivemap

> **emissivemap**: `object`

#### emissivemap.emissiveMap

> **emissiveMap**: `object`

#### emissivemap.emissiveMap.value

> **value**: `any` = `null`

#### emissivemap.emissiveMapTransform

> **emissiveMapTransform**: `object`

#### emissivemap.emissiveMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

### envmap

> **envmap**: `object`

#### envmap.envMap

> **envMap**: `object`

#### envmap.envMap.value

> **value**: `any` = `null`

#### envmap.envMapRotation

> **envMapRotation**: `object`

#### envmap.envMapRotation.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### envmap.flipEnvMap

> **flipEnvMap**: `object`

#### envmap.flipEnvMap.value

> **value**: `number` = `- 1`

#### envmap.ior

> **ior**: `object`

#### envmap.ior.value

> **value**: `number` = `1.5`

#### envmap.reflectivity

> **reflectivity**: `object`

#### envmap.reflectivity.value

> **value**: `number` = `1.0`

#### envmap.refractionRatio

> **refractionRatio**: `object`

#### envmap.refractionRatio.value

> **value**: `number` = `0.98`

### fog

> **fog**: `object`

#### fog.fogColor

> **fogColor**: `object`

#### fog.fogColor.value

> **value**: [`Color`](/reference/three/classes/color/)

#### fog.fogDensity

> **fogDensity**: `object`

#### fog.fogDensity.value

> **value**: `number` = `0.00025`

#### fog.fogFar

> **fogFar**: `object`

#### fog.fogFar.value

> **value**: `number` = `2000`

#### fog.fogNear

> **fogNear**: `object`

#### fog.fogNear.value

> **value**: `number` = `1`

### gradientmap

> **gradientmap**: `object`

#### gradientmap.gradientMap

> **gradientMap**: `object`

#### gradientmap.gradientMap.value

> **value**: `any` = `null`

### lightmap

> **lightmap**: `object`

#### lightmap.lightMap

> **lightMap**: `object`

#### lightmap.lightMap.value

> **value**: `any` = `null`

#### lightmap.lightMapIntensity

> **lightMapIntensity**: `object`

#### lightmap.lightMapIntensity.value

> **value**: `number` = `1`

#### lightmap.lightMapTransform

> **lightMapTransform**: `object`

#### lightmap.lightMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

### lights

> **lights**: `object`

#### lights.ambientLightColor

> **ambientLightColor**: `object`

#### lights.ambientLightColor.value

> **value**: `any`[] = `[]`

#### lights.directionalLights

> **directionalLights**: `object`

#### lights.directionalLights.properties

> **properties**: `object`

#### lights.directionalLights.properties.color

> **color**: `object` = `{}`

#### lights.directionalLights.properties.direction

> **direction**: `object` = `{}`

#### lights.directionalLights.value

> **value**: `any`[] = `[]`

#### lights.directionalLightShadows

> **directionalLightShadows**: `object`

#### lights.directionalLightShadows.properties

> **properties**: `object`

#### lights.directionalLightShadows.properties.shadowBias

> **shadowBias**: `object` = `{}`

#### lights.directionalLightShadows.properties.shadowIntensity

> **shadowIntensity**: `number` = `1`

#### lights.directionalLightShadows.properties.shadowMapSize

> **shadowMapSize**: `object` = `{}`

#### lights.directionalLightShadows.properties.shadowNormalBias

> **shadowNormalBias**: `object` = `{}`

#### lights.directionalLightShadows.properties.shadowRadius

> **shadowRadius**: `object` = `{}`

#### lights.directionalLightShadows.value

> **value**: `any`[] = `[]`

#### lights.directionalShadowMap

> **directionalShadowMap**: `object`

#### lights.directionalShadowMap.value

> **value**: `any`[] = `[]`

#### lights.directionalShadowMatrix

> **directionalShadowMatrix**: `object`

#### lights.directionalShadowMatrix.value

> **value**: `any`[] = `[]`

#### lights.hemisphereLights

> **hemisphereLights**: `object`

#### lights.hemisphereLights.properties

> **properties**: `object`

#### lights.hemisphereLights.properties.direction

> **direction**: `object` = `{}`

#### lights.hemisphereLights.properties.groundColor

> **groundColor**: `object` = `{}`

#### lights.hemisphereLights.properties.skyColor

> **skyColor**: `object` = `{}`

#### lights.hemisphereLights.value

> **value**: `any`[] = `[]`

#### lights.lightProbe

> **lightProbe**: `object`

#### lights.lightProbe.value

> **value**: `any`[] = `[]`

#### lights.ltc\_1

> **ltc\_1**: `object`

#### lights.ltc\_1.value

> **value**: `any` = `null`

#### lights.ltc\_2

> **ltc\_2**: `object`

#### lights.ltc\_2.value

> **value**: `any` = `null`

#### lights.pointLights

> **pointLights**: `object`

#### lights.pointLights.properties

> **properties**: `object`

#### lights.pointLights.properties.color

> **color**: `object` = `{}`

#### lights.pointLights.properties.decay

> **decay**: `object` = `{}`

#### lights.pointLights.properties.distance

> **distance**: `object` = `{}`

#### lights.pointLights.properties.position

> **position**: `object` = `{}`

#### lights.pointLights.value

> **value**: `any`[] = `[]`

#### lights.pointLightShadows

> **pointLightShadows**: `object`

#### lights.pointLightShadows.properties

> **properties**: `object`

#### lights.pointLightShadows.properties.shadowBias

> **shadowBias**: `object` = `{}`

#### lights.pointLightShadows.properties.shadowCameraFar

> **shadowCameraFar**: `object` = `{}`

#### lights.pointLightShadows.properties.shadowCameraNear

> **shadowCameraNear**: `object` = `{}`

#### lights.pointLightShadows.properties.shadowIntensity

> **shadowIntensity**: `number` = `1`

#### lights.pointLightShadows.properties.shadowMapSize

> **shadowMapSize**: `object` = `{}`

#### lights.pointLightShadows.properties.shadowNormalBias

> **shadowNormalBias**: `object` = `{}`

#### lights.pointLightShadows.properties.shadowRadius

> **shadowRadius**: `object` = `{}`

#### lights.pointLightShadows.value

> **value**: `any`[] = `[]`

#### lights.pointShadowMap

> **pointShadowMap**: `object`

#### lights.pointShadowMap.value

> **value**: `any`[] = `[]`

#### lights.pointShadowMatrix

> **pointShadowMatrix**: `object`

#### lights.pointShadowMatrix.value

> **value**: `any`[] = `[]`

#### lights.rectAreaLights

> **rectAreaLights**: `object`

#### lights.rectAreaLights.properties

> **properties**: `object`

#### lights.rectAreaLights.properties.color

> **color**: `object` = `{}`

#### lights.rectAreaLights.properties.height

> **height**: `object` = `{}`

#### lights.rectAreaLights.properties.position

> **position**: `object` = `{}`

#### lights.rectAreaLights.properties.width

> **width**: `object` = `{}`

#### lights.rectAreaLights.value

> **value**: `any`[] = `[]`

#### lights.spotLightMap

> **spotLightMap**: `object`

#### lights.spotLightMap.value

> **value**: `any`[] = `[]`

#### lights.spotLightMatrix

> **spotLightMatrix**: `object`

#### lights.spotLightMatrix.value

> **value**: `any`[] = `[]`

#### lights.spotLights

> **spotLights**: `object`

#### lights.spotLights.properties

> **properties**: `object`

#### lights.spotLights.properties.color

> **color**: `object` = `{}`

#### lights.spotLights.properties.coneCos

> **coneCos**: `object` = `{}`

#### lights.spotLights.properties.decay

> **decay**: `object` = `{}`

#### lights.spotLights.properties.direction

> **direction**: `object` = `{}`

#### lights.spotLights.properties.distance

> **distance**: `object` = `{}`

#### lights.spotLights.properties.penumbraCos

> **penumbraCos**: `object` = `{}`

#### lights.spotLights.properties.position

> **position**: `object` = `{}`

#### lights.spotLights.value

> **value**: `any`[] = `[]`

#### lights.spotLightShadows

> **spotLightShadows**: `object`

#### lights.spotLightShadows.properties

> **properties**: `object`

#### lights.spotLightShadows.properties.shadowBias

> **shadowBias**: `object` = `{}`

#### lights.spotLightShadows.properties.shadowIntensity

> **shadowIntensity**: `number` = `1`

#### lights.spotLightShadows.properties.shadowMapSize

> **shadowMapSize**: `object` = `{}`

#### lights.spotLightShadows.properties.shadowNormalBias

> **shadowNormalBias**: `object` = `{}`

#### lights.spotLightShadows.properties.shadowRadius

> **shadowRadius**: `object` = `{}`

#### lights.spotLightShadows.value

> **value**: `any`[] = `[]`

#### lights.spotShadowMap

> **spotShadowMap**: `object`

#### lights.spotShadowMap.value

> **value**: `any`[] = `[]`

### metalnessmap

> **metalnessmap**: `object`

#### metalnessmap.metalnessMap

> **metalnessMap**: `object`

#### metalnessmap.metalnessMap.value

> **value**: `any` = `null`

#### metalnessmap.metalnessMapTransform

> **metalnessMapTransform**: `object`

#### metalnessmap.metalnessMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

### normalmap

> **normalmap**: `object`

#### normalmap.normalMap

> **normalMap**: `object`

#### normalmap.normalMap.value

> **value**: `any` = `null`

#### normalmap.normalMapTransform

> **normalMapTransform**: `object`

#### normalmap.normalMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### normalmap.normalScale

> **normalScale**: `object`

#### normalmap.normalScale.value

> **value**: [`Vector2`](/reference/three/classes/vector2/)

### points

> **points**: `object`

#### points.alphaMap

> **alphaMap**: `object`

#### points.alphaMap.value

> **value**: `any` = `null`

#### points.alphaMapTransform

> **alphaMapTransform**: `object`

#### points.alphaMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### points.alphaTest

> **alphaTest**: `object`

#### points.alphaTest.value

> **value**: `number` = `0`

#### points.diffuse

> **diffuse**: `object`

#### points.diffuse.value

> **value**: [`Color`](/reference/three/classes/color/)

#### points.map

> **map**: `object`

#### points.map.value

> **value**: `any` = `null`

#### points.opacity

> **opacity**: `object`

#### points.opacity.value

> **value**: `number` = `1.0`

#### points.scale

> **scale**: `object`

#### points.scale.value

> **value**: `number` = `1.0`

#### points.size

> **size**: `object`

#### points.size.value

> **value**: `number` = `1.0`

#### points.uvTransform

> **uvTransform**: `object`

#### points.uvTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

### roughnessmap

> **roughnessmap**: `object`

#### roughnessmap.roughnessMap

> **roughnessMap**: `object`

#### roughnessmap.roughnessMap.value

> **value**: `any` = `null`

#### roughnessmap.roughnessMapTransform

> **roughnessMapTransform**: `object`

#### roughnessmap.roughnessMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

### specularmap

> **specularmap**: `object`

#### specularmap.specularMap

> **specularMap**: `object`

#### specularmap.specularMap.value

> **value**: `any` = `null`

#### specularmap.specularMapTransform

> **specularMapTransform**: `object`

#### specularmap.specularMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

### sprite

> **sprite**: `object`

#### sprite.alphaMap

> **alphaMap**: `object`

#### sprite.alphaMap.value

> **value**: `any` = `null`

#### sprite.alphaMapTransform

> **alphaMapTransform**: `object`

#### sprite.alphaMapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### sprite.alphaTest

> **alphaTest**: `object`

#### sprite.alphaTest.value

> **value**: `number` = `0`

#### sprite.center

> **center**: `object`

#### sprite.center.value

> **value**: [`Vector2`](/reference/three/classes/vector2/)

#### sprite.diffuse

> **diffuse**: `object`

#### sprite.diffuse.value

> **value**: [`Color`](/reference/three/classes/color/)

#### sprite.map

> **map**: `object`

#### sprite.map.value

> **value**: `any` = `null`

#### sprite.mapTransform

> **mapTransform**: `object`

#### sprite.mapTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### sprite.opacity

> **opacity**: `object`

#### sprite.opacity.value

> **value**: `number` = `1.0`

#### sprite.rotation

> **rotation**: `object`

#### sprite.rotation.value

> **value**: `number` = `0.0`

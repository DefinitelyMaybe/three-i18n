---
editUrl: false
next: false
prev: false
title: "ShaderLib"
---

> `const` **ShaderLib**: `object`

Defined in: [three/src/renderers/shaders/ShaderLib.js:9](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/renderers/shaders/ShaderLib.js#L9)

## Type declaration

### background

> **background**: `object`

#### background.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.background_frag`

#### background.uniforms

> **uniforms**: `object`

#### background.uniforms.backgroundIntensity

> **backgroundIntensity**: `object`

#### background.uniforms.backgroundIntensity.value

> **value**: `number` = `1`

#### background.uniforms.t2D

> **t2D**: `object`

#### background.uniforms.t2D.value

> **value**: `any` = `null`

#### background.uniforms.uvTransform

> **uvTransform**: `object`

#### background.uniforms.uvTransform.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### background.vertexShader

> **vertexShader**: `string` = `ShaderChunk.background_vert`

### backgroundCube

> **backgroundCube**: `object`

#### backgroundCube.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.backgroundCube_frag`

#### backgroundCube.uniforms

> **uniforms**: `object`

#### backgroundCube.uniforms.backgroundBlurriness

> **backgroundBlurriness**: `object`

#### backgroundCube.uniforms.backgroundBlurriness.value

> **value**: `number` = `0`

#### backgroundCube.uniforms.backgroundIntensity

> **backgroundIntensity**: `object`

#### backgroundCube.uniforms.backgroundIntensity.value

> **value**: `number` = `1`

#### backgroundCube.uniforms.backgroundRotation

> **backgroundRotation**: `object`

#### backgroundCube.uniforms.backgroundRotation.value

> **value**: [`Matrix3`](/reference/three/classes/matrix3/)

#### backgroundCube.uniforms.envMap

> **envMap**: `object`

#### backgroundCube.uniforms.envMap.value

> **value**: `any` = `null`

#### backgroundCube.uniforms.flipEnvMap

> **flipEnvMap**: `object`

#### backgroundCube.uniforms.flipEnvMap.value

> **value**: `number` = `- 1`

#### backgroundCube.vertexShader

> **vertexShader**: `string` = `ShaderChunk.backgroundCube_vert`

### basic

> **basic**: `object`

#### basic.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.meshbasic_frag`

#### basic.uniforms

> **uniforms**: `object`

#### basic.vertexShader

> **vertexShader**: `string` = `ShaderChunk.meshbasic_vert`

### cube

> **cube**: `object`

#### cube.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.cube_frag`

#### cube.uniforms

> **uniforms**: `object`

#### cube.uniforms.opacity

> **opacity**: `object`

#### cube.uniforms.opacity.value

> **value**: `number` = `1.0`

#### cube.uniforms.tCube

> **tCube**: `object`

#### cube.uniforms.tCube.value

> **value**: `any` = `null`

#### cube.uniforms.tFlip

> **tFlip**: `object`

#### cube.uniforms.tFlip.value

> **value**: `number` = `- 1`

#### cube.vertexShader

> **vertexShader**: `string` = `ShaderChunk.cube_vert`

### dashed

> **dashed**: `object`

#### dashed.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.linedashed_frag`

#### dashed.uniforms

> **uniforms**: `object`

#### dashed.vertexShader

> **vertexShader**: `string` = `ShaderChunk.linedashed_vert`

### depth

> **depth**: `object`

#### depth.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.depth_frag`

#### depth.uniforms

> **uniforms**: `object`

#### depth.vertexShader

> **vertexShader**: `string` = `ShaderChunk.depth_vert`

### distanceRGBA

> **distanceRGBA**: `object`

#### distanceRGBA.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.distanceRGBA_frag`

#### distanceRGBA.uniforms

> **uniforms**: `object`

#### distanceRGBA.vertexShader

> **vertexShader**: `string` = `ShaderChunk.distanceRGBA_vert`

### equirect

> **equirect**: `object`

#### equirect.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.equirect_frag`

#### equirect.uniforms

> **uniforms**: `object`

#### equirect.uniforms.tEquirect

> **tEquirect**: `object`

#### equirect.uniforms.tEquirect.value

> **value**: `any` = `null`

#### equirect.vertexShader

> **vertexShader**: `string` = `ShaderChunk.equirect_vert`

### lambert

> **lambert**: `object`

#### lambert.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.meshlambert_frag`

#### lambert.uniforms

> **uniforms**: `object`

#### lambert.vertexShader

> **vertexShader**: `string` = `ShaderChunk.meshlambert_vert`

### matcap

> **matcap**: `object`

#### matcap.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.meshmatcap_frag`

#### matcap.uniforms

> **uniforms**: `object`

#### matcap.vertexShader

> **vertexShader**: `string` = `ShaderChunk.meshmatcap_vert`

### normal

> **normal**: `object`

#### normal.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.meshnormal_frag`

#### normal.uniforms

> **uniforms**: `object`

#### normal.vertexShader

> **vertexShader**: `string` = `ShaderChunk.meshnormal_vert`

### phong

> **phong**: `object`

#### phong.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.meshphong_frag`

#### phong.uniforms

> **uniforms**: `object`

#### phong.vertexShader

> **vertexShader**: `string` = `ShaderChunk.meshphong_vert`

### points

> **points**: `object`

#### points.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.points_frag`

#### points.uniforms

> **uniforms**: `object`

#### points.vertexShader

> **vertexShader**: `string` = `ShaderChunk.points_vert`

### shadow

> **shadow**: `object`

#### shadow.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.shadow_frag`

#### shadow.uniforms

> **uniforms**: `object`

#### shadow.vertexShader

> **vertexShader**: `string` = `ShaderChunk.shadow_vert`

### sprite

> **sprite**: `object`

#### sprite.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.sprite_frag`

#### sprite.uniforms

> **uniforms**: `object`

#### sprite.vertexShader

> **vertexShader**: `string` = `ShaderChunk.sprite_vert`

### standard

> **standard**: `object`

#### standard.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.meshphysical_frag`

#### standard.uniforms

> **uniforms**: `object`

#### standard.vertexShader

> **vertexShader**: `string` = `ShaderChunk.meshphysical_vert`

### toon

> **toon**: `object`

#### toon.fragmentShader

> **fragmentShader**: `string` = `ShaderChunk.meshtoon_frag`

#### toon.uniforms

> **uniforms**: `object`

#### toon.vertexShader

> **vertexShader**: `string` = `ShaderChunk.meshtoon_vert`

---
editUrl: false
next: false
prev: false
title: "GPUComputationRenderer"
---

Defined in: [three/addons/misc/GPUComputationRenderer.js:102](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L102)

GPUComputationRenderer, based on SimulationRenderer by @zz85.

The GPUComputationRenderer uses the concept of variables. These variables are RGBA float textures that hold 4 floats
for each compute element (texel).

Each variable has a fragment shader that defines the computation made to obtain the variable in question.
You can use as many variables you need, and make dependencies so you can use textures of other variables in the shader
(the sampler uniforms are added automatically) Most of the variables will need themselves as dependency.

The renderer has actually two render targets per variable, to make ping-pong. Textures from the current frame are used
as inputs to render the textures of the next frame.

The render targets of the variables can be used as input textures for your visualization shaders.

Variable names should be valid identifiers and should not collide with THREE GLSL used identifiers.
a common approach could be to use 'texture' prefixing the variable name; i.e texturePosition, textureVelocity...

The size of the computation (sizeX * sizeY) is defined as 'resolution' automatically in the shader. For example:
```
#DEFINE resolution vec2( 1024.0, 1024.0 )
```
Basic use:
```js
// Initialization...

// Create computation renderer
const gpuCompute = new GPUComputationRenderer( 1024, 1024, renderer );

// Create initial state float textures
const pos0 = gpuCompute.createTexture();
const vel0 = gpuCompute.createTexture();
// and fill in here the texture data...

// Add texture variables
const velVar = gpuCompute.addVariable( "textureVelocity", fragmentShaderVel, vel0 );
const posVar = gpuCompute.addVariable( "texturePosition", fragmentShaderPos, pos0 );

// Add variable dependencies
gpuCompute.setVariableDependencies( velVar, [ velVar, posVar ] );
gpuCompute.setVariableDependencies( posVar, [ velVar, posVar ] );

// Add custom uniforms
velVar.material.uniforms.time = { value: 0.0 };

// Check for completeness
const error = gpuCompute.init();
if ( error !== null ) {
		console.error( error );
 * }

// In each frame...

// Compute!
gpuCompute.compute();

// Update texture uniforms in your visualization materials with the gpu renderer output
myMaterial.uniforms.myTexture.value = gpuCompute.getCurrentRenderTarget( posVar ).texture;

// Do your rendering
renderer.render( myScene, myCamera );
```

Also, you can use utility functions to create ShaderMaterial and perform computations (rendering between textures)
Note that the shaders can have multiple input textures.

```js
const myFilter1 = gpuCompute.createShaderMaterial( myFilterFragmentShader1, { theTexture: { value: null } } );
const myFilter2 = gpuCompute.createShaderMaterial( myFilterFragmentShader2, { theTexture: { value: null } } );

const inputTexture = gpuCompute.createTexture();

// Fill in here inputTexture...

myFilter1.uniforms.theTexture.value = inputTexture;

const myRenderTarget = gpuCompute.createRenderTarget();
myFilter2.uniforms.theTexture.value = myRenderTarget.texture;

const outputRenderTarget = gpuCompute.createRenderTarget();

// Now use the output texture where you want:
myMaterial.uniforms.map.value = outputRenderTarget.texture;

// And compute each frame, before rendering to screen:
gpuCompute.doRenderTarget( myFilter1, myRenderTarget );
gpuCompute.doRenderTarget( myFilter2, outputRenderTarget );
```

## Constructors

### Constructor

> **new GPUComputationRenderer**(`sizeX`, `sizeY`, `renderer`): `GPUComputationRenderer`

Defined in: [three/addons/misc/GPUComputationRenderer.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L111)

Constructs a new GPU computation renderer.

#### Parameters

##### sizeX

`number`

Computation problem size is always 2d: sizeX * sizeY elements.
 *

##### sizeY

`number`

Computation problem size is always 2d: sizeX * sizeY elements.
 *

##### renderer

`WebGLRenderer`

The renderer.

#### Returns

`GPUComputationRenderer`

## Properties

### addResolutionDefine()

> **addResolutionDefine**: (`materialShader`) => `void`

Defined in: [three/addons/misc/GPUComputationRenderer.js:355](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L355)

Adds a resolution defined for the given material shader.

#### Parameters

##### materialShader

`any`

The material shader.

#### Returns

`void`

***

### addVariable()

> **addVariable**: (`variableName`, `computeFragmentShader`, `initialValueTexture`) => `any`

Defined in: [three/addons/misc/GPUComputationRenderer.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L148)

Adds a compute variable to the renderer.

#### Parameters

##### variableName

`string`

The variable name.

##### computeFragmentShader

`string`

The compute (fragment) shader source.

##### initialValueTexture

`Texture`

The initial value texture.

#### Returns

`any`

The compute variable.

***

### compute

> **compute**: *typeof* `__function`

Defined in: [three/addons/misc/GPUComputationRenderer.js:258](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L258)

Executes the compute. This method is usually called in the animation loop.

***

### createRenderTarget()

> **createRenderTarget**: (`sizeXTexture`, `sizeYTexture`, `wrapS`, `wrapT`, `minFilter`, `magFilter`) => `WebGLRenderTarget`

Defined in: [three/addons/misc/GPUComputationRenderer.js:390](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L390)

Creates a new render target from the given parameters.

#### Parameters

##### sizeXTexture

`number`

The width of the render target.

##### sizeYTexture

`number`

The height of the render target.

##### wrapS

`number`

The wrapS value.

##### wrapT

`number`

The wrapS value.

##### minFilter

`number`

The minFilter value.

##### magFilter

`number`

The magFilter value.

#### Returns

`WebGLRenderTarget`

The new render target.

***

### createShaderMaterial()

> **createShaderMaterial**: (`computeFragmentShader`, `uniforms`) => `any`

Defined in: [three/addons/misc/GPUComputationRenderer.js:377](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L377)

#### Parameters

##### computeFragmentShader

`any`

##### uniforms

`any`

#### Returns

`any`

***

### createTexture()

> **createTexture**: () => `DataTexture`

Defined in: [three/addons/misc/GPUComputationRenderer.js:420](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L420)

Creates a new data texture.

#### Returns

`DataTexture`

The new data texture.

***

### currentTextureIndex

> **currentTextureIndex**: `number`

Defined in: [three/addons/misc/GPUComputationRenderer.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L115)

***

### dispose()

> **dispose**: () => `void`

Defined in: [three/addons/misc/GPUComputationRenderer.js:319](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L319)

Frees all internal resources. Call this method if you don't need the
renderer anymore.

#### Returns

`void`

***

### doRenderTarget()

> **doRenderTarget**: (`material`, `output`) => `void`

Defined in: [three/addons/misc/GPUComputationRenderer.js:453](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L453)

Renders the given material into the given render target
with a full-screen pass.

#### Parameters

##### material

`Material`

The material.

##### output

`WebGLRenderTarget`

The output.

#### Returns

`void`

***

### getAlternateRenderTarget()

> **getAlternateRenderTarget**: (`variable`) => `WebGLRenderTarget`

Defined in: [three/addons/misc/GPUComputationRenderer.js:309](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L309)

Returns the alternate render target for the given compute variable.

#### Parameters

##### variable

`any`

The compute variable.

#### Returns

`WebGLRenderTarget`

The alternate render target.

***

### getCurrentRenderTarget()

> **getCurrentRenderTarget**: (`variable`) => `WebGLRenderTarget`

Defined in: [three/addons/misc/GPUComputationRenderer.js:297](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L297)

Returns the current render target for the given compute variable.

#### Parameters

##### variable

`any`

The compute variable.

#### Returns

`WebGLRenderTarget`

The current render target.

***

### init

> **init**: *typeof* `__function`

Defined in: [three/addons/misc/GPUComputationRenderer.js:187](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L187)

Initializes the renderer.

#### Returns

Returns `null` if no errors are detected. Otherwise returns the error message.

***

### renderTexture()

> **renderTexture**: (`input`, `output`) => `void`

Defined in: [three/addons/misc/GPUComputationRenderer.js:435](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L435)

Renders the given texture into the given render target.

#### Parameters

##### input

`Texture`

The input.

##### output

`WebGLRenderTarget`

The output.

#### Returns

`void`

***

### setDataType()

> **setDataType**: (`type`) => `GPUComputationRenderer`

Defined in: [three/addons/misc/GPUComputationRenderer.js:133](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L133)

Sets the data type of the internal textures.

#### Parameters

##### type

`any`

The type to set.

#### Returns

`GPUComputationRenderer`

A reference to this renderer.

***

### setVariableDependencies()

> **setVariableDependencies**: (`variable`, `dependencies`) => `void`

Defined in: [three/addons/misc/GPUComputationRenderer.js:176](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L176)

Sets variable dependencies.

#### Parameters

##### variable

`any`

The compute variable.

##### dependencies

`any`[]

Other compute variables that represents the dependencies.

#### Returns

`void`

***

### variables

> **variables**: `any`[]

Defined in: [three/addons/misc/GPUComputationRenderer.js:113](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/misc/GPUComputationRenderer.js#L113)

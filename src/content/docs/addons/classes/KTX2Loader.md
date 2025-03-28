---
editUrl: false
next: false
prev: false
title: "KTX2Loader"
---

Defined in: [three/addons/loaders/KTX2Loader.js:94](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L94)

A loader for KTX 2.0 GPU Texture containers.

KTX 2.0 is a container format for various GPU texture formats. The loader supports Basis Universal GPU textures,
which can be quickly transcoded to a wide variety of GPU texture compression formats. While KTX 2.0 also allows
other hardware-specific formats, this loader does not yet parse them.

This loader parses the KTX 2.0 container and transcodes to a supported GPU compressed texture format.
The required WASM transcoder and JS wrapper are available from the `examples/jsm/libs/basis` directory.

This loader relies on Web Assembly which is not supported in older browsers.

References:
- [KTX specification][http://github.khronos.org/KTX-Specification/](http://github.khronos.org/KTX-Specification/)
- [DFD][https://www.khronos.org/registry/DataFormat/specs/1.3/dataformat.1.3.html#basicdescriptor](https://www.khronos.org/registry/DataFormat/specs/1.3/dataformat.1.3.html#basicdescriptor)
- [BasisU HDR][https://github.com/BinomialLLC/basis\_universal/wiki/UASTC-HDR-Texture-Specification-v1.0](https://github.com/BinomialLLC/basis_universal/wiki/UASTC-HDR-Texture-Specification-v1.0)

```js
const loader = new KTX2Loader();
loader.setTranscoderPath( 'examples/jsm/libs/basis/' );
loader.detectSupport( renderer );
const texture = loader.loadAsync( 'diffuse.ktx2' );
```

## Extends

- `unknown`

## Constructors

### Constructor

> **new KTX2Loader**(`manager`?): `KTX2Loader`

Defined in: [three/addons/loaders/KTX2Loader.js:101](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L101)

Constructs a new KTX2 loader.

#### Parameters

##### manager?

`LoadingManager`

The loading manager.

#### Returns

`KTX2Loader`

#### Overrides

`Loader.constructor`

## Properties

### transcoderBinary

> **transcoderBinary**: `any`

Defined in: [three/addons/loaders/KTX2Loader.js:106](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L106)

***

### transcoderPath

> **transcoderPath**: `string`

Defined in: [three/addons/loaders/KTX2Loader.js:105](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L105)

***

### transcoderPending

> **transcoderPending**: `Promise`\<`void`\>

Defined in: [three/addons/loaders/KTX2Loader.js:107](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L107)

***

### workerConfig

> **workerConfig**: \{ `astcHDRSupported`: `boolean`; `astcSupported`: `any`; `bptcSupported`: `any`; `dxtSupported`: `any`; `etc1Supported`: `any`; `etc2Supported`: `any`; `pvrtcSupported`: `any`; \} \| \{ `astcHDRSupported`: `boolean`; `astcSupported`: `any`; `bptcSupported`: `any`; `dxtSupported`: `any`; `etc1Supported`: `any`; `etc2Supported`: `any`; `pvrtcSupported`: `any`; \} \| \{ `astcHDRSupported`: `any`; `astcSupported`: `any`; `bptcSupported`: `any`; `dxtSupported`: `any`; `etc1Supported`: `any`; `etc2Supported`: `any`; `pvrtcSupported`: `any`; \}

Defined in: [three/addons/loaders/KTX2Loader.js:111](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L111)

***

### workerPool

> **workerPool**: [`WorkerPool`](/addons/classes/workerpool/)

Defined in: [three/addons/loaders/KTX2Loader.js:109](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L109)

***

### workerSourceURL

> **workerSourceURL**: `string`

Defined in: [three/addons/loaders/KTX2Loader.js:110](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L110)

***

### BasisFormat

> `static` **BasisFormat**: `object`

Defined in: [three/addons/loaders/KTX2Loader.js:451](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L451)

#### ETC1S

> **ETC1S**: `number` = `0`

#### UASTC

> **UASTC**: `number` = `1`

#### UASTC\_HDR

> **UASTC\_HDR**: `number` = `2`

***

### EngineFormat

> `static` **EngineFormat**: `object`

Defined in: [three/addons/loaders/KTX2Loader.js:481](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L481)

#### RGB\_BPTC\_UNSIGNED\_Format

> **RGB\_BPTC\_UNSIGNED\_Format**: `any`

#### RGB\_ETC1\_Format

> **RGB\_ETC1\_Format**: `any`

#### RGB\_ETC2\_Format

> **RGB\_ETC2\_Format**: `any`

#### RGB\_PVRTC\_4BPPV1\_Format

> **RGB\_PVRTC\_4BPPV1\_Format**: `any`

#### RGBA\_ASTC\_4x4\_Format

> **RGBA\_ASTC\_4x4\_Format**: `any`

#### RGBA\_BPTC\_Format

> **RGBA\_BPTC\_Format**: `any`

#### RGBA\_ETC2\_EAC\_Format

> **RGBA\_ETC2\_EAC\_Format**: `any`

#### RGBA\_PVRTC\_4BPPV1\_Format

> **RGBA\_PVRTC\_4BPPV1\_Format**: `any`

#### RGBA\_S3TC\_DXT1\_Format

> **RGBA\_S3TC\_DXT1\_Format**: `any`

#### RGBA\_S3TC\_DXT5\_Format

> **RGBA\_S3TC\_DXT5\_Format**: `any`

#### RGBAFormat

> **RGBAFormat**: `any`

***

### EngineType

> `static` **EngineType**: `object`

Defined in: [three/addons/loaders/KTX2Loader.js:495](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L495)

#### FloatType

> **FloatType**: `any`

#### HalfFloatType

> **HalfFloatType**: `any`

#### UnsignedByteType

> **UnsignedByteType**: `any`

***

### TranscoderFormat

> `static` **TranscoderFormat**: `object`

Defined in: [three/addons/loaders/KTX2Loader.js:458](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L458)

#### ASTC\_4x4

> **ASTC\_4x4**: `number` = `10`

#### ATC\_RGB

> **ATC\_RGB**: `number` = `11`

#### ATC\_RGBA\_INTERPOLATED\_ALPHA

> **ATC\_RGBA\_INTERPOLATED\_ALPHA**: `number` = `12`

#### BC1

> **BC1**: `number` = `2`

#### BC3

> **BC3**: `number` = `3`

#### BC4

> **BC4**: `number` = `4`

#### BC5

> **BC5**: `number` = `5`

#### BC6H

> **BC6H**: `number` = `22`

#### BC7\_M5

> **BC7\_M5**: `number` = `7`

#### BC7\_M6\_OPAQUE\_ONLY

> **BC7\_M6\_OPAQUE\_ONLY**: `number` = `6`

#### BGR565

> **BGR565**: `number` = `15`

#### ETC1

> **ETC1**: `number` = `0`

#### ETC2

> **ETC2**: `number` = `1`

#### PVRTC1\_4\_RGB

> **PVRTC1\_4\_RGB**: `number` = `8`

#### PVRTC1\_4\_RGBA

> **PVRTC1\_4\_RGBA**: `number` = `9`

#### RGB\_HALF

> **RGB\_HALF**: `number` = `24`

#### RGB565

> **RGB565**: `number` = `14`

#### RGBA\_HALF

> **RGBA\_HALF**: `number` = `25`

#### RGBA32

> **RGBA32**: `number` = `13`

#### RGBA4444

> **RGBA4444**: `number` = `16`

## Methods

### \_createTextureFrom()

> **\_createTextureFrom**(`transcodeResult`, `container`): `any`

Defined in: [three/addons/loaders/KTX2Loader.js:356](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L356)

#### Parameters

##### transcodeResult

`any`

##### container

`any`

#### Returns

`any`

***

### detectSupport()

> **detectSupport**(`renderer`): `KTX2Loader`

Defined in: [three/addons/loaders/KTX2Loader.js:187](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L187)

Detects hardware support for available compressed texture formats, to determine
the output format for the transcoder. Must be called before loading a texture.

#### Parameters

##### renderer

`any`

The renderer.

#### Returns

`KTX2Loader`

A reference to this loader.

***

### detectSupportAsync()

> **detectSupportAsync**(`renderer`): `Promise`\<`any`\>

Defined in: [three/addons/loaders/KTX2Loader.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L164)

Async version of [KTX2Loader#detectSupport](/addons/classes/ktx2loader/#detectsupport).

#### Parameters

##### renderer

`any`

The renderer.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the support has been detected.

#### Async

***

### dispose()

> **dispose**(): `void`

Defined in: [three/addons/loaders/KTX2Loader.js:437](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L437)

Frees internal resources. This method should be called
when the loader is no longer required.

#### Returns

`void`

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [three/addons/loaders/KTX2Loader.js:223](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L223)

#### Returns

`Promise`\<`void`\>

***

### load()

> **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

Defined in: [three/addons/loaders/KTX2Loader.js:303](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L303)

Starts loading from the given URL and passes the loaded KTX2 texture
to the `onLoad()` callback.

#### Parameters

##### url

`string`

The path/URL of the file to be loaded. This can also be a data URI.

##### onLoad

(`arg0`) => `any`

Executed when the loading process has been finished.

##### onProgress

`onProgressCallback`

Executed while the loading is in progress.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`void`

***

### parse()

> **parse**(`buffer`, `onLoad`, `onError`): `Promise`\<`any`\>

Defined in: [three/addons/loaders/KTX2Loader.js:332](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L332)

Parses the given KTX2 data.

#### Parameters

##### buffer

`ArrayBuffer`

The raw KTX2 data as an array buffer.

##### onLoad

(`arg0`) => `any`

Executed when the loading/parsing process has been finished.

##### onError

`onErrorCallback`

Executed when errors occur.

#### Returns

`Promise`\<`any`\>

A Promise that resolves when the parsing has been finished.

***

### setTranscoderPath()

> **setTranscoderPath**(`path`): `KTX2Loader`

Defined in: [three/addons/loaders/KTX2Loader.js:134](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L134)

Sets the transcoder path.

The WASM transcoder and JS wrapper are available from the `examples/jsm/libs/basis` directory.

#### Parameters

##### path

`string`

The transcoder path to set.

#### Returns

`KTX2Loader`

A reference to this loader.

***

### setWorkerLimit()

> **setWorkerLimit**(`workerLimit`): `KTX2Loader`

Defined in: [three/addons/loaders/KTX2Loader.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L148)

Sets the maximum number of Web Workers to be allocated by this instance.

#### Parameters

##### workerLimit

`number`

The worker limit.

#### Returns

`KTX2Loader`

A reference to this loader.

***

### BasisWorker()

> `static` **BasisWorker**(): `void`

Defined in: [three/addons/loaders/KTX2Loader.js:503](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/loaders/KTX2Loader.js#L503)

#### Returns

`void`

---
editUrl: false
next: false
prev: false
title: "AudioAnalyser"
---

Defined in: [three/src/audio/AudioAnalyser.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/AudioAnalyser.js#L28)

This class can be used to analyse audio data.

```js
// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create an Audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/ambient.ogg', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop(true);
	sound.setVolume(0.5);
	sound.play();
});

// create an AudioAnalyser, passing in the sound and desired fftSize
const analyser = new THREE.AudioAnalyser( sound, 32 );

// get the average frequency of the sound
const data = analyser.getAverageFrequency();
```

## Constructors

### Constructor

> **new AudioAnalyser**(`audio`, `fftSize`?): `AudioAnalyser`

Defined in: [three/src/audio/AudioAnalyser.js:36](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/AudioAnalyser.js#L36)

Constructs a new audio analyzer.

#### Parameters

##### audio

(`src`?) => `HTMLAudioElement`

The audio to analyze.

##### fftSize?

`number` = `2048`

The window size in samples that is used when performing a Fast Fourier Transform (FFT) to get frequency domain data.

#### Returns

`AudioAnalyser`

## Properties

### analyser

> **analyser**: `AnalyserNode`

Defined in: [three/src/audio/AudioAnalyser.js:43](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/AudioAnalyser.js#L43)

The global audio listener.

***

### data

> **data**: `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [three/src/audio/AudioAnalyser.js:51](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/AudioAnalyser.js#L51)

Holds the analyzed data.

## Methods

### getAverageFrequency()

> **getAverageFrequency**(): `number`

Defined in: [three/src/audio/AudioAnalyser.js:80](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/AudioAnalyser.js#L80)

Returns the average of the frequencies returned by [AudioAnalyser#getFrequencyData](/reference/three/classes/audioanalyser/#getfrequencydata).

#### Returns

`number`

The average frequency.

***

### getFrequencyData()

> **getFrequencyData**(): `Uint8Array`\<`ArrayBufferLike`\>

Defined in: [three/src/audio/AudioAnalyser.js:67](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/audio/AudioAnalyser.js#L67)

Returns an array with frequency data of the audio.

Each item in the array represents the decibel value for a specific frequency.
The frequencies are spread linearly from 0 to 1/2 of the sample rate.
For example, for 48000 sample rate, the last item of the array will represent
the decibel value for 24000 Hz.

#### Returns

`Uint8Array`\<`ArrayBufferLike`\>

The frequency data.

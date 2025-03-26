---
editUrl: false
next: false
prev: false
title: "Uniform"
---

Defined in: [three/src/core/Uniform.js:14](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Uniform.js#L14)

Represents a uniform which is a global shader variable. They are passed to shader programs.

When declaring a uniform of a [ShaderMaterial](/reference/three/classes/shadermaterial/), it is declared by value or by object.
```js
uniforms: {
	time: { value: 1.0 },
	resolution: new Uniform( new Vector2() )
};
```
Since this class can only be used in context of [ShaderMaterial](/reference/three/classes/shadermaterial/), it is only supported
in [WebGLRenderer](/reference/three/classes/webglrenderer/).

## Constructors

### Constructor

> **new Uniform**(`value`): `Uniform`

Defined in: [three/src/core/Uniform.js:21](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Uniform.js#L21)

Constructs a new uniform.

#### Parameters

##### value

`any`

The uniform value.

#### Returns

`Uniform`

## Properties

### value

> **value**: `any`

Defined in: [three/src/core/Uniform.js:28](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Uniform.js#L28)

The uniform value.

## Methods

### clone()

> **clone**(): `Uniform`

Defined in: [three/src/core/Uniform.js:38](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/core/Uniform.js#L38)

Returns a new uniform with copied values from this instance.
If the value has a `clone()` method, the value is cloned as well.

#### Returns

`Uniform`

A clone of this instance.

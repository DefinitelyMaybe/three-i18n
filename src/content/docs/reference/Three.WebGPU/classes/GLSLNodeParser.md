---
editUrl: false
next: false
prev: false
title: "GLSLNodeParser"
---

Defined in: [three/src/nodes/parsers/GLSLNodeParser.js:9](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/parsers/GLSLNodeParser.js#L9)

A GLSL node parser.

## Extends

- `NodeParser`

## Constructors

### Constructor

> **new GLSLNodeParser**(): `GLSLNodeParser`

#### Returns

`GLSLNodeParser`

#### Inherited from

`NodeParser.constructor`

## Methods

### parseFunction()

> **parseFunction**(`source`): `GLSLNodeFunction`

Defined in: [three/src/nodes/parsers/GLSLNodeParser.js:17](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/parsers/GLSLNodeParser.js#L17)

The method parses the given GLSL code an returns a node function.

#### Parameters

##### source

`string`

The GLSL code.

#### Returns

`GLSLNodeFunction`

A node function.

#### Overrides

`NodeParser.parseFunction`

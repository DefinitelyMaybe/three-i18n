---
editUrl: false
next: false
prev: false
title: "getNodeChildren"
---

> **getNodeChildren**(`node`, `toJSON`?): `Generator`\<\{ `childNode`: `any`; `index`: `number`; `property`: `string`; \} \| \{ `childNode`: `any`; `index`: `undefined`; `property`: `string`; \} \| \{ `childNode`: `any`; `index`: `string`; `property`: `string`; \}, `void`, `unknown`\>

Defined in: [three/src/nodes/core/NodeUtils.js:114](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/src/nodes/core/NodeUtils.js#L114)

This generator function can be used to iterate over the node children
of the given object.

## Parameters

### node

`any`

The object to be hashed.

### toJSON?

`boolean` = `false`

Whether to return JSON or not.

## Returns

`Generator`\<\{ `childNode`: `any`; `index`: `number`; `property`: `string`; \} \| \{ `childNode`: `any`; `index`: `undefined`; `property`: `string`; \} \| \{ `childNode`: `any`; `index`: `string`; `property`: `string`; \}, `void`, `unknown`\>

## Generator

## Yields

A result node holding the property, index (if available) and the child node.

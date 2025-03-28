---
editUrl: false
next: false
prev: false
title: "SVGRenderer"
---

Defined in: [three/addons/renderers/SVGRenderer.js:69](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L69)

This renderer an be used to render geometric data using SVG. The produced vector
graphics are particular useful in the following use cases:

- Animated logos or icons.
- Interactive 2D/3D diagrams or graphs.
- Interactive maps.
- Complex or animated user interfaces.

`SVGRenderer` has various advantages. It produces crystal-clear and sharp output which
is independent of the actual viewport resolution.SVG elements can be styled via CSS.
And they have good accessibility since it's possible to add metadata like title or description
(useful for search engines or screen readers).

There are, however, some important limitations:
- No advanced shading.
- No texture support.
- No shadow support.

## Constructors

### Constructor

> **new SVGRenderer**(): `SVGRenderer`

Defined in: [three/addons/renderers/SVGRenderer.js:73](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L73)

Constructs a new SVG renderer.

#### Returns

`SVGRenderer`

## Properties

### autoClear

> **autoClear**: `boolean`

Defined in: [three/addons/renderers/SVGRenderer.js:123](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L123)

Whether to automatically perform a clear before a render call or not.

#### Default

```ts
true
```

***

### clear()

> **clear**: () => `void`

Defined in: [three/addons/renderers/SVGRenderer.js:264](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L264)

Performs a manual clear with the defined clear color.

#### Returns

`void`

***

### domElement

> **domElement**: `DOMElement`

Defined in: [three/addons/renderers/SVGRenderer.js:115](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L115)

The DOM where the renderer appends its child-elements.

***

### getSize()

> **getSize**: () => `object`

Defined in: [three/addons/renderers/SVGRenderer.js:233](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L233)

Returns an object containing the width and height of the renderer.

#### Returns

`object`

The size of the renderer.

##### height

> **height**: `number`

##### width

> **width**: `number`

***

### info

> **info**: `any`

Defined in: [three/addons/renderers/SVGRenderer.js:164](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L164)

Provides information about the number of
rendered vertices and faces.

***

### outputColorSpace

> **outputColorSpace**: `any`

Defined in: [three/addons/renderers/SVGRenderer.js:156](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L156)

The output color space.

#### Default

```ts
SRGBColorSpace
```

***

### overdraw

> **overdraw**: `number`

Defined in: [three/addons/renderers/SVGRenderer.js:148](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L148)

Number of fractional pixels to enlarge polygons in order to
prevent anti-aliasing gaps. Range is `[0,1]`.

#### Default

```ts
0.5
```

***

### render()

> **render**: (`scene`, `camera`) => `void`

Defined in: [three/addons/renderers/SVGRenderer.js:275](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L275)

Renders the given scene using the given camera.

#### Parameters

##### scene

`Object3D`

A scene or any other type of 3D object.

##### camera

`Camera`

The camera.

#### Returns

`void`

***

### setClearColor()

> **setClearColor**: (`color`) => `void`

Defined in: [three/addons/renderers/SVGRenderer.js:193](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L193)

Sets the clear color.

#### Parameters

##### color

`any`

The clear color to set.

#### Returns

`void`

***

### setPixelRatio()

> **setPixelRatio**: () => `void`

Defined in: [three/addons/renderers/SVGRenderer.js:197](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L197)

#### Returns

`void`

***

### setPrecision()

> **setPrecision**: (`precision`) => `void`

Defined in: [three/addons/renderers/SVGRenderer.js:245](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L245)

Sets the precision of the data used to create a paths.

#### Parameters

##### precision

`number`

The precision to set.

#### Returns

`void`

***

### setQuality()

> **setQuality**: (`quality`) => `void`

Defined in: [three/addons/renderers/SVGRenderer.js:177](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L177)

Sets the render quality. Setting to `high` means This value indicates that the browser
tries to improve the SVG quality over rendering speed and geometric precision.

#### Parameters

##### quality

The quality.

`"high"` | `"low"`

#### Returns

`void`

***

### setSize()

> **setSize**: (`width`, `height`) => `void`

Defined in: [three/addons/renderers/SVGRenderer.js:205](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L205)

Resizes the renderer to the given width and height.

#### Parameters

##### width

`number`

The width of the renderer.

##### height

`number`

The height of the renderer.

#### Returns

`void`

***

### sortElements

> **sortElements**: `boolean`

Defined in: [three/addons/renderers/SVGRenderer.js:139](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L139)

Whether to sort elements or not.

#### Default

```ts
true
```

***

### sortObjects

> **sortObjects**: `boolean`

Defined in: [three/addons/renderers/SVGRenderer.js:131](https://github.com/DefinitelyMaybe/three-i18n/blob/fa57b79433d1c349ffb23a78727299c8d4190136/three/addons/renderers/SVGRenderer.js#L131)

Whether to sort 3D objects or not.

#### Default

```ts
true
```

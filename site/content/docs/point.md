---
title: Point
layout: Documentation
---

## `M(x, y)`

Creates a new `M` point.

### Arguments

1. `x` *number* The x coordinate of the point.
2. `y` *number* The y coordinate of the point.

### Returns

*Object* The created `M` point.

### Example

```js
// polynomic/lib/point/points

Polynomic.point.M(0, 0)

// ➜ {
//   code: "M",
//   x: 0,
//   y: 0,
//   parameters: {},
// }
```

---

## `L(x, y)`

Creates a new `L` point.

### Arguments

1. `x` *number* The x coordinate of the point.
2. `y` *number* The y coordinate of the point.

### Returns

*Object* The created `L` point.

### Example

```js
// polynomic/lib/point/points

Polynomic.point.L(100, 100)

// ➜ {
//   code: "L",
//   x: 100,
//   y: 100,
//   parameters: {},
// }
```

---

## `H(x, [prev])`

Creates a new `H` point.

### Arguments

1. `x` *number* The x coordinate of the point.
2. `[prev]` *Object* The previous point (to get the y coord).

### Returns

*Object* The created `H` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.M(0, 0)

Polynomic.point.H(100, prev)

// ➜ {
//   code: "H",
//   x: 100,
//   y: 0,
//   parameters: {},
// }
```

---

## `V(y, [prev])`

Creates a new `V` point.

### Arguments

1. `y` *number* The y coordinate of the point.
2. `[prev]` *Object* The previous point (to get the x coord).

### Returns

*Object* The created `V` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.M(0, 0)

Polynomic.point.V(100, prev)

// ➜ {
//   code: "V",
//   x: 0,
//   y: 100,
//   parameters: {},
// }
```

---

## `Q(x1, y1, x, y)`

Creates a new `Q` point.

### Arguments

1. `x1` *number* The x coordinate of the anchor.
2. `y1` *number* The y coordinate of the anchor.
3. `x` *number* The x coordinate of the point.
4. `y` *number* The y coordinate of the point.

### Returns

*Object* The created `Q` point.

### Example

```js
// polynomic/lib/point/points

Polynomic.point.Q(50, 50, 100, 100)

// ➜ {
//   code: "Q",
//   x: 100,
//   y: 100,
//   parameters: {
//     x1: 50,
//     y1: 50,
//   },
// }
```

---

## `T(x, y, [prev])`

Creates a new `T` point.

### Arguments

1. `x` *number* The x coordinate of the point.
2. `y` *number* The y coordinate of the point.
3. `[prev]` *Object* The previous point (to compute the anchor coords).

### Returns

*Object* The created `T` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.Q(50, 50, 100, 100)

Polynomic.point.T(200, 200, prev)

// ➜ {
//   code: "T",
//   x: 200,
//   y: 200,
//   parameters: {
//     x1: 150,
//     y1: 150,
//   },
// }
```

---

## `C(x1, y1, x2, y2, x, y)`

Creates a new `C` point.

### Arguments

1. `x1` *number* The x coordinate of the first anchor.
2. `y1` *number* The y coordinate of the first anchor.
3. `x2` *number* The x coordinate of the second anchor.
4. `y2` *number* The y coordinate of the second anchor.
5. `x` *number* The x coordinate of the point.
6. `y` *number* The y coordinate of the point.

### Returns

*Object* The created `C` point.

### Example

```js
// polynomic/lib/point/points

Polynomic.point.C(25, 25, 75, 75, 100, 100)

// ➜ {
//   code: "C",
//   x: 100,
//   y: 100,
//   parameters: {
//     x1: 25,
//     y1: 25,
//     x2: 75,
//     y2: 75,
//   },
// }
```

---

## `S(x2, y2, x, y, [prev])`

Creates a new `S` point.

### Arguments

1. `x2` *number* The x coordinate of the second anchor.
2. `y2` *number* The y coordinate of the second anchor.
3. `x` *number* The x coordinate of the point.
4. `y` *number* The y coordinate of the point.
5. `[prev]` *Object* The previous point (to compute the first anchor coords).

### Returns

*Object* The created `S` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.C(25, 25, 75, 75, 100, 100)

Polynomic.point.S(175, 175, 200, 200, prev)

// ➜ {
//   code: "S",
//   x: 200,
//   y: 200,
//   parameters: {
//     x1: 125,
//     y1: 125,
//     x2: 175,
//     y2: 175,
//   },
// }
```

---

## `A(rx, ry, rotation, large, sweep, x, y)`

Creates a new `A` point.

### Arguments

1. `rx` *number* The horizontal radius of the arc.
2. `ry` *number* The vertical radius of the arc.
3. `rotation` *number* The rotation of the arc.
4. `large` *number (0 | 1)* Use the large arc.
5. `sweep` *number (0 | 1)* Sweep the arc.
6. `x` *number* The x coordinate of the point.
7. `y` *number* The y coordinate of the point.

### Returns

*Object* The created `A` point.

### Example

```js
// polynomic/lib/point/points

Polynomic.point.A(50, 50, 0, 1, 1, 100, 0)

// ➜ {
//   code: "A",
//   x: 100,
//   y: 0,
//   parameters: {
//     rx: 50,
//     ry: 50,
//     rotation: 0,
//     large: 1,
//     sweep: 1,
//   },
// }
```

---

## `Z([related])`

Creates a new `Z` point.

### Arguments

1. `[related]` *Object* The point to be connected to close the path.

### Returns

*Object* The created `Z` point.

### Example

```js
// polynomic/lib/point/points

related = Polynomic.point.M(0, 0)

Polynomic.point.Z(related)

// ➜ {
//   code: "Z",
//   x: 0,
//   y: 0,
//   parameters: {},
// }
```

---

## `m(dx, dy, [prev])`

Creates a new relative `m` point.

### Arguments

1. `dx` *number* The relative x coordinate of the point.
2. `dy` *number* The relative y coordinate of the point.
3. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `m` point.

### Example

```js
// polynomic/lib/point/points

Polynomic.point.m(0, 0)

// ➜ {
//   code: "m",
//   x: 0,
//   y: 0,
//   parameters: {},
// }
```

---

## `l(dx, dy, [prev])`

Creates a new relative `l` point.

### Arguments

1. `dx` *number* The relative x coordinate of the point.
2. `dy` *number* The relative y coordinate of the point.
3. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `l` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.M(0, 0)

Polynomic.point.l(100, 100, prev)

// ➜ {
//   code: "l",
//   x: 100,
//   y: 100,
//   parameters: {},
// }
```

---

## `h(dx, [prev])`

Creates a new relative `h` point.

### Arguments

1. `dx` *number* The relative x coordinate of the point.
2. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `h` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.M(0, 0)

Polynomic.point.h(100, prev)

// ➜ {
//   code: "h",
//   x: 100,
//   y: 0,
//   parameters: {},
// }
```

---

## `v(dy, [prev])`

Creates a new relative `v` point.

### Arguments

1. `dy` *number* The relative y coordinate of the point.
2. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `v` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.M(0, 0)

Polynomic.point.v(100, prev)

// ➜ {
//   code: "v",
//   x: 0,
//   y: 100,
//   parameters: {},
// }
```

---

## `q(dx1, dy1, dx, dy, [prev])`

Creates a new relative `q` point.

### Arguments

1. `dx1` *number* The relative x coordinate of the anchor.
2. `dy1` *number* The relative y coordinate of the anchor.
3. `dx` *number* The relative x coordinate of the point.
4. `dy` *number* The relative y coordinate of the point.
5. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `q` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.M(0, 0)

Polynomic.point.q(50, 50, 100, 100, prev)

// ➜ {
//   code: "q",
//   x: 100,
//   y: 100,
//   parameters: {
//     x1: 50,
//     y1: 50,
//   },
// }
```

---

## `t(dx, dy, [prev])`

Creates a new relative `t` point.

### Arguments

1. `dx` *number* The relative x coordinate of the point.
2. `dy` *number* The relative y coordinate of the point.
3. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `t` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.Q(50, 50, 100, 100)

Polynomic.point.t(100, 100, prev)

// ➜ {
//   code: "t",
//   x: 200,
//   y: 200,
//   parameters: {
//     x1: 150,
//     y1: 150,
//   },
// }
```

---

## `c(dx1, dy1, dx2, dy2, dx, dy, [prev])`

Creates a new relative `c` point.

### Arguments

1. `dx1` *number* The relative x coordinate of the first anchor.
2. `dy1` *number* The relative y coordinate of the first anchor.
3. `dx2` *number* The relative x coordinate of the second anchor.
4. `dy2` *number* The relative y coordinate of the second anchor.
5. `dx` *number* The relative x coordinate of the point.
6. `dy` *number* The relative y coordinate of the point.
7. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `c` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.M(0, 0)

Polynomic.point.c(25, 25, 75, 75, 100, 100, prev)

// ➜ {
//   code: "c",
//   x: 100,
//   y: 100,
//   parameters: {
//     x1: 25,
//     y1: 25,
//     x2: 75,
//     y2: 75,
//   },
// }
```

---

## `s(dx2, dy2, dx, dy, [prev])`

Creates a new relative `s` point.

### Arguments

1. `dx2` *number* The relative x coordinate of the second anchor.
2. `dy2` *number* The relative y coordinate of the second anchor.
3. `dx` *number* The relative x coordinate of the point.
4. `dy` *number* The relative y coordinate of the point.
5. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `s` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.C(25, 25, 50, 50, 100, 100)

Polynomic.point.s(75, 75, 100, 100)

// ➜ {
//   code: "s",
//   x: 200,
//   y: 200,
//   parameters: {
//     x1: 150,
//     y1: 150,
//     x2: 175,
//     y2: 175,
//   },
// }
```

---

## `a(rx, ry, rotation, large, sweep, dx, dy, [prev])`

Creates a new relative `a` point.

### Arguments

1. `rx` *number* The horizontal radius of the arc.
2. `ry` *number* The vertical radius of the arc.
3. `rotation` *number* The rotation of the arc.
4. `large` *number (0 | 1)* Use the large arc.
5. `sweep` *number (0 | 1)* Sweep the arc.
6. `dx` *number* The relative x coordinate of the point.
7. `dy` *number* The relative y coordinate of the point.
8. `[prev]` *Object* The previous point (to compute absolute coords).

### Returns

*Object* The created `a` point.

### Example

```js
// polynomic/lib/point/points

prev = Polynomic.point.M(0, 0)

Polynomic.point.a(50, 50, 0, 1, 1, 100, 0)

// ➜ {
//   code: "a",
//   x: 100,
//   y: 0,
//   parameters: {
//     rx: 50,
//     ry: 50,
//     rotation: 0,
//     large: 1,
//     sweep: 1,
//   },
// }
```

---

## `z([related])`

Creates a new `z` point.

### Arguments

1. `[related]` *Object* The point to be connected to close the path.

### Returns

*Object* The created `z` point.

### Example

```js
// polynomic/lib/point/points

related = Polynomic.point.M(0, 0)

Polynomic.point.z(related)

// ➜ {
//   code: "z",
//   x: 0,
//   y: 0,
//   parameters: {},
// }
```

---

## `Point(code, x, y, [parameters = {}])`

Creates a new point with the provided parameters.

> Note: This function is a more generic representation of a SVG point. In most cases, you don't need it. Prefer to use the built-in functions described above.

### Arguments

1. `code` *string* The SVG code of the point.
2. `x` *number* The x coordinate of the point.
3. `y` *number* The y coordinate of the point.
4. `[parameters = {}]` *Object* The additional parameters of the point.

### Returns

*Object* The created point.

### Example

```js
// polynomic/lib/point/points

Polynomic.point.Point("C", 100, 100, {
  x1: 25,
  y1: 25,
  x2: 75,
  y2: 75,
})

// ➜ {
//   code: "C",
//   x: 100,
//   y: 100,
//   parameters: {
//     x1: 25,
//     y1: 25,
//     x2: 75,
//     y2: 75,
//   },
// }
```

---

## `isInside(point, path)`

Checks if a point is inside a given path.

### Arguments

1. `point` *Object* The point to check.
2. `path` *Array* The path where you want to check if the point is inside or not.

### Returns

*boolean* Returns `true` if the point is inside the point, else `false`.

### Example

```js
// polynomic/lib/point/is-inside

point = Polynomic.point.M(50, 50)
path = Polynomic.pathstring.parse("M0 0H100V100H0z")

Polynomic.point.isInside(point, path)

// ➜ true

point = Polynomic.point.M(200, 200)
path = Polynomic.pathstring.parse("M0 0H100V100H0z")

Polynomic.point.isInside(point, path)

// ➜ false
```

---

## `isRelative(point)`

Checks if a point is relative or not.

### Arguments

1. `point` *Object* The point to check.

### Returns

*boolean* Returns `true` if the point is relative, else `false`.

### Example

```js
// polynomic/lib/point/is-relative

relative = Polynomic.point.m(0, 0)

Polynomic.point.isRelative(relative)

// ➜ true

absolute = Polynomic.point.M(0, 0)

Polynomic.point.isRelative(absolute)

// ➜ false
```

---

## `toCubic(prev, point)`

Converts the given point into a `C` point.

### Arguments

1. `prev` *Object* The previous point.
2. `point` *Object* The point to convert.

### Returns

*Array | Object* The converted point. Returns an array if the given point is an arc.

### Example

```js
// polynomic/lib/point/to-cubic

prev = Polynomic.point.M(0, 0)
point = Polynomic.point.Q(60, 60, 120, 120)

Polynomic.point.toCubic(prev, point)

// ➜ {
//   code: "C",
//   x: 120,
//   y: 120,
//   parameters: {
//     x1: 40,
//     y1: 40,
//     x2: 80,
//     y2: 80,
//   },
// }
```

---

## `distance(p1, p2)`

Computes the distance between `p1` and `p2`.

### Arguments

1. `p1` *Object* The first point.
2. `p2` *Object* The second point.

### Returns

*number* The distance between the points.

### Example

```js
// polynomic/lib/point/distance

p1 = Polynomic.point.M(0, 0)
p2 = Polynomic.point.L(100, 100)

Polynomic.point.distance(p1, p2)

// ➜ 141.421356237
```

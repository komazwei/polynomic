import { assert } from "chai"
import { M } from "bernstein-core"
import distance, { distanceSegment } from "bernstein-point-distance"

describe("point-distance", function () {
  it("should give the distance between two points", function () {
    const test = distance(M(0, 0), M(0, 100))
    const expected = 100

    assert.strictEqual(test, expected)
  })

  it("should give the distance between a point and a segment", function () {
    const test = distanceSegment(M(100, 50), M(0, 0), M(0, 100))
    const expected = 100

    assert.strictEqual(test, expected)
  })
})

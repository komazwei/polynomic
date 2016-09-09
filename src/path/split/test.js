import { assert } from "chai"
import parse from "pathstring/parse"
import isEqual from "path/is-equal"
import split from "path/split"

describe("split-path", function () {
  it("should split the path in three subpaths", function () {
    const path = parse("M0 0L100 0L100 100zM100 100L200 100L200 200zM200 200L300 200L300 300")
    const test = split(path, "z")

    assert.isTrue(isEqual(test[0], "M0 0L100 0L100 100"))
    assert.isTrue(isEqual(test[1], "M100 100L200 100L200 200"))
    assert.isTrue(isEqual(test[2], "M200 200L300 200L300 300"))
  })
})
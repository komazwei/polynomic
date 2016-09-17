import { xmlns } from "../../constants"
import isEqual from "../is-equal"
import _from from "./index"

test("should get the corresponding path from the SVG path node", () => {
  const path = "M0 0L100 100"
  const node = document.createElementNS(xmlns, "path")

  node.setAttributeNS(xmlns, "d", path)

  const test = _from(node)
  const expected = path

  expect(isEqual(test, expected)).toBe(true)
})

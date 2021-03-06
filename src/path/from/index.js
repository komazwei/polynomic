import fromPath from "../from-path"
import fromLine from "../from-line"
import fromPolyline from "../from-polyline"
import fromPolygon from "../from-polygon"
import fromRect from "../from-rect"
import fromCircle from "../from-circle"
import fromEllipse from "../from-ellipse"

const parser = {
  path: fromPath,
  line: fromLine,
  polyline: fromPolyline,
  polygon: fromPolygon,
  rect: fromRect,
  circle: fromCircle,
  ellipse: fromEllipse,
}

export default function from(node) {
  const name = node.nodeName.toLowerCase()
  const fn = parser[name]

  if (typeof fn === "undefined") {
    throw new Error("The element you provided in the `from` function is not supported.")
  }

  return fn(node)
}

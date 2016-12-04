// @flow

import type { VectorT } from '../../types'

export function vec(
  v1 : number = 0,
  v2 : number = v1,
  v3 : number = v1,
  v4 : number = v1,
) : VectorT {
  return [v1, v2, v3, v4]
}

export function length(
  v : VectorT,
) : number {
  return Math.sqrt((v[0] ** 2) + (v[1] ** 2) + (v[2] ** 2))
}

export function dot(
  u : VectorT,
  v : VectorT,
) : number {
  return (u[0] * v[0]) + (u[1] * v[1]) + (u[2] * v[2])
}

export function cross(
  u : VectorT,
  v : VectorT,
) : VectorT {
  return vec(
    (u[1] * v[2]) - (u[2] * v[1]),
    (u[2] * v[0]) - (u[0] * v[2]),
    (u[0] * v[1]) - (u[1] * v[0]),
    1,
  )
}

export function angle(
  u : VectorT,
  v : VectorT,
) : number {
  const c : VectorT = cross(u, v)
  const sign : -1 | 1 = c[2] < 0 ? -1 : 1

  const _uv : number = dot(u, v)
  const _u : number = length(u)
  const _v : number = length(v)

  return sign * Math.acos(_uv / (_u * _v))
}

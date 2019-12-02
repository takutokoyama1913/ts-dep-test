import * as ramda from 'ramda'

export function div(x: number, y: number) {
  if (y === 0) {
    throw new Error('divide by zero')
  }

  return x / y
}

export function ramdaDiv(x: number, y: number) {
  return ramda.divide(x, y)
}

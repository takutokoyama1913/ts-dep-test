export function div(x: number, y: number) {
  if (y === 0) {
    throw new Error('divide by zero')
  }

  return x / y
}

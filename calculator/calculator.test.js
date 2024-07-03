import calculator from './calculator'

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3)
})

test('subtracts 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1)
})

test('multiplies 2 * 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6)
})

test('divides 6 / 3 to equal 2', () => {
  expect(calculator.divide(6, 3)).toBe(2)
})

test('divides 6 / 0 to equal Infinity', () => {
  expect(calculator.divide(6, 0)).toBe(Infinity)
})

test('divides 0 / 6 to equal 0', () => {
  expect(calculator.divide(0, 6)).toBe(0)
})

test('divides 0 / 0 to equal NaN', () => {
  expect(calculator.divide(0, 0)).toBe(NaN)
})

test('adds 0 + 0 to equal 0', () => {
  expect(calculator.add(0, 0)).toBe(0)
})

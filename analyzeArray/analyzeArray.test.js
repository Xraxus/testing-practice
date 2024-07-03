import analyzeArray from './analyzeArray'

test('Array with positive numbers', () => {
  const result1 = analyzeArray([1, 2, 3, 4])
  expect(result1).toEqual({ average: 2.5, min: 1, max: 4, length: 4 })
})

test('Array with negative numbers', () => {
  const result2 = analyzeArray([-1, -2, -3, -4])
  expect(result2).toEqual({ average: -2.5, min: -4, max: -1, length: 4 })
})

test('Array with positive and negative numbers', () => {
  const result3 = analyzeArray([-1, 2, -3, 4])
  expect(result3).toEqual({ average: 0.5, min: -3, max: 4, length: 4 })
})

test('Array with positive and negative numbers', () => {
  const result4 = analyzeArray([1, -2, 3, -4])
  expect(result4).toEqual({ average: -0.5, min: -4, max: 3, length: 4 })
})

test('Array with positive and negative numbers', () => {
  const result5 = analyzeArray([1, -2, -3, 4])
  expect(result5).toEqual({ average: 0, min: -3, max: 4, length: 4 })
})

test('Array with decimal numbers', () => {
  const result6 = analyzeArray([1.5, 2.7, 3.2, 4.9])
  expect(result6).toEqual({ average: 3.075, min: 1.5, max: 4.9, length: 4 })
})

test('Array with negative decimal numbers', () => {
  const result7 = analyzeArray([-1.5, -2.7, -3.2, -4.9])
  expect(result7).toEqual({ average: -3.075, min: -4.9, max: -1.5, length: 4 })
})

test('Array with zero values', () => {
  const result8 = analyzeArray([0, 0, 0, 0])
  expect(result8).toEqual({ average: 0, min: 0, max: 0, length: 4 })
})

test('Array with a single number', () => {
  const result9 = analyzeArray([10])
  expect(result9).toEqual({ average: 10, min: 10, max: 10, length: 1 })
})

test('Array with negative and positive zero values', () => {
  const result10 = analyzeArray([-0, 0])
  expect(result10).toEqual({ average: 0, min: -0, max: 0, length: 2 })
})

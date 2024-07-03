import caesarCipher from './caesarCipher'

test('hello to khoor with shift 3', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor')
})

test('hello to khoor with shift 29', () => {
  expect(caesarCipher('hello', 29)).toBe('khoor')
})

test('hello to khoor with shift 55', () => {
  expect(caesarCipher('hello', 55)).toBe('khoor')
})

test('HELLO to KHOOR with shift 3', () => {
  expect(caesarCipher('HELLO', 3)).toBe('KHOOR')
})

test('world to dvysk with shift 7', () => {
  expect(caesarCipher('world', 7)).toBe('dvysk')
})

test('xyz to abc with shift 3', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('GitHub to NpaObi with shift 7', () => {
  expect(caesarCipher('GitHub', 7)).toBe('NpaObi')
})

test('Testing to Docdsxq with shift 10', () => {
  expect(caesarCipher('Testing', 10)).toBe('Docdsxq')
})

test('Hello World to Mjqqt Btwqi with shift 5', () => {
  expect(caesarCipher('Hello World', 5)).toBe('Mjqqt Btwqi')
})

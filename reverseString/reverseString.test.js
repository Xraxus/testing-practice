import reverseString from './reverseString'

test('hello to olleh', () => expect(reverseString('hello')).toBe('olleh'))

test('world to dlrow', () => expect(reverseString('world')).toBe('dlrow'))

test('empty string to empty string', () => expect(reverseString('')).toBe(''))

test('a to a', () => expect(reverseString('a')).toBe('a'))

test('A to A', () => expect(reverseString('A')).toBe('A'))

test('1 to 1', () => expect(reverseString('1')).toBe('1'))

test('! to !', () => expect(reverseString('!')).toBe('!'))

test('hello world to dlrow olleh', () =>
  expect(reverseString('hello world')).toBe('dlrow olleh'))

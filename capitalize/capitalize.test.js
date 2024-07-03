import capitalize from './capitalize'

test('hello to Hello', () => expect(capitalize('hello')).toBe('Hello'))

test('world to World', () => expect(capitalize('world')).toBe('World'))

test('empty string to Empty string', () => expect(capitalize('')).toBe(''))

test('a to A', () => expect(capitalize('a')).toBe('A'))

test('A to A', () => expect(capitalize('A')).toBe('A'))

test('1 to 1', () => expect(capitalize('1')).toBe('1'))

test('! to !', () => expect(capitalize('!')).toBe('!'))

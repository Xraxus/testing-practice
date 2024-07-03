function caesarCipher(string, shift) {
  return string
    .split('')
    .map((char) => {
      if (char.match(/[a-zA-Z]/)) {
        const charCode = char.charCodeAt(0)
        const base = charCode > 90 ? 97 : 65
        return String.fromCharCode(((charCode - base + shift) % 26) + base)
      }
      return char
    })
    .join('')
}

export default caesarCipher

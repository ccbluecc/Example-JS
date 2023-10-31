const fruit = ['apple', 'mango', 'orange', 'pineapple']
const vowelCharacters = (vowel) =>
  vowel.toLowerCase().startsWith('a', 'e', 'i', 'o', 'u')
console.log(`fruit.some(isBelowThreshold): ${fruit.every(vowelCharacters)}`)

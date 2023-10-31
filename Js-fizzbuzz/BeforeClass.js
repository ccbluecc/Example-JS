// How to 1
function isImageFileExtension(filename) {
  if (filename === null || filename === undefined) return false
  const exc = filename.substring(filename.lastIndexOf('.'))
  if (
    exc === '.png' ||
    exc === '.jpg' ||
    exc === '.jpeg' ||
    exc === '.gif' ||
    exc === '.svg'
  )
    return true
  return false
}
console.log(isImageFileExtension('Hello.png'))

// How to 2
function isImageFile(filename) {
  if (filename === null || filename === undefined) return false
  return (
    filename.endsWith('.png') ||
    filename.endsWith('.jpg') ||
    filename.endsWith('.jpeg') ||
    filename.endsWith('.gif') ||
    filename.endsWith('.svg')
  )
}
// console.log(isImageFile('text.jpeg'))
// console.log(isImageFile('text.svg'))
// console.log(isImageFile(null))

function display(content) {
  const msg = `your message is ${content}`
  if (content == null || content == undefined) {
    const msg = `no message`
    return msg
  }
  return msg
}
module.exports = display

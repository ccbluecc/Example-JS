const keyword = ['destructuring', 'spread', 'length', 'rest', 'array', 'sort']
const mail = [
  {
    id: 6513050000,
    sender: {
      firstname: 'Umaporn',
      lastname: 'Juntraa'
    },
    subject: 'Welcome to hell'
  },
  {
    id: 6513050001,
    sender: {
      firstname: 'Sorayut',
      lastname: 'Jamjuree'
    },
    subject: 'Welcome to School'
  }
]
let firstChar = ''
keyword.forEach((keywords) => (firstChar += keywords.charAt(0)))
mail.forEach((mail) => console.log(mail))

console.log(firstChar)

const mailId = []
mail.forEach((mail) => mailId.push(mail.id))
console.log(mailId)

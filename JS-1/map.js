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
const map = mail.map((mail) => mail.sender.firstname)

const map1 = mail.map((mail) => ['logId-' + mail.id])
console.log(map)
console.log(map1)

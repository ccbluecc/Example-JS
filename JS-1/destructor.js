const mail = {
  sender: 'SIT, KMUTT',
  recipent: {
    firstname: 'Umaporn',
    lastname: 'Juntra'
  },
  title: 'Welcome to Hell',
  sentDetail: {
    sentDate: new Date(Date.now()),
    host: {
      name: 'sit@kmutt.acth'
    }
  }
}

let { recipent } = mail
let {
  recipent: { firstname, lastname }
} = mail
let {
  sentDetail: { sentDate }
} = mail
let {
  sentDetail: {
    host: { name: Name }
  }
} = mail
// console.log(recipent)
// console.log(header)
// console.log(sentDate)
console.log(firstname)
console.log(lastname)
console.log(Name)
console.log(sentDate)

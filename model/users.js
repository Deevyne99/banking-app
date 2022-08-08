// ROLES = {
//   user:'client',
//   staff:'staff',
//   isAdmin:true
// }

users = [
  {
    firstName: 'Kalu',
    lastName: 'Divine',
    email: 'kaludivine545@gmail.com',
    password: '$2b$10$WDojv/lBH6invq3uZQxGIulXq2v.Up8VTcYYWD7T4v5bBzG95DvYu',
    userId: 1658610979451,
    roles: {
      type: 'client',
    },
  },
  {
    firstName: 'kale',
    lastName: 'Eke',
    email: 'kalu@gmail.com',
    password: '$2b$10$Q1lk2/dLMUbs8buCHgk3ZecgUtjotp5C5kel.FVz4s31fn6/ndaJq',
    userId: 1658818824970,
    roles: {
      type: 'staff',
      isAdmin: false,
    },
  },
  {
    firstName: 'mark',
    lastName: 'Eke',
    email: 'mark@gmail.com',
    password: '$2b$10$bIAnl3RVtcQ3Fu4H6zsJmuN/dluZcsbBlTCKoxAX62XFOpfYhLPly',
    userId: 1659787240107,
    roles: {
      type: 'staff',
      isAdmin: true,
    },
  },
]

module.exports = users

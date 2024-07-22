import { password } from '../../src/database/config/database';
import { User, ProductId } from '../../src/services/userServices';

const users: User[] = [
    {
      username: "Hagar",
      productIds: [ {id: 1}, {id: 2} ]
    },
    {
      username: "Eddie",
      productIds: [ {id: 3}, {id: 4} ]
    },
    {
      username: "Helga",
      productIds: [ {id: 5} ]
    }
]

const userResponse = [
    {
      username: "Hagar",
      productIds: [ 1, 2 ]
    },
    {
      username: "Eddie",
      productIds: [ 3, 4 ]
    },
    {
      username: "Helga",
      productIds: [ 5 ]
    }
  ]

const userLogin = {
  id: 1,
  username: 'Hagar',
  password: '$2a$10$n2J4JBcaZ2/G.nc3/oVpWOEleBnY6Niw2YFp/SY8z5lH85EJa8dKu',
  vocation: 'guerreiro',
  level: 10,
}

const login = {
  username: "Hagar",
  password: "terrível"
}

const token = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJIYWdhciIsImlhdCI6MTcyMTY3MzI3OX0.i6Wras6ib8ZSV9S__kesQHpYSKg9rZiYCvFwQ4Csi0s"
}

export {
    users,
    userResponse,
    userLogin,
    login,
    token,
}
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

export {
    users,
    userResponse,
}
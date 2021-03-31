const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Card {
    _id: ID
    name: String
    email: String
    image: String
    grading: String
    holo: Boolean
    reverse: Boolean
    superRare: Boolean
    secretRare: Boolean
    promo: Boolean
    askingPrice: Float
    sold: Boolean
  }

  type User {
    _id: ID
    username: String
    email: String
    postedCards: [Card]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    cards(category: ID, name: String): [Card]
    card(_id: ID!): Card
    user(username: String!): User
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    addCard(name: String!, email: String!, image: String!, grading: String, holo: Boolean, reverse: Boolean, superRare: Boolean, secretRare: Boolean, promo: Boolean, askingPrice: Float!, sold: Boolean): Card
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;